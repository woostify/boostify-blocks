<?php
/**
 * Frontend CSS for Testimonials Block.
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
$sn  = $attr['style_name'] ?? array();
$sc  = $attr['style_content'] ?? array();
$sco = $attr['style_company'] ?? array();
$si  = $attr['style_image'] ?? array();
$sr  = $attr['style_rating'] ?? array();
$sab = $attr['style_backgroundAndBorder'] ?? array();
$sdm = $attr['style_dimension'] ?? array();
$sa  = $attr['style_arrowAndDots'] ?? array();

$wrap_sel       = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$item_sel       = $wrap_sel . ' .wcb-testimonials__item';
$item_inner_sel = $wrap_sel . ' .wcb-testimonials__item-inner';
$item_bg_sel    = $item_sel . ' .wcb-testimonials__item-background';
$name_sel       = $wrap_sel . ' .wcb-testimonials__item-name';
$content_sel    = $wrap_sel . ' .wcb-testimonials__item-content';
$company_sel    = $wrap_sel . ' .wcb-testimonials__item-company';
$image_sel      = $wrap_sel . ' .wcb-testimonials__item-image';
$image_img_sel  = $image_sel . ' img';
$rating_sel     = $wrap_sel . ' .wcb-testimonials__item-rating';
$slick_arrow    = $wrap_sel . ' .slick-arrow';
$slick_dots     = $wrap_sel . ' .slick-dots';
$slick_dots_btn = $wrap_sel . ' .slick-dots li button:before';

// 1. Text Alignment
if ( ! empty( $gg['textAlignment'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $gg['textAlignment'], 'text-align', $item_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $gg['textAlignment'], 'text-align', $item_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $gg['textAlignment'], 'text-align', $item_sel, 'mobile' ) );
}

// 2. ColGap on item
if ( ! empty( $gg['colGap'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-left', $item_sel, 'desktop' ) );
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-right', $item_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-left', $item_sel, 'tablet' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-right', $item_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-left', $item_sel, 'mobile' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $gg['colGap'], 'padding-right', $item_sel, 'mobile' ) );
}

// 3. Name
if ( ! empty( $sn['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $sn['typography'], $name_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $sn['typography'], $name_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $sn['typography'], $name_sel, 'mobile' ) );
}
if ( ! empty( $sn['textColor'] ) ) {
	$selectors[ $name_sel ]['color'] = $sn['textColor'];
}
if ( ! empty( $sn['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sn['marginBottom'], 'margin-bottom', $name_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sn['marginBottom'], 'margin-bottom', $name_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sn['marginBottom'], 'margin-bottom', $name_sel, 'mobile' ) );
}

// 4. Content
if ( ! empty( $sc['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $sc['typography'], $content_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $sc['typography'], $content_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $sc['typography'], $content_sel, 'mobile' ) );
}
if ( ! empty( $sc['textColor'] ) ) {
	$selectors[ $content_sel ]['color'] = $sc['textColor'];
}
if ( ! empty( $sc['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sc['marginBottom'], 'margin-bottom', $content_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sc['marginBottom'], 'margin-bottom', $content_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sc['marginBottom'], 'margin-bottom', $content_sel, 'mobile' ) );
}

// 5. Company
if ( ! empty( $sco['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $sco['typography'], $company_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $sco['typography'], $company_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $sco['typography'], $company_sel, 'mobile' ) );
}
if ( ! empty( $sco['textColor'] ) ) {
	$selectors[ $company_sel ]['color'] = $sco['textColor'];
}

// 6. Image
if ( ! empty( $si['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $si['padding'], 'padding', $image_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $si['padding'], 'padding', $image_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $si['padding'], 'padding', $image_sel, 'mobile' ) );
}
if ( ! empty( $si['radius'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $si['radius'], 'border-radius', $image_img_sel, 'desktop', 'px' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $si['radius'], 'border-radius', $image_img_sel, 'tablet', 'px' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $si['radius'], 'border-radius', $image_img_sel, 'mobile', 'px' ) );
}
if ( ! empty( $si['imageSize'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $si['imageSize'], 'width', $image_img_sel, 'desktop' ) );
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $si['imageSize'], 'height', $image_img_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $si['imageSize'], 'width', $image_img_sel, 'tablet' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $si['imageSize'], 'height', $image_img_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $si['imageSize'], 'width', $image_img_sel, 'mobile' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $si['imageSize'], 'height', $image_img_sel, 'mobile' ) );
}
if ( ! empty( $si['objectFit'] ) ) {
	$selectors[ $image_img_sel ]['object-fit'] = $si['objectFit'];
}

// 7. Rating
if ( ! empty( $sr['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sr['marginBottom'], 'margin-bottom', $rating_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sr['marginBottom'], 'margin-bottom', $rating_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sr['marginBottom'], 'margin-bottom', $rating_sel, 'mobile' ) );
}
if ( ! empty( $sr['color'] ) ) {
	$selectors[ $rating_sel ]['color']           = $sr['color'];
	$selectors[ $rating_sel . ' .active' ]['color'] = $sr['color'];
}

// 8. Background & Border
if ( ! empty( $sab['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sab['border'], $item_sel, true ) );
}
if ( ! empty( $sab['background'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_background_css( $sab['background'], $item_bg_sel ) );
}

// 9. Dots margin top
if ( ! empty( $sa['dotsMarginTop'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sa['dotsMarginTop'], 'margin-bottom', $item_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sa['dotsMarginTop'], 'margin-bottom', $item_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sa['dotsMarginTop'], 'margin-bottom', $item_sel, 'mobile' ) );
}

// 10. Slick Arrow & Dots
if ( ! empty( $sa['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sa['border'], $slick_arrow, true ) );
}
if ( ! empty( $sa['arrowSize'] ) ) {
	$selectors[ $slick_arrow . ' svg' ]['width']  = $sa['arrowSize'];
	$selectors[ $slick_arrow . ' svg' ]['height'] = $sa['arrowSize'];
}
if ( ! empty( $sa['color'] ) ) {
	$selectors[ $slick_arrow . ' svg' ]['color'] = $sa['color'];
	$selectors[ $slick_dots_btn ]['color']       = $sa['color'];
}

// 11. Dimensions
if ( ! empty( $sdm['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sdm['padding'], 'padding', $item_inner_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sdm['padding'], 'padding', $item_inner_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sdm['padding'], 'padding', $item_inner_sel, 'mobile' ) );
}
if ( ! empty( $sdm['margin'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sdm['margin'], 'margin', $item_inner_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sdm['margin'], 'margin', $item_inner_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sdm['margin'], 'margin', $item_inner_sel, 'mobile' ) );
}

// 12. Advance
$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

