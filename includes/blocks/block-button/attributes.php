<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Button child block.
 * Mirrors the TypeScript defaults from src/block-button/attributes.ts
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
	// content
	// =================================================================
	'content' => array(
		'type'    => 'string',
		'default' => 'Button',
	),
	
	// =================================================================
	// general_preset — WCB_BUTTON_PANEL_PRESET_DEMO
	// =================================================================
	'general_preset' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_content — WCB_BUTTON_PANEL_CONTENT_DEMO
	// =================================================================
	'general_content' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_text — WCB_BUTTON_PANEL_STYLE_TEXT_DEMO
	// =================================================================
	'style_text' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_icon — WCB_BUTTON_PANEL_STYLE_ICON_DEMO
	// =================================================================
	'style_icon' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_background — WCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO
	// =================================================================
	'style_background' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_border — WCB_BUTTON_PANEL_STYLE_BORDER_DEMO
	// =================================================================
	'style_border' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_boxshadow — WCB_BUTTON_PANEL_STYLE_BOXSHADOW_DEMO
	// =================================================================
	'style_boxshadow' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_dimension — WCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO
	// =================================================================
	'style_dimension' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// advance_responsiveCondition — RESPONSIVE_CONDITON_DEMO
	// =================================================================
	'advance_responsiveCondition' => array(
		'type'    => 'object',
		'default' => array(
			'isHiddenOnDesktop' => false,
			'isHiddenOnTablet'  => false,
			'isHiddenOnMobile'  => false,
		),
	),
	
	// =================================================================
	// advance_zIndex — Z_INDEX_DEMO
	// =================================================================
	'advance_zIndex' => array(
		'type'    => 'object',
		'default' => array(
			'Desktop' => '',
		),
	),
);
