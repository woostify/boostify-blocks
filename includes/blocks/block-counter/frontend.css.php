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

$selectors   = array();
$t_selectors = array();
$m_selectors = array();

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
 * Apply border and responsive border radius.
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
					$w  = WCB_Block_Helper::get_css_value( $s['width'] ?? '1px' );
					$st = $s['style'] ?? 'solid';
					$c  = $s['color'] ?? '#334155';
					if ( 'none' === $st ) {
						$selectors[ $sel ][ 'border-' . $side ] = 'none';
					} else {
						$selectors[ $sel ][ 'border-' . $side ] = trim( $w . ' ' . $st . ' ' . $c );
					}
				}
			}
		} else {
			$w  = WCB_Block_Helper::get_css_value( $main['width'] ?? '1px' );
			$st = $main['style'] ?? 'solid';
			$c  = $main['color'] ?? '#334155';
			if ( 'none' === $st ) {
				$selectors[ $sel ]['border'] = 'none';
			} else {
				$selectors[ $sel ]['border'] = trim( $w . ' ' . $st . ' ' . $c );
			}
		}
	} elseif ( ! empty( $border_data['borderType'] ) && 'none' !== $border_data['borderType'] ) {
		$w  = WCB_Block_Helper::get_css_value( $border_data['borderWidth']['Desktop'] ?? '1px' );
		$st = $border_data['borderType'];
		$c  = $border_data['borderColor'] ?? '#334155';
		$selectors[ $sel ]['border'] = trim( $w . ' ' . $st . ' ' . $c );
	}

	$radius = $border_data['borderRadius'] ?? null;
	if ( ! empty( $radius ) ) {
		$normalize_corners = function ( $val ) {
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

		$d_r = is_array( $radius ) ? ( $radius['Desktop'] ?? ( isset( $radius['top'] ) ? $radius : '' ) ) : $radius;
		$t_r = is_array( $radius ) ? ( $radius['Tablet'] ?? $d_r ) : $radius;
		$m_r = is_array( $radius ) ? ( $radius['Mobile'] ?? $t_r ) : $radius;

		$d_c = $normalize_corners( $d_r );
		$t_c = $normalize_corners( $t_r );
		$m_c = $normalize_corners( $m_r );

		$corner_map = array(
			'top'    => 'border-top-left-radius',
			'right'  => 'border-top-right-radius',
			'bottom' => 'border-bottom-right-radius',
			'left'   => 'border-bottom-left-radius',
		);

		foreach ( $corner_map as $ckey => $css_prop ) {
			$d_v = $d_c[ $ckey ];
			$t_v = $t_c[ $ckey ];
			$m_v = $m_c[ $ckey ];

			if ( '' !== $d_v && null !== $d_v ) {
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
		$apply_responsive_prop( $sel, 'font-size', $typo['fontSizes'], 'px' );
	}
	if ( ! empty( $typo['lineHeight'] ) ) {
		$apply_responsive_prop( $sel, 'line-height', $typo['lineHeight'], '' );
	}
	if ( ! empty( $typo['letterSpacing'] ) ) {
		$apply_responsive_prop( $sel, 'letter-spacing', $typo['letterSpacing'], 'px' );
	}
};

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

$get_flex_alignment = function( $alignment ) {
	switch ( $alignment ) {
		case 'center':
			return 'center';
		case 'right':
			return 'flex-end';
		case 'left':
		default:
			return 'flex-start';
	}
};

// Text Alignment on wrap.
if ( ! empty( $gl['textAlignment'] ) ) {
	$apply_responsive_prop( $wrap_sel, 'text-align', $gl['textAlignment'] );
}

// Horizontal justify alignment for number layout.
$ta   = $gl['textAlignment'] ?? array();
$ta_d = is_array( $ta ) ? ( $ta['Desktop'] ?? 'center' ) : ( $ta ?: 'center' );
$ta_t = is_array( $ta ) ? ( $ta['Tablet'] ?? $ta_d ) : $ta_d;
$ta_m = is_array( $ta ) ? ( $ta['Mobile'] ?? $ta_t ) : $ta_t;

$jf_d = $get_flex_alignment( $ta_d );
$jf_t = $get_flex_alignment( $ta_t );
$jf_m = $get_flex_alignment( $ta_m );

if ( 'number' === $layout_type && $is_icon_beside_content ) {
	$selectors[ $wrap_sel ]['justify-content'] = $jf_d;
	$selectors[ $content_sel ]['flex-grow']     = '0';

	if ( $jf_t !== $jf_d ) {
		$t_selectors[ $wrap_sel ]['justify-content'] = $jf_t;
	}
	if ( $jf_m !== $jf_t ) {
		$m_selectors[ $wrap_sel ]['justify-content'] = $jf_m;
	}
}

if ( 'number' === $layout_type && $is_icon_beside_title ) {
	$selectors[ $title_wrap_sel ]['justify-content'] = $jf_d;
	$selectors[ $content_title_sel ]['flex-grow']     = '0';

	if ( $jf_t !== $jf_d ) {
		$t_selectors[ $title_wrap_sel ]['justify-content'] = $jf_t;
	}
	if ( $jf_m !== $jf_t ) {
		$m_selectors[ $title_wrap_sel ]['justify-content'] = $jf_m;
	}
}

// Display & Flex Direction on wrap.
if ( $is_icon_beside_content ) {
	$selectors[ $wrap_sel ]['display']        = 'flex';
	$selectors[ $wrap_sel ]['flex-direction'] = 'row';

	$stack_col = ( 'right' === $icon_pos ) ? 'column-reverse' : 'column';

	if ( 'tablet' === $stack_on ) {
		$t_selectors[ $wrap_sel ]['flex-direction'] = $stack_col;
		$m_selectors[ $wrap_sel ]['flex-direction'] = $stack_col;
	} elseif ( 'mobile' === $stack_on ) {
		$m_selectors[ $wrap_sel ]['flex-direction'] = $stack_col;
	}
} else {
	$selectors[ $wrap_sel ]['display'] = 'block';
}

// Vertical alignment.
if ( 'middle' === $vert_align ) {
	$selectors[ $icon_wrap_sel . ', ' . $content_sel ]['align-self'] = 'center';
}

// Title wrap display.
$selectors[ $title_wrap_sel ]['display'] = $is_icon_beside_title ? 'flex' : 'block';

// Progress circle structure base styles (mirrors GlobalCss.tsx lines 130-169).
$selectors[ $circle_wrap_sel ]['position']       = 'relative';
$selectors[ $circle_wrap_sel ]['display']        = 'inline-block';
$selectors[ $circle_wrap_sel ]['vertical-align'] = 'top';

$selectors[ $circle_svg_sel ]['transform'] = 'rotate(-90deg)';

$selectors[ $circle_content_sel ]['position']        = 'absolute';
$selectors[ $circle_content_sel ]['top']             = '50%';
$selectors[ $circle_content_sel ]['left']            = '50%';
$selectors[ $circle_content_sel ]['transform']       = 'translate(-50%, -50%)';
$selectors[ $circle_content_sel ]['text-align']      = 'center';
$selectors[ $circle_content_sel ]['display']         = 'flex';
$selectors[ $circle_content_sel ]['flex-direction']  = $is_icon_beside_content ? 'row' : 'column';
$selectors[ $circle_content_sel ]['align-items']     = 'center';
$selectors[ $circle_content_sel ]['gap']             = '10px';
$selectors[ $circle_content_sel ]['max-width']       = '100%';
$selectors[ $circle_content_sel ]['width']           = '100%';
$selectors[ $circle_content_sel ]['padding']         = '10px';

$selectors[ $circle_content_inner_sel ]['display']        = 'flex';
$selectors[ $circle_content_inner_sel ]['flex-direction'] = 'column';
$selectors[ $circle_content_inner_sel ]['align-items']    = 'center';
$selectors[ $circle_content_inner_sel ]['gap']            = '10px';

$selectors[ $circle_content_row_sel ]['display']         = 'flex';
$selectors[ $circle_content_row_sel ]['flex-direction']  = 'row';
$selectors[ $circle_content_row_sel ]['align-items']     = 'center';
$selectors[ $circle_content_row_sel ]['justify-content'] = 'center';
$selectors[ $circle_content_row_sel ]['gap']             = '10px';

// Progress bar structure base styles (mirrors GlobalCss.tsx lines 170-194).
$selectors[ $bar_wrap_sel ]['position'] = 'relative';
$selectors[ $bar_wrap_sel ]['width']    = '100%';

$selectors[ $bar_track_sel ]['width']            = '100%';
$selectors[ $bar_track_sel ]['background-color'] = '#e0e0e0';
$selectors[ $bar_track_sel ]['height']           = '100%';
$selectors[ $bar_track_sel ]['border-radius']    = '5px';
$selectors[ $bar_track_sel ]['overflow']         = 'hidden';
$selectors[ $bar_track_sel ]['position']         = 'relative';

$selectors[ $bar_sel ]['height']          = '100%';
$selectors[ $bar_sel ]['transition']      = 'transparent';
$selectors[ $bar_sel ]['color']           = 'white';
$selectors[ $bar_sel ]['display']         = 'flex';
$selectors[ $bar_sel ]['align-items']     = 'center';
$selectors[ $bar_sel ]['justify-content'] = 'end';
$selectors[ $bar_sel ]['padding-right']   = '4px';
$selectors[ $bar_sel ]['padding-top']     = '5px';
$selectors[ $bar_sel ]['padding-bottom']  = '5px';

$selectors[ $title_class_sel ]['font-size']  = '16px';
$selectors[ $title_class_sel ]['color']      = '#666';
$selectors[ $title_class_sel ]['margin-top'] = '10px';

$selectors[ $icon_sel ]['font-size'] = '20px';

// Margin and padding on wrap.
if ( ! empty( $sdm['margin'] ) ) {
	$apply_dimension_box( $wrap_sel, 'margin', $sdm['margin'] );
}
if ( ! empty( $sdm['padding'] ) ) {
	$apply_dimension_box( $wrap_sel, 'padding', $sdm['padding'] );
}

// =====================================================================
// 2. CIRCLE (mirrors GlobalCss.tsx lines 235-246)
// =====================================================================
if ( 'circle' === $layout_type ) {
	$sc = $attr['style_circle'] ?? array();
	if ( ! empty( $sc['circleSize'] ) ) {
		$apply_responsive_prop( $circle_wrap_sel, 'width', $sc['circleSize'] );
		$apply_responsive_prop( $circle_wrap_sel, 'height', $sc['circleSize'] );
	}
}

// =====================================================================
// 3. PROGRESS COLOR (style_progress)
// =====================================================================
$sp = $attr['style_progress'] ?? array();
if ( ! empty( $sp['progressColor'] ) ) {
	$selectors[ $circle_sel ]['stroke']           = $sp['progressColor'];
	$selectors[ $bar_sel ]['background-color'] = $sp['progressColor'];
}

// =====================================================================
// 4. ICON (mirrors GlobalCss.tsx lines 249-281)
// =====================================================================
$enable_icon = $gi['enableIcon'] ?? true;
if ( $enable_icon ) {
	$si = $attr['style_Icon'] ?? array();

	if ( ! empty( $si['dimensions']['margin'] ) ) {
		$apply_dimension_box( $icon_wrap_sel, 'margin', $si['dimensions']['margin'] );
	}
	if ( ! empty( $si['dimensions']['padding'] ) ) {
		$apply_dimension_box( $icon_wrap_sel, 'padding', $si['dimensions']['padding'] );
	}
	if ( ! empty( $si['border'] ) ) {
		$apply_border_styles( $icon_sel, $si['border'] );
	}
	if ( ! empty( $si['iconSize'] ) ) {
		$apply_responsive_prop( $icon_full_sel, 'width', $si['iconSize'] );
		$apply_responsive_prop( $icon_full_sel, 'font-size', $si['iconSize'] );
	}
	if ( ! empty( $si['color'] ) ) {
		$selectors[ $icon_full_sel ]['color'] = $si['color'];
	}
	if ( ! empty( $si['hoverColor'] ) ) {
		$selectors[ $icon_full_sel . ':hover' ]['color'] = $si['hoverColor'];
	}
}

// =====================================================================
// 5. DESIGNATION / PREFIX (mirrors GlobalCss.tsx lines 284-303)
// =====================================================================
$enable_prefix = $gl['enablePrefix'] ?? false;
if ( $enable_prefix ) {
	$sd = $attr['style_desination'] ?? array();

	if ( ! empty( $sd['typography'] ) ) {
		$apply_typography( $designation_sel, $sd['typography'] );
	}
	if ( ! empty( $sd['marginBottom'] ) ) {
		$apply_responsive_prop( $designation_sel, 'margin-bottom', $sd['marginBottom'] );
	}
	if ( ! empty( $sd['textColor'] ) ) {
		$selectors[ $designation_sel ]['color'] = $sd['textColor'];
	}
}

// =====================================================================
// 6. NUMBER / TITLE (mirrors GlobalCss.tsx lines 306-325)
// =====================================================================
$enable_title = $gl['enableTitle'] ?? true;
if ( $enable_title ) {
	$st = $attr['style_title'] ?? array();

	if ( ! empty( $st['typography'] ) ) {
		$apply_typography( $number_sel, $st['typography'] );
	}
	if ( ! empty( $st['marginBottom'] ) ) {
		$apply_responsive_prop( $number_sel, 'margin-bottom', $st['marginBottom'] );
	}
	if ( ! empty( $st['textColor'] ) ) {
		$selectors[ $number_sel ]['color'] = $st['textColor'];
	}
}

// =====================================================================
// 7. DESCRIPTION (mirrors GlobalCss.tsx lines 328-347)
// =====================================================================
$enable_desc = $gl['enableDescription'] ?? true;
if ( $enable_desc ) {
	$sds = $attr['style_description'] ?? array();

	if ( ! empty( $sds['typography'] ) ) {
		$apply_typography( $desc_sel, $sds['typography'] );
	}
	if ( ! empty( $sds['marginBottom'] ) ) {
		$apply_responsive_prop( $desc_sel, 'margin-bottom', $sds['marginBottom'] );
	}
	if ( ! empty( $sds['textColor'] ) ) {
		$selectors[ $desc_sel ]['color'] = $sds['textColor'];
	}
}

// =====================================================================
// 8. ADVANCE (responsive condition + motion effect + z-index)
// =====================================================================
$selectors = array_merge( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

// ---------------------------------------------------------------------

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

