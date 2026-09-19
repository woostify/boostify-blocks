<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Icon box block.
 * Mirrors the TypeScript defaults from src/block-icon-box/attributes.ts
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
	// Content attributes
	// =================================================================
	'heading' => array(
		'type'    => 'string',
		'default' => 'John Doe',
	),
	'designation' => array(
		'type'    => 'string',
		'default' => 'Write a Prefix',
	),
	'description' => array(
		'type'    => 'string',
		'default' => 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
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
				'imageData' => array(
					'mediaId'  => 0,
					'mediaUrl' => '',
				),
				'svgCode'   => '',
			),
		),
	),

	// =================================================================
	// general_separator — WCB_ICON_BOX_PANEL_SEPARATOR_DEMO
	// =================================================================
	'general_separator' => array(
		'type'    => 'object',
		'default' => array(
			'enableSeparator' => false,
			'position'        => 'afterTitle',
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
	// style_separator — WCB_ICON_BOX_PANEL_STYLE_SEPARATOR_DEMO
	// =================================================================
	'style_separator' => array(
		'type'    => 'object',
		'default' => array(
			'border'       => array(
				'width' => '1px',
				'style' => 'solid',
				'color' => '#334155',
			),
			'width'        => array(
				'Desktop' => '40%',
			),
			'marginBottom' => array(
				'Desktop' => '1rem',
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
						'left'   => '1rem',
						'right'  => '1rem',
						'bottom' => '1rem',
					),
				),
				'padding' => array(
					'Desktop' => array(
						'top'    => '',
						'left'   => '',
						'right'  => '',
						'bottom' => '',
					),
				),
			),
			'border'     => array(
				'mainSettings' => array(
					'width' => '',
					'style' => 'none',
					'color' => '',
				),
				'hoverColor'   => '',
				'radius'       => array(
					'Desktop' => array(
						'topLeft'     => '',
						'topRight'    => '',
						'bottomRight' => '',
						'bottomLeft'  => '',
					),
				),
			),
		),
	),

	// =================================================================
	// style_dimension — WCB_ICON_BOX_PANEL_STYLE_DIMENSION_DEMO
	// =================================================================
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
