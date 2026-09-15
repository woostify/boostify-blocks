<?php
/**
 * Frontend CSS for Icon List Block.
 *
 * Mirrors src/block-icon-list/GlobalCss.tsx so every style rendered by the
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

$wrap_sel        = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$inner_sel       = $wrap_sel . ' .wcb-icon-list__icon-wrap';
$content_sel     = $wrap_sel . ' .wcb-icon-list__content';
$icon_sel        = $wrap_sel . ' .wcb-icon-list__icon';
$icon_full_sel   = $wrap_sel . ' .wcb-icon-full';
$heading_sel     = $wrap_sel . ' .wcb-icon-list__heading';
$designation_sel = $wrap_sel . ' .wcb-icon-list__designation';
$title_wrap_sel  = $wrap_sel . ' .wcb-icon-list__content-title-wrap';

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
					$st = $s['style'] ?? 'none';
					$c  = $s['color'] ?? '';
					if ( 'none' === $st ) {
						$selectors[ $sel ][ 'border-' . $side ] = 'none';
					} elseif ( '' !== $c || ( '' !== $st && 'none' !== $st ) ) {
						$selectors[ $sel ][ 'border-' . $side ] = trim( $w . ' ' . $st . ' ' . $c );
					}
				}
			}
		} else {
			$w  = WCB_Block_Helper::get_css_value( $main['width'] ?? '1px' );
			$st = $main['style'] ?? 'none';
			$c  = $main['color'] ?? '';
			if ( 'none' === $st ) {
				$selectors[ $sel ]['border'] = 'none';
			} elseif ( '' !== $c || ( '' !== $st && 'none' !== $st ) ) {
				$selectors[ $sel ]['border'] = trim( $w . ' ' . $st . ' ' . $c );
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
			if ( empty( $val ) && '0' !== (string) $val ) {
				return array(
					'topLeft'     => '',
					'topRight'    => '',
					'bottomRight' => '',
					'bottomLeft'  => '',
				);
			}
			if ( is_string( $val ) || is_numeric( $val ) ) {
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
			return array(
				'topLeft'     => '',
				'topRight'    => '',
				'bottomRight' => '',
				'bottomLeft'  => '',
			);
		};

		$d_raw = is_array( $radius ) ? ( $radius['Desktop'] ?? ( isset( $radius['topLeft'] ) ? $radius : '' ) ) : $radius;
		$t_raw = is_array( $radius ) ? ( $radius['Tablet'] ?? $d_raw ) : $radius;
		$m_raw = is_array( $radius ) ? ( $radius['Mobile'] ?? $t_raw ) : $radius;

		$d_c = $normalize_corners( $d_raw );
		$t_c = $normalize_corners( $t_raw );
		$m_c = $normalize_corners( $m_raw );

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
// 1. LAYOUT & INNER CONTAINER (mirrors GlobalCss.tsx lines 72-139)
// =====================================================================
$gl  = $attr['general_layout'] ?? array();
$gi  = $attr['general_icon'] ?? array();
$sdm = $attr['style_dimension'] ?? array();

$layout = $gl['layout'] ?? 'vertical';
$flex_dir = ( 'vertical' === $layout ) ? 'column' : 'row';

$selectors[ $inner_sel ]['display']        = 'flex';
$selectors[ $inner_sel ]['flex-direction'] = $flex_dir;

$selectors[ $content_sel ]['display']        = 'flex';
$selectors[ $content_sel ]['flex-direction'] = $flex_dir;

// Text alignment converted to flex alignment on $content_sel.
$get_flex_alignment = function ( $alignment ) {
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

$align_prop = ( 'vertical' === $layout ) ? 'align-items' : 'justify-content';
$ta_raw     = $gl['textAlignment'] ?? array();
$ta_d       = is_array( $ta_raw ) ? ( $ta_raw['Desktop'] ?? 'left' ) : ( $ta_raw ?: 'left' );
$ta_t       = is_array( $ta_raw ) ? ( $ta_raw['Tablet'] ?? $ta_d ) : $ta_d;
$ta_m       = is_array( $ta_raw ) ? ( $ta_raw['Mobile'] ?? $ta_t ) : $ta_t;

$flex_align_d = $get_flex_alignment( $ta_d );
$flex_align_t = $get_flex_alignment( $ta_t );
$flex_align_m = $get_flex_alignment( $ta_m );

$selectors[ $content_sel ][ $align_prop ] = $flex_align_d;
if ( $flex_align_t !== $flex_align_d ) {
	$t_selectors[ $content_sel ][ $align_prop ] = $flex_align_t;
}
if ( $flex_align_m !== $flex_align_t ) {
	$m_selectors[ $content_sel ][ $align_prop ] = $flex_align_m;
}

// Vertical Alignment.
if ( 'middle' === ( $gi['verticalAlignment'] ?? 'top' ) ) {
	$selectors[ $inner_sel . ', ' . $content_sel ]['align-self'] = 'center';
}

// Icon position & title wrap.
$icon_pos = $gi['iconPosition'] ?? 'leftOfTitle';
$selectors[ $inner_sel ]['order'] = ( 'leftOfTitle' === $icon_pos ) ? '0' : '2';

if ( 'leftOfTitle' === $icon_pos || 'rightOfTitle' === $icon_pos ) {
	$selectors[ $title_wrap_sel ]['display'] = 'flex';
}

// Gap between items.
if ( ! empty( $sdm['gapBetweenItems'] ) ) {
	$apply_responsive_prop( $inner_sel, 'gap', $sdm['gapBetweenItems'] );
}

// Wrap Padding & Margin.
if ( ! empty( $sdm['padding'] ) ) {
	$apply_dimension_box( $wrap_sel, 'padding', $sdm['padding'] );
}
if ( ! empty( $sdm['margin'] ) ) {
	$apply_dimension_box( $wrap_sel, 'margin', $sdm['margin'] );
}

// =====================================================================
// 2. ICON STYLES (mirrors GlobalCss.tsx lines 158-191)
// =====================================================================
$enable_icon = $gi['enableIcon'] ?? true;
if ( $enable_icon ) {
	$si = $attr['style_Icon'] ?? array();

	// Icon Margin & Padding.
	if ( ! empty( $si['dimensions']['margin'] ) ) {
		$apply_dimension_box( $icon_sel, 'margin', $si['dimensions']['margin'] );
	}
	if ( ! empty( $si['dimensions']['padding'] ) ) {
		$apply_dimension_box( $icon_sel, 'padding', $si['dimensions']['padding'] );
	}

	// Icon Border & Radius.
	if ( ! empty( $si['border'] ) ) {
		$apply_border_styles( $icon_sel, $si['border'] );
	}

	// Icon Size (width & font-size).
	if ( ! empty( $si['iconSize'] ) ) {
		$apply_responsive_prop( $icon_full_sel, 'width', $si['iconSize'] );
		$apply_responsive_prop( $icon_full_sel, 'font-size', $si['iconSize'] );
	}

	// Icon Color & Hover.
	if ( ! empty( $si['color'] ) ) {
		$selectors[ $icon_full_sel ]['color'] = $si['color'];
	}
	if ( ! empty( $si['hoverColor'] ) ) {
		$selectors[ $icon_full_sel . ':hover' ]['color'] = $si['hoverColor'];
	}
}

// =====================================================================
// 3. TITLE / HEADING (mirrors GlobalCss.tsx lines 193-216)
// =====================================================================
$enable_title = $gl['enableTitle'] ?? true;
if ( $enable_title ) {
	$st = $attr['style_title'] ?? array();

	if ( ! empty( $st['typography'] ) ) {
		$apply_typography( $heading_sel, $st['typography'] );
	}
	if ( ! empty( $st['marginBottom'] ) ) {
		$apply_responsive_prop( $heading_sel, 'margin-bottom', $st['marginBottom'] );
	}
	if ( ! empty( $st['textColor'] ) ) {
		$selectors[ $heading_sel ]['color'] = $st['textColor'];
	}
	if ( ! empty( $st['textColorHover'] ) ) {
		$selectors[ $heading_sel . ':hover' ]['color'] = $st['textColorHover'];
	}
}

// =====================================================================
// 4. DESIGNATION / PREFIX (mirrors GlobalCss.tsx lines 219-239)
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
// 5. ADVANCE (responsive condition + motion effect + z-index)
// =====================================================================
$selectors = array_merge( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

// ---------------------------------------------------------------------

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

