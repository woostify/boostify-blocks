<?php
/**
 * Class WCB_Post_Assets
 *
 * Facade and orchestrator for Boostify Blocks asset generation and enqueueing.
 * Coordinates Storage, Generator, Frontend, AJAX, and CLI service components
 * while providing 100% backward compatibility for all legacy public APIs.
 *
 * Architecture follows WordPress core & WooCommerce best practices:
 *   - define_constants(): Centralized constant definitions
 *   - includes(): Encapsulated conditional & lazy loading
 *   - init_hooks(): Structured hook registration
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class WCB_Post_Assets {

	/**
	 * Directory name for generated assets in uploads directory.
	 *
	 * @var string
	 */
	const ASSETS_DIR = 'boostify-blocks/assets';

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
	 * Singleton instance.
	 *
	 * @var WCB_Post_Assets|null
	 */
	private static $instance = null;

	/**
	 * Storage service.
	 *
	 * @var WCB_Assets_Storage
	 */
	protected $storage;

	/**
	 * Generator service.
	 *
	 * @var WCB_Assets_Generator
	 */
	protected $generator;

	/**
	 * Frontend service.
	 *
	 * @var WCB_Assets_Frontend
	 */
	protected $frontend;

	/**
	 * AJAX service (lazy-loaded).
	 *
	 * @var WCB_Assets_Ajax|null
	 */
	protected $ajax = null;

	/**
	 * CLI service (lazy-loaded).
	 *
	 * @var WCB_Assets_CLI|null
	 */
	protected $cli = null;

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
	 * Alias for instance() for compatibility.
	 *
	 * @return WCB_Post_Assets
	 */
	public static function get_instance() {
		return self::instance();
	}

	/**
	 * Define constants required by the assets system.
	 */
	public static function define_constants() {
		if ( ! defined( 'BOOSTIFY_BLOCKS_ASSET_VER' ) ) {
			define( 'BOOSTIFY_BLOCKS_ASSET_VER', get_option( 'boostify_blocks_asset_version', BOOSTIFY_BLOCKS_VERSION ) );
		}
	}

	/**
	 * Get the global asset version timestamp.
	 *
	 * Mirrors WP-Spectra pattern: UAGB_ASSET_VER / __uagb_asset_version.
	 *
	 * @return string Asset version timestamp or plugin version.
	 */
	public static function get_global_asset_version() {
		self::define_constants();

		$ver = get_option( 'boostify_blocks_asset_version' );
		if ( ! empty( $ver ) ) {
			return (string) apply_filters( 'boostify_blocks_asset_version', (string) $ver );
		}
		if ( defined( 'BOOSTIFY_BLOCKS_ASSET_VER' ) ) {
			return (string) apply_filters( 'boostify_blocks_asset_version', BOOSTIFY_BLOCKS_ASSET_VER );
		}
		return (string) apply_filters( 'boostify_blocks_asset_version', BOOSTIFY_BLOCKS_VERSION );
	}

	/**
	 * Invalidate all assets by updating the global asset version timestamp.
	 *
	 * @return int New timestamp version.
	 */
	public static function update_global_asset_version() {
		$version = time();
		update_option( 'boostify_blocks_asset_version', $version );
		return $version;
	}

	/**
	 * Constructor. Initializes services and registers global hooks.
	 */
	private function __construct() {
		// 1. Define constants.
		self::define_constants();

		// 2. Load dependencies.
		$this->includes();

		// 3. Initialize core service components.
		$this->storage   = new WCB_Assets_Storage();
		$this->generator = new WCB_Assets_Generator( $this->storage );
		$this->frontend  = new WCB_Assets_Frontend( $this->storage, $this->generator );

		// Conditionally initialize AJAX handler for Admin or AJAX requests.
		if ( is_admin() || ( function_exists( 'wp_doing_ajax' ) && wp_doing_ajax() ) ) {
			$this->get_ajax();
		}

		// Conditionally initialize WP-CLI commands when running under CLI.
		if ( defined( 'WP_CLI' ) && WP_CLI ) {
			$this->get_cli();
		}

		// 4. Register global WordPress hooks.
		$this->init_hooks();
	}

	/**
	 * Include service classes (with conditional loading for AJAX and CLI).
	 */
	private function includes() {
		// Core CSS utilities and block orchestration helper.
		require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/class-wcb-css-utility.php';
		require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/class-wcb-block-helper.php';

		// Core asset services.
		require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/assets/class-wcb-assets-storage.php';
		require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/assets/class-wcb-assets-generator.php';
		require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/assets/class-wcb-assets-frontend.php';

		if ( is_admin() || ( function_exists( 'wp_doing_ajax' ) && wp_doing_ajax() ) ) {
			require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/assets/class-wcb-assets-ajax.php';
		}

		if ( defined( 'WP_CLI' ) && WP_CLI ) {
			require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/assets/class-wcb-assets-cli.php';
		}
	}

	/**
	 * Register global hooks for asset lifecycle & cache invalidation.
	 */
	private function init_hooks() {
		// Auto-regenerate assets when a post is saved.
		add_action( 'save_post', array( $this, 'on_save_post' ), 20, 2 );

		// Clean up assets when a post is permanently deleted.
		add_action( 'before_delete_post', array( $this, 'delete_css_file' ) );

		// Invalidate assets cache when Woostify theme or Product Label settings are updated.
		$theme_options_to_watch = array(
			'woostify_setting',
			'woostify_product_label',
			'woostify_product_label_style',
			'woostify_product_label_sale_percentage',
			'woostify_product_label_background',
			'woostify_product_label_text_color',
			'woostify_product_label_out_of_stock_background',
			'woostify_product_label_out_of_stock_text_color',
		);
		foreach ( $theme_options_to_watch as $opt_name ) {
			add_action( "update_option_{$opt_name}", array( __CLASS__, 'update_global_asset_version' ) );
		}
		add_action( 'customize_save_after', array( __CLASS__, 'update_global_asset_version' ) );
	}

	// =========================================================================
	// Sub-Service Accessors (with Lazy Loading)
	// =========================================================================

	public function get_storage() {
		return $this->storage;
	}

	public function get_generator() {
		return $this->generator;
	}

	public function get_frontend() {
		return $this->frontend;
	}

	public function get_ajax() {
		if ( null === $this->ajax ) {
			if ( ! class_exists( 'WCB_Assets_Ajax' ) ) {
				require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/assets/class-wcb-assets-ajax.php';
			}
			$this->ajax = new WCB_Assets_Ajax( $this->storage, $this->generator );
		}
		return $this->ajax;
	}

	public function get_cli() {
		if ( null === $this->cli ) {
			if ( ! class_exists( 'WCB_Assets_CLI' ) ) {
				require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/assets/class-wcb-assets-cli.php';
			}
			$this->cli = new WCB_Assets_CLI( $this->generator, $this->get_ajax() );
		}
		return $this->cli;
	}

	// =========================================================================
	// Storage Service Delegation
	// =========================================================================

	public function get_assets_upload_dir() {
		return $this->storage->get_assets_upload_dir();
	}

	public function get_assets_dir() {
		return $this->storage->get_assets_dir();
	}

	public function get_assets_url() {
		return $this->storage->get_assets_url();
	}

	public function get_asset_folder_name( $post_id ) {
		return $this->storage->get_asset_folder_name( $post_id );
	}

	public function get_css_file_path( $post_id ) {
		return $this->storage->get_css_file_path( $post_id );
	}

	public function get_css_file_url( $post_id ) {
		return $this->storage->get_css_file_url( $post_id );
	}

	public function css_file_exists( $post_id ) {
		return $this->storage->css_file_exists( $post_id );
	}

	public function save_css_file( $post_id, $css, $force = false ) {
		return $this->storage->save_css_file( $post_id, $css, $force );
	}

	public function delete_css_file( $post_id ) {
		return $this->storage->delete_css_file( $post_id );
	}

	public function delete_all_css_files() {
		return $this->storage->delete_all_css_files();
	}

	public function get_js_file_path( $post_id ) {
		return $this->storage->get_js_file_path( $post_id );
	}

	public function get_js_file_url( $post_id ) {
		return $this->storage->get_js_file_url( $post_id );
	}

	public function js_file_exists( $post_id ) {
		return $this->storage->js_file_exists( $post_id );
	}

	public function save_js_file( $post_id, $js ) {
		return $this->storage->save_js_file( $post_id, $js );
	}

	public function delete_js_file( $post_id ) {
		return $this->storage->delete_js_file( $post_id );
	}

	public function delete_all_js_files() {
		return $this->storage->delete_all_js_files();
	}

	public function ensure_assets_dir_exists() {
		$this->storage->ensure_assets_dir_exists();
	}

	// =========================================================================
	// Generator Service Delegation
	// =========================================================================

	public function on_save_post( $post_id, $post ) {
		$this->generator->on_save_post( $post_id, $post );
	}

	public function get_regenerate_cooldown( $post_id = 0 ) {
		return $this->generator->get_regenerate_cooldown( $post_id );
	}

	public function should_attempt_regeneration( $post_id ) {
		return $this->generator->should_attempt_regeneration( $post_id );
	}

	public function should_regenerate_post_assets( $post_id ) {
		return $this->generator->should_regenerate_post_assets( $post_id );
	}

	public function regenerate_all_assets( $with_debug = null ) {
		return $this->generator->regenerate_all_assets( $with_debug );
	}

	public function regenerate_template_assets() {
		return $this->generator->regenerate_template_assets();
	}

	public function regenerate_post_assets( $post_id, $force = false ) {
		return $this->generator->regenerate_post_assets( $post_id, $force );
	}

	public function generate_post_js( $post_id ) {
		return $this->generator->generate_post_js( $post_id );
	}

	public function build_common_static_css() {
		return $this->generator->build_common_static_css();
	}

	public function get_boostify_block_names() {
		return $this->generator->get_boostify_block_names();
	}

	public function get_posts_with_blocks( $block_names ) {
		return $this->generator->get_posts_with_blocks( $block_names );
	}

	// =========================================================================
	// Frontend Service Delegation
	// =========================================================================

	public function enqueue_post_css() {
		$this->frontend->enqueue_post_css();
	}

	public function enqueue_post_js() {
		$this->frontend->enqueue_post_js();
	}

	public function enqueue_common_static_css() {
		$this->frontend->enqueue_common_static_css();
	}

	public function dequeue_individual_block_styles() {
		$this->frontend->dequeue_individual_block_styles();
	}

	public function is_file_generation_enabled() {
		return $this->frontend->is_file_generation_enabled();
	}

	public function is_file_css_enqueued() {
		return $this->frontend->is_file_css_enqueued();
	}

	public function is_inline_css_enqueued() {
		return $this->frontend->is_inline_css_enqueued();
	}

	public function is_css_ready() {
		return $this->frontend->is_css_ready();
	}

	public function get_current_request_css() {
		return $this->frontend->get_current_request_css();
	}

	public function is_fallback_css() {
		return $this->frontend->is_fallback_css();
	}

	public function get_assets_file_handler() {
		return $this->frontend->get_assets_file_handler();
	}

	// =========================================================================
	// AJAX & CLI Service Delegation (via Lazy Loaders)
	// =========================================================================

	public function ajax_regenerate_assets() {
		$this->get_ajax()->ajax_regenerate_assets();
	}

	public function ajax_save_post_assets() {
		$this->get_ajax()->ajax_save_post_assets();
	}

	public function ajax_save_collected_css() {
		$this->get_ajax()->ajax_save_collected_css();
	}

	public function ajax_get_fallback_posts() {
		$this->get_ajax()->ajax_get_fallback_posts();
	}

	public function extract_block_names( array $blocks, array &$names = array() ) {
		return $this->get_ajax()->extract_block_names( $blocks, $names );
	}

	public function get_fallback_posts_report() {
		return $this->get_ajax()->get_fallback_posts_report();
	}

	public function cli_fallback_status( $args, $assoc_args ) {
		$this->get_cli()->cli_fallback_status( $args, $assoc_args );
	}

	public function cli_regenerate( $args, $assoc_args ) {
		$this->get_cli()->cli_regenerate( $args, $assoc_args );
	}
}

// Initialize.
WCB_Post_Assets::instance();
