<?php
/**
 * Frontend CSS for Countdown Block.
 *
 * Mirrors src/block-countdown/GlobalCss.tsx so every style rendered by the
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
$content_sel = $wrap_sel . ' .wcb-countdown__content';
$box_sel     = $wrap_sel . ' .wcb-countdown__box';
$number_sel  = $wrap_sel . ' .wcb-countdown__number';
$label_sel   = $wrap_sel . ' .wcb-countdown__label';

/**
 * Build box-shadow string from attributes.
 */
$build_shadow_value = function ( $shadow_data ) {
	if ( empty( $shadow_data ) || ! is_array( $shadow_data ) ) {
		return '';
	}

	$c = $shadow_data['color'] ?? '';
	if ( empty( $c ) ) {
		return '';
	}

	$x = WCB_Block_Helper::get_css_value( $shadow_data['horizontal'] ?? 0 );
	$y = WCB_Block_Helper::get_css_value( $shadow_data['vertical'] ?? 0 );
	$b = WCB_Block_Helper::get_css_value( $shadow_data['blur'] ?? 0 );
	$s = WCB_Block_Helper::get_css_value( $shadow_data['spread'] ?? 0 );
	$p = ! empty( $shadow_data['position'] ) && 'inset' === $shadow_data['position'] ? 'inset ' : '';

	return trim( $p . $x . ' ' . $y . ' ' . $b . ' ' . $s . ' ' . $c );
};

// =====================================================================
// 1. WRAP (contentWidth + margin/padding)
// =====================================================================
$gl = $attr['general_layout'] ?? array();
if ( ! empty( $gl['contentWidth'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $wrap_sel, 'width', $gl['contentWidth'] );
}

$sdm = $attr['style_dimensions'] ?? array();
$dim = $sdm['dimension'] ?? ( $attr['style_dimension']['dimension'] ?? array() );
if ( ! empty( $dim['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $dim['margin'] );
}
if ( ! empty( $dim['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'padding', $dim['padding'] );
}

// =====================================================================
// 2. CONTENT (.wcb-countdown__content)
// =====================================================================
$align_map = array(
	'left'   => 'start',
	'right'  => 'end',
	'center' => 'center',
);

$align_val = $gl['textAlignment'] ?? array();
$flex_dir  = $gl['flexDirection'] ?? array();

// Apply text alignment
if ( ! empty( $align_val ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $content_sel, 'text-align', $align_val );
}

// Apply flex-direction
if ( ! empty( $flex_dir ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $content_sel, 'flex-direction', $flex_dir );
}

// Calculate responsive justifyContent & alignItems based on direction and alignment
$devices = array(
	'Desktop' => 'desktop',
	'Tablet'  => 'tablet',
	'Mobile'  => 'mobile',
);

foreach ( $devices as $device => $bucket ) {
	$dev_align = is_array( $align_val ) ? ( $align_val[ $device ] ?? ( $align_val['Desktop'] ?? 'center' ) ) : $align_val;
	$dev_dir   = is_array( $flex_dir ) ? ( $flex_dir[ $device ] ?? ( $flex_dir['Desktop'] ?? 'row' ) ) : $flex_dir;
	$mapped    = $align_map[ $dev_align ] ?? 'center';
	$is_row    = ( 'row' === $dev_dir || 'row-reverse' === $dev_dir );

	if ( $is_row ) {
		$css[ $bucket ][ $content_sel ]['justify-content'] = $mapped;
	} else {
		$css[ $bucket ][ $content_sel ]['align-items'] = $mapped;
	}
}

// Gap boxes
$sd = $attr['style_dimension'] ?? array();
if ( ! empty( $sd['gap_boxes'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $content_sel, 'gap', $sd['gap_boxes'] );
}

// =====================================================================
// 3. BOX (.wcb-countdown__box)
// =====================================================================
// Border
if ( ! empty( $attr['style_border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $box_sel, $attr['style_border'], true, true );
	if ( ! empty( $attr['style_border']['hoverColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $box_sel . ':hover', 'border-color', $attr['style_border']['hoverColor'] );
	}
}

// Box shadow
$sbs           = $attr['style_boxshadow'] ?? array();
$shadow_normal = $build_shadow_value( $sbs['Normal'] ?? ( $sbs['normal'] ?? array() ) );
if ( '' !== $shadow_normal ) {
	WCB_Block_Helper::add_responsive_css( $css, $box_sel, 'box-shadow', $shadow_normal );
}
$shadow_hover = $build_shadow_value( $sbs['Hover'] ?? ( $sbs['hover'] ?? array() ) );
if ( '' !== $shadow_hover ) {
	WCB_Block_Helper::add_responsive_css( $css, $box_sel . ':hover', 'box-shadow', $shadow_hover );
}

// Width & Height
if ( ! empty( $sd['width_box'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $box_sel, 'width', $sd['width_box'] );

	$preset = $attr['general_preset']['preset'] ?? '';
	if ( 'wcb-countdown-5' !== $preset ) {
		WCB_Block_Helper::add_responsive_css( $css, $box_sel, 'height', $sd['width_box'] );
	}
}

// Background (normal + hover)
$sbg       = $attr['style_background'] ?? array();
$bg_normal = $sbg['normal'] ?? ( $sbg['Normal'] ?? array() );
if ( ! empty( $bg_normal ) ) {
	$bg_type = $bg_normal['bgType'] ?? 'color';
	if ( 'color' === $bg_type && ! empty( $bg_normal['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $box_sel, 'background-color', $bg_normal['color'] );
	} elseif ( 'gradient' === $bg_type && ! empty( $bg_normal['gradient'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $box_sel, 'background-image', $bg_normal['gradient'] );
	}
}

$bg_hover = $sbg['hover'] ?? ( $sbg['Hover'] ?? array() );
if ( ! empty( $bg_hover ) ) {
	$bg_type_h = $bg_hover['bgType'] ?? 'color';
	if ( 'color' === $bg_type_h && ! empty( $bg_hover['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $box_sel . ':hover', 'background-color', $bg_hover['color'] );
	} elseif ( 'gradient' === $bg_type_h && ! empty( $bg_hover['gradient'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $box_sel . ':hover', 'background-image', $bg_hover['gradient'] );
	}
}

// =====================================================================
// 4. NUMBER (.wcb-countdown__number)
// =====================================================================
$sn = $attr['style_number'] ?? array();
if ( ! empty( $sn['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $number_sel, $sn['typography'] );
}
if ( ! empty( $sn['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $number_sel, 'color', $sn['textColor'] );
}
if ( ! empty( $sd['gap_number'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $number_sel, 'margin-bottom', $sd['gap_number'] );
}

// =====================================================================
// 5. LABEL (.wcb-countdown__label)
// =====================================================================
$sl = $attr['style_label'] ?? array();
if ( ! empty( $sl['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $label_sel, $sl['typography'] );
}
if ( ! empty( $sl['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $label_sel, 'color', $sl['textColor'] );
}

// =====================================================================
// 6. ADVANCE (responsive condition + motion effect + z-index)
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $content_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
