<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @package    Xophz_Compass_Magic_Wand
 * @subpackage Xophz_Compass_Magic_Wand/public
 */

class Xophz_Compass_Magic_Wand_Public {

	/**
	 * The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 */
	public function __construct( $plugin_name, $version ) {
		$this->plugin_name = $plugin_name;
		$this->version = $version;
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 */
	public function enqueue_styles() {
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/xophz-compass-magic-wand-public.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/xophz-compass-magic-wand-public.js', array( 'jquery' ), $this->version, false );
	}

	/**
	 * Enqueue preview scripts for the Customizer iframe.
	 * Adds hover overlays, inline editing, and section controls.
	 */
	public function enqueue_preview_scripts() {
		wp_enqueue_script(
			$this->plugin_name . '-preview',
			plugin_dir_url( __FILE__ ) . 'js/xophz-compass-magic-wand-preview.js',
			array( 'jquery', 'customize-preview' ),
			$this->version,
			true
		);

		add_action( 'wp_footer', array( $this, 'localize_preview_data' ), 5 );
	}

	/**
	 * Output preview page metadata for the customizer controls
	 */
	public function localize_preview_data() {
		$page_id = get_the_ID();
		if ( ! $page_id ) {
			$page_id = get_queried_object_id();
		}
		$front_page_id = absint( get_option( 'page_on_front' ) );
		$is_front = is_front_page() || ( $front_page_id && $page_id === $front_page_id );
		
		$sections_json = $page_id ? get_post_meta( $page_id, '_mh_page_sections', true ) : '';
		if ( empty( $sections_json ) && $is_front ) {
			$sections_json = get_theme_mod( 'mh_page_sections', '[]' );
		}
		if ( empty( $sections_json ) ) {
			$sections_json = '[]';
		}

		$data = array(
			'pageId'      => absint( $page_id ),
			'pageTitle'   => $page_id ? get_the_title( $page_id ) : ( $is_front ? __( 'Home', 'xophz-magic-hat' ) : '' ),
			'isPage'      => is_page(),
			'isFrontPage' => $is_front,
			'sections'    => json_decode( $sections_json, true ) ?: array(),
			'ajaxUrl'     => admin_url( 'admin-ajax.php' ),
			'nonce'       => wp_create_nonce( 'mh_switch_template_nonce' ),
		);
		echo '<script>window.mhPreviewData = ' . wp_json_encode( $data ) . ';</script>' . "\n";
	}

	/**
	 * Render the page builder sections in the content.
	 */
	public function render_page_builder_content( $content ) {
		if ( ! is_page() ) { return $content; }

		$page_id = get_the_ID();
		if ( ! $page_id ) {
			$page_id = get_queried_object_id();
		}
		$front_page_id = absint( get_option( 'page_on_front' ) );
		$is_front = is_front_page() || ( $front_page_id && $page_id === $front_page_id );

		// Check for page-specific sections in post meta
		$sections_json = $page_id ? get_post_meta( $page_id, '_mh_page_sections', true ) : '';

		// Backwards-compatibility fallback for front page only:
		if ( empty( $sections_json ) && $is_front ) {
			$sections_json = get_theme_mod( 'mh_page_sections', '[]' );
		}

		$sections = ! empty( $sections_json ) ? json_decode( $sections_json, true ) : array();
		if ( empty( $sections ) || ! is_array( $sections ) ) {
			if ( $is_front && is_customize_preview() ) {
				return '<div class="mh-canvas-empty-state" style="text-align:center;padding:80px 24px;background:var(--mh-color-card,#ffffff);border:2px dashed var(--mh-color-border-base,#cbd5e1);border-radius:12px;margin:40px auto;max-width:600px;color:var(--mh-color-text-muted,#64748b);">' .
					'<div style="width:48px;height:48px;border-radius:12px;background:color-mix(in srgb,var(--mh-color-brand-base,#2563eb) 12%,transparent);color:var(--mh-color-brand-base,#2563eb);display:inline-flex;align-items:center;justify-content:center;margin-bottom:12px;"><span class="dashicons dashicons-plus-alt2" style="font-size:24px;width:24px;height:24px;"></span></div>' .
					'<h3 style="margin:0 0 6px;font-size:18px;font-weight:700;color:var(--mh-color-text-heading,#0f172a);">Magic Hat Blank Canvas</h3>' .
					'<p style="margin:0 0 16px;font-size:13px;line-height:1.4;">Your front page is active in Magic Hat canvas mode. Use the Customizer sidebar or click below to add your first section.</p>' .
					'<button type="button" class="button button-primary mh-add-section" style="background:var(--mh-color-cta-base,#2563eb);border-color:var(--mh-color-cta-base,#2563eb);color:var(--mh-color-text-inverse,#ffffff);padding:8px 16px;font-size:12px;font-weight:600;border-radius:6px;cursor:pointer;">+ Add Your First Section</button>' .
				'</div>' . $content;
			}
			return $content;
		}

		$out = '<div class="mh-page-builder-content">';
		foreach ( $sections as $index => $section ) {
			$type  = isset( $section['type'] ) ? $section['type'] : '';
			$label = isset( $section['label'] ) ? $section['label'] : '';
			$slug  = $label ? sanitize_title( $label ) : $type . '-' . $index;
			$layout = isset( $section['settings']['layout'] ) ? $section['settings']['layout'] : 'contained';
			$is_full = ( $layout === 'full' );
			$layout_class = $is_full ? 'mh-section-full-width' : 'mh-section-boxed';
			$max_width = $is_full ? '100%' : 'var(--mh-content-width,1200px)';
			$inner_padding = $is_full ? 'padding:0 40px;' : 'padding:0;';
			$bg = ( $index % 2 === 1 ) ? 'var(--mh-color-section, #f8fafc)' : 'var(--mh-color-body, #ffffff)';
			
			$out .= '<section id="' . esc_attr( $slug ) . '" class="mh-section mh-section-' . esc_attr($type) . ' ' . esc_attr($layout_class) . '" style="padding:90px 24px;background:' . esc_attr($bg) . ';border-bottom:1px solid var(--mh-color-border-muted,#e2e8f0);box-sizing:border-box;width:100%;">';
			$out .= '<div class="mh-container" style="max-width:' . esc_attr( $max_width ) . ';' . esc_attr( $inner_padding ) . 'margin:0 auto;transition:max-width 0.3s;box-sizing:border-box;">';
			$out .= $this->render_section_type( $type, $label, $section, $index );
			$out .= '</div></section>';
		}
		$out .= '</div>';
		return $out;
	}

	/**
	 * Synchronize Customizer sections into native Gutenberg blocks on front page upon publishing
	 */
	public function sync_sections_to_front_page( $wp_customize = null ) {
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
			$type  = isset( $section['type'] ) ? $section['type'] : 'content';
			$label = isset( $section['label'] ) ? $section['label'] : ucfirst( str_replace( '-', ' ', $type ) );
			$inner = $this->render_section_type( $type, $label, $section, $index );
			
			$layout = isset( $section['settings']['layout'] ) ? $section['settings']['layout'] : 'contained';
			$layout_type = ( $layout === 'full' ) ? 'default' : 'constrained';
			$layout_class = ( $layout === 'full' ) ? 'mh-section-full-width' : 'mh-section-boxed';
			
			$block_content .= "<!-- wp:group {\"metadata\":{\"name\":\"" . esc_attr( $label ) . "\"},\"align\":\"full\",\"layout\":{\"type\":\"" . $layout_type . "\"}} -->\n";
			$block_content .= "<div class=\"wp-block-group alignfull mh-section mh-section-" . esc_attr( $type ) . " " . esc_attr( $layout_class ) . "\">\n";
			$block_content .= $inner . "\n";
			$block_content .= "</div>\n";
			$block_content .= "<!-- /wp:group -->\n\n";
		}

		if ( ! empty( $block_content ) ) {
			wp_update_post( array(
				'ID'           => $front_page_id,
				'post_content' => $block_content,
			) );
		}
	}

	private function get_edit( $section, $key, $default ) {
		if ( isset( $section['edits'] ) && isset( $section['edits'][ $key ] ) ) {
			return $section['edits'][ $key ];
		}
		return $default;
	}

	public function render_section_type( $type, $label, $section, $index = 0 ) {
		$h = '';
		$t = $label ?: ucfirst( str_replace( '-', ' ', $type ) );
		
		switch ( $type ) {
			// ── HEROES ──────────────────────────────────────────────
			case 'hero':
				// Split Image Hero
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:48px;align-items:center;text-align:left;">';
				$h .= '<div>';
				$h .= '<span style="display:inline-block;padding:4px 12px;background:color-mix(in srgb, var(--mh-color-brand-base,#2563eb) 12%, transparent);color:var(--mh-color-brand-base,#2563eb);border-radius:9999px;font-size:12px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:16px;" data-mw-edit="badge">' . esc_html( $this->get_edit( $section, 'badge', 'Next Generation' ) ) . '</span>';
				$h .= '<h1 data-mw-edit="title" style="font-size:clamp(2.25rem, 5vw, 3.5rem);font-weight:800;line-height:1.15;color:var(--mh-color-text-heading,#0f172a);margin:0 0 20px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h1>';
				$h .= '<p data-mw-edit="subtitle" style="font-size:1.125rem;color:var(--mh-color-text-muted,#64748b);line-height:1.6;margin:0 0 32px;max-width:540px;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Build extraordinary landing pages with flexible modular sections and clean white-canvas aesthetics.' ) ) . '</p>';
				$h .= '<div style="display:flex;gap:12px;flex-wrap:wrap;">';
				$h .= '<a data-mw-edit="button" href="' . esc_url( $this->get_edit( $section, 'button_url', '#' ) ) . '" style="display:inline-block;padding:12px 28px;background:var(--mh-color-cta-base,#2563eb);color:var(--mh-color-text-inverse,#ffffff);border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;box-shadow:0 2px 6px color-mix(in srgb, var(--mh-color-cta-base,#2563eb) 25%, transparent);">' . esc_html( $this->get_edit( $section, 'button', 'Get Started Now' ) ) . '</a>';
				$h .= '<a data-mw-edit="button_sec" href="' . esc_url( $this->get_edit( $section, 'button_sec_url', '#' ) ) . '" style="display:inline-block;padding:12px 28px;background:var(--mh-color-card,#ffffff);color:var(--mh-color-text-main,#334155);border:1px solid var(--mh-color-border-muted,#cbd5e1);border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;">' . esc_html( $this->get_edit( $section, 'button_sec', 'Explore Features' ) ) . '</a>';
				$h .= '</div></div>';
				$img_src = $this->get_edit( $section, 'image', 'https://picsum.photos/seed/hero' . $index . '/700/500' );
				$h .= '<div><img data-mw-image="image" src="' . esc_url( $img_src ) . '" style="width:100%;height:auto;max-height:480px;object-fit:cover;border-radius:12px;box-shadow:0 20px 25px -5px rgba(0,0,0,0.1);border:1px solid var(--mh-color-border-muted,#e2e8f0);" alt="Hero visual" /></div>';
				$h .= '</div>';
				break;

			case 'hero-centered':
				// Centered Impact Hero
				$h .= '<div style="text-align:center;max-width:840px;margin:0 auto;padding:20px 0;">';
				$h .= '<span style="display:inline-block;padding:4px 14px;background:color-mix(in srgb, var(--mh-color-brand-base,#2563eb) 12%, transparent);color:var(--mh-color-brand-base,#2563eb);border-radius:9999px;font-size:12px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:20px;" data-mw-edit="badge">' . esc_html( $this->get_edit( $section, 'badge', 'Instant Page Generation' ) ) . '</span>';
				$h .= '<h1 data-mw-edit="title" style="font-size:clamp(2.5rem, 6vw, 4rem);font-weight:800;line-height:1.1;color:var(--mh-color-text-heading,#0f172a);margin:0 0 24px;">' . esc_html( $this->get_edit( $section, 'title', 'Create Fast, Scalable Websites with Modular Magic' ) ) . '</h1>';
				$h .= '<p data-mw-edit="subtitle" style="font-size:1.25rem;color:var(--mh-color-text-muted,#64748b);line-height:1.6;margin:0 auto 36px;max-width:640px;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Drop in beautifully designed sections, click to edit copy, and launch high-converting websites in minutes.' ) ) . '</p>';
				$h .= '<div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-bottom:40px;">';
				$h .= '<a data-mw-edit="button" href="' . esc_url( $this->get_edit( $section, 'button_url', '#' ) ) . '" style="display:inline-block;padding:14px 36px;background:var(--mh-color-cta-base,#2563eb);color:var(--mh-color-text-inverse,#ffffff);border-radius:6px;text-decoration:none;font-weight:700;font-size:15px;box-shadow:0 4px 12px color-mix(in srgb, var(--mh-color-cta-base,#2563eb) 30%, transparent);">' . esc_html( $this->get_edit( $section, 'button', 'Start Building Free' ) ) . '</a>';
				$h .= '<a data-mw-edit="button_sec" href="' . esc_url( $this->get_edit( $section, 'button_sec_url', '#' ) ) . '" style="display:inline-block;padding:14px 36px;background:var(--mh-color-card,#ffffff);color:var(--mh-color-text-heading,#0f172a);border:1px solid var(--mh-color-border-muted,#cbd5e1);border-radius:6px;text-decoration:none;font-weight:600;font-size:15px;">' . esc_html( $this->get_edit( $section, 'button_sec', 'Watch Demo' ) ) . '</a>';
				$h .= '</div>';
				$h .= '<p data-mw-edit="proof_text" style="font-size:13px;color:var(--mh-color-text-muted,#64748b);margin:0;">⭐ Trusted by over 10,000+ modern creators and organizations worldwide</p>';
				$h .= '</div>';
				break;

			case 'hero-editorial':
				// Minimalist Editorial Hero
				$h .= '<div style="text-align:left;max-width:960px;margin:0 auto;padding:40px 0;">';
				$h .= '<p data-mw-edit="tagline" style="font-size:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--mh-color-brand-base,#2563eb);margin-bottom:16px;">' . esc_html( $this->get_edit( $section, 'tagline', 'Vol. 01 / Design Engineering' ) ) . '</p>';
				$h .= '<h1 data-mw-edit="title" style="font-size:clamp(3rem, 7vw, 5rem);font-weight:800;line-height:1.05;color:var(--mh-color-text-heading,#0f172a);letter-spacing:-1px;margin:0 0 30px;">' . esc_html( $this->get_edit( $section, 'title', 'Designing with Clarity, Speed, and Purpose.' ) ) . '</h1>';
				$h .= '<div style="display:flex;gap:30px;flex-wrap:wrap;align-items:flex-end;border-top:1px solid var(--mh-color-border-muted,#e2e8f0);padding-top:24px;">';
				$h .= '<p data-mw-edit="subtitle" style="font-size:1.25rem;color:var(--mh-color-text-main,#334155);max-width:600px;margin:0;line-height:1.6;">' . esc_html( $this->get_edit( $section, 'subtitle', 'A blank-canvas foundation built for fast iteration, zero bloat, and timeless digital craftsmanship.' ) ) . '</p>';
				$h .= '<a data-mw-edit="button" href="' . esc_url( $this->get_edit( $section, 'button_url', '#' ) ) . '" style="color:var(--mh-color-brand-base,#2563eb);font-weight:700;text-decoration:none;font-size:16px;display:flex;align-items:center;gap:6px;">' . esc_html( $this->get_edit( $section, 'button', 'Read the Story &rarr;' ) ) . '</a>';
				$h .= '</div></div>';
				break;

			case 'hero-app':
				// App Showcase Hero
				$h .= '<div style="text-align:center;padding:20px 0;">';
				$h .= '<h1 data-mw-edit="title" style="font-size:clamp(2.25rem, 5vw, 3.75rem);font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:0 0 16px;">' . esc_html( $this->get_edit( $section, 'title', 'The Modern Dashboard for Your Entire Workflow' ) ) . '</h1>';
				$h .= '<p data-mw-edit="subtitle" style="font-size:1.125rem;color:var(--mh-color-text-muted,#64748b);max-width:600px;margin:0 auto 32px;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Seamless synchronization, instant publishing, and live direct-canvas page management.' ) ) . '</p>';
				$h .= '<div style="display:flex;justify-content:center;gap:12px;margin-bottom:48px;">';
				$h .= '<a data-mw-edit="button" href="' . esc_url( $this->get_edit( $section, 'button_url', '#' ) ) . '" style="padding:12px 28px;background:var(--mh-color-cta-base,#2563eb);color:var(--mh-color-text-inverse,#ffffff);border-radius:6px;text-decoration:none;font-weight:600;">' . esc_html( $this->get_edit( $section, 'button', 'Download App' ) ) . '</a>';
				$h .= '</div>';
				$img_src = $this->get_edit( $section, 'image', 'https://picsum.photos/seed/app' . $index . '/900/500' );
				$h .= '<div style="max-width:880px;margin:0 auto;border:1px solid var(--mh-color-border-muted,#cbd5e1);border-radius:12px;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,0,0,0.15);background:var(--mh-color-card,#ffffff);">';
				$h .= '<img data-mw-image="image" src="' . esc_url( $img_src ) . '" style="width:100%;height:auto;display:block;" alt="App preview" />';
				$h .= '</div></div>';
				break;

			case 'hero-video':
				// Video Ambient Hero
				$h .= '<div style="background:var(--mh-color-card,#0f172a);color:var(--mh-color-text-heading,#ffffff);border:1px solid var(--mh-color-border-muted,#334155);border-radius:16px;padding:80px 40px;text-align:center;position:relative;overflow:hidden;box-shadow:0 20px 25px -5px rgba(0,0,0,0.2);">';
				$h .= '<span style="display:inline-block;padding:4px 12px;background:color-mix(in srgb, var(--mh-color-brand-base,#2563eb) 15%, transparent);color:var(--mh-color-brand-base,#60a5fa);border-radius:9999px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:20px;">' . esc_html( $this->get_edit( $section, 'badge', 'Cinematic Experience' ) ) . '</span>';
				$h .= '<h1 data-mw-edit="title" style="font-size:clamp(2.5rem, 5vw, 3.75rem);font-weight:800;color:var(--mh-color-text-heading,#ffffff);margin:0 0 20px;">' . esc_html( $this->get_edit( $section, 'title', 'Experience Web Creation in Motion' ) ) . '</h1>';
				$h .= '<p data-mw-edit="subtitle" style="font-size:1.2rem;color:var(--mh-color-text-muted,#94a3b8);max-width:600px;margin:0 auto 36px;line-height:1.6;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Engage your audience with immersive visual narratives and dynamic interactive components.' ) ) . '</p>';
				$h .= '<a data-mw-edit="button" href="' . esc_url( $this->get_edit( $section, 'button_url', '#' ) ) . '" style="display:inline-block;padding:14px 36px;background:var(--mh-color-cta-base,#2563eb);color:var(--mh-color-text-inverse,#ffffff);border-radius:6px;text-decoration:none;font-weight:700;">' . esc_html( $this->get_edit( $section, 'button', 'Play Presentation' ) ) . '</a>';
				$h .= '</div>';
				break;

			// ── FEATURES & SERVICES ─────────────────────────────────
			case 'features':
				// 3-Card Feature Grid
				$h .= '<div style="text-align:center;margin-bottom:48px;">';
				$h .= '<span style="color:var(--mh-color-brand-base,#2563eb);font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:1px;" data-mw-edit="badge">Capabilities</span>';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:8px 0 16px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#64748b);font-size:1.125rem;max-width:600px;margin:0 auto;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Powerful features engineered to streamline your development process.' ) ) . '</p>';
				$h .= '</div>';
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:32px;">';
				$icons = array('⚡','🎯','🔒'); 
				$names = array('Instant Assembly','Precision Layouts','Enterprise Security');
				for ( $i = 0; $i < 3; $i++ ) {
					$h .= '<div style="padding:32px;background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,0.04);text-align:left;">';
					$h .= '<div data-mw-edit="f_icon_'.$i.'" style="font-size:32px;margin-bottom:16px;">' . esc_html( $this->get_edit( $section, 'f_icon_'.$i, $icons[$i] ) ) . '</div>';
					$h .= '<h3 data-mw-edit="f_title_'.$i.'" style="font-size:1.25rem;font-weight:700;color:var(--mh-color-text-heading,#0f172a);margin:0 0 8px;">' . esc_html( $this->get_edit( $section, 'f_title_'.$i, $names[$i] ) ) . '</h3>';
					$h .= '<p data-mw-edit="f_desc_'.$i.'" style="color:var(--mh-color-text-muted,#64748b);font-size:14px;line-height:1.6;margin:0;">' . wp_kses_post( $this->get_edit( $section, 'f_desc_'.$i, 'Modular components designed with strict token standards and clean responsive layouts.' ) ) . '</p>';
					$h .= '</div>';
				}
				$h .= '</div>';
				break;

			case 'features-4col':
				// 4-Column Feature Matrix
				$h .= '<div style="text-align:center;margin-bottom:48px;">';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:0 0 12px;">' . esc_html( $this->get_edit( $section, 'title', 'Designed for Growth' ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#64748b);font-size:1.1rem;max-width:580px;margin:0 auto;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Everything required to scale your online identity.' ) ) . '</p>';
				$h .= '</div>';
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px;">';
				$icons4 = array('🚀','💎','📊','🛠️');
				$names4 = array('Fast Deploy','Clean Craft','Deep Analytics','Custom Tooling');
				for ( $i = 0; $i < 4; $i++ ) {
					$h .= '<div style="padding:24px;background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:8px;text-align:left;">';
					$h .= '<div data-mw-edit="f4_icon_'.$i.'" style="font-size:26px;margin-bottom:12px;">' . esc_html( $this->get_edit( $section, 'f4_icon_'.$i, $icons4[$i] ) ) . '</div>';
					$h .= '<h4 data-mw-edit="f4_title_'.$i.'" style="font-size:16px;font-weight:700;color:var(--mh-color-text-heading,#0f172a);margin:0 0 8px;">' . esc_html( $this->get_edit( $section, 'f4_title_'.$i, $names4[$i] ) ) . '</h4>';
					$h .= '<p data-mw-edit="f4_desc_'.$i.'" style="color:var(--mh-color-text-muted,#64748b);font-size:13px;line-height:1.5;margin:0;">' . wp_kses_post( $this->get_edit( $section, 'f4_desc_'.$i, 'Optimized structures to keep your platform running effortlessly.' ) ) . '</p>';
					$h .= '</div>';
				}
				$h .= '</div>';
				break;

			case 'features-alt':
				// Alternating Feature Rows
				$h .= '<div style="display:flex;flex-direction:column;gap:60px;">';
				// Row 1
				$img1 = $this->get_edit( $section, 'img_1', 'https://picsum.photos/seed/featalt1/600/400' );
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:48px;align-items:center;">';
				$h .= '<div><img data-mw-image="img_1" src="' . esc_url($img1) . '" style="width:100%;height:320px;object-fit:cover;border-radius:8px;border:1px solid var(--mh-color-border-muted,#e2e8f0);" alt="Feature 1" /></div>';
				$h .= '<div>';
				$h .= '<span style="color:var(--mh-color-brand-base,#2563eb);font-weight:700;font-size:12px;text-transform:uppercase;">Workflow Automation</span>';
				$h .= '<h3 data-mw-edit="title_1" style="font-size:1.875rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:8px 0 16px;">' . esc_html( $this->get_edit( $section, 'title_1', 'Accelerate Development Cycles' ) ) . '</h3>';
				$h .= '<p data-mw-edit="text_1" style="color:var(--mh-color-text-muted,#64748b);font-size:15px;line-height:1.7;margin-bottom:20px;">' . wp_kses_post( $this->get_edit( $section, 'text_1', 'Spend less time wrestling with boilerplate and more time delivering exceptional value to your users.' ) ) . '</p>';
				$h .= '<a data-mw-edit="link_1" href="' . esc_url( $this->get_edit( $section, 'link_1_url', '#' ) ) . '" style="color:var(--mh-color-brand-base,#2563eb);font-weight:600;text-decoration:none;">' . esc_html( $this->get_edit( $section, 'link_1', 'Learn more &rarr;' ) ) . '</a>';
				$h .= '</div></div>';
				// Row 2 (Reversed)
				$img2 = $this->get_edit( $section, 'img_2', 'https://picsum.photos/seed/featalt2/600/400' );
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:48px;align-items:center;">';
				$h .= '<div style="order:2;">';
				$h .= '<span style="color:var(--mh-color-brand-base,#2563eb);font-weight:700;font-size:12px;text-transform:uppercase;">Native Performance</span>';
				$h .= '<h3 data-mw-edit="title_2" style="font-size:1.875rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:8px 0 16px;">' . esc_html( $this->get_edit( $section, 'title_2', 'Zero-Bloat Foundation' ) ) . '</h3>';
				$h .= '<p data-mw-edit="text_2" style="color:var(--mh-color-text-muted,#64748b);font-size:15px;line-height:1.7;margin-bottom:20px;">' . wp_kses_post( $this->get_edit( $section, 'text_2', 'Clean semantic Gutenberg block templates mean lightning-fast load times and perfect Core Web Vitals.' ) ) . '</p>';
				$h .= '<a data-mw-edit="link_2" href="' . esc_url( $this->get_edit( $section, 'link_2_url', '#' ) ) . '" style="color:var(--mh-color-brand-base,#2563eb);font-weight:600;text-decoration:none;">' . esc_html( $this->get_edit( $section, 'link_2', 'View benchmarks &rarr;' ) ) . '</a>';
				$h .= '</div>';
				$h .= '<div style="order:1;"><img data-mw-image="img_2" src="' . esc_url($img2) . '" style="width:100%;height:320px;object-fit:cover;border-radius:8px;border:1px solid var(--mh-color-border-muted,#e2e8f0);" alt="Feature 2" /></div>';
				$h .= '</div>';
				$h .= '</div>';
				break;

			case 'features-checklist':
				// Benefit Checklist
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:48px;align-items:center;">';
				$h .= '<div>';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:0 0 16px;">' . esc_html( $this->get_edit( $section, 'title', 'Everything Built In By Default' ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#64748b);font-size:1.1rem;line-height:1.6;margin-bottom:28px;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Forget installing dozens of plugins just to get basic landing page functionality.' ) ) . '</p>';
				$checks = array('Native Gutenberg block serialization', '24-Hour astronomical circadian lighting engine', 'Direct live-canvas editing with instant postMessage sync', 'Zero vendor lock-in with clean semantic HTML5 output');
				$h .= '<ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:14px;">';
				foreach ( $checks as $i => $c ) {
					$h .= '<li style="display:flex;align-items:flex-start;gap:12px;font-size:15px;color:var(--mh-color-text-main,#334155);">';
					$h .= '<span style="color:var(--mh-color-success,#10b981);font-weight:bold;font-size:18px;line-height:1;">✓</span>';
					$h .= '<span data-mw-edit="check_'.$i.'">' . esc_html( $this->get_edit( $section, 'check_'.$i, $c ) ) . '</span>';
					$h .= '</li>';
				}
				$h .= '</ul></div>';
				$img_src = $this->get_edit( $section, 'image', 'https://picsum.photos/seed/checklist/600/450' );
				$h .= '<div><img data-mw-image="image" src="' . esc_url($img_src) . '" style="width:100%;height:380px;object-fit:cover;border-radius:10px;border:1px solid var(--mh-color-border-muted,#e2e8f0);box-shadow:0 10px 20px rgba(0,0,0,0.06);" alt="Checklist visual" /></div>';
				$h .= '</div>';
				break;

			case 'features-bento':
				// Bento Grid
				$h .= '<div style="text-align:center;margin-bottom:48px;">';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:0 0 12px;">' . esc_html( $this->get_edit( $section, 'title', 'Modular Bento Architecture' ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#64748b);font-size:1.1rem;max-width:600px;margin:0 auto;">' . esc_html( $this->get_edit( $section, 'subtitle', 'A balanced composition for high-priority features.' ) ) . '</p>';
				$h .= '</div>';
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;">';
				// Card 1 (Heroic card)
				$h .= '<div style="grid-column:1/-1;padding:40px;background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.04);">';
				$h .= '<span style="font-size:12px;font-weight:700;color:var(--mh-color-brand-base,#2563eb);text-transform:uppercase;">Flagship Feature</span>';
				$h .= '<h3 data-mw-edit="bento_h1" style="font-size:1.75rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:8px 0 12px;">' . esc_html( $this->get_edit( $section, 'bento_h1', 'Universal Token Ecosystem' ) ) . '</h3>';
				$h .= '<p data-mw-edit="bento_p1" style="color:var(--mh-color-text-muted,#64748b);font-size:15px;line-height:1.6;max-width:700px;margin:0;">' . esc_html( $this->get_edit( $section, 'bento_p1', 'Synchronized color spaces and fluid typography across every page element automatically.' ) ) . '</p>';
				$h .= '</div>';
				// Cards 2, 3, 4
				for ( $i = 1; $i <= 3; $i++ ) {
					$h .= '<div style="padding:28px;background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,0.03);">';
					$h .= '<h4 data-mw-edit="bento_sub_'.$i.'" style="font-size:16px;font-weight:700;color:var(--mh-color-text-heading,#0f172a);margin:0 0 8px;">' . esc_html( $this->get_edit( $section, 'bento_sub_'.$i, 'Sub-module ' . $i ) ) . '</h4>';
					$h .= '<p data-mw-edit="bento_sub_p_'.$i.'" style="color:var(--mh-color-text-muted,#64748b);font-size:13px;line-height:1.6;margin:0;">' . esc_html( $this->get_edit( $section, 'bento_sub_p_'.$i, 'Precise execution designed for maximum readability and interaction.' ) ) . '</p>';
					$h .= '</div>';
				}
				$h .= '</div>';
				break;

			// ── ABOUT & NARRATIVE ───────────────────────────────────
			case 'about':
				// Story & Mission Split
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:48px;align-items:center;">';
				$h .= '<div>';
				$h .= '<span style="color:var(--mh-color-brand-base,#2563eb);font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:1px;" data-mw-edit="badge">Our Mission</span>';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:8px 0 20px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2>';
				$h .= '<p data-mw-edit="text1" style="color:var(--mh-color-text-muted,#64748b);line-height:1.8;font-size:15px;margin-bottom:16px;">' . wp_kses_post( $this->get_edit( $section, 'text1', 'We believe web building should feel effortless, expressive, and unencumbered by heavy proprietary codebases.' ) ) . '</p>';
				$h .= '<p data-mw-edit="text2" style="color:var(--mh-color-text-muted,#64748b);line-height:1.8;font-size:15px;margin-bottom:24px;">' . wp_kses_post( $this->get_edit( $section, 'text2', 'By pairing modern WordPress standards with direct tactile editing, we empower creators to build world-class web experiences in record time.' ) ) . '</p>';
				$h .= '<div style="padding-left:16px;border-left:3px solid var(--mh-color-brand-base,#2563eb);"><p data-mw-edit="quote" style="font-style:italic;color:var(--mh-color-text-main,#334155);margin:0;font-size:15px;">"Simplicity is the ultimate sophistication."</p></div>';
				$h .= '</div>';
				$img_src = $this->get_edit( $section, 'image', 'https://picsum.photos/seed/about' . $index . '/600/500' );
				$h .= '<div><img data-mw-image="image" src="' . esc_url( $img_src ) . '" style="width:100%;height:380px;object-fit:cover;border-radius:10px;box-shadow:0 10px 25px rgba(0,0,0,0.06);border:1px solid var(--mh-color-border-muted,#e2e8f0);" alt="About image" /></div>';
				$h .= '</div>';
				break;

			case 'about-values':
				// Core Values Pillars
				$h .= '<div style="text-align:center;margin-bottom:48px;">';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:0 0 12px;">' . esc_html( $this->get_edit( $section, 'title', 'Our Core Principles' ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#64748b);font-size:1.1rem;max-width:560px;margin:0 auto;">' . esc_html( $this->get_edit( $section, 'subtitle', 'The bedrock values that guide every decision we make.' ) ) . '</p>';
				$h .= '</div>';
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:32px;">';
				$values = array(array('Craft & Quality','We obsess over typography, spacing, and micro-interactions.'),array('Radical Simplicity','If a feature does not add clear value, it gets cut.'),array('Open Standards','Zero vendor lock-in. Full native WordPress compatibility.'));
				foreach ( $values as $i => $v ) {
					$h .= '<div style="padding:32px;background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:8px;text-align:center;">';
					$h .= '<div style="width:48px;height:48px;border-radius:50%;background:color-mix(in srgb, var(--mh-color-brand-base,#2563eb) 12%, transparent);color:var(--mh-color-brand-base,#2563eb);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;margin:0 auto 16px;">0' . ($i+1) . '</div>';
					$h .= '<h3 data-mw-edit="val_title_'.$i.'" style="font-size:1.25rem;font-weight:700;color:var(--mh-color-text-heading,#0f172a);margin:0 0 8px;">' . esc_html( $this->get_edit( $section, 'val_title_'.$i, $v[0] ) ) . '</h3>';
					$h .= '<p data-mw-edit="val_desc_'.$i.'" style="color:var(--mh-color-text-muted,#64748b);font-size:14px;line-height:1.6;margin:0;">' . esc_html( $this->get_edit( $section, 'val_desc_'.$i, $v[1] ) ) . '</p>';
					$h .= '</div>';
				}
				$h .= '</div>';
				break;

			case 'about-timeline':
				// Milestones Timeline
				$h .= '<div style="text-align:center;margin-bottom:48px;">';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:0 0 12px;">' . esc_html( $this->get_edit( $section, 'title', 'Our Journey & Milestones' ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#64748b);font-size:1.1rem;max-width:540px;margin:0 auto;">' . esc_html( $this->get_edit( $section, 'subtitle', 'How we reached this scale.' ) ) . '</p>';
				$h .= '</div>';
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:24px;">';
				$steps = array(array('2023','Founding','Initial prototype launched.'),array('2024','Community','10,000 active installations.'),array('2025','Magic Wand','Live visual builder release.'),array('2026','Universal Suite','Global design token framework.'));
				foreach ( $steps as $i => $s ) {
					$h .= '<div style="padding:24px;background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:8px;border-top:3px solid var(--mh-color-brand-base,#2563eb);">';
					$h .= '<span data-mw-edit="time_yr_'.$i.'" style="font-size:20px;font-weight:800;color:var(--mh-color-brand-base,#2563eb);display:block;margin-bottom:6px;">' . esc_html( $this->get_edit( $section, 'time_yr_'.$i, $s[0] ) ) . '</span>';
					$h .= '<h4 data-mw-edit="time_title_'.$i.'" style="font-size:15px;font-weight:700;color:var(--mh-color-text-heading,#0f172a);margin:0 0 6px;">' . esc_html( $this->get_edit( $section, 'time_title_'.$i, $s[1] ) ) . '</h4>';
					$h .= '<p data-mw-edit="time_desc_'.$i.'" style="color:var(--mh-color-text-muted,#64748b);font-size:13px;line-height:1.5;margin:0;">' . esc_html( $this->get_edit( $section, 'time_desc_'.$i, $s[2] ) ) . '</p>';
					$h .= '</div>';
				}
				$h .= '</div>';
				break;

			case 'about-quote':
				// Leadership Quote
				$h .= '<div style="max-width:800px;margin:0 auto;text-align:center;padding:40px 20px;">';
				$h .= '<span style="font-size:48px;line-height:1;color:var(--mh-color-brand-base,#2563eb);font-family:serif;">“</span>';
				$h .= '<p data-mw-edit="quote_text" style="font-size:clamp(1.25rem, 3vw, 1.75rem);font-weight:500;line-height:1.5;color:var(--mh-color-text-heading,#0f172a);margin:0 0 24px;">' . esc_html( $this->get_edit( $section, 'quote_text', 'Great software happens when craftsmanship meets extreme clarity. We built Magic Hat to give everyone that power.' ) ) . '</p>';
				$h .= '<h4 data-mw-edit="author_name" style="font-size:16px;font-weight:700;color:var(--mh-color-text-heading,#0f172a);margin:0 0 4px;">' . esc_html( $this->get_edit( $section, 'author_name', 'Founder & Lead Architect' ) ) . '</h4>';
				$h .= '<p data-mw-edit="author_role" style="font-size:13px;color:var(--mh-color-text-muted,#64748b);margin:0;">' . esc_html( $this->get_edit( $section, 'author_role', 'Project Compass Engineering Group' ) ) . '</p>';
				$h .= '</div>';
				break;

			// ── SOCIAL PROOF & TESTIMONIALS ─────────────────────────
			case 'testimonials':
				// 3-Card Testimonials
				$h .= '<div style="text-align:center;margin-bottom:48px;">';
				$h .= '<span style="color:var(--mh-color-brand-base,#2563eb);font-weight:700;font-size:12px;text-transform:uppercase;" data-mw-edit="badge">Testimonials</span>';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:8px 0 12px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#64748b);font-size:1.1rem;max-width:540px;margin:0 auto;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Hear from teams using our themes in production.' ) ) . '</p>';
				$h .= '</div>';
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:32px;">';
				$quotes = array(
					array('This changed our development pace completely. Unbelievably fast and responsive.','Alex Rivera','VP of Engineering'),
					array('Clean typography, zero bloat, and gorgeous white-canvas aesthetics right out of the box.','Sarah Lin','Lead Product Designer'),
					array('Finally, a visual page builder that generates real Gutenberg blocks without theme lock-in.','James Peterson','Agency Director')
				);
				foreach ( $quotes as $i => $q ) {
					$h .= '<div style="padding:32px;background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,0.04);text-align:left;display:flex;flex-direction:column;justify-content:space-between;">';
					$h .= '<div><div style="color:var(--mh-color-warning,#f59e0b);font-size:16px;margin-bottom:12px;">★★★★★</div>';
					$h .= '<p data-mw-edit="quote_'.$i.'" style="color:var(--mh-color-text-main,#334155);font-size:14px;line-height:1.6;margin-bottom:20px;">"' . esc_html( $this->get_edit( $section, 'quote_'.$i, $q[0] ) ) . '"</p></div>';
					$h .= '<div style="display:flex;align-items:center;gap:12px;border-top:1px solid var(--mh-color-border-muted,#e2e8f0);padding-top:16px;">';
					$avatar = $this->get_edit( $section, 'avatar_'.$i, 'https://picsum.photos/seed/testi' . $i . '/80/80' );
					$h .= '<img data-mw-image="avatar_'.$i.'" src="' . esc_url($avatar) . '" style="width:40px;height:40px;border-radius:50%;object-fit:cover;" alt="Avatar" />';
					$h .= '<div><strong data-mw-edit="author_'.$i.'" style="font-size:13px;color:var(--mh-color-text-heading,#0f172a);display:block;">' . esc_html( $this->get_edit( $section, 'author_'.$i, $q[1] ) ) . '</strong>';
					$h .= '<span data-mw-edit="role_'.$i.'" style="font-size:11px;color:var(--mh-color-text-muted,#64748b);">' . esc_html( $this->get_edit( $section, 'role_'.$i, $q[2] ) ) . '</span></div>';
					$h .= '</div></div>';
				}
				$h .= '</div>';
				break;

			case 'testimonials-single':
				// Large Pull-Quote Hero
				$h .= '<div style="max-width:860px;margin:0 auto;text-align:center;padding:40px 20px;">';
				$h .= '<div style="color:var(--mh-color-warning,#f59e0b);font-size:24px;margin-bottom:16px;">★★★★★</div>';
				$h .= '<h2 data-mw-edit="quote" style="font-size:clamp(1.5rem, 3.5vw, 2.25rem);font-weight:700;line-height:1.4;color:var(--mh-color-text-heading,#0f172a);margin:0 0 24px;">"' . esc_html( $this->get_edit( $section, 'quote', 'Magic Hat cuts page deployment time down to under five minutes. It is the cleanest WordPress theme framework we have ever touched.' ) ) . '"</h2>';
				$h .= '<strong data-mw-edit="author" style="font-size:15px;color:var(--mh-color-text-heading,#0f172a);display:block;">' . esc_html( $this->get_edit( $section, 'author', 'Devon Carter' ) ) . '</strong>';
				$h .= '<span data-mw-edit="role" style="font-size:13px;color:var(--mh-color-text-muted,#64748b);">' . esc_html( $this->get_edit( $section, 'role', 'Chief Technology Officer @ Horizon Labs' ) ) . '</span>';
				$h .= '</div>';
				break;

			case 'clients':
				// Client Logo Wall
				$h .= '<div style="text-align:center;">';
				$h .= '<p data-mw-edit="title" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--mh-color-text-muted,#94a3b8);margin-bottom:24px;">' . esc_html( $this->get_edit( $section, 'title', 'Trusted by forward-thinking teams everywhere' ) ) . '</p>';
				$h .= '<div style="display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:48px;opacity:0.75;">';
				for ( $i = 1; $i <= 5; $i++ ) {
					$img_src = $this->get_edit( $section, 'logo_'.$i, 'https://picsum.photos/seed/client' . $index . '_' . $i . '/120/50' );
					$h .= '<img data-mw-image="logo_'.$i.'" src="' . esc_url($img_src) . '" style="max-height:36px;cursor:pointer;filter:grayscale(100%);transition:filter 0.2s;" onmouseover="this.style.filter=\'none\'" onmouseout="this.style.filter=\'grayscale(100%)\'" alt="Client Logo" />';
				}
				$h .= '</div></div>';
				break;

			case 'case-study':
				// Featured Case Study
				$h .= '<div style="background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.04);display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));">';
				$h .= '<div style="padding:48px;">';
				$h .= '<span style="font-size:12px;font-weight:700;color:var(--mh-color-brand-base,#2563eb);text-transform:uppercase;">Case Study</span>';
				$h .= '<h2 data-mw-edit="title" style="font-size:2rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:8px 0 16px;">' . esc_html( $this->get_edit( $section, 'title', 'Scaling 400% with Instant Block Assembly' ) ) . '</h2>';
				$h .= '<p data-mw-edit="text" style="color:var(--mh-color-text-muted,#64748b);font-size:15px;line-height:1.6;margin-bottom:24px;">' . wp_kses_post( $this->get_edit( $section, 'text', 'How an international media brand migrated off bloated page builders to Magic Hat and tripled organic performance.' ) ) . '</p>';
				$h .= '<div style="display:flex;gap:32px;margin-bottom:28px;">';
				$h .= '<div><span style="font-size:28px;font-weight:800;color:var(--mh-color-text-heading,#0f172a);display:block;">400%</span><span style="font-size:12px;color:var(--mh-color-text-muted,#64748b);">Conversion Lift</span></div>';
				$h .= '<div><span style="font-size:28px;font-weight:800;color:var(--mh-color-text-heading,#0f172a);display:block;">100/100</span><span style="font-size:12px;color:var(--mh-color-text-muted,#64748b);">PageSpeed Score</span></div>';
				$h .= '</div>';
				$h .= '<a data-mw-edit="button" href="' . esc_url( $this->get_edit( $section, 'button_url', '#' ) ) . '" style="color:var(--mh-color-brand-base,#2563eb);font-weight:700;text-decoration:none;font-size:14px;">Read Full Story &rarr;</a>';
				$h .= '</div>';
				$cs_img = $this->get_edit( $section, 'image', 'https://picsum.photos/seed/casestudy/600/500' );
				$h .= '<div><img data-mw-image="image" src="' . esc_url($cs_img) . '" style="width:100%;height:100%;object-fit:cover;min-height:300px;" alt="Case study" /></div>';
				$h .= '</div>';
				break;

			// ── NUMBERS & METRICS ───────────────────────────────────
			case 'numbers':
				// 4-Column Stat Band
				$h .= '<div style="text-align:center;"><h2 data-mw-edit="title" style="font-size:1.875rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin-bottom:40px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2>';
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:32px;">';
				$stats = array(array('99.9%','Uptime Guaranteed'),array('50k+','Active Installations'),array('24/7','Dedicated Support'),array('120+','Global Locations'));
				foreach ( $stats as $i => $s ) {
					$h .= '<div>';
					$h .= '<div data-mw-edit="num_'.$i.'" style="font-size:clamp(2rem, 4vw, 2.75rem);font-weight:800;color:var(--mh-color-brand-base,#2563eb);line-height:1;">' . esc_html( $this->get_edit( $section, 'num_'.$i, $s[0] ) ) . '</div>';
					$h .= '<div data-mw-edit="num_lbl_'.$i.'" style="color:var(--mh-color-text-muted,#64748b);font-size:14px;font-weight:600;margin-top:8px;">' . esc_html( $this->get_edit( $section, 'num_lbl_'.$i, $s[1] ) ) . '</div>';
					$h .= '</div>';
				}
				$h .= '</div></div>';
				break;

			case 'numbers-split':
				// Metric & Narrative Split
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:48px;align-items:center;">';
				$h .= '<div>';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:0 0 16px;">' . esc_html( $this->get_edit( $section, 'title', 'Quantifiable Impact Across Every Industry' ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#64748b);font-size:15px;line-height:1.7;margin:0;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Our metrics speak for themselves. We build robust systems that convert visitors into lifelong brand advocates.' ) ) . '</p>';
				$h .= '</div>';
				$h .= '<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">';
				$h .= '<div style="padding:24px;background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:8px;text-align:center;">';
				$h .= '<span data-mw-edit="stat_1" style="font-size:32px;font-weight:800;color:var(--mh-color-brand-base,#2563eb);display:block;">10x</span>';
				$h .= '<span data-mw-edit="stat_lbl_1" style="font-size:13px;color:var(--mh-color-text-muted,#64748b);">Faster Iteration</span>';
				$h .= '</div>';
				$h .= '<div style="padding:24px;background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:8px;text-align:center;">';
				$h .= '<span data-mw-edit="stat_2" style="font-size:32px;font-weight:800;color:var(--mh-color-brand-base,#2563eb);display:block;">0ms</span>';
				$h .= '<span data-mw-edit="stat_lbl_2" style="font-size:13px;color:var(--mh-color-text-muted,#64748b);">Theme Overhead</span>';
				$h .= '</div>';
				$h .= '</div></div>';
				break;

			case 'numbers-cards':
				// Elevated Stat Cards
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;">';
				$cards = array(array('$250M+','Processed Volume','Across eCommerce clients'),array('15ms','Average TTFB','Server response time'),array('99.99%','SLA Reliability','Enterprise cloud backing'));
				foreach ( $cards as $i => $c ) {
					$h .= '<div style="padding:32px;background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.04);text-align:left;">';
					$h .= '<span data-mw-edit="nc_num_'.$i.'" style="font-size:36px;font-weight:800;color:var(--mh-color-text-heading,#0f172a);display:block;margin-bottom:4px;">' . esc_html( $this->get_edit( $section, 'nc_num_'.$i, $c[0] ) ) . '</span>';
					$h .= '<strong data-mw-edit="nc_title_'.$i.'" style="font-size:14px;color:var(--mh-color-brand-base,#2563eb);display:block;margin-bottom:4px;">' . esc_html( $this->get_edit( $section, 'nc_title_'.$i, $c[1] ) ) . '</strong>';
					$h .= '<p data-mw-edit="nc_desc_'.$i.'" style="font-size:13px;color:var(--mh-color-text-muted,#64748b);margin:0;">' . esc_html( $this->get_edit( $section, 'nc_desc_'.$i, $c[2] ) ) . '</p>';
					$h .= '</div>';
				}
				$h .= '</div>';
				break;

			// ── PRICING & PLANS ─────────────────────────────────────
			case 'pricing':
				// 3-Tier Pricing Table
				$h .= '<div style="text-align:center;margin-bottom:48px;">';
				$h .= '<span style="color:var(--mh-color-brand-base,#2563eb);font-weight:700;font-size:12px;text-transform:uppercase;">Flexible Plans</span>';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:8px 0 12px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#64748b);font-size:1.1rem;max-width:540px;margin:0 auto;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Transparent pricing designed to fit your project scope.' ) ) . '</p>';
				$h .= '</div>';
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:32px;align-items:stretch;">';
				$plans = array(
					array('Starter','$29','Ideal for personal sites and portfolios','1 Site License','Standard Blocks','Community Support'),
					array('Professional','$79','For growing brands and businesses','Unlimited Sites','All 30+ Sections','Priority Support'),
					array('Enterprise','$199','For agencies and enterprise deployments','Dedicated Support','Custom AI Synthesizer','Custom Pattern Export')
				);
				foreach ( $plans as $i => $p ) {
					$is_pro = ($i === 1);
					$border = $is_pro ? 'border:2px solid var(--mh-color-brand-base,#2563eb);' : 'border:1px solid var(--mh-color-border-muted,#e2e8f0);';
					$shadow = $is_pro ? 'box-shadow:0 10px 25px -5px color-mix(in srgb, var(--mh-color-brand-base,#2563eb) 20%, transparent);' : 'box-shadow:0 1px 3px rgba(0,0,0,0.03);';
					$h .= '<div style="background:var(--mh-color-card,#ffffff);' . $border . $shadow . 'border-radius:10px;padding:36px;display:flex;flex-direction:column;justify-content:space-between;position:relative;">';
					if ( $is_pro ) {
						$h .= '<span style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--mh-color-brand-base,#2563eb);color:var(--mh-color-text-inverse,#ffffff);font-size:10px;font-weight:700;text-transform:uppercase;padding:3px 10px;border-radius:9999px;letter-spacing:0.5px;">Most Popular</span>';
					}
					$h .= '<div>';
					$h .= '<h3 data-mw-edit="p_name_'.$i.'" style="font-size:1.25rem;font-weight:700;color:var(--mh-color-text-heading,#0f172a);margin:0 0 6px;">' . esc_html( $this->get_edit( $section, 'p_name_'.$i, $p[0] ) ) . '</h3>';
					$h .= '<p data-mw-edit="p_desc_'.$i.'" style="font-size:13px;color:var(--mh-color-text-muted,#64748b);margin:0 0 20px;">' . esc_html( $this->get_edit( $section, 'p_desc_'.$i, $p[2] ) ) . '</p>';
					$h .= '<div style="margin-bottom:24px;"><span data-mw-edit="p_price_'.$i.'" style="font-size:36px;font-weight:800;color:var(--mh-color-text-heading,#0f172a);">' . esc_html( $this->get_edit( $section, 'p_price_'.$i, $p[1] ) ) . '</span><span style="font-size:13px;color:var(--mh-color-text-muted,#64748b);"> / month</span></div>';
					$h .= '<ul style="list-style:none;padding:0;margin:0 0 32px;display:flex;flex-direction:column;gap:10px;font-size:13px;color:var(--mh-color-text-main,#334155);">';
					for ( $j = 3; $j <= 5; $j++ ) {
						$h .= '<li>✓ ' . esc_html( $p[$j] ) . '</li>';
					}
					$h .= '</ul></div>';
					$btn_bg = $is_pro ? 'background:var(--mh-color-cta-base,#2563eb);color:var(--mh-color-text-inverse,#fff);' : 'background:var(--mh-color-section,#f8fafc);color:var(--mh-color-text-heading,#0f172a);border:1px solid var(--mh-color-border-muted,#cbd5e1);';
					$h .= '<a data-mw-edit="p_btn_'.$i.'" href="' . esc_url( $this->get_edit( $section, 'p_btn_url_'.$i, '#' ) ) . '" style="display:block;text-align:center;padding:12px;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;' . $btn_bg . '">' . esc_html( $this->get_edit( $section, 'p_btn_'.$i, 'Choose Plan' ) ) . '</a>';
					$h .= '</div>';
				}
				$h .= '</div>';
				break;

			case 'pricing-flat':
				// Single All-Inclusive Card
				$h .= '<div style="max-width:540px;margin:0 auto;background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:12px;padding:48px 36px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.08);text-align:center;">';
				$h .= '<span style="font-size:12px;font-weight:700;color:var(--mh-color-brand-base,#2563eb);text-transform:uppercase;">One Simple Price</span>';
				$h .= '<h2 data-mw-edit="title" style="font-size:2rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:8px 0 16px;">' . esc_html( $this->get_edit( $section, 'title', 'All-Access Lifetime' ) ) . '</h2>';
				$h .= '<div style="margin-bottom:24px;"><span data-mw-edit="price" style="font-size:48px;font-weight:800;color:var(--mh-color-text-heading,#0f172a);">$99</span><span style="font-size:14px;color:var(--mh-color-text-muted,#64748b);"> one-time</span></div>';
				$h .= '<ul style="list-style:none;padding:0;margin:0 0 32px;display:flex;flex-direction:column;gap:12px;font-size:14px;color:var(--mh-color-text-main,#334155);text-align:left;max-width:320px;margin-left:auto;margin-right:auto;">';
				$h .= '<li>✓ Full theme and pattern library</li><li>✓ Lifetime automatic updates</li><li>✓ Priority customer support</li><li>✓ Zero recurring subscriptions</li>';
				$h .= '</ul>';
				$h .= '<a data-mw-edit="button" href="' . esc_url( $this->get_edit( $section, 'button_url', '#' ) ) . '" style="display:block;padding:14px;background:var(--mh-color-cta-base,#2563eb);color:var(--mh-color-text-inverse,#ffffff);border-radius:6px;text-decoration:none;font-weight:700;font-size:15px;box-shadow:0 4px 12px color-mix(in srgb, var(--mh-color-cta-base,#2563eb) 30%, transparent);">' . esc_html( $this->get_edit( $section, 'button', 'Get Instant Access' ) ) . '</a>';
				$h .= '</div>';
				break;

			case 'pricing-table':
				// Feature Comparison Matrix
				$h .= '<div style="text-align:center;margin-bottom:40px;">';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:0 0 12px;">' . esc_html( $this->get_edit( $section, 'title', 'Plan Comparison' ) ) . '</h2>';
				$h .= '</div>';
				$h .= '<div style="background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:10px;overflow-x:auto;">';
				$h .= '<table style="width:100%;border-collapse:collapse;font-size:14px;text-align:left;">';
				$h .= '<thead><tr style="background:var(--mh-color-section,#f8fafc);border-bottom:1px solid var(--mh-color-border-muted,#e2e8f0);color:var(--mh-color-text-heading,#0f172a);"><th style="padding:16px 20px;">Feature</th><th style="padding:16px 20px;">Starter</th><th style="padding:16px 20px;">Pro</th><th style="padding:16px 20px;">Enterprise</th></tr></thead>';
				$h .= '<tbody>';
				$h .= '<tr style="border-bottom:1px solid var(--mh-color-border-muted,#f1f5f9);color:var(--mh-color-text-main,#334155);"><td style="padding:14px 20px;">Block Patterns</td><td style="padding:14px 20px;">10</td><td style="padding:14px 20px;">All 30+</td><td style="padding:14px 20px;">All 30+</td></tr>';
				$h .= '<tr style="border-bottom:1px solid var(--mh-color-border-muted,#f1f5f9);color:var(--mh-color-text-main,#334155);"><td style="padding:14px 20px;">Circadian Lighting Engine</td><td style="padding:14px 20px;">✓</td><td style="padding:14px 20px;">✓</td><td style="padding:14px 20px;">✓</td></tr>';
				$h .= '<tr style="border-bottom:1px solid var(--mh-color-border-muted,#f1f5f9);color:var(--mh-color-text-main,#334155);"><td style="padding:14px 20px;">AI Page Synthesizer</td><td style="padding:14px 20px;">-</td><td style="padding:14px 20px;">✓</td><td style="padding:14px 20px;">✓</td></tr>';
				$h .= '<tr style="color:var(--mh-color-text-main,#334155);"><td style="padding:14px 20px;">Dedicated Engineer Support</td><td style="padding:14px 20px;">-</td><td style="padding:14px 20px;">-</td><td style="padding:14px 20px;">✓</td></tr>';
				$h .= '</tbody></table></div>';
				break;

			// ── TEAM & PEOPLE ───────────────────────────────────────
			case 'team':
				// 4-Column Team Grid
				$h .= '<div style="text-align:center;margin-bottom:48px;">';
				$h .= '<span style="color:var(--mh-color-brand-base,#2563eb);font-weight:700;font-size:12px;text-transform:uppercase;">Our People</span>';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:8px 0 12px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#64748b);font-size:1.1rem;max-width:540px;margin:0 auto;">' . esc_html( $this->get_edit( $section, 'subtitle', 'The engineering and design talent driving our roadmap.' ) ) . '</p>';
				$h .= '</div>';
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:32px;text-align:center;">';
				$team_members = array(
					array('Marcus Vance','Chief Design Synthesist'),
					array('Elena Rostova','Director of Engineering'),
					array('Julian Hayes','Lead Security Architect'),
					array('Aria Chen','Product Strategist')
				);
				foreach ( $team_members as $i => $m ) {
					$h .= '<div style="background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:10px;padding:24px;box-shadow:0 1px 3px rgba(0,0,0,0.03);">';
					$avatar = $this->get_edit( $section, 't_avatar_'.$i, 'https://picsum.photos/seed/tm' . $i . '/200/200' );
					$h .= '<img data-mw-image="t_avatar_'.$i.'" src="' . esc_url($avatar) . '" style="width:96px;height:96px;border-radius:50%;object-fit:cover;margin:0 auto 16px;display:block;" alt="Team member" />';
					$h .= '<h4 data-mw-edit="t_name_'.$i.'" style="font-size:16px;font-weight:700;color:var(--mh-color-text-heading,#0f172a);margin:0 0 4px;">' . esc_html( $this->get_edit( $section, 't_name_'.$i, $m[0] ) ) . '</h4>';
					$h .= '<p data-mw-edit="t_role_'.$i.'" style="font-size:13px;color:var(--mh-color-text-muted,#64748b);margin:0;">' . esc_html( $this->get_edit( $section, 't_role_'.$i, $m[1] ) ) . '</p>';
					$h .= '</div>';
				}
				$h .= '</div>';
				break;

			case 'team-split':
				// Executive Profile Split
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:48px;align-items:center;">';
				$exec_img = $this->get_edit( $section, 'image', 'https://picsum.photos/seed/exec/600/600' );
				$h .= '<div><img data-mw-image="image" src="' . esc_url($exec_img) . '" style="width:100%;height:400px;object-fit:cover;border-radius:12px;border:1px solid var(--mh-color-border-muted,#e2e8f0);box-shadow:0 10px 25px rgba(0,0,0,0.08);" alt="Executive" /></div>';
				$h .= '<div>';
				$h .= '<span style="color:var(--mh-color-brand-base,#2563eb);font-weight:700;font-size:12px;text-transform:uppercase;">Leadership</span>';
				$h .= '<h2 data-mw-edit="name" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:8px 0 4px;">' . esc_html( $this->get_edit( $section, 'name', 'Alexander Sterling' ) ) . '</h2>';
				$h .= '<p data-mw-edit="role" style="font-size:15px;font-weight:600;color:var(--mh-color-brand-base,#2563eb);margin:0 0 20px;">' . esc_html( $this->get_edit( $section, 'role', 'Founder & Chief Executive Officer' ) ) . '</p>';
				$h .= '<p data-mw-edit="bio" style="color:var(--mh-color-text-muted,#64748b);line-height:1.8;font-size:15px;margin:0 0 24px;">' . wp_kses_post( $this->get_edit( $section, 'bio', 'With over 15 years in software architecture, Alexander pioneered circadian illumination models for enterprise web apps and champions open standard block engineering.' ) ) . '</p>';
				$h .= '<a data-mw-edit="link" href="' . esc_url( $this->get_edit( $section, 'link_url', '#' ) ) . '" style="color:var(--mh-color-brand-base,#2563eb);font-weight:700;text-decoration:none;font-size:14px;">Connect on LinkedIn &rarr;</a>';
				$h .= '</div></div>';
				break;

			// ── FAQ & ACCORDION ─────────────────────────────────────
			case 'faq':
				// 2-Column FAQ Grid
				$h .= '<div style="text-align:center;margin-bottom:48px;">';
				$h .= '<span style="color:var(--mh-color-brand-base,#2563eb);font-weight:700;font-size:12px;text-transform:uppercase;">Got Questions?</span>';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:8px 0 12px;">' . esc_html( $this->get_edit( $section, 'title', 'Frequently Asked Questions' ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#64748b);font-size:1.1rem;max-width:540px;margin:0 auto;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Clear answers to everything you might wonder about our theme architecture.' ) ) . '</p>';
				$h .= '</div>';
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:32px;text-align:left;">';
				$faqs = array(
					array('Does this lock me into proprietary themes?','No. Magic Hat compiles and writes pure native Gutenberg blocks to post_content. If you switch themes, your content remains fully intact.'),
					array('How does the circadian engine work?','It calculates dynamic 24-hour cosine curves from local solar time and outputs OKLCH color variables to automatically harmonize daylight and twilight phases.'),
					array('Can I build complete multi-page sites?','Yes. You can insert, customize, and save sections to any WordPress page or template with bidirectional synchronization.'),
					array('Is this compatible with Full Site Editing?','100%. Magic Hat conforms to the official WordPress 6.x/7.x theme.json standard and supports Appearance > Editor.')
				);
				foreach ( $faqs as $i => $faq ) {
					$h .= '<div style="padding:24px;background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:8px;">';
					$h .= '<h4 data-mw-edit="faq_q_'.$i.'" style="font-size:16px;font-weight:700;color:var(--mh-color-text-heading,#0f172a);margin:0 0 8px;">' . esc_html( $this->get_edit( $section, 'faq_q_'.$i, $faq[0] ) ) . '</h4>';
					$h .= '<p data-mw-edit="faq_a_'.$i.'" style="color:var(--mh-color-text-muted,#64748b);font-size:14px;line-height:1.6;margin:0;">' . wp_kses_post( $this->get_edit( $section, 'faq_a_'.$i, $faq[1] ) ) . '</p>';
					$h .= '</div>';
				}
				$h .= '</div>';
				break;

			case 'faq-accordion':
				// Single Column Accordion Cards
				$h .= '<div style="max-width:760px;margin:0 auto;">';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);text-align:center;margin:0 0 36px;">' . esc_html( $this->get_edit( $section, 'title', 'Common Questions' ) ) . '</h2>';
				$h .= '<div style="display:flex;flex-direction:column;gap:16px;">';
				for ( $i = 0; $i < 4; $i++ ) {
					$h .= '<div style="padding:20px 24px;background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:8px;box-shadow:0 1px 2px rgba(0,0,0,0.03);">';
					$h .= '<h4 data-mw-edit="fa_q_'.$i.'" style="font-size:16px;font-weight:700;color:var(--mh-color-text-heading,#0f172a);margin:0 0 6px;">' . esc_html( $this->get_edit( $section, 'fa_q_'.$i, 'Question #' . ($i+1) . ' details' ) ) . '</h4>';
					$h .= '<p data-mw-edit="fa_a_'.$i.'" style="color:var(--mh-color-text-muted,#64748b);font-size:14px;line-height:1.6;margin:0;">' . wp_kses_post( $this->get_edit( $section, 'fa_a_'.$i, 'Concise answer providing all necessary context and clarity for the user.' ) ) . '</p>';
					$h .= '</div>';
				}
				$h .= '</div></div>';
				break;

			// ── CALL TO ACTION (CTA) ────────────────────────────────
			case 'cta':
				// High-Impact Accent Banner
				$h .= '<div style="background:var(--mh-color-cta-base,#2563eb);color:var(--mh-color-text-inverse,#ffffff);padding:60px 40px;border-radius:12px;text-align:center;box-shadow:0 10px 25px -5px color-mix(in srgb, var(--mh-color-cta-base,#2563eb) 30%, transparent);">';
				$h .= '<h2 data-mw-edit="title" style="color:var(--mh-color-text-inverse,#ffffff);font-size:clamp(2rem, 4vw, 2.75rem);font-weight:800;margin:0 0 16px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:color-mix(in srgb, var(--mh-color-text-inverse,#ffffff) 90%, transparent);max-width:540px;margin:0 auto 32px;font-size:1.125rem;line-height:1.6;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Start building beautiful, responsive, and native WordPress landing pages today.' ) ) . '</p>';
				$h .= '<a data-mw-edit="button" href="' . esc_url( $this->get_edit( $section, 'button_url', '#' ) ) . '" style="display:inline-block;padding:14px 36px;background:var(--mh-color-card,#ffffff);color:var(--mh-color-cta-base,#2563eb);border-radius:6px;text-decoration:none;font-weight:700;font-size:15px;box-shadow:0 4px 6px rgba(0,0,0,0.1);">' . esc_html( $this->get_edit( $section, 'button', 'Get Started for Free' ) ) . '</a>';
				$h .= '</div>';
				break;

			case 'cta-newsletter':
				// Newsletter Signup Box
				$h .= '<div style="max-width:680px;margin:0 auto;background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:12px;padding:48px 36px;text-align:center;box-shadow:0 4px 16px rgba(0,0,0,0.04);">';
				$h .= '<h2 data-mw-edit="title" style="font-size:2rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:0 0 12px;">' . esc_html( $this->get_edit( $section, 'title', 'Stay Ahead of the Curve' ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#64748b);font-size:14px;max-width:480px;margin:0 auto 28px;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Receive weekly insights on modern WordPress architecture, performance tuning, and design systems.' ) ) . '</p>';
				$h .= '<div style="display:flex;gap:8px;max-width:440px;margin:0 auto 12px;">';
				$h .= '<input type="email" placeholder="Enter your email" style="flex:1;padding:12px 16px;border:1px solid var(--mh-color-border-muted,#cbd5e1);border-radius:6px;font-size:14px;background:var(--mh-color-body,#ffffff);color:var(--mh-color-text-main,#334155);outline:none;" />';
				$h .= '<button type="button" style="padding:12px 24px;background:var(--mh-color-cta-base,#2563eb);color:var(--mh-color-text-inverse,#ffffff);border:none;border-radius:6px;font-weight:700;font-size:14px;cursor:pointer;">Subscribe</button>';
				$h .= '</div>';
				$h .= '<span style="font-size:11px;color:var(--mh-color-text-muted,#94a3b8);">Zero spam. Unsubscribe anytime with one click.</span>';
				$h .= '</div>';
				break;

			case 'cta-split':
				// Dual Action Split Banner
				$h .= '<div style="background:var(--mh-color-card,#0f172a);color:var(--mh-color-text-heading,#ffffff);border:1px solid var(--mh-color-border-muted,#334155);border-radius:12px;padding:60px 48px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:32px;">';
				$h .= '<div style="max-width:540px;">';
				$h .= '<h2 data-mw-edit="title" style="color:var(--mh-color-text-heading,#ffffff);font-size:2.25rem;font-weight:800;margin:0 0 12px;">' . esc_html( $this->get_edit( $section, 'title', 'Ready to Elevate Your Website?' ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#94a3b8);font-size:15px;line-height:1.6;margin:0;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Choose your pathway: download the complete theme framework or consult with our solutions team.' ) ) . '</p>';
				$h .= '</div>';
				$h .= '<div style="display:flex;gap:12px;flex-wrap:wrap;">';
				$h .= '<a data-mw-edit="btn_1" href="' . esc_url( $this->get_edit( $section, 'btn_1_url', '#' ) ) . '" style="padding:12px 28px;background:var(--mh-color-cta-base,#2563eb);color:var(--mh-color-text-inverse,#ffffff);border-radius:6px;text-decoration:none;font-weight:700;font-size:14px;">Get Started</a>';
				$h .= '<a data-mw-edit="btn_2" href="' . esc_url( $this->get_edit( $section, 'btn_2_url', '#' ) ) . '" style="padding:12px 28px;background:transparent;color:var(--mh-color-text-heading,#ffffff);border:1px solid var(--mh-color-border-muted,#475569);border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;">Contact Us</a>';
				$h .= '</div></div>';
				break;

			// ── CONTACT & UTILITY ───────────────────────────────────
			case 'contact':
				// Split Contact & Form
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:48px;text-align:left;">';
				$h .= '<div>';
				$h .= '<span style="color:var(--mh-color-brand-base,#2563eb);font-weight:700;font-size:12px;text-transform:uppercase;">Get in Touch</span>';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:8px 0 16px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#64748b);margin-bottom:28px;font-size:15px;line-height:1.6;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Have questions or need enterprise assistance? Our team responds within 24 hours.' ) ) . '</p>';
				$admin_email = get_bloginfo( 'admin_email' );
				$h .= '<div style="margin-bottom:16px;"><strong>Email:</strong> <span data-mw-edit="email" style="color:var(--mh-color-text-muted,#64748b);display:block;margin-top:2px;">' . esc_html( $this->get_edit( $section, 'email', $admin_email ) ) . '</span></div>';
				$h .= '<div style="margin-bottom:16px;"><strong>Phone:</strong> <span data-mw-edit="phone" style="color:var(--mh-color-text-muted,#64748b);display:block;margin-top:2px;">' . esc_html( $this->get_edit( $section, 'phone', '+1 (555) 019-2834' ) ) . '</span></div>';
				$h .= '<div><strong>Office:</strong> <span data-mw-edit="address" style="color:var(--mh-color-text-muted,#64748b);display:block;margin-top:2px;">' . esc_html( $this->get_edit( $section, 'address', '742 Evergreen Terrace, Sector 4' ) ) . '</span></div>';
				$h .= '</div>';
				$h .= '<div style="background:var(--mh-color-card,#ffffff);padding:36px;border-radius:10px;border:1px solid var(--mh-color-border-muted,#e2e8f0);box-shadow:0 4px 12px rgba(0,0,0,0.03);">';
				$shortcode = $this->get_edit( $section, 'shortcode', '[contact-form-7]' );
				$h .= '<div data-mw-shortcode="shortcode" style="cursor:pointer;" title="Click to edit shortcode">';
				$rendered = do_shortcode( wp_kses_post( $shortcode ) );
				if ( empty( trim( $rendered ) ) || $rendered === $shortcode ) {
					$h .= '<div style="padding:40px 20px;background:var(--mh-color-section,#f8fafc);border:1px dashed var(--mh-color-border-muted,#cbd5e1);text-align:center;color:var(--mh-color-text-muted,#64748b);font-family:monospace;border-radius:6px;font-size:13px;">' . esc_html( $shortcode ) . ' (Click to edit)</div>';
				} else {
					$h .= $rendered;
				}
				$h .= '</div></div></div>';
				break;

			case 'contact-bar':
				// Horizontal Contact Strip
				$h .= '<div style="display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;gap:24px;text-align:center;">';
				$h .= '<div><span style="font-size:12px;color:var(--mh-color-text-muted,#94a3b8);text-transform:uppercase;font-weight:700;display:block;">Phone</span><strong data-mw-edit="phone" style="font-size:15px;color:var(--mh-color-text-heading,#0f172a);">' . esc_html( $this->get_edit( $section, 'phone', '+1 (555) 234-5678' ) ) . '</strong></div>';
				$h .= '<div><span style="font-size:12px;color:var(--mh-color-text-muted,#94a3b8);text-transform:uppercase;font-weight:700;display:block;">Email</span><strong data-mw-edit="email" style="font-size:15px;color:var(--mh-color-text-heading,#0f172a);">' . esc_html( $this->get_edit( $section, 'email', get_bloginfo('admin_email') ) ) . '</strong></div>';
				$h .= '<div><span style="font-size:12px;color:var(--mh-color-text-muted,#94a3b8);text-transform:uppercase;font-weight:700;display:block;">Hours</span><strong data-mw-edit="hours" style="font-size:15px;color:var(--mh-color-text-heading,#0f172a);">' . esc_html( $this->get_edit( $section, 'hours', 'Mon - Fri, 9am - 6pm' ) ) . '</strong></div>';
				$h .= '</div>';
				break;

			case 'latest-posts':
				// Latest 3 Blog Posts
				$h .= '<div style="text-align:center;margin-bottom:48px;">';
				$h .= '<span style="color:var(--mh-color-brand-base,#2563eb);font-weight:700;font-size:12px;text-transform:uppercase;">From the Journal</span>';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:8px 0 12px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#64748b);font-size:1.1rem;max-width:540px;margin:0 auto;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Latest articles, product updates, and technical insights.' ) ) . '</p>';
				$h .= '</div>';
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:32px;text-align:left;">';
				$posts = get_posts(array('posts_per_page' => 3));
				if ( ! empty( $posts ) ) {
					foreach ( $posts as $p ) {
						$img = get_the_post_thumbnail_url($p, 'medium');
						$h .= '<div style="background:var(--mh-color-card,#ffffff);border:1px solid var(--mh-color-border-muted,#e2e8f0);border-radius:10px;overflow-hidden;box-shadow:0 1px 3px rgba(0,0,0,0.03);display:flex;flex-direction:column;justify-content:space-between;">';
						if ( $img ) {
							$h .= '<img src="' . esc_url($img) . '" style="width:100%;height:180px;object-fit:cover;" alt="Post thumbnail" />';
						} else {
							$h .= '<div style="width:100%;height:140px;background:var(--mh-color-section,#f1f5f9);display:flex;align-items:center;justify-content:center;color:var(--mh-color-text-muted,#94a3b8);font-size:12px;">Article</div>';
						}
						$h .= '<div style="padding:24px;flex:1;display:flex;flex-direction:column;justify-content:space-between;">';
						$h .= '<div><span style="font-size:11px;font-weight:700;color:var(--mh-color-brand-base,#2563eb);text-transform:uppercase;margin-bottom:6px;display:block;">' . get_the_date( 'M j, Y', $p ) . '</span>';
						$h .= '<h3 style="font-size:17px;font-weight:700;color:var(--mh-color-text-heading,#0f172a);margin:0 0 8px;"><a href="' . get_permalink($p) . '" style="text-decoration:none;color:inherit;">' . esc_html($p->post_title) . '</a></h3>';
						$h .= '<p style="color:var(--mh-color-text-muted,#64748b);font-size:13px;line-height:1.6;margin:0 0 16px;">' . wp_trim_words($p->post_content, 18) . '</p></div>';
						$h .= '<a href="' . get_permalink($p) . '" style="color:var(--mh-color-brand-base,#2563eb);font-weight:600;font-size:13px;text-decoration:none;">Read Article &rarr;</a>';
						$h .= '</div></div>';
					}
				} else {
					$h .= '<p style="color:var(--mh-color-text-muted,#64748b);text-align:center;grid-column:1/-1;">No posts found.</p>';
				}
				$h .= '</div>';
				break;

			case 'content':
				// Rich text content section
				$h .= '<div style="text-align:left;max-width:840px;margin:0 auto;">';
				$h .= '<h2 data-mw-edit="title" style="font-size:2rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin-bottom:16px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2>';
				$h .= '<div data-mw-edit="text" style="color:var(--mh-color-text-main,#334155);line-height:1.8;font-size:16px;">' . wp_kses_post( $this->get_edit( $section, 'text', '<p>This is a rich content section for long-form text, articles, or any structured content constrained for optimal reading width.</p>' ) ) . '</div>';
				$h .= '</div>';
				break;

			case 'portfolio':
				// Portfolio Grid
				$h .= '<div style="text-align:center;margin-bottom:48px;">';
				$h .= '<h2 data-mw-edit="title" style="font-size:2.25rem;font-weight:800;color:var(--mh-color-text-heading,#0f172a);margin:0 0 12px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted,#64748b);font-size:1.1rem;max-width:540px;margin:0 auto;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Selected projects and client showcases.' ) ) . '</p>';
				$h .= '</div>';
				$h .= '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;">';
				for ( $i = 1; $i <= 6; $i++ ) {
					$img_src = $this->get_edit( $section, 'project_img_'.$i, 'https://picsum.photos/seed/port' . $i . '/600/400' );
					$h .= '<div style="border-radius:8px;overflow:hidden;border:1px solid var(--mh-color-border-muted,#e2e8f0);box-shadow:0 1px 3px rgba(0,0,0,0.03);">';
					$h .= '<img data-mw-image="project_img_'.$i.'" src="' . esc_url($img_src) . '" style="width:100%;height:240px;object-fit:cover;display:block;" alt="Project ' . $i . '" />';
					$h .= '</div>';
				}
				$h .= '</div>';
				break;

			default:
				$h .= '<div style="text-align:center;padding:48px 20px;background:var(--mh-color-card,#ffffff);border:1px dashed var(--mh-color-border-muted,#cbd5e1);border-radius:8px;color:var(--mh-color-text-muted,#64748b);">';
				$h .= '<h3 style="color:var(--mh-color-text-heading,#0f172a);margin-top:0;">' . esc_html($t) . '</h3>';
				$h .= '<p style="margin-bottom:0;">Section: <code>' . esc_html($type) . '</code></p>';
				$h .= '</div>';
		}
		return $h;
	}

}
