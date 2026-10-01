<?php
/**
 * Frontend CSS for Form Block.
 *
 * @package Boostify_Blocks
 */

/**
 * @var mixed[] $attr Block attributes.
 * @var string $unique_id Block unique ID.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$css = array(
	'desktop' => array(),
	'tablet'  => array(),
	'mobile'  => array(),
);

$gg   = $attr['general_general'] ?? array();
$gsb  = $attr['general_submit_button'] ?? array();
$sl   = $attr['style_label'] ?? array();
$si   = $attr['style_input'] ?? array();
$ss   = $attr['style_submit_button'] ?? array();
$sm   = $attr['style_messages'] ?? array();
$sp   = $attr['style_spacing'] ?? array();
$scrt = $attr['style_checkbox_radio_toggle'] ?? array();

$wrap_sel       = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$box_sel        = $wrap_sel . ' .wcb-form__box';
$inner_sel      = $wrap_sel . ' .wcb-form__inner';
$input_sel_parts = array(
	"$wrap_sel [type=\"text\"]",
	"$wrap_sel [type=\"email\"]",
	"$wrap_sel [type=\"url\"]",
	"$wrap_sel [type=\"password\"]",
	"$wrap_sel [type=\"number\"]",
	"$wrap_sel [type=\"date\"]",
	"$wrap_sel [type=\"datetime-local\"]",
	"$wrap_sel [type=\"month\"]",
	"$wrap_sel [type=\"search\"]",
	"$wrap_sel [type=\"tel\"]",
	"$wrap_sel [type=\"time\"]",
	"$wrap_sel [type=\"week\"]",
	"$wrap_sel [multiple]",
	"$wrap_sel select",
	"$wrap_sel textarea",
);
$input_sel            = implode( ', ', $input_sel_parts );
$input_hov_sel        = implode( ', ', array_map( function( $s ) { return $s . ':hover'; }, $input_sel_parts ) );
$input_foc_act_sel    = implode( ', ', array_merge(
	array_map( function( $s ) { return $s . ':focus'; }, $input_sel_parts ),
	array_map( function( $s ) { return $s . ':active'; }, $input_sel_parts )
) );
$input_ph_sel         = implode( ', ', array_map( function( $s ) { return $s . '::placeholder'; }, $input_sel_parts ) );
$input_ph_hov_sel     = implode( ', ', array_map( function( $s ) { return $s . ':hover::placeholder'; }, $input_sel_parts ) );
$input_ph_act_foc_sel = implode( ', ', array_merge(
	array_map( function( $s ) { return $s . ':focus::placeholder'; }, $input_sel_parts ),
	array_map( function( $s ) { return $s . ':active::placeholder'; }, $input_sel_parts )
) );

$label_sel            = $wrap_sel . ' .wcb-form__label';
$submit_wrap          = $wrap_sel . ' .wcb-form__btn-submit-wrap';
$submit_sel           = $wrap_sel . ' .wcb-form__btn-submit';
$success_sel          = $wrap_sel . ' .wcb-form__successMessageText';
$error_sel            = $wrap_sel . ' .wcb-form__errorMessageText';
$cb_radio_sel         = "$wrap_sel input[type=\"checkbox\"], $wrap_sel input[type=\"radio\"]";
$cb_radio_checked_sel = "$wrap_sel input[type=\"checkbox\"]:checked, $wrap_sel input[type=\"radio\"]:checked";
$toggle_sel           = $wrap_sel . ' .wcb-toggle__switch';

// 1. Wrap alignment & Submit wrap alignment
if ( ! empty( $gg['textAlignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $wrap_sel, 'text-align', $gg['textAlignment'] );
}

$btn_pos_d = $gsb['position']['Desktop'] ?? ( $gsb['position'] ?? 'bottom' );
$btn_pos_t = $gsb['position']['Tablet'] ?? $btn_pos_d;
$btn_pos_m = $gsb['position']['Mobile'] ?? $btn_pos_t;

$is_row_d = in_array( $btn_pos_d, array( 'right', 'left' ), true );
$is_row_t = in_array( $btn_pos_t, array( 'right', 'left' ), true );
$is_row_m = in_array( $btn_pos_m, array( 'right', 'left' ), true );

$btn_align_prop_d = $is_row_d ? 'align-items' : 'justify-content';
$btn_align_prop_t = $is_row_t ? 'align-items' : 'justify-content';
$btn_align_prop_m = $is_row_m ? 'align-items' : 'justify-content';

if ( ! empty( $gsb['textAlignment'] ) ) {
	$align_d = is_array( $gsb['textAlignment'] ) ? ( $gsb['textAlignment']['Desktop'] ?? '' ) : $gsb['textAlignment'];
	$align_t = is_array( $gsb['textAlignment'] ) ? ( $gsb['textAlignment']['Tablet'] ?? $align_d ) : $align_d;
	$align_m = is_array( $gsb['textAlignment'] ) ? ( $gsb['textAlignment']['Mobile'] ?? $align_t ) : $align_t;

	if ( '' !== $align_d && null !== $align_d ) {
		$css['desktop'][ $submit_wrap ][ $btn_align_prop_d ] = $align_d;
	}
	if ( '' !== $align_t && null !== $align_t ) {
		$css['tablet'][ $submit_wrap ][ $btn_align_prop_t ] = $align_t;
	}
	if ( '' !== $align_m && null !== $align_m ) {
		$css['mobile'][ $submit_wrap ][ $btn_align_prop_m ] = $align_m;
	}
}

// Box flex-direction
$get_box_flex = function( $pos ) {
	if ( 'right' === $pos ) {
		return 'row';
	}
	if ( 'left' === $pos ) {
		return 'row-reverse';
	}
	if ( 'top' === $pos ) {
		return 'column-reverse';
	}
	return 'column';
};
$css['desktop'][ $box_sel ]['flex-direction'] = $get_box_flex( $btn_pos_d );
$css['tablet'][ $box_sel ]['flex-direction']  = $get_box_flex( $btn_pos_t );
$css['mobile'][ $box_sel ]['flex-direction']  = $get_box_flex( $btn_pos_m );

// Spacing & Border on Wrap
if ( ! empty( $sp['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $wrap_sel, $sp['border'], true, true );
}
if ( ! empty( $sp['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'padding', $sp['padding'] );
}
if ( ! empty( $sp['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $sp['margin'] );
}
if ( ! empty( $sp['rowGap'] ) ) {
	$gap_sel = $inner_sel . ', ' . $box_sel;
	WCB_Block_Helper::add_responsive_css( $css, $gap_sel, 'row-gap', $sp['rowGap'] );
}
if ( ! empty( $sp['labelBottomMargin'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $label_sel, 'margin-bottom', $sp['labelBottomMargin'] );
}

// 2. Label
if ( ! empty( $sl['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $label_sel, $sl['typography'] );
}
if ( ! empty( $sl['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $label_sel, 'color', $sl['textColor'] );
}
if ( ! empty( $sl['textColorHover'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $label_sel . ':hover', 'color', $sl['textColorHover'] );
}
if ( isset( $gg['isShowLabel'] ) && ! $gg['isShowLabel'] ) {
	$css['desktop'][ $label_sel ]['display'] = 'none';
}

// 3. Input
if ( ! empty( $si['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $input_sel, $si['typography'] );
}
if ( ! empty( $si['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $input_sel, $si['border'], true, true );
}
if ( ! empty( $si['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $input_sel, 'padding', $si['padding'] );
}
if ( ! empty( $si['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $input_sel, 'color', $si['textColor'] );
}
$bg_norm = $si['bgAndPlaceholder']['Normal']['backgroundColor'] ?? ( $si['backgroundColor'] ?? '' );
if ( ! empty( $bg_norm ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $input_sel, 'background-color', $bg_norm );
}
$ph_norm = $si['bgAndPlaceholder']['Normal']['placeholderColor'] ?? '';
if ( ! empty( $ph_norm ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $input_ph_sel, 'color', $ph_norm );
}
$bg_hov = $si['bgAndPlaceholder']['Hover']['backgroundColor'] ?? '';
if ( ! empty( $bg_hov ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $input_hov_sel, 'background-color', $bg_hov );
}
$ph_hov = $si['bgAndPlaceholder']['Hover']['placeholderColor'] ?? '';
if ( ! empty( $ph_hov ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $input_ph_hov_sel, 'color', $ph_hov );
}
$bg_act = $si['bgAndPlaceholder']['Active']['backgroundColor'] ?? '';
if ( ! empty( $bg_act ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $input_foc_act_sel, 'background-color', $bg_act );
}
$ph_act = $si['bgAndPlaceholder']['Active']['placeholderColor'] ?? '';
if ( ! empty( $ph_act ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $input_ph_act_foc_sel, 'color', $ph_act );
}

// 4. Checkbox / Radio / Toggle
if ( ! empty( $scrt['border'] ) ) {
	$cb_toggle_border_sel = $cb_radio_sel . ', ' . $toggle_sel . ' .wcb-toggle__slider, ' . $toggle_sel . ' .wcb-toggle__slider::before';
	WCB_Block_Helper::add_border_css( $css, $cb_toggle_border_sel, $scrt['border'], true, true );
}
if ( ! empty( $scrt['colors']['Normal']['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $cb_radio_sel, 'background-color', $scrt['colors']['Normal']['backgroundColor'] );
	WCB_Block_Helper::add_responsive_css( $css, $toggle_sel . ' .wcb-toggle__slider', 'background-color', $scrt['colors']['Normal']['backgroundColor'] );
}
if ( ! empty( $scrt['colors']['Active']['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $cb_radio_checked_sel, 'background-color', $scrt['colors']['Active']['backgroundColor'] );
	WCB_Block_Helper::add_responsive_css( $css, $toggle_sel . ' input:checked + .wcb-toggle__slider', 'background-color', $scrt['colors']['Active']['backgroundColor'] );
}
if ( ! empty( $scrt['checkboxRadioSize'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $cb_radio_sel, 'width', $scrt['checkboxRadioSize'] );
	WCB_Block_Helper::add_responsive_css( $css, $cb_radio_sel, 'height', $scrt['checkboxRadioSize'] );
}
if ( ! empty( $scrt['toggleSize'] ) ) {
	$toggle_slider_sel  = $toggle_sel . ' .wcb-toggle__slider::before';
	$toggle_checked_sel = $toggle_sel . ' input:checked + .wcb-toggle__slider:before';

	$ts   = $scrt['toggleSize'];
	$ts_d = is_array( $ts ) ? ( $ts['Desktop'] ?? '' ) : $ts;
	$ts_t = is_array( $ts ) ? ( $ts['Tablet'] ?? $ts_d ) : $ts;
	$ts_m = is_array( $ts ) ? ( $ts['Mobile'] ?? $ts_t ) : $ts;

	if ( '' !== $ts_d && null !== $ts_d ) {
		$d_val = is_numeric( $ts_d ) ? ( $ts_d . 'rem' ) : $ts_d;
		$css['desktop'][ $toggle_slider_sel ]['width']  = $d_val;
		$css['desktop'][ $toggle_slider_sel ]['height'] = $d_val;
		$css['desktop'][ $toggle_checked_sel ]['transform'] = "translateX({$d_val})";
		$css['desktop'][ $toggle_sel ]['height'] = "calc({$d_val} + 8px)";
		$css['desktop'][ $toggle_sel ]['width']  = "calc(({$d_val} * 2) + 8px)";
	}
	if ( '' !== $ts_t && null !== $ts_t && $ts_t !== $ts_d ) {
		$t_val = is_numeric( $ts_t ) ? ( $ts_t . 'rem' ) : $ts_t;
		$css['tablet'][ $toggle_slider_sel ]['width']  = $t_val;
		$css['tablet'][ $toggle_slider_sel ]['height'] = $t_val;
		$css['tablet'][ $toggle_checked_sel ]['transform'] = "translateX({$t_val})";
		$css['tablet'][ $toggle_sel ]['height'] = "calc({$t_val} + 8px)";
		$css['tablet'][ $toggle_sel ]['width']  = "calc(({$t_val} * 2) + 8px)";
	}
	if ( '' !== $ts_m && null !== $ts_m && $ts_m !== $ts_t ) {
		$m_val = is_numeric( $ts_m ) ? ( $ts_m . 'rem' ) : $ts_m;
		$css['mobile'][ $toggle_slider_sel ]['width']  = $m_val;
		$css['mobile'][ $toggle_slider_sel ]['height'] = $m_val;
		$css['mobile'][ $toggle_checked_sel ]['transform'] = "translateX({$m_val})";
		$css['mobile'][ $toggle_sel ]['height'] = "calc({$m_val} + 8px)";
		$css['mobile'][ $toggle_sel ]['width']  = "calc(({$m_val} * 2) + 8px)";
	}
}

// 5. Submit Button
if ( ! empty( $ss['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $submit_sel, $ss['border'], true, true );
}
if ( ! empty( $ss['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $submit_sel, $ss['typography'] );
}
if ( ! empty( $ss['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $submit_sel, 'padding', $ss['padding'] );
}
if ( ! empty( $ss['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $submit_sel, 'margin', $ss['margin'] );
}
$btn_color_norm = $ss['colorAndBackgroundColor']['Normal']['color'] ?? '';
if ( ! empty( $btn_color_norm ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $submit_sel, 'color', $btn_color_norm );
}
$btn_bg_norm = $ss['colorAndBackgroundColor']['Normal']['backgroundColor'] ?? '';
if ( ! empty( $btn_bg_norm ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $submit_sel, 'background-color', $btn_bg_norm );
}
$btn_color_hov = $ss['colorAndBackgroundColor']['Hover']['color'] ?? '';
if ( ! empty( $btn_color_hov ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $submit_sel . ':hover', 'color', $btn_color_hov );
}
$btn_bg_hov = $ss['colorAndBackgroundColor']['Hover']['backgroundColor'] ?? '';
if ( ! empty( $btn_bg_hov ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $submit_sel . ':hover', 'background-color', $btn_bg_hov );
}

// 6. Messages
$msg_sel = $success_sel . ', ' . $error_sel;
if ( ! empty( $sm['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $msg_sel, $sm['typography'] );
}
if ( ! empty( $sm['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $msg_sel, 'margin', $sm['margin'] );
}
if ( ! empty( $sm['Success']['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $success_sel, $sm['Success']['border'], true, true );
}
$suc_color = $sm['Success']['color'] ?? ( $sm['successColor'] ?? '' );
if ( ! empty( $suc_color ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $success_sel, 'color', $suc_color );
}
if ( ! empty( $sm['Success']['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $success_sel, 'background-color', $sm['Success']['backgroundColor'] );
}
if ( ! empty( $sm['Error']['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $error_sel, $sm['Error']['border'], true, true );
}
$err_color = $sm['Error']['color'] ?? ( $sm['errorColor'] ?? '' );
if ( ! empty( $err_color ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $error_sel, 'color', $err_color );
}
if ( ! empty( $sm['Error']['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $error_sel, 'background-color', $sm['Error']['backgroundColor'] );
}

// 7. Advance
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
