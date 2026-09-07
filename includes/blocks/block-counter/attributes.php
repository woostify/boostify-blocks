<?php
/**
 * Default attributes for the Counter block.
 *
 * Mirrors the TypeScript defaults from src/block-counter/attributes.ts
 * and all sub-panel *_DEMO constants.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

return array(
	// =================================================================
	// uniqueId
	// =================================================================
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),

	// =================================================================
	// heading
	// =================================================================
	'heading' => array(
		'type'    => 'string',
		'default' => '',
	),

	// =================================================================
	// endNumber
	// =================================================================
	'endNumber' => array(
		'type'    => 'string',
		'default' => '80',
	),

	// =================================================================
	// designation
	// =================================================================
	'designation' => array(
		'type'    => 'string',
		'default' => 'Write a Prefix',
	),

	// =================================================================
	// description
	// =================================================================
	'description' => array(
		'type'    => 'string',
		'default' => 'Add Your Title Here…',
	),

	// =================================================================
	// general_layout — WCB_ICON_BOX_PANEL_LAYOUT_DEMO
	// =================================================================
	'general_layout' => array(
		'type'    => 'object',
		'default' => array(
			'textAlignment'     => array(
				'Desktop' => 'center',
			),
			'headingTag'        => 'h4',
			'enableDescription' => true,
			'enablePrefix'      => false,
			'enableTitle'       => true,
			'enableCTAButton'   => false,
			'type'              => 'number',
			'startNumber'       => '0',
			'endNumber'         => '80',
			'totalNumber'       => '',
			'decimalNumber'     => '0',
			'numberPrefix'      => '',
			'numberSuffix'      => '%',
			'thousand'          => '',
			'animationType'     => 'easeOutCubic',
			'animationDuration' => '1500',
		),
	),

	// =================================================================
	// general_icon — WCB_ICON_BOX_PANEL_ICON_DEMO
	// =================================================================
	'general_icon' => array(
		'type'    => 'object',
		'default' => array(
			'enableIcon'        => true,
			'iconPosition'      => 'top',
			'stackOn'           => 'none',
			'verticalAlignment' => 'top',
			'icon'              => array(
				'type'      => 'icon',
				'iconName'  => 'lni-checkmark-circle',
				'svgCode'   => '',
				'imageData' => array(
					'mediaId'  => 0,
					'mediaUrl' => '',
				),
			),
		),
	),

	// =================================================================
	// style_title — WCB_ICON_BOX_PANEL_STYLE_TITLE_DEMO
	// =================================================================
	'style_title' => array(
		'type'    => 'object',
		'default' => array(
			'typography'   => array(
				'fontSizes'      => array(
					'Desktop' => '36px',
				),
				'appearance'     => array(
					'key'   => 'default',
					'name'  => 'Default',
					'style' => array(),
				),
				'textDecoration' => '',
				'textTransform'  => '',
				'lineHeight'     => array(
					'Desktop' => '',
				),
				'letterSpacing'  => array(
					'Desktop' => '',
				),
				'fontFamily'     => '',
			),
			'textColor'    => '#171717',
			'marginBottom' => array(
				'Desktop' => '1rem',
			),
		),
	),

	// =================================================================
	// style_desination — WCB_ICON_BOX_PANEL_STYLE_DESIGNATION_DEMO
	// =================================================================
	'style_desination' => array(
		'type'    => 'object',
		'default' => array(
			'typography'   => array(
				'fontSizes'      => array(
					'Desktop' => '1rem',
				),
				'appearance'     => array(
					'key'   => 'default',
					'name'  => 'Default',
					'style' => array(),
				),
				'textDecoration' => '',
				'textTransform'  => '',
				'lineHeight'     => array(
					'Desktop' => '',
				),
				'letterSpacing'  => array(
					'Desktop' => '',
				),
				'fontFamily'     => '',
			),
			'textColor'    => '#6b7280',
			'marginBottom' => array(
				'Desktop' => '0.5rem',
			),
		),
	),

	// =================================================================
	// style_description — WCB_ICON_BOX_PANEL_STYLE_DESCRIPTION_DEMO
	// =================================================================
	'style_description' => array(
		'type'    => 'object',
		'default' => array(
			'typography'   => array(
				'fontSizes'      => array(
					'Desktop' => '',
				),
				'appearance'     => array(
					'key'   => 'default',
					'name'  => 'Default',
					'style' => array(),
				),
				'textDecoration' => '',
				'textTransform'  => '',
				'lineHeight'     => array(
					'Desktop' => '',
				),
				'letterSpacing'  => array(
					'Desktop' => '',
				),
				'fontFamily'     => '',
			),
			'textColor'    => '#171717',
			'marginBottom' => array(
				'Desktop' => '1rem',
			),
		),
	),

	// =================================================================
	// style_Icon — WCB_ICON_BOX_PANEL_STYLE_ICON_DEMO
	// =================================================================
	'style_Icon' => array(
		'type'    => 'object',
		'default' => array(
			'color'      => '#334155',
			'hoverColor' => '',
			'iconSize'   => array(
				'Desktop' => '2.5rem',
			),
			'dimensions' => array(
				'margin'  => array(
					'Desktop' => array(
						'top'    => '1rem',
						'right'  => '1rem',
						'bottom' => '1rem',
						'left'   => '1rem',
					),
				),
				'padding' => array(
					'Desktop' => array(
						'top'    => '',
						'right'  => '',
						'bottom' => '',
						'left'   => '',
					),
				),
			),
			'border'     => array(
				'borderType'   => 'none',
				'borderColor'  => '',
				'borderWidth'  => array(
					'Desktop' => '',
				),
				'borderRadius' => array(
					'Desktop' => '',
				),
			),
		),
	),

	// =================================================================
	// style_progress — WCB_ICON_BOX_PANEL_STYLE_PROGRESS_DEMO
	// =================================================================
	'style_progress' => array(
		'type'    => 'object',
		'default' => array(
			'progressColor' => '#007cba',
		),
	),

	// =================================================================
	// style_circle — WCB_ICON_BOX_PANEL_STYLE_CIRCLE_DEMO
	// =================================================================
	'style_circle' => array(
		'type'    => 'object',
		'default' => array(
			'circleSize' => array(
				'Desktop' => '300px',
			),
		),
	),

	// =================================================================
	// style_dimension — WCB_ICON_BOX_PANEL_STYLE_DIMENSION_DEMO
	// =================================================================
	'style_dimension' => array(
		'type'    => 'object',
		'default' => array(
			'margin'  => array(
				'Desktop' => array(
					'top'    => '',
					'right'  => '',
					'bottom' => '',
					'left'   => '',
				),
			),
			'padding' => array(
				'Desktop' => array(
					'top'    => '',
					'right'  => '',
					'bottom' => '',
					'left'   => '',
				),
			),
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
