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

		// Fallback registration for modular section stylesheets if not enqueued by theme
		$section_categories = array(
			'hero-overlap',
			'content-about',
			'features-numbers',
			'team-testimonials',
			'cta-contact',
			'pricing-portfolio',
		);

		foreach ( $section_categories as $category ) {
			$handle = 'magic-hat-section-' . $category;
			if ( ! wp_style_is( $handle, 'enqueued' ) ) {
				$theme_path = get_template_directory() . '/assets/css/sections/' . $category . '.css';
				if ( file_exists( $theme_path ) ) {
					wp_enqueue_style(
						$handle,
						get_template_directory_uri() . '/assets/css/sections/' . $category . '.css',
						array( 'magic-hat-variables', 'magic-hat-font-awesome' ),
						$this->version,
						'all'
					);
				}
			}
		}
	}

	/**
	 * Enqueue scripts for the Customizer live preview iframe.
	 */
	public function enqueue_preview_scripts(): void {
		wp_enqueue_style( 'dashicons' );
		wp_enqueue_script(
			$this->plugin_name . '-preview',
			plugin_dir_url( __FILE__ ) . 'js/xophz-compass-magic-wand-preview.js',
			array( 'jquery', 'customize-preview' ),
			$this->version,
			true
		);

		// Ensure section category styles are enqueued in live preview iframe
		$section_categories = array(
			'hero-overlap',
			'content-about',
			'features-numbers',
			'team-testimonials',
			'cta-contact',
			'pricing-portfolio',
		);
		foreach ( $section_categories as $category ) {
			$handle = 'magic-hat-section-' . $category;
			if ( ! wp_style_is( $handle, 'enqueued' ) ) {
				$theme_path = get_template_directory() . '/assets/css/sections/' . $category . '.css';
				if ( file_exists( $theme_path ) ) {
					wp_enqueue_style(
						$handle,
						get_template_directory_uri() . '/assets/css/sections/' . $category . '.css',
						array(),
						$this->version,
						'all'
					);
				}
			}
		}

		$page_id = get_the_ID();
		if ( ! $page_id ) {
			$page_id = get_queried_object_id();
		}

		$is_front = is_front_page();
		$sections = self::get_page_sections( (int) $page_id );

		wp_localize_script(
			$this->plugin_name . '-preview',
			'mhPreviewData',
			array(
				'pageId'      => $page_id,
				'pageTitle'   => get_the_title( $page_id ),
				'isFront'     => $is_front,
				'isFrontPage' => $is_front,
				'sections'    => $sections,
				'ajaxUrl'     => admin_url( 'admin-ajax.php' ),
				'nonce'       => wp_create_nonce( 'mh_page_builder_nonce' ),
			)
		);
	}

	/**
	 * Retrieve sections for a given page with multi-tier fallback (post meta, theme mod, post_content block parser).
	 *
	 * @param int $page_id Post ID.
	 * @return array<int, array<string, mixed>> List of sections.
	 */
	public static function get_page_sections( int $page_id ): array {
		if ( ! $page_id ) {
			return array();
		}

		$has_meta = metadata_exists( 'post', $page_id, '_mh_page_sections' );
		$raw      = $has_meta ? get_post_meta( $page_id, '_mh_page_sections', true ) : '';
		if ( ! $has_meta ) {
			$front_page_id = absint( get_option( 'page_on_front' ) );
			if ( $page_id === $front_page_id || ! $front_page_id ) {
				$raw = get_theme_mod( 'mh_page_sections', '' );
			}
		}

		if ( '' !== $raw && false !== $raw ) {
			$decoded = json_decode( $raw, true );
			if ( is_array( $decoded ) ) {
				return $decoded;
			}
		}

		// Fallback: Parse sections directly from post_content Gutenberg blocks
		$post = get_post( $page_id );
		if ( ! $post || empty( $post->post_content ) ) {
			return array();
		}

		$sections = array();
		if ( preg_match_all( '/<div([^>]*class="[^"]*mh-section[^"]*"[^>]*)>(.*?)<\/div>\s*<!-- \/wp:group -->/is', $post->post_content, $matches, PREG_SET_ORDER ) ) {
			foreach ( $matches as $i => $match ) {
				$attrs_str  = $match[1];
				$inner_html = $match[2];

				$type = 'custom';
				if ( preg_match( '/data-section-type="([^"]+)"/i', $attrs_str, $t ) ) {
					$type = $t[1];
				}

				$anchor = '';
				if ( preg_match( '/id="([^"]+)"/i', $attrs_str, $a ) ) {
					$anchor = $a[1];
				}

				$is_full = (bool) preg_match( '/mh-section-full-width/i', $attrs_str );

				$title = '';
				if ( preg_match( '/<h[1-3][^>]*>(.*?)<\/h[1-3]>/is', $inner_html, $h ) ) {
					$title = wp_strip_all_tags( $h[1] );
				}
				$subtitle = '';
				if ( preg_match( '/<p[^>]*class="[^"]*has-text-muted-color[^"]*"[^>]*>(.*?)<\/p>/is', $inner_html, $p ) ) {
					$subtitle = wp_strip_all_tags( $p[1] );
				}

				$label = $title ? $title : ( $anchor ? ucwords( str_replace( array( '-', '_' ), ' ', $anchor ) ) : ucfirst( $type ) );

				$sections[] = array(
					'type'     => $type,
					'id'       => $anchor ? 'section_' . sanitize_key( $anchor ) : 'section_' . $i,
					'label'    => $label,
					'settings' => array(
						'title'    => $title ?: $label,
						'subtitle' => $subtitle,
						'layout'   => $is_full ? 'full' : 'contained',
						'anchor'   => $anchor,
					),
				);
			}
		}

		if ( ! empty( $sections ) ) {
			update_post_meta( $page_id, '_mh_page_sections', wp_slash( wp_json_encode( $sections ) ) );
			$front_page_id = absint( get_option( 'page_on_front' ) );
			if ( $page_id === $front_page_id || ! $front_page_id ) {
				set_theme_mod( 'mh_page_sections', wp_json_encode( $sections ) );
			}
		}

		return $sections;
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

		$content = '';
		if ( isset( $patterns[ $type ] ) ) {
			$content = $patterns[ $type ]['content'];
		} else {
			$content = '<!-- wp:group {"align":"full","layout":{"type":"constrained"}} -->' . "\n" . '<div class="wp-block-group alignfull"><p>' . esc_html( $label ?: $type ) . '</p></div>' . "\n" . '<!-- /wp:group -->';
		}

		$settings = isset( $section['settings'] ) && is_array( $section['settings'] ) ? $section['settings'] : array();

		// Layout container class
		$is_full      = isset( $settings['layout'] ) && $settings['layout'] === 'full';
		$layout_class = $is_full ? 'mh-section-full-width' : 'mh-section-boxed';

		// HTML anchor ID
		$anchor = ! empty( $settings['anchor'] ) ? sanitize_title( $settings['anchor'] ) : ( ! empty( $label ) ? sanitize_title( $label ) : 'section-' . ( $index + 1 ) );

		// Text scheme
		$scheme_class = '';
		if ( ! empty( $settings['text_scheme'] ) && 'auto' !== $settings['text_scheme'] ) {
			$scheme_class = ' has-' . sanitize_key( $settings['text_scheme'] ) . '-text';
		}

		// Custom CSS classes
		$extra_classes = ! empty( $settings['classes'] ) ? ' ' . esc_attr( $settings['classes'] ) : '';

		// Dynamic inline styles for background and padding
		$style_parts = array();
		$pad_map     = array(
			'compact'  => '32px',
			'normal'   => '64px',
			'spacious' => '96px',
			'extra'    => '128px',
		);

		if ( ! empty( $settings['padding_top'] ) ) {
			$style_parts[] = 'padding-top:' . ( isset( $pad_map[ $settings['padding_top'] ] ) ? $pad_map[ $settings['padding_top'] ] : '64px' );
		}
		if ( ! empty( $settings['padding_bottom'] ) ) {
			$style_parts[] = 'padding-bottom:' . ( isset( $pad_map[ $settings['padding_bottom'] ] ) ? $pad_map[ $settings['padding_bottom'] ] : '64px' );
		}

		if ( ! empty( $settings['bg_type'] ) ) {
			if ( 'color' === $settings['bg_type'] && ! empty( $settings['bg_color'] ) ) {
				$style_parts[] = 'background-color:' . esc_attr( $settings['bg_color'] );
				$style_parts[] = 'background-image:none';
			} elseif ( 'gradient' === $settings['bg_type'] && ! empty( $settings['bg_gradient'] ) ) {
				$style_parts[] = 'background-image:' . esc_attr( $settings['bg_gradient'] );
				$style_parts[] = 'background-color:transparent';
			} elseif ( 'image' === $settings['bg_type'] && ! empty( $settings['bg_image'] ) ) {
				$style_parts[] = 'background-image:url(' . esc_url( $settings['bg_image'] ) . ')';
				$style_parts[] = 'background-size:cover';
				$style_parts[] = 'background-position:center';
			}
		}

		$style_attr = ! empty( $style_parts ) ? ' style="' . esc_attr( implode( ';', $style_parts ) ) . '"' : '';

		// Inject attributes into the opening group container
		$pattern_tag = '/<div class="([^"]*wp-block-group[^"]*)"/i';
		$replacement = '<div id="' . esc_attr( $anchor ) . '" data-section-type="' . esc_attr( $type ) . '" data-section-index="' . esc_attr( $index ) . '" class="$1 mh-section ' . esc_attr( $layout_class . $scheme_class . $extra_classes ) . '"' . $style_attr;

		if ( preg_match( $pattern_tag, $content ) ) {
			$content = preg_replace( $pattern_tag, $replacement, $content, 1 );
		} else {
			// Wrap in full-width group container if pattern lacks top-level group
			$content = '<!-- wp:group {"align":"full","layout":{"type":"constrained"}} -->' . "\n" .
				'<div id="' . esc_attr( $anchor ) . '" data-section-type="' . esc_attr( $type ) . '" data-section-index="' . esc_attr( $index ) . '" class="wp-block-group alignfull mh-section ' . esc_attr( $layout_class . $scheme_class . $extra_classes ) . '"' . $style_attr . '>' . "\n" .
				$content . "\n" .
				'</div>' . "\n" .
				'<!-- /wp:group -->';
		}

		// Apply custom title and subtitle if specified in section settings
		if ( ! empty( $settings['title'] ) ) {
			$content = preg_replace( '/(<h[1-3][^>]*>)(.*?)(<\/h[1-3]>)/i', '$1' . esc_html( $settings['title'] ) . '$3', $content, 1 );
		}
		if ( ! empty( $settings['subtitle'] ) ) {
			$content = preg_replace( '/(<p class="[^"]*has-text-muted-color[^"]*"[^>]*>)(.*?)(<\/p>)/i', '$1' . esc_html( $settings['subtitle'] ) . '$3', $content, 1 );
		}

		return $content;
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
		if ( ! is_array( $sections ) ) {
			return;
		}

		$block_content = '';
		foreach ( $sections as $index => $section ) {
			$type  = isset( $section['type'] ) ? $section['type'] : 'hero';
			$label = isset( $section['label'] ) ? $section['label'] : ucfirst( str_replace( '-', ' ', $type ) );
			$block_content .= $this->render_section_type( $type, $label, $section, $index ) . "\n\n";
		}

		wp_update_post( array(
			'ID'           => $front_page_id,
			'post_content' => trim( $block_content ),
		) );
		update_post_meta( $front_page_id, '_mh_page_sections', wp_slash( $sections_json ) );
	}
}
