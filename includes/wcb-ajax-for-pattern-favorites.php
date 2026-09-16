<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! function_exists( 'boostify_blocks_get_favorite_patterns_meta' ) ) :
    function boostify_blocks_get_favorite_patterns_meta( $user_id )
    {
        $favorites = get_user_meta( $user_id, 'boostify_blocks_favorite_patterns', true );

        if ( ! is_array( $favorites ) ) {
            return array();
        }

        return array_values( array_unique( array_map( 'absint', $favorites ) ) );
    }
endif;

add_action( 'wp_ajax_boostify_blocks_get_favorite_patterns', 'boostify_blocks_ajax_get_favorite_patterns' );
function boostify_blocks_ajax_get_favorite_patterns()
{
    if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['nonce'] ) ), 'boostifyblocks_dashboard_settings_nonce' ) ) {
        wp_send_json_error( array( 'message' => 'Invalid nonce' ), 403 );
        wp_die();
    }

    if ( ! current_user_can( 'edit_posts' ) ) {
        wp_send_json_error( array( 'message' => 'Permission denied' ), 403 );
        wp_die();
    }

    wp_send_json(
        array(
            'data'    => boostify_blocks_get_favorite_patterns_meta( get_current_user_id() ),
            'message' => 'your message',
        )
    );
    wp_die();
}

add_action( 'wp_ajax_boostify_blocks_toggle_favorite_pattern', 'boostify_blocks_ajax_toggle_favorite_pattern' );
function boostify_blocks_ajax_toggle_favorite_pattern()
{
    if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['nonce'] ) ), 'boostifyblocks_dashboard_settings_nonce' ) ) {
        wp_send_json_error( array( 'message' => 'Invalid nonce' ), 403 );
        wp_die();
    }

    if ( ! current_user_can( 'edit_posts' ) ) {
        wp_send_json_error( array( 'message' => 'Permission denied' ), 403 );
        wp_die();
    }

    $pattern_id = isset( $_POST['patternId'] ) ? absint( $_POST['patternId'] ) : 0;

    if ( ! $pattern_id ) {
        wp_send_json_error( array( 'message' => 'Missing patternId' ), 400 );
        wp_die();
    }

    $user_id   = get_current_user_id();
    $favorites = boostify_blocks_get_favorite_patterns_meta( $user_id );

    if ( in_array( $pattern_id, $favorites, true ) ) {
        $favorites = array_values( array_diff( $favorites, array( $pattern_id ) ) );
    } else {
        $favorites[] = $pattern_id;
    }

    update_user_meta( $user_id, 'boostify_blocks_favorite_patterns', $favorites );

    wp_send_json(
        array(
            'data'    => $favorites,
            'message' => 'your message',
        )
    );
    wp_die();
}
