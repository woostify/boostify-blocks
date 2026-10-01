<?php
/**
 * Trait WCB_CSS_Optimizer_Trait
 *
 * CSS post-processing, rule merging, deduplication, and AST parsing.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

trait WCB_CSS_Optimizer_Trait {

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
}
