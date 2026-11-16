<?php
/**
 * Frontend CSS for Slider Swiper Child Block.
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

$sn  = $attr['style_name'] ?? array();
$sc  = $attr['style_content'] ?? array();
$sb  = $attr['style_callToActionButton'] ?? array();
$si  = $attr['style_image'] ?? array();
$sab = $attr['style_backgroundAndBorder'] ?? array();
$sdm = $attr['style_dimension'] ?? array();

$unique_css_class = ! empty( $attr['clientID'] ) ? WCB_Block_Helper::convert_client_id_to_unique_class( $attr['clientID'] ) : $unique_id;

$wrap_sel       = ! empty( $unique_css_class ) ? '.wcb-slider-child__wrap.' . $unique_css_class : ( ! empty( $unique_id ) ? '.' . $unique_id : '.wcb-slider-child__wrap' );
$item_sel       = $wrap_sel . ' .wcb-slider-child__item';
$item_inner_sel = $wrap_sel . ' .wcb-slider-child__item-inner';
$name_sel       = $wrap_sel . ' .wcb-slider-child__name';
$content_sel    = $wrap_sel . ' .wcb-slider-child__content';
$btn_inner_sel  = $wrap_sel . ' .wcb-slider-child__btn-inner';
$btn_text_sel   = $wrap_sel . ' .wcb-slider-child__btn-text';
$icon_wrap_sel  = $wrap_sel . ' .wcb-top__icon-wrap';
$icon_sel       = $wrap_sel . ' .wcb-top__icon';
$image_sel      = $wrap_sel . ' .wcb-slider-child__image';

// 2. Name.
if ( ! empty( $sn['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $name_sel, $sn['typography'] );
}
if ( ! empty( $sn['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $name_sel, 'color', $sn['textColor'] . ' !important' );
}
if ( ! empty( $sn['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $name_sel, 'margin-bottom', $sn['marginBottom'] );
}

// 2.1 Layout Preset (runs before explicit textAlignment so manual textAlignment overrides preset).
$layout_preset = $attr['style_layoutPreset'] ?? array();
$preset_name   = $layout_preset['preset'] ?? '';
$icon_pos      = $si['iconPosition'] ?? '';
if ( in_array( $preset_name, array( 'wcb-layout-2', 'wcb-layout-3', 'wcb-layout-5' ), true ) || 'left' === $icon_pos ) {
	$css['desktop'][ $item_inner_sel ]['align-items'] = 'flex-start';
	$css['desktop'][ $item_inner_sel ]['text-align']  = 'start';
} elseif ( 'right' === $icon_pos ) {
	$css['desktop'][ $item_inner_sel ]['align-items'] = 'flex-end';
	$css['desktop'][ $item_inner_sel ]['text-align']  = 'end';
}

// 3. Content.
if ( ! empty( $sc['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $content_sel, $sc['typography'] );
}
if ( ! empty( $sc['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $content_sel, 'color', $sc['textColor'] . ' !important' );
}
if ( ! empty( $sc['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $content_sel, 'margin-bottom', $sc['marginBottom'] );
}
if ( ! empty( $sc['textAlignment'] ) && is_array( $sc['textAlignment'] ) ) {
	$get_align_val = function( $align ) {
		if ( 'left' === $align ) {
			return 'start';
		}
		if ( 'right' === $align ) {
			return 'end';
		}
		if ( 'center' === $align ) {
			return 'center';
		}
		return '';
	};
	$get_flex_align = function( $align ) {
		if ( 'left' === $align ) {
			return 'flex-start';
		}
		if ( 'right' === $align ) {
			return 'flex-end';
		}
		if ( 'center' === $align ) {
			return 'center';
		}
		return '';
	};

	$d_raw = $sc['textAlignment']['Desktop'] ?? '';
	$t_raw = ! empty( $sc['textAlignment']['Tablet'] ) ? $sc['textAlignment']['Tablet'] : $d_raw;
	$m_raw = ! empty( $sc['textAlignment']['Mobile'] ) ? $sc['textAlignment']['Mobile'] : $t_raw;

	$d_align = $get_align_val( $d_raw );
	$t_align = $get_align_val( $t_raw );
	$m_align = $get_align_val( $m_raw );

	$d_flex = $get_flex_align( $d_raw );
	$t_flex = $get_flex_align( $t_raw );
	$m_flex = $get_flex_align( $m_raw );

	if ( $d_align ) {
		$css['desktop'][ $content_sel ]['text-align']     = $d_align;
		$css['desktop'][ $name_sel ]['text-align']        = $d_align;
		$css['desktop'][ $item_inner_sel ]['text-align']  = $d_align;
		$css['desktop'][ $item_inner_sel ]['align-items'] = $d_flex;
	}
	if ( $t_align ) {
		$css['tablet'][ $content_sel ]['text-align']     = $t_align;
		$css['tablet'][ $name_sel ]['text-align']        = $t_align;
		$css['tablet'][ $item_inner_sel ]['text-align']  = $t_align;
		$css['tablet'][ $item_inner_sel ]['align-items'] = $t_flex;
	}
	if ( $m_align ) {
		$css['mobile'][ $content_sel ]['text-align']     = $m_align;
		$css['mobile'][ $name_sel ]['text-align']        = $m_align;
		$css['mobile'][ $item_inner_sel ]['text-align']  = $m_align;
		$css['mobile'][ $item_inner_sel ]['align-items'] = $m_flex;
	}
}

// 4. Call To Action Button.
if ( ! empty( $sb['typographyText'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $btn_text_sel, $sb['typographyText'] );
}
if ( ! empty( $sb['colorText'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $btn_text_sel, 'color', $sb['colorText'] );
}
if ( ! empty( $sb['hoverColorText'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $btn_inner_sel . ':hover .wcb-slider-child__btn-text', 'color', $sb['hoverColorText'] );
	WCB_Block_Helper::add_responsive_css( $css, $btn_text_sel . ':hover', 'color', $sb['hoverColorText'] );
}
if ( ! empty( $sb['normalBackground'] ) ) {
	WCB_Block_Helper::add_background_css( $css, $btn_inner_sel, $sb['normalBackground'] );
}
if ( ! empty( $sb['hoverBackground'] ) ) {
	WCB_Block_Helper::add_background_css( $css, $btn_inner_sel . ':hover', $sb['hoverBackground'] );
}
if ( ! empty( $sb['mainSettings'] ) || ! empty( $sb['border'] ) ) {
	$border_data = ! empty( $sb['border'] ) ? $sb['border'] : array(
		'mainSettings' => $sb['mainSettings'] ?? array(),
		'radius'       => $sb['radius'] ?? array(),
		'hoverColor'   => $sb['hoverColor'] ?? '',
	);
	WCB_Block_Helper::add_border_css( $css, $btn_inner_sel, $border_data, true );
}
if ( ! empty( $sb['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $btn_inner_sel, 'padding', $sb['padding'] );
}
if ( ! empty( $sb['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $btn_inner_sel, 'margin', $sb['margin'] );
}

// 4.1 Button preset icon spacing.
$sb_preset = $attr['style_buttonPreset'] ?? array();
if ( ! empty( $sb_preset['iconSpacing'] ) ) {
	$btn_spacing_sel = $wrap_sel . ' .wcb-slider-child__btn_spacing';
	$spacing_prop    = ( ( $sb_preset['iconPosition'] ?? 'afterTitle' ) === 'afterTitle' ) ? 'margin-right' : 'margin-left';
	WCB_Block_Helper::add_responsive_css( $css, $btn_spacing_sel, $spacing_prop, $sb_preset['iconSpacing'] );
}

// 5. Icon / Image.
if ( ! empty( $si['enableIcon'] ) ) {
	if ( ! empty( $si['iconDimensions']['margin'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $icon_wrap_sel, 'margin', $si['iconDimensions']['margin'] );
	}
	if ( ! empty( $si['iconDimensions']['padding'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $icon_wrap_sel, 'padding', $si['iconDimensions']['padding'] );
	}
	if ( ! empty( $si['iconBorder'] ) ) {
		WCB_Block_Helper::add_border_css( $css, $icon_wrap_sel, $si['iconBorder'], true );
	}
	if ( ! empty( $si['iconSize'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $icon_sel, 'font-size', $si['iconSize'] );
		WCB_Block_Helper::add_responsive_css( $css, $icon_sel, 'width', $si['iconSize'] );
	}
	if ( ! empty( $si['iconColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $icon_sel, 'color', $si['iconColor'] );
		WCB_Block_Helper::add_responsive_css( $css, $icon_sel . ' .wcb-icon-full', 'color', $si['iconColor'] );
	}
	if ( ! empty( $si['iconHoverColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $icon_sel . ':hover', 'color', $si['iconHoverColor'] );
		WCB_Block_Helper::add_responsive_css( $css, $icon_sel . ' .wcb-icon-full:hover', 'color', $si['iconHoverColor'] );
	}
}

// Image styles.
if ( ! empty( $si['isShowImage'] ) && ! empty( $si['image']['mediaId'] ) ) {
	$pos = $si['imagePosition'] ?? '';
	if ( 'above-title' === $pos || 'blow-title' === $pos || 'bottom' === $pos ) {
		if ( ! empty( $si['imageAlignSelf'] ) ) {
			WCB_Block_Helper::add_responsive_css( $css, $image_sel, 'align-self', $si['imageAlignSelf'] );
		}
		$css['desktop'][ $image_sel ]['width']  = ( ( $si['imageSize'] ?? '' ) === 'thumbnail' ) ? '100px' : '100%';
		$css['desktop'][ $image_sel ]['height'] = ( ( $si['imageSize'] ?? '' ) === 'thumbnail' ) ? '100px' : '100%';
	} elseif ( 'left' === $pos || 'right' === $pos ) {
		$css['desktop'][ $wrap_sel . ' .wcb-slider-child__item-wrap-inner > div' ]['display']        = 'flex';
		$css['desktop'][ $wrap_sel . ' .wcb-slider-child__item-wrap-inner > div' ]['flex-direction'] = 'row';
		$css['desktop'][ $wrap_sel . ' .wcb-slider-child__item-wrap-inner > div' ]['align-items']    = 'center';
		$css['desktop'][ $wrap_sel . ' .wcb-slider-child__item-wrap-inner > div' ]['gap']            = '10px';
		$css['desktop'][ $wrap_sel . ' .wcb-slider-child__item-wrap-inner > div' ]['width']          = '100%';

		$css['desktop'][ $wrap_sel . ' .wcb-slider-child__content-image' ]['max-width'] = ( ( $si['imageSize'] ?? '' ) === 'thumbnail' ) ? '100px' : '50%';

		$css['desktop'][ $image_sel ]['width']  = ( ( $si['imageSize'] ?? '' ) === 'thumbnail' ) ? '100px' : '100%';
		$css['desktop'][ $image_sel ]['height'] = ( ( $si['imageSize'] ?? '' ) === 'thumbnail' ) ? '100px' : '100%';
	}
}

// 6. Background and Border.
if ( ! empty( $sab['background'] ) ) {
	WCB_Block_Helper::add_background_css( $css, $item_sel, $sab['background'] );
}
if ( ! empty( $sab['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $item_sel, $sab['border'], true );
}

// 7. Dimensions.
if ( ! empty( $sdm['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $item_inner_sel, 'padding', $sdm['padding'] );
}
if ( ! empty( $sdm['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $item_inner_sel, 'margin', $sdm['margin'] );
}

// 8. Advance.
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
