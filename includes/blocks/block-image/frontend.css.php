<?php
/**
 * Frontend CSS for Image Block.
 *
 * Mirrors src/block-image/GlobalCss.tsx so every style rendered by the
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
$figure_sel  = $wrap_sel . '.wp-block-wcb-image';
$img_sel     = $wrap_sel . ' img';
$cap_sel     = $wrap_sel . ' figcaption.wp-element-caption';
$ov_bg_sel   = $wrap_sel . ' .wcb-image__overlay-bg';
$ov_wrap_sel = $wrap_sel . ' .wcb-image__overlay-wrap';

// ---------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------

/**
 * Apply responsive property across desktop, tablet, and mobile buckets (Desktop-first).
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
 * Tailwind shadow preset value.
 */
$tw_shadow_value = function ( $preset, $color = '' ) {
	switch ( $preset ) {
		case 'shadow-sm':
			return '0 1px 2px 0 ' . ( $color ? $color : 'rgb(0 0 0 / 0.05)' );
		case 'shadow':
			return '0 1px 3px 0 ' . ( $color ? $color : 'rgb(0 0 0 / 0.1)' ) . ', 0 1px 2px -1px ' . ( $color ? $color : 'rgb(0 0 0 / 0.1)' );
		case 'shadow-md':
			return '0 4px 6px -1px ' . ( $color ? $color : 'rgb(0 0 0 / 0.1)' ) . ', 0 2px 4px -2px ' . ( $color ? $color : 'rgb(0 0 0 / 0.1)' );
		case 'shadow-lg':
			return '0 10px 15px -3px ' . ( $color ? $color : 'rgb(0 0 0 / 0.1)' ) . ', 0 4px 6px -4px ' . ( $color ? $color : 'rgb(0 0 0 / 0.1)' );
		case 'shadow-xl':
			return '0 20px 25px -5px ' . ( $color ? $color : 'rgb(0 0 0 / 0.1)' ) . ', 0 8px 10px -6px ' . ( $color ? $color : 'rgb(0 0 0 / 0.1)' );
		case 'shadow-2xl':
			return '0 25px 50px -12px ' . ( $color ? $color : 'rgb(0 0 0 / 0.25)' );
		case 'shadow-inner':
			return 'inset 0 2px 4px 0 ' . ( $color ? $color : 'rgb(0 0 0 / 0.05)' );
		default:
			return '';
	}
};

/**
 * Build a box-shadow value from a Normal/Hover config object.
 */
$build_shadow_value = function ( $shadow ) use ( $tw_shadow_value ) {
	if ( empty( $shadow ) || ! is_array( $shadow ) ) {
		return '';
	}

	$color  = $shadow['color'] ?? '';
	$preset = $shadow['presetClass'] ?? '';

	if ( ! empty( $preset ) ) {
		return $tw_shadow_value( $preset, $color );
	}

	if ( empty( $color ) ) {
		return '';
	}

	return trim(
		sprintf(
			'%s %s %s %s %s %s',
			WCB_Block_Helper::get_css_value( $shadow['horizontal'] ?? 0 ),
			WCB_Block_Helper::get_css_value( $shadow['vertical'] ?? 0 ),
			WCB_Block_Helper::get_css_value( $shadow['blur'] ?? 0 ),
			WCB_Block_Helper::get_css_value( $shadow['spread'] ?? 0 ),
			$color,
			'inset' === ( $shadow['position'] ?? '' ) ? 'inset' : ''
		)
	);
};

// =====================================================================
// 1. IMAGE WRAP (Display, Padding, Margin, Alignment)
// =====================================================================
$gs = $attr['general_settings'] ?? array();
$si = $attr['style_image'] ?? array();

$selectors[ $wrap_sel ]['display'] = 'flex';

// Alignment (Desktop-first).
if ( ! empty( $gs['alignment'] ) ) {
	$apply_responsive_prop( $wrap_sel, 'justify-content', $gs['alignment'] );
}

if ( ! empty( $si['padding'] ) ) {
	$apply_dimension_box( $wrap_sel, 'padding', $si['padding'] );
	$apply_dimension_box( $ov_wrap_sel, 'padding', $si['padding'] );
}
if ( ! empty( $si['margin'] ) ) {
	$apply_dimension_box( $wrap_sel, 'margin', $si['margin'] );
}

// =====================================================================
// 2. IMAGE ELEMENT (Width, Height, Object-Fit, Border, Radius, Shadow)
// =====================================================================
if ( ! empty( $gs['width'] ) ) {
	$apply_responsive_prop( $img_sel, 'width', $gs['width'] );
}
if ( ! empty( $gs['height'] ) ) {
	$apply_responsive_prop( $img_sel, 'height', $gs['height'] );
}
if ( ! empty( $gs['objectFit'] ) ) {
	$apply_responsive_prop( $img_sel, 'object-fit', $gs['objectFit'] );
}

if ( ! empty( $si['border'] ) ) {
	$apply_border_styles( $img_sel, $si['border'] );
	// Overlay border-radius matches image border-radius.
	if ( ! empty( $si['border']['radius'] ) ) {
		$apply_border_styles( $ov_bg_sel, array( 'radius' => $si['border']['radius'] ) );
	}
}

if ( ! empty( $si['boxShadow'] ) && is_array( $si['boxShadow'] ) ) {
	$bs = $si['boxShadow'];
	if ( ! empty( $bs['Normal'] ) ) {
		$normal_shadow = $build_shadow_value( $bs['Normal'] );
		if ( '' !== $normal_shadow ) {
			$selectors[ $img_sel ]['box-shadow'] = $normal_shadow;
		}
	}
	if ( ! empty( $bs['Hover'] ) ) {
		$hover_shadow = $build_shadow_value( $bs['Hover'] );
		if ( '' !== $hover_shadow ) {
			$selectors[ $img_sel . ':hover' ]['box-shadow'] = $hover_shadow;
		}
	}
}

$sd = $attr['style_dimension'] ?? array();
if ( ! empty( $sd['margin'] ) ) {
	$apply_dimension_box( $img_sel, 'margin', $sd['margin'] );
}
if ( ! empty( $sd['padding'] ) ) {
	$apply_dimension_box( $img_sel, 'padding', $sd['padding'] );
}

// =====================================================================
// 3. OVERLAY (Layout, Background)
// =====================================================================
$layout = $gs['layout'] ?? 'normal';
$so     = $attr['style_overlay'] ?? array();
if ( 'overlay' === $layout ) {
	if ( ! empty( $gs['contentAlignment'] ) ) {
		$selectors[ $ov_bg_sel ]['justify-content'] = $gs['contentAlignment'];
	}
	if ( ! empty( $so['backgroundColor'] ) ) {
		$selectors[ $ov_bg_sel ]['background-color'] = $so['backgroundColor'];
	}
	if ( ! empty( $so['backgroundColorHover'] ) ) {
		$selectors[ $ov_bg_sel . ':hover' ]['background-color'] = $so['backgroundColorHover'];
	}
}

// =====================================================================
// 4. HOVER IMAGE EFFECTS
// =====================================================================
$hover_img = $gs['hoverImage'] ?? 'static';
if ( 'zoomin' === $hover_img ) {
	$selectors[ $img_sel ]['transition']               = 'transform 0.3s ease-in-out';
	$selectors[ $wrap_sel . ':hover img' ]['transform'] = 'scale(1.05)';
} elseif ( 'slide' === $hover_img ) {
	$selectors[ $img_sel ]['transition']               = 'transform 0.3s cubic-bezier(0.4,0,0.2,1)';
	$selectors[ $wrap_sel . ':hover img' ]['transform'] = 'translateX(-20px)';
} elseif ( 'grayscale' === $hover_img ) {
	$selectors[ $img_sel ]['transition']            = 'filter 0.3s ease-in-out';
	$selectors[ $wrap_sel . ':hover img' ]['filter'] = 'grayscale(100%)';
} elseif ( 'blur' === $hover_img ) {
	$selectors[ $img_sel ]['transition']            = 'filter 0.3s ease-in-out';
	$selectors[ $wrap_sel . ':hover img' ]['filter'] = 'blur(2px)';
}

// =====================================================================
// 5. CAPTION
// =====================================================================
if ( 'overlay' !== $layout ) {
	$sc = $attr['style_caption'] ?? array();
	if ( ! empty( $gs['captionAlignment'] ) ) {
		$apply_responsive_prop( $cap_sel, 'text-align', $gs['captionAlignment'] );
	}
	if ( ! empty( $sc['typography'] ) ) {
		$typo = $sc['typography'];
		if ( ! empty( $typo['fontFamily'] ) ) {
			$selectors[ $cap_sel ]['font-family'] = $typo['fontFamily'];
		}
		if ( ! empty( $typo['appearance']['style'] ) && is_array( $typo['appearance']['style'] ) ) {
			$s = $typo['appearance']['style'];
			if ( ! empty( $s['fontWeight'] ) ) {
				$selectors[ $cap_sel ]['font-weight'] = $s['fontWeight'];
			}
			if ( ! empty( $s['fontStyle'] ) ) {
				$selectors[ $cap_sel ]['font-style'] = $s['fontStyle'];
			}
		}
		if ( ! empty( $typo['fontSizes'] ) ) {
			$apply_responsive_prop( $cap_sel, 'font-size', $typo['fontSizes'] );
		}
		if ( ! empty( $typo['lineHeight'] ) ) {
			$apply_responsive_prop( $cap_sel, 'line-height', $typo['lineHeight'] );
		}
		if ( ! empty( $typo['letterSpacing'] ) ) {
			$apply_responsive_prop( $cap_sel, 'letter-spacing', $typo['letterSpacing'] );
		}
	}
	if ( ! empty( $sc['margin'] ) ) {
		$apply_dimension_box( $cap_sel, 'margin', $sc['margin'] );
	}
	if ( ! empty( $sc['textColor'] ) ) {
		$selectors[ $cap_sel ]['color'] = $sc['textColor'];
	}
}

// =====================================================================
// 6. FIGURE ALIGNMENT (fallback classes)
// =====================================================================
$selectors[ $figure_sel . '.alignright' ] = array(
	'margin-left'  => 'auto',
	'margin-right' => '0',
);
$selectors[ $figure_sel . '.alignleft' ]  = array(
	'margin-left'  => '0',
	'margin-right' => 'auto',
);
$selectors[ $figure_sel . '.aligncenter' ] = array(
	'margin-left'  => 'auto',
	'margin-right' => 'auto',
	'text-align'   => 'center',
);

// =====================================================================
// 7. ADVANCE (responsive condition + z-index)
// =====================================================================
$selectors = array_merge( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

// ---------------------------------------------------------------------

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

