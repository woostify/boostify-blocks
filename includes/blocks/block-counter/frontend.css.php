<?php
/**
 * Frontend CSS for Counter Block.
 *
 * Mirrors src/block-counter/GlobalCss.tsx so every style rendered by the
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

$wrap_sel                 = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$icon_wrap_sel            = $wrap_sel . ' .wcb-icon-box__icon-wrap';
$icon_sel                 = $wrap_sel . ' .wcb-icon-box__icon';
$icon_full_sel            = $wrap_sel . ' .wcb-icon-full';
$content_sel              = $wrap_sel . ' .wcb-icon-box__content';
$title_wrap_sel           = $wrap_sel . ' .wcb-icon-box__content-title-wrap';
$content_title_sel        = $wrap_sel . ' .wcb-icon-box__content-title';
$designation_sel          = $wrap_sel . ' .wcb-icon-box__designation';
$number_sel               = $wrap_sel . ' .wcb-icon-box__number';
$desc_sel                 = $wrap_sel . ' .wcb-icon-box__description';
$circle_wrap_sel          = $wrap_sel . ' .wcb-icon-box__progress-circle-wrap';
$circle_svg_sel           = $wrap_sel . ' .wcb-icon-box__progress-circle-svg';
$circle_sel               = $wrap_sel . ' .wcb-icon-box__progress-circle';
$circle_content_sel       = $wrap_sel . ' .wcb-icon-box__progress-circle-content';
$circle_content_inner_sel = $wrap_sel . ' .wcb-icon-box__progress-circle-content-inner';
$circle_content_row_sel   = $wrap_sel . ' .wcb-icon-box__progress-circle-content-row';
$bar_wrap_sel             = $wrap_sel . ' .wcb-icon-box__progress-bar-wrap';
$bar_track_sel            = $wrap_sel . ' .wcb-icon-box__progress-bar-track';
$bar_sel                  = $wrap_sel . ' .wcb-icon-box__progress-bar';
$title_class_sel          = $wrap_sel . ' .wcb-icon-box__title';

// =====================================================================
// 1. WRAP DIV & LAYOUT (mirrors GlobalCss.tsx getDivWrapStyles)
// =====================================================================
$gl  = $attr['general_layout'] ?? array();
$gi  = $attr['general_icon'] ?? array();
$sdm = $attr['style_dimension'] ?? array();

$layout_type = $gl['type'] ?? 'number';
$icon_pos    = $gi['iconPosition'] ?? 'top';
$stack_on    = $gi['stackOn'] ?? 'none';
$vert_align  = $gi['verticalAlignment'] ?? 'top';

$is_icon_beside_content = ( 'left' === $icon_pos || 'right' === $icon_pos );
$is_icon_beside_title   = ( 'leftOfTitle' === $icon_pos || 'rightOfTitle' === $icon_pos );

// Text Alignment on wrap.
if ( ! empty( $gl['textAlignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $wrap_sel, 'text-align', $gl['textAlignment'] );
}

// Horizontal justify alignment for number layout.
$ta   = $gl['textAlignment'] ?? array();
$ta_d = is_array( $ta ) ? ( $ta['Desktop'] ?? 'center' ) : ( $ta ?: 'center' );
$ta_t = is_array( $ta ) ? ( $ta['Tablet'] ?? $ta_d ) : $ta_d;
$ta_m = is_array( $ta ) ? ( $ta['Mobile'] ?? $ta_t ) : $ta_t;

$jf_d = WCB_Block_Helper::get_flex_align( $ta_d );
$jf_t = WCB_Block_Helper::get_flex_align( $ta_t );
$jf_m = WCB_Block_Helper::get_flex_align( $ta_m );

if ( 'number' === $layout_type && $is_icon_beside_content ) {
	WCB_Block_Helper::add_responsive_css(
		$css,
		$wrap_sel,
		'justify-content',
		array(
			'Desktop' => $jf_d,
			'Tablet'  => $jf_t,
			'Mobile'  => $jf_m,
		)
	);
	$css['desktop'][ $content_sel ]['flex-grow'] = '0';
}

if ( 'number' === $layout_type && $is_icon_beside_title ) {
	WCB_Block_Helper::add_responsive_css(
		$css,
		$title_wrap_sel,
		'justify-content',
		array(
			'Desktop' => $jf_d,
			'Tablet'  => $jf_t,
			'Mobile'  => $jf_m,
		)
	);
	$css['desktop'][ $content_title_sel ]['flex-grow'] = '0';
}

// Display & Flex Direction on wrap.
if ( $is_icon_beside_content ) {
	$css['desktop'][ $wrap_sel ]['display']        = 'flex';
	$css['desktop'][ $wrap_sel ]['flex-direction'] = 'row';

	$stack_col = ( 'right' === $icon_pos ) ? 'column-reverse' : 'column';

	if ( 'tablet' === $stack_on ) {
		$css['tablet'][ $wrap_sel ]['flex-direction'] = $stack_col;
		$css['mobile'][ $wrap_sel ]['flex-direction'] = $stack_col;
	} elseif ( 'mobile' === $stack_on ) {
		$css['mobile'][ $wrap_sel ]['flex-direction'] = $stack_col;
	}
} else {
	$css['desktop'][ $wrap_sel ]['display'] = 'block';
}

// Vertical alignment.
if ( 'middle' === $vert_align ) {
	$css['desktop'][ $icon_wrap_sel . ', ' . $content_sel ]['align-self'] = 'center';
}

// Title wrap display.
$css['desktop'][ $title_wrap_sel ]['display'] = $is_icon_beside_title ? 'flex' : 'block';

// Dynamic circle content flex direction when icon is beside content
if ( $is_icon_beside_content ) {
	$css['desktop'][ $circle_content_sel ]['flex-direction'] = 'row';
}

// Margin and padding on wrap.
if ( ! empty( $sdm['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $sdm['margin'] );
}
if ( ! empty( $sdm['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'padding', $sdm['padding'] );
}

// =====================================================================
// 2. CIRCLE (mirrors GlobalCss.tsx lines 235-246)
// =====================================================================
if ( 'circle' === $layout_type ) {
	$sc = $attr['style_circle'] ?? array();
	if ( ! empty( $sc['circleSize'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $circle_wrap_sel, 'width', $sc['circleSize'] );
		WCB_Block_Helper::add_responsive_css( $css, $circle_wrap_sel, 'height', $sc['circleSize'] );
	}
}

// =====================================================================
// 3. PROGRESS COLOR (style_progress)
// =====================================================================
$sp = $attr['style_progress'] ?? array();
if ( ! empty( $sp['progressColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $circle_sel, 'stroke', $sp['progressColor'] );
	WCB_Block_Helper::add_responsive_css( $css, $bar_sel, 'background-color', $sp['progressColor'] );
}

// =====================================================================
// 4. ICON (mirrors GlobalCss.tsx lines 249-281)
// =====================================================================
$enable_icon = $gi['enableIcon'] ?? true;
if ( $enable_icon ) {
	$si = $attr['style_Icon'] ?? array();

	if ( ! empty( $si['dimensions']['margin'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $icon_wrap_sel, 'margin', $si['dimensions']['margin'] );
	}
	if ( ! empty( $si['dimensions']['padding'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $icon_wrap_sel, 'padding', $si['dimensions']['padding'] );
	}
	if ( ! empty( $si['border'] ) ) {
		WCB_Block_Helper::add_border_css( $css, $icon_sel, $si['border'], true, true );
	}
	if ( ! empty( $si['iconSize'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel, 'width', $si['iconSize'] );
		WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel, 'font-size', $si['iconSize'] );
	}
	if ( ! empty( $si['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel, 'color', $si['color'] );
	}
	if ( ! empty( $si['hoverColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $icon_full_sel . ':hover', 'color', $si['hoverColor'] );
	}
}

// =====================================================================
// 5. DESIGNATION / PREFIX (mirrors GlobalCss.tsx lines 284-303)
// =====================================================================
$enable_prefix = $gl['enablePrefix'] ?? false;
if ( $enable_prefix ) {
	$sd = $attr['style_desination'] ?? array();

	if ( ! empty( $sd['typography'] ) ) {
		WCB_Block_Helper::add_typography_css( $css, $designation_sel, $sd['typography'] );
	}
	if ( ! empty( $sd['marginBottom'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $designation_sel, 'margin-bottom', $sd['marginBottom'] );
	}
	if ( ! empty( $sd['textColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $designation_sel, 'color', $sd['textColor'] );
	}
}

// =====================================================================
// 6. NUMBER / TITLE (mirrors GlobalCss.tsx lines 306-325)
// =====================================================================
$enable_title = $gl['enableTitle'] ?? true;
if ( $enable_title ) {
	$st = $attr['style_title'] ?? array();

	if ( ! empty( $st['typography'] ) ) {
		WCB_Block_Helper::add_typography_css( $css, $number_sel, $st['typography'] );
	}
	if ( ! empty( $st['marginBottom'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $number_sel, 'margin-bottom', $st['marginBottom'] );
	}
	if ( ! empty( $st['textColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $number_sel, 'color', $st['textColor'] );
	}
}

// =====================================================================
// 7. DESCRIPTION (mirrors GlobalCss.tsx lines 328-347)
// =====================================================================
$enable_desc = $gl['enableDescription'] ?? true;
if ( $enable_desc ) {
	$sds = $attr['style_description'] ?? array();

	if ( ! empty( $sds['typography'] ) ) {
		WCB_Block_Helper::add_typography_css( $css, $desc_sel, $sds['typography'] );
	}
	if ( ! empty( $sds['marginBottom'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $desc_sel, 'margin-bottom', $sds['marginBottom'] );
	}
	if ( ! empty( $sds['textColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $desc_sel, 'color', $sds['textColor'] );
	}
}

// =====================================================================
// 8. ADVANCE (responsive condition + motion effect + z-index)
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
