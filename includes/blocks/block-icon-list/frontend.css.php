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
$inner_sel       = $wrap_sel . ' > .wcb-icon-list__icon-wrap';
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

$ta_raw     = $gl['textAlignment'] ?? array();
$ta_d       = is_array( $ta_raw ) ? ( $ta_raw['Desktop'] ?? 'left' ) : ( $ta_raw ?: 'left' );
$ta_t       = is_array( $ta_raw ) ? ( $ta_raw['Tablet'] ?? $ta_d ) : $ta_d;
$ta_m       = is_array( $ta_raw ) ? ( $ta_raw['Mobile'] ?? $ta_t ) : $ta_t;

$flex_align_d = WCB_Block_Helper::get_flex_align( $ta_d );
$flex_align_t = WCB_Block_Helper::get_flex_align( $ta_t );
$flex_align_m = WCB_Block_Helper::get_flex_align( $ta_m );

if ( 'horizontal' === $layout ) {
	$v_align_current = ( 'middle' === ( $gi['verticalAlignment'] ?? 'top' ) ) ? 'center' : 'flex-start';
	$css['desktop'][ $inner_sel ]['align-items']     = $v_align_current;
	$css['desktop'][ $inner_sel ]['justify-content'] = $flex_align_d;
	if ( $flex_align_t !== $flex_align_d ) {
		$css['tablet'][ $inner_sel ]['justify-content'] = $flex_align_t;
	}
	if ( $flex_align_m !== $flex_align_t ) {
		$css['mobile'][ $inner_sel ]['justify-content'] = $flex_align_m;
	}

	// Child items styling when horizontal
	$child_wrap_sel  = $wrap_sel . ' > .wcb-icon-list__icon-wrap > .wcb-icon-list__wrap';
	$css['desktop'][ $child_wrap_sel ]['width']       = 'auto';
	$css['desktop'][ $child_wrap_sel ]['display']     = 'inline-flex';
	$css['desktop'][ $child_wrap_sel ]['align-items'] = $v_align_current;
	$css['desktop'][ $child_wrap_sel ]['flex-shrink'] = '1';

	$child_content_sel = $child_wrap_sel . ' .wcb-icon-list__content';
	$css['desktop'][ $child_content_sel ]['width']     = 'auto';
	$css['desktop'][ $child_content_sel ]['display']   = 'inline-flex';
	$css['desktop'][ $child_content_sel ]['flex']      = '0 1 auto';
	$css['desktop'][ $child_content_sel ]['min-width'] = '0';

	$child_title_wrap_sel = $child_wrap_sel . ' .wcb-icon-list__content-title-wrap';
	$css['desktop'][ $child_title_wrap_sel ]['width']       = 'auto';
	$css['desktop'][ $child_title_wrap_sel ]['display']     = 'inline-flex';
	$css['desktop'][ $child_title_wrap_sel ]['align-items'] = $v_align_current;
	$css['desktop'][ $child_title_wrap_sel ]['min-width']   = '0';

	$child_title_sel = $child_wrap_sel . ' .wcb-icon-list__content-title';
	$css['desktop'][ $child_title_sel ]['flex']      = '0 1 auto';
	$css['desktop'][ $child_title_sel ]['width']     = 'auto';
	$css['desktop'][ $child_title_sel ]['min-width'] = '0';

	$css['desktop'][ $child_wrap_sel . ' .wcb-icon-list__heading' ]['word-break']    = 'break-word';
	$css['desktop'][ $child_wrap_sel . ' .wcb-icon-list__heading' ]['overflow-wrap'] = 'break-word';
} else {
	$css['desktop'][ $inner_sel ]['align-items'] = $flex_align_d;
	if ( $flex_align_t !== $flex_align_d ) {
		$css['tablet'][ $inner_sel ]['align-items'] = $flex_align_t;
	}
	if ( $flex_align_m !== $flex_align_t ) {
		$css['mobile'][ $inner_sel ]['align-items'] = $flex_align_m;
	}
}

// Vertical Alignment & Icon position inside child items.
$v_align            = $gi['verticalAlignment'] ?? 'top';
$align_val          = ( 'middle' === $v_align ) ? 'center' : 'flex-start';
$icon_pos           = $gi['iconPosition'] ?? 'leftOfTitle';
$item_icon_wrap_sel = $title_wrap_sel . ' .wcb-icon-list__icon-wrap';

$css['desktop'][ $title_wrap_sel ]['align-items'] = $align_val;
if ( 'leftOfTitle' === $icon_pos || 'rightOfTitle' === $icon_pos ) {
	$css['desktop'][ $title_wrap_sel ]['display'] = 'inline-flex';
}

$css['desktop'][ $item_icon_wrap_sel ]['align-self']  = $align_val;
$css['desktop'][ $item_icon_wrap_sel ]['flex-shrink'] = '0';
$css['desktop'][ $item_icon_wrap_sel ]['order']        = ( 'leftOfTitle' === $icon_pos ) ? '0' : '2';
if ( 'top' === $v_align ) {
	$css['desktop'][ $item_icon_wrap_sel ]['margin-top'] = '0.2em';
} else {
	$css['desktop'][ $item_icon_wrap_sel ]['margin-top'] = '0';
}

// Gap between items.
$gap_between_items = $sdm['gapBetweenItems'] ?? array();
$gap_d             = is_array( $gap_between_items ) ? ( $gap_between_items['Desktop'] ?? '' ) : ( $gap_between_items ?: '' );
if ( empty( $gap_d ) ) {
	$css['desktop'][ $inner_sel ]['gap'] = '10px';
} else {
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


	// Icon Size (width, height & font-size).
	if ( ! empty( $si['iconSize'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel, 'width', $si['iconSize'], 'px' );
		WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel, 'height', $si['iconSize'], 'px' );
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
