<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Testimonials carousel block.
 * Mirrors the TypeScript defaults from src/block-testimonials/attributes.ts
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
	// testimonials — TESTIMONIAL_ITEM_DEMO[]
	// =================================================================
	'testimonials' => array(
		'type'    => 'array',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_general — WCB_TESTIMONIALS_PANEL_GENERAL_DEMO
	// =================================================================
	'general_general' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_images — WCB_TESTIMONIALS_PANEL_IMAGES_DEMO
	// =================================================================
	'general_images' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_rating — WCB_TESTIMONIALS_PANEL_RATING_DEMO
	// =================================================================
	'general_rating' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_carousel — WCB_TESTIMONIALS_PANEL_CAROUSEL_DEMO
	// =================================================================
	'general_carousel' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_name — WCB_TESTIMONIALS_PANEL_STYLE_NAME_DEMO
	// =================================================================
	'style_name' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_content — WCB_TESTIMONIALS_PANEL_STYLE_CONTENT_DEMO
	// =================================================================
	'style_content' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_company — WCB_TESTIMONIALS_PANEL_STYLE_COMPANY_DEMO
	// =================================================================
	'style_company' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_image — WCB_TESTIMONIALS_PANEL_STYLE_IMAGE_DEMO
	// =================================================================
	'style_image' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_rating — WCB_TESTIMONIALS_PANEL_STYLE_RATING_DEMO
	// =================================================================
	'style_rating' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_arrowAndDots — WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO
	// =================================================================
	'style_arrowAndDots' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_backgroundAndBorder — WCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER_DEMO
	// =================================================================
	'style_backgroundAndBorder' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_dimension — WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION_DEMO
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
