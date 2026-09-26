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
			'textAlignment'      => array( 'Desktop' => 'left' ),
			'isShowLabel'        => true,
			'formStyle'          => 'simple',
			'confirmationType'   => 'message',
			'successMessageText' => 'The form has been submitted successfully!',
			'errorMessageText'   => 'There has been some error while submitting the form. Please verify all form fields again.',
			'successRedirectUrl' => '#',
		),
	),
	
	// =================================================================
	// general_submit_button — WCB_FORM_PANEL_SUBMIT_BUTTON_DEMO
	// =================================================================
	'general_submit_button' => array(
		'type'    => 'object',
		'default' => array(
			'textAlignment' => array( 'Desktop' => 'start' ),
			'position'      => array( 'Desktop' => 'bottom' ),
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
			'typography'     => array(
				'appearance' => array(
					'key'   => 'default',
					'name'  => 'Default',
					'style' => array(
						'fontWeight' => 500,
					),
				),
			),
			'textColor'      => '',
			'textColorHover' => '',
		),
	),
	
	// =================================================================
	// style_input — WCB_FORM_PANEL_STYLE_INPUT_DEMO__SIMPLE
	// =================================================================
	'style_input' => array(
		'type'    => 'object',
		'default' => array(
			'textColor'        => '',
			'bgAndPlaceholder' => array(
				'Normal' => array( 'backgroundColor' => '#fff', 'placeholderColor' => '' ),
				'Hover'  => array( 'backgroundColor' => '#fff', 'placeholderColor' => '' ),
				'Active' => array( 'backgroundColor' => '#fff', 'placeholderColor' => '' ),
			),
			'border'           => array(
				'mainSettings' => array(
					'color' => '#d1d5db',
					'style' => 'solid',
					'width' => '1px',
				),
			),
			'padding'          => array(
				'Desktop' => array(
					'top'    => '0.5rem',
					'left'   => '0.75rem',
					'right'  => '0.75rem',
					'bottom' => '0.5rem',
				),
			),
		),
	),
	
	// =================================================================
	// style_checkbox_radio_toggle — WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO__SIMPLE
	// =================================================================
	'style_checkbox_radio_toggle' => array(
		'type'    => 'object',
		'default' => array(
			'colors'            => array(
				'Normal' => array( 'backgroundColor' => '' ),
				'Active' => array( 'backgroundColor' => '#0284c7' ),
			),
			'border'            => array(
				'mainSettings' => array(
					'color' => '#d1d5db',
					'style' => 'solid',
					'width' => '1px',
				),
				'radius'       => array(
					'Desktop' => array(
						'bottomLeft'  => '0.25rem',
						'bottomRight' => '0.25rem',
						'topLeft'     => '0.25rem',
						'topRight'    => '0.25rem',
					),
				),
			),
			'checkboxRadioSize' => array( 'Desktop' => '1rem' ),
			'toggleSize'        => array( 'Desktop' => 1 ),
		),
	),
	
	// =================================================================
	// style_submit_button — WCB_FORM_PANEL_STYLE_SUBMIT_BUTTON_DEMO
	// =================================================================
	'style_submit_button' => array(
		'type'    => 'object',
		'default' => array(
			'colorAndBackgroundColor' => array(
				'Normal' => array(
					'color'           => '#fff',
					'backgroundColor' => '#1346af',
				),
				'Hover'  => array(
					'color'           => '#fff',
					'backgroundColor' => '#3a3a3a',
				),
			),
			'padding'                 => array(
				'Desktop' => array(
					'top'    => '1rem',
					'left'   => '2rem',
					'right'  => '2rem',
					'bottom' => '1rem',
				),
			),
		),
	),
	
	// =================================================================
	// style_messages — WCB_FORM_PANEL_STYLE_MESSAGES_DEMO
	// =================================================================
	'style_messages' => array(
		'type'    => 'object',
		'default' => array(
			'Success' => array(
				'color'           => '#0c4a6e',
				'backgroundColor' => '#f0f9ff',
			),
			'Error'   => array(
				'color'           => '#ef4444',
				'backgroundColor' => '#fef2f2',
			),
		),
	),
	
	// =================================================================
	// style_spacing — WCB_FORM_PANEL_STYLE_SPACING_DEMO
	// =================================================================
	'style_spacing' => array(
		'type'    => 'object',
		'default' => array(
			'padding'           => array(
				'Desktop' => array(
					'top'    => '1.75rem',
					'left'   => '1.75rem',
					'right'  => '1.75rem',
					'bottom' => '1.75rem',
				),
			),
			'border'            => array(
				'mainSettings' => array(
					'color' => '#38bdf8',
					'style' => 'solid',
					'width' => '1px',
				),
			),
			'rowGap'            => array( 'Desktop' => '1.75rem' ),
			'labelBottomMargin' => array( 'Desktop' => '0.5rem' ),
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
