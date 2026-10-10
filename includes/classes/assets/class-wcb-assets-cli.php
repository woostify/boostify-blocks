<?php
/**
 * Class WCB_Assets_CLI
 *
 * WP-CLI integration for Boostify Blocks asset management.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class WCB_Assets_CLI {

	/**
	 * Generator instance.
	 *
	 * @var WCB_Assets_Generator
	 */
	protected $generator;

	/**
	 * AJAX helper instance (for reports).
	 *
	 * @var WCB_Assets_Ajax
	 */
	protected $ajax;

	/**
	 * Constructor.
	 *
	 * @param WCB_Assets_Generator $generator Generator handler.
	 * @param WCB_Assets_Ajax      $ajax      Ajax handler for fallback reports.
	 */
	public function __construct( WCB_Assets_Generator $generator, WCB_Assets_Ajax $ajax ) {
		$this->generator = $generator;
		$this->ajax      = $ajax;

		$this->init_cli();
	}

	/**
	 * Register WP-CLI commands.
	 */
	protected function init_cli() {
		if ( defined( 'WP_CLI' ) && WP_CLI ) {
			\WP_CLI::add_command( 'boostify-blocks fallback-status', array( $this, 'cli_fallback_status' ) );
			\WP_CLI::add_command( 'boostify-blocks regenerate', array( $this, 'cli_regenerate' ) );
			\WP_CLI::add_command( 'boostify-blocks regenerate-css', array( $this, 'cli_regenerate' ) );
		}
	}

	/**
	 * WP-CLI command: Display fallback status and optionally force regeneration.
	 *
	 * Command: wp boostify-blocks fallback-status [--regenerate]
	 *
	 * @param array $args       Command positional arguments.
	 * @param array $assoc_args Command associative arguments / flags.
	 */
	public function cli_fallback_status( $args, $assoc_args ) {
		$force_regenerate = isset( $assoc_args['regenerate'] );

		$report = $this->ajax->get_fallback_posts_report();

		if ( empty( $report ) ) {
			\WP_CLI::success( 'No posts are currently failing asset generation (no fallbacks active).' );
			return;
		}

		\WP_CLI::line( sprintf( 'Found %d post(s) with failed asset generation:', count( $report ) ) );

		if ( $force_regenerate ) {
			\WP_CLI::line( 'Forcing asset regeneration for all failed posts (bypassing cooldown)...' );
			foreach ( $report as $item ) {
				$post_id = $item['post_id'];
				\WP_CLI::line( sprintf( 'Regenerating Post #%d ("%s")...', $post_id, $item['title'] ) );
				$result = $this->generator->regenerate_post_assets( $post_id, true );
				if ( ! empty( $result ) ) {
					\WP_CLI::success( sprintf( 'Post #%d regenerated successfully.', $post_id ) );
				} else {
					\WP_CLI::warning( sprintf( 'Post #%d failed again.', $post_id ) );
				}
			}
			return;
		}

		$table_data = array();
		foreach ( $report as $item ) {
			$table_data[] = array(
				'Post ID'      => $item['post_id'],
				'Title'        => $item['title'],
				'Blocks Used'  => implode( ', ', $item['blocks_used'] ),
				'Last Attempt' => $item['last_attempt'],
			);
		}

		\WP_CLI\Utils\format_items( 'table', $table_data, array( 'Post ID', 'Title', 'Blocks Used', 'Last Attempt' ) );
	}

	/**
	 * WP-CLI command: Regenerate Boostify Blocks assets.
	 *
	 * ## OPTIONS
	 *
	 * [--post_id=<id>]
	 * : Regenerate assets for a specific post ID only.
	 *
	 * [--verbose]
	 * : Display detailed breakdown and summary table of processed items.
	 *
	 * ## EXAMPLES
	 *
	 *     # Regenerate all assets
	 *     wp boostify-blocks regenerate
	 *
	 *     # Regenerate with detailed table
	 *     wp boostify-blocks regenerate --verbose
	 *
	 *     # Regenerate a specific post
	 *     wp boostify-blocks regenerate --post_id=123
	 *
	 *     # Regenerate CSS alias
	 *     wp boostify-blocks regenerate-css
	 *
	 * @param array $args       Command positional arguments.
	 * @param array $assoc_args Command associative arguments / flags.
	 */
	public function cli_regenerate( $args, $assoc_args ) {
		try {
			$post_id = isset( $assoc_args['post_id'] ) ? absint( $assoc_args['post_id'] ) : 0;
			$verbose = isset( $assoc_args['verbose'] ) || isset( $assoc_args['debug'] );

			if ( $post_id > 0 ) {
				$post = get_post( $post_id );
				if ( ! $post ) {
					\WP_CLI::error( sprintf( 'Post #%d does not exist.', $post_id ) );
					return;
				}

				\WP_CLI::line( sprintf( 'Regenerating assets for Post #%d ("%s")...', $post_id, get_the_title( $post_id ) ) );
				$result = $this->generator->regenerate_post_assets( $post_id, true );

				if ( ! empty( $result ) ) {
					\WP_CLI::success( sprintf( 'Assets regenerated successfully for Post #%d.', $post_id ) );
				} else {
					\WP_CLI::warning( sprintf( 'No Boostify blocks found or failed to regenerate CSS for Post #%d.', $post_id ) );
				}
				return;
			}

			\WP_CLI::line( 'Regenerating assets for all posts containing Boostify blocks...' );

			// Call generator with debug/verbose mode if requested.
			$result = $this->generator->regenerate_all_assets( $verbose );

			if ( empty( $result ) ) {
				\WP_CLI::error( 'Asset regeneration failed.' );
				return;
			}

			if ( $verbose && ! empty( $result['posts_regenerated_details'] ) ) {
				$table_data = array();
				foreach ( $result['posts_regenerated_details'] as $item ) {
					$table_data[] = array(
						'ID'        => $item['id'],
						'Title'     => $item['title'],
						'Post Type' => $item['post_type'],
						'Status'    => 'Regenerated',
					);
				}
				if ( ! empty( $result['posts_skipped_details'] ) ) {
					foreach ( $result['posts_skipped_details'] as $item ) {
						$table_data[] = array(
							'ID'        => $item['id'],
							'Title'     => $item['title'],
							'Post Type' => $item['post_type'],
							'Status'    => 'Skipped',
						);
					}
				}

				\WP_CLI\Utils\format_items( 'table', $table_data, array( 'ID', 'Title', 'Post Type', 'Status' ) );
			}

			$message = ! empty( $result['message'] ) ? $result['message'] : 'Assets regenerated successfully!';
			\WP_CLI::success( $message );

		} catch ( \Exception $e ) {
			\WP_CLI::error( 'Error: ' . $e->getMessage() );
		}
	}
}

