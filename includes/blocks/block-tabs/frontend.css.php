<?php
/**
 * Frontend CSS for Tabs Block.
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

$wrap_sel             = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$inner_sel            = $wrap_sel . ' .wcb-tabs__contents';
$title_wrap_sel       = $wrap_sel . ' .wcb-tabs__titles';
$title_child_sel      = $wrap_sel . ' .wcb-tabs__title_inner';
$title_child_act_sel  = $wrap_sel . ' .wcb-tabs__title_inner.is-active';
$title_child_btn_sel  = $wrap_sel . ' .wcb-tabs__title_inner_btn';
$title_sel            = $wrap_sel . ' .wcb-tabs__title';
$title_act_sel        = $title_child_act_sel . ' .wcb-tabs__title';
$body_sel             = $wrap_sel . ' .wcb-tab-child__wrap';
$body_child_sel       = $wrap_sel . ' .wcb-tab-child__inner';
$icon_sel             = $wrap_sel . ' .wcb-tabs__icon';
$icon_act_sel         = $title_child_act_sel . ' .wcb-tabs__icon';
$icon_svg_sel         = $icon_sel . ', ' . $icon_sel . ':before, ' . $icon_sel . ' svg';


// 1. Inner contents.
if ( ! empty( $gg['textAlignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'text-align', $gg['textAlignment'] );
}
if ( ! empty( $sc['colunmGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'column-gap', $sc['colunmGap'] );
}
if ( ! empty( $sc['rowGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'row-gap', $sc['rowGap'] );
}

// 2. Layout Styles.
$layout        = $gg['layout'] ?? '';
$style         = $gg['style'] ?? '';
$tab_align     = $gt['tabAlignment'] ?? 'left';
$text_align    = $gt['textAlignment'] ?? 'left';
$title_row_gap = $st['rowGap']['Desktop'] ?? ( $st['rowGap'] ?? '1rem' );
$icon_col_gap  = $si['colGap']['Desktop'] ?? ( $si['colGap'] ?? '0.5rem' );

if ( 'grid' === $layout || 'verticalStyle1' === $style || 'verticalStyle2' === $style ) {
	$css['desktop'][ $inner_sel ]['display']               = 'grid';
	$css['desktop'][ $inner_sel ]['grid-template-columns'] = '1fr 3fr';
	$css['desktop'][ $inner_sel ]['gap']                   = '1rem';

	$css['desktop'][ $title_wrap_sel ]['display']         = 'flex';
	$css['desktop'][ $title_wrap_sel ]['flex-direction']  = 'column';
	$css['desktop'][ $title_wrap_sel ]['gap']             = $title_row_gap;
	$css['desktop'][ $title_wrap_sel ]['justify-content'] = WCB_Block_Helper::get_flex_align( $tab_align );

	$css['desktop'][ $title_child_sel ]['display']         = 'flex';
	$css['desktop'][ $title_child_sel ]['flex-direction']  = 'row';
	$css['desktop'][ $title_child_sel ]['width']           = '100%';
	$css['desktop'][ $title_child_sel ]['padding']         = '0.5rem';
	$css['desktop'][ $title_child_sel ]['box-sizing']      = 'border-box';
	$css['desktop'][ $title_child_sel ]['justify-content'] = WCB_Block_Helper::get_flex_align( $text_align );
	$css['desktop'][ $title_child_sel ]['gap']             = $icon_col_gap;

	$css['desktop'][ $body_sel ]['margin']     = '0px';
	$css['desktop'][ $body_sel ]['padding']    = '1rem';
	$css['desktop'][ $body_sel ]['box-sizing'] = 'border-box';

	$css['desktop'][ $title_child_btn_sel ]['padding'] = '0.6rem';
} elseif ( 'accordion' === $layout || 'horizontalStyle1' === $style ) {
	$css['desktop'][ $title_wrap_sel ]['display']         = 'flex';
	$css['desktop'][ $title_wrap_sel ]['flex-direction']  = 'row';
	$css['desktop'][ $title_wrap_sel ]['gap']             = '0.5rem';
	$css['desktop'][ $title_wrap_sel ]['justify-content'] = WCB_Block_Helper::get_flex_align( $tab_align );

	$css['desktop'][ $title_child_sel ]['display']         = 'flex';
	$css['desktop'][ $title_child_sel ]['flex-direction']  = 'row';
	$css['desktop'][ $title_child_sel ]['justify-content'] = WCB_Block_Helper::get_flex_align( $text_align );
	$css['desktop'][ $title_child_sel ]['gap']             = $icon_col_gap;
} elseif ( 'horizontalStyle2' === $style ) {
	$css['desktop'][ $title_wrap_sel ]['display']         = 'flex';
	$css['desktop'][ $title_wrap_sel ]['flex-direction']  = 'row';
	$css['desktop'][ $title_wrap_sel ]['gap']             = '0.5rem';
	$css['desktop'][ $title_wrap_sel ]['justify-content'] = WCB_Block_Helper::get_flex_align( $tab_align );
	$css['desktop'][ $title_wrap_sel ]['border-bottom']   = '2px solid #d1d5db';
	$css['desktop'][ $title_wrap_sel ]['margin-bottom']   = '0';
	$css['desktop'][ $title_wrap_sel ]['background']      = '#fff';

	$css['desktop'][ $title_child_sel ]['display']         = 'flex';
	$css['desktop'][ $title_child_sel ]['flex-direction']  = 'row';
	$css['desktop'][ $title_child_sel ]['justify-content'] = WCB_Block_Helper::get_flex_align( $text_align );
	$css['desktop'][ $title_child_sel ]['background']      = 'none';
	$css['desktop'][ $title_child_sel ]['border']          = 'none';
	$css['desktop'][ $title_child_sel ]['border-radius']   = '0';
	$css['desktop'][ $title_child_sel ]['margin-bottom']   = '-2px';
	$css['desktop'][ $title_child_sel ]['z-index']         = '1';

	$act_bg = ! empty( $st['backgroundColorActive'] ) ? $st['backgroundColorActive'] : ( $st['activeBackgroundColor'] ?? '#fff' );
	WCB_Block_Helper::add_responsive_css( $css, $title_child_act_sel, 'background', $act_bg );
	$css['desktop'][ $title_child_act_sel ]['border']        = 'none';
	$css['desktop'][ $title_child_act_sel ]['border-top']    = '2px solid #d1d5db';
	$css['desktop'][ $title_child_act_sel ]['border-right']  = '2px solid #d1d5db';
	$css['desktop'][ $title_child_act_sel ]['border-left']   = '2px solid #d1d5db';
	$css['desktop'][ $title_child_act_sel ]['border-radius'] = '0';
	$css['desktop'][ $title_child_act_sel ]['margin-bottom'] = '-2px';
	$css['desktop'][ $title_child_act_sel ]['z-index']       = '2';

	$css['desktop'][ $body_sel ]['border']     = '1px solid #d1d5db';
	$css['desktop'][ $body_sel ]['border-top'] = 'none';
	$css['desktop'][ $body_sel ]['margin-top'] = '0';
	$css['desktop'][ $body_sel ]['padding']    = '2rem';
}

// 3. Container background & border.
if ( ! empty( $sc['background'] ) ) {
	WCB_Block_Helper::add_background_css( $css, $body_sel, $sc['background'] );
} elseif ( ! empty( $sc['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $body_sel, 'background-color', $sc['backgroundColor'] );
}
if ( ! empty( $sc['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $body_sel, $sc['border'], true );
}

// 4. Title Wrap gaps.
if ( ! empty( $st['colunmGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_wrap_sel, 'column-gap', $st['colunmGap'] );
}
if ( ! empty( $st['rowGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_wrap_sel, 'row-gap', $st['rowGap'] );
}

// Title typography & padding.
if ( ! empty( $st['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $title_sel, $st['typography'] );
}
if ( ! empty( $st['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $title_sel, 'padding', $st['padding'] );
}

// Title colors.
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

// Title borders.
if ( ! empty( $st['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $title_child_sel, $st['border'], true );
}
if ( ! empty( $st['borderActive'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $title_child_act_sel, $st['borderActive'], true );
}

// 5. Body styles.
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

// 6. Icon styles.
if ( ! empty( $si['size'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $icon_svg_sel, 'font-size', $si['size'] );
	WCB_Block_Helper::add_responsive_css( $css, $icon_svg_sel, 'width', $si['size'] );
	WCB_Block_Helper::add_responsive_css( $css, $icon_svg_sel, 'height', $si['size'] );
}
if ( ! empty( $si['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $icon_sel, 'color', $si['color'] );
}
$icon_active_color = $si['activeColor'] ?? ( $si['colorActive'] ?? '' );
if ( ! empty( $icon_active_color ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $icon_act_sel, 'color', $icon_active_color );
}
$css['desktop'][ $title_child_sel . '--icon-top' ]['flex-direction']    = 'column';
$css['desktop'][ $title_child_sel . '--icon-bottom' ]['flex-direction'] = 'column';

// 7. Dimension & Advance.
if ( ! empty( $sdm['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'padding', $sdm['padding'] );
}
if ( ! empty( $sdm['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $sdm['margin'] );
}

WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
