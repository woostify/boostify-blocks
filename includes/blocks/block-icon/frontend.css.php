<?php
/**
 * Frontend CSS for Icon Block.
 *
 * Mirrors src/block-icon/GlobalCss.tsx so every style rendered by the
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

$wrap_sel    = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$content_sel = $wrap_sel . ' .wcb-icon__content';
$icon_sel    = $content_sel . ' .wcb-icon-full';

// =====================================================================
// 1. ALIGNMENT (Wrap)
// =====================================================================
if ( ! empty( $attr['general_icon']['alignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $wrap_sel, 'text-align', $attr['general_icon']['alignment'] );
}

// =====================================================================
// 2. BACKGROUND (Normal + Hover on .wcb-icon__content)
// =====================================================================
if ( ! empty( $attr['style_background']['normal'] ) && is_array( $attr['style_background']['normal'] ) ) {
	$bg_norm = $attr['style_background']['normal'];
	$bg_type = $bg_norm['bgType'] ?? 'color';
	if ( 'color' === $bg_type && ! empty( $bg_norm['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $content_sel, 'background-color', $bg_norm['color'] );
	} elseif ( 'gradient' === $bg_type && ! empty( $bg_norm['gradient'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $content_sel, 'background-image', $bg_norm['gradient'] );
	}
}

if ( ! empty( $attr['style_background']['hover'] ) && is_array( $attr['style_background']['hover'] ) ) {
	$bg_hov  = $attr['style_background']['hover'];
	$bg_type = $bg_hov['bgType'] ?? 'color';
	if ( 'color' === $bg_type && ! empty( $bg_hov['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $content_sel . ':hover', 'background-color', $bg_hov['color'] );
	} elseif ( 'gradient' === $bg_type && ! empty( $bg_hov['gradient'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $content_sel . ':hover', 'background-image', $bg_hov['gradient'] );
	}
}

// =====================================================================
// 3. BORDER & RADIUS (on .wcb-icon__content)
// =====================================================================
if ( ! empty( $attr['style_border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $content_sel, $attr['style_border'], true, true );
}

// =====================================================================
// 4. BOX SHADOW (Normal + Hover on .wcb-icon__content)
// =====================================================================
if ( ! empty( $attr['style_boxshadow'] ) ) {
	WCB_Block_Helper::add_box_shadow_css( $css, $content_sel, $attr['style_boxshadow'] );
}

// =====================================================================
// 5. DIMENSIONS (Margin on Wrap, Padding on .wcb-icon__content)
// =====================================================================
if ( ! empty( $attr['style_dimension'] ) && is_array( $attr['style_dimension'] ) ) {
	if ( ! empty( $attr['style_dimension']['margin'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $attr['style_dimension']['margin'] );
	}
	if ( ! empty( $attr['style_dimension']['padding'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $content_sel, 'padding', $attr['style_dimension']['padding'] );
	}
}

// =====================================================================
// 6. ICON SIZE (Responsive width & font-size on .wcb-icon-full)
// =====================================================================
if ( ! empty( $attr['general_icon']['size'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $wrap_sel . ' .wcb-icon-full', 'width', $attr['general_icon']['size'], 'px' );
	WCB_Block_Helper::add_responsive_css( $css, $wrap_sel . ' .wcb-icon-full', 'font-size', $attr['general_icon']['size'], 'px' );
}

// =====================================================================
// 7. ICON COLOR & HOVER
// =====================================================================
if ( ! empty( $attr['style_icon']['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $icon_sel, 'color', $attr['style_icon']['color'] );
}
if ( ! empty( $attr['style_icon']['hoverColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $content_sel . ':hover .wcb-icon-full', 'color', $attr['style_icon']['hoverColor'] );
}

// =====================================================================
// 8. LINK CURSOR
// =====================================================================
if ( ! empty( $attr['general_icon']['enableLink'] ) ) {
	$css['desktop'][ $content_sel ]['cursor'] = 'pointer';
}

// =====================================================================
// 9. ADVANCE (responsive condition + z-index + motion effect)
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $content_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
