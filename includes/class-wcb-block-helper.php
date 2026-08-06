<?php
/**
 * Class WCB_Block_Helper
 *
 * Stateless CSS utility methods for Boostify Blocks.
 * Extracts style attributes from block data and generates CSS rules.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class WCB_Block_Helper {

	// =====================================================================
	// BLOCK ATTRIBUTE HELPERS
	// =====================================================================

	/**
	 * Get a Block's Default Attributes.
	 *
	 * @param string $block_name Name of the block to retrieve defaults.
	 * @return array             All default attributes for the specified block.
	 */
	public static function get_block_default_attributes( $block_name ) {
		// 'boostify-blocks/products' → 'block-products'
		$short_name = basename( $block_name );
		$dir_name   = 'block-' . $short_name;

		$assets_file = realpath( BOOSTIFY_BLOCKS_PATH . 'includes/blocks/' . $dir_name . '/attributes.php' );
		return ( is_string( $assets_file ) && file_exists( $assets_file ) ) ? require $assets_file : array();
	}

	/**
	 * Get a value from a nested array using a dot-separated path.
	 *
	 * @param array  $array   The array to search.
	 * @param string $path    Dot-separated path (e.g., 'style.color').
	 * @param mixed  $default Default value if path not found.
	 * @return mixed Value at the path or default.
	 */
	public static function get_value_by_path( $array, $path, $default = null ) {
		if ( empty( $path ) ) {
			return $default;
		}

		$keys    = explode( '.', $path );
		$current = $array;

		foreach ( $keys as $key ) {
			if ( ! is_array( $current ) || ! array_key_exists( $key, $current ) ) {
				return $default;
			}
			$current = $current[ $key ];
		}

		return $current;
	}

	/**
	 * Merge block attributes with defaults to ensure all expected keys are present.
	 *
	 * @param string $block_name Block name.
	 * @param array  $attrs      Raw block attributes.
	 * @return array Merged attributes.
	 */
	public static function merge_with_defaults( $block_name, $attrs ) {
		$defaults = self::get_block_default_attributes( $block_name );

		// Flatten defaults to a simple key => default value array.
		$default_values = array();
		foreach ( $defaults as $key => $config ) {
			$default_values[ $key ] = $config['default'] ?? null;
		}

		return array_replace_recursive( $default_values, $attrs );
	}

	// =====================================================================
	// SHARED CSS UTILITY METHODS
	// =====================================================================

	public static function css_responsive( $property, $value, $selector, $unit = '' ) {
		if ( empty( $value ) && '0' !== $value ) {
			return '';
		}
		$css = '';
		if ( is_array( $value ) ) {
			// Cascade: Tablet → Desktop, Mobile → Tablet → Desktop.
			// Matches getValueFromAttrsResponsives.ts logic.
			$desktop = $value['Desktop'] ?? null;
			$tablet  = $value['Tablet'] ?? $desktop;
			$mobile  = $value['Mobile'] ?? $tablet;

			// Base (mobile-first) — always output if any breakpoint has a value.
			if ( null !== $mobile && '' !== $mobile ) {
				$val = $unit ? (float) $mobile . $unit : $mobile;
				$css .= "$selector { $property: $val; }\n";
			}

			// Tablet — only output if different from mobile.
			if ( null !== $tablet && '' !== $tablet && $tablet !== $mobile ) {
				$val = $unit ? (float) $tablet . $unit : $tablet;
				$css .= "@media (min-width: 768px) { $selector { $property: $val; } }\n";
			}

			// Desktop — only output if different from tablet.
			if ( null !== $desktop && '' !== $desktop && $desktop !== $tablet ) {
				$val = $unit ? (float) $desktop . $unit : $desktop;
				$css .= "@media (min-width: 1025px) { $selector { $property: $val; } }\n";
			}
		} else {
			$val = $unit ? (float) $value . $unit : $value;
			$css .= "$selector { $property: $val; }\n";
		}
		return $css;
	}

	public static function css_typography( $typo, $selector ) {
		if ( empty( $typo ) || ! is_array( $typo ) ) {
			return '';
		}
		$css = '';
		if ( ! empty( $typo['fontSizes'] ) ) {
			$css .= self::css_responsive( 'font-size', $typo['fontSizes'], $selector );
		}
		if ( ! empty( $typo['appearance']['style'] ) && is_array( $typo['appearance']['style'] ) ) {
			$s = $typo['appearance']['style'];
			if ( ! empty( $s['fontWeight'] ) ) {
				$css .= "$selector { font-weight: {$s['fontWeight']}; }\n";
			}
			if ( ! empty( $s['fontStyle'] ) ) {
				$css .= "$selector { font-style: {$s['fontStyle']}; }\n";
			}
		}
		if ( ! empty( $typo['textDecoration'] ) && 'undefined' !== $typo['textDecoration'] ) {
			$css .= "$selector { text-decoration: {$typo['textDecoration']}; }\n";
		}
		if ( ! empty( $typo['textTransform'] ) && 'undefined' !== $typo['textTransform'] ) {
			$css .= "$selector { text-transform: {$typo['textTransform']}; }\n";
		}
		if ( ! empty( $typo['lineHeight'] ) ) {
			$css .= self::css_responsive( 'line-height', $typo['lineHeight'], $selector );
		}
		if ( ! empty( $typo['letterSpacing'] ) ) {
			$css .= self::css_responsive( 'letter-spacing', $typo['letterSpacing'], $selector );
		}
		if ( ! empty( $typo['fontFamily'] ) ) {
			$css .= "$selector { font-family: {$typo['fontFamily']}; }\n";
		}
		return $css;
	}

	public static function css_background( $bg, $selector ) {
		if ( empty( $bg ) || ! is_array( $bg ) ) {
			return '';
		}
		$css = '';
		if ( 'gradient' === ( $bg['bgType'] ?? 'color' ) && ! empty( $bg['gradient'] ) ) {
			$css .= "$selector { background: {$bg['gradient']}; }\n";
		} elseif ( ! empty( $bg['color'] ) ) {
			$css .= "$selector { background-color: {$bg['color']}; }\n";
		}
		return $css;
	}

	public static function css_border( $border, $selector ) {
		if ( empty( $border ) || ! is_array( $border ) ) {
			return '';
		}
		$css  = '';
		$main = $border['mainSettings'] ?? null;
		if ( ! empty( $main ) && is_array( $main ) ) {
			$color = $main['color'] ?? '';
			$style = $main['style'] ?? 'solid';
			$width = $main['width'] ?? '1px';
			if ( $color ) {
				$css .= "$selector { border: $width $style $color; }\n";
			}
		}
		if ( ! empty( $border['radius'] ) ) {
			$css .= self::css_responsive( 'border-radius', $border['radius'], $selector, 'px' );
		}
		return $css;
	}

	/**
	 * Full border CSS — supports 4-side borders and hover color.
	 * Mirrors getBorderStyles in TypeScript (with isWithRadius=true).
	 *
	 * @param array  $border   Border control data.
	 * @param string $selector CSS selector.
	 * @return string CSS rules.
	 */
	public static function css_border_full( $border, $selector ) {
		if ( empty( $border ) || ! is_array( $border ) ) {
			return '';
		}

		$css        = '';
		$main       = $border['mainSettings'] ?? null;
		$hover_color = $border['hoverColor'] ?? '';
		$radius     = $border['radius'] ?? null;

		if ( ! empty( $main ) && is_array( $main ) ) {
			// Check if 4-side border (has 'top', 'right', 'bottom', or 'left').
			$is_4side = isset( $main['top'] ) || isset( $main['right'] ) || isset( $main['bottom'] ) || isset( $main['left'] );

			if ( $is_4side ) {
				$sides = array( 'top', 'right', 'bottom', 'left' );
				foreach ( $sides as $side ) {
					if ( ! empty( $main[ $side ] ) && is_array( $main[ $side ] ) ) {
						$s = $main[ $side ];
						$w = $s['width'] ?? '1px';
						$st = $s['style'] ?? 'none';
						$c  = $s['color'] ?? '';
						if ( '' !== $c ) {
							$css .= "$selector { border-$side: $w $st $c; }\n";
						}
					}
				}
			} else {
				// Single-side border.
				$color = $main['color'] ?? '';
				$style = $main['style'] ?? 'solid';
				$width = $main['width'] ?? '1px';
				if ( $color ) {
					$css .= "$selector { border: $width $style $color; }\n";
				}
			}

			// Hover border color.
			if ( ! empty( $hover_color ) ) {
				$css .= "$selector:hover { border-color: $hover_color; }\n";
			}
		}

		// Border radius.
		if ( ! empty( $radius ) ) {
			$css .= self::css_responsive( 'border-radius', $radius, $selector, 'px' );
		}

		return $css;
	}

	public static function css_dimension( $dimension, $selector ) {
		if ( empty( $dimension ) || ! is_array( $dimension ) ) {
			return '';
		}
		$css = '';
		if ( ! empty( $dimension['padding'] ) && is_array( $dimension['padding'] ) ) {
			$css .= self::css_responsive_spacing( 'padding', $dimension['padding'], $selector );
		}
		if ( ! empty( $dimension['margin'] ) && is_array( $dimension['margin'] ) ) {
			$css .= self::css_responsive_spacing( 'margin', $dimension['margin'], $selector );
		}
		return $css;
	}

	public static function css_responsive_spacing( $property, $values, $selector ) {
		$css = '';

		// Cascade: Tablet → Desktop, Mobile → Tablet → Desktop.
		$desktop = $values['Desktop'] ?? null;
		$tablet  = $values['Tablet'] ?? $desktop;
		$mobile  = $values['Mobile'] ?? $tablet;

		// Base (mobile-first).
		if ( $mobile ) {
			$s = self::spacing_shorthand( $mobile );
			if ( $s ) {
				$css .= "$selector { $property: $s; }\n";
			}
		}

		// Tablet — only output if different from mobile.
		if ( $tablet && self::spacing_shorthand( $tablet ) !== self::spacing_shorthand( $mobile ) ) {
			$s = self::spacing_shorthand( $tablet );
			if ( $s ) {
				$css .= "@media (min-width: 768px) { $selector { $property: $s; } }\n";
			}
		}

		// Desktop — only output if different from tablet.
		if ( $desktop && self::spacing_shorthand( $desktop ) !== self::spacing_shorthand( $tablet ) ) {
			$s = self::spacing_shorthand( $desktop );
			if ( $s ) {
				$css .= "@media (min-width: 1025px) { $selector { $property: $s; } }\n";
			}
		}

		return $css;
	}

	public static function spacing_shorthand( $sides ) {
		if ( ! is_array( $sides ) ) {
			return '';
		}
		$t = $sides['top'] ?? '0';
		$r = $sides['right'] ?? '0';
		$b = $sides['bottom'] ?? '0';
		$l = $sides['left'] ?? '0';
		if ( '' === $t && '' === $r && '' === $b && '' === $l ) {
			return '';
		}
		return "$t $r $b $l";
	}

	public static function css_box_shadow( $shadow, $selector ) {
		if ( empty( $shadow ) || ! is_array( $shadow ) ) {
			return '';
		}
		$color = $shadow['color'] ?? '';
		if ( ! $color ) {
			return '';
		}
		$blur   = $shadow['blur'] ?? 0;
		$spread = $shadow['spread'] ?? 0;
		$h      = $shadow['horizontal'] ?? 0;
		$v      = $shadow['vertical'] ?? 0;
		$inset  = 'inset' === ( $shadow['position'] ?? '' ) ? 'inset ' : '';
		return "$selector { box-shadow: {$inset}{$h}px {$v}px {$blur}px {$spread}px $color; }\n";
	}

	public static function css_text_shadow( $shadow, $selector ) {
		if ( empty( $shadow ) || ! is_array( $shadow ) ) {
			return '';
		}
		$color = $shadow['color'] ?? '';
		if ( ! $color ) {
			return '';
		}
		$blur = $shadow['blur'] ?? 0;
		$h    = $shadow['horizontal'] ?? 0;
		$v    = $shadow['vertical'] ?? 0;
		return "$selector { text-shadow: {$h}px {$v}px {$blur}px $color; }\n";
	}

	public static function css_box_shadow_hover( $shadow, $selector ) {
		if ( empty( $shadow ) || ! is_array( $shadow ) ) {
			return '';
		}
		$color = $shadow['color'] ?? '';
		if ( ! $color ) {
			return '';
		}
		$blur   = $shadow['blur'] ?? 0;
		$spread = $shadow['spread'] ?? 0;
		$h      = $shadow['horizontal'] ?? 0;
		$v      = $shadow['vertical'] ?? 0;
		$inset  = 'inset' === ( $shadow['position'] ?? '' ) ? 'inset ' : '';
		return "$selector:hover { box-shadow: {$inset}{$h}px {$v}px {$blur}px {$spread}px $color; }\n";
	}

	/**
	 * Full background CSS — supports color, gradient, AND image backgrounds.
	 */
	public static function css_background_full( $bg, $selector ) {
		if ( empty( $bg ) || ! is_array( $bg ) ) {
			return '';
		}
		$css     = '';
		$bg_type = $bg['bgType'] ?? 'color';

		// Image background.
		if ( 'image' === $bg_type && ! empty( $bg['imageData'] ) ) {
			$img_desktop = $bg['imageData']['Desktop'] ?? $bg['imageData'];
			if ( ! empty( $img_desktop['mediaUrl'] ) ) {
				$css .= "$selector { background-image: url({$img_desktop['mediaUrl']}); }\n";
			}
			if ( ! empty( $bg['bgImageSize'] ) ) {
				$css .= self::css_responsive( 'background-size', $bg['bgImageSize'], $selector );
			}
			if ( ! empty( $bg['bgImageRepeat'] ) ) {
				$css .= self::css_responsive( 'background-repeat', $bg['bgImageRepeat'], $selector );
			}
			if ( ! empty( $bg['bgImageAttachment'] ) ) {
				$css .= self::css_responsive( 'background-attachment', $bg['bgImageAttachment'], $selector );
			}
			if ( ! empty( $bg['focalPoint']['Desktop'] ) ) {
				$fp = $bg['focalPoint']['Desktop'];
				$x  = isset( $fp['x'] ) ? ( $fp['x'] * 100 ) . '%' : '50%';
				$y  = isset( $fp['y'] ) ? ( $fp['y'] * 100 ) . '%' : '50%';
				$css .= "$selector { background-position: $x $y; }\n";
			}
		}

		// Gradient background.
		if ( 'gradient' === $bg_type && ! empty( $bg['gradient'] ) ) {
			$css .= "$selector { background: {$bg['gradient']}; }\n";
		}

		// Color background (always set as fallback for images too).
		if ( ! empty( $bg['color'] ) ) {
			$css .= "$selector { background-color: {$bg['color']}; }\n";
		}

		// Overlay (for image/gradient backgrounds).
		if ( ! empty( $bg['overlayColor'] ) || ! empty( $bg['overlayGradient'] ) ) {
			$overlay_sel = "$selector .wcb-OverlayBackgroundByBgControl";
			if ( 'gradient' === ( $bg['overlayType'] ?? '' ) && ! empty( $bg['overlayGradient'] ) ) {
				$css .= "$overlay_sel { background: {$bg['overlayGradient']}; }\n";
			} elseif ( ! empty( $bg['overlayColor'] ) ) {
				$css .= "$overlay_sel { background-color: {$bg['overlayColor']}; }\n";
			}
		}

		return $css;
	}

	public static function css_advance( $attrs, $selector ) {
		$css = '';
		$rc  = $attrs['advance_responsiveCondition'] ?? array();
		if ( ! empty( $rc['isHiddenOnDesktop'] ) ) {
			$css .= "@media (min-width: 1025px) { $selector { display: none !important; } }\n";
		}
		if ( ! empty( $rc['isHiddenOnTablet'] ) ) {
			$css .= "@media (min-width: 768px) and (max-width: 1024px) { $selector { display: none !important; } }\n";
		}
		if ( ! empty( $rc['isHiddenOnMobile'] ) ) {
			$css .= "@media (max-width: 767px) { $selector { display: none !important; } }\n";
		}
		$zi = $attrs['advance_zIndex'] ?? array();
		$z  = is_array( $zi ) ? ( $zi['Desktop'] ?? '' ) : $zi;
		if ( '' !== $z && null !== $z ) {
			$css .= "$selector { z-index: $z; }\n";
		}
		return $css;
	}

	public static function css_text_color( $tc, $selector ) {
		if ( empty( $tc ) || ! is_array( $tc ) ) {
			return '';
		}
		if ( 'gradient' === ( $tc['colorType'] ?? 'color' ) && ! empty( $tc['gradient'] ) ) {
			return "$selector { background: {$tc['gradient']}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }\n";
		}
		if ( ! empty( $tc['color'] ) ) {
			return "$selector { color: {$tc['color']}; }\n";
		}
		return '';
	}

	public static function css_gap( $gap, $selector ) {
		if ( empty( $gap ) || ! is_array( $gap ) ) {
			return '';
		}
		$css = '';
		if ( ! empty( $gap['colunmGap'] ) ) {
			$css .= self::css_responsive( 'column-gap', $gap['colunmGap'], $selector );
		}
		if ( ! empty( $gap['rowGap'] ) ) {
			$css .= self::css_responsive( 'row-gap', $gap['rowGap'], $selector );
		}
		return $css;
	}

	/**
	 * Generate flex properties CSS for container inner.
	 * Mirrors getFlexPropertiesStyles in TypeScript.
	 *
	 * @param array  $flex     Flex properties from general_flexProperties.
	 * @param array  $gap      Gap values from styles_dimensions (colunmGap, rowGap).
	 * @param string $selector CSS selector (should target .wcb-container__inner).
	 * @return string CSS rules.
	 */
	public static function css_flex_properties( $flex, $gap, $selector ) {
		$css = '';

		// Always set display:flex on the inner container.
		$css .= "$selector { display: flex !important; }\n";

		$props = array(
			'flexDirection'  => array( 'property' => 'flex-direction', 'default' => 'row' ),
			'alignItems'     => array( 'property' => 'align-items', 'default' => 'stretch' ),
			'justifyContent' => array( 'property' => 'justify-content', 'default' => 'flex-start' ),
			'flexWrap'       => array( 'property' => 'flex-wrap', 'default' => 'nowrap' ),
		);

		foreach ( $props as $key => $config ) {
			$value = isset( $flex[ $key ] ) ? $flex[ $key ] : null;
			if ( ! empty( $value ) && is_array( $value ) ) {
				// Cascade: Tablet → Desktop, Mobile → Tablet → Desktop.
				$desktop = $value['Desktop'] ?? null;
				$tablet  = $value['Tablet'] ?? $desktop;
				$mobile  = $value['Mobile'] ?? $tablet;

				if ( null !== $mobile && '' !== $mobile ) {
					$css .= "$selector { {$config['property']}: $mobile; }\n";
				}
				if ( null !== $tablet && '' !== $tablet && $tablet !== $mobile ) {
					$css .= "@media (min-width: 768px) { $selector { {$config['property']}: $tablet; } }\n";
				}
				if ( null !== $desktop && '' !== $desktop && $desktop !== $tablet ) {
					$css .= "@media (min-width: 1025px) { $selector { {$config['property']}: $desktop; } }\n";
				}
			}
		}

		// Gap (from styles_dimensions).
		if ( ! empty( $gap ) && is_array( $gap ) ) {
			if ( ! empty( $gap['colunmGap'] ) ) {
				$css .= self::css_responsive( 'column-gap', $gap['colunmGap'], $selector );
			}
			if ( ! empty( $gap['rowGap'] ) ) {
				$css .= self::css_responsive( 'row-gap', $gap['rowGap'], $selector );
			}
		}

		return $css;
	}

	/**
	 * Generate CSS for container control settings (width, min-height, overflow, alignment).
	 * Mirrors getDivWrapStyles + getInner__contentCustomWidth in TypeScript GlobalCss.
	 *
	 * @param array  $container General container settings.
	 * @param string $selector  CSS selector for the wrap element.
	 * @param string $unique_id Block unique ID (for :has() parent selectors).
	 * @param string $color     Text color (styles_color).
	 * @return string CSS rules.
	 */
	public static function css_container_control( $container, $selector, $unique_id, $color ) {
		if ( empty( $container ) || ! is_array( $container ) ) {
			return '';
		}

		$global    = self::get_global_settings();
		$css       = '';
		$width_type      = $container['containerWidthType'] ?? 'Full Width';
		$content_w_type  = $container['contentWidthType'] ?? 'Boxed';
		$overflow        = $container['overflow'] ?? '';
		$custom_width    = $container['customWidth'] ?? array();
		$min_height      = $container['minHeight'] ?? array();
		$content_box_w   = $container['contentBoxWidth'] ?? array();

		// --- Parent .wp-block margin reset ---
		$css .= ".wp-block:has(> .wcb-container__wrap.{$unique_id}[data-uniqueid=\"{$unique_id}\"]) { margin-top: 0 !important; margin-bottom: 0 !important; }\n";

		// --- Full/wide alignment ---
		$css .= ".wp-block[data-align=\"full\"]:has(> .wcb-container__wrap.{$unique_id}[data-uniqueid=\"{$unique_id}\"]) { {$selector} { margin-left: auto; margin-right: auto; } }\n";
		$css .= ".wp-block[data-align=\"wide\"]:has(> .wcb-container__wrap.{$unique_id}[data-uniqueid=\"{$unique_id}\"]) { margin-left: -8px; margin-right: -8px; {$selector} { margin-left: auto; margin-right: auto; } }\n";

		// --- Base wrap styles ---
		$wrap_styles = '';

		// Global container padding.
		$wrap_styles .= 'padding: ' . ( $global['containerPadding'] ?: '10px' ) . '; ';

		// Color.
		if ( ! empty( $color ) ) {
			$wrap_styles .= "color: $color; ";
		}

		// Overflow.
		if ( ! empty( $overflow ) ) {
			$wrap_styles .= "overflow: $overflow; ";
		}

		// Custom Width.
		if ( 'Custom' === $width_type && ! empty( $custom_width ) && is_array( $custom_width ) ) {
			$mw_desktop = $custom_width['Desktop'] ?? null;
			$mw_tablet  = $custom_width['Tablet'] ?? $mw_desktop;
			$mw_mobile  = $custom_width['Mobile'] ?? $mw_tablet;

			if ( null !== $mw_mobile && '' !== $mw_mobile ) {
				$wrap_styles .= "max-width: {$mw_mobile} !important; width: {$mw_mobile}; ";
			}
		}

		// Min Height.
		if ( ! empty( $min_height ) && is_array( $min_height ) ) {
			$mh_desktop = $min_height['Desktop'] ?? null;
			$mh_tablet  = $min_height['Tablet'] ?? $mh_desktop;
			$mh_mobile  = $min_height['Mobile'] ?? $mh_tablet;

			if ( null !== $mh_mobile && '' !== $mh_mobile ) {
				$wrap_styles .= "min-height: {$mh_mobile}; ";
			}
		}

		if ( ! empty( trim( $wrap_styles ) ) ) {
			$css .= "$selector { $wrap_styles}\n";
		}

		// --- Responsive max-width ---
		if ( 'Custom' === $width_type && ! empty( $custom_width ) && is_array( $custom_width ) ) {
			$mw_desktop = $custom_width['Desktop'] ?? null;
			$mw_tablet  = $custom_width['Tablet'] ?? $mw_desktop;
			$mw_mobile  = $custom_width['Mobile'] ?? $mw_tablet;

			if ( null !== $mw_tablet && '' !== $mw_tablet && $mw_tablet !== $mw_mobile ) {
				$css .= "@media (min-width: 768px) { $selector { max-width: {$mw_tablet} !important; width: {$mw_tablet}; } }\n";
			}
			if ( null !== $mw_desktop && '' !== $mw_desktop && $mw_desktop !== $mw_tablet ) {
				$css .= "@media (min-width: 1025px) { $selector { max-width: {$mw_desktop} !important; width: {$mw_desktop}; } }\n";
			}
		}

		// --- Responsive min-height ---
		if ( ! empty( $min_height ) && is_array( $min_height ) ) {
			$mh_desktop = $min_height['Desktop'] ?? null;
			$mh_tablet  = $min_height['Tablet'] ?? $mh_desktop;
			$mh_mobile  = $min_height['Mobile'] ?? $mh_tablet;

			if ( null !== $mh_tablet && '' !== $mh_tablet && $mh_tablet !== $mh_mobile ) {
				$css .= "@media (min-width: 768px) { $selector { min-height: {$mh_tablet}; } }\n";
			}
			if ( null !== $mh_desktop && '' !== $mh_desktop && $mh_desktop !== $mh_tablet ) {
				$css .= "@media (min-width: 1025px) { $selector { min-height: {$mh_desktop}; } }\n";
			}
		}

		// --- .alignfull ---
		$css .= "$selector.alignfull { margin-left: calc(-50vw + 50%); margin-right: calc(-50vw + 50%); }\n";

		// --- .is_wcb_container_child ---
		if ( 'Custom' === $width_type && ! empty( $custom_width ) && is_array( $custom_width ) ) {
			$mw_desktop = $custom_width['Desktop'] ?? null;
			$mw_tablet  = $custom_width['Tablet'] ?? $mw_desktop;
			$mw_mobile  = $custom_width['Mobile'] ?? $mw_tablet;

			if ( null !== $mw_mobile && '' !== $mw_mobile ) {
				$css .= "$selector.is_wcb_container_child { width: {$mw_mobile}; max-width: {$mw_mobile} !important; }\n";
			}
			if ( null !== $mw_tablet && '' !== $mw_tablet && $mw_tablet !== $mw_mobile ) {
				$css .= "@media (min-width: 768px) { $selector.is_wcb_container_child { width: {$mw_tablet}; } }\n";
			}
			if ( null !== $mw_desktop && '' !== $mw_desktop && $mw_desktop !== $mw_tablet ) {
				$css .= "@media (min-width: 1025px) { $selector.is_wcb_container_child { width: {$mw_desktop}; } }\n";
			}
		}

		// --- Content Box Width (inner container max-width) ---
		$inner_sel = "$selector .wcb-container__inner";

		// Fallback to global defaultContentWidth when contentBoxWidth is not set.
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
			$css .= "$inner_sel { max-width: 100%; }\n";
		} elseif ( 'Boxed' === $content_w_type ) {
			if ( ! empty( $content_box_w ) && is_array( $content_box_w ) ) {
				// Global containerElementsGap.
				$gap = $global['containerElementsGap'] ?: '10px';

				$cbw_desktop = $content_box_w['Desktop'] ?? '';
				$cbw_tablet  = $content_box_w['Tablet'] ?? $cbw_desktop;
				$cbw_mobile  = $content_box_w['Mobile'] ?? $cbw_tablet;

				$inner_styles = '';
				if ( '' !== $cbw_mobile && null !== $cbw_mobile ) {
					$inner_styles .= "max-width: $cbw_mobile; ";
				}
				$inner_styles .= "row-gap: $gap; column-gap: $gap; ";

				if ( ! empty( trim( $inner_styles ) ) ) {
					$css .= "$inner_sel { $inner_styles}\n";
				}

				if ( '' !== $cbw_tablet && null !== $cbw_tablet && $cbw_tablet !== $cbw_mobile ) {
					$css .= "@media (min-width: 768px) { $inner_sel { max-width: $cbw_tablet; } }\n";
				}
				if ( '' !== $cbw_desktop && null !== $cbw_desktop && $cbw_desktop !== $cbw_tablet ) {
					$css .= "@media (min-width: 1025px) { $inner_sel { max-width: $cbw_desktop; } }\n";
				}
			}
		}

		return $css;
	}

	// =====================================================================
	// GLOBAL SETTINGS
	// =====================================================================

	/**
	 * Get global layout/settings values (mirrors DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES).
	 *
	 * @return array Associative array of global settings.
	 */
	public static function get_global_settings() {
		$options = get_option( 'boostify_blocks_settings_options', array() );
		$layout  = wp_get_global_settings( array( 'layout' ) );

		return array(
			'defaultContentWidth'  => $options['defaultContentWidth'] ?? ( $layout['contentSize'] ?? '' ),
			'containerPadding'     => $options['containerPadding'] ?? '10px',
			'containerElementsGap' => $options['containerElementsGap'] ?? '10px',
			'media_tablet'         => $options['media_tablet'] ?? '768px',
			'media_desktop'        => $options['media_desktop'] ?? '1024px',
		);
	}

	// =====================================================================
	// BLOCK TYPE DISPATCH
	// =====================================================================

	public static function process_block_by_type( $block_name, $attrs, $selector, $unique_id ) {
		$css = '';

		// Extract block type from block name (e.g., 'boostify-blocks/button' → 'button').
		$block_type = explode( '/', $block_name )[1] ?? '';

		// Convert block type to method name (e.g., 'button' → 'process_button_block').
		$method = 'process_' . str_replace( '-', '_', $block_type ) . '_block';

		if ( method_exists( __CLASS__, $method ) ) {
			$css = self::$method( $attrs, $selector, $unique_id );
		}

		return $css;
	}

	// =====================================================================
	// PER-BLOCK PROCESS METHODS
	// Each method receives: $attrs (merged with defaults), $selector, $unique_id
	// =====================================================================

	public static function process_heading_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$gc  = $attrs['general_content'] ?? array();
		$sh  = $attrs['styles_heading'] ?? array();
		$ssh = $attrs['styles_subHeading'] ?? array();
		$ss  = $attrs['styles_separator'] ?? array();
		$sl  = $attrs['styles_link'] ?? array();
		$shi = $attrs['styles_highlight'] ?? array();
		$sb  = $attrs['styles_background'] ?? array();
		$sbd = $attrs['styles_border'] ?? array();
		$sd  = $attrs['styles_dimensions'] ?? array();

		$h_sel   = "$selector .wcb-heading__heading";
		$sh_sel  = "$selector .wcb-heading__subHeading";
		$sep_sel = "$selector .wcb-heading__separator";

		if ( ! empty( $gc['textAlignment'] ) ) {
			$css .= self::css_responsive( 'text-align', $gc['textAlignment'], $selector );
		}
		if ( ! empty( $sh['typography'] ) ) {
			$css .= self::css_typography( $sh['typography'], $h_sel );
		}
		if ( ! empty( $sh['textColor'] ) ) {
			$css .= self::css_text_color( $sh['textColor'], $h_sel );
		}
		if ( ! empty( $sh['textShadow'] ) ) {
			$css .= self::css_text_shadow( $sh['textShadow'], $h_sel );
		}
		if ( ! empty( $sh['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sh['marginBottom'], $h_sel );
		}
		if ( ! empty( $ssh['typography'] ) ) {
			$css .= self::css_typography( $ssh['typography'], $sh_sel );
		}
		if ( ! empty( $ssh['textColor'] ) ) {
			$css .= self::css_text_color( $ssh['textColor'], $sh_sel );
		}
		if ( ! empty( $ssh['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $ssh['marginBottom'], $sh_sel );
		}
		if ( ! empty( $ss['width'] ) ) {
			$css .= self::css_responsive( 'width', $ss['width'], $sep_sel );
		}
		if ( ! empty( $ss['border'] ) ) {
			$b = $ss['border'];
			if ( ! empty( $b['color'] ) ) {
				$css .= "$sep_sel { border-top: " . ( $b['width'] ?? '1px' ) . ' ' . ( $b['style'] ?? 'solid' ) . ' ' . $b['color'] . "; }\n";
			}
		}
		if ( ! empty( $ss['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $ss['marginBottom'], $sep_sel );
		}

		if ( ! empty( $sl['linkColor'] ) ) {
			$lc = $sl['linkColor'];
			if ( ! empty( $lc['Normal']['color'] ) ) {
				$css .= "$selector a { color: {$lc['Normal']['color']}; }\n";
			}
			if ( ! empty( $lc['Hover']['color'] ) ) {
				$css .= "$selector a:hover { color: {$lc['Hover']['color']}; }\n";
			}
		}

		if ( ! empty( $shi ) ) {
			$m_sel = "$selector mark";
			if ( ! empty( $shi['textColor'] ) ) {
				$css .= "$m_sel { color: {$shi['textColor']}; }\n";
			}
			if ( ! empty( $shi['bgColor'] ) ) {
				$css .= "$m_sel { background-color: {$shi['bgColor']}; }\n";
			}
			if ( ! empty( $shi['padding'] ) ) {
				$css .= self::css_responsive_spacing( 'padding', $shi['padding'], $m_sel );
			}
			if ( ! empty( $shi['typography'] ) ) {
				$css .= self::css_typography( $shi['typography'], $m_sel );
			}
			if ( ! empty( $shi['border'] ) ) {
				$css .= self::css_border( $shi['border'], $m_sel );
			}
		}

		if ( ! empty( $sb['background'] ) ) {
			$css .= self::css_background( $sb['background'], $selector );
		}
		if ( ! empty( $sbd ) ) {
			$css .= self::css_border( $sbd, $selector );
		}
		if ( ! empty( $sd['dimension'] ) ) {
			$css .= self::css_dimension( $sd['dimension'], $selector );
		}
		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_container_block( $attrs, $selector, $unique_id ) {
		$css       = '';
		$gc        = $attrs['general_container'] ?? array();
		$gfp       = $attrs['general_flexProperties'] ?? array();
		$sb        = $attrs['styles_background'] ?? array();
		$sbd       = $attrs['styles_border'] ?? array();
		$sbs       = $attrs['styles_boxShadow'] ?? array();
		$sd        = $attrs['styles_dimensions'] ?? array();
		$sc        = $attrs['styles_color'] ?? '';
		$inner_sel = "$selector .wcb-container__inner";

		// --- Background (color, gradient, image) ---
		if ( ! empty( $sb ) ) {
			$css .= self::css_background_full( $sb, $selector );
		}

		// --- Border (supports 4-side + hoverColor) ---
		if ( ! empty( $sbd ) ) {
			$css .= self::css_border_full( $sbd, $selector );
		}

		// --- Box shadow (Normal + Hover) ---
		if ( ! empty( $sbs['Normal']['color'] ) ) {
			$css .= self::css_box_shadow( $sbs['Normal'], $selector );
		}
		if ( ! empty( $sbs['Hover']['color'] ) ) {
			$css .= self::css_box_shadow_hover( $sbs['Hover'], $selector );
		}

		// --- Padding & Margin (on wrap element) ---
		if ( ! empty( $sd ) ) {
			$css .= self::css_dimension( $sd, $selector );
		}

		// --- Container control (width, min-height, overflow, content box width, color, alignment) ---
		if ( ! empty( $gc ) ) {
			$css .= self::css_container_control( $gc, $selector, $unique_id, $sc );
		} elseif ( ! empty( $sc ) ) {
			// Fallback: apply color even without container settings.
			$css .= "$selector { color: $sc; }\n";
		} else {
			// Still need :has() parent margin reset for all containers.
			$css .= ".wp-block:has(> .wcb-container__wrap.{$unique_id}[data-uniqueid=\"{$unique_id}\"]) { margin-top: 0 !important; margin-bottom: 0 !important; }\n";
			$css .= ".wp-block[data-align=\"full\"]:has(> .wcb-container__wrap.{$unique_id}[data-uniqueid=\"{$unique_id}\"]) { {$selector} { margin-left: auto; margin-right: auto; } }\n";
			$css .= ".wp-block[data-align=\"wide\"]:has(> .wcb-container__wrap.{$unique_id}[data-uniqueid=\"{$unique_id}\"]) { margin-left: -8px; margin-right: -8px; {$selector} { margin-left: auto; margin-right: auto; } }\n";
			$css .= "$selector.alignfull { margin-left: calc(-50vw + 50%); margin-right: calc(-50vw + 50%); }\n";
		}

		// --- Flex properties + gap (on inner container) ---
		$has_flex = ! empty( $gfp ) && is_array( $gfp );
		$has_gap  = ! empty( $sd ) && is_array( $sd ) && ( ! empty( $sd['colunmGap'] ) || ! empty( $sd['rowGap'] ) );
		if ( $has_flex || $has_gap ) {
			$css .= self::css_flex_properties( $gfp, $sd, $inner_sel );
		}

		// --- Advance (responsive condition, z-index) ---
		$css .= self::css_advance( $attrs, $selector );

		return $css;
	}

	public static function process_button_block( $attrs, $selector, $unique_id ) {
		$css       = '';
		$st        = $attrs['style_text'] ?? array();
		$si        = $attrs['style_icon'] ?? array();
		$sbg       = $attrs['style_background'] ?? array();
		$sbd       = $attrs['style_border'] ?? array();
		$sbs       = $attrs['style_boxshadow'] ?? array();
		$sd        = $attrs['style_dimension'] ?? array();
		$btn_sel   = "$selector .wcb-button__main";
		$txt_sel   = "$selector .wcb-button__text";
		$icon_sel  = "$selector .wcb-button__icon";

		// --- Text typography & color ---
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], $txt_sel );
		}
		if ( ! empty( $st['color'] ) ) {
			$css .= "$txt_sel { color: {$st['color']}; }\n";
		}

		// --- Text hover color ---
		if ( ! empty( $st['hoverColor'] ) ) {
			$css .= "$btn_sel:hover $txt_sel { color: {$st['hoverColor']}; }\n";
		}

		// --- Icon color & size ---
		if ( ! empty( $si['color'] ) ) {
			$css .= "$icon_sel { color: {$si['color']}; }\n";
		}
		if ( ! empty( $si['hoverColor'] ) ) {
			$css .= "$btn_sel:hover $icon_sel { color: {$si['hoverColor']}; }\n";
		}
		if ( ! empty( $si['size'] ) ) {
			$css .= self::css_responsive( 'font-size', $si['size'], "$icon_sel, $icon_sel:before, $icon_sel svg" );
		}

		// --- Background (normal + hover via nested structure) ---
		if ( ! empty( $sbg['normal'] ) && is_array( $sbg['normal'] ) ) {
			$css .= self::css_background( $sbg['normal'], $btn_sel );
		}
		if ( ! empty( $sbg['hover'] ) && is_array( $sbg['hover'] ) ) {
			$css .= self::css_background( $sbg['hover'], "$btn_sel:hover" );
		}
		// Fallback: flat background.
		if ( empty( $sbg['normal'] ) && ! empty( $sbg ) ) {
			$css .= self::css_background( $sbg, $btn_sel );
		}

		// --- Border ---
		if ( ! empty( $sbd ) ) {
			$css .= self::css_border_full( $sbd, $btn_sel );
		}

		// --- Box shadow ---
		if ( ! empty( $sbs['Normal']['color'] ) ) {
			$css .= self::css_box_shadow( $sbs['Normal'], $btn_sel );
		}
		if ( ! empty( $sbs['Hover']['color'] ) ) {
			$css .= self::css_box_shadow_hover( $sbs['Hover'], "$btn_sel:hover" );
		}
		// Fallback: flat box shadow.
		if ( empty( $sbs['Normal'] ) && ! empty( $sbs['color'] ) ) {
			$css .= self::css_box_shadow( $sbs, $btn_sel );
		}

		// --- Dimension (padding + margin + colGap) ---
		if ( ! empty( $sd ) ) {
			$css .= self::css_dimension( $sd, $btn_sel );
			if ( ! empty( $sd['colGap'] ) ) {
				$css .= self::css_responsive( 'gap', $sd['colGap'], $btn_sel );
			}
		}

		// --- Advance ---
		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_buttons_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$st  = $attrs['style_text'] ?? array();
		$sd  = $attrs['style_dimension'] ?? array();
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], "$selector .wcb-button__text" );
		}
		if ( ! empty( $sd ) ) {
			$css .= self::css_dimension( $sd, $selector );
		}
		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_products_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$st  = $attrs['style_title'] ?? array();
		$sc  = $attrs['style_category'] ?? array();
		$sp  = $attrs['style_price'] ?? array();
		$sr  = $attrs['style_rating'] ?? array();
		$sf  = $attrs['style_featuredImage'] ?? array();
		$sl  = $attrs['style_layout'] ?? array();
		$sa  = $attrs['style_addToCardBtn'] ?? array();
		$sg  = $attrs['style_pagination'] ?? array();
		$ss  = $attrs['style_saleBadge'] ?? array();
		$so  = $attrs['style_outOfStock'] ?? array();
		$sb  = $attrs['style_border'] ?? array();
		$sd  = $attrs['style_dimension'] ?? array();

		$product_sel   = "$selector .wcb-products__product";
		$list_sel      = "$selector .wcb-products__list";
		$title_sel     = "$selector .wcb-products__product-title";
		$category_sel  = "$selector .wcb-products__product-category";
		$price_sel     = "$selector .wcb-products__product-price";
		$rating_sel    = "$selector .wcb-products__product-rating";
		$image_sel     = "$selector .wcb-products__product-image";
		$add_cart_sel  = "$selector .wcb-products__product-add-to-cart a";
		$sale_sel      = "$selector .wcb-products__product-sale-badge";
		$out_of_stock_sel   = "$selector .wcb-products__product-out-of-stock";
		$pagination_sel = "$selector .wcb-products__pagination .page-numbers";
		$pagination_active = "$selector .wcb-products__pagination .page-numbers.current";

		// --- Title ---
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], $title_sel );
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= "$title_sel { color: {$st['textColor']}; }\n";
		}
		if ( ! empty( $st['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $st['marginBottom'], $title_sel );
		}

		// --- Category ---
		if ( ! empty( $sc['typography'] ) ) {
			$css .= self::css_typography( $sc['typography'], $category_sel );
		}
		if ( ! empty( $sc['textColor'] ) ) {
			$css .= "$category_sel { color: {$sc['textColor']}; }\n";
		}

		// --- Price ---
		if ( ! empty( $sp['typography'] ) ) {
			$css .= self::css_typography( $sp['typography'], $price_sel );
		}
		if ( ! empty( $sp['textColor'] ) ) {
			$css .= "$price_sel { color: {$sp['textColor']}; }\n";
		}

		// --- Rating ---
		if ( ! empty( $sr['color'] ) ) {
			$css .= "$rating_sel { color: {$sr['color']}; }\n";
		}

		// --- Featured Image ---
		if ( ! empty( $sf['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sf['marginBottom'], $image_sel );
		}
		if ( ! empty( $sf['backgroundOverlay'] ) ) {
			$css .= "$selector .wcb-products__product-image-overlay { background-color: {$sf['backgroundOverlay']}; }\n";
		}
		if ( ! empty( $sf['border'] ) ) {
			$css .= self::css_border( $sf['border'], $image_sel );
		}

		// --- Layout ---
		if ( ! empty( $sl['textAlignment'] ) ) {
			$css .= "$product_sel { text-align: {$sl['textAlignment']}; }\n";
		}
		if ( ! empty( $sl['backgroundColor'] ) ) {
			$css .= "$product_sel { background-color: {$sl['backgroundColor']}; }\n";
		}
		if ( ! empty( $sl['padding'] ) ) {
			$css .= self::css_responsive_spacing( 'padding', $sl['padding'], $product_sel );
		}
		if ( ! empty( $sl['colunmGap'] ) ) {
			$css .= self::css_responsive( 'column-gap', $sl['colunmGap'], $list_sel );
		}
		if ( ! empty( $sl['rowGap'] ) ) {
			$css .= self::css_responsive( 'row-gap', $sl['rowGap'], $list_sel );
		}

		// --- Sale Badge ---
		if ( ! empty( $ss['typography'] ) ) {
			$css .= self::css_typography( $ss['typography'], $sale_sel );
		}
		if ( ! empty( $ss['backgroundColor'] ) ) {
			$css .= "$sale_sel { background-color: {$ss['backgroundColor']}; }\n";
		}
		if ( ! empty( $ss['textColor'] ) ) {
			$css .= "$sale_sel { color: {$ss['textColor']}; }\n";
		}

		// --- Out of Stock ---
		if ( ! empty( $so['typography'] ) ) {
			$css .= self::css_typography( $so['typography'], $out_of_stock_sel );
		}
		if ( ! empty( $so['backgroundColor'] ) ) {
			$css .= "$out_of_stock_sel { background-color: {$so['backgroundColor']}; }\n";
		}
		if ( ! empty( $so['textColor'] ) ) {
			$css .= "$out_of_stock_sel { color: {$so['textColor']}; }\n";
		}

		// --- Add to Cart ---
		if ( ! empty( $sa['typography'] ) ) {
			$css .= self::css_typography( $sa['typography'], $add_cart_sel );
		}
		if ( ! empty( $sa['colorAndBackgroundColor'] ) ) {
			$cbc = $sa['colorAndBackgroundColor'];
			if ( ! empty( $cbc['Normal']['color'] ) ) {
				$css .= "$add_cart_sel { color: {$cbc['Normal']['color']}; }\n";
			}
			if ( ! empty( $cbc['Normal']['backgroundColor'] ) ) {
				$css .= "$add_cart_sel { background-color: {$cbc['Normal']['backgroundColor']}; }\n";
			}
			if ( ! empty( $cbc['Hover']['color'] ) ) {
				$css .= "$add_cart_sel:hover { color: {$cbc['Hover']['color']}; }\n";
			}
			if ( ! empty( $cbc['Hover']['backgroundColor'] ) ) {
				$css .= "$add_cart_sel:hover { background-color: {$cbc['Hover']['backgroundColor']}; }\n";
			}
		}
		if ( ! empty( $sa['padding'] ) ) {
			$css .= self::css_responsive_spacing( 'padding', $sa['padding'], $add_cart_sel );
		}
		if ( ! empty( $sa['border'] ) ) {
			$css .= self::css_border( $sa['border'], $add_cart_sel );
		}

		// --- Pagination ---
		if ( ! empty( $sg ) ) {
			if ( ! empty( $sg['mainStyle']['Normal'] ) ) {
				$n = $sg['mainStyle']['Normal'];
				if ( ! empty( $n['color'] ) ) {
					$css .= "$pagination_sel { color: {$n['color']}; }\n";
				}
				if ( ! empty( $n['backgroundColor'] ) ) {
					$css .= "$pagination_sel { background-color: {$n['backgroundColor']}; }\n";
				}
				if ( ! empty( $n['border'] ) ) {
					$css .= self::css_border( $n['border'], $pagination_sel );
				}
			}
			if ( ! empty( $sg['mainStyle']['Active'] ) ) {
				$a = $sg['mainStyle']['Active'];
				if ( ! empty( $a['color'] ) ) {
					$css .= "$pagination_active { color: {$a['color']}; }\n";
				}
				if ( ! empty( $a['backgroundColor'] ) ) {
					$css .= "$pagination_active { background-color: {$a['backgroundColor']}; }\n";
				}
			}
			if ( ! empty( $sg['marginTop'] ) ) {
				$css .= self::css_responsive( 'margin-top', $sg['marginTop'], "$selector .wcb-products__pagination" );
			}
		}

		// --- Border ---
		if ( ! empty( $sb ) ) {
			$css .= self::css_border( $sb, $product_sel );
		}

		// --- Dimensions ---
		if ( ! empty( $sd ) ) {
			$css .= self::css_dimension( $sd, $selector );
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_posts_grid_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$st  = $attrs['style_title'] ?? array();
		$se  = $attrs['style_excerpt'] ?? array();
		$stx = $attrs['style_taxonomy'] ?? array();
		$sm  = $attrs['style_meta'] ?? array();
		$sr  = $attrs['style_readmoreLink'] ?? array();
		$sp  = $attrs['style_pagination'] ?? array();
		$sf  = $attrs['style_featuredImage'] ?? array();
		$sl  = $attrs['style_layout'] ?? array();
		$sb  = $attrs['style_border'] ?? array();
		$sbs = $attrs['style_boxShadow'] ?? array();

		$card_sel      = "$selector .wcbPostCard";
		$list_sel      = "$selector .wcb-posts-grid__list-posts";
		$title_sel     = "$selector .wcbPostCard__title a";
		$excerpt_sel   = "$selector .wcbPostCard__excerpt";
		$tax_sel       = "$selector .wcbPostCard__taxonomies a";
		$meta_sel      = "$selector .wcbPostCard__meta";
		$author_sel    = "$selector .wcbPostCard__meta-author-name";
		$date_sel      = "$selector .wcbPostCard__meta-date-and-comments";
		$readmore_sel  = "$selector .wcbPostCard__readmoreLink";
		$image_sel     = "$selector .wcbPostCard__featuredImage";
		$pag_sel       = "$selector .wcb-posts-grid__pagination .page-numbers";
		$pag_active    = "$selector .wcb-posts-grid__pagination .page-numbers.current";

		// --- Title ---
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], $title_sel );
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= "$title_sel { color: {$st['textColor']}; }\n";
		}
		if ( ! empty( $st['textHoverColor'] ) ) {
			$css .= "$title_sel:hover { color: {$st['textHoverColor']}; }\n";
		}
		if ( ! empty( $st['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $st['marginBottom'], $title_sel );
		}

		// --- Excerpt ---
		if ( ! empty( $se['typography'] ) ) {
			$css .= self::css_typography( $se['typography'], $excerpt_sel );
		}
		if ( ! empty( $se['textColor'] ) ) {
			$css .= "$excerpt_sel { color: {$se['textColor']}; }\n";
		}
		if ( ! empty( $se['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $se['marginBottom'], $excerpt_sel );
		}

		// --- Taxonomy ---
		if ( ! empty( $stx['typography'] ) ) {
			$css .= self::css_typography( $stx['typography'], $tax_sel );
		}
		if ( ! empty( $stx['textColor'] ) ) {
			$css .= "$tax_sel { color: {$stx['textColor']}; }\n";
		}
		if ( ! empty( $stx['backgroundColor'] ) ) {
			$css .= "$tax_sel { background-color: {$stx['backgroundColor']}; }\n";
		}
		if ( ! empty( $stx['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $stx['marginBottom'], $tax_sel );
		}

		// --- Meta ---
		if ( ! empty( $sm['authorTypography'] ) ) {
			$css .= self::css_typography( $sm['authorTypography'], $author_sel );
		}
		if ( ! empty( $sm['dateTypography'] ) ) {
			$css .= self::css_typography( $sm['dateTypography'], $date_sel );
		}
		if ( ! empty( $sm['authorColor'] ) ) {
			$css .= "$author_sel { color: {$sm['authorColor']}; }\n";
		}
		if ( ! empty( $sm['dateTextColor'] ) ) {
			$css .= "$date_sel { color: {$sm['dateTextColor']}; }\n";
		}
		if ( ! empty( $sm['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sm['marginBottom'], $meta_sel );
		}

		// --- Read more link ---
		if ( ! empty( $sr['typography'] ) ) {
			$css .= self::css_typography( $sr['typography'], $readmore_sel );
		}
		if ( ! empty( $sr['colorAndBackgroundColor'] ) ) {
			$cbc = $sr['colorAndBackgroundColor'];
			if ( ! empty( $cbc['Normal']['color'] ) ) {
				$css .= "$readmore_sel { color: {$cbc['Normal']['color']}; }\n";
			}
			if ( ! empty( $cbc['Normal']['backgroundColor'] ) ) {
				$css .= "$readmore_sel { background-color: {$cbc['Normal']['backgroundColor']}; }\n";
			}
			if ( ! empty( $cbc['Hover']['color'] ) ) {
				$css .= "$readmore_sel:hover { color: {$cbc['Hover']['color']}; }\n";
			}
			if ( ! empty( $cbc['Hover']['backgroundColor'] ) ) {
				$css .= "$readmore_sel:hover { background-color: {$cbc['Hover']['backgroundColor']}; }\n";
			}
		}
		if ( ! empty( $sr['padding'] ) ) {
			$css .= self::css_responsive_spacing( 'padding', $sr['padding'], $readmore_sel );
		}
		if ( ! empty( $sr['border'] ) ) {
			$css .= self::css_border( $sr['border'], $readmore_sel );
		}
		if ( ! empty( $sr['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sr['marginBottom'], $readmore_sel );
		}

		// --- Pagination ---
		if ( ! empty( $sp['mainStyle'] ) ) {
			$ms = $sp['mainStyle'];
			if ( ! empty( $ms['Normal'] ) ) {
				$n = $ms['Normal'];
				if ( ! empty( $n['color'] ) ) {
					$css .= "$pag_sel { color: {$n['color']}; }\n";
				}
				if ( ! empty( $n['backgroundColor'] ) ) {
					$css .= "$pag_sel { background-color: {$n['backgroundColor']}; }\n";
				}
				if ( ! empty( $n['border'] ) ) {
					$css .= self::css_border( $n['border'], $pag_sel );
				}
			}
			if ( ! empty( $ms['Active'] ) ) {
				$a = $ms['Active'];
				if ( ! empty( $a['color'] ) ) {
					$css .= "$pag_active { color: {$a['color']}; }\n";
				}
				if ( ! empty( $a['backgroundColor'] ) ) {
					$css .= "$pag_active { background-color: {$a['backgroundColor']}; }\n";
				}
				if ( ! empty( $a['border'] ) ) {
					$css .= self::css_border( $a['border'], $pag_active );
				}
			}
			if ( ! empty( $sp['marginTop'] ) ) {
				$css .= self::css_responsive( 'margin-top', $sp['marginTop'], "$selector .wcb-posts-grid__pagination" );
			}
		}

		// --- Featured image ---
		if ( ! empty( $sf['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sf['marginBottom'], $image_sel );
		}
		if ( ! empty( $sf['backgroundOverlay'] ) ) {
			$css .= "$selector .wcbPostCard__featuredImage-overlay { background-color: {$sf['backgroundOverlay']}; }\n";
		}
		if ( ! empty( $sf['border'] ) ) {
			$css .= self::css_border( $sf['border'], $image_sel );
		}

		// --- Layout (grid) ---
		if ( ! empty( $sl['colunmGap'] ) ) {
			$css .= self::css_responsive( 'column-gap', $sl['colunmGap'], $list_sel );
		}
		if ( ! empty( $sl['rowGap'] ) ) {
			$css .= self::css_responsive( 'row-gap', $sl['rowGap'], $list_sel );
		}
		if ( ! empty( $sl['textAlignment'] ) ) {
			$css .= "$card_sel { text-align: {$sl['textAlignment']}; }\n";
		}
		if ( ! empty( $sl['backgroundColor'] ) ) {
			$css .= "$card_sel { background-color: {$sl['backgroundColor']}; }\n";
		}
		if ( ! empty( $sl['padding'] ) ) {
			$css .= self::css_responsive_spacing( 'padding', $sl['padding'], $card_sel );
		}

		// --- Border ---
		if ( ! empty( $sb ) ) {
			$css .= self::css_border( $sb, $card_sel );
		}

		// --- Box shadow ---
		if ( ! empty( $sbs['Normal']['color'] ) ) {
			$css .= self::css_box_shadow( $sbs['Normal'], $card_sel );
		}
		if ( ! empty( $sbs['Hover']['color'] ) ) {
			$css .= self::css_box_shadow_hover( $sbs['Hover'], "$card_sel:hover" );
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_cta_block( $attrs, $selector, $unique_id ) {
		$css  = '';
		$gl  = $attrs['general_layout'] ?? array();
		$st  = $attrs['style_title'] ?? array();
		$sd  = $attrs['style_description'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();

		$inner_sel   = "$selector .wcb-cta__inner";
		$content_sel = "$selector .wcb-cta__content";
		$title_sel   = "$selector .wcb-cta__title";
		$desc_sel    = "$selector .wcb-cta__description";

		// --- Layout: text alignment ---
		if ( ! empty( $gl['textAlignment'] ) ) {
			$css .= self::css_responsive( 'text-align', $gl['textAlignment'], $inner_sel );
		}

		// --- Layout: flex direction ---
		if ( ! empty( $gl['flexDirection'] ) ) {
			$css .= self::css_responsive( 'flex-direction', $gl['flexDirection'], $inner_sel );
		}

		// --- Layout: content width ---
		if ( ! empty( $gl['contentWidth'] ) ) {
			$css .= self::css_responsive( 'width', $gl['contentWidth'], $content_sel );
		}

		// --- Gap ---
		if ( ! empty( $sdm['gap'] ) ) {
			$css .= self::css_responsive( 'gap', $sdm['gap'], $inner_sel );
		}

		// --- Padding & Margin ---
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $inner_sel );
		}

		// --- Title ---
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], $title_sel );
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= "$title_sel { color: {$st['textColor']}; }\n";
		}
		if ( ! empty( $st['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $st['marginBottom'], $title_sel );
		}

		// --- Description ---
		if ( ! empty( $sd['typography'] ) ) {
			$css .= self::css_typography( $sd['typography'], $desc_sel );
		}
		if ( ! empty( $sd['textColor'] ) ) {
			$css .= "$desc_sel { color: {$sd['textColor']}; }\n";
		}
		if ( ! empty( $sd['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sd['marginBottom'], $desc_sel );
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_team_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$gl  = $attrs['general_layout'] ?? array();
		$gi  = $attrs['general_image'] ?? array();
		$st  = $attrs['style_title'] ?? array();
		$sd  = $attrs['style_desination'] ?? array();
		$sds = $attrs['style_description'] ?? array();
		$ss  = $attrs['style_socialIcons'] ?? array();
		$si  = $attrs['style_image'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();

		$heading_sel     = "$selector .wcb-team__heading";
		$designation_sel = "$selector .wcb-team__designation";
		$desc_sel        = "$selector .wcb-team__description";
		$social_sel      = "$selector .wcb-team__social-icon";
		$image_sel       = "$selector .wcb-team__image";

		// --- Text alignment ---
		if ( ! empty( $gl['textAlignment'] ) ) {
			$css .= self::css_responsive( 'text-align', $gl['textAlignment'], $selector );
		}

		// --- Title ---
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], $heading_sel );
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= "$heading_sel { color: {$st['textColor']}; }\n";
		}
		if ( ! empty( $st['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $st['marginBottom'], $heading_sel );
		}

		// --- Designation ---
		if ( ! empty( $sd['typography'] ) ) {
			$css .= self::css_typography( $sd['typography'], $designation_sel );
		}
		if ( ! empty( $sd['textColor'] ) ) {
			$css .= "$designation_sel { color: {$sd['textColor']}; }\n";
		}
		if ( ! empty( $sd['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sd['marginBottom'], $designation_sel );
		}

		// --- Description ---
		if ( ! empty( $sds['typography'] ) ) {
			$css .= self::css_typography( $sds['typography'], $desc_sel );
		}
		if ( ! empty( $sds['textColor'] ) ) {
			$css .= "$desc_sel { color: {$sds['textColor']}; }\n";
		}
		if ( ! empty( $sds['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sds['marginBottom'], $desc_sel );
		}

		// --- Social Icons ---
		if ( ! empty( $ss['color'] ) ) {
			$css .= "$social_sel { color: {$ss['color']}; }\n";
		}
		if ( ! empty( $ss['hoverColor'] ) ) {
			$css .= "$social_sel:hover { color: {$ss['hoverColor']}; }\n";
		}
		if ( ! empty( $ss['iconSize'] ) ) {
			$css .= self::css_responsive( 'font-size', $ss['iconSize'], $social_sel );
		}
		if ( ! empty( $ss['iconSpacing'] ) ) {
			$css .= self::css_responsive( 'gap', $ss['iconSpacing'], "$selector .wcb-team__socials" );
		}

		// --- Image ---
		if ( ! empty( $si['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $si['marginBottom'], $image_sel );
		}
		if ( ! empty( $si['border'] ) ) {
			$css .= self::css_border( $si['border'], "$image_sel img" );
		}
		if ( ! empty( $si['imageSize'] ) ) {
			$css .= self::css_responsive( 'width', $si['imageSize'], "$image_sel img" );
		}

		// --- Dimensions ---
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_icon_box_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$gl  = $attrs['general_layout'] ?? array();
		$gi  = $attrs['general_icon'] ?? array();
		$st  = $attrs['style_title'] ?? array();
		$sd  = $attrs['style_desination'] ?? array();
		$sds = $attrs['style_description'] ?? array();
		$ss  = $attrs['style_separator'] ?? array();
		$si  = $attrs['style_Icon'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();

		$heading_sel     = "$selector .wcb-icon-box__heading";
		$designation_sel = "$selector .wcb-icon-box__designation";
		$desc_sel        = "$selector .wcb-icon-box__description";
		$separator_sel   = "$selector .wcb-icon-box__separator";
		$icon_sel        = "$selector .wcb-icon-box__icon";

		// --- Text alignment ---
		if ( ! empty( $gl['textAlignment'] ) ) {
			$css .= self::css_responsive( 'text-align', $gl['textAlignment'], $selector );
		}

		// --- Title ---
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], $heading_sel );
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= "$heading_sel { color: {$st['textColor']}; }\n";
		}
		if ( ! empty( $st['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $st['marginBottom'], $heading_sel );
		}

		// --- Designation ---
		if ( ! empty( $sd['typography'] ) ) {
			$css .= self::css_typography( $sd['typography'], $designation_sel );
		}
		if ( ! empty( $sd['textColor'] ) ) {
			$css .= "$designation_sel { color: {$sd['textColor']}; }\n";
		}
		if ( ! empty( $sd['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sd['marginBottom'], $designation_sel );
		}

		// --- Description ---
		if ( ! empty( $sds['typography'] ) ) {
			$css .= self::css_typography( $sds['typography'], $desc_sel );
		}
		if ( ! empty( $sds['textColor'] ) ) {
			$css .= "$desc_sel { color: {$sds['textColor']}; }\n";
		}
		if ( ! empty( $sds['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sds['marginBottom'], $desc_sel );
		}

		// --- Icon ---
		if ( ! empty( $si['color'] ) ) {
			$css .= "$icon_sel { color: {$si['color']}; }\n";
		}
		if ( ! empty( $si['hoverColor'] ) ) {
			$css .= "$icon_sel:hover { color: {$si['hoverColor']}; }\n";
		}
		if ( ! empty( $si['size'] ) ) {
			$css .= self::css_responsive( 'font-size', $si['size'], "$selector .wcb-icon-full" );
		}
		if ( ! empty( $si['border'] ) ) {
			$css .= self::css_border( $si['border'], $icon_sel );
		}
		if ( ! empty( $si['dimensions'] ) ) {
			$css .= self::css_dimension( $si['dimensions'], "$selector .wcb-icon-box__icon-wrap" );
		}

		// --- Separator ---
		if ( ! empty( $ss['width'] ) ) {
			$css .= self::css_responsive( 'width', $ss['width'], $separator_sel );
		}
		if ( ! empty( $ss['color'] ) ) {
			$css .= "$separator_sel { border-color: {$ss['color']}; }\n";
		}
		if ( ! empty( $ss['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $ss['marginBottom'], $separator_sel );
		}

		// --- Dimensions ---
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_icon_block( $attrs, $selector, $unique_id ) {
		$css  = '';
		$gi   = $attrs['general_icon'] ?? array();
		$si   = $attrs['style_icon'] ?? array();
		$sbg  = $attrs['style_background'] ?? array();
		$sbd  = $attrs['style_border'] ?? array();
		$sbs  = $attrs['style_boxshadow'] ?? array();
		$sd   = $attrs['style_dimension'] ?? array();

		$content_sel = "$selector .wcb-icon__content";
		$icon_sel    = "$content_sel .wcb-icon-full";

		// --- Alignment ---
		if ( ! empty( $gi['alignment'] ) ) {
			$css .= self::css_responsive( 'text-align', $gi['alignment'], $selector );
		}

		// --- Icon color & hover ---
		if ( ! empty( $si['color'] ) ) {
			$css .= "$icon_sel { color: {$si['color']}; }\n";
		}
		if ( ! empty( $si['hoverColor'] ) ) {
			$css .= "$content_sel:hover $icon_sel { color: {$si['hoverColor']}; }\n";
		}

		// --- Icon size ---
		if ( ! empty( $gi['size'] ) ) {
			$css .= self::css_responsive( 'width', $gi['size'], "$selector .wcb-icon-full" );
			$css .= self::css_responsive( 'font-size', $gi['size'], "$selector .wcb-icon-full" );
		}
		// Fallback: style_icon size as font-size.
		if ( ! empty( $si['size'] ) ) {
			$css .= self::css_responsive( 'font-size', $si['size'], "$selector .wcb-icon__icon" );
		}

		// --- Background (on content) ---
		if ( ! empty( $sbg['normal'] ) && is_array( $sbg['normal'] ) ) {
			$css .= self::css_background( $sbg['normal'], $content_sel );
		}
		if ( ! empty( $sbg['hover'] ) && is_array( $sbg['hover'] ) ) {
			$css .= self::css_background( $sbg['hover'], "$content_sel:hover" );
		}
		// Fallback.
		if ( empty( $sbg['normal'] ) && ! empty( $sbg ) ) {
			$css .= self::css_background( $sbg, $content_sel );
		}

		// --- Border (on content) ---
		if ( ! empty( $sbd ) ) {
			$css .= self::css_border_full( $sbd, $content_sel );
		}

		// --- Box shadow (on content) ---
		if ( ! empty( $sbs['Normal']['color'] ) ) {
			$css .= self::css_box_shadow( $sbs['Normal'], $content_sel );
		}
		if ( ! empty( $sbs['Hover']['color'] ) ) {
			$css .= self::css_box_shadow_hover( $sbs['Hover'], "$content_sel:hover" );
		}
		// Fallback.
		if ( empty( $sbs['Normal'] ) && ! empty( $sbs['color'] ) ) {
			$css .= self::css_box_shadow( $sbs, $content_sel );
		}

		// --- Dimensions (margin on wrap, padding on content) ---
		if ( ! empty( $sd['margin'] ) ) {
			$css .= self::css_responsive_spacing( 'margin', $sd['margin'], $selector );
		}
		if ( ! empty( $sd['padding'] ) ) {
			$css .= self::css_responsive_spacing( 'padding', $sd['padding'], $content_sel );
		}

		// --- Cursor pointer if link enabled ---
		if ( ! empty( $gi['enableLink'] ) ) {
			$css .= "$content_sel { cursor: pointer; }\n";
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_icon_list_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$st  = $attrs['style_title'] ?? array();
		$si  = $attrs['style_Icon'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], "$selector .wcb-icon-list__heading" );
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= "$selector .wcb-icon-list__heading { color: {$st['textColor']}; }\n";
		}
		if ( ! empty( $st['textColorHover'] ) ) {
			$css .= "$selector .wcb-icon-list__heading:hover { color: {$st['textColorHover']}; }\n";
		}
		if ( ! empty( $si['color'] ) ) {
			$css .= "$selector .wcb-icon-list__icon { color: {$si['color']}; }\n";
		}
		if ( ! empty( $si['hoverColor'] ) ) {
			$css .= "$selector .wcb-icon-list__icon:hover { color: {$si['hoverColor']}; }\n";
		}
		if ( ! empty( $si['iconSize'] ) ) {
			$css .= self::css_responsive( 'font-size', $si['iconSize'], "$selector .wcb-icon-list__icon" );
		}
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}
		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_icon_child_block( $attrs, $selector, $unique_id ) {
		return self::process_icon_list_block( $attrs, $selector, $unique_id );
	}

	public static function process_image_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$si  = $attrs['style_image'] ?? array();
		$so  = $attrs['style_overlay'] ?? array();
		$sc  = $attrs['style_caption'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();

		$overlay_sel = "$selector .wcb-image__overlay-bg";
		$caption_sel = "$selector figcaption.wp-element-caption";

		// --- Image border ---
		if ( ! empty( $si['border'] ) ) {
			$css .= self::css_border( $si['border'], "$selector img" );
		}

		// --- Overlay ---
		if ( ! empty( $so['backgroundColor'] ) ) {
			$css .= "$overlay_sel { background-color: {$so['backgroundColor']}; }\n";
		}

		// --- Caption ---
		if ( ! empty( $sc['typography'] ) ) {
			$css .= self::css_typography( $sc['typography'], $caption_sel );
		}
		if ( ! empty( $sc['textColor'] ) ) {
			$css .= "$caption_sel { color: {$sc['textColor']}; }\n";
		}

		// --- Dimensions ---
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_countdown_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$sn  = $attrs['style_number'] ?? array();
		$sl  = $attrs['style_label'] ?? array();
		$sbg = $attrs['style_background'] ?? array();
		$sbd = $attrs['style_border'] ?? array();
		$sbs = $attrs['style_boxshadow'] ?? array();
		$sd  = $attrs['style_dimension'] ?? array();
		$sdm = $attrs['style_dimensions'] ?? array();

		$box_sel    = "$selector .wcb-countdown__box";
		$number_sel = "$selector .wcb-countdown__number";
		$label_sel  = "$selector .wcb-countdown__label";

		// --- Number ---
		if ( ! empty( $sn['typography'] ) ) {
			$css .= self::css_typography( $sn['typography'], $number_sel );
		}
		if ( ! empty( $sn['textColor'] ) ) {
			$css .= "$number_sel { color: {$sn['textColor']}; }\n";
		}

		// --- Label ---
		if ( ! empty( $sl['typography'] ) ) {
			$css .= self::css_typography( $sl['typography'], $label_sel );
		}
		if ( ! empty( $sl['textColor'] ) ) {
			$css .= "$label_sel { color: {$sl['textColor']}; }\n";
		}

		// --- Box: background, border, box shadow, dimension ---
		if ( ! empty( $sbg ) ) {
			$css .= self::css_background( $sbg, $box_sel );
		}
		if ( ! empty( $sbd ) ) {
			$css .= self::css_border( $sbd, $box_sel );
		}
		if ( ! empty( $sbs['Normal']['color'] ) ) {
			$css .= self::css_box_shadow( $sbs['Normal'], $box_sel );
		}
		if ( ! empty( $sbs['Hover']['color'] ) ) {
			$css .= self::css_box_shadow_hover( $sbs['Hover'], "$box_sel:hover" );
		}
		// Fallback.
		if ( empty( $sbs['Normal'] ) && ! empty( $sbs['color'] ) ) {
			$css .= self::css_box_shadow( $sbs, $box_sel );
		}
		if ( ! empty( $sd ) ) {
			$css .= self::css_dimension( $sd, $box_sel );
		}

		// --- Wrap dimensions ---
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_counter_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$gl  = $attrs['general_layout'] ?? array();
		$st  = $attrs['style_title'] ?? array();
		$sd  = $attrs['style_desination'] ?? array();
		$sds = $attrs['style_description'] ?? array();
		$si  = $attrs['style_Icon'] ?? array();
		$sp  = $attrs['style_progress'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();

		$number_sel      = "$selector .wcb-icon-box__number";
		$desc_sel        = "$selector .wcb-icon-box__description";
		$icon_sel        = "$selector .wcb-icon-box__icon";
		$progress_bar_sel = "$selector .wcb-icon-box__progress-bar-wrap";
		$progress_circle_sel = "$selector .wcb-icon-box__progress-circle-wrap";

		// --- Text alignment ---
		if ( ! empty( $gl['textAlignment'] ) ) {
			$css .= self::css_responsive( 'text-align', $gl['textAlignment'], $selector );
		}

		// --- Number (title + designation) ---
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], $number_sel );
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= "$number_sel { color: {$st['textColor']}; }\n";
		}
		if ( ! empty( $st['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $st['marginBottom'], $number_sel );
		}
		if ( ! empty( $sd['typography'] ) ) {
			$css .= self::css_typography( $sd['typography'], $number_sel );
		}

		// --- Description ---
		if ( ! empty( $sds['typography'] ) ) {
			$css .= self::css_typography( $sds['typography'], $desc_sel );
		}
		if ( ! empty( $sds['textColor'] ) ) {
			$css .= "$desc_sel { color: {$sds['textColor']}; }\n";
		}
		if ( ! empty( $sds['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sds['marginBottom'], $desc_sel );
		}

		// --- Icon ---
		if ( ! empty( $si['color'] ) ) {
			$css .= "$icon_sel { color: {$si['color']}; }\n";
		}
		if ( ! empty( $si['hoverColor'] ) ) {
			$css .= "$icon_sel:hover { color: {$si['hoverColor']}; }\n";
		}
		if ( ! empty( $si['iconSize'] ) ) {
			$css .= self::css_responsive( 'font-size', $si['iconSize'], $icon_sel );
		}
		if ( ! empty( $si['border'] ) ) {
			$css .= self::css_border( $si['border'], $icon_sel );
		}
		if ( ! empty( $si['dimensions'] ) ) {
			$css .= self::css_dimension( $si['dimensions'], "$selector .wcb-icon-box__icon-wrap" );
		}

		// --- Progress ---
		if ( ! empty( $sp['color'] ) ) {
			$css .= "$progress_bar_sel, $progress_circle_sel { background-color: {$sp['color']}; }\n";
		}

		// --- Dimensions ---
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_faq_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$gg  = $attrs['general_general'] ?? array();
		$sc  = $attrs['style_container'] ?? array();
		$sq  = $attrs['style_question'] ?? array();
		$si  = $attrs['style_icon'] ?? array();
		$sa  = $attrs['style_answer'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();

		$faq_wrap      = "$selector .wcb-faq-child__wrap";
		$faq_question  = "$selector .wcb-faq-child__question";
		$faq_q_text    = "$selector .wcb-faq-child__question-text";
		$faq_answer    = "$selector .wcb-faq-child__answer";
		$faq_icon      = "$selector .wcb-faq-child__icon";
		$inner_sel     = "$selector .wcb-faq__inner";

		// --- Container (background, border) on .wcb-faq-child__wrap ---
		if ( ! empty( $sc['backgroundColor'] ) ) {
			$css .= "$faq_wrap { background-color: {$sc['backgroundColor']}; }\n";
		}
		if ( ! empty( $sc['border'] ) ) {
			$css .= self::css_border( $sc['border'], $faq_wrap );
		}
		if ( ! empty( $sc['colunmGap'] ) ) {
			$css .= self::css_responsive( 'column-gap', $sc['colunmGap'], $inner_sel );
		}
		if ( ! empty( $sc['rowGap'] ) ) {
			$css .= self::css_responsive( 'row-gap', $sc['rowGap'], $inner_sel );
		}

		// --- Question ---
		if ( ! empty( $sq['typography'] ) ) {
			$css .= self::css_typography( $sq['typography'], $faq_q_text );
		}
		if ( ! empty( $sq['backgroundColor'] ) ) {
			$css .= "$faq_question { background-color: {$sq['backgroundColor']}; }\n";
		}
		if ( ! empty( $sq['textColor'] ) ) {
			$css .= "$faq_q_text { color: {$sq['textColor']}; }\n";
		}

		// --- Icon ---
		if ( ! empty( $si['color'] ) ) {
			$css .= "$faq_icon { color: {$si['color']}; }\n";
		}
		if ( ! empty( $si['size'] ) ) {
			$css .= self::css_responsive( 'font-size', $si['size'], $faq_icon );
		}

		// --- Answer ---
		if ( ! empty( $sa['typography'] ) ) {
			$css .= self::css_typography( $sa['typography'], $faq_answer );
		}
		if ( ! empty( $sa['backgroundColor'] ) ) {
			$css .= "$faq_answer { background-color: {$sa['backgroundColor']}; }\n";
		}
		if ( ! empty( $sa['textColor'] ) ) {
			$css .= "$faq_answer { color: {$sa['textColor']}; }\n";
		}

		// --- Dimensions ---
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_faq_child_block( $attrs, $selector, $unique_id ) {
		return self::css_advance( $attrs, $selector );
	}

	public static function process_tabs_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$gg  = $attrs['general_general'] ?? array();
		$sc  = $attrs['style_container'] ?? array();
		$st  = $attrs['style_title'] ?? array();
		$sb  = $attrs['style_body'] ?? array();
		$si  = $attrs['style_icon'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();

		$title_sel         = "$selector .wcb-tabs__title";
		$title_active_sel  = "$selector .wcb-tabs__title-selected";
		$body_sel          = "$selector .wcb-tab-child__wrap";
		$icon_sel          = "$selector .wcb-tabs__icon";
		$icon_active_sel   = "$selector .wcb-tabs__icon-selected";
		$inner_sel         = "$selector .wcb-tabs__contents";

		// --- Container ---
		if ( ! empty( $sc['backgroundColor'] ) ) {
			$css .= "$selector { background-color: {$sc['backgroundColor']}; }\n";
		}
		if ( ! empty( $sc['colunmGap'] ) ) {
			$css .= self::css_responsive( 'column-gap', $sc['colunmGap'], $inner_sel );
		}
		if ( ! empty( $sc['rowGap'] ) ) {
			$css .= self::css_responsive( 'row-gap', $sc['rowGap'], $inner_sel );
		}

		// --- Title ---
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], $title_sel );
		}
		if ( ! empty( $st['backgroundColor'] ) ) {
			$css .= "$title_sel { background-color: {$st['backgroundColor']}; }\n";
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= "$title_sel { color: {$st['textColor']}; }\n";
		}
		if ( ! empty( $st['activeBackgroundColor'] ) ) {
			$css .= "$title_active_sel { background-color: {$st['activeBackgroundColor']}; }\n";
		}
		if ( ! empty( $st['activeTextColor'] ) ) {
			$css .= "$title_active_sel { color: {$st['activeTextColor']}; }\n";
		}

		// --- Body ---
		if ( ! empty( $sb['backgroundColor'] ) ) {
			$css .= "$body_sel { background-color: {$sb['backgroundColor']}; }\n";
		}
		if ( ! empty( $sb['border'] ) ) {
			$css .= self::css_border( $sb['border'], $body_sel );
		}

		// --- Icon ---
		if ( ! empty( $si['color'] ) ) {
			$css .= "$icon_sel { color: {$si['color']}; }\n";
		}
		if ( ! empty( $si['activeColor'] ) ) {
			$css .= "$icon_active_sel { color: {$si['activeColor']}; }\n";
		}

		// --- Dimensions ---
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_tab_child_block( $attrs, $selector, $unique_id ) {
		return self::css_advance( $attrs, $selector );
	}

	public static function process_testimonials_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$gg  = $attrs['general_general'] ?? array();
		$sn  = $attrs['style_name'] ?? array();
		$sc  = $attrs['style_content'] ?? array();
		$sco = $attrs['style_company'] ?? array();
		$si  = $attrs['style_image'] ?? array();
		$sr  = $attrs['style_rating'] ?? array();
		$sab = $attrs['style_backgroundAndBorder'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();

		$item_sel    = "$selector .wcb-testimonials__item";
		$name_sel    = "$selector .wcb-testimonials__item-name";
		$content_sel = "$selector .wcb-testimonials__item-content";
		$company_sel = "$selector .wcb-testimonials__item-company";
		$image_sel   = "$selector .wcb-testimonials__item-image";
		$rating_sel  = "$selector .wcb-testimonials__item-rating";

		// --- Text alignment ---
		if ( ! empty( $gg['textAlignment'] ) ) {
			$css .= self::css_responsive( 'text-align', $gg['textAlignment'], $item_sel );
		}

		// --- Name ---
		if ( ! empty( $sn['typography'] ) ) {
			$css .= self::css_typography( $sn['typography'], $name_sel );
		}
		if ( ! empty( $sn['textColor'] ) ) {
			$css .= "$name_sel { color: {$sn['textColor']}; }\n";
		}
		if ( ! empty( $sn['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sn['marginBottom'], $name_sel );
		}

		// --- Content ---
		if ( ! empty( $sc['typography'] ) ) {
			$css .= self::css_typography( $sc['typography'], $content_sel );
		}
		if ( ! empty( $sc['textColor'] ) ) {
			$css .= "$content_sel { color: {$sc['textColor']}; }\n";
		}
		if ( ! empty( $sc['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sc['marginBottom'], $content_sel );
		}

		// --- Company ---
		if ( ! empty( $sco['typography'] ) ) {
			$css .= self::css_typography( $sco['typography'], $company_sel );
		}
		if ( ! empty( $sco['textColor'] ) ) {
			$css .= "$company_sel { color: {$sco['textColor']}; }\n";
		}

		// --- Image ---
		if ( ! empty( $si['radius'] ) ) {
			$css .= self::css_responsive( 'border-radius', $si['radius'], "$image_sel img", 'px' );
		}
		if ( ! empty( $si['imageSize'] ) ) {
			$css .= self::css_responsive( 'width', $si['imageSize'], "$image_sel img" );
		}

		// --- Rating ---
		if ( ! empty( $sr['color'] ) ) {
			$css .= "$rating_sel { color: {$sr['color']}; }\n";
		}
		if ( ! empty( $sr['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sr['marginBottom'], $rating_sel );
		}

		// --- Background & Border ---
		if ( ! empty( $sab['background'] ) ) {
			$css .= self::css_background( $sab['background'], $item_sel );
		}
		if ( ! empty( $sab['border'] ) ) {
			$css .= self::css_border( $sab['border'], $item_sel );
		}

		// --- Dimensions ---
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_slider_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$gg  = $attrs['general_general'] ?? array();
		$sab = $attrs['style_backgroundAndBorder'] ?? array();
		$sbs = $attrs['style_boxshadow'] ?? array();
		$sa  = $attrs['style_arrowAndDots'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();

		$wrap_sel   = "$selector.wcb-slider__wrap";
		$arrow_sel  = "$selector .slick-arrow";
		$dots_sel   = "$selector .slick-dots";
		$prev_sel   = "$selector .slick-prev";
		$next_sel   = "$selector .slick-next";

		// --- Text alignment ---
		if ( ! empty( $gg['textAlignment'] ) ) {
			$css .= self::css_responsive( 'text-align', $gg['textAlignment'], $wrap_sel );
		}

		// --- Background & Border (on .wcb-slider__wrap) ---
		if ( ! empty( $sab['background'] ) ) {
			$css .= self::css_background( $sab['background'], $wrap_sel );
		}
		if ( ! empty( $sab['border'] ) ) {
			$css .= self::css_border_full( $sab['border'], $wrap_sel );
		}

		// --- Box shadow ---
		if ( ! empty( $sbs['Normal']['color'] ) ) {
			$css .= self::css_box_shadow( $sbs['Normal'], $wrap_sel );
		}
		if ( ! empty( $sbs['Hover']['color'] ) ) {
			$css .= self::css_box_shadow_hover( $sbs['Hover'], "$wrap_sel:hover" );
		}

		// --- Slick arrows ---
		if ( ! empty( $sa['border'] ) ) {
			$css .= self::css_border( $sa['border'], $arrow_sel );
		}
		if ( ! empty( $sa['arrowSize'] ) ) {
			$css .= "$arrow_sel svg { width: {$sa['arrowSize']}; height: {$sa['arrowSize']}; }\n";
		}
		if ( ! empty( $sa['color'] ) ) {
			$css .= "$arrow_sel { color: {$sa['color']}; }\n";
		}
		if ( ! empty( $sa['dotsMarginTop'] ) ) {
			$css .= "$dots_sel { margin-top: {$sa['dotsMarginTop']}; }\n";
		}

		// --- Dimensions ---
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_slider_child_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$sn  = $attrs['style_name'] ?? array();
		$sc  = $attrs['style_content'] ?? array();
		$sb  = $attrs['style_callToActionButton'] ?? array();
		$si  = $attrs['style_image'] ?? array();
		$sab = $attrs['style_backgroundAndBorder'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();

		$name_sel    = "$selector .wcb-slider-child__name";
		$content_sel = "$selector .wcb-slider-child__content";
		$btn_sel     = "$selector .wcb-slider-child__btn-text";
		$btn_inner   = "$selector .wcb-slider-child__btn-inner";
		$icon_sel    = "$selector .wcb-top__icon";

		// --- Name ---
		if ( ! empty( $sn['typography'] ) ) {
			$css .= self::css_typography( $sn['typography'], $name_sel );
		}
		if ( ! empty( $sn['textColor'] ) ) {
			$css .= "$name_sel { color: {$sn['textColor']}; }\n";
		}
		if ( ! empty( $sn['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sn['marginBottom'], $name_sel );
		}

		// --- Content ---
		if ( ! empty( $sc['typography'] ) ) {
			$css .= self::css_typography( $sc['typography'], $content_sel );
		}
		if ( ! empty( $sc['textColor'] ) ) {
			$css .= "$content_sel { color: {$sc['textColor']}; }\n";
		}
		if ( ! empty( $sc['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sc['marginBottom'], $content_sel );
		}

		// --- Call to action button ---
		if ( ! empty( $sb['typographyText'] ) ) {
			$css .= self::css_typography( $sb['typographyText'], $btn_sel );
		}
		if ( ! empty( $sb['colorText'] ) ) {
			$css .= "$btn_sel { color: {$sb['colorText']}; }\n";
		}
		if ( ! empty( $sb['hoverColorText'] ) ) {
			$css .= "$btn_sel:hover { color: {$sb['hoverColorText']}; }\n";
		}
		if ( ! empty( $sb['normalBackground'] ) ) {
			$css .= self::css_background( $sb['normalBackground'], $btn_inner );
		}
		if ( ! empty( $sb['hoverBackground'] ) ) {
			$css .= self::css_background( $sb['hoverBackground'], "$btn_inner:hover" );
		}
		if ( ! empty( $sb['mainSettings']['color'] ) ) {
			$css .= self::css_border( array( 'mainSettings' => $sb['mainSettings'], 'radius' => $sb['radius'] ?? array() ), $btn_inner );
		}
		if ( ! empty( $sb['padding'] ) ) {
			$css .= self::css_responsive_spacing( 'padding', $sb['padding'], $btn_inner );
		}

		// --- Image / Icon ---
		if ( ! empty( $si['iconColor'] ) ) {
			$css .= "$icon_sel { color: {$si['iconColor']}; }\n";
		}
		if ( ! empty( $si['iconHoverColor'] ) ) {
			$css .= "$icon_sel:hover { color: {$si['iconHoverColor']}; }\n";
		}
		if ( ! empty( $si['iconSize'] ) ) {
			$css .= self::css_responsive( 'font-size', $si['iconSize'], $icon_sel );
		}
		if ( ! empty( $si['iconBorder'] ) ) {
			$css .= self::css_border( $si['iconBorder'], $icon_sel );
		}

		// --- Background / Border ---
		if ( ! empty( $sab['background'] ) ) {
			$css .= self::css_background( $sab['background'], $selector );
		}
		if ( ! empty( $sab['border'] ) ) {
			$css .= self::css_border( $sab['border'], $selector );
		}

		// --- Dimension ---
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_map_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$gg  = $attrs['general_general'] ?? array();
		$sb  = $attrs['style_border'] ?? array();

		// --- Border ---
		if ( ! empty( $sb ) ) {
			$css .= self::css_border_full( $sb, $selector );
		}

		// --- Height ---
		if ( ! empty( $gg['height'] ) ) {
			$css .= self::css_responsive( 'height', $gg['height'], "$selector .wcb-map__inner" );
		}

		// --- Flex ---
		$css .= "$selector { flex: 1; }\n";

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_form_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$sl  = $attrs['style_label'] ?? array();
		$si  = $attrs['style_input'] ?? array();
		$ss  = $attrs['style_submit_button'] ?? array();
		$sm  = $attrs['style_messages'] ?? array();
		$sp  = $attrs['style_spacing'] ?? array();

		$input_sel = "$selector [type=\"text\"], $selector [type=\"email\"], $selector [type=\"url\"], $selector [type=\"password\"], $selector [type=\"number\"], $selector [type=\"date\"], $selector select, $selector textarea";
		$submit_sel     = "$selector .wcb-form__btn-submit";
		$success_sel    = "$selector .wcb-form__successMessageText";
		$error_sel      = "$selector .wcb-form__errorMessageText";

		// --- Label ---
		if ( ! empty( $sl['typography'] ) ) {
			$css .= self::css_typography( $sl['typography'], "$selector .wcb-form__label" );
		}
		if ( ! empty( $sl['textColor'] ) ) {
			$css .= "$selector .wcb-form__label { color: {$sl['textColor']}; }\n";
		}

		// --- Input ---
		if ( ! empty( $si['typography'] ) ) {
			$css .= self::css_typography( $si['typography'], $input_sel );
		}
		if ( ! empty( $si['border'] ) ) {
			$css .= self::css_border( $si['border'], $input_sel );
		}
		if ( ! empty( $si['backgroundColor'] ) ) {
			$css .= "$input_sel { background-color: {$si['backgroundColor']}; }\n";
		}
		if ( ! empty( $si['textColor'] ) ) {
			$css .= "$input_sel { color: {$si['textColor']}; }\n";
		}

		// --- Submit button ---
		if ( ! empty( $ss['typography'] ) ) {
			$css .= self::css_typography( $ss['typography'], $submit_sel );
		}
		if ( ! empty( $ss['colorAndBackgroundColor'] ) ) {
			$cbc = $ss['colorAndBackgroundColor'];
			if ( ! empty( $cbc['Normal']['color'] ) ) {
				$css .= "$submit_sel { color: {$cbc['Normal']['color']}; }\n";
			}
			if ( ! empty( $cbc['Normal']['backgroundColor'] ) ) {
				$css .= "$submit_sel { background-color: {$cbc['Normal']['backgroundColor']}; }\n";
			}
			if ( ! empty( $cbc['Hover']['color'] ) ) {
				$css .= "$submit_sel:hover { color: {$cbc['Hover']['color']}; }\n";
			}
			if ( ! empty( $cbc['Hover']['backgroundColor'] ) ) {
				$css .= "$submit_sel:hover { background-color: {$cbc['Hover']['backgroundColor']}; }\n";
			}
		}
		if ( ! empty( $ss['border'] ) ) {
			$css .= self::css_border( $ss['border'], $submit_sel );
		}

		// --- Messages ---
		if ( ! empty( $sm['successColor'] ) ) {
			$css .= "$success_sel { color: {$sm['successColor']}; }\n";
		}
		if ( ! empty( $sm['errorColor'] ) ) {
			$css .= "$error_sel { color: {$sm['errorColor']}; }\n";
		}

		// --- Field spacing ---
		if ( ! empty( $sp['fieldSpacing'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sp['fieldSpacing'], "$selector .wcb-form__field" );
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	// =====================================================================
	// CSS EXTRACTION FROM BLOCKS / POSTS
	// =====================================================================

	/**
	 * Generate CSS for a single Boostify block from its attributes.
	 *
	 * @param array $block Parsed block with attrs.
	 * @return string CSS rules.
	 */
	public static function generate_block_css( $block ) {
		$attrs      = $block['attrs'] ?? array();
		$unique_id  = $attrs['uniqueId'] ?? '';
		$block_name = $block['blockName'] ?? '';

		if ( empty( $unique_id ) ) {
			return '';
		}

		if ( strpos( $block_name, 'boostify-blocks/' ) !== 0 ) {
			return '';
		}

		// Merge block attributes with defaults to ensure all expected keys are present.
		$merged_attrs = self::merge_with_defaults( $block_name, $attrs );

		$selector = '.' . esc_attr( $unique_id ) . '[data-uniqueid="' . esc_attr( $unique_id ) . '"]';

		$raw_css = self::process_block_by_type( $block_name, $merged_attrs, $selector, $unique_id );

		// Merge duplicate selectors within the same media context.
		return self::merge_css_rules( $raw_css );
	}

	/**
	 * Merge CSS rules that share the same selector.
	 *
	 * Groups properties from rules with identical (media_query, selector)
	 * into a single declaration block, reducing output size and improving
	 * readability.
	 *
	 * Input:
	 *   .foo { color: red; }
	 *   .foo { font-size: 16px; }
	 *   @media (min-width: 768px) { .foo { color: blue; } }
	 *
	 * Output:
	 *   .foo { color: red; font-size: 16px; }
	 *   @media (min-width: 768px) { .foo { color: blue; } }
	 *
	 * @param string $css Raw CSS with potentially duplicate selectors.
	 * @return string Merged CSS.
	 */
	private static function merge_css_rules( $css ) {
		if ( empty( trim( $css ) ) ) {
			return $css;
		}

		// Collect rules grouped by (media, selector).
		// Structure: [ 'media' => [ 'selector' => [ 'prop' => 'val', ... ] ] ]
		// 'media' key '' (empty string) = base (no media query).
		$groups = array();

		// Step 1: extract @media blocks first, replace them with placeholders
		// so the inner rules are parsed in their media context.
		// Handles: @media (min-width: 768px) and @media (min-width: 768px) and (max-width: 1024px)
		// Inner content supports one level of nested { } (CSS rules inside @media).
		$media_blocks = array();
		$css_without_media = preg_replace_callback(
			'/@media\s*((?:\([^)]+\)(?:\s*and\s*\([^)]+\))*))\s*\{((?:[^{}]|\{[^{}]*\})*)\}/s',
			function ( $matches ) use ( &$media_blocks ) {
				$placeholder = '___MEDIA_BLOCK_' . count( $media_blocks ) . '___';
				$media_blocks[ $placeholder ] = array(
					'query'  => '@media ' . $matches[1],
					'inner'  => $matches[2],
				);
				return $placeholder;
			},
			$css
		);

		// Step 2: parse base-level rules (no @media).
		// Strip media block placeholders first so they don't contaminate selectors.
		$css_without_media_clean = preg_replace( '/___MEDIA_BLOCK_\d+___/', '', $css_without_media );
		$base_rules = self::parse_css_rules( $css_without_media_clean );
		foreach ( $base_rules as $rule ) {
			$sel = $rule['selector'];
			if ( ! isset( $groups[''][ $sel ] ) ) {
				$groups[''][ $sel ] = array();
			}
			foreach ( $rule['properties'] as $prop => $val ) {
				$groups[''][ $sel ][ $prop ] = $val;
			}
		}

		// Step 3: parse rules inside each @media block.
		foreach ( $media_blocks as $placeholder => $media_data ) {
			$media_query = self::extract_media_query( $media_data['query'] );
			$inner_rules = self::parse_css_rules( $media_data['inner'] );

			if ( ! isset( $groups[ $media_query ] ) ) {
				$groups[ $media_query ] = array();
			}

			foreach ( $inner_rules as $rule ) {
				$sel = $rule['selector'];
				if ( ! isset( $groups[ $media_query ][ $sel ] ) ) {
					$groups[ $media_query ][ $sel ] = array();
				}
				foreach ( $rule['properties'] as $prop => $val ) {
					$groups[ $media_query ][ $sel ][ $prop ] = $val;
				}
			}
		}

		// Step 4: rebuild CSS output.
		$output = '';

		// Base rules first (no media query).
		if ( ! empty( $groups[''] ) ) {
			foreach ( $groups[''] as $selector => $properties ) {
				$output .= self::build_css_rule( $selector, $properties );
			}
		}

		// Then media query groups, sorted.
		unset( $groups[''] );
		foreach ( $groups as $media_query => $selectors ) {
			if ( empty( $selectors ) ) {
				continue;
			}
			$inner_css = '';
			foreach ( $selectors as $selector => $properties ) {
				$inner_css .= "\t" . self::build_css_rule( $selector, $properties );
			}
			$output .= "$media_query {\n$inner_css}\n";
		}

		return $output;
	}

	/**
	 * Parse a CSS string into an array of (selector, properties) rules.
	 *
	 * @param string $css Raw CSS rules (no nested @media blocks).
	 * @return array List of ['selector' => string, 'properties' => array].
	 */
	private static function parse_css_rules( $css ) {
		$rules = array();

		// Match: selector { property: value; property: value; ... }
		preg_match_all(
			'/([^{]+)\{([^}]+)\}/',
			$css,
			$matches,
			PREG_SET_ORDER
		);

		foreach ( $matches as $match ) {
			$selector   = trim( $match[1] );
			$properties = self::parse_properties( trim( $match[2] ) );

			if ( ! empty( $selector ) && ! empty( $properties ) ) {
				$rules[] = array(
					'selector'   => $selector,
					'properties' => $properties,
				);
			}
		}

		return $rules;
	}

	/**
	 * Parse a property string like "color: red; font-size: 16px" into
	 * an associative array [ 'color' => 'red', 'font-size' => '16px' ].
	 *
	 * Later values overwrite earlier ones for the same property.
	 *
	 * @param string $props Property declarations.
	 * @return array Associative array of property => value.
	 */
	private static function parse_properties( $props ) {
		$result = array();

		preg_match_all(
			'/([a-zA-Z-]+)\s*:\s*([^;]+);/',
			$props,
			$matches,
			PREG_SET_ORDER
		);

		foreach ( $matches as $match ) {
			$prop = trim( $match[1] );
			$val  = trim( $match[2] );
			$result[ $prop ] = $val;
		}

		return $result;
	}

	/**
	 * Build a single CSS rule from a selector and its properties.
	 *
	 * @param string $selector   CSS selector.
	 * @param array  $properties Associative array of property => value.
	 * @return string CSS rule like ".foo { color: red; font-size: 16px; }\n".
	 */
	private static function build_css_rule( $selector, $properties ) {
		if ( empty( $properties ) ) {
			return '';
		}

		$declarations = array();
		foreach ( $properties as $prop => $val ) {
			$declarations[] = "$prop: $val";
		}

		return "$selector { " . implode( '; ', $declarations ) . "; }\n";
	}

	/**
	 * Extract the media query string from a @media block.
	 * "@media (min-width: 768px) { ... }" → "@media (min-width: 768px)".
	 *
	 * @param string $media_block Full @media block.
	 * @return string Media query.
	 */
	private static function extract_media_query( $media_block ) {
		if ( preg_match( '/^(@media\s*(?:\([^)]+\)(?:\s*and\s*\([^)]+\))*))/', trim( $media_block ), $m ) ) {
			return $m[1];
		}
		return trim( $media_block );
	}

	/**
	 * Recursively extract CSS from an array of parsed blocks.
	 *
	 * @param array $blocks Parsed blocks.
	 * @return string Combined CSS.
	 */
	public static function extract_css_from_blocks( $blocks ) {
		$css = '';

		foreach ( $blocks as $block ) {
			if ( empty( $block['blockName'] ) ) {
				if ( ! empty( $block['innerBlocks'] ) ) {
					$css .= self::extract_css_from_blocks( $block['innerBlocks'] );
				}
				continue;
			}

			// Only process Boostify blocks.
			if ( 0 === strpos( $block['blockName'], 'boostify-blocks/' ) ) {
				$css .= self::generate_block_css( $block );
			}

			// Recurse into inner blocks.
			if ( ! empty( $block['innerBlocks'] ) ) {
				$css .= self::extract_css_from_blocks( $block['innerBlocks'] );
			}
		}

		return $css;
	}

	/**
	 * Extract CSS from a post by parsing block attributes.
	 *
	 * @param int $post_id Post ID.
	 * @return string Combined CSS for all Boostify blocks in the post.
	 */
	public static function extract_css_from_post( $post_id ) {
		$post = get_post( $post_id );
		if ( ! $post ) {
			return '';
		}

		$blocks = parse_blocks( $post->post_content );
		return self::extract_css_from_blocks( $blocks );
	}
}
