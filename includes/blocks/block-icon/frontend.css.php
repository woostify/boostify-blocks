<?php
/**
 * Frontend CSS for Icon Block.
 *
 * @package Boostify_Blocks
 */

/**
 * @var mixed[] $attr Block attributes.
 * @var string $unique_id Block unique ID.
 */

$selectors   = array();
$t_selectors = array();
$m_selectors = array();

$wrap_class    = '.' . $unique_id;
$content_class = $wrap_class . ' .wcb-icon__content';
$icon_class    = $content_class . ' .wcb-icon-full';

// --- Alignment ---
if ( ! empty( $attr['general_icon']['alignment'] ) ) {
	$alignment = $attr['general_icon']['alignment'];
	$desktop   = is_array( $alignment ) ? ( $alignment['Desktop'] ?? '' ) : $alignment;
	$tablet    = is_array( $alignment ) ? ( $alignment['Tablet'] ?? $desktop ) : $alignment;
	$mobile    = is_array( $alignment ) ? ( $alignment['Mobile'] ?? $tablet ) : $alignment;

	if ( '' !== $desktop ) {
		$selectors[ $wrap_class ]['text-align'] = $desktop;
	}
	if ( '' !== $tablet && $tablet !== $desktop ) {
		$t_selectors[ $wrap_class ]['text-align'] = $tablet;
	}
	if ( '' !== $mobile && $mobile !== $tablet ) {
		$m_selectors[ $wrap_class ]['text-align'] = $mobile;
	}
}

// --- Icon color & hover ---
if ( ! empty( $attr['style_icon']['color'] ) ) {
	$selectors[ $icon_class ]['color'] = $attr['style_icon']['color'];
}
if ( ! empty( $attr['style_icon']['hoverColor'] ) ) {
	$selectors[ $content_class . ':hover ' . $icon_class ]['color'] = $attr['style_icon']['hoverColor'];
}

// --- Icon size ---
if ( ! empty( $attr['general_icon']['size'] ) ) {
	$size    = $attr['general_icon']['size'];
	$desktop = is_array( $size ) ? ( $size['Desktop'] ?? '' ) : $size;
	$tablet  = is_array( $size ) ? ( $size['Tablet'] ?? $desktop ) : $size;
	$mobile  = is_array( $size ) ? ( $size['Mobile'] ?? $tablet ) : $size;

	if ( '' !== $desktop ) {
		$selectors[ $wrap_class . ' .wcb-icon-full' ]['width']      = WCB_Block_Helper::get_css_value( $desktop );
		$selectors[ $wrap_class . ' .wcb-icon-full' ]['font-size']  = WCB_Block_Helper::get_css_value( $desktop );
	}
	if ( '' !== $tablet && $tablet !== $desktop ) {
		$t_selectors[ $wrap_class . ' .wcb-icon-full' ]['width']     = WCB_Block_Helper::get_css_value( $tablet );
		$t_selectors[ $wrap_class . ' .wcb-icon-full' ]['font-size'] = WCB_Block_Helper::get_css_value( $tablet );
	}
	if ( '' !== $mobile && $mobile !== $tablet ) {
		$m_selectors[ $wrap_class . ' .wcb-icon-full' ]['width']     = WCB_Block_Helper::get_css_value( $mobile );
		$m_selectors[ $wrap_class . ' .wcb-icon-full' ]['font-size'] = WCB_Block_Helper::get_css_value( $mobile );
	}
}

// --- Background ---
if ( ! empty( $attr['style_background']['normal'] ) && is_array( $attr['style_background']['normal'] ) ) {
	$bg_css = WCB_Block_Helper::get_background_css( $attr['style_background']['normal'] );
	if ( ! empty( $bg_css ) ) {
		$selectors[ $content_class ] = array_merge(
			isset( $selectors[ $content_class ] ) ? $selectors[ $content_class ] : array(),
			$bg_css
		);
	}
}
if ( ! empty( $attr['style_background']['hover'] ) && is_array( $attr['style_background']['hover'] ) ) {
	$bg_css_hover = WCB_Block_Helper::get_background_css( $attr['style_background']['hover'] );
	if ( ! empty( $bg_css_hover ) ) {
		$selectors[ $content_class . ':hover' ] = array_merge(
			isset( $selectors[ $content_class . ':hover' ] ) ? $selectors[ $content_class . ':hover' ] : array(),
			$bg_css_hover
		);
	}
}

// --- Border ---
if ( ! empty( $attr['style_border'] ) ) {
	$border_css = WCB_Block_Helper::get_border_css_array( $attr['style_border'] );
	if ( ! empty( $border_css ) ) {
		$selectors[ $content_class ] = array_merge(
			isset( $selectors[ $content_class ] ) ? $selectors[ $content_class ] : array(),
			$border_css
		);
	}
}

// --- Box shadow ---
if ( ! empty( $attr['style_boxshadow']['Normal']['color'] ) ) {
	$shadow = $attr['style_boxshadow']['Normal'];
	$selectors[ $content_class ]['box-shadow'] = sprintf(
		'%s %s %s %s %s %s',
		WCB_Block_Helper::get_css_value( $shadow['horizontal'] ?? 0 ),
		WCB_Block_Helper::get_css_value( $shadow['vertical'] ?? 0 ),
		WCB_Block_Helper::get_css_value( $shadow['blur'] ?? 0 ),
		WCB_Block_Helper::get_css_value( $shadow['spread'] ?? 0 ),
		$shadow['color'],
		'inset' === ( $shadow['position'] ?? '' ) ? 'inset' : ''
	);
}
if ( ! empty( $attr['style_boxshadow']['Hover']['color'] ) ) {
	$shadow_h = $attr['style_boxshadow']['Hover'];
	$selectors[ $content_class . ':hover' ]['box-shadow'] = sprintf(
		'%s %s %s %s %s %s',
		WCB_Block_Helper::get_css_value( $shadow_h['horizontal'] ?? 0 ),
		WCB_Block_Helper::get_css_value( $shadow_h['vertical'] ?? 0 ),
		WCB_Block_Helper::get_css_value( $shadow_h['blur'] ?? 0 ),
		WCB_Block_Helper::get_css_value( $shadow_h['spread'] ?? 0 ),
		$shadow_h['color'],
		'inset' === ( $shadow_h['position'] ?? '' ) ? 'inset' : ''
	);
}

// --- Dimensions ---
if ( ! empty( $attr['style_dimension'] ) ) {
	$dim = $attr['style_dimension'];

	// Margin on wrap.
	if ( ! empty( $dim['margin'] ) ) {
		$margin = $dim['margin'];
		if ( is_array( $margin ) && ! empty( $margin['Desktop'] ) ) {
			$m = $margin['Desktop'];
			$selectors[ $wrap_class ]['margin-top']    = $m['top'] ?? '';
			$selectors[ $wrap_class ]['margin-right']  = $m['right'] ?? '';
			$selectors[ $wrap_class ]['margin-bottom'] = $m['bottom'] ?? '';
			$selectors[ $wrap_class ]['margin-left']   = $m['left'] ?? '';
		}
	}

	// Padding on content.
	if ( ! empty( $dim['padding'] ) ) {
		$padding = $dim['padding'];
		if ( is_array( $padding ) && ! empty( $padding['Desktop'] ) ) {
			$p = $padding['Desktop'];
			$selectors[ $content_class ]['padding-top']    = ( $p['top'] ?? '' ) ?: '0';
			$selectors[ $content_class ]['padding-right']  = ( $p['right'] ?? '' ) ?: '0';
			$selectors[ $content_class ]['padding-bottom'] = ( $p['bottom'] ?? '' ) ?: '0';
			$selectors[ $content_class ]['padding-left']   = ( $p['left'] ?? '' ) ?: '0';
		}
	}
}

// --- Cursor pointer if link enabled ---
if ( ! empty( $attr['general_icon']['enableLink'] ) ) {
	$selectors[ $content_class ]['cursor'] = 'pointer';
}

// --- Advance ---
$selectors = array_merge( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_class ) );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, $wrap_class );
