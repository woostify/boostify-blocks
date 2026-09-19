<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Team member block.
 * Mirrors the TypeScript defaults from src/block-team/attributes.ts
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
	// heading
	// =================================================================
	'heading' => array(
		'type'    => 'string',
		'default' => 'John Doe',
	),
	
	// =================================================================
	// designation
	// =================================================================
	'designation' => array(
		'type'    => 'string',
		'default' => 'Designation',
	),
	
	// =================================================================
	// description
	// =================================================================
	'description' => array(
		'type'    => 'string',
		'default' => 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	),
	
	// =================================================================
	// general_layout — WCB_TEAM_PANEL_LAYOUT_DEMO
	// =================================================================
	'general_layout' => array(
		'type'    => 'object',
		'default' => array(
			'textAlignment' => array(
				'Desktop' => 'center',
			),
			'headingTag'    => 'h3',
		),
	),
	
	// =================================================================
	// general_image — WCB_TEAM_PANEL_IMAGES_DEMO
	// =================================================================
	'general_image' => array(
		'type'    => 'object',
		'default' => array(
			'image'          => array(
				'mediaId'  => 0,
				'mediaUrl' => '',
			),
			'imageSize'      => 'thumbnail',
			'isShowImage'    => true,
			'imagePosition'  => 'top',
			'stackOn'        => 'none',
			'imageAlignSelf' => 'center',
		),
	),
	
	// =================================================================
	// general_socials — WCB_TEAM_PANEL_SOCIALS_DEMO
	// =================================================================
	'general_socials' => array(
		'type'    => 'object',
		'default' => array(
			'enableSocials'    => true,
			'openLinkInNewTab' => false,
			'numberOfItems'    => 4,
			'socials'          => array(
				array(
					'url'  => '#',
					'icon' => array(
						'type'      => 'icon',
						'iconName'  => 'lni-twitter-original',
						'imageData' => array(
							'mediaId'  => 0,
							'mediaUrl' => '',
						),
						'svgCode'   => '',
					),
				),
				array(
					'url'  => '#',
					'icon' => array(
						'type'      => 'icon',
						'iconName'  => 'lni-facebook-oval',
						'imageData' => array(
							'mediaId'  => 0,
							'mediaUrl' => '',
						),
						'svgCode'   => '',
					),
				),
				array(
					'url'  => '#',
					'icon' => array(
						'type'      => 'icon',
						'iconName'  => 'lni-instagram-filled',
						'imageData' => array(
							'mediaId'  => 0,
							'mediaUrl' => '',
						),
						'svgCode'   => '',
					),
				),
				array(
					'url'  => '#',
					'icon' => array(
						'type'      => 'icon',
						'iconName'  => 'lni-linkedin-original',
						'imageData' => array(
							'mediaId'  => 0,
							'mediaUrl' => '',
						),
						'svgCode'   => '',
					),
				),
			),
		),
	),
	
	// =================================================================
	// style_title — WCB_TEAM_PANEL_STYLE_TITLE_DEMO
	// =================================================================
	'style_title' => array(
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
				'Desktop' => '0.5rem',
			),
		),
	),
	
	// =================================================================
	// style_desination — WCB_TEAM_PANEL_STYLE_DESIGNATION_DEMO
	// =================================================================
	'style_desination' => array(
		'type'    => 'object',
		'default' => array(
			'typography'   => array(
				'fontSizes'      => array(
					'Desktop' => '1rem',
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
			'textColor'    => '#6b7280',
			'marginBottom' => array(
				'Desktop' => '1.125rem',
			),
		),
	),
	
	// =================================================================
	// style_description — WCB_TEAM_PANEL_STYLE_DESCRIPTION_DEMO
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
				'Desktop' => '1rem',
			),
		),
	),
	
	// =================================================================
	// style_socialIcons — WCB_TEAM_PANEL_STYLE_SOCIALICONS_DEMO
	// =================================================================
	'style_socialIcons' => array(
		'type'    => 'object',
		'default' => array(
			'color'       => '#334155',
			'hoverColor'  => '',
			'iconSize'    => array(
				'Desktop' => '1.25rem',
			),
			'iconSpacing' => array(
				'Desktop' => '1.25rem',
			),
		),
	),
	
	// =================================================================
	// style_image — WCB_TEAM_PANEL_STYLE_IMAGE_DEMO
	// =================================================================
	'style_image' => array(
		'type'    => 'object',
		'default' => array(
			'margin'    => array(
				'Desktop' => array(
					'top'    => '1rem',
					'left'   => '1rem',
					'right'  => '1rem',
					'bottom' => '1rem',
				),
			),
			'imageSize' => array(
				'Desktop' => '6.25rem',
			),
			'border'    => array(
				'mainSettings' => array(
					'width' => '',
					'style' => 'none',
					'color' => '',
				),
				'hoverColor'   => '',
				'radius'       => array(
					'Desktop' => array(
						'topLeft'     => '',
						'topRight'    => '',
						'bottomRight' => '',
						'bottomLeft'  => '',
					),
				),
			),
		),
	),
	
	// =================================================================
	// style_dimension — WCB_TEAM_PANEL_STYLE_DIMENSION_DEMO
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
