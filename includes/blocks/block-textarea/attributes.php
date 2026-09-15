<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Textarea form field block.
 * Mirrors the TypeScript defaults from src/block-textarea/attributes.ts
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
	// general_general — WCB_TEXAREA_PANEL_GENERAL_DEMO
	// =================================================================
	'general_general' => array(
		'type'    => 'object',
		'default' => array(
			'isRequired' => false,
		),
	),
);
