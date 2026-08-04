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
		$css = '';
		$sb  = $attrs['styles_background'] ?? array();
		$sbd = $attrs['styles_border'] ?? array();
		$sbs = $attrs['styles_boxShadow'] ?? array();
		$sd  = $attrs['styles_dimensions'] ?? array();
		$sc  = $attrs['styles_color'] ?? '';

		if ( ! empty( $sc ) ) {
			$css .= "$selector { color: $sc; }\n";
		}
		if ( ! empty( $sb ) ) {
			$css .= self::css_background_full( $sb, $selector );
		}
		if ( ! empty( $sbd ) ) {
			$css .= self::css_border( $sbd, $selector );
		}
		if ( ! empty( $sbs['Normal']['color'] ) ) {
			$css .= self::css_box_shadow( $sbs['Normal'], $selector );
		}
		if ( ! empty( $sbs['Hover']['color'] ) ) {
			$css .= self::css_box_shadow_hover( $sbs['Hover'], $selector );
		}
		if ( ! empty( $sd ) ) {
			$css .= self::css_dimension( $sd, $selector );
			if ( ! empty( $sd['colunmGap'] ) || ! empty( $sd['rowGap'] ) ) {
				$css .= self::css_gap( $sd, $selector );
			}
		}
		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_button_block( $attrs, $selector, $unique_id ) {
		$css    = '';
		$st     = $attrs['style_text'] ?? array();
		$sbg    = $attrs['style_background'] ?? array();
		$sbd    = $attrs['style_border'] ?? array();
		$sbs    = $attrs['style_boxshadow'] ?? array();
		$sd     = $attrs['style_dimension'] ?? array();
		$txt_sel = "$selector .wcb-button__text";

		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], $txt_sel );
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= self::css_text_color( $st['textColor'], $txt_sel );
		}
		if ( ! empty( $sbg ) ) {
			$css .= self::css_background( $sbg, $selector );
		}
		if ( ! empty( $sbd ) ) {
			$css .= self::css_border( $sbd, $selector );
		}
		if ( ! empty( $sbs ) ) {
			$css .= self::css_box_shadow( $sbs, $selector );
		}
		if ( ! empty( $sd ) ) {
			$css .= self::css_dimension( $sd, $selector );
		}
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

		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], "$selector .wcb-product__title" );
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= "$selector .wcb-product__title { color: {$st['textColor']}; }\n";
		}
		if ( ! empty( $st['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $st['marginBottom'], "$selector .wcb-product__title" );
		}
		if ( ! empty( $sc['typography'] ) ) {
			$css .= self::css_typography( $sc['typography'], "$selector .wcb-product__category" );
		}
		if ( ! empty( $sc['textColor'] ) ) {
			$css .= "$selector .wcb-product__category { color: {$sc['textColor']}; }\n";
		}
		if ( ! empty( $sp['typography'] ) ) {
			$css .= self::css_typography( $sp['typography'], "$selector .wcb-product__price" );
		}
		if ( ! empty( $sp['textColor'] ) ) {
			$css .= "$selector .wcb-product__price { color: {$sp['textColor']}; }\n";
		}
		if ( ! empty( $sr['color'] ) ) {
			$css .= "$selector .wcb-product__rating { color: {$sr['color']}; }\n";
		}
		if ( ! empty( $sf['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sf['marginBottom'], "$selector .wcb-product__featured-image" );
		}
		if ( ! empty( $sf['backgroundOverlay'] ) ) {
			$css .= "$selector .wcb-product__featured-image-overlay { background-color: {$sf['backgroundOverlay']}; }\n";
		}
		if ( ! empty( $sf['border'] ) ) {
			$css .= self::css_border( $sf['border'], "$selector .wcb-product__featured-image" );
		}
		if ( ! empty( $sl['textAlignment'] ) ) {
			$css .= "$selector .wcb-product__wrap { text-align: {$sl['textAlignment']}; }\n";
		}
		if ( ! empty( $sl['backgroundColor'] ) ) {
			$css .= "$selector .wcb-product__wrap { background-color: {$sl['backgroundColor']}; }\n";
		}
		if ( ! empty( $sl['padding'] ) ) {
			$css .= self::css_responsive_spacing( 'padding', $sl['padding'], "$selector .wcb-product__wrap" );
		}
		if ( ! empty( $sl['colunmGap'] ) ) {
			$css .= self::css_responsive( 'column-gap', $sl['colunmGap'], "$selector .wcb-products__wrap" );
		}
		if ( ! empty( $sl['rowGap'] ) ) {
			$css .= self::css_responsive( 'row-gap', $sl['rowGap'], "$selector .wcb-products__wrap" );
		}
		if ( ! empty( $ss['typography'] ) ) {
			$css .= self::css_typography( $ss['typography'], "$selector .wcb-product__sale-badge" );
		}
		if ( ! empty( $ss['backgroundColor'] ) ) {
			$css .= "$selector .wcb-product__sale-badge { background-color: {$ss['backgroundColor']}; }\n";
		}
		if ( ! empty( $ss['textColor'] ) ) {
			$css .= "$selector .wcb-product__sale-badge { color: {$ss['textColor']}; }\n";
		}
		if ( ! empty( $so['typography'] ) ) {
			$css .= self::css_typography( $so['typography'], "$selector .wcb-product__out-of-stock" );
		}
		if ( ! empty( $so['backgroundColor'] ) ) {
			$css .= "$selector .wcb-product__out-of-stock { background-color: {$so['backgroundColor']}; }\n";
		}
		if ( ! empty( $so['textColor'] ) ) {
			$css .= "$selector .wcb-product__out-of-stock { color: {$so['textColor']}; }\n";
		}
		if ( ! empty( $sa['typography'] ) ) {
			$css .= self::css_typography( $sa['typography'], "$selector .wcb-product__add-to-cart" );
		}
		if ( ! empty( $sa['colorAndBackgroundColor'] ) ) {
			$cbc = $sa['colorAndBackgroundColor'];
			if ( ! empty( $cbc['Normal']['color'] ) ) {
				$css .= "$selector .wcb-product__add-to-cart { color: {$cbc['Normal']['color']}; }\n";
			}
			if ( ! empty( $cbc['Normal']['backgroundColor'] ) ) {
				$css .= "$selector .wcb-product__add-to-cart { background-color: {$cbc['Normal']['backgroundColor']}; }\n";
			}
			if ( ! empty( $cbc['Hover']['color'] ) ) {
				$css .= "$selector .wcb-product__add-to-cart:hover { color: {$cbc['Hover']['color']}; }\n";
			}
			if ( ! empty( $cbc['Hover']['backgroundColor'] ) ) {
				$css .= "$selector .wcb-product__add-to-cart:hover { background-color: {$cbc['Hover']['backgroundColor']}; }\n";
			}
		}
		if ( ! empty( $sa['padding'] ) ) {
			$css .= self::css_responsive_spacing( 'padding', $sa['padding'], "$selector .wcb-product__add-to-cart" );
		}
		if ( ! empty( $sa['border'] ) ) {
			$css .= self::css_border( $sa['border'], "$selector .wcb-product__add-to-cart" );
		}
		if ( ! empty( $sg ) ) {
			if ( ! empty( $sg['mainStyle']['Normal'] ) ) {
				$n = $sg['mainStyle']['Normal'];
				if ( ! empty( $n['color'] ) ) {
					$css .= "$selector .wcb-pagination__item { color: {$n['color']}; }\n";
				}
				if ( ! empty( $n['backgroundColor'] ) ) {
					$css .= "$selector .wcb-pagination__item { background-color: {$n['backgroundColor']}; }\n";
				}
				if ( ! empty( $n['border'] ) ) {
					$css .= self::css_border( $n['border'], "$selector .wcb-pagination__item" );
				}
			}
			if ( ! empty( $sg['mainStyle']['Active'] ) ) {
				$a = $sg['mainStyle']['Active'];
				if ( ! empty( $a['color'] ) ) {
					$css .= "$selector .wcb-pagination__item--active { color: {$a['color']}; }\n";
				}
				if ( ! empty( $a['backgroundColor'] ) ) {
					$css .= "$selector .wcb-pagination__item--active { background-color: {$a['backgroundColor']}; }\n";
				}
			}
			if ( ! empty( $sg['marginTop'] ) ) {
				$css .= self::css_responsive( 'margin-top', $sg['marginTop'], "$selector .wcb-pagination" );
			}
		}
		if ( ! empty( $sb ) ) {
			$css .= self::css_border( $sb, "$selector .wcb-product__wrap" );
		}
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

		// --- Title ---
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], "$selector .wcb-post__title" );
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= "$selector .wcb-post__title { color: {$st['textColor']}; }\n";
		}
		if ( ! empty( $st['textHoverColor'] ) ) {
			$css .= "$selector .wcb-post__title:hover { color: {$st['textHoverColor']}; }\n";
		}
		if ( ! empty( $st['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $st['marginBottom'], "$selector .wcb-post__title" );
		}

		// --- Excerpt ---
		if ( ! empty( $se['typography'] ) ) {
			$css .= self::css_typography( $se['typography'], "$selector .wcb-post__excerpt" );
		}
		if ( ! empty( $se['textColor'] ) ) {
			$css .= "$selector .wcb-post__excerpt { color: {$se['textColor']}; }\n";
		}
		if ( ! empty( $se['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $se['marginBottom'], "$selector .wcb-post__excerpt" );
		}

		// --- Taxonomy ---
		if ( ! empty( $stx['typography'] ) ) {
			$css .= self::css_typography( $stx['typography'], "$selector .wcb-post__taxonomy" );
		}
		if ( ! empty( $stx['textColor'] ) ) {
			$css .= "$selector .wcb-post__taxonomy { color: {$stx['textColor']}; }\n";
		}
		if ( ! empty( $stx['backgroundColor'] ) ) {
			$css .= "$selector .wcb-post__taxonomy { background-color: {$stx['backgroundColor']}; }\n";
		}
		if ( ! empty( $stx['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $stx['marginBottom'], "$selector .wcb-post__taxonomy" );
		}

		// --- Meta (author + date) ---
		if ( ! empty( $sm['authorTypography'] ) ) {
			$css .= self::css_typography( $sm['authorTypography'], "$selector .wcb-post__author" );
		}
		if ( ! empty( $sm['dateTypography'] ) ) {
			$css .= self::css_typography( $sm['dateTypography'], "$selector .wcb-post__date" );
		}
		if ( ! empty( $sm['authorColor'] ) ) {
			$css .= "$selector .wcb-post__author { color: {$sm['authorColor']}; }\n";
		}
		if ( ! empty( $sm['dateTextColor'] ) ) {
			$css .= "$selector .wcb-post__date { color: {$sm['dateTextColor']}; }\n";
		}
		if ( ! empty( $sm['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sm['marginBottom'], "$selector .wcb-post__meta" );
		}

		// --- Read more link ---
		if ( ! empty( $sr['typography'] ) ) {
			$css .= self::css_typography( $sr['typography'], "$selector .wcb-post__read-more" );
		}
		if ( ! empty( $sr['colorAndBackgroundColor'] ) ) {
			$cbc = $sr['colorAndBackgroundColor'];
			if ( ! empty( $cbc['Normal']['color'] ) ) {
				$css .= "$selector .wcb-post__read-more { color: {$cbc['Normal']['color']}; }\n";
			}
			if ( ! empty( $cbc['Normal']['backgroundColor'] ) ) {
				$css .= "$selector .wcb-post__read-more { background-color: {$cbc['Normal']['backgroundColor']}; }\n";
			}
			if ( ! empty( $cbc['Hover']['color'] ) ) {
				$css .= "$selector .wcb-post__read-more:hover { color: {$cbc['Hover']['color']}; }\n";
			}
			if ( ! empty( $cbc['Hover']['backgroundColor'] ) ) {
				$css .= "$selector .wcb-post__read-more:hover { background-color: {$cbc['Hover']['backgroundColor']}; }\n";
			}
		}
		if ( ! empty( $sr['padding'] ) ) {
			$css .= self::css_responsive_spacing( 'padding', $sr['padding'], "$selector .wcb-post__read-more" );
		}
		if ( ! empty( $sr['border'] ) ) {
			$css .= self::css_border( $sr['border'], "$selector .wcb-post__read-more" );
		}
		if ( ! empty( $sr['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sr['marginBottom'], "$selector .wcb-post__read-more" );
		}

		// --- Pagination ---
		if ( ! empty( $sp['mainStyle'] ) ) {
			$ms = $sp['mainStyle'];
			if ( ! empty( $ms['Normal'] ) ) {
				$n = $ms['Normal'];
				if ( ! empty( $n['color'] ) ) {
					$css .= "$selector .wcb-pagination__item { color: {$n['color']}; }\n";
				}
				if ( ! empty( $n['backgroundColor'] ) ) {
					$css .= "$selector .wcb-pagination__item { background-color: {$n['backgroundColor']}; }\n";
				}
				if ( ! empty( $n['border'] ) ) {
					$css .= self::css_border( $n['border'], "$selector .wcb-pagination__item" );
				}
			}
			if ( ! empty( $ms['Active'] ) ) {
				$a = $ms['Active'];
				if ( ! empty( $a['color'] ) ) {
					$css .= "$selector .wcb-pagination__item--active { color: {$a['color']}; }\n";
				}
				if ( ! empty( $a['backgroundColor'] ) ) {
					$css .= "$selector .wcb-pagination__item--active { background-color: {$a['backgroundColor']}; }\n";
				}
				if ( ! empty( $a['border'] ) ) {
					$css .= self::css_border( $a['border'], "$selector .wcb-pagination__item--active" );
				}
			}
			if ( ! empty( $sp['marginTop'] ) ) {
				$css .= self::css_responsive( 'margin-top', $sp['marginTop'], "$selector .wcb-pagination" );
			}
		}

		// --- Featured image ---
		if ( ! empty( $sf['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sf['marginBottom'], "$selector .wcb-post__featured-image" );
		}
		if ( ! empty( $sf['backgroundOverlay'] ) ) {
			$css .= "$selector .wcb-post__featured-image-overlay { background-color: {$sf['backgroundOverlay']}; }\n";
		}
		if ( ! empty( $sf['border'] ) ) {
			$css .= self::css_border( $sf['border'], "$selector .wcb-post__featured-image" );
		}

		// --- Layout ---
		if ( ! empty( $sl['colunmGap'] ) ) {
			$css .= self::css_responsive( 'column-gap', $sl['colunmGap'], "$selector .wcb-posts__wrap" );
		}
		if ( ! empty( $sl['rowGap'] ) ) {
			$css .= self::css_responsive( 'row-gap', $sl['rowGap'], "$selector .wcb-posts__wrap" );
		}
		if ( ! empty( $sl['textAlignment'] ) ) {
			$css .= "$selector .wcb-post__wrap { text-align: {$sl['textAlignment']}; }\n";
		}
		if ( ! empty( $sl['backgroundColor'] ) ) {
			$css .= "$selector .wcb-post__wrap { background-color: {$sl['backgroundColor']}; }\n";
		}
		if ( ! empty( $sl['padding'] ) ) {
			$css .= self::css_responsive_spacing( 'padding', $sl['padding'], "$selector .wcb-post__wrap" );
		}

		// --- Border ---
		if ( ! empty( $sb ) ) {
			$css .= self::css_border( $sb, "$selector .wcb-post__wrap" );
		}

		// --- Box shadow (Normal/Hover nesting) ---
		if ( ! empty( $sbs['Normal']['color'] ) ) {
			$css .= self::css_box_shadow( $sbs['Normal'], "$selector .wcb-post__wrap" );
		}
		if ( ! empty( $sbs['Hover']['color'] ) ) {
			$css .= self::css_box_shadow_hover( $sbs['Hover'], "$selector .wcb-post__wrap" );
		}

		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_cta_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$st  = $attrs['style_title'] ?? array();
		$sd  = $attrs['style_description'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], "$selector .wcb-cta__title" );
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= "$selector .wcb-cta__title { color: {$st['textColor']}; }\n";
		}
		if ( ! empty( $sd['typography'] ) ) {
			$css .= self::css_typography( $sd['typography'], "$selector .wcb-cta__description" );
		}
		if ( ! empty( $sd['textColor'] ) ) {
			$css .= "$selector .wcb-cta__description { color: {$sd['textColor']}; }\n";
		}
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}
		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_team_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$st  = $attrs['style_title'] ?? array();
		$sd  = $attrs['style_desination'] ?? array();
		$sds = $attrs['style_description'] ?? array();
		$ss  = $attrs['style_socialIcons'] ?? array();
		$si  = $attrs['style_image'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], "$selector .wcb-team__heading" );
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= "$selector .wcb-team__heading { color: {$st['textColor']}; }\n";
		}
		if ( ! empty( $sd['typography'] ) ) {
			$css .= self::css_typography( $sd['typography'], "$selector .wcb-team__designation" );
		}
		if ( ! empty( $sd['textColor'] ) ) {
			$css .= "$selector .wcb-team__designation { color: {$sd['textColor']}; }\n";
		}
		if ( ! empty( $sds['typography'] ) ) {
			$css .= self::css_typography( $sds['typography'], "$selector .wcb-team__description" );
		}
		if ( ! empty( $sds['textColor'] ) ) {
			$css .= "$selector .wcb-team__description { color: {$sds['textColor']}; }\n";
		}
		if ( ! empty( $ss['color'] ) ) {
			$css .= "$selector .wcb-team__social-icon { color: {$ss['color']}; }\n";
		}
		if ( ! empty( $si['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $si['marginBottom'], "$selector .wcb-team__image" );
		}
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}
		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_icon_box_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$st  = $attrs['style_title'] ?? array();
		$sd  = $attrs['style_desination'] ?? array();
		$sds = $attrs['style_description'] ?? array();
		$ss  = $attrs['style_separator'] ?? array();
		$si  = $attrs['style_Icon'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], "$selector .wcb-icon-box__heading" );
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= "$selector .wcb-icon-box__heading { color: {$st['textColor']}; }\n";
		}
		if ( ! empty( $sd['typography'] ) ) {
			$css .= self::css_typography( $sd['typography'], "$selector .wcb-icon-box__designation" );
		}
		if ( ! empty( $sd['textColor'] ) ) {
			$css .= "$selector .wcb-icon-box__designation { color: {$sd['textColor']}; }\n";
		}
		if ( ! empty( $sds['typography'] ) ) {
			$css .= self::css_typography( $sds['typography'], "$selector .wcb-icon-box__description" );
		}
		if ( ! empty( $sds['textColor'] ) ) {
			$css .= "$selector .wcb-icon-box__description { color: {$sds['textColor']}; }\n";
		}
		if ( ! empty( $si['color'] ) ) {
			$css .= "$selector .wcb-icon-box__icon { color: {$si['color']}; }\n";
		}
		if ( ! empty( $si['size'] ) ) {
			$css .= self::css_responsive( 'font-size', $si['size'], "$selector .wcb-icon-box__icon" );
		}
		if ( ! empty( $ss['color'] ) ) {
			$css .= "$selector .wcb-icon-box__separator { border-color: {$ss['color']}; }\n";
		}
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}
		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_icon_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$si  = $attrs['style_icon'] ?? array();
		$sbg = $attrs['style_background'] ?? array();
		$sbd = $attrs['style_border'] ?? array();
		$sbs = $attrs['style_boxshadow'] ?? array();
		$sd  = $attrs['style_dimension'] ?? array();
		if ( ! empty( $si['color'] ) ) {
			$css .= "$selector .wcb-icon__icon { color: {$si['color']}; }\n";
		}
		if ( ! empty( $si['size'] ) ) {
			$css .= self::css_responsive( 'font-size', $si['size'], "$selector .wcb-icon__icon" );
		}
		if ( ! empty( $sbg ) ) {
			$css .= self::css_background( $sbg, $selector );
		}
		if ( ! empty( $sbd ) ) {
			$css .= self::css_border( $sbd, $selector );
		}
		if ( ! empty( $sbs['Normal']['color'] ) ) {
			$css .= self::css_box_shadow( $sbs['Normal'], $selector );
		}
		if ( ! empty( $sbs['Hover']['color'] ) ) {
			$css .= self::css_box_shadow_hover( $sbs['Hover'], "$selector:hover" );
		}
		if ( ! empty( $sd ) ) {
			$css .= self::css_dimension( $sd, $selector );
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
		if ( ! empty( $si['border'] ) ) {
			$css .= self::css_border( $si['border'], "$selector img" );
		}
		if ( ! empty( $so['backgroundColor'] ) ) {
			$css .= "$selector .wcb-image__overlay { background-color: {$so['backgroundColor']}; }\n";
		}
		if ( ! empty( $sc['typography'] ) ) {
			$css .= self::css_typography( $sc['typography'], "$selector figcaption" );
		}
		if ( ! empty( $sc['textColor'] ) ) {
			$css .= "$selector figcaption { color: {$sc['textColor']}; }\n";
		}
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
		if ( ! empty( $sn['typography'] ) ) {
			$css .= self::css_typography( $sn['typography'], "$selector .wcb-countdown__number" );
		}
		if ( ! empty( $sn['textColor'] ) ) {
			$css .= "$selector .wcb-countdown__number { color: {$sn['textColor']}; }\n";
		}
		if ( ! empty( $sl['typography'] ) ) {
			$css .= self::css_typography( $sl['typography'], "$selector .wcb-countdown__label" );
		}
		if ( ! empty( $sl['textColor'] ) ) {
			$css .= "$selector .wcb-countdown__label { color: {$sl['textColor']}; }\n";
		}
		if ( ! empty( $sbg ) ) {
			$css .= self::css_background( $sbg, "$selector .wcb-countdown__item" );
		}
		if ( ! empty( $sbd ) ) {
			$css .= self::css_border( $sbd, "$selector .wcb-countdown__item" );
		}
		if ( ! empty( $sbs ) ) {
			$css .= self::css_box_shadow( $sbs, "$selector .wcb-countdown__item" );
		}
		if ( ! empty( $sd ) ) {
			$css .= self::css_dimension( $sd, "$selector .wcb-countdown__item" );
		}
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}
		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_counter_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$st  = $attrs['style_title'] ?? array();
		$sd  = $attrs['style_desination'] ?? array();
		$sds = $attrs['style_description'] ?? array();
		$si  = $attrs['style_Icon'] ?? array();
		$sp  = $attrs['style_progress'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], "$selector .wcb-icon-box__heading" );
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= "$selector .wcb-icon-box__heading { color: {$st['textColor']}; }\n";
		}
		if ( ! empty( $sd['typography'] ) ) {
			$css .= self::css_typography( $sd['typography'], "$selector .wcb-icon-box__designation" );
		}
		if ( ! empty( $sd['textColor'] ) ) {
			$css .= "$selector .wcb-icon-box__designation { color: {$sd['textColor']}; }\n";
		}
		if ( ! empty( $sds['typography'] ) ) {
			$css .= self::css_typography( $sds['typography'], "$selector .wcb-icon-box__description" );
		}
		if ( ! empty( $sds['textColor'] ) ) {
			$css .= "$selector .wcb-icon-box__description { color: {$sds['textColor']}; }\n";
		}
		if ( ! empty( $si['color'] ) ) {
			$css .= "$selector .wcb-icon-box__icon { color: {$si['color']}; }\n";
		}
		if ( ! empty( $sp['color'] ) ) {
			$css .= "$selector .wcb-icon-box__progress-bar { background-color: {$sp['color']}; }\n";
		}
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}
		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_faq_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$sc  = $attrs['style_container'] ?? array();
		$sq  = $attrs['style_question'] ?? array();
		$si  = $attrs['style_icon'] ?? array();
		$sa  = $attrs['style_answer'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();
		if ( ! empty( $sc['backgroundColor'] ) ) {
			$css .= "$selector .wcb-faq__item { background-color: {$sc['backgroundColor']}; }\n";
		}
		if ( ! empty( $sc['border'] ) ) {
			$css .= self::css_border( $sc['border'], "$selector .wcb-faq__item" );
		}
		if ( ! empty( $sq['typography'] ) ) {
			$css .= self::css_typography( $sq['typography'], "$selector .wcb-faq-child__question-text" );
		}
		if ( ! empty( $sq['backgroundColor'] ) ) {
			$css .= "$selector .wcb-faq-child__question { background-color: {$sq['backgroundColor']}; }\n";
		}
		if ( ! empty( $sq['textColor'] ) ) {
			$css .= "$selector .wcb-faq-child__question-text { color: {$sq['textColor']}; }\n";
		}
		if ( ! empty( $si['color'] ) ) {
			$css .= "$selector .wcb-faq-child__icon { color: {$si['color']}; }\n";
		}
		if ( ! empty( $sa['typography'] ) ) {
			$css .= self::css_typography( $sa['typography'], "$selector .wcb-faq-child__answer" );
		}
		if ( ! empty( $sa['backgroundColor'] ) ) {
			$css .= "$selector .wcb-faq-child__answer { background-color: {$sa['backgroundColor']}; }\n";
		}
		if ( ! empty( $sa['textColor'] ) ) {
			$css .= "$selector .wcb-faq-child__answer { color: {$sa['textColor']}; }\n";
		}
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
		$sc  = $attrs['style_container'] ?? array();
		$st  = $attrs['style_title'] ?? array();
		$sb  = $attrs['style_body'] ?? array();
		$si  = $attrs['style_icon'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();
		if ( ! empty( $sc['backgroundColor'] ) ) {
			$css .= "$selector { background-color: {$sc['backgroundColor']}; }\n";
		}
		if ( ! empty( $st['typography'] ) ) {
			$css .= self::css_typography( $st['typography'], "$selector .wcb-tabs__title" );
		}
		if ( ! empty( $st['backgroundColor'] ) ) {
			$css .= "$selector .wcb-tabs__title { background-color: {$st['backgroundColor']}; }\n";
		}
		if ( ! empty( $st['textColor'] ) ) {
			$css .= "$selector .wcb-tabs__title { color: {$st['textColor']}; }\n";
		}
		if ( ! empty( $st['activeBackgroundColor'] ) ) {
			$css .= "$selector .wcb-tabs__title--active { background-color: {$st['activeBackgroundColor']}; }\n";
		}
		if ( ! empty( $st['activeTextColor'] ) ) {
			$css .= "$selector .wcb-tabs__title--active { color: {$st['activeTextColor']}; }\n";
		}
		if ( ! empty( $sb['backgroundColor'] ) ) {
			$css .= "$selector .wcb-tabs__body { background-color: {$sb['backgroundColor']}; }\n";
		}
		if ( ! empty( $sb['border'] ) ) {
			$css .= self::css_border( $sb['border'], "$selector .wcb-tabs__body" );
		}
		if ( ! empty( $si['color'] ) ) {
			$css .= "$selector .wcb-tabs__icon { color: {$si['color']}; }\n";
		}
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
		$sn  = $attrs['style_name'] ?? array();
		$sc  = $attrs['style_content'] ?? array();
		$sco = $attrs['style_company'] ?? array();
		$si  = $attrs['style_image'] ?? array();
		$sr  = $attrs['style_rating'] ?? array();
		$sab = $attrs['style_backgroundAndBorder'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();
		if ( ! empty( $sn['typography'] ) ) {
			$css .= self::css_typography( $sn['typography'], "$selector .wcb-testimonials__name" );
		}
		if ( ! empty( $sn['textColor'] ) ) {
			$css .= "$selector .wcb-testimonials__name { color: {$sn['textColor']}; }\n";
		}
		if ( ! empty( $sn['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sn['marginBottom'], "$selector .wcb-testimonials__name" );
		}
		if ( ! empty( $sc['typography'] ) ) {
			$css .= self::css_typography( $sc['typography'], "$selector .wcb-testimonials__content" );
		}
		if ( ! empty( $sc['textColor'] ) ) {
			$css .= "$selector .wcb-testimonials__content { color: {$sc['textColor']}; }\n";
		}
		if ( ! empty( $sc['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sc['marginBottom'], "$selector .wcb-testimonials__content" );
		}
		if ( ! empty( $sco['typography'] ) ) {
			$css .= self::css_typography( $sco['typography'], "$selector .wcb-testimonials__company" );
		}
		if ( ! empty( $sco['textColor'] ) ) {
			$css .= "$selector .wcb-testimonials__company { color: {$sco['textColor']}; }\n";
		}
		if ( ! empty( $si['radius'] ) ) {
			$css .= self::css_responsive( 'border-radius', $si['radius'], "$selector .wcb-testimonials__image img", 'px' );
		}
		if ( ! empty( $si['imageSize'] ) ) {
			$css .= self::css_responsive( 'width', $si['imageSize'], "$selector .wcb-testimonials__image img" );
		}
		if ( ! empty( $sr['color'] ) ) {
			$css .= "$selector .wcb-testimonials__rating { color: {$sr['color']}; }\n";
		}
		if ( ! empty( $sr['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sr['marginBottom'], "$selector .wcb-testimonials__rating" );
		}
		if ( ! empty( $sab['background'] ) ) {
			$css .= self::css_background( $sab['background'], "$selector .wcb-testimonials__item" );
		}
		if ( ! empty( $sab['border'] ) ) {
			$css .= self::css_border( $sab['border'], "$selector .wcb-testimonials__item" );
		}
		if ( ! empty( $sdm ) ) {
			$css .= self::css_dimension( $sdm, $selector );
		}
		$css .= self::css_advance( $attrs, $selector );
		return $css;
	}

	public static function process_slider_block( $attrs, $selector, $unique_id ) {
		$css = '';
		$sn  = $attrs['style_name'] ?? array();
		$sc  = $attrs['style_content'] ?? array();
		$sab = $attrs['style_backgroundAndBorder'] ?? array();
		$sbs = $attrs['style_boxshadow'] ?? array();
		$sdm = $attrs['style_dimension'] ?? array();
		if ( ! empty( $sn['typography'] ) ) {
			$css .= self::css_typography( $sn['typography'], "$selector .wcb-slider-child__name" );
		}
		if ( ! empty( $sn['textColor'] ) ) {
			$css .= "$selector .wcb-slider-child__name { color: {$sn['textColor']}; }\n";
		}
		if ( ! empty( $sc['typography'] ) ) {
			$css .= self::css_typography( $sc['typography'], "$selector .wcb-slider-child__content" );
		}
		if ( ! empty( $sc['textColor'] ) ) {
			$css .= "$selector .wcb-slider-child__content { color: {$sc['textColor']}; }\n";
		}
		if ( ! empty( $sab['background'] ) ) {
			$css .= self::css_background( $sab['background'], "$selector .wcb-slider-child" );
		}
		if ( ! empty( $sab['border'] ) ) {
			$css .= self::css_border( $sab['border'], "$selector .wcb-slider-child" );
		}
		if ( ! empty( $sbs['Normal']['color'] ) ) {
			$css .= self::css_box_shadow( $sbs['Normal'], "$selector .wcb-slider-child" );
		}
		if ( ! empty( $sbs['Hover']['color'] ) ) {
			$css .= self::css_box_shadow_hover( $sbs['Hover'], "$selector .wcb-slider-child:hover" );
		}
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

		// --- Name ---
		if ( ! empty( $sn['typography'] ) ) {
			$css .= self::css_typography( $sn['typography'], "$selector .wcb-slider-child__name" );
		}
		if ( ! empty( $sn['textColor'] ) ) {
			$css .= "$selector .wcb-slider-child__name { color: {$sn['textColor']}; }\n";
		}
		if ( ! empty( $sn['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sn['marginBottom'], "$selector .wcb-slider-child__name" );
		}

		// --- Content ---
		if ( ! empty( $sc['typography'] ) ) {
			$css .= self::css_typography( $sc['typography'], "$selector .wcb-slider-child__content" );
		}
		if ( ! empty( $sc['textColor'] ) ) {
			$css .= "$selector .wcb-slider-child__content { color: {$sc['textColor']}; }\n";
		}
		if ( ! empty( $sc['marginBottom'] ) ) {
			$css .= self::css_responsive( 'margin-bottom', $sc['marginBottom'], "$selector .wcb-slider-child__content" );
		}

		// --- Call to action button ---
		if ( ! empty( $sb['typographyText'] ) ) {
			$css .= self::css_typography( $sb['typographyText'], "$selector .wcb-slider-child__btn" );
		}
		if ( ! empty( $sb['colorText'] ) ) {
			$css .= "$selector .wcb-slider-child__btn { color: {$sb['colorText']}; }\n";
		}
		if ( ! empty( $sb['hoverColorText'] ) ) {
			$css .= "$selector .wcb-slider-child__btn:hover { color: {$sb['hoverColorText']}; }\n";
		}
		if ( ! empty( $sb['normalBackground'] ) ) {
			$css .= self::css_background( $sb['normalBackground'], "$selector .wcb-slider-child__btn" );
		}
		if ( ! empty( $sb['hoverBackground'] ) ) {
			$css .= self::css_background( $sb['hoverBackground'], "$selector .wcb-slider-child__btn:hover" );
		}
		if ( ! empty( $sb['mainSettings']['color'] ) ) {
			$css .= self::css_border( array( 'mainSettings' => $sb['mainSettings'], 'radius' => $sb['radius'] ?? array() ), "$selector .wcb-slider-child__btn" );
		}
		if ( ! empty( $sb['padding'] ) ) {
			$css .= self::css_responsive_spacing( 'padding', $sb['padding'], "$selector .wcb-slider-child__btn" );
		}
		if ( ! empty( $sb['margin'] ) ) {
			$css .= self::css_responsive_spacing( 'margin', $sb['margin'], "$selector .wcb-slider-child__btn" );
		}

		// --- Image / Icon ---
		if ( ! empty( $si['iconColor'] ) ) {
			$css .= "$selector .wcb-slider-child__icon { color: {$si['iconColor']}; }\n";
		}
		if ( ! empty( $si['iconHoverColor'] ) ) {
			$css .= "$selector .wcb-slider-child__icon:hover { color: {$si['iconHoverColor']}; }\n";
		}
		if ( ! empty( $si['iconSize'] ) ) {
			$css .= self::css_responsive( 'font-size', $si['iconSize'], "$selector .wcb-slider-child__icon" );
		}
		if ( ! empty( $si['iconBorder'] ) ) {
			$css .= self::css_border( $si['iconBorder'], "$selector .wcb-slider-child__icon" );
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
		$sb  = $attrs['style_border'] ?? array();
		if ( ! empty( $sb ) ) {
			$css .= self::css_border( $sb, $selector );
		}
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
		if ( ! empty( $sl['typography'] ) ) {
			$css .= self::css_typography( $sl['typography'], "$selector .wcb-form__label" );
		}
		if ( ! empty( $sl['textColor'] ) ) {
			$css .= "$selector .wcb-form__label { color: {$sl['textColor']}; }\n";
		}
		$input_sel = "$selector .wcb-form__input, $selector .wcb-form__textarea, $selector .wcb-form__select";
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
		if ( ! empty( $ss['typography'] ) ) {
			$css .= self::css_typography( $ss['typography'], "$selector .wcb-form__btn-submit" );
		}
		if ( ! empty( $ss['colorAndBackgroundColor'] ) ) {
			$cbc = $ss['colorAndBackgroundColor'];
			if ( ! empty( $cbc['Normal']['color'] ) ) {
				$css .= "$selector .wcb-form__btn-submit { color: {$cbc['Normal']['color']}; }\n";
			}
			if ( ! empty( $cbc['Normal']['backgroundColor'] ) ) {
				$css .= "$selector .wcb-form__btn-submit { background-color: {$cbc['Normal']['backgroundColor']}; }\n";
			}
			if ( ! empty( $cbc['Hover']['color'] ) ) {
				$css .= "$selector .wcb-form__btn-submit:hover { color: {$cbc['Hover']['color']}; }\n";
			}
			if ( ! empty( $cbc['Hover']['backgroundColor'] ) ) {
				$css .= "$selector .wcb-form__btn-submit:hover { background-color: {$cbc['Hover']['backgroundColor']}; }\n";
			}
		}
		if ( ! empty( $ss['border'] ) ) {
			$css .= self::css_border( $ss['border'], "$selector .wcb-form__btn-submit" );
		}
		if ( ! empty( $sm['successColor'] ) ) {
			$css .= "$selector .wcb-form__message--success { color: {$sm['successColor']}; }\n";
		}
		if ( ! empty( $sm['errorColor'] ) ) {
			$css .= "$selector .wcb-form__message--error { color: {$sm['errorColor']}; }\n";
		}
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
