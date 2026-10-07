<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Tab child panel block.
 * Mirrors the TypeScript defaults from src/block-tab-child/attributes.ts
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
	// defaultExtend
	// =================================================================
	'defaultExtend' => array(
		'type'    => 'boolean',
		'default' => false,
	),
);
