<?php

//============================================================================================================================================
// START REGISTER GUTENBERG BLOCKS
//======================================================================================================================================
require BCB_PATH . 'includes/wcb-render-callback-for-block-posts-grid.php';
require BCB_PATH . 'includes/wcb-render-callback-for-block-products.php';
require BCB_PATH . 'includes/wcb-ajax-for-block-form.php';
// 

add_action('init', 'bcb_create_blocks_gutenberg_init');
if (!function_exists("bcb_create_blocks_gutenberg_init")) {
    function bcb_create_blocks_gutenberg_init()
    {
        $bcb_blocks_enable_disable = get_option('bcb_blocks_enable_disable_options') ?? [];

        // common - not deactive
        register_block_type(
            BCB_BUILD_PATH . '/block-common-css',
            []
        );
        register_block_type(
            BCB_BUILD_PATH . '/____toolbar-patterns',
            []
        );
        register_block_type(
            BCB_BUILD_PATH . '/block-container',
            [
                "render_callback"     => "bcb_block_container__renderCallback",
                "ancestor"     => (($bcb_blocks_enable_disable['wcb/container'] ?? "") !== 'disabled') ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );
        // common - not deactive

        if (defined('WC_PLUGIN_FILE')) :
            register_block_type(
                BCB_BUILD_PATH . '/block-products',
                [
                    'attributes'      => array(
                        'uniqueId'    => array(
                            'type'      => 'string',
                            'default'   => '',
                        ),
                        'general_sortingAndFiltering' => array(
                            'type'      => 'object',
                        ),
                        'general_content' => array(
                            'type'      => 'object',
                        ),
                        'general_featuredImage' => array(
                            'type'      => 'object',
                        ),
                        'general_addToCartBtn' => array(
                            'type'      => 'object',
                        ),
                        'general_pagination' => array(
                            'type'      => 'object',
                        ),
                        'style_title' => array(
                            'type'      => 'object',
                        ),
                        'style_featuredImage' => array(
                            'type'      => 'object',
                        ),
                        'style_price' => array(
                            'type'      => 'object',
                        ),
                        'style_layout' => array(
                            'type'      => 'object',
                        ),
                        'style_addToCardBtn' => array(
                            'type'      => 'object',
                        ),
                        'style_pagination' => array(
                            'type'      => 'object',
                        ),
                        'style_saleBadge' => array(
                            'type'      => 'object',
                        ),
                        'style_border' => array(
                            'type'      => 'object',
                        ),
                        'style_rating' => array(
                            'type'      => 'object',
                        ),
                        'style_category' => array(
                            'type'      => 'object',
                        ),
                        'advance_responsiveCondition' => array(
                            'type'      => 'object',
                        ),
                        'advance_zIndex' => array(
                            'type'      => 'object',
                        ),
                        'advance_motionEffect' => array(
                            'type'      => 'object',
                        ),

                    ),
                    "render_callback"     => "bcb_block_products__renderCallback",
                    "ancestor"            => (($bcb_blocks_enable_disable['wcb/products'] ?? "") !== 'disabled') ? null : BCB_UNIQUE_NAME,
                    "view_script_handles" => []
                ]
            );
        endif;

        register_block_type(
            BCB_BUILD_PATH . '/block-heading',
            [
                "render_callback"     => "bcb_block_heading__renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/heading'] ?? "") !== 'disabled') ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BCB_BUILD_PATH . '/block-posts-grid',
            [
                'attributes'      => array(
                    'uniqueId'    => array(
                        'type'      => 'string',
                        'default'   => '',
                    ),
                    'general_sortingAndFiltering' => array(
                        'type'      => 'object',
                    ),
                    'general_postContent' => array(
                        'type'      => 'object',
                    ),
                    'general_postMeta' => array(
                        'type'      => 'object',
                    ),
                    'general_postFeaturedImage' => array(
                        'type'      => 'object',
                    ),
                    'general_readmoreLink' => array(
                        'type'      => 'object',
                    ),
                    'general_pagination' => array(
                        'type'      => 'object',
                    ),
                    'style_layout' => array(
                        'type'      => 'object',
                    ),
                    'style_title' => array(
                        'type'      => 'object',
                    ),
                    'style_excerpt' => array(
                        'type'      => 'object',
                    ),
                    'style_taxonomy' => array(
                        'type'      => 'object',
                    ),
                    'style_meta' => array(
                        'type'      => 'object',
                    ),
                    'style_readmoreLink' => array(
                        'type'      => 'object',
                    ),
                    'style_pagination' => array(
                        'type'      => 'object',
                    ),
                    'style_featuredImage' => array(
                        'type'      => 'object',
                    ),
                    'style_border' => array(
                        'type'      => 'object',
                    ),
                    'style_boxShadow' => array(
                        'type'      => 'object',
                    ),
                    'advance_responsiveCondition' => array(
                        'type'      => 'object',
                    ),
                    'advance_zIndex' => array(
                        'type'      => 'object',
                    ),
                    'advance_motionEffect' => array(
                        'type'      => 'object',
                    ),

                ),
                "render_callback"     => "bcb_block_posts_grid__renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/posts-grid'] ?? "") !== 'disabled') ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []

            ]
        );

        // FORM
        register_block_type(
            BCB_BUILD_PATH . '/block-form',
            [
                "render_callback"     => "bcb_block_form__renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/form'] ?? "") !== 'disabled') ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        // FORM CHILD BLOCKS
        register_block_type(
            BCB_BUILD_PATH . '/block-input',
            []
        );
        register_block_type(
            BCB_BUILD_PATH . '/block-email',
            []
        );
        register_block_type(
            BCB_BUILD_PATH . '/block-phone',
            []
        );
        register_block_type(
            BCB_BUILD_PATH . '/block-textarea',
            []
        );
        register_block_type(
            BCB_BUILD_PATH . '/block-checkbox',
            []
        );
        register_block_type(
            BCB_BUILD_PATH . '/block-radio',
            []
        );
        register_block_type(
            BCB_BUILD_PATH . '/block-url',
            []
        );
        register_block_type(
            BCB_BUILD_PATH . '/block-select',
            []
        );
        register_block_type(
            BCB_BUILD_PATH . '/block-toggle',
            []
        );
        register_block_type(
            BCB_BUILD_PATH . '/block-date',
            []
        );
        register_block_type(
            BCB_BUILD_PATH . '/block-accept',
            []
        );
        register_block_type(
            BCB_BUILD_PATH . '/block-hidden',
            []
        );
        // END FORM CHILD BLOCKS

        // 
        register_block_type(
            BCB_BUILD_PATH . '/block-testimonials',
            [
                "render_callback"     => "bcb_block_testimonials__renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/testimonials'] ?? "") !== 'disabled') ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BCB_BUILD_PATH . '/block-buttons',
            [
                "render_callback"     => "bcb_block_buttons__renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/buttons'] ?? "") !== 'disabled') ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );
        // BUTTON CHILD
        register_block_type(
            BCB_BUILD_PATH . '/block-button',
            [
                "render_callback"     => "bcb_block_button__renderCallback",
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BCB_BUILD_PATH . '/block-cta',
            [
                "render_callback"     => "bcb_block_cta_renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/cta'] ?? "") !== 'disabled') ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BCB_BUILD_PATH . '/block-faq',
            [
                "render_callback"     => "bcb_block_faq_renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/faq'] ?? "") !== 'disabled')  ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );
        // FAQ CHILD
        register_block_type(
            BCB_BUILD_PATH . '/block-faq-child',
            [
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BCB_BUILD_PATH . '/block-team',
            [
                "render_callback"     => "bcb_block_team_renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/team'] ?? "") !== 'disabled')  ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BCB_BUILD_PATH . '/block-icon-box',
            [
                "render_callback"     => "bcb_block_icon_box_renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/icon-box'] ?? "") !== 'disabled')  ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BCB_BUILD_PATH . '/block-image',
            [
                "render_callback"     => "bcb_block_image_renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/image'] ?? "") !== 'disabled')  ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BCB_BUILD_PATH . '/block-map',
            [
                "render_callback"     => "bcb_block_map_renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/map'] ?? "") !== 'disabled')  ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        // tabs blocks
        register_block_type(
            BCB_BUILD_PATH . '/block-tabs',
            [
                "render_callback"     => "bcb_block_tabs_renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/tabs'] ?? "") !== 'disabled')  ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );
        register_block_type(
            BCB_BUILD_PATH . '/block-tab-child',
            [
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BCB_BUILD_PATH . '/block-slider',
            [
                "render_callback"     => "bcb_block_slider_renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/slider'] ?? "") !== 'disabled')  ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );
 
        // SLIDER CHILD
        register_block_type(
            BCB_BUILD_PATH . '/block-slider-child',
            [
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BCB_BUILD_PATH . '/block-countdown',
            [
                "render_callback"     => "bcb_block_countdown_renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/countdown'] ?? "") !== 'disabled') ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BCB_BUILD_PATH . '/block-counter',
            [
                "render_callback"     => "bcb_block_counter_renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/counter'] ?? "") !== 'disabled') ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        register_block_type(
            BCB_BUILD_PATH . '/block-icon-list',
            [
                "render_callback"     => "bcb_block_icon_list_renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/icon-list'] ?? "") !== 'disabled')  ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );

        // ICON CHILD
        register_block_type(
            BCB_BUILD_PATH . '/block-icon-child',
            [
                "render_callback"     => "bcb_block_icon_renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/icon'] ?? "") !== 'disabled')  ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );
        
        // ICON BLOCK
        register_block_type(
            BCB_BUILD_PATH . '/block-icon',
            [
                "render_callback"     => "bcb_block_icon_renderCallback",
                "ancestor"              => (($bcb_blocks_enable_disable['wcb/icon'] ?? "") !== 'disabled') ? null : BCB_UNIQUE_NAME,
                "view_script_handles" => []
            ]
        );
    }
}
