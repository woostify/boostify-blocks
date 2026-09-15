<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the FAQ accordion block.
 * Mirrors the TypeScript defaults from src/block-faq/attributes.ts
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
	// general_preset — WCB_FAQ_PANEL_PRESET_DEMO
	// =================================================================
	'general_preset' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_general — WCB_FAQ_PANEL_GENERAL_DEMO
	// =================================================================
	'general_general' => array(
		'type'    => 'object',
		'default' => array(
		),
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
	// style_container — WCB_FAQ_PANEL_STYLE_CONTAINER_DEMO
	// =================================================================
	'style_container' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_question — WCB_FAQ_PANEL_STYLE_QUESTION_DEMO
	// =================================================================
	'style_question' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_icon — WCB_FAQ_PANEL_STYLE_ICON_DEMO
	// =================================================================
	'style_icon' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_answer — WCB_FAQ_PANEL_STYLE_ANSWER_DEMO
	// =================================================================
	'style_answer' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_dimension — WCB_FAQ_PANEL_STYLE_DIMENSION_DEMO
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
