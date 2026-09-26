<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the FAQ accordion block.
 * Mirrors the TypeScript defaults from src/block-faq/attributes.ts
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
	// general_preset — WCB_FAQ_PANEL_PRESET_DEMO
	// =================================================================
	'general_preset' => array(
		'type'    => 'object',
		'default' => array(
			'preset' => '',
		),
	),
	
	// =================================================================
	// general_general — WCB_FAQ_PANEL_GENERAL_DEMO
	// =================================================================
	'general_general' => array(
		'type'    => 'object',
		'default' => array(
			'layout'              => 'accordion',
			'headingTag'          => 'div',
			'collapseOtherItems'  => true,
			'columns'             => array( 'Desktop' => 2 ),
			'enableSchemaSupport' => true,
			'enableSeparator'     => true,
			'showMultiple'        => true,
			'expandFirstItem'     => true,
			'textAlignment'       => 'left',
		),
	),
	
	// =================================================================
	// general_icon — WCB_FAQ_PANEL_ICON_DEMO
	// =================================================================
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
	
	// =================================================================
	// style_container — WCB_FAQ_PANEL_STYLE_CONTAINER_DEMO
	// =================================================================
	'style_container' => array(
		'type'    => 'object',
		'default' => array(
			'background'  => array(
				'bgType'   => 'color',
				'color'    => '',
				'gradient' => 'linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)',
			),
			'border'      => array(
				'mainSettings' => null,
				'hoverColor'   => '',
				'radius'       => array(
					'Desktop' => '0',
					'Tablet'  => '0',
					'Mobile'  => '0',
				),
			),
			'equalHeight' => true,
			'colunmGap'   => array( 'Desktop' => '1rem' ),
			'rowGap'      => array( 'Desktop' => '1rem' ),
		),
	),
	
	// =================================================================
	// style_question — WCB_FAQ_PANEL_STYLE_QUESTION_DEMO
	// =================================================================
	'style_question' => array(
		'type'    => 'object',
		'default' => array(
			'typography'           => array(
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
			'padding'              => array(
				'Desktop' => array(
					'top'    => '1rem',
					'left'   => '1rem',
					'right'  => '1rem',
					'bottom' => '1rem',
				),
			),
			'backgroundColor'      => '',
			'backgroundColorHover' => '',
			'color'                => '',
			'colorHover'           => '',
		),
	),
	
	// =================================================================
	// style_icon — WCB_FAQ_PANEL_STYLE_ICON_DEMO
	// =================================================================
	'style_icon' => array(
		'type'    => 'object',
		'default' => array(
			'size'        => array( 'Desktop' => 20 ),
			'color'       => '',
			'activeColor' => '',
			'colGap'      => array( 'Desktop' => '1rem' ),
		),
	),
	
	// =================================================================
	// style_answer — WCB_FAQ_PANEL_STYLE_ANSWER_DEMO
	// =================================================================
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
					'top'    => '1rem',
					'left'   => '1rem',
					'right'  => '1rem',
					'bottom' => '1rem',
				),
			),
			'backgroundColor' => '',
			'color'           => '',
		),
	),
	
	// =================================================================
	// style_dimension — WCB_FAQ_PANEL_STYLE_DIMENSION_DEMO
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
