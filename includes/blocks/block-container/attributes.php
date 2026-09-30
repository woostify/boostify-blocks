<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Container block — the main wrapper block.
 * Mirrors the TypeScript defaults from src/block-container/attributes.ts
 * and all sub-panel *_DEMO constants exactly.
 */

return array_merge(
	array(
	// =================================================================
	// uniqueId
	// =================================================================
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),

	// =================================================================
	// containerClassName
	// =================================================================
	'containerClassName' => array(
		'type'    => 'string',
		'default' => '',
	),

	// =================================================================
	// isShowVariations
	// =================================================================
	'isShowVariations' => array(
		'type'    => 'boolean',
		'default' => true,
	),

	// =================================================================
	// general_container — CONTAINER_CONTROL_DEMO
	// =================================================================
	'general_container' => array(
		'type'    => 'object',
		'default' => array(
			'containerWidthType' => 'Full Width',
			'contentWidthType'   => 'Boxed',
			'customWidth'        => array(
				'Desktop' => '100%',
				'Mobile'  => '100%',
			),
			'contentBoxWidth'    => array(
				'Desktop' => '',
				'Mobile'  => '',
			),
			'minHeight'          => array(
				'Desktop' => '',
			),
			'htmlTag'            => 'div',
			'overflow'           => 'visible',
		),
	),

	// =================================================================
	// general_flexProperties — FLEX_PROPERTIES_CONTROL_DEMO
	// (with block-specific overrides from attributes.ts)
	// =================================================================
	'general_flexProperties' => array(
		'type'    => 'object',
		'default' => array(
			'flexDirection'  => array( 'Desktop' => 'column' ),
			'alignItems'     => array( 'Desktop' => 'stretch' ),
			'justifyContent' => array( 'Desktop' => 'center' ),
			'flexWrap'       => array(
				'Desktop' => 'nowrap',
				'Mobile'  => 'wrap',
			),
		),
	),

	// =================================================================
	// styles_color
	// =================================================================
	'styles_color' => array(
		'type'    => 'string',
		'default' => '#000',
	),

	// =================================================================
	// styles_background — STYLES_BG_DEMO
	// =================================================================
	'styles_background' => array(
		'type'    => 'object',
		'default' => array(
			'bgType'            => 'color',
			'color'             => '',
			'gradient'          => 'linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)',
			'overlayType'       => 'none',
			'overlayColor'      => '#9437374d',
			'overlayGradient'   => 'linear-gradient(104deg,rgba(93,207,232,0.72) 0%,rgba(245,120,128,0.69) 100%)',
			'bgImageAttachment' => array( 'Desktop' => 'local' ),
			'bgImageRepeat'     => array( 'Desktop' => 'no-repeat' ),
			'bgImageSize'       => array( 'Desktop' => 'cover' ),
			'imageData'         => array(
				'Desktop' => array(
					'mediaId'     => 0,
					'mediaUrl'    => '',
					'mediaSrcSet' => '',
				),
			),
			'focalPoint'        => array(
				'Desktop' => array(
					'x' => 0.5,
					'y' => 0.5,
				),
			),
			'videoData'         => array(
				'mediaId'  => 0,
				'mediaUrl' => '',
			),
		),
	),

	// =================================================================
	// styles_border — MY_BORDER_CONTROL_DEMO
	// =================================================================
	'styles_border' => WCB_Block_Helper::get_border_schema(),

	// =================================================================
	// styles_boxShadow — MY_BOX_SHADOW_CONTROL_DEMO
	// =================================================================
	'styles_boxShadow' => WCB_Block_Helper::get_box_shadow_schema(),

	// =================================================================
	// styles_dimensions — block-specific defaults
	// (overrides MY_DIMENSIONS_CONTROL_DEMO in attributes.ts)
	// =================================================================
	'styles_dimensions' => array(
		'type'    => 'object',
		'default' => array(
			'colunmGap' => array( 'Desktop' => '' ),
			'rowGap'    => array( 'Desktop' => '' ),
			'margin'    => array(
				'Desktop' => array(
					'top'    => '',
					'right'  => '',
					'bottom' => '',
					'left'   => '',
				),
			),
			'padding'   => array(
				'Desktop' => array(
					'top'    => '',
					'right'  => '',
					'bottom' => '',
					'left'   => '',
				),
			),
		),
	),
	),
	WCB_Block_Helper::get_advance_attributes()
);

