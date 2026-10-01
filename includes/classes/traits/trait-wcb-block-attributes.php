<?php
/**
 * Trait WCB_Block_Attributes_Trait
 *
 * Block attribute normalization, default attributes retrieval, and shared
 * Gutenberg attribute schemas (typography, border, box-shadow, dimension, advance).
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

trait WCB_Block_Attributes_Trait {

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
}
