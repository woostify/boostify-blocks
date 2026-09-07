<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Select dropdown form field block.
 * Mirrors the TypeScript defaults from src/block-select/attributes.ts
 * and all sub-panel *_DEMO constants.
 */

return array(
	// =================================================================
	// uniqueId
	// =================================================================
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),
	
	// =================================================================
	// label
	// =================================================================
	'label' => array(
		'type'    => 'string',
		'default' => 'Label',
	),
	
	// =================================================================
	// options — MY_RADIO_OPTIONS_DEMO
	// =================================================================
	'options' => array(
		'type'    => 'array',
		'default' => array(
			array( 'label' => 'Option 1', 'value' => 'option-1' ),
			array( 'label' => 'Option 2', 'value' => 'option-2' ),
		),
	),
	
	// =================================================================
	// general_general — WCB_SELECT_PANEL_GENERAL_DEMO
	// =================================================================
	'general_general' => array(
		'type'    => 'object',
		'default' => array(
			'isRequired' => false,
		),
	),
);
