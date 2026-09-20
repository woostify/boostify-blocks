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

$selectors   = array();
$t_selectors = array();
$m_selectors = array();

$gg  = $attr['general_general'] ?? array();
$sab = $attr['style_backgroundAndBorder'] ?? array();
$sbs = $attr['style_boxshadow'] ?? array();
$sa  = $attr['style_arrowAndDots'] ?? array();
$sdm = $attr['style_dimension'] ?? array();

$wrap_sel             = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$slide_sel            = $wrap_sel . ' .swiper-slide';
$swiper_prev          = $wrap_sel . ' .swiper-button-prev';
$swiper_next          = $wrap_sel . ' .swiper-button-next';
$swiper_arrow         = $swiper_prev . ', ' . $swiper_next;
$swiper_arrow_svg     = $swiper_prev . ' svg, ' . $swiper_next . ' svg';
$swiper_dots          = $wrap_sel . ' .swiper-pagination';
$swiper_bullet        = $wrap_sel . ' .swiper-pagination-bullet';
$swiper_bullet_active = $wrap_sel . ' .swiper-pagination-bullet-active';

// 1. Text Alignment
if ( ! empty( $gg['textAlignment'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $gg['textAlignment'], 'text-align', $wrap_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $gg['textAlignment'], 'text-align', $wrap_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $gg['textAlignment'], 'text-align', $wrap_sel, 'mobile' ) );
}

// 2. Column Gap (padding left/right on slides)
if ( ! empty( $gg['colGap'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-left', $slide_sel, 'desktop' ) );
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-right', $slide_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-left', $slide_sel, 'tablet' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-right', $slide_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-left', $slide_sel, 'mobile' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-right', $slide_sel, 'mobile' ) );
}

// 3. Background & Border
if ( ! empty( $sab['background'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_background_css( $sab['background'], $wrap_sel ) );
}
if ( ! empty( $sab['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sab['border'], $wrap_sel, true ) );
}

// 4. Box Shadow
if ( ! empty( $sbs ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_box_shadow_css( $sbs, $wrap_sel ) );
}

// 5. Swiper Arrow & Dots
if ( ! empty( $sa['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sa['border'], $swiper_arrow, true ) );
}
$selectors[ $swiper_arrow ]['display']         = 'flex';
$selectors[ $swiper_arrow ]['align-items']     = 'center';
$selectors[ $swiper_arrow ]['justify-content'] = 'center';
$selectors[ $swiper_arrow ]['cursor']          = 'pointer';

if ( ! empty( $sa['color'] ) ) {
	$selectors[ $swiper_arrow ]['color']                   = $sa['color'];
	$selectors[ $swiper_arrow_svg ]['color']               = $sa['color'];
	$selectors[ $swiper_dots ]['--swiper-pagination-color'] = $sa['color'];
	$selectors[ $swiper_bullet ]['background-color']        = $sa['color'];
	$selectors[ $swiper_bullet ]['opacity']                 = '0.4';
	$selectors[ $swiper_bullet_active ]['opacity']          = '1';
}
if ( ! empty( $sa['backgroundColor'] ) ) {
	$selectors[ $swiper_arrow ]['background-color'] = $sa['backgroundColor'];
	$selectors[ $swiper_arrow_svg ]['background']   = $sa['backgroundColor'];
}
if ( ! empty( $sa['arrowSize'] ) ) {
	$selectors[ $swiper_arrow_svg ]['width']  = $sa['arrowSize'];
	$selectors[ $swiper_arrow_svg ]['height'] = $sa['arrowSize'];
}
$selectors[ $wrap_sel . ' .wcb-slider__wrap-items' ]['padding-bottom'] = '2.5rem';

if ( ! empty( $sa['dotsMarginTop'] ) ) {
	$selectors[ $swiper_dots ]['position'] = 'absolute';
	$dots_bottom = is_array( $sa['dotsMarginTop'] ) ? ( $sa['dotsMarginTop']['Desktop'] ?? '8px' ) : $sa['dotsMarginTop'];
	if ( '0px' === $dots_bottom || '' === $dots_bottom ) {
		$dots_bottom = '8px';
	}
	$selectors[ $swiper_dots ]['bottom']   = $dots_bottom;
}
if ( ! empty( $sa['arrowDistance'] ) ) {
	$arrow_dist = is_array( $sa['arrowDistance'] ) ? ( $sa['arrowDistance']['Desktop'] ?? '0px' ) : $sa['arrowDistance'];
	$selectors[ $swiper_prev ]['left']  = $arrow_dist;
	$selectors[ $swiper_next ]['right'] = $arrow_dist;
}

// 6. Dimensions
if ( ! empty( $sdm['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sdm['padding'], 'padding', $wrap_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sdm['padding'], 'padding', $wrap_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sdm['padding'], 'padding', $wrap_sel, 'mobile' ) );
}
if ( ! empty( $sdm['margin'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sdm['margin'], 'margin', $wrap_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sdm['margin'], 'margin', $wrap_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sdm['margin'], 'margin', $wrap_sel, 'mobile' ) );
}

// 7. Advance
$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

