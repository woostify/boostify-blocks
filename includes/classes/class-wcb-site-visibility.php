<?php
/**
 * Boostify Blocks Site Visibility Engine.
 *
 * Handles Coming Soon and Maintenance modes following Spectra architecture.
 *
 * @package Boostify-Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class WCB_Site_Visibility
 */
class WCB_Site_Visibility {

	/**
	 * Member Variable
	 *
	 * @var WCB_Site_Visibility|null
	 */
	private static $instance = null;

	/**
	 * Initiator
	 *
	 * @return WCB_Site_Visibility
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor
	 */
	public function __construct() {
		$settings = $this->get_settings();

		if ( 'disabled' !== $settings['mode'] && ! is_user_logged_in() && ! empty( $settings['page_id'] ) ) {
			add_action( 'template_redirect', array( $this, 'handle_visibility_redirect' ), 99 );
			add_filter( 'template_include', array( $this, 'handle_visibility_template' ), 99 );
			add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_visibility_styles' ) );
		}
	}

	/**
	 * Get Visibility Settings.
	 *
	 * @return array
	 */
	public function get_settings() {
		$options = get_option( 'boostify_blocks_settings_options', array() );
		if ( ! is_array( $options ) ) {
			$options = array();
		}

		return array(
			'mode'    => isset( $options['site_visibility_mode'] ) ? sanitize_text_field( $options['site_visibility_mode'] ) : 'disabled',
			'page_id' => isset( $options['site_visibility_page'] ) ? absint( $options['site_visibility_page'] ) : 0,
		);
	}

	/**
	 * Check if current request should bypass visibility restrictions.
	 *
	 * @return bool
	 */
	private function should_bypass() {
		// Logged in users bypass.
		if ( is_user_logged_in() ) {
			return true;
		}

		// WP-CLI.
		if ( defined( 'WP_CLI' ) && WP_CLI ) {
			return true;
		}

		// Feeds.
		if ( is_feed() ) {
			return true;
		}

		// Cron.
		if ( wp_doing_cron() ) {
			return true;
		}

		// XML-RPC requests.
		if ( defined( 'XMLRPC_REQUEST' ) && XMLRPC_REQUEST ) {
			return true;
		}

		// Login and registration page checks.
		global $pagenow;
		if ( ! empty( $pagenow ) && in_array( $pagenow, array( 'wp-login.php', 'wp-register.php' ), true ) ) {
			return true;
		}

		$request_uri = isset( $_SERVER['REQUEST_URI'] ) ? esc_url_raw( wp_unslash( $_SERVER['REQUEST_URI'] ) ) : '';
		if ( false !== strpos( $request_uri, 'wp-login.php' ) || false !== strpos( $request_uri, 'wp-register.php' ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Handle Visibility Redirect.
	 *
	 * @return void
	 */
	public function handle_visibility_redirect() {
		if ( $this->should_bypass() ) {
			return;
		}

		$settings = $this->get_settings();
		$mode     = $settings['mode'];
		$page_id  = $settings['page_id'];

		if ( 'disabled' === $mode || empty( $page_id ) || 'publish' !== get_post_status( $page_id ) ) {
			return;
		}

		$current_page_id = get_the_ID();

		// If visitor is currently on the designated visibility page, serve it normally (200 OK) exactly like Spectra
		if ( $page_id === $current_page_id || is_page( $page_id ) ) {
			return;
		}

		// Visitor is on another page; redirect to the designated visibility page
		if ( 'maintenance' === $mode ) {
			status_header( 503 );
		}

		$target_url = get_permalink( $page_id );
		if ( $target_url ) {
			wp_safe_redirect( $target_url );
			exit;
		}
	}

	/**
	 * Set Visibility Template.
	 *
	 * Always returns blank canvas visibility template, exactly like Spectra.
	 *
	 * @param string $template Current template file.
	 * @return string
	 */
	public function handle_visibility_template( $template ) {
		if ( $this->should_bypass() ) {
			return $template;
		}

		$canvas_file = BOOSTIFY_BLOCKS_PATH . 'templates/visibility-template.php';
		if ( file_exists( $canvas_file ) ) {
			return $canvas_file;
		}

		return $template;
	}

	/**
	 * Enqueue Visibility Styles on frontend.
	 *
	 * Hides any remaining theme headers, footers or popup panels.
	 *
	 * @return void
	 */
	public function enqueue_visibility_styles() {
		if ( $this->should_bypass() ) {
			return;
		}

		$settings        = $this->get_settings();
		$current_page_id = get_the_ID();

		if ( (int) $settings['page_id'] !== (int) $current_page_id && ! is_page( $settings['page_id'] ) ) {
			return;
		}

		$custom_css = 'body { margin: 0 !important; padding: 0 !important; } footer.site-footer, header.site-header, #masthead, #colophon, #woostify-quick-view-panel, .cart-sidebar, .sidebar-menu, .site-dialog { display: none !important; }';
		wp_register_style( 'boostify-blocks-visibility-style', false, array(), BOOSTIFY_BLOCKS_VERSION );
		wp_enqueue_style( 'boostify-blocks-visibility-style' );
		wp_add_inline_style( 'boostify-blocks-visibility-style', $custom_css );
	}
}

/**
 * Initialize Site Visibility on plugins_loaded so pluggable functions like is_user_logged_in() are available.
 */
add_action( 'plugins_loaded', array( 'WCB_Site_Visibility', 'get_instance' ) );
