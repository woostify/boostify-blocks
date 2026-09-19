<?php
/**
 * Frontend CSS for Map Block.
 *
 * Mirrors src/block-map/GlobalCss.tsx so every style rendered by the
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

$wrap_sel  = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$inner_sel = $wrap_sel . ' .wcb-map__inner';

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
 * Apply border and border-radius with iframe-specific !important support.
 */
$apply_border_styles = function ( $sel, $border_data, $is_with_iframe = false ) use ( &$selectors, &$t_selectors, &$m_selectors ) {
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
		$important = $is_with_iframe ? ' !important' : '';

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
				$selectors[ $sel ][ $css_prop ] = WCB_Block_Helper::get_css_value( $d_v ) . $important;
			}
			if ( '' !== $t_v && null !== $t_v && $t_v !== $d_v ) {
				$t_selectors[ $sel ][ $css_prop ] = WCB_Block_Helper::get_css_value( $t_v ) . $important;
			}
			if ( '' !== $m_v && null !== $m_v && $m_v !== $t_v ) {
				$m_selectors[ $sel ][ $css_prop ] = WCB_Block_Helper::get_css_value( $m_v ) . $important;
			}
		}
	}
};

// =====================================================================
// 1. WRAP (flex: 1)
// =====================================================================
$selectors[ $wrap_sel ]['flex'] = '1';

// =====================================================================
// 2. BORDER & RADIUS (with iframe important)
// =====================================================================
if ( ! empty( $attr['style_border'] ) ) {
	$apply_border_styles( $wrap_sel, $attr['style_border'], true );
}

// =====================================================================
// 3. HEIGHT (Inner map container)
// =====================================================================
if ( ! empty( $attr['general_general']['height'] ) ) {
	$apply_responsive_prop( $inner_sel, 'height', $attr['general_general']['height'] );
}

// =====================================================================
// 4. ADVANCE (responsive condition + motion effect + z-index)
// =====================================================================
$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

// ---------------------------------------------------------------------
$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

