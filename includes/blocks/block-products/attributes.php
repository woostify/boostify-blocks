<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default attributes for the Products block.
 * Mirrors the TypeScript defaults from src/block-products/attributes.ts
 * and all sub-panel *_DEMO constants.
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

// Shared typography product default — TYPOGRAPHY_CONTROL_PRODUCT_DEMO
$typographyProductDefault = array(
	'fontSizes'      => array( 'Desktop' => '', 'Tablet' => '', 'Mobile' => '' ),
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

return array(
	// =========================================================================
	'uniqueId' => array(
		'type'    => 'string',
		'default' => '',
	),

	// =========================================================================
	// general_sortingAndFiltering — WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO
	// =========================================================================
	'general_sortingAndFiltering' => array(
		'type'    => 'object',
		'default' => array(
			'emptyMessage'  => 'No post found!',
			'numberOfItems' => 10,
			'isOnSale'      => false,
			'stockStatus'   => array(),
			'categories'    => array(),
			'tags'          => array(),
			'attributes'    => array(),
			'keyword'       => '',
			'catOperator'   => 'any',
			'tagOperator'   => 'any',
			'attrOperator'  => 'any',
			'order'         => 'DESC',
			'orderBy'       => 'date ID',
		),
	),

	// =========================================================================
	// general_layout — WCB_PRODUCTS_PANEL_GENERAL_LAYOUT_DEMO
	// =========================================================================
	'general_layout' => array(
		'type'    => 'object',
		'default' => array(
			'isCustomizerGeneralLayout' => false,
		),
	),

	// =========================================================================
	// general_content — WCB_PRODUCTS_PANEL_COTENT_DEMO
	// =========================================================================
	'general_content' => array(
		'type'    => 'object',
		'default' => array(
			'isShowPrice'                 => true,
			'isShowRating'                => true,
			'isShowSaleBadge'             => true,
			'isShowOutOfStock'            => true,
			'isShowSKU'                   => true,
			'isShowCategory'              => true,
			'showSaleBadgeDiscoutPercent' => false,
			'isShowTitle'                 => true,
			'titleHtmlTag'                => 'h4',
			'saleBadgePosition'           => 'Inside image',
			'taxonomyStyle'               => 'Highlighted',
		),
	),

	// =========================================================================
	// general_featuredImage — WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO
	// =========================================================================
	'general_featuredImage' => array(
		'type'    => 'object',
		'default' => array(
			'isShowFeaturedImage'   => true,
			'featuredImageSize'     => 'large',
			'featuredImagePosition' => 'top',
			'linkCompleteBox'       => false,
			'hoverType'             => 'none',
		),
	),

	// =========================================================================
	// general_addToCartBtn — WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO
	// =========================================================================
	'general_addToCartBtn' => array(
		'type'    => 'object',
		'default' => array(
			'isShowButton'   => true,
			'position'       => 'bottom',
			'isShowQuantity' => true,
			'isShowIcon'     => true,
		),
	),

	// =========================================================================
	// general_pagination — WCB_PRODUCTS_PANEL_PAGINATION_DEMO
	// =========================================================================
	'general_pagination' => array(
		'type'    => 'object',
		'default' => array(
			'isShowPagination' => false,
			'pageLimit'        => 0,
			'previousText'     => '',
			'nextText'         => '',
			'iconName'         => 'arrow',
		),
	),

	// =========================================================================
	// style_title — WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO
	// =========================================================================
	'style_title' => array(
		'type'    => 'object',
		'default' => array(
			'typography'   => $typographyProductDefault,
			'textColor'    => '#171717',
			'marginBottom' => array( 'Desktop' => '0.75rem' ),
		),
	),

	// =========================================================================
	// style_category — WCB_PRODUCTS_PANEL_STYLE_CATEGORY_DEMO
	// =========================================================================
	'style_category' => array(
		'type'    => 'object',
		'default' => array(
			'typography'   => $typographyDefault,
			'textColor'    => '#171717',
			'marginBottom' => array( 'Desktop' => '0.75rem' ),
		),
	),

	// =========================================================================
	// style_featuredImage — WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO
	// =========================================================================
	'style_featuredImage' => array(
		'type'    => 'object',
		'default' => array(
			'marginBottom'      => array( 'Desktop' => '0.75rem' ),
			'backgroundOverlay' => '#FFFFFFE6',
			'border'            => $borderDefault,
		),
	),

	// =========================================================================
	// style_layout — WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO
	// =========================================================================
	'style_layout' => array(
		'type'    => 'object',
		'default' => array(
			'colunmGap'     => array( 'Desktop' => '1.5rem' ),
			'rowGap'        => array( 'Desktop' => '1.5rem' ),
			'textAlignment' => 'center',
			'backgroundColor' => '',
			'padding'       => array(
				'Desktop' => array(
					'bottom' => '',
					'top'    => '',
					'left'   => '',
					'right'  => '',
				),
			),
			'numberOfColumn' => array(
				'Desktop' => 3,
				'Tablet'  => 2,
				'Mobile'  => 2,
			),
			'peekAfter' => array(
				'Desktop' => '2rem',
				'Tablet'  => '2rem',
				'Mobile'  => '2rem',
			),
			'swithToScrollSnapX' => 'None',
			'isEqualHeight'      => true,
		),
	),

	// =========================================================================
	// style_addToCardBtn — WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO
	// =========================================================================
	'style_addToCardBtn' => array(
		'type'    => 'object',
		'default' => array(
			'colorAndBackgroundColor' => array(
				'Normal' => array(
					'color'           => '#fff',
					'backgroundColor' => '#1346af',
				),
				'Hover' => array(
					'color'           => '#fff',
					'backgroundColor' => '#3a3a3a',
				),
			),
			'typography' => $typographyDefault,
			'padding'    => array(
				'Desktop' => array(
					'top'    => '8px',
					'left'   => '16px',
					'right'  => '16px',
					'bottom' => '8px',
				),
			),
			'border'      => $borderDefault,
			'marginBottom' => array( 'Desktop' => '0' ),
		),
	),

	// =========================================================================
	// style_pagination — WCB_PRODUCTS_PANEL_STYLE_PAGINATION_DEMO
	// =========================================================================
	'style_pagination' => array(
		'type'    => 'object',
		'default' => array(
			'mainStyle' => array(
				'Normal' => array(
					'color'           => '#171717',
					'backgroundColor' => '#fff',
					'border'          => array(
						'mainSettings' => array(
							'color' => '#cbd5e1',
							'style' => 'solid',
							'width' => '1px',
						),
						'radius' => array(
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
						'radius' => array(
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

	// =========================================================================
	// style_saleBadge — WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO
	// =========================================================================
	'style_saleBadge' => array(
		'type'    => 'object',
		'default' => array(
			'typography' => array(
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
			'backgroundColor' => '#0c4a6e',
			'textColor'       => '#f0f9ff',
			'marginBottom'    => array( 'Desktop' => '0.65rem' ),
			'position'        => 'top-left',
		),
	),

	// =========================================================================
	// style_outOfStock — WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO
	// =========================================================================
	'style_outOfStock' => array(
		'type'    => 'object',
		'default' => array(
			'typography' => array(
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
			'backgroundColor' => '#cf2e2e',
			'textColor'       => '#f0f9ff',
			'marginBottom'    => array( 'Desktop' => '0.65rem' ),
			'position'        => 'top-left',
		),
	),

	// =========================================================================
	// style_border — MY_BORDER_CONTROL_DEMO
	// =========================================================================
	'style_border' => array(
		'type'    => 'object',
		'default' => $borderDefault,
	),

	// =========================================================================
	// style_price — WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO
	// =========================================================================
	'style_price' => array(
		'type'    => 'object',
		'default' => array(
			'typography'   => $typographyDefault,
			'textColor'    => '#737373',
			'marginBottom' => array( 'Desktop' => '0.75rem' ),
		),
	),

	// =========================================================================
	// style_rating — WCB_PRODUCTS_PANEL_STYLE_RATING_DEMO
	// =========================================================================
	'style_rating' => array(
		'type'    => 'object',
		'default' => array(
			'color'        => '#ffc400',
			'marginBottom' => array( 'Desktop' => '0.25rem' ),
		),
	),

	// =========================================================================
	// style_wishlistBtn — WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO
	// =========================================================================
	'style_wishlistBtn' => array(
		'type'    => 'object',
		'default' => array(
			'position'              => 'top-right',
			'style'                 => 'yith',
			'wishlist_plugin_active' => false,
		),
	),

	// =========================================================================
	// style_quickViewBtn — WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO
	// =========================================================================
	'style_quickViewBtn' => array(
		'type'    => 'object',
		'default' => array(
			'enabled'           => false,
			'position'          => 'bottom-image',
			'show_icon'         => true,
			'bg_color'          => '#ffffff',
			'text_color'        => '#000000',
			'hover_bg_color'    => '#f5f5f5',
			'hover_text_color'  => '#333333',
			'border_radius'     => 0,
			'woostify_pro_active' => false,
		),
	),

	// =========================================================================
	// style_countdownUrgency — WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO
	// =========================================================================
	'style_countdownUrgency' => array(
		'type'    => 'object',
		'default' => array(
			'position'                => 'top-right',
			'style'                   => 'default',
			'countdownUrgencyActive'  => false,
			'applyFor'                => 'all',
			'categoriesSelected'      => false,
			'productsSelected'        => false,
			'categoriesExclude'       => false,
			'productsExclude'         => false,
			'timeDuration'            => '1',
			'timeType'                => 'days',
			'message'                 => 'Hurry up! Flash Sale Ends Soon!',
			'daysLabel'               => 'DAYS',
			'hoursLabel'              => 'HOURS',
			'minutesLabel'            => 'MINS',
			'secondsLabel'            => 'SECS',
			'displayOnThumbnail'      => '0',
			'hideAfterTimeUp'         => '1',
		),
	),

	// =========================================================================
	// style_dimension — WCB_PRODUCTS_PANEL_STYLE_DIMENSION_DEMO
	// =========================================================================
	'style_dimension' => array(
		'type'    => 'object',
		'default' => array(
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

	// =========================================================================
	// advance_responsiveCondition — RESPONSIVE_CONDITON_DEMO
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
	// advance_zIndex — Z_INDEX_DEMO
	// =========================================================================
	'advance_zIndex' => array(
		'type'    => 'object',
		'default' => array(
			'Desktop' => '',
		),
	),

	// =========================================================================
	// advance_motionEffect — MY_MOTION_EFFECT_DEMO
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
