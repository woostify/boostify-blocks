<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Testimonials Swiper block.
 * Mirrors the TypeScript defaults from src/block-testimonials-swiper/attributes.ts
 */

return array(
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),
	'testimonials' => array(
		'type'    => 'array',
		'default' => array(
			array(
				'name'        => 'Drink Water',
				'companyName' => 'CEO of Meta',
				'content'     => 'I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!',
			),
			array(
				'name'        => 'Drink Water',
				'companyName' => 'CEO of Meta',
				'content'     => 'I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!',
			),
			array(
				'name'        => 'Drink Water',
				'companyName' => 'CEO of Meta',
				'content'     => 'I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!',
			),
		),
	),
	'general_general' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'general_images' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'general_rating' => array(
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
	'style_image' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'style_rating' => array(
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

