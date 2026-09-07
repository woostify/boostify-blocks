<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Heading block.
 * Mirrors the TypeScript defaults from src/block-heading/attributes.ts
 */

return array(
	// =========================================================================
	// Simple attributes
	// =========================================================================
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),
	'heading' => array(
		'type'    => 'string',
		'default' => '',
	),
	'subHeading' => array(
		'type'    => 'string',
		'default' => '',
	),

	// =========================================================================
	// general_content — WCB_HEADING_PANEL_CONTENT_DEMO
	// =========================================================================
	'general_content' => array(
		'type'    => 'object',
		'default' => array(
			'textAlignment'     => array( 'Desktop' => 'left' ),
			'headingTag'        => 'h2',
			'showHeading'       => true,
			'showSeparator'     => false,
			'showSubHeading'    => false,
			'separatorPosition' => 'middle',
		),
	),

	// =========================================================================
	// styles_heading — WCB_HEADING_PANEL_HEADING_DEMO
	// =========================================================================
	'styles_heading' => array(
		'type'    => 'object',
		'default' => array(
			'typography' => array(
				'fontSizes'      => array( 'Desktop' => '' ),
				'appearance'     => 'Default',
				'textDecoration' => '',
				'textTransform'  => '',
				'lineHeight'     => array( 'Desktop' => '' ),
				'letterSpacing'  => array( 'Desktop' => '' ),
				'fontFamily'     => '',
			),
			'textColor' => array(
				'color'     => '',
				'colorType' => 'color',
				'gradient'  => 'linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)',
			),
			'textShadow' => array(
				'color'      => '',
				'blur'       => 0,
				'horizontal' => 0,
				'vertical'   => 0,
			),
			'marginBottom' => array( 'Desktop' => '' ),
		),
	),

	// =========================================================================
	// styles_separator — WCB_HEADING_PANEL_SEPARATOR_DEMO
	// =========================================================================
	'styles_separator' => array(
		'type'    => 'object',
		'default' => array(
			'border' => array(
				'color' => '#d1d5db',
				'style' => 'solid',
				'width' => '1px',
			),
			'width'       => array( 'Desktop' => '10%' ),
			'marginBottom' => array( 'Desktop' => '1rem' ),
		),
	),

	// =========================================================================
	// styles_subHeading — WCB_HEADING_PANEL_SUB_HEADING_DEMO
	// =========================================================================
	'styles_subHeading' => array(
		'type'    => 'object',
		'default' => array(
			'typography' => array(
				'fontSizes'      => array( 'Desktop' => '' ),
				'appearance'     => 'Default',
				'textDecoration' => '',
				'textTransform'  => '',
				'lineHeight'     => array( 'Desktop' => '' ),
				'letterSpacing'  => array( 'Desktop' => '' ),
				'fontFamily'     => '',
			),
			'textColor' => array(
				'color'     => '',
				'colorType' => 'color',
				'gradient'  => 'linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)',
			),
			'marginBottom' => array( 'Desktop' => '' ),
		),
	),

	// =========================================================================
	// styles_link — WCB_HEADING_PANEL_LINK_DEMO
	// =========================================================================
	'styles_link' => array(
		'type'    => 'object',
		'default' => array(
			'linkColor' => array(
				'Normal' => array( 'color' => '' ),
				'Hover'  => array( 'color' => '' ),
			),
		),
	),

	// =========================================================================
	// styles_highlight — WCB_HEADING_PANEL_HIGHLIGHT_DEMO
	// =========================================================================
	'styles_highlight' => array(
		'type'    => 'object',
		'default' => array(
			'typography' => array(
				'fontSizes'      => array( 'Desktop' => '' ),
				'appearance'     => 'Default',
				'textDecoration' => '',
				'textTransform'  => '',
				'lineHeight'     => array( 'Desktop' => '' ),
				'letterSpacing'  => array( 'Desktop' => '' ),
				'fontFamily'     => '',
			),
			'textColor' => '',
			'bgColor'   => '',
			'padding'   => array(
				'Desktop' => array(
					'top'    => '',
					'left'   => '',
					'right'  => '',
					'bottom' => '',
				),
			),
			'border' => array(
				'mainSettings' => null,
				'hoverColor'   => '',
				'radius'       => array(
					'Desktop' => '0',
					'Tablet'  => '0',
					'Mobile'  => '0',
				),
			),
		),
	),

	// =========================================================================
	// styles_background — WCB_HEADING_PANEL_BACKGROUND_DEMO
	// =========================================================================
	'styles_background' => array(
		'type'    => 'object',
		'default' => array(
			'background' => array(
				'bgType'   => 'color',
				'color'    => '',
				'gradient' => 'linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)',
			),
		),
	),

	// =========================================================================
	// styles_border — WCB_HEADING_PANEL_STYLE_BORDER_DEMO (= MY_BORDER_CONTROL_DEMO)
	// =========================================================================
	'styles_border' => array(
		'type'    => 'object',
		'default' => array(
			'mainSettings' => null,
			'hoverColor'   => '',
			'radius'       => array(
				'Desktop' => '0',
				'Tablet'  => '0',
				'Mobile'  => '0',
			),
		),
	),

	// =========================================================================
	// styles_dimensions — WCB_HEADING_PANEL_DIMENSION_DEMO
	// =========================================================================
	'styles_dimensions' => array(
		'type'    => 'object',
		'default' => array(
			'dimension' => array(
				'margin' => array(
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
	),

	// =========================================================================
	// Advance — RESPONSIVE_CONDITON_DEMO
	// =========================================================================
	'advance_responsiveCondition' => array(
		'type'    => 'object',
		'default' => array(
			'isHiddenOnDesktop' => false,
			'isHiddenOnTablet'  => false,
			'isHiddenOnMobile'  => false,
		),
	),

	// =========================================================================
	// Advance — Z_INDEX_DEMO
	// =========================================================================
	'advance_zIndex' => array(
		'type'    => 'object',
		'default' => array(
			'Desktop' => '',
		),
	),

	// =========================================================================
	// Advance — MY_MOTION_EFFECT_DEMO
	// =========================================================================
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
