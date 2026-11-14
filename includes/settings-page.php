<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
if ( ! current_user_can( 'manage_options' ) ) {
    return;
}
if (!function_exists('boostify_blocks_get_block_type_list') || !function_exists('get_option')) {
    return;
}
// 
$boostify_blocks_enable_disable_options = get_option( 'boostify_blocks_enable_disable_options' );
if ( ! is_array( $boostify_blocks_enable_disable_options ) ) {
    $boostify_blocks_enable_disable_options = function_exists( 'boostify_blocks_get_block_name_enable_init' ) ? boostify_blocks_get_block_name_enable_init() : array();
}

$boostify_blocks_settings_options = function_exists( 'boostify_blocks_get_admin_settings_for_js' )
    ? boostify_blocks_get_admin_settings_for_js()
    : array();
$boostify_blocks_all_block_list = boostify_blocks_get_block_type_list();

// 
$boostify_blocks_meta = [
    'version'              => defined('BOOSTIFY_BLOCKS_VERSION') ? BOOSTIFY_BLOCKS_VERSION : '',
    'changelog'            => function_exists('boostify_blocks_get_changelog') ? boostify_blocks_get_changelog() : [],
    'showSample'           => apply_filters('boostify_blocks_dashboard_show_sample_data', true),
    'isWaitlistSubscribed' => (bool) get_user_meta( get_current_user_id(), 'boostify_blocks_waitlist_subscribed', true ),
    'urls'                 => [
        'support'   => 'https://woostify.com/contact/',
        'newPage'   => admin_url('post-new.php?post_type=page'),
        'docs'      => 'https://woostify.com/docs/',
        'community' => 'https://www.facebook.com/groups/woostify',
        'rate'      => 'https://wordpress.org/support/plugin/boostify-blocks/reviews/#new-post',
        'demoBase'  => 'https://woostify.com/boostify-blocks',
    ],
];

$boostify_blocks_props = [
    'boostify_blocks_list'                   => $boostify_blocks_all_block_list,
    'boostify_blocks_enable_disable_options' => $boostify_blocks_enable_disable_options,
    'boostify_blocks_settings_options'       => $boostify_blocks_settings_options,
    'boostify_blocks_layout_global_settings' => boostify_blocks_get_layout_global_settings(),
    'boostify_blocks_meta'                   => $boostify_blocks_meta,
];

?>
<div id="boostify-blocks-dashboard-root" class="" data-props="<?php echo esc_attr(wp_json_encode($boostify_blocks_props)); ?>">
</div>
