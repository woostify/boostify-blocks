<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
if (!function_exists('boostify_blocks_get_block_type_list') || !function_exists('get_option')) {
    return;
}
// 
$boostify_blocks_enable_disable_options = get_option('boostify_blocks_enable_disable_options');
$boostify_blocks_settings_options = get_option('boostify_blocks_settings_options');
if ( is_array( $boostify_blocks_settings_options ) && ! empty( $boostify_blocks_settings_options['site_visibility_page'] ) ) {
    $v_page_id = absint( $boostify_blocks_settings_options['site_visibility_page'] );
    $v_page_title = get_the_title( $v_page_id );
    $boostify_blocks_settings_options['site_visibility_page_title'] = $v_page_title ? $v_page_title : sprintf( __( '#%d (Untitled)', 'boostify-blocks' ), $v_page_id );
}
$boostify_blocks_all_block_list = boostify_blocks_get_block_type_list();

// 
$boostify_blocks_props = [
    'boostify_blocks_list'                   => $boostify_blocks_all_block_list,
    'boostify_blocks_enable_disable_options' => $boostify_blocks_enable_disable_options,
    'boostify_blocks_settings_options'       => $boostify_blocks_settings_options,
    'boostify_blocks_layout_global_settings' => boostify_blocks_get_layout_global_settings(),
];

?>
<div id="boostify-blocks-dashboard-root" class="" data-props="<?php echo esc_attr(wp_json_encode($boostify_blocks_props)); ?>">
</div>
