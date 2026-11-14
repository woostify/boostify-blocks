<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Shared authentication & nonce verification guard for Boostify Dashboard AJAX actions.
 *
 * Calls wp_send_json_error() (terminating the request) when verification fails.
 *
 * @return void
 */
function boostify_blocks_verify_dashboard_ajax_request()
{
    if (
        ! isset( $_POST['nonce'] )
        || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['nonce'] ) ), 'boostifyblocks_dashboard_settings_nonce' )
    ) {
        wp_send_json_error( array( 'message' => esc_html__( 'Invalid nonce.', 'boostify-blocks' ) ), 403 );
    }

    if ( ! current_user_can( 'manage_options' ) ) {
        wp_send_json_error( array( 'message' => esc_html__( 'Permission denied.', 'boostify-blocks' ) ), 403 );
    }
}
