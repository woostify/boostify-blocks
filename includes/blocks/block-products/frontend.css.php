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

$selectors   = array();
$t_selectors = array();
$m_selectors = array();

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

$wrap_sel          = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$list_sel          = $wrap_sel . ' .wcb-products__list';
$product_sel       = $wrap_sel . ' .wcb-products__product';
$title_sel         = $wrap_sel . ' .wcb-products__product-title';
$title_a_sel       = $wrap_sel . ' .wcb-products__product-title a';
$category_sel      = $wrap_sel . ' .wcb-products__product-category';
$category_a_sel    = $wrap_sel . ' .wcb-products__product-category a';
$price_sel         = $wrap_sel . ' .wcb-products__product-price';
$rating_sel        = $wrap_sel . ' .wcb-products__product-rating';
$image_sel         = $wrap_sel . ' .wcb-products__product-image';
$image_link_sel    = $wrap_sel . ' .wcb-products__product-image .wcb-products__product-image-link';
$overlay_sel       = $wrap_sel . ' .wcb-products__product-image-overlay';
$add_cart_wrap_sel = $wrap_sel . ' .wcb-products__product-add-to-cart';
$add_cart_sel      = $wrap_sel . ' .wcb-products__product-add-to-cart a';
$sale_sel          = $wrap_sel . ' .wcb-products__product-sale-badge';
$sale_badge_sel    = $wrap_sel . ' .wcb-products__product-salebadge .wcb-products__product-onsale';
$out_of_stock_sel  = $wrap_sel . ' .wcb-products__product-out-of-stock';
$out_of_stock_bdg  = $wrap_sel . ' .wcb-products__product-outofstock-badge .wcb-products__product-on-outofstock';
$pag_wrap_sel      = $wrap_sel . ' .wcb-products__pagination';
$pag_sel           = $pag_wrap_sel . ' .page-numbers';
$pag_active        = $pag_wrap_sel . ' .page-numbers.current';

// 1. Products List Grid
$selectors[ $list_sel ]['display'] = 'grid';

$num_col = $sl['numberOfColumn'] ?? 3;
$nc_d = is_array( $num_col ) ? ( $num_col['Desktop'] ?? 3 ) : $num_col;
$nc_t = is_array( $num_col ) ? ( $num_col['Tablet'] ?? $nc_d ) : $nc_d;
$nc_m = is_array( $num_col ) ? ( $num_col['Mobile'] ?? $nc_t ) : $nc_t;

$selectors[ $list_sel ]['grid-template-columns']   = "repeat({$nc_d}, minmax(0, 1fr))";
$t_selectors[ $list_sel ]['grid-template-columns'] = "repeat({$nc_t}, minmax(0, 1fr))";
$m_selectors[ $list_sel ]['grid-template-columns'] = "repeat({$nc_m}, minmax(0, 1fr))";

if ( ! empty( $sl['colunmGap'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sl['colunmGap'], 'column-gap', $list_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sl['colunmGap'], 'column-gap', $list_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sl['colunmGap'], 'column-gap', $list_sel, 'mobile' ) );
}
if ( ! empty( $sl['rowGap'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sl['rowGap'], 'row-gap', $list_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sl['rowGap'], 'row-gap', $list_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sl['rowGap'], 'row-gap', $list_sel, 'mobile' ) );
}

// 2. Product Card Base
$selectors[ $product_sel ]['display']        = 'flex';
$selectors[ $product_sel ]['flex-direction'] = 'column';
$selectors[ $product_sel ]['position']       = 'relative';
$selectors[ $product_sel ]['overflow']       = 'hidden';

if ( ! empty( $sl['textAlignment'] ) ) {
	$selectors[ $product_sel ]['text-align'] = $sl['textAlignment'];
	$justify = 'center';
	if ( 'left' === $sl['textAlignment'] ) {
		$justify = 'flex-start';
	} elseif ( 'right' === $sl['textAlignment'] ) {
		$justify = 'flex-end';
	}
	$selectors[ $wrap_sel . ' .wcb-products__product-rating-wrap' ]['justify-content'] = $justify;
	$selectors[ $wrap_sel . ' .wcb-products__quantity-add-to-cart' ]['align-items']    = $justify;
}
if ( ! empty( $sl['backgroundColor'] ) ) {
	$selectors[ $product_sel ]['background-color'] = $sl['backgroundColor'];
}
if ( ! empty( $sl['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sl['padding'], 'padding', $product_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sl['padding'], 'padding', $product_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sl['padding'], 'padding', $product_sel, 'mobile' ) );
}
if ( ! empty( $sb ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sb, $product_sel, true ) );
}

// 3. Title
if ( ! empty( $st['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $st['typography'], $title_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $st['typography'], $title_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $st['typography'], $title_sel, 'mobile' ) );
}
if ( ! empty( $st['textColor'] ) ) {
	$selectors[ $title_sel ]['color']   = $st['textColor'];
	$selectors[ $title_a_sel ]['color'] = $st['textColor'];
}
if ( ! empty( $st['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $st['marginBottom'], 'margin-bottom', $title_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $st['marginBottom'], 'margin-bottom', $title_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $st['marginBottom'], 'margin-bottom', $title_sel, 'mobile' ) );
}

// 4. Category
if ( ! empty( $sc['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $sc['typography'], $category_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $sc['typography'], $category_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $sc['typography'], $category_sel, 'mobile' ) );
}
if ( ! empty( $sc['textColor'] ) ) {
	$selectors[ $category_sel ]['color']   = $sc['textColor'];
	$selectors[ $category_a_sel ]['color'] = $sc['textColor'];
}
if ( ! empty( $sc['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sc['marginBottom'], 'margin-bottom', $category_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sc['marginBottom'], 'margin-bottom', $category_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sc['marginBottom'], 'margin-bottom', $category_sel, 'mobile' ) );
}

// 5. Price
if ( ! empty( $sp['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $sp['typography'], $price_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $sp['typography'], $price_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $sp['typography'], $price_sel, 'mobile' ) );
}
if ( ! empty( $sp['textColor'] ) ) {
	$selectors[ $price_sel ]['color'] = $sp['textColor'];
}
if ( ! empty( $sp['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sp['marginBottom'], 'margin-bottom', $price_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sp['marginBottom'], 'margin-bottom', $price_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sp['marginBottom'], 'margin-bottom', $price_sel, 'mobile' ) );
}

// 6. Rating
if ( ! empty( $sr['color'] ) ) {
	$selectors[ $rating_sel ]['color'] = $sr['color'];
}
if ( ! empty( $sr['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sr['marginBottom'], 'margin-bottom', $rating_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sr['marginBottom'], 'margin-bottom', $rating_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sr['marginBottom'], 'margin-bottom', $rating_sel, 'mobile' ) );
}

// 7. Featured Image
if ( ! empty( $sf['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sf['marginBottom'], 'margin-bottom', $image_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sf['marginBottom'], 'margin-bottom', $image_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sf['marginBottom'], 'margin-bottom', $image_sel, 'mobile' ) );
}
if ( ! empty( $sf['backgroundOverlay'] ) ) {
	$selectors[ $overlay_sel ]['background-color'] = $sf['backgroundOverlay'];
}
if ( ! empty( $sf['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sf['border'], $image_link_sel, true ) );
}

// 8. Sale Badge
if ( ! empty( $ss['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $ss['typography'], $sale_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $ss['typography'], $sale_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $ss['typography'], $sale_sel, 'mobile' ) );
}
if ( ! empty( $ss['backgroundColor'] ) ) {
	$selectors[ $sale_badge_sel ]['background-color'] = $ss['backgroundColor'];
}
if ( ! empty( $ss['textColor'] ) ) {
	$selectors[ $sale_badge_sel ]['color'] = $ss['textColor'];
}
if ( ! empty( $ss['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $ss['marginBottom'], 'margin-bottom', $sale_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $ss['marginBottom'], 'margin-bottom', $sale_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $ss['marginBottom'], 'margin-bottom', $sale_sel, 'mobile' ) );
}
if ( ! empty( $ss['position'] ) ) {
	$sale_inside = $wrap_sel . ' .wcb-products__product--onsaleInsideImage .wcb-products__product-salebadge';
	$selectors[ $sale_inside ]['position'] = 'absolute';
	$selectors[ $sale_inside ]['top']      = '0.5rem';
	$selectors[ $sale_inside ]['z-index']  = '10';
	if ( 'top-left' === $ss['position'] ) {
		$selectors[ $sale_inside ]['left'] = '0.5rem';
	} else {
		$selectors[ $sale_inside ]['right'] = '0.5rem';
	}
}

// 9. Out of Stock
if ( ! empty( $so['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $so['typography'], $out_of_stock_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $so['typography'], $out_of_stock_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $so['typography'], $out_of_stock_sel, 'mobile' ) );
}
if ( ! empty( $so['backgroundColor'] ) ) {
	$selectors[ $out_of_stock_bdg ]['background-color'] = $so['backgroundColor'];
}
if ( ! empty( $so['textColor'] ) ) {
	$selectors[ $out_of_stock_bdg ]['color'] = $so['textColor'];
}
if ( ! empty( $so['position'] ) ) {
	$oos_inside = $wrap_sel . ' .wcb-products__product--onsaleInsideImage .wcb-products__product-outofstock-badge';
	if ( 'top-left' === $so['position'] ) {
		$selectors[ $oos_inside ]['position'] = 'absolute';
		$selectors[ $oos_inside ]['top']      = '0.5rem';
		$selectors[ $oos_inside ]['left']     = '0.5rem';
		$selectors[ $oos_inside ]['z-index']  = '10';
	} elseif ( 'top-right' === $so['position'] ) {
		$selectors[ $oos_inside ]['position'] = 'absolute';
		$selectors[ $oos_inside ]['top']      = '0.5rem';
		$selectors[ $oos_inside ]['right']    = '0.5rem';
		$selectors[ $oos_inside ]['z-index']  = '10';
	} else {
		$selectors[ $oos_inside ]['display'] = 'none';
	}
}

// 10. Add to Cart Button
if ( ! empty( $sl['textAlignment'] ) ) {
	$align_items = 'center';
	if ( 'left' === $sl['textAlignment'] ) {
		$align_items = 'flex-start';
	} elseif ( 'right' === $sl['textAlignment'] ) {
		$align_items = 'flex-end';
	}
	$selectors[ $add_cart_wrap_sel ]['display']         = 'flex';
	$selectors[ $add_cart_wrap_sel ]['flex-direction']  = 'column';
	$selectors[ $add_cart_wrap_sel ]['align-items']     = $align_items;
	$selectors[ $add_cart_wrap_sel ]['justify-content'] = 'center';
}
if ( ! empty( $sa['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $sa['typography'], $add_cart_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $sa['typography'], $add_cart_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $sa['typography'], $add_cart_sel, 'mobile' ) );
}
if ( ! empty( $sa['colorAndBackgroundColor'] ) ) {
	$cbc = $sa['colorAndBackgroundColor'];
	if ( ! empty( $cbc['Normal']['color'] ) ) {
		$selectors[ $add_cart_sel ]['color'] = $cbc['Normal']['color'];
	}
	if ( ! empty( $cbc['Normal']['backgroundColor'] ) ) {
		$selectors[ $add_cart_sel ]['background-color'] = $cbc['Normal']['backgroundColor'];
	}
	if ( ! empty( $cbc['Hover']['color'] ) ) {
		$selectors[ $add_cart_sel . ':hover' ]['color'] = $cbc['Hover']['color'];
	}
	if ( ! empty( $cbc['Hover']['backgroundColor'] ) ) {
		$selectors[ $add_cart_sel . ':hover' ]['background-color'] = $cbc['Hover']['backgroundColor'];
	}
}
if ( ! empty( $sa['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sa['padding'], 'padding', $add_cart_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sa['padding'], 'padding', $add_cart_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sa['padding'], 'padding', $add_cart_sel, 'mobile' ) );
}
if ( ! empty( $sa['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sa['marginBottom'], 'margin-bottom', $add_cart_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sa['marginBottom'], 'margin-bottom', $add_cart_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sa['marginBottom'], 'margin-bottom', $add_cart_sel, 'mobile' ) );
}
if ( ! empty( $sa['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sa['border'], $add_cart_sel, true ) );
}

// 11. Pagination
if ( ! empty( $sg['mainStyle']['Normal']['color'] ) ) {
	$selectors[ $pag_sel ]['color'] = $sg['mainStyle']['Normal']['color'];
}
if ( ! empty( $sg['mainStyle']['Normal']['backgroundColor'] ) ) {
	$selectors[ $pag_sel ]['background-color'] = $sg['mainStyle']['Normal']['backgroundColor'];
}
if ( ! empty( $sg['mainStyle']['Normal']['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sg['mainStyle']['Normal']['border'], $pag_sel, true ) );
}
if ( ! empty( $sg['mainStyle']['Active']['color'] ) ) {
	$selectors[ $pag_active ]['color'] = $sg['mainStyle']['Active']['color'];
}
if ( ! empty( $sg['mainStyle']['Active']['backgroundColor'] ) ) {
	$selectors[ $pag_active ]['background-color'] = $sg['mainStyle']['Active']['backgroundColor'];
}
if ( ! empty( $sg['mainStyle']['Active']['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sg['mainStyle']['Active']['border'], $pag_active, true ) );
}
if ( ! empty( $sg['marginTop'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sg['marginTop'], 'margin-top', $pag_wrap_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sg['marginTop'], 'margin-top', $pag_wrap_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sg['marginTop'], 'margin-top', $pag_wrap_sel, 'mobile' ) );
}

// 12. Dimensions
if ( ! empty( $sd['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sd['padding'], 'padding', $wrap_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sd['padding'], 'padding', $wrap_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sd['padding'], 'padding', $wrap_sel, 'mobile' ) );
}
if ( ! empty( $sd['margin'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sd['margin'], 'margin', $wrap_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sd['margin'], 'margin', $wrap_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sd['margin'], 'margin', $wrap_sel, 'mobile' ) );
}

// 13. Advance
$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

