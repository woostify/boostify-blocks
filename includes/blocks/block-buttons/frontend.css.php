<?php
/**
 * Frontend CSS for Buttons Block.
 *
 * Mirrors src/block-buttons/GlobalCss.tsx
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

// Selectors matching GlobalCss.tsx.
$wrap_sel  = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';
$inner_sel = $wrap_sel . ' .wcb-buttons__inner';
$child_sel = $inner_sel . ' >*';
$txt_sel   = '#' . $unique_id . ' .wcb-button__text';

// =====================================================================
// 1. GENERAL (Flex layout, alignment & gap)
// =====================================================================
$general   = is_array( $attr['general_general'] ?? null ) ? $attr['general_general'] : array();
$stack     = $general['stackOrientation'] ?? 'none';
$alignment = WCB_Block_Helper::get_responsive_value( $general['alignment'] ?? array() );

$align_d = $alignment['Desktop'] ?? '';
$align_t = $alignment['Tablet'] ?? $align_d;
$align_m = $alignment['Mobile'] ?? $align_t;

$get_flex_rules = static function( $is_stacked, $align_val ) {
	$rules                    = array();
	$rules['flex-direction']  = $is_stacked ? 'column' : 'row';
	$rules['justify-content'] = ( ! $is_stacked && '' !== $align_val && null !== $align_val ) ? $align_val : 'normal';
	$rules['align-items']      = ( '' !== $align_val && null !== $align_val || ! $is_stacked ) ? ( $is_stacked ? $align_val : 'center' ) : 'stretch';
	return $rules;
};

// Desktop.
$d_is_stacked = 'Desktop' === $stack;
$d_rules      = $get_flex_rules( $d_is_stacked, $align_d );
$css['desktop'][ $inner_sel ]['flex-direction'] = $d_rules['flex-direction'];
if ( 'normal' !== $d_rules['justify-content'] ) {
	$css['desktop'][ $inner_sel ]['justify-content'] = $d_rules['justify-content'];
}
if ( ! empty( $d_rules['align-items'] ) ) {
	$css['desktop'][ $inner_sel ]['align-items'] = $d_rules['align-items'];
}
if ( 'stretch' === $align_d ) {
	$css['desktop'][ $child_sel ]['flex']    = '1';
	$css['desktop'][ $child_sel ]['display'] = 'flex';
}

// Tablet.
$t_is_stacked = 'none' !== $stack && 'Mobile' !== $stack;
$t_rules      = $get_flex_rules( $t_is_stacked, $align_t );
if ( $t_rules['flex-direction'] !== $d_rules['flex-direction'] ) {
	$css['tablet'][ $inner_sel ]['flex-direction'] = $t_rules['flex-direction'];
}
if ( $t_rules['justify-content'] !== $d_rules['justify-content'] ) {
	$css['tablet'][ $inner_sel ]['justify-content'] = $t_rules['justify-content'];
}
if ( $t_rules['align-items'] !== $d_rules['align-items'] ) {
	$css['tablet'][ $inner_sel ]['align-items'] = $t_rules['align-items'];
}
if ( 'stretch' === $align_t && 'stretch' !== $align_d ) {
	$css['tablet'][ $child_sel ]['flex']    = '1';
	$css['tablet'][ $child_sel ]['display'] = 'flex';
} elseif ( 'stretch' !== $align_t && 'stretch' === $align_d ) {
	$css['tablet'][ $child_sel ]['flex']    = 'initial';
	$css['tablet'][ $child_sel ]['display'] = 'block';
}

// Mobile.
$m_is_stacked = 'none' !== $stack;
$m_rules      = $get_flex_rules( $m_is_stacked, $align_m );
if ( $m_rules['flex-direction'] !== $t_rules['flex-direction'] ) {
	$css['mobile'][ $inner_sel ]['flex-direction'] = $m_rules['flex-direction'];
}
if ( $m_rules['justify-content'] !== $t_rules['justify-content'] ) {
	$css['mobile'][ $inner_sel ]['justify-content'] = $m_rules['justify-content'];
}
if ( $m_rules['align-items'] !== $t_rules['align-items'] ) {
	$css['mobile'][ $inner_sel ]['align-items'] = $m_rules['align-items'];
}
if ( 'stretch' === $align_m && 'stretch' !== $align_t ) {
	$css['mobile'][ $child_sel ]['flex']    = '1';
	$css['mobile'][ $child_sel ]['display'] = 'flex';
} elseif ( 'stretch' !== $align_m && 'stretch' === $align_t ) {
	$css['mobile'][ $child_sel ]['flex']    = 'initial';
	$css['mobile'][ $child_sel ]['display'] = 'block';
}

// Gap.
if ( ! empty( $general['gap'] ) ) {
	WCB_Block_Helper::add_responsive_css( $css, $inner_sel, 'gap', $general['gap'] );
}

// =====================================================================
// 2. DIMENSION (Padding & Margin)
// =====================================================================
$dim = is_array( $attr['style_dimension'] ?? null ) ? $attr['style_dimension'] : array();
if ( ! empty( $dim['padding'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'padding', $dim['padding'] );
}
if ( ! empty( $dim['margin'] ) ) {
	WCB_Block_Helper::add_dimension_css( $css, $wrap_sel, 'margin', $dim['margin'] );
}

// =====================================================================
// 3. TYPOGRAPHY
// =====================================================================
$typo = is_array( $attr['style_text']['typography'] ?? null ) ? $attr['style_text']['typography'] : array();
if ( ! empty( $typo ) ) {
	WCB_Block_Helper::add_typography_css( $css, $txt_sel, $typo );
}

// =====================================================================
// 4. ADVANCE (Z-Index, Responsive Condition & Motion Effects)
// =====================================================================
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );

