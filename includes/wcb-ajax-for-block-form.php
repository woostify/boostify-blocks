<?php
/**
 * AJAX handler for Boostify Blocks form submissions.
 *
 * @package Boostify_Blocks
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'wp_ajax_boostify_blocks_form_action', 'boostify_blocks_form_action_init' );
add_action( 'wp_ajax_nopriv_boostify_blocks_form_action', 'boostify_blocks_form_action_init' );


/**
 * Handle form submission AJAX request.
 *
 * Processes form data and sends email notification.
 *
 * @since 1.0.0
 *
 * @return void
 */
function boostify_blocks_form_action_init() {
	// Verify nonce for security.
	if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['nonce'] ) ), 'boostifyblocks_form_nonce' ) ) {
		wp_send_json_error( 'Invalid nonce' );
		wp_die();
	}

	// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- Sanitized in recursive function below.
	$form_data = isset( $_POST['formData'] ) ? boostify_blocks_sanitize_array( wp_unslash( $_POST['formData'] ) ) : array();
	// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- Sanitized in recursive function below.
	$mail_info = isset( $_POST['mailInfo'] ) ? boostify_blocks_sanitize_array( wp_unslash( $_POST['mailInfo'] ) ) : array();

	$to      = isset( $mail_info['to'] ) ? sanitize_email( $mail_info['to'] ) : '';
	$subject = isset( $mail_info['subject'] ) ? $mail_info['subject'] : '';
	$cc      = isset( $mail_info['cc'] ) ? sanitize_email( $mail_info['cc'] ) : '';
	if ( ! is_email( $cc ) ) {
		$cc = '';
	}
	$bcc     = isset( $mail_info['bcc'] ) ? sanitize_email( $mail_info['bcc'] ) : '';
	if ( ! is_email( $bcc ) ) {
		$bcc = '';
	}

	$headers = array( 'Content-Type: text/html; charset=UTF-8' );
	if ( ! empty( $cc ) ) {
		$headers[] = 'Cc: ' . $cc;
	}
	if ( ! empty( $bcc ) ) {
		$headers[] = 'Bcc: ' . $bcc;
	}

	// Build email body.
	ob_start();
	?>
	<html>
	<body>
		<?php foreach ( $form_data as $field ) : ?>
			<p>
				<strong><?php echo esc_html( sanitize_text_field( $field['name'] ) ); ?></strong> - <span><?php echo esc_html( sanitize_text_field( $field['value'] ) ); ?></span>
			</p>
		<?php endforeach; ?>
	</body>
	</html>
	<?php
	$body = ob_get_clean();

	if ( ! empty( $to ) ) {
		wp_mail( $to, $subject, $body, $headers );
	}

	wp_send_json_success( 'OK' );
	wp_die();
}

add_action('wp_ajax_boostify_blocks_get_product_gallery', 'boostify_blocks_get_product_gallery_init');
add_action('wp_ajax_nopriv_boostify_blocks_get_product_gallery', 'boostify_blocks_get_product_gallery_init');
function boostify_blocks_get_product_gallery_init()
{
    $product_id = $_POST['product_id'] ?? 0;
    if (!$product_id) {
        wp_send_json_error('Invalid product ID');
        wp_die();
    }

    $product = wc_get_product($product_id);
    if (!$product) {
        wp_send_json_error('Product not found');
        wp_die();
    }

    $gallery_images = $product->get_gallery_image_ids();
    if (empty($gallery_images)) {
        wp_send_json_success(['html' => '']);
        wp_die();
    }

    ob_start();
    foreach ($gallery_images as $image_id) {
        $image_url = wp_get_attachment_image_url($image_id, 'full');
        if ($image_url) {
            echo '<img src="' . esc_url($image_url) . '" alt="' . esc_attr($product->get_name()) . '" />';
        }
    }
    $html = ob_get_clean();

    wp_send_json_success(['html' => $html]);
    wp_die();
}
