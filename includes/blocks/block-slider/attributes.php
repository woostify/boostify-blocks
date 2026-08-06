<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Slider / carousel container block.
 * Mirrors the TypeScript defaults from src/block-slider/attributes.ts
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
	// sliders — WCB_SLIDER[]
	// =================================================================
	'sliders' => array(
		'type'    => 'array',
		'default' => array(
			array( 'boostify-blocks/slider-child' ),
			array( 'boostify-blocks/slider-child' ),
			array( 'boostify-blocks/slider-child' ),
		),
	),
	
	// =================================================================
	// general_general — WCB_SLIDER_PANEL_GENERAL_DEMO
	// =================================================================
	'general_general' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_carousel — WCB_SLIDER_PANEL_CAROUSEL_DEMO
	// =================================================================
	'general_carousel' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_name — WCB_SLIDER_PANEL_STYLE_NAME_DEMO
	// =================================================================
	'style_name' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_content — WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO
	// =================================================================
	'style_content' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_company — WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO
	// =================================================================
	'style_company' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_verticalAlignment — WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT_DEMO
	// =================================================================
	'style_verticalAlignment' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_arrowAndDots — WCB_SLIDER_PANEL_STYLE_ARROW_DOTS_DEMO
	// =================================================================
	'style_arrowAndDots' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_backgroundAndBorder — WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO
	// =================================================================
	'style_backgroundAndBorder' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_dimension — WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO
	// =================================================================
	'style_dimension' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_boxshadow — WCB_SLIDER_PANEL_STYLE_BOXSHADOW_DEMO
	// =================================================================
	'style_boxshadow' => array(
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
