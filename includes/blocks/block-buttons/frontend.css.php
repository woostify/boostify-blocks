<?php
/**
 * Frontend CSS for Buttons Block.
 *
 * Mirrors src/block-buttons/GlobalCss.tsx, which uses a mobile-first cascade
 * (@media min-width). Returns the complete media-query assembly inside the
 * 'desktop' bucket so get_frontend_css_from_file outputs it verbatim without
 * desktop-first max-width wrapping.
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

// Responsive breakpoints (same source as DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES).
$settings_opts = get_option( 'boostify_blocks_settings_options', array() );
$media_tablet  = isset( $settings_opts['media_tablet'] ) ? (int) floatval( $settings_opts['media_tablet'] ) : 768;
$media_desktop = isset( $settings_opts['media_desktop'] ) ? (int) floatval( $settings_opts['media_desktop'] ) : 1024;
if ( $media_tablet <= 0 ) {
	$media_tablet = 768;
}
if ( $media_desktop <= $media_tablet ) {
	$media_desktop = $media_tablet + 1;
}

$wrap  = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$inner = $wrap . ' .wcb-buttons__inner';

$general = is_array( $attr['general_general'] ?? null ) ? $attr['general_general'] : array();
$stack   = $general['stackOrientation'] ?? 'none';

/**
 * Optimize mobile-first responsive values (mirrors checkResponsiveValueForOptimizeCSS).
 * All-equal -> only Mobile survives; Tablet == Mobile -> Tablet nulled; Desktop == Tablet -> Desktop nulled.
 */
$optimize_responsive = static function( $d, $t, $m ) {
	if ( $m === $t && $t === $d ) {
		return array(
			'Desktop' => null,
			'Tablet'  => null,
			'Mobile'  => $m,
		);
	}
	if ( $t === $m ) {
		$t = null;
	}
	if ( $d === $t ) {
		$d = null;
	}
	return array(
		'Desktop' => $d,
		'Tablet'  => $t,
		'Mobile'  => $m,
	);
};

$css = '';

// =====================================================================
// 1. WRAPPER BASE
// =====================================================================
$css .= $wrap . '{visibility:visible;}';

// =====================================================================
// 2. INNER FLEX LAYOUT (mobile-first: base + min-width queries)
// =====================================================================
$alignment = WCB_Block_Helper::get_responsive_value( $general['alignment'] ?? array() );
$align_m   = $alignment['Mobile'];
$align_t   = $alignment['Tablet'];
$align_d   = $alignment['Desktop'];

$build_flex_parts = static function( $is_stacked, $align_val ) {
	$decls = 'flex-direction:' . ( $is_stacked ? 'column' : 'row' ) . ';';
	if ( ! $is_stacked && null !== $align_val && '' !== $align_val ) {
		$decls .= 'justify-content:' . $align_val . ';';
	}
	if ( null !== $align_val && '' !== $align_val || ! $is_stacked ) {
		$decls .= 'align-items:' . ( $is_stacked ? $align_val : 'center' ) . ';';
	}
	$child = 'stretch' === $align_val ? 'flex:1;display:flex;' : 'display:block;';

	return array(
		'decls' => $decls,
		'child' => $child,
	);
};

// Mobile / Base.
$base = $build_flex_parts( 'none' !== $stack, $align_m );

// Tablet.
$tablet = $build_flex_parts( 'none' !== $stack && 'Mobile' !== $stack, $align_t );

// Desktop.
$desktop = $build_flex_parts( 'Desktop' === $stack, $align_d );

// Gap.
$gap_raw  = WCB_Block_Helper::get_responsive_value( $general['gap'] ?? array() );
$gap_vals = $optimize_responsive( $gap_raw['Desktop'], $gap_raw['Tablet'], $gap_raw['Mobile'] );

$gap_m = ( null !== $gap_vals['Mobile'] && '' !== $gap_vals['Mobile'] ) ? 'gap:' . $gap_vals['Mobile'] . ';' : '';
$gap_t = ( null !== $gap_vals['Tablet'] && '' !== $gap_vals['Tablet'] ) ? 'gap:' . $gap_vals['Tablet'] . ';' : '';
$gap_d = ( null !== $gap_vals['Desktop'] && '' !== $gap_vals['Desktop'] ) ? 'gap:' . $gap_vals['Desktop'] . ';' : '';

$css .= $inner . '{' . $base['decls'] . $gap_m . '}' . $inner . ' >*{' . $base['child'] . '}';
$css .= '@media (min-width:' . $media_tablet . 'px){' . $inner . '{' . $tablet['decls'] . $gap_t . '}' . $inner . ' >*{' . $tablet['child'] . '}}';
$css .= '@media (min-width:' . $media_desktop . 'px){' . $inner . '{' . $desktop['decls'] . $gap_d . '}' . $inner . ' >*{' . $desktop['child'] . '}}';

// =====================================================================
// 3. PADDING & MARGIN (body-prefixed, mirrors getPaddingMarginStyles)
// =====================================================================
$dim = is_array( $attr['style_dimension'] ?? null ) ? $attr['style_dimension'] : array();

foreach ( array( 'padding', 'margin' ) as $spacing_prop ) {
	$values    = WCB_Block_Helper::get_responsive_value( $dim[ $spacing_prop ] ?? array() );
	$per_level = array(
		'Mobile'  => '',
		'Tablet'  => '',
		'Desktop' => '',
	);

	foreach ( array( 'top', 'right', 'bottom', 'left' ) as $side ) {
		$side_vals = $optimize_responsive(
			$values['Desktop'][ $side ] ?? null,
			$values['Tablet'][ $side ] ?? null,
			$values['Mobile'][ $side ] ?? null
		);

		$important = 'padding' === $spacing_prop || in_array( $side, array( 'top', 'bottom' ), true ) ? ' !important;' : ';';

		foreach ( array( 'Mobile', 'Tablet', 'Desktop' ) as $lvl ) {
			if ( null !== $side_vals[ $lvl ] && '' !== $side_vals[ $lvl ] ) {
				$per_level[ $lvl ] .= $spacing_prop . '-' . $side . ':' . $side_vals[ $lvl ] . $important;
			}
		}
	}

	if ( '' !== $per_level['Mobile'] ) {
		$css .= 'body ' . $wrap . '{' . $per_level['Mobile'] . '}';
	}
	if ( '' !== $per_level['Tablet'] ) {
		$css .= '@media (min-width:' . $media_tablet . 'px){body ' . $wrap . '{' . $per_level['Tablet'] . '}}';
	}
	if ( '' !== $per_level['Desktop'] ) {
		$css .= '@media (min-width:' . $media_desktop . 'px){body ' . $wrap . '{' . $per_level['Desktop'] . '}}';
	}
}

// =====================================================================
// 4. TYPOGRAPHY (#uid .wcb-button__text)
// =====================================================================
$typo = is_array( $attr['style_text']['typography'] ?? null ) ? $attr['style_text']['typography'] : array();

if ( ! empty( $typo ) ) {
	$text_sel   = '#' . $unique_id . ' .wcb-button__text';
	$base_decls = '';

	if ( ! empty( $typo['fontFamily'] ) ) {
		$base_decls .= 'font-family:' . $typo['fontFamily'] . ';';
	}
	if ( ! empty( $typo['appearance']['style']['fontWeight'] ) ) {
		$base_decls .= 'font-weight:' . $typo['appearance']['style']['fontWeight'] . ';';
	}
	if ( ! empty( $typo['appearance']['style']['fontStyle'] ) ) {
		$base_decls .= 'font-style:' . $typo['appearance']['style']['fontStyle'] . ';';
	}
	if ( ! empty( $typo['textDecoration'] ) ) {
		$base_decls .= 'text-decoration:' . $typo['textDecoration'] . ';';
	}
	if ( ! empty( $typo['textTransform'] ) ) {
		$base_decls .= 'text-transform:' . $typo['textTransform'] . ';';
	}

	$typo_props = array(
		'font-size'      => 'fontSizes',
		'line-height'    => 'lineHeight',
		'letter-spacing' => 'letterSpacing',
	);

	$typo_levels = array(
		'Mobile'  => '',
		'Tablet'  => '',
		'Desktop' => '',
	);

	foreach ( $typo_props as $css_prop => $attr_key ) {
		$raw_map = is_array( $typo[ $attr_key ] ?? null ) ? $typo[ $attr_key ] : array();
		$d       = $raw_map['Desktop'] ?? null;
		$t       = ( ! empty( $raw_map['Tablet'] ) ? $raw_map['Tablet'] : null ) ?: $d;
		$m       = ( ! empty( $raw_map['Mobile'] ) ? $raw_map['Mobile'] : null ) ?: $t;

		$vals = $optimize_responsive( $d, $t, $m );
		foreach ( array( 'Mobile', 'Tablet', 'Desktop' ) as $lvl ) {
			if ( null !== $vals[ $lvl ] && '' !== $vals[ $lvl ] ) {
				$typo_levels[ $lvl ] .= $css_prop . ':' . $vals[ $lvl ] . ';';
			}
		}
	}

	$rule_m = $base_decls . $typo_levels['Mobile'];
	if ( '' !== $rule_m ) {
		$css .= $text_sel . '{' . $rule_m . '}';
	}
	if ( '' !== $typo_levels['Tablet'] ) {
		$css .= '@media (min-width:' . $media_tablet . 'px){' . $text_sel . '{' . $typo_levels['Tablet'] . '}}';
	}
	if ( '' !== $typo_levels['Desktop'] ) {
		$css .= '@media (min-width:' . $media_desktop . 'px){' . $text_sel . '{' . $typo_levels['Desktop'] . '}}';
	}
}

// =====================================================================
// 5. ADVANCE (responsive condition + z-index)
// =====================================================================
$rc     = is_array( $attr['advance_responsiveCondition'] ?? null ) ? $attr['advance_responsiveCondition'] : array();
$zi_raw = WCB_Block_Helper::get_responsive_value( $attr['advance_zIndex'] ?? array() );
$zi     = $optimize_responsive( $zi_raw['Desktop'], $zi_raw['Tablet'], $zi_raw['Mobile'] );

$build_adv = static function( $z_val, $is_hidden ) {
	$out = '';
	if ( null !== $z_val && '' !== $z_val ) {
		$out .= 'z-index:' . $z_val . ';';
	}
	if ( ! empty( $is_hidden ) ) {
		$out .= 'display:none !important;';
	}
	return $out;
};

$adv_des = $build_adv( $zi['Desktop'] ?? null, $rc['isHiddenOnDesktop'] ?? false );
$adv_tab = $build_adv( $zi['Tablet'] ?? null, $rc['isHiddenOnTablet'] ?? false );
$adv_mob = $build_adv( $zi['Mobile'] ?? null, $rc['isHiddenOnMobile'] ?? false );

if ( ! empty( $adv_des ) ) {
	$css .= '@media (min-width:' . ( $media_desktop + 1 ) . 'px){' . $wrap . '{' . $adv_des . '}}';
}
if ( ! empty( $adv_tab ) ) {
	$css .= '@media (min-width:' . $media_tablet . 'px) and (max-width:' . $media_desktop . 'px){' . $wrap . '{' . $adv_tab . '}}';
}
if ( ! empty( $adv_mob ) ) {
	$css .= '@media (max-width:' . ( $media_tablet - 1 ) . 'px){' . $wrap . '{' . $adv_mob . '}}';
}

return array(
	'desktop' => $css,
	'tablet'  => '',
	'mobile'  => '',
);
