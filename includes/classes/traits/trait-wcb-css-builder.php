<?php
/**
 * Trait WCB_CSS_Builder_Trait
 *
 * Reference-based fluent CSS accumulator helpers.
 * Handles add_responsive_css, add_typography_css, add_dimension_css, add_border_css,
 * add_box_shadow_css, add_background_css, add_advance_css, add_image_ratio_css,
 * add_color_gradient_css, add_text_shadow_css, and flex alignment mapping.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

trait WCB_CSS_Builder_Trait {

	/**
	 * Helper to normalize CSS accumulator target array.
	 * Ensures 'desktop', 'tablet', and 'mobile' keys exist.
	 *
	 * @param array $css Accumulated CSS array reference.
	 */
	public static function init_css_accumulator( &$css ) {
		if ( ! is_array( $css ) ) {
			$css = array(
				'desktop' => array(),
				'tablet'  => array(),
				'mobile'  => array(),
			);
			return;
		}
		if ( ! isset( $css['desktop'] ) ) {
			$css = array(
				'desktop' => $css,
				'tablet'  => array(),
				'mobile'  => array(),
			);
		}
		if ( ! isset( $css['tablet'] ) ) {
			$css['tablet'] = array();
		}
		if ( ! isset( $css['mobile'] ) ) {
			$css['mobile'] = array();
		}
	}

	/**
	 * Helper to set a single CSS property on a selector array, supporting corner radii objects.
	 *
	 * @param array  $bucket   Device bucket (desktop/tablet/mobile) reference.
	 * @param string $selector Target CSS selector.
	 * @param string $property CSS property name.
	 * @param mixed  $val      Raw CSS value.
	 * @param string $unit     Optional unit suffix.
	 */
	public static function set_css_property( &$bucket, $selector, $property, $val, $unit = '' ) {
		if ( is_array( $val ) && ( isset( $val['topLeft'] ) || isset( $val['topRight'] ) || isset( $val['bottomLeft'] ) || isset( $val['bottomRight'] ) ) ) {
			$tl      = self::get_css_value( $val['topLeft'] ?? '0', $unit );
			$tr      = self::get_css_value( $val['topRight'] ?? '0', $unit );
			$br      = self::get_css_value( $val['bottomRight'] ?? '0', $unit );
			$bl      = self::get_css_value( $val['bottomLeft'] ?? '0', $unit );
			$rad_str = trim( "{$tl} {$tr} {$br} {$bl}" );
			if ( '0 0 0 0' !== $rad_str && '0px 0px 0px 0px' !== $rad_str && '' !== $rad_str ) {
				$bucket[ $selector ][ $property ] = $rad_str;
			}
			return;
		}

		$formatted = self::get_css_value( $val, $unit );
		if ( '' !== $formatted && null !== $formatted ) {
			$bucket[ $selector ][ $property ] = $formatted;
		}
	}

	/**
	 * Add responsive property to CSS accumulator across desktop, tablet, and mobile.
	 *
	 * @param array  $css      CSS accumulator array reference.
	 * @param string $selector Target CSS selector.
	 * @param string $property CSS property name.
	 * @param mixed  $value    Responsive value array or primitive.
	 * @param string $unit     Unit suffix (default '').
	 */
	public static function add_responsive_css( &$css, $selector, $property, $value, $unit = '' ) {
		if ( empty( $value ) && '0' !== (string) $value && 0 !== $value ) {
			return;
		}
		self::init_css_accumulator( $css );

		if ( in_array( $property, array( 'line-height', 'z-index', 'opacity', 'flex', 'order', 'aspect-ratio' ), true ) ) {
			$unit = '';
		}

		if ( is_array( $value ) ) {
			if ( empty( $unit ) ) {
				$unit = $value['unit'] ?? $value['Unit'] ?? '';
			}
			$is_device_map = isset( $value['Desktop'] ) || isset( $value['desktop'] ) ||
			                 isset( $value['Tablet'] )  || isset( $value['tablet'] )  ||
			                 isset( $value['Mobile'] )  || isset( $value['mobile'] );
			if ( $is_device_map ) {
				$d = $value['Desktop'] ?? $value['desktop'] ?? '';
				$t = $value['Tablet'] ?? $value['tablet'] ?? $d;
				$m = $value['Mobile'] ?? $value['mobile'] ?? $t;
			} else {
				$d = $value;
				$t = $value;
				$m = $value;
			}
		} else {
			$d = $value;
			$t = $value;
			$m = $value;
		}

		if ( '' !== $d && null !== $d ) {
			self::set_css_property( $css['desktop'], $selector, $property, $d, $unit );
		}
		if ( '' !== $t && null !== $t && $t !== $d ) {
			self::set_css_property( $css['tablet'], $selector, $property, $t, $unit );
		}
		if ( '' !== $m && null !== $m && $m !== $t ) {
			self::set_css_property( $css['mobile'], $selector, $property, $m, $unit );
		}
	}

	/**
	 * Add typography styles to CSS accumulator.
	 *
	 * @param array  $css      CSS accumulator array reference.
	 * @param string $selector Target CSS selector.
	 * @param array  $typo     Typography attribute array.
	 */
	public static function add_typography_css( &$css, $selector, $typo ) {
		if ( empty( $typo ) || ! is_array( $typo ) ) {
			return;
		}
		self::init_css_accumulator( $css );

		$d_rules = self::get_typography_css( $typo, null, 'desktop' );
		if ( ! empty( $d_rules ) ) {
			foreach ( $d_rules as $p => $v ) {
				$css['desktop'][ $selector ][ $p ] = $v;
			}
		}

		$t_rules = self::get_typography_css( $typo, null, 'tablet' );
		if ( ! empty( $t_rules ) ) {
			foreach ( $t_rules as $p => $v ) {
				$css['tablet'][ $selector ][ $p ] = $v;
			}
		}

		$m_rules = self::get_typography_css( $typo, null, 'mobile' );
		if ( ! empty( $m_rules ) ) {
			foreach ( $m_rules as $p => $v ) {
				$css['mobile'][ $selector ][ $p ] = $v;
			}
		}
	}

	/**
	 * Add dimension styles (padding/margin) to CSS accumulator.
	 *
	 * @param array  $css      CSS accumulator array reference.
	 * @param string $selector Target CSS selector.
	 * @param string $type     'padding' or 'margin'.
	 * @param array  $dim_data Dimension data array.
	 */
	public static function add_dimension_css( &$css, $selector, $type, $dim_data ) {
		if ( empty( $dim_data ) || ! is_array( $dim_data ) ) {
			return;
		}
		self::init_css_accumulator( $css );

		$d_rules = self::get_dimension_css( $dim_data, $type, $selector, 'desktop' );
		if ( ! empty( $d_rules[ $selector ] ) ) {
			foreach ( $d_rules[ $selector ] as $p => $v ) {
				$css['desktop'][ $selector ][ $p ] = $v;
			}
		}

		$t_rules = self::get_dimension_css( $dim_data, $type, $selector, 'tablet' );
		if ( ! empty( $t_rules[ $selector ] ) ) {
			foreach ( $t_rules[ $selector ] as $p => $v ) {
				$css['tablet'][ $selector ][ $p ] = $v;
			}
		}

		$m_rules = self::get_dimension_css( $dim_data, $type, $selector, 'mobile' );
		if ( ! empty( $m_rules[ $selector ] ) ) {
			foreach ( $m_rules[ $selector ] as $p => $v ) {
				$css['mobile'][ $selector ][ $p ] = $v;
			}
		}
	}

	/**
	 * Add border styles to CSS accumulator.
	 *
	 * @param array   $css                    CSS accumulator array reference.
	 * @param string  $selector               Target CSS selector.
	 * @param array   $border                 Border attribute array.
	 * @param boolean $is_with_radius         Whether to output border radius.
	 * @param boolean $use_individual_corners Whether to output individual corner properties (border-*-radius).
	 * @param boolean $skip_zero              Whether to skip outputting '0' radius.
	 */
	public static function add_border_css( &$css, $selector, $border, $is_with_radius = true, $use_individual_corners = false, $skip_zero = false ) {
		if ( empty( $border ) || ! is_array( $border ) ) {
			return;
		}
		self::init_css_accumulator( $css );

		if ( ! $use_individual_corners ) {
			$b_rules = self::get_border_css( $border, $selector, $is_with_radius );
			if ( ! empty( $b_rules ) ) {
				foreach ( $b_rules as $sel => $props ) {
					foreach ( $props as $p => $v ) {
						$css['desktop'][ $sel ][ $p ] = $v;
					}
				}
			}
			return;
		}

		// Individual corners mode (mirrors src/utils/getBorderStyles.ts & getBorderRadiusStyles.ts).
		$main = $border['mainSettings'] ?? null;
		if ( empty( $main ) && ( isset( $border['width'] ) || isset( $border['style'] ) || isset( $border['color'] ) || isset( $border['top'] ) || isset( $border['right'] ) || isset( $border['bottom'] ) || isset( $border['left'] ) ) ) {
			$main = $border;
		}

		if ( ! empty( $main ) && is_array( $main ) ) {
			$is_4side = isset( $main['top'] ) || isset( $main['right'] ) || isset( $main['bottom'] ) || isset( $main['left'] );
			if ( $is_4side ) {
				foreach ( array( 'top', 'right', 'bottom', 'left' ) as $side ) {
					if ( ! empty( $main[ $side ] ) && is_array( $main[ $side ] ) ) {
						$s  = $main[ $side ];
						$w  = self::get_css_value( $s['width'] ?? '1px' );
						$st = $s['style'] ?? 'none';
						$c  = $s['color'] ?? '';
						if ( 'none' === $st ) {
							$css['desktop'][ $selector ][ 'border-' . $side ] = 'none';
						} elseif ( '' !== $c || ( '' !== $st && 'none' !== $st ) || ! empty( $s['width'] ) ) {
							if ( empty( $st ) ) {
								$st = 'solid';
							}
							$css['desktop'][ $selector ][ 'border-' . $side ] = trim( $w . ' ' . $st . ' ' . $c );
						}
					}
				}
			} else {
				$w  = self::get_css_value( $main['width'] ?? '1px' );
				$st = $main['style'] ?? 'none';
				$c  = $main['color'] ?? '';
				if ( 'none' === $st ) {
					$css['desktop'][ $selector ]['border'] = 'none';
				} elseif ( '' !== $c || ( '' !== $st && 'none' !== $st ) || ! empty( $main['width'] ) ) {
					if ( empty( $st ) ) {
						$st = 'solid';
					}
					$css['desktop'][ $selector ]['border'] = trim( $w . ' ' . $st . ' ' . $c );
				}
			}
		}

		if ( ! empty( $border['hoverColor'] ) ) {
			self::add_responsive_css( $css, $selector . ':hover', 'border-color', $border['hoverColor'] );
		}

		// Border Radius (responsive individual corners).
		if ( $is_with_radius && ! empty( $border['radius'] ) ) {
			$radius = $border['radius'];
			$normalize_corners = function ( $val ) {
				if ( empty( $val ) && '0' !== (string) $val ) {
					return array( 'topLeft' => '', 'topRight' => '', 'bottomRight' => '', 'bottomLeft' => '' );
				}
				if ( is_string( $val ) || is_numeric( $val ) ) {
					return array( 'topLeft' => $val, 'topRight' => $val, 'bottomRight' => $val, 'bottomLeft' => $val );
				}
				if ( is_array( $val ) ) {
					return array(
						'topLeft'     => $val['topLeft'] ?? '',
						'topRight'    => $val['topRight'] ?? '',
						'bottomRight' => $val['bottomRight'] ?? '',
						'bottomLeft'  => $val['bottomLeft'] ?? '',
					);
				}
				return array( 'topLeft' => '', 'topRight' => '', 'bottomRight' => '', 'bottomLeft' => '' );
			};

			$d_raw = is_array( $radius ) ? ( $radius['Desktop'] ?? $radius['desktop'] ?? ( isset( $radius['topLeft'] ) ? $radius : '' ) ) : $radius;
			$t_raw = is_array( $radius ) ? ( $radius['Tablet'] ?? $radius['tablet'] ?? $d_raw ) : $radius;
			$m_raw = is_array( $radius ) ? ( $radius['Mobile'] ?? $radius['mobile'] ?? $t_raw ) : $radius;

			$d_c = $normalize_corners( $d_raw );
			$t_c = $normalize_corners( $t_raw );
			$m_c = $normalize_corners( $m_raw );

			$corner_props = array(
				'topLeft'     => 'border-top-left-radius',
				'topRight'    => 'border-top-right-radius',
				'bottomRight' => 'border-bottom-right-radius',
				'bottomLeft'  => 'border-bottom-left-radius',
			);

			foreach ( $corner_props as $ckey => $css_prop ) {
				$d_v = $d_c[ $ckey ];
				$t_v = $t_c[ $ckey ];
				$m_v = $m_c[ $ckey ];

				if ( '' !== $d_v && null !== $d_v && ( ! $skip_zero || ( '0' !== (string) $d_v && 0 !== $d_v ) ) ) {
					$css['desktop'][ $selector ][ $css_prop ] = self::get_css_value( $d_v );
				}
				if ( '' !== $t_v && null !== $t_v && $t_v !== $d_v && ( ! $skip_zero || ( '0' !== (string) $t_v && 0 !== $t_v ) ) ) {
					$css['tablet'][ $selector ][ $css_prop ] = self::get_css_value( $t_v );
				}
				if ( '' !== $m_v && null !== $m_v && $m_v !== $t_v && ( ! $skip_zero || ( '0' !== (string) $m_v && 0 !== $m_v ) ) ) {
					$css['mobile'][ $selector ][ $css_prop ] = self::get_css_value( $m_v );
				}
			}
		}
	}

	/**
	 * Add box shadow styles to CSS accumulator.
	 *
	 * @param array  $css        CSS accumulator array reference.
	 * @param string $selector   Target CSS selector.
	 * @param array  $box_shadow Box shadow attribute array.
	 */
	public static function add_box_shadow_css( &$css, $selector, $box_shadow ) {
		if ( empty( $box_shadow ) || ! is_array( $box_shadow ) ) {
			return;
		}
		self::init_css_accumulator( $css );

		$bs_rules = self::get_box_shadow_css( $box_shadow, $selector );
		if ( ! empty( $bs_rules ) ) {
			foreach ( $bs_rules as $sel => $props ) {
				foreach ( $props as $p => $v ) {
					$css['desktop'][ $sel ][ $p ] = $v;
				}
			}
		}
	}

	/**
	 * Add background styles to CSS accumulator.
	 *
	 * @param array  $css      CSS accumulator array reference.
	 * @param string $selector Target CSS selector.
	 * @param array  $bg       Background attribute array.
	 */
	public static function add_background_css( &$css, $selector, $bg ) {
		if ( empty( $bg ) || ! is_array( $bg ) ) {
			return;
		}
		self::init_css_accumulator( $css );

		$bg_rules = self::get_background_css( $bg, $selector );
		if ( ! empty( $bg_rules[ $selector ] ) ) {
			foreach ( $bg_rules[ $selector ] as $p => $v ) {
				$css['desktop'][ $selector ][ $p ] = $v;
			}
		}
	}

	/**
	 * Add advance styles (responsive condition, z-index) to CSS accumulator.
	 *
	 * @param array  $css      CSS accumulator array reference.
	 * @param string $selector Target CSS selector.
	 * @param array  $attrs    Block attributes array.
	 */
	public static function add_advance_css( &$css, $selector, $attrs ) {
		if ( empty( $attrs ) || ! is_array( $attrs ) ) {
			return;
		}
		self::init_css_accumulator( $css );

		$adv_rules = self::get_advance_css( $attrs, $selector );
		if ( ! empty( $adv_rules ) ) {
			foreach ( $adv_rules as $k => $v ) {
				if ( is_array( $v ) ) {
					if ( 0 === strpos( $k, '@media' ) ) {
						if ( ! isset( $css['desktop'][ $k ] ) ) {
							$css['desktop'][ $k ] = array();
						}
						foreach ( $v as $sub_sel => $props ) {
							foreach ( $props as $p => $val ) {
								$css['desktop'][ $k ][ $sub_sel ][ $p ] = $val;
							}
						}
					} else {
						foreach ( $v as $p => $val ) {
							$css['desktop'][ $k ][ $p ] = $val;
						}
					}
				}
			}
		}
	}

	/**
	 * Add featured image aspect ratio and fit styles to CSS accumulator.
	 *
	 * @param array  $css        CSS accumulator array reference.
	 * @param string $selector   Image selector (e.g. wrapper or img).
	 * @param array  $image_data Panel attributes containing imageRatio, customHeight, imageFit.
	 */
	public static function add_image_ratio_css( &$css, $selector, $image_data ) {
		if ( empty( $image_data ) || ! is_array( $image_data ) ) {
			return;
		}
		self::init_css_accumulator( $css );

		$ratio_d  = $image_data['imageRatio'] ?? '16/9';
		$ratio_t  = is_array( $ratio_d ) ? ( $ratio_d['Tablet'] ?? ( $ratio_d['Desktop'] ?? '16/9' ) ) : $ratio_d;
		$ratio_m  = is_array( $ratio_d ) ? ( $ratio_d['Mobile'] ?? $ratio_t ) : $ratio_d;
		$custom_h = $image_data['customHeight'] ?? array( 'Desktop' => '220px' );
		$fit      = $image_data['imageFit'] ?? 'cover';

		$apply_device = function( $device_key, $ratio, $prev_ratio = null ) use ( &$css, $selector, $custom_h, $fit ) {
			if ( null !== $prev_ratio && $ratio === $prev_ratio && 'custom' !== $ratio ) {
				return;
			}

			if ( 'custom' === $ratio ) {
				$h_val = is_array( $custom_h ) ? ( $custom_h[ ucfirst( $device_key ) ] ?? ( $custom_h['Desktop'] ?? '220px' ) ) : $custom_h;
				$css[ $device_key ][ $selector ]['aspect-ratio'] = 'auto';
				$css[ $device_key ][ $selector ]['height']       = self::get_css_value( $h_val, 'px' );
			} elseif ( 'auto' === $ratio ) {
				$css[ $device_key ][ $selector ]['aspect-ratio'] = 'auto';
				$css[ $device_key ][ $selector ]['height']       = 'auto';
			} else {
				$css[ $device_key ][ $selector ]['aspect-ratio'] = $ratio;
				$css[ $device_key ][ $selector ]['height']       = 'auto';
			}

			if ( 'desktop' === $device_key ) {
				$css['desktop'][ $selector ]['width']      = '100%';
				$css['desktop'][ $selector ]['object-fit'] = $fit;
			}
		};

		$apply_device( 'desktop', $ratio_d );
		$apply_device( 'tablet', $ratio_t, $ratio_d );
		$apply_device( 'mobile', $ratio_m, $ratio_t );
	}

	/**
	 * Add color or gradient styles to CSS accumulator (mirrors getColorAndGradientStyles).
	 *
	 * @param array        $css        CSS accumulator array reference.
	 * @param string       $selector   Target CSS selector.
	 * @param array|string $text_color Color configuration array or CSS color string.
	 */
	public static function add_color_gradient_css( &$css, $selector, $text_color ) {
		if ( empty( $text_color ) ) {
			return;
		}
		self::init_css_accumulator( $css );

		if ( is_array( $text_color ) ) {
			$color_type = $text_color['colorType'] ?? 'color';
			if ( 'gradient' === $color_type && ! empty( $text_color['gradient'] ) ) {
				$css['desktop'][ $selector ]['color']                   = 'transparent';
				$css['desktop'][ $selector ]['background-image']         = $text_color['gradient'];
				$css['desktop'][ $selector ]['-webkit-background-clip'] = 'text';
				$css['desktop'][ $selector ]['-webkit-text-fill-color'] = 'transparent';
				$css['desktop'][ $selector ]['background-clip']         = 'text';
			} elseif ( ! empty( $text_color['color'] ) ) {
				$css['desktop'][ $selector ]['color'] = $text_color['color'];
			}
		} elseif ( is_string( $text_color ) && '' !== $text_color ) {
			$css['desktop'][ $selector ]['color'] = $text_color;
		}
	}

	/**
	 * Add text shadow styles to CSS accumulator.
	 *
	 * @param array  $css         CSS accumulator array reference.
	 * @param string $selector    Target CSS selector.
	 * @param array  $text_shadow Text shadow attribute array (color, blur, horizontal, vertical).
	 */
	public static function add_text_shadow_css( &$css, $selector, $text_shadow ) {
		if ( empty( $text_shadow ) || ! is_array( $text_shadow ) ) {
			return;
		}
		self::init_css_accumulator( $css );

		$color = $text_shadow['color'] ?? '';
		$h     = floatval( $text_shadow['horizontal'] ?? 0 );
		$v     = floatval( $text_shadow['vertical'] ?? 0 );
		$b     = floatval( $text_shadow['blur'] ?? 0 );

		if ( empty( $color ) && 0.0 === $h && 0.0 === $v && 0.0 === $b ) {
			return;
		}

		$x_str = self::get_css_value( $text_shadow['horizontal'] ?? 0 );
		$y_str = self::get_css_value( $text_shadow['vertical'] ?? 0 );
		$b_str = self::get_css_value( $text_shadow['blur'] ?? 0 );
		$c_str = ! empty( $color ) ? $color : 'rgb(0 0 0 / 0.2)';

		$css['desktop'][ $selector ]['text-shadow'] = trim( "{$x_str} {$y_str} {$b_str} {$c_str}" );
	}

	/**
	 * Map text alignment ('left', 'center', 'right') to CSS flex alignment ('flex-start', 'center', 'flex-end').
	 *
	 * @param string $align Text alignment string.
	 * @return string Flex alignment string ('flex-start', 'center', or 'flex-end').
	 */
	public static function get_flex_align( $align ) {
		switch ( $align ) {
			case 'center':
				return 'center';
			case 'right':
				return 'flex-end';
			case 'left':
			default:
				return 'flex-start';
		}
	}
}
