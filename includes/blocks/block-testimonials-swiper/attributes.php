<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Testimonials Swiper block.
 * Mirrors the TypeScript defaults from src/block-testimonials-swiper/attributes.ts
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
	// testimonials — TESTIMONIAL_ITEM_DEMO[]
	// =================================================================
	'testimonials' => array(
		'type'    => 'array',
		'default' => array(
			array(
				'name'        => 'Drink Water',
				'companyName' => 'CEO of Meta',
				'content'     => 'I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!',
			),
			array(
				'name'        => 'Drink Water',
				'companyName' => 'CEO of Meta',
				'content'     => 'I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!',
			),
			array(
				'name'        => 'Drink Water',
				'companyName' => 'CEO of Meta',
				'content'     => 'I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!',
			),
		),
	),
	
	// =================================================================
	// general_general — WCB_TESTIMONIALS_PANEL_GENERAL_DEMO
	// =================================================================
	'general_general' => array(
		'type'    => 'object',
		'default' => array(
			'textAlignment'        => array( 'Desktop' => 'center' ),
			'numberofTestimonials' => 3,
			'columns'              => array( 'Desktop' => 1, 'Tablet' => 1, 'Mobile' => 1 ),
			'colGap'               => array( 'Desktop' => '1rem' ),
		),
	),
	
	// =================================================================
	// general_images — WCB_TESTIMONIALS_PANEL_IMAGES_DEMO
	// =================================================================
	'general_images' => array(
		'type'    => 'object',
		'default' => array(
			'images'        => array(),
			'imageSize'     => 'thumbnail',
			'isShowImage'   => true,
			'imagePosition' => 'bottom',
		),
	),
	
	// =================================================================
	// general_rating — WCB_TESTIMONIALS_PANEL_RATING_DEMO
	// =================================================================
	'general_rating' => array(
		'type'    => 'object',
		'default' => array(
			'ratings'        => array( 5, 3, 4 ),
			'isShowRating'   => true,
			'ratingPosition' => 'top',
		),
	),
	
	// =================================================================
	// general_carousel — WCB_TESTIMONIALS_PANEL_CAROUSEL_DEMO
	// =================================================================
	'general_carousel' => array(
		'type'    => 'object',
		'default' => array(
			'animationDuration' => 500,
			'autoplaySpeed'     => 3000,
			'hoverpause'        => true,
			'isAutoPlay'        => true,
			'rewind'            => true,
			'adaptiveHeight'    => true,
			'showArrowsDots'    => 'Both',
		),
	),
	
	// =================================================================
	// style_name — WCB_TESTIMONIALS_PANEL_STYLE_NAME_DEMO
	// =================================================================
	'style_name' => array(
		'type'    => 'object',
		'default' => array(
			'typography'   => array(
				'fontSizes'      => array( 'Desktop' => '' ),
				'appearance'     => array(
					'id'    => '1',
					'name'  => 'Default',
					'value' => 'Default',
					'style' => array(
						'fontWeight' => 500,
						'fontStyle'  => 'normal',
					),
				),
				'textDecoration' => '',
				'textTransform'  => '',
				'lineHeight'     => array( 'Desktop' => '' ),
				'letterSpacing'  => array( 'Desktop' => '' ),
				'fontFamily'     => '',
			),
			'textColor'    => '',
			'marginBottom' => array( 'Desktop' => '0.5rem' ),
		),
	),
	
	// =================================================================
	// style_content — WCB_TESTIMONIALS_PANEL_STYLE_CONTENT_DEMO
	// =================================================================
	'style_content' => array(
		'type'    => 'object',
		'default' => array(
			'typography'   => array(
				'fontSizes'      => array( 'Desktop' => '' ),
				'appearance'     => array(
					'id'    => '1',
					'name'  => 'Default',
					'value' => 'Default',
					'style' => array(
						'fontWeight' => 'normal',
						'fontStyle'  => 'normal',
					),
				),
				'textDecoration' => '',
				'textTransform'  => '',
				'lineHeight'     => array( 'Desktop' => 1.75 ),
				'letterSpacing'  => array( 'Desktop' => '' ),
				'fontFamily'     => '',
			),
			'textColor'    => '',
			'marginBottom' => array( 'Desktop' => '1.5rem' ),
		),
	),
	
	// =================================================================
	// style_company — WCB_TESTIMONIALS_PANEL_STYLE_COMPANY_DEMO
	// =================================================================
	'style_company' => array(
		'type'    => 'object',
		'default' => array(
			'typography' => array(
				'fontSizes'      => array( 'Desktop' => '' ),
				'appearance'     => array(
					'id'    => '1',
					'name'  => 'Default',
					'value' => 'Default',
					'style' => array(
						'fontWeight' => 'normal',
						'fontStyle'  => 'normal',
					),
				),
				'textDecoration' => '',
				'textTransform'  => '',
				'lineHeight'     => array( 'Desktop' => '' ),
				'letterSpacing'  => array( 'Desktop' => '' ),
				'fontFamily'     => '',
			),
			'textColor'  => '#6b7280',
		),
	),
	
	// =================================================================
	// style_image — WCB_TESTIMONIALS_PANEL_STYLE_IMAGE_DEMO
	// =================================================================
	'style_image' => array(
		'type'    => 'object',
		'default' => array(
			'padding'   => array(
				'Desktop' => array(
					'top'    => '1rem',
					'left'   => '1rem',
					'right'  => '1rem',
					'bottom' => '1rem',
				),
			),
			'imageSize' => array( 'Desktop' => '3.5rem' ),
			'radius'    => array(
				'Desktop' => '100px',
				'Tablet'  => '100px',
				'Mobile'  => '100px',
			),
			'objectFit' => 'cover',
		),
	),
	
	// =================================================================
	// style_rating — WCB_TESTIMONIALS_PANEL_STYLE_RATING_DEMO
	// =================================================================
	'style_rating' => array(
		'type'    => 'object',
		'default' => array(
			'color'        => '#FF8B00',
			'marginBottom' => array( 'Desktop' => '0.25rem' ),
		),
	),
	
	// =================================================================
	// style_arrowAndDots — WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO
	// =================================================================
	'style_arrowAndDots' => array(
		'type'    => 'object',
		'default' => array(
			'arrowSize'     => '1.25rem',
			'border'        => array(
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
			'dotsMarginTop' => array( 'Desktop' => '8px' ),
			'color'         => '#374151',
		),
	),
	
	// =================================================================
	// style_backgroundAndBorder — WCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER_DEMO
	// =================================================================
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
	
	// =================================================================
	// style_dimension — WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION_DEMO
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
