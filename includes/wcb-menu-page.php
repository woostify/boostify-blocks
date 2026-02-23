<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
/**
 * Register a custom menu page.
 */
function boostify_blocks_register_custom_menu_page() {
	add_menu_page(
		__( 'Boostify Blocks Settings', 'boostify-blocks' ),
		__( 'Boostify Blocks', 'boostify-blocks' ),
		'manage_options',
		BOOSTIFY_BLOCKS_PATH . 'includes/settings-page.php',
		'',
		'dashicons-screenoptions',
		61
	);
}
add_action( 'admin_menu', 'boostify_blocks_register_custom_menu_page' );

/**
 * Render the Boostify Blocks settings page.
 */
function boostify_blocks_render_settings_page() {
	require_once BOOSTIFY_BLOCKS_PATH . 'includes/settings-page.php';
}
