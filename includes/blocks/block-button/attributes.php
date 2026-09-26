<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Button child block.
 * Mirrors the TypeScript defaults from src/block-button/attributes.ts
 * and all sub-panel *_DEMO constants.
 *
 * IMPORTANT: these values MUST stay in sync with:
 *   - WCB_BUTTON_PANEL_PRESET_DEMO            (WcbButtonPanelPreset.tsx)
 *   - WCB_BUTTON_PANEL_CONTENT_DEMO           (WcbButtonPanelContent.tsx)
 *   - WCB_BUTTON_PANEL_STYLE_TEXT_DEMO        (WcbButtonPanel_StyleText.tsx)
 *   - WCB_BUTTON_PANEL_STYLE_ICON_DEMO        (WcbButtonPanel_StyleIcon.tsx)
 *   - WCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO  (WcbButtonPanel_StyleBackground.tsx)
 *   - WCB_BUTTON_PANEL_STYLE_BORDER_DEMO      (WcbButtonPanel_StyleBorder.tsx)
 *   - WCB_BUTTON_PANEL_STYLE_BOXSHADOW_DEMO   (WcbButtonPanel_StyleBoxshadow.tsx)
 *   - WCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO   (WcbButtonPanel_StyleDimension.tsx)
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
	// content
	// =================================================================
	'content' => array(
		'type'     => 'string',
		'source'   => 'html',
		'selector' => '.wcb-button__text',
		'default'  => 'Button',
	),

	// =================================================================
	// general_preset — WCB_BUTTON_PANEL_PRESET_DEMO ("primary")
	// =================================================================
	'general_preset' => array(
		'type'    => 'object',
		'default' => array(
			'preset' => 'primary',
		),
	),

	// =================================================================
	// general_content — WCB_BUTTON_PANEL_CONTENT_DEMO_COMMON_NO_ICON
	// NOTE: isInheritFromTheme intentionally absent (optional toggle;
	// absence means "follow the dashboard setting").
	// =================================================================
	'general_content' => array(
		'type'    => 'object',
		'default' => array(
			'enableIcon'      => false,
			'iconPosition'    => 'left',
			'link'            => '',
			'openInNewWindow' => false,
			'isHiddenText'    => false,
			'addNofollowToLink' => true,
			'icon'            => array(
				'type'      => 'icon',
				'iconName'  => 'lni-heart-filled',
				'imageData' => array(
					'mediaId'     => 0,
					'mediaUrl'    => '',
					'mediaSrcSet' => null,
				),
				'svgCode'   => '',
			),
		),
	),

	// =================================================================
	// style_text — WCB_BUTTON_PANEL_STYLE_TEXT_DEMO (PRIMARY)
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
			'color'       => '#fff',
			'hoverColor'  => '#fff',
		),
	),

	// =================================================================
	// style_icon — WCB_BUTTON_PANEL_STYLE_ICON_DEMO
	// =================================================================
	'style_icon' => array(
		'type'    => 'object',
		'default' => array(
			'size'       => array( 'Desktop' => 20 ),
			'color'      => '#fff',
			'hoverColor' => '#fff',
		),
	),

	// =================================================================
	// style_background — WCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO_PRIMARY
	// =================================================================
	'style_background' => array(
		'type'    => 'object',
		'default' => array(
			'normal' => array(
				'bgType'   => 'color',
				'color'    => '#0284c7',
				'gradient' => 'linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)',
			),
			'hover'  => array(
				'bgType'   => 'color',
				'color'    => '#0369a1',
				'gradient' => 'linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)',
			),
		),
	),

	// =================================================================
	// style_border — WCB_BUTTON_PANEL_STYLE_BORDER_DEMO (PRIMARY)
	// radius comes from MY_BORDER_CONTROL_DEMO (DEFAULT_BORDER_RADIUS = "0")
	// =================================================================
	'style_border' => array(
		'type'    => 'object',
		'default' => array(
			'mainSettings' => array(
				'style' => 'solid',
				'width' => '1px',
				'color' => '#0284c7',
			),
			'hoverColor'   => '#0369a1',
			'radius'       => array(
				'Desktop' => '0',
				'Tablet'  => '0',
				'Mobile'  => '0',
			),
		),
	),

	// =================================================================
	// style_boxshadow — MY_BOX_SHADOW_CONTROL_DEMO (all zeroed)
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
	// style_dimension — WCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO_PRIMARY
	// =================================================================
	'style_dimension' => array(
		'type'    => 'object',
		'default' => array(
			'margin'  => array(
				'Desktop' => array(
					'top'    => '0',
					'left'   => '0',
					'right'  => '0',
					'bottom' => '0',
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
			'colGap'  => array( 'Desktop' => '8px' ),
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
);
