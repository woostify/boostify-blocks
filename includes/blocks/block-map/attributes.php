<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Google Map block.
 * Mirrors the TypeScript defaults from src/block-map/attributes.ts
 * and all sub-panel *_DEMO constants.
 */

$attributes = array(
	// =================================================================
	// uniqueId
	// =================================================================
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),
	
	// =================================================================
	// general_general — WCB_MAP_PANEL_GENERAL_DEMO
	// =================================================================
	'general_general' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_border — WCB_MAP_PANEL_STYLE_BORDER_DEMO
	// =================================================================
	'style_border' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
);

return array_merge(
	$attributes,
	WCB_Block_Helper::get_advance_attributes()
);

