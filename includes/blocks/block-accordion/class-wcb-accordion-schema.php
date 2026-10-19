<?php
/**
 * FAQ Schema generator for Accordion block.
 *
 * Scans singular posts or parsed blocks for Accordion blocks with
 * `faqSchema` enabled, and prints valid JSON-LD FAQPage into <head>.
 *
 * @package Boostify_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class WCB_Accordion_Schema {
	private static $schemas = array();
	private static $initialized = false;

	public static function init() {
		if ( self::$initialized ) {
			return;
		}
		self::$initialized = true;

		add_action( 'wp_head', array( __CLASS__, 'output_schema' ), 90 );
	}

	public static function output_schema() {
		if ( ! is_singular() ) {
			return;
		}

		$post = get_post();
		if ( ! $post || empty( $post->post_content ) ) {
			return;
		}

		if ( ! has_block( 'boostify-blocks/accordion', $post ) ) {
			return;
		}

		$blocks = parse_blocks( $post->post_content );
		self::find_accordion_schemas( $blocks );

		if ( empty( self::$schemas ) ) {
			return;
		}

		$schema_data = array(
			'@context'   => 'https://schema.org',
			'@type'      => 'FAQPage',
			'mainEntity' => self::$schemas,
		);

		echo "\n" . '<script type="application/ld+json" class="boostify-blocks-faq-schema">' . "\n";
		echo wp_json_encode( $schema_data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT );
		echo "\n" . '</script>' . "\n";
	}

	private static function find_accordion_schemas( $blocks ) {
		foreach ( $blocks as $block ) {
			if ( 'boostify-blocks/accordion' === ( $block['blockName'] ?? '' ) ) {
				$enabled = ! empty( $block['attrs']['general_general']['faqSchema'] );
				if ( $enabled && ! empty( $block['innerBlocks'] ) ) {
					foreach ( $block['innerBlocks'] as $child ) {
						if ( 'boostify-blocks/accordion-item' === ( $child['blockName'] ?? '' ) ) {
							$question = $child['attrs']['title'] ?? '';
							if ( empty( $question ) && ! empty( $child['innerHTML'] ) ) {
								if ( preg_match( '/<span class="wcb-accordion-item__title"[^>]*>(.*?)<\/span>/s', $child['innerHTML'], $matches ) ) {
									$question = wp_strip_all_tags( $matches[1] );
								}
							}

							$answer = '';
							if ( ! empty( $child['innerBlocks'] ) ) {
								foreach ( $child['innerBlocks'] as $inner ) {
									$answer .= render_block( $inner );
								}
							}

							$question = trim( wp_strip_all_tags( $question ) );
							$answer   = trim( wp_strip_all_tags( $answer ) );

							if ( ! empty( $question ) && ! empty( $answer ) ) {
								self::$schemas[] = array(
									'@type'          => 'Question',
									'name'           => $question,
									'acceptedAnswer' => array(
										'@type' => 'Answer',
										'text'  => $answer,
									),
								);
							}
						}
					}
				}
			}

			if ( ! empty( $block['innerBlocks'] ) ) {
				self::find_accordion_schemas( $block['innerBlocks'] );
			}
		}
	}
}

WCB_Accordion_Schema::init();
