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

		// Enqueue compiled Quantum Atoms styles if available
		$atoms_css = plugin_dir_path( __FILE__ ) . 'dist/magic-wand-atoms.css';
		if ( file_exists( $atoms_css ) ) {
			wp_enqueue_style(
				$this->plugin_name . '-atoms',
				plugin_dir_url( __FILE__ ) . 'dist/magic-wand-atoms.css',
				array(),
				$this->version,
				'all'
			);
		}

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
	 * Enqueue public scripts including the Quantum Atoms runtime.
	 */
	public function enqueue_scripts(): void {
		$atoms_js = plugin_dir_path( __FILE__ ) . 'dist/magic-wand-atoms.umd.js';
		if ( file_exists( $atoms_js ) ) {
			wp_enqueue_script(
				$this->plugin_name . '-atoms',
				plugin_dir_url( __FILE__ ) . 'dist/magic-wand-atoms.umd.js',
				array(),
				$this->version,
				true
			);
		}
	}

	/**
	 * Enqueue scripts for the Customizer live preview iframe.
	 */
	public function enqueue_preview_scripts(): void {
		if ( ! is_customize_preview() ) {
			return;
		}

		wp_enqueue_style( 'dashicons' );

		// Enqueue Quantum Atoms for live preview iframe
		$atoms_css = plugin_dir_path( __FILE__ ) . 'dist/magic-wand-atoms.css';
		if ( file_exists( $atoms_css ) ) {
			wp_enqueue_style(
				$this->plugin_name . '-atoms',
				plugin_dir_url( __FILE__ ) . 'dist/magic-wand-atoms.css',
				array(),
				$this->version,
				'all'
			);
		}

		$atoms_js = plugin_dir_path( __FILE__ ) . 'dist/magic-wand-atoms.umd.js';
		if ( file_exists( $atoms_js ) ) {
			wp_enqueue_script(
				$this->plugin_name . '-atoms',
				plugin_dir_url( __FILE__ ) . 'dist/magic-wand-atoms.umd.js',
				array(),
				$this->version,
				true
			);
		}

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

		$page_id = get_queried_object_id();
		if ( ! $page_id ) {
			$page_id = get_the_ID();
		}
		if ( ! $page_id && is_front_page() ) {
			$page_id = absint( get_option( 'page_on_front' ) );
		}

		$page_title = '';
		if ( $page_id ) {
			$page_title = get_the_title( $page_id );
		} elseif ( is_front_page() ) {
			$page_title = __( 'Home', 'xophz-compass-magic-wand' );
		} elseif ( is_home() ) {
			$page_title = __( 'Blog', 'xophz-compass-magic-wand' );
		} else {
			$page_title = __( 'Page', 'xophz-compass-magic-wand' );
		}

		$is_front = is_front_page();
		$sections = self::get_page_sections( (int) $page_id );

		wp_localize_script(
			$this->plugin_name . '-preview',
			'mhPreviewData',
			array(
				'pageId'      => (int) $page_id,
				'pageTitle'   => $page_title,
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

		$post = get_post( $page_id );
		if ( $post && ! empty( $post->post_content ) && function_exists( 'parse_blocks' ) ) {
			$blocks = parse_blocks( $post->post_content );
			$sections_from_blocks = array();

			foreach ( $blocks as $i => $block ) {
				if ( empty( $block['blockName'] ) ) {
					continue;
				}

				$block_html = serialize_block( $block );
				$is_section = ( false !== strpos( $block_html, 'mh-section' ) ) || ( false !== strpos( $block_html, 'data-section-type' ) );

				if ( $is_section ) {
					$type = 'custom';
					if ( preg_match( '/data-section-type="([^"]+)"/i', $block_html, $t ) ) {
						$type = $t[1];
					} elseif ( preg_match( '/\bmh-section-([a-z0-9-]+)\b/i', $block_html, $m ) ) {
						if ( $m[1] !== 'boxed' && $m[1] !== 'full-width' ) {
							$type = $m[1];
						}
					}

					$anchor = '';
					if ( preg_match( '/\bid="([^"]+)"/i', $block_html, $a ) ) {
						$anchor = $a[1];
					}

					$is_full = (bool) preg_match( '/mh-section-full-width/i', $block_html );

					$title = '';
					if ( preg_match( '/<h[1-3][^>]*>(.*?)<\/h[1-3]>/is', $block_html, $h ) ) {
						$title = wp_strip_all_tags( $h[1] );
					}

					$subtitle = '';
					if ( preg_match( '/<p[^>]*class="[^"]*has-text-muted-color[^"]*"[^>]*>(.*?)<\/p>/is', $block_html, $p ) ) {
						$subtitle = wp_strip_all_tags( $p[1] );
					}

					$label = $title ? $title : ( $anchor ? ucwords( str_replace( array( '-', '_' ), ' ', $anchor ) ) : ucfirst( str_replace( '-', ' ', $type ) ) );

					$sections_from_blocks[] = array(
						'type'     => $type,
						'id'       => $anchor ? 'section_' . sanitize_key( $anchor ) : 'section_' . $i,
						'label'    => $label,
						'content'  => $block_html,
						'settings' => array(
							'title'    => $title ?: $label,
							'subtitle' => $subtitle,
							'layout'   => $is_full ? 'full' : 'contained',
							'anchor'   => $anchor,
						),
					);
				}
			}

			if ( ! empty( $sections_from_blocks ) ) {
				$raw_meta = get_post_meta( $page_id, '_mh_page_sections', true );
				if ( ! empty( $raw_meta ) ) {
					$meta_sections = json_decode( $raw_meta, true );
					if ( is_array( $meta_sections ) ) {
						foreach ( $sections_from_blocks as $idx => &$sec ) {
							if ( isset( $meta_sections[ $idx ] ) && is_array( $meta_sections[ $idx ] ) ) {
								$m_sec = $meta_sections[ $idx ];
								if ( isset( $m_sec['settings'] ) && is_array( $m_sec['settings'] ) ) {
									$sec['settings'] = array_merge( $sec['settings'], $m_sec['settings'] );
								}
								if ( isset( $m_sec['edits'] ) && is_array( $m_sec['edits'] ) ) {
									$sec['edits'] = $m_sec['edits'];
								}
							}
						}
						unset( $sec );
					}
				}

				return $sections_from_blocks;
			}
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

		return array();
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

		$has_custom_content = ! empty( $section['content'] );
		$content = '';
		if ( $has_custom_content ) {
			$content = $section['content'];
		} elseif ( isset( $patterns[ $type ] ) ) {
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

		// Update or inject attributes on the outer section wrapper
		$pattern_tag = '/<div([^>]*class="[^"]*wp-block-group[^"]*"[^>]*)>/i';
		if ( preg_match( $pattern_tag, $content ) ) {
			$content = preg_replace_callback( $pattern_tag, function( $m ) use ( $anchor, $type, $index, $layout_class, $scheme_class, $extra_classes, $style_attr ) {
				$attrs = $m[1];
				// Strip previous dynamic section attributes to avoid duplicates
				$attrs = preg_replace( '/\s*(id|data-section-type|data-section-index|style)="[^"]*"/i', '', $attrs );
				$attrs = preg_replace( '/\s*(mh-section-full-width|mh-section-boxed|has-light-text|has-dark-text)/i', '', $attrs );
				if ( false === strpos( $attrs, 'mh-section' ) ) {
					$attrs = preg_replace( '/class="([^"]*)"/i', 'class="$1 mh-section"', $attrs );
				}
				$attrs = preg_replace( '/class="([^"]*)"/i', 'class="$1 ' . esc_attr( trim( $layout_class . $scheme_class . $extra_classes ) ) . '"', $attrs );
				return '<div id="' . esc_attr( $anchor ) . '" data-section-type="' . esc_attr( $type ) . '" data-section-index="' . esc_attr( $index ) . '"' . $attrs . $style_attr . '>';
			}, $content, 1 );
		} else {
			// Wrap in full-width group container if pattern lacks top-level group
			$content = '<!-- wp:group {"align":"full","layout":{"type":"constrained"}} -->' . "\n" .
				'<div id="' . esc_attr( $anchor ) . '" data-section-type="' . esc_attr( $type ) . '" data-section-index="' . esc_attr( $index ) . '" class="wp-block-group alignfull mh-section ' . esc_attr( trim( $layout_class . $scheme_class . $extra_classes ) ) . '"' . $style_attr . '>' . "\n" .
				$content . "\n" .
				'</div>' . "\n" .
				'<!-- /wp:group -->';
		}

		// Apply target date for countdown timer applet atoms
		if ( ! empty( $settings['target_date'] ) && preg_match( '/<x-countdown-clock\b[^>]*>/is', $content ) ) {
			$content = preg_replace_callback( '/(<x-countdown-clock\b[^>]*\btarget-date=")([^"]*)(")/is', function( $m ) use ( $settings ) {
				return $m[1] . esc_attr( $settings['target_date'] ) . $m[3];
			}, $content, 1 );
		}

		// Apply edits dictionary recorded by canvas inline editor if present
		if ( ! empty( $section['edits'] ) && is_array( $section['edits'] ) ) {
			foreach ( $section['edits'] as $orig_or_key => $val ) {
				if ( is_string( $val ) && is_string( $orig_or_key ) && '' !== $orig_or_key ) {
					if ( substr( $orig_or_key, -4 ) === '_url' ) {
						continue;
					}
					if ( false !== strpos( $content, $orig_or_key ) ) {
						$content = str_replace( $orig_or_key, esc_html( $val ), $content );
					}
				}
			}
		}

		// Dynamic content items: only compile if items are explicitly present and section was not loaded with custom content
		if ( ! $has_custom_content && ! empty( $section['items'] ) && is_array( $section['items'] ) ) {
			$content = self::compile_section_items( $content, $section['items'], $type );
		}

		return $content;
	}

	/**
	 * Compile custom items into section markup.
	 *
	 * Dynamically populates titles, descriptions, icons, links, and prices into column blocks.
	 *
	 * @param string               $content Section Gutenberg markup.
	 * @param array<int, array<string, mixed>> $items Array of item descriptors.
	 * @param string               $type    Section archetype slug.
	 * @return string Compiled block markup.
	 */
	public static function compile_section_items( string $content, array $items, string $type = '' ): string {
		if ( empty( $items ) ) {
			return $content;
		}

		// Match all column blocks
		$col_pattern = '/(<!-- wp:column\b.*?-->\s*<div\b[^>]*class="[^"]*wp-block-column[^"]*"[^>]*>)(.*?)(<\/div>\s*<!-- \/wp:column -->)/is';
		if ( ! preg_match_all( $col_pattern, $content, $matches, PREG_SET_ORDER ) ) {
			return $content;
		}

		$cols_count  = count( $matches );
		$items_count = count( $items );
		$new_cols    = array();

		for ( $i = 0; $i < $items_count; $i++ ) {
			$item = $items[ $i ];
			$base_idx = min( $i, $cols_count - 1 );
			$col_open = $matches[ $base_idx ][1];
			$col_body = $matches[ $base_idx ][2];
			$col_close = $matches[ $base_idx ][3];

			// Inject item index marker for precise live preview binding
			$col_open = preg_replace( '/class="([^"]*wp-block-column[^"]*)"/i', 'data-mw-item-idx="' . $i . '" class="$1"', $col_open, 1 );

			$title = isset( $item['title'] ) ? $item['title'] : ( isset( $item['name'] ) ? $item['name'] : ( isset( $item['value'] ) ? $item['value'] : ( isset( $item['question'] ) ? $item['question'] : ( isset( $item['headline'] ) ? $item['headline'] : '' ) ) ) );
			$desc  = isset( $item['desc'] ) ? $item['desc'] : ( isset( $item['quote'] ) ? $item['quote'] : ( isset( $item['label'] ) ? $item['label'] : ( isset( $item['bio'] ) ? $item['bio'] : ( isset( $item['answer'] ) ? $item['answer'] : '' ) ) ) );
			$role  = isset( $item['role'] ) ? $item['role'] : '';
			$icon  = isset( $item['icon'] ) ? $item['icon'] : '';
			$price = isset( $item['price'] ) ? $item['price'] : '';
			$link  = isset( $item['link'] ) ? $item['link'] : ( isset( $item['btn_link'] ) ? $item['btn_link'] : '' );
			$btn_text = isset( $item['btn_text'] ) ? $item['btn_text'] : '';

			// 1. Update Title & Description in column
			$has_heading = (bool) preg_match( '/<h[2-6]\b/i', $col_body );
			if ( $has_heading ) {
				if ( '' !== $title ) {
					$col_body = preg_replace( '/(<h[2-6]\b[^>]*>)(.*?)(<\/h[2-6]>)/is', '$1' . esc_html( $title ) . '$3', $col_body, 1 );
				}
				if ( '' !== $desc ) {
					if ( preg_match( '/(<p\b[^>]*data-mw-item-prop="desc"[^>]*>)(.*?)(<\/p>)/is', $col_body ) ) {
						$col_body = preg_replace( '/(<p\b[^>]*data-mw-item-prop="desc"[^>]*>)(.*?)(<\/p>)/is', '$1' . esc_html( $desc ) . '$3', $col_body, 1 );
					} elseif ( preg_match( '/(<p\b[^>]*\bhas-text-muted-color\b[^>]*>)(.*?)(<\/p>)/is', $col_body ) ) {
						$col_body = preg_replace( '/(<p\b[^>]*\bhas-text-muted-color\b[^>]*>)(.*?)(<\/p>)/is', '$1' . esc_html( $desc ) . '$3', $col_body, 1 );
					}
				}
			} else {
				// Single container paragraph card (e.g. showcase boxes)
				if ( '' !== $title && '' !== $desc ) {
					$replacement = '<p class="has-text-align-center has-text-heading-color has-text-color" style="font-weight:700;margin-bottom:4px;" data-mw-item-prop="title">' . esc_html( $title ) . '</p>' . "\n" .
						'<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size" data-mw-item-prop="desc">' . esc_html( $desc ) . '</p>';
					$col_body = preg_replace( '/<p\b[^>]*>.*?<\/p>/is', $replacement, $col_body, 1 );
				} elseif ( '' !== $title ) {
					$col_body = preg_replace( '/(<p\b[^>]*>)(.*?)(<\/p>)/is', '$1' . esc_html( $title ) . '$3', $col_body, 1 );
				} elseif ( '' !== $desc ) {
					$col_body = preg_replace( '/(<p\b[^>]*>)(.*?)(<\/p>)/is', '$1' . esc_html( $desc ) . '$3', $col_body, 1 );
				}
			}

			// 2. Update Role (Testimonials / Team)
			if ( '' !== $role && preg_match( '/(<p\b[^>]*data-mw-item-prop="role"[^>]*>)(.*?)(<\/p>)/is', $col_body ) ) {
				$col_body = preg_replace( '/(<p\b[^>]*data-mw-item-prop="role"[^>]*>)(.*?)(<\/p>)/is', '$1' . esc_html( $role ) . '$3', $col_body, 1 );
			}

			// 3. Update Icon
			if ( '' !== $icon ) {
				if ( preg_match( '/<span\b[^>]*class="[^"]*dashicons\b[^"]*"[^>]*>/is', $col_body ) ) {
					$col_body = preg_replace( '/class="([^"]*dashicons\s+)[^"\s]+([^"]*)"/is', 'class="$1' . esc_attr( $icon ) . '$2"', $col_body, 1 );
				}
			}

			// 4. Update Price & Period
			if ( '' !== $price && preg_match( '/(<span\b[^>]*class="[^"]*mh-price-num[^"]*"[^>]*>)(.*?)(<\/span>)/is', $col_body ) ) {
				$col_body = preg_replace( '/(<span\b[^>]*class="[^"]*mh-price-num[^"]*"[^>]*>)(.*?)(<\/span>)/is', '$1' . esc_html( $price ) . '$3', $col_body, 1 );
			}

			// 5. Update Button text and link
			if ( '' !== $btn_text && preg_match( '/(<a\b[^>]*class="[^"]*wp-block-button__link[^"]*"[^>]*>)(.*?)(<\/a>)/is', $col_body ) ) {
				$col_body = preg_replace( '/(<a\b[^>]*class="[^"]*wp-block-button__link[^"]*"[^>]*>)(.*?)(<\/a>)/is', '$1' . esc_html( $btn_text ) . '$3', $col_body, 1 );
			}
			if ( '' !== $link && preg_match( '/(<a\b[^>]*href=")([^"]*)(")/is', $col_body ) ) {
				$col_body = preg_replace( '/(<a\b[^>]*href=")([^"]*)(")/is', '$1' . esc_url( $link ) . '$3', $col_body, 1 );
			}

			$new_cols[] = $col_open . $col_body . $col_close;
		}

		// Replace the original column block sequence with the compiled columns
		$full_matched_cols = '';
		foreach ( $matches as $m ) {
			$full_matched_cols .= $m[0];
		}
		$compiled_cols = implode( "\n\n", $new_cols );

		$pos = strpos( $content, $matches[0][0] );
		if ( false !== $pos ) {
			$last_match = end( $matches );
			$last_pos = strrpos( $content, $last_match[0] );
			$total_len = ( $last_pos + strlen( $last_match[0] ) ) - $pos;
			$content = substr_replace( $content, $compiled_cols, $pos, $total_len );
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
