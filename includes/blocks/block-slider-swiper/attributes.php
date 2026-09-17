<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Slider Swiper container block.
 * Mirrors the TypeScript defaults from src/block-slider-swiper/attributes.ts
 */

return array(
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),
	'sliders' => array(
		'type'    => 'array',
		'default' => array(
			array( 'boostify-blocks/slider-swiper-child' ),
			array( 'boostify-blocks/slider-swiper-child' ),
			array( 'boostify-blocks/slider-swiper-child' ),
		),
	),
	'general_general' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'general_carousel' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'style_name' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'style_content' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'style_company' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'style_verticalAlignment' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'style_arrowAndDots' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'style_backgroundAndBorder' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'style_dimension' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'style_boxshadow' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'advance_responsiveCondition' => array(
		'type'    => 'object',
		'default' => array(
			'isHiddenOnDesktop' => false,
			'isHiddenOnTablet'  => false,
			'isHiddenOnMobile'  => false,
		),
	),
	'advance_zIndex' => array(
		'type'    => 'object',
		'default' => array(
			'Desktop' => '',
		),
	),
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

