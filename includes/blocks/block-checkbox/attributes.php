<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Checkbox form field block.
 * Mirrors the TypeScript defaults from src/block-checkbox/attributes.ts
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
	// options — MY_CHECK_BOX_OPTIONS_DEMO
	// =================================================================
	'options' => array(
		'type'    => 'array',
		'default' => array(
			array( 'label' => 'Checkbox label', 'value' => 'checkbox-value' ),
			array( 'label' => 'Checkbox label 2', 'value' => 'checkbox-value-2' ),
			array( 'label' => 'Checkbox label 3', 'value' => 'checkbox-value-3' ),
		),
	),
	
	// =================================================================
	// general_general — WCB_CHECKBOX_PANEL_GENERAL_DEMO
	// =================================================================
	'general_general' => array(
		'type'    => 'object',
		'default' => array(
			'isRequired' => false,
		),
	),
);
