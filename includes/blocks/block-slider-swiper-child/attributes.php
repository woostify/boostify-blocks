<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Slider Swiper child slide block.
 * Mirrors the TypeScript defaults from src/block-slider-swiper-child/attributes.ts
 */

return array(
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),
	'clientID' => array(
		'type'    => 'string',
		'default' => '',
	),
	'content' => array(
		'type'    => 'string',
		'default' => 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	),
	'name' => array(
		'type'    => 'string',
		'default' => 'Slider',
	),
	'callToAction' => array(
		'type'    => 'string',
		'default' => 'Read More',
	),
	'image' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'rating' => array(
		'type'    => 'number',
		'default' => 5,
	),
	'style_name' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'style_content' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'style_callToActionButton' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'style_image' => array(
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
	'style_buttonPreset' => array(
		'type'    => 'object',
		'default' => array(
			'preset'          => 'wcb-button-1',
			'enableIcon'      => false,
			'icon'            => array(
				'iconName' => 'lni-arrow-right',
			),
			'link'            => '',
			'openInNewWindow' => false,
			'iconPosition'    => 'afterTitle',
			'iconSpacing'     => array( 'Desktop' => '5px' ),
		),
	),
	'style_layoutPreset' => array(
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
	'advance_motionEffect' => array(
		'type'    => 'object',
		'default' => array(
			'animationDelay'    => 0,
			'animationDuration' => 'fast',
			'entranceAnimation' => '',
			'repeat'            => '1',
		),
	),
	'advance_zIndex' => array(
		'type'    => 'object',
		'default' => array(
			'Desktop' => '',
		),
	),
);

