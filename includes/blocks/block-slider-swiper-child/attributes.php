<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Slider Swiper child slide block.
 * Mirrors the TypeScript defaults from src/block-slider-swiper-child/attributes.ts
 * and all sub-panel *_DEMO constants.
 */

return array(
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),
	'clientID' => array(
		'type'    => 'string',
		'default' => '',
	),
	'content' => array(
		'type'    => 'string',
		'default' => 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	),
	'name' => array(
		'type'    => 'string',
		'default' => 'Slider',
	),
	'callToAction' => array(
		'type'    => 'string',
		'default' => 'Read More',
	),
	'image' => array(
		'type'    => 'object',
		'default' => array(
			'mediaId'     => 0,
			'mediaUrl'    => '',
			'mediaSrcSet' => null,
		),
	),
	'rating' => array(
		'type'    => 'number',
		'default' => 5,
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
	'style_callToActionButton' => array(
		'type'    => 'object',
		'default' => array(
			'typographyText'   => array(
				'fontSizes'      => array( 'Desktop' => '' ),
				'appearance'     => array(
					'key'   => 'default',
					'name'  => 'Default',
					'style' => array(),
				),
				'lineHeight'     => array( 'Desktop' => '' ),
				'letterSpacing'  => array( 'Desktop' => '' ),
			),
			'colorText'        => '#fff',
			'hoverColorText'   => '#fff',
			'normalBackground' => array(
				'bgType'   => 'color',
				'color'    => '#121314',
				'gradient' => 'linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)',
			),
			'hoverBackground'  => array(
				'bgType'   => 'color',
				'color'    => '#121314',
				'gradient' => 'linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)',
			),
			'mainSettings'     => array(
				'style' => 'solid',
				'width' => '1px',
				'color' => '#121314',
			),
			'hoverColor'       => '#121314',
			'radius'           => array(
				'Desktop' => '0',
				'Tablet'  => '0',
				'Mobile'  => '0',
			),
			'padding'          => array(
				'Desktop' => array(
					'top'    => '0.4rem',
					'left'   => '0.8rem',
					'right'  => '0.8rem',
					'bottom' => '0.4rem',
				),
			),
			'margin'           => array(
				'Desktop' => array(
					'top'    => '',
					'left'   => '',
					'right'  => '',
					'bottom' => '',
				),
			),
		),
	),
	'style_image' => array(
		'type'    => 'object',
		'default' => array(
			'enableIcon'     => false,
			'icon'           => array(
				'type'     => 'icon',
				'iconName' => 'lni-checkmark-circle',
			),
			'iconPosition'   => 'top',
			'image'          => array(
				'mediaId'     => 0,
				'mediaUrl'    => '',
				'mediaSrcSet' => null,
			),
			'imageSize'      => 'thumbnail',
			'isShowImage'    => true,
			'imagePosition'  => 'above-title',
			'stackOn'        => 'none',
			'imageAlignSelf' => 'center',
			'iconColor'      => '#334155',
			'iconHoverColor' => '',
			'iconSize'       => array(
				'Desktop' => '1.5rem',
				'Tablet'  => '1.5rem',
				'Mobile'  => '1.5rem',
			),
			'iconDimensions' => array(
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
			'iconBorder'     => array(
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
						'mediaId'  => 0,
						'mediaUrl' => '',
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
		),
	),
	'style_buttonPreset' => array(
		'type'    => 'object',
		'default' => array(
			'preset'          => 'wcb-button-1',
			'enableIcon'      => false,
			'icon'            => array(
				'iconName' => 'lni-arrow-right',
			),
			'link'            => '',
			'openInNewWindow' => false,
			'iconPosition'    => 'afterTitle',
			'iconSpacing'     => array( 'Desktop' => '5px' ),
		),
	),
	'style_layoutPreset' => array(
		'type'    => 'object',
		'default' => array(
			'preset' => '',
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
	'advance_motionEffect' => array(
		'type'    => 'object',
		'default' => array(
			'animationDelay'    => 0,
			'animationDuration' => 'fast',
			'entranceAnimation' => '',
			'repeat'            => '1',
		),
	),
	'advance_zIndex' => array(
		'type'    => 'object',
		'default' => array(
			'Desktop' => '',
		),
	),
);
