<?php
/**
 * Frontend CSS for Icon Box Block.
 *
 * Mirrors src/block-icon-box/GlobalCss.tsx so every style rendered by the
 * emotion <Global> component in the editor is also present in the
 * generated per-post CSS files (asset generation).
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$css = array(
	'desktop' => array(),
	'tablet'  => array(),
	'mobile'  => array(),
);

$wrap_sel        = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$icon_wrap_sel   = $wrap_sel . ' .wcb-icon-box__icon-wrap';
$icon_sel        = $wrap_sel . ' .wcb-icon-box__icon';
$icon_full_sel   = $wrap_sel . ' .wcb-icon-full';
$content_sel     = $wrap_sel . ' .wcb-icon-box__content';
$title_wrap_sel  = $wrap_sel . ' .wcb-icon-box__content-title-wrap';
$designation_sel = $wrap_sel . ' .wcb-icon-box__designation';
$heading_sel     = $wrap_sel . ' .wcb-icon-box__heading';
$separator_sel   = $wrap_sel . ' .wcb-icon-box__separator';
$desc_sel        = $wrap_sel . ' .wcb-icon-box__description';

// =====================================================================
// 1. WRAP DIV & LAYOUT (mirrors getDivWrapStyles)
// =====================================================================
$gl  = $attr['general_layout'] ?? array();
$gi  = $attr['general_icon'] ?? array();
$sdm = $attr['style_dimension'] ?? array();

// Text Alignment on wrap.
if ( ! empty( $gl['textAlignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $wrap_sel, 'text-align', $gl['textAlignment'] );
}

// Display & Flex Direction.
$icon_pos = $gi['iconPosition'] ?? 'top';
$stack_on = $gi['stackOn'] ?? 'none';

if ( 'left' === $icon_pos || 'right' === $icon_pos ) {
	$css['desktop'][ $wrap_sel ]['display']        = 'flex';
	$css['desktop'][ $wrap_sel ]['flex-direction'] = 'row';

	$stack_col = ( 'right' === $icon_pos ) ? 'column-reverse' : 'column';

	if ( 'tablet' === $stack_on ) {
		$css['tablet'][ $wrap_sel ]['flex-direction'] = $stack_col;
		$css['mobile'][ $wrap_sel ]['flex-direction'] = $stack_col;
	} elseif ( 'mobile' === $stack_on ) {
		$css['mobile'][ $wrap_sel ]['flex-direction'] = $stack_col;
	}
}

// Vertical Alignment.
if ( 'middle' === ( $gi['verticalAlignment'] ?? 'top' ) ) {
	$css['desktop'][ $icon_wrap_sel ]['align-self'] = 'center';
	$css['desktop'][ $content_sel ]['align-self']   = 'center';
}

// Content Title Wrap.
if ( 'leftOfTitle' === $icon_pos || 'rightOfTitle' === $icon_pos ) {
	$css['desktop'][ $title_wrap_sel ]['display'] = 'flex';
}

// Wrap Padding & Margin.
if ( ! empty( $sdm['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'padding', $sdm['padding'] );
}
if ( ! empty( $sdm['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $sdm['margin'] );
}

// =====================================================================
// 2. ICON STYLES (mirrors GlobalCss.tsx lines 103-135)
// =====================================================================
$enable_icon = $gi['enableIcon'] ?? true;
if ( $enable_icon ) {
	$si = $attr['style_Icon'] ?? array();

	// Icon Wrap Margin.
	if ( ! empty( $si['dimensions']['margin'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $icon_wrap_sel, 'margin', $si['dimensions']['margin'] );
	}

	// Icon Padding.
	if ( ! empty( $si['dimensions']['padding'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $icon_sel, 'padding', $si['dimensions']['padding'] );
	}

	// Icon Border & Radius.
	if ( ! empty( $si['border'] ) ) {
		WCB_Block_Helper::add_border_css( $css, $icon_sel, $si['border'], true, true );
	}


	// Icon Size (applied to .wcb-icon-full as width and font-size).
	if ( ! empty( $si['iconSize'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel, 'width', $si['iconSize'], 'px' );
		WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel, 'font-size', $si['iconSize'], 'px' );
	}

	// Icon Color.
	if ( ! empty( $si['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel, 'color', $si['color'] );
	}
	if ( ! empty( $si['hoverColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel . ':hover', 'color', $si['hoverColor'] );
	}
}

// =====================================================================
// 3. DESIGNATION / PREFIX (mirrors GlobalCss.tsx lines 138-157)
// =====================================================================
$enable_prefix = $gl['enablePrefix'] ?? false;
if ( $enable_prefix ) {
	$sd = $attr['style_desination'] ?? array();

	if ( ! empty( $sd['typography'] ) ) {
		WCB_Block_Helper::add_typography_css( $css, $designation_sel, $sd['typography'] );
	}
	if ( ! empty( $sd['marginBottom'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $designation_sel, 'margin-bottom', $sd['marginBottom'], 'px' );
	}
	if ( ! empty( $sd['textColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $designation_sel, 'color', $sd['textColor'] );
	}
}

// =====================================================================
// 4. TITLE / HEADING (mirrors GlobalCss.tsx lines 160-179)
// =====================================================================
$enable_title = $gl['enableTitle'] ?? true;
if ( $enable_title ) {
	$st = $attr['style_title'] ?? array();

	if ( ! empty( $st['typography'] ) ) {
		WCB_Block_Helper::add_typography_css( $css, $heading_sel, $st['typography'] );
	}
	if ( ! empty( $st['marginBottom'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $heading_sel, 'margin-bottom', $st['marginBottom'], 'px' );
	}
	if ( ! empty( $st['textColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $heading_sel, 'color', $st['textColor'] );
	}
}

// =====================================================================
// 5. SEPARATOR (mirrors GlobalCss.tsx lines 182-203)
// =====================================================================
$gs             = $attr['general_separator'] ?? array();
$enable_separator = $gs['enableSeparator'] ?? false;
if ( $enable_separator ) {
	$ss = $attr['style_separator'] ?? array();

	if ( ! empty( $ss['border'] ) && is_array( $ss['border'] ) ) {
		$w  = WCB_Block_Helper::get_css_value( $ss['border']['width'] ?? '1px' );
		$st = $ss['border']['style'] ?? 'solid';
		$c  = $ss['border']['color'] ?? '#334155';
		if ( 'none' === $st ) {
			WCB_Block_Helper::add_responsive_css( $css, $separator_sel, 'border', 'none' );
		} else {
			WCB_Block_Helper::add_responsive_css( $css, $separator_sel, 'border-top', trim( $w . ' ' . $st . ' ' . $c ) );
		}
	}

	if ( ! empty( $ss['width'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $separator_sel, 'width', $ss['width'], 'px' );
	}
	if ( ! empty( $ss['marginBottom'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $separator_sel, 'margin-bottom', $ss['marginBottom'], 'px' );
	}
}

// =====================================================================
// 6. DESCRIPTION (mirrors GlobalCss.tsx lines 206-225)
// =====================================================================
$enable_desc = $gl['enableDescription'] ?? true;
if ( $enable_desc ) {
	$sds = $attr['style_description'] ?? array();

	if ( ! empty( $sds['typography'] ) ) {
		WCB_Block_Helper::add_typography_css( $css, $desc_sel, $sds['typography'] );
	}
	if ( ! empty( $sds['marginBottom'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $desc_sel, 'margin-bottom', $sds['marginBottom'], 'px' );
	}
	if ( ! empty( $sds['textColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $desc_sel, 'color', $sds['textColor'] );
	}
}

// =====================================================================
// 7. ADVANCE (responsive condition + motion effect + z-index)
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
