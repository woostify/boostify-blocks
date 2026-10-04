<?php
/**
 * Frontend CSS for Slider Block.
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

$gg  = $attr['general_general'] ?? array();
$sab = $attr['style_backgroundAndBorder'] ?? array();
$sbs = $attr['style_boxshadow'] ?? array();
$sa  = $attr['style_arrowAndDots'] ?? array();
$sdm = $attr['style_dimension'] ?? array();

$wrap_sel       = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$item_sel       = $wrap_sel . '.wcb-slider__wrap';
$slide_sel      = $wrap_sel . ' .slick-slide';
$slick_arrow    = $wrap_sel . ' .slick-arrow';
$slick_dots     = $wrap_sel . ' .slick-dots';
$slick_dots_btn = $wrap_sel . ' .slick-dots li button:before';
$slick_prev     = $wrap_sel . ' .slick-prev';
$slick_next     = $wrap_sel . ' .slick-next';

// 1. Text Alignment.
if ( ! empty( $gg['textAlignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $item_sel, 'text-align', $gg['textAlignment'] );
}

// 2. Column Gap (only applied to slides when columns > 1).
$cols_desk = intval( $gg['columns']['Desktop'] ?? 1 );
$cols_tab  = intval( $gg['columns']['Tablet'] ?? $cols_desk );
$cols_mob  = intval( $gg['columns']['Mobile'] ?? $cols_tab );

if ( ! empty( $gg['colGap'] ) ) {
	$gap_desk = ( $cols_desk > 1 ) ? ( is_array( $gg['colGap'] ) ? ( $gg['colGap']['Desktop'] ?? '' ) : $gg['colGap'] ) : null;
	$gap_tab  = ( $cols_tab > 1 ) ? ( is_array( $gg['colGap'] ) ? ( $gg['colGap']['Tablet'] ?? ( $gg['colGap']['Desktop'] ?? '' ) ) : $gg['colGap'] ) : null;
	$gap_mob  = ( $cols_mob > 1 ) ? ( is_array( $gg['colGap'] ) ? ( $gg['colGap']['Mobile'] ?? ( $gg['colGap']['Tablet'] ?? ( $gg['colGap']['Desktop'] ?? '' ) ) ) : $gg['colGap'] ) : null;

	$gap_resp = array();
	if ( '' !== $gap_desk && null !== $gap_desk ) {
		$gap_resp['Desktop'] = $gap_desk;
	}
	if ( '' !== $gap_tab && null !== $gap_tab ) {
		$gap_resp['Tablet'] = $gap_tab;
	}
	if ( '' !== $gap_mob && null !== $gap_mob ) {
		$gap_resp['Mobile'] = $gap_mob;
	}

	if ( ! empty( $gap_resp ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $slide_sel, 'padding-left', $gap_resp );
		WCB_Block_Helper::add_responsive_css( $css, $slide_sel, 'padding-right', $gap_resp );
	}
}

// 3. Background & Border.
if ( ! empty( $sab['background'] ) ) {
	WCB_Block_Helper::add_background_css( $css, $item_sel, $sab['background'] );
}
if ( ! empty( $sab['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $item_sel, $sab['border'], true );
}

// 4. Box Shadow.
if ( ! empty( $sbs ) ) {
	WCB_Block_Helper::add_box_shadow_css( $css, $item_sel, $sbs );
}

// 5. Slick Arrow & Dots.
if ( ! empty( $sa['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $slick_arrow, $sa['border'], true );
}
$css['desktop'][ $slick_arrow ]['display']         = 'flex';
$css['desktop'][ $slick_arrow ]['align-items']     = 'center';
$css['desktop'][ $slick_arrow ]['justify-content'] = 'center';
$css['desktop'][ $slick_arrow ]['cursor']          = 'pointer';

if ( ! empty( $sa['arrowSize'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $slick_arrow . ' svg', 'width', $sa['arrowSize'] );
	WCB_Block_Helper::add_responsive_css( $css, $slick_arrow . ' svg', 'height', $sa['arrowSize'] );
}
if ( ! empty( $sa['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $slick_arrow, 'color', $sa['color'] );
	WCB_Block_Helper::add_responsive_css( $css, $slick_arrow . ' svg', 'color', $sa['color'] );
	WCB_Block_Helper::add_responsive_css( $css, $slick_dots_btn, 'color', $sa['color'] );
}
if ( ! empty( $sa['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $slick_arrow, 'background-color', $sa['backgroundColor'] );
	WCB_Block_Helper::add_responsive_css( $css, $slick_arrow . ' svg', 'background', $sa['backgroundColor'] );
}

if ( ! empty( $sa['dotsMarginTop'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $slick_dots, 'margin-top', $sa['dotsMarginTop'] );
}
if ( ! empty( $sa['arrowDistance'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $slick_prev, 'left', $sa['arrowDistance'] );
	WCB_Block_Helper::add_responsive_css( $css, $slick_next, 'right', $sa['arrowDistance'] );
}

// 6. Dimensions.
if ( ! empty( $sdm['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $item_sel, 'padding', $sdm['padding'] );
}
if ( ! empty( $sdm['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $item_sel, 'margin', $sdm['margin'] );
}

// 7. Advance.
WCB_Block_Helper::add_advance_css( $css, $item_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
