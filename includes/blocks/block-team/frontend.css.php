<?php
/**
 * Frontend CSS for Team Block.
 *
 * Mirrors src/block-team/GlobalCss.tsx so every style rendered by the
 * emotion <Global> component in the editor is also present in the
 * generated per-post CSS files (asset generation).
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

$wrap_sel         = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$image_sel        = $wrap_sel . ' .wcb-team__image';
$content_wrap_sel = $wrap_sel . ' .wcb-team__content-wrap';
$heading_sel      = $wrap_sel . ' .wcb-team__heading';
$designation_sel  = $wrap_sel . ' .wcb-team__designation';
$desc_sel         = $wrap_sel . ' .wcb-team__description';
$social_icon_sel  = $wrap_sel . ' .wcb-icon-full';
$social_link_sel  = $wrap_sel . ' .wcb-team__socials-icons > a';

// =====================================================================
// 1. WRAP (Text alignment + Margin & Padding)
// =====================================================================
$gl = $attr['general_layout'] ?? array();
if ( ! empty( $gl['textAlignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $wrap_sel, 'text-align', $gl['textAlignment'] );
}

$sdm = $attr['style_dimension'] ?? array();
if ( ! empty( $sdm['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $sdm['margin'] );
}
if ( ! empty( $sdm['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'padding', $sdm['padding'] );
}

// Side-by-side layout (imagePosition: left/right)
$gi = $attr['general_image'] ?? array();
$is_image_beside = ( ! empty( $gi['imagePosition'] ) && in_array( $gi['imagePosition'], array( 'left', 'right' ), true ) );
$has_image       = ( ! empty( $gi['isShowImage'] ) && ! empty( $gi['image']['mediaId'] ) );

if ( $has_image && $is_image_beside ) {
	$stack_on = $gi['stackOn'] ?? 'mobile';

	$css['desktop'][ $wrap_sel ]['display'] = 'flex';

	if ( 'tablet' === $stack_on ) {
		$css['tablet'][ $wrap_sel ]['display'] = 'block';
		$css['mobile'][ $wrap_sel ]['display'] = 'block';
	} elseif ( 'mobile' === $stack_on ) {
		$css['tablet'][ $wrap_sel ]['display'] = 'flex';
		$css['mobile'][ $wrap_sel ]['display'] = 'block';
	} elseif ( 'none' === $stack_on ) {
		$css['tablet'][ $wrap_sel ]['display'] = 'flex';
		$css['mobile'][ $wrap_sel ]['display'] = 'flex';
	}
}

// =====================================================================
// 2. IMAGE (.wcb-team__image)
// =====================================================================
if ( $has_image ) {
	$si = $attr['style_image'] ?? array();

	if ( ! empty( $si['border'] ) ) {
		WCB_Block_Helper::add_border_css( $css, $image_sel, $si['border'], true, true );
		if ( ! empty( $si['border']['hoverColor'] ) ) {
			WCB_Block_Helper::add_responsive_css( $css, $image_sel . ':hover', 'border-color', $si['border']['hoverColor'] );
		}
	}

	if ( ! empty( $si['margin'] ) ) {
		WCB_Block_Helper::add_dimension_css( $css, $image_sel, 'margin', $si['margin'] );
	}

	if ( ! empty( $si['imageSize'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $image_sel, 'width', $si['imageSize'] );
	}

	if ( ! empty( $gi['imageAlignSelf'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $image_sel, 'align-self', $gi['imageAlignSelf'] );
		WCB_Block_Helper::add_responsive_css( $css, $content_wrap_sel, 'align-self', $gi['imageAlignSelf'] );
	}
}

// =====================================================================
// 3. TITLE (.wcb-team__heading)
// =====================================================================
$st = $attr['style_title'] ?? array();
if ( ! empty( $st['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $heading_sel, $st['typography'] );
}
if ( ! empty( $st['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $heading_sel, 'margin-bottom', $st['marginBottom'] );
}
if ( ! empty( $st['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $heading_sel, 'color', $st['textColor'] );
}

// =====================================================================
// 4. DESIGNATION (.wcb-team__designation)
// =====================================================================
$sd = $attr['style_desination'] ?? array();
if ( ! empty( $sd['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $designation_sel, $sd['typography'] );
}
if ( ! empty( $sd['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $designation_sel, 'margin-bottom', $sd['marginBottom'] );
}
if ( ! empty( $sd['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $designation_sel, 'color', $sd['textColor'] );
}

// =====================================================================
// 5. DESCRIPTION (.wcb-team__description)
// =====================================================================
$sds = $attr['style_description'] ?? array();
if ( ! empty( $sds['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $desc_sel, $sds['typography'] );
}
if ( ! empty( $sds['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $desc_sel, 'margin-bottom', $sds['marginBottom'] );
}
if ( ! empty( $sds['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $desc_sel, 'color', $sds['textColor'] );
}

// =====================================================================
// 6. SOCIALS (.wcb-icon-full, .wcb-team__socials-icons > a)
// =====================================================================
$gs = $attr['general_socials'] ?? array();
if ( ! empty( $gs['enableSocials'] ) ) {
	$ss = $attr['style_socialIcons'] ?? array();

	if ( ! empty( $ss['iconSize'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $social_icon_sel, 'width', $ss['iconSize'] );
		WCB_Block_Helper::add_responsive_css( $css, $social_icon_sel, 'font-size', $ss['iconSize'] );
	}

	if ( ! empty( $ss['iconSpacing'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $social_link_sel, 'margin-left', $ss['iconSpacing'] );
	}

	if ( ! empty( $ss['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $social_icon_sel, 'color', $ss['color'] );
	}

	if ( ! empty( $ss['hoverColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $social_icon_sel . ':hover', 'color', $ss['hoverColor'] );
	}
}

// =====================================================================
// 7. ADVANCE (responsive condition + motion effect + z-index)
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
