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
$slide_sel      = $wrap_sel . ' .slick-slide';
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

// 2. Column Gap (only applied to slides when columns > 1)
$cols_desk = intval( $gg['columns']['Desktop'] ?? 1 );
$cols_tab  = intval( $gg['columns']['Tablet'] ?? $cols_desk );
$cols_mob  = intval( $gg['columns']['Mobile'] ?? $cols_tab );
$slide_sel = $wrap_sel . ' .slick-slide';

if ( ! empty( $gg['colGap'] ) ) {
	if ( $cols_desk > 1 ) {
		$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-left', $slide_sel, 'desktop' ) );
		$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-right', $slide_sel, 'desktop' ) );
	}
	if ( $cols_tab > 1 ) {
		$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-left', $slide_sel, 'tablet' ) );
		$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-right', $slide_sel, 'tablet' ) );
	}
	if ( $cols_mob > 1 ) {
		$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-left', $slide_sel, 'mobile' ) );
		$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-right', $slide_sel, 'mobile' ) );
	}
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

if ( ! empty( $sa['dotsMarginTop'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sa['dotsMarginTop'], 'margin-top', $slick_dots, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sa['dotsMarginTop'], 'margin-top', $slick_dots, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sa['dotsMarginTop'], 'margin-top', $slick_dots, 'mobile' ) );
}
if ( ! empty( $sa['arrowDistance'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sa['arrowDistance'], 'left', $slick_prev, 'desktop' ) );
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sa['arrowDistance'], 'right', $slick_next, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sa['arrowDistance'], 'left', $slick_prev, 'tablet' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sa['arrowDistance'], 'right', $slick_next, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sa['arrowDistance'], 'left', $slick_prev, 'mobile' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sa['arrowDistance'], 'right', $slick_next, 'mobile' ) );
}

// 6. Dimensions
if ( ! empty( $sdm['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sdm['padding'], 'padding', $item_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sdm['padding'], 'padding', $item_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sdm['padding'], 'padding', $item_sel, 'mobile' ) );
}
if ( ! empty( $sdm['margin'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sdm['margin'], 'margin', $item_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sdm['margin'], 'margin', $item_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sdm['margin'], 'margin', $item_sel, 'mobile' ) );
}

// 7. Advance
$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_advance_css( $attr, $item_sel ) );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

