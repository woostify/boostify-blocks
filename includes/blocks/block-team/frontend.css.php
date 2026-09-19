<?php
/**
 * Frontend CSS for Team Block.
 *
 * Mirrors src/block-team/GlobalCss.tsx so every style rendered by the
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

$wrap_sel         = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$image_sel        = $wrap_sel . ' .wcb-team__image';
$content_wrap_sel = $wrap_sel . ' .wcb-team__content-wrap';
$heading_sel      = $wrap_sel . ' .wcb-team__heading';
$designation_sel  = $wrap_sel . ' .wcb-team__designation';
$desc_sel         = $wrap_sel . ' .wcb-team__description';
$social_icon_sel  = $wrap_sel . ' .wcb-icon-full';
$social_link_sel  = $wrap_sel . ' .wcb-team__socials-icons > a';

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

	if ( 'line-height' === $prop || 'z-index' === $prop || 'opacity' === $prop || 'text-align' === $prop || 'display' === $prop || 'align-self' === $prop ) {
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
// 1. WRAP (Text alignment + Margin & Padding)
// =====================================================================
$gl = $attr['general_layout'] ?? array();
if ( ! empty( $gl['textAlignment'] ) ) {
	$apply_responsive_prop( $wrap_sel, 'text-align', $gl['textAlignment'] );
}

$sdm = $attr['style_dimension'] ?? array();
if ( ! empty( $sdm['margin'] ) ) {
	$apply_dimension_box( $wrap_sel, 'margin', $sdm['margin'] );
}
if ( ! empty( $sdm['padding'] ) ) {
	$apply_dimension_box( $wrap_sel, 'padding', $sdm['padding'] );
}

// Side-by-side layout (imagePosition: left/right)
$gi = $attr['general_image'] ?? array();
$is_image_beside = ( ! empty( $gi['imagePosition'] ) && in_array( $gi['imagePosition'], array( 'left', 'right' ), true ) );
$has_image       = ( ! empty( $gi['isShowImage'] ) && ! empty( $gi['image']['mediaId'] ) );

if ( $has_image && $is_image_beside ) {
	$stack_on = $gi['stackOn'] ?? 'mobile';

	$selectors[ $wrap_sel ]['display'] = 'flex';

	if ( 'tablet' === $stack_on ) {
		$t_selectors[ $wrap_sel ]['display'] = 'block';
		$m_selectors[ $wrap_sel ]['display'] = 'block';
	} elseif ( 'mobile' === $stack_on ) {
		$t_selectors[ $wrap_sel ]['display'] = 'flex';
		$m_selectors[ $wrap_sel ]['display'] = 'block';
	} elseif ( 'none' === $stack_on ) {
		$t_selectors[ $wrap_sel ]['display'] = 'flex';
		$m_selectors[ $wrap_sel ]['display'] = 'flex';
	}
}

// =====================================================================
// 2. IMAGE (.wcb-team__image)
// =====================================================================
if ( $has_image ) {
	$si = $attr['style_image'] ?? array();

	if ( ! empty( $si['border'] ) ) {
		$apply_border_styles( $image_sel, $si['border'] );
	}

	if ( ! empty( $si['margin'] ) ) {
		$apply_dimension_box( $image_sel, 'margin', $si['margin'] );
	}

	if ( ! empty( $si['imageSize'] ) ) {
		$apply_responsive_prop( $image_sel, 'width', $si['imageSize'] );
	}

	if ( ! empty( $gi['imageAlignSelf'] ) ) {
		$selectors[ $image_sel ]['align-self']        = $gi['imageAlignSelf'];
		$selectors[ $content_wrap_sel ]['align-self'] = $gi['imageAlignSelf'];
	}
}

// =====================================================================
// 3. TITLE (.wcb-team__heading)
// =====================================================================
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

// =====================================================================
// 4. DESIGNATION (.wcb-team__designation)
// =====================================================================
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

// =====================================================================
// 5. DESCRIPTION (.wcb-team__description)
// =====================================================================
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

// =====================================================================
// 6. SOCIALS (.wcb-icon-full, .wcb-team__socials-icons > a)
// =====================================================================
$gs = $attr['general_socials'] ?? array();
if ( ! empty( $gs['enableSocials'] ) ) {
	$ss = $attr['style_socialIcons'] ?? array();

	if ( ! empty( $ss['iconSize'] ) ) {
		$apply_responsive_prop( $social_icon_sel, 'width', $ss['iconSize'] );
		$apply_responsive_prop( $social_icon_sel, 'font-size', $ss['iconSize'] );
	}

	if ( ! empty( $ss['iconSpacing'] ) ) {
		$apply_responsive_prop( $social_link_sel, 'margin-left', $ss['iconSpacing'] );
	}

	if ( ! empty( $ss['color'] ) ) {
		$selectors[ $social_icon_sel ]['color'] = $ss['color'];
	}

	if ( ! empty( $ss['hoverColor'] ) ) {
		$selectors[ $social_icon_sel . ':hover' ]['color'] = $ss['hoverColor'];
	}
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

