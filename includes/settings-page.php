<?php
if (!function_exists('bcb_get_bcb_block_type_list') || !function_exists('get_option')) {
    return;
}
// 
$bcb_blocks_enable_disable_options = get_option('bcb_blocks_enable_disable_options');
$bcb_blocks_settings_options = get_option('bcb_blocks_settings_options');
$allWcbBlockList = bcb_get_bcb_block_type_list();

// 
$props = [
    'bcb_blocks_list'                   => $allWcbBlockList,
    'bcb_blocks_enable_disable_options' => $bcb_blocks_enable_disable_options,
    'bcb_blocks_settings_options'       => $bcb_blocks_settings_options,
    'bcb_layout_global_settings'        => bcb__get_layout_global_settings(),
];

?>
<div id="bcb-dasboard-root" class="" data-props="<?php echo esc_attr(json_encode($props)); ?>">
</div>