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
$selectors[ $wrap_sel ]['display'] = 'block';

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

	if ( ! empty( $sf['border']['radius'] ) && is_array( $sf['border']['radius'] ) ) {
		$radius = $sf['border']['radius'];
		$normalize_corners = function ( $val ) {
			if ( is_string( $val ) ) {
				return array( 'topLeft' => $val, 'topRight' => $val, 'bottomRight' => $val, 'bottomLeft' => $val );
			}
			return array(
				'topLeft'     => $val['topLeft'] ?? '',
				'topRight'    => $val['topRight'] ?? '',
				'bottomRight' => $val['bottomRight'] ?? '',
				'bottomLeft'  => $val['bottomLeft'] ?? '',
			);
		};
		$d_c = $normalize_corners( $radius['Desktop'] ?? ( isset( $radius['topLeft'] ) ? $radius : '' ) );
		$t_c = ! empty( $radius['Tablet'] ) ? $normalize_corners( $radius['Tablet'] ) : $d_c;
		$m_c = ! empty( $radius['Mobile'] ) ? $normalize_corners( $radius['Mobile'] ) : $t_c;

		$corner_props = array(
			'topLeft'     => 'border-top-left-radius',
			'topRight'    => 'border-top-right-radius',
			'bottomRight' => 'border-bottom-right-radius',
			'bottomLeft'  => 'border-bottom-left-radius',
		);
		foreach ( $corner_props as $ckey => $css_prop ) {
			$d_v = $d_c[ $ckey ] ?? '';
			$t_v = $t_c[ $ckey ] ?? '';
			$m_v = $m_c[ $ckey ] ?? '';
			if ( '' !== $t_v && $t_v !== $d_v ) {
				$t_selectors[ $image_link_sel ][ $css_prop ] = WCB_Block_Helper::get_css_value( $t_v );
			}
			if ( '' !== $m_v && $m_v !== $t_v ) {
				$m_selectors[ $image_link_sel ][ $css_prop ] = WCB_Block_Helper::get_css_value( $m_v );
			}
		}
	}

	if ( ! empty( $sf['border']['hoverColor'] ) ) {
		$selectors[ $product_sel . ':hover .wcb-products__product-image-link' ]['border-color'] = $sf['border']['hoverColor'];
	}
}

// 8. Sale Badge
$apply_badge_shape_css = function ( $shape, $sel ) use ( &$selectors ) {
	if ( function_exists( 'boostify_blocks_get_badge_shape_css_rules' ) ) {
		$rules = boostify_blocks_get_badge_shape_css_rules( $shape );
		foreach ( $rules as $prop => $val ) {
			$selectors[ $sel ][ $prop ] = $val;
		}
	}
};

$selectors[ $sale_badge_sel ]['display']         = 'inline-flex';
$selectors[ $sale_badge_sel ]['align-items']     = 'center';
$selectors[ $sale_badge_sel ]['justify-content'] = 'center';
$selectors[ $sale_badge_sel ]['padding']         = '2px 8px';
$selectors[ $sale_badge_sel ]['min-width']       = '32px';
$selectors[ $sale_badge_sel ]['min-height']      = '20px';
$selectors[ $sale_badge_sel ]['line-height']     = '1.2';
$selectors[ $sale_badge_sel ]['border-radius']   = '2px';
$selectors[ $sale_badge_sel ]['white-space']     = 'nowrap';

if ( ! empty( $ss['shape'] ) ) {
	$apply_badge_shape_css( $ss['shape'], $sale_badge_sel );
}

$sale_span_sel = $wrap_sel . ' .wcb-products__product-salebadge .wcb-products__product-onsale span.onsale';
$selectors[ $sale_span_sel ]['position']         = 'static';
$selectors[ $sale_span_sel ]['margin']           = '0px';
$selectors[ $sale_span_sel ]['padding']          = '0px';
$selectors[ $sale_span_sel ]['display']          = 'inline';
$selectors[ $sale_span_sel ]['font-size']        = 'inherit';
$selectors[ $sale_span_sel ]['line-height']      = 'inherit';
$selectors[ $sale_span_sel ]['color']            = 'inherit';
$selectors[ $sale_span_sel ]['background-color'] = 'transparent';

if ( ! empty( $ss['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $ss['typography'], $sale_badge_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $ss['typography'], $sale_badge_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $ss['typography'], $sale_badge_sel, 'mobile' ) );
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
	if ( 'top-left' === $ss['position'] || 'left' === $ss['position'] ) {
		$selectors[ $sale_inside ]['left'] = '0.5rem';
	} else {
		$selectors[ $sale_inside ]['right'] = '0.5rem';
	}
}

// 9. Out of Stock
$selectors[ $out_of_stock_bdg ]['display']         = 'inline-flex';
$selectors[ $out_of_stock_bdg ]['align-items']     = 'center';
$selectors[ $out_of_stock_bdg ]['justify-content'] = 'center';
$selectors[ $out_of_stock_bdg ]['padding']         = '2px 8px';
$selectors[ $out_of_stock_bdg ]['min-width']       = '32px';
$selectors[ $out_of_stock_bdg ]['min-height']      = '20px';
$selectors[ $out_of_stock_bdg ]['line-height']     = '1.2';
$selectors[ $out_of_stock_bdg ]['border-radius']   = '2px';
$selectors[ $out_of_stock_bdg ]['white-space']     = 'nowrap';

if ( ! empty( $so['shape'] ) ) {
	$apply_badge_shape_css( $so['shape'], $out_of_stock_bdg );
}

if ( ! empty( $so['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $so['typography'], $out_of_stock_bdg, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $so['typography'], $out_of_stock_bdg, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $so['typography'], $out_of_stock_bdg, 'mobile' ) );
}
if ( ! empty( $so['backgroundColor'] ) ) {
	$selectors[ $out_of_stock_bdg ]['background-color'] = $so['backgroundColor'];
}
if ( ! empty( $so['textColor'] ) ) {
	$selectors[ $out_of_stock_bdg ]['color'] = $so['textColor'];
}
if ( ! empty( $so['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $so['marginBottom'], 'margin-bottom', $out_of_stock_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $so['marginBottom'], 'margin-bottom', $out_of_stock_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $so['marginBottom'], 'margin-bottom', $out_of_stock_sel, 'mobile' ) );
}
if ( ! empty( $so['position'] ) ) {
	$oos_inside = $wrap_sel . ' .wcb-products__product--onsaleInsideImage .wcb-products__product-outofstock-badge';
	if ( 'top-left' === $so['position'] || 'left' === $so['position'] ) {
		$selectors[ $oos_inside ]['position'] = 'absolute';
		$selectors[ $oos_inside ]['top']      = '0.5rem';
		$selectors[ $oos_inside ]['left']     = '0.5rem';
		$selectors[ $oos_inside ]['z-index']  = '10';
	} elseif ( 'top-right' === $so['position'] || 'right' === $so['position'] ) {
		$selectors[ $oos_inside ]['position'] = 'absolute';
		$selectors[ $oos_inside ]['top']      = '0.5rem';
		$selectors[ $oos_inside ]['right']    = '0.5rem';
		$selectors[ $oos_inside ]['z-index']  = '10';
	} else {
		$selectors[ $oos_inside ]['display'] = 'none';
	}
}

// Stacking when both out-of-stock and sale badges are on the same side inside the image.
$so_pos = ( ! empty( $so['position'] ) && ( 'top-right' === $so['position'] || 'right' === $so['position'] ) ) ? 'right' : 'left';
$ss_pos = ( ! empty( $ss['position'] ) && ( 'top-right' === $ss['position'] || 'right' === $ss['position'] ) ) ? 'right' : 'left';
if ( ! empty( $so['position'] ) && 'none' !== $so['position'] && ! empty( $ss['position'] ) && $so_pos === $ss_pos ) {
	$badge_shape = $so['shape'] ?? $ss['shape'] ?? 'round';
	$offset      = ( 'round' === $badge_shape ) ? '50px' : '32px';
	$selectors[ $wrap_sel . ' .wcb-products__product--onsaleInsideImage .wcb-products__product-outofstock-badge ~ .wcb-products__product-salebadge' ]['top'] = 'calc(0.5rem + ' . $offset . ')';
	$selectors[ $wrap_sel . ' .wcb-products__product--onsaleInsideImage .wcb-products__product-salebadge ~ .wcb-products__product-outofstock-badge' ]['top'] = 'calc(0.5rem + ' . $offset . ')';
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
		$selectors[ $add_cart_sel . ':hover svg path' ]['fill']       = $cbc['Hover']['color'] . ' !important';
		$selectors[ $add_cart_sel . ':hover svg path' ]['transition'] = 'fill 0.3s ease';
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
if ( ! empty( $sg['justifyContent'] ) ) {
	$selectors[ $pag_wrap_sel ]['justify-content'] = $sg['justifyContent'];
}
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

// 13. Wishlist Button
if ( ! empty( $sw ) ) {
	$wishlist_btn_sel = $wrap_sel . ' .wcb-products__product--wishlistTopRight--item';
	if ( ( $sw['position'] ?? '' ) === 'top-right' ) {
		$selectors[ $wishlist_btn_sel ]['position'] = 'absolute';
		$selectors[ $wishlist_btn_sel ]['top']      = '0';
		$selectors[ $wishlist_btn_sel ]['right']    = '0';
		$selectors[ $wishlist_btn_sel ]['z-index']  = '2';
	}
}

// 14. Quick View Button & Hover Gallery Preview
$qv_btn_sel        = $wrap_sel . ' .wcb-products__product--quickViewBottomImage--item';
$qv_prod_hover_sel = $wrap_sel . ' .wcb-products__product:hover .wcb-products__product--quickViewBottomImage--item';
$qv_btn_hover_sel  = $qv_btn_sel . ':hover';

$qv_position = $sq['position'] ?? 'center-image';
$qv_enabled  = ! empty( $sq['enabled'] );

if ( ! $qv_enabled ) {
	$selectors[ $qv_btn_sel ]['display'] = 'none !important';
} else {
	// Base button resets & styles
	$selectors[ $qv_btn_sel ]['border']          = 'none';
	$selectors[ $qv_btn_sel ]['cursor']          = 'pointer';
	$selectors[ $qv_btn_sel ]['gap']             = '6px';
	$selectors[ $qv_btn_sel ]['text-decoration'] = 'none';
	$selectors[ $qv_btn_sel ]['font-size']       = '14px';
	$selectors[ $qv_btn_sel ]['font-weight']     = '500';
	$selectors[ $qv_btn_sel ]['transition']      = 'transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease, color 0.3s ease';

	$bg_color   = ! empty( $sq['bg_color'] ) ? $sq['bg_color'] : '#ffffff';
	$text_color = ! empty( $sq['text_color'] ) ? $sq['text_color'] : '#000000';
	$selectors[ $qv_btn_sel ]['background-color'] = $bg_color;
	$selectors[ $qv_btn_sel ]['color']            = $text_color;

	if ( ! empty( $sq['border_radius'] ) ) {
		$selectors[ $qv_btn_sel ]['border-radius']        = WCB_Block_Helper::get_css_value( $sq['border_radius'] );
		$selectors[ $qv_prod_hover_sel ]['border-radius'] = WCB_Block_Helper::get_css_value( $sq['border_radius'] );
	}

	$hover_bg   = ! empty( $sq['hover_bg_color'] ) ? $sq['hover_bg_color'] : '#474747';
	$hover_text = ! empty( $sq['hover_text_color'] ) ? $sq['hover_text_color'] : '#ffffff';
	$selectors[ $qv_btn_hover_sel ]['background-color'] = $hover_bg;
	$selectors[ $qv_btn_hover_sel ]['color']            = $hover_text;

	$selectors[ $qv_btn_sel . ' .wcb-products__product--quickViewBottomImage__text' ]['color']       = 'inherit';
	$selectors[ $qv_btn_sel . ' svg' ]['color']                                                      = 'inherit';
	$selectors[ $qv_btn_sel . ' svg' ]['fill']                                                       = 'currentColor';
	$selectors[ $qv_btn_hover_sel . ' .wcb-products__product--quickViewBottomImage__text' ]['color'] = 'inherit';
	$selectors[ $qv_btn_hover_sel . ' svg' ]['color']                                               = 'inherit';
	$selectors[ $qv_btn_hover_sel . ' svg' ]['fill']                                                = 'currentColor';

	$cart_pos = $attr['general_addToCartBtn']['position'] ?? '';

	if ( $qv_position === 'bottom-image' ) {
		// Normal state: hidden at bottom of image
		$selectors[ $qv_btn_sel ]['position']        = 'absolute';
		$selectors[ $qv_btn_sel ]['left']            = '0';
		$selectors[ $qv_btn_sel ]['bottom']          = '10px';
		$selectors[ $qv_btn_sel ]['width']           = '100%';
		$selectors[ $qv_btn_sel ]['height']          = '0px';
		$selectors[ $qv_btn_sel ]['opacity']         = '0';
		$selectors[ $qv_btn_sel ]['visibility']      = 'hidden';
		$selectors[ $qv_btn_sel ]['z-index']         = '10';
		$selectors[ $qv_btn_sel ]['display']         = 'flex';
		$selectors[ $qv_btn_sel ]['align-items']     = 'center';
		$selectors[ $qv_btn_sel ]['justify-content'] = 'center';
		$selectors[ $qv_btn_sel ]['transition']      = 'height 0.3s ease, opacity 0.2s ease, background-color 0.3s ease, color 0.3s ease';

		// Hover state: animate into view
		$selectors[ $qv_prod_hover_sel ]['opacity']    = '1';
		$selectors[ $qv_prod_hover_sel ]['visibility'] = 'visible';
		$selectors[ $qv_prod_hover_sel ]['height']     = '40px';
		$selectors[ $qv_prod_hover_sel ]['display']    = 'flex !important';
	} elseif ( $qv_position === 'top-right' ) {
		// Normal state: offscreen/hidden
		$selectors[ $qv_btn_sel ]['display']  = 'none !important';
		$selectors[ $qv_btn_sel ]['position'] = 'absolute';
		$selectors[ $qv_btn_sel ]['top']      = '-10rem';
		$selectors[ $qv_btn_sel ]['right']    = '0rem';

		// Hover state
		$qv_tr_top = ( $cart_pos === 'icon' ) ? '0rem' : '-2.5rem';
		$selectors[ $qv_prod_hover_sel ]['display']         = 'flex !important';
		$selectors[ $qv_prod_hover_sel ]['align-items']     = 'center !important';
		$selectors[ $qv_prod_hover_sel ]['justify-content'] = 'center !important';
		$selectors[ $qv_prod_hover_sel ]['position']        = 'absolute';
		$selectors[ $qv_prod_hover_sel ]['top']             = $qv_tr_top;
		$selectors[ $qv_prod_hover_sel ]['bottom']          = 'auto';
		$selectors[ $qv_prod_hover_sel ]['right']           = '-0.1rem';
		$selectors[ $qv_prod_hover_sel ]['width']           = '2.6rem';
		$selectors[ $qv_prod_hover_sel ]['height']          = '2.48rem';
		$selectors[ $qv_prod_hover_sel ]['transform']       = 'translateY(2.5rem)';
		$selectors[ $qv_prod_hover_sel ]['border']          = 'none';
		$selectors[ $qv_prod_hover_sel ]['z-index']         = '10';
	} else {
		// Default: center-image
		// Normal state: hidden
		$selectors[ $qv_btn_sel ]['display']  = 'none !important';
		$selectors[ $qv_btn_sel ]['position'] = 'absolute';
		$selectors[ $qv_btn_sel ]['top']      = '-10rem';
		$selectors[ $qv_btn_sel ]['right']    = '0rem';

		// Hover state: centered horizontally on image
		$qv_bottom = ( $cart_pos === 'icon' ) ? '10rem' : '6rem';
		$selectors[ $qv_prod_hover_sel ]['display']         = 'flex !important';
		$selectors[ $qv_prod_hover_sel ]['align-items']     = 'center !important';
		$selectors[ $qv_prod_hover_sel ]['justify-content'] = 'center !important';
		$selectors[ $qv_prod_hover_sel ]['padding']         = '0.5rem 1.4rem !important';
		$selectors[ $qv_prod_hover_sel ]['position']        = 'absolute';
		$selectors[ $qv_prod_hover_sel ]['top']             = 'auto';
		$selectors[ $qv_prod_hover_sel ]['left']            = 'auto';
		$selectors[ $qv_prod_hover_sel ]['bottom']          = $qv_bottom;
		$selectors[ $qv_prod_hover_sel ]['right']           = '50%';
		$selectors[ $qv_prod_hover_sel ]['transform']       = 'translateX(50%)';
		$selectors[ $qv_prod_hover_sel ]['height']          = 'auto';
		$selectors[ $qv_prod_hover_sel ]['white-space']     = 'nowrap';
		$selectors[ $qv_prod_hover_sel ]['border']          = 'none';
		$selectors[ $qv_prod_hover_sel ]['box-shadow']      = '0 4px 10px rgba(0,0,0,0.1)';
		$selectors[ $qv_prod_hover_sel ]['z-index']         = '10';
	}
}

$selectors[ $product_sel . ' .wcb-products__product-featured' ]['overflow'] = 'hidden';

// Hover Gallery Preview (Interactivity API wrapper & tiny-slider)
$qv_preview_sel = $wrap_sel . ' .wcb-products__product-quickview-preview';
$selectors[ $qv_preview_sel ]['position']       = 'absolute';
$selectors[ $qv_preview_sel ]['top']            = '0px';
$selectors[ $qv_preview_sel ]['left']           = '0px';
$selectors[ $qv_preview_sel ]['right']          = '0px';
$selectors[ $qv_preview_sel ]['bottom']         = '0px';
$selectors[ $qv_preview_sel ]['pointer-events'] = 'none';
$selectors[ $qv_preview_sel ]['z-index']        = '4';

$selectors[ $qv_preview_sel . ' > *' ]['pointer-events'] = 'auto';

$qv_gallery_sel = $wrap_sel . ' .wcb-quick-view-hover-gallery';
$selectors[ $qv_gallery_sel ]['position']       = 'absolute';
$selectors[ $qv_gallery_sel ]['top']            = '0px';
$selectors[ $qv_gallery_sel ]['left']           = '0px';
$selectors[ $qv_gallery_sel ]['right']          = '0px';
$selectors[ $qv_gallery_sel ]['bottom']         = '0px';
$selectors[ $qv_gallery_sel ]['z-index']        = '1';
$selectors[ $qv_gallery_sel ]['overflow']       = 'hidden';
$selectors[ $qv_gallery_sel ]['pointer-events'] = 'auto';
$selectors[ $qv_gallery_sel . '[hidden]' ]['display'] = 'none !important';
$selectors[ $qv_gallery_sel . ' img' ]['width']           = '100%';
$selectors[ $qv_gallery_sel . ' img' ]['height']          = '100%';
$selectors[ $qv_gallery_sel . ' img' ]['object-fit']      = 'cover';
$selectors[ $qv_gallery_sel . ' img' ]['object-position'] = 'center';
$selectors[ $qv_gallery_sel . ' img' ]['display']         = 'block';

$selectors[ $qv_preview_sel . ' .tns-outer' ]['position'] = 'absolute';
$selectors[ $qv_preview_sel . ' .tns-outer' ]['top']      = '0px';
$selectors[ $qv_preview_sel . ' .tns-outer' ]['left']     = '0px';
$selectors[ $qv_preview_sel . ' .tns-outer' ]['right']    = '0px';
$selectors[ $qv_preview_sel . ' .tns-outer' ]['bottom']   = '0px';
$selectors[ $qv_preview_sel . ' .tns-outer' ]['height']   = '100%';
$selectors[ $qv_preview_sel . ' .tns-outer' ]['width']    = '100%';
$selectors[ $qv_preview_sel . ' .tns-outer' ]['overflow'] = 'hidden';
$selectors[ $qv_preview_sel . ' .tns-ovh' ]['height']     = '100%';
$selectors[ $qv_preview_sel . ' .tns-ovh' ]['width']      = '100%';
$selectors[ $qv_preview_sel . ' .tns-inner' ]['height']   = '100%';
$selectors[ $qv_preview_sel . ' .tns-inner' ]['width']    = '100%';
$selectors[ $qv_preview_sel . ' .wcb-quick-view-hover-gallery' ]['height'] = '100%';
$selectors[ $qv_preview_sel . ' .tns-item' ]['height']          = '100%';
$selectors[ $qv_preview_sel . ' .tns-item' ]['max-height']      = '100%';
$selectors[ $qv_preview_sel . ' .tns-item' ]['object-fit']      = 'cover';
$selectors[ $qv_preview_sel . ' .tns-item' ]['object-position'] = 'center';
$selectors[ $qv_preview_sel . ' .tns-item' ]['vertical-align']  = 'top';
$selectors[ $qv_preview_sel . ' img.tns-item' ]['display']      = 'inline-block';

$nav_bottom = ( $qv_position === 'bottom-image' ) ? '54px' : '10px';
$selectors[ $qv_preview_sel . ' .tns-nav' ]['position']        = 'absolute';
$selectors[ $qv_preview_sel . ' .tns-nav' ]['bottom']          = $nav_bottom;
$selectors[ $qv_preview_sel . ' .tns-nav' ]['left']            = '0px';
$selectors[ $qv_preview_sel . ' .tns-nav' ]['right']           = '0px';
$selectors[ $qv_preview_sel . ' .tns-nav' ]['display']         = 'flex';
$selectors[ $qv_preview_sel . ' .tns-nav' ]['justify-content'] = 'center';
$selectors[ $qv_preview_sel . ' .tns-nav' ]['align-items']     = 'center';
$selectors[ $qv_preview_sel . ' .tns-nav' ]['gap']             = '6px';
$selectors[ $qv_preview_sel . ' .tns-nav' ]['z-index']         = '25';
$selectors[ $qv_preview_sel . ' .tns-nav' ]['pointer-events']  = 'auto';
$selectors[ $qv_preview_sel . ' .tns-nav' ]['height']          = 'auto';

$selectors[ $qv_preview_sel . ' .tns-nav button' ]['width']            = '8px';
$selectors[ $qv_preview_sel . ' .tns-nav button' ]['height']           = '8px';
$selectors[ $qv_preview_sel . ' .tns-nav button' ]['border-radius']    = '50%';
$selectors[ $qv_preview_sel . ' .tns-nav button' ]['background-color'] = 'rgba(255, 255, 255, 0.7)';
$selectors[ $qv_preview_sel . ' .tns-nav button' ]['border']           = '1px solid rgba(0, 0, 0, 0.2)';
$selectors[ $qv_preview_sel . ' .tns-nav button' ]['box-shadow']       = '0 1px 3px rgba(0, 0, 0, 0.35)';
$selectors[ $qv_preview_sel . ' .tns-nav button' ]['padding']          = '0px';
$selectors[ $qv_preview_sel . ' .tns-nav button' ]['margin']           = '0 2px';
$selectors[ $qv_preview_sel . ' .tns-nav button' ]['cursor']           = 'pointer';
$selectors[ $qv_preview_sel . ' .tns-nav button' ]['pointer-events']   = 'auto';
$selectors[ $qv_preview_sel . ' .tns-nav button' ]['transition']       = 'all 0.2s ease';

$selectors[ $qv_preview_sel . ' .tns-nav button.tns-nav-active' ]['background-color'] = '#ffffff';
$selectors[ $qv_preview_sel . ' .tns-nav button.tns-nav-active' ]['border-color']       = '#000000';
$selectors[ $qv_preview_sel . ' .tns-nav button.tns-nav-active' ]['transform']          = 'scale(1.25)';

$selectors[ $qv_preview_sel . ' .tns-controls' ]['position']        = 'absolute';
$selectors[ $qv_preview_sel . ' .tns-controls' ]['top']             = '50%';
$selectors[ $qv_preview_sel . ' .tns-controls' ]['transform']       = 'translateY(-50%)';
$selectors[ $qv_preview_sel . ' .tns-controls' ]['left']            = '0px';
$selectors[ $qv_preview_sel . ' .tns-controls' ]['right']           = '0px';
$selectors[ $qv_preview_sel . ' .tns-controls' ]['display']         = 'flex';
$selectors[ $qv_preview_sel . ' .tns-controls' ]['justify-content'] = 'space-between';
$selectors[ $qv_preview_sel . ' .tns-controls' ]['z-index']         = '25';
$selectors[ $qv_preview_sel . ' .tns-controls' ]['pointer-events']  = 'none';
$selectors[ $qv_preview_sel . ' .tns-controls' ]['opacity']         = '0';
$selectors[ $qv_preview_sel . ' .tns-controls' ]['transition']      = 'opacity 0.25s ease';

$selectors[ $product_sel . ':hover .wcb-products__product-quickview-preview .tns-controls' ]['opacity'] = '1';

$selectors[ $qv_preview_sel . ' .tns-controls button' ]['width']            = '32px';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['height']           = '32px';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['min-width']        = '32px';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['min-height']       = '32px';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['border-radius']    = '50%';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['background-color'] = 'rgba(255, 255, 255, 0.95)';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['color']            = '#222222';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['border']           = 'none';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['padding']          = '0px';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['cursor']           = 'pointer';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['box-shadow']       = '0 2px 8px rgba(0, 0, 0, 0.2)';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['display']          = 'inline-flex';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['align-items']      = 'center';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['justify-content']  = 'center';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['font-size']        = '0px';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['line-height']      = '1';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['pointer-events']   = 'auto';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['z-index']          = '25';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['transform']        = 'none';
$selectors[ $qv_preview_sel . ' .tns-controls button' ]['transition']       = 'background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease';

$selectors[ $qv_preview_sel . ' .tns-controls button:hover' ]['background-color'] = '#ffffff';
$selectors[ $qv_preview_sel . ' .tns-controls button:hover' ]['color']            = '#000000';
$selectors[ $qv_preview_sel . ' .tns-controls button:hover' ]['box-shadow']       = '0 4px 12px rgba(0, 0, 0, 0.3)';
$selectors[ $qv_preview_sel . ' .tns-controls button:hover' ]['transform']        = 'scale(1.08)';

$selectors[ $qv_preview_sel . ' .tns-controls button svg' ]['width']          = '14px';
$selectors[ $qv_preview_sel . ' .tns-controls button svg' ]['height']         = '14px';
$selectors[ $qv_preview_sel . ' .tns-controls button svg' ]['stroke']         = 'currentColor';
$selectors[ $qv_preview_sel . ' .tns-controls button svg' ]['pointer-events'] = 'none';

// 15. Countdown Urgency
if ( ! empty( $scu ) ) {
	$cu_sel = $wrap_sel . ' .wcb-products__countdown-urgency';
	if ( ! empty( $scu['textColor'] ) ) {
		$selectors[ $cu_sel ]['color'] = $scu['textColor'];
	}
	if ( ! empty( $scu['backgroundColor'] ) ) {
		$selectors[ $cu_sel ]['background-color'] = $scu['backgroundColor'];
	}
	if ( ! empty( $scu['border'] ) ) {
		$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $scu['border'], $cu_sel, true ) );
	}
}

// 16. Pre-order
$preorder_msg_sel = $wrap_sel . ' .wcb-products__product-preorder-message';
$selectors[ $preorder_msg_sel ]['color']       = '#000000';
$selectors[ $preorder_msg_sel ]['font-size']   = '15px';
$selectors[ $preorder_msg_sel ]['font-weight'] = '400';

$preorder_cd_sel = $wrap_sel . ' .wcb-products__product-preorder-countdown';
$selectors[ $preorder_cd_sel ]['display']       = 'flex';
$selectors[ $preorder_cd_sel ]['gap']           = '8px';
$selectors[ $preorder_cd_sel ]['margin-bottom'] = '6px';

$preorder_item_sel = $wrap_sel . ' .wcb-products__product-preorder-countdown-item';
$selectors[ $preorder_item_sel ]['font-size']   = '13px';
$selectors[ $preorder_item_sel ]['font-weight'] = '600';

// 17. Advance
$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

