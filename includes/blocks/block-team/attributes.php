<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Team member block.
 * Mirrors the TypeScript defaults from src/block-team/attributes.ts
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
		'default' => 'John Doe',
	),
	
	// =================================================================
	// designation
	// =================================================================
	'designation' => array(
		'type'    => 'string',
		'default' => 'Designation',
	),
	
	// =================================================================
	// description
	// =================================================================
	'description' => array(
		'type'    => 'string',
		'default' => 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	),
	
	// =================================================================
	// general_layout — WCB_TEAM_PANEL_LAYOUT_DEMO
	// =================================================================
	'general_layout' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_image — WCB_TEAM_PANEL_IMAGES_DEMO
	// =================================================================
	'general_image' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_socials — WCB_TEAM_PANEL_SOCIALS_DEMO
	// =================================================================
	'general_socials' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_title — WCB_TEAM_PANEL_STYLE_TITLE_DEMO
	// =================================================================
	'style_title' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_desination — WCB_TEAM_PANEL_STYLE_DESIGNATION_DEMO
	// =================================================================
	'style_desination' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_description — WCB_TEAM_PANEL_STYLE_DESCRIPTION_DEMO
	// =================================================================
	'style_description' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_socialIcons — WCB_TEAM_PANEL_STYLE_SOCIALICONS_DEMO
	// =================================================================
	'style_socialIcons' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_image — WCB_TEAM_PANEL_STYLE_IMAGE_DEMO
	// =================================================================
	'style_image' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_dimension — WCB_TEAM_PANEL_STYLE_DIMENSION_DEMO
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
