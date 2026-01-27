<?php

add_action('wp_ajax_wcb_dashboard_blocks_disable_enable', 'boostify_blocks_ajax_dashboard_blocks_disable_enable');
function boostify_blocks_ajax_dashboard_blocks_disable_enable()
{
    $blocksStatus = $_POST['blocksStatus'] ?? [];
    $wcbBlockStatusInit = [];
    if (function_exists('boostify_blocks_get_block_name_enable_init')) {
        $wcbBlockStatusInit = boostify_blocks_get_block_name_enable_init();
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
add_action('wp_ajax_wcb_dashboard_blocks_update_settings', 'boostify_blocks_ajax_dashboard_update_settings');
function boostify_blocks_ajax_dashboard_update_settings()
{
    $settings = $_POST['settings'] ?? [];
    $settings = array_merge(boostify_blocks_get_default_blocks_settings(), $settings);

    update_option('boostify_blocks_settings_options', $settings);
    $array_result = array(
        'data' => $settings,
        'message' => 'your message'
    );
    // 
    wp_send_json($array_result);
    wp_die();
}
