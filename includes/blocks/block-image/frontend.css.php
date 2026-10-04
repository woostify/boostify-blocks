<?php
/**
 * Frontend CSS for Image Block.
 *
 * Mirrors src/block-image/GlobalCss.tsx so every style rendered by the
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
$figure_sel  = $wrap_sel . '.wp-block-wcb-image';
$img_sel     = $wrap_sel . ' img';
$cap_sel     = $wrap_sel . ' figcaption.wp-element-caption';
$ov_bg_sel   = $wrap_sel . ' .wcb-image__overlay-bg';
$ov_wrap_sel = $wrap_sel . ' .wcb-image__overlay-wrap';

// =====================================================================
// 1. IMAGE WRAP (Display, Padding, Margin, Alignment)
// =====================================================================
$gs = $attr['general_settings'] ?? array();
$si = $attr['style_image'] ?? array();

$css['desktop'][ $wrap_sel ]['display'] = 'flex';

// Alignment (Desktop-first).
if ( ! empty( $gs['alignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $wrap_sel, 'justify-content', $gs['alignment'] );
}

if ( ! empty( $si['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'padding', $si['padding'] );
	WCB_Block_Helper::add_dimension_css( $css, $ov_wrap_sel, 'padding', $si['padding'] );
}
if ( ! empty( $si['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $si['margin'] );
}

// =====================================================================
// 2. IMAGE ELEMENT (Width, Height, Object-Fit, Border, Radius, Shadow)
// =====================================================================
if ( ! empty( $gs['width'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $img_sel, 'width', $gs['width'], 'px' );
}
if ( ! empty( $gs['height'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $img_sel, 'height', $gs['height'], 'px' );
}
if ( ! empty( $gs['objectFit'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $img_sel, 'object-fit', $gs['objectFit'] );
}

if ( ! empty( $si['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $img_sel, $si['border'], true, true, false );
	// Overlay border-radius matches image border-radius.
	if ( ! empty( $si['border']['radius'] ) ) {
		WCB_Block_Helper::add_border_css( $css, $ov_bg_sel, array( 'radius' => $si['border']['radius'] ), true, true, false );
	}
}

if ( ! empty( $si['boxShadow'] ) && is_array( $si['boxShadow'] ) ) {
	WCB_Block_Helper::add_box_shadow_css( $css, $img_sel, $si['boxShadow'] );
}

$sd = $attr['style_dimension'] ?? array();
if ( ! empty( $sd['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $img_sel, 'margin', $sd['margin'] );
}
if ( ! empty( $sd['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $img_sel, 'padding', $sd['padding'] );
}

// =====================================================================
// 3. OVERLAY (Layout, Background)
// =====================================================================
$layout = $gs['layout'] ?? 'normal';
$so     = $attr['style_overlay'] ?? array();
if ( 'overlay' === $layout ) {
	if ( ! empty( $gs['contentAlignment'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $ov_bg_sel, 'justify-content', $gs['contentAlignment'] );
	}
	if ( ! empty( $so['backgroundColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $ov_bg_sel, 'background-color', $so['backgroundColor'] );
	}
	if ( ! empty( $so['backgroundColorHover'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $ov_bg_sel . ':hover', 'background-color', $so['backgroundColorHover'] );
	}
}

// =====================================================================
// 4. HOVER IMAGE EFFECTS
// =====================================================================
$hover_img = $gs['hoverImage'] ?? 'static';
if ( 'zoomin' === $hover_img ) {
	$css['desktop'][ $img_sel ]['transition']               = 'transform 0.3s ease-in-out';
	$css['desktop'][ $wrap_sel . ':hover img' ]['transform'] = 'scale(1.05)';
} elseif ( 'slide' === $hover_img ) {
	$css['desktop'][ $img_sel ]['transition']               = 'transform 0.3s cubic-bezier(0.4,0,0.2,1)';
	$css['desktop'][ $wrap_sel . ':hover img' ]['transform'] = 'translateX(-20px)';
} elseif ( 'grayscale' === $hover_img ) {
	$css['desktop'][ $img_sel ]['transition']            = 'filter 0.3s ease-in-out';
	$css['desktop'][ $wrap_sel . ':hover img' ]['filter'] = 'grayscale(100%)';
} elseif ( 'blur' === $hover_img ) {
	$css['desktop'][ $img_sel ]['transition']            = 'filter 0.3s ease-in-out';
	$css['desktop'][ $wrap_sel . ':hover img' ]['filter'] = 'blur(2px)';
}

// =====================================================================
// 5. CAPTION
// =====================================================================
if ( 'overlay' !== $layout ) {
	$sc = $attr['style_caption'] ?? array();
	if ( ! empty( $gs['captionAlignment'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $cap_sel, 'text-align', $gs['captionAlignment'] );
	}
	if ( ! empty( $sc['typography'] ) ) {
		WCB_Block_Helper::add_typography_css( $css, $cap_sel, $sc['typography'] );
	}
	if ( ! empty( $sc['margin'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $cap_sel, 'margin', $sc['margin'] );
	}
	if ( ! empty( $sc['textColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $cap_sel, 'color', $sc['textColor'] );
	}
}

// =====================================================================
// 6. FIGURE ALIGNMENT (fallback classes)
// =====================================================================
$css['desktop'][ $figure_sel . '.alignright' ] = array(
	'margin-left'  => 'auto',
	'margin-right' => '0',
);
$css['desktop'][ $figure_sel . '.alignleft' ]  = array(
	'margin-left'  => '0',
	'margin-right' => 'auto',
);
$css['desktop'][ $figure_sel . '.aligncenter' ] = array(
	'margin-left'  => 'auto',
	'margin-right' => 'auto',
	'text-align'   => 'center',
);

// =====================================================================
// 7. ADVANCE (responsive condition + z-index)
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
