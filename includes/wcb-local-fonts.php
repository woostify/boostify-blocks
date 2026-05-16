<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Returns the local directory and URL used to cache downloaded font files.
 */
function boostify_blocks_fonts_upload_dir(): array {
    $upload = wp_upload_dir();
    return [
        'dir' => trailingslashit( $upload['basedir'] ) . 'boostify-blocks/fonts/',
        'url' => trailingslashit( $upload['baseurl'] ) . 'boostify-blocks/fonts/',
    ];
}

/**
 * Returns true for system / generic font names that are not Google Fonts.
 */
function boostify_blocks_is_system_font( string $font ): bool {
    return (bool) preg_match(
        '/^(arial|helvetica|times new roman|georgia|verdana|trebuchet ms|sans-serif|serif|monospace|serif-alt|cursive|fantasy|system-ui)$/i',
        trim( $font )
    );
}

/**
 * Recursively walks block attributes and collects every `fontFamily` value.
 */
function boostify_blocks_find_font_families( array $data ): array {
    $fonts = [];
    foreach ( $data as $key => $value ) {
        if ( 'fontFamily' === $key && is_string( $value ) && '' !== $value ) {
            $fonts[] = $value;
        } elseif ( is_array( $value ) ) {
            $fonts = array_merge( $fonts, boostify_blocks_find_font_families( $value ) );
        }
    }
    return $fonts;
}

/**
 * Parses all blocks in post content and returns unique Google Font family names.
 */
function boostify_blocks_collect_post_fonts( string $post_content ): array {
    if ( ! has_blocks( $post_content ) ) {
        return [];
    }

    $fonts  = [];
    $blocks = parse_blocks( $post_content );

    $walk = function ( array $blocks ) use ( &$walk, &$fonts ) {
        foreach ( $blocks as $block ) {
            if ( ! empty( $block['attrs'] ) ) {
                $fonts = array_merge( $fonts, boostify_blocks_find_font_families( $block['attrs'] ) );
            }
            if ( ! empty( $block['innerBlocks'] ) ) {
                $walk( $block['innerBlocks'] );
            }
        }
    };

    $walk( $blocks );

    return array_values(
        array_unique(
            array_filter( $fonts, fn( $f ) => ! boostify_blocks_is_system_font( $f ) )
        )
    );
}

/**
 * Write $content to $path using WP_Filesystem (falls back to direct write on
 * direct-access hosts where uploads dir is always writable).
 */
function boostify_blocks_write_file( string $path, string $content ): bool {
    global $wp_filesystem;

    if ( empty( $wp_filesystem ) ) {
        require_once ABSPATH . 'wp-admin/includes/file.php';
        WP_Filesystem();
    }

    if ( ! empty( $wp_filesystem ) ) {
        return $wp_filesystem->put_contents( $path, $content, FS_CHMOD_FILE );
    }

    // phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_file_put_contents
    return false !== file_put_contents( $path, $content );
}

// ─── Download & cache ─────────────────────────────────────────────────────────

/**
 * Downloads a Google Font family (CSS + woff2 files) into the local cache.
 *
 * @return string|false  Local CSS URL on success, false on failure.
 */
function boostify_blocks_download_google_font( string $font_family ) {
    $paths = boostify_blocks_fonts_upload_dir();
    wp_mkdir_p( $paths['dir'] );

    $slug     = sanitize_title( $font_family );
    $css_path = $paths['dir'] . $slug . '.css';
    $css_url  = $paths['url'] . $slug . '.css';

    // Already cached – nothing to do.
    if ( file_exists( $css_path ) ) {
        return $css_url;
    }

    // Fetch the font CSS from Google Fonts API v2.
    $api_url = 'https://fonts.googleapis.com/css2?family='
        . rawurlencode( $font_family )
        . ':ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';

    $response = wp_remote_get(
        $api_url,
        [
            // Identify as a modern browser so Google returns woff2 URLs.
            'user-agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
            'timeout'    => 30,
            'sslverify'  => true,
        ]
    );

    if ( is_wp_error( $response ) ) {
        error_log( '[boostify-fonts] wp_remote_get ERROR for "' . $font_family . '": ' . $response->get_error_message() );
        return false;
    }

    $code = (int) wp_remote_retrieve_response_code( $response );
    if ( 200 !== $code ) {
        error_log( '[boostify-fonts] wp_remote_get returned HTTP ' . $code . ' for "' . $font_family . '"' );
        return false;
    }

    $css = wp_remote_retrieve_body( $response );

    // Download every .woff2 file referenced in the CSS and rewrite the URLs.
    preg_match_all( '/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/i', $css, $matches );

    foreach ( array_unique( $matches[1] ) as $woff2_url ) {
        $filename   = sanitize_file_name( basename( (string) wp_parse_url( $woff2_url, PHP_URL_PATH ) ) );
        $local_path = $paths['dir'] . $filename;
        $local_url  = $paths['url'] . $filename;

        if ( ! file_exists( $local_path ) ) {
            $font_resp = wp_remote_get( $woff2_url, [ 'timeout' => 30, 'sslverify' => true ] );

            if ( ! is_wp_error( $font_resp ) && 200 === (int) wp_remote_retrieve_response_code( $font_resp ) ) {
                boostify_blocks_write_file( $local_path, wp_remote_retrieve_body( $font_resp ) );
            }
        }

        $css = str_replace( $woff2_url, $local_url, $css );
    }

    // Persist the rewritten CSS.
    if ( ! boostify_blocks_write_file( $css_path, $css ) ) {
        return false;
    }

    return $css_url;
}

// ─── Frontend hooks ───────────────────────────────────────────────────────────

/**
 * Enqueue locally cached Google Font stylesheets on the frontend.
 * Hooked to wp_enqueue_scripts so fonts are downloaded (if needed) before
 * wp_head outputs the <link> tags.
 */
function boostify_blocks_enqueue_local_google_fonts(): void {
    $settings = get_option( 'boostify_blocks_settings_options', [] );

    if ( ( $settings['loadGoogleFontsLocally'] ?? 'false' ) !== 'true' ) {
        error_log( '[boostify-fonts] loadGoogleFontsLocally is OFF. Value: ' . var_export( $settings['loadGoogleFontsLocally'] ?? 'NOT SET', true ) );
        return;
    }

    if ( ! is_singular() ) {
        error_log( '[boostify-fonts] Not singular page, skipping.' );
        return;
    }

    $post = get_post();
    if ( ! $post ) {
        error_log( '[boostify-fonts] No post found.' );
        return;
    }

    $fonts = boostify_blocks_collect_post_fonts( $post->post_content );
    error_log( '[boostify-fonts] Post ID: ' . $post->ID . ' | Fonts found: ' . implode( ', ', $fonts ) );
    // DEBUG: dump raw block attrs to find how font is stored
    if ( empty( $fonts ) && has_blocks( $post->post_content ) ) {
        foreach ( parse_blocks( $post->post_content ) as $block ) {
            if ( ! empty( $block['attrs'] ) ) {
                error_log( '[boostify-fonts] Block "' . $block['blockName'] . '" attrs: ' . wp_json_encode( $block['attrs'] ) );
            }
        }
    }

    foreach ( $fonts as $font_family ) {
        $local_css_url = boostify_blocks_download_google_font( $font_family );
        error_log( '[boostify-fonts] Download result for "' . $font_family . '": ' . var_export( $local_css_url, true ) );

        if ( $local_css_url ) {
            wp_enqueue_style(
                'boostify-local-font-' . sanitize_title( $font_family ),
                $local_css_url,
                [],
                null // no version — file content is the version
            );
        }
    }
}
add_action( 'wp_enqueue_scripts', 'boostify_blocks_enqueue_local_google_fonts' );

/**
 * Output <link rel="preload"> tags for every woff2 file used on the current
 * page, so the browser can start fetching them before the CSS is parsed.
 * Only runs when both loadGoogleFontsLocally AND preloadLocalFonts are enabled.
 */
function boostify_blocks_output_preload_local_fonts(): void {
    $settings = get_option( 'boostify_blocks_settings_options', [] );

    if ( ( $settings['loadGoogleFontsLocally'] ?? 'false' ) !== 'true' ) {
        return;
    }

    if ( ( $settings['preloadLocalFonts'] ?? 'false' ) !== 'true' ) {
        return;
    }

    if ( ! is_singular() ) {
        return;
    }

    $post = get_post();
    if ( ! $post ) {
        return;
    }

    $paths = boostify_blocks_fonts_upload_dir();
    $fonts = boostify_blocks_collect_post_fonts( $post->post_content );

    foreach ( $fonts as $font_family ) {
        $slug     = sanitize_title( $font_family );
        $css_path = $paths['dir'] . $slug . '.css';

        if ( ! file_exists( $css_path ) ) {
            continue;
        }

        // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
        $css = file_get_contents( $css_path );

        // Extract local woff2 URLs that were rewritten during download.
        preg_match_all( '/url\((' . preg_quote( $paths['url'], '/' ) . '[^)]+\.woff2)\)/i', $css, $matches );

        foreach ( array_unique( $matches[1] ) as $font_url ) {
            printf(
                '<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin="anonymous">' . "\n",
                esc_url( $font_url )
            );
        }
    }
}
add_action( 'wp_head', 'boostify_blocks_output_preload_local_fonts', 2 );

// ─── Cache invalidation ───────────────────────────────────────────────────────

/**
 * Delete all cached font files when loadGoogleFontsLocally is toggled off,
 * so stale files don't linger.
 * Called from wcb-ajax-for-dashboard-page.php after settings are saved.
 */
function boostify_blocks_maybe_clear_font_cache( array $old_settings, array $new_settings ): void {
    $was_on = ( $old_settings['loadGoogleFontsLocally'] ?? 'false' ) === 'true';
    $is_on  = ( $new_settings['loadGoogleFontsLocally'] ?? 'false' ) === 'true';

    if ( $was_on && ! $is_on ) {
        boostify_blocks_clear_font_cache();
    }
}

function boostify_blocks_clear_font_cache(): void {
    $paths = boostify_blocks_fonts_upload_dir();

    if ( ! is_dir( $paths['dir'] ) ) {
        return;
    }

    $files = array_merge(
        glob( $paths['dir'] . '*.css' ) ?: [],
        glob( $paths['dir'] . '*.woff2' ) ?: []
    );

    foreach ( $files as $file ) {
        wp_delete_file( $file );
    }
}
