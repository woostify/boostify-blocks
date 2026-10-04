<?php
/**
 * Frontend CSS for Map Block.
 *
 * Mirrors src/block-map/GlobalCss.tsx so every style rendered by the
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

$wrap_sel  = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$inner_sel = $wrap_sel . ' .wcb-map__inner';

// =====================================================================
// 1. WRAP (flex: 1)
// =====================================================================
WCB_Block_Helper::add_responsive_css( $css, $wrap_sel, 'flex', '1' );

// =====================================================================
// 2. BORDER & RADIUS (with iframe important)
// =====================================================================
if ( ! empty( $attr['style_border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $wrap_sel, $attr['style_border'], true, true );

	if ( ! empty( $attr['style_border']['hoverColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $wrap_sel . ':hover', 'border-color', $attr['style_border']['hoverColor'] );
	}

	// Add !important to radius for iframe overflow containment
	foreach ( array( 'desktop', 'tablet', 'mobile' ) as $device ) {
		if ( isset( $css[ $device ][ $wrap_sel ] ) ) {
			foreach ( array( 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius' ) as $rad_prop ) {
				if ( isset( $css[ $device ][ $wrap_sel ][ $rad_prop ] ) && false === strpos( $css[ $device ][ $wrap_sel ][ $rad_prop ], '!important' ) ) {
					$css[ $device ][ $wrap_sel ][ $rad_prop ] .= ' !important';
				}
			}
		}
	}
}

// =====================================================================
// 3. HEIGHT (Inner map container)
// =====================================================================
if ( ! empty( $attr['general_general']['height'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'height', $attr['general_general']['height'] );
}

// =====================================================================
// 4. ADVANCE (responsive condition + motion effect + z-index)
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
