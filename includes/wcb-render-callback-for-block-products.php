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
    $style_layout['numberOfColumn'] = [
        'Desktop' => $pick($theme['product_per_row']['desktop'] ?? null, $style_layout['numberOfColumn']['Desktop'] ?? null),
        'Tablet'  => $pick($theme['product_per_row']['tablet'] ?? null, $style_layout['numberOfColumn']['Tablet'] ?? null),
        'Mobile'  => $pick($theme['product_per_row']['mobile'] ?? null, $style_layout['numberOfColumn']['Mobile'] ?? null),
    ];
    $theme_align = $theme['shop_archive_product_content']['align'] ?? null;
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
    $attributes['style_layout'] = $style_layout;

    // Border
    $border = $attributes['style_border']['mainSettings'] ?? [];
    $border_style = $theme['shop_archive_border']['style'] ?? null;
    // In block-override mode, prefer block's border style; fall back to Customizer if block has none.
    $effective_border_style = $block_overrides
        ? (($border['style'] ?? null) ?: $border_style)
        : ($border_style ?: ($border['style'] ?? null));
    if ($effective_border_style && $effective_border_style !== 'none') {
        $attributes['style_border']['mainSettings'] = [
            'color' => $pick($theme['shop_archive_border']['color'] ?? null, $border['color'] ?? null),
            'style' => $effective_border_style,
            'width' => $pick(
                isset($theme['shop_archive_border']['width']) ? $theme['shop_archive_border']['width'] . 'px' : null,
                $border['width'] ?? null
            ),
        ];
    }

    // Sorting & filtering
    $attributes['general_sortingAndFiltering'] = array_merge(
        $attributes['general_sortingAndFiltering'] ?? [],
        [
            'numberOfItems' => $pick($theme['product_per_page'] ?? null, $attributes['general_sortingAndFiltering']['numberOfItems'] ?? null),
        ]
    );

    // Content visibility flags
    $content = $theme['shop_archive_product_content'] ?? [];
    $attributes['general_content'] = array_merge(
        $attributes['general_content'] ?? [],
        [
            'isShowTitle'    => $pick_bool($content['title_flag'] ?? null, $attributes['general_content']['isShowTitle'] ?? null),
            'isShowCategory' => $pick_bool($content['category_flag'] ?? null, $attributes['general_content']['isShowCategory'] ?? null),
            'isShowRating'   => $pick_bool($content['rating_flag'] ?? null, $attributes['general_content']['isShowRating'] ?? null),
            'isShowPrice'    => $pick_bool($content['price_flag'] ?? null, $attributes['general_content']['isShowPrice'] ?? null),
        ]
    );

    // Featured image hover
    $attributes['general_featuredImage'] = array_merge(
        $attributes['general_featuredImage'] ?? [],
        [
            'hoverType' => $pick($theme['shop_archive_product_image']['hover'] ?? null, $attributes['general_featuredImage']['hoverType'] ?? null),
        ]
    );

    // Featured image border
    $featured_border = $attributes['style_featuredImage']['border']['mainSettings'] ?? [];
    $fi_style = $theme['shop_archive_product_image']['style'] ?? null;
    $effective_fi_style = $block_overrides
        ? (($featured_border['style'] ?? null) ?: $fi_style)
        : ($fi_style ?: ($featured_border['style'] ?? null));
    if ($effective_fi_style && $effective_fi_style !== 'none') {
        $attributes['style_featuredImage']['border']['mainSettings'] = [
            'color' => $pick($theme['shop_archive_product_image']['color'] ?? null, $featured_border['color'] ?? null),
            'style' => $effective_fi_style,
            'width' => $pick(
                isset($theme['shop_archive_product_image']['width']) ? $theme['shop_archive_product_image']['width'] . 'px' : null,
                $featured_border['width'] ?? null
            ),
        ];
    }

    // Sale badge
    $sale = $theme['shop_archive_sale_tag'] ?? [];
    $sale_position = $pick($sale['position'] ?? null, $attributes['style_saleBadge']['position'] ?? null) ?? 'top-right';
    $attributes['style_saleBadge'] = array_merge(
        $attributes['style_saleBadge'] ?? [],
        [
            'backgroundColor' => $pick($sale['bg_color'] ?? null, $attributes['style_saleBadge']['backgroundColor'] ?? null),
            'textColor'       => $pick($sale['text_color'] ?? null, $attributes['style_saleBadge']['textColor'] ?? null),
            'position'        => $sale_position === 'left' ? 'top-left' : 'top-right',
        ]
    );

    // Out of stock badge
    $outofstock = $theme['shop_archive_out_of_stock'] ?? [];
    $raw_out_position = $pick($outofstock['position'] ?? null, $attributes['style_outOfStock']['position'] ?? null) ?? 'none';
    $mapped_out_position = $raw_out_position === 'left'
        ? 'top-left'
        : ($raw_out_position === 'right' ? 'top-right' : 'none');
    $attributes['style_outOfStock'] = array_merge(
        $attributes['style_outOfStock'] ?? [],
        [
            'backgroundColor' => $pick($outofstock['bg_color'] ?? null, $attributes['style_outOfStock']['backgroundColor'] ?? null),
            'textColor'       => $pick($outofstock['text_color'] ?? null, $attributes['style_outOfStock']['textColor'] ?? null),
            'position'        => $mapped_out_position,
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

    // Add to cart styles
    $atc = $theme['shop_archive_add_to_cart_btn'] ?? [];
    $existing_colors = $attributes['style_addToCardBtn']['colorAndBackgroundColor'] ?? [];
    $attributes['style_addToCardBtn'] = array_merge(
        $attributes['style_addToCardBtn'] ?? [],
        [
            'colorAndBackgroundColor' => array_merge(
                $existing_colors,
                [
                    'Normal' => [
                        'color'           => $pick($atc['text_color'] ?? null, $existing_colors['Normal']['color'] ?? null),
                        'backgroundColor' => $pick($atc['bg_color'] ?? null, $existing_colors['Normal']['backgroundColor'] ?? null),
                    ],
                    'Hover' => [
                        'color'           => $pick($atc['hover_text_color'] ?? null, $existing_colors['Hover']['color'] ?? null),
                        'backgroundColor' => $pick($atc['hover_bg_color'] ?? null, $existing_colors['Hover']['backgroundColor'] ?? null),
                    ],
                ]
            ),
            'border' => array_merge(
                $attributes['style_addToCardBtn']['border'] ?? [],
                [
                    'radius' => [
                        'Desktop' => $pick(
                            isset($atc['border_radius']) ? $atc['border_radius'] . 'px' : null,
                            $attributes['style_addToCardBtn']['border']['radius']['Desktop'] ?? null
                        ),
                        'Tablet' => $pick(
                            isset($atc['border_radius']) ? $atc['border_radius'] . 'px' : null,
                            $attributes['style_addToCardBtn']['border']['radius']['Tablet'] ?? null
                        ),
                        'Mobile' => $pick(
                            isset($atc['border_radius']) ? $atc['border_radius'] . 'px' : null,
                            $attributes['style_addToCardBtn']['border']['radius']['Mobile'] ?? null
                        ),
                    ],
                ]
            ),
        ]
    );

    // Add to cart general settings
    $atc_position = $atc['position'] ?? null;
    $mapped_atc_position = $atc_position === 'bottom-visible' ? 'bottom visible'
        : ($atc_position === 'image' ? 'inside image'
            : ($atc_position === 'icon' ? 'icon'
                : ($atc_position === 'bottom' ? 'bottom'
                    : ($atc_position ?: ($attributes['general_addToCartBtn']['position'] ?? null)))));
    $attributes['general_addToCartBtn'] = array_merge(
        $attributes['general_addToCartBtn'] ?? [],
        [
            'isShowButton' => $block_overrides
                ? ($attributes['general_addToCartBtn']['isShowButton'] ?? ($atc_position !== 'none'))
                : ($atc_position === 'none' ? false : ($attributes['general_addToCartBtn']['isShowButton'] ?? true)),
            'position' => $block_overrides && !empty($attributes['general_addToCartBtn']['position'])
                ? $attributes['general_addToCartBtn']['position']
                : $mapped_atc_position,
            'isShowQuantity' => $pick_bool($content['quantity_flag'] ?? null, $attributes['general_addToCartBtn']['isShowQuantity'] ?? null),
        ]
    );

    // Wishlist button
    $wishlist = $theme['shop_archive_wishlist_btn'] ?? [];
    $attributes['style_wishlistBtn'] = array_merge(
        $attributes['style_wishlistBtn'] ?? [],
        [
            'position'               => $pick($wishlist['position'] ?? null, $attributes['style_wishlistBtn']['position'] ?? null),
            'style'                  => $pick($wishlist['style'] ?? null, $attributes['style_wishlistBtn']['style'] ?? null),
            'wishlist_plugin_active' => $pick($wishlist['wishlist_plugin_active'] ?? null, $attributes['style_wishlistBtn']['wishlist_plugin_active'] ?? false),
        ]
    );

    // Quick view button
    $quickview = $theme['shop_quick_view_btn'] ?? [];
    $attributes['style_quickViewBtn'] = array_merge(
        $attributes['style_quickViewBtn'] ?? [],
        [
            'enabled'             => $pick($quickview['enabled'] ?? null, $attributes['style_quickViewBtn']['enabled'] ?? null),
            'position'            => $pick($quickview['position'] ?? null, $attributes['style_quickViewBtn']['position'] ?? null),
            'show_icon'           => $pick($quickview['show_icon'] ?? null, $attributes['style_quickViewBtn']['show_icon'] ?? null),
            'bg_color'            => $pick($quickview['bg_color'] ?? null, $attributes['style_quickViewBtn']['bg_color'] ?? null),
            'text_color'          => $pick($quickview['text_color'] ?? null, $attributes['style_quickViewBtn']['text_color'] ?? null),
            'hover_bg_color'      => $pick($quickview['hover_bg_color'] ?? null, $attributes['style_quickViewBtn']['hover_bg_color'] ?? null),
            'hover_text_color'    => $pick($quickview['hover_text_color'] ?? null, $attributes['style_quickViewBtn']['hover_text_color'] ?? null),
            'border_radius'       => $pick(
                isset($quickview['border_radius']) ? $quickview['border_radius'] . 'px' : null,
                $attributes['style_quickViewBtn']['border_radius'] ?? null
            ),
            'woostify_pro_active' => $pick($quickview['woostify_pro_active'] ?? null, $attributes['style_quickViewBtn']['woostify_pro_active'] ?? null),
        ]
    );

    // Countdown urgency
    $cu = $theme['countdown_urgency'] ?? [];
    $attributes['style_countdownUrgency'] = array_merge(
        $attributes['style_countdownUrgency'] ?? [],
        [
            'countdownUrgencyActive' => $pick($cu['active'] ?? null, $attributes['style_countdownUrgency']['countdownUrgencyActive'] ?? null),
            'style'                  => $pick($cu['style'] ?? null, $attributes['style_countdownUrgency']['style'] ?? null),
            'applyFor'               => $pick($cu['apply_for'] ?? null, $attributes['style_countdownUrgency']['applyFor'] ?? null),
            'categoriesSelected'     => $pick($cu['categories_selected'] ?? null, $attributes['style_countdownUrgency']['categoriesSelected'] ?? null),
            'productsSelected'       => $pick($cu['products_selected'] ?? null, $attributes['style_countdownUrgency']['productsSelected'] ?? null),
            'categoriesExclude'      => $pick($cu['categories_exclude'] ?? null, $attributes['style_countdownUrgency']['categoriesExclude'] ?? null),
            'productsExclude'        => $pick($cu['products_exclude'] ?? null, $attributes['style_countdownUrgency']['productsExclude'] ?? null),
            'timeDuration'           => $pick($cu['time_duration'] ?? null, $attributes['style_countdownUrgency']['timeDuration'] ?? null),
            'timeType'               => $pick($cu['time_type'] ?? null, $attributes['style_countdownUrgency']['timeType'] ?? null),
            'message'                => $pick($cu['message'] ?? null, $attributes['style_countdownUrgency']['message'] ?? null),
            'daysLabel'              => $pick($cu['days_label'] ?? null, $attributes['style_countdownUrgency']['daysLabel'] ?? null),
            'hoursLabel'             => $pick($cu['hours_label'] ?? null, $attributes['style_countdownUrgency']['hoursLabel'] ?? null),
            'minutesLabel'           => $pick($cu['minutes_label'] ?? null, $attributes['style_countdownUrgency']['minutesLabel'] ?? null),
            'secondsLabel'           => $pick($cu['seconds_label'] ?? null, $attributes['style_countdownUrgency']['secondsLabel'] ?? null),
            'displayOnThumbnail'     => $pick($cu['display_on_thumbnail'] ?? null, $attributes['style_countdownUrgency']['displayOnThumbnail'] ?? null),
            'hideAfterTimeUp'        => $pick($cu['hide_after_time_up'] ?? null, $attributes['style_countdownUrgency']['hideAfterTimeUp'] ?? null),
        ]
    );

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
    $loop = new WP_Query($args);


    if (!$loop->have_posts()) {
        return '';
    }

?>

    <?php
        // Update the serialized attributes inside the saved content so frontend CSS uses refreshed defaults.
        if (!empty($uniqueId)) {
            $json = esc_html(wp_json_encode($attributes));
            $content = preg_replace(
                '/(<pre[^>]*data-wcb-block-attrs=["\']?' . preg_quote($uniqueId, '/') . '["\']?[^>]*>)(.*?)(<\/pre>)/s',
                '$1' . $json . '$3',
                $content
            );
        }

        echo $content;
    ?>
    <div class="wcb-products__wrap <?php echo esc_attr($uniqueId); ?> <?php echo esc_attr($className); ?>" data-uniqueid="<?php echo esc_attr($uniqueId); ?>">

        <?php
        if ($loop->have_posts()) :

            // do_action('woocommerce_before_shop_loop');
            // woocommerce_product_loop_start();
        ?>
            <div class="scroll-snap-slider -multi wcb-products__list swithToScrollSnapX--<?php echo esc_attr($sortingAndFilteringAttrs['swithToScrollSnapX'] ?? ""); ?>">
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
        $data->badge = boostify_blocks_block_products_get_sale_badge_html($product, $attributes['general_content']['showSaleBadgeDiscoutPercent'] ?? false);
    }
    
    // Quantity input
    if (boostify_blocks_is_enabled($attributes['general_addToCartBtn']['isShowQuantity'] ?? "") && $attributes['general_addToCartBtn']['position'] !== "none") {
        $data->quantity_input = boostify_blocks_block_products_get_product_quantity($attributes);
    }

    $add_to_cart_position = $attributes['general_addToCartBtn']['position'] ?? '';

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
        if (boostify_blocks_is_enabled($attributes['general_addToCartBtn']['isShowButton'] ?? "")) {
            $data->button = boostify_blocks_block_products_get_button_html($product, $attributes, $product->get_price_html());
        }
    }

    if (boostify_blocks_is_enabled($attributes['general_content']['isShowCategory'] ?? "")) {
        $data->categories = boostify_blocks_block_products_get_category_html($product);
    }

    $data->out_of_stock = boostify_blocks_block_products__get_out_of_stock_html($product);
    // pre-order badge
    $data->preorder_badge = boostify_blocks_block_products__get_preorder_html($product);
    $btnInsideImage = ($attributes['general_addToCartBtn']['position'] ?? "") === "inside image";
    $btnIconAddToCart = ($attributes['general_addToCartBtn']['position'] ?? "") === "icon";
    $saleInsideImage = ($attributes['general_content']['saleBadgePosition'] ?? "") === "Inside image";
    $btnQuickViewBottomImage = ($attributes['style_quickViewBtn']['position'] ?? "") === "bottom-image" || ($attributes['style_quickViewBtn']['position'] ?? "") === "center-image" || ($attributes['style_quickViewBtn']['position'] ?? "") === "top-right";

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

    // Add to Wishlist default
    // $btn1 = $btnInsideImage ? $data->button : "";
    $btn2 = $data->button;

    // sale badge
    $classes .= $saleInsideImage ? " wcb-products__product--onsaleInsideImage" : "";
    $saleBadge1 = $saleInsideImage ? $data->badge : "";
    $saleBadge2 = $saleInsideImage ?   "" : $data->badge;

    // out of stock
    $classes .= $saleInsideImage ? " wcb-products__product--onsaleInsideImage" : "";
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

            $topRightItems[] = '
                <a
                    href="' . $add_to_cart_url . '"
                    data-product_id="' . $product_id_attr . '"
                    data-quantity="1"
                    class="wcb-products__product--btnIconAddToCart--item add_to_cart_button ' . $ajax_class . '"
                    rel="nofollow"
                ></a>';
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
    $btnQuickViewBottomImageHtml = $btnQuickViewBottomImage ?
        boostify_blocks_block_products__build_quick_view_html($product_id_attr, $attributes['style_quickViewBtn']['position']) : '';

    // Countdown urgency
    $countdownHtml = boostify_blocks_block_products__get_countdown_html( $attributes['style_countdownUrgency'] ?? [] );

    $escaped_classes = esc_attr($classes);
    $escaped_index = intval($index);
    $escaped_permalink = esc_url($data->permalink);
    $escaped_feat_classes = esc_attr($featuredClasses);

    return apply_filters(
        'woocommerce_blocks_product_grid_item_html', // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- WooCommerce core hook.
		"<div class=\"scroll-snap-slide {$escaped_classes}\" data-index=\"{$escaped_index}\">
                <div class=\"wcb-products__product-featured \">
                    <a href=\"{$escaped_permalink}\" class=\"{$escaped_feat_classes}\">
                        {$data->image}
                        {$isSwapHover}
                    </a>
                    {$topRightIconsHtml}
                    {$bottomRightIconHtml}
                    {$btnQuickViewBottomImageHtml}
                    {$countdownHtml}
                    {$saleBadge1}
                    {$saleOutOfStock}
                </div>
                <div class=\"wcb-products__product-content\">
                    {$data->categories}
                    {$data->title}
                    {$preorderBadge}
                    {$saleBadge2}
                    {$data->rating}
                    " . ($data->price_button_group ?? ($data->price . $data->quantity_input . $btn2)) . "
                </div>
			</div>",
        $data,
        $product
    );
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
function boostify_blocks_block_products__build_quick_view_html( $product_id_attr, $position ) {

    $html  = '<button 
        class="wcb-products__product--quickViewBottomImage--item product-quick-view-btn"
        data-product_id="' . esc_attr( $product_id_attr ) . '"
        data-pid="' . esc_attr( $product_id_attr ) . '"
        type="button"
        aria-haspopup="dialog"
    >';

    $html .= '
        <span class="wcb-products__product--quickViewBottomImage-svg__icon icon-eye">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                <path d="M16.965 8.817c-1.284-3.267-4.687-5.463-8.465-5.463s-7.181 2.196-8.465 5.463c-0.046 0.117-0.046 0.248 0 0.365 1.285 3.268 4.687 5.464 8.465 5.464s7.18-2.195 8.465-5.463c0.047-0.118 0.047-0.248 0-0.366zM8.5 13.646c-3.298 0-6.269-1.859-7.459-4.646 1.189-2.787 4.16-4.646 7.459-4.646s6.27 1.859 7.459 4.646c-1.19 2.786-4.161 4.646-7.459 4.646zM8.5 5.357c-2.009 0-3.643 1.634-3.643 3.643s1.634 3.643 3.644 3.643c2.008 0 3.643-1.634 3.643-3.643s-1.635-3.643-3.644-3.643zM8.5 11.643c-1.458 0-2.644-1.186-2.644-2.643s1.187-2.643 2.644-2.643c1.457 0 2.643 1.186 2.643 2.643s-1.185 2.643-2.643 2.643z" fill="currentColor"></path>
            </svg>
        </span>';

    if ( $position !== 'top-right' ) {
        $html .= '<span class="wcb-products__product--quickViewBottomImage__text">'
            . esc_html__( 'Quick View', 'woostify-pro' ) .
        '</span>';
    }

    $html .= '</button>';

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

    // Get Woostify theme settings
    $woostify = get_option('woostify_setting') ?: [];

    // Get image height from theme setting, default to 300 if not set
     if (($attributes['general_featuredImage']['hoverType'] ?? "") === 'swap') {
        $imageHeight = !empty($woostify['shop_page_product_image_height'])
                ? intval($woostify['shop_page_product_image_height'])
                : 'auto';
     } else {
        $imageHeight = 'auto';
     }
   

    error_log('Image height for product ID ' . $product->get_id() . ': ' . $imageHeight);

    // Get the default WooCommerce thumbnail HTML
    $image_html = $product->get_image('woocommerce_thumbnail', $attr);

    // Add inline style to control rendered height
    // This forces the browser to display the image at that height
    $style = 'style="height:' . esc_attr($imageHeight) . 'px; object-fit:cover;"';

    // Inject the style attribute into the <img> tag
    $image_html = preg_replace('/<img(.*?)>/', '<img$1 ' . $style . '>', $image_html);

    // Return the final HTML wrapped in a container
    return '<div class="wcb-products__product-image wc-block-grid__product-image">' . $image_html . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}

/**
 * Generate the HTML for the product title, wrapped in a heading tag and linked to the product page.
 * @param WC_Product $product The WooCommerce product object.
 * @param string $headingTag The HTML tag to use for the title (e.g.,
 * 'div', 'h2', 'h3'). Defaults to 'div' if not provided or empty.
 * @param string $link The URL to link the product title to.
 * @return string The generated HTML for the product title, wrapped in the specified heading tag and linked to the product page.
 */
function boostify_blocks_block_products_get_title_html($product, $headingTag = "div", $link)
{
    if (empty($headingTag)) {
        $headingTag = 'div';
    };
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
        $html  = '<div class="wcb-products__product-rating-wrap" style="justify-content: ' . esc_attr(convert_to_alignment_style($attributes['style_layout']['textAlignment'])) . ';">
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
function boostify_blocks_block_products_get_sale_badge_html($product,  $showSaleBadgeDiscoutPercent)
{
    if (!$product->is_on_sale()) {
        return;
    }

    $woostify = get_option('woostify_setting') ?: [];
    $is_show_sale_percent = $woostify['shop_page_sale_percent'];


    if ($product->is_on_sale() && $is_show_sale_percent) {
        return '<div class="wcb-products__product-salebadge"><div class="wcb-products__product-onsale wc-block-grid__product-onsale">
            ' . boostify_blocks_block_products_add_percentage_to_sale_badge($product) . '
            <span class="screen-reader-text">' . esc_html__('Product on sale', 'boostify-blocks') . '</span>
        </div></div>';
    }

    return '<div class="wcb-products__product-salebadge"><div class="wcb-products__product-onsale wc-block-grid__product-onsale">
			<span aria-hidden="true">' . esc_html__($woostify['shop_page_sale_text'] ?? 'Sale', 'boostify-blocks') . '</span>
			<span class="screen-reader-text">' . esc_html__('Product on sale', 'boostify-blocks') . '</span>
		</div></div>';
}

/**
 * Generate the HTML for the out of stock badge.
 * @param WC_Product $product The WooCommerce product object.
 * @return string The generated HTML for the out of stock badge.
 */
function boostify_blocks_block_products__get_out_of_stock_html($product)
{
    $woostify = get_option('woostify_setting') ?: [];


    if ($product->get_stock_status() === 'outofstock') {
        return '<div class="wcb-products__product-outofstock-badge"><div class="wcb-products__product-on-outofstock wc-block-grid__product-outofstock">
                    <span aria-hidden="true">' . esc_html__($woostify['shop_page_out_of_stock_text'] ?? 'Sold Out', 'boostify-blocks') . '</span>
                    <span class="screen-reader-text">' . esc_html__('Product on sale', 'boostify-blocks') . '</span>
                </div></div>';
    }
}

/**
 * Generate the HTML for the pre-order badge.
 * @param WC_Product $product The WooCommerce product object.
 * @return string The generated HTML for the pre-order badge.
 */
function boostify_blocks_block_products__get_preorder_html( $product ) {

    if ( ! $product instanceof WC_Product ) {
        return '';
    }

    // Check if Woostify Pro is active
    $woostify_pro_active = in_array('woostify-pro/woostify-pro.php', get_option('active_plugins', []));
    if ( ! $woostify_pro_active ) {
        return '';
    }

    // Check if Pre-Order add-on is enabled
    $preorder_addon_active = ( 'activated' === get_option( 'woostify_wc_pre_order' ) || defined( 'WOOSTIFY_PRO_PRE_ORDER' ) );
    if ( ! $preorder_addon_active ) {
        return '';
    }

    $product_id = $product->get_id();

    // Woostify Pre-Order detection
    $preorder_date = get_post_meta( $product_id, '_onpreorder_date_to', true );

    if ( empty( $preorder_date ) ) {
        return '';
    }

    // Optional: hide badge if preorder expired
    if ( strtotime( $preorder_date ) < current_time( 'timestamp' ) ) {
        return '';
    }

    // Format the date to display (e.g., "January 29, 2026")
    $formatted_date = wp_date( 'F d, Y', strtotime( $preorder_date ) );

    $html = '<style>
        .wcb-products__product-preorder-message {
            color: #000000;
            font-size: 15px;
            font-weight: 400;
        }
    </style>';
    $html .= '<div class="wcb-products__product-preorder-badge">';
    $html .= '<div class="wcb-products__product-salebadge">';
    $html .= '<div class="wcb-products__product-onsale wc-block-grid__product-onsale">';
    $html .= '<span aria-hidden="true">Pre-Order</span>';
    $html .= '</div>';
    $html .= '</div>';
    $html .= '<div class="wcb-products__product-preorder-info">';
    $html .= '<span class="wcb-products__product-preorder-message">Available for Pre-Order - This item will be available on ' . esc_html( $formatted_date ) . '</span>';
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
                style="
                    align-items: ' . esc_attr(convert_to_alignment_style($attributes['style_layout']['textAlignment'])) . ';
                    overflow: ' . ($isCheckBottom && ($badge_html == "")? 'hidden' : 'visible') . ';
                ">' 
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
    $hover_svg_color = $attributesFromBlock['style_addToCardBtn']['colorAndBackgroundColor']['Hover']['color'] ?? '#000000';

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

    // Inline CSS for hover color change
    $inline_css = "
        <style>
            .{$product_class}:hover svg path {
                fill: {$hover_svg_color} !important;
                transition: fill 0.3s ease;
            }
        </style>
    ";

    $btn_markup = sprintf(
        '<a
            href="%s"
            data-product_id="%s"
            data-quantity="1"
            class="add_to_cart_button %s %s"
            rel="nofollow"
        >%s%s</a>',
        esc_url($product->add_to_cart_url()),
        esc_attr($product->get_id()),
        esc_attr($product_class),
        esc_attr($ajax_class),
        $icon_markup,
        $label_markup
    );

    return $inline_css . $btn_markup;
}

/**
 * Generate the HTML for the product quantity input.
 * @param array $attributes The block attributes.
 * @return string The generated HTML for the product quantity input.
 */
function boostify_blocks_block_products_get_product_quantity($attributes)
{   
    $quantity_input = '<div class="wcb-products__quantity">'
        . '<button type="button" class="wcb-products__quantity-btn wcb-products__quantity-minus" aria-label="' . esc_attr__( 'Decrease quantity', 'boostify-blocks' ) . '">&minus;</button>'
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
        . '>'
        . '<button type="button" class="wcb-products__quantity-btn wcb-products__quantity-plus" aria-label="' . esc_attr__( 'Increase quantity', 'boostify-blocks' ) . '">+</button>'
        . '</div>';
    return '<div class="wcb-products__quantity-add-to-cart" style="align-items: ' . esc_attr(convert_to_alignment_style($attributes['style_layout']['textAlignment'])) . ';">' . $quantity_input . '</div>';
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
