<?php
/**
 * Frontend CSS for Button Block.
 *
 * Mirrors src/block-button/GlobalCss.tsx so every style rendered by the
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
$wrap_sel = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$btn_sel  = $wrap_sel . ' .wcb-button__main';
$txt_sel  = $wrap_sel . ' .wcb-button__text';
$icon_sel = $wrap_sel . ' .wcb-button__icon';

// ---------------------------------------------------------------------
// Helpers (local closures to avoid global symbol collisions).
// ---------------------------------------------------------------------

/**
 * Tailwind shadow preset value. Mirrors getShadowStyleValueFromTwPreset.
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
 * Supports both custom values and Tailwind presets.
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
// 1. THEME INHERITANCE + GLOBAL DEFAULTS
// Mirrors finalIsInheritFromTheme logic in GlobalCss.tsx.
//
// Global buttonTheme values are used as per-property FALLBACKS for unset
// block attributes — but ONLY when the dashboard setting
// "Button - Inherit From Theme" (buttonInheritFromTheme) is ENABLED.
// When that setting is off, buttons use purely their own attributes.
// =====================================================================

$plugin_options = get_option( 'boostify_blocks_settings_options', array() );

// Per-block toggle "Inherit From Theme" (Content panel).
// Priority mirrors GlobalCss.tsx: attr (when defined) > dashboard setting.
$general_content = is_array( $attr['general_content'] ?? null ) ? $attr['general_content'] : array();
$is_inherit_attr = $general_content['isInheritFromTheme'] ?? null;
if ( is_string( $is_inherit_attr ) ) {
	// Defensive: normalize 'true'/'false'/... strings; unknown → null.
	$is_inherit_attr = filter_var( $is_inherit_attr, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE );
}
$inherit_global   = isset( $plugin_options['buttonInheritFromTheme'] ) && 'true' === $plugin_options['buttonInheritFromTheme'];
$final_is_inherit = null === $is_inherit_attr ? $inherit_global : (bool) $is_inherit_attr;

$layout_global = function_exists( 'boostify_blocks_get_layout_global_settings' )
	? boostify_blocks_get_layout_global_settings()
	: array();

$theme_defaults = array(
	'backgroundColor'      => '#0284c7',
	'backgroundColorHover' => '#3a3a3a',
	'textColor'            => '#ffffff',
	'textColorHover'       => '#ffffff',
	'borderRadius'         => '50px',
);

$plugin_theme = is_array( $plugin_options['buttonTheme'] ?? null ) ? $plugin_options['buttonTheme'] : array();
$layout_theme = is_array( $layout_global['buttonTheme'] ?? null ) ? $layout_global['buttonTheme'] : array();

// Inherit mode — JS reads themeLayoutGlobal.buttonTheme directly.
$theme_inherit = array_merge( $theme_defaults, $plugin_theme, $layout_theme );

// Fallback mode (not inheriting) — JS buttonTheme chain:
// window.boostify_blocks_global_variables > layout global > hardcoded defaults.
$theme_fallback = array_merge( $theme_defaults, $layout_theme, $plugin_theme );

$txt_color      = '';
$txt_hover_color = '';
$icon_color      = '';
$icon_hover_color = '';

if ( $final_is_inherit ) {
	$theme = $theme_inherit;

	$selectors[ $btn_sel ]['background-color'] = $theme['backgroundColor'];
	if ( '' !== $theme['borderRadius'] ) {
		$selectors[ $btn_sel ]['border-radius'] = $theme['borderRadius'];
	}
	$selectors[ $btn_sel . ':hover' ]['background-color'] = $theme['backgroundColorHover'];

	$txt_color       = $theme['textColor'];
	$txt_hover_color = $theme['textColorHover'];
	$icon_color      = $theme['textColor'];
	$icon_hover_color = $theme['textColorHover'];
} else {
	// ==============================================================
	// 2. BACKGROUND COLOR & GRADIENT (normal + hover)
	// Falls back to global buttonTheme colors when unset.
	// ==============================================================
	
	$selectors[ $btn_sel ]['background-color'] = $theme['backgroundColor'];

	$sbg = $attr['style_background'] ?? array();

	if ( ! empty( $sbg['normal'] ) && is_array( $sbg['normal'] ) ) {
		$selectors[ $btn_sel ] = array_merge(
			isset( $selectors[ $btn_sel ] ) ? $selectors[ $btn_sel ] : array(),
			WCB_Block_Helper::get_background_css( $sbg['normal'] )
		);
	}
	if ( ! empty( $sbg['hover'] ) && is_array( $sbg['hover'] ) ) {
		$selectors[ $btn_sel . ':hover' ] = array_merge(
			isset( $selectors[ $btn_sel . ':hover' ] ) ? $selectors[ $btn_sel . ':hover' ] : array(),
			WCB_Block_Helper::get_background_css( $sbg['hover'] )
		);
	}

	// Global fallback (only when "Button - Inherit From Theme" setting is ON):
	// no explicit color AND no gradient on this state.
	if ( $inherit_global ) {
		if ( empty( $selectors[ $btn_sel ]['background-color'] ) && empty( $selectors[ $btn_sel ]['background'] ) ) {
			if ( ! empty( $theme_fallback['backgroundColor'] ) ) {
				$selectors[ $btn_sel ]['background-color'] = $theme_fallback['backgroundColor'];
			}
		}
		$hover_state_sel = $btn_sel . ':hover';
		if (
			empty( $selectors[ $hover_state_sel ]['background-color'] ) &&
			empty( $selectors[ $hover_state_sel ]['background'] )
		) {
			if ( ! empty( $theme_fallback['backgroundColorHover'] ) ) {
				$selectors[ $hover_state_sel ]['background-color'] = $theme_fallback['backgroundColorHover'];
			}
		}
	}

	// ==============================================================
	// 3. BORDER (main settings + hover color)
	// ==============================================================
	$sbd = $attr['style_border'] ?? array();
	$main = is_array( $sbd ) ? ( $sbd['mainSettings'] ?? null ) : null;

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
						$selectors[ $btn_sel ][ 'border-' . $side ] = $w . ' ' . $st . ' ' . $c;
					}
				}
			}
		} else {
			$color = $main['color'] ?? '';
			$style = $main['style'] ?? 'solid';
			$width = $main['width'] ?? '1px';
			if ( '' !== $color ) {
				$selectors[ $btn_sel ]['border'] = $width . ' ' . $style . ' ' . $color;
			}
		}

		if ( ! empty( $sbd['hoverColor'] ) ) {
			$selectors[ $btn_sel . ':hover' ]['border-color'] = $sbd['hoverColor'];
		}
	}

	// Global fallback (only when "Button - Inherit From Theme" setting is ON):
	// text/icon colors default to theme text colors.
	if ( $inherit_global ) {
		$txt_color       = '' !== ( $attr['style_text']['color'] ?? '' ) ? $attr['style_text']['color'] : $theme_fallback['textColor'];
		$txt_hover_color = '' !== ( $attr['style_text']['hoverColor'] ?? '' ) ? $attr['style_text']['hoverColor'] : $theme_fallback['textColorHover'];
		$icon_color      = '' !== ( $attr['style_icon']['color'] ?? '' ) ? $attr['style_icon']['color'] : $theme_fallback['textColor'];
		$icon_hover_color = '' !== ( $attr['style_icon']['hoverColor'] ?? '' ) ? $attr['style_icon']['hoverColor'] : $theme_fallback['textColorHover'];
	} else {
		$txt_color       = $attr['style_text']['color'] ?? '';
		$txt_hover_color = $attr['style_text']['hoverColor'] ?? '';
		$icon_color      = $attr['style_icon']['color'] ?? '';
		$icon_hover_color = $attr['style_icon']['hoverColor'] ?? '';
	}
}

// Text & icon colors (+ hover).
if ( '' !== $txt_color ) {
	$selectors[ $txt_sel ]['color'] = $txt_color;
}
if ( '' !== $icon_color ) {
	$selectors[ $icon_sel ]['color'] = $icon_color;
}
// Mirrors ".wcb-button__main:hover { .wcb-button__text {...} }" in GlobalCss.
if ( '' !== $txt_hover_color ) {
	$selectors[ $btn_sel . ':hover .wcb-button__text' ]['color'] = $txt_hover_color;
}
if ( '' !== $icon_hover_color ) {
	$selectors[ $btn_sel . ':hover .wcb-button__icon' ]['color'] = $icon_hover_color;
}

// =====================================================================
// 4. BOX SHADOW (Normal + Hover, incl. Tailwind presets)
// =====================================================================
$sbs = $attr['style_boxshadow'] ?? array();

$shadow_normal = $build_shadow_value( $sbs['Normal'] ?? array() );
if ( '' !== $shadow_normal ) {
	$selectors[ $btn_sel ]['box-shadow'] = $shadow_normal;
}

$shadow_hover = $build_shadow_value( $sbs['Hover'] ?? array() );
if ( '' !== $shadow_hover ) {
	$selectors[ $btn_sel . ':hover' ]['box-shadow'] = $shadow_hover;
}

// =====================================================================
// 5. DIMENSION (padding + margin responsive + colGap responsive)
// =====================================================================
$dim = $attr['style_dimension'] ?? array();

if ( ! empty( $dim ) && is_array( $dim ) ) {
	foreach ( array( 'padding', 'margin' ) as $spacing_prop ) {
		if ( empty( $dim[ $spacing_prop ] ) || ! is_array( $dim[ $spacing_prop ] ) ) {
			continue;
		}
		$spacing  = $dim[ $spacing_prop ];
		$d_values = $spacing['Desktop'] ?? null;
		$t_values = $spacing['Tablet'] ?? $d_values;
		$m_values = $spacing['Mobile'] ?? $t_values;

		foreach ( array( 'top', 'right', 'bottom', 'left' ) as $side_key ) {
			$d_side = is_array( $d_values ) ? ( $d_values[ $side_key ] ?? '' ) : '';
			$t_side = is_array( $t_values ) ? ( $t_values[ $side_key ] ?? '' ) : '';
			$m_side = is_array( $m_values ) ? ( $m_values[ $side_key ] ?? '' ) : '';

			// Only output sides that actually have a value (matches emotion,
			// which drops empty declarations and keeps base padding intact).
			if ( '' !== $d_side ) {
				$selectors[ $btn_sel ][ $spacing_prop . '-' . $side_key ] = $d_side;
			}
			if ( '' !== $t_side && $t_side !== $d_side ) {
				$t_selectors[ $btn_sel ][ $spacing_prop . '-' . $side_key ] = $t_side;
			}
			if ( '' !== $m_side && $m_side !== $t_side ) {
				$m_selectors[ $btn_sel ][ $spacing_prop . '-' . $side_key ] = $m_side;
			}
		}
	}

	// Gap between text & icon (colGap) — responsive.
	if ( ! empty( $dim['colGap'] ) ) {
		$gap    = $dim['colGap'];
		$d_gap  = is_array( $gap ) ? ( $gap['Desktop'] ?? '' ) : $gap;
		$t_gap  = is_array( $gap ) ? ( $gap['Tablet'] ?? $d_gap ) : $gap;
		$m_gap  = is_array( $gap ) ? ( $gap['Mobile'] ?? $t_gap ) : $gap;

		if ( '' !== $d_gap ) {
			$selectors[ $btn_sel ]['gap'] = WCB_Block_Helper::get_css_value( $d_gap );
		}
		if ( '' !== $t_gap && $t_gap !== $d_gap ) {
			$t_selectors[ $btn_sel ]['gap'] = WCB_Block_Helper::get_css_value( $t_gap );
		}
		if ( '' !== $m_gap && $m_gap !== $t_gap ) {
			$m_selectors[ $btn_sel ]['gap'] = WCB_Block_Helper::get_css_value( $m_gap );
		}
	}
}

// =====================================================================
// 6. TEXT TYPOGRAPHY (responsive font-size / line-height / letter-spacing)
// =====================================================================
$typo = $attr['style_text']['typography'] ?? array();

if ( ! empty( $typo ) && is_array( $typo ) ) {
	// Non-responsive properties.
	if ( ! empty( $typo['fontFamily'] ) ) {
		$selectors[ $txt_sel ]['font-family'] = $typo['fontFamily'];
	}
	if ( ! empty( $typo['appearance']['style'] ) && is_array( $typo['appearance']['style'] ) ) {
		$s = $typo['appearance']['style'];
		if ( ! empty( $s['fontWeight'] ) ) {
			$selectors[ $txt_sel ]['font-weight'] = $s['fontWeight'];
		}
		if ( ! empty( $s['fontStyle'] ) ) {
			$selectors[ $txt_sel ]['font-style'] = $s['fontStyle'];
		}
	}
	if ( ! empty( $typo['textDecoration'] ) && 'undefined' !== $typo['textDecoration'] ) {
		$selectors[ $txt_sel ]['text-decoration'] = $typo['textDecoration'];
	}
	if ( ! empty( $typo['textTransform'] ) && 'undefined' !== $typo['textTransform'] ) {
		$selectors[ $txt_sel ]['text-transform'] = $typo['textTransform'];
	}

	// Responsive scalar properties: [ property => attrKey, unit ].
	foreach ( array(
		'fontSizes'      => array( 'property' => 'font-size', 'unit' => 'px' ),
		'lineHeight'     => array( 'property' => 'line-height', 'unit' => '' ),
		'letterSpacing'  => array( 'property' => 'letter-spacing', 'unit' => 'px' ),
	) as $typo_key => $typo_config ) {
		if ( empty( $typo[ $typo_key ] ) ) {
			continue;
		}
		$value   = $typo[ $typo_key ];
		$d_value = is_array( $value ) ? ( $value['Desktop'] ?? '' ) : $value;
		$t_value = is_array( $value ) ? ( $value['Tablet'] ?? $d_value ) : $value;
		$m_value = is_array( $value ) ? ( $value['Mobile'] ?? $t_value ) : $value;

		if ( '' !== $d_value && null !== $d_value ) {
			$selectors[ $txt_sel ][ $typo_config['property'] ] = WCB_Block_Helper::get_css_value( $d_value, $typo_config['unit'] );
		}
		if ( '' !== $t_value && null !== $t_value && $t_value !== $d_value ) {
			$t_selectors[ $txt_sel ][ $typo_config['property'] ] = WCB_Block_Helper::get_css_value( $t_value, $typo_config['unit'] );
		}
		if ( '' !== $m_value && null !== $m_value && $m_value !== $t_value ) {
			$m_selectors[ $txt_sel ][ $typo_config['property'] ] = WCB_Block_Helper::get_css_value( $m_value, $typo_config['unit'] );
		}
	}
}

// =====================================================================
// 7. ICON SIZE (responsive font-size + width + height on icon/:before/svg)
// =====================================================================
if ( ! empty( $attr['style_icon']['size'] ) ) {
	$size    = $attr['style_icon']['size'];
	$d_size  = is_array( $size ) ? ( $size['Desktop'] ?? '' ) : $size;
	$t_size  = is_array( $size ) ? ( $size['Tablet'] ?? $d_size ) : $size;
	$m_size  = is_array( $size ) ? ( $size['Mobile'] ?? $t_size ) : $size;

	$icon_multi_sel = $icon_sel . ', ' . $icon_sel . ':before, ' . $icon_sel . ' svg';

	if ( '' !== $d_size ) {
		$selectors[ $icon_multi_sel ]['font-size'] = WCB_Block_Helper::get_css_value( $d_size );
		$selectors[ $icon_multi_sel ]['height']    = WCB_Block_Helper::get_css_value( $d_size );
		$selectors[ $icon_multi_sel ]['width']     = WCB_Block_Helper::get_css_value( $d_size );
	}
	if ( '' !== $t_size && $t_size !== $d_size ) {
		$t_selectors[ $icon_multi_sel ]['font-size'] = WCB_Block_Helper::get_css_value( $t_size );
		$t_selectors[ $icon_multi_sel ]['height']    = WCB_Block_Helper::get_css_value( $t_size );
		$t_selectors[ $icon_multi_sel ]['width']     = WCB_Block_Helper::get_css_value( $t_size );
	}
	if ( '' !== $m_size && $m_size !== $t_size ) {
		$m_selectors[ $icon_multi_sel ]['font-size'] = WCB_Block_Helper::get_css_value( $m_size );
		$m_selectors[ $icon_multi_sel ]['height']    = WCB_Block_Helper::get_css_value( $m_size );
		$m_selectors[ $icon_multi_sel ]['width']     = WCB_Block_Helper::get_css_value( $m_size );
	}
}

// =====================================================================
// 8. BORDER RADIUS (responsive, 4 corners) — skipped in theme-inherit mode
// Mirrors getBorderRadiusStyles in TypeScript.
// Global fallback: when no radius is set on the block ("", "0"), use the
// global buttonTheme.borderRadius as default.
// =====================================================================
$radius = ( ! $final_is_inherit && is_array( $attr['style_border'] ?? null ) ) ? ( $attr['style_border']['radius'] ?? null ) : null;

/**
 * A radius value counts as "set" only when it is a real value
 * (not "", "0", "0px", 0 — those are the control defaults).
 */
$is_meaningful_radius = function ( $value ) use ( &$is_meaningful_radius ) {
	if ( is_array( $value ) ) {
		foreach ( array( 'topLeft', 'topRight', 'bottomRight', 'bottomLeft' ) as $corner_key ) {
			if ( $is_meaningful_radius( $value[ $corner_key ] ?? null ) ) {
				return true;
			}
		}
		return false;
	}
	if ( null === $value ) {
		return false;
	}
	$v = trim( (string) $value );
	if ( '' === $v || 'undefined' === $v || 'null' === $v ) {
		return false;
	}
	return 0.0 !== (float) $v;
};

$has_radius_value = false;
if ( ! empty( $radius ) ) {
	foreach ( array( 'Desktop', 'Tablet', 'Mobile' ) as $radius_bp ) {
		$bp_value = is_array( $radius ) ? ( $radius[ $radius_bp ] ?? null ) : $radius;
		if ( $is_meaningful_radius( $bp_value ) ) {
			$has_radius_value = true;
			break;
		}
	}
}

if ( $inherit_global && ! $has_radius_value && '' !== ( $theme_fallback['borderRadius'] ?? '' ) && '0' !== (string) $theme_fallback['borderRadius'] ) {
	$selectors[ $btn_sel ]['border-radius'] = $theme_fallback['borderRadius'];
}

if ( $has_radius_value ) {
	$normalize_corners = function ( $radius_value ) {
		if ( is_string( $radius_value ) ) {
			return array(
				'topLeft'     => $radius_value,
				'topRight'    => $radius_value,
				'bottomRight' => $radius_value,
				'bottomLeft'  => $radius_value,
			);
		}
		if ( is_array( $radius_value ) ) {
			return array(
				'topLeft'     => $radius_value['topLeft'] ?? '',
				'topRight'    => $radius_value['topRight'] ?? '',
				'bottomRight' => $radius_value['bottomRight'] ?? '',
				'bottomLeft'  => $radius_value['bottomLeft'] ?? '',
			);
		}
		return array(
			'topLeft'     => '',
			'topRight'    => '',
			'bottomRight' => '',
			'bottomLeft'  => '',
		);
	};

	$d_radius = is_array( $radius ) ? ( $radius['Desktop'] ?? '' ) : $radius;
	$t_radius = is_array( $radius ) ? ( $radius['Tablet'] ?? $d_radius ) : $radius;
	$m_radius = is_array( $radius ) ? ( $radius['Mobile'] ?? $t_radius ) : $radius;

	$d_corners = $normalize_corners( $d_radius );
	$t_corners = $normalize_corners( $t_radius );
	$m_corners = $normalize_corners( $m_radius );

	$corner_props = array(
		'topLeft'     => 'border-top-left-radius',
		'topRight'    => 'border-top-right-radius',
		'bottomRight' => 'border-bottom-right-radius',
		'bottomLeft'  => 'border-bottom-left-radius',
	);

	foreach ( $corner_props as $corner_key => $css_prop ) {
		$d_corner = $d_corners[ $corner_key ];
		$t_corner = $t_corners[ $corner_key ];
		$m_corner = $m_corners[ $corner_key ];

		if ( '' !== $d_corner ) {
			$selectors[ $btn_sel ][ $css_prop ] = $d_corner;
		}
		if ( '' !== $t_corner && $t_corner !== $d_corner ) {
			$t_selectors[ $btn_sel ][ $css_prop ] = $t_corner;
		}
		if ( '' !== $m_corner && $m_corner !== $t_corner ) {
			$m_selectors[ $btn_sel ][ $css_prop ] = $m_corner;
		}
	}
}

// =====================================================================
// 9. ADVANCE (responsive condition + z-index)
// =====================================================================
$selectors = array_merge( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

// ---------------------------------------------------------------------

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );
