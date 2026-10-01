<?php
/**
 * Trait WCB_Block_Debug_Trait
 *
 * Debugging, inspection, and CLI reporting helpers for Boostify Blocks.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

trait WCB_Block_Debug_Trait {

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
