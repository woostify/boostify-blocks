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

add_action( 'wp_ajax_boostifyblocks_form_action', 'boostify_blocks_form_action_init' );
add_action( 'wp_ajax_nopriv_boostifyblocks_form_action', 'boostify_blocks_form_action_init' );

if ( ! function_exists( 'boostify_blocks_sanitize_array' ) ) {
	/**
	 * Recursively sanitize an array of data.
	 *
	 * @since 1.0.0
	 *
	 * @param array $array The array to sanitize.
	 * @return array The sanitized array.
	 */
	function boostify_blocks_sanitize_array( $array ) {
		if ( ! is_array( $array ) ) {
			return sanitize_text_field( $array );
		}
		$sanitized = array();
		foreach ( $array as $key => $value ) {
			$key = sanitize_text_field( $key );
			if ( is_array( $value ) ) {
				$sanitized[ $key ] = boostify_blocks_sanitize_array( $value );
			} else {
				$sanitized[ $key ] = sanitize_text_field( $value );
			}
		}
		return $sanitized;
	}
}

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
	$bcc     = isset( $mail_info['bcc'] ) ? sanitize_email( $mail_info['bcc'] ) : '';

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
				<strong><?php echo esc_html( $field['name'] ); ?></strong> - <span><?php echo esc_html( $field['value'] ); ?></span>
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
