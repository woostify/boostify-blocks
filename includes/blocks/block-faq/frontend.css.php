<?php
/**
 * Frontend CSS for FAQ Block.
 *
 * Mirrors src/block-faq/GlobalCss.tsx so every style rendered by the
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

$wrap_sel          = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$inner_sel         = $wrap_sel . ' .wcb-faq__inner';
$faq_child_wrap    = $wrap_sel . ' .wcb-faq-child__wrap';
$faq_question      = $wrap_sel . ' .wcb-faq-child__question';
$faq_question_text = $wrap_sel . ' .wcb-faq-child__question-text';
$faq_answer        = $wrap_sel . ' .wcb-faq-child__answer';
$faq_answer_text   = $wrap_sel . ' .wcb-faq-child__answer-text';
$faq_icon          = $wrap_sel . ' .wcb-faq-child__icon';
$faq_separator     = $wrap_sel . ' .wcb-faq-child__separator';

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

	if ( 'line-height' === $prop || 'z-index' === $prop || 'opacity' === $prop || 'text-align' === $prop ) {
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
	if ( empty( $dim_data ) || ! is_array( $dim_data ) ) {
		return;
	}

	$sides = array( 'top', 'right', 'bottom', 'left' );
	foreach ( $sides as $side ) {
		$prop = $type . '-' . $side;

		$d = isset( $dim_data['Desktop'][ $side ] ) ? $dim_data['Desktop'][ $side ] : ( $dim_data[ $side ] ?? '' );
		$t = isset( $dim_data['Tablet'][ $side ] ) ? $dim_data['Tablet'][ $side ] : ( $dim_data[ $side ] ?? $d );
		$m = isset( $dim_data['Mobile'][ $side ] ) ? $dim_data['Mobile'][ $side ] : ( $dim_data[ $side ] ?? $t );

		if ( '' !== $d && null !== $d ) {
			$selectors[ $sel ][ $prop ] = WCB_Block_Helper::get_css_value( $d );
		}
		if ( '' !== $t && null !== $t && $t !== $d ) {
			$t_selectors[ $sel ][ $prop ] = WCB_Block_Helper::get_css_value( $t );
		}
		if ( '' !== $m && null !== $m && $m !== $t ) {
			$m_selectors[ $sel ][ $prop ] = WCB_Block_Helper::get_css_value( $m );
		}
	}
};

/**
 * Apply typography.
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

/**
 * Apply border and border-radius.
 */
$apply_border_styles = function ( $sel, $border_data ) use ( &$selectors, &$t_selectors, &$m_selectors ) {
	if ( empty( $border_data ) || ! is_array( $border_data ) ) {
		return;
	}

	$main = $border_data['mainSettings'] ?? null;
	if ( empty( $main ) && ( isset( $border_data['width'] ) || isset( $border_data['style'] ) || isset( $border_data['color'] ) || isset( $border_data['top'] ) || isset( $border_data['right'] ) || isset( $border_data['bottom'] ) || isset( $border_data['left'] ) ) ) {
		$main = $border_data;
	}

	if ( ! empty( $main ) && is_array( $main ) ) {
		$is_4side = isset( $main['top'] ) || isset( $main['right'] ) || isset( $main['bottom'] ) || isset( $main['left'] );

		if ( $is_4side ) {
			foreach ( array( 'top', 'right', 'bottom', 'left' ) as $side ) {
				if ( ! empty( $main[ $side ] ) && is_array( $main[ $side ] ) ) {
					$s  = $main[ $side ];
					$w  = WCB_Block_Helper::get_css_value( $s['width'] ?? '1px' );
					$st = $s['style'] ?? '';
					$c  = $s['color'] ?? '';
					if ( 'none' === $st ) {
						$selectors[ $sel ][ 'border-' . $side ] = 'none';
					} elseif ( '' !== $c || ( '' !== $st && 'none' !== $st ) || ! empty( $s['width'] ) ) {
						if ( empty( $st ) ) {
							$st = 'solid';
						}
						$selectors[ $sel ][ 'border-' . $side ] = trim( $w . ' ' . $st . ' ' . $c );
					}
				}
			}
		} else {
			$w  = WCB_Block_Helper::get_css_value( $main['width'] ?? '1px' );
			$st = $main['style'] ?? '';
			$c  = $main['color'] ?? '';
			if ( 'none' === $st ) {
				$selectors[ $sel ]['border'] = 'none';
			} elseif ( '' !== $c || ( '' !== $st && 'none' !== $st ) || ! empty( $main['width'] ) ) {
				if ( empty( $st ) ) {
					$st = 'solid';
				}
				$selectors[ $sel ]['border'] = trim( $w . ' ' . $st . ' ' . $c );
			}
		}
	}

	if ( ! empty( $border_data['hoverColor'] ) ) {
		$selectors[ $sel . ':hover' ]['border-color'] = $border_data['hoverColor'];
	}

	// Border Radius.
	$radius = $border_data['radius'] ?? null;
	if ( ! empty( $radius ) ) {
		$normalize_corners = function ( $val ) {
			if ( is_string( $val ) ) {
				return array(
					'topLeft'     => $val,
					'topRight'    => $val,
					'bottomRight' => $val,
					'bottomLeft'  => $val,
				);
			}
			if ( is_array( $val ) ) {
				return array(
					'topLeft'     => $val['topLeft'] ?? '',
					'topRight'    => $val['topRight'] ?? '',
					'bottomRight' => $val['bottomRight'] ?? '',
					'bottomLeft'  => $val['bottomLeft'] ?? '',
				);
			}
			return array( 'topLeft' => '', 'topRight' => '', 'bottomRight' => '', 'bottomLeft' => '' );
		};

		$d_rad = is_array( $radius ) ? ( $radius['Desktop'] ?? '' ) : $radius;
		$t_rad = is_array( $radius ) ? ( $radius['Tablet'] ?? $d_rad ) : $radius;
		$m_rad = is_array( $radius ) ? ( $radius['Mobile'] ?? $t_rad ) : $radius;

		$d_c = $normalize_corners( $d_rad );
		$t_c = $normalize_corners( $t_rad );
		$m_c = $normalize_corners( $m_rad );

		$corner_props = array(
			'topLeft'     => 'border-top-left-radius',
			'topRight'    => 'border-top-right-radius',
			'bottomRight' => 'border-bottom-right-radius',
			'bottomLeft'  => 'border-bottom-left-radius',
		);

		foreach ( $corner_props as $ckey => $css_prop ) {
			$d_v = $d_c[ $ckey ];
			$t_v = $t_c[ $ckey ];
			$m_v = $m_c[ $ckey ];

			if ( '' !== $d_v && null !== $d_v && '0' !== (string) $d_v ) {
				$selectors[ $sel ][ $css_prop ] = WCB_Block_Helper::get_css_value( $d_v );
			}
			if ( '' !== $t_v && null !== $t_v && $t_v !== $d_v ) {
				$t_selectors[ $sel ][ $css_prop ] = WCB_Block_Helper::get_css_value( $t_v );
			}
			if ( '' !== $m_v && null !== $m_v && $m_v !== $t_v ) {
				$m_selectors[ $sel ][ $css_prop ] = WCB_Block_Helper::get_css_value( $m_v );
			}
		}
	}
};

// =====================================================================
// 1. WRAP (padding & margin)
// =====================================================================
$sdm = $attr['style_dimension'] ?? array();
if ( ! empty( $sdm['margin'] ) ) {
	$apply_dimension_box( $wrap_sel, 'margin', $sdm['margin'] );
}
if ( ! empty( $sdm['padding'] ) ) {
	$apply_dimension_box( $wrap_sel, 'padding', $sdm['padding'] );
}

// =====================================================================
// 2. INNER (.wcb-faq__inner)
// =====================================================================
$sc = $attr['style_container'] ?? array();
$gg = $attr['general_general'] ?? array();

if ( ! empty( $sc['colunmGap'] ) ) {
	$apply_responsive_prop( $inner_sel, 'column-gap', $sc['colunmGap'] );
}
if ( ! empty( $sc['rowGap'] ) ) {
	$apply_responsive_prop( $inner_sel, 'row-gap', $sc['rowGap'] );
}
if ( ! empty( $gg['textAlignment'] ) ) {
	$selectors[ $inner_sel ]['text-align'] = $gg['textAlignment'];
}

// Grid layout
if ( ( $gg['layout'] ?? 'accordion' ) === 'grid' ) {
	$cols = $gg['columns'] ?? array();
	$d_col = is_array( $cols ) ? ( $cols['Desktop'] ?? 2 ) : ( $cols ?: 2 );
	$t_col = is_array( $cols ) ? ( $cols['Tablet'] ?? $d_col ) : $d_col;
	$m_col = is_array( $cols ) ? ( $cols['Mobile'] ?? 1 ) : 1;

	$selectors[ $inner_sel ]['grid-template-columns']   = 'repeat(' . $d_col . ', minmax(0, 1fr))';
	$t_selectors[ $inner_sel ]['grid-template-columns'] = 'repeat(' . $t_col . ', minmax(0, 1fr))';
	$m_selectors[ $inner_sel ]['grid-template-columns'] = 'repeat(' . $m_col . ', minmax(0, 1fr))';

	$selectors[ $faq_question ]['display'] = 'block';

	if ( empty( $sc['equalHeight'] ) ) {
		$selectors[ $faq_child_wrap ]['height'] = 'fit-content';
	}
}

// =====================================================================
// 3. FAQ CHILD WRAP (.wcb-faq-child__wrap)
// =====================================================================
if ( ! empty( $sc['background'] ) ) {
	$bg = $sc['background'];
	$bg_type = $bg['bgType'] ?? 'color';
	if ( 'color' === $bg_type && ! empty( $bg['color'] ) ) {
		$selectors[ $faq_child_wrap ]['background-color'] = $bg['color'];
	} elseif ( 'gradient' === $bg_type && ! empty( $bg['gradient'] ) ) {
		$selectors[ $faq_child_wrap ]['background-image'] = $bg['gradient'];
	}
}

if ( ! empty( $sc['border'] ) ) {
	$apply_border_styles( $faq_child_wrap, $sc['border'] );
	$apply_border_styles( $faq_separator, $sc['border'] );
}

// =====================================================================
// 4. QUESTION (.wcb-faq-child__question)
// =====================================================================
$sq = $attr['style_question'] ?? array();
if ( ! empty( $sq['typography'] ) ) {
	$apply_typography( $faq_question, $sq['typography'] );
}
if ( ! empty( $sq['padding'] ) ) {
	$apply_dimension_box( $faq_question, 'padding', $sq['padding'] );
}

$si = $attr['style_icon'] ?? array();
if ( ! empty( $si['colGap'] ) ) {
	$apply_responsive_prop( $faq_question, 'gap', $si['colGap'] );
}

if ( ! empty( $sq['color'] ) ) {
	$selectors[ $faq_question ]['color'] = $sq['color'];
}
if ( ! empty( $sq['backgroundColor'] ) ) {
	$selectors[ $faq_question ]['background-color'] = $sq['backgroundColor'];
}
if ( ! empty( $sq['colorHover'] ) ) {
	$selectors[ $faq_question . ':hover' ]['color'] = $sq['colorHover'];
	$selectors[ $wrap_sel . ' .wcb-faq-child__wrap.is-open .wcb-faq-child__question' ]['color'] = $sq['colorHover'];
}
if ( ! empty( $sq['backgroundColorHover'] ) ) {
	$selectors[ $faq_question . ':hover' ]['background-color'] = $sq['backgroundColorHover'];
	$selectors[ $wrap_sel . ' .wcb-faq-child__wrap.is-open .wcb-faq-child__question' ]['background-color'] = $sq['backgroundColorHover'];
}

// =====================================================================
// 5. ICON (.wcb-faq-child__icon)
// =====================================================================
if ( ! empty( $si['size'] ) ) {
	$apply_responsive_prop( $faq_icon, 'font-size', $si['size'] );
	$apply_responsive_prop( $faq_icon, 'height', $si['size'] );
	$apply_responsive_prop( $faq_icon, 'width', $si['size'] );
}
if ( ! empty( $si['color'] ) ) {
	$selectors[ $faq_icon ]['color'] = $si['color'];
}
if ( ! empty( $si['activeColor'] ) ) {
	$selectors[ $wrap_sel . ' .wcb-faq-child__wrap.is-open .wcb-faq-child__icon' ]['color'] = $si['activeColor'];
}

// =====================================================================
// 6. ANSWER (.wcb-faq-child__answer)
// =====================================================================
$sa = $attr['style_answer'] ?? array();
if ( ! empty( $sa['typography'] ) ) {
	$apply_typography( $faq_answer, $sa['typography'] );
}
if ( ! empty( $sa['padding'] ) ) {
	$apply_dimension_box( $faq_answer, 'padding', $sa['padding'] );
}
if ( ! empty( $sa['color'] ) ) {
	$selectors[ $faq_answer ]['color'] = $sa['color'];
}
if ( ! empty( $sa['backgroundColor'] ) ) {
	$selectors[ $faq_answer ]['background-color'] = $sa['backgroundColor'];
}

// =====================================================================
// 7. ADVANCE (responsive condition + motion effect + z-index)
// =====================================================================
$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

// ---------------------------------------------------------------------
$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

