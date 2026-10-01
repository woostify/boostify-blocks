<?php
/**
 * Class WCB_Block_Helper
 *
 * Block-level orchestration, attribute normalization, reusable block resolution,
 * and CSS file generation delegation for Boostify Blocks.
 *
 * Extends WCB_CSS_Utility for backward compatibility, so all pure CSS utility
 * calls (e.g. WCB_Block_Helper::get_css_value()) continue to work seamlessly.
 *
 * Modularized via traits in includes/classes/traits/ for separation of concerns
 * and high maintainability without breaking backward compatibility.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Load pure CSS utility class.
require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/class-wcb-css-utility.php';

// Load modular traits.
require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/traits/trait-wcb-block-attributes.php';
require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/traits/trait-wcb-css-builder.php';
require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/traits/trait-wcb-block-parser.php';
require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/traits/trait-wcb-css-optimizer.php';
require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/traits/trait-wcb-block-debug.php';

class WCB_Block_Helper extends WCB_CSS_Utility {

	use WCB_Block_Attributes_Trait;
	use WCB_CSS_Builder_Trait;
	use WCB_Block_Parser_Trait;
	use WCB_CSS_Optimizer_Trait;
	use WCB_Block_Debug_Trait;

}
