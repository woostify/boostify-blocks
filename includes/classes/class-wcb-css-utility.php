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
	 * Mirrors UAGB_Helper::generate_css in Spectra.
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
	 * Generate all CSS for desktop, tablet, mobile.
	 * Mirrors UAGB_Helper::generate_all_css in Spectra.
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
				if ( '0 0 0 0' !== $rad_str && '0px 0px 0px 0px' !== $rad_str && '' !== $rad_str ) {
					$css['border-radius'] = $rad_str;
				}
			} else {
				$rad_val = self::get_css_value( $raw_rad );
				if ( '' !== $rad_val && '0' !== $rad_val && '0px' !== $rad_val ) {
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

		$is_nested = isset( $dim_data['Desktop'] ) || isset( $dim_data['Tablet'] ) || isset( $dim_data['Mobile'] );

		$d_data = $is_nested ? ( $dim_data['Desktop'] ?? array() ) : $dim_data;
		$t_data = $is_nested ? ( $dim_data['Tablet'] ?? $d_data ) : $dim_data;
		$m_data = $is_nested ? ( $dim_data['Mobile'] ?? $t_data ) : $dim_data;

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
			if ( empty( $item ) || ! is_array( $item ) || empty( $item['color'] ) ) {
				return '';
			}
			$inset = ! empty( $item['position'] ) && 'inset' === $item['position'] ? 'inset ' : '';
			$x     = self::get_css_value( $item['horizontal'] ?? '0px' );
			$y     = self::get_css_value( $item['vertical'] ?? '0px' );
			$b     = self::get_css_value( $item['blur'] ?? '0px' );
			$s     = self::get_css_value( $item['spread'] ?? '0px' );
			$c     = $item['color'];
			return trim( "{$inset}{$x} {$y} {$b} {$s} {$c}" );
		};

		if ( ! empty( $box_shadow['Normal'] ) ) {
			$norm = $build_shadow( $box_shadow['Normal'] );
			if ( $norm ) {
				$result[ $selector ]['box-shadow'] = $norm;
			}
		} elseif ( ! empty( $box_shadow['color'] ) ) {
			$single = $build_shadow( $box_shadow );
			if ( $single ) {
				$result[ $selector ]['box-shadow'] = $single;
			}
		}

		if ( ! empty( $box_shadow['Hover'] ) ) {
			$hov = $build_shadow( $box_shadow['Hover'] );
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

	// =====================================================================
	// CSS SHORTHAND UTILITY METHODS
	// =====================================================================

	public static function css_responsive( $property, $value, $selector, $unit = '' ) {
		if ( empty( $value ) && '0' !== $value && 0 !== $value ) {
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
		return self::css_border_full( $border, $selector );
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

		$css         = '';
		$main        = $border['mainSettings'] ?? null;
		if ( empty( $main ) && ( isset( $border['width'] ) || isset( $border['style'] ) || isset( $border['color'] ) || isset( $border['top'] ) || isset( $border['right'] ) || isset( $border['bottom'] ) || isset( $border['left'] ) ) ) {
			$main = $border;
		}
		$hover_color = $border['hoverColor'] ?? '';
		$radius      = $border['radius'] ?? null;

		if ( ! empty( $main ) && is_array( $main ) ) {
			// Check if 4-side border (has 'top', 'right', 'bottom', or 'left').
			$is_4side = isset( $main['top'] ) || isset( $main['right'] ) || isset( $main['bottom'] ) || isset( $main['left'] );

			if ( $is_4side ) {
				$sides = array( 'top', 'right', 'bottom', 'left' );
				foreach ( $sides as $side ) {
					if ( ! empty( $main[ $side ] ) && is_array( $main[ $side ] ) ) {
						$s  = $main[ $side ];
						$w  = self::get_css_value( $s['width'] ?? '1px' );
						$st = $s['style'] ?? '';
						$c  = $s['color'] ?? '';
						if ( 'none' === $st ) {
							$css .= "$selector { border-$side: none; }\n";
						} elseif ( '' !== $c || ( '' !== $st && 'none' !== $st ) || ! empty( $s['width'] ) ) {
							if ( empty( $st ) ) {
								$st = 'solid';
							}
							$css .= "$selector { border-$side: " . trim( $w . ' ' . $st . ' ' . $c ) . "; }\n";
						}
					}
				}
			} else {
				// Single-side border.
				$color = $main['color'] ?? '';
				$style = $main['style'] ?? '';
				$width = self::get_css_value( $main['width'] ?? '1px' );
				if ( 'none' === $style ) {
					$css .= "$selector { border: none; }\n";
				} elseif ( '' !== $color || ( '' !== $style && 'none' !== $style ) || ! empty( $main['width'] ) ) {
					if ( empty( $style ) ) {
						$style = 'solid';
					}
					$css .= "$selector { border: " . trim( $width . ' ' . $style . ' ' . $color ) . "; }\n";
				}
			}
		}

		// Hover border color.
		if ( ! empty( $hover_color ) ) {
			$css .= "$selector:hover { border-color: $hover_color; }\n";
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

		if ( ! is_array( $values ) ) {
			return '';
		}

		// Cascade: Tablet → Desktop, Mobile → Tablet → Desktop.
		$desktop = $values['Desktop'] ?? null;
		$tablet  = $values['Tablet'] ?? $desktop;
		$mobile  = $values['Mobile'] ?? $tablet;

		// Base (mobile-first).
		if ( $mobile && is_array( $mobile ) ) {
			$s = self::spacing_shorthand( $mobile );
			if ( $s ) {
				$css .= "$selector { $property: $s; }\n";
			}
		}

		// Tablet — only output if different from mobile.
		if ( $tablet && is_array( $tablet ) && self::spacing_shorthand( $tablet ) !== self::spacing_shorthand( $mobile ) ) {
			$s = self::spacing_shorthand( $tablet );
			if ( $s ) {
				$css .= "@media (min-width: 768px) { $selector { $property: $s; } }\n";
			}
		}

		// Desktop — only output if different from tablet.
		if ( $desktop && is_array( $desktop ) && self::spacing_shorthand( $desktop ) !== self::spacing_shorthand( $tablet ) ) {
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

		// Convert empty strings to '0'.
		$t = ( '' === $t ) ? '0' : $t;
		$r = ( '' === $r ) ? '0' : $r;
		$b = ( '' === $b ) ? '0' : $b;
		$l = ( '' === $l ) ? '0' : $l;

		if ( '0' === $t && '0' === $r && '0' === $b && '0' === $l ) {
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

		$settings_opts = get_option( 'boostify_blocks_settings_options', array() );
		$media_tablet  = isset( $settings_opts['media_tablet'] ) ? (int) floatval( $settings_opts['media_tablet'] ) : 768;
		$media_desktop = isset( $settings_opts['media_desktop'] ) ? (int) floatval( $settings_opts['media_desktop'] ) : 1024;
		if ( $media_tablet <= 0 ) {
			$media_tablet = 768;
		}
		if ( $media_desktop <= $media_tablet ) {
			$media_desktop = $media_tablet + 1;
		}

		if ( ! empty( $rc['isHiddenOnDesktop'] ) ) {
			$css .= '@media (min-width: ' . ( $media_desktop + 1 ) . "px) { $selector { display: none !important; } }\n";
		}
		if ( ! empty( $rc['isHiddenOnTablet'] ) ) {
			$css .= "@media (min-width: {$media_tablet}px) and (max-width: {$media_desktop}px) { $selector { display: none !important; } }\n";
		}
		if ( ! empty( $rc['isHiddenOnMobile'] ) ) {
			$css .= '@media (max-width: ' . ( $media_tablet - 1 ) . "px) { $selector { display: none !important; } }\n";
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
			} else {
				// Output default value when no responsive value is set.
				$css .= "$selector { {$config['property']}: {$config['default']}; }\n";
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

		$global         = self::get_global_settings();
		$css            = '';
		$width_type     = $container['containerWidthType'] ?? 'Full Width';
		$content_w_type = $container['contentWidthType'] ?? 'Boxed';
		$overflow       = $container['overflow'] ?? '';
		$custom_width   = $container['customWidth'] ?? array();
		$min_height     = $container['minHeight'] ?? array();
		$content_box_w  = $container['contentBoxWidth'] ?? array();

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

