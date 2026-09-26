<?php
/**
 * Frontend CSS for Icon List Item (Child) Block.
 *
 * Mirrors src/block-icon-child/GlobalCssChild.tsx.
 *
 * OPTIMIZATION:
 * Child blocks inherit their default styling (icon size, icon colors, title typography,
 * text colors, layout alignment) directly from the parent Icon List block.
 * To avoid CSS bloat and unnecessary override rules, this file ONLY generates CSS
 * for properties that are explicitly customized on this specific child item ($raw_attrs).
 * If a property is not customized, it is left to inherit from the parent block.
 *
 * @package Boostify_Blocks
 */

/**
 * @var mixed[]      $attr      Merged block attributes.
 * @var string       $unique_id Block unique ID.
 * @var mixed[]|null $raw_attrs Raw block attributes before merging with defaults.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$raw = ( isset( $raw_attrs ) && is_array( $raw_attrs ) ) ? $raw_attrs : $attr;

$selectors   = array();
$t_selectors = array();
$m_selectors = array();

$wrap_sel        = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"][data-block-type="icon-item"]';
$icon_wrap_sel   = $wrap_sel . ' .wcb-icon-list__icon-wrap';
$icon_sel        = $wrap_sel . ' .wcb-icon-list__icon';
$icon_full_sel   = $wrap_sel . ' .wcb-icon-full';
$heading_sel     = $wrap_sel . ' .wcb-icon-list__heading';
$designation_sel = $wrap_sel . ' .wcb-icon-list__designation';

// ---------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------

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
					if ( 'none' !== $st && ( '' !== $c || '' !== $st ) ) {
						$selectors[ $sel ][ 'border-' . $side ] = trim( $w . ' ' . $st . ' ' . $c );
					}
				}
			}
		} else {
			$w  = WCB_Block_Helper::get_css_value( $main['width'] ?? '1px' );
			$st = $main['style'] ?? 'none';
			$c  = $main['color'] ?? '';
			if ( 'none' !== $st && ( '' !== $c || '' !== $st ) ) {
				$selectors[ $sel ]['border'] = trim( $w . ' ' . $st . ' ' . $c );
			}
		}

		if ( ! empty( $border_data['hoverColor'] ) ) {
			$selectors[ $sel . ':hover' ]['border-color'] = $border_data['hoverColor'];
		}
	}

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
// 1. CHILD WRAP DIV & ITEM SPECIFIC STYLES
// Only output if customized on this child block.
// =====================================================================
$raw_gi  = $raw['general_icon'] ?? array();
$raw_sdm = $raw['style_dimension'] ?? array();

if ( isset( $raw_gi['verticalAlignment'] ) && 'middle' === $raw_gi['verticalAlignment'] ) {
	$selectors[ $wrap_sel . '.wcb-icon-list__wrap .wcb-icon-list__icon-wrap, ' . $wrap_sel . '.wcb-icon-list__wrap .wcb-icon-list__content' ]['align-self'] = 'center';
}

if ( isset( $raw_gi['iconPosition'] ) ) {
	$icon_pos = $raw_gi['iconPosition'];
	$selectors[ $wrap_sel . '.wcb-icon-list__wrap .wcb-icon-list__icon-wrap' ]['order'] = ( 'leftOfTitle' === $icon_pos ) ? '0' : '2';

	if ( 'leftOfTitle' === $icon_pos || 'rightOfTitle' === $icon_pos ) {
		$selectors[ $wrap_sel . '.wcb-icon-list__wrap .wcb-icon-list__content-title-wrap' ]['display'] = 'flex';
	}
}

if ( ! empty( $raw_sdm['padding'] ) ) {
	$apply_dimension_box( $wrap_sel, 'padding', $raw_sdm['padding'] );
}
if ( ! empty( $raw_sdm['margin'] ) ) {
	$apply_dimension_box( $wrap_sel, 'margin', $raw_sdm['margin'] );
}

// =====================================================================
// 2. CHILD ICON STYLES
// Only output if customized on this child block.
// =====================================================================
$raw_si = $raw['style_Icon'] ?? null;
if ( ! empty( $raw_si ) && is_array( $raw_si ) ) {
	if ( ! empty( $raw_si['dimensions']['margin'] ) ) {
		$apply_dimension_box( $icon_wrap_sel, 'margin', $raw_si['dimensions']['margin'] );
	}
	if ( ! empty( $raw_si['dimensions']['padding'] ) ) {
		$apply_dimension_box( $icon_sel, 'padding', $raw_si['dimensions']['padding'] );
	}
	if ( ! empty( $raw_si['border'] ) ) {
		$apply_border_styles( $icon_sel, $raw_si['border'] );
	}
	if ( ! empty( $raw_si['iconSize'] ) ) {
		$apply_responsive_prop( $icon_full_sel, 'width', $raw_si['iconSize'] );
		$apply_responsive_prop( $icon_full_sel, 'font-size', $raw_si['iconSize'] );
	}
	if ( ! empty( $raw_si['color'] ) ) {
		$selectors[ $icon_full_sel ]['color'] = $raw_si['color'];
	}
	if ( ! empty( $raw_si['hoverColor'] ) ) {
		$selectors[ $icon_full_sel . ':hover' ]['color'] = $raw_si['hoverColor'];
	}
}

// =====================================================================
// 3. CHILD TITLE / HEADING
// Only output if customized on this child block.
// =====================================================================
$raw_st = $raw['style_title'] ?? null;
if ( ! empty( $raw_st ) && is_array( $raw_st ) ) {
	if ( ! empty( $raw_st['typography'] ) ) {
		$apply_typography( $heading_sel, $raw_st['typography'] );
	}
	if ( ! empty( $raw_st['marginBottom'] ) ) {
		$apply_responsive_prop( $heading_sel, 'margin-bottom', $raw_st['marginBottom'] );
	}
	if ( ! empty( $raw_st['textColor'] ) ) {
		$selectors[ $heading_sel ]['color'] = $raw_st['textColor'];
	}
	if ( ! empty( $raw_st['textColorHover'] ) ) {
		$selectors[ $heading_sel . ':hover' ]['color'] = $raw_st['textColorHover'];
	}
}

// =====================================================================
// 4. CHILD PREFIX / DESIGNATION
// Only output if customized on this child block.
// =====================================================================
$raw_sd = $raw['style_desination'] ?? null;
if ( ! empty( $raw_sd ) && is_array( $raw_sd ) ) {
	if ( ! empty( $raw_sd['typography'] ) ) {
		$apply_typography( $designation_sel, $raw_sd['typography'] );
	}
	if ( ! empty( $raw_sd['marginBottom'] ) ) {
		$apply_responsive_prop( $designation_sel, 'margin-bottom', $raw_sd['marginBottom'] );
	}
	if ( ! empty( $raw_sd['textColor'] ) ) {
		$selectors[ $designation_sel ]['color'] = $raw_sd['textColor'];
	}
}

// =====================================================================
// 5. ADVANCE
// =====================================================================
$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_advance_css( $raw, $wrap_sel ) );

// ---------------------------------------------------------------------

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );
