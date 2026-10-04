<?php
/**
 * Class WCB_Assets_Storage
 *
 * Handles file system operations, directories, paths, URLs,
 * folder partitioning, and disk read/write/delete operations for generated assets.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class WCB_Assets_Storage {

	/**
	 * Directory name for generated assets in uploads directory.
	 *
	 * @var string
	 */
	const ASSETS_DIR = 'boostify-blocks/assets';

	/**
	 * Constructor.
	 */
	public function __construct() {
		// Ensure assets directory exists on instantiation.
		$this->ensure_assets_dir_exists();
	}

	/**
	 * Get the assets upload directory info.
	 *
	 * Supports CDN / custom storage rewrite via boostify_blocks_get_upload_dir filter (matching Spectra's uag_get_upload_dir).
	 *
	 * @return array{dir: string, url: string}
	 */
	public function get_assets_upload_dir() {
		$upload   = wp_upload_dir();
		$dir_info = array(
			'dir' => trailingslashit( $upload['basedir'] ) . self::ASSETS_DIR . '/',
			'url' => trailingslashit( set_url_scheme( $upload['baseurl'] ) ) . self::ASSETS_DIR . '/',
		);

		return (array) apply_filters( 'boostify_blocks_get_upload_dir', $dir_info );
	}

	/**
	 * Get the assets directory path.
	 *
	 * @return string
	 */
	public function get_assets_dir() {
		$paths = $this->get_assets_upload_dir();
		return untrailingslashit( $paths['dir'] );
	}

	/**
	 * Get the assets directory URL.
	 *
	 * @return string
	 */
	public function get_assets_url() {
		$paths = $this->get_assets_upload_dir();
		return untrailingslashit( $paths['url'] );
	}

	/**
	 * Get partition folder name for a post ID.
	 *
	 * Groups posts into subfolders of 100 (e.g., 0-99 -> '0', 100-199 -> '100')
	 * to prevent directories from exceeding filesystem performance thresholds.
	 * Non-numeric IDs (like FSE template slugs) return 'templates'.
	 *
	 * @param int|string $post_id Post ID or template slug.
	 * @return string Subdirectory name.
	 */
	public function get_asset_folder_name( $post_id ) {
		if ( ! is_numeric( $post_id ) ) {
			return 'templates';
		}

		$id = absint( $post_id );
		return (string) ( floor( $id / 100 ) * 100 );
	}

	/**
	 * Get the CSS file path for a post.
	 *
	 * Returns partitioned path. If a legacy flat file exists and the partitioned file
	 * does not, falls back to the flat file path for backward compatibility.
	 *
	 * @param int|string $post_id Post ID or template slug.
	 * @return string
	 */
	public function get_css_file_path( $post_id ) {
		$folder           = $this->get_asset_folder_name( $post_id );
		$file_name        = is_numeric( $post_id ) ? 'post-' . absint( $post_id ) . '.css' : 'template-' . sanitize_key( $post_id ) . '.css';
		$partitioned_file = $this->get_assets_dir() . '/' . $folder . '/' . $file_name;
		$flat_file        = $this->get_assets_dir() . '/' . $file_name;

		if ( ! file_exists( $partitioned_file ) && file_exists( $flat_file ) ) {
			return $flat_file;
		}

		return $partitioned_file;
	}

	/**
	 * Get the CSS file URL for a post.
	 *
	 * Matches path resolution: prefers partitioned path URL, falls back to flat URL.
	 *
	 * @param int|string $post_id Post ID or template slug.
	 * @return string
	 */
	public function get_css_file_url( $post_id ) {
		$folder           = $this->get_asset_folder_name( $post_id );
		$file_name        = is_numeric( $post_id ) ? 'post-' . absint( $post_id ) . '.css' : 'template-' . sanitize_key( $post_id ) . '.css';
		$partitioned_file = $this->get_assets_dir() . '/' . $folder . '/' . $file_name;
		$flat_file        = $this->get_assets_dir() . '/' . $file_name;

		if ( ! file_exists( $partitioned_file ) && file_exists( $flat_file ) ) {
			$file_url = $this->get_assets_url() . '/' . $file_name;
		} else {
			$file_url = $this->get_assets_url() . '/' . $folder . '/' . $file_name;
		}

		return (string) apply_filters( 'boostify_blocks_css_file_url', $file_url, $post_id );
	}

	/**
	 * Check if a CSS file exists for a post (checks both partitioned and legacy flat locations).
	 *
	 * @param int|string $post_id Post ID or template slug.
	 * @return bool
	 */
	public function css_file_exists( $post_id ) {
		$folder           = $this->get_asset_folder_name( $post_id );
		$file_name        = is_numeric( $post_id ) ? 'post-' . absint( $post_id ) . '.css' : 'template-' . sanitize_key( $post_id ) . '.css';
		$partitioned_file = $this->get_assets_dir() . '/' . $folder . '/' . $file_name;
		$flat_file        = $this->get_assets_dir() . '/' . $file_name;

		return file_exists( $partitioned_file ) || file_exists( $flat_file );
	}

	/**
	 * Save CSS content to a file.
	 *
	 * Always writes to the partitioned directory. If a legacy flat file exists, removes it.
	 *
	 * @param int|string $post_id Post ID or template slug.
	 * @param string     $css     CSS content.
	 * @param bool       $force   Force overwrite even if content is unchanged.
	 * @return bool True on success, false on failure.
	 */
	public function save_css_file( $post_id, $css, $force = false ) {
		// Empty data protection: if generation produces empty CSS, do NOT overwrite an existing file.
		if ( empty( trim( $css ) ) ) {
			if ( $this->css_file_exists( $post_id ) ) {
				return true;
			}
			return false;
		}

		$folder     = $this->get_asset_folder_name( $post_id );
		$target_dir = $this->get_assets_dir() . '/' . $folder;

		if ( ! is_dir( $target_dir ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.dir_mkdir_dirname
			wp_mkdir_p( $target_dir );
		}

		$file_name = is_numeric( $post_id ) ? 'post-' . absint( $post_id ) . '.css' : 'template-' . sanitize_key( $post_id ) . '.css';
		$file_path = $target_dir . '/' . $file_name;
		$flat_file = $this->get_assets_dir() . '/' . $file_name;

		// Content comparison: only write if content has changed.
		if ( ! $force && file_exists( $file_path ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
			$existing = file_get_contents( $file_path );
			if ( $existing === $css ) {
				if ( file_exists( $flat_file ) ) {
					// phpcs:ignore WordPress.WP.AlternativeFunctions.unlink_unlink
					@unlink( $flat_file );
				}
				return true;
			}
		}

		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_file_put_contents
		$result = file_put_contents( $file_path, $css, LOCK_EX );

		if ( false !== $result ) {
			if ( file_exists( $flat_file ) ) {
				// phpcs:ignore WordPress.WP.AlternativeFunctions.unlink_unlink
				@unlink( $flat_file );
			}
			return true;
		}

		return false;
	}

	/**
	 * Delete generated CSS file for a post.
	 *
	 * Cleans up both partitioned and legacy flat files, removing empty partition subfolders.
	 *
	 * @param int|string $post_id Post ID or template slug.
	 * @return bool
	 */
	public function delete_css_file( $post_id ) {
		$folder         = $this->get_asset_folder_name( $post_id );
		$target_dir     = $this->get_assets_dir() . '/' . $folder;
		$file_name      = is_numeric( $post_id ) ? 'post-' . absint( $post_id ) . '.css' : 'template-' . sanitize_key( $post_id ) . '.css';
		$partition_file = $target_dir . '/' . $file_name;
		$flat_file      = $this->get_assets_dir() . '/' . $file_name;

		$deleted = false;

		if ( file_exists( $partition_file ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.unlink_unlink
			if ( @unlink( $partition_file ) ) {
				$deleted = true;
			}
		}

		if ( file_exists( $flat_file ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.unlink_unlink
			if ( @unlink( $flat_file ) ) {
				$deleted = true;
			}
		}

		// Clean up partition subfolder if now empty.
		if ( is_dir( $target_dir ) ) {
			$remaining = glob( $target_dir . '/*' );
			if ( empty( $remaining ) ) {
				@rmdir( $target_dir );
			}
		}

		return $deleted || ( ! file_exists( $partition_file ) && ! file_exists( $flat_file ) );
	}

	/**
	 * Delete all generated CSS files (both flat and partitioned).
	 *
	 * @return int Number of files deleted.
	 */
	public function delete_all_css_files() {
		$dir   = $this->get_assets_dir();
		$count = 0;

		if ( ! is_dir( $dir ) ) {
			return 0;
		}

		$flat_post        = glob( $dir . '/post-*.css' );
		$flat_tpl         = glob( $dir . '/template-*.css' );
		$part_post        = glob( $dir . '/*/post-*.css' );
		$part_tpl         = glob( $dir . '/*/template-*.css' );
		$common           = glob( $dir . '/custom-style-blocks.css' );

		$flat_post = is_array( $flat_post ) ? $flat_post : array();
		$flat_tpl  = is_array( $flat_tpl ) ? $flat_tpl : array();
		$part_post = is_array( $part_post ) ? $part_post : array();
		$part_tpl  = is_array( $part_tpl ) ? $part_tpl : array();
		$common    = is_array( $common ) ? $common : array();

		$files = array_merge( $flat_post, $flat_tpl, $part_post, $part_tpl, $common );

		foreach ( $files as $file ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.unlink_unlink
			if ( @unlink( $file ) ) {
				$count++;
			}
		}

		// Clean up any empty partition subdirectories.
		$subdirs = glob( $dir . '/*', GLOB_ONLYDIR );
		if ( is_array( $subdirs ) ) {
			foreach ( $subdirs as $subdir ) {
				$remaining = glob( $subdir . '/*' );
				if ( empty( $remaining ) ) {
					@rmdir( $subdir );
				}
			}
		}

		return $count;
	}

	/**
	 * Get the JS file path for a post.
	 *
	 * Returns partitioned path. If a legacy flat file exists and the partitioned file
	 * does not, falls back to the flat file path for backward compatibility.
	 *
	 * @param int $post_id Post ID.
	 * @return string
	 */
	public function get_js_file_path( $post_id ) {
		$folder           = $this->get_asset_folder_name( $post_id );
		$file_name        = 'post-' . absint( $post_id ) . '.js';
		$partitioned_file = $this->get_assets_dir() . '/' . $folder . '/' . $file_name;
		$flat_file        = $this->get_assets_dir() . '/' . $file_name;

		if ( ! file_exists( $partitioned_file ) && file_exists( $flat_file ) ) {
			return $flat_file;
		}

		return $partitioned_file;
	}

	/**
	 * Get the JS file URL for a post.
	 *
	 * Matches path resolution: prefers partitioned path URL, falls back to flat URL.
	 *
	 * @param int $post_id Post ID.
	 * @return string
	 */
	public function get_js_file_url( $post_id ) {
		$folder           = $this->get_asset_folder_name( $post_id );
		$file_name        = 'post-' . absint( $post_id ) . '.js';
		$partitioned_file = $this->get_assets_dir() . '/' . $folder . '/' . $file_name;
		$flat_file        = $this->get_assets_dir() . '/' . $file_name;

		if ( ! file_exists( $partitioned_file ) && file_exists( $flat_file ) ) {
			$file_url = $this->get_assets_url() . '/' . $file_name;
		} else {
			$file_url = $this->get_assets_url() . '/' . $folder . '/' . $file_name;
		}

		return (string) apply_filters( 'boostify_blocks_js_file_url', $file_url, $post_id );
	}

	/**
	 * Check if a JS file exists for a post (checks both partitioned and legacy flat locations).
	 *
	 * @param int $post_id Post ID.
	 * @return bool
	 */
	public function js_file_exists( $post_id ) {
		$folder           = $this->get_asset_folder_name( $post_id );
		$partitioned_file = $this->get_assets_dir() . '/' . $folder . '/post-' . absint( $post_id ) . '.js';
		$flat_file        = $this->get_assets_dir() . '/post-' . absint( $post_id ) . '.js';

		return file_exists( $partitioned_file ) || file_exists( $flat_file );
	}

	/**
	 * Save JS content to a file.
	 *
	 * Always writes to the partitioned directory. If a legacy flat file exists, removes it.
	 *
	 * @param int    $post_id Post ID.
	 * @param string $js      JS content.
	 * @return bool True on success, false on failure.
	 */
	public function save_js_file( $post_id, $js ) {
		if ( empty( trim( $js ) ) ) {
			return false;
		}

		$folder     = $this->get_asset_folder_name( $post_id );
		$target_dir = $this->get_assets_dir() . '/' . $folder;

		if ( ! is_dir( $target_dir ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.dir_mkdir_dirname
			wp_mkdir_p( $target_dir );
		}

		$file_path = $target_dir . '/post-' . absint( $post_id ) . '.js';
		$flat_file = $this->get_assets_dir() . '/post-' . absint( $post_id ) . '.js';

		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_file_put_contents
		$result = file_put_contents( $file_path, $js, LOCK_EX );

		if ( false !== $result ) {
			if ( file_exists( $flat_file ) ) {
				// phpcs:ignore WordPress.WP.AlternativeFunctions.unlink_unlink
				@unlink( $flat_file );
			}
			return true;
		}

		return false;
	}

	/**
	 * Delete generated JS file for a post.
	 *
	 * Cleans up both partitioned and legacy flat files, removing empty partition subfolders.
	 *
	 * @param int $post_id Post ID.
	 * @return bool
	 */
	public function delete_js_file( $post_id ) {
		$folder         = $this->get_asset_folder_name( $post_id );
		$target_dir     = $this->get_assets_dir() . '/' . $folder;
		$partition_file = $target_dir . '/post-' . absint( $post_id ) . '.js';
		$flat_file      = $this->get_assets_dir() . '/post-' . absint( $post_id ) . '.js';

		$deleted = false;

		if ( file_exists( $partition_file ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.unlink_unlink
			if ( @unlink( $partition_file ) ) {
				$deleted = true;
			}
		}

		if ( file_exists( $flat_file ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.unlink_unlink
			if ( @unlink( $flat_file ) ) {
				$deleted = true;
			}
		}

		// Clean up partition subfolder if now empty.
		if ( is_dir( $target_dir ) ) {
			$remaining = glob( $target_dir . '/*' );
			if ( empty( $remaining ) ) {
				@rmdir( $target_dir );
			}
		}

		return $deleted || ( ! file_exists( $partition_file ) && ! file_exists( $flat_file ) );
	}

	/**
	 * Delete all generated JS files.
	 *
	 * @return int Number of files deleted.
	 */
	public function delete_all_js_files() {
		$dir   = $this->get_assets_dir();
		$count = 0;

		if ( ! is_dir( $dir ) ) {
			return 0;
		}

		$flat_files        = glob( $dir . '/post-*.js' );
		$partitioned_files = glob( $dir . '/*/post-*.js' );

		$flat_files        = is_array( $flat_files ) ? $flat_files : array();
		$partitioned_files = is_array( $partitioned_files ) ? $partitioned_files : array();
		$files             = array_merge( $flat_files, $partitioned_files );

		foreach ( $files as $file ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.unlink_unlink
			if ( @unlink( $file ) ) {
				$count++;
			}
		}

		// Clean up any empty partition subdirectories.
		$subdirs = glob( $dir . '/*', GLOB_ONLYDIR );
		if ( is_array( $subdirs ) ) {
			foreach ( $subdirs as $subdir ) {
				$remaining = glob( $subdir . '/*' );
				if ( empty( $remaining ) ) {
					@rmdir( $subdir );
				}
			}
		}

		return $count;
	}

	/**
	 * Get the stylesheet version string for cache busting.
	 *
	 * Uses file modification time if the file exists on disk; falls back to the
	 * global asset version timestamp or plugin version.
	 *
	 * @param string $file_path Absolute path to the CSS file.
	 * @return string Version string.
	 */
	public function get_stylesheet_version( $file_path ) {
		if ( file_exists( $file_path ) ) {
			return (string) filemtime( $file_path );
		}
		return (string) WCB_Post_Assets::get_global_asset_version();
	}

	/**
	 * Ensure the assets directory exists.
	 */
	public function ensure_assets_dir_exists() {
		$dir = $this->get_assets_dir();
		if ( ! is_dir( $dir ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.dir_mkdir_dirname
			wp_mkdir_p( $dir );
		}
		if ( is_dir( $dir ) && ! file_exists( $dir . '/index.php' ) ) {
			// Add an index.php to prevent directory listing.
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_file_put_contents
			file_put_contents( $dir . '/index.php', '<?php // Silence is golden.' );
		}
	}
}
