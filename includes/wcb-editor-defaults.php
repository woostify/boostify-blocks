<?php

if (!function_exists('boostify_blocks_get_theme_defaults_data')) {
	/**
	 * Build theme defaults for both editor and frontend.
	 */
	function boostify_blocks_get_theme_defaults_data() {
		$woostify = function_exists( 'woostify_options' )
			? woostify_options( false )
			: ( get_option( 'woostify_setting' ) ?: array() );

		$woostify_pro = ( class_exists( 'Woostify_Pro' ) && method_exists( 'Woostify_Pro', 'get_instance' ) )
			? Woostify_Pro::get_instance()->woostify_pro_options()
			: ( get_option( 'woostify_pro_options' ) ?: array() );

		$non_empty = function ( $val, $default ) {
			return ( null !== $val && '' !== $val ) ? $val : $default;
		};

		// Check if Woostify Pro is active.
		$active_plugins      = (array) get_option( 'active_plugins', array() );
		$woostify_pro_active = defined( 'WOOSTIFY_PRO_VERSION' )
			|| in_array( 'woostify-pro/woostify-pro.php', $active_plugins, true )
			|| in_array( 'woostify-pro-dev/woostify-pro.php', $active_plugins, true );

		$catalog_mode = ! empty( $woostify['catalog_mode'] );

		$add_to_cart_position = $non_empty( $woostify['shop_page_add_to_cart_button_position'] ?? null, 'bottom' );
		if ( 'image' === $add_to_cart_position ) {
			$add_to_cart_position = 'inside image';
		}
		if ( 'bottom-visible' === $add_to_cart_position ) {
			$add_to_cart_position = 'bottom visible';
		}
		if ( $catalog_mode ) {
			$add_to_cart_position = 'none';
		}

		// Global theme & button fallback options.
		$btn_text_color       = $non_empty( $woostify['button_text_color'] ?? '', '#ffffff' );
		$btn_bg_color         = $non_empty( $woostify['button_background_color'] ?? '', '#1346af' );
		$btn_hover_text_color = $non_empty( $woostify['button_hover_text_color'] ?? '', '#ffffff' );
		$btn_hover_bg_color   = $non_empty( $woostify['button_hover_background_color'] ?? '', '#3a3a3a' );
		$btn_radius           = (int) $non_empty( $woostify['buttons_border_radius'] ?? '', 50 );
		$theme_color          = $non_empty( $woostify['theme_color'] ?? '', '#1346af' );
		$accent_color         = $non_empty( $woostify['accent_color'] ?? '', '#2b2b2b' );
		$link_hover_color     = $non_empty( $woostify['link_hover_color'] ?? '', $theme_color );
		$text_color           = $non_empty( $woostify['text_color'] ?? '', '#474747' );

		// Shop archive specific button overrides (empty string when uncustomized in Woostify).
		$custom_cart_color  = $non_empty( $woostify['shop_page_button_cart_color'] ?? '', '' );
		$custom_cart_bg     = $non_empty( $woostify['shop_page_button_cart_background'] ?? '', '' );
		$custom_hover_color = $non_empty( $woostify['shop_page_button_color_hover'] ?? '', '' );
		$custom_hover_bg    = $non_empty( $woostify['shop_page_button_background_hover'] ?? '', '' );
		$custom_radius      = $non_empty( $woostify['shop_page_button_border_radius'] ?? '', '' );

		$atc_by_position = array(
			'bottom'         => array(
				'text_color'       => '' !== $custom_cart_color ? $custom_cart_color : $accent_color,
				'bg_color'         => '' !== $custom_cart_bg ? $custom_cart_bg : '#ffffff',
				'hover_text_color' => '' !== $custom_hover_color ? $custom_hover_color : $link_hover_color,
				'hover_bg_color'   => '' !== $custom_hover_bg ? $custom_hover_bg : '#ffffff',
				'border_radius'    => '' !== $custom_radius ? (int) $custom_radius : 0,
			),
			'bottom visible' => array(
				'text_color'       => '' !== $custom_cart_color ? $custom_cart_color : $btn_text_color,
				'bg_color'         => '' !== $custom_cart_bg ? $custom_cart_bg : $btn_bg_color,
				'hover_text_color' => '' !== $custom_hover_color ? $custom_hover_color : $btn_hover_text_color,
				'hover_bg_color'   => '' !== $custom_hover_bg ? $custom_hover_bg : $btn_hover_bg_color,
				'border_radius'    => '' !== $custom_radius ? (int) $custom_radius : $btn_radius,
			),
			'inside image'   => array(
				'text_color'       => '' !== $custom_cart_color ? $custom_cart_color : $btn_text_color,
				'bg_color'         => '' !== $custom_cart_bg ? $custom_cart_bg : $btn_bg_color,
				'hover_text_color' => '' !== $custom_hover_color ? $custom_hover_color : $btn_hover_text_color,
				'hover_bg_color'   => '' !== $custom_hover_bg ? $custom_hover_bg : $btn_hover_bg_color,
				'border_radius'    => '' !== $custom_radius ? (int) $custom_radius : $btn_radius,
			),
			'icon'           => array(
				'text_color'       => '' !== $custom_cart_color ? $custom_cart_color : $accent_color,
				'bg_color'         => '' !== $custom_cart_bg ? $custom_cart_bg : '#ffffff',
				'hover_text_color' => '' !== $custom_hover_color ? $custom_hover_color : '#ffffff',
				'hover_bg_color'   => '' !== $custom_hover_bg ? $custom_hover_bg : ( '' !== $btn_hover_bg_color ? $btn_hover_bg_color : '#e33333' ),
				'border_radius'    => '' !== $custom_radius ? (int) $custom_radius : 0,
			),
		);
		$atc_by_position['bottom-visible'] = $atc_by_position['bottom visible'];
		$atc_by_position['image']          = $atc_by_position['inside image'];

		$normalized_pos_key = ( 'bottom-visible' === $add_to_cart_position ) ? 'bottom visible' : $add_to_cart_position;
		$active_atc_styles  = $atc_by_position[ $normalized_pos_key ] ?? $atc_by_position['bottom visible'];

		// Wishlist defaults (Woostify supports multiple plugins).
		$wishlist_plugin_active  = defined( 'TINVWL_FVERSION' ) || class_exists( 'TInvWL_Public_Add_To_Wishlist' ) || class_exists( 'TInvWL_Plugin' );
		$wishlist_support_plugin = $woostify['shop_page_wishlist_support_plugin'] ?? null;
		if ( ! $wishlist_support_plugin ) {
			if ( $wishlist_plugin_active ) {
				$wishlist_support_plugin = 'ti';
			} elseif ( defined( 'YITH_WCWL' ) || class_exists( 'YITH_WCWL' ) ) {
				$wishlist_support_plugin = 'yith';
			} else {
				$wishlist_support_plugin = 'ti';
			}
		}

		// Quick view defaults (Woostify Pro).
		$quick_view_enabled  = $woostify_pro_active && ( 'activated' === get_option( 'woostify_wc_quick_view' ) || defined( 'WOOSTIFY_PRO_QUICK_VIEW' ) || class_exists( 'Woostify_Quick_View' ) );
		$quick_view_position = $non_empty( $woostify_pro['shop_page_quick_view_position'] ?? null, 'top-right' );
		$quick_view_radius   = ( null !== ( $woostify_pro['shop_product_quick_view_radius'] ?? null ) && '' !== (string) ( $woostify_pro['shop_product_quick_view_radius'] ?? '' ) )
			? (int) $woostify_pro['shop_product_quick_view_radius']
			: '';
		$qv_raw_icon         = $woostify_pro['shop_product_quick_view_icon'] ?? true;
		$qv_show_icon        = ! ( false === $qv_raw_icon || 0 === $qv_raw_icon || '0' === (string) $qv_raw_icon || 'false' === (string) $qv_raw_icon || '' === $qv_raw_icon );

		// Countdown Urgency settings (Woostify Pro).
		$countdown_urgency_active = $woostify_pro_active && ( class_exists( 'Woostify_Countdown_Urgency' ) || defined( 'WOOSTIFY_PRO_COUNTDOWN_URGENCY' ) );

		// Product Label defaults (Woostify Pro).
		$product_label_active = $woostify_pro_active && ( 'activated' === get_option( 'woostify_product_label' ) || defined( 'WOOSTIFY_PRO_PRODUCT_LABEL' ) || class_exists( 'Woostify_Product_Label' ) );
		$product_label_style  = $product_label_active ? $non_empty( get_option( 'woostify_product_label_style', 'round' ), 'round' ) : 'rectangular';
		$sale_bg_default      = $product_label_active
			? $non_empty( get_option( 'woostify_product_label_background', '#1346af' ), '#1346af' )
			: $non_empty( $woostify['shop_page_sale_bg_color'] ?? null, '#1346af' );
		$sale_color_default   = $product_label_active
			? $non_empty( get_option( 'woostify_product_label_text_color', '#ffffff' ), '#ffffff' )
			: $non_empty( $woostify['shop_page_sale_color'] ?? null, '#ffffff' );
		$sale_percent_default = $product_label_active
			? ( '1' === (string) get_option( 'woostify_product_label_sale_percentage', '' ) )
			: ( isset( $woostify['shop_page_sale_percent'] ) ? (bool) $woostify['shop_page_sale_percent'] : true );
		$sale_border_radius   = (int) $non_empty( $woostify['shop_page_sale_border_radius'] ?? null, 0 );
		$sale_is_square       = ! $product_label_active && ! empty( $woostify['shop_page_sale_square'] );
		$sale_size            = (int) $non_empty( $woostify['shop_page_sale_size'] ?? null, 40 );
		$sale_text            = $non_empty( $woostify['shop_page_sale_text'] ?? null, 'Sale!' );

		$out_bg_default       = $product_label_active
			? $non_empty( get_option( 'woostify_product_label_out_of_stock_background', '#1346af' ), '#1346af' )
			: $non_empty( $woostify['shop_page_out_of_stock_bg_color'] ?? null, '#818486' );
		$out_color_default    = $product_label_active
			? $non_empty( get_option( 'woostify_product_label_out_of_stock_text_color', '#ffffff' ), '#ffffff' )
			: $non_empty( $woostify['shop_page_out_of_stock_color'] ?? null, '#ffffff' );
		$out_border_radius    = (int) $non_empty( $woostify['shop_page_out_of_stock_border_radius'] ?? null, 0 );
		$out_is_square        = ! $product_label_active && ! empty( $woostify['shop_page_out_of_stock_square'] );
		$out_size             = (int) $non_empty( $woostify['shop_page_out_of_stock_size'] ?? null, 40 );
		$out_text             = $non_empty( $woostify['shop_page_out_of_stock_text'] ?? null, 'Out Of Stock' );

		return array(
			'catalog_mode'                 => $catalog_mode,
			'countdown_urgency'            => array(
				'active'               => $countdown_urgency_active,
				'style'                => $non_empty( get_option( 'woostify_countdown_urgency_style', 'default' ), 'default' ),
				'apply_for'            => $non_empty( get_option( 'woostify_countdown_urgency_apply_for', 'all' ), 'all' ),
				'categories_selected'  => get_option( 'woostify_countdown_urgency_categories_selected', false ),
				'products_selected'    => get_option( 'woostify_countdown_urgency_products_selected', false ),
				'categories_exclude'   => get_option( 'woostify_countdown_urgency_categories_exclude', false ),
				'products_exclude'     => get_option( 'woostify_countdown_urgency_products_exclude', false ),
				'time_duration'        => $non_empty( get_option( 'woostify_countdown_urgency_time_duration', '1' ), '1' ),
				'time_type'            => $non_empty( get_option( 'woostify_countdown_urgency_time_type', 'days' ), 'days' ),
				'message'              => $non_empty( get_option( 'woostify_countdown_urgency_message', 'Hurry up! Flash Sale Ends Soon!' ), 'Hurry up! Flash Sale Ends Soon!' ),
				'days_label'           => $non_empty( get_option( 'woostify_countdown_urgency_days_label', 'DAYS' ), 'DAYS' ),
				'hours_label'          => $non_empty( get_option( 'woostify_countdown_urgency_hours_label', 'HOURS' ), 'HOURS' ),
				'minutes_label'        => $non_empty( get_option( 'woostify_countdown_urgency_minutes_label', 'MINS' ), 'MINS' ),
				'seconds_label'        => $non_empty( get_option( 'woostify_countdown_urgency_seconds_label', 'SECS' ), 'SECS' ),
				'display_on_thumbnail' => (string) $non_empty( get_option( 'woostify_countdown_urgency_display_on_thumbnail', '0' ), '0' ),
				'hide_after_time_up'   => (string) $non_empty( get_option( 'woostify_countdown_urgency_hide_after_time_up', '1' ), '1' ),
			),
			'product_per_row'              => array(
				'desktop' => (int) $non_empty( $woostify['products_per_row'] ?? null, 3 ),
				'tablet'  => (int) $non_empty( $woostify['tablet_products_per_row'] ?? null, 2 ),
				'mobile'  => (int) $non_empty( $woostify['mobile_products_per_row'] ?? null, 1 ),
			),
			'product_per_page'             => (int) $non_empty( $woostify['products_per_page'] ?? null, 12 ),
			'shop_archive_border'          => array(
				'style' => $non_empty( $woostify['shop_page_product_card_border_style'] ?? null, 'none' ),
				'width' => (int) $non_empty( $woostify['shop_page_product_card_border_width'] ?? null, 1 ),
				'color' => $non_empty( $woostify['shop_page_product_card_border_color'] ?? null, '#cccccc' ),
			),
			'shop_archive_product_content' => array(
				'title_flag'    => isset( $woostify['shop_page_product_title'] ) ? (bool) $woostify['shop_page_product_title'] : true,
				'category_flag' => isset( $woostify['shop_page_product_category'] ) ? ( $woostify['shop_page_product_category'] ? '1' : '0' ) : '0',
				'rating_flag'   => isset( $woostify['shop_page_product_rating'] ) ? ( $woostify['shop_page_product_rating'] ? '1' : '0' ) : '1',
				'price_flag'    => isset( $woostify['shop_page_product_price'] ) ? ( $woostify['shop_page_product_price'] ? '1' : '0' ) : '1',
				'quantity_flag' => $catalog_mode ? '0' : ( isset( $woostify['shop_page_product_quantity'] ) ? ( $woostify['shop_page_product_quantity'] ? '1' : '0' ) : '0' ),
				'equal_flag'    => isset( $woostify['shop_page_product_content_equal'] ) ? ( $woostify['shop_page_product_content_equal'] ? '1' : '0' ) : '0',
				'align'         => $non_empty( $woostify['shop_page_product_alignment'] ?? null, 'center' ),
				'min_height'    => (int) $non_empty( $woostify['shop_page_product_content_min_height'] ?? null, 160 ),
			),
			'shop_archive_product_image'   => array(
				'style'             => $non_empty( $woostify['shop_page_product_image_border_style'] ?? null, 'none' ),
				'width'             => (int) $non_empty( $woostify['shop_page_product_image_border_width'] ?? null, 1 ),
				'color'             => $non_empty( $woostify['shop_page_product_image_border_color'] ?? null, '#cccccc' ),
				'hover'             => $non_empty( $woostify['shop_page_product_image_hover'] ?? null, 'swap' ),
				'equal_height_flag' => ! empty( $woostify['shop_page_product_image_equal_height'] ),
				'image_height'      => (int) $non_empty( $woostify['shop_page_product_image_height'] ?? null, 300 ),
			),
			'shop_archive_sale_tag'        => array(
				'bg_color'      => $sale_bg_default,
				'text_color'    => $sale_color_default,
				'position'      => $non_empty( $woostify['shop_page_sale_tag_position'] ?? null, 'left' ),
				'shape'         => $product_label_style,
				'sale_percent'  => $sale_percent_default,
				'text'          => $sale_text,
				'border_radius' => $sale_border_radius,
				'is_square'     => $sale_is_square,
				'size'          => $sale_size,
			),
			'shop_archive_out_of_stock'    => array(
				'bg_color'      => $out_bg_default,
				'text_color'    => $out_color_default,
				'position'      => $non_empty( $woostify['shop_page_out_of_stock_position'] ?? null, 'left' ),
				'shape'         => $product_label_style,
				'text'          => $out_text,
				'border_radius' => $out_border_radius,
				'is_square'     => $out_is_square,
				'size'          => $out_size,
			),
			'shop_archive_general_design'  => array(
				'title_color'     => $non_empty( $woostify['shop_page_product_title_color'] ?? null, '#2b2b2b' ),
				'title_font_size' => array(
					'desktop' => (int) $non_empty( $woostify['shop_page_product_title_font_size'] ?? null, 14 ),
					'tablet'  => (int) $non_empty( $woostify['shop_page_product_title_tablet_font_size'] ?? null, 14 ),
					'mobile'  => (int) $non_empty( $woostify['shop_page_product_title_mobile_font_size'] ?? null, 14 ),
				),
				'price_color'     => $non_empty( $woostify['shop_page_product_price_color'] ?? null, '#2b2b2b' ),
				'price_font_size' => array(
					'desktop' => (int) $non_empty( $woostify['shop_page_product_price_font_size'] ?? null, 14 ),
					'tablet'  => (int) $non_empty( $woostify['shop_page_product_price_tablet_font_size'] ?? null, 14 ),
					'mobile'  => (int) $non_empty( $woostify['shop_page_product_price_mobile_font_size'] ?? null, 14 ),
				),
			),
			'shop_archive_add_to_cart_btn' => array(
				'text_color'       => $active_atc_styles['text_color'],
				'bg_color'         => $active_atc_styles['bg_color'],
				'hover_text_color' => $active_atc_styles['hover_text_color'],
				'hover_bg_color'   => $active_atc_styles['hover_bg_color'],
				'border_radius'    => $active_atc_styles['border_radius'],
				'position'         => $add_to_cart_position,
				'show_icon'        => isset( $woostify['shop_product_add_to_cart_icon'] ) ? (bool) $woostify['shop_product_add_to_cart_icon'] : true,
				'by_position'      => $atc_by_position,
			),
			'shop_archive_wishlist_btn'    => array(
				'position'               => $non_empty( $woostify['shop_page_wishlist_position'] ?? null, 'top-right' ),
				'style'                  => $wishlist_support_plugin,
				'wishlist_plugin_active' => $wishlist_plugin_active,
				'color'                  => $non_empty( $woostify['text_color'] ?? null, '#2b2b2b' ),
				'bg_color'               => '#ffffff',
				'hover_color'            => '#ffffff',
				'hover_bg_color'         => $non_empty( $woostify['button_hover_background_color'] ?? null, '#e33333' ),
			),
			'shop_quick_view_btn'          => array(
				'enabled'             => $quick_view_enabled,
				'position'            => $quick_view_position,
				'show_icon'           => (bool) $qv_show_icon,
				'bg_color'            => $non_empty( $woostify_pro['shop_product_quick_view_background'] ?? null, '' ),
				'text_color'          => $non_empty( $woostify_pro['shop_product_quick_view_color'] ?? null, '' ),
				'hover_bg_color'      => $non_empty( $woostify_pro['shop_product_quick_view_bg_hover'] ?? null, '' ),
				'hover_text_color'    => $non_empty( $woostify_pro['shop_product_quick_view_c_hover'] ?? null, '' ),
				'border_radius'       => $quick_view_radius,
				'woostify_pro_active' => (bool) $woostify_pro_active,
			),
		);
	}
}

if ( ! function_exists( 'boostify_blocks_get_badge_shape_css_rules' ) ) {
	/**
	 * Get CSS property-value pairs for product badge shapes.
	 *
	 * @param string $shape      Badge shape name.
	 * @param array  $badge_opts Optional badge settings (border_radius, is_square, size).
	 * @return array<string, string>
	 */
	function boostify_blocks_get_badge_shape_css_rules( $shape, $badge_opts = array() ) {
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
				$radius = isset( $badge_opts['border_radius'] ) && '' !== (string) $badge_opts['border_radius']
					? intval( $badge_opts['border_radius'] ) . 'px'
					: '0px';
				$rules  = array(
					'border-radius' => $radius,
					'padding'       => '2px 8px',
				);
				if ( ! empty( $badge_opts['is_square'] ) ) {
					$size             = max( 20, intval( $badge_opts['size'] ?? 40 ) ) . 'px';
					$rules['width']   = $size;
					$rules['height']  = $size;
					$rules['padding'] = '0';
				}
				return $rules;
		}
	}
}

add_action( 'enqueue_block_editor_assets', function () {
	$data = boostify_blocks_get_theme_defaults_data();
	wp_add_inline_script( 'wp-blocks', 'window.BOOSTIFY_BLOCKS_THEME_DEFAULTS=' . wp_json_encode( $data ) . ';', 'before' );

	$editor_css = '
		.editor-styles-wrapper .wcb-products__product-salebadge .wcb-products__product-onsale,
		.wcb-products__product-salebadge .wcb-products__product-onsale {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			line-height: 1.2;
			white-space: nowrap;
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
			display: inline-flex;
			align-items: center;
			justify-content: center;
			line-height: 1.2;
			white-space: nowrap;
		}
	';

	wp_register_style( 'boostify-blocks-editor-badge-sync', false );
	wp_enqueue_style( 'boostify-blocks-editor-badge-sync' );
	wp_add_inline_style( 'boostify-blocks-editor-badge-sync', $editor_css );

	wp_enqueue_script(
		'boostify-blocks-countdown-urgency-editor',
		plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/js/wcb-countdown-urgency.js',
		array(),
		BOOSTIFY_BLOCKS_VERSION,
		true
	);
}, 20 );
