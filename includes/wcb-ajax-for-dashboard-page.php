<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! function_exists( 'boostify_blocks_sanitize_array' ) ) {
    /**
     * Recursively sanitize an array of data.
     *
     * @param array $data The data to sanitize.
     * @return array The sanitized data.
     */
    function boostify_blocks_sanitize_array( $data ) {
        if ( ! is_array( $data ) ) {
            return sanitize_text_field( $data );
        }
        $sanitized = array();
        foreach ( $data as $key => $value ) {
            $sanitized_key = sanitize_text_field( $key );
            if ( is_array( $value ) ) {
                $sanitized[ $sanitized_key ] = boostify_blocks_sanitize_array( $value );
            } else {
                $sanitized[ $sanitized_key ] = sanitize_text_field( $value );
            }
        }
        return $sanitized;
    }
}

add_action('wp_ajax_boostifyblocks_dashboard_blocks_disable_enable', 'boostify_blocks_ajax_dashboard_blocks_disable_enable');
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
add_action('wp_ajax_boostifyblocks_dashboard_blocks_update_settings', 'boostify_blocks_ajax_dashboard_update_settings');
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

    $settings = array_merge($defaultSettings, $validSettings);

    update_option('boostify_blocks_settings_options', $settings);
    $array_result = array(
        'data' => $settings,
        'message' => 'your message'
    );
    //
    wp_send_json($array_result);
    wp_die();
}
