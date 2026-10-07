<?php
/**
 * Frontend CSS for Icon List Block.
 *
 * Mirrors src/block-icon-list/GlobalCss.tsx so every style rendered by the
 * emotion <Global> component in the editor is also present in the
 * generated per-post CSS files (asset generation).
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$css = array(
	'desktop' => array(),
	'tablet'  => array(),
	'mobile'  => array(),
);

$wrap_sel        = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$inner_sel       = $wrap_sel . ' .wcb-icon-list__icon-wrap';
$content_sel     = $wrap_sel . ' .wcb-icon-list__content';
$icon_sel        = $wrap_sel . ' .wcb-icon-list__icon';
$icon_full_sel   = $wrap_sel . ' .wcb-icon-full';
$heading_sel     = $wrap_sel . ' .wcb-icon-list__heading';
$designation_sel = $wrap_sel . ' .wcb-icon-list__designation';
$title_wrap_sel  = $wrap_sel . ' .wcb-icon-list__content-title-wrap';

// =====================================================================
// 1. LAYOUT & INNER CONTAINER (mirrors GlobalCss.tsx lines 72-139)
// =====================================================================
$gl  = $attr['general_layout'] ?? array();
$gi  = $attr['general_icon'] ?? array();
$sdm = $attr['style_dimension'] ?? array();

$layout   = $gl['layout'] ?? 'vertical';
$flex_dir = ( 'vertical' === $layout ) ? 'column' : 'row';

$css['desktop'][ $inner_sel ]['display']        = 'flex';
$css['desktop'][ $inner_sel ]['flex-direction'] = $flex_dir;

$css['desktop'][ $content_sel ]['display']        = 'flex';
$css['desktop'][ $content_sel ]['flex-direction'] = $flex_dir;

$align_prop = ( 'vertical' === $layout ) ? 'align-items' : 'justify-content';
$ta_raw     = $gl['textAlignment'] ?? array();
$ta_d       = is_array( $ta_raw ) ? ( $ta_raw['Desktop'] ?? 'left' ) : ( $ta_raw ?: 'left' );
$ta_t       = is_array( $ta_raw ) ? ( $ta_raw['Tablet'] ?? $ta_d ) : $ta_d;
$ta_m       = is_array( $ta_raw ) ? ( $ta_raw['Mobile'] ?? $ta_t ) : $ta_t;

$flex_align_d = WCB_Block_Helper::get_flex_align( $ta_d );
$flex_align_t = WCB_Block_Helper::get_flex_align( $ta_t );
$flex_align_m = WCB_Block_Helper::get_flex_align( $ta_m );

$css['desktop'][ $content_sel ][ $align_prop ] = $flex_align_d;
if ( $flex_align_t !== $flex_align_d ) {
	$css['tablet'][ $content_sel ][ $align_prop ] = $flex_align_t;
}
if ( $flex_align_m !== $flex_align_t ) {
	$css['mobile'][ $content_sel ][ $align_prop ] = $flex_align_m;
}

// Vertical Alignment.
if ( 'middle' === ( $gi['verticalAlignment'] ?? 'top' ) ) {
	$css['desktop'][ $inner_sel . ', ' . $content_sel ]['align-self'] = 'center';
}

// Icon position & title wrap.
$icon_pos = $gi['iconPosition'] ?? 'leftOfTitle';
$css['desktop'][ $inner_sel ]['order'] = ( 'leftOfTitle' === $icon_pos ) ? '0' : '2';

if ( 'leftOfTitle' === $icon_pos || 'rightOfTitle' === $icon_pos ) {
	$css['desktop'][ $title_wrap_sel ]['display'] = 'flex';
}

// Gap between items.
if ( ! empty( $sdm['gapBetweenItems'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'gap', $sdm['gapBetweenItems'], 'px' );
}

// Wrap Padding & Margin.
if ( ! empty( $sdm['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'padding', $sdm['padding'] );
}
if ( ! empty( $sdm['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $sdm['margin'] );
}

// =====================================================================
// 2. ICON STYLES (mirrors GlobalCss.tsx lines 158-191)
// =====================================================================
$enable_icon = $gi['enableIcon'] ?? true;
if ( $enable_icon ) {
	$si = $attr['style_Icon'] ?? array();

	// Icon Margin & Padding.
	if ( ! empty( $si['dimensions']['margin'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $icon_sel, 'margin', $si['dimensions']['margin'] );
	}
	if ( ! empty( $si['dimensions']['padding'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $icon_sel, 'padding', $si['dimensions']['padding'] );
	}

	// Icon Border & Radius.
	if ( ! empty( $si['border'] ) ) {
		WCB_Block_Helper::add_border_css( $css, $icon_sel, $si['border'], true, true );
	}


	// Icon Size (width & font-size).
	if ( ! empty( $si['iconSize'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel, 'width', $si['iconSize'], 'px' );
		WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel, 'font-size', $si['iconSize'], 'px' );
	}

	// Icon Color & Hover.
	if ( ! empty( $si['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel, 'color', $si['color'] );
	}
	if ( ! empty( $si['hoverColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel . ':hover', 'color', $si['hoverColor'] );
	}
}

// =====================================================================
// 3. TITLE / HEADING (mirrors GlobalCss.tsx lines 193-216)
// =====================================================================
$enable_title = $gl['enableTitle'] ?? true;
if ( $enable_title ) {
	$st = $attr['style_title'] ?? array();

	if ( ! empty( $st['typography'] ) ) {
		WCB_Block_Helper::add_typography_css( $css, $heading_sel, $st['typography'] );
	}
	if ( ! empty( $st['marginBottom'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $heading_sel, 'margin-bottom', $st['marginBottom'], 'px' );
	}
	if ( ! empty( $st['textColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $heading_sel, 'color', $st['textColor'] );
	}
	if ( ! empty( $st['textColorHover'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $heading_sel . ':hover', 'color', $st['textColorHover'] );
	}
}

// =====================================================================
// 4. DESIGNATION / PREFIX (mirrors GlobalCss.tsx lines 219-239)
// =====================================================================
$enable_prefix = $gl['enablePrefix'] ?? false;
if ( $enable_prefix ) {
	$sd = $attr['style_desination'] ?? array();

	if ( ! empty( $sd['typography'] ) ) {
		WCB_Block_Helper::add_typography_css( $css, $designation_sel, $sd['typography'] );
	}
	if ( ! empty( $sd['marginBottom'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $designation_sel, 'margin-bottom', $sd['marginBottom'], 'px' );
	}
	if ( ! empty( $sd['textColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $designation_sel, 'color', $sd['textColor'] );
	}
}

// =====================================================================
// 5. ADVANCE (responsive condition + motion effect + z-index)
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
