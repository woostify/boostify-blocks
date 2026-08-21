<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Icon list child item block.
 * Mirrors the TypeScript defaults from src/block-icon-child/attributes.ts
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
		'default' => 'List item',
	),
	
	// =================================================================
	// general_layout — WCB_ICON_LIST_PANEL_LAYOUT_DEMO
	// =================================================================
	'general_layout' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_icon — WCB_ICON_LIST_PANEL_ICON_DEMO
	// =================================================================
	'general_icon' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_separator — WCB_ICON_LIST_PANEL_SEPARATOR_DEMO
	// =================================================================
	'general_separator' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_title — WCB_ICON_LIST_PANEL_STYLE_TITLE_DEMO
	// =================================================================
	'style_title' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_desination — WCB_ICON_LIST_PANEL_STYLE_DESIGNATION_DEMO
	// =================================================================
	'style_desination' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_separator — WCB_ICON_LIST_PANEL_STYLE_SEPARATOR_DEMO
	// =================================================================
	'style_separator' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_description — WCB_ICON_LIST_PANEL_STYLE_DESCRIPTION_DEMO
	// =================================================================
	'style_description' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_Icon — WCB_ICON_LIST_PANEL_STYLE_ICON_DEMO
	// =================================================================
	'style_Icon' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_dimension — WCB_ICON_LIST_PANEL_STYLE_DIMENSION_DEMO
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
	
	// =================================================================
	// link
	// =================================================================
	'link' => array(
		'type'    => 'string',
		'default' => '',
	),
	
	// =================================================================
	// openInNewWindow
	// =================================================================
	'openInNewWindow' => array(
		'type'    => 'boolean',
		'default' => false,
	),
	
	// =================================================================
	// addNofollowToLink
	// =================================================================
	'addNofollowToLink' => array(
		'type'    => 'boolean',
		'default' => false,
	),
);
