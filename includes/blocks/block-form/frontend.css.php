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

$selectors   = array();
$t_selectors = array();
$m_selectors = array();

$gg  = $attr['general_general'] ?? array();
$gsb = $attr['general_submit_button'] ?? array();
$sl  = $attr['style_label'] ?? array();
$si  = $attr['style_input'] ?? array();
$ss  = $attr['style_submit_button'] ?? array();
$sm  = $attr['style_messages'] ?? array();
$sp  = $attr['style_spacing'] ?? array();
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
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $gg['textAlignment'], 'text-align', $wrap_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $gg['textAlignment'], 'text-align', $wrap_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $gg['textAlignment'], 'text-align', $wrap_sel, 'mobile' ) );
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
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $gsb['textAlignment'], $btn_align_prop_d, $submit_wrap, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $gsb['textAlignment'], $btn_align_prop_t, $submit_wrap, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $gsb['textAlignment'], $btn_align_prop_m, $submit_wrap, 'mobile' ) );
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
$selectors[ $box_sel ]['flex-direction']   = $get_box_flex( $btn_pos_d );
$t_selectors[ $box_sel ]['flex-direction'] = $get_box_flex( $btn_pos_t );
$m_selectors[ $box_sel ]['flex-direction'] = $get_box_flex( $btn_pos_m );

// Spacing & Border on Wrap
if ( ! empty( $sp['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sp['border'], $wrap_sel, true ) );
}
if ( ! empty( $sp['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sp['padding'], 'padding', $wrap_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sp['padding'], 'padding', $wrap_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sp['padding'], 'padding', $wrap_sel, 'mobile' ) );
}
if ( ! empty( $sp['margin'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sp['margin'], 'margin', $wrap_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sp['margin'], 'margin', $wrap_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sp['margin'], 'margin', $wrap_sel, 'mobile' ) );
}
if ( ! empty( $sp['rowGap'] ) ) {
	$gap_sel = $inner_sel . ', ' . $box_sel;
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sp['rowGap'], 'row-gap', $gap_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sp['rowGap'], 'row-gap', $gap_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sp['rowGap'], 'row-gap', $gap_sel, 'mobile' ) );
}
if ( ! empty( $sp['labelBottomMargin'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sp['labelBottomMargin'], 'margin-bottom', $label_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sp['labelBottomMargin'], 'margin-bottom', $label_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sp['labelBottomMargin'], 'margin-bottom', $label_sel, 'mobile' ) );
}

// 2. Label
if ( ! empty( $sl['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $sl['typography'], $label_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $sl['typography'], $label_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $sl['typography'], $label_sel, 'mobile' ) );
}
if ( ! empty( $sl['textColor'] ) ) {
	$selectors[ $label_sel ]['color'] = $sl['textColor'];
}
if ( ! empty( $sl['textColorHover'] ) ) {
	$selectors[ $label_sel . ':hover' ]['color'] = $sl['textColorHover'];
}
if ( isset( $gg['isShowLabel'] ) && ! $gg['isShowLabel'] ) {
	$selectors[ $label_sel ]['display'] = 'none';
}

// 3. Input
if ( ! empty( $si['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $si['typography'], $input_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $si['typography'], $input_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $si['typography'], $input_sel, 'mobile' ) );
}
if ( ! empty( $si['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $si['border'], $input_sel, true ) );
}
if ( ! empty( $si['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $si['padding'], 'padding', $input_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $si['padding'], 'padding', $input_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $si['padding'], 'padding', $input_sel, 'mobile' ) );
}
if ( ! empty( $si['textColor'] ) ) {
	$selectors[ $input_sel ]['color'] = $si['textColor'];
}
$bg_norm = $si['bgAndPlaceholder']['Normal']['backgroundColor'] ?? ( $si['backgroundColor'] ?? '' );
if ( ! empty( $bg_norm ) ) {
	$selectors[ $input_sel ]['background-color'] = $bg_norm;
}
$ph_norm = $si['bgAndPlaceholder']['Normal']['placeholderColor'] ?? '';
if ( ! empty( $ph_norm ) ) {
	$selectors[ $input_ph_sel ]['color'] = $ph_norm;
}
$bg_hov = $si['bgAndPlaceholder']['Hover']['backgroundColor'] ?? '';
if ( ! empty( $bg_hov ) ) {
	$selectors[ $input_hov_sel ]['background-color'] = $bg_hov;
}
$ph_hov = $si['bgAndPlaceholder']['Hover']['placeholderColor'] ?? '';
if ( ! empty( $ph_hov ) ) {
	$selectors[ $input_ph_hov_sel ]['color'] = $ph_hov;
}
$bg_act = $si['bgAndPlaceholder']['Active']['backgroundColor'] ?? '';
if ( ! empty( $bg_act ) ) {
	$selectors[ $input_foc_act_sel ]['background-color'] = $bg_act;
}
$ph_act = $si['bgAndPlaceholder']['Active']['placeholderColor'] ?? '';
if ( ! empty( $ph_act ) ) {
	$selectors[ $input_ph_act_foc_sel ]['color'] = $ph_act;
}

// 4. Checkbox / Radio / Toggle
if ( ! empty( $scrt['border'] ) ) {
	$cb_toggle_border_sel = $cb_radio_sel . ', ' . $toggle_sel . ' .wcb-toggle__slider, ' . $toggle_sel . ' .wcb-toggle__slider::before';
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $scrt['border'], $cb_toggle_border_sel, true ) );
}
if ( ! empty( $scrt['colors']['Normal']['backgroundColor'] ) ) {
	$selectors[ $cb_radio_sel ]['background-color'] = $scrt['colors']['Normal']['backgroundColor'];
	$selectors[ $toggle_sel . ' .wcb-toggle__slider' ]['background-color'] = $scrt['colors']['Normal']['backgroundColor'];
}
if ( ! empty( $scrt['colors']['Active']['backgroundColor'] ) ) {
	$selectors[ $cb_radio_checked_sel ]['background-color'] = $scrt['colors']['Active']['backgroundColor'];
	$selectors[ $toggle_sel . ' input:checked + .wcb-toggle__slider' ]['background-color'] = $scrt['colors']['Active']['backgroundColor'];
}
if ( ! empty( $scrt['checkboxRadioSize'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $scrt['checkboxRadioSize'], 'width', $cb_radio_sel, 'desktop' ) );
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $scrt['checkboxRadioSize'], 'height', $cb_radio_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $scrt['checkboxRadioSize'], 'width', $cb_radio_sel, 'tablet' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $scrt['checkboxRadioSize'], 'height', $cb_radio_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $scrt['checkboxRadioSize'], 'width', $cb_radio_sel, 'mobile' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $scrt['checkboxRadioSize'], 'height', $cb_radio_sel, 'mobile' ) );
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
		$selectors[ $toggle_slider_sel ]['width']  = $d_val;
		$selectors[ $toggle_slider_sel ]['height'] = $d_val;
		$selectors[ $toggle_checked_sel ]['transform'] = "translateX({$d_val})";
		$selectors[ $toggle_sel ]['height'] = "calc({$d_val} + 8px)";
		$selectors[ $toggle_sel ]['width']  = "calc(({$d_val} * 2) + 8px)";
	}
	if ( '' !== $ts_t && null !== $ts_t && $ts_t !== $ts_d ) {
		$t_val = is_numeric( $ts_t ) ? ( $ts_t . 'rem' ) : $ts_t;
		$t_selectors[ $toggle_slider_sel ]['width']  = $t_val;
		$t_selectors[ $toggle_slider_sel ]['height'] = $t_val;
		$t_selectors[ $toggle_checked_sel ]['transform'] = "translateX({$t_val})";
		$t_selectors[ $toggle_sel ]['height'] = "calc({$t_val} + 8px)";
		$t_selectors[ $toggle_sel ]['width']  = "calc(({$t_val} * 2) + 8px)";
	}
	if ( '' !== $ts_m && null !== $ts_m && $ts_m !== $ts_t ) {
		$m_val = is_numeric( $ts_m ) ? ( $ts_m . 'rem' ) : $ts_m;
		$m_selectors[ $toggle_slider_sel ]['width']  = $m_val;
		$m_selectors[ $toggle_slider_sel ]['height'] = $m_val;
		$m_selectors[ $toggle_checked_sel ]['transform'] = "translateX({$m_val})";
		$m_selectors[ $toggle_sel ]['height'] = "calc({$m_val} + 8px)";
		$m_selectors[ $toggle_sel ]['width']  = "calc(({$m_val} * 2) + 8px)";
	}
}

// 5. Submit Button
if ( ! empty( $ss['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $ss['border'], $submit_sel, true ) );
}
if ( ! empty( $ss['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $ss['typography'], $submit_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $ss['typography'], $submit_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $ss['typography'], $submit_sel, 'mobile' ) );
}
if ( ! empty( $ss['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $ss['padding'], 'padding', $submit_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $ss['padding'], 'padding', $submit_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $ss['padding'], 'padding', $submit_sel, 'mobile' ) );
}
if ( ! empty( $ss['margin'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $ss['margin'], 'margin', $submit_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $ss['margin'], 'margin', $submit_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $ss['margin'], 'margin', $submit_sel, 'mobile' ) );
}
$btn_color_norm = $ss['colorAndBackgroundColor']['Normal']['color'] ?? '';
if ( ! empty( $btn_color_norm ) ) {
	$selectors[ $submit_sel ]['color'] = $btn_color_norm;
}
$btn_bg_norm = $ss['colorAndBackgroundColor']['Normal']['backgroundColor'] ?? '';
if ( ! empty( $btn_bg_norm ) ) {
	$selectors[ $submit_sel ]['background-color'] = $btn_bg_norm;
}
$btn_color_hov = $ss['colorAndBackgroundColor']['Hover']['color'] ?? '';
if ( ! empty( $btn_color_hov ) ) {
	$selectors[ $submit_sel . ':hover' ]['color'] = $btn_color_hov;
}
$btn_bg_hov = $ss['colorAndBackgroundColor']['Hover']['backgroundColor'] ?? '';
if ( ! empty( $btn_bg_hov ) ) {
	$selectors[ $submit_sel . ':hover' ]['background-color'] = $btn_bg_hov;
}

// 6. Messages
$msg_sel = $success_sel . ', ' . $error_sel;
if ( ! empty( $sm['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $sm['typography'], $msg_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $sm['typography'], $msg_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $sm['typography'], $msg_sel, 'mobile' ) );
}
if ( ! empty( $sm['margin'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sm['margin'], 'margin', $msg_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sm['margin'], 'margin', $msg_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sm['margin'], 'margin', $msg_sel, 'mobile' ) );
}
if ( ! empty( $sm['Success']['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sm['Success']['border'], $success_sel, true ) );
}
$suc_color = $sm['Success']['color'] ?? ( $sm['successColor'] ?? '' );
if ( ! empty( $suc_color ) ) {
	$selectors[ $success_sel ]['color'] = $suc_color;
}
if ( ! empty( $sm['Success']['backgroundColor'] ) ) {
	$selectors[ $success_sel ]['background-color'] = $sm['Success']['backgroundColor'];
}
if ( ! empty( $sm['Error']['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sm['Error']['border'], $error_sel, true ) );
}
$err_color = $sm['Error']['color'] ?? ( $sm['errorColor'] ?? '' );
if ( ! empty( $err_color ) ) {
	$selectors[ $error_sel ]['color'] = $err_color;
}
if ( ! empty( $sm['Error']['backgroundColor'] ) ) {
	$selectors[ $error_sel ]['background-color'] = $sm['Error']['backgroundColor'];
}

// 7. Advance
$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

