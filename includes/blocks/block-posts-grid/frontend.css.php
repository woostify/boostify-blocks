<?php
/**
 * Frontend CSS for Posts Grid Block.
 *
 * Standardized to use WCB_Block_Helper fluent accumulator methods.
 * Mirrors src/block-posts-grid/GlobalCss.tsx.
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

$g_pag = $attr['general_pagination'] ?? array();
$g_con = $attr['general_postContent'] ?? array();
$g_img = $attr['general_postFeaturedImage'] ?? array();
$g_met = $attr['general_postMeta'] ?? array();
$g_rdm = $attr['general_readmoreLink'] ?? array();
$g_srt = $attr['general_sortingAndFiltering'] ?? array();

$sb  = $attr['style_border'] ?? array();
$sbs = $attr['style_boxShadow'] ?? array();
$se  = $attr['style_excerpt'] ?? array();
$sf  = $attr['style_featuredImage'] ?? array();
$sl  = $attr['style_layout'] ?? array();
$sm  = $attr['style_meta'] ?? array();
$sp  = $attr['style_pagination'] ?? array();
$sr  = $attr['style_readmoreLink'] ?? array();
$st  = $attr['style_title'] ?? array();
$stx = $attr['style_taxonomy'] ?? array();

$wrap_sel      = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$list_sel      = $wrap_sel . ' .wcb-posts-grid__list-posts';
$card_sel      = $wrap_sel . ' .wcbPostCard';
$card_content  = $card_sel . ' .wcbPostCard__content';
$title_sel     = $card_sel . ' .wcbPostCard__title a';
$title_wrap    = $card_sel . ' .wcbPostCard__title';
$excerpt_sel   = $card_sel . ' .wcbPostCard__excerpt';
$tax_sel       = $card_sel . ' .wcbPostCard__taxonomies a';
$tax_wrap      = $card_sel . ' .wcbPostCard__taxonomies';
$tax_high      = $card_sel . ' .wcbPostCard__taxonomies--highlighted a';
$meta_sel      = $card_sel . ' .wcbPostCard__meta';
$author_sel    = $card_sel . ' .wcbPostCard__meta-author-name';
$date_sel      = $card_sel . ' .wcbPostCard__meta-date-and-comments';
$readmore_sel  = $card_sel . ' .wcbPostCard__readmoreLink';
$image_sel     = $card_sel . ' .wcbPostCard__featuredImage';
$image_img_sel = $wrap_sel . ' .wcbPostCard:not(.wcbPostCard--image-background) .wcbPostCard__featuredImage img';
$overlay_sel   = $wrap_sel . ' .wcbPostCard--image-background .wcbPostCard__featuredImage-overlay';
$pag_wrap      = $wrap_sel . ' .wcb-posts-grid__pagination';
$pag_sel       = $pag_wrap . ' .page-numbers';
$pag_active    = $pag_wrap . ' .page-numbers.current';

// Ensure block wrapper is displayed (overrides the display: none anti-FOUC rule in style-index.css).
$css['desktop'][ $wrap_sel ]['display'] = 'block';

// 1. Grid List of Posts
$css['desktop'][ $list_sel ]['display'] = 'grid';

$num_col = $g_srt['numberOfColumn'] ?? ( $sl['numberOfColumn'] ?? 3 );
$nc_d    = is_array( $num_col ) ? ( $num_col['Desktop'] ?? 3 ) : $num_col;
$nc_t    = is_array( $num_col ) ? ( $num_col['Tablet'] ?? $nc_d ) : $nc_d;
$nc_m    = is_array( $num_col ) ? ( $num_col['Mobile'] ?? $nc_t ) : $nc_t;

$css['desktop'][ $list_sel ]['grid-template-columns'] = "repeat({$nc_d}, minmax(0, 1fr))";
$css['tablet'][ $list_sel ]['grid-template-columns']  = "repeat({$nc_t}, minmax(0, 1fr))";
$css['mobile'][ $list_sel ]['grid-template-columns']  = "repeat({$nc_m}, minmax(0, 1fr))";

if ( ! empty( $sl['rowGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $list_sel, 'row-gap', $sl['rowGap'] );
}
if ( ! empty( $sl['colunmGap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $list_sel, 'column-gap', $sl['colunmGap'] );
}

// 2. Post Card
$css['desktop'][ $card_sel ]['position'] = 'relative';
$css['desktop'][ $card_sel ]['overflow'] = 'hidden';
if ( isset( $g_srt['isEqualHeight'] ) && ! $g_srt['isEqualHeight'] ) {
	$css['desktop'][ $card_sel ]['height'] = 'max-content';
}
if ( ! empty( $sl['textAlignment'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $card_sel, 'text-align', $sl['textAlignment'] );
}
if ( ! empty( $sl['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $card_sel, 'background-color', $sl['backgroundColor'] );
}
if ( ! empty( $sb ) ) {
	WCB_Block_Helper::add_border_css( $css, $card_sel, $sb, true );
}
if ( ! empty( $sbs ) ) {
	WCB_Block_Helper::add_box_shadow_css( $css, $card_sel, $sbs );
}

// Padding: either on card or on card__content
$pad_target = ( ( $g_img['featuredImagePosition'] ?? '' ) === 'background' ) ? $card_sel : $card_content;
if ( ! empty( $sl['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $pad_target, 'padding', $sl['padding'] );
}

// 3. Featured Image
if ( ! empty( $sf['marginBottom'] ) ) {
	$top_img_sel = $wrap_sel . ' .wcbPostCard--image-top .wcbPostCard__featuredImage';
	WCB_Block_Helper::add_responsive_css( $css, $top_img_sel, 'margin-bottom', $sf['marginBottom'] );
}
if ( ! empty( $sf['backgroundOverlay'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $overlay_sel, 'background-color', $sf['backgroundOverlay'] );
}
$css['desktop'][ $overlay_sel ]['border-radius'] = 'inherit';

$bg_img_sel = $wrap_sel . ' .wcbPostCard--image-background .wcbPostCard__featuredImage';
$css['desktop'][ $bg_img_sel ]['border-radius']          = 'inherit';
$css['desktop'][ $bg_img_sel . ' img' ]['border-radius'] = 'inherit';

// Image ratio, custom height & object-fit for non-background featured images.
$img_pos = $g_img['featuredImagePosition'] ?? 'top';

if ( 'background' !== $img_pos ) {
	WCB_Block_Helper::add_image_ratio_css( $css, $image_img_sel, $g_img );
}

if ( ! empty( $sf['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $image_img_sel, $sf['border'], true );
	// If background image mode and card border is empty, apply image border settings to the card.
	if ( ( $g_img['featuredImagePosition'] ?? '' ) === 'background' && empty( $sb['mainSettings']['color'] ) ) {
		WCB_Block_Helper::add_border_css( $css, $card_sel, $sf['border'], true );
	}
}

// 4. Title
if ( ! empty( $st['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $title_sel, $st['typography'] );
}
if ( ! empty( $st['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_sel, 'color', $st['textColor'] );
}
if ( ! empty( $st['textHoverColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_sel . ':hover', 'color', $st['textHoverColor'] );
}
if ( ! empty( $st['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $title_wrap, 'margin-bottom', $st['marginBottom'] );
}

// 5. Excerpt
if ( ! empty( $se['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $excerpt_sel, $se['typography'] );
}
if ( ! empty( $se['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $excerpt_sel, 'color', $se['textColor'] );
}
if ( ! empty( $se['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $excerpt_sel, 'margin-bottom', $se['marginBottom'] );
}

// 6. Meta
if ( ! empty( $sm['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $meta_sel, 'margin-bottom', $sm['marginBottom'] );
}
if ( ! empty( $sm['authorTypography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $author_sel, $sm['authorTypography'] );
}
if ( ! empty( $sm['authorColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $author_sel, 'color', $sm['authorColor'] );
	WCB_Block_Helper::add_responsive_css( $css, $card_sel . ' .wcbPostCard__meta-author', 'color', $sm['authorColor'] );
}
if ( ! empty( $sm['dateTypography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $date_sel, $sm['dateTypography'] );
}
if ( ! empty( $sm['dateTextColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $date_sel, 'color', $sm['dateTextColor'] );
}

// 7. Taxonomy
if ( ! empty( $stx['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $tax_sel, $stx['typography'] );
}
if ( ! empty( $stx['textColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $tax_sel, 'color', $stx['textColor'] );
}
if ( ! empty( $stx['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $tax_high, 'background-color', $stx['backgroundColor'] );
}
if ( ! empty( $stx['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $tax_wrap, 'margin-bottom', $stx['marginBottom'] );
}

// 8. Read More Link
if ( ! empty( $sr['typography'] ) ) {
	WCB_Block_Helper::add_typography_css( $css, $readmore_sel, $sr['typography'] );
}
if ( ! empty( $sr['colorAndBackgroundColor'] ) ) {
	$cbc = $sr['colorAndBackgroundColor'];
	if ( ! empty( $cbc['Normal']['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $readmore_sel, 'color', $cbc['Normal']['color'] );
	}
	if ( ! empty( $cbc['Normal']['backgroundColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $readmore_sel, 'background-color', $cbc['Normal']['backgroundColor'] );
	}
	if ( ! empty( $cbc['Hover']['color'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $readmore_sel . ':hover', 'color', $cbc['Hover']['color'] );
	}
	if ( ! empty( $cbc['Hover']['backgroundColor'] ) ) {
		WCB_Block_Helper::add_responsive_css( $css, $readmore_sel . ':hover', 'background-color', $cbc['Hover']['backgroundColor'] );
	}
}
if ( ! empty( $sr['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $readmore_sel, $sr['border'], true );
}
if ( ! empty( $sr['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $readmore_sel, 'padding', $sr['padding'] );
}
if ( ! empty( $sr['marginBottom'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $readmore_sel, 'margin-bottom', $sr['marginBottom'] );
}

// 9. Pagination
if ( ! empty( $sp['justifyContent'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $pag_wrap, 'justify-content', $sp['justifyContent'] );
}
if ( ! empty( $sp['marginTop'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $pag_wrap, 'margin-top', $sp['marginTop'] );
}
if ( ! empty( $sp['mainStyle']['Normal']['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $pag_sel, 'color', $sp['mainStyle']['Normal']['color'] );
}
if ( ! empty( $sp['mainStyle']['Normal']['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $pag_sel, 'background-color', $sp['mainStyle']['Normal']['backgroundColor'] );
}
if ( ! empty( $sp['mainStyle']['Normal']['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $pag_sel, $sp['mainStyle']['Normal']['border'], true );
}
if ( ! empty( $sp['mainStyle']['Active']['color'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $pag_active, 'color', $sp['mainStyle']['Active']['color'] );
}
if ( ! empty( $sp['mainStyle']['Active']['backgroundColor'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $pag_active, 'background-color', $sp['mainStyle']['Active']['backgroundColor'] );
}
if ( ! empty( $sp['mainStyle']['Active']['border'] ) ) {
	WCB_Block_Helper::add_border_css( $css, $pag_active, $sp['mainStyle']['Active']['border'], true );
}

// 10. Advance
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
