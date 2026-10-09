<?php
/**
 * Frontend CSS for Products Block.
 *
 * @package Boostify_Blocks
 */

/**
 * @var mixed[] $attr Block attributes.
 * @var string $unique_id Block unique ID.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$css = array(
	'desktop' => array(),
	'tablet'  => array(),
	'mobile'  => array(),
);

// Apply theme defaults (Customizer) if available so generated CSS reflects customizer settings (columns, etc.)
if ( ! function_exists( 'boostify_blocks_block_products_apply_theme_defaults' ) ) {
	$cb_file = BOOSTIFY_BLOCKS_PATH . 'includes/wcb-render-callback-for-block-products.php';
	if ( file_exists( $cb_file ) ) {
		require_once $cb_file;
	}
}

if ( function_exists( 'boostify_blocks_block_products_apply_theme_defaults' ) ) {
	$block_overrides = ! empty( $attr['general_layout']['isCustomizerGeneralLayout'] );
	$attr            = boostify_blocks_block_products_apply_theme_defaults( $attr, $block_overrides );
}

$st  = $attr['style_title'] ?? array();
$sc  = $attr['style_category'] ?? array();
$sp  = $attr['style_price'] ?? array();
$sr  = $attr['style_rating'] ?? array();
$sf  = $attr['style_featuredImage'] ?? array();
$sl  = $attr['style_layout'] ?? array();
$sa  = $attr['style_addToCardBtn'] ?? array();
$sg  = $attr['style_pagination'] ?? array();
$ss  = $attr['style_saleBadge'] ?? array();
$so  = $attr['style_outOfStock'] ?? array();
$sb  = $attr['style_border'] ?? array();
$sd  = $attr['style_dimension'] ?? array();
$sw  = $attr['style_wishlistBtn'] ?? array();
$sq  = $attr['style_quickViewBtn'] ?? array();
$scu = $attr['style_countdownUrgency'] ?? array();

$wrap_sel          = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$list_sel          = $wrap_sel . ' .wcb-products__list';
$product_sel       = $wrap_sel . ' .wcb-products__product';
$title_sel         = $wrap_sel . ' .wcb-products__product-title';
$title_a_sel       = $wrap_sel . ' .wcb-products__product-title a';
$category_sel      = $wrap_sel . ' .wcb-products__product-categories, ' . $wrap_sel . ' .wcb-products__product-category';
$category_a_sel    = $wrap_sel . ' .wcb-products__product-categories a, ' . $wrap_sel . ' .wcb-products__product-category a';
$price_sel         = $wrap_sel . ' .wcb-products__product-price';
$rating_sel        = $wrap_sel . ' .wcb-products__product-rating';
$image_sel         = $wrap_sel . ' .wcb-products__product-featured';
$image_link_sel    = $wrap_sel . ' .wcb-products__product-image-link';
$overlay_sel       = $wrap_sel . ' .wcb-products__product-image-overlay';
$add_cart_wrap_sel = $wrap_sel . ' .wcb-products__product-add-to-cart';
$add_cart_sel      = $wrap_sel . ' .wcb-products__product-add-to-cart a';
$sale_sel          = $wrap_sel . ' .wcb-products__product-salebadge';
$sale_badge_sel    = $wrap_sel . ' .wcb-products__product-salebadge .wcb-products__product-onsale';
$out_of_stock_sel  = $wrap_sel . ' .wcb-products__product-outofstock-badge';
$out_of_stock_bdg  = $wrap_sel . ' .wcb-products__product-outofstock-badge .wcb-products__product-on-outofstock';
$pag_wrap_sel      = $wrap_sel . ' .wcb-products__pagination';
$pag_sel           = $pag_wrap_sel . ' .page-numbers';
$pag_active        = $pag_wrap_sel . ' .page-numbers.current';

// Ensure block wrapper is displayed (overrides the display: none anti-FOUC rule in style-index.css).
$css['desktop'][ $wrap_sel ]['display'] = 'block';

// 1. Products List Grid
$css['desktop'][ $list_sel ]['display'] = 'grid';

$num_col = $sl['numberOfColumn'] ?? 3;
$nc_d = is_array( $num_col ) ? ( $num_col['Desktop'] ?? 3 ) : $num_col;
$nc_t = is_array( $num_col ) ? ( $num_col['Tablet'] ?? $nc_d ) : $nc_d;
$nc_m = is_array( $num_col ) ? ( $num_col['Mobile'] ?? $nc_t ) : $nc_t;

$css['desktop'][ $list_sel ]['grid-template-columns'] = "repeat({$nc_d}, minmax(0, 1fr))";
$css['tablet'][ $list_sel ]['grid-template-columns']  = "repeat({$nc_t}, minmax(0, 1fr))";
$css['mobile'][ $list_sel ]['grid-template-columns']  = "repeat({$nc_m}, minmax(0, 1fr))";

if ( ! empty( $sl['colunmGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $list_sel, 'column-gap', $sl['colunmGap'] );
}
if ( ! empty( $sl['rowGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $list_sel, 'row-gap', $sl['rowGap'] );
}

// 2. Product Card Base
$css['desktop'][ $product_sel ]['display']        = 'flex';
$css['desktop'][ $product_sel ]['flex-direction'] = 'column';
$css['desktop'][ $product_sel ]['position']       = 'relative';
$css['desktop'][ $product_sel ]['overflow']       = 'hidden';

if ( ! empty( $sl['textAlignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $product_sel, 'text-align', $sl['textAlignment'] );
	$justify = 'center';
	if ( 'left' === $sl['textAlignment'] ) {
		$justify = 'flex-start';
	} elseif ( 'right' === $sl['textAlignment'] ) {
		$justify = 'flex-end';
	}
	WCB_Block_Helper::add_responsive_css( $css, $wrap_sel . ' .wcb-products__product-rating-wrap', 'justify-content', $justify );
	WCB_Block_Helper::add_responsive_css( $css, $wrap_sel . ' .wcb-products__quantity-add-to-cart', 'align-items', $justify );
}
if ( ! empty( $sl['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $product_sel, 'background-color', $sl['backgroundColor'] );
}
if ( ! empty( $sl['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $product_sel, 'padding', $sl['padding'] );
}
if ( ! empty( $sb ) ) {
	WCB_Block_Helper::add_border_css( $css, $product_sel, $sb, true, true );
}

// 3. Title
if ( ! empty( $st['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $title_sel, $st['typography'] );
}
if ( ! empty( $st['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_sel, 'color', $st['textColor'] );
	WCB_Block_Helper::add_responsive_css( $css, $title_a_sel, 'color', $st['textColor'] );
}
if ( ! empty( $st['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_sel, 'margin-bottom', $st['marginBottom'] );
}

// 4. Category
if ( ! empty( $sc['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $category_sel, $sc['typography'] );
}
if ( ! empty( $sc['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $category_sel, 'color', $sc['textColor'] );
	WCB_Block_Helper::add_responsive_css( $css, $category_a_sel, 'color', $sc['textColor'] );
}
if ( ! empty( $sc['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $category_sel, 'margin-bottom', $sc['marginBottom'] );
}

// 5. Price
if ( ! empty( $sp['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $price_sel, $sp['typography'] );
}
if ( ! empty( $sp['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $price_sel, 'color', $sp['textColor'] );
}
if ( ! empty( $sp['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $price_sel, 'margin-bottom', $sp['marginBottom'] );
}

// 6. Rating
if ( ! empty( $sr['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $rating_sel, 'color', $sr['color'] );
}
if ( ! empty( $sr['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $rating_sel, 'margin-bottom', $sr['marginBottom'] );
}

// 7. Featured Image
if ( ! empty( $sf['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $image_sel, 'margin-bottom', $sf['marginBottom'] );
}
if ( ! empty( $sf['backgroundOverlay'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $overlay_sel, 'background-color', $sf['backgroundOverlay'] );
}
if ( ! empty( $sf['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $image_link_sel, $sf['border'], true, true );

	if ( ! empty( $sf['border']['hoverColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $product_sel . ':hover .wcb-products__product-image-link', 'border-color', $sf['border']['hoverColor'] );
	}
}

// 8. Sale Badge
$apply_badge_shape_css = function ( $shape, $sel ) use ( &$css ) {
	if ( function_exists( 'boostify_blocks_get_badge_shape_css_rules' ) ) {
		$rules = boostify_blocks_get_badge_shape_css_rules( $shape );
		foreach ( $rules as $prop => $val ) {
			$css['desktop'][ $sel ][ $prop ] = $val;
		}
	}
};

$css['desktop'][ $sale_badge_sel ]['display']         = 'inline-flex';
$css['desktop'][ $sale_badge_sel ]['align-items']     = 'center';
$css['desktop'][ $sale_badge_sel ]['justify-content'] = 'center';
$css['desktop'][ $sale_badge_sel ]['padding']         = '2px 8px';
$css['desktop'][ $sale_badge_sel ]['min-width']       = '32px';
$css['desktop'][ $sale_badge_sel ]['min-height']      = '20px';
$css['desktop'][ $sale_badge_sel ]['line-height']     = '1.2';
$css['desktop'][ $sale_badge_sel ]['border-radius']   = '2px';
$css['desktop'][ $sale_badge_sel ]['white-space']     = 'nowrap';

if ( ! empty( $ss['shape'] ) ) {
	$apply_badge_shape_css( $ss['shape'], $sale_badge_sel );
}

$sale_span_sel = $wrap_sel . ' .wcb-products__product-salebadge .wcb-products__product-onsale span.onsale';
$css['desktop'][ $sale_span_sel ]['position']         = 'static';
$css['desktop'][ $sale_span_sel ]['margin']           = '0px';
$css['desktop'][ $sale_span_sel ]['padding']          = '0px';
$css['desktop'][ $sale_span_sel ]['display']          = 'inline';
$css['desktop'][ $sale_span_sel ]['font-size']        = 'inherit';
$css['desktop'][ $sale_span_sel ]['line-height']      = 'inherit';
$css['desktop'][ $sale_span_sel ]['color']            = 'inherit';
$css['desktop'][ $sale_span_sel ]['background-color'] = 'transparent';

if ( ! empty( $ss['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $sale_badge_sel, $ss['typography'] );
}
if ( ! empty( $ss['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $sale_badge_sel, 'background-color', $ss['backgroundColor'] );
}
if ( ! empty( $ss['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $sale_badge_sel, 'color', $ss['textColor'] );
}
if ( ! empty( $ss['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $sale_sel, 'margin-bottom', $ss['marginBottom'] );
}
if ( ! empty( $ss['position'] ) ) {
	$sale_inside = $wrap_sel . ' .wcb-products__product--onsaleInsideImage .wcb-products__product-salebadge';
	$css['desktop'][ $sale_inside ]['position'] = 'absolute';
	$css['desktop'][ $sale_inside ]['top']      = '0.5rem';
	$css['desktop'][ $sale_inside ]['z-index']  = '10';
	if ( 'top-left' === $ss['position'] || 'left' === $ss['position'] ) {
		$css['desktop'][ $sale_inside ]['left'] = '0.5rem';
	} else {
		$css['desktop'][ $sale_inside ]['right'] = '0.5rem';
	}
}

// 9. Out of Stock
$css['desktop'][ $out_of_stock_bdg ]['display']         = 'inline-flex';
$css['desktop'][ $out_of_stock_bdg ]['align-items']     = 'center';
$css['desktop'][ $out_of_stock_bdg ]['justify-content'] = 'center';
$css['desktop'][ $out_of_stock_bdg ]['padding']         = '2px 8px';
$css['desktop'][ $out_of_stock_bdg ]['min-width']       = '32px';
$css['desktop'][ $out_of_stock_bdg ]['min-height']      = '20px';
$css['desktop'][ $out_of_stock_bdg ]['line-height']     = '1.2';
$css['desktop'][ $out_of_stock_bdg ]['border-radius']   = '2px';
$css['desktop'][ $out_of_stock_bdg ]['white-space']     = 'nowrap';

if ( ! empty( $so['shape'] ) ) {
	$apply_badge_shape_css( $so['shape'], $out_of_stock_bdg );
}

if ( ! empty( $so['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $out_of_stock_bdg, $so['typography'] );
}
if ( ! empty( $so['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $out_of_stock_bdg, 'background-color', $so['backgroundColor'] );
}
if ( ! empty( $so['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $out_of_stock_bdg, 'color', $so['textColor'] );
}
if ( ! empty( $so['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $out_of_stock_sel, 'margin-bottom', $so['marginBottom'] );
}
if ( ! empty( $so['position'] ) ) {
	$oos_inside = $wrap_sel . ' .wcb-products__product--onsaleInsideImage .wcb-products__product-outofstock-badge';
	if ( 'top-left' === $so['position'] || 'left' === $so['position'] ) {
		$css['desktop'][ $oos_inside ]['position'] = 'absolute';
		$css['desktop'][ $oos_inside ]['top']      = '0.5rem';
		$css['desktop'][ $oos_inside ]['left']     = '0.5rem';
		$css['desktop'][ $oos_inside ]['z-index']  = '10';
	} elseif ( 'top-right' === $so['position'] || 'right' === $so['position'] ) {
		$css['desktop'][ $oos_inside ]['position'] = 'absolute';
		$css['desktop'][ $oos_inside ]['top']      = '0.5rem';
		$css['desktop'][ $oos_inside ]['right']    = '0.5rem';
		$css['desktop'][ $oos_inside ]['z-index']  = '10';
	} else {
		$css['desktop'][ $oos_inside ]['display'] = 'none';
	}
}

// Stacking when both out-of-stock and sale badges are on the same side inside the image.
$so_pos = ( ! empty( $so['position'] ) && ( 'top-right' === $so['position'] || 'right' === $so['position'] ) ) ? 'right' : 'left';
$ss_pos = ( ! empty( $ss['position'] ) && ( 'top-right' === $ss['position'] || 'right' === $ss['position'] ) ) ? 'right' : 'left';
if ( ! empty( $so['position'] ) && 'none' !== $so['position'] && ! empty( $ss['position'] ) && $so_pos === $ss_pos ) {
	$badge_shape = $so['shape'] ?? $ss['shape'] ?? 'round';
	$offset      = ( 'round' === $badge_shape ) ? '50px' : '32px';
	$css['desktop'][ $wrap_sel . ' .wcb-products__product--onsaleInsideImage .wcb-products__product-outofstock-badge ~ .wcb-products__product-salebadge' ]['top'] = 'calc(0.5rem + ' . $offset . ')';
	$css['desktop'][ $wrap_sel . ' .wcb-products__product--onsaleInsideImage .wcb-products__product-salebadge ~ .wcb-products__product-outofstock-badge' ]['top'] = 'calc(0.5rem + ' . $offset . ')';
}

// 10. Add to Cart Button
if ( ! empty( $sl['textAlignment'] ) ) {
	$align_items = 'center';
	if ( 'left' === $sl['textAlignment'] ) {
		$align_items = 'flex-start';
	} elseif ( 'right' === $sl['textAlignment'] ) {
		$align_items = 'flex-end';
	}
	$css['desktop'][ $add_cart_wrap_sel ]['display']         = 'flex';
	$css['desktop'][ $add_cart_wrap_sel ]['flex-direction']  = 'column';
	$css['desktop'][ $add_cart_wrap_sel ]['align-items']     = $align_items;
	$css['desktop'][ $add_cart_wrap_sel ]['justify-content'] = 'center';
}
if ( ! empty( $sa['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $add_cart_sel, $sa['typography'] );
}
if ( ! empty( $sa['colorAndBackgroundColor'] ) ) {
	$cbc = $sa['colorAndBackgroundColor'];
	if ( ! empty( $cbc['Normal']['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $add_cart_sel, 'color', $cbc['Normal']['color'] );
	}
	if ( ! empty( $cbc['Normal']['backgroundColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $add_cart_sel, 'background-color', $cbc['Normal']['backgroundColor'] );
	}
	if ( ! empty( $cbc['Hover']['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $add_cart_sel . ':hover', 'color', $cbc['Hover']['color'] );
		WCB_Block_Helper::add_responsive_css( $css, $add_cart_sel . ':hover svg path', 'fill', $cbc['Hover']['color'] . ' !important' );
		$css['desktop'][ $add_cart_sel . ':hover svg path' ]['transition'] = 'fill 0.3s ease';
	}
	if ( ! empty( $cbc['Hover']['backgroundColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $add_cart_sel . ':hover', 'background-color', $cbc['Hover']['backgroundColor'] );
	}
}
if ( ! empty( $sa['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $add_cart_sel, 'padding', $sa['padding'] );
}
if ( ! empty( $sa['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $add_cart_sel, 'margin-bottom', $sa['marginBottom'] );
}
if ( ! empty( $sa['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $add_cart_sel, $sa['border'], true, true );
	WCB_Block_Helper::add_border_css( $css, $wrap_sel . ' .wcb-products__product--btnIconAddToCart--item', $sa['border'], true, true );
}


// 11. Pagination
if ( ! empty( $sg['justifyContent'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $pag_wrap_sel, 'justify-content', $sg['justifyContent'] );
}
if ( ! empty( $sg['mainStyle']['Normal']['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $pag_sel, 'color', $sg['mainStyle']['Normal']['color'] );
}
if ( ! empty( $sg['mainStyle']['Normal']['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $pag_sel, 'background-color', $sg['mainStyle']['Normal']['backgroundColor'] );
}
if ( ! empty( $sg['mainStyle']['Normal']['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $pag_sel, $sg['mainStyle']['Normal']['border'], true, true );
}
if ( ! empty( $sg['mainStyle']['Active']['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $pag_active, 'color', $sg['mainStyle']['Active']['color'] );
}
if ( ! empty( $sg['mainStyle']['Active']['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $pag_active, 'background-color', $sg['mainStyle']['Active']['backgroundColor'] );
}
if ( ! empty( $sg['mainStyle']['Active']['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $pag_active, $sg['mainStyle']['Active']['border'], true, true );
}
if ( ! empty( $sg['marginTop'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $pag_wrap_sel, 'margin-top', $sg['marginTop'] );
}

// 12. Dimensions
if ( ! empty( $sd['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'padding', $sd['padding'] );
}
if ( ! empty( $sd['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $sd['margin'] );
}


// 14. Quick View Button & Hover Gallery Preview
$qv_btn_sel        = $wrap_sel . ' .wcb-products__product .wcb-products__product--quickViewBottomImage--item';
$qv_prod_hover_sel = $wrap_sel . ' .wcb-products__product:hover .wcb-products__product--quickViewBottomImage--item';
$qv_btn_hover_sel  = $qv_btn_sel . ':hover';

$qv_position = $sq['position'] ?? 'center-image';
$qv_enabled  = ! empty( $sq['enabled'] );

if ( ! $qv_enabled ) {
	$css['desktop'][ $qv_btn_sel ]['display'] = 'none !important';
} else {
	// Dynamic colors & border radius (only when customized, static defaults are in style.scss)
	if ( ! empty( $sq['bg_color'] ) && $sq['bg_color'] !== '#ffffff' ) {
		WCB_Block_Helper::add_responsive_css( $css, $qv_btn_sel, 'background-color', $sq['bg_color'] );
	}
	if ( ! empty( $sq['text_color'] ) && $sq['text_color'] !== '#000000' ) {
		WCB_Block_Helper::add_responsive_css( $css, $qv_btn_sel, 'color', $sq['text_color'] );
	}

	if ( isset( $sq['border_radius'] ) && $sq['border_radius'] !== '' ) {
		WCB_Block_Helper::add_responsive_css( $css, $qv_btn_sel, 'border-radius', WCB_Block_Helper::get_css_value( $sq['border_radius'] ) );
		WCB_Block_Helper::add_responsive_css( $css, $qv_prod_hover_sel, 'border-radius', WCB_Block_Helper::get_css_value( $sq['border_radius'] ) );
	}

	if ( ! empty( $sq['hover_bg_color'] ) && $sq['hover_bg_color'] !== '#474747' ) {
		WCB_Block_Helper::add_responsive_css( $css, $qv_btn_hover_sel, 'background-color', $sq['hover_bg_color'] );
	}
	if ( ! empty( $sq['hover_text_color'] ) && $sq['hover_text_color'] !== '#ffffff' ) {
		WCB_Block_Helper::add_responsive_css( $css, $qv_btn_hover_sel, 'color', $sq['hover_text_color'] );
	}

	$cart_pos = $attr['general_addToCartBtn']['position'] ?? '';

	if ( $qv_position === 'bottom-image' ) {
		// Normal state: hidden at bottom of image
		$css['desktop'][ $qv_btn_sel ]['position']        = 'absolute';
		$css['desktop'][ $qv_btn_sel ]['left']            = '0';
		$css['desktop'][ $qv_btn_sel ]['bottom']          = '10px';
		$css['desktop'][ $qv_btn_sel ]['width']           = '100%';
		$css['desktop'][ $qv_btn_sel ]['height']          = '0px';
		$css['desktop'][ $qv_btn_sel ]['opacity']         = '0';
		$css['desktop'][ $qv_btn_sel ]['visibility']      = 'hidden';
		$css['desktop'][ $qv_btn_sel ]['z-index']         = '10';
		$css['desktop'][ $qv_btn_sel ]['display']         = 'flex';
		$css['desktop'][ $qv_btn_sel ]['align-items']     = 'center';
		$css['desktop'][ $qv_btn_sel ]['justify-content'] = 'center';
		$css['desktop'][ $qv_btn_sel ]['transition']      = 'height 0.3s ease, opacity 0.2s ease, background-color 0.3s ease, color 0.3s ease';

		// Hover state: animate into view
		$css['desktop'][ $qv_prod_hover_sel ]['opacity']    = '1';
		$css['desktop'][ $qv_prod_hover_sel ]['visibility'] = 'visible';
		$css['desktop'][ $qv_prod_hover_sel ]['height']     = '40px';
		$css['desktop'][ $qv_prod_hover_sel ]['display']    = 'flex !important';
	} elseif ( $qv_position === 'top-right' ) {
		// Normal state: offscreen/hidden
		$css['desktop'][ $qv_btn_sel ]['display']  = 'none !important';
		$css['desktop'][ $qv_btn_sel ]['position'] = 'absolute';
		$css['desktop'][ $qv_btn_sel ]['top']      = '-10rem';
		$css['desktop'][ $qv_btn_sel ]['right']    = '0rem';

		// Hover state
		$qv_tr_top = ( $cart_pos === 'icon' ) ? '0rem' : '-2.5rem';
		$css['desktop'][ $qv_prod_hover_sel ]['display']         = 'flex !important';
		$css['desktop'][ $qv_prod_hover_sel ]['align-items']     = 'center !important';
		$css['desktop'][ $qv_prod_hover_sel ]['justify-content'] = 'center !important';
		$css['desktop'][ $qv_prod_hover_sel ]['position']        = 'absolute';
		$css['desktop'][ $qv_prod_hover_sel ]['top']             = $qv_tr_top;
		$css['desktop'][ $qv_prod_hover_sel ]['bottom']          = 'auto';
		$css['desktop'][ $qv_prod_hover_sel ]['right']           = '-0.1rem';
		$css['desktop'][ $qv_prod_hover_sel ]['width']           = '2.6rem';
		$css['desktop'][ $qv_prod_hover_sel ]['height']          = '2.48rem';
		$css['desktop'][ $qv_prod_hover_sel ]['transform']       = 'translateY(2.5rem)';
		$css['desktop'][ $qv_prod_hover_sel ]['border']          = 'none';
		$css['desktop'][ $qv_prod_hover_sel ]['z-index']         = '10';
	} else {
		// Default: center-image
		$css['desktop'][ $qv_btn_sel ]['display']  = 'none !important';
		$css['desktop'][ $qv_btn_sel ]['position'] = 'absolute';
		$css['desktop'][ $qv_btn_sel ]['top']      = '-10rem';
		$css['desktop'][ $qv_btn_sel ]['right']    = '0rem';

		// Hover state: centered horizontally on image
		$qv_bottom = ( $cart_pos === 'icon' ) ? '10rem' : '6rem';
		$css['desktop'][ $qv_prod_hover_sel ]['display']         = 'flex !important';
		$css['desktop'][ $qv_prod_hover_sel ]['align-items']     = 'center !important';
		$css['desktop'][ $qv_prod_hover_sel ]['justify-content'] = 'center !important';
		$css['desktop'][ $qv_prod_hover_sel ]['padding']         = '0.5rem 1.4rem !important';
		$css['desktop'][ $qv_prod_hover_sel ]['position']        = 'absolute';
		$css['desktop'][ $qv_prod_hover_sel ]['top']             = 'auto';
		$css['desktop'][ $qv_prod_hover_sel ]['left']            = 'auto';
		$css['desktop'][ $qv_prod_hover_sel ]['bottom']          = $qv_bottom;
		$css['desktop'][ $qv_prod_hover_sel ]['right']           = '50%';
		$css['desktop'][ $qv_prod_hover_sel ]['transform']       = 'translateX(50%)';
		$css['desktop'][ $qv_prod_hover_sel ]['height']          = 'auto';
		$css['desktop'][ $qv_prod_hover_sel ]['white-space']     = 'nowrap';
		$css['desktop'][ $qv_prod_hover_sel ]['border']          = 'none';
		$css['desktop'][ $qv_prod_hover_sel ]['box-shadow']      = '0 4px 10px rgba(0,0,0,0.1)';
		$css['desktop'][ $qv_prod_hover_sel ]['z-index']         = '10';

		if ( $cart_pos === 'inside image' ) {
			$css['desktop'][ $qv_prod_hover_sel ]['top']    = 'calc(50% + 24px) !important';
			$css['desktop'][ $qv_prod_hover_sel ]['bottom'] = 'auto !important';
			$css['desktop'][ $wrap_sel . ' .wcb-products__product--btnInsideImage .wcb-products__product-featured .wcb-products__product-add-to-cart' ]['top'] = 'calc(50% - 24px) !important';
		}
	}
}

// Hover Gallery Preview - dynamic bottom offset if bottom-image quick view
if ( $qv_enabled && 'bottom-image' === $qv_position ) {
	$qv_preview_sel = $wrap_sel . ' .wcb-products__product-quickview-preview';
	$css['desktop'][ $qv_preview_sel . ' .tns-nav' ]['bottom'] = '54px';
}

// 15. Countdown Urgency
if ( ! empty( $scu ) ) {
	$cu_sel = $wrap_sel . ' .wcb-products__countdown-urgency';
	if ( ! empty( $scu['textColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $cu_sel, 'color', $scu['textColor'] );
	}
	if ( ! empty( $scu['backgroundColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $cu_sel, 'background-color', $scu['backgroundColor'] );
	}
	if ( ! empty( $scu['border'] ) ) {
		WCB_Block_Helper::add_border_css( $css, $cu_sel, $scu['border'], true, true );
	}
}

// 16. Pre-order
$preorder_msg_sel = $wrap_sel . ' .wcb-products__product-preorder-message';
$css['desktop'][ $preorder_msg_sel ]['color']       = '#000000';
$css['desktop'][ $preorder_msg_sel ]['font-size']   = '15px';
$css['desktop'][ $preorder_msg_sel ]['font-weight'] = '400';

$preorder_cd_sel = $wrap_sel . ' .wcb-products__product-preorder-countdown';
$css['desktop'][ $preorder_cd_sel ]['display']       = 'flex';
$css['desktop'][ $preorder_cd_sel ]['gap']           = '8px';
$css['desktop'][ $preorder_cd_sel ]['margin-bottom'] = '6px';

$preorder_item_sel = $wrap_sel . ' .wcb-products__product-preorder-countdown-item';
$css['desktop'][ $preorder_item_sel ]['font-size']   = '13px';
$css['desktop'][ $preorder_item_sel ]['font-weight'] = '600';

// 17. Advance
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
