<?php
// bcb_blocks_settings_options
function bcb_dashboard_settings_options_init()
{
    if (!function_exists('bcb_get_bcb_block_name_enable_init') || !function_exists('bcb_get_bcb_block_type_list')) {
        return;
    }

    // add a new option -- bcb_blocks_enable_disable_options
    if (FALSE === get_option('bcb_blocks_enable_disable_options') && FALSE === update_option('bcb_blocks_enable_disable_options', FALSE)) {
        $wcbBlockStatus = bcb_get_bcb_block_name_enable_init();
        add_option('bcb_blocks_enable_disable_options', $wcbBlockStatus);
    }

    // add a new option -- bcb_blocks_settings_options
    if (FALSE === get_option('bcb_blocks_settings_options') && FALSE === update_option('bcb_blocks_settings_options', FALSE)) {
        add_option('bcb_blocks_settings_options', bcb_get_default_blocks_settings());
    } else {
        // vui long thuc hien dieu nay khi co them cac field moi'..........
        // check co new option thi merge laij.......... 
        // 01-03-2023
        $hasNewOption = !array_key_exists('customColorPallete', get_option('bcb_blocks_settings_options') ?? []);
        // 
        if ($hasNewOption) {
            update_option('bcb_blocks_settings_options', array_merge(bcb_get_default_blocks_settings(), get_option('bcb_blocks_settings_options')));
        }
    }
}

add_action('admin_init', 'bcb_dashboard_settings_options_init');
