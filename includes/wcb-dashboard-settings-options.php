<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
// boostify_blocks_settings_options
function boostify_blocks_dashboard_settings_options_init()
{
    if (!function_exists('boostify_blocks_get_block_name_enable_init') || !function_exists('boostify_blocks_get_block_type_list')) {
        return;
    }

    // add a new option -- boostify_blocks_enable_disable_options
    if (FALSE === get_option('boostify_blocks_enable_disable_options') && FALSE === update_option('boostify_blocks_enable_disable_options', FALSE)) {
        $boostify_block_status = boostify_blocks_get_block_name_enable_init();
        add_option('boostify_blocks_enable_disable_options', $boostify_block_status);
    }

    // add a new option -- boostify_blocks_settings_options
    if (FALSE === get_option('boostify_blocks_settings_options') && FALSE === update_option('boostify_blocks_settings_options', FALSE)) {
        add_option('boostify_blocks_settings_options', boostify_blocks_get_default_blocks_settings());
    } else {
        // When new fields are added, merge them with existing options.
        // Check if new options exist and merge accordingly.
        $existing_settings = get_option('boostify_blocks_settings_options') ?: [];
        $hasNewOption = !array_key_exists('customColorPallete', $existing_settings) 
            || !array_key_exists('site_visibility_mode', $existing_settings)
            || !array_key_exists('enableDisplayConditions', $existing_settings);
        // 
        if ($hasNewOption) {
            update_option('boostify_blocks_settings_options', array_merge(boostify_blocks_get_default_blocks_settings(), $existing_settings));
        }
    }
}

add_action('admin_init', 'boostify_blocks_dashboard_settings_options_init');
