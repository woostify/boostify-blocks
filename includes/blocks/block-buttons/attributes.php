<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Buttons container block.
 * Mirrors the TypeScript defaults from src/block-buttons/attributes.ts
 * and all sub-panel *_DEMO constants.
 *
 * IMPORTANT: these values MUST stay in sync with:
 *   - WCB_BUTTONS_PANEL_GENERAL_DEMO          (WcbButtonsPanelGeneral.tsx)
 *   - WCB_BUTTONS_PANEL_STYLE_TEXT_DEMO       (WcbButtonsPanel_StyleText.tsx)
 *   - WCB_BUTTONS_PANEL_STYLE_DIMENSION_DEMO  (WcbButtonsPanel_StyleDimension.tsx)
 *   - MY_MOTION_EFFECT_DEMO                   (MyMotionEffectControl.tsx)
 *
 * Gutenberg omits attributes equal to their JS defaults when saving block
 * markup, so without these mirrors the server-side parser sees EMPTY panels
 * for freshly inserted blocks and the generated CSS misses base styles.
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
	// general_general — WCB_BUTTONS_PANEL_GENERAL_DEMO
	// =================================================================
	'general_general' => array(
		'type'    => 'object',
		'default' => array(
			'alignment'        => array( 'Desktop' => 'start' ),
			'stackOrientation' => 'Mobile',
			'gap'              => array( 'Desktop' => '1rem' ),
			'size'             => array(
				'Desktop' => 'default',
				'Tablet'  => 'default',
				'Mobile'  => 'default',
			),
		),
	),

	// =================================================================
	// style_text — WCB_BUTTONS_PANEL_STYLE_TEXT_DEMO (TYPOGRAPHY_CONTROL_DEMO)
	// =================================================================
	'style_text' => array(
		'type'    => 'object',
		'default' => array(
			'typography' => array(
				'fontSizes'      => array( 'Desktop' => '' ),
				'appearance'     => array(
					'key'   => 'default',
					'name'  => 'Default',
					'style' => array(
						'fontWeight' => null,
						'fontStyle'  => null,
					),
				),
				'textDecoration' => null,
				'textTransform'  => null,
				'lineHeight'     => array( 'Desktop' => null ),
				'letterSpacing'  => array( 'Desktop' => null ),
				'fontFamily'     => null,
			),
		),
	),

	// =================================================================
	// style_dimension — WCB_BUTTONS_PANEL_STYLE_DIMENSION_DEMO
	// (MY_DIMENSIONS_NO_GAP_CONTROL_DEMO with padding overridden to empty)
	// =================================================================
	'style_dimension' => array(
		'type'    => 'object',
		'default' => array(
			'margin'  => array(
				'Desktop' => array(
					'top'    => '',
					'left'   => '',
					'right'  => '',
					'bottom' => '',
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
	// advance_zIndex — Z_INDEX_DEMO (JS: { Desktop: undefined })
	// =================================================================
	'advance_zIndex' => array(
		'type'    => 'object',
		'default' => array(
			'Desktop' => null,
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
