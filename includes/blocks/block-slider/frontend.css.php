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

$selectors   = array();
$t_selectors = array();
$m_selectors = array();

$gg  = $attr['general_general'] ?? array();
$sab = $attr['style_backgroundAndBorder'] ?? array();
$sbs = $attr['style_boxshadow'] ?? array();
$sa  = $attr['style_arrowAndDots'] ?? array();
$sdm = $attr['style_dimension'] ?? array();

$wrap_sel       = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$item_sel       = $wrap_sel . '.wcb-slider__wrap';
$slick_arrow    = $wrap_sel . ' .slick-arrow';
$slick_dots     = $wrap_sel . ' .slick-dots';
$slick_dots_btn = $wrap_sel . ' .slick-dots li button:before';
$slick_prev     = $wrap_sel . ' .slick-prev';
$slick_next     = $wrap_sel . ' .slick-next';

// 1. Text Alignment
if ( ! empty( $gg['textAlignment'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $gg['textAlignment'], 'text-align', $item_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $gg['textAlignment'], 'text-align', $item_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $gg['textAlignment'], 'text-align', $item_sel, 'mobile' ) );
}

// 2. Column Gap (padding left/right on item)
if ( ! empty( $gg['colGap'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-left', $item_sel, 'desktop' ) );
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-right', $item_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-left', $item_sel, 'tablet' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-right', $item_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-left', $item_sel, 'mobile' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-right', $item_sel, 'mobile' ) );
}

// 3. Background & Border
if ( ! empty( $sab['background'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_background_css( $sab['background'], $item_sel ) );
}
if ( ! empty( $sab['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sab['border'], $item_sel, true ) );
}

// 4. Box Shadow
if ( ! empty( $sbs ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_box_shadow_css( $sbs, $item_sel ) );
}

// 5. Slick Arrow & Dots
if ( ! empty( $sa['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sa['border'], $slick_arrow, true ) );
}
if ( ! empty( $sa['arrowSize'] ) ) {
	$selectors[ $slick_arrow . ' svg' ]['width']  = $sa['arrowSize'];
	$selectors[ $slick_arrow . ' svg' ]['height'] = $sa['arrowSize'];
}
if ( ! empty( $sa['color'] ) ) {
	$selectors[ $slick_arrow ]['color']         = $sa['color'];
	$selectors[ $slick_arrow . ' svg' ]['color'] = $sa['color'];
	$selectors[ $slick_dots_btn ]['color']      = $sa['color'];
}
if ( ! empty( $sa['backgroundColor'] ) ) {
	$selectors[ $slick_arrow ]['background-color']        = $sa['backgroundColor'];
	$selectors[ $slick_arrow . ' svg' ]['background']     = $sa['backgroundColor'];
}
if ( ! empty( $sa['dotsMarginTop'] ) ) {
	$selectors[ $slick_dots ]['position'] = 'absolute';
	$dots_bottom = is_array( $sa['dotsMarginTop'] ) ? ( $sa['dotsMarginTop']['Desktop'] ?? '0px' ) : $sa['dotsMarginTop'];
	$selectors[ $slick_dots ]['bottom']   = $dots_bottom;
}
if ( ! empty( $sa['arrowDistance'] ) ) {
	$arrow_dist = is_array( $sa['arrowDistance'] ) ? ( $sa['arrowDistance']['Desktop'] ?? '0px' ) : $sa['arrowDistance'];
	$selectors[ $slick_prev ]['left']  = $arrow_dist;
	$selectors[ $slick_next ]['right'] = $arrow_dist;
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

