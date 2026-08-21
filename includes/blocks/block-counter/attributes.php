<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Counter / number block.
 * Mirrors the TypeScript defaults from src/block-counter/attributes.ts
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
	// heading
	// =================================================================
	'heading' => array(
		'type'    => 'string',
		'default' => '',
	),
	
	// =================================================================
	// endNumber
	// =================================================================
	'endNumber' => array(
		'type'    => 'string',
		'default' => '80',
	),
	
	// =================================================================
	// designation
	// =================================================================
	'designation' => array(
		'type'    => 'string',
		'default' => 'Write a Prefix',
	),
	
	// =================================================================
	// description
	// =================================================================
	'description' => array(
		'type'    => 'string',
		'default' => 'Add Your Title Here…',
	),
	
	// =================================================================
	// general_layout — WCB_ICON_BOX_PANEL_LAYOUT_DEMO
	// =================================================================
	'general_layout' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_icon — WCB_ICON_BOX_PANEL_ICON_DEMO
	// =================================================================
	'general_icon' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_title — WCB_ICON_BOX_PANEL_STYLE_TITLE_DEMO
	// =================================================================
	'style_title' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_desination — WCB_ICON_BOX_PANEL_STYLE_DESIGNATION_DEMO
	// =================================================================
	'style_desination' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_description — WCB_ICON_BOX_PANEL_STYLE_DESCRIPTION_DEMO
	// =================================================================
	'style_description' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_Icon — WCB_ICON_BOX_PANEL_STYLE_ICON_DEMO
	// =================================================================
	'style_Icon' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_progress — WCB_ICON_BOX_PANEL_STYLE_PROGRESS_DEMO
	// =================================================================
	'style_progress' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_dimension — WCB_ICON_BOX_PANEL_STYLE_DIMENSION_DEMO
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
