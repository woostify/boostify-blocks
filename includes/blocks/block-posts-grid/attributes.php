<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Posts grid block. (Defaults mostly commented out in TS — JS handles them) block.
 * Mirrors the TypeScript defaults from src/block-posts-grid/attributes.ts
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
	// general_sortingAndFiltering — WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO
	// =================================================================
	'general_sortingAndFiltering' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_postContent — WCB_POST_GRID_PANEL_POST_CONTENT_DEMO
	// =================================================================
	'general_postContent' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_postMeta — WCB_POST_GRID_PANEL_POST_META_DEMO
	// =================================================================
	'general_postMeta' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_postFeaturedImage — WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE_DEMO
	// =================================================================
	'general_postFeaturedImage' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_readmoreLink — WCB_POST_GRID_PANEL_READ_MORE_LINK_DEMO
	// =================================================================
	'general_readmoreLink' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// general_pagination — WCB_POST_GRID_PANEL_PAGINATION_DEMO
	// =================================================================
	'general_pagination' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_layout — WCB_POST_GRID_PANEL_STYLE_LAYOUT_DEMO
	// =================================================================
	'style_layout' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_title — WCB_POST_GRID_PANEL_STYLE_TITLE_DEMO
	// =================================================================
	'style_title' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_excerpt — WCB_POST_GRID_PANEL_STYLE_EXCERPT_DEMO
	// =================================================================
	'style_excerpt' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_taxonomy — WCB_POST_GRID_PANEL_STYLE_TAXONOMY_DEMO
	// =================================================================
	'style_taxonomy' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_meta — WCB_POST_GRID_PANEL_STYLE_META_DEMO
	// =================================================================
	'style_meta' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_readmoreLink — WCB_POST_GRID_PANEL_STYLE_READMORE_LINK_DEMO
	// =================================================================
	'style_readmoreLink' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_pagination — WCB_POST_GRID_PANEL_STYLE_PAGINATION_DEMO
	// =================================================================
	'style_pagination' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_featuredImage — WCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE_DEMO
	// =================================================================
	'style_featuredImage' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_border — MY_BORDER_CONTROL_DEMO
	// =================================================================
	'style_border' => array(
		'type'    => 'object',
		'default' => array(
		),
	),
	
	// =================================================================
	// style_boxShadow — MY_BOX_SHADOW_CONTROL_DEMO
	// =================================================================
	'style_boxShadow' => array(
		'type'    => 'object',
		'default' => array(
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
