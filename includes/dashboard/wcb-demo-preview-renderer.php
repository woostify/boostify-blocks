<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Look up a cached demo pattern entry by demoKey + post database ID.
 *
 * @param string $demo_key   Canonical dashboard block demoKey.
 * @param int    $pattern_id Remote wcb-blocks post ID.
 * @return array|null Matched pattern array or null.
 */
function boostify_blocks_find_cached_demo_pattern( $demo_key, $pattern_id )
{
    if ( $pattern_id <= 0 ) {
        return null;
    }

    $resolved = boostify_blocks_resolve_remote_demos_cache( false );
    $demos    = $resolved['demos'] ?? array();
    if ( ! is_array( $demos ) || empty( $demos ) ) {
        return null;
    }

    if ( '' !== $demo_key && ! empty( $demos[ $demo_key ] ) && is_array( $demos[ $demo_key ] ) ) {
        foreach ( $demos[ $demo_key ] as $item ) {
            if ( absint( $item['id'] ?? 0 ) === $pattern_id ) {
                return $item;
            }
        }
    }

    foreach ( $demos as $items ) {
        if ( ! is_array( $items ) ) {
            continue;
        }
        foreach ( $items as $item ) {
            if ( absint( $item['id'] ?? 0 ) === $pattern_id ) {
                return $item;
            }
        }
    }

    return null;
}

/**
 * Detect whether rendered HTML contains meaningful visible output for previewing,
 * catching empty WooCommerce/Posts queries so the modal can fall back gracefully.
 *
 * @param string $rendered_html Rendered block HTML from do_blocks().
 * @param array  $used_blocks   Unique boostify-blocks/* slugs detected.
 * @param string $demo_key      Canonical block demoKey.
 * @return bool True when rendered preview is empty or missing dynamic items.
 */
function boostify_blocks_preview_dynamic_output_is_empty( $rendered_html, $used_blocks, $demo_key )
{
    if ( ! is_string( $rendered_html ) || '' === trim( $rendered_html ) ) {
        return true;
    }

    $uses_products = ( 'products' === $demo_key ) || in_array( 'boostify-blocks/products', $used_blocks, true );
    if ( $uses_products ) {
        if ( ! class_exists( 'WooCommerce' ) || false === strpos( $rendered_html, 'wcb-products__wrap' ) ) {
            return true;
        }
        if ( false === strpos( $rendered_html, 'wcb-products__list' ) || preg_match( '/<div\b[^>]*\bwcb-products__list\b[^>]*>\s*<\/div>/is', $rendered_html ) ) {
            return true;
        }
    }

    $uses_posts_grid = ( 'posts-grid' === $demo_key ) || in_array( 'boostify-blocks/posts-grid', $used_blocks, true );
    if ( $uses_posts_grid && false !== strpos( $rendered_html, 'wcb-posts-grid__emptyMessage' ) ) {
        return true;
    }

    $plain_text = trim( preg_replace( '/\s+/', ' ', wp_strip_all_tags( $rendered_html ) ) );
    if ( '' === $plain_text && ! preg_match( '/<(img|svg|iframe|video|canvas|input|button|textarea|select|hr)\b/i', $rendered_html ) ) {
        return true;
    }

    return false;
}

/**
 * Format a stylesheet <link> tag when the asset exists on disk, using filemtime for cache busting.
 *
 * @param string $file_path Absolute filesystem path to CSS file.
 * @param string $file_url  Public URL to CSS file.
 * @return string HTML link tag or empty string.
 */
function boostify_blocks_format_preview_css_link( $file_path, $file_url )
{
    if ( ! $file_path || ! $file_url || ! file_exists( $file_path ) ) {
        return '';
    }
    $ver = (string) ( @filemtime( $file_path ) ?: ( defined( 'BOOSTIFY_BLOCKS_VERSION' ) ? BOOSTIFY_BLOCKS_VERSION : '1.0.0' ) );
    return '<link rel="stylesheet" href="' . esc_url( add_query_arg( 'ver', $ver, $file_url ) ) . '" />' . "\n";
}

/**
 * Read active responsive tablet/desktop breakpoints cleanly from plugin settings.
 *
 * @return array{tablet:int,desktop:int}
 */
function boostify_blocks_get_preview_breakpoints()
{
    $settings = get_option( 'boostify_blocks_settings_options', array() );
    $tablet   = isset( $settings['media_tablet'] ) ? (int) floatval( $settings['media_tablet'] ) : 768;
    $desktop  = isset( $settings['media_desktop'] ) ? (int) floatval( $settings['media_desktop'] ) : 1024;
    if ( $tablet <= 0 ) {
        $tablet = 768;
    }
    if ( $desktop <= $tablet ) {
        $desktop = $tablet + 1;
    }
    return array(
        'tablet'  => $tablet,
        'desktop' => $desktop,
    );
}

/**
 * Convert viewport-height CSS units (vh/svh/dvh/lvh) to fixed pixels inside the preview iframe
 * so blocks using `min-height: 100vh` cannot create an infinite ResizeObserver expansion spiral.
 *
 * @param string $css_text CSS stylesheet or inline style string.
 * @return string Normalized CSS string.
 */
function boostify_blocks_normalize_preview_vh_units( $css_text )
{
    if ( ! is_string( $css_text ) || '' === $css_text || false === stripos( $css_text, 'vh' ) ) {
        return (string) $css_text;
    }

    return preg_replace_callback(
        '/(?<![a-zA-Z0-9_-])(\d+(?:\.\d+)?)\s*(?:s|d|l)?vh(?![a-zA-Z0-9_-])/i',
        function ( $matches ) {
            $vh = min( 140.0, max( 0.0, (float) $matches[1] ) );
            $px = (int) round( $vh * 6.8 );
            return $px . 'px';
        },
        $css_text
    );
}

/**
 * Allowlist-sanitize preview iframes so trusted HTTPS embeds (e.g. Google Maps) render
 * inside the preview modal while blocking srcdoc, dangerous schemes, and untrusted origins.
 *
 * @param string $iframe_html Raw <iframe ...>...</iframe> markup.
 * @return string Sanitized <iframe> markup or empty string if disallowed.
 */
function boostify_blocks_sanitize_preview_iframe( $iframe_html )
{
    if ( ! preg_match( '/^<iframe\b([^>]*)>/is', $iframe_html, $tag_match ) ) {
        return '';
    }

    $attrs = $tag_match[1];
    if ( ! preg_match( '/\bsrc\s*=\s*(?:"([^"]*)"|\'([^\']*)\'|([^\s>]+))/is', $attrs, $src_match ) ) {
        return '';
    }

    $raw_src = '' !== $src_match[1] ? $src_match[1] : ( isset( $src_match[2] ) && '' !== $src_match[2] ? $src_match[2] : ( $src_match[3] ?? '' ) );
    $decoded_src = trim( html_entity_decode( $raw_src, ENT_QUOTES, 'UTF-8' ) );
    $decoded_src = preg_replace( '/[\x00-\x20]+/', '', $decoded_src );
    $parts = wp_parse_url( $decoded_src );

    if ( ! is_array( $parts ) || empty( $parts['scheme'] ) || empty( $parts['host'] ) ) {
        return '';
    }
    if ( 'https' !== strtolower( $parts['scheme'] ) ) {
        return '';
    }

    $host = strtolower( $parts['host'] );
    $path = isset( $parts['path'] ) ? strtolower( $parts['path'] ) : '/';

    $is_google_maps =
        1 === preg_match( '/^(?:www\.)?maps\.google\.[a-z.]{2,}$/', $host ) ||
        ( 1 === preg_match( '/^(?:[a-z0-9-]+\.)?google\.[a-z.]{2,}$/', $host ) && 0 === strpos( $path, '/maps' ) );

    $is_trusted_embed =
        $is_google_maps ||
        in_array( $host, array( 'www.youtube.com', 'youtube.com', 'www.youtube-nocookie.com', 'player.vimeo.com', 'www.openstreetmap.org', 'openstreetmap.org' ), true );

    if ( ! $is_trusted_embed ) {
        return '';
    }

    // Remove srcdoc and inline event handlers so trusted src cannot be shadowed.
    $clean_attrs = preg_replace( '/\bsrcdoc\s*=\s*(?:"[^"]*"|\'[^\']*\'|[^\s>]+)/is', '', $attrs );
    $clean_attrs = preg_replace( '/(?<=[\s\/])on[a-z0-9_-]+\s*=\s*(?:"[^"]*"|\'[^\']*\'|[^\s>]+)/is', '', $clean_attrs );
    $clean_attrs = preg_replace( '/(\bloading=)(["\'])lazy\2/i', '$1$2eager$2', $clean_attrs );

    return '<iframe' . rtrim( $clean_attrs, " \t\n\r/" ) . '></iframe>';
}

/**
 * Normalize preview HTML: strip active XSS vectors, preserve allowlisted map/video embeds,
 * force eager loading on images/iframes, and normalize viewport units.
 *
 * @param string $rendered_html Rendered block HTML from do_blocks().
 * @return string Normalized preview HTML.
 */
function boostify_blocks_prepare_preview_rendered_html( $rendered_html )
{
    if ( ! is_string( $rendered_html ) || '' === $rendered_html ) {
        return '';
    }

    $html = $rendered_html;

    // Strip active script/object payloads from remote pattern HTML because the preview
    // iframe uses allow-same-origin for ResizeObserver measurement. Trusted block view
    // scripts are appended afterward via boostify_blocks_collect_preview_assets().
    if ( false !== stripos( $html, '<script' ) || false !== stripos( $html, '<object' ) || false !== stripos( $html, '<embed' ) || false !== stripos( $html, '<base' ) ) {
        $html = preg_replace( '#<(script|object|embed)\b[^>]*>.*?</\1>#is', '', $html );
        $html = preg_replace( '#<(script|object|embed|base)\b[^>]*/?>#is', '', $html );
    }

    if ( false !== stripos( $html, '<iframe' ) ) {
        $html = preg_replace_callback(
            '#<iframe\b[^>]*>(?:.*?</iframe>)?#is',
            function ( $match ) {
                return boostify_blocks_sanitize_preview_iframe( $match[0] );
            },
            $html
        );
    }

    if ( false !== stripos( $html, '<meta' ) ) {
        $html = preg_replace( '#<meta\b[^>]*http-equiv\s*=\s*(["\']?)\s*refresh\s*\1[^>]*>#is', '', $html );
    }

    $html = preg_replace( '/(?<=[\s\/])on[a-z0-9_-]+\s*=\s*(?:"[^"]*"|\'[^\']*\'|[^\s>]+)/is', '', $html );
    $html = preg_replace_callback(
        '/\b(href|src|action|formaction|xlink:href|poster)\s*=\s*(["\'])(.*?)\2/is',
        function ( $m ) {
            $url = html_entity_decode( trim( $m[3] ), ENT_QUOTES, 'UTF-8' );
            $url_no_ctrl = preg_replace( '/[\x00-\x20]+/', '', $url );
            if ( preg_match( '/^(?:javascript|vbscript|data\s*:\s*text\/html):/i', $url_no_ctrl ) || preg_match( '/^data\s*:\s*text\/html/i', $url_no_ctrl ) ) {
                return $m[1] . '=' . $m[2] . '#' . $m[2];
            }
            return $m[0];
        },
        $html
    );

    // Load images eagerly inside preview so height measures accurately right away.
    if ( false !== stripos( $html, 'loading=' ) ) {
        $html = preg_replace(
            '/(<img\b[^>]*\bloading=)(["\'])lazy\2/i',
            '$1$2eager$2',
            $html
        );
    }

    if ( false !== stripos( $html, 'style=' ) && false !== stripos( $html, 'vh' ) ) {
        $html = preg_replace_callback(
            '/\bstyle=(["\'])(.*?)\1/is',
            function ( $m ) {
                return 'style=' . $m[1] . boostify_blocks_normalize_preview_vh_units( $m[2] ) . $m[1];
            },
            $html
        );
    }

    return $html;
}

/**
 * Collect CSS links, inline block styles, and interactive view scripts for a standalone preview iframe.
 *
 * Uses <link> tags for large static stylesheets (HTTP-cached) and inline <style> only for per-pattern
 * dynamic CSS from WCB_Block_Helper::extract_css_from_blocks().
 *
 * @param array $blocks      Parsed Gutenberg blocks.
 * @param array $used_blocks Unique Boostify block names.
 * @param array $breakpoints Optional precomputed preview breakpoints.
 * @return array{head_html:string,footer_html:string,breakpoints:array}
 */
function boostify_blocks_collect_preview_assets( array $blocks, array $used_blocks, array $breakpoints = array() )
{
    if ( empty( $breakpoints ) ) {
        $breakpoints = boostify_blocks_get_preview_breakpoints();
    }
    $plugin_root = dirname( __DIR__, 2 ) . '/';
    $plugin_path = defined( 'BOOSTIFY_BLOCKS_PATH' ) ? BOOSTIFY_BLOCKS_PATH : $plugin_root;
    $plugin_url  = defined( 'BOOSTIFY_BLOCKS_FILE' ) ? plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) : '';
    $ver         = defined( 'BOOSTIFY_BLOCKS_VERSION' ) ? BOOSTIFY_BLOCKS_VERSION : '1.0.0';

    $links_html = '';
    if ( defined( 'ABSPATH' ) && defined( 'WPINC' ) && function_exists( 'includes_url' ) ) {
        $links_html .= boostify_blocks_format_preview_css_link(
            ABSPATH . WPINC . '/css/dist/block-library/style.min.css',
            includes_url( 'css/dist/block-library/style.min.css' )
        );
    }

    $links_html .= boostify_blocks_format_preview_css_link(
        $plugin_path . 'build/block-common-css/style-index.css',
        $plugin_url . 'build/block-common-css/style-index.css'
    );
    $links_html .= boostify_blocks_format_preview_css_link(
        $plugin_path . 'public/css/frontend.css',
        $plugin_url . 'public/css/frontend.css'
    );
    $links_html .= boostify_blocks_format_preview_css_link(
        $plugin_path . 'public/lineicons-free-basic/icon-font/lineicons.css',
        $plugin_url . 'public/lineicons-free-basic/icon-font/lineicons.css'
    );

    $loaded_slugs = array();
    foreach ( $used_blocks as $block_name ) {
        $slug = class_exists( 'WCB_Block_Helper' )
            ? WCB_Block_Helper::normalize_block_slug( $block_name )
            : basename( $block_name );
        if ( isset( $loaded_slugs[ $slug ] ) ) {
            continue;
        }
        $loaded_slugs[ $slug ] = true;
        $links_html           .= boostify_blocks_format_preview_css_link(
            $plugin_path . 'build/block-' . $slug . '/style-index.css',
            $plugin_url . 'build/block-' . $slug . '/style-index.css'
        );
    }

    $needs_swiper = in_array( 'boostify-blocks/slider-swiper', $used_blocks, true )
        || in_array( 'boostify-blocks/testimonials-swiper', $used_blocks, true );
    if ( $needs_swiper ) {
        $links_html .= boostify_blocks_format_preview_css_link(
            $plugin_path . 'public/swiper/swiper-bundle.min.css',
            $plugin_url . 'public/swiper/swiper-bundle.min.css'
        );
    }

    $inline_css = '';
    if ( function_exists( 'wp_get_global_stylesheet' ) ) {
        try {
            $global_css = wp_get_global_stylesheet( array( 'variables', 'presets', 'base-layout-styles' ) );
            if ( is_string( $global_css ) && '' !== trim( $global_css ) ) {
                $inline_css .= $global_css . "\n";
            }
        } catch ( \Throwable $e ) {
            // Non-fatal: continue without FSE global stylesheet.
        }
    }

    $theme_typo_css = '';
    if ( function_exists( 'boostify_blocks_get_theme_editor_typography_css' ) ) {
        try {
            $typo_css = boostify_blocks_get_theme_editor_typography_css();
            if ( is_string( $typo_css ) && '' !== trim( $typo_css ) ) {
                $theme_typo_css = $typo_css;
            }
        } catch ( \Throwable $e ) {
            // Non-fatal fallback typography.
        }
    }

    if ( class_exists( 'WCB_Block_Helper' ) ) {
        try {
            $dynamic_css = WCB_Block_Helper::extract_css_from_blocks( $blocks );
            if ( is_string( $dynamic_css ) && '' !== trim( $dynamic_css ) ) {
                $inline_css .= $dynamic_css . "\n";
            }
        } catch ( \Throwable $e ) {
            // Non-fatal: skip broken custom rules rather than failing preview.
        }
    }

    $inline_css = boostify_blocks_normalize_preview_vh_units( $inline_css );

    $canvas_reset_css = "
        html {
            box-sizing: border-box;
            height: auto !important;
            min-height: 0 !important;
            overflow: hidden !important;
            font-size: var(--theme-body-font-size, 14px);
        }
        *, *::before, *::after { box-sizing: inherit; }
        html, body {
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
            min-height: 0 !important;
            background: #ffffff;
            overflow: hidden !important;
        }
        :where(body, select, button, input, textarea) {
            font-family: var(--theme-body-font, Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
            font-weight: var(--theme-body-font-weight, 500);
            line-height: var(--theme-body-line-height, 28px);
            text-transform: var(--theme-body-transform, none);
            font-size: var(--theme-body-font-size, 14px);
            color: var(--theme-body-color, #474747);
        }
        .wcb-preview-root {
            display: flow-root;
            width: 100%;
            height: auto !important;
            min-height: 0 !important;
            padding: 16px 22px;
            margin: 0;
        }
        .wcb-preview-root :where(a, ins) {
            text-decoration: none;
        }
        .wcb-preview-root :where(p) {
            margin: 0 0 10px;
        }
        .wcb-preview-root :where(h1, h2, h3, h4, h5, h6) {
            margin: 15px 0;
            font-family: var(--theme-heading-font, Poppins, sans-serif);
            font-weight: var(--theme-heading-font-weight, 600);
            line-height: var(--theme-heading-line-height, 1.5);
            color: var(--theme-heading-color, #2b2b2b);
            text-transform: var(--theme-heading-transform, none);
        }
        .wcb-preview-root :where(h1) { font-size: var(--theme-h1-font-size, 48px); }
        .wcb-preview-root :where(h2) { font-size: var(--theme-h2-font-size, 36px); }
        .wcb-preview-root :where(h3) { font-size: var(--theme-h3-font-size, 30px); }
        .wcb-preview-root :where(h4) { font-size: var(--theme-h4-font-size, 28px); }
        .wcb-preview-root :where(h5) { font-size: var(--theme-h5-font-size, 26px); }
        .wcb-preview-root :where(h6) { font-size: var(--theme-h6-font-size, 18px); }
        .animate__animated {
            opacity: 1 !important;
            animation: none !important;
        }
        img, svg, video { max-width: 100%; height: auto; }
        .wcb-preview-root > :first-child { margin-block-start: 0 !important; margin-top: 0 !important; }
        .wcb-preview-root > :last-child { margin-block-end: 0 !important; margin-bottom: 0 !important; }
    ";

    $theme_vars_tag = '' !== $theme_typo_css
        ? "<style id=\"wcb-demo-theme-vars\">\n" . $theme_typo_css . "\n</style>\n"
        : '';

    $head_html = $theme_vars_tag
        . $links_html
        . "<style id=\"wcb-demo-preview-css\">\n" . $canvas_reset_css . "\n" . $inline_css . "</style>\n";

    // Build footer scripts (global configs, Swiper/Slick if needed, Interactivity modules, interaction guards).
    $footer_html = '';
    $globals_js  = '';
    if ( function_exists( 'boostify_blocks_get_layout_global_settings' ) ) {
        $globals_js .= 'window.boostify_blocks_layout_global_settings=' . wp_json_encode( boostify_blocks_get_layout_global_settings() ) . ';';
    }
    if ( function_exists( 'boostify_blocks_get_theme_defaults_data' ) ) {
        $globals_js .= 'window.BOOSTIFY_BLOCKS_THEME_DEFAULTS=' . wp_json_encode( boostify_blocks_get_theme_defaults_data() ) . ';';
    }
    $public_settings = function_exists( 'boostify_blocks_get_public_settings_for_js' )
        ? boostify_blocks_get_public_settings_for_js()
        : array();
    $globals_js .= 'window.boostify_blocks_global_variables=' . wp_json_encode( $public_settings ) . ';';
    $globals_js .= 'window.boostify_blocks_ajax_object={ajaxurl:"",nonce:""};';
    $footer_html .= '<script>' . $globals_js . '</script>' . "\n";

    if ( $needs_swiper && file_exists( $plugin_path . 'public/swiper/swiper-bundle.min.js' ) ) {
        $footer_html .= '<script src="' . esc_url( add_query_arg( 'ver', $ver, $plugin_url . 'public/swiper/swiper-bundle.min.js' ) ) . '"></script>' . "\n";
    }

    $needs_legacy_slick = in_array( 'boostify-blocks/slider', $used_blocks, true )
        || in_array( 'boostify-blocks/testimonials', $used_blocks, true );
    if ( $needs_legacy_slick && function_exists( 'includes_url' ) ) {
        $footer_html .= '<script src="' . esc_url( includes_url( 'js/jquery/jquery.min.js' ) ) . '"></script>' . "\n";
        if ( file_exists( $plugin_path . 'public/slick/slick.min.js' ) ) {
            $footer_html .= '<script src="' . esc_url( add_query_arg( 'ver', $ver, $plugin_url . 'public/slick/slick.min.js' ) ) . '"></script>' . "\n";
        }
    }

    // Selectively print WordPress Interactivity API view modules used by blocks in this pattern.
    $module_map = array(
        'boostify-blocks/tabs'                => 'public/js/tabs/boostify-blocks-tabs-view.js',
        'boostify-blocks/faq'                 => 'public/js/faq/boostify-blocks-faq-view.js',
        'boostify-blocks/accordion'           => 'public/js/accordion/boostify-blocks-accordion-view.js',
        'boostify-blocks/countdown'           => 'public/js/countdown/boostify-blocks-countdown-view.js',
        'boostify-blocks/counter'             => 'public/js/counter/boostify-blocks-counter-view.js',
        'boostify-blocks/form'                => 'public/js/form/boostify-blocks-form-view.js',
        'boostify-blocks/slider-swiper'       => 'public/js/slider-swiper/boostify-blocks-slider-swiper-view.js',
        'boostify-blocks/testimonials-swiper' => 'public/js/testimonials-swiper/boostify-blocks-testimonials-swiper-view.js',
    );

    if ( function_exists( 'wp_enqueue_script_module' ) && function_exists( 'wp_script_modules' ) ) {
        $enqueued_any = false;
        if ( function_exists( 'wp_scripts' ) ) {
            wp_scripts();
        }
        if ( function_exists( 'wp_default_script_modules' ) && ! did_action( 'wp_default_scripts' ) ) {
            wp_default_script_modules();
        }
        foreach ( $module_map as $b_name => $rel_js ) {
            if ( in_array( $b_name, $used_blocks, true ) && file_exists( $plugin_path . $rel_js ) ) {
                $handle = 'wcb-preview-' . sanitize_key( str_replace( 'boostify-blocks/', '', $b_name ) );
                wp_enqueue_script_module( $handle, $plugin_url . $rel_js, array( '@wordpress/interactivity' ), $ver );
                $enqueued_any = true;
            }
        }
        if ( $enqueued_any ) {
            $modules = wp_script_modules();
            ob_start();
            try {
                if ( method_exists( $modules, 'print_import_map' ) ) {
                    $modules->print_import_map();
                }
                if ( method_exists( $modules, 'print_script_module_data' ) ) {
                    $modules->print_script_module_data();
                }
                if ( method_exists( $modules, 'print_enqueued_script_modules' ) ) {
                    $modules->print_enqueued_script_modules();
                }
                $footer_html .= ob_get_clean();
            } catch ( \Throwable $e ) {
                ob_end_clean();
            }
        }
    }

    // Prevent external navigation or form submission inside demo modal preview.
    $footer_html .= "
        <script>
        (function(){
            document.addEventListener('click', function(e){
                var link = e.target && e.target.closest ? e.target.closest('a[href]') : null;
                if (!link) return;
                if (link.closest('[role=\"tab\"], .wcb-accordion-item__trigger, .wcb-faq-child__trigger, .swiper-button-prev, .swiper-button-next, .swiper-pagination-bullet')) return;
                e.preventDefault();
            }, true);
            document.addEventListener('submit', function(e){ e.preventDefault(); }, true);
        })();
        </script>
    ";

    return array(
        'head_html'   => $head_html,
        'footer_html' => $footer_html,
        'breakpoints' => $breakpoints,
    );
}

/**
 * Build a safe, self-contained HTML preview document from pattern Gutenberg contentOrigin.
 *
 * Guards output buffer depth and catches any Throwable so broken third-party callbacks
 * or empty dynamic blocks degrade cleanly to image/illustration fallbacks instead of crashing admin.
 *
 * @param string $content_origin Saved Gutenberg block markup of remote pattern.
 * @param string $demo_key       Canonical dashboard block demoKey.
 * @return array{html:string,hasContent:bool,reason:string,breakpoints:array}
 */
function boostify_blocks_build_demo_preview_document( $content_origin, $demo_key = '' )
{
    $breakpoints = boostify_blocks_get_preview_breakpoints();

    if ( ! is_string( $content_origin ) || '' === trim( $content_origin ) ) {
        return array(
            'html'        => '',
            'hasContent'  => false,
            'reason'      => 'empty_markup',
            'breakpoints' => $breakpoints,
        );
    }

    // Protect memory/PCRE against abnormally huge nodes (> 512 KB).
    if ( strlen( $content_origin ) > 524288 ) {
        return array(
            'html'        => '',
            'hasContent'  => false,
            'reason'      => 'markup_too_large',
            'breakpoints' => $breakpoints,
        );
    }

    if ( ! function_exists( 'parse_blocks' ) || ! function_exists( 'do_blocks' ) ) {
        return array(
            'html'        => '',
            'hasContent'  => false,
            'reason'      => 'wp_blocks_unavailable',
            'breakpoints' => $breakpoints,
        );
    }

    $ob_level    = ob_get_level();
    $rendered    = '';
    $blocks      = array();
    $used_blocks = array();

    global $post;
    $saved_post = $post;

    try {
        $blocks      = parse_blocks( $content_origin );
        $used_blocks = class_exists( 'WCB_Block_Helper' )
            ? WCB_Block_Helper::get_used_boostify_block_names( $blocks )
            : array();
        $rendered    = do_blocks( $content_origin );
    } catch ( \Throwable $e ) {
        return array(
            'html'        => '',
            'hasContent'  => false,
            'reason'      => 'render_exception',
            'breakpoints' => $breakpoints,
        );
    } finally {
        while ( ob_get_level() > $ob_level ) {
            ob_end_clean();
        }
        $post = $saved_post;
        if ( function_exists( 'wp_reset_postdata' ) ) {
            wp_reset_postdata();
        }
    }

    if ( boostify_blocks_preview_dynamic_output_is_empty( $rendered, $used_blocks, $demo_key ) ) {
        return array(
            'html'        => '',
            'hasContent'  => false,
            'reason'      => 'empty_dynamic_output',
            'breakpoints' => $breakpoints,
        );
    }

    $assets   = boostify_blocks_collect_preview_assets( $blocks, $used_blocks, $breakpoints );
    $rendered = boostify_blocks_prepare_preview_rendered_html( $rendered );
    $charset  = function_exists( 'get_bloginfo' ) ? get_bloginfo( 'charset' ) : 'UTF-8';
    $doc_html = "<!DOCTYPE html>\n"
        . "<html lang=\"en\">\n"
        . "<head>\n"
        . "<meta charset=\"" . esc_attr( $charset ) . "\" />\n"
        . "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n"
        . $assets['head_html']
        . "</head>\n"
        . "<body>\n"
        . "<div class=\"wcb-preview-root is-layout-flow\">\n"
        . $rendered . "\n"
        . "</div>\n"
        . $assets['footer_html']
        . "</body>\n"
        . "</html>";

    return array(
        'html'        => $doc_html,
        'hasContent'  => true,
        'reason'      => '',
        'breakpoints' => $assets['breakpoints'],
    );
}

/**
 * AJAX handler for rendering an isolated local live preview document from cached pattern contentOrigin.
 */
add_action( 'wp_ajax_boostify_blocks_render_demo_preview', 'boostify_blocks_ajax_render_demo_preview' );
function boostify_blocks_ajax_render_demo_preview()
{
    boostify_blocks_verify_dashboard_ajax_request();

    $demo_key   = isset( $_POST['demoKey'] ) ? sanitize_title( wp_unslash( $_POST['demoKey'] ) ) : '';
    $pattern_id = isset( $_POST['patternId'] ) ? absint( $_POST['patternId'] ) : 0;

    $pattern = boostify_blocks_find_cached_demo_pattern( $demo_key, $pattern_id );
    if ( ! is_array( $pattern ) || empty( $pattern['content'] ) ) {
        wp_send_json_success(
            array(
                'html'        => '',
                'hasContent'  => false,
                'reason'      => 'pattern_not_found',
                'breakpoints' => boostify_blocks_get_preview_breakpoints(),
            )
        );
    }

    $preview = boostify_blocks_build_demo_preview_document( $pattern['content'], $demo_key );
    wp_send_json_success( $preview );
}
