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
 * Extracts woff2 absolute URLs from a locally-cached font CSS file and
 * appends them to $out. Handles both relative filenames (new format) and
 * legacy absolute URLs written by older versions of this plugin.
 *
 * @param string   $css      Contents of the cached CSS file.
 * @param string   $base_url Runtime base URL for the fonts directory (trailing-slash).
 * @param string[] $out      Array to append discovered absolute woff2 URLs into.
 */
function boostify_blocks_extract_woff2_urls( string $css, string $base_url, array &$out ): void {
    preg_match_all( '/url\(([^)]+\.woff2)\)/i', $css, $matches );
    foreach ( array_unique( $matches[1] ) as $ref ) {
        $ref = trim( $ref, "\"' \t" );
        if ( '' === $ref ) {
            continue;
        }
        // Relative filename → prepend the runtime base URL.
        if ( ! preg_match( '#^https?://#i', $ref ) ) {
            $out[] = $base_url . ltrim( $ref, '/' );
        } else {
            // Legacy absolute URL stored by an older version.
            $out[] = $ref;
        }
    }
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
        return false;
    }

    $code = (int) wp_remote_retrieve_response_code( $response );
    if ( 200 !== $code ) {
        return false;
    }

    $css = wp_remote_retrieve_body( $response );

    // Download every .woff2 file referenced in the CSS and rewrite the URLs.
    preg_match_all( '/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/i', $css, $matches );

    foreach ( array_unique( $matches[1] ) as $woff2_url ) {
        $filename   = sanitize_file_name( basename( (string) wp_parse_url( $woff2_url, PHP_URL_PATH ) ) );
        $local_path = $paths['dir'] . $filename;

        if ( ! file_exists( $local_path ) ) {
            $font_resp = wp_remote_get( $woff2_url, [ 'timeout' => 30, 'sslverify' => true ] );

            if ( ! is_wp_error( $font_resp ) && 200 === (int) wp_remote_retrieve_response_code( $font_resp ) ) {
                boostify_blocks_write_file( $local_path, wp_remote_retrieve_body( $font_resp ) );
            }
        }

        // Use relative filename so the CSS is portable across domains/servers.
        $css = str_replace( $woff2_url, $filename, $css );
    }

    // Persist the rewritten CSS.
    if ( ! boostify_blocks_write_file( $css_path, $css ) ) {
        return false;
    }

    return $css_url;
}

// ─── Theme / plugin Google Fonts interception ─────────────────────────────────

/**
 * Parses font family names from a Google Fonts URL.
 *
 * Handles CSS1 format: /css?family=Open+Sans:400|Roboto:700
 * and CSS2 format: /css2?family=Open+Sans:ital,wght@0,400
 *
 * @param string $url Google Fonts URL.
 * @return string[]   Unique font family names.
 */
function boostify_blocks_parse_font_families_from_url( string $url ): array {
    $parsed = wp_parse_url( $url );
    if ( empty( $parsed['query'] ) ) {
        return [];
    }

    parse_str( $parsed['query'], $params );
    $raw = $params['family'] ?? '';
    if ( '' === $raw ) {
        return [];
    }

    $families = [];
    foreach ( preg_split( '/\|/', $raw ) as $part ) {
        $name = preg_replace( '/[:\@].*$/', '', trim( $part ) );
        $name = str_replace( '+', ' ', $name );
        $name = trim( $name );
        if ( '' !== $name ) {
            $families[] = $name;
        }
    }

    return array_values( array_unique( $families ) );
}

/**
 * Intercepts any stylesheet loading from fonts.googleapis.com that has been
 * enqueued by the theme or other plugins, downloads it locally, and replaces
 * the remote URL with the local cached version.
 *
 * Runs at priority 999 so all enqueues are already registered before we scan.
 */
function boostify_blocks_intercept_enqueued_google_fonts(): void {
    $settings = get_option( 'boostify_blocks_settings_options', [] );

    if ( ( $settings['loadGoogleFontsLocally'] ?? 'false' ) !== 'true' ) {
        return;
    }

    global $wp_styles;

    if ( empty( $wp_styles ) || empty( $wp_styles->queue ) ) {
        return;
    }

    foreach ( $wp_styles->queue as $handle ) {
        $style = $wp_styles->registered[ $handle ] ?? null;
        if ( ! $style ) {
            continue;
        }

        $src = is_string( $style->src ) ? $style->src : '';
        if ( ! preg_match( '#^https?://fonts\.googleapis\.com/css#', $src ) ) {
            continue;
        }

        $families = boostify_blocks_parse_font_families_from_url( $src );

        if ( 1 === count( $families ) ) {
            // Single family: replace the stylesheet src directly.
            $local_url = boostify_blocks_download_google_font( $families[0] );
            if ( $local_url ) {
                $wp_styles->registered[ $handle ]->src = $local_url;
            }
        } elseif ( count( $families ) > 1 ) {
            // Multiple families in one URL: dequeue original, enqueue each separately.
            wp_dequeue_style( $handle );
            foreach ( $families as $font_family ) {
                if ( boostify_blocks_is_system_font( $font_family ) ) {
                    continue;
                }
                $local_url = boostify_blocks_download_google_font( $font_family );
                if ( $local_url ) {
                    wp_enqueue_style(
                        'boostify-local-font-' . sanitize_title( $font_family ),
                        $local_url,
                        [],
                        null
                    );
                }
            }
        }
    }
}
add_action( 'wp_enqueue_scripts', 'boostify_blocks_intercept_enqueued_google_fonts', 999 );

/**
 * Collects woff2 absolute URLs for fonts intercepted late (via style_loader_tag).
 * Populated during style_loader_tag; consumed by boostify_blocks_output_late_preload().
 *
 * @var string[]
 */
$boostify_blocks_late_preload_urls = [];

/**
 * Filter: intercepts every Google Fonts <link> tag as WordPress prints it.
 *
 * This catches plugins like Elementor that enqueue fonts at wp_head priority 7,
 * AFTER wp_enqueue_scripts has already finished. For those, the
 * wp_enqueue_scripts interceptor above never gets a chance to see them.
 *
 * Flow for each <link> tag:
 *   1. If href is not a Google Fonts URL → return unchanged.
 *   2. Download font files locally (uses same cache as the early interceptor).
 *   3. Replace the href in the HTML tag with the local URL.
 *   4. Update $wp_styles->registered so downstream code sees the local src.
 *   5. Stash woff2 URLs for the late preload hook (wp_head priority 99).
 */
function boostify_blocks_intercept_google_font_tag( string $html, string $handle, string $href ): string {
    if ( ! preg_match( '#^https?://fonts\.googleapis\.com/css#', $href ) ) {
        return $html;
    }

    $settings = get_option( 'boostify_blocks_settings_options', [] );
    if ( ( $settings['loadGoogleFontsLocally'] ?? 'false' ) !== 'true' ) {
        return $html;
    }

    $families = boostify_blocks_parse_font_families_from_url( $href );
    if ( empty( $families ) ) {
        return $html;
    }

    global $boostify_blocks_late_preload_urls;
    $paths     = boostify_blocks_fonts_upload_dir();
    $local_url = null;

    foreach ( $families as $font_family ) {
        if ( boostify_blocks_is_system_font( $font_family ) ) {
            continue;
        }
        $url = boostify_blocks_download_google_font( $font_family );
        if ( ! $url ) {
            continue;
        }
        if ( null === $local_url ) {
            $local_url = $url;
        }
        // Stash woff2 URLs so the late preload hook can output <link rel="preload">.
        $css_path = $paths['dir'] . sanitize_title( $font_family ) . '.css';
        if ( file_exists( $css_path ) ) {
            // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
            boostify_blocks_extract_woff2_urls( file_get_contents( $css_path ), $paths['url'], $boostify_blocks_late_preload_urls );
        }
    }

    if ( null === $local_url ) {
        return $html;
    }

    // Replace the href attribute value in the <link> tag.
    $new_html = preg_replace_callback(
        '/\bhref=([\'"])([^\'"]+)\1/',
        static function ( $m ) use ( $local_url ) {
            return 'href=' . $m[1] . esc_url( $local_url ) . $m[1];
        },
        $html,
        1
    );

    // Keep $wp_styles in sync so the early preload scan also sees local src.
    global $wp_styles;
    if ( isset( $wp_styles->registered[ $handle ] ) ) {
        $wp_styles->registered[ $handle ]->src = $local_url;
    }

    return $new_html ?? $html;
}
add_filter( 'style_loader_tag', 'boostify_blocks_intercept_google_font_tag', 10, 3 );

/**
 * Outputs <link rel="preload"> tags for fonts that were intercepted late
 * (i.e. by style_loader_tag, after the early preload at wp_head priority 2).
 * Runs at priority 99 — after all stylesheets have been printed.
 */
function boostify_blocks_output_late_preload(): void {
    global $boostify_blocks_late_preload_urls;

    $settings = get_option( 'boostify_blocks_settings_options', [] );
    if ( ( $settings['loadGoogleFontsLocally'] ?? 'false' ) !== 'true' ) {
        return;
    }
    if ( ( $settings['preloadLocalFonts'] ?? 'false' ) !== 'true' ) {
        return;
    }
    if ( empty( $boostify_blocks_late_preload_urls ) ) {
        return;
    }

    foreach ( array_unique( $boostify_blocks_late_preload_urls ) as $font_url ) {
        printf(
            '<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin="anonymous">' . "\n",
            esc_url( $font_url )
        );
    }
}
add_action( 'wp_head', 'boostify_blocks_output_late_preload', 99 );

// ─── Frontend hooks ───────────────────────────────────────────────────────────

/**
 * When allowOnlySelectedFonts is enabled, removes any font not in the
 * selectedFonts list from the collected $fonts array.
 * Comparison is case-insensitive and trims whitespace.
 *
 * @param string[] $fonts    Font family names collected from post content.
 * @param array    $settings The boostify_blocks_settings_options option value.
 * @return string[]
 */
function boostify_blocks_apply_font_allowlist( array $fonts, array $settings ): array {
    if ( ( $settings['allowOnlySelectedFonts'] ?? 'false' ) !== 'true' ) {
        return $fonts;
    }

    $raw = $settings['selectedFonts'] ?? '';
    if ( '' === trim( $raw ) ) {
        return $fonts;
    }

    $allowed = array_map( 'mb_strtolower', array_map( 'trim', explode( ',', $raw ) ) );
    $allowed = array_filter( $allowed );

    return array_values(
        array_filter( $fonts, fn( $f ) => in_array( mb_strtolower( trim( $f ) ), $allowed, true ) )
    );
}

/**
 * Enqueue locally cached Google Font stylesheets on the frontend for fonts
 * found in block attributes (fontFamily).
 * Hooked to wp_enqueue_scripts so fonts are downloaded (if needed) before
 * wp_head outputs the <link> tags.
 */
function boostify_blocks_enqueue_local_google_fonts(): void {
    $settings = get_option( 'boostify_blocks_settings_options', [] );

    if ( ( $settings['loadGoogleFontsLocally'] ?? 'false' ) !== 'true' ) {
        return;
    }

    if ( ! is_singular() ) {
        return;
    }

    $post = get_post();
    if ( ! $post ) {
        return;
    }

    $fonts = boostify_blocks_collect_post_fonts( $post->post_content );
    $fonts = boostify_blocks_apply_font_allowlist( $fonts, $settings );

    foreach ( $fonts as $font_family ) {
        $local_css_url = boostify_blocks_download_google_font( $font_family );

        if ( $local_css_url ) {
            wp_enqueue_style(
                'boostify-local-font-' . sanitize_title( $font_family ),
                $local_css_url,
                [],
                null
            );
        }
    }
}
add_action( 'wp_enqueue_scripts', 'boostify_blocks_enqueue_local_google_fonts' );

/**
 * Output <link rel="preload"> tags for every woff2 file used on the current
 * page, so the browser can start fetching them before the CSS is parsed.
 * Only runs when both loadGoogleFontsLocally AND preloadLocalFonts are enabled.
 *
 * Covers two sources:
 * 1. Fonts from boostify-blocks block attributes (fontFamily).
 * 2. Fonts intercepted from theme/plugin Google Fonts stylesheets.
 */
function boostify_blocks_output_preload_local_fonts(): void {
    $settings = get_option( 'boostify_blocks_settings_options', [] );

    if ( ( $settings['loadGoogleFontsLocally'] ?? 'false' ) !== 'true' ) {
        return;
    }

    if ( ( $settings['preloadLocalFonts'] ?? 'false' ) !== 'true' ) {
        return;
    }

    $paths      = boostify_blocks_fonts_upload_dir();
    $woff2_urls = [];

    // 1. Fonts from block content (singular pages only).
    if ( is_singular() ) {
        $post = get_post();
        if ( $post ) {
            $fonts = boostify_blocks_collect_post_fonts( $post->post_content );
            $fonts = boostify_blocks_apply_font_allowlist( $fonts, $settings );

            foreach ( $fonts as $font_family ) {
                $css_path = $paths['dir'] . sanitize_title( $font_family ) . '.css';
                if ( ! file_exists( $css_path ) ) {
                    continue;
                }
                // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
                $css = file_get_contents( $css_path );
                boostify_blocks_extract_woff2_urls( $css, $paths['url'], $woff2_urls );
            }
        }
    }

    // 2. Fonts from intercepted theme/plugin stylesheets (all page types).
    global $wp_styles;
    if ( ! empty( $wp_styles ) && ! empty( $wp_styles->queue ) ) {
        foreach ( $wp_styles->queue as $handle ) {
            $style = $wp_styles->registered[ $handle ] ?? null;
            if ( ! $style ) {
                continue;
            }
            $src = is_string( $style->src ) ? $style->src : '';
            // After interception the src starts with our local fonts URL.
            if ( 0 !== strpos( $src, $paths['url'] ) ) {
                continue;
            }
            $css_path = $paths['dir'] . basename( $src );
            if ( ! file_exists( $css_path ) ) {
                continue;
            }
            // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
            $css = file_get_contents( $css_path );
            boostify_blocks_extract_woff2_urls( $css, $paths['url'], $woff2_urls );
        }
    }

    foreach ( array_unique( $woff2_urls ) as $font_url ) {
        printf(
            '<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin="anonymous">' . "\n",
            esc_url( $font_url )
        );
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
