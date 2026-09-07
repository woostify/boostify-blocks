<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Icon block.
 * Mirrors the TypeScript defaults from src/block-icon/attributes.ts
 * and all sub-panel *_DEMO constants.
 */

return array(
	// =================================================================
	// cover
	// =================================================================
	'cover' => array(
		'type'    => 'string',
		'default' => '',
	),

	// =================================================================
	// uniqueId
	// =================================================================
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),

	// =================================================================
	// general_icon — WCB_ICON_PANEL_ICON_DEMO
	// =================================================================
	'general_icon' => array(
		'type'    => 'object',
		'default' => array(
			'size'              => array( 'Desktop' => 20 ),
			'alignment'         => array( 'Desktop' => 'center' ),
			'icon'              => array(
				'iconType'  => 'icon',
				'iconName'  => 'lni-star-filled',
				'iconSrc'   => '',
				'svgSource' => '',
			),
			'enableLink'        => false,
			'link'              => '',
			'openInNewWindow'   => false,
			'addNofollowToLink' => true,
		),
	),

	// =================================================================
	// general_preset — WCB_ICON_PANEL_PRESET_DEMO
	// =================================================================
	'general_preset' => array(
		'type'    => 'object',
		'default' => array(
			'preset' => 'wcb-icon-1',
		),
	),

	// =================================================================
	// style_icon — WCB_ICON_PANEL_STYLE_ICON_DEMO
	// =================================================================
	'style_icon' => array(
		'type'    => 'object',
		'default' => array(
			'color'      => '#fff',
			'hoverColor' => '',
		),
	),

	// =================================================================
	// style_background — WCB_ICON_PANEL_STYLE_BACKGROUND_DEMO
	// =================================================================
	'style_background' => array(
		'type'    => 'object',
		'default' => array(
			'normal' => array(
				'bgType'   => 'color',
				'color'    => '#2B2B2B',
				'gradient' => 'linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)',
			),
			'hover'  => array(
				'bgType'   => 'color',
				'color'    => '#2B2B2B',
				'gradient' => 'linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)',
			),
		),
	),

	// =================================================================
	// style_border — WCB_ICON_PANEL_STYLE_BORDER_DEMO
	// =================================================================
	'style_border' => array(
		'type'    => 'object',
		'default' => array(
			'mainSettings' => null,
			'hoverColor'   => '',
			'radius'       => array(
				'Desktop' => array(
					'bottomLeft'  => '50%',
					'bottomRight' => '50%',
					'topLeft'     => '50%',
					'topRight'    => '50%',
				),
			),
		),
	),

	// =================================================================
	// style_boxshadow — WCB_ICON_PANEL_STYLE_BOXSHADOW_DEMO
	// =================================================================
	'style_boxshadow' => array(
		'type'    => 'object',
		'default' => array(
			'Normal' => array(
				'color'       => '',
				'presetClass' => '',
				'blur'        => 0,
				'horizontal'  => 0,
				'spread'      => 0,
				'vertical'    => 0,
				'position'    => 'outset',
			),
			'Hover'  => array(
				'color'       => '',
				'presetClass' => '',
				'blur'        => 0,
				'horizontal'  => 0,
				'spread'      => 0,
				'vertical'    => 0,
				'position'    => 'outset',
			),
		),
	),

	// =================================================================
	// style_dimension — WCB_ICON_PANEL_STYLE_DIMENSION_DEMO
	// =================================================================
	'style_dimension' => array(
		'type'    => 'object',
		'default' => array(
			'padding' => array(
				'Desktop' => array(
					'top'    => '15px',
					'left'   => '15px',
					'right'  => '15px',
					'bottom' => '15px',
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

