<?php
/**
 * Frontend CSS for Heading Block.
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

$wrap_class   = '.' . $unique_id;
$h_sel        = $wrap_class . ' .wcb-heading__heading';
$sh_sel       = $wrap_class . ' .wcb-heading__subHeading';
$sep_sel      = $wrap_class . ' .wcb-heading__separator';
$mark_sel     = $wrap_class . ' mark';

// --- Text Alignment ---
if ( ! empty( $attr['general_content']['textAlignment'] ) ) {
	$text_align = $attr['general_content']['textAlignment'];
	$desktop    = is_array( $text_align ) ? ( $text_align['Desktop'] ?? '' ) : $text_align;
	$tablet     = is_array( $text_align ) ? ( $text_align['Tablet'] ?? $desktop ) : $text_align;
	$mobile     = is_array( $text_align ) ? ( $text_align['Mobile'] ?? $tablet ) : $text_align;

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

// --- Heading ---
if ( ! empty( $attr['styles_heading']['typography'] ) ) {
	$typo_css = WCB_Block_Helper::get_typography_css( $attr['styles_heading']['typography'] );
	if ( ! empty( $typo_css ) ) {
		$selectors[ $h_sel ] = isset( $selectors[ $h_sel ] ) ? array_merge( $selectors[ $h_sel ], $typo_css ) : $typo_css;
	}
}
if ( ! empty( $attr['styles_heading']['textColor'] ) ) {
	$text_color = $attr['styles_heading']['textColor'];
	if ( is_array( $text_color ) ) {
		if ( 'gradient' === ( $text_color['colorType'] ?? 'color' ) && ! empty( $text_color['gradient'] ) ) {
			$selectors[ $h_sel ]['background']              = $text_color['gradient'];
			$selectors[ $h_sel ]['-webkit-background-clip']  = 'text';
			$selectors[ $h_sel ]['-webkit-text-fill-color']  = 'transparent';
			$selectors[ $h_sel ]['background-clip']          = 'text';
		} elseif ( ! empty( $text_color['color'] ) ) {
			$selectors[ $h_sel ]['color'] = $text_color['color'];
		}
	} else {
		$selectors[ $h_sel ]['color'] = $text_color;
	}
}

// --- SubHeading ---
if ( ! empty( $attr['styles_subHeading']['typography'] ) ) {
	$typo_css = WCB_Block_Helper::get_typography_css( $attr['styles_subHeading']['typography'] );
	if ( ! empty( $typo_css ) ) {
		$selectors[ $sh_sel ] = isset( $selectors[ $sh_sel ] ) ? array_merge( $selectors[ $sh_sel ], $typo_css ) : $typo_css;
	}
}
if ( ! empty( $attr['styles_subHeading']['textColor'] ) ) {
	$sh_color = $attr['styles_subHeading']['textColor'];
	if ( is_array( $sh_color ) ) {
		if ( ! empty( $sh_color['color'] ) ) {
			$selectors[ $sh_sel ]['color'] = $sh_color['color'];
		}
	} else {
		$selectors[ $sh_sel ]['color'] = $sh_color;
	}
}

// --- Separator ---
if ( ! empty( $attr['styles_separator']['width'] ) ) {
	$sep_width = $attr['styles_separator']['width'];
	$desktop   = is_array( $sep_width ) ? ( $sep_width['Desktop'] ?? '' ) : $sep_width;
	$tablet    = is_array( $sep_width ) ? ( $sep_width['Tablet'] ?? $desktop ) : $sep_width;
	$mobile    = is_array( $sep_width ) ? ( $sep_width['Mobile'] ?? $tablet ) : $sep_width;

	if ( '' !== $desktop ) {
		$selectors[ $sep_sel ]['width'] = WCB_Block_Helper::get_css_value( $desktop );
	}
	if ( '' !== $tablet && $tablet !== $desktop ) {
		$t_selectors[ $sep_sel ]['width'] = WCB_Block_Helper::get_css_value( $tablet );
	}
	if ( '' !== $mobile && $mobile !== $tablet ) {
		$m_selectors[ $sep_sel ]['width'] = WCB_Block_Helper::get_css_value( $mobile );
	}
}
if ( ! empty( $attr['styles_separator']['border']['color'] ) ) {
	$b = $attr['styles_separator']['border'];
	$selectors[ $sep_sel ]['border-top'] = ( $b['width'] ?? '1px' ) . ' ' . ( $b['style'] ?? 'solid' ) . ' ' . $b['color'];
}

// --- Highlight (mark) ---
if ( ! empty( $attr['styles_highlight'] ) ) {
	$shi = $attr['styles_highlight'];
	if ( ! empty( $shi['textColor'] ) ) {
		$selectors[ $mark_sel ]['color'] = $shi['textColor'];
	}
	if ( ! empty( $shi['bgColor'] ) ) {
		$selectors[ $mark_sel ]['background-color'] = $shi['bgColor'];
	}
	if ( ! empty( $shi['padding'] ) ) {
		$padding = $shi['padding'];
		if ( is_array( $padding ) && ! empty( $padding['Desktop'] ) ) {
			$p = $padding['Desktop'];
			$selectors[ $mark_sel ]['padding-top']    = ( $p['top'] ?? '0' ) ?: '0';
			$selectors[ $mark_sel ]['padding-right']  = ( $p['right'] ?? '0' ) ?: '0';
			$selectors[ $mark_sel ]['padding-bottom'] = ( $p['bottom'] ?? '0' ) ?: '0';
			$selectors[ $mark_sel ]['padding-left']   = ( $p['left'] ?? '0' ) ?: '0';
		}
	}
}

// --- Background ---
if ( ! empty( $attr['styles_background']['background'] ) ) {
	$bg_css = WCB_Block_Helper::get_background_css( $attr['styles_background']['background'] );
	if ( ! empty( $bg_css ) ) {
		$selectors[ $wrap_class ] = array_merge(
			isset( $selectors[ $wrap_class ] ) ? $selectors[ $wrap_class ] : array(),
			$bg_css
		);
	}
}

// --- Border ---
if ( ! empty( $attr['styles_border'] ) ) {
	$border_css = WCB_Block_Helper::get_border_css_array( $attr['styles_border'] );
	if ( ! empty( $border_css ) ) {
		$selectors[ $wrap_class ] = array_merge(
			isset( $selectors[ $wrap_class ] ) ? $selectors[ $wrap_class ] : array(),
			$border_css
		);
	}
}

// --- Dimensions ---
if ( ! empty( $attr['styles_dimensions']['dimension'] ) ) {
	$dim = $attr['styles_dimensions']['dimension'];
	if ( ! empty( $dim['padding'] ) ) {
		$padding = $dim['padding'];
		if ( is_array( $padding ) && ! empty( $padding['Desktop'] ) ) {
			$p = $padding['Desktop'];
			$selectors[ $wrap_class ]['padding-top']    = ( $p['top'] ?? '' ) ?: '0';
			$selectors[ $wrap_class ]['padding-right']  = ( $p['right'] ?? '' ) ?: '0';
			$selectors[ $wrap_class ]['padding-bottom'] = ( $p['bottom'] ?? '' ) ?: '0';
			$selectors[ $wrap_class ]['padding-left']   = ( $p['left'] ?? '' ) ?: '0';
		}
	}
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
}

// --- Advance ---
$selectors = array_merge( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_class ) );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, $wrap_class );
