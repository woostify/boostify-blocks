<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Form container block.
 * Mirrors the TypeScript defaults from src/block-form/attributes.ts
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
	// btnSubmitText
	// =================================================================
	'btnSubmitText' => array(
		'type'    => 'string',
		'default' => 'Submit',
	),
	
	// =================================================================
	// general_general — WCB_FORM_PANEL_GENERAL_DEMO
	// =================================================================
	'general_general' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_submit_button — WCB_FORM_PANEL_SUBMIT_BUTTON_DEMO
	// =================================================================
	'general_submit_button' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_action — WCB_FORM_PANEL_ACTION_DEMO
	// =================================================================
	'general_action' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_gg_recaptcha — WCB_FORM_PANEL_GOOGLE_RECAPTCHA_DEMO
	// =================================================================
	'general_gg_recaptcha' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_label — WCB_FORM_PANEL_STYLE_LABEL_DEMO
	// =================================================================
	'style_label' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_input — WCB_FORM_PANEL_STYLE_INPUT_DEMO
	// =================================================================
	'style_input' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_checkbox_radio_toggle — WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO
	// =================================================================
	'style_checkbox_radio_toggle' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_submit_button — WCB_FORM_PANEL_STYLE_SUBMIT_BUTTON_DEMO
	// =================================================================
	'style_submit_button' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_messages — WCB_FORM_PANEL_STYLE_MESSAGES_DEMO
	// =================================================================
	'style_messages' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_spacing — WCB_FORM_PANEL_STYLE_SPACING_DEMO
	// =================================================================
	'style_spacing' => array(
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
