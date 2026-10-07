<?php
/**
 * Class WCB_Assets_Generator
 *
 * Handles asset generation, CSS extraction from posts and blocks,
 * compilation of common static CSS, and JS dependency building.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class WCB_Assets_Generator {

	/**
	 * Meta key for page assets version tracking.
	 *
	 * @var string
	 */
	const PAGE_ASSETS_META_KEY = '_wcb_page_assets';

	/**
	 * Default cooldown time (in seconds) before re-attempting failed asset regeneration on front-end.
	 *
	 * @var int
	 */
	const REGENERATE_COOLDOWN = 3600;

	/**
	 * Storage instance.
	 *
	 * @var WCB_Assets_Storage
	 */
	protected $storage;

	/**
	 * Constructor.
	 *
	 * @param WCB_Assets_Storage $storage Storage handler.
	 */
	public function __construct( WCB_Assets_Storage $storage ) {
		$this->storage = $storage;

		// Load helper class for block CSS extraction.
		require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/class-wcb-block-helper.php';
	}

	/**
	 * Get storage handler.
	 *
	 * @return WCB_Assets_Storage
	 */
	public function get_storage() {
		return $this->storage;
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
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}
		if ( empty( $post->post_content ) ) {
			return;
		}

		$settings               = get_option( 'boostify_blocks_settings_options', array() );
		$file_generation_enabled = ! empty( $settings['enableFileGeneration'] ) && ( 'true' === $settings['enableFileGeneration'] || true === $settings['enableFileGeneration'] || '1' === (string) $settings['enableFileGeneration'] );

		if ( ! $file_generation_enabled ) {
			return;
		}

		// Check if post contains any Boostify blocks.
		if ( false === strpos( $post->post_content, '<!-- wp:boostify-blocks/' ) ) {
			$this->storage->delete_css_file( $post_id );
			$this->storage->delete_js_file( $post_id );
			delete_post_meta( $post_id, self::PAGE_ASSETS_META_KEY );
			return;
		}

		// Extract CSS from post content.
		$css = WCB_Block_Helper::extract_css_from_post( $post_id );

		if ( ! empty( $css ) ) {
			$saved = $this->storage->save_css_file( $post_id, $css );
			$this->update_page_assets_meta( $post_id, ! $saved );
		} else {
			$this->update_page_assets_meta( $post_id, true );
		}

		// Also generate JS if interactive blocks exist.
		$this->generate_post_js( $post_id );
	}

	/**
	 * Update page assets meta for version tracking.
	 *
	 * Pattern from UAGB: stores version and generation status so we know when to regenerate.
	 *
	 * @param int  $post_id           Post ID.
	 * @param bool $generation_failed Whether generation failed. Default false.
	 */
	public function update_page_assets_meta( $post_id, $generation_failed = false ) {
		$meta = array(
			'wcb_version'       => BOOSTIFY_BLOCKS_VERSION,
			'asset_version'     => WCB_Post_Assets::get_global_asset_version(),
			'updated_at'        => time(),
			'generation_failed' => (bool) $generation_failed,
			'last_attempt'      => time(),
		);
		update_post_meta( $post_id, self::PAGE_ASSETS_META_KEY, $meta );
	}

	/**
	 * Get the cooldown period in seconds for failed regeneration attempts.
	 *
	 * @param int $post_id Post ID.
	 * @return int Cooldown in seconds.
	 */
	public function get_regenerate_cooldown( $post_id = 0 ) {
		$settings = get_option( 'boostify_blocks_settings_options', array() );
		$cooldown = isset( $settings['asset_regenerate_cooldown'] ) && is_numeric( $settings['asset_regenerate_cooldown'] )
			? absint( $settings['asset_regenerate_cooldown'] )
			: self::REGENERATE_COOLDOWN;

		return (int) apply_filters( 'boostify_blocks_asset_regeneration_cooldown', $cooldown, $post_id );
	}

	/**
	 * Determine if on-the-fly regeneration should be attempted for a post.
	 *
	 * Blocks on-the-fly attempts when a recent attempt failed within the cooldown
	 * window on the current plugin version.
	 *
	 * @param int $post_id Post ID.
	 * @return bool True if regeneration should be attempted, false to skip.
	 */
	public function should_attempt_regeneration( $post_id ) {
		$meta = get_post_meta( $post_id, self::PAGE_ASSETS_META_KEY, true );

		if ( empty( $meta ) || ! is_array( $meta ) ) {
			return true;
		}

		// If version changed, always allow retry.
		if ( empty( $meta['wcb_version'] ) || BOOSTIFY_BLOCKS_VERSION !== $meta['wcb_version'] ) {
			return true;
		}

		// If global asset version changed, always allow retry.
		$global_ver = WCB_Post_Assets::get_global_asset_version();
		if ( ! empty( $meta['asset_version'] ) && $global_ver !== (string) $meta['asset_version'] ) {
			return true;
		}

		// If generation previously failed on this version:
		if ( ! empty( $meta['generation_failed'] ) ) {
			$last_attempt = isset( $meta['last_attempt'] ) ? absint( $meta['last_attempt'] ) : 0;
			$cooldown     = $this->get_regenerate_cooldown( $post_id );

			// Within cooldown window: do NOT re-attempt.
			if ( ( time() - $last_attempt ) < $cooldown ) {
				return false;
			}
		}

		return true;
	}

	/**
	 * Determine if a post's assets should be regenerated.
	 *
	 * Pattern from UAGB / WP-Spectra: allow_assets_generation().
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

		// Plugin version changed — regenerate.
		if ( BOOSTIFY_BLOCKS_VERSION !== $meta['wcb_version'] ) {
			return true;
		}

		// Global asset version changed (dashboard options/settings updated) — regenerate.
		$global_asset_ver = WCB_Post_Assets::get_global_asset_version();
		$post_asset_ver   = isset( $meta['asset_version'] ) ? (string) $meta['asset_version'] : '';
		if ( ! empty( $global_asset_ver ) && $global_asset_ver !== $post_asset_ver ) {
			return true;
		}

		// Generation failed previously — respect cooldown.
		if ( ! empty( $meta['generation_failed'] ) ) {
			return $this->should_attempt_regeneration( $post_id );
		}

		// CSS file missing — regenerate.
		if ( ! $this->storage->css_file_exists( $post_id ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Regenerate assets for all posts containing Boostify blocks.
	 *
	 * @param bool|null $with_debug Whether to gather debug report.
	 * @return array Result with count and status.
	 */
	public function regenerate_all_assets( $with_debug = null ) {
		// Only collect heavy debug reports when explicitly requested (e.g. debug=1 in POST).
		$with_debug = ! empty( $with_debug );

		// Step 1: Bump global asset version timestamp to invalidate client/CDN caches safely.
		$new_version = WCB_Post_Assets::update_global_asset_version();

		// Step 2: Get all post IDs across all post types.
		$block_names  = $this->get_boostify_block_names();
		$all_post_ids = $this->get_all_posts_with_blocks( $block_names );

		$posts_regenerated_ids     = array();
		$posts_regenerated_details = array();
		$regenerated               = 0;

		$posts_skipped_ids     = array();
		$posts_skipped_details = array();
		$skipped               = 0;

		$by_post_type  = array();
		$debug_reports = array();

		// Time budget guard to prevent PHP execution timeout (504).
		$time_limit = (int) apply_filters( 'boostify_blocks_bulk_regenerate_time_limit', 20 );
		$start_time = microtime( true );

		// Step 3: Regenerate for each post and categorize by post type.
		foreach ( $all_post_ids as $post_id ) {
			if ( $time_limit > 0 && ( microtime( true ) - $start_time ) > $time_limit ) {
				if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
					// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
					error_log( sprintf( '[Boostify Blocks] Time limit of %ds reached during bulk asset regeneration. Processed %d posts; remaining posts will lazily regenerate on request.', $time_limit, $regenerated ) );
				}
				break;
			}

			$post_type  = get_post_type( $post_id ) ?: 'post';
			$post_title = get_the_title( $post_id ) ?: sprintf( '#%d (no title)', $post_id );

			if ( ! isset( $by_post_type[ $post_type ] ) ) {
				$by_post_type[ $post_type ] = array(
					'regenerated' => 0,
					'skipped'     => 0,
				);
			}

			$result = $this->regenerate_post_assets( $post_id, true );
			if ( $result ) {
				$posts_regenerated_ids[]     = $post_id;
				$posts_regenerated_details[] = array(
					'id'        => $post_id,
					'title'     => $post_title,
					'post_type' => $post_type,
				);
				$by_post_type[ $post_type ]['regenerated']++;
				$regenerated++;
			} else {
				$posts_skipped_ids[]     = $post_id;
				$posts_skipped_details[] = array(
					'id'        => $post_id,
					'title'     => $post_title,
					'post_type' => $post_type,
				);
				$by_post_type[ $post_type ]['skipped']++;
				$skipped++;
			}

			if ( $with_debug && class_exists( 'WCB_Block_Helper' ) ) {
				$blocks_arr = array();
				$content    = get_post_field( 'post_content', $post_id );
				$blocks     = parse_blocks( $content );
				if ( ! empty( $blocks ) ) {
					$blocks_arr['blocks_names'] = $blocks;
				}

				$blocks_arr['blocks_css']  = WCB_Block_Helper::debug_post_block_css( $post_id, '', false );
				$debug_reports[ $post_id ] = $blocks_arr;
			}
		}

		// Step 4: Also scan FSE templates if block theme is active.
		$template_regenerated = 0;
		if ( function_exists( 'wp_is_block_theme' ) && wp_is_block_theme() ) {
			$template_regenerated = $this->regenerate_template_assets();
		}

		// Step 5: Build common static CSS from all block style-index.css files.
		$common_static_built = $this->build_common_static_css();

		// Default mode (matching Spectra standard): return concise, lightweight success message.
		if ( ! $with_debug ) {
			return array(
				'message'       => __( 'Assets regenerated successfully!', 'boostify-blocks' ),
				'asset_version' => (string) $new_version,
			);
		}

		// Debug / Verbose mode: return full breakdown by post type and item details.
		$breakdown_parts = array();
		foreach ( $by_post_type as $type => $counts ) {
			if ( $counts['regenerated'] > 0 ) {
				$type_obj   = get_post_type_object( $type );
				$type_label = $type_obj ? $type_obj->labels->singular_name : $type;
				$breakdown_parts[] = sprintf( '%d %s', $counts['regenerated'], strtolower( $type_label ) );
			}
		}
		$breakdown_str = ! empty( $breakdown_parts ) ? ' (' . implode( ', ', $breakdown_parts ) . ')' : '';

		$response_data = array(
			'success'                   => true,
			'asset_version'             => (string) $new_version,
			'posts_regenerated'         => $regenerated,
			'posts_regenerated_ids'     => $posts_regenerated_ids,
			'posts_regenerated_details' => $posts_regenerated_details,
			'posts_skipped'             => $skipped,
			'posts_skipped_ids'         => $posts_skipped_ids,
			'posts_skipped_details'     => $posts_skipped_details,
			'by_post_type'              => $by_post_type,
			'templates_regenerated'     => $template_regenerated,
			'common_static_built'       => ! empty( $common_static_built ),
			'message'                   => sprintf(
				/* translators: 1: regenerated count, 2: breakdown by post type, 3: skipped count, 4: templates count, 5: common static status, 6: asset version */
				__( 'Assets regenerated for %1$d item(s)%2$s. %3$d item(s) skipped. %4$d template(s) regenerated. Common static CSS: %5$s. Asset version: %6$s. Please purge any caching plugins.', 'boostify-blocks' ),
				$regenerated,
				$breakdown_str,
				$skipped,
				$template_regenerated,
				$common_static_built ? __( 'built', 'boostify-blocks' ) : __( 'skipped', 'boostify-blocks' ),
				$new_version
			),
		);

		if ( ! empty( $debug_reports ) ) {
			$response_data['debug_reports'] = $debug_reports;
		}

		return $response_data;
	}

	/**
	 * Get ALL post IDs across all post types containing Boostify blocks.
	 *
	 * @param array $block_names Block names to search for.
	 * @return array Post IDs.
	 */
	public function get_all_posts_with_blocks( $block_names ) {
		global $wpdb;

		if ( empty( $block_names ) ) {
			return array();
		}

		$post_types = get_post_types( array( 'public' => true ) );
		$post_types = array_values( array_unique( $post_types ) );

		if ( empty( $post_types ) ) {
			return array();
		}

		$post_type_placeholders = implode( ',', array_fill( 0, count( $post_types ), '%s' ) );
		$like_placeholders      = implode( ' OR ', array_fill( 0, count( $block_names ), 'post_content LIKE %s' ) );

		$like_args = array();
		foreach ( $block_names as $name ) {
			$like_args[] = '%' . $wpdb->esc_like( $name ) . '%';
		}

		$query_args = array_merge( $post_types, $like_args );

		// phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared, WordPress.DB.PreparedSQLPlaceholders.UnfinishedPrepare
		$query = $wpdb->prepare(
			"SELECT DISTINCT ID FROM {$wpdb->posts} WHERE post_status NOT IN ('trash', 'auto-draft') AND post_type IN ($post_type_placeholders) AND ($like_placeholders) ORDER BY ID ASC",
			array_values( $query_args )
		);

		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.PreparedSQL.NotPrepared
		$results = $wpdb->get_col( $query );

		return is_array( $results ) ? array_map( 'intval', $results ) : array();
	}

	/**
	 * Regenerate assets for FSE templates containing Boostify blocks.
	 *
	 * @return int Number of templates regenerated.
	 */
	public function regenerate_template_assets() {
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
				if ( $this->storage->save_css_file( $file_id, $css ) ) {
					$count++;
				}
			}
		}

		return $count;
	}

	/**
	 * Regenerate assets for a single post.
	 *
	 * @param int  $post_id Post ID.
	 * @param bool $force   Force write.
	 * @return bool True on success.
	 */
	public function regenerate_post_assets( $post_id, $force = false ) {
		$css = WCB_Block_Helper::extract_css_from_post( $post_id );

		if ( empty( $css ) ) {
			$this->storage->delete_css_file( $post_id );
			$this->update_page_assets_meta( $post_id, true );
			return false;
		}

		// Generate JS alongside CSS.
		$this->generate_post_js( $post_id );

		return $this->storage->save_css_file( $post_id, $css, $force );
	}

	/**
	 * Extract CSS from a post by parsing block attributes.
	 *
	 * @param int $post_id Post ID.
	 * @return string Combined CSS.
	 */
	public function extract_css_from_post( $post_id ) {
		return WCB_Block_Helper::extract_css_from_post( $post_id );
	}

	/**
	 * Recursively extract CSS from an array of parsed blocks.
	 *
	 * @param array $blocks Parsed blocks.
	 * @return string Combined CSS.
	 */
	public function extract_css_from_blocks( $blocks ) {
		return WCB_Block_Helper::extract_css_from_blocks( $blocks );
	}

	/**
	 * Generate JS file for a single post based on its blocks.
	 *
	 * @param int $post_id Post ID.
	 * @return bool True on success.
	 */
	public function generate_post_js( $post_id ) {
		$blocks = $this->get_blocks_from_post( $post_id );
		$js     = $this->build_js_for_blocks( $blocks );

		if ( empty( $js ) ) {
			$this->storage->delete_js_file( $post_id );
			return false;
		}

		return $this->storage->save_js_file( $post_id, $js );
	}

	/**
	 * Get parsed blocks from a post.
	 *
	 * @param int $post_id Post ID.
	 * @return array Parsed blocks.
	 */
	public function get_blocks_from_post( $post_id ) {
		$post = get_post( $post_id );
		if ( ! $post ) {
			return array();
		}
		return parse_blocks( $post->post_content );
	}

	/**
	 * Build JS content for a set of parsed blocks.
	 *
	 * @param array $blocks Parsed blocks.
	 * @return string JS content.
	 */
	public function build_js_for_blocks( $blocks ) {
		$needs_js = $this->collect_js_block_info( $blocks );
		if ( empty( $needs_js ) ) {
			return '';
		}

		$inner_js = '';

		// Allow third-party or custom blocks to inject JS code if needed.
		$inner_js = (string) apply_filters( 'boostify_blocks_post_assets_inner_js', $inner_js, $needs_js, $blocks );

		if ( '' === trim( $inner_js ) ) {
			return '';
		}

		$js  = "/* Boostify Blocks auto-generated JS */\n";
		$js .= "(function(){\n";
		$js .= "'use strict';\n";
		$js .= "document.addEventListener('DOMContentLoaded',function(){\n\n";
		$js .= $inner_js . "\n";
		$js .= "});\n})();\n";
		return $js;
	}

	/**
	 * Recursively collect unique IDs of interactive blocks.
	 *
	 * @param array $blocks Parsed blocks.
	 * @param array $seen_refs Visited reusable block IDs.
	 * @return array Map of block_type => [uniqueId, ...].
	 */
	public function collect_js_block_info( $blocks, &$seen_refs = array() ) {
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

			// Support Reusable Blocks (Synced Patterns) in JS dependency collection.
			if ( 'core/block' === $name ) {
				$ref_id = isset( $block['attrs']['ref'] ) ? absint( $block['attrs']['ref'] ) : 0;
				if ( $ref_id && ! in_array( $ref_id, $seen_refs, true ) ) {
					$seen_refs[] = $ref_id;
					$ref_post    = get_post( $ref_id );
					if ( $ref_post && ! empty( $ref_post->post_content ) ) {
						$reusable_blocks = parse_blocks( $ref_post->post_content );
						$inner           = $this->collect_js_block_info( $reusable_blocks, $seen_refs );
						foreach ( $inner as $k => $ids ) {
							if ( ! isset( $result[ $k ] ) ) {
								$result[ $k ] = array();
							}
							$result[ $k ] = array_merge( $result[ $k ], $ids );
						}
					}
				}
			}

			// Recurse into inner blocks.
			if ( ! empty( $block['innerBlocks'] ) ) {
				$inner = $this->collect_js_block_info( $block['innerBlocks'], $seen_refs );
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
	 *
	 * @param string $unique_id Block unique ID.
	 * @return string JS-safe identifier.
	 */
	public function js_safe_id( $unique_id ) {
		return str_replace( '-', '_', $unique_id );
	}

	/**
	 * Get all registered Boostify block names.
	 *
	 * @return array Block names.
	 */
	public function get_boostify_block_names() {
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
	public function get_posts_with_blocks( $block_names ) {
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
	 * @return string Merged static CSS.
	 */
	public function get_common_static_css_content() {
		$file = $this->storage->get_assets_dir() . '/custom-style-blocks.css';

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
	 * @return string|false URL of the common CSS file, or false on failure.
	 */
	public function build_common_static_css() {
		$this->storage->ensure_assets_dir_exists();

		$dir      = BOOSTIFY_BLOCKS_PATH . 'build/';
		$out_file = $this->storage->get_assets_dir() . '/custom-style-blocks.css';
		$css      = '';

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

			// Strip webpack banner comments.
			$content = preg_replace( '/\/\*![\s\S]*?\*\/\s*/', '', $content );
			$content = preg_replace( '/\/\*# sourceMappingURL=.*?\*\/\s*/', '', $content );
			$content = preg_replace( '/@charset\s+"[^"]*";\s*/', '', $content );

			$css .= trim( $content ) . "\n";
		}

		if ( empty( trim( $css ) ) ) {
			return false;
		}

		$css = "@charset \"UTF-8\";\n" . $css;
		$css = preg_replace( '/\/\*[\s\S]*?\*\//', '', $css );
		$css = preg_replace( "/\n{3,}/", "\n\n", $css );

		// Compare with existing — only write if changed.
		if ( file_exists( $out_file ) ) {
			// phpcs:ignore
			$old = file_get_contents( $out_file );
			if ( $old === $css ) {
				return $this->storage->get_assets_url() . '/custom-style-blocks.css';
			}
		}

		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_file_put_contents
		$result = file_put_contents( $out_file, $css, LOCK_EX );

		if ( false !== $result ) {
			return $this->storage->get_assets_url() . '/custom-style-blocks.css';
		}

		return false;
	}

	/**
	 * Basic CSS minification.
	 *
	 * @param string $css Raw CSS.
	 * @return string Minified CSS.
	 */
	public function minify_css( $css ) {
		$css = preg_replace( '!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $css );
		$css = str_replace( array( "\r\n", "\r", "\n", "\t" ), '', $css );
		$css = preg_replace( '/\s+/', ' ', $css );
		$css = str_replace( array( ' {', ': ', '; }', ';}', '; ' ), array( '{', ':', '}', '}', ';' ), $css );
		$css = trim( $css );

		return "/* Boostify Blocks auto-generated CSS */\n" . $css . "\n";
	}
}
