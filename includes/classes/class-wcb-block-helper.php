<?php
/**
 * Class WCB_Block_Helper
 *
 * Block-level orchestration, attribute normalization, reusable block resolution,
 * and CSS file generation delegation for Boostify Blocks.
 *
 * Extends WCB_CSS_Utility for backward compatibility, so all pure CSS utility
 * calls (e.g. WCB_Block_Helper::get_css_value()) continue to work seamlessly.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

// Load pure CSS utility class.
require_once BOOSTIFY_BLOCKS_PATH . "includes/classes/class-wcb-css-utility.php";

class WCB_Block_Helper extends WCB_CSS_Utility {

	/**
	 * Normalize a block name to its canonical directory slug.
	 *
	 * Handles aliases like 'boostify-blocks/boostify-icon' → 'icon'.
	 *
	 * @param string $block_name Full block name (e.g., 'boostify-blocks/boostify-icon').
	 * @return string Normalized slug (e.g., 'icon').
	 */
	public static function normalize_block_slug( $block_name ) {
		$short_name = basename( $block_name );
		if ( 'boostify-icon' === $short_name ) {
			$short_name = 'icon';
		}
		return $short_name;
	}

	/**
	 * Convert clientID to a unique short class (wcb-xxxxxx) matching TypeScript converClientIdToUniqueClass.
	 *
	 * @param string $client_id Block client ID.
	 * @param string $prefix    CSS class prefix.
	 * @return string CSS class.
	 */
	public static function convert_client_id_to_unique_class( $client_id, $prefix = 'wcb-' ) {
		if ( empty( $client_id ) ) {
			return '';
		}

		$hash = 0;
		$len  = strlen( $client_id );
		for ( $i = 0; $i < $len; $i++ ) {
			$char = ord( $client_id[ $i ] );
			// Simulates JS 32-bit int: ((hash << 5) - hash) + char
			$hash = ( ( $hash << 5 ) - $hash ) + $char;
			$hash = $hash & 0xFFFFFFFF;
			if ( $hash > 0x7FFFFFFF ) {
				$hash -= 0x100000000;
			}
		}

		$short_id = base_convert( abs( $hash ), 10, 36 );
		return $prefix . $short_id;
	}

	/**
	 * Get a Block's Default Attributes.
	 *
	 * @param string $block_name Name of the block to retrieve defaults.
	 * @return array             All default attributes for the specified block.
	 */
	public static function get_block_default_attributes( $block_name ) {
		// 'boostify-blocks/products' → 'block-products'
		// 'boostify-blocks/boostify-icon' → 'block-icon'
		$short_name = self::normalize_block_slug( $block_name );
		$dir_name   = 'block-' . $short_name;

		$assets_file = realpath( BOOSTIFY_BLOCKS_PATH . 'includes/blocks/' . $dir_name . '/attributes.php' );
		return ( is_string( $assets_file ) && file_exists( $assets_file ) ) ? require $assets_file : array();
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
	// SHARED DEFAULT ATTRIBUTE SCHEMAS (STANDARDIZATION)
	// =====================================================================

	/**
	 * Get shared default typography attributes schema.
	 * Mirrors TYPOGRAPHY_CONTROL_DEMO in src/components/controls/MyTypographyControl/types.ts
	 *
	 * @param array $overrides Optional custom default overrides.
	 * @return array Gutenberg attribute schema array with 'type' and 'default'.
	 */
	public static function get_typography_schema( $overrides = array() ) {
		return array(
			'type'    => 'object',
			'default' => self::get_typography_default( $overrides ),
		);
	}

	/**
	 * Get shared default typography value array.
	 *
	 * @param array $overrides Optional custom default overrides.
	 * @return array Default typography data array.
	 */
	public static function get_typography_default( $overrides = array() ) {
		$defaults = array(
			'fontSizes'      => array( 'Desktop' => '' ),
			'appearance'     => array(
				'key'   => 'default',
				'name'  => 'Default',
				'style' => array(),
			),
			'textDecoration' => '',
			'textTransform'  => '',
			'lineHeight'     => array(),
			'letterSpacing'  => array(),
			'fontFamily'     => '',
		);

		return ! empty( $overrides ) ? array_replace_recursive( $defaults, $overrides ) : $defaults;
	}

	/**
	 * Get shared default border attributes schema.
	 * Mirrors MY_BORDER_CONTROL_DEMO in src/components/controls/MyBorderControl/types.ts
	 *
	 * @param array $overrides Optional custom default overrides.
	 * @return array Gutenberg attribute schema array.
	 */
	public static function get_border_schema( $overrides = array() ) {
		return array(
			'type'    => 'object',
			'default' => self::get_border_default( $overrides ),
		);
	}

	/**
	 * Get shared default border value array.
	 *
	 * @param array $overrides Optional custom default overrides.
	 * @return array Default border data array.
	 */
	public static function get_border_default( $overrides = array() ) {
		$defaults = array(
			'mainSettings' => null,
			'hoverColor'   => '',
			'radius'       => array(
				'Desktop' => '0',
				'Tablet'  => '0',
				'Mobile'  => '0',
			),
		);

		return ! empty( $overrides ) ? array_replace_recursive( $defaults, $overrides ) : $defaults;
	}

	/**
	 * Get shared default box shadow attributes schema.
	 * Mirrors MY_BOX_SHADOW_CONTROL_DEMO in src/components/controls/MyBoxShadowControl/types.ts
	 *
	 * @param array $overrides Optional custom default overrides.
	 * @return array Gutenberg attribute schema array.
	 */
	public static function get_box_shadow_schema( $overrides = array() ) {
		return array(
			'type'    => 'object',
			'default' => self::get_box_shadow_default( $overrides ),
		);
	}

	/**
	 * Get shared default box shadow value array.
	 *
	 * @param array $overrides Optional custom default overrides.
	 * @return array Default box shadow data array.
	 */
	public static function get_box_shadow_default( $overrides = array() ) {
		$defaults = array(
			'Normal' => array(
				'color'       => '',
				'presetClass' => '',
				'blur'        => 0,
				'horizontal'  => 0,
				'spread'      => 0,
				'vertical'    => 0,
				'position'    => 'outset',
			),
			'Hover'  => array(
				'color'       => '',
				'presetClass' => '',
				'blur'        => 0,
				'horizontal'  => 0,
				'spread'      => 0,
				'vertical'    => 0,
				'position'    => 'outset',
			),
		);

		return ! empty( $overrides ) ? array_replace_recursive( $defaults, $overrides ) : $defaults;
	}

	/**
	 * Get shared default dimension (margin/padding) value array.
	 *
	 * @param array $overrides Optional custom default overrides.
	 * @return array Default dimension data array.
	 */
	public static function get_dimension_default( $overrides = array() ) {
		$defaults = array(
			'margin'  => array(
				'Desktop' => array(
					'top'    => '',
					'left'   => '',
					'right'  => '',
					'bottom' => '',
				),
			),
			'padding' => array(
				'Desktop' => array(
					'top'    => '',
					'left'   => '',
					'right'  => '',
					'bottom' => '',
				),
			),
		);

		return ! empty( $overrides ) ? array_replace_recursive( $defaults, $overrides ) : $defaults;
	}

	/**
	 * Get shared advance attributes schema.
	 * Provides advance_responsiveCondition, advance_zIndex, advance_motionEffect.
	 *
	 * @return array Array of schema definitions for advance attributes.
	 */
	public static function get_advance_attributes() {
		return array(
			'advance_responsiveCondition' => array(
				'type'    => 'object',
				'default' => array(
					'isHiddenOnDesktop' => false,
					'isHiddenOnTablet'  => false,
					'isHiddenOnMobile'  => false,
				),
			),
			'advance_zIndex'              => array(
				'type'    => 'object',
				'default' => array(
					'Desktop' => '',
				),
			),
			'advance_motionEffect'        => array(
				'type'    => 'object',
				'default' => array(
					'animationDelay'    => 0,
					'animationDuration' => 'fast',
					'entranceAnimation' => '',
					'repeat'            => '1',
				),
			),
		);
	}

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
	public static function add_border_css( &$css, $selector, $border, $is_with_radius = true, $use_individual_corners = true, $skip_zero = false ) {
		if ( empty( $border ) || ! is_array( $border ) ) {
			return;
		}
		self::init_css_accumulator( $css );

		// Border styles (mirrors src/utils/getBorderStyles.ts & getBorderRadiusStyles.ts).
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
				if ( '' !== $t_v && null !== $t_v && $t_v !== $d_v ) {
					$css['tablet'][ $selector ][ $css_prop ] = self::get_css_value( $t_v );
				}
				if ( '' !== $m_v && null !== $m_v && $m_v !== $t_v ) {
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

	/**
	 * Processed reusable block and template part IDs to prevent infinite recursion.
	 *
	 * @var array<int>
	 */
	private static $seen_refs = array();

	/**
	 * Reset tracked reusable block IDs before processing a post.
	 */
	public static function reset_seen_refs() {
		self::$seen_refs = array();
	}

	/**
	 * Extract block attributes from <pre data-wcb-block-attrs> in innerHTML if available.
	 *
	 * When blocks are saved in Gutenberg, all current React attributes are serialized
	 * into <pre data-wcb-block-attrs="...">...</pre>. Many attributes (especially for child
	 * blocks like slider-child, slider-swiper-child, icon-child, etc.) are omitted from
	 * Gutenberg's block comment delimiters. Extracting from <pre> ensures the full,
	 * up-to-date attributes are used for server-side CSS generation.
	 *
	 * @param string $inner_html       Block innerHTML.
	 * @param string $target_unique_id Optional uniqueId to match specific pre tag.
	 * @return array Decoded attributes or empty array.
	 */
	public static function extract_attrs_from_inner_html( $inner_html, $target_unique_id = '' ) {
		if ( empty( $inner_html ) ) {
			return array();
		}

		if ( ! empty( $target_unique_id ) ) {
			$pattern = '/<pre[^>]*data-wcb-block-attrs=[\x27\x22]?' . preg_quote( $target_unique_id, '/' ) . '[\x27\x22]?[^>]*>(.*?)<\/pre>/s';
			if ( preg_match( $pattern, $inner_html, $matches ) ) {
				$decoded = json_decode( html_entity_decode( $matches[1], ENT_QUOTES, 'UTF-8' ), true );
				if ( is_array( $decoded ) ) {
					return $decoded;
				}
			}
		}

		// Fallback: match any <pre data-wcb-block-attrs> tag.
		if ( preg_match( '/<pre[^>]*data-wcb-block-attrs[^>]*>(.*?)<\/pre>/s', $inner_html, $matches ) ) {
			$decoded = json_decode( html_entity_decode( $matches[1], ENT_QUOTES, 'UTF-8' ), true );
			if ( is_array( $decoded ) ) {
				return $decoded;
			}
		}

		return array();
	}

	/**
	 * Generate CSS for a single Boostify block from its attributes.
	 *
	 * @param array      $block        Parsed block with attrs.
	 * @param array|null $parent_block Optional parent block.
	 * @return string CSS rules.
	 */
	public static function generate_block_css( $block, $parent_block = null ) {
		$attrs      = $block['attrs'] ?? array();
		$inner_html = $block['innerHTML'] ?? '';

		// Extract attributes serialized in <pre data-wcb-block-attrs> inside innerHTML.
		$pre_attrs = self::extract_attrs_from_inner_html( $inner_html, $attrs['uniqueId'] ?? '' );
		if ( ! empty( $pre_attrs ) ) {
			$attrs = array_replace_recursive( $pre_attrs, $attrs );
		}

		$unique_id  = $attrs['uniqueId'] ?? '';
		$block_name = $block['blockName'] ?? '';

		if ( empty( $unique_id ) ) {
			return '';
		}

		if ( strpos( $block_name, 'boostify-blocks/' ) !== 0 ) {
			return '';
		}

		// Extract parent attributes if parent_block is provided.
		$parent_attrs = null;
		if ( ! empty( $parent_block ) && is_array( $parent_block ) ) {
			$p_attrs = $parent_block['attrs'] ?? array();
			$p_inner = $parent_block['innerHTML'] ?? '';
			$p_pre   = self::extract_attrs_from_inner_html( $p_inner, $p_attrs['uniqueId'] ?? '' );
			if ( ! empty( $p_pre ) ) {
				$p_attrs = array_replace_recursive( $p_pre, $p_attrs );
			}
			$parent_attrs = self::merge_with_defaults( $parent_block['blockName'] ?? '', $p_attrs );
		}

		// Try to use frontend.css.php file if available.
		// Merge with PHP attribute defaults first: Gutenberg omits attributes
		// equal to their JS defaults when saving markup, so freshly inserted
		// blocks arrive here with EMPTY style panels. Without the merge the
		// generated CSS would miss all base styles for those blocks.
		// Raw $attrs are passed as the 4th argument so child blocks can selectively
		// output only customized attributes without repeating parent defaults.
		$frontend_css = self::get_frontend_css_from_file(
			$block_name,
			self::merge_with_defaults( $block_name, $attrs ),
			$unique_id,
			$attrs,
			$parent_attrs
		);

		if ( null !== $frontend_css ) {
			return $frontend_css;
		}

		return '';
	}

	/**
	 * Get frontend CSS from file if available.
	 *
	 * @param string     $block_name   Block name (e.g., 'boostify-blocks/heading').
	 * @param array      $attr         Merged block attributes with defaults.
	 * @param string     $unique_id    Block unique ID.
	 * @param array|null $raw_attrs    Raw block attributes before merging with defaults.
	 * @param array|null $parent_attrs Optional parent block merged attributes.
	 * @return string|null CSS string or null if file not found.
	 */
	public static function get_frontend_css_from_file( $block_name, $attr, $unique_id, $raw_attrs = null, $parent_attrs = null ) {
		$short_name = self::normalize_block_slug( $block_name );
		$file_path  = BOOSTIFY_BLOCKS_PATH . 'includes/blocks/block-' . $short_name . '/frontend.css.php';

		if ( ! file_exists( $file_path ) ) {
			return null;
		}

		// Make variables available to the included file.
		$attr         = $attr;
		$unique_id    = $unique_id;
		$raw_attrs    = ( null !== $raw_attrs ) ? $raw_attrs : $attr;
		$parent_attrs = ( null !== $parent_attrs ) ? $parent_attrs : array();

		// Start output buffering.
		ob_start();

		// Include the file - it should return an array with desktop, tablet, mobile.
		$result = include $file_path;

		// Get the output buffer content.
		$buffered = ob_get_clean();

		// If the file returned an array, generate CSS from it.
		if ( is_array( $result ) && isset( $result['desktop'] ) ) {
			$css = '';

			// Global responsive breakpoints (fall back to 768px / 1024px).
			$settings_opts = get_option( 'boostify_blocks_settings_options', array() );
			$media_tablet  = isset( $settings_opts['media_tablet'] ) ? (int) floatval( $settings_opts['media_tablet'] ) : 768;
			$media_desktop = isset( $settings_opts['media_desktop'] ) ? (int) floatval( $settings_opts['media_desktop'] ) : 1024;
			if ( $media_tablet <= 0 ) {
				$media_tablet = 768;
			}
			if ( $media_desktop <= $media_tablet ) {
				$media_desktop = $media_tablet + 1;
			}

			// Desktop CSS.
			if ( ! empty( $result['desktop'] ) ) {
				$css .= $result['desktop'];
			}

			// Tablet CSS (range: tablet breakpoint → desktop breakpoint - 1,
			// matching the editor's mobile-first min-width queries).
			if ( ! empty( $result['tablet'] ) ) {
				$css .= '@media (max-width: ' . ( $media_desktop - 1 ) . 'px) {' . $result['tablet'] . '}';
			}

			// Mobile CSS.
			if ( ! empty( $result['mobile'] ) ) {
				$css .= '@media (max-width: ' . ( $media_tablet - 1 ) . 'px) {' . $result['mobile'] . '}';
			}

			return apply_filters( 'boostify_blocks_block_frontend_css', $css, $block_name, $unique_id, $attr );
		}

		// If the file generated output directly.
		if ( ! empty( $buffered ) ) {
			return apply_filters( 'boostify_blocks_block_frontend_css', $buffered, $block_name, $unique_id, $attr );
		}

		return null;
	}

	/**
	 * Recursively extract CSS from an array of parsed blocks.
	 *
	 * Supports:
	 * - Standard Boostify blocks (boostify-blocks/*)
	 * - Gutenberg Synced Patterns / Reusable Blocks (core/block) with infinite recursion guard
	 * - Full Site Editing Template Parts (core/template-part)
	 * - Nested innerBlocks
	 *
	 * @param array      $blocks       Parsed blocks.
	 * @param array|null $parent_block Optional parent block.
	 * @return string Combined CSS.
	 */
	public static function extract_css_from_blocks( $blocks, $parent_block = null ) {
		$css = '';

		foreach ( $blocks as $block ) {
			if ( empty( $block['blockName'] ) ) {
				if ( ! empty( $block['innerBlocks'] ) ) {
					$css .= self::extract_css_from_blocks( $block['innerBlocks'], $parent_block );
				}
				continue;
			}

			// 1. Process Boostify blocks.
			if ( 0 === strpos( $block['blockName'], 'boostify-blocks/' ) ) {
				$css .= self::generate_block_css( $block, $parent_block );
			}

			// 2. Process Reusable Blocks (Synced Patterns: core/block).
			if ( 'core/block' === $block['blockName'] ) {
				$ref_id = isset( $block['attrs']['ref'] ) ? absint( $block['attrs']['ref'] ) : 0;
				if ( $ref_id && ! in_array( $ref_id, self::$seen_refs, true ) ) {
					self::$seen_refs[] = $ref_id;
					$ref_post          = get_post( $ref_id );
					if ( $ref_post && ! empty( $ref_post->post_content ) ) {
						$reusable_blocks = parse_blocks( $ref_post->post_content );
						$css            .= self::extract_css_from_blocks( $reusable_blocks );
					}
				}
			}

			// 3. Process FSE Template Parts (core/template-part).
			if ( 'core/template-part' === $block['blockName'] ) {
				$tp_id = 0;
				if ( ! empty( $block['attrs']['postId'] ) ) {
					$tp_id = absint( $block['attrs']['postId'] );
				} elseif ( ! empty( $block['attrs']['slug'] ) ) {
					$theme = $block['attrs']['theme'] ?? ( function_exists( 'wp_get_theme' ) ? wp_get_theme()->get_stylesheet() : '' );
					$parts = get_posts( array(
						'name'           => $block['attrs']['slug'],
						'post_type'      => 'wp_template_part',
						'post_status'    => 'publish',
						'posts_per_page' => 1,
						'tax_query'      => ! empty( $theme ) ? array(
							array(
								'taxonomy' => 'wp_theme',
								'field'    => 'name',
								'terms'    => $theme,
							),
						) : array(),
					) );
					if ( ! empty( $parts ) ) {
						$tp_id = $parts[0]->ID;
					}
				}

				if ( $tp_id && ! in_array( $tp_id, self::$seen_refs, true ) ) {
					self::$seen_refs[] = $tp_id;
					$tp_post           = get_post( $tp_id );
					if ( $tp_post && ! empty( $tp_post->post_content ) ) {
						$tp_blocks = parse_blocks( $tp_post->post_content );
						$css      .= self::extract_css_from_blocks( $tp_blocks );
					}
				}
			}

			// Recurse into inner blocks, passing current block as parent.
			if ( ! empty( $block['innerBlocks'] ) ) {
				$css .= self::extract_css_from_blocks( $block['innerBlocks'], $block );
			}
		}

		return $css;
	}

	/**
	 * Recursively collect all unique Boostify block names used in the given blocks tree.
	 *
	 * Supports:
	 * - boostify-blocks/*
	 * - Known parent-child relationships (slider -> slider-child, tabs -> tab-child, etc.)
	 * - Gutenberg Synced Patterns / Reusable Blocks (core/block) with circular ref protection
	 * - Full Site Editing Template Parts (core/template-part)
	 * - Nested innerBlocks
	 *
	 * @param array $blocks          Array of parsed blocks.
	 * @param array $seen_block_refs Guard against circular refs in synced patterns.
	 * @return array List of unique Boostify block names (e.g. ['boostify-blocks/products']).
	 */
	public static function get_used_boostify_block_names( $blocks, &$seen_block_refs = array() ) {
		$used = array();

		foreach ( $blocks as $block ) {
			if ( empty( $block['blockName'] ) ) {
				if ( ! empty( $block['innerBlocks'] ) ) {
					$inner_used = self::get_used_boostify_block_names( $block['innerBlocks'], $seen_block_refs );
					foreach ( $inner_used as $b_name ) {
						$used[ $b_name ] = true;
					}
				}
				continue;
			}

			// 1. Boostify block.
			if ( 0 === strpos( $block['blockName'], 'boostify-blocks/' ) ) {
				$used[ $block['blockName'] ] = true;

				// Known parent-child relationships where child styles should always accompany parent.
				$parent_child_map = array(
					'boostify-blocks/slider'        => 'boostify-blocks/slider-child',
					'boostify-blocks/slider-swiper' => 'boostify-blocks/slider-swiper-child',
					'boostify-blocks/tabs'          => 'boostify-blocks/tab-child',
					'boostify-blocks/faq'           => 'boostify-blocks/faq-child',
					'boostify-blocks/icon-list'     => 'boostify-blocks/icon-child',
					'boostify-blocks/buttons'       => 'boostify-blocks/button',
				);

				if ( isset( $parent_child_map[ $block['blockName'] ] ) ) {
					$used[ $parent_child_map[ $block['blockName'] ] ] = true;
				}
			}

			// 2. Synced Patterns / Reusable Blocks (core/block).
			if ( 'core/block' === $block['blockName'] ) {
				$ref_id = isset( $block['attrs']['ref'] ) ? absint( $block['attrs']['ref'] ) : 0;
				if ( $ref_id && ! in_array( $ref_id, $seen_block_refs, true ) ) {
					$seen_block_refs[] = $ref_id;
					$ref_post          = get_post( $ref_id );
					if ( $ref_post && ! empty( $ref_post->post_content ) ) {
						$sub_blocks = parse_blocks( $ref_post->post_content );
						$sub_used   = self::get_used_boostify_block_names( $sub_blocks, $seen_block_refs );
						foreach ( $sub_used as $b_name ) {
							$used[ $b_name ] = true;
						}
					}
				}
			}

			// 3. Template Part (core/template-part).
			if ( 'core/template-part' === $block['blockName'] ) {
				$tp_id = 0;
				if ( ! empty( $block['attrs']['postId'] ) ) {
					$tp_id = absint( $block['attrs']['postId'] );
				} elseif ( ! empty( $block['attrs']['slug'] ) ) {
					$theme = $block['attrs']['theme'] ?? ( function_exists( 'wp_get_theme' ) ? wp_get_theme()->get_stylesheet() : '' );
					$parts = get_posts( array(
						'name'           => $block['attrs']['slug'],
						'post_type'      => 'wp_template_part',
						'post_status'    => 'publish',
						'posts_per_page' => 1,
						'tax_query'      => ! empty( $theme ) ? array(
							array(
								'taxonomy' => 'wp_theme',
								'field'    => 'name',
								'terms'    => $theme,
							),
						) : array(),
					) );
					if ( ! empty( $parts ) ) {
						$tp_id = $parts[0]->ID;
					}
				}

				if ( $tp_id && ! in_array( $tp_id, $seen_block_refs, true ) ) {
					$seen_block_refs[] = $tp_id;
					$tp_post           = get_post( $tp_id );
					if ( $tp_post && ! empty( $tp_post->post_content ) ) {
						$tp_blocks = parse_blocks( $tp_post->post_content );
						$tp_used   = self::get_used_boostify_block_names( $tp_blocks, $seen_block_refs );
						foreach ( $tp_used as $b_name ) {
							$used[ $b_name ] = true;
						}
					}
				}
			}

			// Inner blocks.
			if ( ! empty( $block['innerBlocks'] ) ) {
				$inner_used = self::get_used_boostify_block_names( $block['innerBlocks'], $seen_block_refs );
				foreach ( $inner_used as $b_name ) {
					$used[ $b_name ] = true;
				}
			}
		}

		return array_keys( $used );
	}

	/**
	 * Get concatenated static CSS (style-index.css) for the specified Boostify blocks.
	 *
	 * Automatically includes the shared base/reset stylesheet (block-common-css)
	 * whenever at least one Boostify block is present.
	 *
	 * @param array $block_names List of Boostify block names.
	 * @return string Combined static CSS.
	 */
	public static function get_static_css_for_blocks( $block_names ) {
		if ( empty( $block_names ) || ! is_array( $block_names ) ) {
			return '';
		}

		$css        = '';
		$dir        = BOOSTIFY_BLOCKS_PATH . 'build/';
		$loaded_css = array();

		// 1. Always load common base reset / CSS variables if any Boostify block is present.
		$common_file = $dir . 'block-common-css/style-index.css';
		if ( file_exists( $common_file ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
			$content = file_get_contents( $common_file );
			if ( ! empty( $content ) ) {
				$content = preg_replace( '/\/\*![\s\S]*?\*\/\s*/', '', $content );
				$content = preg_replace( '/\/\*# sourceMappingURL=.*?\*\/\s*/', '', $content );
				$content = preg_replace( '/@charset\s+"[^"]*";\s*/', '', $content );
				$css    .= trim( $content ) . "\n";
			}
			$loaded_css['block-common-css'] = true;
		}

		// 2. Load static style-index.css for each used block.
		foreach ( $block_names as $block_name ) {
			$slug = str_replace( 'boostify-blocks/', '', $block_name );
			if ( isset( $loaded_css[ $slug ] ) ) {
				continue;
			}

			$file = $dir . 'block-' . $slug . '/style-index.css';
			if ( file_exists( $file ) ) {
				// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
				$content = file_get_contents( $file );
				if ( ! empty( $content ) ) {
					$content = preg_replace( '/\/\*![\s\S]*?\*\/\s*/', '', $content );
					$content = preg_replace( '/\/\*# sourceMappingURL=.*?\*\/\s*/', '', $content );
					$content = preg_replace( '/@charset\s+"[^"]*";\s*/', '', $content );
					$css    .= trim( $content ) . "\n";
				}
				$loaded_css[ $slug ] = true;
			}
		}

		if ( ! empty( trim( $css ) ) ) {
			$css = preg_replace( '/\/\*[\s\S]*?\*\//', '', $css );
			$css = preg_replace( "/\n{3,}/", "\n\n", $css );
		}

		return $css;
	}

	/**
	 * Extract CSS from a post by combining on-demand static block CSS and dynamic attribute styles.
	 *
	 * Resets the seen_refs guard for reusable blocks on every entry.
	 *
	 * @param int  $post_id        Post ID.
	 * @param bool $include_static Whether to include static block styles (style-index.css). Default true.
	 * @return string Combined CSS for all Boostify blocks in the post.
	 */
	public static function extract_css_from_post( $post_id, $include_static = true ) {
		self::reset_seen_refs();

		$post = get_post( $post_id );
		if ( ! $post ) {
			return '';
		}

		$blocks      = parse_blocks( $post->post_content );
		$seen_refs   = array();
		$used_blocks = self::get_used_boostify_block_names( $blocks, $seen_refs );

		// 1. Static CSS for blocks used in this post (only when generating static CSS file to avoid duplicating stylesheets).
		$static_css = '';
		if ( $include_static && ! empty( $used_blocks ) ) {
			$static_css = self::get_static_css_for_blocks( $used_blocks );
		}

		// 2. Dynamic CSS generated from block attributes.
		$dynamic_css = self::extract_css_from_blocks( $blocks );
		if ( ! empty( $dynamic_css ) ) {
			$dynamic_css = self::merge_css_rules( $dynamic_css );
		}

		$css = '';
		if ( ! empty( trim( $static_css ) ) ) {
			$css .= "/* Boostify Static Block CSS */\n" . trim( $static_css ) . "\n\n";
		}
		if ( ! empty( trim( $dynamic_css ) ) ) {
			$css .= "/* Boostify Dynamic Block CSS */\n" . trim( $dynamic_css ) . "\n";
		}

		// 3. Append Custom Page CSS if feature is enabled.
		$settings = get_option( 'boostify_blocks_settings_options', array() );
		if ( ! isset( $settings['enableCustomCss'] ) || 'false' !== $settings['enableCustomCss'] ) {
			$custom_css = get_post_meta( $post_id, '_boostify_blocks_custom_css', true );
			if ( ! empty( $custom_css ) && is_string( $custom_css ) ) {
				$css .= "\n/* Boostify Page Custom CSS */\n" . wp_strip_all_tags( $custom_css );
			}
		}

		return $css;
	}

	/**
	 * Merge CSS rules that share the same selector.
	 *
	 * Groups properties from rules with identical (media_query, selector)
	 * into a single declaration block, reducing output size and improving
	 * readability.
	 *
	 * @param string $css Raw CSS with potentially duplicate selectors.
	 * @return string Merged CSS.
	 */
	public static function merge_css_rules( $css ) {
		if ( empty( trim( $css ) ) ) {
			return $css;
		}

		// Collect rules grouped by (media, selector).
		$groups = array();

		// Step 1: extract @media blocks first, replace them with placeholders.
		$media_blocks = array();
		$css_without_media = preg_replace_callback(
			'/@media\s*((?:\([^)]+\)(?:\s*and\s*\([^)]+\))*))\s*\{((?:[^{}]|\{[^{}]*\})*)\}/s',
			function ( $matches ) use ( &$media_blocks ) {
				$placeholder = '___MEDIA_BLOCK_' . count( $media_blocks ) . '___';
				$media_blocks[ $placeholder ] = array(
					'query' => '@media ' . $matches[1],
					'inner' => $matches[2],
				);
				return $placeholder;
			},
			$css
		);

		// Step 2: parse base-level rules (no @media).
		$css_without_media_clean = preg_replace( '/___MEDIA_BLOCK_\d+___/', '', $css_without_media );
		$base_rules              = self::parse_css_rules( $css_without_media_clean );
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
	 * Parse a property string into an associative array.
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
			$prop            = trim( $match[1] );
			$val             = trim( $match[2] );
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
	 * Debug: build a per-block CSS report for a post.
	 *
	 * @param int    $post_id      Post ID.
	 * @param string $block_filter Optional block name filter.
	 * @param bool   $log          Optional write to error_log.
	 * @return string Human-readable report.
	 */
	public static function debug_post_block_css( $post_id, $block_filter = '', $log = false ) {
		$post = get_post( $post_id );
		if ( ! $post ) {
			return sprintf( "Boostify Debug: post %d not found.\n", $post_id );
		}

		$settings_opts = get_option( 'boostify_blocks_settings_options', array() );
		$media_tablet  = isset( $settings_opts['media_tablet'] ) ? (int) floatval( $settings_opts['media_tablet'] ) : 768;
		$media_desktop = isset( $settings_opts['media_desktop'] ) ? (int) floatval( $settings_opts['media_desktop'] ) : 1024;

		// Global settings relevant to button styling.
		$global_lines = array();
		foreach ( array( 'buttonInheritFromTheme' ) as $opt_key ) {
			$global_lines[] = sprintf(
				'  %-24s = %s',
				$opt_key,
				var_export( $settings_opts[ $opt_key ] ?? null, true ) // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_var_export
			);
		}
		$button_theme = $settings_opts['buttonTheme'] ?? array();
		if ( is_array( $button_theme ) && $button_theme ) {
			foreach ( $button_theme as $tk => $tv ) {
				if ( is_scalar( $tv ) || null === $tv ) {
					$global_lines[] = sprintf( '  buttonTheme.%-17s = %s', $tk, var_export( $tv, true ) ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_var_export
				}
			}
		}

		$lines   = array();
		$lines[] = '===== Boostify Blocks CSS Debug =====';
		$lines[] = sprintf(
			'Post #%d "%s" | media_tablet=%dpx media_desktop=%dpx',
			$post_id,
			get_the_title( $post ),
			$media_tablet,
			$media_desktop
		);
		$lines[] = 'Globals:';
		$lines   = array_merge( $lines, $global_lines );

		$total_blocks = 0;
		$total_css    = 0;
		self::debug_walk_blocks( parse_blocks( $post->post_content ), $block_filter, $lines, 0, $total_blocks, $total_css );

		$lines[] = sprintf( '===== End: %d block(s), %d chars CSS =====', $total_blocks, $total_css );

		return implode( "\n", $lines ) . "\n";
	}

	/**
	 * Recursively walk parsed blocks appending debug info to $lines.
	 *
	 * @param array  $blocks       Parsed blocks.
	 * @param string $block_filter Name substring filter ('' = all).
	 * @param array  $lines        Report lines (by reference).
	 * @param int    $depth        Nesting depth.
	 * @param int    $total_blocks Matched block counter (by reference).
	 * @param int    $total_css    Total CSS length counter (by reference).
	 * @return void
	 */
	private static function debug_walk_blocks( $blocks, $block_filter, &$lines, $depth, &$total_blocks, &$total_css ) {
		foreach ( $blocks as $block ) {
			$name = $block['blockName'] ?? '';

			if ( empty( $name ) ) {
				if ( ! empty( $block['innerBlocks'] ) ) {
					self::debug_walk_blocks( $block['innerBlocks'], $block_filter, $lines, $depth, $total_blocks, $total_css );
				}
				continue;
			}

			if ( 0 !== strpos( $name, 'boostify-blocks/' ) ) {
				continue;
			}

			$is_match = '' === $block_filter || false !== strpos( $name, $block_filter );

			// Always recurse into inner blocks.
			if ( ! empty( $block['innerBlocks'] ) ) {
				self::debug_walk_blocks( $block['innerBlocks'], $block_filter, $lines, $depth + 1, $total_blocks, $total_css );
			}

			if ( ! $is_match ) {
				continue;
			}

			$attrs     = $block['attrs'] ?? array();
			$unique_id = $attrs['uniqueId'] ?? '';
			if ( empty( $unique_id ) ) {
				$lines[] = sprintf( '%s[%s] skipped (no uniqueId)', str_repeat( '  ', $depth ), $name );
				continue;
			}

			$short_name = self::normalize_block_slug( $name );
			$file_path  = BOOSTIFY_BLOCKS_PATH . 'includes/blocks/block-' . $short_name . '/frontend.css.php';
			$source     = file_exists( $file_path ) ? 'frontend.css.php' : 'legacy';

			$css = self::generate_block_css( $block );

			$indent  = str_repeat( '  ', $depth + 1 );
			$lines[] = sprintf(
				'%s[%s] uniqueId=%s | source=%s | length=%d%s',
				$indent,
				$name,
				$unique_id,
				$source,
				strlen( $css ),
				empty( trim( $css ) ) ? ' | !! EMPTY CSS !!' : ''
			);

			// Split CSS into breakpoint segments for readability.
			if ( '' !== trim( $css ) ) {
				$total_blocks++;
				$total_css += strlen( $css );

				$segments = preg_split( '/(?=@media)/', $css );
				foreach ( $segments as $segment ) {
					$segment = trim( $segment );
					if ( '' === $segment ) {
						continue;
					}
					if ( 0 === strpos( $segment, '@media' ) ) {
						$query   = strstr( $segment, '{', true );
						$body    = substr( $segment, strlen( $query ) + 1, -1 );
						$lines[] = $indent . '[' . $query . ']';
						$lines[] = $indent . '  ' . str_replace( "\n", ' ', $body );
					} else {
						$lines[] = $indent . '[desktop]';
						$lines[] = $indent . '  ' . str_replace( "\n", ' ', $segment );
					}
				}
			}
		}
	}

}
