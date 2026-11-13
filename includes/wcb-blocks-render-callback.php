<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
//============================================= block tabs & tab-child ===============================================================
function &boostify_blocks_tabs_render_stack()
{
    static $stack = array();
    return $stack;
}

add_filter('pre_render_block', function ($pre_render, $parsed_block) {
    if (null !== $pre_render || empty($parsed_block['blockName']) || 'boostify-blocks/tabs' !== $parsed_block['blockName']) {
        return $pre_render;
    }

    $attrs        = is_array($parsed_block['attrs'] ?? null) ? $parsed_block['attrs'] : array();
    $titles       = is_array($attrs['titles'] ?? null) ? $attrs['titles'] : array();
    $titles_count = !empty($titles) ? count($titles) : 3;
    $active_index = isset($attrs['activeTabIndex']) ? (int) $attrs['activeTabIndex'] : 0;

    $init_open = $attrs['general_tabTitle']['initOpenTab'] ?? '';
    if (is_string($init_open) && preg_match('/^tab(\d+)$/', $init_open, $matches)) {
        $parsed_tab = (int) $matches[1] - 1;
        if ($parsed_tab >= 0 && $parsed_tab < $titles_count) {
            $active_index = $parsed_tab;
        }
    }

    if ($active_index < 0 || $active_index >= $titles_count) {
        $active_index = 0;
    }

    $stack   = &boostify_blocks_tabs_render_stack();
    $stack[] = array(
        'unique_id'    => isset($attrs['uniqueId']) ? (string) $attrs['uniqueId'] : '',
        'active_index' => $active_index,
        'next_index'   => 0,
    );

    return $pre_render;
}, 99, 2);

function boostify_blocks_block_tab_child_render_callback($attributes, $content)
{
    $stack = &boostify_blocks_tabs_render_stack();
    if (empty($stack)) {
        return $content;
    }

    $top_idx      = count($stack) - 1;
    $tab_index    = $stack[$top_idx]['next_index']++;
    $active_index = $stack[$top_idx]['active_index'];
    $parent_uid   = $stack[$top_idx]['unique_id'];

    if (class_exists('WP_HTML_Tag_Processor')) {
        $tags = new WP_HTML_Tag_Processor($content);
        if ($tags->next_tag(array('class_name' => 'wcb-tab-child__wrap'))) {
            $tags->set_attribute('role', 'tabpanel');
            if ('' !== $parent_uid) {
                $tags->set_attribute('id', 'tabpanel-' . $parent_uid . '-' . $tab_index);
                $tags->set_attribute('aria-labelledby', 'tab-' . $parent_uid . '-' . $tab_index);
            }
            $tags->set_attribute('data-wp-context', wp_json_encode(array('tabIndex' => $tab_index)));
            $tags->set_attribute('data-wp-watch', 'callbacks.syncActiveTab');
            $tags->set_attribute('data-wp-bind--hidden', '!context.isActiveTab');
            if ($tab_index !== $active_index) {
                $tags->set_attribute('hidden', true);
            } else {
                $tags->remove_attribute('hidden');
            }
            $content = $tags->get_updated_html();
        }
    }

    return $content;
}

function boostify_blocks_block_tabs_render_callback($attributes, $content)
{
    $stack = &boostify_blocks_tabs_render_stack();
    if (!empty($stack)) {
        array_pop($stack);
    }

    $gg                   = is_array($attributes['general_general'] ?? null) ? $attributes['general_general'] : array();
    $layout               = $gg['layout'] ?? '';
    $style                = $gg['style'] ?? '';
    $is_vertical_layout   = ('grid' === $layout || 'verticalStyle1' === $style || 'verticalStyle2' === $style);
    $is_vertical_style2   = ($is_vertical_layout && 'verticalStyle2' === $style);
    $is_horizontal_style2 = (!$is_vertical_layout && 'horizontalStyle2' === $style);

    $layout_classes = array();
    if ($is_vertical_layout) {
        $layout_classes[] = 'wcb-tabs--vertical';
    }
    if ($is_vertical_style2) {
        $layout_classes[] = 'wcb-tabs--verticalStyle2';
    }
    if ($is_horizontal_style2) {
        $layout_classes[] = 'wcb-tabs--horizontalStyle2';
    }

    if (!empty($layout_classes) && class_exists('WP_HTML_Tag_Processor')) {
        $tags = new WP_HTML_Tag_Processor($content);
        if ($tags->next_tag(array('class_name' => 'wcb-tabs__wrap'))) {
            foreach ($layout_classes as $layout_class) {
                $tags->add_class($layout_class);
            }
            $content = $tags->get_updated_html();
        }
    }

    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_map_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_image_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_icon_box_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_counter_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}


//============================================= block 1 ===============================================================
function boostify_blocks_block_team_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_faq_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block accordion ===============================================================
function boostify_blocks_block_accordion_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}
//============================================= block 1 ===============================================================
function boostify_blocks_block_buttons_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();

    return $content;
}
//============================================= block 1 ===============================================================
function boostify_blocks_block_button_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();

    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_icon_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();

    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_testimonials_swiper_render_callback($attributes, $content)
{
    if (!is_admin()) {
        // Enqueue Swiper's bundled core + navigation/pagination module
        // styles/script - same vendored bundle and handle the Slider
        // (Swiper) block uses (boostify_blocks_block_slider_swiper_render_callback()
        // above); wp_enqueue_style()/wp_enqueue_script() dedupe by handle,
        // so enqueuing it again here is safe whether or not that block is
        // also on the page.
        wp_enqueue_style( 'boostify-blocks-swiper', plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/swiper/swiper-bundle.min.css', array(), BOOSTIFY_BLOCKS_VERSION );
        wp_enqueue_script( 'boostify-blocks-swiper', plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/swiper/swiper-bundle.min.js', array(), BOOSTIFY_BLOCKS_VERSION, true );
    }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_form_render_callback($attributes, $content)
// NOTE: reCAPTCHA keys may not be set yet; update after configuration.
// This section requires JS for AJAX and reCAPTCHA functionality.
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();

    $boostify_blocks_settings_options = get_option('boostify_blocks_settings_options');

    // Enqueue reCAPTCHA scripts properly
    if (boolval($attributes['general_gg_recaptcha']['enableReCaptcha'] ?? true)) {
        $recaptcha_version = $attributes['general_gg_recaptcha']['version'] ?? 'v2';

        if ($recaptcha_version === 'v2') {
            // phpcs:ignore PluginCheck.CodeAnalysis.EnqueuedResourceOffloading.OffloadedContent -- Google reCAPTCHA API must be loaded from Google's servers.
            wp_enqueue_script(
                'boostify-blocks-recaptcha-v2',
                'https://www.google.com/recaptcha/api.js',
                array(),
                // phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion -- External Google reCAPTCHA script, version managed by Google.
                null,
                array(
                    'strategy' => 'defer',
                    'in_footer' => true,
                )
            );
        } elseif ($recaptcha_version === 'v3') {
            $site_key = $boostify_blocks_settings_options['reCAPTCHA_v3_site_key'] ?? '';
            // phpcs:ignore PluginCheck.CodeAnalysis.EnqueuedResourceOffloading.OffloadedContent -- Google reCAPTCHA API must be loaded from Google's servers.
            wp_enqueue_script(
                'boostify-blocks-recaptcha-v3',
                'https://www.google.com/recaptcha/api.js?render=' . esc_attr($site_key),
                array(),
                // phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion -- External Google reCAPTCHA script, version managed by Google.
                null,
                array(
                    'strategy' => 'defer',
                    'in_footer' => true,
                )
            );
        }
    }

    return wp_kses_stripslashes($content);
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_heading_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_container_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_slider_swiper_render_callback($attributes, $content)
{
    if (!is_admin()) {
        // Enqueue Swiper's bundled core + navigation/pagination module styles/script.
        // Vendored the same way public/slick/* is for the original Slider block; the
        // classic script below exposes a global `Swiper`, which the Interactivity
        // store (public/js/slider-swiper/boostify-blocks-slider-swiper-view.js,
        // enqueued as a script module in wcb-enqueue-scripts.php) reads from
        // `window.Swiper`. Module scripts always run after classic scripts have
        // finished executing, so load order between the two is safe.
        wp_enqueue_style( 'boostify-blocks-swiper', plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/swiper/swiper-bundle.min.css', array(), BOOSTIFY_BLOCKS_VERSION );
        wp_enqueue_script( 'boostify-blocks-swiper', plugin_dir_url( BOOSTIFY_BLOCKS_FILE ) . 'public/swiper/swiper-bundle.min.js', array(), BOOSTIFY_BLOCKS_VERSION, true );
    }
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

if (!function_exists('boostify_blocks_enqueue_script_block_commoncss_frontend_styles')) :
    function boostify_blocks_enqueue_script_block_commoncss_frontend_styles($deps = ['wp-element', 'jquery', 'boostify-blocks-slicklib'])
    {
        if (!is_admin()) {
            $asset     = require BOOSTIFY_BLOCKS_PATH . 'build/block-common-css/FrontendStyles.asset.php';
            $asset_ver = $asset['version'] ?? BOOSTIFY_BLOCKS_VERSION;
            wp_enqueue_script('boostify-blocks-commoncss-frontend', plugin_dir_url(BOOSTIFY_BLOCKS_FILE) . 'build/block-common-css/FrontendStyles.js', $deps, $asset_ver, true);

            // Signal the JS whether CSS was already loaded (from static file or server-side inline <head>).
            // When CSS is loaded, JS skips emotion <Global> rendering to completely eliminate FOUC,
            // while still executing interactive init functions (carousels, animations, counters).
            if (class_exists('WCB_Post_Assets')) {
                $assets      = WCB_Post_Assets::instance();
                $is_ready    = $assets->is_file_css_enqueued();
                $skip_inline = apply_filters('boostify_blocks_skip_inline_styles', false);
                wp_add_inline_script(
                    'boostify-blocks-commoncss-frontend',
                    'window.boostify_blocks_file_generation_enabled = ' . ($assets->is_file_generation_enabled() ? 'true' : 'false') . ';' .
                    'window.boostify_blocks_skip_inline_styles = ' . (($skip_inline || $assets->is_file_generation_enabled()) ? 'true' : 'false') . ';' .
                    'window.boostify_blocks_file_css_loaded = ' . ($is_ready ? 'true' : 'false') . ';' .
                    'window.boostify_blocks_fallback_css = ' . ($assets->is_fallback_css() ? 'true' : 'false') . ';' .
                    'window.boostify_blocks_post_id = ' . intval(get_queried_object_id()) . ';' .
                    'window.boostify_blocks_ajax_object = ' . wp_json_encode(array(
                        'ajaxurl' => admin_url('admin-ajax.php'),
                        'nonce'   => wp_create_nonce('boostifyblocks_dashboard_settings_nonce'),
                    )) . ';',
                    'before'
                );
            }

            // Expose theme defaults on the frontend so JS helpers can read them.
            static $boostify_blocks_theme_defaults_enqueued = false;
            if (!$boostify_blocks_theme_defaults_enqueued && function_exists('boostify_blocks_get_theme_defaults_data')) {
                $data = boostify_blocks_get_theme_defaults_data();
                wp_add_inline_script(
                    'boostify-blocks-commoncss-frontend',
                    'window.BOOSTIFY_BLOCKS_THEME_DEFAULTS=' . wp_json_encode($data) . ';',
                    'before'
                );
                $boostify_blocks_theme_defaults_enqueued = true;
            }
        }
    }
endif;

//============================================= block 1 ===============================================================
function boostify_blocks_block_countdown_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_icon_list_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}

//============================================= block 1 ===============================================================
function boostify_blocks_block_icon_child_render_callback($attributes, $content)
{
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}
