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

$selectors   = array();
$t_selectors = array();
$m_selectors = array();

// Wrap selector — identical to WRAP_CLASSNAME in GlobalCss.tsx.
$wrap_sel     = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$h_sel        = $wrap_sel . ' .wcb-heading__heading';
$sh_sel       = $wrap_sel . ' .wcb-heading__subHeading';
$sep_sel      = $wrap_sel . ' .wcb-heading__separator';
$sep_wrap_sel = $wrap_sel . ' .wcb-heading__separator-wrap';
$mark_sel     = $wrap_sel . ' mark';
$link_sel     = $wrap_sel . ' a';

// ---------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------

/**
 * Apply responsive property across desktop, tablet, and mobile buckets.
 */
$apply_responsive_prop = function ( $sel, $prop, $value ) use ( &$selectors, &$t_selectors, &$m_selectors ) {
	if ( empty( $value ) && '0' !== (string) $value ) {
		return;
	}

	$d = is_array( $value ) ? ( $value['Desktop'] ?? '' ) : $value;
	$t = is_array( $value ) ? ( $value['Tablet'] ?? $d ) : $value;
	$m = is_array( $value ) ? ( $value['Mobile'] ?? $t ) : $value;

	if ( '' !== $d && null !== $d ) {
		$selectors[ $sel ][ $prop ] = WCB_Block_Helper::get_css_value( $d );
	}
	if ( '' !== $t && null !== $t && $t !== $d ) {
		$t_selectors[ $sel ][ $prop ] = WCB_Block_Helper::get_css_value( $t );
	}
	if ( '' !== $m && null !== $m && $m !== $t ) {
		$m_selectors[ $sel ][ $prop ] = WCB_Block_Helper::get_css_value( $m );
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

/**
 * Apply color or gradient styles (mirrors getColorAndGradientStyles).
 */
$apply_color_gradient = function ( $sel, $text_color ) use ( &$selectors ) {
	if ( empty( $text_color ) ) {
		return;
	}

	if ( is_array( $text_color ) ) {
		$color_type = $text_color['colorType'] ?? 'color';
		if ( 'gradient' === $color_type && ! empty( $text_color['gradient'] ) ) {
			$selectors[ $sel ]['color']                   = 'transparent';
			$selectors[ $sel ]['background-image']         = $text_color['gradient'];
			$selectors[ $sel ]['-webkit-background-clip'] = 'text';
			$selectors[ $sel ]['-webkit-text-fill-color'] = 'transparent';
			$selectors[ $sel ]['background-clip']         = 'text';
		} elseif ( ! empty( $text_color['color'] ) ) {
			$selectors[ $sel ]['color'] = $text_color['color'];
		}
	} elseif ( is_string( $text_color ) && '' !== $text_color ) {
		$selectors[ $sel ]['color'] = $text_color;
	}
};

/**
 * Apply responsive 4-side padding/margin dimension.
 */
$apply_dimension_box = function ( $sel, $type, $dim_data ) use ( &$selectors, &$t_selectors, &$m_selectors ) {
	if ( empty( $dim_data ) || ! is_array( $dim_data ) ) {
		return;
	}

	$d = $dim_data['Desktop'] ?? array();
	$t = $dim_data['Tablet'] ?? $d;
	$m = $dim_data['Mobile'] ?? $t;

	foreach ( array( 'top', 'right', 'bottom', 'left' ) as $side ) {
		$prop = $type . '-' . $side;

		$d_val = $d[ $side ] ?? '';
		$t_val = $t[ $side ] ?? $d_val;
		$m_val = $m[ $side ] ?? $t_val;

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
 * Apply border and responsive border radius (mirrors getBorderStyles).
 */
$apply_border_styles = function ( $sel, $border_data ) use ( &$selectors, &$t_selectors, &$m_selectors ) {
	if ( empty( $border_data ) || ! is_array( $border_data ) ) {
		return;
	}

	$main = $border_data['mainSettings'] ?? null;
	if ( ! empty( $main ) && is_array( $main ) ) {
		$is_4side = isset( $main['top'] ) || isset( $main['right'] ) || isset( $main['bottom'] ) || isset( $main['left'] );
		if ( $is_4side ) {
			foreach ( array( 'top', 'right', 'bottom', 'left' ) as $side ) {
				if ( ! empty( $main[ $side ] ) && is_array( $main[ $side ] ) ) {
					$s  = $main[ $side ];
					$w  = $s['width'] ?? '1px';
					$st = $s['style'] ?? 'none';
					$c  = $s['color'] ?? '';
					if ( '' !== $c ) {
						$selectors[ $sel ][ 'border-' . $side ] = $w . ' ' . $st . ' ' . $c;
					}
				}
			}
		} else {
			$w  = $main['width'] ?? '1px';
			$st = $main['style'] ?? 'none';
			$c  = $main['color'] ?? '';
			if ( '' !== $c ) {
				$selectors[ $sel ]['border'] = $w . ' ' . $st . ' ' . $c;
			}
		}

		if ( ! empty( $border_data['hoverColor'] ) ) {
			$selectors[ $sel . ':hover' ]['border-color'] = $border_data['hoverColor'];
		}
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
// 1. GENERAL CONTENT (Text Alignment)
// =====================================================================
if ( ! empty( $attr['general_content']['textAlignment'] ) ) {
	$apply_responsive_prop( $wrap_sel, 'text-align', $attr['general_content']['textAlignment'] );
}

// =====================================================================
// 2. BACKGROUND (Normal + Hover)
// =====================================================================
if ( ! empty( $attr['styles_background']['background'] ) ) {
	$bg = $attr['styles_background']['background'];
	$bg_type = $bg['bgType'] ?? 'color';
	if ( 'color' === $bg_type && ! empty( $bg['color'] ) ) {
		$selectors[ $wrap_sel ]['background-color'] = $bg['color'];
	} elseif ( 'gradient' === $bg_type && ! empty( $bg['gradient'] ) ) {
		$selectors[ $wrap_sel ]['background-image'] = $bg['gradient'];
	}
}

// =====================================================================
// 3. LINK COLOR (Normal + Hover)
// =====================================================================
if ( ! empty( $attr['styles_link']['linkColor'] ) ) {
	$lc = $attr['styles_link']['linkColor'];
	if ( ! empty( $lc['Normal']['color'] ) ) {
		$selectors[ $link_sel ]['color'] = $lc['Normal']['color'];
	}
	if ( ! empty( $lc['Hover']['color'] ) ) {
		$selectors[ $link_sel . ':hover' ]['color'] = $lc['Hover']['color'];
	}
}

// =====================================================================
// 4. BORDER & RADIUS (Wrap)
// =====================================================================
if ( ! empty( $attr['styles_border'] ) ) {
	$apply_border_styles( $wrap_sel, $attr['styles_border'] );
}

// =====================================================================
// 5. DIMENSIONS (Margin & Padding on Wrap)
// =====================================================================
if ( ! empty( $attr['styles_dimensions']['dimension'] ) ) {
	$dim = $attr['styles_dimensions']['dimension'];
	if ( ! empty( $dim['margin'] ) ) {
		$apply_dimension_box( $wrap_sel, 'margin', $dim['margin'] );
	}
	if ( ! empty( $dim['padding'] ) ) {
		$apply_dimension_box( $wrap_sel, 'padding', $dim['padding'] );
	}
}

// =====================================================================
// 6. HIGHLIGHT (<mark> tag)
// =====================================================================
if ( ! empty( $attr['styles_highlight'] ) ) {
	$hl = $attr['styles_highlight'];

	if ( ! empty( $hl['textColor'] ) ) {
		$selectors[ $mark_sel ]['color'] = $hl['textColor'];
	}
	if ( ! empty( $hl['bgColor'] ) ) {
		$selectors[ $mark_sel ]['background-color'] = $hl['bgColor'];
	}
	if ( ! empty( $hl['padding'] ) ) {
		$apply_dimension_box( $mark_sel, 'padding', $hl['padding'] );
	}
	if ( ! empty( $hl['typography'] ) ) {
		$apply_typography( $mark_sel, $hl['typography'] );
	}
	if ( ! empty( $hl['border'] ) ) {
		$apply_border_styles( $mark_sel, $hl['border'] );
	}
}

// =====================================================================
// 7. SEPARATOR (.wcb-heading__separator & .wcb-heading__separator-wrap)
// =====================================================================
if ( ! empty( $attr['styles_separator'] ) ) {
	$sep = $attr['styles_separator'];

	// Responsive width.
	if ( ! empty( $sep['width'] ) ) {
		$apply_responsive_prop( $sep_sel, 'width', $sep['width'] );
	}

	// Border style.
	if ( ! empty( $sep['border'] ) && is_array( $sep['border'] ) ) {
		$w  = $sep['border']['width'] ?? '1px';
		$st = $sep['border']['style'] ?? 'solid';
		$c  = $sep['border']['color'] ?? '#d1d5db';
		if ( '' !== $c ) {
			$selectors[ $sep_sel ]['border'] = $w . ' ' . $st . ' ' . $c;
		}
	}

	// Responsive margin-bottom on .wcb-heading__separator-wrap.
	if ( ! empty( $sep['marginBottom'] ) ) {
		$apply_responsive_prop( $sep_wrap_sel, 'margin-bottom', $sep['marginBottom'] );
	}
}

// =====================================================================
// 8. HEADING (.wcb-heading__heading)
// =====================================================================
if ( ! empty( $attr['styles_heading'] ) ) {
	$hd = $attr['styles_heading'];

	// Typography.
	if ( ! empty( $hd['typography'] ) ) {
		$apply_typography( $h_sel, $hd['typography'] );
	}

	// Text Color & Gradient.
	if ( ! empty( $hd['textColor'] ) ) {
		$apply_color_gradient( $h_sel, $hd['textColor'] );
	}

	// Text Shadow.
	if ( ! empty( $hd['textShadow'] ) && is_array( $hd['textShadow'] ) ) {
		$ts = $hd['textShadow'];
		$h  = $ts['horizontal'] ?? 0;
		$v  = $ts['vertical'] ?? 0;
		$b  = $ts['blur'] ?? 0;
		$c  = $ts['color'] ?? '';
		if ( '' !== $c ) {
			$selectors[ $h_sel ]['text-shadow'] = sprintf( '%dpx %dpx %dpx %s', (int) $h, (int) $v, (int) $b, $c );
		}
	}

	// Margin bottom.
	if ( ! empty( $hd['marginBottom'] ) ) {
		$apply_responsive_prop( $h_sel, 'margin-bottom', $hd['marginBottom'] );
	}
}

// =====================================================================
// 9. SUB-HEADING (.wcb-heading__subHeading)
// =====================================================================
if ( ! empty( $attr['styles_subHeading'] ) ) {
	$shd = $attr['styles_subHeading'];

	// Typography.
	if ( ! empty( $shd['typography'] ) ) {
		$apply_typography( $sh_sel, $shd['typography'] );
	}

	// Text Color & Gradient.
	if ( ! empty( $shd['textColor'] ) ) {
		$apply_color_gradient( $sh_sel, $shd['textColor'] );
	}

	// Margin bottom.
	if ( ! empty( $shd['marginBottom'] ) ) {
		$apply_responsive_prop( $sh_sel, 'margin-bottom', $shd['marginBottom'] );
	}
}

// =====================================================================
// 10. ADVANCE (responsive condition + z-index + motion effect)
// =====================================================================
$selectors = array_merge( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

// ---------------------------------------------------------------------

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

