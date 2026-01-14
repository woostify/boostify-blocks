<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
add_action('wp_ajax_wcb_dashboard_blocks_disable_enable', 'wcb_ajax_dashboard_blocks_disable_enable');
function wcb_ajax_dashboard_blocks_disable_enable()
{
    // Only allow administrators (or appropriate capability) to toggle block status.
    if ( ! current_user_can('manage_options') ) {
        wp_send_json_error(array('message' => __('You are not allowed to perform this action.', 'boostify-blocks')), 403);
        wp_die();
    }

    // Verify nonce to ensure request origin.
    if (
        ! isset($_POST['nonce']) ||
        ! check_ajax_referer('wcb_dashboard_settings_nonce', 'nonce', false)
    ) {
        wp_send_json_error(array('message' => __('Invalid security token.', 'boostify-blocks')), 400);
        wp_die();
    }

    $blocksStatus = isset($_POST['blocksStatus']) && is_array($_POST['blocksStatus']) ? $_POST['blocksStatus'] : [];
    $wcbBlockStatusInit = [];
    if (function_exists('wcb_get_wcb_block_name_enable_init')) {
        $wcbBlockStatusInit = wcb_get_wcb_block_name_enable_init();
    }

    $newBlocksStatus = array_merge($wcbBlockStatusInit, $blocksStatus);

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
add_action('wp_ajax_wcb_dashboard_blocks_update_settings', 'wcb_ajax_dashboard_update_settings');
function wcb_ajax_dashboard_update_settings()
{
    // Only allow administrators (or appropriate capability) to update settings.
    if ( ! current_user_can('manage_options') ) {
        wp_send_json_error(array('message' => __('You are not allowed to perform this action.', 'boostify-blocks')), 403);
        wp_die();
    }

    // Verify nonce to ensure request origin.
    if (
        ! isset($_POST['nonce']) ||
        ! check_ajax_referer('wcb_dashboard_settings_nonce', 'nonce', false)
    ) {
        wp_send_json_error(array('message' => __('Invalid security token.', 'boostify-blocks')), 400);
        wp_die();
    }

    $settings = isset($_POST['settings']) && is_array($_POST['settings']) ? $_POST['settings'] : [];
    $settings = array_merge(wcb_get_default_blocks_settings(), $settings);

    update_option('boostify_blocks_settings_options', $settings);
    $array_result = array(
        'data' => $settings,
        'message' => 'your message'
    );
    // 
    wp_send_json($array_result);
    wp_die();
}
