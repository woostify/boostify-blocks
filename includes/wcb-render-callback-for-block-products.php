<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Apply theme default settings to the block attributes for the products block, ensuring that any missing attributes are filled in with values from the theme customizer.
 * @param array $attributes The original block attributes that may be missing some values.
 * @param bool  $block_overrides When true (isCustomizerGeneralLayout ON), block-level attributes take priority over Customizer values; Customizer is used only as fallback.
 * @return array The modified block attributes with theme defaults applied where necessary.
 */
function boostify_blocks_block_products_apply_theme_defaults($attributes, $block_overrides = false)
{
    if (!function_exists('boostify_blocks_get_theme_defaults_data')) {
        return $attributes;
    }

    $theme = boostify_blocks_get_theme_defaults_data();

    $to_bool = function ($value, $default) {
        if ($value === null) {
            return $default;
        }
        return $value === true || $value === '1' || $value === 1 || $value === 'true';
    };

    // $block_overrides=false → Customizer wins (theme_val ?? block_val)
    // $block_overrides=true  → Block wins     (block_val ?? theme_val)
    $pick = function ($theme_val, $block_val) use ($block_overrides) {
        return $block_overrides ? ($block_val ?? $theme_val) : ($theme_val ?? $block_val);
    };

    $pick_bool = function ($theme_val, $block_val) use ($block_overrides, $to_bool) {
        return $block_overrides
            ? $to_bool($block_val, $theme_val)
            : $to_bool($theme_val, $block_val);
    };
    // Style layout
    $style_layout = $attributes['style_layout'] ?? [];
    $curr_col_desktop = $theme['product_per_row']['desktop'] ?? null;
    $curr_col_tablet  = $theme['product_per_row']['tablet'] ?? null;
    $curr_col_mobile  = $theme['product_per_row']['mobile'] ?? null;
    $is_col_edited    = !empty($style_layout['isNumberOfColumnEdited']);
    // Use block value when user explicitly edited; otherwise follow Customizer.
    if ($is_col_edited) {
        $style_layout['numberOfColumn'] = [
            'Desktop' => $style_layout['numberOfColumn']['Desktop'] ?? $curr_col_desktop,
            'Tablet'  => $style_layout['numberOfColumn']['Tablet']  ?? $curr_col_tablet,
            'Mobile'  => $style_layout['numberOfColumn']['Mobile']  ?? $curr_col_mobile,
        ];
    } else {
        $style_layout['numberOfColumn'] = [
            'Desktop' => $curr_col_desktop ?? ($style_layout['numberOfColumn']['Desktop'] ?? null),
            'Tablet'  => $curr_col_tablet  ?? ($style_layout['numberOfColumn']['Tablet']  ?? null),
            'Mobile'  => $curr_col_mobile  ?? ($style_layout['numberOfColumn']['Mobile']  ?? null),
        ];
    }
    $content = $theme['shop_archive_product_content'] ?? [];
    $theme_align = $content['align'] ?? null;
    if ($block_overrides) {
        // Block's textAlignment takes priority; only use Customizer if block has none.
        if (!isset($style_layout['textAlignment']) && $theme_align !== null) {
            $style_layout['textAlignment'] = $theme_align;
        }
    } else {
        if ($theme_align !== null) {
            $style_layout['textAlignment'] = $theme_align;
        }
    }
    // Equal height for product content
    $style_layout['contentEqualHeight'] = $pick_bool($content['equal_flag'] ?? false, $style_layout['contentEqualHeight'] ?? null);
    $style_layout['contentMinHeight']   = $pick($content['min_height'] ?? 160, $style_layout['contentMinHeight'] ?? null);
    $attributes['style_layout'] = $style_layout;

    // Border
    if ( ! ( $block_overrides && isset( $attributes['style_border'] ) ) ) {
        $border_style = $theme['shop_archive_border']['style'] ?? null;
        if ( $border_style && $border_style !== 'none' ) {
            $attributes['style_border']['mainSettings'] = [
                'color' => $theme['shop_archive_border']['color'] ?? '#cccccc',
                'style' => $border_style,
                'width' => isset( $theme['shop_archive_border']['width'] ) ? $theme['shop_archive_border']['width'] . 'px' : '1px',
            ];
        } else {
            $attributes['style_border']['mainSettings'] = [
                'color' => 'transparent',
                'style' => 'none',
                'width' => '0px',
            ];
        }
        if ( ! $block_overrides ) {
            $attributes['style_border']['hoverColor'] = '';
            $attributes['style_border']['radius']     = '0';
        }
    }

    // Sorting & filtering
    $attributes['general_sortingAndFiltering'] = array_merge(
        $attributes['general_sortingAndFiltering'] ?? [],
        [
            'numberOfItems' => $pick($theme['product_per_page'] ?? null, $attributes['general_sortingAndFiltering']['numberOfItems'] ?? null),
        ]
    );

    // Content visibility flags
    $sale_pos        = $theme['shop_archive_sale_tag']['position'] ?? 'none';
    $theme_show_sale = ( 'none' !== $sale_pos );
    $out_pos         = $theme['shop_archive_out_of_stock']['position'] ?? 'none';
    $theme_show_out  = ( 'none' !== $out_pos );

    $attributes['general_content'] = array_merge(
        $attributes['general_content'] ?? [],
        [
            'isShowTitle'                 => $pick_bool($content['title_flag'] ?? null, $attributes['general_content']['isShowTitle'] ?? null),
            'isShowCategory'              => $pick_bool($content['category_flag'] ?? null, $attributes['general_content']['isShowCategory'] ?? null),
            'isShowRating'                => $pick_bool($content['rating_flag'] ?? null, $attributes['general_content']['isShowRating'] ?? null),
            'isShowPrice'                 => $pick_bool($content['price_flag'] ?? null, $attributes['general_content']['isShowPrice'] ?? null),
            'isShowSaleBadge'             => $pick_bool($theme_show_sale, $attributes['general_content']['isShowSaleBadge'] ?? null),
            'showSaleBadgeDiscoutPercent' => $pick_bool($theme['shop_archive_sale_tag']['sale_percent'] ?? false, $attributes['general_content']['showSaleBadgeDiscoutPercent'] ?? null),
            'saleBadgePosition'           => $block_overrides
                ? ($attributes['general_content']['saleBadgePosition'] ?? ($theme_show_sale ? 'Inside image' : 'none'))
                : ($theme_show_sale ? 'Inside image' : 'none'),
            'isShowOutOfStock'            => $pick_bool($theme_show_out, $attributes['general_content']['isShowOutOfStock'] ?? null),
        ]
    );

    // Featured image hover & equal height
    $fi_theme = $theme['shop_archive_product_image'] ?? [];
    $attributes['general_featuredImage'] = array_merge(
        $attributes['general_featuredImage'] ?? [],
        [
            'hoverType'         => $pick($fi_theme['hover'] ?? null, $attributes['general_featuredImage']['hoverType'] ?? null),
            'equal_height_flag' => $fi_theme['equal_height_flag'] ?? false,
            'image_height'      => $fi_theme['image_height'] ?? 300,
        ]
    );

    // Featured image border
    if ( ! ( $block_overrides && isset( $attributes['style_featuredImage'] ) ) ) {
        $fi_style = $theme['shop_archive_product_image']['style'] ?? null;
        if ( $fi_style && $fi_style !== 'none' ) {
            $attributes['style_featuredImage']['border']['mainSettings'] = [
                'color' => $theme['shop_archive_product_image']['color'] ?? '#cccccc',
                'style' => $fi_style,
                'width' => isset( $theme['shop_archive_product_image']['width'] ) ? $theme['shop_archive_product_image']['width'] . 'px' : '1px',
            ];
        } else {
            $attributes['style_featuredImage']['border']['mainSettings'] = [
                'color' => 'transparent',
                'style' => 'none',
                'width' => '0px',
            ];
        }
        if ( ! $block_overrides ) {
            $attributes['style_featuredImage']['border']['hoverColor'] = '';
            $attributes['style_featuredImage']['border']['radius']     = '0';
        }
    }

    // Sale badge
    $sale = $theme['shop_archive_sale_tag'] ?? [];
    $sale_position = $pick($sale['position'] ?? null, $attributes['style_saleBadge']['position'] ?? null) ?? 'top-right';
    $mapped_sale_position = ( 'left' === $sale_position || 'top-left' === $sale_position )
        ? 'top-left'
        : ( 'none' === $sale_position ? 'none' : 'top-right' );
    $attributes['style_saleBadge'] = array_merge(
        $attributes['style_saleBadge'] ?? [],
        [
            'backgroundColor' => $pick($sale['bg_color'] ?? null, $attributes['style_saleBadge']['backgroundColor'] ?? null),
            'textColor'       => $pick($sale['text_color'] ?? null, $attributes['style_saleBadge']['textColor'] ?? null),
            'position'        => $mapped_sale_position,
            'shape'           => $pick($sale['shape'] ?? 'rectangular', $attributes['style_saleBadge']['shape'] ?? null),
            'borderRadius'    => $pick($sale['border_radius'] ?? null, $attributes['style_saleBadge']['borderRadius'] ?? null),
            'isSquare'        => $pick($sale['is_square'] ?? null, $attributes['style_saleBadge']['isSquare'] ?? null),
            'size'            => $pick($sale['size'] ?? null, $attributes['style_saleBadge']['size'] ?? null),
            'text'            => $pick($sale['text'] ?? null, $attributes['style_saleBadge']['text'] ?? null),
        ]
    );

    // Out of stock badge
    $outofstock = $theme['shop_archive_out_of_stock'] ?? [];
    $raw_out_position = $pick($outofstock['position'] ?? null, $attributes['style_outOfStock']['position'] ?? null) ?? 'none';
    $mapped_out_position = ( 'left' === $raw_out_position || 'top-left' === $raw_out_position )
        ? 'top-left'
        : ( ( 'right' === $raw_out_position || 'top-right' === $raw_out_position ) ? 'top-right' : 'none' );
    $attributes['style_outOfStock'] = array_merge(
        $attributes['style_outOfStock'] ?? [],
        [
            'backgroundColor' => $pick($outofstock['bg_color'] ?? null, $attributes['style_outOfStock']['backgroundColor'] ?? null),
            'textColor'       => $pick($outofstock['text_color'] ?? null, $attributes['style_outOfStock']['textColor'] ?? null),
            'position'        => $mapped_out_position,
            'shape'           => $pick($outofstock['shape'] ?? 'rectangular', $attributes['style_outOfStock']['shape'] ?? null),
            'borderRadius'    => $pick($outofstock['border_radius'] ?? null, $attributes['style_outOfStock']['borderRadius'] ?? null),
            'isSquare'        => $pick($outofstock['is_square'] ?? null, $attributes['style_outOfStock']['isSquare'] ?? null),
            'size'            => $pick($outofstock['size'] ?? null, $attributes['style_outOfStock']['size'] ?? null),
            'text'            => $pick($outofstock['text'] ?? null, $attributes['style_outOfStock']['text'] ?? null),
        ]
    );

    // Title styles
    $general_design = $theme['shop_archive_general_design'] ?? [];
    $attributes['style_title'] = array_merge(
        $attributes['style_title'] ?? [],
        [
            'textColor' => $pick($general_design['title_color'] ?? null, $attributes['style_title']['textColor'] ?? null),
            'typography' => array_merge(
                $attributes['style_title']['typography'] ?? [],
                [
                    'fontSizes' => [
                        'Desktop' => $pick(
                            isset($general_design['title_font_size']['desktop']) ? $general_design['title_font_size']['desktop'] . 'px' : null,
                            $attributes['style_title']['typography']['fontSizes']['Desktop'] ?? null
                        ),
                        'Tablet' => $pick(
                            isset($general_design['title_font_size']['tablet']) ? $general_design['title_font_size']['tablet'] . 'px' : null,
                            $attributes['style_title']['typography']['fontSizes']['Tablet'] ?? null
                        ),
                        'Mobile' => $pick(
                            isset($general_design['title_font_size']['mobile']) ? $general_design['title_font_size']['mobile'] . 'px' : null,
                            $attributes['style_title']['typography']['fontSizes']['Mobile'] ?? null
                        ),
                    ],
                ]
            ),
        ]
    );

    // Price styles
    $attributes['style_price'] = array_merge(
        $attributes['style_price'] ?? [],
        [
            'textColor' => $pick($general_design['price_color'] ?? null, $attributes['style_price']['textColor'] ?? null),
            'typography' => array_merge(
                $attributes['style_price']['typography'] ?? [],
                [
                    'fontSizes' => [
                        'Desktop' => $pick(
                            isset($general_design['price_font_size']['desktop']) ? $general_design['price_font_size']['desktop'] . 'px' : null,
                            $attributes['style_price']['typography']['fontSizes']['Desktop'] ?? null
                        ),
                        'Tablet' => $pick(
                            isset($general_design['price_font_size']['tablet']) ? $general_design['price_font_size']['tablet'] . 'px' : null,
                            $attributes['style_price']['typography']['fontSizes']['Tablet'] ?? null
                        ),
                        'Mobile' => $pick(
                            isset($general_design['price_font_size']['mobile']) ? $general_design['price_font_size']['mobile'] . 'px' : null,
                            $attributes['style_price']['typography']['fontSizes']['Mobile'] ?? null
                        ),
                    ],
                ]
            ),
        ]
    );

    // Add to cart general settings
    $atc = $theme['shop_archive_add_to_cart_btn'] ?? [];
    $atc_position = $atc['position'] ?? null;
    $mapped_atc_position = ( $atc_position === 'bottom-visible' || $atc_position === 'bottom visible' ) ? 'bottom visible'
        : ( ( $atc_position === 'image' || $atc_position === 'inside image' ) ? 'inside image'
            : ( $atc_position === 'icon' ? 'icon'
                : ( $atc_position === 'none' ? 'none'
                    : ( $atc_position === 'bottom' ? 'bottom'
                        : ( $atc_position ?: ( $attributes['general_addToCartBtn']['position'] ?? null ) ) ) ) ) );

    $block_atc_pos = $attributes['general_addToCartBtn']['position'] ?? null;
    if ( 'bottom-visible' === $block_atc_pos || 'bottom visible' === $block_atc_pos ) {
        $block_atc_pos = 'bottom visible';
    } elseif ( 'image' === $block_atc_pos || 'inside image' === $block_atc_pos ) {
        $block_atc_pos = 'inside image';
    }

    $effective_atc_pos = $block_overrides && !empty($block_atc_pos)
        ? $block_atc_pos
        : $mapped_atc_position;

    // Add to cart styles (by-position theme styles)
    $by_pos    = $atc['by_position'] ?? [];
    $pos_style = $by_pos[ $effective_atc_pos ] ?? ( $by_pos[ $atc_position ] ?? $atc );

    $existing_colors = $attributes['style_addToCardBtn']['colorAndBackgroundColor'] ?? [];

    $atc_radius_val = isset($pos_style['border_radius']) && '' !== (string)$pos_style['border_radius'] ? (int)$pos_style['border_radius'] : 0;
    $atc_radius_px  = $atc_radius_val . 'px';
    $atc_uniform_radius = [
        'topLeft'     => $atc_radius_px,
        'topRight'    => $atc_radius_px,
        'bottomRight' => $atc_radius_px,
        'bottomLeft'  => $atc_radius_px,
    ];

    // Determine if block has an explicitly customized border radius (including 0px)
    $has_custom_atc_radius = false;
    $raw_block_radius = $attributes['style_addToCardBtn']['border']['radius'] ?? null;
    if ( is_array( $raw_block_radius ) ) {
        $desk_rad = $raw_block_radius['Desktop'] ?? '';
        if ( is_array( $desk_rad ) ) {
            $has_custom_atc_radius = isset( $desk_rad['topLeft'] ) && '' !== (string) $desk_rad['topLeft'];
        } elseif ( '' !== (string) $desk_rad ) {
            $has_custom_atc_radius = true;
        }
    } elseif ( null !== $raw_block_radius && '' !== (string) $raw_block_radius ) {
        $has_custom_atc_radius = true;
    }

    $effective_atc_radius = ( $block_overrides && $has_custom_atc_radius )
        ? $raw_block_radius
        : [
            'Desktop' => $atc_uniform_radius,
            'Tablet'  => $atc_uniform_radius,
            'Mobile'  => $atc_uniform_radius,
        ];

    $attributes['style_addToCardBtn'] = array_merge(
        $attributes['style_addToCardBtn'] ?? [],
        [
            'colorAndBackgroundColor' => array_merge(
                $existing_colors,
                [
                    'Normal' => [
                        'color'           => $pick($pos_style['text_color'] ?? null, $existing_colors['Normal']['color'] ?? null),
                        'backgroundColor' => $pick($pos_style['bg_color'] ?? null, $existing_colors['Normal']['backgroundColor'] ?? null),
                    ],
                    'Hover' => [
                        'color'           => $pick($pos_style['hover_text_color'] ?? null, $existing_colors['Hover']['color'] ?? null),
                        'backgroundColor' => $pick($pos_style['hover_bg_color'] ?? null, $existing_colors['Hover']['backgroundColor'] ?? null),
                    ],
                ]
            ),
            'border' => array_merge(
                $attributes['style_addToCardBtn']['border'] ?? [],
                ! $block_overrides
                    ? [
                        'mainSettings' => null,
                        'hoverColor'   => '',
                        'radius'       => $effective_atc_radius,
                    ]
                    : [
                        'radius' => $effective_atc_radius,
                    ]
            ),
        ]
    );

    $attributes['general_addToCartBtn'] = array_merge(
        $attributes['general_addToCartBtn'] ?? [],
        [
            'isShowButton' => $block_overrides
                ? ($attributes['general_addToCartBtn']['isShowButton'] ?? ($atc_position !== 'none'))
                : ($atc_position !== 'none'),
            'position' => $effective_atc_pos,
            'isShowQuantity' => $pick_bool($content['quantity_flag'] ?? null, $attributes['general_addToCartBtn']['isShowQuantity'] ?? null),
            'isShowIcon' => isset($atc['show_icon'])
                ? (bool)$atc['show_icon']
                : ($attributes['general_addToCartBtn']['isShowIcon'] ?? true),
        ]
    );

    // Wishlist button — always follows Customizer since there is no block UI panel for wishlist
    $wishlist = $theme['shop_archive_wishlist_btn'] ?? [];
    $attributes['style_wishlistBtn'] = array_merge(
        $attributes['style_wishlistBtn'] ?? [],
        [
            'position'               => $wishlist['position'] ?? ($attributes['style_wishlistBtn']['position'] ?? 'none'),
            'style'                  => $wishlist['style'] ?? ($attributes['style_wishlistBtn']['style'] ?? 'ti'),
            'wishlist_plugin_active' => $wishlist['wishlist_plugin_active'] ?? ($attributes['style_wishlistBtn']['wishlist_plugin_active'] ?? false),
            'color'                  => $wishlist['color'] ?? ($attributes['style_wishlistBtn']['color'] ?? '#2b2b2b'),
            'backgroundColor'        => $wishlist['bg_color'] ?? ($attributes['style_wishlistBtn']['backgroundColor'] ?? '#ffffff'),
            'hoverColor'             => $wishlist['hover_color'] ?? ($attributes['style_wishlistBtn']['hoverColor'] ?? '#ffffff'),
            'hoverBackgroundColor'   => $wishlist['hover_bg_color'] ?? ($attributes['style_wishlistBtn']['hoverBackgroundColor'] ?? '#e33333'),
        ]
    );

    // Quick view button — always follows Customizer since there is no block UI panel for quick view
    $quickview = $theme['shop_quick_view_btn'] ?? [];
    $attributes['style_quickViewBtn'] = array_merge(
        $attributes['style_quickViewBtn'] ?? [],
        [
            'enabled'             => $to_bool($quickview['enabled'] ?? null, false),
            'position'            => $quickview['position'] ?? 'center-image',
            'show_icon'           => isset( $quickview['show_icon'] ) ? (bool) $quickview['show_icon'] : true,
            'bg_color'            => $quickview['bg_color'] ?? '#ffffff',
            'text_color'          => $quickview['text_color'] ?? '#2b2b2b',
            'hover_bg_color'      => $quickview['hover_bg_color'] ?? '#3a3a3a',
            'hover_text_color'    => $quickview['hover_text_color'] ?? '#ffffff',
            'border_radius'       => $quickview['border_radius'] ?? 50,
            'woostify_pro_active' => $quickview['woostify_pro_active'] ?? ($attributes['style_quickViewBtn']['woostify_pro_active'] ?? false),
        ]
    );

    // Countdown urgency — always follows Customizer since there is no block UI panel for countdown urgency
    $cu = $theme['countdown_urgency'] ?? [];
    $attributes['style_countdownUrgency'] = array_merge(
        $attributes['style_countdownUrgency'] ?? [],
        [
            'countdownUrgencyActive' => $cu['active'] ?? ($attributes['style_countdownUrgency']['countdownUrgencyActive'] ?? null),
            'style'                  => $cu['style'] ?? ($attributes['style_countdownUrgency']['style'] ?? null),
            'applyFor'               => $cu['apply_for'] ?? ($attributes['style_countdownUrgency']['applyFor'] ?? null),
            'categoriesSelected'     => $cu['categories_selected'] ?? ($attributes['style_countdownUrgency']['categoriesSelected'] ?? null),
            'productsSelected'       => $cu['products_selected'] ?? ($attributes['style_countdownUrgency']['productsSelected'] ?? null),
            'categoriesExclude'      => $cu['categories_exclude'] ?? ($attributes['style_countdownUrgency']['categoriesExclude'] ?? null),
            'productsExclude'        => $cu['products_exclude'] ?? ($attributes['style_countdownUrgency']['productsExclude'] ?? null),
            'timeDuration'           => $cu['time_duration'] ?? ($attributes['style_countdownUrgency']['timeDuration'] ?? null),
            'timeType'               => $cu['time_type'] ?? ($attributes['style_countdownUrgency']['timeType'] ?? null),
            'message'                => $cu['message'] ?? ($attributes['style_countdownUrgency']['message'] ?? null),
            'daysLabel'              => $cu['days_label'] ?? ($attributes['style_countdownUrgency']['daysLabel'] ?? null),
            'hoursLabel'             => $cu['hours_label'] ?? ($attributes['style_countdownUrgency']['hoursLabel'] ?? null),
            'minutesLabel'           => $cu['minutes_label'] ?? ($attributes['style_countdownUrgency']['minutesLabel'] ?? null),
            'secondsLabel'           => $cu['seconds_label'] ?? ($attributes['style_countdownUrgency']['secondsLabel'] ?? null),
            'displayOnThumbnail'     => $cu['display_on_thumbnail'] ?? ($attributes['style_countdownUrgency']['displayOnThumbnail'] ?? null),
            'hideAfterTimeUp'        => $cu['hide_after_time_up'] ?? ($attributes['style_countdownUrgency']['hideAfterTimeUp'] ?? null),
        ]
    );

    // Catalog mode: if enabled in theme and block overrides is false, disable add-to-cart button and quantity
    if ( ! empty( $theme['catalog_mode'] ) && ! $block_overrides ) {
        $attributes['general_addToCartBtn']['isShowButton']   = false;
        $attributes['general_addToCartBtn']['isShowQuantity'] = false;
    }

    return $attributes;
}

/**
 * Render callback for the products block, generating the HTML output based on the block attributes and product data.
 * @param array $attributes The block attributes that determine how the products should be displayed.
 * @param string $content The saved inner content of the block, which may contain serialized attributes for frontend use.
 * @return string The generated HTML for the products block, including product listings, pagination, and other elements based on the attributes.
 */
function boostify_blocks_block_products_render_callback($attributes, $content)
{
    // Re-apply theme defaults on render so saved blocks stay in sync with Customizer changes.
    // When isCustomizerGeneralLayout is ON, block-level attributes override Customizer values.
    $block_overrides = !empty($attributes['general_layout']['isCustomizerGeneralLayout']);
    $attributes = boostify_blocks_block_products_apply_theme_defaults($attributes, $block_overrides);

    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    // 
    $sortingAndFilteringAttrs = $attributes['general_sortingAndFiltering'] ?? [];
    $uniqueId =  $attributes['uniqueId'] ?? "";
    $className =  $attributes['className'] ?? "";
    $align =  $attributes['align'] ?? "";
    if (!empty($align)) {
        $className .= " align" . $align;
    }

    $queryArgs = boostify_blocks_block_products_parse_filter_attributes($sortingAndFilteringAttrs);
    // 
    $args = boostify_blocks_block_products_parse_query_args($queryArgs);

    ob_start();
    $loop = new WP_Query( $args );


    if (!$loop->have_posts()) {
        return '';
    }

?>

    <?php
        $json = !empty($uniqueId) ? esc_html(wp_json_encode($attributes)) : '';

        // Extract any extra classes and id from saved $content (e.g. Gutenberg block wrapper classes / anchor)
        $saved_classes = '';
        $saved_id      = '';
        if (!empty($content)) {
            if (preg_match('/<div\b[^>]*\bclass=["\']([^"\']*)["\']/i', $content, $class_matches)) {
                $saved_classes = $class_matches[1];
            }
            if (preg_match('/<div\b[^>]*\bid=["\']([^"\']*)["\']/i', $content, $id_matches)) {
                $saved_id = $id_matches[1];
            }
        }

        // Build responsive classes if configured
        $rc = $attributes['advance_responsiveCondition'] ?? [];
        $responsiveClasses = '';
        if (!empty($rc['isHiddenOnDesktop'])) {
            $responsiveClasses .= ' wcb-hide-desktop';
        }
        if (!empty($rc['isHiddenOnTablet'])) {
            $responsiveClasses .= ' wcb-hide-tab';
        }
        if (!empty($rc['isHiddenOnMobile'])) {
            $responsiveClasses .= ' wcb-hide-mob';
        }

        $anchor_id = !empty($saved_id) ? $saved_id : ($attributes['anchor'] ?? '');

        // Merge all classes into a unique set, ensuring wcb-products__wrap, wcb-update-div, and uniqueId are present
        $raw_classes        = 'wcb-cm wcb-update-div wp-block-boostify-blocks-products wcb-products__wrap ' . $uniqueId . ' ' . $className . ' ' . $saved_classes . ' ' . $responsiveClasses;
        $class_list         = array_unique(array_filter(explode(' ', $raw_classes)));
        $wrapper_class_attr = implode(' ', $class_list);
    ?>
    <div class="<?php echo esc_attr($wrapper_class_attr); ?>" data-uniqueid="<?php echo esc_attr($uniqueId); ?>"<?php echo !empty($anchor_id) ? ' id="' . esc_attr($anchor_id) . '"' : ''; ?>>
        <div data-wcb-global-styles="<?php echo esc_attr($uniqueId); ?>"></div>
        <pre data-wcb-block-attrs="<?php echo esc_attr($uniqueId); ?>" style="display: none;"><?php echo $json; ?></pre>
        <span data-block-products-uniqueId="<?php echo esc_attr($uniqueId); ?>" style="display: none;"></span>

        <?php
        if ($loop->have_posts()) :

            // do_action('woocommerce_before_shop_loop');
            // woocommerce_product_loop_start();
            $layoutAttrs        = $attributes['style_layout'] ?? [];
            $swithToScrollSnapX = !empty($layoutAttrs['swithToScrollSnapX']) ? $layoutAttrs['swithToScrollSnapX'] : 'None';
        ?>
            <div class="scroll-snap-slider -multi wcb-products__list swithToScrollSnapX--<?php echo esc_attr($swithToScrollSnapX); ?>">
                <?php
                while ($loop->have_posts()) :
                    $loop->the_post();

                    global $product;
                    if (!empty($product)) {
                        echo boostify_blocks_block_products_render_product($product, $attributes, $loop->current_post);
                    }
                endwhile;
                ?>


            </div>
            <div class="indicators -multi">
                <button type="button" class="p-arrow -prev -multi">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>

                </button>

                <button type="button" class="p-arrow -next -multi">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                </button>
            </div>

            <?php
            // woocommerce_product_loop_end();
            // do_action('woocommerce_after_shop_loop');
            ?>
        <?php
        else :
            // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- WooCommerce core hook.
            do_action('woocommerce_no_products_found');
        endif; ?>

        <?php if (boostify_blocks_is_enabled($attributes['general_pagination']['isShowPagination'] ?? "false")) : ?>
            <div class="wcb-products__pagination">
                <?php boostify_blocks_pagination_bar($loop, $attributes['general_pagination']); ?>
            </div>
        <?php endif; ?>

        <?php wp_reset_postdata(); ?>
    </div>
<?php
    return ob_get_clean();
}

/**
 * Generate the HTML for a single product within the products block, based on the provided attributes and product data.
 * @param WC_Product $product The WooCommerce product object.
 * @param array $attributes The block attributes that determine which product elements to display and how to style them.
 * @param int $index The index of the current product in the loop, used for conditional styling or behavior if needed.
 * @return string The generated HTML for the product, including elements like image, title, price, rating, badges, etc., based on the block attributes.
 */
function boostify_blocks_block_products_render_product($product, $attributes, $index)
{
    $data = (object) array(
        'permalink' => esc_url($product->get_permalink()),
        'image'     => "",
        'gallery_image_1'     => "",
        'title'     => "",
        'rating'    => "",
        'price'     => "",
        'badge'     => "",
        'out_of_stock' => "",
        'button'    => "",
        'categories'    => "",
        'quantity_input' => "",
    );


    if (boostify_blocks_is_enabled($attributes['general_featuredImage']['isShowFeaturedImage'] ?? "")) {
        if (($attributes['general_featuredImage']['hoverType'] ?? "") === 'swap') {
            $data->gallery_image_1 = boostify_blocks_block_products_get_image_gallery_image_1_html($product);
        }
    }

    if (boostify_blocks_is_enabled($attributes['general_featuredImage']['isShowFeaturedImage'] ?? "")) {
        $data->image = boostify_blocks_block_products_get_image_html($product, $attributes);        
    }
    if (boostify_blocks_is_enabled($attributes['general_content']['isShowTitle'] ?? "")) {
        $data->title = boostify_blocks_block_products_get_title_html($product, $attributes['general_content']['titleHtmlTag'] ?? null, $data->permalink);
    }
    if (boostify_blocks_is_enabled($attributes['general_content']['isShowRating'] ?? "")) {
        $data->rating = boostify_blocks_block_products_get_rating_html($product, $attributes);
    }
    if (boostify_blocks_is_enabled($attributes['general_content']['isShowSaleBadge'] ?? "")) {
        $data->badge = boostify_blocks_block_products_get_sale_badge_html($product, $attributes['general_content']['showSaleBadgeDiscoutPercent'] ?? false, $attributes);
    }
    
    // Quantity input
    $has_quantity = boostify_blocks_block_products_has_quantity_feature($attributes);
    if ($has_quantity) {
        $data->quantity_input = boostify_blocks_block_products_get_product_quantity();
    }

    $add_to_cart_position = $attributes['general_addToCartBtn']['position'] ?? '';
    if ( 'bottom-visible' === $add_to_cart_position ) {
        $add_to_cart_position = 'bottom visible';
    } elseif ( 'image' === $add_to_cart_position ) {
        $add_to_cart_position = 'inside image';
    }

    if ($add_to_cart_position === "bottom" || $add_to_cart_position === "bottom visible") {
        $price_html  = '';
        $button_html = '';

        if (boostify_blocks_is_enabled($attributes['general_content']['isShowPrice'] ?? "")) {
            $price_html = $data->price = boostify_blocks_block_products_get_price_html($product);
        }
        if (boostify_blocks_is_enabled($attributes['general_addToCartBtn']['isShowButton'] ?? "")) {
            $button_html = $data->button = boostify_blocks_block_products_get_button_html($product, $attributes, $product->get_price_html());
        }

        $data->price = "";
        $data->button = "";
        
        // Add element quantity
        if ($add_to_cart_position === "bottom") {
            $data->price_button_group = "
                <div class=\"wcb-products__price-button-wrapper\">
                    {$data->quantity_input}
                    {$price_html}
                    {$button_html}
                </div>
            ";
        } else {
            $data->price_button_group = "
                <div class=\"wcb-products__price-button-wrapper\">
                    {$price_html}
                    {$data->quantity_input}
                    {$button_html}
                </div>
            ";
        }
       
    } else {
        if (boostify_blocks_is_enabled($attributes['general_content']['isShowPrice'] ?? "")) {
            $data->price = boostify_blocks_block_products_get_price_html($product);
        }
        if ($add_to_cart_position === "inside image" && boostify_blocks_is_enabled($attributes['general_addToCartBtn']['isShowButton'] ?? "")) {
            $data->button = boostify_blocks_block_products_get_button_html($product, $attributes, $product->get_price_html());
        } else {
            $data->button = "";
        }
    }

    if (boostify_blocks_is_enabled($attributes['general_content']['isShowCategory'] ?? "")) {
        $data->categories = boostify_blocks_block_products_get_category_html($product);
    }

    if (boostify_blocks_is_enabled($attributes['general_content']['isShowOutOfStock'] ?? true)) {
        $data->out_of_stock = boostify_blocks_block_products__get_out_of_stock_html($product, $attributes);
    }
    // pre-order badge
    $data->preorder_badge = boostify_blocks_block_products__get_preorder_html($product);
    $isShowAddToCartBtn = boostify_blocks_is_enabled($attributes['general_addToCartBtn']['isShowButton'] ?? "");
    $btnInsideImage = $isShowAddToCartBtn && ($add_to_cart_position === "inside image");
    $btnIconAddToCart = $isShowAddToCartBtn && ($add_to_cart_position === "icon");
    $saleInsideImage = ($attributes['general_content']['saleBadgePosition'] ?? "") === "Inside image";
    $qvEnabled = !empty($attributes['style_quickViewBtn']['enabled']);
    $btnQuickViewBottomImage = $qvEnabled && (
        ($attributes['style_quickViewBtn']['position'] ?? "") === "bottom-image" ||
        ($attributes['style_quickViewBtn']['position'] ?? "") === "center-image" ||
        ($attributes['style_quickViewBtn']['position'] ?? "") === "top-right"
    );

    $btnWishListTopRight = false;
    $btnWishListBottomRight = false;
    $wishlistPluginActive = !empty($attributes['style_wishlistBtn']['wishlist_plugin_active']);
    if ($wishlistPluginActive && $attributes['style_wishlistBtn']['position'] === "top-right" && $attributes['style_wishlistBtn']['style'] === "ti") {
        $btnWishListTopRight = true;
    }

    if ($wishlistPluginActive && $attributes['style_wishlistBtn']['position'] === "bottom-right" && $attributes['style_wishlistBtn']['style'] === "ti") {
        $btnWishListBottomRight = true;
    }   

    $classes = "wcb-products__product ";

    if (!boostify_blocks_is_enabled($attributes['general_featuredImage']['isShowFeaturedImage'] ?? "")) {
        $btnInsideImage = false;
        $saleInsideImage = false;
    }

    // button
    $classes .= $btnInsideImage ? " wcb-products__product--btnInsideImage" : "";
    $classes .= $btnIconAddToCart ? " wcb-products__product--btnIconAddToCart" : "";
    $classes .= ( $isShowAddToCartBtn && 'bottom' === $add_to_cart_position ) ? " wcb-products__product--btnBottom" : "";
    $classes .= ( $isShowAddToCartBtn && 'bottom visible' === $add_to_cart_position ) ? " wcb-products__product--btnBottomVisible" : "";
    if ( ! empty( $has_quantity ) ) {
        $classes .= " wcb-products__product--has-quantity";
    }
    if ( isset( $attributes['style_layout']['isEqualHeight'] ) && false === $attributes['style_layout']['isEqualHeight'] ) {
        $classes .= " wcb-products__product--no-equal-height";
    }

    // quick view position
    if ( $btnQuickViewBottomImage ) {
        $qv_pos   = $attributes['style_quickViewBtn']['position'] ?? 'center-image';
        $classes .= ' wcb-products__product--qv-' . sanitize_html_class( $qv_pos );
    }

    // Add to Cart button
    $btn1 = $btnInsideImage ? $data->button : "";
    $btn2 = ( $add_to_cart_position === "bottom" || $add_to_cart_position === "bottom visible" ) ? $data->button : "";

    // sale badge
    $classes .= $saleInsideImage ? " wcb-products__product--onsaleInsideImage" : "";
    $saleBadge1 = $saleInsideImage ? $data->badge : "";
    $saleBadge2 = $saleInsideImage ?   "" : $data->badge;

    // out of stock
    $saleOutOfStock = $data->out_of_stock ? : "";
    $preorderBadge = $data->preorder_badge ? : "";

    // wishlist button
    global $wpdb;

    $product_id = $product->get_id();
    $variation_id = $product->is_type('variation') ? $product->get_id() : 0;

    $table = $wpdb->prefix . 'tinvwl_items';

    $is_in_wishlist = (bool) $wpdb->get_var(
        $wpdb->prepare(
            "SELECT COUNT(*) FROM $table WHERE product_id = %d AND variation_id = %d",
            $product_id,
            $variation_id
        )
    );

    $wishlist_active_class = $is_in_wishlist ? ' is-in-wishlist' : '';

    $classes .= $btnWishListTopRight ? " wcb-products__product--wishlistTopRight" : "";
    $classes .= $btnWishListBottomRight ? " wcb-products__product--wishlistBottomRight" : "";
    // 
    $isSwapHover = $data->gallery_image_1 ? "<div class=\"wcb-products__product-galley_image_1\">{$data->gallery_image_1}</div>" : '';
    // 
    $featuredClasses = "wcb-products__product-image-link";
    if (boostify_blocks_is_enabled($attributes['general_featuredImage']['isShowFeaturedImage'] ?? "")) {
        if (($attributes['general_featuredImage']['hoverType'] ?? "") === 'zoom') {
            $featuredClasses = "wcb-products__product-image-link wcb-products__product-image-link__zoom";
        }
    }

    $topRightIconsHtml = '';
    $product_id_attr = esc_attr($product_id);
    if ($btnIconAddToCart || $btnWishListTopRight) {
        $topRightItems = array();
        if ($btnIconAddToCart) {
            // AJAX add to cart URL
            $add_to_cart_url = esc_url($product->add_to_cart_url());
            // TODO: handle load to add to cart class
            $ajax_class = ($product->supports('ajax_add_to_cart') &&
                $product->is_purchasable() &&
                ($product->is_in_stock() || $product->backorders_allowed())) ? ' ajax_add_to_cart' : '';

            $cart_icon_svg = class_exists('Woostify_Icon')
                ? Woostify_Icon::fetch_svg_icon('shopping-cart-2', false)
                : '<span class="woostify-svg-icon icon-shopping-cart-2"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"><path d="m 14.176,12.5 c 0.965,0 1.75,0.785 1.75,1.75 0,0.965 -0.785,1.75 -1.75,1.75 -0.965,0 -1.75,-0.785 -1.75,-1.75 0,-0.965 0.785,-1.75 1.75,-1.75 z m 0,2.5 c 0.414,0 0.75,-0.337 0.75,-0.75 0,-0.413 -0.336,-0.75 -0.75,-0.75 -0.414,0 -0.75,0.337 -0.75,0.75 0,0.413 0.336,0.75 0.75,0.75 z m -8.5,-2.5 c 0.965,0 1.75,0.785 1.75,1.75 0,0.965 -0.785,1.75 -1.75,1.75 -0.965,0 -1.75,-0.785 -1.75,-1.75 0,-0.965 0.785,-1.75 1.75,-1.75 z m 0,2.5 c 0.414,0 0.75,-0.337 0.75,-0.75 0,-0.413 -0.336,-0.75 -0.75,-0.75 -0.414,0 -0.75,0.337 -0.75,0.75 0,0.413 0.336,0.75 0.75,0.75 z M 3.555,2 3.857,4 H 17 l -1.118,8.036 H 3.969 L 2.931,4.573 2.695,3 H -0.074 V 2 Z M 4,5 4.139,6 H 15.713 L 15.852,5 Z M 15.012,11.036 15.573,7 H 4.278 l 0.561,4.036 z" fill="currentColor"></path></svg></span>';

            $topRightItems[] = '
                <a
                    href="' . $add_to_cart_url . '"
                    data-product_id="' . $product_id_attr . '"
                    data-quantity="1"' . ($has_quantity ? ' data-wp-bind--data-quantity="context.quantity"' : '') . '
                    class="wcb-products__product--btnIconAddToCart--item add_to_cart_button ' . $ajax_class . '"
                    aria-label="' . esc_attr($product->add_to_cart_description()) . '"
                    rel="nofollow"
                >' . $cart_icon_svg . '</a>';
        }

        if ($btnWishListTopRight) {
            $topRightItems[] = 
                '<button 
                    class="wcb-products__product--wishlistTopRight--item tinvwl_add_to_wishlist_button tinvwl-addtowishlist' . $wishlist_active_class . '"
                    data-tinv-wl-list="[]"
                    data-tinv-wl-product="' . $product_id_attr . '"
                    data-tinv-wl-action="add"
                    type="button"
                ></button>';
        }

        $topRightIconsHtml = '<div class="wcb-products__product--topRight">' . implode('', $topRightItems) . '</div>';
    }

    $bottomRightIconHtml = $btnWishListBottomRight ? 
        '<button 
            class="wcb-products__product--wishlistBottomRight--item tinvwl_add_to_wishlist_button tinvwl-addtowishlist' . $wishlist_active_class . '"
            data-tinv-wl-list="[]"
            data-tinv-wl-product="' . $product_id_attr . '"
            data-tinv-wl-action="add"
            type="button"
        ></button>' : '';
    
    // Quick view button at bottom of image
    $qv_show_icon = ! empty( $attributes['style_quickViewBtn']['show_icon'] );
    $btnQuickViewBottomImageHtml = $btnQuickViewBottomImage ?
        boostify_blocks_block_products__build_quick_view_html( $product_id_attr, $attributes['style_quickViewBtn']['position'] ?? 'center-image', $qv_show_icon ) : '';

    // Countdown urgency
    $countdownHtml = boostify_blocks_block_products__get_countdown_html( $attributes['style_countdownUrgency'] ?? [] );

    $escaped_classes = esc_attr($classes);
    $escaped_index = intval($index);
    $escaped_permalink = esc_url($data->permalink);
    $escaped_feat_classes = esc_attr($featuredClasses);

    $quantity_interactivity_attrs = '';
    if ( boostify_blocks_block_products_has_quantity_feature( $attributes ) ) {
        $quantity_context = wp_json_encode( array( 'quantity' => 1 ) );
        $quantity_interactivity_attrs = " data-wp-interactive=\"boostify-blocks/product-quantity\" data-wp-context='" . esc_attr( $quantity_context ) . "' data-wp-watch=\"callbacks.syncQuantityJqueryData\"";
    }

    $item_html = "<div class=\"scroll-snap-slide {$escaped_classes}\" data-index=\"{$escaped_index}\"{$quantity_interactivity_attrs}>
                <div class=\"wcb-products__product-featured \">
                    <a href=\"{$escaped_permalink}\" class=\"{$escaped_feat_classes}\">
                        {$data->image}
                        {$isSwapHover}
                    </a>
                    {$topRightIconsHtml}
                    {$bottomRightIconHtml}
                    {$btnQuickViewBottomImageHtml}
                    {$btn1}
                    {$countdownHtml}
                    {$saleOutOfStock}
                    {$saleBadge1}
                </div>
                <div class=\"wcb-products__product-content\">
                    {$data->categories}
                    {$data->title}
                    {$preorderBadge}
                    {$saleBadge2}
                    {$data->rating}
                    " . ($data->price_button_group ?? ($data->price . $data->quantity_input . $btn2)) . "
                </div>
			</div>";

    // Prevent TI Wishlist and YITH Wishlist from injecting duplicate buttons into product grid items.
    $ti_removed = false;
    if ( class_exists( 'TInvWL_Public_AddToWishlist' ) ) {
        $ti_instance = TInvWL_Public_AddToWishlist::instance();
        $ti_removed  = remove_filter( 'woocommerce_blocks_product_grid_item_html', array( $ti_instance, 'htmloutput_block' ), 9 );
        if ( ! $ti_removed ) {
            $ti_removed = remove_filter( 'woocommerce_blocks_product_grid_item_html', array( $ti_instance, 'htmloutput_block' ), 10 );
        }
    }
    $yith_removed = false;
    if ( function_exists( 'YITH_WCWL_Frontend' ) ) {
        $yith_removed = remove_filter( 'woocommerce_blocks_product_grid_item_html', array( YITH_WCWL_Frontend(), 'add_button_for_blocks_product_grid_item' ), 10 );
    }

    $filtered_html = apply_filters(
        'woocommerce_blocks_product_grid_item_html', // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- WooCommerce core hook.
        $item_html,
        $data,
        $product
    );

    if ( $ti_removed && class_exists( 'TInvWL_Public_AddToWishlist' ) ) {
        add_filter( 'woocommerce_blocks_product_grid_item_html', array( TInvWL_Public_AddToWishlist::instance(), 'htmloutput_block' ), 9, 3 );
    }
    if ( $yith_removed && function_exists( 'YITH_WCWL_Frontend' ) ) {
        add_filter( 'woocommerce_blocks_product_grid_item_html', array( YITH_WCWL_Frontend(), 'add_button_for_blocks_product_grid_item' ), 10, 3 );
    }

    return $filtered_html;
}

/**
 * Convert block alignment value to CSS flex alignment.
 * @param string $alignment The block alignment value (e.g., 'left', 'center', 'right').
 * @return string The corresponding CSS flex alignment value.
 */
function convert_to_alignment_style($alignment) {
    switch ($alignment) {
        case 'left':
            return 'flex-start';
        case 'center':
            return 'center';
        case 'right':
            return 'flex-end';
        default:
            return '';
    }
}

/**
 * Generate the HTML for the countdown urgency timer based on the provided attributes.
 * @param array $countdown_attrs The attributes for the countdown urgency timer.
 * @return string The generated HTML for the countdown urgency timer, or an empty string if not active or applicable.
 */
function boostify_blocks_block_products__get_countdown_html( $countdown_attrs ) {
    if ( empty( $countdown_attrs ) ) {
        return '';
    }

    $active   = $countdown_attrs['countdownUrgencyActive'] ?? false;
    $position = $countdown_attrs['position'] ?? 'none';
    $style    = $countdown_attrs['style'] ?? 'default';
    $displayOnThumbnail = $countdown_attrs['displayOnThumbnail'] ?? '1';

    if ( ! $active || $position === 'none' || $displayOnThumbnail === '0') {
        return '';
    }

    $time_duration = intval( $countdown_attrs['timeDuration'] ?? 1 );
    $time_type     = $countdown_attrs['timeType'] ?? 'days';
    $multipliers   = [
        'days'    => 86400000,
        'hours'   => 3600000,
        'minutes' => 60000,
    ];
    $duration_ms  = $time_duration * ( $multipliers[ $time_type ] ?? 86400000 );
    $hide_time_up = ( $countdown_attrs['hideAfterTimeUp'] ?? '1' ) === '1' ? '1' : '0';

    $days_label    = esc_html( $countdown_attrs['daysLabel']    ?? 'Days' );
    $hours_label   = esc_html( $countdown_attrs['hoursLabel']   ?? 'Hours' );
    $minutes_label = esc_html( $countdown_attrs['minutesLabel'] ?? 'Mins' );
    $seconds_label = esc_html( $countdown_attrs['secondsLabel'] ?? 'Secs' );

    // TODO: handle message and position in the future if needed
    // $message    = $countdown_attrs['message'] ?? '';
    // $message_html = '';
    // if ( $message ) {
    //     $message_html = '<div class="wcb-countdown-urgency__message">' . esc_html( $message ) . '</div>';
    // }
    $position_class = $position !== 'none' ? 'wcb-countdown-urgency-wrap--' . esc_attr( $position ) : '';

    return "
            <div class=\"woostify-countdown-urgency {$position_class}\" data-duration=\"{$duration_ms}\" data-time-up=\"{$hide_time_up}\">
                <div class=\"woostify-countdown-urgency-timer {$style}\">
                    <div class=\"woostify-cc-timer-item\">
                        <div class=\"woostify-cc-timer\" data-time=\"days\">00</div>
                        <div class=\"woostify-cc-timer-label\">{$days_label}</div>
                    </div>
                    <div class=\"woostify-cc-timer-item\">
                        <div class=\"woostify-cc-timer\" data-time=\"hours\">00</div>
                        <div class=\"woostify-cc-timer-label\">{$hours_label}</div>
                    </div>
                    <div class=\"woostify-cc-timer-item\">
                        <div class=\"woostify-cc-timer\" data-time=\"minutes\">00</div>
                        <div class=\"woostify-cc-timer-label\">{$minutes_label}</div>
                    </div>
                    <div class=\"woostify-cc-timer-item\">
                        <div class=\"woostify-cc-timer\" data-time=\"seconds\">00</div>
                        <div class=\"woostify-cc-timer-label\">{$seconds_label}</div>
                    </div>
                </div>
            </div>";
}

/**
 * Generate the HTML for the quick view button based on the provided product ID and position.
 * @param int $product_id_attr The product ID to be used in the button's data
 * attributes. @param string $position The position of the quick view button (e.g., 'bottom-image', 'center-image', 'top-right').
 * @return string The generated HTML for the quick view button, or an empty string if the position is not recognized.
 */
function boostify_blocks_block_products__build_quick_view_html( $product_id_attr, $position, $show_icon = true ) {

    // Context for the Interactivity API store (see public/js/quick-view/wcb-quick-view-preview.js).
    $preview_context = wp_json_encode(
        array(
            'productId' => (int) $product_id_attr,
            'loading'   => false,
            'loaded'    => false,
            'galleryHtml' => '',
        )
    );

    $html  = '<div class="wcb-products__product-quickview-preview"'
        . ' data-wp-interactive="boostify-blocks/quick-view-preview"'
        . ' data-wp-context=\'' . esc_attr( $preview_context ) . '\''
        . ' data-wp-on--mouseenter="actions.preloadGallery"'
        . '>';

    $html .= '<button
        class="wcb-products__product--quickViewBottomImage--item product-quick-view-btn"
        data-wp-on--mouseenter="actions.preloadGallery"
        data-product_id="' . esc_attr( $product_id_attr ) . '"
        data-pid="' . esc_attr( $product_id_attr ) . '"
        type="button"
        aria-haspopup="dialog"
    >';

    $show_icon_in_btn = ( 'top-right' === $position ) ? true : (bool) $show_icon;
    if ( $show_icon_in_btn ) {
        $html .= '
            <span class="wcb-products__product--quickViewBottomImage-svg__icon icon-eye">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                    <path d="M16.965 8.817c-1.284-3.267-4.687-5.463-8.465-5.463s-7.181 2.196-8.465 5.463c-0.046 0.117-0.046 0.248 0 0.365 1.285 3.268 4.687 5.464 8.465 5.464s7.18-2.195 8.465-5.463c0.047-0.118 0.047-0.248 0-0.366zM8.5 13.646c-3.298 0-6.269-1.859-7.459-4.646 1.189-2.787 4.16-4.646 7.459-4.646s6.27 1.859 7.459 4.646c-1.19 2.786-4.161 4.646-7.459 4.646zM8.5 5.357c-2.009 0-3.643 1.634-3.643 3.643s1.634 3.643 3.644 3.643c2.008 0 3.643-1.634 3.643-3.643s-1.635-3.643-3.644-3.643zM8.5 11.643c-1.458 0-2.644-1.186-2.644-2.643s1.187-2.643 2.644-2.643c1.457 0 2.643 1.186 2.643 2.643s-1.185 2.643-2.643 2.643z" fill="currentColor"></path>
                </svg>
            </span>';
    }

    if ( $position !== 'top-right' ) {
        $html .= '<span class="wcb-products__product--quickViewBottomImage__text">'
            . esc_html__( 'Quick View', 'woostify-pro' ) .
        '</span>';
    }

    $html .= '</button>';

    $html .= '<div class="wcb-quick-view-hover-gallery" data-wp-bind--hidden="!context.loaded" data-wp-watch="callbacks.renderGallery"></div>';

    $html .= '</div>';

    return $html;
}

//  
function boostify_blocks_block_products_get_image_gallery_image_1_html($product)
{

    $attachment_ids = $product->get_gallery_image_ids();
    if (empty($attachment_ids[0] ?? '')) {
        return '';
    }
    return wp_get_attachment_image($attachment_ids[0], 'full');
}

/**
 * Generate the HTML for the product image, applying the height from the Woostify theme settings and ensuring accessibility with alt text.
 * @param WC_Product $product The WooCommerce product object.
 * @return string The generated HTML for the product image, wrapped in a container with appropriate classes
 */
function boostify_blocks_block_products_get_image_html($product, $attributes = [])
{
    $attr = array(
        'alt' => '',
    );

    // Get the image alt text (use the product name as a fallback)
    if ($product->get_image_id()) {
        $image_alt = get_post_meta($product->get_image_id(), '_wp_attachment_image_alt', true);
        $attr = array(
            'alt' => ($image_alt ? $image_alt : $product->get_name()),
        );
    }

    // Equal height settings are resolved in boostify_blocks_block_products_apply_theme_defaults()
    $equal_height = !empty($attributes['general_featuredImage']['equal_height_flag']);

    // Get the default WooCommerce thumbnail HTML
    $image_html = $product->get_image('woocommerce_thumbnail', $attr);

    if ($equal_height) {
        $imageHeight = !empty($attributes['general_featuredImage']['image_height'])
            ? intval($attributes['general_featuredImage']['image_height'])
            : 300;

        if ($imageHeight > 0) {
            $style = 'style="height:' . esc_attr($imageHeight) . 'px; object-fit:cover;"';
            $image_html = preg_replace('/<img(.*?)>/', '<img$1 ' . $style . '>', $image_html);
        }
    }

    // Return the final HTML wrapped in a container
    return '<div class="wcb-products__product-image wc-block-grid__product-image">' . $image_html . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscapedaped
}

/**
 * Generate the HTML for the product title, wrapped in a heading tag and linked to the product page.
 * @param WC_Product $product The WooCommerce product object.
 * @param string $headingTag The HTML tag to use for the title (e.g.,
 * 'div', 'h2', 'h3'). Defaults to 'div' if not provided or empty.
 * @param string $link The URL to link the product title to.
 * @return string The generated HTML for the product title, wrapped in the specified heading tag and linked to the product page.
 */
function boostify_blocks_block_products_get_title_html($product, $headingTag = "div", $link = '')
{
    if (empty($headingTag)) {
        $headingTag = 'div';
    }
    if (empty($link) && $product instanceof WC_Product) {
        $link = get_permalink($product->get_id());
    }
    return '<' . tag_escape($headingTag) . ' class="wcb-products__product-title wc-block-grid__product-title"> <a href="' . esc_url($link) . '">' . wp_kses_post($product->get_title()) . '</a></' . tag_escape($headingTag) . '>';
}

/**
 * Generate the HTML for the product categories, wrapped in a container with appropriate classes.
 * @param WC_Product $product The WooCommerce product object.
 * @return string The generated HTML for the product categories, wrapped in a container with appropriate classes
 */
function boostify_blocks_block_products_get_category_html($product)
{
    return wc_get_product_category_list($product->get_id(), ", ", '<div class="wcb-products__product-categories">', '</div>');
}


function boostify_blocks_block_products_get_rating_html($product, $attributes)
{

    $rating_count = $product->get_rating_count();
    // $review_count = $product->get_review_count();
    $average      = $product->get_average_rating();


    if ($rating_count > 0) {
        $label = sprintf(__('Rated %s out of 5', 'woocommerce'), $average);
        $html  = '<div class="wcb-products__product-rating-wrap">
                    <div class="wcb-products__product-rating wc-block-components-product-rating__stars wc-block-grid__product-rating__stars" role="img" aria-label="'
                        . esc_attr($label) . '">' . wc_get_star_rating_html($average, $rating_count) .
                    '</div>
                </div>';
        return $html;
    }
    return '';
}


function boostify_blocks_block_products_get_price_html($product)
{

    return sprintf(
        '<div class="wcb-products__product-price wc-block-grid__product-price price">%s</div>',
        wp_kses_post($product->get_price_html())
    );
}

function boostify_blocks_block_products_add_percentage_to_sale_badge($product)
{
    if ($product->is_type('variable')) {
        $percentages = array();

        // Get all variation prices
        $prices = $product->get_variation_prices();

        // Loop through variation prices
        foreach ($prices['price'] as $key => $price) {
            // Only on sale variations
            if ($prices['regular_price'][$key] !== $price) {
                // Calculate and set in the array the percentage for each variation on sale
                $percentages[] = round(100 - ($prices['sale_price'][$key] / $prices['regular_price'][$key] * 100));
            }
        }
        $percentage = max($percentages) . '%';
    } else {
        $regular_price = (float) $product->get_regular_price();
        $sale_price    = (float) $product->get_sale_price();

        $percentage    = round(100 - ($sale_price / $regular_price * 100)) . '%';
    }
    return '<span class="onsale">' . esc_html__('-', 'boostify-blocks') . ' ' . $percentage . '</span>';
}

/**
 * Generate the HTML for the sale badge, including the discount percentage if applicable.
 * @param WC_Product $product The WooCommerce product object.
 * @param bool $showSaleBadgeDiscoutPercent Whether to show the discount percentage on the sale badge.
 * @return string The generated HTML for the sale badge.
 */
function boostify_blocks_block_products_get_sale_badge_html($product,  $showSaleBadgeDiscoutPercent, $attributes = [])
{
    if (!$product->is_on_sale()) {
        return;
    }

    $is_show_sale_percent = (bool) ( $showSaleBadgeDiscoutPercent ?? false );

    $sale_pos   = $attributes['style_saleBadge']['position'] ?? 'top-right';
    $sale_shape = $attributes['style_saleBadge']['shape'] ?? 'round';
    $pos_class  = ( 'left' === $sale_pos || 'top-left' === $sale_pos )
        ? ' wcb-products__product-salebadge--left'
        : ' wcb-products__product-salebadge--right';
    $pos_class .= ' wcb-products__product-salebadge--' . sanitize_html_class( $sale_shape );

    if ($product->is_on_sale() && $is_show_sale_percent) {
        return '<div class="wcb-products__product-salebadge' . $pos_class . '"><div class="wcb-products__product-onsale wc-block-grid__product-onsale">
            ' . boostify_blocks_block_products_add_percentage_to_sale_badge($product) . '
            <span class="screen-reader-text">' . esc_html__('Product on sale', 'boostify-blocks') . '</span>
        </div></div>';
    }

    $sale_text = !empty($attributes['style_saleBadge']['text'])
        ? $attributes['style_saleBadge']['text']
        : 'Sale';

    return '<div class="wcb-products__product-salebadge' . $pos_class . '"><div class="wcb-products__product-onsale wc-block-grid__product-onsale">
			<span aria-hidden="true">' . esc_html($sale_text) . '</span>
			<span class="screen-reader-text">' . esc_html__('Product on sale', 'boostify-blocks') . '</span>
		</div></div>';
}

/**
 * Generate the HTML for the out of stock badge.
 * @param WC_Product $product The WooCommerce product object.
 * @param array $attributes The block attributes.
 * @return string The generated HTML for the out of stock badge.
 */
function boostify_blocks_block_products__get_out_of_stock_html($product, $attributes = [])
{
    if ($product->get_stock_status() === 'outofstock') {
        $out_pos   = $attributes['style_outOfStock']['position'] ?? 'top-left';
        if ( 'none' === $out_pos ) {
            return '';
        }

        $out_shape = $attributes['style_outOfStock']['shape'] ?? 'round';
        $pos_class = ( 'right' === $out_pos || 'top-right' === $out_pos )
            ? ' wcb-products__product-outofstock-badge--right'
            : ' wcb-products__product-outofstock-badge--left';
        $pos_class .= ' wcb-products__product-outofstock-badge--' . sanitize_html_class( $out_shape );

        $out_text = !empty($attributes['style_outOfStock']['text'])
            ? $attributes['style_outOfStock']['text']
            : 'Sold Out';

        return '<div class="wcb-products__product-outofstock-badge' . $pos_class . '"><div class="wcb-products__product-on-outofstock wc-block-grid__product-outofstock">
                    <span aria-hidden="true">' . esc_html($out_text) . '</span>
                    <span class="screen-reader-text">' . esc_html__('Product on sale', 'boostify-blocks') . '</span>
                </div></div>';
    }
}

/**
 * Generate the HTML for the pre-order badge.
 * @param WC_Product $product The WooCommerce product object.
 * @param array $attributes The block attributes.
 * @return string The generated HTML for the pre-order badge.
 */
function boostify_blocks_block_products__get_preorder_html( $product, $attributes = [] ) {

    if ( ! $product instanceof WC_Product ) {
        return '';
    }

    // Check if Woostify Pro is active
    $woostify_pro_active = defined( 'WOOSTIFY_PRO_VERSION' ) || in_array( 'woostify-pro/woostify-pro.php', get_option( 'active_plugins', array() ), true ) || in_array( 'woostify-pro-dev/woostify-pro.php', get_option( 'active_plugins', array() ), true );
    if ( ! $woostify_pro_active ) {
        return '';
    }

    // Check if Pre-Order add-on is enabled
    $preorder_addon_active = ( 'activated' === get_option( 'woostify_wc_pre_order' ) || defined( 'WOOSTIFY_PRO_PRE_ORDER' ) );
    if ( ! $preorder_addon_active ) {
        return '';
    }

    if ( ! class_exists( 'Woostify_Pre_Order' ) ) {
        return '';
    }

    $preorder_opts = Woostify_Pre_Order::get_instance()->get_options();
    if ( isset( $preorder_opts['shop_page'] ) && '1' !== $preorder_opts['shop_page'] ) {
        return '';
    }

    $product_id = $product->get_id();

    // Woostify Pre-Order detection
    $preorder_date = get_post_meta( $product_id, '_onpreorder_date_to', true );

    if ( empty( $preorder_date ) ) {
        return '';
    }

    // Optional: hide badge if preorder expired
    $is_expired = strtotime( $preorder_date ) < current_time( 'timestamp' );
    if ( $is_expired ) {
        return '';
    }

    $label_text = ! empty( $preorder_opts['label'] ) ? $preorder_opts['label'] : __( 'Pre-Order', 'boostify-blocks' );
    $message = Woostify_Pre_Order::get_instance()->get_message( $product_id );
    if ( empty( $message ) ) {
        $formatted_date = wp_date( get_option( 'date_format' ), strtotime( $preorder_date ) );
        $message = sprintf( __( 'Available for Pre-Order - This item will be available on %s', 'boostify-blocks' ), $formatted_date );
    }

    $days_label  = $preorder_opts['days_label'] ?? 'd';
    $hours_label = $preorder_opts['hours_label'] ?? 'h';
    $mins_label  = $preorder_opts['minutes_label'] ?? 'm';
    $secs_label  = $preorder_opts['seconds_label'] ?? 's';

    // Context for the Interactivity API store (see public/js/pre-order/wcb-pre-order-view.js).
    $preorder_context = wp_json_encode(
        array(
            'endDate' => $preorder_date,
            'closed'  => false,
            'days'    => '00',
            'hours'   => '00',
            'minutes' => '00',
            'seconds' => '00',
        )
    );

    $show_countdown = ! isset( $preorder_opts['countdown'] ) || '1' === $preorder_opts['countdown'];

    $html = '<div class="wcb-products__product-preorder-badge">';
    $html .= '<div class="wcb-products__product-salebadge">';
    $html .= '<div class="wcb-products__product-onsale wc-block-grid__product-onsale">';
    $html .= '<span aria-hidden="true">' . esc_html( $label_text ) . '</span>';
    $html .= '</div>';
    $html .= '</div>';
    $html .= '<div class="wcb-products__product-preorder-info"'
        . ' data-wp-interactive="boostify-blocks/pre-order"'
        . ' data-wp-context=\'' . esc_attr( $preorder_context ) . '\''
        . ' data-wp-init="callbacks.start"'
        . '>';
    if ( $show_countdown ) {
        $html .= '<div class="wcb-products__product-preorder-countdown" data-wp-bind--hidden="context.closed">';
        $html .= '<span class="wcb-products__product-preorder-countdown-item"><span data-wp-text="context.days"></span>' . esc_html( $days_label ) . '</span>';
        $html .= '<span class="wcb-products__product-preorder-countdown-item"><span data-wp-text="context.hours"></span>' . esc_html( $hours_label ) . '</span>';
        $html .= '<span class="wcb-products__product-preorder-countdown-item"><span data-wp-text="context.minutes"></span>' . esc_html( $mins_label ) . '</span>';
        $html .= '<span class="wcb-products__product-preorder-countdown-item"><span data-wp-text="context.seconds"></span>' . esc_html( $secs_label ) . '</span>';
        $html .= '</div>';
    }
    $html .= '<span class="wcb-products__product-preorder-message">' . wp_kses_post( $message ) . '</span>';
    $html .= '</div>';
    $html .= '</div>';

    return $html;
}

/**
 * Generate the HTML for the add to cart button.
 * @param WC_Product $product The WooCommerce product object.
 * @param array $attributes The block attributes.
 * @return string The generated HTML for the add to cart button.
 */
function boostify_blocks_block_products_get_button_html($product, $attributes, $badge_html = '')
{
    $isCheckBottom = false;
    if ($attributes['general_addToCartBtn']['position'] === "bottom") {
        $isCheckBottom = true;
    }
    
    return '<div
                class="wcb-products__product-add-to-cart wp-block-button wc-block-grid__product-add-to-cart"
                style="overflow: ' . ($isCheckBottom && ($badge_html == "")? 'hidden' : 'visible') . ';">'
                . boostify_blocks_block_products_get_add_to_cart($product, $attributes) .
            '</div>';
}

/**
 * Generate the HTML for the add to cart button.
 * @param WC_Product $product The WooCommerce product object.
 * @param array $attributesFromBlock The block attributes.
 * @return string The generated HTML for the add to cart button.
 */
function boostify_blocks_block_products_get_add_to_cart($product, $attributesFromBlock)
{
    $ajax_class = ($product->supports('ajax_add_to_cart') &&
        $product->is_purchasable() &&
        ($product->is_in_stock() || $product->backorders_allowed())) ? ' ajax_add_to_cart' : '';
    
    // NEW: get color from block attributes
    $svg_color = $attributesFromBlock['style_addToCardBtn']['colorAndBackgroundColor']['Normal']['color'] ?? '#000000';

    // product specific class for hover color change
    $product_class = 'wcb-add-to-cart-icon-' . $product->get_id();

    // NEW: inline SVG with color
    $icon_markup = '
        <span class="wcb-products__add-to-cart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                <path 
                    fill="' . esc_attr($svg_color) . '"
                    d="m 14.176,12.5 c 0.965,0 1.75,0.785 1.75,1.75 0,0.965 -0.785,1.75 -1.75,1.75 -0.965,0 -1.75,-0.785 -1.75,-1.75 0,-0.965 0.785,-1.75 1.75,-1.75 z m 0,2.5 c 0.414,0 0.75,-0.337 0.75,-0.75 0,-0.413 -0.336,-0.75 -0.75,-0.75 -0.414,0 -0.75,0.337 -0.75,0.75 0,0.413 0.336,0.75 0.75,0.75 z m -8.5,-2.5 c 0.965,0 1.75,0.785 1.75,1.75 0,0.965 -0.785,1.75 -1.75,1.75 -0.965,0 -1.75,-0.785 -1.75,-1.75 0,-0.965 0.785,-1.75 1.75,-1.75 z m 0,2.5 c 0.414,0 0.75,-0.337 0.75,-0.75 0,-0.413 -0.336,-0.75 -0.75,-0.75 -0.414,0 -0.75,0.337 -0.75,0.75 0,0.413 0.336,0.75 0.75,0.75 z M 3.555,2 3.857,4 H 17 l -1.118,8.036 H 3.969 L 2.931,4.573 2.695,3 H -0.074 V 2 Z M 4,5 4.139,6 H 15.713 L 15.852,5 Z M 15.012,11.036 15.573,7 H 4.278 l 0.561,4.036 z"
                ></path>
            </svg>
        </span>';
    
    $label_markup = '<span class="wcb-products__add-to-cart-label">' . esc_html($product->add_to_cart_text()) . '</span>';

    $show_icon = $attributesFromBlock['general_addToCartBtn']['isShowIcon'] ?? true;

    $has_quantity = boostify_blocks_block_products_has_quantity_feature($attributesFromBlock);
    $quantity_bind_attr = $has_quantity ? ' data-wp-bind--data-quantity="context.quantity"' : '';

    $btn_markup = sprintf(
        '<a
            href="%s"
            data-product_id="%s"
            data-quantity="1"%s
            class="add_to_cart_button %s %s"
            rel="nofollow"
        >%s%s</a>',
        esc_url($product->add_to_cart_url()),
        esc_attr($product->get_id()),
        $quantity_bind_attr,
        esc_attr($product_class),
        esc_attr($ajax_class),
        $show_icon ? $icon_markup : '',
        $label_markup
    );

    return $btn_markup;
}

/**
 * Whether the quantity stepper should be rendered for the given block attributes.
 * @param array $attributes The block attributes.
 * @return bool
 */
function boostify_blocks_block_products_has_quantity_feature($attributes)
{
    $pos = $attributes['general_addToCartBtn']['position'] ?? '';
    if ( 'bottom-visible' === $pos ) {
        $pos = 'bottom visible';
    } elseif ( 'image' === $pos ) {
        $pos = 'inside image';
    }

    return boostify_blocks_is_enabled($attributes['general_addToCartBtn']['isShowQuantity'] ?? "")
        && ( 'bottom' === $pos || 'bottom visible' === $pos );
}

/**
 * Generate the HTML for the product quantity input.
 * @return string The generated HTML for the product quantity input.
 */
function boostify_blocks_block_products_get_product_quantity()
{
    $quantity_input = '<div class="wcb-products__quantity">'
        . '<button type="button" class="wcb-products__quantity-btn wcb-products__quantity-minus" aria-label="' . esc_attr__( 'Decrease quantity', 'boostify-blocks' ) . '" data-wp-on--click="actions.decreaseQuantity">&minus;</button>'
        . '<input'
        . ' type="number"'
        . ' class="wcb-products__quantity-input input-text qty text"'
        . ' step="1"'
        . ' min="1"'
        . ' value="1"'
        . ' size="4"'
        . ' pattern="[0-9]*"'
        . ' inputmode="numeric"'
        . ' aria-label="' . esc_attr__( 'Quantity', 'boostify-blocks' ) . '"'
        . ' data-wp-bind--value="context.quantity"'
        . ' data-wp-on--input="actions.updateQuantityInput"'
        . '>'
        . '<button type="button" class="wcb-products__quantity-btn wcb-products__quantity-plus" aria-label="' . esc_attr__( 'Increase quantity', 'boostify-blocks' ) . '" data-wp-on--click="actions.increaseQuantity">+</button>'
        . '</div>';
    return '<div class="wcb-products__quantity-add-to-cart">' . $quantity_input . '</div>';
}

if (!function_exists("boostify_blocks_block_products_parse_filter_attributes")) :
    function boostify_blocks_block_products_parse_filter_attributes($filterAttrs)
    {
        // These should match what's set in JS `registerBlockType`.
        $defaults = array(
            'categories'        => array(),
            'catOperator'       => 'any',
            'stockStatus'       => array_keys(wc_get_product_stock_status_options()),
        );

        return wp_parse_args($filterAttrs, $defaults);
    }
endif;



if (!function_exists("boostify_blocks_block_products_parse_query_args")) :
    function boostify_blocks_block_products_parse_query_args($filtersAttrs)
    {
        $postsPerPage = $filtersAttrs["numberOfItems"] ?? 9;
        $paged = get_query_var('paged') ? get_query_var('paged') : 1;
        // $offset = ($paged - 1) * $postsPerPage;

        // Store the original meta query.
        $meta_query = WC()->query->get_meta_query();

        $query_args = array(
            'post_type'           => 'product',
            'post_status'         => 'publish',
            'fields'              => 'ids',
            'ignore_sticky_posts' => true,
            'no_found_rows'       => false,
            'orderby'             => '',
            'order'               => '',
            'meta_query'          => $meta_query, // phpcs:ignore WordPress.DB.SlowDBQuery
            'tax_query'           => array(), // phpcs:ignore WordPress.DB.SlowDBQuery
            'posts_per_page'      => $postsPerPage,
            's'                 => $filtersAttrs['keyword'] ?? '',
            'paged'             => $paged
        );

        boostify_blocks_block_products_set_block_query_args($query_args, $filtersAttrs);
        boostify_blocks_block_products_set_ordering_query_args($query_args, $filtersAttrs);
        boostify_blocks_block_products_set_categories_query_args($query_args, $filtersAttrs);
        boostify_blocks_block_products_set_tags_query_args($query_args, $filtersAttrs);
        boostify_blocks_block_products_set_attributes_query_args($query_args, $filtersAttrs);
        boostify_blocks_block_products_set_visibility_query_args($query_args, $filtersAttrs);
        boostify_blocks_block_products_set_stock_status_query_args($query_args, $filtersAttrs, $meta_query);

        return $query_args;
    }
endif;

if (!function_exists("boostify_blocks_block_products_set_ordering_query_args")) :

    function boostify_blocks_block_products_set_ordering_query_args(&$query_args, $attributes)
    {
        $order_by = $attributes['orderBy'] ?? 'date';
        $order = $attributes['order'] ?? 'DESC';
        $keyword = $attributes['keyword'] ?? ''; 
    
        // Flag variable to check if the orderby is handled in the switch
        $is_handled = false;
    
        switch ($order_by) {
            case 'ID':
                $query_args['orderby'] = 'ID';
                $query_args['order'] = $order;
                $is_handled = true;
                break;
    
            case 'date ID':
                $query_args['orderby'] = 'date ID';
                $query_args['order'] = $order;
                $is_handled = true;
                break;
    
            case 'title':
                $query_args['orderby'] = 'title';
                $query_args['order'] = $order;
                $is_handled = true;
                break;
    
            case 'menu_order title':
                $query_args['orderby'] = 'menu_order title';
                $query_args['order'] = $order;
                $is_handled = true;
                break;
    
            case 'popularity':
                // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key -- Required for sorting by sales count.
                $query_args['meta_key'] = 'total_sales';
                $query_args['orderby'] = 'meta_value_num';
                $query_args['order'] = $order;
                $is_handled = true;
                break;

            case 'price':
                // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key -- Required for sorting by price.
                $query_args['meta_key'] = '_price';
                $query_args['orderby'] = 'meta_value_num';
                $query_args['order'] = $order;
                $is_handled = true;
                break;

            case 'rating':
                // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key -- Required for sorting by rating.
                $query_args['meta_key'] = '_wc_average_rating';
                $query_args['orderby'] = 'meta_value_num';
                $query_args['order'] = $order;
                $is_handled = true;
                break;
    
            case 'relevance':
                if (!empty($keyword)) {
                    $query_args['orderby'] = 'relevance';
                    $query_args['order'] = $order;
                } else {
                    // if not keyword, fallback return date
                    $query_args['orderby'] = 'date';
                    $query_args['order'] = $order;
                }
                $is_handled = true;
                break;
    
            case 'rand':
                $query_args['orderby'] = 'rand';
                // no need 'order' so 'rand' is random
                $is_handled = true;
                break;
    
            default:
                $query_args['orderby'] = 'date';
                $query_args['order'] = $order;
                break;
        }
    
        // Only apply WooCommerce Catalog Ordering to cases that are not processed in switches (Default)
        if (!$is_handled) {
            $query_args = array_merge(
                $query_args,
                WC()->query->get_catalog_ordering_args($query_args['orderby'], $query_args['order'])
            );
        }
    }
endif;

if (!function_exists("boostify_blocks_block_products_set_block_query_args")) :
    /**
     * Get product IDs that are on sale.
     *
     * @return array Array of product IDs.
     */
    function wc_get_product_ids_on_sale_myself() {
        $product_ids_on_sale = get_transient('wc_product_ids_on_sale');

        if (false === $product_ids_on_sale) {
            $product_ids_on_sale = array();

            // Load all product IDs.
            $args = array(
                'post_type'      => 'product',
                'posts_per_page' => -1,
                'post_status'    => 'publish',
                'fields'         => 'ids',
            );

            $product_ids = get_posts($args);

            // Check each product to see if it's on sale.
            foreach ($product_ids as $product_id) {
                $product = wc_get_product($product_id);
                if ($product && $product->is_on_sale()) {
                    $product_ids_on_sale[] = $product_id;
                }
            }

            // Also include variations if they are on sale.
            $args['post_type'] = 'product_variation';
            $variation_ids     = get_posts($args);

            foreach ($variation_ids as $variation_id) {
                $variation = wc_get_product($variation_id);
                if ($variation && $variation->is_on_sale()) {
                    $product_ids_on_sale[] = $variation->get_parent_id();
                }
            }

            // Remove duplicates and store in transient with a unique, prefixed name.
            $product_ids_on_sale = array_unique($product_ids_on_sale);
            set_transient('wc_product_ids_on_sale', $product_ids_on_sale, DAY_IN_SECONDS);
        }

        // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- WooCommerce core hook.
        return apply_filters('boostify_blocks_product_ids_on_sale', $product_ids_on_sale);
    }

    function boostify_blocks_block_products_set_block_query_args(&$query_args, $filtersAttrs)
    {
        if (boostify_blocks_is_enabled($filtersAttrs['isOnSale'] ?? "")) {
            $query_args['post__in'] = array_merge(array(0), wc_get_product_ids_on_sale_myself());
        }
    }
endif;

if (!function_exists("boostify_blocks_block_products_set_categories_query_args")) :
    function boostify_blocks_block_products_set_categories_query_args(&$query_args, $attributes)
    {
        if (!empty($attributes['categories'])) {
            $categories = array_map('absint', $attributes['categories']);

            $query_args['tax_query'][] = array(
                'taxonomy'         => 'product_cat',
                'terms'            => $categories,
                'field'            => 'term_id',
                'operator'         => boostify_blocks_block_products_tax_operator_mapping($attributes['catOperator'] ?? null),

                /*
				 * When cat_operator is AND, the children categories should be excluded,
				 * as only products belonging to all the children categories would be selected.
				 */
                'include_children' => 'all' === $attributes['catOperator'] ? false : true,
            );
        }
    }
endif;


if (!function_exists("boostify_blocks_block_products_set_tags_query_args")) :
    function boostify_blocks_block_products_set_tags_query_args(&$query_args, $attributes)
    {
        if (!empty($attributes['tags'])) {
            $query_args['tax_query'][] = array(
                'taxonomy' => 'product_tag',
                'terms'    => array_map('absint', $attributes['tags']),
                'field'    => 'term_id',
                'operator' => boostify_blocks_block_products_tax_operator_mapping($attributes['tagOperator'] ?? null),
            );
        }
    }
endif;

if (!function_exists("boostify_blocks_block_products_set_attributes_query_args")) :
    function boostify_blocks_block_products_set_attributes_query_args(&$query_args, $attributes)
    {
        if (!empty($attributes['attributes'])) {
            $taxonomy = sanitize_title($attributes['attributes'][0]['attr_slug']);
            $terms    = wp_list_pluck($attributes['attributes'], 'id');

            $query_args['tax_query'][] = array(
                'taxonomy' => $taxonomy,
                'terms'    => array_map('absint', $terms),
                'field'    => 'term_id',
                'operator' => boostify_blocks_block_products_tax_operator_mapping($attributes['attrOperator'] ?? null)
            );
        }
    }
endif;

if (!function_exists("boostify_blocks_block_products_set_visibility_query_args")) :
    function boostify_blocks_block_products_set_visibility_query_args(&$query_args, $attributes)
    {
        $product_visibility_terms  = wc_get_product_visibility_term_ids();
        $product_visibility_not_in = array($product_visibility_terms['exclude-from-catalog']);

        if ('yes' === get_option('woocommerce_hide_out_of_stock_items')) {
            $product_visibility_not_in[] = $product_visibility_terms['outofstock'];
        }

        $query_args['tax_query'][] = array(
            'taxonomy' => 'product_visibility',
            'field'    => 'term_taxonomy_id',
            'terms'    => $product_visibility_not_in,
            'operator' => 'NOT IN',
        );
    }
endif;

if (!function_exists("boostify_blocks_block_products_set_stock_status_query_args")) :
    function boostify_blocks_block_products_set_stock_status_query_args(&$query_args, $attributes, $meta_query)
    {
        $stock_statuses = array_keys(wc_get_product_stock_status_options());

        // phpcs:disable WordPress.DB.SlowDBQuery.slow_db_query_meta_query
        if (!empty($attributes['stockStatus']) && $stock_statuses !== $attributes['stockStatus']) {
            // Reset meta_query then update with our stock status.
            $query_args['meta_query']   = $meta_query;
            $query_args['meta_query'][] = array(
                'key'     => '_stock_status',
                'value'   => array_merge([''], $attributes['stockStatus']),
                'compare' => 'IN',
            );
        } else {
            $query_args['meta_query'] = $meta_query;
        }
        // phpcs:enable WordPress.DB.SlowDBQuery.slow_db_query_meta_query
    }
endif;


if (!function_exists('boostify_blocks_block_products_tax_operator_mapping')) :
    function boostify_blocks_block_products_tax_operator_mapping(string $operator = "in")
    {
        $operator_mapping = [
            'in'     => 'IN',
            'not_in' => 'NOT IN',
            'all'    => 'AND',
        ];
        return $operator_mapping[$operator] ?? "IN";
    }
endif;
