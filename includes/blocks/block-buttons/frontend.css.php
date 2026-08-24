<?php
/**
 * Frontend CSS for Buttons Block.
 *
 * IMPORTANT: this block mirrors src/block-buttons/GlobalCss.tsx, which uses a
 * MOBILE-FIRST cascade (@media min-width). The shared asset helper wraps the
 * "tablet"/"mobile" buckets in max-width queries (desktop-first), so this file
 * assembles its own min-width media queries and returns everything inside the
 * "desktop" bucket — the helper then outputs it verbatim.
 *
 * Emotion-style nested rules (e.g. ">*" inside a block) are flattened into
 * plain descendant selectors for valid static CSS.
 *
 * @package Boostify_Blocks
 */

/**
 * @var mixed[] $attr Block attributes.
 * @var string $unique_id Block unique ID.
 */

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
 * Fill a responsive attr upward (mirrors getValueFromAttrsResponsives):
 * Tablet ?? Desktop, Mobile ?? Tablet.
 */
$responsive_fill = function ( $value ) {
	$value = is_array( $value ) ? $value : array();
	$d     = array_key_exists( 'Desktop', $value ) ? $value['Desktop'] : null;
	$t     = $value['Tablet'] ?? $d;
	$m     = $value['Mobile'] ?? $t;
	return array(
		'Desktop' => $d,
		'Tablet'  => $t,
		'Mobile'  => $m,
	);
};

/**
 * Optimize responsive values (mirrors checkResponsiveValueForOptimizeCSS):
 * all-equal -> only Mobile survives; Tablet == Mobile -> Tablet nulled;
 * Desktop == Tablet -> Desktop nulled.
 */
$responsive_optimize = function ( $values ) {
	$d = $values['Desktop'];
	$t = $values['Tablet'];
	$m = $values['Mobile'];

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

/** Renders one declaration or '' when value is null/''. */
$decl = function ( $prop, $value, $important = false ) {
	if ( null === $value || '' === $value ) {
		return '';
	}
	return $prop . ':' . $value . ( $important ? ' !important' : '' ) . ';';
};

/** Appends "@media (...) {rules}" only when rules are non-empty. */
$media = function ( $query, $rules ) {
	return '' !== trim( $rules ) ? '@media ' . $query . '{' . $rules . '}' : '';
};

/** Appends "sel{rules}" only when rules are non-empty. */
$rule = function ( $sel, $rules ) {
	return '' !== trim( $rules ) ? $sel . '{' . $rules . '}' : '';
};

$css = '';

// =====================================================================
// ADVANCE — wrap base (mirrors getAdvanveDivWrapStyles base rule).
// =====================================================================
$css .= $rule( $wrap, 'visibility:visible;' );

// =====================================================================
// INNER FLEX LAYOUT (mobile-first: base + min-width queries).
// Mirrors flexDirection / justifyContent / alignItems logic. The nested
// ">*" rule from GlobalCss.tsx is flattened to "$inner >*".
// =====================================================================
$alignment = $responsive_fill( $general['alignment'] ?? array() );
$align_m   = $alignment['Mobile'];
$align_t   = $alignment['Tablet'];
$align_d   = $alignment['Desktop'];

$child_decls = function ( $align_value ) {
	return 'stretch' === $align_value ? 'flex:1;display:flex;' : 'display:block;';
};

$flex_parts = function ( $is_stacked, $align_value ) use ( $decl, $child_decls ) {
	$out  = $decl( 'flex-direction', $is_stacked ? 'column' : 'row' );
	$out .= $is_stacked ? '' : $decl( 'justify-content', $align_value );
	$out .= $decl( 'align-items', $is_stacked ? $align_value : 'center' );
	return array(
		'decls' => $out,
		'child' => $child_decls( $align_value ),
	);
};

// Base (mobile).
$is_stacked_m = 'none' !== $stack;
$base         = $flex_parts( $is_stacked_m, $align_m );

// Tablet.
$is_stacked_t = 'none' !== $stack && 'Mobile' !== $stack;
$tablet       = $flex_parts( $is_stacked_t, $align_t );

// Desktop.
$is_stacked_d = 'Desktop' === $stack;
$desktop      = $flex_parts( $is_stacked_d, $align_d );

// =====================================================================
// GAP (responsive, optimized — mirrors getStyleObjectFromResponsiveAttr).
// =====================================================================
$gap_vals = $responsive_optimize( $responsive_fill( $general['gap'] ?? array() ) );

$inner_rules  = $rule( $inner, $base['decls'] . $decl( 'gap', $gap_vals['Mobile'] ) );
$inner_rules .= $inner . ' >*{' . $base['child'] . '}';
$inner_rules .= $media(
	'(min-width:' . $media_tablet . 'px)',
	$rule( $inner, $tablet['decls'] . $decl( 'gap', $gap_vals['Tablet'] ) ) .
	$rule( $inner . ' >*', $tablet['child'] )
);
$inner_rules .= $media(
	'(min-width:' . $media_desktop . 'px)',
	$rule( $inner, $desktop['decls'] . $decl( 'gap', $gap_vals['Desktop'] ) ) .
	$rule( $inner . ' >*', $desktop['child'] )
);
$css         .= $inner_rules;

// =====================================================================
// PADDING & MARGIN on wrap (body-prefixed, mirrors getPaddingMarginStyles,
// including its original !important flags).
// =====================================================================
$dim = is_array( $attr['style_dimension'] ?? null ) ? $attr['style_dimension'] : array();

foreach ( array( 'padding', 'margin' ) as $spacing_prop ) {
	$values    = $responsive_fill( $dim[ $spacing_prop ] ?? array() );
	$per_level = array(
		'Mobile'  => '',
		'Tablet'  => '',
		'Desktop' => '',
	);

	foreach ( array( 'top', 'right', 'bottom', 'left' ) as $side ) {
		$side_vals = $responsive_optimize(
			array(
				'Desktop' => $values['Desktop'][ $side ] ?? null,
				'Tablet'  => $values['Tablet'][ $side ] ?? null,
				'Mobile'  => $values['Mobile'][ $side ] ?? null,
			)
		);

		// Original flags: padding-* always !important; margin-top/bottom
		// !important; margin-right/left plain (kept for parity).
		$important = 'padding' === $spacing_prop || in_array( $side, array( 'top', 'bottom' ), true );

		foreach ( array_keys( $per_level ) as $level ) {
			$per_level[ $level ] .= $decl( $spacing_prop . '-' . $side, $side_vals[ $level ], $important );
		}
	}

	$css .= $rule( 'body ' . $wrap, $per_level['Mobile'] );
	$css .= $media( '(min-width:' . $media_tablet . 'px)', $rule( 'body ' . $wrap, $per_level['Tablet'] ) );
	$css .= $media( '(min-width:' . $media_desktop . 'px)', $rule( 'body ' . $wrap, $per_level['Desktop'] ) );
}

// =====================================================================
// TYPOGRAPHY — targets "#uid .wcb-button__text" exactly like GlobalCss.tsx
// (INNER_BUTTON_TEXT uses an id selector there; mirrored for parity).
// =====================================================================
$typo = is_array( $attr['style_text']['typography'] ?? null ) ? $attr['style_text']['typography'] : array();

if ( ! empty( $typo ) ) {
	$text_sel = '#' . $unique_id . ' .wcb-button__text';

	$base_decls  = '';
	$base_decls .= $decl( 'font-family', $typo['fontFamily'] ?? null );
	$base_decls .= $decl( 'font-weight', $typo['appearance']['style']['fontWeight'] ?? null );
	$base_decls .= $decl( 'font-style', $typo['appearance']['style']['fontStyle'] ?? null );
	$base_decls .= $decl( 'text-decoration', $typo['textDecoration'] ?? null );
	$base_decls .= $decl( 'text-transform', $typo['textTransform'] ?? null );

	$fill_falsy = function ( $map ) {
		$map = is_array( $map ) ? $map : array();
		$d   = $map['Desktop'] ?? null;
		$t   = ( $map['Tablet'] ?: null ) ?: $d;
		$m   = ( $map['Mobile'] ?: null ) ?: $t;
		return array(
			'Desktop' => $d,
			'Tablet'  => $t,
			'Mobile'  => $m,
		);
	};

	$responsive_group = function ( $css_prop, $attr_key ) use ( $typo, $responsive_optimize, $fill_falsy, $decl ) {
		$vals = $responsive_optimize( $fill_falsy( $typo[ $attr_key ] ?? array() ) );
		return array(
			'Mobile'  => $decl( $css_prop, $vals['Mobile'] ),
			'Tablet'  => $decl( $css_prop, $vals['Tablet'] ),
			'Desktop' => $decl( $css_prop, $vals['Desktop'] ),
		);
	};

	$font_size      = $responsive_group( 'font-size', 'fontSizes' );
	$line_height    = $responsive_group( 'line-height', 'lineHeight' );
	$letter_spacing = $responsive_group( 'letter-spacing', 'letterSpacing' );

	$combine = function ( $level ) use ( $font_size, $line_height, $letter_spacing ) {
		return $font_size[ $level ] . $line_height[ $level ] . $letter_spacing[ $level ];
	};

	$css .= $rule( $text_sel, $base_decls . $combine( 'Mobile' ) );
	$css .= $media( '(min-width:' . $media_tablet . 'px)', $rule( $text_sel, $combine( 'Tablet' ) ) );
	$css .= $media( '(min-width:' . $media_desktop . 'px)', $rule( $text_sel, $combine( 'Desktop' ) ) );
}

// =====================================================================
// ADVANCE — responsive condition / z-index (mirrors getAdvanveDivWrapStyles,
// min-width ranges kept identical, incl. its exact max-width boundaries).
// Frontend note: hidden devices get display:none (the editor renders a
// preview overlay instead; meaningless outside the editor).
// =====================================================================
$rc = is_array( $attr['advance_responsiveCondition'] ?? null ) ? $attr['advance_responsiveCondition'] : array();
$zi = $responsive_fill( is_array( $attr['advance_zIndex'] ?? null ) ? $attr['advance_zIndex'] : array() );
$zi = $responsive_optimize(
	array(
		'Desktop' => $zi['Desktop'],
		'Tablet'  => $zi['Tablet'],
		'Mobile'  => $zi['Mobile'],
	)
);

$hiddendecl = function ( $is_hidden ) {
	if ( '' === $is_hidden ) {
		return '';
	}
	return $is_hidden ? 'display:none !important;' : 'display:block;';
};

$adv_des = $decl( 'z-index', $zi['Desktop'] ) . $hiddendecl( $rc['isHiddenOnDesktop'] ?? '' );
$adv_tab = $decl( 'z-index', $zi['Tablet'] ) . $hiddendecl( $rc['isHiddenOnTablet'] ?? '' );
$adv_mob = $decl( 'z-index', $zi['Mobile'] ) . $hiddendecl( $rc['isHiddenOnMobile'] ?? '' );

$css .= $media( '(min-width:' . $media_desktop . 'px)', $rule( $wrap, $adv_des ) );
$css .= $media( '(min-width:' . $media_tablet . 'px) and (max-width:' . $media_desktop . 'px)', $rule( $wrap, $adv_tab ) );
$css .= $media( '(max-width:' . $media_tablet . 'px)', $rule( $wrap, $adv_mob ) );

// Return as-is in the "desktop" bucket: get_frontend_css_from_file appends
// this string verbatim (tablet/mobile left empty so no max-width wrapping).
return array(
	'desktop' => $css,
	'tablet'  => '',
	'mobile'  => '',
);
