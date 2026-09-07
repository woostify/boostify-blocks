<?php
/**
 * Frontend CSS for Container Block.
 *
 * Mirrors src/block-container/GlobalCss.tsx so every style rendered by the
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

$wrap_class    = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$inner_class   = $wrap_class . ' > .wcb-container__inner';
$overlay_class = $wrap_class . ' > .wcb-OverlayBackgroundByBgControl';

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
// 1. PARENT .wp-block MARGIN RESET & ALIGNMENT
// =====================================================================
$selectors[ '.wp-block:has(> .wcb-container__wrap' . $wrap_class . ')' ] = array(
	'margin-top'    => '0 !important',
	'margin-bottom' => '0 !important',
);

$selectors[ '.wp-block[data-align="full"]:has(> .wcb-container__wrap' . $wrap_class . ') ' . $wrap_class ] = array(
	'margin-left'  => 'auto',
	'margin-right' => 'auto',
);

$selectors[ '.wp-block[data-align="wide"]:has(> .wcb-container__wrap' . $wrap_class . ')' ] = array(
	'margin-left'  => '-8px',
	'margin-right' => '-8px',
);

$selectors[ '.wp-block[data-align="wide"]:has(> .wcb-container__wrap' . $wrap_class . ') ' . $wrap_class ] = array(
	'margin-left'  => 'auto',
	'margin-right' => 'auto',
);

// =====================================================================
// 2. CONTAINER CONTROL (Width, Min-Height, Overflow, Color)
// =====================================================================
$gc     = $attr['general_container'] ?? array();
$sc     = $attr['styles_color'] ?? '';
$global = WCB_Block_Helper::get_global_settings();

// Wrap default display: flex (mirrors getAdvanveDivWrapStyles defaultDisplay: 'flex').
$selectors[ $wrap_class ]['display']        = 'flex';
$selectors[ $wrap_class ]['flex-direction'] = 'column';

// Default global container padding.
$container_padding = $global['containerPadding'] ?: '10px';
$selectors[ $wrap_class ]['padding'] = $container_padding;

if ( ! empty( $sc ) ) {
	$selectors[ $wrap_class ]['color'] = $sc;
}

if ( ! empty( $gc ) ) {
	$width_type     = $gc['containerWidthType'] ?? 'Full Width';
	$content_w_type = $gc['contentWidthType'] ?? 'Boxed';
	$overflow       = $gc['overflow'] ?? '';
	$custom_width   = $gc['customWidth'] ?? array();
	$min_height     = $gc['minHeight'] ?? array();
	$content_box_w  = $gc['contentBoxWidth'] ?? array();

	if ( ! empty( $overflow ) ) {
		$selectors[ $wrap_class ]['overflow'] = $overflow;
	}

	// Custom width (Desktop-first).
	if ( 'Custom' === $width_type && ! empty( $custom_width ) && is_array( $custom_width ) ) {
		$mw_d = $custom_width['Desktop'] ?? null;
		$mw_t = $custom_width['Tablet'] ?? $mw_d;
		$mw_m = $custom_width['Mobile'] ?? $mw_t;

		if ( null !== $mw_d && '' !== $mw_d ) {
			$selectors[ $wrap_class ]['max-width'] = $mw_d . ' !important';
			$selectors[ $wrap_class ]['width']     = $mw_d;
		}
		if ( null !== $mw_t && '' !== $mw_t && $mw_t !== $mw_d ) {
			$t_selectors[ $wrap_class ]['max-width'] = $mw_t . ' !important';
			$t_selectors[ $wrap_class ]['width']     = $mw_t;
		}
		if ( null !== $mw_m && '' !== $mw_m && $mw_m !== $mw_t ) {
			$m_selectors[ $wrap_class ]['max-width'] = $mw_m . ' !important';
			$m_selectors[ $wrap_class ]['width']     = $mw_m;
		}
	}

	// Min height (Desktop-first).
	if ( ! empty( $min_height ) && is_array( $min_height ) ) {
		$mh_d = $min_height['Desktop'] ?? null;
		$mh_t = $min_height['Tablet'] ?? $mh_d;
		$mh_m = $min_height['Mobile'] ?? $mh_t;

		if ( null !== $mh_d && '' !== $mh_d ) {
			$selectors[ $wrap_class ]['min-height'] = WCB_Block_Helper::get_css_value( $mh_d );
		}
		if ( null !== $mh_t && '' !== $mh_t && $mh_t !== $mh_d ) {
			$t_selectors[ $wrap_class ]['min-height'] = WCB_Block_Helper::get_css_value( $mh_t );
		}
		if ( null !== $mh_m && '' !== $mh_m && $mh_m !== $mh_t ) {
			$m_selectors[ $wrap_class ]['min-height'] = WCB_Block_Helper::get_css_value( $mh_m );
		}
	}

	// .alignfull
	if ( ! empty( $attr['align'] ) && 'full' === $attr['align'] ) {
		$selectors[ $wrap_class . '.alignfull' ] = array(
			'margin-left'  => 'calc(-50vw + 50%)',
			'margin-right' => 'calc(-50vw + 50%)',
		);
	}

	// Content box width (inner container max-width).
	if ( 'Full Width' === $content_w_type ) {
		$selectors[ $inner_class ]['max-width'] = '100%';
	} elseif ( 'Boxed' === $content_w_type ) {
		$has_content_w = false;
		if ( is_array( $content_box_w ) ) {
			foreach ( array( 'Desktop', 'Tablet', 'Mobile' ) as $bp ) {
				if ( ! empty( $content_box_w[ $bp ] ) ) {
					$has_content_w = true;
					break;
				}
			}
		}
		if ( ! $has_content_w && ! empty( $global['defaultContentWidth'] ) ) {
			$content_box_w = array( 'Desktop' => $global['defaultContentWidth'] );
		}

		if ( ! empty( $content_box_w ) && is_array( $content_box_w ) ) {
			$gap = $global['containerElementsGap'] ?: '10px';

			$cbw_d = $content_box_w['Desktop'] ?? '';
			$cbw_t = $content_box_w['Tablet'] ?? $cbw_d;
			$cbw_m = $content_box_w['Mobile'] ?? $cbw_t;

			$selectors[ $inner_class ]['row-gap']    = $gap;
			$selectors[ $inner_class ]['column-gap'] = $gap;

			if ( '' !== $cbw_d && null !== $cbw_d ) {
				$selectors[ $inner_class ]['max-width'] = WCB_Block_Helper::get_css_value( $cbw_d );
			}
			if ( '' !== $cbw_t && null !== $cbw_t && $cbw_t !== $cbw_d ) {
				$t_selectors[ $inner_class ]['max-width'] = WCB_Block_Helper::get_css_value( $cbw_t );
			}
			if ( '' !== $cbw_m && null !== $cbw_m && $cbw_m !== $cbw_t ) {
				$m_selectors[ $inner_class ]['max-width'] = WCB_Block_Helper::get_css_value( $cbw_m );
			}
		}
	}
}

// =====================================================================
// 3. BACKGROUND & OVERLAY (Color, Gradient, Image, Overlay)
// =====================================================================
if ( ! empty( $attr['styles_background'] ) && is_array( $attr['styles_background'] ) ) {
	$bg = $attr['styles_background'];
	$bg_type = $bg['bgType'] ?? 'color';

	if ( 'color' === $bg_type && ! empty( $bg['color'] ) ) {
		$selectors[ $wrap_class ]['background-color'] = $bg['color'];
	} elseif ( 'gradient' === $bg_type && ! empty( $bg['gradient'] ) ) {
		$selectors[ $wrap_class ]['background-image'] = $bg['gradient'];
	} elseif ( 'image' === $bg_type ) {
		$img_data = $bg['imageData'] ?? array();
		$img_d    = is_array( $img_data ) ? ( $img_data['Desktop']['mediaUrl'] ?? '' ) : '';
		$img_t    = is_array( $img_data ) ? ( $img_data['Tablet']['mediaUrl'] ?? $img_d ) : $img_d;
		$img_m    = is_array( $img_data ) ? ( $img_data['Mobile']['mediaUrl'] ?? $img_t ) : $img_t;

		if ( ! empty( $img_d ) ) {
			$selectors[ $wrap_class ]['background-image'] = 'url(' . esc_url( $img_d ) . ')';
		}
		if ( ! empty( $img_t ) && $img_t !== $img_d ) {
			$t_selectors[ $wrap_class ]['background-image'] = 'url(' . esc_url( $img_t ) . ')';
		}
		if ( ! empty( $img_m ) && $img_m !== $img_t ) {
			$m_selectors[ $wrap_class ]['background-image'] = 'url(' . esc_url( $img_m ) . ')';
		}

		if ( ! empty( $bg['bgImageRepeat'] ) ) {
			$apply_responsive_prop( $wrap_class, 'background-repeat', $bg['bgImageRepeat'] );
		}
		if ( ! empty( $bg['bgImageAttachment'] ) ) {
			$apply_responsive_prop( $wrap_class, 'background-attachment', $bg['bgImageAttachment'] );
		}
		if ( ! empty( $bg['bgImageSize'] ) ) {
			$apply_responsive_prop( $wrap_class, 'background-size', $bg['bgImageSize'] );
		}
		if ( ! empty( $bg['focalPoint'] ) && is_array( $bg['focalPoint'] ) ) {
			$fp = $bg['focalPoint'];
			$get_pos = function ( $point ) {
				if ( ! is_array( $point ) ) {
					return '';
				}
				$x = isset( $point['x'] ) ? ( (float) $point['x'] * 100 ) . '%' : '50%';
				$y = isset( $point['y'] ) ? ( (float) $point['y'] * 100 ) . '%' : '50%';
				return $x . ' ' . $y;
			};

			$pos_d = $get_pos( $fp['Desktop'] ?? array() );
			$pos_t = $get_pos( $fp['Tablet'] ?? ( $fp['Desktop'] ?? array() ) );
			$pos_m = $get_pos( $fp['Mobile'] ?? ( $fp['Tablet'] ?? ( $fp['Desktop'] ?? array() ) ) );

			if ( '' !== $pos_d ) {
				$selectors[ $wrap_class ]['background-position'] = $pos_d;
			}
			if ( '' !== $pos_t && $pos_t !== $pos_d ) {
				$t_selectors[ $wrap_class ]['background-position'] = $pos_t;
			}
			if ( '' !== $pos_m && $pos_m !== $pos_t ) {
				$m_selectors[ $wrap_class ]['background-position'] = $pos_m;
			}
		}
	}

	// Overlay (.wcb-OverlayBackgroundByBgControl)
	$overlay_type = $bg['overlayType'] ?? 'none';
	if ( 'color' === $overlay_type && ! empty( $bg['overlayColor'] ) ) {
		$selectors[ $overlay_class ] = array(
			'background-color' => $bg['overlayColor'],
			'position'         => 'absolute',
			'inset'            => '0',
			'z-index'          => '0',
		);
	} elseif ( 'gradient' === $overlay_type && ! empty( $bg['overlayGradient'] ) ) {
		$selectors[ $overlay_class ] = array(
			'background-image' => $bg['overlayGradient'],
			'position'         => 'absolute',
			'inset'            => '0',
			'z-index'          => '0',
		);
	}
}

// =====================================================================
// 4. BORDER & RADIUS (Wrap)
// =====================================================================
if ( ! empty( $attr['styles_border'] ) ) {
	$apply_border_styles( $wrap_class, $attr['styles_border'] );
}

// =====================================================================
// 5. BOX SHADOW (Normal + Hover)
// =====================================================================
if ( ! empty( $attr['styles_boxShadow'] ) && is_array( $attr['styles_boxShadow'] ) ) {
	$bs = $attr['styles_boxShadow'];
	if ( ! empty( $bs['Normal'] ) ) {
		$normal_shadow = $build_shadow_value( $bs['Normal'] );
		if ( '' !== $normal_shadow ) {
			$selectors[ $wrap_class ]['box-shadow'] = $normal_shadow;
		}
	}
	if ( ! empty( $bs['Hover'] ) ) {
		$hover_shadow = $build_shadow_value( $bs['Hover'] );
		if ( '' !== $hover_shadow ) {
			$selectors[ $wrap_class . ':hover' ]['box-shadow'] = $hover_shadow;
		}
	}
}

// =====================================================================
// 6. DIMENSIONS (Margin & Padding on Wrap)
// =====================================================================
if ( ! empty( $attr['styles_dimensions'] ) && is_array( $attr['styles_dimensions'] ) ) {
	$dim = $attr['styles_dimensions'];
	if ( ! empty( $dim['padding'] ) ) {
		$apply_dimension_box( $wrap_class, 'padding', $dim['padding'] );
	}
	if ( ! empty( $dim['margin'] ) ) {
		$apply_dimension_box( $wrap_class, 'margin', $dim['margin'] );
	}
}

// =====================================================================
// 7. FLEX PROPERTIES & GAP (on Inner Container)
// =====================================================================
$gfp      = $attr['general_flexProperties'] ?? array();
$has_flex = ! empty( $gfp ) && is_array( $gfp );
$has_gap  = ! empty( $attr['styles_dimensions'] ) && is_array( $attr['styles_dimensions'] ) && ( ! empty( $attr['styles_dimensions']['colunmGap'] ) || ! empty( $attr['styles_dimensions']['rowGap'] ) );

if ( $has_flex || $has_gap ) {
	$selectors[ $inner_class ]['display'] = 'flex !important';

	$flex_props = array(
		'flexDirection'  => 'flex-direction',
		'alignItems'     => 'align-items',
		'justifyContent' => 'justify-content',
		'flexWrap'       => 'flex-wrap',
	);

	foreach ( $flex_props as $attr_key => $css_prop ) {
		$value = $gfp[ $attr_key ] ?? null;
		if ( ! empty( $value ) && is_array( $value ) ) {
			$d_val = $value['Desktop'] ?? null;
			$t_val = $value['Tablet'] ?? $d_val;
			$m_val = $value['Mobile'] ?? $t_val;

			if ( null !== $d_val && '' !== $d_val ) {
				$selectors[ $inner_class ][ $css_prop ] = $d_val;
			}
			if ( null !== $t_val && '' !== $t_val && $t_val !== $d_val ) {
				$t_selectors[ $inner_class ][ $css_prop ] = $t_val;
			}
			if ( null !== $m_val && '' !== $m_val && $m_val !== $t_val ) {
				$m_selectors[ $inner_class ][ $css_prop ] = $m_val;
			}
		} elseif ( ! empty( $value ) && is_string( $value ) ) {
			$selectors[ $inner_class ][ $css_prop ] = $value;
		}
	}

	// Responsive Column Gap.
	if ( ! empty( $attr['styles_dimensions']['colunmGap'] ) ) {
		$cg_val = $attr['styles_dimensions']['colunmGap'];
		$cg_d   = is_array( $cg_val ) ? ( $cg_val['Desktop'] ?? '' ) : $cg_val;
		$cg_t   = is_array( $cg_val ) ? ( $cg_val['Tablet'] ?? $cg_d ) : $cg_val;
		$cg_m   = is_array( $cg_val ) ? ( $cg_val['Mobile'] ?? $cg_t ) : $cg_val;

		if ( '' !== $cg_d && null !== $cg_d ) {
			$selectors[ $inner_class ]['column-gap'] = WCB_Block_Helper::get_css_value( $cg_d );
		}
		if ( '' !== $cg_t && null !== $cg_t && $cg_t !== $cg_d ) {
			$t_selectors[ $inner_class ]['column-gap'] = WCB_Block_Helper::get_css_value( $cg_t );
		}
		if ( '' !== $cg_m && null !== $cg_m && $cg_m !== $cg_t ) {
			$m_selectors[ $inner_class ]['column-gap'] = WCB_Block_Helper::get_css_value( $cg_m );
		}
	}

	// Responsive Row Gap.
	if ( ! empty( $attr['styles_dimensions']['rowGap'] ) ) {
		$rg_val = $attr['styles_dimensions']['rowGap'];
		$rg_d   = is_array( $rg_val ) ? ( $rg_val['Desktop'] ?? '' ) : $rg_val;
		$rg_t   = is_array( $rg_val ) ? ( $rg_val['Tablet'] ?? $rg_d ) : $rg_val;
		$rg_m   = is_array( $rg_val ) ? ( $rg_val['Mobile'] ?? $rg_t ) : $rg_val;

		if ( '' !== $rg_d && null !== $rg_d ) {
			$selectors[ $inner_class ]['row-gap'] = WCB_Block_Helper::get_css_value( $rg_d );
		}
		if ( '' !== $rg_t && null !== $rg_t && $rg_t !== $rg_d ) {
			$t_selectors[ $inner_class ]['row-gap'] = WCB_Block_Helper::get_css_value( $rg_t );
		}
		if ( '' !== $rg_m && null !== $rg_m && $rg_m !== $rg_t ) {
			$m_selectors[ $inner_class ]['row-gap'] = WCB_Block_Helper::get_css_value( $rg_m );
		}
	}
}

// =====================================================================
// 8. ADVANCE (responsive condition + z-index + motion effect)
// =====================================================================
$selectors = array_merge( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_class ) );

// ---------------------------------------------------------------------

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );


