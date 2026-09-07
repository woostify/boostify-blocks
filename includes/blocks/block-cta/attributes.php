<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Call to Action block.
 * Mirrors the TypeScript defaults from src/block-cta/attributes.ts
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
	// title
	// =================================================================
	'title' => array(
		'type'    => 'string',
		'default' => '',
	),

	// =================================================================
	// description
	// =================================================================
	'description' => array(
		'type'    => 'string',
		'default' => '',
	),

	// =================================================================
	// general_layout — WCB_CTA_PANEL_LAYOUT_DEMO
	// =================================================================
	'general_layout' => array(
		'type'    => 'object',
		'default' => array(
			'textAlignment' => array(
				'Desktop' => 'left',
			),
			'headingTag'    => 'h3',
			'contentWidth'  => array(
				'Desktop' => '70%',
			),
			'flexDirection' => array(
				'Desktop' => 'row',
			),
		),
	),

	// =================================================================
	// general_preset — WCB_CTA_PANEL_PRESET_DEMO
	// =================================================================
	'general_preset' => array(
		'type'    => 'object',
		'default' => array(
			'preset' => '',
		),
	),

	// =================================================================
	// style_title — WCB_CTA_PANEL_STYLE_TITLE_DEMO
	// =================================================================
	'style_title' => array(
		'type'    => 'object',
		'default' => array(
			'typography'   => array(
				'fontSizes'      => array(
					'Desktop' => '2.25rem',
				),
				'appearance'     => array(
					'key'   => 'default',
					'name'  => 'Default',
					'style' => array(
						'fontWeight' => '500',
					),
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
	// style_description — WCB_CTA_PANEL_STYLE_DESCRIPTION_DEMO
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
				'Desktop' => '0rem',
			),
		),
	),

	// =================================================================
	// style_dimension — WCB_CTA_PANEL_STYLE_DIMENSION_DEMO
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
			'gap'     => array(
				'Desktop' => '1.75rem',
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
