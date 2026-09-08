<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
/**
 * Register a custom menu page.
 */
function boostify_blocks_register_custom_menu_page() {

	$icon = 'data:image/svg+xml;base64,' . base64_encode(
		file_get_contents( BOOSTIFY_BLOCKS_PATH . 'public/images/bb-logo-icon.svg' )
	);

	add_menu_page(
		__( 'Boostify Blocks Settings', 'boostify-blocks' ),
		__( 'Boostify Blocks', 'boostify-blocks' ),
		'manage_options',
		'boostify-blocks-settings',
		'boostify_blocks_render_settings_page',
		$icon
	);
}
add_action( 'admin_menu', 'boostify_blocks_register_custom_menu_page' );

/**
 * Hide all admin notices on the Boostify Blocks settings page.
 */
function boostify_blocks_hide_admin_notices() {
	$screen = get_current_screen();
	if ( $screen && 'toplevel_page_boostify-blocks-settings' === $screen->id ) {
		remove_all_actions( 'admin_notices' );
		remove_all_actions( 'all_admin_notices' );
	}
}
add_action( 'admin_head', 'boostify_blocks_hide_admin_notices' );

/**
 * Render the Boostify Blocks settings page.
 */
function boostify_blocks_render_settings_page() {
	require_once BOOSTIFY_BLOCKS_PATH . 'includes/settings-page.php';
}
