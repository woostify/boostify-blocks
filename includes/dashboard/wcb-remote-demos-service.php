<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Resolve canonical dashboard demo keys from a tag/category slug or block slug.
 *
 * @param string $raw_slug Raw taxonomy slug, name, or block slug.
 * @return string|null Canonical demoKey matching dashboard BLOCK_META demoSlug, or null.
 */
function boostify_blocks_resolve_demo_block_key( $raw_slug )
{
    $key = sanitize_title( (string) $raw_slug );
    if ( '' === $key ) {
        return null;
    }

    $aliases = array(
        'container'           => 'container',
        'heading'             => 'heading',
        'posts-grid'          => 'posts-grid',
        'post-grid'           => 'posts-grid',
        'posts'               => 'posts-grid',
        'products'            => 'products',
        'product'             => 'products',
        'buttons'             => 'buttons',
        'button'              => 'buttons',
        'faq'                 => 'faq',
        'team'                => 'team',
        'icon-box'            => 'icon-box',
        'info-box'            => 'icon-box',
        'info-boxes'          => 'icon-box',
        'icon-list'           => 'icon-list',
        'form'                => 'form',
        'contact'             => 'form',
        'newsletter'          => 'form',
        'testimonials'        => 'testimonials',
        'testimonial'         => 'testimonials',
        'testimonials-swiper' => 'testimonials',
        'countdown'           => 'countdown',
        'counter'             => 'counter',
        'image'               => 'image',
        'google-maps'         => 'google-maps',
        'google-map'          => 'google-maps',
        'map'                 => 'google-maps',
        'maps'                => 'google-maps',
        'icon'                => 'icon',
        'boostify-icon'       => 'icon',
        'slider'              => 'slider',
        'slider-swiper'       => 'slider',
        'accordion'           => 'accordion',
        'tabs'                => 'tabs',
        'tab'                 => 'tabs',
        'display-conditions'  => 'display-conditions',
        'display-condition'   => 'display-conditions',
        'popup'               => 'popup',
        'pricing'             => 'pricing',
        'pricing-table'       => 'pricing',
        'mega-menu'           => 'mega-menu',
        'dynamic'             => 'dynamic',
        'dynamic-content'     => 'dynamic',
    );

    return $aliases[ $key ] ?? null;
}

/**
 * Return per-block demo cap, bounded safely to keep payloads and transients fast.
 *
 * @return int Max demos kept per block key.
 */
function boostify_blocks_get_demo_per_block_limit()
{
    $limit = absint( apply_filters( 'boostify_blocks_demo_per_block_limit', 12 ) );
    return max( 1, min( 50, $limit ) );
}

/**
 * Sort, deduplicate by post ID, and trim a single demoKey bucket to the configured cap.
 *
 * Keeps internal `_priority` when `$strip_priority` is false so subsequent pages can merge accurately.
 *
 * @param array $items          List of candidate demo entries.
 * @param int   $limit          Max items to keep per block.
 * @param bool  $strip_priority Whether to remove `_priority` from entries.
 * @return array Finalized/trimmed list for one block key.
 */
function boostify_blocks_rank_demo_bucket( $items, $limit, $strip_priority = false )
{
    $by_id = array();
    foreach ( $items as $item ) {
        $post_id = absint( $item['id'] ?? 0 );
        $dedup_k = $post_id > 0 ? 'id_' . $post_id : 'u_' . md5( ( $item['title'] ?? '' ) . '|' . ( $item['imageUrl'] ?? '' ) );
        if ( ! isset( $by_id[ $dedup_k ] ) || ( $item['_priority'] ?? 99 ) < ( $by_id[ $dedup_k ]['_priority'] ?? 99 ) ) {
            $by_id[ $dedup_k ] = $item;
        }
    }

    $ranked = array_values( $by_id );
    usort(
        $ranked,
        function ( $a, $b ) {
            $pa = $a['_priority'] ?? 99;
            $pb = $b['_priority'] ?? 99;
            if ( $pa !== $pb ) {
                return $pa <=> $pb;
            }
            return ( $b['id'] ?? 0 ) <=> ( $a['id'] ?? 0 );
        }
    );

    $ranked = array_slice( $ranked, 0, $limit );
    if ( $strip_priority ) {
        $ranked = array_map(
            function ( $item ) {
                unset( $item['_priority'] );
                return $item;
            },
            $ranked
        );
    }

    return $ranked;
}

/**
 * Merge mapped candidates from one page into the multi-page accumulator bucket,
 * keeping memory bounded at O(blocks * limit) across arbitrarily many remote pages.
 *
 * @param array $bucket Accumulator map passed by reference.
 * @param array $nodes  GraphQL wcbBlocks nodes from current page.
 * @param int   $limit  Max demos retained per block.
 * @return void
 */
function boostify_blocks_merge_remote_demos_page( array &$bucket, array $nodes, $limit )
{
    $page_grouped = boostify_blocks_map_remote_demos_from_nodes( $nodes, $limit, true );
    foreach ( $page_grouped as $demo_key => $items ) {
        $merged = isset( $bucket[ $demo_key ] ) ? array_merge( $bucket[ $demo_key ], $items ) : $items;
        $bucket[ $demo_key ] = boostify_blocks_rank_demo_bucket( $merged, $limit, false );
    }
}

/**
 * Strip internal sorting metadata from an accumulated demo bucket.
 *
 * @param array $bucket Accumulated map of demoKey => ranked items with `_priority`.
 * @param int   $limit  Max demos retained per block.
 * @return array Clean demo map ready for transient caching and JSON output.
 */
function boostify_blocks_finalize_remote_demos_map( array $bucket, $limit )
{
    $final = array();
    foreach ( $bucket as $demo_key => $items ) {
        $final[ $demo_key ] = boostify_blocks_rank_demo_bucket( $items, $limit, true );
    }
    return $final;
}

/**
 * Map GraphQL wcbBlocks nodes into a compact demo map indexed by canonical block demoKey.
 *
 * Priority order per block:
 * 1 = explicit wcb-blocks-tag match (matches all blocks including container/heading/buttons/image & upcoming blocks)
 * 2 = wcb-blocks-cat match
 * 3 = block usage detected in contentOrigin for feature blocks (excludes generic layout wrappers)
 *
 * @param array    $nodes           List of GraphQL wcbBlocks node arrays.
 * @param int|null $per_block_limit Optional max items per block (defaults to filterable cap).
 * @param bool     $keep_priority   Preserve internal `_priority` for multi-page incremental merging.
 * @return array Map of demoKey => list of compact demo entries.
 */
function boostify_blocks_map_remote_demos_from_nodes( $nodes, $per_block_limit = null, $keep_priority = false )
{
    $generic_wrapper_keys = array( 'container', 'heading', 'buttons', 'image' );
    $limit   = null !== $per_block_limit ? max( 1, absint( $per_block_limit ) ) : boostify_blocks_get_demo_per_block_limit();
    $grouped = array();

    foreach ( $nodes as $node ) {
        if ( ! is_array( $node ) ) {
            continue;
        }

        $image_url = esc_url_raw( $node['featuredImage']['node']['sourceUrl'] ?? '' );
        if ( '' === $image_url ) {
            continue;
        }

        $post_id = absint( $node['databaseId'] ?? 0 );
        $title   = sanitize_text_field( $node['title'] ?? '' );
        $link    = esc_url_raw( $node['link'] ?? '' );

        $category_names = array();
        $cat_edges = $node['wcbBlocksCategories']['edges'] ?? array();
        if ( is_array( $cat_edges ) ) {
            foreach ( $cat_edges as $cat_edge ) {
                if ( ! empty( $cat_edge['node']['name'] ) ) {
                    $category_names[] = sanitize_text_field( $cat_edge['node']['name'] );
                }
            }
        }
        $primary_category = ! empty( $category_names ) ? $category_names[0] : '';

        // Track best (lowest) priority per block key for this node.
        $matched_keys = array();
        $register_match = function ( $demo_key, $priority, $source_type ) use ( &$matched_keys ) {
            if ( ! $demo_key ) {
                return;
            }
            if ( ! isset( $matched_keys[ $demo_key ] ) || $priority < $matched_keys[ $demo_key ]['priority'] ) {
                $matched_keys[ $demo_key ] = array(
                    'priority'   => $priority,
                    'sourceType' => $source_type,
                );
            }
        };

        // 1. Explicit wcb-blocks-tag matches (highest priority)
        $tag_edges = $node['wcbBlocksTags']['edges'] ?? array();
        if ( is_array( $tag_edges ) ) {
            foreach ( $tag_edges as $tag_edge ) {
                $tag_node = $tag_edge['node'] ?? array();
                $resolved = boostify_blocks_resolve_demo_block_key( $tag_node['slug'] ?? '' );
                if ( ! $resolved ) {
                    $resolved = boostify_blocks_resolve_demo_block_key( $tag_node['name'] ?? '' );
                }
                $register_match( $resolved, 1, 'tag' );
            }
        }

        // 2. Category matches
        if ( is_array( $cat_edges ) ) {
            foreach ( $cat_edges as $cat_edge ) {
                $cat_node = $cat_edge['node'] ?? array();
                $resolved = boostify_blocks_resolve_demo_block_key( $cat_node['slug'] ?? '' );
                if ( ! $resolved ) {
                    $resolved = boostify_blocks_resolve_demo_block_key( $cat_node['name'] ?? '' );
                }
                $register_match( $resolved, 2, 'category' );
            }
        }

        // 3. Content block markup detection (for specialty blocks, avoids generic wrapper noise)
        $content_origin = is_string( $node['contentOrigin'] ?? null ) ? $node['contentOrigin'] : '';
        if ( '' !== $content_origin && preg_match_all( '/<!--\s+wp:boostify-blocks\/([a-z0-9-]+)/', $content_origin, $matches ) ) {
            foreach ( array_unique( $matches[1] ) as $block_slug ) {
                $resolved = boostify_blocks_resolve_demo_block_key( $block_slug );
                if ( $resolved && ! in_array( $resolved, $generic_wrapper_keys, true ) ) {
                    $register_match( $resolved, 3, 'content' );
                }
            }
        }

        foreach ( $matched_keys as $demo_key => $match_info ) {
            if ( ! isset( $grouped[ $demo_key ] ) ) {
                $grouped[ $demo_key ] = array();
            }
            $grouped[ $demo_key ][] = array(
                'id'         => $post_id,
                'title'      => $title,
                'imageUrl'   => $image_url,
                'link'       => $link,
                'category'   => $primary_category,
                'sourceType' => $match_info['sourceType'],
                'content'    => trim( $content_origin ),
                '_priority'  => $match_info['priority'],
            );
        }
    }

    // Sort by explicit tag priority first, then newest databaseId, and cap per block.
    foreach ( $grouped as $demo_key => $items ) {
        $grouped[ $demo_key ] = boostify_blocks_rank_demo_bucket( $items, $limit, ! $keep_priority );
    }

    return $grouped;
}

/**
 * Fetch published wcb-blocks items from boostifyblocks.com GraphQL endpoint.
 *
 * Uses incremental per-page merging and a bounded time budget so large remote
 * template libraries stay fast and never discard already-fetched pages on timeout.
 *
 * @return array{ok:bool,demos:array,partial:bool,totalFetched:int}
 */
function boostify_blocks_fetch_remote_block_demos()
{
    $graphql_url      = apply_filters( 'boostify_blocks_demo_graphql_url', 'https://boostifyblocks.com/graphql' );
    $per_block_limit  = boostify_blocks_get_demo_per_block_limit();
    $max_pages        = max( 1, min( 20, absint( apply_filters( 'boostify_blocks_demo_fetch_max_pages', 10 ) ) ) );
    $per_page_timeout = 6;
    $time_budget      = 12.0;
    $started_at       = microtime( true );

    $query = 'query BoostifyDashboardDemos($after: String) {
        wcbBlocks(where: { status: PUBLISH }, first: 50, after: $after) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                node {
                    databaseId
                    title
                    link
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                    wcbBlocksCategories {
                        edges {
                            node {
                                name
                                slug
                            }
                        }
                    }
                    wcbBlocksTags {
                        edges {
                            node {
                                name
                                slug
                            }
                        }
                    }
                    contentOrigin
                }
            }
        }
    }';

    $bucket        = array();
    $after         = null;
    $pages_loaded  = 0;
    $total_fetched = 0;
    $partial       = false;

    for ( $page = 0; $page < $max_pages; $page++ ) {
        if ( $page > 0 && ( microtime( true ) - $started_at ) >= $time_budget ) {
            $partial = true;
            break;
        }

        $payload = array(
            'query'     => $query,
            'variables' => array(
                'after' => $after,
            ),
        );

        $response = wp_remote_post(
            $graphql_url,
            array(
                'timeout' => $per_page_timeout,
                'headers' => array(
                    'Content-Type' => 'application/json',
                    'Accept'       => 'application/json',
                ),
                'body'    => wp_json_encode( $payload ),
            )
        );

        $page_failed = false;
        if ( is_wp_error( $response ) ) {
            $page_failed = true;
        } else {
            $code = wp_remote_retrieve_response_code( $response );
            if ( $code < 200 || $code >= 300 ) {
                $page_failed = true;
            }
        }

        $decoded = $page_failed ? null : json_decode( wp_remote_retrieve_body( $response ), true );
        unset( $response );

        if ( $page_failed || ! is_array( $decoded ) || ! isset( $decoded['data']['wcbBlocks']['edges'] ) || ! is_array( $decoded['data']['wcbBlocks']['edges'] ) ) {
            if ( $pages_loaded > 0 ) {
                // Keep partial pages already loaded instead of discarding everything.
                $partial = true;
                break;
            }
            return array(
                'ok'           => false,
                'demos'        => array(),
                'partial'      => false,
                'totalFetched' => 0,
            );
        }

        $page_nodes = array();
        foreach ( $decoded['data']['wcbBlocks']['edges'] as $edge ) {
            if ( isset( $edge['node'] ) && is_array( $edge['node'] ) ) {
                $page_nodes[] = $edge['node'];
            }
        }

        $page_info     = $decoded['data']['wcbBlocks']['pageInfo'] ?? array();
        $has_next_page = ! empty( $page_info['hasNextPage'] );
        $end_cursor    = $page_info['endCursor'] ?? '';
        unset( $decoded );

        $total_fetched += count( $page_nodes );
        $pages_loaded++;

        boostify_blocks_merge_remote_demos_page( $bucket, $page_nodes, $per_block_limit );
        unset( $page_nodes );

        if ( ! $has_next_page || '' === $end_cursor ) {
            break;
        }

        if ( ( $page + 1 ) === $max_pages ) {
            $partial = true;
            break;
        }

        $after = $end_cursor;
    }

    return array(
        'ok'           => true,
        'demos'        => boostify_blocks_finalize_remote_demos_map( $bucket, $per_block_limit ),
        'partial'      => $partial,
        'totalFetched' => $total_fetched,
    );
}

/**
 * Shared cache/backoff resolver for remote block demo patterns.
 *
 * @param bool $force_refresh Skip transient & backoff caches when true.
 * @return array{demos:array,cached:bool,partial:bool,remoteError:bool,backoff:bool,totalFetched:int}
 */
function boostify_blocks_resolve_remote_demos_cache( $force_refresh = false )
{
    $transient_key = 'boostify_blocks_remote_demos_v2';
    $backoff_key   = 'boostify_blocks_remote_demos_backoff_v2';

    if ( ! $force_refresh ) {
        $cached = get_transient( $transient_key );
        if ( is_array( $cached ) ) {
            return array(
                'demos'        => $cached,
                'cached'       => true,
                'partial'      => false,
                'remoteError'  => false,
                'backoff'      => false,
                'totalFetched' => 0,
            );
        }

        if ( get_transient( $backoff_key ) ) {
            return array(
                'demos'        => array(),
                'cached'       => false,
                'partial'      => false,
                'remoteError'  => true,
                'backoff'      => true,
                'totalFetched' => 0,
            );
        }
    }

    $result = boostify_blocks_fetch_remote_block_demos();
    if ( ! empty( $result['ok'] ) ) {
        delete_transient( $backoff_key );
        $is_partial = ! empty( $result['partial'] );
        $ttl        = $is_partial ? 30 * MINUTE_IN_SECONDS : 12 * HOUR_IN_SECONDS;
        set_transient( $transient_key, $result['demos'], $ttl );

        return array(
            'demos'        => $result['demos'],
            'cached'       => false,
            'partial'      => $is_partial,
            'remoteError'  => false,
            'backoff'      => false,
            'totalFetched' => (int) ( $result['totalFetched'] ?? 0 ),
        );
    }

    // Short negative backoff prevents repeated hangs when remote host is down.
    set_transient( $backoff_key, 1, 2 * MINUTE_IN_SECONDS );
    $stale_cached = get_transient( $transient_key );

    return array(
        'demos'        => is_array( $stale_cached ) ? $stale_cached : array(),
        'cached'       => false,
        'partial'      => false,
        'remoteError'  => true,
        'backoff'      => false,
        'totalFetched' => 0,
    );
}

/**
 * AJAX handler for fetching cached block demo illustrations from boostifyblocks.com.
 */
add_action( 'wp_ajax_boostify_blocks_get_block_demos', 'boostify_blocks_ajax_get_block_demos' );
function boostify_blocks_ajax_get_block_demos()
{
    boostify_blocks_verify_dashboard_ajax_request();

    $force_refresh = ! empty( $_POST['refresh'] ) && 'false' !== $_POST['refresh'];
    $resolved      = boostify_blocks_resolve_remote_demos_cache( $force_refresh );
    $demos         = is_array( $resolved['demos'] ) ? $resolved['demos'] : array();

    $payload = array(
        'demos'  => empty( $demos ) ? new stdClass() : $demos,
        'cached' => ! empty( $resolved['cached'] ),
    );

    if ( ! empty( $resolved['remoteError'] ) ) {
        $payload['remoteError'] = true;
        if ( ! empty( $resolved['backoff'] ) ) {
            $payload['backoff'] = true;
        }
    } else {
        $payload['partial']      = ! empty( $resolved['partial'] );
        $payload['totalFetched'] = (int) ( $resolved['totalFetched'] ?? 0 );
    }

    wp_send_json_success( $payload );
}
