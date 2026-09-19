<?php
/**
 * Frontend CSS for Countdown Block.
 *
 * Mirrors src/block-countdown/GlobalCss.tsx so every style rendered by the
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
$content_sel = $wrap_sel . ' .wcb-countdown__content';
$box_sel     = $wrap_sel . ' .wcb-countdown__box';
$number_sel  = $wrap_sel . ' .wcb-countdown__number';
$label_sel   = $wrap_sel . ' .wcb-countdown__label';

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

	if ( 'line-height' === $prop || 'z-index' === $prop || 'opacity' === $prop || 'flex-direction' === $prop || 'text-align' === $prop || 'justify-content' === $prop || 'align-items' === $prop ) {
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

/**
 * Build box-shadow string from attributes.
 */
$build_shadow_value = function ( $shadow_data ) {
	if ( empty( $shadow_data ) || ! is_array( $shadow_data ) ) {
		return '';
	}

	$c = $shadow_data['color'] ?? '';
	if ( empty( $c ) ) {
		return '';
	}

	$x = WCB_Block_Helper::get_css_value( $shadow_data['horizontal'] ?? 0 );
	$y = WCB_Block_Helper::get_css_value( $shadow_data['vertical'] ?? 0 );
	$b = WCB_Block_Helper::get_css_value( $shadow_data['blur'] ?? 0 );
	$s = WCB_Block_Helper::get_css_value( $shadow_data['spread'] ?? 0 );
	$p = ! empty( $shadow_data['position'] ) && 'inset' === $shadow_data['position'] ? 'inset ' : '';

	return trim( $p . $x . ' ' . $y . ' ' . $b . ' ' . $s . ' ' . $c );
};

// =====================================================================
// 1. WRAP (contentWidth + margin/padding)
// =====================================================================
$gl = $attr['general_layout'] ?? array();
if ( ! empty( $gl['contentWidth'] ) ) {
	$apply_responsive_prop( $wrap_sel, 'width', $gl['contentWidth'] );
}

$sdm = $attr['style_dimensions'] ?? array();
$dim = $sdm['dimension'] ?? ( $attr['style_dimension']['dimension'] ?? array() );
if ( ! empty( $dim['margin'] ) ) {
	$apply_dimension_box( $wrap_sel, 'margin', $dim['margin'] );
}
if ( ! empty( $dim['padding'] ) ) {
	$apply_dimension_box( $wrap_sel, 'padding', $dim['padding'] );
}

// =====================================================================
// 2. CONTENT (.wcb-countdown__content)
// =====================================================================
$align_map = array(
	'left'   => 'start',
	'right'  => 'end',
	'center' => 'center',
);

$align_val = $gl['textAlignment'] ?? array();
$flex_dir  = $gl['flexDirection'] ?? array();

// Apply text alignment
if ( ! empty( $align_val ) ) {
	$apply_responsive_prop( $content_sel, 'text-align', $align_val );
}

// Apply flex-direction
if ( ! empty( $flex_dir ) ) {
	$apply_responsive_prop( $content_sel, 'flex-direction', $flex_dir );
}

// Calculate responsive justifyContent & alignItems based on direction and alignment
$devices = array( 'Desktop', 'Tablet', 'Mobile' );
foreach ( $devices as $device ) {
	$dev_align = is_array( $align_val ) ? ( $align_val[ $device ] ?? ( $align_val['Desktop'] ?? 'center' ) ) : $align_val;
	$dev_dir   = is_array( $flex_dir ) ? ( $flex_dir[ $device ] ?? ( $flex_dir['Desktop'] ?? 'row' ) ) : $flex_dir;
	$mapped    = $align_map[ $dev_align ] ?? 'center';
	$is_row    = ( 'row' === $dev_dir || 'row-reverse' === $dev_dir );

	if ( 'Desktop' === $device ) {
		if ( $is_row ) {
			$selectors[ $content_sel ]['justify-content'] = $mapped;
		} else {
			$selectors[ $content_sel ]['align-items'] = $mapped;
		}
	} elseif ( 'Tablet' === $device ) {
		if ( $is_row ) {
			$t_selectors[ $content_sel ]['justify-content'] = $mapped;
		} else {
			$t_selectors[ $content_sel ]['align-items'] = $mapped;
		}
	} elseif ( 'Mobile' === $device ) {
		if ( $is_row ) {
			$m_selectors[ $content_sel ]['justify-content'] = $mapped;
		} else {
			$m_selectors[ $content_sel ]['align-items'] = $mapped;
		}
	}
}

// Gap boxes
$sd = $attr['style_dimension'] ?? array();
if ( ! empty( $sd['gap_boxes'] ) ) {
	$apply_responsive_prop( $content_sel, 'gap', $sd['gap_boxes'] );
}

// =====================================================================
// 3. BOX (.wcb-countdown__box)
// =====================================================================
// Border
if ( ! empty( $attr['style_border'] ) ) {
	$apply_border_styles( $box_sel, $attr['style_border'] );
}

// Box shadow
$sbs = $attr['style_boxshadow'] ?? array();
$shadow_normal = $build_shadow_value( $sbs['Normal'] ?? ( $sbs['normal'] ?? array() ) );
if ( '' !== $shadow_normal ) {
	$selectors[ $box_sel ]['box-shadow'] = $shadow_normal;
}
$shadow_hover = $build_shadow_value( $sbs['Hover'] ?? ( $sbs['hover'] ?? array() ) );
if ( '' !== $shadow_hover ) {
	$selectors[ $box_sel . ':hover' ]['box-shadow'] = $shadow_hover;
}

// Width & Height
if ( ! empty( $sd['width_box'] ) ) {
	$apply_responsive_prop( $box_sel, 'width', $sd['width_box'] );

	$preset = $attr['general_preset']['preset'] ?? '';
	if ( 'wcb-countdown-5' !== $preset ) {
		$apply_responsive_prop( $box_sel, 'height', $sd['width_box'] );
	}
}

// Background (normal + hover)
$sbg = $attr['style_background'] ?? array();
$bg_normal = $sbg['normal'] ?? ( $sbg['Normal'] ?? array() );
if ( ! empty( $bg_normal ) ) {
	$bg_type = $bg_normal['bgType'] ?? 'color';
	if ( 'color' === $bg_type && ! empty( $bg_normal['color'] ) ) {
		$selectors[ $box_sel ]['background-color'] = $bg_normal['color'];
	} elseif ( 'gradient' === $bg_type && ! empty( $bg_normal['gradient'] ) ) {
		$selectors[ $box_sel ]['background-image'] = $bg_normal['gradient'];
	}
}

$bg_hover = $sbg['hover'] ?? ( $sbg['Hover'] ?? array() );
if ( ! empty( $bg_hover ) ) {
	$bg_type_h = $bg_hover['bgType'] ?? 'color';
	if ( 'color' === $bg_type_h && ! empty( $bg_hover['color'] ) ) {
		$selectors[ $box_sel . ':hover' ]['background-color'] = $bg_hover['color'];
	} elseif ( 'gradient' === $bg_type_h && ! empty( $bg_hover['gradient'] ) ) {
		$selectors[ $box_sel . ':hover' ]['background-image'] = $bg_hover['gradient'];
	}
}

// =====================================================================
// 4. NUMBER (.wcb-countdown__number)
// =====================================================================
$sn = $attr['style_number'] ?? array();
if ( ! empty( $sn['typography'] ) ) {
	$apply_typography( $number_sel, $sn['typography'] );
}
if ( ! empty( $sn['textColor'] ) ) {
	$selectors[ $number_sel ]['color'] = $sn['textColor'];
}
if ( ! empty( $sd['gap_number'] ) ) {
	$apply_responsive_prop( $number_sel, 'margin-bottom', $sd['gap_number'] );
}

// =====================================================================
// 5. LABEL (.wcb-countdown__label)
// =====================================================================
$sl = $attr['style_label'] ?? array();
if ( ! empty( $sl['typography'] ) ) {
	$apply_typography( $label_sel, $sl['typography'] );
}
if ( ! empty( $sl['textColor'] ) ) {
	$selectors[ $label_sel ]['color'] = $sl['textColor'];
}

// =====================================================================
// 6. ADVANCE (responsive condition + motion effect + z-index)
// =====================================================================
$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_advance_css( $attr, $content_sel ) );

// ---------------------------------------------------------------------
$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

