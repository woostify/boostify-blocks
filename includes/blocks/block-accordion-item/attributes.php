<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Accordion Item child block.
 * Mirrors src/block-accordion-item/attributes.ts
 *
 * @package Boostify_Blocks
 */

return array(
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),
	'title' => array(
		'type'    => 'string',
		'default' => '',
	),
	'defaultOpen' => array(
		'type'    => 'boolean',
		'default' => false,
	),
	'headingTag' => array(
		'type'    => 'string',
		'default' => 'div',
	),
	'enableSeparator' => array(
		'type'    => 'boolean',
		'default' => true,
	),
	'general_icon' => array(
		'type'    => 'object',
		'default' => array(),
	),
	'icon' => array(
		'type'    => 'object',
		'default' => array(
			'type'      => 'icon',
			'iconName'  => '',
			'imageData' => array(
				'mediaId'  => 0,
				'mediaUrl' => '',
			),
			'svgCode'   => '',
		),
	),
	'iconSide' => array(
		'type'    => 'string',
		'default' => 'right',
	),
	'hideLabel' => array(
		'type'    => 'boolean',
		'default' => false,
	),
	'ariaLabel' => array(
		'type'    => 'string',
		'default' => '',
	),
);
