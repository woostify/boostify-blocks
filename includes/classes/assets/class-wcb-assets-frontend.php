<?php
/**
 * Class WCB_Assets_Frontend
 *
 * Handles frontend asset enqueueing, server-side inline CSS fallback,
 * FSE block theme template resolution, and style deduplication.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class WCB_Assets_Frontend {

	/**
	 * Storage instance.
	 *
	 * @var WCB_Assets_Storage
	 */
	protected $storage;

	/**
	 * Generator instance.
	 *
	 * @var WCB_Assets_Generator
	 */
	protected $generator;

	/**
	 * Whether file generation is enabled in settings.
	 *
	 * @var bool
	 */
	protected $file_generation_enabled = false;

	/**
	 * Whether the generated CSS file was enqueued for the current request.
	 *
	 * @var bool
	 */
	protected $file_css_enqueued = false;

	/**
	 * Whether server-side inline CSS was enqueued for the current request.
	 *
	 * @var bool
	 */
	protected $inline_css_enqueued = false;

	/**
	 * Fallback flag — true when file should exist but doesn't, so inline CSS is needed.
	 *
	 * @var bool
	 */
	protected $fallback_css = false;

	/**
	 * Asset file handler — stores CSS file URL for enqueuing.
	 *
	 * @var array
	 */
	protected $assets_file_handler = array();

	/**
	 * Request context: 'post', 'template', 'archive', or 'unknown'.
	 *
	 * @var string
	 */
	protected $request_context = 'unknown';

	/**
	 * Constructor.
	 *
	 * @param WCB_Assets_Storage   $storage   Storage handler.
	 * @param WCB_Assets_Generator $generator Generator handler.
	 */
	public function __construct( WCB_Assets_Storage $storage, WCB_Assets_Generator $generator ) {
		$this->storage   = $storage;
		$this->generator = $generator;

		$settings                      = get_option( 'boostify_blocks_settings_options', array() );
		$this->file_generation_enabled = ! empty( $settings['enableFileGeneration'] ) && ( 'true' === $settings['enableFileGeneration'] || true === $settings['enableFileGeneration'] || '1' === (string) $settings['enableFileGeneration'] );

		$this->init_hooks();
	}

	/**
	 * Register frontend WordPress hooks.
	 */
	protected function init_hooks() {
		// Frontend: conditionally enqueue generated CSS files.
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_post_css' ), 20 );

		// When file generation is enabled, skip the inline JS-based CSS injection.
		if ( $this->file_generation_enabled ) {
			add_filter( 'boostify_blocks_skip_inline_styles', '__return_true' );
		}

		// Frontend: enqueue generated JS if present.
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_post_js' ), 21 );

		// When file generation is enabled, bundle all block static styles into one file
		// and dequeue individual style-index.css files to reduce HTTP requests.
		if ( $this->file_generation_enabled ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_common_static_css' ), 5 );
			add_action( 'wp_enqueue_scripts', array( $this, 'dequeue_individual_block_styles' ), 999 );
			add_action( 'wp_head', array( $this, 'dequeue_individual_block_styles' ), 0 );
			add_action( 'wp_footer', array( $this, 'dequeue_individual_block_styles' ), 0 );
			add_action( 'wp_print_styles', array( $this, 'dequeue_individual_block_styles' ), 0 );
			add_action( 'wp_print_footer_scripts', array( $this, 'dequeue_individual_block_styles' ), 0 );
		}
	}

	/**
	 * Enqueue generated CSS file or server-side inline CSS for the current request.
	 *
	 * - File generation ON & file exists: enqueues static CSS file.
	 * - File generation OFF or file missing: injects inline CSS into <head> to eliminate FOUC.
	 */
	public function enqueue_post_css() {
		if ( is_admin() ) {
			return;
		}

		$post_id = $this->get_effective_post_id();
		if ( ! $post_id ) {
			return;
		}

		$file_id = $this->get_css_file_id_for_request( $post_id );

		// 1. If file generation is enabled, attempt to serve the static CSS file.
		if ( $this->file_generation_enabled ) {
			$needs_regeneration = ( 'post' === $this->request_context ) ? $this->generator->should_regenerate_post_assets( $post_id ) : false;

			if ( ! $needs_regeneration && $this->storage->css_file_exists( $file_id ) ) {
				$file_path = $this->storage->get_css_file_path( $file_id );
				$version   = $this->storage->get_stylesheet_version( $file_path );
				wp_enqueue_style(
					'boostify-blocks-' . $file_id,
					$this->storage->get_css_file_url( $file_id ),
					array( 'boostify-blocks-frontend-css' ),
					$version
				);
				$this->file_css_enqueued   = true;
				$this->assets_file_handler = array( 'css_url' => $this->storage->get_css_file_url( $file_id ) );
				return;
			}

			// File missing OR needs regeneration (global asset version or plugin version updated).
			if ( 'post' === $this->request_context ) {
				if ( ! $this->generator->should_attempt_regeneration( $post_id ) ) {
					if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
						// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
						error_log( sprintf(
							'[Boostify Blocks] Skipped on-the-fly CSS regeneration for post %d (cooldown active).',
							$post_id
						) );
					}
					// If old file exists, serve it to avoid broken UI and prevent 404.
					if ( $this->storage->css_file_exists( $file_id ) ) {
						$file_path = $this->storage->get_css_file_path( $file_id );
						$version   = $this->storage->get_stylesheet_version( $file_path );
						wp_enqueue_style(
							'boostify-blocks-' . $file_id,
							$this->storage->get_css_file_url( $file_id ),
							array( 'boostify-blocks-frontend-css' ),
							$version
						);
						$this->file_css_enqueued   = true;
						$this->assets_file_handler = array( 'css_url' => $this->storage->get_css_file_url( $file_id ) );
						return;
					}
				} else {
					// Regenerate safely — writes over existing file without deleting first.
					$this->generator->regenerate_post_assets( $post_id, true );

					// Enqueue regenerated file.
					if ( $this->storage->css_file_exists( $file_id ) ) {
						$file_path = $this->storage->get_css_file_path( $file_id );
						$version   = $this->storage->get_stylesheet_version( $file_path );
						wp_enqueue_style(
							'boostify-blocks-' . $file_id,
							$this->storage->get_css_file_url( $file_id ),
							array( 'boostify-blocks-frontend-css' ),
							$version
						);
						$this->file_css_enqueued   = true;
						$this->assets_file_handler = array( 'css_url' => $this->storage->get_css_file_url( $file_id ) );
						return;
					}
				}
			}
		}

		// 2. Fallback / File Generation Disabled:
		// Generate CSS on the server side and inject directly into <head> via wp_add_inline_style.
		$css = $this->get_current_request_css();
		if ( ! empty( $css ) ) {
			if ( ! wp_style_is( 'boostify-blocks-frontend-css', 'enqueued' ) ) {
				wp_enqueue_style( 'boostify-blocks-frontend-css' );
			}
			wp_add_inline_style( 'boostify-blocks-frontend-css', $css );
			$this->inline_css_enqueued = true;
			$this->file_css_enqueued   = true;
			$this->fallback_css        = false;
		} else {
			$this->fallback_css = true;
		}
	}

	/**
	 * Conditionally enqueue generated JS file for the current request.
	 */
	public function enqueue_post_js() {
		if ( ! $this->file_generation_enabled ) {
			return;
		}

		$post_id = $this->get_effective_post_id();
		if ( ! $post_id ) {
			return;
		}

		$file_id = $this->get_css_file_id_for_request( $post_id );

		if ( $this->storage->js_file_exists( $file_id ) ) {
			$file_path = $this->storage->get_js_file_path( $file_id );
			$version   = file_exists( $file_path ) ? filemtime( $file_path ) : WCB_Post_Assets::get_global_asset_version();
			wp_enqueue_script(
				'boostify-blocks-js-' . $file_id,
				$this->storage->get_js_file_url( $file_id ),
				array( 'jquery' ),
				$version,
				true
			);
		}
	}

	/**
	 * Enqueue the common static CSS file if it exists.
	 */
	public function enqueue_common_static_css() {
		if ( ! $this->file_generation_enabled ) {
			return;
		}

		$file = $this->storage->get_assets_dir() . '/custom-style-blocks.css';

		// Build on-the-fly if missing.
		if ( ! file_exists( $file ) ) {
			$this->generator->build_common_static_css();
		}

		if ( file_exists( $file ) && filesize( $file ) > 0 ) {
			$common_url = (string) apply_filters( 'boostify_blocks_common_css_url', $this->storage->get_assets_url() . '/custom-style-blocks.css' );
			wp_enqueue_style(
				'boostify-blocks-custom-style-blocks',
				$common_url,
				array(),
				$this->storage->get_stylesheet_version( $file )
			);
		}
	}

	/**
	 * Dequeue individual block style-index.css files when merged file is enqueued.
	 */
	public function dequeue_individual_block_styles() {
		if ( ! $this->file_generation_enabled ) {
			return;
		}

		if ( ! wp_style_is( 'boostify-blocks-custom-style-blocks', 'enqueued' ) ) {
			return;
		}

		global $wp_styles;
		if ( empty( $wp_styles->registered ) ) {
			return;
		}

		foreach ( $wp_styles->registered as $handle => $style ) {
			$is_boostify_style = ( 0 === strpos( $handle, 'boostify-blocks-' ) || 0 === strpos( $handle, 'create-block-' ) ) && '-style' === substr( $handle, -6 );
			$is_block_file     = isset( $style->src ) && is_string( $style->src ) && false !== strpos( $style->src, 'boostify-blocks/build/' ) && false !== strpos( $style->src, 'style-index.css' );

			if ( $is_boostify_style || $is_block_file ) {
				wp_dequeue_style( $handle );
				$style->src = false;
			}
		}
	}

	/**
	 * Get the effective post/template ID for the current request.
	 *
	 * @return int|string Post ID, template slug hash, or 0 if not applicable.
	 */
	public function get_effective_post_id() {
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
	 * @return string Template slug or empty string.
	 */
	public function determine_template_slug() {
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
				$template_types     = get_block_templates();
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
	 * @param int|string $effective_id Post ID or template slug.
	 * @return int|string File identifier.
	 */
	public function get_css_file_id_for_request( $effective_id ) {
		if ( 'post' === $this->request_context ) {
			return intval( $effective_id );
		}
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
	 * Whether a generated CSS file or server inline CSS was enqueued for this request.
	 *
	 * @return bool
	 */
	public function is_file_css_enqueued() {
		return $this->file_css_enqueued || $this->inline_css_enqueued;
	}

	/**
	 * Whether server-side inline CSS was enqueued for this request.
	 *
	 * @return bool
	 */
	public function is_inline_css_enqueued() {
		return $this->inline_css_enqueued;
	}

	/**
	 * Check if block CSS is already loaded (either via static file or server-side inline CSS).
	 *
	 * @return bool
	 */
	public function is_css_ready() {
		return $this->file_css_enqueued || $this->inline_css_enqueued;
	}

	/**
	 * Extract CSS for the current frontend request.
	 *
	 * @return string CSS rules for the current page/template.
	 */
	public function get_current_request_css() {
		$effective_id = $this->get_effective_post_id();

		// Singular post or page.
		if ( 'post' === $this->request_context && $effective_id ) {
			return WCB_Block_Helper::extract_css_from_post( intval( $effective_id ) );
		}

		// Block theme template or archive.
		if ( ( 'template' === $this->request_context || 'archive' === $this->request_context ) && $effective_id ) {
			$template_slug = (string) $effective_id;
			if ( function_exists( 'get_block_templates' ) ) {
				$templates = get_block_templates( array( 'slug__in' => array( $template_slug ) ) );
				if ( ! empty( $templates ) && ! empty( $templates[0]->content ) ) {
					$blocks = parse_blocks( $templates[0]->content );
					return WCB_Block_Helper::extract_css_from_blocks( $blocks );
				}
			}
		}

		// Generic fallback: attempt current post ID.
		if ( function_exists( 'get_the_ID' ) ) {
			$the_id = get_the_ID();
			if ( $the_id ) {
				return WCB_Block_Helper::extract_css_from_post( intval( $the_id ) );
			}
		}

		return '';
	}

	/**
	 * Whether fallback inline CSS should be used.
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
}
