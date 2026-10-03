<?php
/**
 * Frontend CSS for Slider Swiper Block.
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

$wrap_sel             = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$item_sel             = $wrap_sel . '.wcb-slider__wrap';
$slide_sel            = $wrap_sel . ' .swiper-slide';
$swiper_prev          = $wrap_sel . ' .swiper-button-prev';
$swiper_next          = $wrap_sel . ' .swiper-button-next';
$swiper_arrow         = $swiper_prev . ', ' . $swiper_next;
$swiper_arrow_svg     = $swiper_prev . ' svg, ' . $swiper_next . ' svg';
$swiper_dots          = $wrap_sel . ' .swiper-pagination';
$swiper_bullet        = $wrap_sel . ' .swiper-pagination-bullet';
$swiper_bullet_active = $wrap_sel . ' .swiper-pagination-bullet-active';

// 1. Text Alignment.
if ( ! empty( $gg['textAlignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $item_sel, 'text-align', $gg['textAlignment'] );
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

// 5. Swiper Arrow & Dots.
if ( ! empty( $sa['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $swiper_arrow, $sa['border'], true );
}
$css['desktop'][ $swiper_arrow ]['display']         = 'flex';
$css['desktop'][ $swiper_arrow ]['align-items']     = 'center';
$css['desktop'][ $swiper_arrow ]['justify-content'] = 'center';
$css['desktop'][ $swiper_arrow ]['cursor']          = 'pointer';

if ( ! empty( $sa['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $swiper_arrow, 'color', $sa['color'] );
	WCB_Block_Helper::add_responsive_css( $css, $swiper_arrow_svg, 'color', $sa['color'] );
	WCB_Block_Helper::add_responsive_css( $css, $swiper_dots, '--swiper-pagination-color', $sa['color'] );
	WCB_Block_Helper::add_responsive_css( $css, $swiper_bullet, 'background-color', $sa['color'] );
	$css['desktop'][ $swiper_bullet ]['opacity']                 = '0.4';
	$css['desktop'][ $swiper_bullet_active ]['opacity']          = '1';
}
if ( ! empty( $sa['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $swiper_arrow, 'background-color', $sa['backgroundColor'] );
	WCB_Block_Helper::add_responsive_css( $css, $swiper_arrow_svg, 'background', $sa['backgroundColor'] );
}
if ( ! empty( $sa['arrowSize'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $swiper_arrow_svg, 'width', $sa['arrowSize'] );
	WCB_Block_Helper::add_responsive_css( $css, $swiper_arrow_svg, 'height', $sa['arrowSize'] );
}

$gc         = $attr['general_carousel'] ?? array();
$wrap_items = $wrap_sel . ' .wcb-slider__wrap-items';

$show_dots   = ( $gc['showArrowsDots'] ?? '' ) !== 'Arrow';
$dots_bottom = ! empty( $sa['dotsMarginTop']['Desktop'] ) ? $sa['dotsMarginTop']['Desktop'] : '0px';

$css['desktop'][ $swiper_dots ]['position']    = 'absolute';
$css['desktop'][ $swiper_dots ]['bottom']      = $dots_bottom;
$css['desktop'][ $swiper_dots ]['line-height'] = '0';

if ( $show_dots ) {
	$css['desktop'][ $wrap_items ]['padding-bottom'] = 'calc(' . $dots_bottom . ' + 8px + 10px)';
}

$arrow_dist = ! empty( $sa['arrowDistance']['Desktop'] ) ? $sa['arrowDistance']['Desktop'] : ( ( isset( $sa['arrowDistance'] ) && is_string( $sa['arrowDistance'] ) ) ? $sa['arrowDistance'] : '0px' );
$css['desktop'][ $swiper_prev ]['left']  = $arrow_dist;
$css['desktop'][ $swiper_next ]['right'] = $arrow_dist;

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
