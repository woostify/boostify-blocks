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
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Load pure CSS utility class.
require_once BOOSTIFY_BLOCKS_PATH . 'includes/classes/class-wcb-css-utility.php';

class WCB_Block_Helper extends WCB_CSS_Utility {

	// =====================================================================
	// BLOCK ATTRIBUTE HELPERS
	// =====================================================================

	/**
	 * Normalize a block name to its canonical directory slug.
	 *
	 * Handles aliases like 'boostify-blocks/boostify-icon' → 'icon'.
	 *
	 * @param string $block_name Full block name (e.g., 'boostify-blocks/boostify-icon').
	 * @return string Normalized slug (e.g., 'icon').
	 */
	public static function normalize_block_slug( $block_name ) {
		$short_name = basename( $block_name );
		if ( 'boostify-icon' === $short_name ) {
			$short_name = 'icon';
		}
		return $short_name;
	}

	/**
	 * Get a Block's Default Attributes.
	 *
	 * @param string $block_name Name of the block to retrieve defaults.
	 * @return array             All default attributes for the specified block.
	 */
	public static function get_block_default_attributes( $block_name ) {
		// 'boostify-blocks/products' → 'block-products'
		// 'boostify-blocks/boostify-icon' → 'block-icon'
		$short_name = self::normalize_block_slug( $block_name );
		$dir_name   = 'block-' . $short_name;

		$assets_file = realpath( BOOSTIFY_BLOCKS_PATH . 'includes/blocks/' . $dir_name . '/attributes.php' );
		return ( is_string( $assets_file ) && file_exists( $assets_file ) ) ? require $assets_file : array();
	}

	/**
	 * Merge block attributes with defaults to ensure all expected keys are present.
	 *
	 * @param string $block_name Block name.
	 * @param array  $attrs      Raw block attributes.
	 * @return array Merged attributes.
	 */
	public static function merge_with_defaults( $block_name, $attrs ) {
		$defaults = self::get_block_default_attributes( $block_name );

		// Flatten defaults to a simple key => default value array.
		$default_values = array();
		foreach ( $defaults as $key => $config ) {
			$default_values[ $key ] = $config['default'] ?? null;
		}

		return array_replace_recursive( $default_values, $attrs );
	}

	// =====================================================================
	// CSS EXTRACTION FROM BLOCKS / POSTS
	// =====================================================================

	/**
	 * Generate CSS for a single Boostify block from its attributes.
	 *
	 * @param array $block Parsed block with attrs.
	 * @return string CSS rules.
	 */
	public static function generate_block_css( $block ) {
		$attrs      = $block['attrs'] ?? array();
		$unique_id  = $attrs['uniqueId'] ?? '';
		$block_name = $block['blockName'] ?? '';

		if ( empty( $unique_id ) ) {
			return '';
		}

		if ( strpos( $block_name, 'boostify-blocks/' ) !== 0 ) {
			return '';
		}

		// Try to use frontend.css.php file if available.
		// Merge with PHP attribute defaults first: Gutenberg omits attributes
		// equal to their JS defaults when saving markup, so freshly inserted
		// blocks arrive here with EMPTY style panels. Without the merge the
		// generated CSS would miss all base styles for those blocks.
		// Raw $attrs are passed as the 4th argument so child blocks can selectively
		// output only customized attributes without repeating parent defaults.
		$frontend_css = self::get_frontend_css_from_file(
			$block_name,
			self::merge_with_defaults( $block_name, $attrs ),
			$unique_id,
			$attrs
		);

		if ( null !== $frontend_css ) {
			return $frontend_css;
		}

		return '';
	}

	/**
	 * Get frontend CSS from file if available.
	 *
	 * @param string     $block_name Block name (e.g., 'boostify-blocks/heading').
	 * @param array      $attr       Merged block attributes with defaults.
	 * @param string     $unique_id  Block unique ID.
	 * @param array|null $raw_attrs  Raw block attributes before merging with defaults.
	 * @return string|null CSS string or null if file not found.
	 */
	public static function get_frontend_css_from_file( $block_name, $attr, $unique_id, $raw_attrs = null ) {
		$short_name = self::normalize_block_slug( $block_name );
		$file_path  = BOOSTIFY_BLOCKS_PATH . 'includes/blocks/block-' . $short_name . '/frontend.css.php';

		if ( ! file_exists( $file_path ) ) {
			return null;
		}

		// Make variables available to the included file.
		$attr      = $attr;
		$unique_id = $unique_id;
		$raw_attrs = ( null !== $raw_attrs ) ? $raw_attrs : $attr;

		// Start output buffering.
		ob_start();

		// Include the file - it should return an array with desktop, tablet, mobile.
		$result = include $file_path;

		// Get the output buffer content.
		$buffered = ob_get_clean();

		// If the file returned an array, generate CSS from it.
		if ( is_array( $result ) && isset( $result['desktop'] ) ) {
			$css = '';

			// Global responsive breakpoints (fall back to 768px / 1024px).
			$settings_opts = get_option( 'boostify_blocks_settings_options', array() );
			$media_tablet  = isset( $settings_opts['media_tablet'] ) ? (int) floatval( $settings_opts['media_tablet'] ) : 768;
			$media_desktop = isset( $settings_opts['media_desktop'] ) ? (int) floatval( $settings_opts['media_desktop'] ) : 1024;
			if ( $media_tablet <= 0 ) {
				$media_tablet = 768;
			}
			if ( $media_desktop <= $media_tablet ) {
				$media_desktop = $media_tablet + 1;
			}

			// Desktop CSS.
			if ( ! empty( $result['desktop'] ) ) {
				$css .= $result['desktop'];
			}

			// Tablet CSS (range: tablet breakpoint → desktop breakpoint - 1,
			// matching the editor's mobile-first min-width queries).
			if ( ! empty( $result['tablet'] ) ) {
				$css .= '@media (max-width: ' . ( $media_desktop - 1 ) . 'px) {' . $result['tablet'] . '}';
			}

			// Mobile CSS.
			if ( ! empty( $result['mobile'] ) ) {
				$css .= '@media (max-width: ' . ( $media_tablet - 1 ) . 'px) {' . $result['mobile'] . '}';
			}

			return $css;
		}

		// If the file generated output directly.
		if ( ! empty( $buffered ) ) {
			return $buffered;
		}

		return null;
	}

	/**
	 * Merge CSS rules that share the same selector.
	 *
	 * Groups properties from rules with identical (media_query, selector)
	 * into a single declaration block, reducing output size and improving
	 * readability.
	 *
	 * @param string $css Raw CSS with potentially duplicate selectors.
	 * @return string Merged CSS.
	 */
	public static function merge_css_rules( $css ) {
		if ( empty( trim( $css ) ) ) {
			return $css;
		}

		// Collect rules grouped by (media, selector).
		$groups = array();

		// Step 1: extract @media blocks first, replace them with placeholders.
		$media_blocks = array();
		$css_without_media = preg_replace_callback(
			'/@media\s*((?:\([^)]+\)(?:\s*and\s*\([^)]+\))*))\s*\{((?:[^{}]|\{[^{}]*\})*)\}/s',
			function ( $matches ) use ( &$media_blocks ) {
				$placeholder = '___MEDIA_BLOCK_' . count( $media_blocks ) . '___';
				$media_blocks[ $placeholder ] = array(
					'query' => '@media ' . $matches[1],
					'inner' => $matches[2],
				);
				return $placeholder;
			},
			$css
		);

		// Step 2: parse base-level rules (no @media).
		$css_without_media_clean = preg_replace( '/___MEDIA_BLOCK_\d+___/', '', $css_without_media );
		$base_rules              = self::parse_css_rules( $css_without_media_clean );
		foreach ( $base_rules as $rule ) {
			$sel = $rule['selector'];
			if ( ! isset( $groups[''][ $sel ] ) ) {
				$groups[''][ $sel ] = array();
			}
			foreach ( $rule['properties'] as $prop => $val ) {
				$groups[''][ $sel ][ $prop ] = $val;
			}
		}

		// Step 3: parse rules inside each @media block.
		foreach ( $media_blocks as $placeholder => $media_data ) {
			$media_query = self::extract_media_query( $media_data['query'] );
			$inner_rules = self::parse_css_rules( $media_data['inner'] );

			if ( ! isset( $groups[ $media_query ] ) ) {
				$groups[ $media_query ] = array();
			}

			foreach ( $inner_rules as $rule ) {
				$sel = $rule['selector'];
				if ( ! isset( $groups[ $media_query ][ $sel ] ) ) {
					$groups[ $media_query ][ $sel ] = array();
				}
				foreach ( $rule['properties'] as $prop => $val ) {
					$groups[ $media_query ][ $sel ][ $prop ] = $val;
				}
			}
		}

		// Step 4: rebuild CSS output.
		$output = '';

		// Base rules first (no media query).
		if ( ! empty( $groups[''] ) ) {
			foreach ( $groups[''] as $selector => $properties ) {
				$output .= self::build_css_rule( $selector, $properties );
			}
		}

		// Then media query groups, sorted.
		unset( $groups[''] );
		foreach ( $groups as $media_query => $selectors ) {
			if ( empty( $selectors ) ) {
				continue;
			}
			$inner_css = '';
			foreach ( $selectors as $selector => $properties ) {
				$inner_css .= "\t" . self::build_css_rule( $selector, $properties );
			}
			$output .= "$media_query {\n$inner_css}\n";
		}

		return $output;
	}

	/**
	 * Parse a CSS string into an array of (selector, properties) rules.
	 *
	 * @param string $css Raw CSS rules (no nested @media blocks).
	 * @return array List of ['selector' => string, 'properties' => array].
	 */
	private static function parse_css_rules( $css ) {
		$rules = array();

		// Match: selector { property: value; property: value; ... }
		preg_match_all(
			'/([^{]+)\{([^}]+)\}/',
			$css,
			$matches,
			PREG_SET_ORDER
		);

		foreach ( $matches as $match ) {
			$selector   = trim( $match[1] );
			$properties = self::parse_properties( trim( $match[2] ) );

			if ( ! empty( $selector ) && ! empty( $properties ) ) {
				$rules[] = array(
					'selector'   => $selector,
					'properties' => $properties,
				);
			}
		}

		return $rules;
	}

	/**
	 * Parse a property string into an associative array.
	 *
	 * @param string $props Property declarations.
	 * @return array Associative array of property => value.
	 */
	private static function parse_properties( $props ) {
		$result = array();

		preg_match_all(
			'/([a-zA-Z-]+)\s*:\s*([^;]+);/',
			$props,
			$matches,
			PREG_SET_ORDER
		);

		foreach ( $matches as $match ) {
			$prop            = trim( $match[1] );
			$val             = trim( $match[2] );
			$result[ $prop ] = $val;
		}

		return $result;
	}

	/**
	 * Build a single CSS rule from a selector and its properties.
	 *
	 * @param string $selector   CSS selector.
	 * @param array  $properties Associative array of property => value.
	 * @return string CSS rule like ".foo { color: red; font-size: 16px; }\n".
	 */
	private static function build_css_rule( $selector, $properties ) {
		if ( empty( $properties ) ) {
			return '';
		}

		$declarations = array();
		foreach ( $properties as $prop => $val ) {
			$declarations[] = "$prop: $val";
		}

		return "$selector { " . implode( '; ', $declarations ) . "; }\n";
	}

	/**
	 * Extract the media query string from a @media block.
	 *
	 * @param string $media_block Full @media block.
	 * @return string Media query.
	 */
	private static function extract_media_query( $media_block ) {
		if ( preg_match( '/^(@media\s*(?:\([^)]+\)(?:\s*and\s*\([^)]+\))*))/', trim( $media_block ), $m ) ) {
			return $m[1];
		}
		return trim( $media_block );
	}

	/**
	 * Processed reusable block and template part IDs to prevent infinite recursion.
	 * Mirrors WP-Spectra pattern: self::$seen_refs.
	 *
	 * @var array<int>
	 */
	private static $seen_refs = array();

	/**
	 * Reset tracked reusable block IDs before processing a post.
	 */
	public static function reset_seen_refs() {
		self::$seen_refs = array();
	}

	/**
	 * Recursively extract CSS from an array of parsed blocks.
	 *
	 * Supports:
	 * - Standard Boostify blocks (boostify-blocks/*)
	 * - Gutenberg Synced Patterns / Reusable Blocks (core/block) with infinite recursion guard
	 * - Full Site Editing Template Parts (core/template-part)
	 * - Nested innerBlocks
	 *
	 * @param array $blocks Parsed blocks.
	 * @return string Combined CSS.
	 */
	public static function extract_css_from_blocks( $blocks ) {
		$css = '';

		foreach ( $blocks as $block ) {
			if ( empty( $block['blockName'] ) ) {
				if ( ! empty( $block['innerBlocks'] ) ) {
					$css .= self::extract_css_from_blocks( $block['innerBlocks'] );
				}
				continue;
			}

			// 1. Process Boostify blocks.
			if ( 0 === strpos( $block['blockName'], 'boostify-blocks/' ) ) {
				$css .= self::generate_block_css( $block );
			}

			// 2. Process Reusable Blocks (Synced Patterns: core/block).
			if ( 'core/block' === $block['blockName'] ) {
				$ref_id = isset( $block['attrs']['ref'] ) ? absint( $block['attrs']['ref'] ) : 0;
				if ( $ref_id && ! in_array( $ref_id, self::$seen_refs, true ) ) {
					self::$seen_refs[] = $ref_id;
					$ref_post          = get_post( $ref_id );
					if ( $ref_post && ! empty( $ref_post->post_content ) ) {
						$reusable_blocks = parse_blocks( $ref_post->post_content );
						$css            .= self::extract_css_from_blocks( $reusable_blocks );
					}
				}
			}

			// 3. Process FSE Template Parts (core/template-part).
			if ( 'core/template-part' === $block['blockName'] ) {
				$tp_id = 0;
				if ( ! empty( $block['attrs']['postId'] ) ) {
					$tp_id = absint( $block['attrs']['postId'] );
				} elseif ( ! empty( $block['attrs']['slug'] ) ) {
					$theme = $block['attrs']['theme'] ?? ( function_exists( 'wp_get_theme' ) ? wp_get_theme()->get_stylesheet() : '' );
					$parts = get_posts( array(
						'name'           => $block['attrs']['slug'],
						'post_type'      => 'wp_template_part',
						'post_status'    => 'publish',
						'posts_per_page' => 1,
						'tax_query'      => ! empty( $theme ) ? array(
							array(
								'taxonomy' => 'wp_theme',
								'field'    => 'name',
								'terms'    => $theme,
							),
						) : array(),
					) );
					if ( ! empty( $parts ) ) {
						$tp_id = $parts[0]->ID;
					}
				}

				if ( $tp_id && ! in_array( $tp_id, self::$seen_refs, true ) ) {
					self::$seen_refs[] = $tp_id;
					$tp_post           = get_post( $tp_id );
					if ( $tp_post && ! empty( $tp_post->post_content ) ) {
						$tp_blocks = parse_blocks( $tp_post->post_content );
						$css      .= self::extract_css_from_blocks( $tp_blocks );
					}
				}
			}

			// Recurse into inner blocks.
			if ( ! empty( $block['innerBlocks'] ) ) {
				$css .= self::extract_css_from_blocks( $block['innerBlocks'] );
			}
		}

		return $css;
	}

	/**
	 * Extract CSS from a post by parsing block attributes.
	 *
	 * Resets the seen_refs guard for reusable blocks on every entry.
	 *
	 * @param int $post_id Post ID.
	 * @return string Combined CSS for all Boostify blocks in the post.
	 */
	public static function extract_css_from_post( $post_id ) {
		self::reset_seen_refs();

		$post = get_post( $post_id );
		if ( ! $post ) {
			return '';
		}

		$blocks = parse_blocks( $post->post_content );
		return self::extract_css_from_blocks( $blocks );
	}

	/**
	 * Debug: build a per-block CSS report for a post.
	 *
	 * @param int    $post_id      Post ID.
	 * @param string $block_filter Optional block name filter.
	 * @param bool   $log          Optional write to error_log.
	 * @return string Human-readable report.
	 */
	public static function debug_post_block_css( $post_id, $block_filter = '', $log = false ) {
		$post = get_post( $post_id );
		if ( ! $post ) {
			return sprintf( "Boostify Debug: post %d not found.\n", $post_id );
		}

		$settings_opts = get_option( 'boostify_blocks_settings_options', array() );
		$media_tablet  = isset( $settings_opts['media_tablet'] ) ? (int) floatval( $settings_opts['media_tablet'] ) : 768;
		$media_desktop = isset( $settings_opts['media_desktop'] ) ? (int) floatval( $settings_opts['media_desktop'] ) : 1024;

		// Global settings relevant to button styling.
		$global_lines = array();
		foreach ( array( 'buttonInheritFromTheme' ) as $opt_key ) {
			$global_lines[] = sprintf(
				'  %-24s = %s',
				$opt_key,
				var_export( $settings_opts[ $opt_key ] ?? null, true ) // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_var_export
			);
		}
		$button_theme = $settings_opts['buttonTheme'] ?? array();
		if ( is_array( $button_theme ) && $button_theme ) {
			foreach ( $button_theme as $tk => $tv ) {
				if ( is_scalar( $tv ) || null === $tv ) {
					$global_lines[] = sprintf( '  buttonTheme.%-17s = %s', $tk, var_export( $tv, true ) ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_var_export
				}
			}
		}

		$lines   = array();
		$lines[] = '===== Boostify Blocks CSS Debug =====';
		$lines[] = sprintf(
			'Post #%d "%s" | media_tablet=%dpx media_desktop=%dpx',
			$post_id,
			get_the_title( $post ),
			$media_tablet,
			$media_desktop
		);
		$lines[] = 'Globals:';
		$lines   = array_merge( $lines, $global_lines );

		$total_blocks = 0;
		$total_css    = 0;
		self::debug_walk_blocks( parse_blocks( $post->post_content ), $block_filter, $lines, 0, $total_blocks, $total_css );

		$lines[] = sprintf( '===== End: %d block(s), %d chars CSS =====', $total_blocks, $total_css );

		$report = implode( "\n", $lines ) . "\n";

		if ( $log && defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
			error_log( $report );
		}

		return $report;
	}

	/**
	 * Recursively walk parsed blocks appending debug info to $lines.
	 *
	 * @param array  $blocks       Parsed blocks.
	 * @param string $block_filter Name substring filter ('' = all).
	 * @param array  $lines        Report lines (by reference).
	 * @param int    $depth        Nesting depth.
	 * @param int    $total_blocks Matched block counter (by reference).
	 * @param int    $total_css    Total CSS length counter (by reference).
	 * @return void
	 */
	private static function debug_walk_blocks( $blocks, $block_filter, &$lines, $depth, &$total_blocks, &$total_css ) {
		foreach ( $blocks as $block ) {
			$name = $block['blockName'] ?? '';

			if ( empty( $name ) ) {
				if ( ! empty( $block['innerBlocks'] ) ) {
					self::debug_walk_blocks( $block['innerBlocks'], $block_filter, $lines, $depth, $total_blocks, $total_css );
				}
				continue;
			}

			if ( 0 !== strpos( $name, 'boostify-blocks/' ) ) {
				continue;
			}

			$is_match = '' === $block_filter || false !== strpos( $name, $block_filter );

			// Always recurse into inner blocks.
			if ( ! empty( $block['innerBlocks'] ) ) {
				self::debug_walk_blocks( $block['innerBlocks'], $block_filter, $lines, $depth + 1, $total_blocks, $total_css );
			}

			if ( ! $is_match ) {
				continue;
			}

			$attrs     = $block['attrs'] ?? array();
			$unique_id = $attrs['uniqueId'] ?? '';
			if ( empty( $unique_id ) ) {
				$lines[] = sprintf( '%s[%s] skipped (no uniqueId)', str_repeat( '  ', $depth ), $name );
				continue;
			}

			$short_name = self::normalize_block_slug( $name );
			$file_path  = BOOSTIFY_BLOCKS_PATH . 'includes/blocks/block-' . $short_name . '/frontend.css.php';
			$source     = file_exists( $file_path ) ? 'frontend.css.php' : 'legacy';

			$css = self::generate_block_css( $block );

			$indent  = str_repeat( '  ', $depth + 1 );
			$lines[] = sprintf(
				'%s[%s] uniqueId=%s | source=%s | length=%d%s',
				$indent,
				$name,
				$unique_id,
				$source,
				strlen( $css ),
				empty( trim( $css ) ) ? ' | !! EMPTY CSS !!' : ''
			);

			// Split CSS into breakpoint segments for readability.
			if ( '' !== trim( $css ) ) {
				$total_blocks++;
				$total_css += strlen( $css );

				$segments = preg_split( '/(?=@media)/', $css );
				foreach ( $segments as $segment ) {
					$segment = trim( $segment );
					if ( '' === $segment ) {
						continue;
					}
					if ( 0 === strpos( $segment, '@media' ) ) {
						$query   = strstr( $segment, '{', true );
						$body    = substr( $segment, strlen( $query ) + 1, -1 );
						$lines[] = $indent . '[' . $query . ']';
						$lines[] = $indent . '  ' . str_replace( "\n", ' ', $body );
					} else {
						$lines[] = $indent . '[desktop]';
						$lines[] = $indent . '  ' . str_replace( "\n", ' ', $segment );
					}
				}
			}
		}
	}
}
