<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
add_action('wp_ajax_wcbform_action', 'wcb_form_action_init');
add_action('wp_ajax_nopriv_wcbform_action', 'wcb_form_action_init');
function wcb_form_action_init()
{

    // Verify nonce to ensure the request originated from our site.
    if (
        ! isset($_POST['nonce']) ||
        ! check_ajax_referer('wcb_form_action_nonce', 'nonce', false)
    ) {
        wp_send_json_error(array('message' => __('Invalid security token.', 'boostify-blocks')), 400);
        wp_die();
    }

    $form_data = isset($_POST['formData']) && is_array($_POST['formData']) ? $_POST['formData'] : [];
    $mail_info = isset($_POST['mailInfo']) && is_array($_POST['mailInfo']) ? $_POST['mailInfo'] : [];
    // TEST
    // wp_send_json_success('Chào mừng bạn đến với ' . $mail_info['subject'] . $mail_info['to'] . $mail_info['cc'] . $mail_info['bcc']);
    // wp_die();
    // 
    $to = isset($mail_info['to']) ? sanitize_email($mail_info['to']) : '';
    $subject = isset($mail_info['subject']) ? sanitize_text_field($mail_info['subject']) : '';
    $body = '<html><body><h1>Hello World!</h1></body></html>';
    $headers = array('Content-Type: text/html; charset=UTF-8');
    if ( ! empty($mail_info['cc']) ) {
        $headers[] = 'Cc: ' . sanitize_email($mail_info['cc']);
    }
    if ( ! empty($mail_info['bcc']) ) {
        $headers[] = 'Bcc: ' . sanitize_email($mail_info['bcc']);
    }

    // BODY
    ob_start();
?>
    <html>

    <body>
        <?php foreach ($form_data as &$field) : ?>
            <p>
                <strong><?php echo esc_html($field["name"]); ?></strong> - <span> <?php echo esc_html($field["value"]); ?></span>
            </p>
        <?php endforeach; ?>
    </body>

    </html>
<?php
    $body = ob_get_contents();
    ob_end_clean();
    // END BODY
    if (!empty($to)) {
        wp_mail($to, $subject, $body, $headers);
    }

    wp_send_json_success('OK');
    wp_die();
}
