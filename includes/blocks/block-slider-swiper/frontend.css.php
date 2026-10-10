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

if ( ! empty( $sa['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $swiper_arrow, 'color', $sa['color'] );
	WCB_Block_Helper::add_responsive_css( $css, $swiper_arrow_svg, 'color', $sa['color'] );
	WCB_Block_Helper::add_responsive_css( $css, $swiper_dots, '--swiper-pagination-color', $sa['color'] );
	WCB_Block_Helper::add_responsive_css( $css, $swiper_bullet, 'background-color', $sa['color'] );
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

$show_dots = ( $gc['showArrowsDots'] ?? '' ) !== 'Arrow';

if ( ! empty( $sa['dotsMarginTop'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $swiper_dots, 'bottom', $sa['dotsMarginTop'] );

	if ( $show_dots ) {
		$dots_map = is_array( $sa['dotsMarginTop'] ) ? $sa['dotsMarginTop'] : array( 'Desktop' => $sa['dotsMarginTop'] );
		$d_dots   = $dots_map['Desktop'] ?? ( $dots_map['desktop'] ?? '0px' );
		$t_dots   = $dots_map['Tablet'] ?? ( $dots_map['tablet'] ?? $d_dots );
		$m_dots   = $dots_map['Mobile'] ?? ( $dots_map['mobile'] ?? $t_dots );

		$padding_bottom_resp = array(
			'Desktop' => 'calc(' . $d_dots . ' + 8px + 10px)',
			'Tablet'  => 'calc(' . $t_dots . ' + 8px + 10px)',
			'Mobile'  => 'calc(' . $m_dots . ' + 8px + 10px)',
		);
		WCB_Block_Helper::add_responsive_css( $css, $wrap_items, 'padding-bottom', $padding_bottom_resp );
	}
} elseif ( $show_dots ) {
	$css['desktop'][ $wrap_items ]['padding-bottom'] = 'calc(0px + 8px + 10px)';
}

if ( ! empty( $sa['arrowDistance'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $swiper_prev, 'left', $sa['arrowDistance'] );
	WCB_Block_Helper::add_responsive_css( $css, $swiper_next, 'right', $sa['arrowDistance'] );
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
