<?php
/**
 * Class WCB_CSS_Utility
 *
 * Stateless pure CSS utility methods for Boostify Blocks.
 * Handles value sanitization, units, responsive cascading, typography,
 * borders, dimensions, backgrounds, shadows, and CSS rule generation.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class WCB_CSS_Utility {

	/**
	 * Generate CSS from selectors array.
	 *
	 * @param array  $selectors Array of selectors with their properties.
	 * @param string $id        Base selector ID.
	 * @return string Generated CSS.
	 */
	public static function generate_css( $selectors, $id ) {
		$styling_css = '';

		if ( empty( $selectors ) || ! is_array( $selectors ) ) {
			return '';
		}

		foreach ( $selectors as $key => $value ) {
			$css = '';

			foreach ( $value as $property => $val ) {
				if ( 'font-family' === $property && 'Default' === $val ) {
					continue;
				}

				// Handle nested selectors (e.g., '.wp-block:has(...) { .wrap { margin: 0 } }').
				if ( is_array( $val ) && self::is_associative_array( $val ) && ! is_int( $property ) ) {
					$nested_css = '';
					foreach ( $val as $nested_prop => $nested_val ) {
						if ( ! empty( $nested_val ) || ( empty( $nested_val ) && 'content' === $nested_prop ) || 0 === $nested_val ) {
							$nested_css .= $nested_prop . ': ' . self::sanitize_css_value( $nested_val ) . ';';
						}
					}
					if ( ! empty( $nested_css ) ) {
						$css .= ' { ' . $property . ' { ' . $nested_css . ' } }';
					}
					continue;
				}

				if ( ! empty( $val ) || ( empty( $val ) && 'content' === $property ) || 0 === $val ) {
					if ( 'font-family' === $property ) {
						$css .= $property . ': "' . self::sanitize_css_value( $val ) . '";';
					} else {
						if ( is_array( $val ) ) {
							foreach ( $val as $index => $property_val ) {
								$properties = is_string( $property_val ) ? $property_val : (string) $property_val;
								$css       .= $property . ': ' . self::sanitize_css_value( $properties ) . ';';
							}
						} else {
							$css .= $property . ': ' . self::sanitize_css_value( $val ) . ';';
						}
					}
				}
			}

			if ( ! empty( $css ) ) {
				// Check if $css already contains nested selectors.
				if ( 0 === strpos( $css, ' {' ) ) {
					$styling_css .= $id . $key . $css;
				} else {
					$styling_css     .= $id;
					$styling_css     .= $key . '{';
						$styling_css .= $css . '}';
				}
			}
		}

		return $styling_css;
	}

	/**
	 * Check if an array is associative.
	 *
	 * @param array $arr Array to check.
	 * @return bool True if associative.
	 */
	public static function is_associative_array( $arr ) {
		if ( ! is_array( $arr ) || empty( $arr ) ) {
			return false;
		}
		return array_keys( $arr ) !== range( 0, count( $arr ) - 1 );
	}

	/**
	 * Generate all CSS for desktop, tablet, and mobile.
	 *
	 * @param array  $combined_selectors Array with 'desktop', 'tablet', 'mobile' keys.
	 * @param string $id                 Base selector ID.
	 * @return array Array with 'desktop', 'tablet', 'mobile' CSS.
	 */
	public static function generate_all_css( $combined_selectors, $id ) {
		return array(
			'desktop' => self::generate_css( $combined_selectors['desktop'], $id ),
			'tablet'  => self::generate_css( $combined_selectors['tablet'], $id ),
			'mobile'  => self::generate_css( $combined_selectors['mobile'], $id ),
		);
	}

	/**
	 * Sanitize a CSS property value to prevent rule injection.
	 *
	 * @param mixed $value Raw CSS value from block attributes.
	 * @return mixed Sanitized value.
	 */
	public static function sanitize_css_value( $value ) {
		if ( ! is_string( $value ) ) {
			return $value;
		}
		return str_replace( array( '{', '}', ';', '<', '>' ), '', $value );
	}

	/**
	 * Get CSS value with unit.
	 *
	 * @param mixed  $value Value.
	 * @param string $unit  Unit (px, em, etc).
	 * @return string CSS value with unit.
	 */
	public static function get_css_value( $value, $unit = 'px' ) {
		if ( '' === $value || null === $value ) {
			return '';
		}
		if ( is_numeric( $value ) ) {
			return $value . $unit;
		}
		return $value;
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
	 * Optimize responsive values by cascading.
	 * Mirrors checkResponsiveValueForOptimizeCSS in TypeScript.
	 *
	 * Desktop → Tablet → Mobile: if tablet equals desktop, remove tablet.
	 * Tablet → Mobile: if mobile equals tablet, remove mobile.
	 *
	 * @param string|null $desktop Desktop value.
	 * @param string|null $tablet  Tablet value.
	 * @param string|null $mobile  Mobile value.
	 * @return array Optimized values with keys: desktop_v, tablet_v, mobile_v.
	 */
	public static function optimize_responsive_values( $desktop, $tablet, $mobile ) {
		// If desktop equals tablet, remove tablet (cascade down).
		if ( $desktop !== null && $tablet !== null && $desktop === $tablet ) {
			$tablet = null;
		}
		// If tablet equals mobile, remove mobile (cascade down).
		if ( $tablet !== null && $mobile !== null && $tablet === $mobile ) {
			$mobile = null;
		}
		// If desktop equals mobile (and tablet is null), remove mobile.
		if ( $tablet === null && $desktop !== null && $mobile !== null && $desktop === $mobile ) {
			$mobile = null;
		}

		return array(
			'desktop_v' => $desktop,
			'tablet_v'  => $tablet,
			'mobile_v'  => $mobile,
		);
	}

	/**
	 * Get responsive value from attribute array.
	 * Mirrors getValueFromAttrsResponsives in TypeScript.
	 *
	 * @param mixed $value Responsive value object or single value.
	 * @return array With keys: Desktop, Tablet, Mobile.
	 */
	public static function get_responsive_value( $value ) {
		if ( ! is_array( $value ) ) {
			return array(
				'Desktop' => $value,
				'Tablet'  => $value,
				'Mobile'  => $value,
			);
		}

		$desktop = $value['Desktop'] ?? null;
		$tablet  = $value['Tablet'] ?? $desktop;
		$mobile  = $value['Mobile'] ?? $tablet;

		return array(
			'Desktop' => $desktop,
			'Tablet'  => $tablet,
			'Mobile'  => $mobile,
		);
	}

	/**
	 * Get typography CSS array from typography attribute.
	 *
	 * @param array       $typo     Typography attribute array.
	 * @param string|null $selector Target selector (optional).
	 * @param string      $device   Breakpoint: desktop, tablet, or mobile.
	 * @return array CSS properties array or scoped selector array.
	 */
	public static function get_typography_css( $typo, $selector = null, $device = 'desktop' ) {
		$css = array();

		if ( empty( $typo ) || ! is_array( $typo ) ) {
			return $selector ? array() : $css;
		}

		$font_sizes     = $typo['fontSizes'] ?? null;
		$line_height    = $typo['lineHeight'] ?? null;
		$letter_spacing = $typo['letterSpacing'] ?? null;

		$d_fs = is_array( $font_sizes ) ? ( $font_sizes['Desktop'] ?? '' ) : ( $font_sizes ?? '' );
		$t_fs = is_array( $font_sizes ) ? ( $font_sizes['Tablet'] ?? $d_fs ) : ( $font_sizes ?? '' );
		$m_fs = is_array( $font_sizes ) ? ( $font_sizes['Mobile'] ?? $t_fs ) : ( $font_sizes ?? '' );

		$d_lh = is_array( $line_height ) ? ( $line_height['Desktop'] ?? '' ) : ( $line_height ?? '' );
		$t_lh = is_array( $line_height ) ? ( $line_height['Tablet'] ?? $d_lh ) : ( $line_height ?? '' );
		$m_lh = is_array( $line_height ) ? ( $line_height['Mobile'] ?? $t_lh ) : ( $line_height ?? '' );

		$d_ls = is_array( $letter_spacing ) ? ( $letter_spacing['Desktop'] ?? '' ) : ( $letter_spacing ?? '' );
		$t_ls = is_array( $letter_spacing ) ? ( $letter_spacing['Tablet'] ?? $d_ls ) : ( $letter_spacing ?? '' );
		$m_ls = is_array( $letter_spacing ) ? ( $letter_spacing['Mobile'] ?? $t_ls ) : ( $letter_spacing ?? '' );

		if ( 'desktop' === $device ) {
			if ( ! empty( $typo['fontFamily'] ) ) {
				$css['font-family'] = $typo['fontFamily'];
			}
			if ( ! empty( $typo['appearance']['style'] ) && is_array( $typo['appearance']['style'] ) ) {
				$s = $typo['appearance']['style'];
				if ( ! empty( $s['fontWeight'] ) ) {
					$css['font-weight'] = $s['fontWeight'];
				}
				if ( ! empty( $s['fontStyle'] ) ) {
					$css['font-style'] = $s['fontStyle'];
				}
			}
			if ( ! empty( $typo['textDecoration'] ) && 'undefined' !== $typo['textDecoration'] ) {
				$css['text-decoration'] = $typo['textDecoration'];
			}
			if ( ! empty( $typo['textTransform'] ) && 'undefined' !== $typo['textTransform'] ) {
				$css['text-transform'] = $typo['textTransform'];
			}
			if ( '' !== $d_fs && null !== $d_fs ) {
				$css['font-size'] = self::get_css_value( $d_fs );
			}
			if ( '' !== $d_lh && null !== $d_lh ) {
				$css['line-height'] = self::get_css_value( $d_lh, '' );
			}
			if ( '' !== $d_ls && null !== $d_ls ) {
				$css['letter-spacing'] = self::get_css_value( $d_ls );
			}
		} elseif ( 'tablet' === $device ) {
			if ( '' !== $t_fs && null !== $t_fs && $t_fs !== $d_fs ) {
				$css['font-size'] = self::get_css_value( $t_fs );
			}
			if ( '' !== $t_lh && null !== $t_lh && $t_lh !== $d_lh ) {
				$css['line-height'] = self::get_css_value( $t_lh, '' );
			}
			if ( '' !== $t_ls && null !== $t_ls && $t_ls !== $d_ls ) {
				$css['letter-spacing'] = self::get_css_value( $t_ls );
			}
		} elseif ( 'mobile' === $device ) {
			if ( '' !== $m_fs && null !== $m_fs && $m_fs !== $t_fs ) {
				$css['font-size'] = self::get_css_value( $m_fs );
			}
			if ( '' !== $m_lh && null !== $m_lh && $m_lh !== $t_lh ) {
				$css['line-height'] = self::get_css_value( $m_lh, '' );
			}
			if ( '' !== $m_ls && null !== $m_ls && $m_ls !== $t_ls ) {
				$css['letter-spacing'] = self::get_css_value( $m_ls );
			}
		}

		if ( $selector ) {
			return ! empty( $css ) ? array( $selector => $css ) : array();
		}

		return $css;
	}

	/**
	 * Get background CSS array from background attribute.
	 *
	 * @param array       $bg       Background attribute array.
	 * @param string|null $selector Target selector (optional).
	 * @return array CSS properties array or scoped selector array.
	 */
	public static function get_background_css( $bg, $selector = null ) {
		$css = array();

		if ( empty( $bg ) || ! is_array( $bg ) ) {
			return $selector ? array() : $css;
		}

		$bg_type = $bg['bgType'] ?? 'color';

		// Image background.
		if ( 'image' === $bg_type && ! empty( $bg['imageData'] ) ) {
			$img_desktop = $bg['imageData']['Desktop'] ?? $bg['imageData'];
			if ( ! empty( $img_desktop['mediaUrl'] ) ) {
				$css['background-image'] = 'url(' . $img_desktop['mediaUrl'] . ')';
			}
			if ( ! empty( $bg['bgImageSize'] ) ) {
				$size = $bg['bgImageSize'];
				if ( is_array( $size ) ) {
					$css['background-size'] = $size['Desktop'] ?? 'cover';
				} else {
					$css['background-size'] = $size;
				}
			}
			if ( ! empty( $bg['bgImageRepeat'] ) ) {
				$repeat = $bg['bgImageRepeat'];
				if ( is_array( $repeat ) ) {
					$css['background-repeat'] = $repeat['Desktop'] ?? 'no-repeat';
				} else {
					$css['background-repeat'] = $repeat;
				}
			}
			if ( ! empty( $bg['bgImageAttachment'] ) ) {
				$attachment = $bg['bgImageAttachment'];
				if ( is_array( $attachment ) ) {
					$css['background-attachment'] = $attachment['Desktop'] ?? 'scroll';
				} else {
					$css['background-attachment'] = $attachment;
				}
			}
			if ( ! empty( $bg['focalPoint']['Desktop'] ) ) {
				$fp = $bg['focalPoint']['Desktop'];
				$x  = isset( $fp['x'] ) ? ( $fp['x'] * 100 ) . '%' : '50%';
				$y  = isset( $fp['y'] ) ? ( $fp['y'] * 100 ) . '%' : '50%';
				$css['background-position'] = $x . ' ' . $y;
			}
		}

		// Gradient background.
		if ( 'gradient' === $bg_type && ! empty( $bg['gradient'] ) ) {
			$css['background'] = $bg['gradient'];
		}

		// Color background (always set as fallback for images too).
		if ( ! empty( $bg['color'] ) ) {
			$css['background-color'] = $bg['color'];
		}

		if ( $selector ) {
			return ! empty( $css ) ? array( $selector => $css ) : array();
		}

		return $css;
	}

	/**
	 * Get border CSS array from border attribute.
	 *
	 * @param array $border Border attribute array.
	 * @return array CSS properties array.
	 */
	public static function get_border_css_array( $border ) {
		$css = array();

		if ( empty( $border ) || ! is_array( $border ) ) {
			return $css;
		}

		$main = $border['mainSettings'] ?? null;
		if ( empty( $main ) && ( isset( $border['width'] ) || isset( $border['style'] ) || isset( $border['color'] ) || isset( $border['top'] ) || isset( $border['right'] ) || isset( $border['bottom'] ) || isset( $border['left'] ) ) ) {
			$main = $border;
		}

		if ( ! empty( $main ) && is_array( $main ) ) {
			// Check if 4-side border.
			$is_4side = isset( $main['top'] ) || isset( $main['right'] ) || isset( $main['bottom'] ) || isset( $main['left'] );

			if ( $is_4side ) {
				$sides = array( 'top', 'right', 'bottom', 'left' );
				foreach ( $sides as $side ) {
					if ( ! empty( $main[ $side ] ) && is_array( $main[ $side ] ) ) {
						$s  = $main[ $side ];
						$w  = $s['width'] ?? '1px';
						$st = $s['style'] ?? 'none';
						$c  = $s['color'] ?? '';
						if ( '' !== $c ) {
							$css[ 'border-' . $side ] = $w . ' ' . $st . ' ' . $c;
						} elseif ( '0' === (string) $w || '0px' === (string) $w || 'none' === $st ) {
							$css[ 'border-' . $side ] = $w . ' ' . $st;
						}
					}
				}
			} else {
				// Single-side border.
				$color = $main['color'] ?? '';
				$style = $main['style'] ?? 'solid';
				$width = $main['width'] ?? '1px';
				if ( $color ) {
					$css['border'] = $width . ' ' . $style . ' ' . $color;
				}
			}

			// Hover border color.
			if ( ! empty( $border['hoverColor'] ) ) {
				$css['hover-border-color'] = $border['hoverColor'];
			}
		}

		// Border radius.
		if ( ! empty( $border['radius'] ) ) {
			$radius  = $border['radius'];
			$raw_rad = is_array( $radius ) ? ( $radius['Desktop'] ?? $radius ) : $radius;
			if ( is_array( $raw_rad ) ) {
				$tl = self::get_css_value( $raw_rad['topLeft'] ?? '0' );
				$tr = self::get_css_value( $raw_rad['topRight'] ?? '0' );
				$br = self::get_css_value( $raw_rad['bottomRight'] ?? '0' );
				$bl = self::get_css_value( $raw_rad['bottomLeft'] ?? '0' );
				$rad_str = trim( "$tl $tr $br $bl" );
				if ( '0 0 0 0' === $rad_str || '0px 0px 0px 0px' === $rad_str ) {
					$css['border-radius'] = '0';
				} elseif ( '' !== $rad_str ) {
					$css['border-radius'] = $rad_str;
				}
			} else {
				$rad_val = self::get_css_value( $raw_rad );
				if ( '' !== $rad_val ) {
					$css['border-radius'] = $rad_val;
				}
			}
		}

		return $css;
	}

	/**
	 * Get border CSS scoped to selector.
	 *
	 * @param array   $border         Border attribute array.
	 * @param string  $selector       Target selector.
	 * @param boolean $is_with_radius Whether to include border radius.
	 * @return array Scoped selector array.
	 */
	public static function get_border_css( $border, $selector, $is_with_radius = true ) {
		if ( empty( $border ) || ! is_array( $border ) ) {
			return array();
		}

		$css = self::get_border_css_array( $border );
		if ( ! $is_with_radius && isset( $css['border-radius'] ) ) {
			unset( $css['border-radius'] );
		}

		$result = array();
		if ( ! empty( $css ) ) {
			$hover_color = $css['hover-border-color'] ?? null;
			unset( $css['hover-border-color'] );

			if ( ! empty( $css ) ) {
				$result[ $selector ] = $css;
			}
			if ( ! empty( $hover_color ) ) {
				$result[ $selector . ':hover' ]['border-color'] = $hover_color;
			}
		}

		return $result;
	}

	/**
	 * Get responsive property CSS across desktop, tablet, and mobile.
	 *
	 * @param mixed  $value    Responsive value array or primitive.
	 * @param string $property CSS property name.
	 * @param string $selector Target selector.
	 * @param string $device   Breakpoint: desktop, tablet, or mobile.
	 * @param string $unit     Optional unit (px, em, etc).
	 * @return array Scoped selector array.
	 */
	public static function get_responsive_css( $value, $property, $selector, $device = 'desktop', $unit = '' ) {
		if ( empty( $value ) && '0' !== (string) $value && 0 !== $value ) {
			return array();
		}

		if ( 'line-height' === $property || 'z-index' === $property || 'opacity' === $property ) {
			$unit = '';
		}

		$d = is_array( $value ) ? ( $value['Desktop'] ?? '' ) : $value;
		$t = is_array( $value ) ? ( $value['Tablet'] ?? $d ) : $value;
		$m = is_array( $value ) ? ( $value['Mobile'] ?? $t ) : $value;

		$val = null;
		if ( 'desktop' === $device ) {
			if ( '' !== $d && null !== $d ) {
				$val = $d;
			}
		} elseif ( 'tablet' === $device ) {
			if ( '' !== $t && null !== $t && $t !== $d ) {
				$val = $t;
			}
		} elseif ( 'mobile' === $device ) {
			if ( '' !== $m && null !== $m && $m !== $t ) {
				$val = $m;
			}
		}

		if ( null !== $val && '' !== $val ) {
			if ( is_array( $val ) && ( isset( $val['topLeft'] ) || isset( $val['topRight'] ) || isset( $val['bottomLeft'] ) || isset( $val['bottomRight'] ) ) ) {
				$tl = self::get_css_value( $val['topLeft'] ?? '0', $unit );
				$tr = self::get_css_value( $val['topRight'] ?? '0', $unit );
				$br = self::get_css_value( $val['bottomRight'] ?? '0', $unit );
				$bl = self::get_css_value( $val['bottomLeft'] ?? '0', $unit );
				$rad_str = trim( "$tl $tr $br $bl" );
				if ( '0 0 0 0' !== $rad_str && '0px 0px 0px 0px' !== $rad_str && '' !== $rad_str ) {
					return array( $selector => array( $property => $rad_str ) );
				}
				return array();
			}
			return array( $selector => array( $property => self::get_css_value( $val, $unit ) ) );
		}

		return array();
	}

	/**
	 * Get responsive dimension CSS (padding, margin).
	 *
	 * @param array  $dim_data Dimension data.
	 * @param string $type     'padding' or 'margin'.
	 * @param string $selector Target selector.
	 * @param string $device   Breakpoint: desktop, tablet, or mobile.
	 * @return array Scoped selector array.
	 */
	public static function get_dimension_css( $dim_data, $type, $selector, $device = 'desktop' ) {
		if ( empty( $dim_data ) || ! is_array( $dim_data ) ) {
			return array();
		}

		$is_nested = isset( $dim_data['Desktop'] ) || isset( $dim_data['Tablet'] ) || isset( $dim_data['Mobile'] )
			|| isset( $dim_data['desktop'] ) || isset( $dim_data['tablet'] ) || isset( $dim_data['mobile'] );

		$d_data = $dim_data['Desktop'] ?? ( $dim_data['desktop'] ?? ( $is_nested ? array() : $dim_data ) );
		$t_data = $dim_data['Tablet'] ?? ( $dim_data['tablet'] ?? ( $is_nested ? $d_data : $dim_data ) );
		$m_data = $dim_data['Mobile'] ?? ( $dim_data['mobile'] ?? ( $is_nested ? $t_data : $dim_data ) );

		$target_data = null;
		$ref_data    = null;

		if ( 'desktop' === $device ) {
			$target_data = $d_data;
		} elseif ( 'tablet' === $device ) {
			$target_data = $t_data;
			$ref_data    = $d_data;
		} elseif ( 'mobile' === $device ) {
			$target_data = $m_data;
			$ref_data    = $t_data;
		}

		if ( ! is_array( $target_data ) || empty( $target_data ) ) {
			return array();
		}

		$css   = array();
		$sides = array( 'top', 'right', 'bottom', 'left' );

		foreach ( $sides as $side ) {
			$val = $target_data[ $side ] ?? '';
			if ( '' !== $val && null !== $val ) {
				if ( null === $ref_data || ( $ref_data[ $side ] ?? '' ) !== $val ) {
					$css[ $type . '-' . $side ] = self::get_css_value( $val );
				}
			}
		}

		if ( ! empty( $css ) ) {
			return array( $selector => $css );
		}

		return array();
	}

	/**
	 * Tailwind shadow preset value. Mirrors getShadowStyleValueFromTwPreset.
	 *
	 * @param string $preset Preset name (shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl, shadow-2xl, shadow-inner).
	 * @param string $color  Optional shadow color.
	 * @return string CSS box-shadow string.
	 */
	public static function get_tw_shadow_preset_value( $preset, $color = '' ) {
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
	}

	/**
	 * Get box shadow CSS.
	 *
	 * @param array  $box_shadow Box shadow attribute array.
	 * @param string $selector   Target selector.
	 * @return array Scoped selector array.
	 */
	public static function get_box_shadow_css( $box_shadow, $selector ) {
		if ( empty( $box_shadow ) || ! is_array( $box_shadow ) ) {
			return array();
		}

		$result = array();

		$build_shadow = function( $item ) {
			if ( empty( $item ) || ! is_array( $item ) ) {
				return '';
			}

			$color  = $item['color'] ?? '';
			$preset = $item['presetClass'] ?? '';

			if ( ! empty( $preset ) ) {
				return self::get_tw_shadow_preset_value( $preset, $color );
			}

			$h_val = floatval( $item['horizontal'] ?? 0 );
			$v_val = floatval( $item['vertical'] ?? 0 );
			$b_val = floatval( $item['blur'] ?? 0 );
			$s_val = floatval( $item['spread'] ?? 0 );

			if ( empty( $color ) && 0.0 === $h_val && 0.0 === $v_val && 0.0 === $b_val && 0.0 === $s_val ) {
				return '';
			}

			$x     = self::get_css_value( $item['horizontal'] ?? 0 );
			$y     = self::get_css_value( $item['vertical'] ?? 0 );
			$b     = self::get_css_value( $item['blur'] ?? 0 );
			$s     = self::get_css_value( $item['spread'] ?? 0 );
			$c     = ! empty( $color ) ? $color : 'rgb(0 0 0 / 0.1)';
			$inset = ! empty( $item['position'] ) && 'inset' === $item['position'] ? 'inset ' : '';

			return trim( "{$inset}{$x} {$y} {$b} {$s} {$c}" );
		};

		$normal = $box_shadow['Normal'] ?? ( $box_shadow['normal'] ?? null );
		if ( ! empty( $normal ) ) {
			$norm = $build_shadow( $normal );
			if ( $norm ) {
				$result[ $selector ]['box-shadow'] = $norm;
			}
		} elseif ( ! empty( $box_shadow['presetClass'] ) || ! empty( $box_shadow['color'] ) || ! empty( $box_shadow['blur'] ) || ! empty( $box_shadow['spread'] ) ) {
			$single = $build_shadow( $box_shadow );
			if ( $single ) {
				$result[ $selector ]['box-shadow'] = $single;
			}
		}

		$hover = $box_shadow['Hover'] ?? ( $box_shadow['hover'] ?? null );
		if ( ! empty( $hover ) ) {
			$hov = $build_shadow( $hover );
			if ( $hov ) {
				$result[ $selector . ':hover' ]['box-shadow'] = $hov;
			}
		}

		return $result;
	}

	/**
	 * Get advance CSS (responsive condition, z-index).
	 *
	 * @param array  $attrs    Block attributes.
	 * @param string $selector Base selector.
	 * @return array CSS properties array.
	 */
	public static function get_advance_css( $attrs, $selector ) {
		$css = array();

		$settings_opts = get_option( 'boostify_blocks_settings_options', array() );
		$media_tablet  = isset( $settings_opts['media_tablet'] ) ? (int) floatval( $settings_opts['media_tablet'] ) : 768;
		$media_desktop = isset( $settings_opts['media_desktop'] ) ? (int) floatval( $settings_opts['media_desktop'] ) : 1024;
		if ( $media_tablet <= 0 ) {
			$media_tablet = 768;
		}
		if ( $media_desktop <= $media_tablet ) {
			$media_desktop = $media_tablet + 1;
		}

		$desktop_mq = '@media (min-width: ' . ( $media_desktop + 1 ) . 'px)';
		$tablet_mq  = '@media (min-width: ' . $media_tablet . 'px) and (max-width: ' . $media_desktop . 'px)';
		$mobile_mq  = '@media (max-width: ' . ( $media_tablet - 1 ) . 'px)';

		$rc = $attrs['advance_responsiveCondition'] ?? array();
		if ( ! empty( $rc['isHiddenOnDesktop'] ) ) {
			$css[ $desktop_mq ][ $selector ]['display'] = 'none !important';
		}
		if ( ! empty( $rc['isHiddenOnTablet'] ) ) {
			$css[ $tablet_mq ][ $selector ]['display'] = 'none !important';
		}
		if ( ! empty( $rc['isHiddenOnMobile'] ) ) {
			$css[ $mobile_mq ][ $selector ]['display'] = 'none !important';
		}

		$zi = $attrs['advance_zIndex'] ?? array();
		$z  = is_array( $zi ) ? ( $zi['Desktop'] ?? '' ) : $zi;
		if ( '' !== $z && null !== $z ) {
			$css[ $selector ]['z-index'] = $z;
		}

		return $css;
	}

	/**
	 * Parse a CSS string into an associative array.
	 *
	 * @param string $css_string CSS string like "color: red; font-size: 16px;"
	 * @return array Associative array of property => value.
	 */
	public static function parse_css_string( $css_string ) {
		$result = array();

		if ( empty( trim( $css_string ) ) ) {
			return $result;
		}

		$declarations = explode( ';', $css_string );
		foreach ( $declarations as $declaration ) {
			$declaration = trim( $declaration );
			if ( empty( $declaration ) ) {
				continue;
			}
			$parts = explode( ':', $declaration, 2 );
			if ( count( $parts ) === 2 ) {
				$property = trim( $parts[0] );
				$value    = trim( $parts[1] );
				if ( '' !== $property ) {
					$result[ $property ] = $value;
				}
			}
		}

		return $result;
	}
	/**
	 * Get global layout/settings values (mirrors DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES).
	 *
	 * @return array Associative array of global settings.
	 */
	public static function get_global_settings() {
		$options = get_option( 'boostify_blocks_settings_options', array() );
		$layout  = function_exists( 'wp_get_global_settings' ) ? wp_get_global_settings( array( 'layout' ) ) : array();

		return array(
			'defaultContentWidth'  => $options['defaultContentWidth'] ?? ( $layout['contentSize'] ?? '' ),
			'containerPadding'     => $options['containerPadding'] ?? '10px',
			'containerElementsGap' => $options['containerElementsGap'] ?? '10px',
			'media_tablet'         => $options['media_tablet'] ?? '768px',
			'media_desktop'        => $options['media_desktop'] ?? '1024px',
		);
	}
}

