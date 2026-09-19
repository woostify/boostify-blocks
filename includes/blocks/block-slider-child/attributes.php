<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Slider child slide block.
 * Mirrors the TypeScript defaults from src/block-slider-child/attributes.ts
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
	// clientID
	// =================================================================
	'clientID' => array(
		'type'    => 'string',
		'default' => '',
	),
	
	// =================================================================
	// content
	// =================================================================
	'content' => array(
		'type'    => 'string',
		'default' => 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	),
	
	// =================================================================
	// name
	// =================================================================
	'name' => array(
		'type'    => 'string',
		'default' => 'Slider',
	),
	
	// =================================================================
	// callToAction
	// =================================================================
	'callToAction' => array(
		'type'    => 'string',
		'default' => 'Read More',
	),
	
	// =================================================================
	// image — INIT_IMAGE_DATA_UPLOAD_DEMO
	// =================================================================
	'image' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// rating
	// =================================================================
	'rating' => array(
		'type'    => 'number',
		'default' => 5,
	),
	
	// =================================================================
	// style_name — WCB_SLIDER_PANEL_STYLE_NAME_DEMO
	// =================================================================
	'style_name' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_content — WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO
	// =================================================================
	'style_content' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_callToActionButton — WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_DEMO
	// =================================================================
	'style_callToActionButton' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_image — WCB_SLIDER_PANEL_IMAGE_OR_ICON_DEMO
	// =================================================================
	'style_image' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_backgroundAndBorder — WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO
	// =================================================================
	'style_backgroundAndBorder' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_dimension — WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO
	// =================================================================
	'style_dimension' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_buttonPreset — WCB_SLIDER_BUTTON_PRESET_DEMO
	// =================================================================
	'style_buttonPreset' => array(
		'type'    => 'object',
		'default' => array(
			'preset'          => 'wcb-button-1',
			'enableIcon'      => false,
			'icon'            => array(
				'type'      => 'icon',
				'iconName'  => 'lni-arrow-right',
				'imageData' => array(
					'mediaId'     => 0,
					'mediaUrl'    => '',
					'mediaSrcSet' => '',
				),
				'svgCode'   => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" /></svg>',
			),
			'link'            => '',
			'openInNewWindow' => false,
			'iconPosition'    => 'afterTitle',
			'iconSpacing'     => array( 'Desktop' => '5px' ),
		),
	),
	
	// =================================================================
	// style_layoutPreset — WCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO
	// =================================================================
	'style_layoutPreset' => array(
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
	
	// =================================================================
	// advance_zIndex — Z_INDEX_DEMO
	// =================================================================
	'advance_zIndex' => array(
		'type'    => 'object',
		'default' => array(
			'Desktop' => '',
		),
	),
);
