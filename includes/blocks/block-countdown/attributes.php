<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Countdown timer block.
 * Mirrors the TypeScript defaults from src/block-countdown/attributes.ts
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
	// daylabel
	// =================================================================
	'daylabel' => array(
		'type'    => 'string',
		'default' => 'DAYS',
	),
	
	// =================================================================
	// hrslabel
	// =================================================================
	'hrslabel' => array(
		'type'    => 'string',
		'default' => 'HOURS',
	),
	
	// =================================================================
	// minlabel
	// =================================================================
	'minlabel' => array(
		'type'    => 'string',
		'default' => 'MINUTES',
	),
	
	// =================================================================
	// seclabel
	// =================================================================
	'seclabel' => array(
		'type'    => 'string',
		'default' => 'SECONDS',
	),
	
	// =================================================================
	// general_layout — WCB_COUNTDOWN_PANEL_LAYOUT_DEMO
	// =================================================================
	'general_layout' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_preset — WCB_COUNTDOWN_PANEL_PRESET_DEMO
	// =================================================================
	'general_preset' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_date — WCB_COUNTDOWN_PANEL_DATE_DEMO
	// =================================================================
	'general_date' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_label — WCB_COUNTDOWN_PANEL_STYLE_TITLE_DEMO
	// =================================================================
	'style_label' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_number — WCB_COUNTDOWN_PANEL_STYLE_NUMBER_DEMO
	// =================================================================
	'style_number' => array(
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
	// style_dimension — WCB_COUNTDOWN_PANEL_STYLE_DIMENSION_DEMO
	// =================================================================
	'style_dimension' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_dimensions — WCB_COUNTDOWN_PANEL_DIMENSION_DEMO
	// =================================================================
	'style_dimensions' => array(
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
