<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Posts grid block.
 * Mirrors the TypeScript defaults from src/block-posts-grid/attributes.ts
 * and all sub-panel *_DEMO constants.
 *
 * Gutenberg omits attributes equal to their JS defaults when saving block
 * markup, so without these mirrors the server-side parser sees EMPTY panels
 * for freshly inserted blocks and the generated CSS misses base styles.
 */

// Shared typography default — TYPOGRAPHY_CONTROL_DEMO
$typographyDefault = array(
	'fontSizes'      => array( 'Desktop' => '' ),
	'appearance'     => array(
		'key'   => 'default',
		'name'  => 'Default',
		'style' => array(),
	),
	'textDecoration' => '',
	'textTransform'  => '',
	'lineHeight'     => array(),
	'letterSpacing'  => array(),
	'fontFamily'     => '',
);

// Shared border default — MY_BORDER_CONTROL_DEMO
$borderDefault = array(
	'mainSettings' => null,
	'hoverColor'   => '',
	'radius'       => array(
		'Desktop' => '0',
		'Tablet'  => '0',
		'Mobile'  => '0',
	),
);

// Shared box shadow default — MY_BOX_SHADOW_CONTROL_DEMO
$boxShadowDefault = array(
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
);

return array(
	// =================================================================
	// uniqueId
	// =================================================================
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),
	
	// =================================================================
	// general_sortingAndFiltering — WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO
	// =================================================================
	'general_sortingAndFiltering' => array(
		'type'    => 'object',
		'default' => array(
			'emptyMessage'   => 'No post found!',
			'numberOfColumn' => array( 'Desktop' => 3 ),
			'isEqualHeight'  => true,
		),
	),
	
	// =================================================================
	// general_postContent — WCB_POST_GRID_PANEL_POST_CONTENT_DEMO
	// =================================================================
	'general_postContent' => array(
		'type'    => 'object',
		'default' => array(
			'isShowPostContent'  => true,
			'contentType'        => 'excerpt',
			'excerptWordsNumber' => 10,
		),
	),
	
	// =================================================================
	// general_postMeta — WCB_POST_GRID_PANEL_POST_META_DEMO
	// =================================================================
	'general_postMeta' => array(
		'type'    => 'object',
		'default' => array(
			'isShowTitle'        => true,
			'titleHtmlTag'       => 'h4',
			'isShowComment'      => true,
			'isShowAuthor'       => true,
			'isShowDate'         => true,
			'isShowTaxonomy'     => true,
			'isShowMetaIcon'     => true,
			'isShowTaxonomyIcon' => false,
			'taxonomyPosition'   => 'Below featured image',
			'taxonomyDivider'    => ', ',
			'taxonomyStyle'      => 'Highlighted',
		),
	),
	
	// =================================================================
	// general_postFeaturedImage — WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE_DEMO
	// =================================================================
	'general_postFeaturedImage' => array(
		'type'    => 'object',
		'default' => array(
			'isShowFeaturedImage'   => true,
			'featuredImageSize'     => 'large',
			'featuredImagePosition' => 'top',
			'linkCompleteBox'       => false,
			'imageRatio'            => '16/9',
			'customHeight'          => array( 'Desktop' => '220px' ),
			'imageFit'              => 'cover',
		),
	),
	
	// =================================================================
	// general_readmoreLink — WCB_POST_GRID_PANEL_READ_MORE_LINK_DEMO
	// =================================================================
	'general_readmoreLink' => array(
		'type'    => 'object',
		'default' => array(
			'isShowReadmore' => true,
			'isOpenInNewTab' => false,
			'text'           => 'Read more',
		),
	),
	
	// =================================================================
	// general_pagination — WCB_POST_GRID_PANEL_PAGINATION_DEMO
	// =================================================================
	'general_pagination' => array(
		'type'    => 'object',
		'default' => array(
			'isShowPagination' => true,
			'pageLimit'        => 0,
			'previousText'     => '',
			'nextText'         => '',
			'iconName'         => 'arrow',
		),
	),
	
	// =================================================================
	// style_layout — WCB_POST_GRID_PANEL_STYLE_LAYOUT_DEMO
	// =================================================================
	'style_layout' => array(
		'type'    => 'object',
		'default' => array(
			'colunmGap'       => array( 'Desktop' => '1.5rem' ),
			'rowGap'          => array( 'Desktop' => '1.5rem' ),
			'textAlignment'   => 'left',
			'backgroundColor' => '#fafafa',
			'padding'         => array(
				'Desktop' => array(
					'top'    => '1rem',
					'right'  => '1rem',
					'bottom' => '1rem',
					'left'   => '1rem',
				),
			),
		),
	),
	
	// =================================================================
	// style_title — WCB_POST_GRID_PANEL_STYLE_TITLE_DEMO
	// =================================================================
	'style_title' => array(
		'type'    => 'object',
		'default' => array(
			'typography'     => $typographyDefault,
			'textColor'      => '#171717',
			'textHoverColor' => '#0284c7',
			'marginBottom'   => array( 'Desktop' => '0.5rem' ),
		),
	),
	
	// =================================================================
	// style_excerpt — WCB_POST_GRID_PANEL_STYLE_EXCERPT_DEMO
	// =================================================================
	'style_excerpt' => array(
		'type'    => 'object',
		'default' => array(
			'typography'   => $typographyDefault,
			'textColor'    => '#737373',
			'marginBottom' => array( 'Desktop' => '1rem' ),
		),
	),
	
	// =================================================================
	// style_taxonomy — WCB_POST_GRID_PANEL_STYLE_TAXONOMY_DEMO
	// =================================================================
	'style_taxonomy' => array(
		'type'    => 'object',
		'default' => array(
			'typography'      => array(
				'fontSizes'      => array( 'Desktop' => '12px' ),
				'appearance'     => array(
					'key'   => 'default',
					'name'  => 'Default',
					'style' => array( 'fontWeight' => '500' ),
				),
				'textDecoration' => 'none',
				'textTransform'  => '',
				'lineHeight'     => array(),
				'letterSpacing'  => array(),
				'fontFamily'     => '',
			),
			'textColor'       => '#0c4a6e',
			'backgroundColor' => '#f0f9ff',
			'marginBottom'    => array( 'Desktop' => '0.5rem' ),
		),
	),
	
	// =================================================================
	// style_meta — WCB_POST_GRID_PANEL_STYLE_META_DEMO
	// =================================================================
	'style_meta' => array(
		'type'    => 'object',
		'default' => array(
			'authorTypography' => array(
				'fontSizes'      => array( 'Desktop' => '14px' ),
				'appearance'     => array(
					'key'   => 'default',
					'name'  => 'Default',
					'style' => array( 'fontWeight' => '500' ),
				),
				'textDecoration' => 'none',
				'textTransform'  => '',
				'lineHeight'     => array(),
				'letterSpacing'  => array(),
				'fontFamily'     => '',
			),
			'dateTypography'   => array(
				'fontSizes'      => array( 'Desktop' => '14px' ),
				'appearance'     => array(
					'key'   => 'default',
					'name'  => 'Default',
					'style' => array(),
				),
				'textDecoration' => '',
				'textTransform'  => '',
				'lineHeight'     => array(),
				'letterSpacing'  => array(),
				'fontFamily'     => '',
			),
			'authorColor'      => '#171717',
			'dateTextColor'    => '#a3a3a3',
			'marginBottom'     => array( 'Desktop' => '2rem' ),
		),
	),
	
	// =================================================================
	// style_readmoreLink — WCB_POST_GRID_PANEL_STYLE_READMORE_LINK_DEMO
	// =================================================================
	'style_readmoreLink' => array(
		'type'    => 'object',
		'default' => array(
			'colorAndBackgroundColor' => array(
				'Normal' => array(
					'color'           => '#fff',
					'backgroundColor' => '#1346af',
				),
				'Hover'  => array(
					'color'           => '#fff',
					'backgroundColor' => '#3a3a3a',
				),
			),
			'typography'              => $typographyDefault,
			'padding'                 => array(
				'Desktop' => array(
					'top'    => '10px',
					'right'  => '20px',
					'bottom' => '10px',
					'left'   => '20px',
				),
			),
			'border'                  => $borderDefault,
			'marginBottom'            => array( 'Desktop' => '0' ),
		),
	),
	
	// =================================================================
	// style_pagination — WCB_POST_GRID_PANEL_STYLE_PAGINATION_DEMO
	// =================================================================
	'style_pagination' => array(
		'type'    => 'object',
		'default' => array(
			'mainStyle'      => array(
				'Normal' => array(
					'color'           => '#171717',
					'backgroundColor' => '#fff',
					'border'          => array(
						'mainSettings' => array(
							'color' => '#cbd5e1',
							'style' => 'solid',
							'width' => '1px',
						),
						'hoverColor'   => '',
						'radius'       => array(
							'Desktop' => '0',
							'Tablet'  => '0',
							'Mobile'  => '0',
						),
					),
				),
				'Active' => array(
					'color'           => '#fff',
					'backgroundColor' => '#0ea5e9',
					'border'          => array(
						'mainSettings' => array(
							'color' => '#0ea5e9',
							'style' => 'solid',
							'width' => '1px',
						),
						'hoverColor'   => '',
						'radius'       => array(
							'Desktop' => '0',
							'Tablet'  => '0',
							'Mobile'  => '0',
						),
					),
				),
			),
			'marginTop'      => array( 'Desktop' => '2rem' ),
			'justifyContent' => 'left',
		),
	),
	
	// =================================================================
	// style_featuredImage — WCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE_DEMO
	// =================================================================
	'style_featuredImage' => array(
		'type'    => 'object',
		'default' => array(
			'marginBottom'      => array( 'Desktop' => '0' ),
			'backgroundOverlay' => '#FFFFFFE6',
			'border'            => $borderDefault,
		),
	),
	
	// =================================================================
	// style_border — MY_BORDER_CONTROL_DEMO
	// =================================================================
	'style_border' => array(
		'type'    => 'object',
		'default' => $borderDefault,
	),
	
	// =================================================================
	// style_boxShadow — MY_BOX_SHADOW_CONTROL_DEMO
	// =================================================================
	'style_boxShadow' => array(
		'type'    => 'object',
		'default' => $boxShadowDefault,
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
