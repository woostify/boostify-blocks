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
$slide_sel      = $wrap_sel . ' .slick-slide';
$slick_arrow    = $wrap_sel . ' .slick-arrow';
$slick_dots     = $wrap_sel . ' .slick-dots';
$slick_dots_btn = $wrap_sel . ' .slick-dots li button:before';
$slick_prev     = $wrap_sel . ' .slick-prev';
$slick_next     = $wrap_sel . ' .slick-next';

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

// 5. Slick Arrow & Dots
if ( ! empty( $sa['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sa['border'], $slick_arrow, true ) );
}
$selectors[ $slick_arrow ]['display']         = 'flex';
$selectors[ $slick_arrow ]['align-items']     = 'center';
$selectors[ $slick_arrow ]['justify-content'] = 'center';
$selectors[ $slick_arrow ]['cursor']          = 'pointer';

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
	$selectors[ $slick_arrow ]['background-color']    = $sa['backgroundColor'];
	$selectors[ $slick_arrow . ' svg' ]['background'] = $sa['backgroundColor'];
}

$selectors[ $slick_dots ]['position'] = 'absolute';
$dots_bottom = is_array( $sa['dotsMarginTop'] ?? null ) ? ( $sa['dotsMarginTop']['Desktop'] ?? '8px' ) : ( $sa['dotsMarginTop'] ?? '8px' );
if ( '0px' === $dots_bottom || '' === $dots_bottom ) {
	$dots_bottom = '8px';
}
$selectors[ $slick_dots ]['bottom'] = $dots_bottom;

$arrow_dist = is_array( $sa['arrowDistance'] ?? null ) ? ( $sa['arrowDistance']['Desktop'] ?? '0px' ) : ( $sa['arrowDistance'] ?? '0px' );
$selectors[ $slick_prev ]['left']  = $arrow_dist;
$selectors[ $slick_next ]['right'] = $arrow_dist;

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

