<?php
/**
 * Frontend CSS for Icon List Item (Child) Block.
 *
 * Mirrors src/block-icon-child/GlobalCssChild.tsx.
 *
 * OPTIMIZATION:
 * Child blocks inherit their default styling (icon size, icon colors, title typography,
 * text colors, layout alignment) directly from the parent Icon List block.
 * To avoid CSS bloat and unnecessary override rules, this file ONLY generates CSS
 * for properties that are explicitly customized on this specific child item ($raw_attrs)
 * and differ from the parent block ($parent_attrs).
 * If a property is not customized or matches parent, it is left to inherit from the parent block.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$raw    = ( isset( $raw_attrs ) && is_array( $raw_attrs ) ) ? $raw_attrs : $attr;
$parent = ( isset( $parent_attrs ) && is_array( $parent_attrs ) ) ? $parent_attrs : array();

$css = array(
	'desktop' => array(),
	'tablet'  => array(),
	'mobile'  => array(),
);

$wrap_sel        = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"][data-block-type="icon-item"]';
$icon_wrap_sel   = $wrap_sel . ' .wcb-icon-list__icon-wrap';
$icon_sel        = $wrap_sel . ' .wcb-icon-list__icon';
$icon_full_sel   = $wrap_sel . ' .wcb-icon-full';
$heading_sel     = $wrap_sel . ' .wcb-icon-list__heading';
$designation_sel = $wrap_sel . ' .wcb-icon-list__designation';

// Custom override flags
$is_custom_icon     = ! empty( $raw['isCustomStyleIcon'] );
$is_custom_title    = ! empty( $raw['isCustomStyleTitle'] );
$is_custom_desig    = ! empty( $raw['isCustomStyleDesignation'] );
$is_custom_dim      = ! empty( $raw['isCustomStyleDimension'] );
$is_custom_gen_icon = ! empty( $raw['isCustomGeneralIcon'] );

// If NO panels have been customized on this child, generate ZERO bytes of CSS.
// The parent block's CSS already styles all children.
$has_custom = $is_custom_icon || $is_custom_title || $is_custom_desig || $is_custom_dim || $is_custom_gen_icon;
if ( ! $has_custom ) {
	// Still check for any explicit advance settings (z-index, responsive condition)
	WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $raw );
	return WCB_Block_Helper::generate_all_css( $css, '' );
}

// =====================================================================
// 1. CHILD WRAP & ITEM SPECIFIC (General Icon / Dimension)
// =====================================================================
$raw_gi  = $raw['general_icon'] ?? array();
$raw_sdm = $raw['style_dimension'] ?? array();

if ( $is_custom_gen_icon ) {
	$c_vert = $raw_gi['verticalAlignment'] ?? '';
	if ( 'middle' === $c_vert ) {
		$css['desktop'][ $wrap_sel . '.wcb-icon-list__wrap .wcb-icon-list__icon-wrap, ' . $wrap_sel . '.wcb-icon-list__wrap .wcb-icon-list__content' ]['align-self'] = 'center';
	}

	$c_pos = $raw_gi['iconPosition'] ?? '';
	if ( ! empty( $c_pos ) ) {
		$css['desktop'][ $wrap_sel . '.wcb-icon-list__wrap .wcb-icon-list__icon-wrap' ]['order'] = ( 'leftOfTitle' === $c_pos ) ? '0' : '2';

		if ( 'leftOfTitle' === $c_pos || 'rightOfTitle' === $c_pos ) {
			$css['desktop'][ $wrap_sel . '.wcb-icon-list__wrap .wcb-icon-list__content-title-wrap' ]['display'] = 'flex';
		}
	}
}

if ( $is_custom_dim ) {
	if ( ! empty( $raw_sdm['padding'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'padding', $raw_sdm['padding'] );
	}
	if ( ! empty( $raw_sdm['margin'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $raw_sdm['margin'] );
	}
}

// =====================================================================
// 2. CHILD ICON STYLES
// =====================================================================
if ( $is_custom_icon ) {
	$raw_si = $raw['style_Icon'] ?? null;
	if ( ! empty( $raw_si ) && is_array( $raw_si ) ) {
		if ( ! empty( $raw_si['dimensions']['margin'] ) ) {
			WCB_Block_Helper::add_dimension_css( $css, $icon_wrap_sel, 'margin', $raw_si['dimensions']['margin'] );
		}
		if ( ! empty( $raw_si['dimensions']['padding'] ) ) {
			WCB_Block_Helper::add_dimension_css( $css, $icon_sel, 'padding', $raw_si['dimensions']['padding'] );
		}
		if ( ! empty( $raw_si['border'] ) ) {
			WCB_Block_Helper::add_border_css( $css, $icon_sel, $raw_si['border'], true, true );
		}
		if ( ! empty( $raw_si['iconSize'] ) ) {
			WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel, 'width', $raw_si['iconSize'], 'px' );
			WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel, 'font-size', $raw_si['iconSize'], 'px' );
		}
		if ( ! empty( $raw_si['color'] ) ) {
			WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel, 'color', $raw_si['color'] );
		}
		if ( ! empty( $raw_si['hoverColor'] ) ) {
			WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel . ':hover', 'color', $raw_si['hoverColor'] );
		}
	}
}

// =====================================================================
// 3. CHILD TITLE / HEADING
// =====================================================================
if ( $is_custom_title ) {
	$raw_st = $raw['style_title'] ?? null;
	if ( ! empty( $raw_st ) && is_array( $raw_st ) ) {
		if ( ! empty( $raw_st['typography'] ) ) {
			WCB_Block_Helper::add_typography_css( $css, $heading_sel, $raw_st['typography'] );
		}
		if ( ! empty( $raw_st['marginBottom'] ) ) {
			WCB_Block_Helper::add_responsive_css( $css, $heading_sel, 'margin-bottom', $raw_st['marginBottom'], 'px' );
		}
		if ( ! empty( $raw_st['textColor'] ) ) {
			WCB_Block_Helper::add_responsive_css( $css, $heading_sel, 'color', $raw_st['textColor'] );
		}
		if ( ! empty( $raw_st['textColorHover'] ) ) {
			WCB_Block_Helper::add_responsive_css( $css, $heading_sel . ':hover', 'color', $raw_st['textColorHover'] );
		}
	}
}

// =====================================================================
// 4. CHILD PREFIX / DESIGNATION
// =====================================================================
if ( $is_custom_desig ) {
	$raw_sd = $raw['style_desination'] ?? null;
	if ( ! empty( $raw_sd ) && is_array( $raw_sd ) ) {
		if ( ! empty( $raw_sd['typography'] ) ) {
			WCB_Block_Helper::add_typography_css( $css, $designation_sel, $raw_sd['typography'] );
		}
		if ( ! empty( $raw_sd['marginBottom'] ) ) {
			WCB_Block_Helper::add_responsive_css( $css, $designation_sel, 'margin-bottom', $raw_sd['marginBottom'], 'px' );
		}
		if ( ! empty( $raw_sd['textColor'] ) ) {
			WCB_Block_Helper::add_responsive_css( $css, $designation_sel, 'color', $raw_sd['textColor'] );
		}
	}
}

// =====================================================================
// 5. ADVANCE
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $raw );

return WCB_Block_Helper::generate_all_css( $css, '' );
