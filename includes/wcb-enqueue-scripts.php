<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
// Enqueue for Frontend
function boostify_blocks_my_scripts_method()
{
    $common_css_path = BOOSTIFY_BLOCKS_PATH . 'build/block-common-css/style-index.css';
    $common_ver      = file_exists( $common_css_path ) ? filemtime( $common_css_path ) : BOOSTIFY_BLOCKS_VERSION;
    wp_enqueue_style( 'boostify-blocks-frontend-css', plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'build/block-common-css/style-index.css', array(), $common_ver );

    $theme_frontend_vars = boostify_blocks_get_theme_frontend_typography_css();
    if ( '' !== $theme_frontend_vars ) {
        wp_add_inline_style( 'boostify-blocks-frontend-css', $theme_frontend_vars );
    }

    $frontend_css_path = BOOSTIFY_BLOCKS_PATH . 'public/css/frontend.css';
    $frontend_ver      = file_exists( $frontend_css_path ) ? filemtime( $frontend_css_path ) : BOOSTIFY_BLOCKS_VERSION;
    wp_enqueue_style( 'boostify-blocks-frontend', plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/css/frontend.css', array(), $frontend_ver );
    wp_localize_script(
        'jquery',
        'boostify_blocks_frontend_ajax_object',
        array(
            'ajaxurl' => admin_url('admin-ajax.php'),
            'homeUrl' => home_url(),
            'nonce'   => wp_create_nonce('boostifyblocks_form_nonce'),
        )
    );
    wp_localize_script(
        'jquery',
        'boostify_blocks_layout_global_settings',
        boostify_blocks_get_layout_global_settings()
    );
    // 1 - JS Global -> Follow by typeof window.boostify_blocks_global_variables
    wp_localize_script(
        'jquery',
        'boostify_blocks_global_variables',
        get_option('boostify_blocks_settings_options')
    );

    // TODO: Consider conditionally enqueuing only when the testimonials block is used.
    wp_enqueue_script('boostify-blocks-slicklib', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'public/slick/slick.min.js', ['jquery'], "1.8.0", false);

    wp_enqueue_script_module(
        'boostify-blocks-countdown-view',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/countdown/boostify-blocks-countdown-view.js',
        array( '@wordpress/interactivity' ),
        BOOSTIFY_BLOCKS_VERSION
    );

    wp_enqueue_script(
        'boostify-blocks-tiny-slider',
        'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js',
        array( 'jquery' ),
        '2.9.4',
        true
    );

    wp_enqueue_script(
        'boostify-blocks-quick-view',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/wcb-quick-view.js',
        array( 'jquery', 'boostify-blocks-tiny-slider' ),
        BOOSTIFY_BLOCKS_VERSION,
        true
    );

    wp_enqueue_script_module(
        'boostify-blocks-buynow',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/wcb-buynow.js',
        array( '@wordpress/interactivity' ),
        BOOSTIFY_BLOCKS_VERSION
    );

    wp_enqueue_script_module(
        'boostify-blocks-product-quantity-view',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/product-quantity/wcb-product-quantity-view.js',
        array( '@wordpress/interactivity' ),
        BOOSTIFY_BLOCKS_VERSION
    );

    wp_enqueue_script_module(
        'boostify-blocks-pre-order-view',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/pre-order/wcb-pre-order-view.js',
        array( '@wordpress/interactivity' ),
        BOOSTIFY_BLOCKS_VERSION
    );

    wp_enqueue_script_module(
        'boostify-blocks-quick-view-preview',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/quick-view/wcb-quick-view-preview.js',
        array( '@wordpress/interactivity' ),
        BOOSTIFY_BLOCKS_VERSION
    );

    // Enqueue the Tabs view script as a module
    wp_enqueue_script_module(
        'boostify-blocks-tabs-view',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/tabs/boostify-blocks-tabs-view.js',
        array( '@wordpress/interactivity' )
    );
    
    // Enqueue the FAQ view script as a module
    wp_enqueue_script_module(
        'boostify-blocks-faq-view',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/faq/boostify-blocks-faq-view.js',
        array( '@wordpress/interactivity' )
    );

    // Enqueue the Accordion view script as a module
    wp_enqueue_script_module(
        'boostify-blocks-accordion-view',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/accordion/boostify-blocks-accordion-view.js',
        array( '@wordpress/interactivity' )
    );

    // Enqueue the Form view script as a module
    wp_enqueue_script_module(
        'boostify-blocks-form-view',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/form/boostify-blocks-form-view.js',
         array( '@wordpress/interactivity' )
    );
    
    // Enqueue the Counter view script as a module
    wp_enqueue_script_module(
        'boostify-blocks-counter-view',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/counter/boostify-blocks-counter-view.js',
        array( '@wordpress/interactivity' )
    );

    // Enqueue the Slider (Swiper) view script as a module. Reads the
    // vendored global `Swiper` (enqueued as a classic script in
    // boostify_blocks_block_slider_swiper_render_callback(), includes/
    // wcb-blocks-render-callback.php) and configures it from the
    // data-wp-context baked into the saved block markup (src/
    // block-slider-swiper/Save.tsx).
    wp_enqueue_script_module(
        'boostify-blocks-slider-swiper-view',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/slider-swiper/boostify-blocks-slider-swiper-view.js',
        array( '@wordpress/interactivity' )
    );

    // Enqueue the Testimonials (Swiper) view script as a module. Reads the
    // vendored global `Swiper` (enqueued as a classic script in
    // boostify_blocks_block_testimonials_swiper_render_callback(), includes/
    // wcb-blocks-render-callback.php) and configures it from the
    // data-wp-context baked into the saved block markup (src/
    // block-testimonials-swiper/Save.tsx).
    wp_enqueue_script_module(
        'boostify-blocks-testimonials-swiper-view',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/testimonials-swiper/boostify-blocks-testimonials-swiper-view.js',
        array( '@wordpress/interactivity' )
    );

    if ( class_exists( 'WC_AJAX' ) ) {
        wp_localize_script(
            'boostify-blocks-buynow',
            'wcb_buynow_data',
            array(
                'ajaxUrl'       => \WC_AJAX::get_endpoint( '%%endpoint%%' ),
                'redirectDelay' => 300,
            )
        );
    }
}
add_action('wp_enqueue_scripts', 'boostify_blocks_my_scripts_method');

// Load this script in the editor
add_action( 'enqueue_block_editor_assets', function() {

    // Add common styles for editor
    wp_enqueue_style(
        'boostify-blocks-common-css',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'build/block-common-css/style-index.css',
        array(),
        BOOSTIFY_BLOCKS_VERSION
    );

    // Add style for editor
    wp_enqueue_style(
        'boostify-blocks-frontend',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/css/frontend.css',
        array(),
        BOOSTIFY_BLOCKS_VERSION
    );

    if ( function_exists( 'wp_enqueue_code_editor' ) ) {
        wp_enqueue_code_editor( array( 'type' => 'text/css' ) );
        wp_enqueue_script( 'wp-theme-plugin-editor' );
        wp_enqueue_style( 'wp-codemirror' );
    }

    wp_add_inline_script(
		'wp-edit-post',
		'
		wp.domReady( function() {
			const icon = "' . esc_js(
				plugins_url( 'public/images/bb-logo-icon.svg', BOOSTIFY_BLOCKS_FILE )
			) . '";
			function replaceLogo() {
				const img = document.querySelector(
					".edit-post-fullscreen-mode-close-site-icon__image"
				);

				if ( img ) {
					img.src = icon;
				}
			}
			replaceLogo();
			new MutationObserver( replaceLogo ).observe( document.body, {
				childList: true,
				subtree: true
			} );
		} );
		'
	);
    // load the extension block
    wp_enqueue_style(
        'boostify-blocks-extensions',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'build/extensions/index.css',
        array(),
        BOOSTIFY_BLOCKS_VERSION
    );

    wp_enqueue_script(
        'boostify-blocks-extensions', 
        plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/extensions/index.js', 
        ['wp-blocks', 'wp-element', 'jquery'], 
        BOOSTIFY_BLOCKS_VERSION, 
        true
    );

});

// Enqueue for admin
function boostify_blocks_my_enqueue_scripts_for_admin_editor($hook)
{
    wp_localize_script(
        'jquery',
        'boostify_blocks_layout_global_settings',
        boostify_blocks_get_layout_global_settings()
    );
    // 1 - JS Global -> Follow by typeof window.boostify_blocks_global_variables
    wp_localize_script(
        'jquery',
        'boostify_blocks_global_variables',
        get_option('boostify_blocks_settings_options')
    );
    wp_localize_script(
        'jquery',
        'boostify_blocks_frontend_ajax_object',
        array(
            'ajaxurl' => admin_url('admin-ajax.php'),
            'homeUrl' => home_url(),
            'nonce'   => wp_create_nonce('boostifyblocks_dashboard_settings_nonce'),
        )
    );
}
add_action('admin_enqueue_scripts', 'boostify_blocks_my_enqueue_scripts_for_admin_editor');


// 
function boostify_blocks_enqueue_lineicons()
{
    wp_register_style('boostify-blocks-lineicons-3.0', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'public/lineicons-free-basic/icon-font/lineicons.css', false, '3.0.0');
    wp_enqueue_style('boostify-blocks-lineicons-3.0');
}
add_action('wp_enqueue_scripts', 'boostify_blocks_enqueue_lineicons');
add_action('admin_enqueue_scripts', 'boostify_blocks_enqueue_lineicons');
add_action('enqueue_block_assets', 'boostify_blocks_enqueue_lineicons');
// 

function boostify_blocks_enqueue_lineicons_for_gutenbeg_editor()
{
    // Inject frontend styles into the iframed editor canvas
    add_editor_style(plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-common-css/style-index.css');
    add_editor_style(plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'public/css/frontend.css');
}
add_action('admin_init', 'boostify_blocks_enqueue_lineicons_for_gutenbeg_editor');

/**
 * Strips characters that could break out of a CSS declaration value.
 */
function boostify_blocks_sanitize_css_font_value( string $value ): string {
    return trim( (string) preg_replace( '/[{};<>]/', '', $value ) );
}

/**
 * Converts a theme font setting into a valid CSS `font-family` value matching Woostify.
 * Avoids Woostify_Fonts_Helpers::woostify_get_font_family_css(), which triggers an
 * Undefined array key warning for missing `*_family_category` defaults and returns a
 * trailing comma (`"Poppins", `) that invalidates CSS `font-family`.
 */
function boostify_blocks_resolve_css_font_family( string $raw_font ): string {
    $raw_trimmed = trim( $raw_font );
    if ( '' === $raw_trimmed || 0 === strcasecmp( $raw_trimmed, 'inherit' ) ) {
        return 'inherit';
    }

    if ( 'System Stack' === $raw_trimmed ) {
        return apply_filters(
            'woostify_typography_system_stack',
            '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        );
    }

    // Already a multi-family stack such as "Georgia, Times New Roman, serif".
    if ( false !== strpos( $raw_trimmed, ',' ) ) {
        return boostify_blocks_sanitize_css_font_value( $raw_trimmed );
    }

    $normalized = function_exists( 'boostify_blocks_normalize_font_name' )
        ? boostify_blocks_normalize_font_name( $raw_trimmed )
        : $raw_trimmed;

    if ( '' === $normalized ) {
        return 'inherit';
    }

    $is_system = function_exists( 'boostify_blocks_is_system_font' ) && boostify_blocks_is_system_font( $normalized );
    if ( $is_system ) {
        if ( preg_match( '/^(sans-serif|serif|monospace|cursive|fantasy|system-ui|ui-sans-serif|ui-serif|ui-monospace|inherit|initial|unset|revert)$/i', $normalized ) ) {
            return strtolower( $normalized );
        }
        if ( preg_match( '/^(georgia|times|times new roman|garamond|palatino|palatino linotype|book antiqua)$/i', $normalized ) ) {
            $fallback = 'serif';
        } elseif ( preg_match( '/^(courier|courier new|lucida console)$/i', $normalized ) ) {
            $fallback = 'monospace';
        } else {
            $fallback = 'sans-serif';
        }
        return boostify_blocks_sanitize_css_font_value( '"' . $normalized . '", ' . $fallback );
    }

    $fallback = function_exists( 'boostify_blocks_get_google_font_fallback' )
        ? boostify_blocks_get_google_font_fallback( $normalized )
        : 'sans-serif';

    return boostify_blocks_sanitize_css_font_value( '"' . $normalized . '", ' . $fallback );
}

/**
 * Returns normalized Woostify typography context when Woostify options exist,
 * or null on non-Woostify sites so unrelated themes are never overridden.
 *
 * @return array{
 *     opts: array,
 *     body_font_css: string,
 *     heading_font_css: string,
 *     google_fonts: string[]
 * }|null
 */
function boostify_blocks_get_woostify_typography_context(): ?array {
    $saved_settings = get_option( 'woostify_setting', array() );
    if ( ! function_exists( 'woostify_options' ) && empty( $saved_settings ) ) {
        return null;
    }

    $opts = function_exists( 'woostify_options' ) ? woostify_options( false ) : $saved_settings;
    if ( ! is_array( $opts ) || empty( $opts ) ) {
        return null;
    }

    $body_raw    = isset( $opts['body_font_family'] ) ? (string) $opts['body_font_family'] : '';
    $heading_raw = isset( $opts['heading_font_family'] ) ? (string) $opts['heading_font_family'] : '';

    $body_font_css    = boostify_blocks_resolve_css_font_family( $body_raw );
    $heading_font_css = boostify_blocks_resolve_css_font_family( $heading_raw );

    $google_fonts = array();
    foreach ( array( $body_raw, $heading_raw ) as $raw ) {
        $normalized = function_exists( 'boostify_blocks_normalize_font_name' )
            ? boostify_blocks_normalize_font_name( $raw )
            : trim( $raw );
        if ( '' !== $normalized && ( ! function_exists( 'boostify_blocks_is_system_font' ) || ! boostify_blocks_is_system_font( $normalized ) ) ) {
            $google_fonts[] = $normalized;
        }
    }

    return array(
        'opts'             => $opts,
        'body_font_css'    => $body_font_css,
        'heading_font_css' => $heading_font_css,
        'google_fonts'     => array_values( array_unique( $google_fonts ) ),
    );
}

/**
 * Enqueues active theme Google Fonts via enqueue_block_assets (admin only)
 * so WordPress injects them into <iframe name="editor-canvas">.
 */
function boostify_blocks_enqueue_theme_fonts_in_editor(): void {
    if ( ! is_admin() ) {
        return;
    }

    $ctx = boostify_blocks_get_woostify_typography_context();
    if ( empty( $ctx['google_fonts'] ) ) {
        return;
    }

    if ( function_exists( 'boostify_blocks_enqueue_font_list' ) ) {
        boostify_blocks_enqueue_font_list( $ctx['google_fonts'] );
    }
}
add_action( 'enqueue_block_assets', 'boostify_blocks_enqueue_theme_fonts_in_editor' );

/**
 * Emits `--theme-body-font` and `--theme-heading-font` on the frontend so
 * blocks referencing those CSS variables match the block editor canvas.
 */
function boostify_blocks_get_theme_frontend_typography_css(): string {
    $ctx = boostify_blocks_get_woostify_typography_context();
    if ( null === $ctx ) {
        return '';
    }

    return sprintf(
        ":root {\n\t--theme-body-font: %s;\n\t--theme-heading-font: %s;\n}",
        $ctx['body_font_css'],
        $ctx['heading_font_css']
    );
}

/**
 * Generate dynamic CSS reflecting active theme Customizer typography.
 * Returns empty string on non-Woostify sites so their editor styles stay untouched.
 *
 * @return string Dynamic CSS rules.
 */
function boostify_blocks_get_theme_editor_typography_css() {
    $ctx = boostify_blocks_get_woostify_typography_context();
    if ( null === $ctx ) {
        return '';
    }

    $opts         = $ctx['opts'];
    $body_font    = $ctx['body_font_css'];
    $heading_font = $ctx['heading_font_css'];

    $body_size      = ! empty( $opts['body_font_size'] ) ? intval( $opts['body_font_size'] ) : 14;
    $body_weight    = ! empty( $opts['body_font_weight'] ) ? boostify_blocks_sanitize_css_font_value( (string) $opts['body_font_weight'] ) : '400';
    $body_lh        = ! empty( $opts['body_line_height'] ) ? ( is_numeric( $opts['body_line_height'] ) ? $opts['body_line_height'] . 'px' : boostify_blocks_sanitize_css_font_value( (string) $opts['body_line_height'] ) ) : '28px';
    $body_transform = ! empty( $opts['body_font_transform'] ) ? boostify_blocks_sanitize_css_font_value( (string) $opts['body_font_transform'] ) : 'none';
    $text_color     = ! empty( $opts['text_color'] ) ? boostify_blocks_sanitize_css_font_value( (string) $opts['text_color'] ) : '#474747';

    $heading_weight    = ! empty( $opts['heading_font_weight'] ) ? boostify_blocks_sanitize_css_font_value( (string) $opts['heading_font_weight'] ) : '600';
    $heading_lh        = ! empty( $opts['heading_line_height'] ) ? boostify_blocks_sanitize_css_font_value( (string) $opts['heading_line_height'] ) : '1.5';
    $heading_transform = ! empty( $opts['heading_font_transform'] ) ? boostify_blocks_sanitize_css_font_value( (string) $opts['heading_font_transform'] ) : 'none';
    $heading_color     = ! empty( $opts['heading_color'] ) ? boostify_blocks_sanitize_css_font_value( (string) $opts['heading_color'] ) : '#2b2b2b';

    $h1_size = ! empty( $opts['heading_h1_font_size'] ) ? intval( $opts['heading_h1_font_size'] ) : 48;
    $h2_size = ! empty( $opts['heading_h2_font_size'] ) ? intval( $opts['heading_h2_font_size'] ) : 36;
    $h3_size = ! empty( $opts['heading_h3_font_size'] ) ? intval( $opts['heading_h3_font_size'] ) : 30;
    $h4_size = ! empty( $opts['heading_h4_font_size'] ) ? intval( $opts['heading_h4_font_size'] ) : 28;
    $h5_size = ! empty( $opts['heading_h5_font_size'] ) ? intval( $opts['heading_h5_font_size'] ) : 26;
    $h6_size = ! empty( $opts['heading_h6_font_size'] ) ? intval( $opts['heading_h6_font_size'] ) : 18;

    return "
    :root, .editor-styles-wrapper {
        --theme-body-font: {$body_font};
        --theme-body-font-size: {$body_size}px;
        --theme-body-font-weight: {$body_weight};
        --theme-body-line-height: {$body_lh};
        --theme-body-transform: {$body_transform};
        --theme-body-color: {$text_color};
        --theme-heading-font: {$heading_font};
        --theme-heading-font-weight: {$heading_weight};
        --theme-heading-line-height: {$heading_lh};
        --theme-heading-transform: {$heading_transform};
        --theme-heading-color: {$heading_color};
        --theme-h1-font-size: {$h1_size}px;
        --theme-h2-font-size: {$h2_size}px;
        --theme-h3-font-size: {$h3_size}px;
        --theme-h4-font-size: {$h4_size}px;
        --theme-h5-font-size: {$h5_size}px;
        --theme-h6-font-size: {$h6_size}px;
    }
    ";
}

// Inject into block editor iframe canvas via block_editor_settings_all filter
add_filter( 'block_editor_settings_all', function( $editor_settings ) {
    $theme_css = boostify_blocks_get_theme_editor_typography_css();
    if ( ! empty( $theme_css ) ) {
        $editor_settings['styles'][] = array(
            'css'            => $theme_css,
            '__unstableType' => 'theme',
        );
    }
    return $editor_settings;
} );


// Enqueue scripts for settings page.
function boostify_blocks_enqueue_script_to_setting_page()
{
    $currentScrren = get_current_screen();

    if (
        !empty($currentScrren->id) && strpos($currentScrren->id, 'boostify-blocks-settings') !== false
    ) {
        wp_register_style('boostify-blocks-settings-page', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/____dashboard/style-index.css');
        wp_enqueue_style('boostify-blocks-settings-page');
        //
        wp_enqueue_style('boostify-blocks-dashboard-tailwind',plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'public/css/dashboard-tailwind.css', [], BOOSTIFY_BLOCKS_VERSION);
        wp_add_inline_script('boostify-blocks-dashboard-app-tailwind', 'tailwind.config = { important: true }', 'after');
        //
        wp_enqueue_script('boostify-blocks-dashboard-app', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/____dashboard/index.js', ['wp-blocks', 'wp-element', 'jquery'], BOOSTIFY_BLOCKS_VERSION, true);

        wp_localize_script(
            'boostify-blocks-dashboard-app',
            'boostify_blocks_layout_global_settings',
            boostify_blocks_get_layout_global_settings()
        );
        // 1 - JS Global -> Follow by typeof window.boostify_blocks_global_variables
        $settings_options = get_option('boostify_blocks_settings_options');
        if ( is_array( $settings_options ) && ! empty( $settings_options['site_visibility_page'] ) ) {
            $v_page_id = absint( $settings_options['site_visibility_page'] );
            $v_page_title = get_the_title( $v_page_id );
            $settings_options['site_visibility_page_title'] = $v_page_title ? $v_page_title : sprintf( esc_html__( '#%d (Untitled)', 'boostify-blocks' ), $v_page_id );
        }
        wp_localize_script(
            'boostify-blocks-dashboard-app',
            'boostify_blocks_global_variables',
            $settings_options
        );
        wp_localize_script(
            'boostify-blocks-dashboard-app',
            'boostify_blocks_frontend_ajax_object',
            array(
                'ajaxurl' => admin_url('admin-ajax.php'),
                'homeUrl' => home_url(),
                'nonce'   => wp_create_nonce('boostifyblocks_dashboard_settings_nonce'),
            )
        );
    }
}
add_action('admin_enqueue_scripts', 'boostify_blocks_enqueue_script_to_setting_page');
