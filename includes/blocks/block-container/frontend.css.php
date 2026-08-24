<?php
/**
 * Frontend CSS for Container Block.
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

$wrap_class  = '.' . $unique_id;
$inner_class = $wrap_class . ' .wcb-container__inner';

// --- Parent .wp-block margin reset ---
$selectors[ '.wp-block:has(> .wcb-container__wrap' . $wrap_class . '[data-uniqueid="' . $unique_id . '"])' ] = array(
	'margin-top'    => '0 !important',
	'margin-bottom' => '0 !important',
);

// --- Full/wide alignment ---
$selectors[ '.wp-block[data-align="full"]:has(> .wcb-container__wrap' . $wrap_class . '[data-uniqueid="' . $unique_id . '"])' ] = array(
	$wrap_class => array(
		'margin-left'  => 'auto',
		'margin-right' => 'auto',
	),
);

// --- Container control ---
$gc = $attr['general_container'] ?? array();
$sc = $attr['styles_color'] ?? '';

if ( ! empty( $gc ) ) {
	$global    = self::get_global_settings();
	$width_type     = $gc['containerWidthType'] ?? 'Full Width';
	$content_w_type = $gc['contentWidthType'] ?? 'Boxed';
	$overflow       = $gc['overflow'] ?? '';
	$custom_width   = $gc['customWidth'] ?? array();
	$min_height     = $gc['minHeight'] ?? array();
	$content_box_w  = $gc['contentBoxWidth'] ?? array();

	// --- Base wrap styles ---
	$wrap_styles = '';

	// Global container padding.
	$container_padding = $global['containerPadding'] ?: '10px';
	$wrap_styles .= 'padding: ' . $container_padding . '; ';

	// Color.
	if ( ! empty( $sc ) ) {
		$wrap_styles .= 'color: ' . $sc . '; ';
	}

	// Overflow.
	if ( ! empty( $overflow ) ) {
		$wrap_styles .= 'overflow: ' . $overflow . '; ';
	}

	// Custom Width (mobile value as base).
	if ( 'Custom' === $width_type && ! empty( $custom_width ) && is_array( $custom_width ) ) {
		$mw_desktop = $custom_width['Desktop'] ?? null;
		$mw_tablet  = $custom_width['Tablet'] ?? $mw_desktop;
		$mw_mobile  = $custom_width['Mobile'] ?? $mw_tablet;

		if ( null !== $mw_mobile && '' !== $mw_mobile ) {
			$wrap_styles .= 'max-width: ' . $mw_mobile . ' !important; width: ' . $mw_mobile . '; ';
		}
	}

	// Min Height (mobile value as base).
	if ( ! empty( $min_height ) && is_array( $min_height ) ) {
		$mh_desktop = $min_height['Desktop'] ?? null;
		$mh_tablet  = $min_height['Tablet'] ?? $mh_desktop;
		$mh_mobile  = $min_height['Mobile'] ?? $mh_tablet;

		if ( null !== $mh_mobile && '' !== $mh_mobile ) {
			$wrap_styles .= 'min-height: ' . $mh_mobile . '; ';
		}
	}

	if ( ! empty( trim( $wrap_styles ) ) ) {
		$selectors[ $wrap_class ] = array_merge(
			isset( $selectors[ $wrap_class ] ) ? $selectors[ $wrap_class ] : array(),
			self::parse_css_string( $wrap_styles )
		);
	}

	// --- Responsive max-width ---
	if ( 'Custom' === $width_type && ! empty( $custom_width ) && is_array( $custom_width ) ) {
		$mw_desktop = $custom_width['Desktop'] ?? null;
		$mw_tablet  = $custom_width['Tablet'] ?? $mw_desktop;
		$mw_mobile  = $custom_width['Mobile'] ?? $mw_tablet;

		if ( null !== $mw_tablet && '' !== $mw_tablet && $mw_tablet !== $mw_mobile ) {
			$t_selectors[ $wrap_class ]['max-width'] = $mw_tablet . ' !important';
			$t_selectors[ $wrap_class ]['width']     = $mw_tablet;
		}
		if ( null !== $mw_desktop && '' !== $mw_desktop && $mw_desktop !== $mw_tablet ) {
			$selectors[ $wrap_class ]['max-width'] = $mw_desktop . ' !important';
			$selectors[ $wrap_class ]['width']     = $mw_desktop;
		}
	}

	// --- Responsive min-height ---
	if ( ! empty( $min_height ) && is_array( $min_height ) ) {
		$mh_desktop = $min_height['Desktop'] ?? null;
		$mh_tablet  = $min_height['Tablet'] ?? $mh_desktop;
		$mh_mobile  = $min_height['Mobile'] ?? $mh_tablet;

		if ( null !== $mh_tablet && '' !== $mh_tablet && $mh_tablet !== $mh_mobile ) {
			$t_selectors[ $wrap_class ]['min-height'] = $mh_tablet;
		}
		if ( null !== $mh_desktop && '' !== $mh_desktop && $mh_desktop !== $mh_tablet ) {
			$selectors[ $wrap_class ]['min-height'] = $mh_desktop;
		}
	}

	// --- .alignfull ---
	$selectors[ $wrap_class . '.alignfull' ] = array(
		'margin-left'  => 'calc(-50vw + 50%)',
		'margin-right' => 'calc(-50vw + 50%)',
	);

	// --- Content Box Width (inner container max-width) ---
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

	if ( 'Full Width' === $content_w_type ) {
		$selectors[ $inner_class ]['max-width'] = '100%';
	} elseif ( 'Boxed' === $content_w_type ) {
		if ( ! empty( $content_box_w ) && is_array( $content_box_w ) ) {
			$gap = $global['containerElementsGap'] ?: '10px';

			$cbw_desktop = $content_box_w['Desktop'] ?? '';
			$cbw_tablet  = $content_box_w['Tablet'] ?? $cbw_desktop;
			$cbw_mobile  = $content_box_w['Mobile'] ?? $cbw_tablet;

			$inner_styles = '';
			if ( '' !== $cbw_mobile && null !== $cbw_mobile ) {
				$inner_styles .= 'max-width: ' . $cbw_mobile . '; ';
			}
			$inner_styles .= 'row-gap: ' . $gap . '; column-gap: ' . $gap . '; ';

			if ( ! empty( trim( $inner_styles ) ) ) {
				$selectors[ $inner_class ] = array_merge(
					isset( $selectors[ $inner_class ] ) ? $selectors[ $inner_class ] : array(),
					self::parse_css_string( $inner_styles )
				);
			}

			if ( '' !== $cbw_tablet && null !== $cbw_tablet && $cbw_tablet !== $cbw_mobile ) {
				$t_selectors[ $inner_class ]['max-width'] = $cbw_tablet;
			}
			if ( '' !== $cbw_desktop && null !== $cbw_desktop && $cbw_desktop !== $cbw_tablet ) {
				$selectors[ $inner_class ]['max-width'] = $cbw_desktop;
			}
		}
	}
} elseif ( ! empty( $sc ) ) {
	// Fallback: apply color even without container settings.
	$selectors[ $wrap_class ]['color'] = $sc;
}

// --- Background ---
if ( ! empty( $attr['styles_background'] ) ) {
	$bg_css = self::get_background_css( $attr['styles_background'] );
	if ( ! empty( $bg_css ) ) {
		$selectors[ $wrap_class ] = array_merge(
			isset( $selectors[ $wrap_class ] ) ? $selectors[ $wrap_class ] : array(),
			$bg_css
		);
	}
}

// --- Border ---
if ( ! empty( $attr['styles_border'] ) ) {
	$border_css = self::get_border_css_array( $attr['styles_border'] );
	if ( ! empty( $border_css ) ) {
		$selectors[ $wrap_class ] = array_merge(
			isset( $selectors[ $wrap_class ] ) ? $selectors[ $wrap_class ] : array(),
			$border_css
		);
	}
}

// --- Box shadow ---
if ( ! empty( $attr['styles_boxShadow']['Normal']['color'] ) ) {
	$shadow = $attr['styles_boxShadow']['Normal'];
	$selectors[ $wrap_class ]['box-shadow'] = sprintf(
		'%s %s %s %s %s %s',
		self::get_css_value( $shadow['horizontal'] ?? 0 ),
		self::get_css_value( $shadow['vertical'] ?? 0 ),
		self::get_css_value( $shadow['blur'] ?? 0 ),
		self::get_css_value( $shadow['spread'] ?? 0 ),
		$shadow['color'],
		'inset' === ( $shadow['position'] ?? '' ) ? 'inset' : ''
	);
}
if ( ! empty( $attr['styles_boxShadow']['Hover']['color'] ) ) {
	$shadow_h = $attr['styles_boxShadow']['Hover'];
	$selectors[ $wrap_class . ':hover' ]['box-shadow'] = sprintf(
		'%s %s %s %s %s %s',
		self::get_css_value( $shadow_h['horizontal'] ?? 0 ),
		self::get_css_value( $shadow_h['vertical'] ?? 0 ),
		self::get_css_value( $shadow_h['blur'] ?? 0 ),
		self::get_css_value( $shadow_h['spread'] ?? 0 ),
		$shadow_h['color'],
		'inset' === ( $shadow_h['position'] ?? '' ) ? 'inset' : ''
	);
}

// --- Padding & Margin ---
if ( ! empty( $attr['styles_dimensions'] ) ) {
	$dim = $attr['styles_dimensions'];

	// Padding.
	if ( ! empty( $dim['padding'] ) ) {
		$padding = $dim['padding'];
		if ( is_array( $padding ) ) {
			$p_desktop = $padding['Desktop'] ?? null;
			$p_tablet  = $padding['Tablet'] ?? $p_desktop;
			$p_mobile  = $padding['Mobile'] ?? $p_tablet;

			if ( $p_mobile ) {
				$selectors[ $wrap_class ]['padding-top']    = ( $p_mobile['top'] ?? '' ) ?: '0';
				$selectors[ $wrap_class ]['padding-right']  = ( $p_mobile['right'] ?? '' ) ?: '0';
				$selectors[ $wrap_class ]['padding-bottom'] = ( $p_mobile['bottom'] ?? '' ) ?: '0';
				$selectors[ $wrap_class ]['padding-left']   = ( $p_mobile['left'] ?? '' ) ?: '0';
			}
			if ( $p_tablet && $p_tablet !== $p_mobile ) {
				$t_selectors[ $wrap_class ]['padding-top']    = ( $p_tablet['top'] ?? '' ) ?: '0';
				$t_selectors[ $wrap_class ]['padding-right']  = ( $p_tablet['right'] ?? '' ) ?: '0';
				$t_selectors[ $wrap_class ]['padding-bottom'] = ( $p_tablet['bottom'] ?? '' ) ?: '0';
				$t_selectors[ $wrap_class ]['padding-left']   = ( $p_tablet['left'] ?? '' ) ?: '0';
			}
			if ( $p_desktop && $p_desktop !== $p_tablet ) {
				$selectors[ $wrap_class ]['padding-top']    = ( $p_desktop['top'] ?? '' ) ?: '0';
				$selectors[ $wrap_class ]['padding-right']  = ( $p_desktop['right'] ?? '' ) ?: '0';
				$selectors[ $wrap_class ]['padding-bottom'] = ( $p_desktop['bottom'] ?? '' ) ?: '0';
				$selectors[ $wrap_class ]['padding-left']   = ( $p_desktop['left'] ?? '' ) ?: '0';
			}
		}
	}

	// Margin.
	if ( ! empty( $dim['margin'] ) ) {
		$margin = $dim['margin'];
		if ( is_array( $margin ) ) {
			$m_desktop = $margin['Desktop'] ?? null;
			if ( $m_desktop ) {
				$selectors[ $wrap_class ]['margin-top']    = $m_desktop['top'] ?? '';
				$selectors[ $wrap_class ]['margin-right']  = $m_desktop['right'] ?? '';
				$selectors[ $wrap_class ]['margin-bottom'] = $m_desktop['bottom'] ?? '';
				$selectors[ $wrap_class ]['margin-left']   = $m_desktop['left'] ?? '';
			}
		}
	}
}

// --- Flex properties + gap (on inner container) ---
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
			$desktop = $value['Desktop'] ?? null;
			$tablet  = $value['Tablet'] ?? $desktop;
			$mobile  = $value['Mobile'] ?? $tablet;

			if ( null !== $mobile && '' !== $mobile ) {
				$selectors[ $inner_class ][ $css_prop ] = $mobile;
			}
			if ( null !== $tablet && '' !== $tablet && $tablet !== $mobile ) {
				$t_selectors[ $inner_class ][ $css_prop ] = $tablet;
			}
			if ( null !== $desktop && '' !== $desktop && $desktop !== $tablet ) {
				$selectors[ $inner_class ][ $css_prop ] = $desktop;
			}
		} else {
			// Default values.
			$defaults = array(
				'flexDirection'  => 'row',
				'alignItems'     => 'stretch',
				'justifyContent' => 'flex-start',
				'flexWrap'       => 'nowrap',
			);
			$selectors[ $inner_class ][ $css_prop ] = $defaults[ $attr_key ];
		}
	}

	// Gap.
	if ( ! empty( $attr['styles_dimensions']['colunmGap'] ) ) {
		$col_gap = $attr['styles_dimensions']['colunmGap'];
		$cg      = is_array( $col_gap ) ? ( $col_gap['Desktop'] ?? '' ) : $col_gap;
		if ( '' !== $cg ) {
			$selectors[ $inner_class ]['column-gap'] = self::get_css_value( $cg );
		}
	}
	if ( ! empty( $attr['styles_dimensions']['rowGap'] ) ) {
		$row_gap = $attr['styles_dimensions']['rowGap'];
		$rg      = is_array( $row_gap ) ? ( $row_gap['Desktop'] ?? '' ) : $row_gap;
		if ( '' !== $rg ) {
			$selectors[ $inner_class ]['row-gap'] = self::get_css_value( $rg );
		}
	}
}

// --- Advance ---
$selectors = array_merge( $selectors, self::get_advance_css( $attr, $wrap_class ) );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return self::generate_all_css( $combined_selectors, $wrap_class );
