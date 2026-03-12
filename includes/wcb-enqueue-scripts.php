<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
// Enqueue for Frontend
function boostify_blocks_my_scripts_method()
{
    wp_enqueue_style( 'boostify-blocks-frontend-css', plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'build/block-common-css/style-index.css', array(), BOOSTIFY_BLOCKS_VERSION );
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

    wp_enqueue_script(
        'boostify-blocks-countdown-lib',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/countdown/boostify-blocks-countdown.js',
        array( 'jquery' ),
        BOOSTIFY_BLOCKS_VERSION,
        true
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

    wp_enqueue_script(
        'boostify-blocks-buynow',
        plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/wcb-buynow.js',
        array( 'jquery', 'boostify-blocks-tiny-slider' ),
        BOOSTIFY_BLOCKS_VERSION,
        true
    );

    if ( class_exists( 'WC_AJAX' ) ) {
        wp_localize_script(
            'boostify-blocks-buynow',
            'wcb_buynow_data',
            array(
                'ajax_url'      => \WC_AJAX::get_endpoint( '%%endpoint%%' ),
                'redirect_delay' => 300,
            )
        );
    }
}
add_action('wp_enqueue_scripts', 'boostify_blocks_my_scripts_method');

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
// 

function boostify_blocks_enqueue_lineicons_for_gutenbeg_editor()
{
    add_editor_style(plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'public/lineicons-free-basic/icon-font/lineicons.css');
    // for iframe 
    add_editor_style(plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'public/css/lineicons2.css');
}
add_action('admin_init', 'boostify_blocks_enqueue_lineicons_for_gutenbeg_editor');


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
        wp_localize_script(
            'boostify-blocks-dashboard-app',
            'boostify_blocks_global_variables',
            get_option('boostify_blocks_settings_options')
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
