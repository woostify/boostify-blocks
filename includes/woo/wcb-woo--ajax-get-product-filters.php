<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
add_action('wp_ajax_boostify_blocks_get_product_filters', 'boostify_blocks_woo__ajax_get_product_filters');
add_action('wp_ajax_nopriv_boostify_blocks_get_product_filters', 'boostify_blocks_woo__ajax_get_product_filters');

function boostify_blocks_woo__ajax_get_product_filters()
{
    // Verify nonce for security.
    if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['nonce'] ) ), 'boostifyblocks_dashboard_settings_nonce' ) ) {
        wp_send_json_error( array( 'message' => 'Invalid nonce' ), 403 );
        wp_die();
    }

    // Check user capability.
    if ( ! current_user_can( 'edit_posts' ) ) {
        wp_send_json_error( array( 'message' => 'Permission denied' ), 403 );
        wp_die();
    }

    $args = array(
        'post_type'      => 'product',
    );
    $query = new WP_Query($args);

    ob_start();

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            wc_get_template_part('content', 'product');
        }
    } else {
        do_action('woocommerce_no_products_found'); // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
    }

    $content = ob_get_clean();
    wp_reset_postdata();

    wp_send_json_success($content);
    wp_die();
}


function boostify_blocks_woo__get_product_filters_no_ajax()
{
    $args = array(
        'post_type'      => 'product', // product, not products
    );
    $query = new WP_Query($args);

    ob_start();

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            wc_get_template_part('content', 'product'); // use WooCommerce function to get html
        }
    } else {
        // handle not found by yourself or
        do_action('woocommerce_no_products_found'); // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
    }

    $content = ob_get_clean();
    return $content;
}
