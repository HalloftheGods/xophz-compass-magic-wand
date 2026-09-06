<?php
/**
 * Pattern Registry for Xophz Compass Magic Wand
 *
 * Registers native Gutenberg block patterns for all modular section archetypes
 * and provides catalog querying methods for the Customizer and REST API.
 *
 * @package Xophz_Compass_Magic_Wand
 * @since   26.9.8
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/sections-catalog.php';

class Xophz_Compass_Magic_Wand_Pattern_Registry {

	/**
	 * Instance singleton.
	 *
	 * @var Xophz_Compass_Magic_Wand_Pattern_Registry|null
	 */
	private static $instance = null;

	/**
	 * Get singleton instance.
	 */
	public static function get_instance(): self {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_patterns' ) );
	}

	/**
	 * Register Gutenberg pattern categories and patterns with WordPress.
	 */
	public function register_patterns(): void {
		if ( ! function_exists( 'register_block_pattern_category' ) || ! function_exists( 'register_block_pattern' ) ) {
			return;
		}

		$categories = $this->get_categories();
		foreach ( $categories as $slug => $label ) {
			register_block_pattern_category(
				'magic-wand-' . $slug,
				array( 'label' => __( 'Magic Wand: ', 'xophz-compass-magic-wand' ) . $label )
			);
		}

		$patterns = $this->get_pattern_definitions();
		foreach ( $patterns as $id => $data ) {
			register_block_pattern(
				'magic-wand/' . $id,
				array(
					'title'         => $data['name'],
					'description'   => $data['desc'],
					'categories'    => array( 'magic-wand-' . $data['category'] ),
					'content'       => $data['content'],
					'keywords'      => array( 'magic-wand', $data['category'], $id ),
					'viewportWidth' => 1200,
				)
			);
		}
	}

	/**
	 * Get all pattern categories.
	 *
	 * @return array<string, string>
	 */
	public function get_categories(): array {
		return array(
			'hero'         => __( 'Heroes', 'xophz-compass-magic-wand' ),
			'overlapable'  => __( 'Overlapable', 'xophz-compass-magic-wand' ),
			'about'        => __( 'About', 'xophz-compass-magic-wand' ),
			'features'     => __( 'Features', 'xophz-compass-magic-wand' ),
			'content'      => __( 'Content', 'xophz-compass-magic-wand' ),
			'cta'          => __( 'Call to Action', 'xophz-compass-magic-wand' ),
			'testimonials' => __( 'Testimonials', 'xophz-compass-magic-wand' ),
			'numbers'      => __( 'Numbers', 'xophz-compass-magic-wand' ),
			'clients'      => __( 'Clients', 'xophz-compass-magic-wand' ),
			'team'         => __( 'Team', 'xophz-compass-magic-wand' ),
			'latest_news'  => __( 'Latest News', 'xophz-compass-magic-wand' ),
			'contact'      => __( 'Contact', 'xophz-compass-magic-wand' ),
			'portfolio'    => __( 'Portfolio', 'xophz-compass-magic-wand' ),
			'woocommerce'  => __( 'WooCommerce', 'xophz-compass-magic-wand' ),
			'gallery'      => __( 'Gallery', 'xophz-compass-magic-wand' ),
			'pricing'      => __( 'Pricing & Plans', 'xophz-compass-magic-wand' ),
			'faq'          => __( 'FAQ', 'xophz-compass-magic-wand' ),
			'subscribe'    => __( 'Subscribe', 'xophz-compass-magic-wand' ),
		);
	}

	/**
	 * Retrieve pattern definitions with Gutenberg block markup.
	 *
	 * @return array<string, array<string, mixed>>
	 */
	public function get_pattern_definitions(): array {
		if ( ! function_exists( 'mh_get_sections_catalog' ) ) {
			require_once __DIR__ . '/sections-catalog.php';
		}
		return mh_get_sections_catalog();
	}

	/**
	 * Retrieve a single pattern definition by ID.
	 *
	 * @param string $id Pattern identifier.
	 * @return array<string, mixed>|null Pattern data if found.
	 */
	public function get_pattern( string $id ): ?array {
		$patterns = $this->get_pattern_definitions();
		return isset( $patterns[ $id ] ) ? $patterns[ $id ] : null;
	}
}
