<?php
/**
 * Frontend CSS for Call to Action Block.
 *
 * Mirrors src/block-cta/GlobalCss.tsx so every style rendered by the
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

$wrap_sel    = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$inner_sel   = $wrap_sel . ' .wcb-cta__inner';
$content_sel = $wrap_sel . ' .wcb-cta__content';
$title_sel   = $wrap_sel . ' .wcb-cta__title';
$desc_sel    = $wrap_sel . ' .wcb-cta__description';

// =====================================================================
// 1. GENERAL LAYOUT & INNER CONTAINER
// =====================================================================
$gl  = $attr['general_layout'] ?? array();
$sdm = $attr['style_dimension'] ?? array();

// Text alignment on inner.
if ( ! empty( $gl['textAlignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'text-align', $gl['textAlignment'] );
}

// Flex direction on inner.
if ( ! empty( $gl['flexDirection'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'flex-direction', $gl['flexDirection'] );
}

// Compute ALIGN_ITEMS (mirrors GlobalCss.tsx lines 56-94).
$text_align_raw = $gl['textAlignment'] ?? array();
$ta_d           = is_array( $text_align_raw ) ? ( $text_align_raw['Desktop'] ?? 'left' ) : ( $text_align_raw ?: 'left' );
$ta_t           = is_array( $text_align_raw ) ? ( $text_align_raw['Tablet'] ?? $ta_d ) : $ta_d;
$ta_m           = is_array( $text_align_raw ) ? ( $text_align_raw['Mobile'] ?? $ta_t ) : $ta_t;

$flex_dir_raw = $gl['flexDirection'] ?? array();
$fd_d         = is_array( $flex_dir_raw ) ? ( $flex_dir_raw['Desktop'] ?? 'row' ) : ( $flex_dir_raw ?: 'row' );
$fd_t         = is_array( $flex_dir_raw ) ? ( $flex_dir_raw['Tablet'] ?? $fd_d ) : $fd_d;
$fd_m         = is_array( $flex_dir_raw ) ? ( $flex_dir_raw['Mobile'] ?? $fd_t ) : $fd_t;

$calc_align_item = function ( $ta, $fd ) {
	if ( 'row' === $fd || 'row-reverse' === $fd ) {
		return 'center';
	}
	if ( 'left' === $ta ) {
		return 'start';
	}
	if ( 'right' === $ta ) {
		return 'end';
	}
	return 'center';
};

$align_d = $calc_align_item( $ta_d, $fd_d );
$align_t = $calc_align_item( $ta_t, $fd_t );
$align_m = $calc_align_item( $ta_m, $fd_m );

if ( ! empty( $align_d ) || ! empty( $align_t ) || ! empty( $align_m ) ) {
	WCB_Block_Helper::add_responsive_css(
		$css,
		$inner_sel,
		'align-items',
		array(
			'Desktop' => $align_d,
			'Tablet'  => $align_t,
			'Mobile'  => $align_m,
		)
	);
}

// Gap between content and buttons.
if ( ! empty( $sdm['gap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'gap', $sdm['gap'] );
}

// Inner padding & margin.
if ( ! empty( $sdm['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $inner_sel, 'padding', $sdm['padding'] );
}
if ( ! empty( $sdm['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $inner_sel, 'margin', $sdm['margin'] );
}

// Content Width.
if ( ! empty( $gl['contentWidth'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $content_sel, 'width', $gl['contentWidth'] );
}

// =====================================================================
// 2. TITLE
// =====================================================================
$st = $attr['style_title'] ?? array();

if ( ! empty( $st['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $title_sel, $st['typography'] );
}
if ( ! empty( $st['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_sel, 'margin-bottom', $st['marginBottom'] );
}
if ( ! empty( $st['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_sel, 'color', $st['textColor'] );
}

// =====================================================================
// 3. DESCRIPTION
// =====================================================================
$sd = $attr['style_description'] ?? array();

if ( ! empty( $sd['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $desc_sel, $sd['typography'] );
}
if ( ! empty( $sd['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $desc_sel, 'margin-bottom', $sd['marginBottom'] );
}
if ( ! empty( $sd['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $desc_sel, 'color', $sd['textColor'] );
}

// =====================================================================
// 4. ADVANCE (responsive condition + z-index)
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
