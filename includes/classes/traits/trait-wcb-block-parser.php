<?php
/**
 * Trait WCB_Block_Parser_Trait
 *
 * Block CSS evaluation, attribute extraction from innerHTML, and post/block
 * traversal for extracting styles.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

trait WCB_Block_Parser_Trait {

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
	 * Extract block attributes from <pre data-wcb-block-attrs> in innerHTML if available.
	 *
	 * When blocks are saved in Gutenberg, all current React attributes are serialized
	 * into <pre data-wcb-block-attrs="...">...</pre>. Many attributes (especially for child
	 * blocks like slider-child, slider-swiper-child, icon-child, etc.) are omitted from
	 * Gutenberg's block comment delimiters. Extracting from <pre> ensures the full,
	 * up-to-date attributes are used for server-side CSS generation.
	 *
	 * @param string $inner_html       Block innerHTML.
	 * @param string $target_unique_id Optional uniqueId to match specific pre tag.
	 * @return array Decoded attributes or empty array.
	 */
	public static function extract_attrs_from_inner_html( $inner_html, $target_unique_id = '' ) {
		if ( empty( $inner_html ) ) {
			return array();
		}

		if ( ! empty( $target_unique_id ) ) {
			$pattern = '/<pre[^>]*data-wcb-block-attrs=[\x27\x22]?' . preg_quote( $target_unique_id, '/' ) . '[\x27\x22]?[^>]*>(.*?)<\/pre>/s';
			if ( preg_match( $pattern, $inner_html, $matches ) ) {
				$decoded = json_decode( html_entity_decode( $matches[1], ENT_QUOTES, 'UTF-8' ), true );
				if ( is_array( $decoded ) ) {
					return $decoded;
				}
			}
		}

		// Fallback: match any <pre data-wcb-block-attrs> tag.
		if ( preg_match( '/<pre[^>]*data-wcb-block-attrs[^>]*>(.*?)<\/pre>/s', $inner_html, $matches ) ) {
			$decoded = json_decode( html_entity_decode( $matches[1], ENT_QUOTES, 'UTF-8' ), true );
			if ( is_array( $decoded ) ) {
				return $decoded;
			}
		}

		return array();
	}

	/**
	 * Generate CSS for a single Boostify block from its attributes.
	 *
	 * @param array      $block        Parsed block with attrs.
	 * @param array|null $parent_block Optional parent block.
	 * @return string CSS rules.
	 */
	public static function generate_block_css( $block, $parent_block = null ) {
		$attrs      = $block['attrs'] ?? array();
		$inner_html = $block['innerHTML'] ?? '';

		// Extract attributes serialized in <pre data-wcb-block-attrs> inside innerHTML.
		$pre_attrs = self::extract_attrs_from_inner_html( $inner_html, $attrs['uniqueId'] ?? '' );
		if ( ! empty( $pre_attrs ) ) {
			$attrs = array_replace_recursive( $pre_attrs, $attrs );
		}

		$unique_id  = $attrs['uniqueId'] ?? '';
		$block_name = $block['blockName'] ?? '';

		if ( empty( $unique_id ) ) {
			return '';
		}

		if ( strpos( $block_name, 'boostify-blocks/' ) !== 0 ) {
			return '';
		}

		// Extract parent attributes if parent_block is provided.
		$parent_attrs = null;
		if ( ! empty( $parent_block ) && is_array( $parent_block ) ) {
			$p_attrs = $parent_block['attrs'] ?? array();
			$p_inner = $parent_block['innerHTML'] ?? '';
			$p_pre   = self::extract_attrs_from_inner_html( $p_inner, $p_attrs['uniqueId'] ?? '' );
			if ( ! empty( $p_pre ) ) {
				$p_attrs = array_replace_recursive( $p_pre, $p_attrs );
			}
			$parent_attrs = self::merge_with_defaults( $parent_block['blockName'] ?? '', $p_attrs );
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
			$attrs,
			$parent_attrs
		);

		if ( null !== $frontend_css ) {
			return $frontend_css;
		}

		return '';
	}

	/**
	 * Get frontend CSS from file if available.
	 *
	 * @param string     $block_name   Block name (e.g., 'boostify-blocks/heading').
	 * @param array      $attr         Merged block attributes with defaults.
	 * @param string     $unique_id    Block unique ID.
	 * @param array|null $raw_attrs    Raw block attributes before merging with defaults.
	 * @param array|null $parent_attrs Optional parent block merged attributes.
	 * @return string|null CSS string or null if file not found.
	 */
	public static function get_frontend_css_from_file( $block_name, $attr, $unique_id, $raw_attrs = null, $parent_attrs = null ) {
		$short_name = self::normalize_block_slug( $block_name );
		$file_path  = BOOSTIFY_BLOCKS_PATH . 'includes/blocks/block-' . $short_name . '/frontend.css.php';

		if ( ! file_exists( $file_path ) ) {
			return null;
		}

		// Make variables available to the included file.
		$attr         = $attr;
		$unique_id    = $unique_id;
		$raw_attrs    = ( null !== $raw_attrs ) ? $raw_attrs : $attr;
		$parent_attrs = ( null !== $parent_attrs ) ? $parent_attrs : array();

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

			return apply_filters( 'boostify_blocks_block_frontend_css', $css, $block_name, $unique_id, $attr );
		}

		// If the file generated output directly.
		if ( ! empty( $buffered ) ) {
			return apply_filters( 'boostify_blocks_block_frontend_css', $buffered, $block_name, $unique_id, $attr );
		}

		return null;
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
	 * @param array      $blocks       Parsed blocks.
	 * @param array|null $parent_block Optional parent block.
	 * @return string Combined CSS.
	 */
	public static function extract_css_from_blocks( $blocks, $parent_block = null ) {
		$css = '';

		foreach ( $blocks as $block ) {
			if ( empty( $block['blockName'] ) ) {
				if ( ! empty( $block['innerBlocks'] ) ) {
					$css .= self::extract_css_from_blocks( $block['innerBlocks'], $parent_block );
				}
				continue;
			}

			// 1. Process Boostify blocks.
			if ( 0 === strpos( $block['blockName'], 'boostify-blocks/' ) ) {
				$css .= self::generate_block_css( $block, $parent_block );
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

			// Recurse into inner blocks, passing current block as parent.
			if ( ! empty( $block['innerBlocks'] ) ) {
				$css .= self::extract_css_from_blocks( $block['innerBlocks'], $block );
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
}
