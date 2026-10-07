<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Heading block.
 * Mirrors the TypeScript defaults from src/block-heading/attributes.ts
 */

$typographyDefault = WCB_Block_Helper::get_typography_default();

return array_merge(
	array(
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
				'typography'   => $typographyDefault,
				'textColor'    => array(
					'color'     => '',
					'colorType' => 'color',
					'gradient'  => 'linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)',
				),
				'textShadow'   => array(
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
				'border'       => array(
					'color' => '#d1d5db',
					'style' => 'solid',
					'width' => '1px',
				),
				'width'        => array( 'Desktop' => '10%' ),
				'marginBottom' => array( 'Desktop' => '1rem' ),
			),
		),

		// =========================================================================
		// styles_subHeading — WCB_HEADING_PANEL_SUB_HEADING_DEMO
		// =========================================================================
		'styles_subHeading' => array(
			'type'    => 'object',
			'default' => array(
				'typography'   => $typographyDefault,
				'textColor'    => array(
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
				'typography' => $typographyDefault,
				'textColor'  => '',
				'bgColor'    => '',
				'padding'    => array(
					'Desktop' => array(
						'top'    => '',
						'left'   => '',
						'right'  => '',
						'bottom' => '',
					),
				),
				'border'     => WCB_Block_Helper::get_border_default(),
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
		'styles_border' => WCB_Block_Helper::get_border_schema(),

		// =========================================================================
		// styles_dimensions — WCB_HEADING_PANEL_DIMENSION_DEMO
		// =========================================================================
		'styles_dimensions' => array(
			'type'    => 'object',
			'default' => array(
				'dimension' => WCB_Block_Helper::get_dimension_default(),
			),
		),
	),
	WCB_Block_Helper::get_advance_attributes()
);
