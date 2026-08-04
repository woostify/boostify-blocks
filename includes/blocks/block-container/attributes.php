<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Container block — the main wrapper block.
 * Mirrors the TypeScript defaults from src/block-container/attributes.ts
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
	// containerClassName
	// =================================================================
	'containerClassName' => array(
		'type'    => 'string',
		'default' => '',
	),
	
	// =================================================================
	// isShowVariations
	// =================================================================
	'isShowVariations' => array(
		'type'    => 'boolean',
		'default' => true,
	),
	
	// =================================================================
	// general_container — CONTAINER_CONTROL_DEMO
	// =================================================================
	'general_container' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_flexProperties — FLEX_PROPERTIES_CONTROL_DEMO
	// =================================================================
	'general_flexProperties' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// styles_color
	// =================================================================
	'styles_color' => array(
		'type'    => 'string',
		'default' => '#000',
	),
	
	// =================================================================
	// styles_background — STYLES_BG_DEMO
	// =================================================================
	'styles_background' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// styles_border — MY_BORDER_CONTROL_DEMO
	// =================================================================
	'styles_border' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// styles_boxShadow — MY_BOX_SHADOW_CONTROL_DEMO
	// =================================================================
	'styles_boxShadow' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// styles_dimensions — MY_DIMENSIONS_CONTROL_DEMO
	// =================================================================
	'styles_dimensions' => array(
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
