<?php
/**
 * Frontend CSS for Container Block.
 *
 * Mirrors src/block-container/GlobalCss.tsx so every style rendered by the
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

$wrap_class    = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$inner_class   = $wrap_class . ' > .wcb-container__inner';
$overlay_class = $wrap_class . ' > .wcb-OverlayBackgroundByBgControl';

// =====================================================================
// 1. PARENT .wp-block MARGIN RESET & ALIGNMENT
// =====================================================================
$css['desktop'][ '.wp-block:has(> .wcb-container__wrap' . $wrap_class . ')' ] = array(
	'margin-top'    => '0 !important',
	'margin-bottom' => '0 !important',
);

$css['desktop'][ '.wp-block[data-align="full"]:has(> .wcb-container__wrap' . $wrap_class . ') ' . $wrap_class ] = array(
	'margin-left'  => 'auto',
	'margin-right' => 'auto',
);

$css['desktop'][ '.wp-block[data-align="wide"]:has(> .wcb-container__wrap' . $wrap_class . ')' ] = array(
	'margin-left'  => '-8px',
	'margin-right' => '-8px',
);

$css['desktop'][ '.wp-block[data-align="wide"]:has(> .wcb-container__wrap' . $wrap_class . ') ' . $wrap_class ] = array(
	'margin-left'  => 'auto',
	'margin-right' => 'auto',
);

// =====================================================================
// 2. CONTAINER CONTROL (Width, Min-Height, Overflow, Color)
// =====================================================================
$gc     = $attr['general_container'] ?? array();
$sc     = $attr['styles_color'] ?? '';
$global = WCB_Block_Helper::get_global_settings();

// Wrap default display: flex (mirrors getAdvanveDivWrapStyles defaultDisplay: 'flex').
$css['desktop'][ $wrap_class ]['display']        = 'flex';
$css['desktop'][ $wrap_class ]['flex-direction'] = 'column';

// Default global container padding.
$container_padding = $global['containerPadding'] ?: '10px';
$css['desktop'][ $wrap_class ]['padding'] = $container_padding;

if ( ! empty( $sc ) ) {
	$css['desktop'][ $wrap_class ]['color'] = $sc;
}

if ( ! empty( $gc ) ) {
	$width_type     = $gc['containerWidthType'] ?? 'Full Width';
	$content_w_type = $gc['contentWidthType'] ?? 'Boxed';
	$overflow       = $gc['overflow'] ?? '';
	$custom_width   = $gc['customWidth'] ?? array();
	$min_height     = $gc['minHeight'] ?? array();
	$content_box_w  = $gc['contentBoxWidth'] ?? array();

	if ( ! empty( $overflow ) ) {
		$css['desktop'][ $wrap_class ]['overflow'] = $overflow;
	}

	// Custom width (Desktop-first).
	if ( 'Custom' === $width_type && ! empty( $custom_width ) && is_array( $custom_width ) ) {
		$mw_d = $custom_width['Desktop'] ?? null;
		$mw_t = $custom_width['Tablet'] ?? $mw_d;
		$mw_m = $custom_width['Mobile'] ?? $mw_t;

		if ( null !== $mw_d && '' !== $mw_d ) {
			$css['desktop'][ $wrap_class ]['max-width'] = $mw_d . ' !important';
			$css['desktop'][ $wrap_class ]['width']     = $mw_d;
		}
		if ( null !== $mw_t && '' !== $mw_t && $mw_t !== $mw_d ) {
			$css['tablet'][ $wrap_class ]['max-width'] = $mw_t . ' !important';
			$css['tablet'][ $wrap_class ]['width']     = $mw_t;
		}
		if ( null !== $mw_m && '' !== $mw_m && $mw_m !== $mw_t ) {
			$css['mobile'][ $wrap_class ]['max-width'] = $mw_m . ' !important';
			$css['mobile'][ $wrap_class ]['width']     = $mw_m;
		}
	}

	// Min height (Desktop-first).
	if ( ! empty( $min_height ) && is_array( $min_height ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $wrap_class, 'min-height', $min_height );
	}

	// .alignfull
	if ( ! empty( $attr['align'] ) && 'full' === $attr['align'] ) {
		$css['desktop'][ $wrap_class . '.alignfull' ] = array(
			'margin-left'  => 'calc(-50vw + 50%)',
			'margin-right' => 'calc(-50vw + 50%)',
		);
	}

	// Content box width (inner container max-width).
	if ( 'Full Width' === $content_w_type ) {
		$css['desktop'][ $inner_class ]['max-width'] = '100%';
	} elseif ( 'Boxed' === $content_w_type ) {
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

		if ( ! empty( $content_box_w ) && is_array( $content_box_w ) ) {
			$gap = $global['containerElementsGap'] ?: '10px';

			$css['desktop'][ $inner_class ]['row-gap']    = $gap;
			$css['desktop'][ $inner_class ]['column-gap'] = $gap;

			WCB_Block_Helper::add_responsive_css( $css, $inner_class, 'max-width', $content_box_w );
		}
	}
}

// =====================================================================
// 3. BACKGROUND & OVERLAY (Color, Gradient, Image, Overlay)
// =====================================================================
if ( ! empty( $attr['styles_background'] ) && is_array( $attr['styles_background'] ) ) {
	$bg      = $attr['styles_background'];
	$bg_type = $bg['bgType'] ?? 'color';

	if ( 'color' === $bg_type && ! empty( $bg['color'] ) ) {
		$css['desktop'][ $wrap_class ]['background-color'] = $bg['color'];
	} elseif ( 'gradient' === $bg_type && ! empty( $bg['gradient'] ) ) {
		$css['desktop'][ $wrap_class ]['background-image'] = $bg['gradient'];
	} elseif ( 'image' === $bg_type ) {
		$img_data = $bg['imageData'] ?? array();
		$img_d    = is_array( $img_data ) ? ( $img_data['Desktop']['mediaUrl'] ?? '' ) : '';
		$img_t    = is_array( $img_data ) ? ( $img_data['Tablet']['mediaUrl'] ?? $img_d ) : $img_d;
		$img_m    = is_array( $img_data ) ? ( $img_data['Mobile']['mediaUrl'] ?? $img_t ) : $img_t;

		if ( ! empty( $img_d ) ) {
			$css['desktop'][ $wrap_class ]['background-image'] = 'url(' . esc_url( $img_d ) . ')';
		}
		if ( ! empty( $img_t ) && $img_t !== $img_d ) {
			$css['tablet'][ $wrap_class ]['background-image'] = 'url(' . esc_url( $img_t ) . ')';
		}
		if ( ! empty( $img_m ) && $img_m !== $img_t ) {
			$css['mobile'][ $wrap_class ]['background-image'] = 'url(' . esc_url( $img_m ) . ')';
		}

		if ( ! empty( $bg['bgImageRepeat'] ) ) {
			WCB_Block_Helper::add_responsive_css( $css, $wrap_class, 'background-repeat', $bg['bgImageRepeat'] );
		}
		if ( ! empty( $bg['bgImageAttachment'] ) ) {
			WCB_Block_Helper::add_responsive_css( $css, $wrap_class, 'background-attachment', $bg['bgImageAttachment'] );
		}
		if ( ! empty( $bg['bgImageSize'] ) ) {
			WCB_Block_Helper::add_responsive_css( $css, $wrap_class, 'background-size', $bg['bgImageSize'] );
		}
		if ( ! empty( $bg['focalPoint'] ) && is_array( $bg['focalPoint'] ) ) {
			$fp = $bg['focalPoint'];
			$get_pos = function ( $point ) {
				if ( ! is_array( $point ) ) {
					return '';
				}
				$x = isset( $point['x'] ) ? ( (float) $point['x'] * 100 ) . '%' : '50%';
				$y = isset( $point['y'] ) ? ( (float) $point['y'] * 100 ) . '%' : '50%';
				return $x . ' ' . $y;
			};

			$pos_d = $get_pos( $fp['Desktop'] ?? array() );
			$pos_t = $get_pos( $fp['Tablet'] ?? ( $fp['Desktop'] ?? array() ) );
			$pos_m = $get_pos( $fp['Mobile'] ?? ( $fp['Tablet'] ?? ( $fp['Desktop'] ?? array() ) ) );

			if ( '' !== $pos_d ) {
				$css['desktop'][ $wrap_class ]['background-position'] = $pos_d;
			}
			if ( '' !== $pos_t && $pos_t !== $pos_d ) {
				$css['tablet'][ $wrap_class ]['background-position'] = $pos_t;
			}
			if ( '' !== $pos_m && $pos_m !== $pos_t ) {
				$css['mobile'][ $wrap_class ]['background-position'] = $pos_m;
			}
		}
	}

	// Overlay (.wcb-OverlayBackgroundByBgControl)
	$overlay_type = $bg['overlayType'] ?? 'none';
	if ( 'color' === $overlay_type && ! empty( $bg['overlayColor'] ) ) {
		$css['desktop'][ $overlay_class ] = array(
			'background-color' => $bg['overlayColor'],
			'position'         => 'absolute',
			'inset'            => '0',
			'z-index'          => '0',
		);
	} elseif ( 'gradient' === $overlay_type && ! empty( $bg['overlayGradient'] ) ) {
		$css['desktop'][ $overlay_class ] = array(
			'background-image' => $bg['overlayGradient'],
			'position'         => 'absolute',
			'inset'            => '0',
			'z-index'          => '0',
		);
	}
}

// =====================================================================
// 4. BORDER & RADIUS (Wrap)
// =====================================================================
if ( ! empty( $attr['styles_border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $wrap_class, $attr['styles_border'], true, true, false );
}

// =====================================================================
// 5. BOX SHADOW (Normal + Hover)
// =====================================================================
if ( ! empty( $attr['styles_boxShadow'] ) && is_array( $attr['styles_boxShadow'] ) ) {
	WCB_Block_Helper::add_box_shadow_css( $css, $wrap_class, $attr['styles_boxShadow'] );
}

// =====================================================================
// 6. DIMENSIONS (Margin & Padding on Wrap)
// =====================================================================
if ( ! empty( $attr['styles_dimensions'] ) && is_array( $attr['styles_dimensions'] ) ) {
	$dim = $attr['styles_dimensions'];
	if ( ! empty( $dim['padding'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $wrap_class, 'padding', $dim['padding'] );
	}
	if ( ! empty( $dim['margin'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $wrap_class, 'margin', $dim['margin'] );
	}
}

// =====================================================================
// 7. FLEX PROPERTIES & GAP (on Inner Container)
// =====================================================================
$gfp      = $attr['general_flexProperties'] ?? array();
$has_flex = ! empty( $gfp ) && is_array( $gfp );
$has_gap  = ! empty( $attr['styles_dimensions'] ) && is_array( $attr['styles_dimensions'] ) && ( ! empty( $attr['styles_dimensions']['colunmGap'] ) || ! empty( $attr['styles_dimensions']['rowGap'] ) );

if ( $has_flex || $has_gap ) {
	$css['desktop'][ $inner_class ]['display'] = 'flex !important';

	$flex_props = array(
		'flexDirection'  => 'flex-direction',
		'alignItems'     => 'align-items',
		'justifyContent' => 'justify-content',
		'flexWrap'       => 'flex-wrap',
	);

	foreach ( $flex_props as $attr_key => $css_prop ) {
		if ( isset( $gfp[ $attr_key ] ) && '' !== $gfp[ $attr_key ] ) {
			WCB_Block_Helper::add_responsive_css( $css, $inner_class, $css_prop, $gfp[ $attr_key ] );
		}
	}

	// Responsive Column Gap.
	if ( ! empty( $attr['styles_dimensions']['colunmGap'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $inner_class, 'column-gap', $attr['styles_dimensions']['colunmGap'] );
	}

	// Responsive Row Gap.
	if ( ! empty( $attr['styles_dimensions']['rowGap'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $inner_class, 'row-gap', $attr['styles_dimensions']['rowGap'] );
	}
}

// =====================================================================
// 8. ADVANCE (responsive condition + z-index + motion effect)
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $wrap_class, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
