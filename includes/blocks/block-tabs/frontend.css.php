<?php
/**
 * Frontend dynamic CSS for Tabs Block (mirrors src/block-tabs/GlobalCss.tsx).
 * Static base and layout-variant rules live in src/block-tabs/style.scss.
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
$gt  = $attr['general_tabTitle'] ?? array();
$sc  = $attr['style_container'] ?? array();
$st  = $attr['style_title'] ?? array();
$sb  = $attr['style_body'] ?? array();
$si  = $attr['style_icon'] ?? array();
$sdm = $attr['style_dimension'] ?? array();

$wrap_sel            = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$inner_sel           = $wrap_sel . ' .wcb-tabs__contents';
$title_wrap_sel      = $wrap_sel . ' .wcb-tabs__titles';
$title_child_sel     = $wrap_sel . ' .wcb-tabs__title_inner';
$title_child_act_sel = $wrap_sel . ' .wcb-tabs__title_inner.is-active';
$title_sel           = $wrap_sel . ' .wcb-tabs__title';
$title_act_sel       = $title_child_act_sel . ' .wcb-tabs__title';
$body_sel            = $wrap_sel . ' .wcb-tab-child__wrap';
$body_child_sel      = $wrap_sel . ' .wcb-tab-child__inner';
$icon_sel            = $wrap_sel . ' .wcb-tabs__icon';
$icon_act_sel        = $title_child_act_sel . ' .wcb-tabs__icon';
$icon_svg_sel        = $icon_sel . ', ' . $icon_sel . ':before, ' . $icon_sel . ' svg';

$layout     = $gg['layout'] ?? '';
$style      = $gg['style'] ?? '';
$tab_align  = $gt['tabAlignment'] ?? 'left';
$text_align = $gt['textAlignment'] ?? 'left';

$is_vertical_layout   = ( 'grid' === $layout || 'verticalStyle1' === $style || 'verticalStyle2' === $style );
$is_vertical_style2   = ( $is_vertical_layout && 'verticalStyle2' === $style );
$is_horizontal_style2 = ( ! $is_vertical_layout && 'horizontalStyle2' === $style );

// 1. Inner container dynamic alignment & legacy container gaps.
if ( ! empty( $gg['textAlignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'text-align', $gg['textAlignment'] );
}
if ( ! empty( $sc['colunmGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'column-gap', $sc['colunmGap'] );
}
if ( ! empty( $sc['rowGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'row-gap', $sc['rowGap'] );
}

// 2. Dynamic Tab Title alignment & icon-text gap.
if ( ! $is_vertical_layout ) {
	$css['desktop'][ $title_wrap_sel ]['justify-content'] = WCB_Block_Helper::get_flex_align( $tab_align );
}
$css['desktop'][ $title_child_sel ]['justify-content']                   = WCB_Block_Helper::get_flex_align( $text_align );
$css['desktop'][ $title_child_sel . '--icon-top' ]['align-items']        = WCB_Block_Helper::get_flex_align( $text_align );
$css['desktop'][ $title_child_sel . '--icon-bottom' ]['align-items']     = WCB_Block_Helper::get_flex_align( $text_align );
if ( ! empty( $si['colGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_child_sel, 'gap', $si['colGap'] );
}

// 3. Legacy container background & border.
if ( ! empty( $sc['background'] ) ) {
	WCB_Block_Helper::add_background_css( $css, $body_sel, $sc['background'] );
} elseif ( ! empty( $sc['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $body_sel, 'background-color', $sc['backgroundColor'] );
}
if ( ! empty( $sc['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $body_sel, $sc['border'], true );
}

// 4. Title Wrap gaps, typography, padding, colors & borders.
if ( ! empty( $st['colunmGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_wrap_sel, 'column-gap', $st['colunmGap'] );
}
if ( ! empty( $st['rowGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_wrap_sel, 'row-gap', $st['rowGap'] );
}
if ( ! empty( $st['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $title_sel, $st['typography'] );
}
if ( ! empty( $st['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $title_sel, 'padding', $st['padding'] );
}
if ( ! empty( $st['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_child_sel, 'background-color', $st['backgroundColor'] );
}
$title_text_color = $st['color'] ?? ( $st['textColor'] ?? '' );
if ( ! empty( $title_text_color ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_sel, 'color', $title_text_color );
}
$title_active_bg = $st['backgroundColorActive'] ?? ( $st['activeBackgroundColor'] ?? '' );
if ( ! empty( $title_active_bg ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_child_act_sel, 'background-color', $title_active_bg );
}
$title_active_color = $st['colorActive'] ?? ( $st['activeTextColor'] ?? '' );
if ( ! empty( $title_active_color ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_act_sel, 'color', $title_active_color );
}
if ( ! $is_horizontal_style2 && ! $is_vertical_style2 ) {
	if ( ! empty( $st['border'] ) ) {
		WCB_Block_Helper::add_border_css( $css, $title_child_sel, $st['border'], true );
	}
	if ( ! empty( $st['borderActive'] ) ) {
		WCB_Block_Helper::add_border_css( $css, $title_child_act_sel, $st['borderActive'], true );
	}
}

// 5. Body dynamic styles.
if ( ! empty( $sb['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $body_sel, $sb['typography'] );
}
if ( ! empty( $sb['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $body_sel, 'padding', $sb['padding'] );
}
if ( ! empty( $sb['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $body_sel, 'margin', $sb['margin'] );
}
if ( ! empty( $sb['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $body_sel, 'color', $sb['color'] );
	WCB_Block_Helper::add_responsive_css( $css, $body_child_sel, 'color', $sb['color'] );
}
if ( ! empty( $sb['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $body_sel, 'background-color', $sb['backgroundColor'] );
}
if ( ! empty( $sb['colorHover'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $body_child_sel . ':hover', 'color', $sb['colorHover'] );
}
if ( ! empty( $sb['backgroundColorHover'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $body_sel . ':hover', 'background-color', $sb['backgroundColorHover'] );
}
if ( ! empty( $sb['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $body_sel, $sb['border'], true );
}

// 6. Icon dynamic styles.
if ( ! empty( $si['size'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $icon_svg_sel, 'font-size', $si['size'], 'px' );
	WCB_Block_Helper::add_responsive_css( $css, $icon_svg_sel, 'width', $si['size'], 'px' );
	WCB_Block_Helper::add_responsive_css( $css, $icon_svg_sel, 'height', $si['size'], 'px' );
}
if ( ! empty( $si['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $icon_sel, 'color', $si['color'] );
}
$icon_active_color = $si['activeColor'] ?? ( $si['colorActive'] ?? '' );
if ( ! empty( $icon_active_color ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $icon_act_sel, 'color', $icon_active_color );
}

// 7. Dimension & Advance.
if ( ! empty( $sdm['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'padding', $sdm['padding'] );
}
if ( ! empty( $sdm['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $sdm['margin'] );
}

WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
