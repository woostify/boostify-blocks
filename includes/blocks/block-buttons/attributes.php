<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Buttons container block.
 * Mirrors the TypeScript defaults from src/block-buttons/attributes.ts
 * and all sub-panel *_DEMO constants.
 *
 * @package Boostify_Blocks
 */

return array_merge(
	array(
		// =================================================================
		// uniqueId
		// =================================================================
		'uniqueId' => array(
			'type'    => 'string',
			'default' => '',
		),

		// =================================================================
		// general_general — WCB_BUTTONS_PANEL_GENERAL_DEMO
		// =================================================================
		'general_general' => array(
			'type'    => 'object',
			'default' => array(
				'alignment'        => array( 'Desktop' => 'start' ),
				'stackOrientation' => 'Mobile',
				'gap'              => array( 'Desktop' => '1rem' ),
				'size'             => array(
					'Desktop' => 'default',
					'Tablet'  => 'default',
					'Mobile'  => 'default',
				),
			),
		),

		// =================================================================
		// style_text — WCB_BUTTONS_PANEL_STYLE_TEXT_DEMO (TYPOGRAPHY_CONTROL_DEMO)
		// =================================================================
		'style_text' => array(
			'type'    => 'object',
			'default' => array(
				'typography' => WCB_Block_Helper::get_typography_default(),
			),
		),

		// =================================================================
		// style_dimension — WCB_BUTTONS_PANEL_STYLE_DIMENSION_DEMO
		// =================================================================
		'style_dimension' => array(
			'type'    => 'object',
			'default' => array(
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
			),
		),
	),
	WCB_Block_Helper::get_advance_attributes()
);
