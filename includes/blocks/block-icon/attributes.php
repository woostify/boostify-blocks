<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Icon block.
 * Mirrors the TypeScript defaults from src/block-icon/attributes.ts
 * and all sub-panel *_DEMO constants.
 */

return array(
	// =================================================================
	// cover
	// =================================================================
	'cover' => array(
		'type'    => 'string',
		'default' => '',
	),
	
	// =================================================================
	// uniqueId
	// =================================================================
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),
	
	// =================================================================
	// general_icon — WCB_ICON_PANEL_ICON_DEMO
	// =================================================================
	'general_icon' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_preset — WCB_ICON_PANEL_PRESET_DEMO
	// =================================================================
	'general_preset' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_icon — WCB_ICON_PANEL_STYLE_ICON_DEMO
	// =================================================================
	'style_icon' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_background — WCB_ICON_PANEL_STYLE_BACKGROUND_DEMO
	// =================================================================
	'style_background' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_border — WCB_ICON_PANEL_STYLE_BORDER_DEMO
	// =================================================================
	'style_border' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_boxshadow — WCB_ICON_PANEL_STYLE_BOXSHADOW_DEMO
	// =================================================================
	'style_boxshadow' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_dimension — WCB_ICON_PANEL_STYLE_DIMENSION_DEMO
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
	
	// =================================================================
	// advance_motionEffect — MY_MOTION_EFFECT_DEMO
	// =================================================================
	'advance_motionEffect' => array(
		'type'    => 'object',
		'default' => array(
			'animationDelay'    => 0,
			'animationDuration' => 'fast',
			'entranceAnimation' => '',
			'repeat'            => '1',
		),
	),
);
