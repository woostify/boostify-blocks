<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

require_once __DIR__ . '/dashboard/wcb-dashboard-ajax-helpers.php';
require_once __DIR__ . '/dashboard/wcb-remote-demos-service.php';
require_once __DIR__ . '/dashboard/wcb-demo-preview-renderer.php';

add_action('wp_ajax_boostify_blocks_dashboard_blocks_disable_enable', 'boostify_blocks_ajax_dashboard_blocks_disable_enable');
function boostify_blocks_ajax_dashboard_blocks_disable_enable()
{
    boostify_blocks_verify_dashboard_ajax_request();

    // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- Sanitized below with boostify_blocks_sanitize_array
    $blocksStatus = isset($_POST['blocksStatus']) ? boostify_blocks_sanitize_array(wp_unslash($_POST['blocksStatus'])) : array();

    $boostify_block_status_init = [];
    if (function_exists('boostify_blocks_get_block_name_enable_init')) {
        $boostify_block_status_init = boostify_blocks_get_block_name_enable_init();
    }

    $newBlocksStatus = array_merge($boostify_block_status_init, $blocksStatus);

    update_option('boostify_blocks_enable_disable_options', $newBlocksStatus);

    // Bump global asset version timestamp to invalidate post caches safely without unlinking files.
    if ( class_exists( 'WCB_Post_Assets' ) ) {
        WCB_Post_Assets::update_global_asset_version();
    } else {
        update_option( 'boostify_blocks_asset_version', time() );
    }

    $array_result = array(
        'success' => true,
        'data'    => $newBlocksStatus,
        'message' => esc_html__( 'Blocks settings saved successfully.', 'boostify-blocks' ),
    );
    wp_send_json($array_result);
    wp_die();
}

//
add_action('wp_ajax_boostify_blocks_dashboard_update_settings', 'boostify_blocks_ajax_dashboard_update_settings');
function boostify_blocks_ajax_dashboard_update_settings()
{
    boostify_blocks_verify_dashboard_ajax_request();

    // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- Sanitized below with boostify_blocks_sanitize_array
    $postedSettings = isset($_POST['settings']) ? boostify_blocks_sanitize_array(wp_unslash($_POST['settings'])) : array();

    $defaultSettings = array();
    if (function_exists('boostify_blocks_get_default_blocks_settings')) {
        $defaultSettings = boostify_blocks_get_default_blocks_settings();
    }

    // VALIDATE: Only allow keys that exist in default settings
    $validSettings = array();
    foreach ($postedSettings as $key => $value) {
        if (array_key_exists($key, $defaultSettings)) {
            $validSettings[$key] = $value;
        }
    }

    $old_settings = get_option( 'boostify_blocks_settings_options', [] );
    if ( ! is_array( $old_settings ) ) {
        $old_settings = [];
    }
    $settings = array_merge( $defaultSettings, $old_settings, $validSettings );

    if ( ! empty( $settings['site_visibility_page'] ) ) {
        $v_page_id = absint( $settings['site_visibility_page'] );
        $v_page_title = get_the_title( $v_page_id );
        $settings['site_visibility_page_title'] = $v_page_title ? $v_page_title : sprintf( esc_html__( '#%d (Untitled)', 'boostify-blocks' ), $v_page_id );
    }

    update_option('boostify_blocks_settings_options', $settings);

    if ( function_exists( 'boostify_blocks_maybe_clear_font_cache' ) ) {
        boostify_blocks_maybe_clear_font_cache( $old_settings, $settings );
    }

    // Bump global asset version timestamp to invalidate post caches safely without mass unlinking files.
    // Pages will regenerate and safely overwrite files on next request without 404 windows.
    if ( class_exists( 'WCB_Post_Assets' ) ) {
        WCB_Post_Assets::update_global_asset_version();
    } else {
        update_option( 'boostify_blocks_asset_version', time() );
    }

    $array_result = array(
        'success' => true,
        'data'    => $settings,
        'message' => esc_html__( 'Settings saved successfully.', 'boostify-blocks' ),
    );
    wp_send_json($array_result);
    wp_die();
}

/**
 * AJAX handler for searching published pages in Site Visibility settings.
 */
add_action('wp_ajax_boostify_blocks_search_pages', 'boostify_blocks_ajax_search_pages');
function boostify_blocks_ajax_search_pages()
{
    boostify_blocks_verify_dashboard_ajax_request();

    $keyword = isset($_POST['keyword']) ? sanitize_text_field(wp_unslash($_POST['keyword'])) : '';

    $current_page_id = 0;
    $current_settings = get_option('boostify_blocks_settings_options', array());
    if (is_array($current_settings) && !empty($current_settings['site_visibility_page'])) {
        $current_page_id = absint($current_settings['site_visibility_page']);
    }

    $args = array(
        'post_type'      => 'page',
        'post_status'    => 'publish',
        'posts_per_page' => 10,
        'orderby'        => 'title',
        'order'          => 'ASC',
    );

    if (!empty($keyword)) {
        $args['s'] = $keyword;
    }

    $pages = get_posts($args);
    $results = array();
    $found_current = false;

    if (is_array($pages)) {
        foreach ($pages as $page) {
            if ((int) $page->ID === $current_page_id) {
                $found_current = true;
            }
            $title = !empty($page->post_title) ? $page->post_title : sprintf(esc_html__('#%d (Untitled)', 'boostify-blocks'), $page->ID);
            $results[] = array(
                'value'    => (string) $page->ID,
                'label'    => $title,
                'edit_url' => get_edit_post_link($page->ID, 'raw'),
                'view_url' => get_permalink($page->ID),
            );
        }
    }

    // If current selected page is not in the top 10 and no search keyword was typed, prepend it
    if (!$found_current && empty($keyword) && $current_page_id > 0) {
        $current_post = get_post($current_page_id);
        if ($current_post && 'publish' === $current_post->post_status) {
            $title = !empty($current_post->post_title) ? $current_post->post_title : sprintf(esc_html__('#%d (Untitled)', 'boostify-blocks'), $current_post->ID);
            array_unshift($results, array(
                'value'    => (string) $current_post->ID,
                'label'    => $title,
                'edit_url' => get_edit_post_link($current_post->ID, 'raw'),
                'view_url' => get_permalink($current_post->ID),
            ));
        }
    }

    wp_send_json_success($results);
}

/**
 * AJAX handler for subscribing to Boostify Pro waitlist.
 */
add_action('wp_ajax_boostify_blocks_waitlist_subscribe', 'boostify_blocks_ajax_waitlist_subscribe');
function boostify_blocks_ajax_waitlist_subscribe()
{
    boostify_blocks_verify_dashboard_ajax_request();

    // Honeypot check
    if (!empty($_POST['website'])) {
        wp_send_json_success(array('message' => esc_html__('Subscription received.', 'boostify-blocks')));
    }

    $email = isset($_POST['email']) ? sanitize_email(wp_unslash($_POST['email'])) : '';
    if (empty($email) || !is_email($email)) {
        wp_send_json_error(array('message' => esc_html__('Please enter a valid email address.', 'boostify-blocks')), 400);
    }

    $block_context = isset($_POST['block']) ? sanitize_text_field(wp_unslash($_POST['block'])) : '';

    $user_id = get_current_user_id();
    $rate_key = 'boostify_blocks_waitlist_limit_' . $user_id;
    if (get_transient($rate_key)) {
        wp_send_json_error(array('message' => esc_html__('Too many requests. Please wait a minute before trying again.', 'boostify-blocks')), 429);
    }

    $webhook_url = defined('BOOSTIFY_BLOCKS_WAITLIST_WEBHOOK')
        ? BOOSTIFY_BLOCKS_WAITLIST_WEBHOOK
        : 'https://woostify.com/?fluentcrm=1&route=contact&hash=dbdb3c05-0599-4095-8980-e1e830f4b169';
    $webhook_url = apply_filters('boostify_blocks_waitlist_webhook_url', $webhook_url);

    $source = !empty($block_context)
        ? 'boostify-blocks-pro-waitlist:' . sanitize_key($block_context)
        : 'boostify-blocks-pro-waitlist';

    $response = wp_remote_post(
        $webhook_url,
        array(
            'timeout' => 15,
            'body'    => array(
                'email'  => $email,
                'source' => $source,
            ),
        )
    );

    if (is_wp_error($response)) {
        wp_send_json_error(array('message' => esc_html__('Unable to connect to the waitlist service. Please try again later.', 'boostify-blocks')), 500);
    }

    $code = wp_remote_retrieve_response_code($response);
    if ($code < 200 || $code >= 300) {
        wp_send_json_error(array('message' => esc_html__('Failed to subscribe. Please try again later.', 'boostify-blocks')), 502);
    }

    // Set rate limit transient and mark user as subscribed after successful submission
    set_transient($rate_key, 1, MINUTE_IN_SECONDS);
    update_user_meta($user_id, 'boostify_blocks_waitlist_subscribed', 1);
    update_user_meta($user_id, 'boostify_blocks_waitlist_email', $email);

    wp_send_json_success(array(
        'message' => esc_html__('Thank you! You have been added to the waitlist.', 'boostify-blocks'),
    ));
}
