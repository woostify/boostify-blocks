<?php

if (!function_exists('boostify_blocks_get_theme_defaults_data')) {
	/**
	 * Build theme defaults for both editor and frontend.
	 */
	function boostify_blocks_get_theme_defaults_data() {
		$woostify = get_option('woostify_setting') ?: [];
		$woostify_pro = get_option('woostify_pro_options') ?: [];

		// Check if Woostify Pro is active
		$woostify_pro_active = defined( 'WOOSTIFY_PRO_VERSION' ) || in_array( 'woostify-pro/woostify-pro.php', get_option( 'active_plugins', array() ), true ) || in_array( 'woostify-pro-dev/woostify-pro.php', get_option( 'active_plugins', array() ), true );

		$add_to_cart_position = $woostify['shop_page_add_to_cart_button_position'] ?? null;
		if ($add_to_cart_position === 'image') {
			$add_to_cart_position = 'inside image';
		}

		// Wishlist defaults (Woostify supports multiple plugins).
		$wishlist_plugin_active = defined('TINVWL_FVERSION') || class_exists('TInvWL_Public_Add_To_Wishlist') || class_exists('TInvWL_Plugin');
		$wishlist_support_plugin = $woostify['shop_page_wishlist_support_plugin'] ?? null;
		if (!$wishlist_support_plugin) {
			if ($wishlist_plugin_active) {
				$wishlist_support_plugin = 'ti';
			} elseif (defined('YITH_WCWL') || class_exists('YITH_WCWL')) {
				$wishlist_support_plugin = 'yith';
			} else {
				$wishlist_support_plugin = 'yith';
			}
		}

		// Quick view defaults (Woostify Pro).
		$quick_view_enabled = get_option('woostify_wc_quick_view') === 'activated' || defined('WOOSTIFY_PRO_QUICK_VIEW');
		$quick_view_position = $woostify_pro['shop_page_quick_view_position'] ?? 'top-right';
		$quick_view_radius = (int)($woostify_pro['shop_product_quick_view_radius'] ?? 0);

		// Countdown Urgency settings (Woostify Pro).
		$countdown_urgency_active = class_exists('Woostify_Countdown_Urgency');

		// Product Label defaults (Woostify Pro).
		$product_label_active = $woostify_pro_active && ( 'activated' === get_option( 'woostify_product_label' ) || defined( 'WOOSTIFY_PRO_PRODUCT_LABEL' ) );
		$product_label_style  = $product_label_active ? get_option( 'woostify_product_label_style', 'round' ) : 'rectangular';
		$sale_bg_default      = $product_label_active ? get_option( 'woostify_product_label_background', '#1346af' ) : ( $woostify['shop_page_sale_bg_color'] ?? '#0c4a6e' );
		$sale_color_default   = $product_label_active ? get_option( 'woostify_product_label_text_color', '#ffffff' ) : ( $woostify['shop_page_sale_color'] ?? '#f0f9ff' );
		$out_bg_default       = $product_label_active ? get_option( 'woostify_product_label_out_of_stock_background', '#dd3333' ) : ( $woostify['shop_page_out_of_stock_bg_color'] ?? '#dd3333' );
		$out_color_default    = $product_label_active ? get_option( 'woostify_product_label_out_of_stock_text_color', '#ffffff' ) : ( $woostify['shop_page_out_of_stock_color'] ?? '#ffffff' );

		return [
			'countdown_urgency' => [
				'active'               => $countdown_urgency_active,
				'style'                => get_option('woostify_countdown_urgency_style', 'default'),
				'apply_for'            => get_option('woostify_countdown_urgency_apply_for', 'all'),
				'categories_selected'  => get_option('woostify_countdown_urgency_categories_selected', false),
				'products_selected'    => get_option('woostify_countdown_urgency_products_selected', false),
				'categories_exclude'   => get_option('woostify_countdown_urgency_categories_exclude', false),
				'products_exclude'     => get_option('woostify_countdown_urgency_products_exclude', false),
				'time_duration'        => get_option('woostify_countdown_urgency_time_duration', '1'),
				'time_type'            => get_option('woostify_countdown_urgency_time_type', 'days'),
				'message'              => get_option('woostify_countdown_urgency_message', 'Hurry up! Flash Sale Ends Soon!'),
				'days_label'           => get_option('woostify_countdown_urgency_days_label', 'DAYS'),
				'hours_label'          => get_option('woostify_countdown_urgency_hours_label', 'HOURS'),
				'minutes_label'        => get_option('woostify_countdown_urgency_minutes_label', 'MINS'),
				'seconds_label'        => get_option('woostify_countdown_urgency_seconds_label', 'SECS'),
				'display_on_thumbnail' => get_option('woostify_countdown_urgency_display_on_thumbnail', '0'),
				'hide_after_time_up'   => get_option('woostify_countdown_urgency_hide_after_time_up', '1'),
			],
			'product_per_row' => [
				'desktop' => (int)($woostify['products_per_row'] ?? 3),
				'tablet'  => (int)($woostify['tablet_products_per_row'] ?? 2),
				'mobile'  => (int)($woostify['mobile_products_per_row'] ?? 2),
			],
			'product_per_page' => (int)($woostify['products_per_page'] ?? 10),
			'shop_archive_border' => [
				'style' => ($woostify['shop_page_product_card_border_style'] ?? 'none'),
				'width' => (int)($woostify['shop_page_product_card_border_width'] ?? 0),
				'color' => ($woostify['shop_page_product_card_border_color'] ?? '#000'),
			],
			'shop_archive_product_content' => [
				'title_flag'    => (bool)($woostify['shop_page_product_title'] ?? true),
				'category_flag' => $woostify['shop_page_product_category'] ?? '1',
				'rating_flag'   => $woostify['shop_page_product_rating'] ?? '1',
				'price_flag'    => $woostify['shop_page_product_price'] ?? '1',
				'quantity_flag' => $woostify['shop_page_product_quantity'] ?? '1',
				'equal_flag' => $woostify['shop_page_product_content_equal'] ?? '1',
				'align'    => $woostify['shop_page_product_alignment'] ?? 'center',
				'min_height'  => (int)($woostify['shop_page_product_content_min_height'] ?? 0),
			],
			'shop_archive_product_image' => [
				'style' => $woostify['shop_page_product_image_border_style'] ?? 'none',
				'width' => (int)($woostify['shop_page_product_image_border_width'] ?? 0),
				'color' => $woostify['shop_page_product_image_border_color'] ?? '#000',
				'hover' => $woostify['shop_page_product_image_hover'] ?? 'none',
			],
			'shop_archive_sale_tag' => [
				'bg_color'   => $sale_bg_default,
				'text_color' => $sale_color_default,
				'position'   => $woostify['shop_page_sale_tag_position'] ?? 'top-left',
				'shape'      => $product_label_style,
			],
			'shop_archive_out_of_stock' => [
				'bg_color'   => $out_bg_default,
				'text_color' => $out_color_default,
				'position'   => $woostify['shop_page_out_of_stock_position'] ?? 'left',
				'shape'      => $product_label_style,
			],
			'shop_archive_general_design' => [
				'title_color'       => $woostify['shop_page_product_title_color'] ?? '#000',
				'title_font_size'   => [
					'desktop' => (int)($woostify['shop_page_product_title_font_size'] ?? 14),
					'tablet'  => (int)($woostify['shop_page_product_title_tablet_font_size'] ?? 14),
					'mobile'  => (int)($woostify['shop_page_product_title_mobile_font_size'] ?? 14),
				],
				'price_color'      => $woostify['shop_page_product_price_color'] ?? '#000',
				'price_font_size' => [
					'desktop' => (int)($woostify['shop_page_product_price_font_size'] ?? 18),
					'tablet'  => (int)($woostify['shop_page_product_price_tablet_font_size'] ?? 14),
					'mobile'  => (int)($woostify['shop_page_product_price_mobile_font_size'] ?? 14),
				],
			],
			'shop_archive_add_to_cart_btn' => [
				'text_color' => $woostify['shop_page_button_cart_color'] ?? '#fff',
				'bg_color'   => $woostify['shop_page_button_cart_background'] ?? '#0c4a6e',
				'hover_text_color' => $woostify['shop_page_button_color_hover'] ?? '#fff',
				'hover_bg_color'   => $woostify['shop_page_button_background_hover'] ?? '#094771',
				'border_radius'    => (int)($woostify['shop_page_button_border_radius'] ?? 0),
				'position'         => $add_to_cart_position ?? 'none',
				'show_icon'        => isset($woostify['shop_product_add_to_cart_icon']) ? (bool)$woostify['shop_product_add_to_cart_icon'] : true,
			],
			'shop_archive_wishlist_btn' => [
				'position' => $woostify['shop_page_wishlist_position'] ?? 'none',
				'style'    => $wishlist_support_plugin,
				'wishlist_plugin_active' => $wishlist_plugin_active,
			],
			'shop_quick_view_btn' => [
				'enabled'          => $quick_view_enabled,
				'position'         => $quick_view_position,
				'show_icon'        => (bool)($woostify_pro['shop_product_quick_view_icon'] ?? true),
				'bg_color'         => $woostify_pro['shop_product_quick_view_background'] ?? '',
				'text_color'       => $woostify_pro['shop_product_quick_view_color'] ?? '',
				'hover_bg_color'   => $woostify_pro['shop_product_quick_view_bg_hover'] ?? '',
				'hover_text_color' => $woostify_pro['shop_product_quick_view_c_hover'] ?? '',
				'border_radius'    => $quick_view_radius,
				'woostify_pro_active' => $woostify_pro_active == 1 ? true : false,
			],
		];
	}
}

if ( ! function_exists( 'boostify_blocks_get_badge_shape_css_rules' ) ) {
	/**
	 * Get CSS property-value pairs for product badge shapes.
	 *
	 * @param string $shape Badge shape name.
	 * @return array<string, string>
	 */
	function boostify_blocks_get_badge_shape_css_rules( $shape ) {
		switch ( $shape ) {
			case 'round':
				return array(
					'border-radius' => '50%',
					'min-width'     => '40px',
					'min-height'    => '40px',
					'padding'       => '5px',
					'text-align'    => 'center',
					'word-break'    => 'break-all',
					'box-shadow'    => '0 1px 2px rgba(0,0,0,0.1)',
				);
			case 'pill':
				return array(
					'border-radius' => '9999px',
					'padding'       => '2px 12px',
				);
			case 'leaf':
				return array(
					'border-radius' => '10px 0 10px 0',
					'padding'       => '2px 8px',
				);
			case 'parallelogram':
				return array(
					'border-radius' => '0',
					'clip-path'     => 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)',
					'padding-left'  => '15px',
					'padding-right' => '15px',
				);
			case 'teardrop':
				return array(
					'border-radius' => '50% 50% 50% 0',
					'padding'       => '4px 8px',
				);
			case 'ribbon':
				return array(
					'border-radius' => '0',
					'clip-path'     => 'polygon(0 0, 100% 0, calc(100% - 8px) 50%, 100% 100%, 0 100%)',
					'padding-right' => '15px',
				);
			case 'tag-left':
				return array(
					'border-radius' => '0',
					'clip-path'     => 'polygon(10px 0%, 100% 0, 100% 100%, 10px 100%, 0% 50%)',
					'padding-left'  => '15px',
				);
			case 'rectangular':
			default:
				return array(
					'border-radius' => '2px',
					'padding'       => '2px 8px',
				);
		}
	}
}

add_action('enqueue_block_editor_assets', function () {
	$data = boostify_blocks_get_theme_defaults_data();
	wp_add_inline_script('wp-blocks', 'window.BOOSTIFY_BLOCKS_THEME_DEFAULTS='.wp_json_encode($data).';', 'before');

	$sale_shape = $data['shop_archive_sale_tag']['shape'] ?? 'rectangular';
	$out_shape  = $data['shop_archive_out_of_stock']['shape'] ?? 'rectangular';

	$sale_rules = boostify_blocks_get_badge_shape_css_rules( $sale_shape );
	$out_rules  = boostify_blocks_get_badge_shape_css_rules( $out_shape );

	$sale_css = '';
	foreach ( $sale_rules as $prop => $val ) {
		$sale_css .= "{$prop}: {$val} !important; ";
	}

	$out_css = '';
	foreach ( $out_rules as $prop => $val ) {
		$out_css .= "{$prop}: {$val} !important; ";
	}

	$editor_css = "
		.editor-styles-wrapper .wcb-products__product-salebadge .wcb-products__product-onsale,
		.wcb-products__product-salebadge .wcb-products__product-onsale {
			display: inline-flex !important;
			align-items: center !important;
			justify-content: center !important;
			line-height: 1.2 !important;
			white-space: nowrap !important;
			{$sale_css}
		}
		.editor-styles-wrapper .wcb-products__product-salebadge .wcb-products__product-onsale span.onsale,
		.wcb-products__product-salebadge .wcb-products__product-onsale span.onsale {
			position: static !important;
			margin: 0 !important;
			padding: 0 !important;
			display: inline !important;
			font-size: inherit !important;
			line-height: inherit !important;
			color: inherit !important;
			background-color: transparent !important;
		}
		.editor-styles-wrapper .wcb-products__product-outofstock-badge .wcb-products__product-on-outofstock,
		.wcb-products__product-outofstock-badge .wcb-products__product-on-outofstock {
			display: inline-flex !important;
			align-items: center !important;
			justify-content: center !important;
			line-height: 1.2 !important;
			white-space: nowrap !important;
			{$out_css}
		}
	";

	wp_register_style( 'boostify-blocks-editor-badge-sync', false );
	wp_enqueue_style( 'boostify-blocks-editor-badge-sync' );
	wp_add_inline_style( 'boostify-blocks-editor-badge-sync', $editor_css );
	wp_add_inline_style( 'boostify-blocks-frontend', $editor_css );
}, 20);
