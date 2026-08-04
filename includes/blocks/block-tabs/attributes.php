<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Tabs container block.
 * Mirrors the TypeScript defaults from src/block-tabs/attributes.ts
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
	// titles — BlockTabTitleItem[]
	// =================================================================
	'titles' => array(
		'type'    => 'array',
		'default' => array(
		),
	),
	
	// =================================================================
	// tabContents
	// =================================================================
	'tabContents' => array(
		'type'    => 'array',
		'default' => array(
		),
	),
	
	// =================================================================
	// activeTabIndex
	// =================================================================
	'activeTabIndex' => array(
		'type'    => 'number',
		'default' => 0,
	),
	
	// =================================================================
	// general_tabTitle — WCB_TABS_PANEL_TAB_TITLE_DEMO
	// =================================================================
	'general_tabTitle' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_container — WCB_TABS_PANEL_STYLE_CONTAINER_DEMO
	// =================================================================
	'style_container' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_title — WCB_TABS_PANEL_STYLE_TITLE_DEMO
	// =================================================================
	'style_title' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_body — WCB_TABS_PANEL_STYLE_BODY_DEMO
	// =================================================================
	'style_body' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_dimension — WCB_TABS_PANEL_STYLE_DIMENSION_DEMO
	// =================================================================
	'style_dimension' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_preset — WCB_FAQ_PANEL_PRESET_DEMO
	// =================================================================
	'general_preset' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_general — WCB_TAGS_PANEL_GENERAL_DEMO
	// =================================================================
	'general_general' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_icon — WCB_TABS_PANEL_STYLE_ICON_DEMO
	// =================================================================
	'style_icon' => array(
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
