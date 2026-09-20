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

$selectors   = array();
$t_selectors = array();
$m_selectors = array();

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

// 1. Base Item flex
$selectors[ $item_sel ]['display']        = 'flex';
$selectors[ $item_sel ]['flex-direction'] = 'column';

$selectors[ $item_inner_sel ]['display']        = 'flex';
$selectors[ $item_inner_sel ]['flex-direction'] = 'column';
$selectors[ $item_inner_sel ]['align-items']    = 'center';
$selectors[ $item_inner_sel ]['text-align']     = 'center';
$selectors[ $item_inner_sel ]['width']          = '100%';

// 2. Name
if ( ! empty( $sn['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $sn['typography'], $name_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $sn['typography'], $name_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $sn['typography'], $name_sel, 'mobile' ) );
}
if ( ! empty( $sn['textColor'] ) ) {
	$selectors[ $name_sel ]['color'] = $sn['textColor'] . ' !important';
}
if ( ! empty( $sn['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sn['marginBottom'], 'margin-bottom', $name_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sn['marginBottom'], 'margin-bottom', $name_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sn['marginBottom'], 'margin-bottom', $name_sel, 'mobile' ) );
}

// 3. Content
if ( ! empty( $sc['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $sc['typography'], $content_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $sc['typography'], $content_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $sc['typography'], $content_sel, 'mobile' ) );
}
if ( ! empty( $sc['textColor'] ) ) {
	$selectors[ $content_sel ]['color'] = $sc['textColor'] . ' !important';
}
if ( ! empty( $sc['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sc['marginBottom'], 'margin-bottom', $content_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sc['marginBottom'], 'margin-bottom', $content_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sc['marginBottom'], 'margin-bottom', $content_sel, 'mobile' ) );
}
if ( ! empty( $sc['textAlignment'] ) ) {
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
	if ( is_array( $sc['textAlignment'] ) ) {
		$d_align = $get_align_val( $sc['textAlignment']['Desktop'] ?? '' );
		$t_align = $get_align_val( $sc['textAlignment']['Tablet'] ?? '' );
		$m_align = $get_align_val( $sc['textAlignment']['Mobile'] ?? '' );

		$d_flex = $get_flex_align( $sc['textAlignment']['Desktop'] ?? '' );
		$t_flex = $get_flex_align( $sc['textAlignment']['Tablet'] ?? '' );
		$m_flex = $get_flex_align( $sc['textAlignment']['Mobile'] ?? '' );

		if ( $d_align ) {
			$selectors[ $content_sel ]['text-align']    = $d_align;
			$selectors[ $name_sel ]['text-align']       = $d_align;
			$selectors[ $item_inner_sel ]['text-align'] = $d_align;
			$selectors[ $item_inner_sel ]['align-items'] = $d_flex;
		}
		if ( $t_align ) {
			$t_selectors[ $content_sel ]['text-align']    = $t_align;
			$t_selectors[ $name_sel ]['text-align']       = $t_align;
			$t_selectors[ $item_inner_sel ]['text-align'] = $t_align;
			$t_selectors[ $item_inner_sel ]['align-items'] = $t_flex;
		}
		if ( $m_align ) {
			$m_selectors[ $content_sel ]['text-align']    = $m_align;
			$m_selectors[ $name_sel ]['text-align']       = $m_align;
			$m_selectors[ $item_inner_sel ]['text-align'] = $m_align;
			$m_selectors[ $item_inner_sel ]['align-items'] = $m_flex;
		}
	}
}

// 4. Call To Action Button
$selectors[ $btn_inner_sel ]['display']         = 'inline-flex';
$selectors[ $btn_inner_sel ]['align-items']     = 'center';
$selectors[ $btn_inner_sel ]['justify-content'] = 'center';
$selectors[ $btn_inner_sel ]['width']           = 'fit-content';
$selectors[ $btn_inner_sel ]['max-width']       = '100%';
$selectors[ $btn_inner_sel ]['box-sizing']      = 'border-box';
$selectors[ $btn_inner_sel ]['cursor']          = 'pointer';

if ( ! empty( $sb['typographyText'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $sb['typographyText'], $btn_text_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $sb['typographyText'], $btn_text_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $sb['typographyText'], $btn_text_sel, 'mobile' ) );
}
if ( ! empty( $sb['colorText'] ) ) {
	$selectors[ $btn_text_sel ]['color'] = $sb['colorText'];
}
if ( ! empty( $sb['hoverColorText'] ) ) {
	$selectors[ $btn_inner_sel . ':hover .wcb-slider-child__btn-text' ]['color'] = $sb['hoverColorText'];
	$selectors[ $btn_text_sel . ':hover' ]['color']                              = $sb['hoverColorText'];
}
if ( ! empty( $sb['normalBackground'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_background_css( $sb['normalBackground'], $btn_inner_sel ) );
}
if ( ! empty( $sb['hoverBackground'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_background_css( $sb['hoverBackground'], $btn_inner_sel . ':hover' ) );
}
if ( ! empty( $sb['mainSettings'] ) || ! empty( $sb['border'] ) ) {
	$border_data = ! empty( $sb['border'] ) ? $sb['border'] : array(
		'mainSettings' => $sb['mainSettings'] ?? array(),
		'radius'       => $sb['radius'] ?? array(),
		'hoverColor'   => $sb['hoverColor'] ?? '',
	);
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $border_data, $btn_inner_sel, true ) );
}
if ( ! empty( $sb['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sb['padding'], 'padding', $btn_inner_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sb['padding'], 'padding', $btn_inner_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sb['padding'], 'padding', $btn_inner_sel, 'mobile' ) );
}
if ( ! empty( $sb['margin'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sb['margin'], 'margin', $btn_inner_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sb['margin'], 'margin', $btn_inner_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sb['margin'], 'margin', $btn_inner_sel, 'mobile' ) );
}

// 4.1 Button preset icon spacing
$sb_preset = $attr['style_buttonPreset'] ?? array();
if ( ! empty( $sb_preset['iconSpacing'] ) ) {
	$btn_spacing_sel = $wrap_sel . ' .wcb-slider-child__btn_spacing';
	$spacing_prop    = ( ( $sb_preset['iconPosition'] ?? 'afterTitle' ) === 'afterTitle' ) ? 'margin-right' : 'margin-left';
	$selectors       = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sb_preset['iconSpacing'], $spacing_prop, $btn_spacing_sel, 'desktop' ) );
	$t_selectors     = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sb_preset['iconSpacing'], $spacing_prop, $btn_spacing_sel, 'tablet' ) );
	$m_selectors     = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sb_preset['iconSpacing'], $spacing_prop, $btn_spacing_sel, 'mobile' ) );
}

// 4.2 Layout Preset
$layout_preset = $attr['style_layoutPreset'] ?? array();
$preset_name   = $layout_preset['preset'] ?? '';
$icon_pos      = $si['iconPosition'] ?? '';
if ( in_array( $preset_name, array( 'wcb-layout-2', 'wcb-layout-3', 'wcb-layout-5' ), true ) || 'left' === $icon_pos ) {
	$selectors[ $item_inner_sel ]['align-items'] = 'flex-start';
	$selectors[ $item_inner_sel ]['text-align']  = 'start';
} elseif ( 'right' === $icon_pos ) {
	$selectors[ $item_inner_sel ]['align-items'] = 'flex-end';
	$selectors[ $item_inner_sel ]['text-align']  = 'end';
}

// 5. Icon / Image
if ( ! empty( $si['enableIcon'] ) ) {
	if ( ! empty( $si['iconDimensions']['margin'] ) ) {
		$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $si['iconDimensions']['margin'], 'margin', $icon_wrap_sel, 'desktop' ) );
		$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $si['iconDimensions']['margin'], 'margin', $icon_wrap_sel, 'tablet' ) );
		$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $si['iconDimensions']['margin'], 'margin', $icon_wrap_sel, 'mobile' ) );
	}
	if ( ! empty( $si['iconDimensions']['padding'] ) ) {
		$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $si['iconDimensions']['padding'], 'padding', $icon_wrap_sel, 'desktop' ) );
		$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $si['iconDimensions']['padding'], 'padding', $icon_wrap_sel, 'tablet' ) );
		$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $si['iconDimensions']['padding'], 'padding', $icon_wrap_sel, 'mobile' ) );
	}
	if ( ! empty( $si['iconBorder'] ) ) {
		$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $si['iconBorder'], $icon_wrap_sel, true ) );
	}
	if ( ! empty( $si['iconSize'] ) ) {
		$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $si['iconSize'], 'font-size', $icon_sel, 'desktop' ) );
		$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $si['iconSize'], 'width', $icon_sel, 'desktop' ) );
		$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $si['iconSize'], 'font-size', $icon_sel, 'tablet' ) );
		$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $si['iconSize'], 'width', $icon_sel, 'tablet' ) );
		$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $si['iconSize'], 'font-size', $icon_sel, 'mobile' ) );
		$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $si['iconSize'], 'width', $icon_sel, 'mobile' ) );
	}
	if ( ! empty( $si['iconColor'] ) ) {
		$selectors[ $icon_sel ]['color']                   = $si['iconColor'];
		$selectors[ $icon_sel . ' .wcb-icon-full' ]['color'] = $si['iconColor'];
	}
	if ( ! empty( $si['iconHoverColor'] ) ) {
		$selectors[ $icon_sel . ':hover' ]['color']                   = $si['iconHoverColor'];
		$selectors[ $icon_sel . ' .wcb-icon-full:hover' ]['color']   = $si['iconHoverColor'];
	}
}

// Image styles
if ( ! empty( $si['isShowImage'] ) && ! empty( $si['image']['mediaId'] ) ) {
	$pos = $si['imagePosition'] ?? '';
	if ( 'above-title' === $pos || 'blow-title' === $pos || 'bottom' === $pos ) {
		$selectors[ $wrap_sel . ' .wcb-slider-child__content-image' ]['display']        = 'flex';
		$selectors[ $wrap_sel . ' .wcb-slider-child__content-image' ]['flex-direction'] = 'column';
		$selectors[ $wrap_sel . ' .wcb-slider-child__content-image' ]['align-items']    = 'center';

		if ( ! empty( $si['imageAlignSelf'] ) ) {
			$selectors[ $image_sel ]['align-self'] = $si['imageAlignSelf'];
		}
		$selectors[ $image_sel ]['width']      = ( ( $si['imageSize'] ?? '' ) === 'thumbnail' ) ? '100px' : '100%';
		$selectors[ $image_sel ]['height']     = ( ( $si['imageSize'] ?? '' ) === 'thumbnail' ) ? '100px' : '100%';
		$selectors[ $image_sel ]['object-fit'] = 'cover';
		$selectors[ $image_sel ]['margin']     = 'auto';
	} elseif ( 'left' === $pos || 'right' === $pos ) {
		$selectors[ $wrap_sel . ' .wcb-slider-child__item-wrap-inner' ]['display']        = 'flex';
		$selectors[ $wrap_sel . ' .wcb-slider-child__item-wrap-inner' ]['flex-direction'] = 'row';
		$selectors[ $wrap_sel . ' .wcb-slider-child__item-wrap-inner' ]['gap']            = '10px';

		$selectors[ $image_sel ]['display']    = 'block';
		$selectors[ $image_sel ]['width']      = ( ( $si['imageSize'] ?? '' ) === 'thumbnail' ) ? '100px' : '100%';
		$selectors[ $image_sel ]['height']     = ( ( $si['imageSize'] ?? '' ) === 'thumbnail' ) ? '100px' : '100%';
		$selectors[ $image_sel ]['object-fit'] = 'cover';
	}
}

// 6. Background and Border
if ( ! empty( $sab['background'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_background_css( $sab['background'], $item_sel ) );
}
if ( ! empty( $sab['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sab['border'], $item_sel, true ) );
}

// 7. Dimensions
if ( ! empty( $sdm['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sdm['padding'], 'padding', $item_inner_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sdm['padding'], 'padding', $item_inner_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sdm['padding'], 'padding', $item_inner_sel, 'mobile' ) );
}
if ( ! empty( $sdm['margin'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sdm['margin'], 'margin', $item_inner_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sdm['margin'], 'margin', $item_inner_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sdm['margin'], 'margin', $item_inner_sel, 'mobile' ) );
}

// 8. Advance
$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

