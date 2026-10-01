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

$css = array(
	'desktop' => array(),
	'tablet'  => array(),
	'mobile'  => array(),
);

$wrap_sel = '.' . $unique_id . '[data-uniqueid="' . $unique_id . '"]';

// Advance (responsive conditions, z-index, motion effects).
WCB_Block_Helper::add_advance_css( $css, $wrap_sel, $attr );

return WCB_Block_Helper::generate_all_css( $css, '' );
