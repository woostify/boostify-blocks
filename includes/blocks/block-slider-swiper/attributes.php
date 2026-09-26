<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Slider Swiper container block.
 * Mirrors the TypeScript defaults from src/block-slider-swiper/attributes.ts
 * and all sub-panel *_DEMO constants.
 */

return array(
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),
	'sliders' => array(
		'type'    => 'array',
		'default' => array(
			array( 'boostify-blocks/slider-swiper-child' ),
			array( 'boostify-blocks/slider-swiper-child' ),
			array( 'boostify-blocks/slider-swiper-child' ),
		),
	),
	'general_general' => array(
		'type'    => 'object',
		'default' => array(
			'textAlignment'        => array( 'Desktop' => 'center' ),
			'numberofTestimonials' => 3,
			'columns'              => array( 'Desktop' => 1, 'Tablet' => 1, 'Mobile' => 1 ),
			'colGap'               => array( 'Desktop' => '1rem' ),
		),
	),
	'general_carousel' => array(
		'type'    => 'object',
		'default' => array(
			'animationDuration' => 500,
			'autoplaySpeed'     => 3000,
			'hoverpause'        => true,
			'isAutoPlay'        => false,
			'rewind'            => true,
			'adaptiveHeight'    => true,
			'showArrowsDots'    => 'Both',
		),
	),
	'style_name' => array(
		'type'    => 'object',
		'default' => array(
			'typography'   => array(
				'fontSizes'      => array( 'Desktop' => '' ),
				'appearance'     => array(
					'key'   => 'default',
					'name'  => 'Default',
					'style' => array( 'fontWeight' => 500 ),
				),
				'lineHeight'     => array(),
				'letterSpacing'  => array(),
			),
			'textColor'    => '',
			'marginBottom' => array( 'Desktop' => '0.5rem' ),
		),
	),
	'style_content' => array(
		'type'    => 'object',
		'default' => array(
			'typography'   => array(
				'fontSizes'      => array( 'Desktop' => '' ),
				'appearance'     => array(
					'key'   => 'default',
					'name'  => 'Default',
					'style' => array(),
				),
				'lineHeight'     => array( 'Desktop' => 1.75 ),
				'letterSpacing'  => array(),
			),
			'textColor'    => '',
			'marginBottom' => array( 'Desktop' => '1.5rem' ),
		),
	),
	'style_company' => array(
		'type'    => 'object',
		'default' => array(
			'typography' => array(
				'fontSizes'      => array( 'Desktop' => '' ),
				'appearance'     => array(
					'key'   => 'default',
					'name'  => 'Default',
					'style' => array(),
				),
				'lineHeight'     => array(),
				'letterSpacing'  => array(),
			),
			'textColor'  => '#6b7280',
		),
	),
	'style_verticalAlignment' => array(
		'type'    => 'object',
		'default' => array(
			'verticalAlignment' => 'middle',
		),
	),
	'style_arrowAndDots' => array(
		'type'    => 'object',
		'default' => array(
			'arrowSize'       => '1.25rem',
			'border'          => array(
				'mainSettings' => array(
					'style' => 'solid',
					'width' => '1px',
					'color' => '#d1d5db',
				),
				'hoverColor'   => '#6b7280',
				'radius'       => array(
					'Desktop' => '99px',
					'Tablet'  => '0',
					'Mobile'  => '0',
				),
			),
			'arrowDistance'   => array( 'Desktop' => '0px' ),
			'dotsMarginTop'   => array( 'Desktop' => '0px' ),
			'color'           => '#374151',
			'backgroundColor' => '#fff',
		),
	),
	'style_backgroundAndBorder' => array(
		'type'    => 'object',
		'default' => array(
			'background' => array(
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
						'mediaSrcSet' => null,
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
			'border'     => array(
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
	'style_dimension' => array(
		'type'    => 'object',
		'default' => array(
			'padding' => array(
				'Desktop' => array(
					'top'    => '1rem',
					'left'   => '1rem',
					'right'  => '1rem',
					'bottom' => '1rem',
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
	'advance_responsiveCondition' => array(
		'type'    => 'object',
		'default' => array(
			'isHiddenOnDesktop' => false,
			'isHiddenOnTablet'  => false,
			'isHiddenOnMobile'  => false,
		),
	),
	'advance_zIndex' => array(
		'type'    => 'object',
		'default' => array(
			'Desktop' => '',
		),
	),
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
