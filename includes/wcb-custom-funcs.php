<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
// Debug helpers removed for production safety.
    /**
     * Recursively sanitize an array of data.
     *
     * @param array $data The data to sanitize.
     * @return array The sanitized data.
     */
    function boostify_blocks_sanitize_array( $data ) {
        if ( ! is_array( $data ) ) {
            return sanitize_text_field( $data );
        }
        $sanitized = array();
        foreach ( $data as $key => $value ) {
            $sanitized_key = sanitize_text_field( $key );
            if ( is_array( $value ) ) {
                $sanitized[ $sanitized_key ] = boostify_blocks_sanitize_array( $value );
            } else {
                $sanitized[ $sanitized_key ] = sanitize_text_field( $value );
            }
        }
        return $sanitized;
    }

// 
    function boostify_blocks_get_block_type_list()
    {
        $blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
        $boostify_block_list = [];
        foreach ($blocks as $key => $value) {
            $pos = strpos($key, 'wcb/');
            if ($pos === 0) {
                $boostify_block_list[] = [
                    'name' => $value->name,
                    'title' => $value->title,
                    'category' => $value->category,
                    'icon' => $value->icon,
                    'parent' => $value->parent,
                    'description' => $value->description,
                ];
            }
        }
        return $boostify_block_list;
    };

// 
    function boostify_blocks_get_block_name_enable_init()
    {
        $blocks = boostify_blocks_get_block_type_list();
        $boostify_block_name = [];
        foreach ($blocks as $key => $value) {
            $boostify_block_name[$value['name']] = 'enabled';
        }

        return $boostify_block_name;
    };

//
    function boostify_blocks_get_default_blocks_settings()
    {
        return [
            'media_tablet'              => '768px',
            'media_desktop'             => '1024px',
            'reCAPTCHA_v3_site_key'     => '',
            'reCAPTCHA_v3_secret_key'   => '',
            'reCAPTCHA_v2_site_key'     => '',
            'reCAPTCHA_v2_secret_key'   => '',
            'defaultContentWidth'       => '',
            'containerPadding'          => '10px',
            'enableTemplatesButton'     => 'true',
            'enableCopyPasteStyles'     => 'true',
            // new 1
            'customColorPallete'        => [
                ["name" => "white", "color" => "#fff"],
                ["name" => "black", "color" => "#000"],
                ["name" => "blue", "color" => "#00f"],
            ],
        ];
    }

// 
    function boostify_blocks_pagination_bar($the_query, $attrPagination)
    {
        $nextPreIcons =  [
            "none" => 'None',
            "arrow" => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16px" height="16px">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>',
            "chevron" => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16px" height="16px">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>',
            "chevron-double" => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16px" height="16px"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg>',
        ];

        $icon =  $nextPreIcons[$attrPagination['iconName'] ?? "arrow"] ?? "";
        if ($icon ===  "None") {
            $icon = "";
        }

        $nextText =  $attrPagination['nextText'] ?? "";
        $previousText =  $attrPagination['previousText'] ?? "";

        $nextHtml = !empty($nextText) ? '<span>' . esc_html($nextText) . '</span>' . $icon : $icon;
        $prevHtml = !empty($previousText) ?  $icon . ' <span>' . esc_html($previousText) . '</span>'  : $icon;

        $max_page = $attrPagination['pageLimit'] ?? 0;
        $total         = !$max_page || $max_page > $the_query->max_num_pages ? $the_query->max_num_pages : $max_page;

        $big = 999999999; // need an unlikely integer
        $current_page = max(1, get_query_var('paged'));
        echo wp_kses_post(paginate_links(array(
            'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
            'format' => '?paged=%#%',
            'current' => $current_page,
            'total' => $total,
            'next_text' => $nextHtml,
            'prev_text' => $prevHtml
        )));
    }

// 
    function boostify_blocks_is_enabled($variable)
    {
        if (!isset($variable)) return null;
        return filter_var($variable, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
    }


// 
    function boostify_blocks_get_layout_global_settings()
    {
        $boostify_layout_global_settings = wp_get_global_settings(['layout']);
        // IF USING WOOSTIFYBLOCKS THEME
        if (class_exists('Woostify_Customizer')) {
            $customizer = new Woostify_Customizer();
            $options = $customizer->woostify_get_woostify_options();
            // container_width
            if (!empty($options['container_width'] ?? '')) {
                $boostify_layout_global_settings['contentSize'] =  $options['container_width'] . "px";
                $boostify_layout_global_settings['contentSizeOfWoostify'] =  true;
            }
        }

        return $boostify_layout_global_settings;
    }
