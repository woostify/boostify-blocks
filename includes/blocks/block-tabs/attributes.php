<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Tabs container block.
 * Mirrors the TypeScript defaults from src/block-tabs/attributes.ts
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
	// titles — BlockTabTitleItem[]
	// =================================================================
	'titles' => array(
		'type'    => 'array',
		'default' => array(
			array(
				'id'            => '1',
				'title'         => 'Tab 1',
				'dataTabIndex'  => 0,
			),
			array(
				'id'            => '2',
				'title'         => 'Tab 2',
				'dataTabIndex'  => 1,
			),
			array(
				'id'            => '3',
				'title'         => 'Tab 3',
				'dataTabIndex'  => 2,
			),
		),
	),
	
	// =================================================================
	// tabContents
	// =================================================================
	'tabContents' => array(
		'type'    => 'array',
		'default' => array( '', '', '' ),
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
);

return array_merge( $attributes, WCB_Block_Helper::get_advance_attributes() );
