<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the FAQ child item block.
 * Mirrors the TypeScript defaults from src/block-faq-child/attributes.ts
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
	// layout
	// =================================================================
	'layout' => array(
		'type'    => 'string',
		'default' => 'accordion',
	),
	
	// =================================================================
	// headingTag
	// =================================================================
	'headingTag' => array(
		'type'    => 'string',
		'default' => 'div',
	),
	
	// =================================================================
	// general_icon — WCB_FAQ_PANEL_ICON_DEMO
	// =================================================================
	'general_icon' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// defaultExtend
	// =================================================================
	'defaultExtend' => array(
		'type'    => 'boolean',
		'default' => false,
	),
	
	// =================================================================
	// enableSeparator
	// =================================================================
	'enableSeparator' => array(
		'type'    => 'boolean',
		'default' => false,
	),
	
	// =================================================================
	// question
	// =================================================================
	'question' => array(
		'type'    => 'string',
		'default' => 'What is FAQ?',
	),
	
	// =================================================================
	// answer
	// =================================================================
	'answer' => array(
		'type'    => 'string',
		'default' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	),
);
