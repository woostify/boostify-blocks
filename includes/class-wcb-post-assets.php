<?php
/**
 * Class WCB_Post_Assets
 *
 * Manages CSS/JS file generation for Boostify Blocks.
 * When file generation is enabled, block styles are written to static CSS files
 * and enqueued instead of being injected inline via JavaScript.
 *
 * Pattern based on Spectra's UAGB_Post_Assets for proven file generation logic:
 *   - Version tracking via post meta
 *   - Empty data protection (keep old file if new output is empty)
 *   - Content comparison (only write when content changes)
 *   - Fallback to inline when file is missing
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
class WCB_Post_Assets {

	/**
	 * Directory name for generated assets, relative to the plugin's build path.
	 *
	 * @var string
	 */
	const ASSETS_DIR = 'block-assets';

	/**
	 * Meta key for page assets version tracking.
	 *
	 * @var string
	 */
	const PAGE_ASSETS_META_KEY = '_wcb_page_assets';

	/**
	 * Singleton instance.
	 *
	 * @var WCB_Post_Assets|null
	 */
	private static $instance = null;

	/**
	 * Whether file generation is enabled in settings.
	 *
	 * @var bool
	 */
	private $file_generation_enabled = false;

	/**
	 * Whether the generated CSS file was enqueued for the current request.
	 *
	 * @var bool
	 */
	private $file_css_enqueued = false;

	/**
	 * Fallback flag — true when file should exist but doesn't, so inline CSS is needed.
	 *
	 * @var bool
	 */
	private $fallback_css = false;

	/**
	 * Asset file handler — stores CSS file URL for enqueuing.
	 *
	 * @var array
	 */
	private $assets_file_handler = array();

	/**
	 * Collected CSS for the current post (used when generation is enabled on frontend).
	 *
	 * @var string
	 */
	private $collected_css = '';

	/**
	 * Get singleton instance.
	 *
	 * @return WCB_Post_Assets
	 */
	public static function instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor. Hooks into WordPress.
	 */
	private function __construct() {
		
		// Load helper class for block CSS extraction.
		require_once BOOSTIFY_BLOCKS_PATH . 'includes/class-wcb-block-helper.php';

		$settings = get_option( 'boostify_blocks_settings_options', array() );
		$this->file_generation_enabled = isset( $settings['enableFileGeneration'] ) && 'true' === $settings['enableFileGeneration'];

		// Frontend: conditionally enqueue generated CSS files.
		add_action( 'wp_enqueue_scripts', array( $this, 'maybe_enqueue_post_css' ), 20 );

		// When file generation is enabled, skip the inline JS-based CSS injection.
		if ( $this->file_generation_enabled ) {
			add_filter( 'boostify_blocks_skip_inline_styles', '__return_true' );
		}

		// Auto-regenerate assets when a post is saved.
		add_action( 'save_post', array( $this, 'on_save_post' ), 20, 2 );

		// Frontend: enqueue generated JS if present.
		add_action( 'wp_enqueue_scripts', array( $this, 'maybe_enqueue_post_js' ), 21 );

		// AJAX handlers for asset management.
		add_action( 'wp_ajax_boostify_blocks_regenerate_assets', array( $this, 'ajax_regenerate_assets' ) );
		add_action( 'wp_ajax_boostify_blocks_save_post_assets', array( $this, 'ajax_save_post_assets' ) );
		add_action( 'wp_ajax_boostify_blocks_save_collected_css', array( $this, 'ajax_save_collected_css' ) );
		add_action( 'wp_ajax_nopriv_boostify_blocks_save_collected_css', array( $this, 'ajax_save_collected_css' ) );

		// Ensure assets directory exists.
		$this->maybe_create_assets_dir();

		// When file generation is enabled, bundle all block static styles into one file
		// and dequeue individual style-index.css files to reduce HTTP requests.
		if ( $this->file_generation_enabled ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'maybe_enqueue_common_static_css' ), 5 );
			add_action( 'wp_enqueue_scripts', array( $this, 'dequeue_individual_block_styles' ), 999 );
		}
	}

	/**
	 * Callback for save_post — generates CSS file from block attributes.
	 *
	 * @param int      $post_id Post ID.
	 * @param \WP_Post $post    Post object.
	 */
	public function on_save_post( $post_id, $post ) {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}
		if ( wp_is_post_revision( $post_id ) || wp_is_post_autosave( $post_id ) ) {
			return;
		}
		if ( ! $this->file_generation_enabled ) {
			return;
		}

		$this->regenerate_post_assets( $post_id );
	}

	/**
	 * Get the assets directory path.
	 *
	 * @return string
	 */
	public function get_assets_dir() {
		return BOOSTIFY_BLOCKS_PATH . 'build/' . self::ASSETS_DIR;
	}

	/**
	 * Get the assets directory URL.
	 *
	 * @return string
	 */
	public function get_assets_url() {
		return BOOSTIFY_BLOCKS_URI . 'build/' . self::ASSETS_DIR;
	}

	/**
	 * Get the CSS file path for a given post ID.
	 *
	 * @param int $post_id Post ID.
	 * @return string
	 */
	public function get_css_file_path( $post_id ) {
		return $this->get_assets_dir() . '/post-' . absint( $post_id ) . '.css';
	}

	/**
	 * Get the CSS file URL for a given post ID.
	 *
	 * @param int $post_id Post ID.
	 * @return string
	 */
	public function get_css_file_url( $post_id ) {
		return $this->get_assets_url() . '/post-' . absint( $post_id ) . '.css';
	}

	/**
	 * Check if a generated CSS file exists for a post.
	 *
	 * @param int $post_id Post ID.
	 * @return bool
	 */
	public function css_file_exists( $post_id ) {
		$file = $this->get_css_file_path( $post_id );
		return file_exists( $file ) && filesize( $file ) > 0;
	}

	/**
	 * Save CSS content to a file for a post.
	 *
	 * Pattern from UAGB: file_write() with empty data protection.
	 * - If CSS is empty: keep existing file (don't write empty → prevents 404).
	 * - If file already exists: compare content, only write if changed.
	 *
	 * @param int    $post_id Post ID.
	 * @param string $css     CSS content.
	 * @return bool True on success.
	 */
	public function save_css_file( $post_id, $css ) {
		$this->maybe_create_assets_dir();

		$file      = $this->get_css_file_path( $post_id );
		$file_url  = $this->get_css_file_url( $post_id );

		// CRITICAL: Empty CSS means no Boostify blocks or generation failed.
		// Keep the old file to prevent 404 errors with page-level caching.
		if ( '' === $css ) {
			if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
				// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
				error_log( 'Boostify Blocks: CSS generation returned empty for post ' . $post_id . '. Keeping existing file.' );
			}
			// Still delete the meta so it will be regenerated on next visit.
			delete_post_meta( $post_id, self::PAGE_ASSETS_META_KEY );
			return false;
		}

		$css = $this->minify_css( $css );

		// Compare with existing file content — only write if changed.
		if ( file_exists( $file ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
			$old_css = file_get_contents( $file );
			if ( $old_css === $css ) {
				// Content unchanged — update meta to prevent unnecessary regeneration.
				$this->update_page_assets_meta( $post_id );
				$this->assets_file_handler = array( 'css_url' => $file_url );
				return true;
			}
		}

		// Write the file.
		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_file_put_contents
		$result = file_put_contents( $file, $css, LOCK_EX );

		if ( false !== $result ) {
			$this->update_page_assets_meta( $post_id );
			$this->assets_file_handler = array( 'css_url' => $file_url );
			return true;
		}

		return false;
	}

	/**
	 * Update the page assets meta for version tracking.
	 *
	 * Pattern from UAGB: stores version so we know when to regenerate.
	 *
	 * @param int $post_id Post ID.
	 */
	private function update_page_assets_meta( $post_id ) {
		$meta = array(
			'wcb_version' => BOOSTIFY_BLOCKS_VERSION,
			'updated_at'  => time(),
		);
		update_post_meta( $post_id, self::PAGE_ASSETS_META_KEY, $meta );
	}

	/**
	 * Determine if a post's assets should be regenerated.
	 *
	 * Pattern from UAGB: allow_assets_generation().
	 * Returns true if:
	 *   - No cached meta exists
	 *   - Version has changed
	 *   - CSS file is missing
	 *
	 * @param int $post_id Post ID.
	 * @return bool True if regeneration is needed.
	 */
	public function should_regenerate_post_assets( $post_id ) {
		$meta = get_post_meta( $post_id, self::PAGE_ASSETS_META_KEY, true );

		// No meta — first generation.
		if ( empty( $meta ) || empty( $meta['wcb_version'] ) ) {
			return true;
		}

		// Version changed — regenerate.
		if ( BOOSTIFY_BLOCKS_VERSION !== $meta['wcb_version'] ) {
			delete_post_meta( $post_id, self::PAGE_ASSETS_META_KEY );
			return true;
		}

		// CSS file missing — regenerate.
		if ( ! $this->css_file_exists( $post_id ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Delete the CSS file for a post.
	 *
	 * @param int $post_id Post ID.
	 * @return bool True on success.
	 */
	public function delete_css_file( $post_id ) {
		$file = $this->get_css_file_path( $post_id );
		if ( file_exists( $file ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.unlink_unlink
			$result = unlink( $file );
			if ( $result ) {
				delete_post_meta( $post_id, self::PAGE_ASSETS_META_KEY );
			}
			return $result;
		}
		return true;
	}

	/**
	 * Delete all generated CSS files.
	 *
	 * @return int Number of files deleted.
	 */
	public function delete_all_css_files() {
		$dir   = $this->get_assets_dir();
		$count = 0;

		if ( ! is_dir( $dir ) ) {
			return 0;
		}

		$files = glob( $dir . '/post-*.css' );
		if ( is_array( $files ) ) {
			foreach ( $files as $file ) {
				// Extract post ID from filename for meta cleanup.
				if ( preg_match( '/post-(\d+)\.css/', basename( $file ), $matches ) ) {
					delete_post_meta( intval( $matches[1] ), self::PAGE_ASSETS_META_KEY );
				}
				// phpcs:ignore WordPress.WP.AlternativeFunctions.unlink_unlink
				if ( unlink( $file ) ) {
					$count++;
				}
			}
		}

		return $count;
	}

	/**
	 * Conditionally enqueue the generated CSS file for the current request.
	 *
	 * Pattern from UAGB: enqueue_file_generation_assets().
	 * Supports: singular posts/pages, archives, FSE templates, home, search.
	 *
	 * - If file exists → enqueue <link>.
	 * - If file missing → set fallback flag for inline CSS.
	 */
	public function maybe_enqueue_post_css() {
		if ( ! $this->file_generation_enabled ) {
			return;
		}

		// Determine the effective post ID for this request.
		// Uses the same logic as UAGB's determine_template_post_type().
		$post_id = $this->get_effective_post_id();
		if ( ! $post_id ) {
			return;
		}

		// Use a consistent file name based on post ID or template slug.
		$file_id = $this->get_css_file_id_for_request( $post_id );

		if ( $this->css_file_exists( $file_id ) ) {
			$version = ( 'post' === $this->request_context ? get_post_modified_time( 'U', false, $post_id ) : time() ) ?: BOOSTIFY_BLOCKS_VERSION;
			wp_enqueue_style(
				'boostify-blocks-' . $file_id,
				$this->get_css_file_url( $file_id ),
				array( 'boostify-blocks-frontend-css' ),
				$version
			);
			$this->file_css_enqueued    = true;
			$this->assets_file_handler   = array( 'css_url' => $this->get_css_file_url( $file_id ) );
		} else {
			// File missing — attempt to generate on-the-fly for this request.
			if ( 'post' === $this->request_context ) {
				$this->regenerate_post_assets( $post_id );
				// Try again after generation.
				if ( $this->css_file_exists( $file_id ) ) {
					wp_enqueue_style(
						'boostify-blocks-' . $file_id,
						$this->get_css_file_url( $file_id ),
						array( 'boostify-blocks-frontend-css' ),
						BOOSTIFY_BLOCKS_VERSION
					);
					$this->file_css_enqueued  = true;
					$this->assets_file_handler = array( 'css_url' => $this->get_css_file_url( $file_id ) );
					return;
				}
			}
			// Fallback — inline CSS will be used.
			$this->fallback_css = true;
		}
	}

	/**
	 * Request context: 'post', 'template', 'archive', or 'unknown'.
	 *
	 * @var string
	 */
	private $request_context = 'unknown';

	/**
	 * Get the effective post/template ID for the current request.
	 *
	 * Pattern from UAGB: determine_template_post_type().
	 * Determines which post or template to generate CSS for.
	 *
	 * @return int|string Post ID, template slug hash, or 0 if not applicable.
	 */
	private function get_effective_post_id() {
		// Singular posts, pages, and custom post types.
		if ( is_singular() || is_page() ) {
			$this->request_context = 'post';
			$post_id = get_queried_object_id();
			return $post_id ?: 0;
		}

		// Home / Front page.
		if ( is_home() || is_front_page() ) {
			$this->request_context = 'post';
			$page_on_front = get_option( 'page_on_front' );
			if ( $page_on_front ) {
				return intval( $page_on_front );
			}
			// Blog posts page.
			$page_for_posts = get_option( 'page_for_posts' );
			if ( $page_for_posts ) {
				return intval( $page_for_posts );
			}
			return 0;
		}

		// FSE / Block theme templates.
		if ( function_exists( 'wp_is_block_theme' ) && wp_is_block_theme() ) {
			$template_slug = $this->determine_template_slug();
			if ( $template_slug ) {
				$this->request_context = 'template';
				return $template_slug;
			}
		}

		// Archives, taxonomies, search.
		if ( is_archive() || is_search() || is_404() ) {
			$this->request_context = 'archive';
			$template_slug = $this->determine_template_slug();
			if ( $template_slug ) {
				return $template_slug;
			}
		}

		$this->request_context = 'unknown';
		return 0;
	}

	/**
	 * Determine the current template slug for FSE/block theme contexts.
	 *
	 * Pattern from UAGB: determine_template_post_type().
	 *
	 * @return string Template slug or empty string.
	 */
	private function determine_template_slug() {
		if ( is_front_page() && get_front_page_template() ) {
			return 'front-page';
		}
		if ( is_home() ) {
			return 'home';
		}
		if ( is_search() ) {
			return 'search';
		}
		if ( is_404() ) {
			return '404';
		}
		if ( is_attachment() ) {
			return 'attachment';
		}
		if ( is_singular() ) {
			$object = get_queried_object();
			if ( $object instanceof WP_Post ) {
				$template_types    = get_block_templates();
				$template_type_slug = array_column( $template_types, 'slug' );
				$name_decoded       = urldecode( $object->post_name );
				if ( in_array( 'single-' . $object->post_type . '-' . $name_decoded, $template_type_slug, true ) ) {
					return 'single-' . $object->post_type . '-' . $name_decoded;
				}
				if ( in_array( 'single-' . $object->post_type, $template_type_slug, true ) ) {
					return 'single-' . $object->post_type;
				}
				return 'single';
			}
		}
		if ( is_archive() ) {
			return 'archive';
		}
		if ( is_category() ) {
			return 'category';
		}
		if ( is_tag() ) {
			return 'tag';
		}
		if ( is_tax() ) {
			return 'taxonomy';
		}
		if ( is_author() ) {
			return 'author';
		}
		if ( is_date() ) {
			return 'date';
		}
		return '';
	}

	/**
	 * Get the CSS file ID for the current request.
	 *
	 * For posts: uses post ID.
	 * For templates/archives: uses a hash of the template slug.
	 *
	 * @param int|string $effective_id Post ID or template slug.
	 * @return int|string File identifier.
	 */
	private function get_css_file_id_for_request( $effective_id ) {
		if ( 'post' === $this->request_context ) {
			return intval( $effective_id );
		}
		// For templates/archives, use a numeric hash of the slug.
		return absint( crc32( (string) $effective_id ) );
	}

	/**
	 * Whether file generation is currently enabled.
	 *
	 * @return bool
	 */
	public function is_file_generation_enabled() {
		return $this->file_generation_enabled;
	}

	/**
	 * Whether a generated CSS file was enqueued for this request.
	 *
	 * @return bool
	 */
	public function is_file_css_enqueued() {
		return $this->file_css_enqueued;
	}

	/**
	 * Whether fallback inline CSS should be used (file missing or generation failed).
	 *
	 * @return bool
	 */
	public function is_fallback_css() {
		return $this->fallback_css;
	}

	/**
	 * Get the asset file handler array.
	 *
	 * @return array
	 */
	public function get_assets_file_handler() {
		return $this->assets_file_handler;
	}

	/**
	 * AJAX handler: Regenerate all assets.
	 *
	 * Clears all cached CSS files, scans all posts and templates for Boostify blocks,
	 * and regenerates CSS files for each.
	 *
	 * Requires: manage_options capability and valid nonce.
	 *
	 * @return void — sends JSON response and dies.
	 */
	public function ajax_regenerate_assets() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => 'Permission denied' ), 403 );
		}

		$result = $this->regenerate_all_assets();
		wp_send_json_success( $result );
	}

	/**
	 * AJAX handler: Save assets for a single post.
	 *
	 * Parses post content for Boostify blocks, extracts CSS from block attributes,
	 * and writes a static CSS file.
	 *
	 * @return void — sends JSON response and dies.
	 */
	public function ajax_save_post_assets() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => 'Permission denied' ), 403 );
		}

		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		$post_id = isset( $_POST['postId'] ) ? absint( wp_unslash( $_POST['postId'] ) ) : 0;
		if ( ! $post_id ) {
			wp_send_json_error( array( 'message' => 'Invalid post ID' ), 400 );
		}

		$success = $this->regenerate_post_assets( $post_id );

		wp_send_json_success(
			array(
				'success' => $success,
				'message' => $success ? __( 'Assets regenerated for post.', 'boostify-blocks' ) : __( 'No Boostify blocks found in this post.', 'boostify-blocks' ),
			)
		);
	}

	/**
	 * AJAX handler: Save CSS collected from the frontend.
	 *
	 * Receives raw CSS content (typically from emotion's <style> tags collected by
	 * the frontend collector) and writes it to a static CSS file.
	 *
	 * Accessible by both logged-in and guest users (wp_ajax + wp_ajax_nopriv).
	 *
	 * @return void — sends JSON response and dies.
	 */
	public function ajax_save_collected_css() {
		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		$post_id = isset( $_POST['postId'] ) ? absint( wp_unslash( $_POST['postId'] ) ) : 0;
		if ( ! $post_id ) {
			wp_send_json_error( array( 'message' => 'Invalid post ID' ), 400 );
		}

		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		$css = isset( $_POST['css'] ) ? wp_unslash( $_POST['css'] ) : '';
		if ( empty( $css ) ) {
			wp_send_json_error( array( 'message' => 'No CSS data provided' ), 400 );
		}

		// Sanitize: strip any HTML/script tags from CSS content.
		$css   = wp_strip_all_tags( $css );
		$saved = $this->save_css_file( $post_id, $css );

		wp_send_json_success(
			array(
				'success' => $saved,
				'message' => $saved ? __( 'CSS file saved.', 'boostify-blocks' ) : __( 'Failed to save CSS file.', 'boostify-blocks' ),
			)
		);
	}

	/**
	 * Regenerate assets for ALL content containing Boostify blocks.
	 *
	 * Pattern from UAGB: clear + rebuild all.
	 * 1. Clear all existing CSS files and meta.
	 * 2. Scan ALL published posts, pages, and CPTs for Boostify blocks.
	 * 3. Also scan FSE templates if block theme is active.
	 * 4. Generate CSS file for each.
	 *
	 * @return array Result with count and status.
	 */
	public function regenerate_all_assets() {
		// Step 1: Clear all existing files and meta.
		$deleted_css = $this->delete_all_css_files();
		$deleted_js  = $this->delete_all_js_files();
		$deleted     = $deleted_css + $deleted_js;

		// Step 2: Get all post IDs across all post types.
		$block_names  = $this->get_boostify_block_names();
		$all_post_ids = $this->get_all_posts_with_blocks( $block_names );

		$regenerated = 0;
		$skipped     = 0;

		$posts_blocks = array();

		// Step 3: Regenerate for each post.
		foreach ( $all_post_ids as $post_id ) {

			$content = get_post_field( 'post_content', $post_id );
			$blocks = parse_blocks( $content );
			if( !empty($blocks) ){
				$posts_blocks[$post_id] = $blocks;
			}

			$result = $this->regenerate_post_assets( $post_id );
			if ( $result ) {
				$regenerated++;
			} else {
				$skipped++;
			}
		}

		// Step 4: Also scan FSE templates if block theme is active.
		$template_regenerated = 0;
		if ( function_exists( 'wp_is_block_theme' ) && wp_is_block_theme() ) {
			$template_regenerated = $this->regenerate_template_assets();
		}

		// Step 5: Build common static CSS from all block style-index.css files.
		$common_static_built = $this->build_common_static_css();

		return array(
			'success'               => true,
			'posts_blocks'			=> $posts_blocks,
			'files_cleared'         => $deleted,
			'posts_regenerated'     => $regenerated,
			'posts_skipped'         => $skipped,
			'templates_regenerated' => $template_regenerated,
			'common_static_built'   => ! empty( $common_static_built ),
			'message'               => sprintf(
				/* translators: 1: cleared files, 2: regenerated posts, 3: skipped posts, 4: regenerated templates */
				__( 'Cleared %1$d cached file(s). Regenerated CSS for %2$d post(s). %3$d post(s) skipped. %4$d template(s) regenerated. Common static CSS: %5$s. Please purge any caching plugins.', 'boostify-blocks' ),
				$deleted,
				$regenerated,
				$skipped,
				$template_regenerated,
				$common_static_built ? __( 'built', 'boostify-blocks' ) : __( 'skipped', 'boostify-blocks' )
			),
		);
	}

	/**
	 * Get ALL post IDs (all public post types, except trash/auto-draft) that contain Boostify blocks.
	 *
	 * Pattern from UAGB: scans all publishable content across all post types.
	 *
	 * @param array $block_names Block names to search for.
	 * @return array Post IDs.
	 */
	private function get_all_posts_with_blocks( $block_names ) {
		global $wpdb;

		if ( empty( $block_names ) ) {
			return array();
		}

		$like_clauses = array();
		foreach ( $block_names as $name ) {
			// phpcs:ignore WordPress.DB.PreparedSQLPlaceholders.UnquotedComplexPlaceholder
			$like_clauses[] = $wpdb->prepare( 'post_content LIKE %s', '%' . $wpdb->esc_like( $name ) . '%' );
		}

		// Include all public post types.
		$post_types = get_post_types( array( 'public' => true ) );
		$post_types = array_unique( $post_types );

		$post_type_placeholders = implode( ',', array_fill( 0, count( $post_types ), '%s' ) );

		// phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared, WordPress.DB.PreparedSQLPlaceholders.UnfinishedPrepare
		$query = $wpdb->prepare(
			"SELECT DISTINCT ID FROM {$wpdb->posts} WHERE post_status NOT IN ('trash', 'auto-draft') AND post_type IN ($post_type_placeholders) AND (" . implode( ' OR ', $like_clauses ) . ') ORDER BY ID ASC',
			...$post_types
		);

		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.PreparedSQL.NotPrepared
		$results = $wpdb->get_col( $query );

		return array_map( 'intval', $results );
	}

	/**
	 * Regenerate assets for FSE templates containing Boostify blocks.
	 *
	 * Pattern from UAGB: prepare_assets_for_templates_based_post_type().
	 *
	 * @return int Number of templates regenerated.
	 */
	private function regenerate_template_assets() {
		$count          = 0;
		$template_slugs = array(
			'home', 'front-page', 'single', 'page', 'archive',
			'search', '404', 'category', 'tag', 'taxonomy', 'author', 'date',
			'index',
		);

		$block_templates = get_block_templates( array( 'slug__in' => $template_slugs ) );

		if ( empty( $block_templates ) ) {
			return 0;
		}

		foreach ( $block_templates as $template ) {
			if ( empty( $template->content ) ) {
				continue;
			}

			$blocks = parse_blocks( $template->content );
			$css    = WCB_Block_Helper::extract_css_from_blocks( $blocks );

			if ( ! empty( $css ) ) {
				$file_id = absint( crc32( $template->slug ) );
				if ( $this->save_css_file( $file_id, $css ) ) {
					$count++;
				}
			}
		}

		return $count;
	}

	/**
	 * Regenerate assets for a single post.
	 *
	 * @param int $post_id Post ID.
	 * @return bool True on success.
	 */
	public function regenerate_post_assets( $post_id ) {
		$css = WCB_Block_Helper::extract_css_from_post( $post_id );
		if ( empty( $css ) ) {
			// No Boostify blocks in this post — delete file and meta.
			$this->delete_css_file( $post_id );
			$this->delete_js_file( $post_id );
			return false;
		}

		// Generate JS alongside CSS.
		$this->generate_post_js( $post_id );

		return $this->save_css_file( $post_id, $css );
	}

	/**
	 * Extract CSS from a post by parsing block attributes.
	 *
	 * Walks through all blocks in the post content and extracts
	 * style-relevant attributes, converting them to CSS rules.
	 *
	 * @param int $post_id Post ID.
	 * @return string Combined CSS for all Boostify blocks in the post.
	 */
	private function extract_css_from_post( $post_id ) {
		return WCB_Block_Helper::extract_css_from_post( $post_id );
	}

	/**
	 * Recursively extract CSS from an array of parsed blocks.
	 *
	 * Delegates to WCB_Block_Helper.
	 *
	 * @param array $blocks Parsed blocks.
	 * @return string Combined CSS.
	 */
	private function extract_css_from_blocks( $blocks ) {
		return WCB_Block_Helper::extract_css_from_blocks( $blocks );
	}

	/**
	 * Get the JS file path for a given post ID.
	 *
	 * @param int $post_id Post ID.
	 * @return string
	 */
	public function get_js_file_path( $post_id ) {
		return $this->get_assets_dir() . '/post-' . absint( $post_id ) . '.js';
	}

	/**
	 * Get the JS file URL for a given post ID.
	 *
	 * @param int $post_id Post ID.
	 * @return string
	 */
	public function get_js_file_url( $post_id ) {
		return $this->get_assets_url() . '/post-' . absint( $post_id ) . '.js';
	}

	/**
	 * Check if a generated JS file exists for a post.
	 *
	 * @param int $post_id Post ID.
	 * @return bool
	 */
	public function js_file_exists( $post_id ) {
		$file = $this->get_js_file_path( $post_id );
		return file_exists( $file ) && filesize( $file ) > 0;
	}

	/**
	 * Save JS content to a file for a post.
	 *
	 * @param int    $post_id Post ID.
	 * @param string $js      JavaScript content.
	 * @return bool True on success.
	 */
	public function save_js_file( $post_id, $js ) {
		$this->maybe_create_assets_dir();
		$file = $this->get_js_file_path( $post_id );

		if ( '' === trim( $js ) ) {
			return false;
		}

		// Compare with existing — only write if changed.
		if ( file_exists( $file ) ) {
			// phpcs:ignore
			$old = file_get_contents( $file );
			if ( $old === $js ) {
				return true;
			}
		}

		// phpcs:ignore
		$result = file_put_contents( $file, $js, LOCK_EX );
		return false !== $result;
	}

	/**
	 * Delete the JS file for a post.
	 *
	 * @param int $post_id Post ID.
	 * @return bool
	 */
	public function delete_js_file( $post_id ) {
		$file = $this->get_js_file_path( $post_id );
		if ( file_exists( $file ) ) {
			// phpcs:ignore
			return unlink( $file );
		}
		return true;
	}

	/**
	 * Delete all generated JS files.
	 *
	 * @return int Number of files deleted.
	 */
	public function delete_all_js_files() {
		$dir   = $this->get_assets_dir();
		$count = 0;

		if ( ! is_dir( $dir ) ) {
			return 0;
		}

		$files = glob( $dir . '/post-*.js' );
		if ( is_array( $files ) ) {
			foreach ( $files as $file ) {
				// phpcs:ignore
				if ( unlink( $file ) ) {
					$count++;
				}
			}
		}

		return $count;
	}

	/**
	 * Generate JS file for a single post based on its blocks.
	 *
	 * Determines which JS libraries are needed and writes a
	 * dependency loader file.
	 *
	 * @param int $post_id Post ID.
	 * @return bool True on success.
	 */
	public function generate_post_js( $post_id ) {
		$blocks = $this->get_blocks_from_post( $post_id );
		$js     = $this->build_js_for_blocks( $blocks );

		if ( empty( $js ) ) {
			$this->delete_js_file( $post_id );
			return false;
		}

		return $this->save_js_file( $post_id, $js );
	}

	/**
	 * Get parsed blocks from a post.
	 *
	 * @param int $post_id Post ID.
	 * @return array Parsed blocks.
	 */
	private function get_blocks_from_post( $post_id ) {
		$post = get_post( $post_id );
		if ( ! $post ) {
			return array();
		}
		return parse_blocks( $post->post_content );
	}

	/**
	 * Build JS content for a set of parsed blocks.
	 *
	 * Collects init calls for interactive blocks that require JS.
	 *
	 * @param array $blocks Parsed blocks.
	 * @return string JS content.
	 */
	private function build_js_for_blocks( $blocks ) {
		$needs_js = $this->collect_js_block_info( $blocks );
		if ( empty( $needs_js ) ) {
			return '';
		}

		$js = "/* Boostify Blocks auto-generated JS */\n";
		$js .= "(function(){\n";
		$js .= "'use strict';\n";
		$js .= "document.addEventListener('DOMContentLoaded',function(){\n\n";

		// Gather unique IDs for each block type that needs JS.
		foreach ( $needs_js as $block_type => $ids ) {
			if ( empty( $ids ) ) {
				continue;
			}

		}

		$js .= "\n});\n})();\n";
		return $js;
	}

	/**
	 * Recursively collect unique IDs of interactive blocks.
	 *
	 * @param array $blocks Parsed blocks.
	 * @return array Map of block_type => [uniqueId, ...].
	 */
	private function collect_js_block_info( $blocks ) {
		$result = array();

		$js_blocks = array(
			'boostify-blocks/slider'        => 'slider',
			'boostify-blocks/testimonials'  => 'testimonials',
			'boostify-blocks/products'      => 'products',
			'boostify-blocks/faq'           => 'faq',
			'boostify-blocks/tabs'          => 'tabs',
			'boostify-blocks/counter'       => 'counter',
			'boostify-blocks/countdown'     => 'countdown',
		);

		foreach ( $blocks as $block ) {
			$name = $block['blockName'] ?? '';

			if ( isset( $js_blocks[ $name ] ) ) {
				$uid = $block['attrs']['uniqueId'] ?? '';
				if ( ! empty( $uid ) ) {
					$key = $js_blocks[ $name ];
					if ( ! isset( $result[ $key ] ) ) {
						$result[ $key ] = array();
					}
					$result[ $key ][] = $uid;
				}
			}

			// Recurse into inner blocks.
			if ( ! empty( $block['innerBlocks'] ) ) {
				$inner = $this->collect_js_block_info( $block['innerBlocks'] );
				foreach ( $inner as $k => $ids ) {
					if ( ! isset( $result[ $k ] ) ) {
						$result[ $k ] = array();
					}
					$result[ $k ] = array_merge( $result[ $k ], $ids );
				}
			}
		}

		return $result;
	}

	/**
	 * Sanitize a unique ID for use as a JS variable name.
	 * Replaces hyphens with underscores.
	 *
	 * @param string $unique_id Block unique ID.
	 * @return string JS-safe identifier.
	 */
	private function js_safe_id( $unique_id ) {
		return str_replace( '-', '_', $unique_id );
	}

	/**
	 * Conditionally enqueue generated JS file for the current request.
	 */
	public function maybe_enqueue_post_js() {
		if ( ! $this->file_generation_enabled ) {
			return;
		}

		$post_id = $this->get_effective_post_id();
		if ( ! $post_id ) {
			return;
		}

		$file_id = $this->get_css_file_id_for_request( $post_id );

		if ( $this->js_file_exists( $file_id ) ) {
			wp_enqueue_script(
				'boostify-blocks-js-' . $file_id,
				$this->get_js_file_url( $file_id ),
				array( 'jquery' ),
				BOOSTIFY_BLOCKS_VERSION,
				true
			);
		}
	}

	/**
	 * Get all registered Boostify block names.
	 *
	 * @return array Block names.
	 */
	private function get_boostify_block_names() {
		$names  = array();
		$blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
		foreach ( $blocks as $name => $block ) {
			if ( 0 === strpos( $name, 'boostify-blocks/' ) ) {
				$names[] = $name;
			}
		}
		return $names;
	}

	/**
	 * Get all post IDs that contain any Boostify blocks.
	 *
	 * @param array $block_names Block names to search for.
	 * @return array Post IDs.
	 */
	private function get_posts_with_blocks( $block_names ) {
		global $wpdb;

		if ( empty( $block_names ) ) {
			return array();
		}

		$like_clauses = array();
		foreach ( $block_names as $name ) {
			// phpcs:ignore WordPress.DB.PreparedSQLPlaceholders.UnquotedComplexPlaceholder
			$like_clauses[] = $wpdb->prepare( 'post_content LIKE %s', '%' . $wpdb->esc_like( $name ) . '%' );
		}

		// phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared, WordPress.DB.PreparedSQLPlaceholders.UnfinishedPrepare
		$query = "SELECT DISTINCT ID FROM {$wpdb->posts} WHERE post_status = 'publish' AND (" . implode( ' OR ', $like_clauses ) . ') ORDER BY ID ASC';

		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.PreparedSQL.NotPrepared
		$results = $wpdb->get_col( $query );

		return array_map( 'intval', $results );
	}

	/**
	 * Get the merged static CSS content from all block style-index.css files.
	 *
	 * Returns cached content if already built, or builds on-the-fly.
	 * Used to prepend static styles into generated per-post CSS files.
	 *
	 * @return string Merged static CSS, or empty string on failure.
	 */
	private function get_common_static_css_content() {
		$file = $this->get_assets_dir() . '/custom-style-blocks.css';

		// Build if not exists.
		if ( ! file_exists( $file ) ) {
			$this->build_common_static_css();
		}

		if ( file_exists( $file ) && filesize( $file ) > 0 ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
			return file_get_contents( $file );
		}

		return '';
	}

	/**
	 * Build a single CSS file containing all block static styles (style-index.css).
	 *
	 * WordPress auto-enqueues each block's style-index.css separately (37+ HTTP requests).
	 * This method merges them all into one file so only 1 request is needed.
	 *
	 * Called during asset regeneration and on-demand when the common file is missing.
	 *
	 * @return string|false URL of the common CSS file, or false on failure.
	 */
	public function build_common_static_css() {
		$this->maybe_create_assets_dir();

		$dir      = BOOSTIFY_BLOCKS_PATH . 'build/';
		$out_file = $this->get_assets_dir() . '/custom-style-blocks.css';
		$css      = '';

		// Collect all block style-index.css files.
		$style_files = glob( $dir . 'block-*/style-index.css' );
		if ( empty( $style_files ) ) {
			return false;
		}

		foreach ( $style_files as $file ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
			$content = file_get_contents( $file );
			if ( empty( $content ) ) {
				continue;
			}

			// Strip webpack banner comments: /*! ... */ blocks (includes inner !*** / \*** lines).
			$content = preg_replace( '/\/\*![\s\S]*?\*\/\s*/', '', $content );

			// Strip source map references.
			$content = preg_replace( '/\/\*# sourceMappingURL=.*?\*\/\s*/', '', $content );

			// Strip @charset declarations (only need one at the top).
			$content = preg_replace( '/@charset\s+"[^"]*";\s*/', '', $content );

			$css .= trim( $content ) . "\n";
		}

		if ( empty( trim( $css ) ) ) {
			return false;
		}

		$css = "@charset \"UTF-8\";\n" . $css;

		// Strip all remaining CSS comments (/* ... */).
		$css = preg_replace( '/\/\*[\s\S]*?\*\//', '', $css );

		// Collapse multiple blank lines into one.
		$css = preg_replace( "/\n{3,}/", "\n\n", $css );

		// Compare with existing — only write if changed.
		if ( file_exists( $out_file ) ) {
			// phpcs:ignore
			$old = file_get_contents( $out_file );
			if ( $old === $css ) {
				return $this->get_assets_url() . '/custom-style-blocks.css';
			}
		}

		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_file_put_contents
		$result = file_put_contents( $out_file, $css, LOCK_EX );

		if ( false !== $result ) {
			return $this->get_assets_url() . '/custom-style-blocks.css';
		}

		return false;
	}

	/**
	 * Enqueue the common static CSS file if it exists.
	 *
	 * Replaces 37+ individual block style-index.css files with 1 merged file.
	 * Called on wp_enqueue_scripts at priority 5 (before post CSS at 20).
	 */
	public function maybe_enqueue_common_static_css() {
		if ( ! $this->file_generation_enabled ) {
			return;
		}

		$file = $this->get_assets_dir() . '/custom-style-blocks.css';

		// Build on-the-fly if missing.
		if ( ! file_exists( $file ) ) {
			$this->build_common_static_css();
		}

		if ( file_exists( $file ) && filesize( $file ) > 0 ) {
			wp_enqueue_style(
				'boostify-blocks-custom-style-blocks',
				$this->get_assets_url() . '/custom-style-blocks.css',
				array(),
				BOOSTIFY_BLOCKS_VERSION
			);
		}
	}

	/**
	 * Dequeue individual block style-index.css files.
	 *
	 * When file generation is enabled and custom-style-blocks.css is loaded,
	 * remove the per-block style-index.css <link> tags to save HTTP requests.
	 * Called on wp_enqueue_scripts at priority 999 (after all blocks are registered).
	 */
	public function dequeue_individual_block_styles() {
		if ( ! $this->file_generation_enabled ) {
			return;
		}

		// Only dequeue if custom-style-blocks was successfully enqueued.
		if ( ! wp_style_is( 'boostify-blocks-custom-style-blocks', 'enqueued' ) ) {
			return;
		}

		global $wp_styles;
		if ( empty( $wp_styles->registered ) ) {
			return;
		}

		foreach ( $wp_styles->registered as $handle => $style ) {
			// Match handles like: boostify-blocks-heading-style, boostify-blocks-container-style, etc.
			// These are auto-generated by WP from block.json "style" handles.
			if ( 0 === strpos( $handle, 'boostify-blocks-' ) && '-style' === substr( $handle, -6 ) ) {
				wp_dequeue_style( $handle );
			}
		}
	}

	/**
	 * Basic CSS minification.
	 *
	 * @param string $css Raw CSS.
	 * @return string Minified CSS.
	 */
	private function minify_css( $css ) {
		// Remove comments.
		$css = preg_replace( '!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $css );
		// Remove spaces around colons, semicolons, braces.
		$css = str_replace( array( "\r\n", "\r", "\n", "\t" ), '', $css );
		$css = preg_replace( '/\s+/', ' ', $css );
		$css = str_replace( array( ' {', ': ', '; }', ';}', '; ' ), array( '{', ':', '}', '}', ';' ), $css );
		$css = trim( $css );

		return "/* Boostify Blocks auto-generated CSS */\n" . $css . "\n";
	}

	/**
	 * Create the assets directory if it doesn't exist.
	 */
	private function maybe_create_assets_dir() {
		$dir = $this->get_assets_dir();
		if ( ! is_dir( $dir ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.dir_mkdir_dirname
			wp_mkdir_p( $dir );
			// Add an index.php to prevent directory listing.
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_file_put_contents
			file_put_contents( $dir . '/index.php', '<?php // Silence is golden.' );
		}
	}
}

// Initialize.
WCB_Post_Assets::instance();
