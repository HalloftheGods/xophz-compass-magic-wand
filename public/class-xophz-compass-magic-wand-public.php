<?php
/**
 * The public-facing functionality of the plugin.
 *
 * @package    Xophz_Compass_Magic_Wand
 * @subpackage Xophz_Compass_Magic_Wand/public
 * @since      1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Xophz_Compass_Magic_Wand_Public {

	/**
	 * Plugin identifier.
	 *
	 * @var string
	 */
	private $plugin_name;

	/**
	 * Plugin version.
	 *
	 * @var string
	 */
	private $version;

	/**
	 * Constructor.
	 */
	public function __construct( string $plugin_name, string $version ) {
		$this->plugin_name = $plugin_name;
		$this->version     = $version;
	}

	/**
	 * Enqueue public stylesheets.
	 */
	public function enqueue_styles(): void {
		wp_enqueue_style(
			$this->plugin_name,
			plugin_dir_url( __FILE__ ) . 'css/xophz-compass-magic-wand-public.css',
			array(),
			$this->version,
			'all'
		);
	}

	/**
	 * Enqueue scripts for the Customizer live preview iframe.
	 */
	public function enqueue_preview_scripts(): void {
		wp_enqueue_script(
			$this->plugin_name . '-preview',
			plugin_dir_url( __FILE__ ) . 'js/xophz-compass-magic-wand-preview.js',
			array( 'jquery', 'customize-preview' ),
			$this->version,
			true
		);

		$page_id = get_the_ID();
		if ( ! $page_id ) {
			$page_id = get_queried_object_id();
		}

		wp_localize_script(
			$this->plugin_name . '-preview',
			'mhPreviewData',
			array(
				'pageId'    => $page_id,
				'pageTitle' => get_the_title( $page_id ),
				'isFront'   => is_front_page(),
			)
		);
	}

	/**
	 * Content filter: ensure native Gutenberg blocks are rendered without proprietary hijacking.
	 *
	 * Migrates legacy post meta to native Gutenberg blocks if needed, then allows WordPress
	 * to naturally render post_content through do_blocks().
	 *
	 * @param string $content Post content.
	 * @return string Processed content.
	 */
	public function render_page_builder_content( string $content ): string {
		if ( ! is_page() ) {
			return $content;
		}

		$page_id = get_the_ID() ?: get_queried_object_id();
		if ( ! $page_id ) {
			return $content;
		}

		// One-way migration of legacy post meta into post_content if present
		Xophz_Compass_Magic_Wand_Migration::migrate_page( (int) $page_id );

		// Return authentic post_content for standard WordPress Gutenberg rendering
		return $content;
	}

	/**
	 * Render section block markup for a given section type.
	 *
	 * Sourced directly from the canonical WordPress Block Pattern Registry.
	 *
	 * @param string               $type    Pattern identifier.
	 * @param string               $label   Human-readable section title.
	 * @param array<string, mixed> $section Section configuration.
	 * @param int                  $index   Order index.
	 * @return string Gutenberg block HTML markup.
	 */
	public function render_section_type( string $type, string $label = '', array $section = array(), int $index = 0 ): string {
		$registry = Xophz_Compass_Magic_Wand_Pattern_Registry::get_instance();
		$patterns = $registry->get_pattern_definitions();

		if ( isset( $patterns[ $type ] ) ) {
			return $patterns[ $type ]['content'];
		}

		// Fallback empty group container
		return '<!-- wp:group {"align":"full","layout":{"type":"constrained"}} --><div class="wp-block-group alignfull"><p>' . esc_html( $label ?: $type ) . '</p></div><!-- /wp:group -->';
	}

	/**
	 * Synchronize Customizer sections into native Gutenberg blocks in post_content upon publishing.
	 *
	 * @param WP_Customize_Manager|null $wp_customize Customizer manager instance.
	 */
	public function sync_sections_to_front_page( $wp_customize = null ): void {
		$front_page_id = absint( get_option( 'page_on_front' ) );
		if ( ! $front_page_id ) {
			return;
		}

		$sections_json = get_theme_mod( 'mh_page_sections', '[]' );
		$sections = json_decode( $sections_json, true );
		if ( empty( $sections ) || ! is_array( $sections ) ) {
			return;
		}

		$block_content = '';
		foreach ( $sections as $index => $section ) {
			$type  = isset( $section['type'] ) ? $section['type'] : 'hero';
			$label = isset( $section['label'] ) ? $section['label'] : ucfirst( str_replace( '-', ' ', $type ) );
			$block_content .= $this->render_section_type( $type, $label, $section, $index ) . "\n\n";
		}

		if ( ! empty( $block_content ) ) {
			wp_update_post( array(
				'ID'           => $front_page_id,
				'post_content' => trim( $block_content ),
			) );
		}
	}
}
