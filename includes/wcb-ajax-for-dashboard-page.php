<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}



add_action('wp_ajax_boostify_blocks_dashboard_blocks_disable_enable', 'boostify_blocks_ajax_dashboard_blocks_disable_enable');
function boostify_blocks_ajax_dashboard_blocks_disable_enable()
{
    // Verify nonce for security
    if (!isset($_POST['nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['nonce'])), 'boostifyblocks_dashboard_settings_nonce')) {
        wp_send_json_error(array('message' => 'Invalid nonce'), 403);
        wp_die();
    }

    // Check user capability
    if (!current_user_can('manage_options')) {
        wp_send_json_error(array('message' => 'Permission denied'), 403);
        wp_die();
    }

    // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- Sanitized below with boostify_blocks_sanitize_array
    $blocksStatus = isset($_POST['blocksStatus']) ? boostify_blocks_sanitize_array(wp_unslash($_POST['blocksStatus'])) : array();

    $boostify_block_status_init = [];
    if (function_exists('boostify_blocks_get_block_name_enable_init')) {
        $boostify_block_status_init = boostify_blocks_get_block_name_enable_init();
    }

    $newBlocksStatus = array_merge($boostify_block_status_init, $blocksStatus);

    update_option('boostify_blocks_enable_disable_options', $newBlocksStatus);
    $array_result = array(
        'data' => $newBlocksStatus,
        'message' => 'your message'
    );
    //
    wp_send_json($array_result);
    wp_die();
}

//
add_action('wp_ajax_boostify_blocks_dashboard_update_settings', 'boostify_blocks_ajax_dashboard_update_settings');
function boostify_blocks_ajax_dashboard_update_settings()
{
    // Verify nonce for security
    if (!isset($_POST['nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['nonce'])), 'boostifyblocks_dashboard_settings_nonce')) {
        wp_send_json_error(array('message' => 'Invalid nonce'), 403);
        wp_die();
    }

    // Check user capability
    if (!current_user_can('manage_options')) {
        wp_send_json_error(array('message' => 'Permission denied'), 403);
        wp_die();
    }

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
    $settings = array_merge($defaultSettings, $validSettings);

    if ( ! empty( $settings['site_visibility_page'] ) ) {
        $v_page_id = absint( $settings['site_visibility_page'] );
        $v_page_title = get_the_title( $v_page_id );
        $settings['site_visibility_page_title'] = $v_page_title ? $v_page_title : sprintf( esc_html__( '#%d (Untitled)', 'boostify-blocks' ), $v_page_id );
    }

    update_option('boostify_blocks_settings_options', $settings);

    if ( function_exists( 'boostify_blocks_maybe_clear_font_cache' ) ) {
        boostify_blocks_maybe_clear_font_cache( $old_settings, $settings );
    }

    $array_result = array(
        'data' => $settings,
        'message' => 'your message'
    );
    //
    wp_send_json($array_result);
    wp_die();
}

/**
 * AJAX handler for searching published pages in Site Visibility settings.
 */
add_action('wp_ajax_boostify_blocks_search_pages', 'boostify_blocks_ajax_search_pages');
function boostify_blocks_ajax_search_pages()
{
    // Verify nonce for security
    if (!isset($_POST['nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['nonce'])), 'boostifyblocks_dashboard_settings_nonce')) {
        wp_send_json_error(array('message' => esc_html__('Invalid nonce', 'boostify-blocks')), 403);
    }

    // Check user capability
    if (!current_user_can('manage_options')) {
        wp_send_json_error(array('message' => esc_html__('Permission denied', 'boostify-blocks')), 403);
    }

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