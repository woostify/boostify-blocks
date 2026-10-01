<?php
/**
 * Frontend CSS for Testimonials Swiper Block.
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
$sn  = $attr['style_name'] ?? array();
$sc  = $attr['style_content'] ?? array();
$sco = $attr['style_company'] ?? array();
$si  = $attr['style_image'] ?? array();
$sr  = $attr['style_rating'] ?? array();
$sab = $attr['style_backgroundAndBorder'] ?? array();
$sdm = $attr['style_dimension'] ?? array();
$sa  = $attr['style_arrowAndDots'] ?? array();

$wrap_sel             = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$item_sel             = $wrap_sel . ' .wcb-testimonials-swiper__item';
$item_inner_sel       = $wrap_sel . ' .wcb-testimonials-swiper__item-inner';
$item_bg_sel          = $item_sel . ' .wcb-testimonials-swiper__item-background';
$name_sel             = $wrap_sel . ' .wcb-testimonials-swiper__item-name';
$content_sel          = $wrap_sel . ' .wcb-testimonials-swiper__item-content';
$company_sel          = $wrap_sel . ' .wcb-testimonials-swiper__item-company';
$image_sel            = $wrap_sel . ' .wcb-testimonials-swiper__item-image';
$image_img_sel        = $image_sel . ' img';
$rating_sel           = $wrap_sel . ' .wcb-testimonials-swiper__item-rating';
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

// 2. ColGap on item.
if ( ! empty( $gg['colGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $item_sel, 'padding-left', $gg['colGap'] );
	WCB_Block_Helper::add_responsive_css( $css, $item_sel, 'padding-right', $gg['colGap'] );
}

// 3. Name.
if ( ! empty( $sn['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $name_sel, $sn['typography'] );
}
if ( ! empty( $sn['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $name_sel, 'color', $sn['textColor'] );
}
if ( ! empty( $sn['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $name_sel, 'margin-bottom', $sn['marginBottom'] );
}

// 4. Content.
if ( ! empty( $sc['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $content_sel, $sc['typography'] );
}
if ( ! empty( $sc['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $content_sel, 'color', $sc['textColor'] );
}
if ( ! empty( $sc['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $content_sel, 'margin-bottom', $sc['marginBottom'] );
}

// 5. Company.
if ( ! empty( $sco['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $company_sel, $sco['typography'] );
}
if ( ! empty( $sco['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $company_sel, 'color', $sco['textColor'] );
}

// 6. Image.
if ( ! empty( $si['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $image_sel, 'padding', $si['padding'] );
}
if ( ! empty( $si['radius'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $image_img_sel, 'border-radius', $si['radius'], 'px' );
}
if ( ! empty( $si['imageSize'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $image_img_sel, 'width', $si['imageSize'] );
	WCB_Block_Helper::add_responsive_css( $css, $image_img_sel, 'height', $si['imageSize'] );
}
if ( ! empty( $si['objectFit'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $image_img_sel, 'object-fit', $si['objectFit'] );
}

// 7. Rating.
if ( ! empty( $sr['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $rating_sel, 'margin-bottom', $sr['marginBottom'] );
}
if ( ! empty( $sr['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $rating_sel, 'color', $sr['color'] );
	WCB_Block_Helper::add_responsive_css( $css, $rating_sel . ' .active', 'color', $sr['color'] );
}

// 8. Background & Border.
if ( ! empty( $sab['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $item_sel, $sab['border'], true );
}
if ( ! empty( $sab['background'] ) ) {
	WCB_Block_Helper::add_background_css( $css, $item_bg_sel, $sab['background'] );
}

// 9. Dots margin top.
if ( ! empty( $sa['dotsMarginTop'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $swiper_dots, 'margin-top', $sa['dotsMarginTop'] );
}

// 10. Swiper Arrow & Dots.
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
	WCB_Block_Helper::add_responsive_css( $css, $swiper_bullet, 'opacity', '0.4' );
	WCB_Block_Helper::add_responsive_css( $css, $swiper_bullet_active, 'opacity', '1' );
}
if ( ! empty( $sa['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $swiper_arrow, 'background-color', $sa['backgroundColor'] );
}
if ( ! empty( $sa['arrowSize'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $swiper_arrow_svg, 'width', $sa['arrowSize'] );
	WCB_Block_Helper::add_responsive_css( $css, $swiper_arrow_svg, 'height', $sa['arrowSize'] );
}

// 11. Dimensions.
if ( ! empty( $sdm['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $item_inner_sel, 'padding', $sdm['padding'] );
}
if ( ! empty( $sdm['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $item_inner_sel, 'margin', $sdm['margin'] );
}

// 12. Advance.
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
