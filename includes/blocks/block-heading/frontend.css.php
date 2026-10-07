<?php
/**
 * Frontend CSS for Heading Block.
 *
 * Mirrors src/block-heading/GlobalCss.tsx so every style rendered by the
 * emotion <Global> component in the editor is also present in the
 * generated per-post CSS files (asset generation).
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

// Wrap selector — identical to WRAP_CLASSNAME in GlobalCss.tsx.
$wrap_sel     = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$h_sel        = $wrap_sel . ' .wcb-heading__heading';
$sh_sel       = $wrap_sel . ' .wcb-heading__subHeading';
$sep_sel      = $wrap_sel . ' .wcb-heading__separator';
$sep_wrap_sel = $wrap_sel . ' .wcb-heading__separator-wrap';
$mark_sel     = $wrap_sel . ' mark';
$link_sel     = $wrap_sel . ' a';

// =====================================================================
// 1. GENERAL CONTENT (Text Alignment)
// =====================================================================
if ( ! empty( $attr['general_content']['textAlignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $wrap_sel, 'text-align', $attr['general_content']['textAlignment'] );
}

// =====================================================================
// 2. BACKGROUND (Normal + Hover)
// =====================================================================
if ( ! empty( $attr['styles_background']['background'] ) ) {
	$bg      = $attr['styles_background']['background'];
	$bg_type = $bg['bgType'] ?? 'color';
	if ( 'color' === $bg_type && ! empty( $bg['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $wrap_sel, 'background-color', $bg['color'] );
	} elseif ( 'gradient' === $bg_type && ! empty( $bg['gradient'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $wrap_sel, 'background-image', $bg['gradient'] );
	}
}

// =====================================================================
// 3. LINK COLOR (Normal + Hover)
// =====================================================================
if ( ! empty( $attr['styles_link']['linkColor'] ) ) {
	$lc = $attr['styles_link']['linkColor'];
	if ( ! empty( $lc['Normal']['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $link_sel, 'color', $lc['Normal']['color'] );
	}
	if ( ! empty( $lc['Hover']['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $link_sel . ':hover', 'color', $lc['Hover']['color'] );
	}
}

// =====================================================================
// 4. BORDER & RADIUS (Wrap)
// =====================================================================
if ( ! empty( $attr['styles_border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $wrap_sel, $attr['styles_border'], true, true, true );
}

// =====================================================================
// 5. DIMENSIONS (Margin & Padding on Wrap)
// =====================================================================
if ( ! empty( $attr['styles_dimensions']['dimension'] ) ) {
	$dim = $attr['styles_dimensions']['dimension'];
	if ( ! empty( $dim['margin'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $dim['margin'] );
	}
	if ( ! empty( $dim['padding'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'padding', $dim['padding'] );
	}
}

// =====================================================================
// 6. HIGHLIGHT (<mark> tag)
// =====================================================================
if ( ! empty( $attr['styles_highlight'] ) ) {
	$hl = $attr['styles_highlight'];

	if ( ! empty( $hl['textColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $mark_sel, 'color', $hl['textColor'] );
	}
	if ( ! empty( $hl['bgColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $mark_sel, 'background-color', $hl['bgColor'] );
	}
	if ( ! empty( $hl['padding'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $mark_sel, 'padding', $hl['padding'] );
	}
	if ( ! empty( $hl['typography'] ) ) {
		WCB_Block_Helper::add_typography_css( $css, $mark_sel, $hl['typography'] );
	}
	if ( ! empty( $hl['border'] ) ) {
		WCB_Block_Helper::add_border_css( $css, $mark_sel, $hl['border'], true, true, true );
	}
}

// =====================================================================
// 7. SEPARATOR (.wcb-heading__separator & .wcb-heading__separator-wrap)
// =====================================================================
if ( ! empty( $attr['styles_separator'] ) ) {
	$sep = $attr['styles_separator'];

	// Responsive width.
	if ( ! empty( $sep['width'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $sep_sel, 'width', $sep['width'] );
	}

	// Border style.
	if ( ! empty( $sep['border'] ) && is_array( $sep['border'] ) ) {
		$w  = WCB_Block_Helper::get_css_value( $sep['border']['width'] ?? '1px' );
		$st = $sep['border']['style'] ?? 'solid';
		$c  = $sep['border']['color'] ?? '#d1d5db';
		if ( 'none' === $st ) {
			WCB_Block_Helper::add_responsive_css( $css, $sep_sel, 'border', 'none' );
		} else {
			WCB_Block_Helper::add_responsive_css( $css, $sep_sel, 'border', trim( $w . ' ' . $st . ' ' . $c ) );
		}
	}

	// Responsive margin-bottom on .wcb-heading__separator-wrap.
	if ( ! empty( $sep['marginBottom'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $sep_wrap_sel, 'margin-bottom', $sep['marginBottom'] );
	}
}

// =====================================================================
// 8. HEADING (.wcb-heading__heading)
// =====================================================================
if ( ! empty( $attr['styles_heading'] ) ) {
	$hd = $attr['styles_heading'];

	if ( ! empty( $hd['typography'] ) ) {
		WCB_Block_Helper::add_typography_css( $css, $h_sel, $hd['typography'] );
	}
	if ( ! empty( $hd['textColor'] ) ) {
		WCB_Block_Helper::add_color_gradient_css( $css, $h_sel, $hd['textColor'] );
	}
	if ( ! empty( $hd['textShadow'] ) ) {
		WCB_Block_Helper::add_text_shadow_css( $css, $h_sel, $hd['textShadow'] );
	}
	if ( ! empty( $hd['marginBottom'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $h_sel, 'margin-bottom', $hd['marginBottom'] );
	}
}

// =====================================================================
// 9. SUB-HEADING (.wcb-heading__subHeading)
// =====================================================================
if ( ! empty( $attr['styles_subHeading'] ) ) {
	$shd = $attr['styles_subHeading'];

	if ( ! empty( $shd['typography'] ) ) {
		WCB_Block_Helper::add_typography_css( $css, $sh_sel, $shd['typography'] );
	}
	if ( ! empty( $shd['textColor'] ) ) {
		WCB_Block_Helper::add_color_gradient_css( $css, $sh_sel, $shd['textColor'] );
	}
	if ( ! empty( $shd['marginBottom'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $sh_sel, 'margin-bottom', $shd['marginBottom'] );
	}
}

// =====================================================================
// 10. ADVANCE (responsive condition + z-index + motion effect)
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
