<?php
/**
 * Frontend CSS for Posts Grid Block.
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

$wrap_sel       = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$list_sel       = $wrap_sel . ' .wcb-posts-grid__list-posts';
$card_sel       = $wrap_sel . ' .wcbPostCard';
$card_content   = $card_sel . ' .wcbPostCard__content';
$title_sel      = $card_sel . ' .wcbPostCard__title a';
$title_wrap     = $card_sel . ' .wcbPostCard__title';
$excerpt_sel    = $card_sel . ' .wcbPostCard__excerpt';
$tax_sel        = $card_sel . ' .wcbPostCard__taxonomies a';
$tax_wrap       = $card_sel . ' .wcbPostCard__taxonomies';
$tax_high       = $card_sel . ' .wcbPostCard__taxonomies--highlighted a';
$meta_sel       = $card_sel . ' .wcbPostCard__meta';
$author_sel     = $card_sel . ' .wcbPostCard__meta-author-name';
$date_sel       = $card_sel . ' .wcbPostCard__meta-date-and-comments';
$readmore_sel   = $card_sel . ' .wcbPostCard__readmoreLink';
$image_sel      = $card_sel . ' .wcbPostCard__featuredImage';
$image_img_sel  = $wrap_sel . ' .wcbPostCard--image-top .wcbPostCard__featuredImage img';
$overlay_sel    = $wrap_sel . ' .wcbPostCard--image-background .wcbPostCard__featuredImage-overlay';
$pag_wrap       = $wrap_sel . ' .wcb-posts-grid__pagination';
$pag_sel        = $pag_wrap . ' .page-numbers';
$pag_active     = $pag_wrap . ' .page-numbers.current';

// Ensure block wrapper is displayed (overrides the display: none anti-FOUC rule in style-index.css).
$selectors[ $wrap_sel ]['display'] = 'block';

// 1. Grid List of Posts
$selectors[ $list_sel ]['display'] = 'grid';

$num_col = $g_srt['numberOfColumn'] ?? ( $sl['numberOfColumn'] ?? 3 );
$nc_d = is_array( $num_col ) ? ( $num_col['Desktop'] ?? 3 ) : $num_col;
$nc_t = is_array( $num_col ) ? ( $num_col['Tablet'] ?? $nc_d ) : $nc_d;
$nc_m = is_array( $num_col ) ? ( $num_col['Mobile'] ?? $nc_t ) : $nc_t;

$selectors[ $list_sel ]['grid-template-columns']   = "repeat({$nc_d}, minmax(0, 1fr))";
$t_selectors[ $list_sel ]['grid-template-columns'] = "repeat({$nc_t}, minmax(0, 1fr))";
$m_selectors[ $list_sel ]['grid-template-columns'] = "repeat({$nc_m}, minmax(0, 1fr))";

if ( ! empty( $sl['rowGap'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sl['rowGap'], 'row-gap', $list_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sl['rowGap'], 'row-gap', $list_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sl['rowGap'], 'row-gap', $list_sel, 'mobile' ) );
}
if ( ! empty( $sl['colunmGap'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sl['colunmGap'], 'column-gap', $list_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sl['colunmGap'], 'column-gap', $list_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sl['colunmGap'], 'column-gap', $list_sel, 'mobile' ) );
}

// 2. Post Card
$selectors[ $card_sel ]['position'] = 'relative';
if ( isset( $g_srt['isEqualHeight'] ) && ! $g_srt['isEqualHeight'] ) {
	$selectors[ $card_sel ]['height'] = 'max-content';
}
if ( ! empty( $sl['textAlignment'] ) ) {
	$selectors[ $card_sel ]['text-align'] = $sl['textAlignment'];
}
if ( ! empty( $sl['backgroundColor'] ) ) {
	$selectors[ $card_sel ]['background-color'] = $sl['backgroundColor'];
}
if ( ! empty( $sb ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sb, $card_sel, true ) );
}
if ( ! empty( $sbs ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_box_shadow_css( $sbs, $card_sel ) );
}

// Padding: either on card or on card__content
$pad_target = ( ( $g_img['featuredImagePosition'] ?? '' ) === 'background' ) ? $card_sel : $card_content;
if ( ! empty( $sl['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sl['padding'], 'padding', $pad_target, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sl['padding'], 'padding', $pad_target, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sl['padding'], 'padding', $pad_target, 'mobile' ) );
}

// 3. Featured Image
if ( ! empty( $sf['marginBottom'] ) ) {
	$top_img_sel = $wrap_sel . ' .wcbPostCard--image-top .wcbPostCard__featuredImage';
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sf['marginBottom'], 'margin-bottom', $top_img_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sf['marginBottom'], 'margin-bottom', $top_img_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sf['marginBottom'], 'margin-bottom', $top_img_sel, 'mobile' ) );
}
if ( ! empty( $sf['backgroundOverlay'] ) ) {
	$selectors[ $overlay_sel ]['background-color'] = $sf['backgroundOverlay'];
}
if ( ! empty( $sf['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sf['border'], $image_img_sel, true ) );
}

// 4. Title
if ( ! empty( $st['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $st['typography'], $title_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $st['typography'], $title_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $st['typography'], $title_sel, 'mobile' ) );
}
if ( ! empty( $st['textColor'] ) ) {
	$selectors[ $title_sel ]['color'] = $st['textColor'];
}
if ( ! empty( $st['textHoverColor'] ) ) {
	$selectors[ $title_sel . ':hover' ]['color'] = $st['textHoverColor'];
}
if ( ! empty( $st['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $st['marginBottom'], 'margin-bottom', $title_wrap, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $st['marginBottom'], 'margin-bottom', $title_wrap, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $st['marginBottom'], 'margin-bottom', $title_wrap, 'mobile' ) );
}

// 5. Excerpt
if ( ! empty( $se['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $se['typography'], $excerpt_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $se['typography'], $excerpt_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $se['typography'], $excerpt_sel, 'mobile' ) );
}
if ( ! empty( $se['textColor'] ) ) {
	$selectors[ $excerpt_sel ]['color'] = $se['textColor'];
}
if ( ! empty( $se['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $se['marginBottom'], 'margin-bottom', $excerpt_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $se['marginBottom'], 'margin-bottom', $excerpt_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $se['marginBottom'], 'margin-bottom', $excerpt_sel, 'mobile' ) );
}

// 6. Meta
if ( ! empty( $sm['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sm['marginBottom'], 'margin-bottom', $meta_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sm['marginBottom'], 'margin-bottom', $meta_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sm['marginBottom'], 'margin-bottom', $meta_sel, 'mobile' ) );
}
if ( ! empty( $sm['authorTypography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $sm['authorTypography'], $author_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $sm['authorTypography'], $author_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $sm['authorTypography'], $author_sel, 'mobile' ) );
}
if ( ! empty( $sm['authorColor'] ) ) {
	$selectors[ $author_sel ]['color'] = $sm['authorColor'];
	$selectors[ $card_sel . ' .wcbPostCard__meta-author' ]['color'] = $sm['authorColor'];
}
if ( ! empty( $sm['dateTypography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $sm['dateTypography'], $date_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $sm['dateTypography'], $date_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $sm['dateTypography'], $date_sel, 'mobile' ) );
}
if ( ! empty( $sm['dateTextColor'] ) ) {
	$selectors[ $date_sel ]['color'] = $sm['dateTextColor'];
}

// 7. Taxonomy
if ( ! empty( $stx['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $stx['typography'], $tax_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $stx['typography'], $tax_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $stx['typography'], $tax_sel, 'mobile' ) );
}
if ( ! empty( $stx['textColor'] ) ) {
	$selectors[ $tax_sel ]['color'] = $stx['textColor'];
}
if ( ! empty( $stx['backgroundColor'] ) ) {
	$selectors[ $tax_high ]['background-color'] = $stx['backgroundColor'];
}
if ( ! empty( $stx['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $stx['marginBottom'], 'margin-bottom', $tax_wrap, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $stx['marginBottom'], 'margin-bottom', $tax_wrap, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $stx['marginBottom'], 'margin-bottom', $tax_wrap, 'mobile' ) );
}

// 8. Read More Link
if ( ! empty( $sr['typography'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_typography_css( $sr['typography'], $readmore_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_typography_css( $sr['typography'], $readmore_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_typography_css( $sr['typography'], $readmore_sel, 'mobile' ) );
}
if ( ! empty( $sr['colorAndBackgroundColor'] ) ) {
	$cbc = $sr['colorAndBackgroundColor'];
	if ( ! empty( $cbc['Normal']['color'] ) ) {
		$selectors[ $readmore_sel ]['color'] = $cbc['Normal']['color'];
	}
	if ( ! empty( $cbc['Normal']['backgroundColor'] ) ) {
		$selectors[ $readmore_sel ]['background-color'] = $cbc['Normal']['backgroundColor'];
	}
	if ( ! empty( $cbc['Hover']['color'] ) ) {
		$selectors[ $readmore_sel . ':hover' ]['color'] = $cbc['Hover']['color'];
	}
	if ( ! empty( $cbc['Hover']['backgroundColor'] ) ) {
		$selectors[ $readmore_sel . ':hover' ]['background-color'] = $cbc['Hover']['backgroundColor'];
	}
}
if ( ! empty( $sr['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sr['border'], $readmore_sel, true ) );
}
if ( ! empty( $sr['padding'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_dimension_css( $sr['padding'], 'padding', $readmore_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_dimension_css( $sr['padding'], 'padding', $readmore_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_dimension_css( $sr['padding'], 'padding', $readmore_sel, 'mobile' ) );
}
if ( ! empty( $sr['marginBottom'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sr['marginBottom'], 'margin-bottom', $readmore_sel, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sr['marginBottom'], 'margin-bottom', $readmore_sel, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sr['marginBottom'], 'margin-bottom', $readmore_sel, 'mobile' ) );
}

// 9. Pagination
if ( ! empty( $sp['justifyContent'] ) ) {
	$selectors[ $pag_wrap ]['justify-content'] = $sp['justifyContent'];
}
if ( ! empty( $sp['marginTop'] ) ) {
	$selectors   = array_replace_recursive( $selectors, WCB_Block_Helper::get_responsive_css( $sp['marginTop'], 'margin-top', $pag_wrap, 'desktop' ) );
	$t_selectors = array_replace_recursive( $t_selectors, WCB_Block_Helper::get_responsive_css( $sp['marginTop'], 'margin-top', $pag_wrap, 'tablet' ) );
	$m_selectors = array_replace_recursive( $m_selectors, WCB_Block_Helper::get_responsive_css( $sp['marginTop'], 'margin-top', $pag_wrap, 'mobile' ) );
}
if ( ! empty( $sp['mainStyle']['Normal']['color'] ) ) {
	$selectors[ $pag_sel ]['color'] = $sp['mainStyle']['Normal']['color'];
}
if ( ! empty( $sp['mainStyle']['Normal']['backgroundColor'] ) ) {
	$selectors[ $pag_sel ]['background-color'] = $sp['mainStyle']['Normal']['backgroundColor'];
}
if ( ! empty( $sp['mainStyle']['Normal']['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sp['mainStyle']['Normal']['border'], $pag_sel, true ) );
}
if ( ! empty( $sp['mainStyle']['Active']['color'] ) ) {
	$selectors[ $pag_active ]['color'] = $sp['mainStyle']['Active']['color'];
}
if ( ! empty( $sp['mainStyle']['Active']['backgroundColor'] ) ) {
	$selectors[ $pag_active ]['background-color'] = $sp['mainStyle']['Active']['backgroundColor'];
}
if ( ! empty( $sp['mainStyle']['Active']['border'] ) ) {
	$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_border_css( $sp['mainStyle']['Active']['border'], $pag_active, true ) );
}

// 10. Advance
$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

