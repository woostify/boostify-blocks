<?php
/**
 * Frontend CSS for FAQ Block.
 *
 * Mirrors src/block-faq/GlobalCss.tsx so every style rendered by the
 * emotion <Global> component in the editor is also present in the
 * generated per-post CSS files (asset generation).
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

$wrap_sel          = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$inner_sel         = $wrap_sel . ' .wcb-faq__inner';
$faq_child_wrap    = $wrap_sel . ' .wcb-faq-child__wrap';
$faq_question      = $wrap_sel . ' .wcb-faq-child__question';
$faq_question_text = $wrap_sel . ' .wcb-faq-child__question-text';
$faq_answer        = $wrap_sel . ' .wcb-faq-child__answer';
$faq_answer_text   = $wrap_sel . ' .wcb-faq-child__answer-text';
$faq_icon          = $wrap_sel . ' .wcb-faq-child__icon';
$faq_separator     = $wrap_sel . ' .wcb-faq-child__separator';

// =====================================================================
// 1. WRAP (padding & margin)
// =====================================================================
$sdm = $attr['style_dimension'] ?? array();
if ( ! empty( $sdm['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $sdm['margin'] );
}
if ( ! empty( $sdm['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'padding', $sdm['padding'] );
}

// =====================================================================
// 2. INNER (.wcb-faq__inner)
// =====================================================================
$sc = $attr['style_container'] ?? array();
$gg = $attr['general_general'] ?? array();

if ( ! empty( $sc['colunmGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'column-gap', $sc['colunmGap'] );
}
if ( ! empty( $sc['rowGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'row-gap', $sc['rowGap'] );
}
if ( ! empty( $gg['textAlignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'text-align', $gg['textAlignment'] );
}

// Grid layout.
if ( ( $gg['layout'] ?? 'accordion' ) === 'grid' ) {
	$cols  = $gg['columns'] ?? array();
	$d_col = is_array( $cols ) ? ( $cols['Desktop'] ?? 2 ) : ( $cols ?: 2 );
	$t_col = is_array( $cols ) ? ( $cols['Tablet'] ?? $d_col ) : $d_col;
	$m_col = is_array( $cols ) ? ( $cols['Mobile'] ?? 1 ) : 1;

	$css['desktop'][ $inner_sel ]['grid-template-columns'] = 'repeat(' . $d_col . ', minmax(0, 1fr))';
	$css['tablet'][ $inner_sel ]['grid-template-columns']  = 'repeat(' . $t_col . ', minmax(0, 1fr))';
	$css['mobile'][ $inner_sel ]['grid-template-columns']  = 'repeat(' . $m_col . ', minmax(0, 1fr))';

	$css['desktop'][ $faq_question ]['display'] = 'block';

	if ( empty( $sc['equalHeight'] ) ) {
		$css['desktop'][ $faq_child_wrap ]['height'] = 'fit-content';
	}
}

// =====================================================================
// 3. FAQ CHILD WRAP (.wcb-faq-child__wrap)
// =====================================================================
if ( ! empty( $sc['background'] ) ) {
	$bg      = $sc['background'];
	$bg_type = $bg['bgType'] ?? 'color';
	if ( 'color' === $bg_type && ! empty( $bg['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $faq_child_wrap, 'background-color', $bg['color'] );
	} elseif ( 'gradient' === $bg_type && ! empty( $bg['gradient'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $faq_child_wrap, 'background-image', $bg['gradient'] );
	}
}

if ( ! empty( $sc['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $faq_child_wrap, $sc['border'], true, true, true );
	WCB_Block_Helper::add_border_css( $css, $faq_separator, $sc['border'], true, true, true );
}

// =====================================================================
// 4. QUESTION (.wcb-faq-child__question)
// =====================================================================
$sq = $attr['style_question'] ?? array();
if ( ! empty( $sq['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $faq_question, $sq['typography'] );
}
if ( ! empty( $sq['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $faq_question, 'padding', $sq['padding'] );
}

$si = $attr['style_icon'] ?? array();
if ( ! empty( $si['colGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $faq_question, 'gap', $si['colGap'] );
}

if ( ! empty( $sq['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $faq_question, 'color', $sq['color'] );
}
if ( ! empty( $sq['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $faq_question, 'background-color', $sq['backgroundColor'] );
}
if ( ! empty( $sq['colorHover'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $faq_question . ':hover', 'color', $sq['colorHover'] );
	WCB_Block_Helper::add_responsive_css( $css, $wrap_sel . ' .wcb-faq-child__wrap.is-open .wcb-faq-child__question', 'color', $sq['colorHover'] );
}
if ( ! empty( $sq['backgroundColorHover'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $faq_question . ':hover', 'background-color', $sq['backgroundColorHover'] );
	WCB_Block_Helper::add_responsive_css( $css, $wrap_sel . ' .wcb-faq-child__wrap.is-open .wcb-faq-child__question', 'background-color', $sq['backgroundColorHover'] );
}

// =====================================================================
// 5. ICON (.wcb-faq-child__icon)
// =====================================================================
if ( ! empty( $si['size'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $faq_icon, 'font-size', $si['size'] );
	WCB_Block_Helper::add_responsive_css( $css, $faq_icon, 'height', $si['size'] );
	WCB_Block_Helper::add_responsive_css( $css, $faq_icon, 'width', $si['size'] );
}
if ( ! empty( $si['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $faq_icon, 'color', $si['color'] );
}
if ( ! empty( $si['activeColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $wrap_sel . ' .wcb-faq-child__wrap.is-open .wcb-faq-child__icon', 'color', $si['activeColor'] );
}

// =====================================================================
// 6. ANSWER (.wcb-faq-child__answer)
// =====================================================================
$sa = $attr['style_answer'] ?? array();
if ( ! empty( $sa['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $faq_answer, $sa['typography'] );
}
if ( ! empty( $sa['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $faq_answer, 'padding', $sa['padding'] );
}
if ( ! empty( $sa['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $faq_answer, 'color', $sa['color'] );
}
if ( ! empty( $sa['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $faq_answer, 'background-color', $sa['backgroundColor'] );
}

// =====================================================================
// 7. ADVANCE (responsive condition + motion effect + z-index)
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
