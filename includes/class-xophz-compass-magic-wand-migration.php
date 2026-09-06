<?php
/**
 * Migration Utility for Xophz Compass Magic Wand
 *
 * Converts legacy _mh_page_sections post meta and mh_page_sections theme mod
 * into native Gutenberg block markup within post_content, then cleanly removes the legacy meta.
 *
 * @package Xophz_Compass_Magic_Wand
 * @since   26.9.8
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Xophz_Compass_Magic_Wand_Migration {

	/**
	 * Run migration on a specific page ID if legacy sections meta exists.
	 *
	 * @param int $page_id The post ID to migrate.
	 * @return bool True if migration was executed, false if already modern or empty.
	 */
	public static function migrate_page( int $page_id ): bool {
		if ( ! $page_id ) {
			return false;
		}

		$sections_json = get_post_meta( $page_id, '_mh_page_sections', true );
		if ( empty( $sections_json ) ) {
			// Check if front page theme mod fallback applies
			$front_page_id = absint( get_option( 'page_on_front' ) );
			if ( $page_id === $front_page_id ) {
				$sections_json = get_theme_mod( 'mh_page_sections', '' );
			}
		}

		if ( empty( $sections_json ) ) {
			return false;
		}

		$sections = json_decode( $sections_json, true );
		if ( ! is_array( $sections ) || empty( $sections ) ) {
			delete_post_meta( $page_id, '_mh_page_sections' );
			return false;
		}

		$post = get_post( $page_id );
		if ( ! $post ) {
			return false;
		}

		// Only compile if post_content is currently empty or does not have blocks
		if ( ! has_blocks( $post->post_content ) ) {
			$registry = Xophz_Compass_Magic_Wand_Pattern_Registry::get_instance();
			$all_patterns = $registry->get_pattern_definitions();
			$block_content = '';

			foreach ( $sections as $section ) {
				$type = isset( $section['type'] ) ? $section['type'] : 'hero';
				if ( isset( $all_patterns[ $type ] ) ) {
					$block_content .= $all_patterns[ $type ]['content'] . "\n\n";
				}
			}

			if ( ! empty( $block_content ) ) {
				wp_update_post( array(
					'ID'           => $page_id,
					'post_content' => trim( $block_content ),
				) );
			}
		}

		return true;
	}
}
