<?php
/**
 * Frontend CSS for Tab Child Block.
 *
 * Most tab child styles are controlled by the parent block (block-tabs).
 * This file handles child-specific advance attributes (responsive conditions, z-index, motion effects).
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

$wrap_sel = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';

// Advance (responsive conditions, z-index, motion effects)
$selectors = array_replace_recursive( $selectors, WCB_Block_Helper::get_advance_css( $attr, $wrap_sel ) );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return WCB_Block_Helper::generate_all_css( $combined_selectors, '' );

