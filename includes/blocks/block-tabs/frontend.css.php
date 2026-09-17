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

$selectors   = array();
$t_selectors = array();
$m_selectors = array();

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

// Helper for flex alignment
$get_flex_align = function( $align ) {
	switch ( $align ) {
		case 'right':
			return 'flex-end';
		case 'center':
			return 'center';
		case 'left':
		default:
			return 'flex-start';
	}
};

// 1. Inner contents
if ( ! empty( $gg['textAlignment'] ) ) {
	$selectors[ $inner_sel ]['text-align'] = $gg['textAlignment'];
}
if ( ! empty( $sc['colunmGap'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sc['colunmGap'], 'column-gap', $inner_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sc['colunmGap'], 'column-gap', $inner_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sc['colunmGap'], 'column-gap', $inner_sel, 'mobile' ) );
}
if ( ! empty( $sc['rowGap'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sc['rowGap'], 'row-gap', $inner_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sc['rowGap'], 'row-gap', $inner_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sc['rowGap'], 'row-gap', $inner_sel, 'mobile' ) );
}

// 2. Layout Styles
$layout = $gg['layout'] ?? '';
$style  = $gg['style'] ?? '';
$tab_align  = $gt['tabAlignment'] ?? 'left';
$text_align = $gt['textAlignment'] ?? 'left';
$title_row_gap = $st['rowGap']['Desktop'] ?? ( $st['rowGap'] ?? '1rem' );
$icon_col_gap  = $si['colGap']['Desktop'] ?? ( $si['colGap'] ?? '0.5rem' );

if ( 'grid' === $layout || 'verticalStyle1' === $style || 'verticalStyle2' === $style ) {
	$selectors[ $inner_sel ]['display']               = 'grid';
	$selectors[ $inner_sel ]['grid-template-columns'] = '1fr 3fr';
	$selectors[ $inner_sel ]['gap']                   = '1rem';

	$selectors[ $title_wrap_sel ]['display']         = 'flex';
	$selectors[ $title_wrap_sel ]['flex-direction']  = 'column';
	$selectors[ $title_wrap_sel ]['gap']             = $title_row_gap;
	$selectors[ $title_wrap_sel ]['justify-content'] = $get_flex_align( $tab_align );

	$selectors[ $title_child_sel ]['display']         = 'flex';
	$selectors[ $title_child_sel ]['flex-direction']  = 'row';
	$selectors[ $title_child_sel ]['width']           = '100%';
	$selectors[ $title_child_sel ]['padding']         = '0.5rem';
	$selectors[ $title_child_sel ]['box-sizing']      = 'border-box';
	$selectors[ $title_child_sel ]['justify-content'] = $get_flex_align( $text_align );
	$selectors[ $title_child_sel ]['gap']             = $icon_col_gap;

	$selectors[ $body_sel ]['margin']     = '0px';
	$selectors[ $body_sel ]['padding']    = '1rem';
	$selectors[ $body_sel ]['box-sizing'] = 'border-box';

	$selectors[ $title_child_btn_sel ]['padding'] = '0.6rem';
} elseif ( 'accordion' === $layout || 'horizontalStyle1' === $style ) {
	$selectors[ $title_wrap_sel ]['display']         = 'flex';
	$selectors[ $title_wrap_sel ]['flex-direction']  = 'row';
	$selectors[ $title_wrap_sel ]['gap']             = '0.5rem';
	$selectors[ $title_wrap_sel ]['justify-content'] = $get_flex_align( $tab_align );

	$selectors[ $title_child_sel ]['display']         = 'flex';
	$selectors[ $title_child_sel ]['flex-direction']  = 'row';
	$selectors[ $title_child_sel ]['justify-content'] = $get_flex_align( $text_align );
	$selectors[ $title_child_sel ]['gap']             = $icon_col_gap;
} elseif ( 'horizontalStyle2' === $style ) {
	$selectors[ $title_wrap_sel ]['display']         = 'flex';
	$selectors[ $title_wrap_sel ]['flex-direction']  = 'row';
	$selectors[ $title_wrap_sel ]['gap']             = '0.5rem';
	$selectors[ $title_wrap_sel ]['justify-content'] = $get_flex_align( $tab_align );
	$selectors[ $title_wrap_sel ]['border-bottom']   = '2px solid #d1d5db';
	$selectors[ $title_wrap_sel ]['margin-bottom']   = '0';
	$selectors[ $title_wrap_sel ]['background']      = '#fff';

	$selectors[ $title_child_sel ]['display']         = 'flex';
	$selectors[ $title_child_sel ]['flex-direction']  = 'row';
	$selectors[ $title_child_sel ]['justify-content'] = $get_flex_align( $text_align );
	$selectors[ $title_child_sel ]['background']      = 'none';
	$selectors[ $title_child_sel ]['border']          = 'none';
	$selectors[ $title_child_sel ]['border-radius']   = '0';
	$selectors[ $title_child_sel ]['margin-bottom']   = '-2px';
	$selectors[ $title_child_sel ]['z-index']         = '1';

	$selectors[ $title_child_act_sel ]['background']    = ! empty( $st['backgroundColorActive'] ) ? $st['backgroundColorActive'] : ( $st['activeBackgroundColor'] ?? '#fff' );
	$selectors[ $title_child_act_sel ]['border']        = 'none';
	$selectors[ $title_child_act_sel ]['border-top']    = '2px solid #d1d5db';
	$selectors[ $title_child_act_sel ]['border-right']  = '2px solid #d1d5db';
	$selectors[ $title_child_act_sel ]['border-left']   = '2px solid #d1d5db';
	$selectors[ $title_child_act_sel ]['border-radius'] = '0';
	$selectors[ $title_child_act_sel ]['margin-bottom'] = '-2px';
	$selectors[ $title_child_act_sel ]['z-index']       = '2';

	$selectors[ $body_sel ]['border']     = '1px solid #d1d5db';
	$selectors[ $body_sel ]['border-top'] = 'none';
	$selectors[ $body_sel ]['margin-top'] = '0';
	$selectors[ $body_sel ]['padding']    = '2rem';
}

// 3. Container background & border
if ( ! empty( $sc['background'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_background_css( $sc['background'], $body_sel ) );
} elseif ( ! empty( $sc['backgroundColor'] ) ) {
	$selectors[ $body_sel ]['background-color'] = $sc['backgroundColor'];
}
if ( ! empty( $sc['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sc['border'], $body_sel, true ) );
}

// 4. Title Wrap gaps
if ( ! empty( $st['colunmGap'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $st['colunmGap'], 'column-gap', $title_wrap_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $st['colunmGap'], 'column-gap', $title_wrap_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $st['colunmGap'], 'column-gap', $title_wrap_sel, 'mobile' ) );
}
if ( ! empty( $st['rowGap'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $st['rowGap'], 'row-gap', $title_wrap_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $st['rowGap'], 'row-gap', $title_wrap_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $st['rowGap'], 'row-gap', $title_wrap_sel, 'mobile' ) );
}

// Title typography & padding
if ( ! empty( $st['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $st['typography'], $title_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $st['typography'], $title_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $st['typography'], $title_sel, 'mobile' ) );
}
if ( ! empty( $st['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $st['padding'], 'padding', $title_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $st['padding'], 'padding', $title_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $st['padding'], 'padding', $title_sel, 'mobile' ) );
}

// Title colors
if ( ! empty( $st['backgroundColor'] ) ) {
	$selectors[ $title_child_sel ]['background-color'] = $st['backgroundColor'];
}
$title_text_color = $st['color'] ?? ( $st['textColor'] ?? '' );
if ( ! empty( $title_text_color ) ) {
	$selectors[ $title_sel ]['color'] = $title_text_color;
}
$title_active_bg = $st['backgroundColorActive'] ?? ( $st['activeBackgroundColor'] ?? '' );
if ( ! empty( $title_active_bg ) ) {
	$selectors[ $title_child_act_sel ]['background-color'] = $title_active_bg;
}
$title_active_color = $st['colorActive'] ?? ( $st['activeTextColor'] ?? '' );
if ( ! empty( $title_active_color ) ) {
	$selectors[ $title_act_sel ]['color'] = $title_active_color;
}

// Title borders
if ( ! empty( $st['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $st['border'], $title_child_sel, true ) );
}
if ( ! empty( $st['borderActive'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $st['borderActive'], $title_child_act_sel, true ) );
}

// 5. Body styles
if ( ! empty( $sb['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $sb['typography'], $body_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $sb['typography'], $body_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $sb['typography'], $body_sel, 'mobile' ) );
}
if ( ! empty( $sb['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sb['padding'], 'padding', $body_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sb['padding'], 'padding', $body_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sb['padding'], 'padding', $body_sel, 'mobile' ) );
}
if ( ! empty( $sb['margin'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sb['margin'], 'margin', $body_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sb['margin'], 'margin', $body_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sb['margin'], 'margin', $body_sel, 'mobile' ) );
}
if ( ! empty( $sb['color'] ) ) {
	$selectors[ $body_sel ]['color']       = $sb['color'];
	$selectors[ $body_child_sel ]['color'] = $sb['color'];
}
if ( ! empty( $sb['backgroundColor'] ) ) {
	$selectors[ $body_sel ]['background-color'] = $sb['backgroundColor'];
}
if ( ! empty( $sb['colorHover'] ) ) {
	$selectors[ $body_child_sel . ':hover' ]['color'] = $sb['colorHover'];
}
if ( ! empty( $sb['backgroundColorHover'] ) ) {
	$selectors[ $body_sel . ':hover' ]['background-color'] = $sb['backgroundColorHover'];
}
if ( ! empty( $sb['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sb['border'], $body_sel, true ) );
}

// 6. Icon styles
if ( ! empty( $si['size'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $si['size'], 'font-size', $icon_svg_sel, 'desktop' ) );
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $si['size'], 'width', $icon_svg_sel, 'desktop' ) );
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $si['size'], 'height', $icon_svg_sel, 'desktop' ) );

	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $si['size'], 'font-size', $icon_svg_sel, 'tablet' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $si['size'], 'width', $icon_svg_sel, 'tablet' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $si['size'], 'height', $icon_svg_sel, 'tablet' ) );

	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $si['size'], 'font-size', $icon_svg_sel, 'mobile' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $si['size'], 'width', $icon_svg_sel, 'mobile' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $si['size'], 'height', $icon_svg_sel, 'mobile' ) );
}
if ( ! empty( $si['color'] ) ) {
	$selectors[ $icon_sel ]['color'] = $si['color'];
}
$icon_active_color = $si['activeColor'] ?? ( $si['colorActive'] ?? '' );
if ( ! empty( $icon_active_color ) ) {
	$selectors[ $icon_act_sel ]['color'] = $icon_active_color;
}
$selectors[ $title_child_sel . '--icon-top' ]['flex-direction']    = 'column';
$selectors[ $title_child_sel . '--icon-bottom' ]['flex-direction'] = 'column';

// 7. Dimension & Advance
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

$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

