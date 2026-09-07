<?php
/**
 * Frontend CSS for Call to Action Block.
 *
 * Mirrors src/block-cta/GlobalCss.tsx so every style rendered by the
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

$selectors   = array();
$t_selectors = array();
$m_selectors = array();

$wrap_sel    = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$inner_sel   = $wrap_sel . ' .wcb-cta__inner';
$content_sel = $wrap_sel . ' .wcb-cta__content';
$title_sel   = $wrap_sel . ' .wcb-cta__title';
$desc_sel    = $wrap_sel . ' .wcb-cta__description';

// ---------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------

/**
 * Apply responsive property across desktop, tablet, and mobile buckets (Desktop-first).
 */
$apply_responsive_prop = function ( $sel, $prop, $value, $unit = 'px' ) use ( &$selectors, &$t_selectors, &$m_selectors ) {
	if ( empty( $value ) && '0' !== (string) $value ) {
		return;
	}

	if ( 'line-height' === $prop || 'z-index' === $prop || 'opacity' === $prop ) {
		$unit = '';
	}

	$d = is_array( $value ) ? ( $value['Desktop'] ?? '' ) : $value;
	$t = is_array( $value ) ? ( $value['Tablet'] ?? $d ) : $value;
	$m = is_array( $value ) ? ( $value['Mobile'] ?? $t ) : $value;

	if ( '' !== $d && null !== $d ) {
		$selectors[ $sel ][ $prop ] = WCB_Block_Helper::get_css_value( $d, $unit );
	}
	if ( '' !== $t && null !== $t && $t !== $d ) {
		$t_selectors[ $sel ][ $prop ] = WCB_Block_Helper::get_css_value( $t, $unit );
	}
	if ( '' !== $m && null !== $m && $m !== $t ) {
		$m_selectors[ $sel ][ $prop ] = WCB_Block_Helper::get_css_value( $m, $unit );
	}
};

/**
 * Apply responsive 4-side padding/margin dimension.
 */
$apply_dimension_box = function ( $sel, $type, $dim_data ) use ( &$selectors, &$t_selectors, &$m_selectors ) {
	if ( empty( $dim_data ) ) {
		return;
	}

	$normalize_sides = function ( $val ) {
		if ( empty( $val ) && '0' !== (string) $val ) {
			return array(
				'top'    => '',
				'right'  => '',
				'bottom' => '',
				'left'   => '',
			);
		}
		if ( is_string( $val ) || is_numeric( $val ) ) {
			return array(
				'top'    => $val,
				'right'  => $val,
				'bottom' => $val,
				'left'   => $val,
			);
		}
		if ( is_array( $val ) ) {
			return array(
				'top'    => $val['top'] ?? '',
				'right'  => $val['right'] ?? '',
				'bottom' => $val['bottom'] ?? '',
				'left'   => $val['left'] ?? '',
			);
		}
		return array(
			'top'    => '',
			'right'  => '',
			'bottom' => '',
			'left'   => '',
		);
	};

	$d_raw = is_array( $dim_data ) ? ( $dim_data['Desktop'] ?? ( isset( $dim_data['top'] ) ? $dim_data : '' ) ) : $dim_data;
	$t_raw = is_array( $dim_data ) ? ( $dim_data['Tablet'] ?? $d_raw ) : $dim_data;
	$m_raw = is_array( $dim_data ) ? ( $dim_data['Mobile'] ?? $t_raw ) : $dim_data;

	$d = $normalize_sides( $d_raw );
	$t = $normalize_sides( $t_raw );
	$m = $normalize_sides( $m_raw );

	foreach ( array( 'top', 'right', 'bottom', 'left' ) as $side ) {
		$prop = $type . '-' . $side;

		$d_val = $d[ $side ];
		$t_val = $t[ $side ];
		$m_val = $m[ $side ];

		if ( '' !== $d_val && null !== $d_val ) {
			$selectors[ $sel ][ $prop ] = WCB_Block_Helper::get_css_value( $d_val );
		}
		if ( '' !== $t_val && null !== $t_val && $t_val !== $d_val ) {
			$t_selectors[ $sel ][ $prop ] = WCB_Block_Helper::get_css_value( $t_val );
		}
		if ( '' !== $m_val && null !== $m_val && $m_val !== $t_val ) {
			$m_selectors[ $sel ][ $prop ] = WCB_Block_Helper::get_css_value( $m_val );
		}
	}
};

/**
 * Apply typography (font-family, appearance, text-transform, text-decoration,
 * responsive font-size, line-height, letter-spacing).
 */
$apply_typography = function ( $sel, $typo ) use ( &$selectors, &$t_selectors, &$m_selectors, $apply_responsive_prop ) {
	if ( empty( $typo ) || ! is_array( $typo ) ) {
		return;
	}

	if ( ! empty( $typo['fontFamily'] ) ) {
		$selectors[ $sel ]['font-family'] = $typo['fontFamily'];
	}

	if ( ! empty( $typo['appearance']['style'] ) && is_array( $typo['appearance']['style'] ) ) {
		$s = $typo['appearance']['style'];
		if ( ! empty( $s['fontWeight'] ) ) {
			$selectors[ $sel ]['font-weight'] = $s['fontWeight'];
		}
		if ( ! empty( $s['fontStyle'] ) ) {
			$selectors[ $sel ]['font-style'] = $s['fontStyle'];
		}
	}

	if ( ! empty( $typo['textDecoration'] ) && 'undefined' !== $typo['textDecoration'] ) {
		$selectors[ $sel ]['text-decoration'] = $typo['textDecoration'];
	}

	if ( ! empty( $typo['textTransform'] ) && 'undefined' !== $typo['textTransform'] ) {
		$selectors[ $sel ]['text-transform'] = $typo['textTransform'];
	}

	if ( ! empty( $typo['fontSizes'] ) ) {
		$apply_responsive_prop( $sel, 'font-size', $typo['fontSizes'] );
	}
	if ( ! empty( $typo['lineHeight'] ) ) {
		$apply_responsive_prop( $sel, 'line-height', $typo['lineHeight'] );
	}
	if ( ! empty( $typo['letterSpacing'] ) ) {
		$apply_responsive_prop( $sel, 'letter-spacing', $typo['letterSpacing'] );
	}
};

// =====================================================================
// 1. GENERAL LAYOUT & INNER CONTAINER
// =====================================================================
$gl  = $attr['general_layout'] ?? array();
$sdm = $attr['style_dimension'] ?? array();

// Text alignment on inner.
if ( ! empty( $gl['textAlignment'] ) ) {
	$apply_responsive_prop( $inner_sel, 'text-align', $gl['textAlignment'] );
}

// Flex direction on inner.
if ( ! empty( $gl['flexDirection'] ) ) {
	$apply_responsive_prop( $inner_sel, 'flex-direction', $gl['flexDirection'] );
}

// Compute ALIGN_ITEMS (mirrors GlobalCss.tsx lines 56-94).
$text_align_raw = $gl['textAlignment'] ?? array();
$ta_d           = is_array( $text_align_raw ) ? ( $text_align_raw['Desktop'] ?? 'left' ) : ( $text_align_raw ?: 'left' );
$ta_t           = is_array( $text_align_raw ) ? ( $text_align_raw['Tablet'] ?? $ta_d ) : $ta_d;
$ta_m           = is_array( $text_align_raw ) ? ( $text_align_raw['Mobile'] ?? $ta_t ) : $ta_t;

$flex_dir_raw = $gl['flexDirection'] ?? array();
$fd_d         = is_array( $flex_dir_raw ) ? ( $flex_dir_raw['Desktop'] ?? 'row' ) : ( $flex_dir_raw ?: 'row' );
$fd_t         = is_array( $flex_dir_raw ) ? ( $flex_dir_raw['Tablet'] ?? $fd_d ) : $fd_d;
$fd_m         = is_array( $flex_dir_raw ) ? ( $flex_dir_raw['Mobile'] ?? $fd_t ) : $fd_t;

$calc_align_item = function ( $ta, $fd ) {
	if ( 'row' === $fd || 'row-reverse' === $fd ) {
		return 'center';
	}
	if ( 'left' === $ta ) {
		return 'start';
	}
	if ( 'right' === $ta ) {
		return 'end';
	}
	return 'center';
};

$align_d = $calc_align_item( $ta_d, $fd_d );
$align_t = $calc_align_item( $ta_t, $fd_t );
$align_m = $calc_align_item( $ta_m, $fd_m );

if ( ! empty( $align_d ) ) {
	$selectors[ $inner_sel ]['align-items'] = $align_d;
}
if ( ! empty( $align_t ) && $align_t !== $align_d ) {
	$t_selectors[ $inner_sel ]['align-items'] = $align_t;
}
if ( ! empty( $align_m ) && $align_m !== $align_t ) {
	$m_selectors[ $inner_sel ]['align-items'] = $align_m;
}

// Gap between content and buttons.
if ( ! empty( $sdm['gap'] ) ) {
	$apply_responsive_prop( $inner_sel, 'gap', $sdm['gap'] );
}

// Inner padding & margin.
if ( ! empty( $sdm['padding'] ) ) {
	$apply_dimension_box( $inner_sel, 'padding', $sdm['padding'] );
}
if ( ! empty( $sdm['margin'] ) ) {
	$apply_dimension_box( $inner_sel, 'margin', $sdm['margin'] );
}

// Content Width.
if ( ! empty( $gl['contentWidth'] ) ) {
	$apply_responsive_prop( $content_sel, 'width', $gl['contentWidth'] );
}

// =====================================================================
// 2. TITLE
// =====================================================================
$st = $attr['style_title'] ?? array();

if ( ! empty( $st['typography'] ) ) {
	$apply_typography( $title_sel, $st['typography'] );
}
if ( ! empty( $st['marginBottom'] ) ) {
	$apply_responsive_prop( $title_sel, 'margin-bottom', $st['marginBottom'] );
}
if ( ! empty( $st['textColor'] ) ) {
	$selectors[ $title_sel ]['color'] = $st['textColor'];
}

// =====================================================================
// 3. DESCRIPTION
// =====================================================================
$sd = $attr['style_description'] ?? array();

if ( ! empty( $sd['typography'] ) ) {
	$apply_typography( $desc_sel, $sd['typography'] );
}
if ( ! empty( $sd['marginBottom'] ) ) {
	$apply_responsive_prop( $desc_sel, 'margin-bottom', $sd['marginBottom'] );
}
if ( ! empty( $sd['textColor'] ) ) {
	$selectors[ $desc_sel ]['color'] = $sd['textColor'];
}

// =====================================================================
// 4. ADVANCE (responsive condition + z-index)
// =====================================================================
$selectors = array_merge( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

// ---------------------------------------------------------------------

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

