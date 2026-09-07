<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Radio button form field block.
 * Mirrors the TypeScript defaults from src/block-radio/attributes.ts
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
			array( 'label' => 'Radio label', 'value' => 'radio-value' ),
			array( 'label' => 'Radio label 2', 'value' => 'radio-value-2' ),
		),
	),
	
	// =================================================================
	// general_general — WCB_RADIO_PANEL_GENERAL_DEMO
	// =================================================================
	'general_general' => array(
		'type'    => 'object',
		'default' => array(
			'isRequired' => false,
		),
	),
);
