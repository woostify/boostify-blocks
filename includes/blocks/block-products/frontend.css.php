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
// Ensure block wrapper is displayed (overrides the display: none anti-FOUC rule in style-index.css).
$css['desktop'][ $wrap_sel ]['display'] = 'block';

// 1. Products List Layout: Grid vs Carousel (Scroll Snap Slider)
$switch_snap     = $sl['swithToScrollSnapX'] ?? 'None';
$is_snap_desktop = ( 'Desktop' === $switch_snap );
$is_snap_tablet  = ( $is_snap_desktop || 'Tablet' === $switch_snap );
$is_snap_mobile  = ( $is_snap_tablet  || 'Mobile' === $switch_snap );

$indicators_sel = $wrap_sel . ' .indicators';
$item_sel       = $list_sel . ' > div';

// Visibility of carousel indicators / arrows
$css['desktop'][ $indicators_sel ]['display'] = $is_snap_desktop ? 'block' : 'none';
$css['tablet'][ $indicators_sel ]['display']  = $is_snap_tablet ? 'block' : 'none';
$css['mobile'][ $indicators_sel ]['display']  = $is_snap_mobile ? 'block' : 'none';

// Number of columns responsive
$num_col = $sl['numberOfColumn'] ?? 4;
$nc_d = is_array( $num_col ) ? ( $num_col['Desktop'] ?? 4 ) : $num_col;
$nc_t = is_array( $num_col ) ? ( $num_col['Tablet'] ?? $nc_d ) : $nc_d;
$nc_m = is_array( $num_col ) ? ( $num_col['Mobile'] ?? $nc_t ) : $nc_t;

// Column & Row Gaps responsive
$col_gap = $sl['colunmGap'] ?? array();
$cg_d = is_array( $col_gap ) ? ( $col_gap['Desktop'] ?? '1.5rem' ) : ( $col_gap ?: '1.5rem' );
$cg_t = is_array( $col_gap ) ? ( $col_gap['Tablet'] ?? $cg_d ) : $cg_d;
$cg_m = is_array( $col_gap ) ? ( $col_gap['Mobile'] ?? $cg_t ) : $cg_t;

$row_gap = $sl['rowGap'] ?? array();
$rg_d = is_array( $row_gap ) ? ( $row_gap['Desktop'] ?? '1.5rem' ) : ( $row_gap ?: '1.5rem' );
$rg_t = is_array( $row_gap ) ? ( $row_gap['Tablet'] ?? $rg_d ) : $rg_d;
$rg_m = is_array( $row_gap ) ? ( $row_gap['Mobile'] ?? $rg_t ) : $rg_t;

// Helper to format unit
$wcb_format_unit = function( $val, $default = '0px' ) {
	if ( empty( $val ) && '0' !== (string) $val && 0 !== $val ) {
		return $default;
	}
	$val_str = trim( (string) $val );
	if ( is_numeric( $val_str ) ) {
		return $val_str . 'px';
	}
	return $val_str;
};

$cg_d_fmt = $wcb_format_unit( $cg_d, '1.5rem' );
$cg_t_fmt = $wcb_format_unit( $cg_t, $cg_d_fmt );
$cg_m_fmt = $wcb_format_unit( $cg_m, $cg_t_fmt );

$rg_d_fmt = $wcb_format_unit( $rg_d, '1.5rem' );
$rg_t_fmt = $wcb_format_unit( $rg_t, $rg_d_fmt );
$rg_m_fmt = $wcb_format_unit( $rg_m, $rg_t_fmt );

// Peek after responsive (Carousel peek overflow)
$peek = $sl['peekAfter'] ?? array();
$pk_d = is_array( $peek ) ? ( $peek['Desktop'] ?? '0px' ) : ( $peek ?: '0px' );
$pk_t = is_array( $peek ) ? ( $peek['Tablet'] ?? $pk_d ) : $pk_d;
$pk_m = is_array( $peek ) ? ( $peek['Mobile'] ?? $pk_t ) : $pk_t;

$pk_d_fmt = $wcb_format_unit( $pk_d, '0px' );
$pk_t_fmt = $wcb_format_unit( $pk_t, $pk_d_fmt );
$pk_m_fmt = $wcb_format_unit( $pk_m, $pk_t_fmt );

// --- Desktop (Base CSS) ---
$css['desktop'][ $list_sel ]['row-gap']    = $rg_d_fmt;
$css['desktop'][ $list_sel ]['column-gap'] = $cg_d_fmt;
if ( $is_snap_desktop ) {
	$css['desktop'][ $list_sel ]['display']          = 'flex';
	$css['desktop'][ $list_sel ]['overflow-x']       = 'auto';
	$css['desktop'][ $list_sel ]['scroll-snap-type'] = 'x proximity';
	$nc_d_num = max( 1, intval( $nc_d ) );
	$css['desktop'][ $item_sel ]['scroll-snap-align'] = 'start';
	$css['desktop'][ $item_sel ]['flex-shrink']        = '0';
	$css['desktop'][ $item_sel ]['flex-basis']         = "calc((100% - (" . ( $nc_d_num - 1 ) . " * {$cg_d_fmt})) / {$nc_d_num} - {$pk_d_fmt})";
} else {
	$css['desktop'][ $list_sel ]['display']               = 'grid';
	$css['desktop'][ $list_sel ]['grid-template-columns'] = "repeat({$nc_d}, minmax(0, 1fr))";
}

// --- Tablet (Media Query) ---
$css['tablet'][ $list_sel ]['row-gap']    = $rg_t_fmt;
$css['tablet'][ $list_sel ]['column-gap'] = $cg_t_fmt;
if ( $is_snap_tablet ) {
	$css['tablet'][ $list_sel ]['display']          = 'flex';
	$css['tablet'][ $list_sel ]['overflow-x']       = 'auto';
	$css['tablet'][ $list_sel ]['scroll-snap-type'] = 'x proximity';
	$nc_t_num = max( 1, intval( $nc_t ) );
	$css['tablet'][ $item_sel ]['scroll-snap-align'] = 'start';
	$css['tablet'][ $item_sel ]['flex-shrink']        = '0';
	$css['tablet'][ $item_sel ]['flex-basis']         = "calc((100% - (" . ( $nc_t_num - 1 ) . " * {$cg_t_fmt})) / {$nc_t_num} - {$pk_t_fmt})";
} else {
	$css['tablet'][ $list_sel ]['display']               = 'grid';
	$css['tablet'][ $list_sel ]['grid-template-columns'] = "repeat({$nc_t}, minmax(0, 1fr))";
}

// --- Mobile (Media Query) ---
$css['mobile'][ $list_sel ]['row-gap']    = $rg_m_fmt;
$css['mobile'][ $list_sel ]['column-gap'] = $cg_m_fmt;
if ( $is_snap_mobile ) {
	$css['mobile'][ $list_sel ]['display']          = 'flex';
	$css['mobile'][ $list_sel ]['overflow-x']       = 'auto';
	$css['mobile'][ $list_sel ]['scroll-snap-type'] = 'x proximity';
	$nc_m_num = max( 1, intval( $nc_m ) );
	$css['mobile'][ $item_sel ]['scroll-snap-align'] = 'start';
	$css['mobile'][ $item_sel ]['flex-shrink']        = '0';
	$css['mobile'][ $item_sel ]['flex-basis']         = "calc((100% - (" . ( $nc_m_num - 1 ) . " * {$cg_m_fmt})) / {$nc_m_num} - {$pk_m_fmt})";
} else {
	$css['mobile'][ $list_sel ]['display']               = 'grid';
	$css['mobile'][ $list_sel ]['grid-template-columns'] = "repeat({$nc_m}, minmax(0, 1fr))";
}

// 2. Product Card Base
$ga = $attr['general_addToCartBtn'] ?? array();
if ( isset( $sl['isEqualHeight'] ) && false === $sl['isEqualHeight'] ) {
	$css['desktop'][ $product_sel ]['height'] = 'max-content';
}
// Quantity & hidden button layout settings
$cart_pos = $ga['position'] ?? 'inside image';
$show_qty = ! empty( $ga['isShowQuantity'] );
$btn_wrap_sel = $wrap_sel . ' .wcb-products__price-button-wrapper';
$hidden_btn_sel = $wrap_sel . ' .wcb-products__product-style-hidden-btn-add-to-cart';

$css['desktop'][ $btn_wrap_sel ]['height']      = ( 'bottom visible' === $cart_pos ) ? 'auto' : ( $show_qty ? '84px' : '50px' );
$css['desktop'][ $btn_wrap_sel ]['line-height'] = ( 'bottom visible' === $cart_pos ) ? 'normal' : '36px';
$css['desktop'][ $btn_wrap_sel ]['overflow']    = 'hidden';

if ( 'bottom' === $cart_pos || 'inside image' === $cart_pos ) {
	$css['desktop'][ $hidden_btn_sel ]['display'] = 'none !important';
} else {
	$css['desktop'][ $hidden_btn_sel ]['display'] = 'unset';
}
$css['desktop'][ $hidden_btn_sel ]['align-items'] = 'center';
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

if ( ! empty( $ss['shape'] ) ) {
	$apply_badge_shape_css( $ss['shape'], $sale_badge_sel );
}

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
	if ( 'top-left' === $ss['position'] || 'left' === $ss['position'] ) {
		$css['desktop'][ $sale_inside ]['left'] = '0.5rem';
	} else {
		$css['desktop'][ $sale_inside ]['right'] = '0.5rem';
	}
}

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
		$css['desktop'][ $oos_inside ]['left'] = '0.5rem';
	} elseif ( 'top-right' === $so['position'] || 'right' === $so['position'] ) {
		$css['desktop'][ $oos_inside ]['right'] = '0.5rem';
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
	$css['desktop'][ $add_cart_wrap_sel ]['align-items'] = $align_items;
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


// 14. Quick View Button
$qv_btn_sel        = $wrap_sel . ' .wcb-products__product .wcb-products__product--quickViewBottomImage--item';
$qv_prod_hover_sel = $wrap_sel . ' .wcb-products__product:hover .wcb-products__product--quickViewBottomImage--item';
$qv_btn_hover_sel  = $qv_btn_sel . ':hover';

$qv_enabled = ! empty( $sq['enabled'] );

if ( ! $qv_enabled ) {
	$css['desktop'][ $qv_btn_sel ]['display'] = 'none !important';
} else {
	// Dynamic colors & border radius (only when customized, static defaults are in style.scss)
	if ( ! empty( $sq['bg_color'] ) && '#ffffff' !== $sq['bg_color'] ) {
		WCB_Block_Helper::add_responsive_css( $css, $qv_btn_sel, 'background-color', $sq['bg_color'] );
	}
	if ( ! empty( $sq['text_color'] ) && '#000000' !== $sq['text_color'] ) {
		WCB_Block_Helper::add_responsive_css( $css, $qv_btn_sel, 'color', $sq['text_color'] );
	}

	if ( isset( $sq['border_radius'] ) && '' !== $sq['border_radius'] ) {
		WCB_Block_Helper::add_responsive_css( $css, $qv_btn_sel, 'border-radius', WCB_Block_Helper::get_css_value( $sq['border_radius'] ) );
		WCB_Block_Helper::add_responsive_css( $css, $qv_prod_hover_sel, 'border-radius', WCB_Block_Helper::get_css_value( $sq['border_radius'] ) );
	}

	if ( ! empty( $sq['hover_bg_color'] ) && '#474747' !== $sq['hover_bg_color'] ) {
		WCB_Block_Helper::add_responsive_css( $css, $qv_btn_hover_sel, 'background-color', $sq['hover_bg_color'] );
	}
	if ( ! empty( $sq['hover_text_color'] ) && '#ffffff' !== $sq['hover_text_color'] ) {
		WCB_Block_Helper::add_responsive_css( $css, $qv_btn_hover_sel, 'color', $sq['hover_text_color'] );
	}
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

// 16. Advance
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
