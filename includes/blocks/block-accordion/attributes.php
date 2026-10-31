<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Accordion block.
 * Mirrors the TypeScript defaults from src/block-accordion/attributes.ts
 * and all sub-panel *_DEMO constants.
 *
 * @package Boostify_Blocks
 */

$attributes = array(
	// uniqueId
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),

	// general_preset
	'general_preset' => array(
		'type'    => 'object',
		'default' => array(
			'preset' => '',
		),
	),

	// general_general
	'general_general' => array(
		'type'    => 'object',
		'default' => array(
			'headingTag'        => 'div',
			'allowMultipleOpen' => false,
			'startCollapsed'    => false,
			'openPane'          => 0,
			'columns'           => array(
				'Desktop' => 1,
				'Tablet'  => 1,
				'Mobile'  => 1,
			),
			'faqSchema'         => false,
			'enableSeparator'   => true,
			'textAlignment'     => 'left',
		),
	),

	// general_icon
	'general_icon' => array(
		'type'    => 'object',
		'default' => array(
			'enableIcon'   => true,
			'inactiveIcon' => array(
				'type'      => 'icon',
				'iconName'  => 'lni-plus',
				'imageData' => array(
					'mediaId'  => 0,
					'mediaUrl' => '',
				),
				'svgCode'   => '',
			),
			'iconPosition' => 'right',
			'icon'         => array(
				'type'      => 'icon',
				'iconName'  => 'lni-minus',
				'imageData' => array(
					'mediaId'  => 0,
					'mediaUrl' => '',
				),
				'svgCode'   => '',
			),
		),
	),

	// style_container
	'style_container' => array(
		'type'    => 'object',
		'default' => array(
			'background' => array(
				'bgType'   => 'color',
				'color'    => '',
				'gradient' => 'linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)',
			),
			'border'     => array(
				'mainSettings' => array(
					'color' => '#e5e7eb',
					'style' => 'solid',
					'width' => '1px',
				),
				'hoverColor'   => '',
				'radius'       => array(
					'Desktop' => '6px',
					'Tablet'  => '6px',
					'Mobile'  => '6px',
				),
			),
			'rowGap'     => array( 'Desktop' => '8px' ),
			'colunmGap'  => array( 'Desktop' => '16px' ),
		),
	),

	// style_question (header)
	'style_question' => array(
		'type'    => 'object',
		'default' => array(
			'typography'            => array(
				'fontSizes'      => array( 'Desktop' => '16px' ),
				'appearance'     => array(
					'id'    => '1',
					'name'  => 'Default',
					'value' => 'Default',
					'style' => array(
						'fontWeight' => '500',
						'fontStyle'  => 'normal',
					),
				),
				'textDecoration' => '',
				'textTransform'  => '',
				'lineHeight'     => array( 'Desktop' => '' ),
				'letterSpacing'  => array( 'Desktop' => '' ),
				'fontFamily'     => '',
			),
			'padding'               => array(
				'Desktop' => array(
					'top'    => '12px',
					'left'   => '16px',
					'right'  => '16px',
					'bottom' => '12px',
				),
			),
			'backgroundColor'       => '#f9fafb',
			'backgroundColorHover'  => '#f3f4f6',
			'backgroundColorActive' => '#4a5568',
			'color'                 => '#111827',
			'colorHover'            => '#111827',
			'colorActive'           => '#ffffff',
			'border'                => array(
				'mainSettings' => array(
					'color' => '#e5e7eb',
					'style' => 'solid',
					'width' => '1px',
				),
				'hoverColor'   => '',
				'radius'       => array(
					'Desktop' => '6px',
					'Tablet'  => '6px',
					'Mobile'  => '6px',
				),
			),
		),
	),

	// style_icon
	'style_icon' => array(
		'type'    => 'object',
		'default' => array(
			'size'        => array( 'Desktop' => 18 ),
			'color'       => '',
			'colorHover'  => '',
			'activeColor' => '',
			'colGap'      => array( 'Desktop' => '12px' ),
		),
	),

	// style_answer (panel content)
	'style_answer' => array(
		'type'    => 'object',
		'default' => array(
			'typography'      => array(
				'fontSizes'      => array( 'Desktop' => '' ),
				'appearance'     => array(
					'id'    => '1',
					'name'  => 'Default',
					'value' => 'Default',
					'style' => array(
						'fontWeight' => 'normal',
						'fontStyle'  => 'normal',
					),
				),
				'textDecoration' => '',
				'textTransform'  => '',
				'lineHeight'     => array( 'Desktop' => '' ),
				'letterSpacing'  => array( 'Desktop' => '' ),
				'fontFamily'     => '',
			),
			'padding'         => array(
				'Desktop' => array(
					'top'    => '14px',
					'left'   => '16px',
					'right'  => '16px',
					'bottom' => '14px',
				),
			),
			'backgroundColor' => '#ffffff',
			'color'           => '#4b5563',
		),
	),

	// style_dimension
	'style_dimension' => array(
		'type'    => 'object',
		'default' => array(
			'padding' => array(
				'Desktop' => array(
					'top'    => '',
					'left'   => '',
					'right'  => '',
					'bottom' => '',
				),
			),
			'margin'  => array(
				'Desktop' => array(
					'top'    => '',
					'left'   => '',
					'right'  => '',
					'bottom' => '',
				),
			),
		),
	),
);

return array_merge( $attributes, WCB_Block_Helper::get_advance_attributes() );
