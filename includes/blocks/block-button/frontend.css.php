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

$css = array(
	'desktop' => array(),
	'tablet'  => array(),
	'mobile'  => array(),
);

// Wrap selector — identical to WRAP_CLASSNAME in GlobalCss.tsx.
$wrap_sel = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$btn_sel  = $wrap_sel . ' .wcb-button__main';
$txt_sel  = $wrap_sel . ' .wcb-button__text';
$icon_sel = $wrap_sel . ' .wcb-button__icon';

// =====================================================================
// 1. THEME INHERITANCE + GLOBAL DEFAULTS
// Mirrors finalIsInheritFromTheme logic in GlobalCss.tsx.
// =====================================================================
$plugin_options = get_option( 'boostify_blocks_settings_options', array() );

// Per-block toggle "Inherit From Theme" (Content panel).
$general_content = is_array( $attr['general_content'] ?? null ) ? $attr['general_content'] : array();
$is_inherit_attr = $general_content['isInheritFromTheme'] ?? null;
if ( is_string( $is_inherit_attr ) ) {
	$is_inherit_attr = filter_var( $is_inherit_attr, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE );
}
$inherit_global   = isset( $plugin_options['buttonInheritFromTheme'] ) && 'true' === $plugin_options['buttonInheritFromTheme'];
$final_is_inherit = null === $is_inherit_attr ? $inherit_global : (bool) $is_inherit_attr;

$layout_global = function_exists( 'boostify_blocks_get_layout_global_settings' )
	? boostify_blocks_get_layout_global_settings()
	: array();

$theme_defaults = array(
	'backgroundColor'      => '#0073aa',
	'backgroundColorHover' => '#3a3a3a',
	'textColor'            => '#ffffff',
	'textColorHover'       => '#ffffff',
	'borderRadius'         => '50px',
);

$plugin_theme = is_array( $plugin_options['buttonTheme'] ?? null ) ? $plugin_options['buttonTheme'] : array();
$layout_theme = is_array( $layout_global['buttonTheme'] ?? null ) ? $layout_global['buttonTheme'] : array();

$theme_inherit = array_merge( $theme_defaults, $plugin_theme, $layout_theme );

$txt_color        = '';
$txt_hover_color  = '';
$icon_color       = '';
$icon_hover_color = '';

if ( $final_is_inherit ) {
	$theme = $theme_inherit;

	WCB_Block_Helper::add_responsive_css( $css, $btn_sel, 'background-color', $theme['backgroundColor'] );
	if ( '' !== $theme['borderRadius'] ) {
		WCB_Block_Helper::add_responsive_css( $css, $btn_sel, 'border-radius', $theme['borderRadius'] );
	}
	WCB_Block_Helper::add_responsive_css( $css, $btn_sel . ':hover', 'background-color', $theme['backgroundColorHover'] );

	$txt_color        = $theme['textColor'];
	$txt_hover_color  = $theme['textColorHover'];
	$icon_color       = $theme['textColor'];
	$icon_hover_color = $theme['textColorHover'];
} else {
	// 2. BACKGROUND COLOR & GRADIENT (normal + hover)
	$sbg = $attr['style_background'] ?? array();

	if ( ! empty( $sbg['normal'] ) ) {
		WCB_Block_Helper::add_background_css( $css, $btn_sel, $sbg['normal'] );
	}
	if ( ! empty( $sbg['hover'] ) ) {
		WCB_Block_Helper::add_background_css( $css, $btn_sel . ':hover', $sbg['hover'] );
	}

	// 3. BORDER & RADIUS (main settings + hover color + responsive radius)
	$sbd = $attr['style_border'] ?? array();
	if ( ! empty( $sbd ) ) {
		WCB_Block_Helper::add_border_css( $css, $btn_sel, $sbd, true, true, true );
	}

	$txt_color        = $attr['style_text']['color'] ?? '';
	$txt_hover_color  = $attr['style_text']['hoverColor'] ?? '';
	$icon_color       = $attr['style_icon']['color'] ?? '';
	$icon_hover_color = $attr['style_icon']['hoverColor'] ?? '';
}

// Text & icon colors (+ hover).
if ( '' !== $txt_color ) {
	WCB_Block_Helper::add_responsive_css( $css, $txt_sel, 'color', $txt_color );
}
if ( '' !== $icon_color ) {
	WCB_Block_Helper::add_responsive_css( $css, $icon_sel, 'color', $icon_color );
}
if ( '' !== $txt_hover_color ) {
	WCB_Block_Helper::add_responsive_css( $css, $btn_sel . ':hover .wcb-button__text', 'color', $txt_hover_color );
}
if ( '' !== $icon_hover_color ) {
	WCB_Block_Helper::add_responsive_css( $css, $btn_sel . ':hover .wcb-button__icon', 'color', $icon_hover_color );
}

// =====================================================================
// 4. BOX SHADOW (Normal + Hover, incl. Tailwind presets)
// =====================================================================
$sbs = $attr['style_boxshadow'] ?? array();
$build_button_shadow = function ( $shadow ) {
	if ( empty( $shadow ) || ! is_array( $shadow ) ) {
		return '';
	}
	$color  = $shadow['color'] ?? '';
	$preset = $shadow['presetClass'] ?? '';
	if ( ! empty( $preset ) ) {
		return WCB_Block_Helper::get_tw_shadow_preset_value( $preset, $color );
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

$shadow_normal = $build_button_shadow( $sbs['Normal'] ?? array() );
if ( '' !== $shadow_normal ) {
	WCB_Block_Helper::add_responsive_css( $css, $btn_sel, 'box-shadow', $shadow_normal );
}

$shadow_hover = $build_button_shadow( $sbs['Hover'] ?? array() );
if ( '' !== $shadow_hover ) {
	WCB_Block_Helper::add_responsive_css( $css, $btn_sel . ':hover', 'box-shadow', $shadow_hover );
}

// =====================================================================
// 5. DIMENSION (padding + margin responsive + colGap responsive)
// =====================================================================
$dim = $attr['style_dimension'] ?? array();
if ( ! empty( $dim['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $btn_sel, 'padding', $dim['padding'] );
}
if ( ! empty( $dim['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $dim['margin'] );
}
if ( ! empty( $dim['colGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $btn_sel, 'gap', $dim['colGap'] );
}

// =====================================================================
// 6. TEXT TYPOGRAPHY (responsive font-size / line-height / letter-spacing)
// =====================================================================
$typo = $attr['style_text']['typography'] ?? array();
if ( ! empty( $typo ) ) {
	WCB_Block_Helper::add_typography_css( $css, $txt_sel, $typo );
}

// =====================================================================
// 7. ICON SIZE (responsive font-size + width + height on icon/:before/svg)
// =====================================================================
if ( ! empty( $attr['style_icon']['size'] ) ) {
	$size           = $attr['style_icon']['size'];
	$icon_multi_sel = $icon_sel . ', ' . $icon_sel . ':before, ' . $icon_sel . ' svg';
	WCB_Block_Helper::add_responsive_css( $css, $icon_multi_sel, 'font-size', $size, 'px' );
	WCB_Block_Helper::add_responsive_css( $css, $icon_multi_sel, 'height', $size, 'px' );
	WCB_Block_Helper::add_responsive_css( $css, $icon_multi_sel, 'width', $size, 'px' );
}

// =====================================================================
// 8. ADVANCE (responsive condition + z-index)
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
