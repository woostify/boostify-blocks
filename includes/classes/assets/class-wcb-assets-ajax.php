<?php
/**
 * Class WCB_Assets_Ajax
 *
 * Handles AJAX actions for asset management in the WordPress dashboard.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class WCB_Assets_Ajax {

	/**
	 * Storage instance.
	 *
	 * @var WCB_Assets_Storage
	 */
	protected $storage;

	/**
	 * Generator instance.
	 *
	 * @var WCB_Assets_Generator
	 */
	protected $generator;

	/**
	 * Constructor.
	 *
	 * @param WCB_Assets_Storage   $storage   Storage handler.
	 * @param WCB_Assets_Generator $generator Generator handler.
	 */
	public function __construct( WCB_Assets_Storage $storage, WCB_Assets_Generator $generator ) {
		$this->storage   = $storage;
		$this->generator = $generator;

		$this->init_hooks();
	}

	/**
	 * Register AJAX hooks.
	 */
	protected function init_hooks() {
		add_action( 'wp_ajax_boostify_blocks_regenerate_assets', array( $this, 'ajax_regenerate_assets' ) );
		add_action( 'wp_ajax_boostify_blocks_save_post_assets', array( $this, 'ajax_save_post_assets' ) );
		add_action( 'wp_ajax_boostify_blocks_save_collected_css', array( $this, 'ajax_save_collected_css' ) );
		add_action( 'wp_ajax_nopriv_boostify_blocks_save_collected_css', array( $this, 'ajax_save_collected_css' ) );
		add_action( 'wp_ajax_boostify_blocks_get_fallback_posts', array( $this, 'ajax_get_fallback_posts' ) );
	}

	/**
	 * AJAX handler: Regenerate all assets.
	 *
	 * @return void — sends JSON response and dies.
	 */
	public function ajax_regenerate_assets() {
		if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['nonce'] ) ), 'boostifyblocks_dashboard_settings_nonce' ) ) {
			wp_send_json_error( array( 'message' => 'Invalid nonce' ), 403 );
		}

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => 'Permission denied' ), 403 );
		}

		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		$with_debug = isset( $_POST['debug'] )
			? filter_var( wp_unslash( $_POST['debug'] ), FILTER_VALIDATE_BOOLEAN )
			: null;

		try {
			$result = $this->generator->regenerate_all_assets( $with_debug );
			wp_send_json_success( $result );
		} catch ( \Throwable $e ) {
			wp_send_json_error(
				array(
					'message' => $e->getMessage() . ' (' . basename( $e->getFile() ) . ':' . $e->getLine() . ')',
					'file'    => $e->getFile(),
					'line'    => $e->getLine(),
				)
			);
		}
	}

	/**
	 * AJAX handler: Save assets for a single post.
	 *
	 * @return void — sends JSON response and dies.
	 */
	public function ajax_save_post_assets() {
		if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['nonce'] ) ), 'boostifyblocks_dashboard_settings_nonce' ) ) {
			wp_send_json_error( array( 'message' => 'Invalid nonce' ), 403 );
		}

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => 'Permission denied' ), 403 );
		}

		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		$post_id = isset( $_POST['postId'] ) ? absint( wp_unslash( $_POST['postId'] ) ) : 0;
		if ( ! $post_id ) {
			wp_send_json_error( array( 'message' => 'Invalid post ID' ), 400 );
		}

		try {
			$success = $this->generator->regenerate_post_assets( $post_id, true );

			wp_send_json_success(
				array(
					'success' => $success,
					'message' => $success ? __( 'Assets regenerated for post.', 'boostify-blocks' ) : __( 'No Boostify blocks found in this post.', 'boostify-blocks' ),
				)
			);
		} catch ( \Throwable $e ) {
			wp_send_json_error(
				array(
					'message' => $e->getMessage() . ' (' . basename( $e->getFile() ) . ':' . $e->getLine() . ')',
					'file'    => $e->getFile(),
					'line'    => $e->getLine(),
				)
			);
		}
	}

	/**
	 * AJAX handler: Save CSS collected from the frontend.
	 *
	 * Accessible by both logged-in and guest users (wp_ajax + wp_ajax_nopriv).
	 *
	 * @return void — sends JSON response and dies.
	 */
	public function ajax_save_collected_css() {
		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		$post_id = isset( $_POST['postId'] ) ? absint( wp_unslash( $_POST['postId'] ) ) : 0;
		if ( ! $post_id ) {
			wp_send_json_error( array( 'message' => 'Invalid post ID' ), 400 );
		}

		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		$css = isset( $_POST['css'] ) ? wp_unslash( $_POST['css'] ) : '';
		if ( empty( $css ) ) {
			wp_send_json_error( array( 'message' => 'No CSS data provided' ), 400 );
		}

		// Sanitize: strip any HTML/script tags from CSS content.
		$css   = wp_strip_all_tags( $css );
		$saved = $this->storage->save_css_file( $post_id, $css );

		wp_send_json_success(
			array(
				'success' => $saved,
				'message' => $saved ? __( 'CSS file saved.', 'boostify-blocks' ) : __( 'Failed to save CSS file.', 'boostify-blocks' ),
			)
		);
	}

	/**
	 * Recursively extract unique block names from parsed blocks.
	 *
	 * @param array $blocks Parsed blocks array.
	 * @param array $names  Accumulator array.
	 * @return array Unique block names.
	 */
	public function extract_block_names( array $blocks, array &$names = array() ) {
		foreach ( $blocks as $block ) {
			if ( ! empty( $block['blockName'] ) ) {
				$names[ $block['blockName'] ] = true;
			}
			if ( ! empty( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) ) {
				$this->extract_block_names( $block['innerBlocks'], $names );
			}
		}
		return array_keys( $names );
	}

	/**
	 * Get report of all posts where asset generation has failed.
	 *
	 * @return array List of posts with details.
	 */
	public function get_fallback_posts_report() {
		global $wpdb;

		$results = array();

		if ( isset( $wpdb ) && ! empty( $wpdb->postmeta ) ) {
			// Query directly for speed across large datasets.
			// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
			$results = $wpdb->get_results(
				"SELECT post_id, meta_value FROM {$wpdb->postmeta} WHERE meta_key = '_wcb_page_assets' AND meta_value LIKE '%\"generation_failed\";b:1%'",
				ARRAY_A
			);
		} else {
			$posts = get_posts(
				array(
					'post_type'      => 'any',
					'post_status'    => 'any',
					'posts_per_page' => 200,
					'meta_query'     => array(
						array(
							'key'     => '_wcb_page_assets',
							'value'   => '"generation_failed";b:1',
							'compare' => 'LIKE',
						),
					),
				)
			);
			if ( ! empty( $posts ) ) {
				foreach ( $posts as $p ) {
					$results[] = array(
						'post_id'    => $p->ID,
						'meta_value' => get_post_meta( $p->ID, '_wcb_page_assets', true ),
					);
				}
			}
		}

		$report = array();

		if ( ! empty( $results ) ) {
			foreach ( $results as $row ) {
				$post_id = (int) $row['post_id'];
				$meta    = is_array( $row['meta_value'] ) ? $row['meta_value'] : maybe_unserialize( $row['meta_value'] );

				if ( empty( $meta['generation_failed'] ) ) {
					continue;
				}

				$post = get_post( $post_id );
				if ( ! $post ) {
					continue;
				}

				$blocks      = $this->generator->get_blocks_from_post( $post_id );
				$blocks_used = $this->extract_block_names( $blocks );

				$last_attempt_ts        = ! empty( $meta['last_attempt'] ) ? (int) $meta['last_attempt'] : 0;
				$last_attempt_formatted = 'N/A';
				if ( $last_attempt_ts ) {
					$last_attempt_formatted = function_exists( 'wp_date' )
						? wp_date( 'Y-m-d H:i:s', $last_attempt_ts )
						: ( function_exists( 'date_i18n' ) ? date_i18n( 'Y-m-d H:i:s', $last_attempt_ts ) : date( 'Y-m-d H:i:s', $last_attempt_ts ) );
				}

				$report[] = array(
					'post_id'                => $post_id,
					'title'                  => get_the_title( $post_id ),
					'permalink'              => get_permalink( $post_id ),
					'blocks_used'            => $blocks_used,
					'last_attempt'           => $last_attempt_formatted,
					'last_attempt_timestamp' => $last_attempt_ts,
				);
			}
		}

		return $report;
	}

	/**
	 * AJAX endpoint: Get list of posts currently falling back.
	 */
	public function ajax_get_fallback_posts() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => __( 'Unauthorized user.', 'boostify-blocks' ) ), 403 );
		}

		$report = $this->get_fallback_posts_report();

		wp_send_json_success(
			array(
				'count' => count( $report ),
				'posts' => $report,
			)
		);
	}
}
