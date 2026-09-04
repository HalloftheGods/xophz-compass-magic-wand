<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Xophz_Compass_Magic_Wand
 * @subpackage Xophz_Compass_Magic_Wand/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Xophz_Compass_Magic_Wand
 * @subpackage Xophz_Compass_Magic_Wand/public
 * @author     Your Name <email@example.com>
 */
class Xophz_Compass_Magic_Wand_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Xophz_Compass_Magic_Wand_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Xophz_Compass_Magic_Wand_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/xophz-compass-magic-wand-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Xophz_Compass_Magic_Wand_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Xophz_Compass_Magic_Wand_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */


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
	}

	/**
	 * Render the page builder sections in the content.
	 */
	public function render_page_builder_content( $content ) {
		if ( ! is_page() ) { return $content; }

		$sections_json = get_theme_mod( 'mh_page_sections', '[]' );
		$sections = json_decode( $sections_json, true );
		if ( empty( $sections ) || ! is_array( $sections ) ) { return $content; }

		$out = '<div class="mh-page-builder-content">';
		foreach ( $sections as $index => $section ) {
			$type  = isset( $section['type'] ) ? $section['type'] : '';
			$label = isset( $section['label'] ) ? $section['label'] : '';
			$slug  = $label ? sanitize_title( $label ) : $type;
			$layout = isset( $section['settings']['layout'] ) ? $section['settings']['layout'] : 'contained';
			$max_width = ( $layout === 'full' ) ? '100%' : 'var(--mh-content-width,1200px)';
			
			$out .= '<section id="' . esc_attr( $slug ) . '" class="mh-section mh-section-' . esc_attr($type) . '" style="padding:80px 20px;border-bottom:1px solid var(--mh-color-border-muted,#eaeaea);">';
			$out .= '<div class="mh-container" style="max-width:' . esc_attr( $max_width ) . ';margin:0 auto;transition:max-width 0.3s;">';
			$out .= $this->render_section_type( $type, $label, $section, $index );
			$out .= '</div></section>';
		}
		$out .= '</div>';
		return $out . $content;
	}

	private function get_edit( $section, $key, $default ) {
		if ( isset( $section['edits'] ) && isset( $section['edits'][ $key ] ) ) {
			return $section['edits'][ $key ];
		}
		return $default;
	}

	private function render_section_type( $type, $label, $section, $index = 0 ) {
		$h = '';
		$t = $label ?: ucfirst( str_replace( '-', ' ', $type ) );
		
		switch ( $type ) {
			case 'hero':
				$h .= '<div style="text-align:center;padding:40px 0;">';
				$h .= '<h1 data-mw-edit="title" style="font-size:var(--mh-font-size-h1,48px);font-weight:var(--mh-heading-weight,700);margin-bottom:20px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h1>';
				$h .= '<p data-mw-edit="subtitle" style="font-size:1.25rem;color:var(--mh-color-text-muted);max-width:600px;margin:0 auto 40px;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Build stunning pages with the Magic Wand companion.' ) ) . '</p>';
				$h .= '<a data-mw-edit="button" href="' . esc_url( $this->get_edit( $section, 'button_url', '#' ) ) . '" style="display:inline-block;padding:14px 36px;background:var(--mh-color-brand-base,#62c9ff);color:#fff;border-radius:var(--mh-border-radius,4px);text-decoration:none;font-weight:600;">' . esc_html( $this->get_edit( $section, 'button', 'Get Started' ) ) . '</a></div>';
				break;
			case 'about':
				$h .= '<div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;text-align:left;"><div>';
				$h .= '<h2 data-mw-edit="title" style="margin-bottom:16px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2>';
				$h .= '<p data-mw-edit="text1" style="color:var(--mh-color-text-muted);line-height:1.7;">' . wp_kses_post( $this->get_edit( $section, 'text1', 'We are passionate about building tools that empower creators. Our mission is to make the web accessible, beautiful, and functional for everyone.' ) ) . '</p>';
				$img_src = $this->get_edit( $section, 'image', 'https://picsum.photos/seed/about' . $index . '/600/400' );
				$h .= '</div><div><img data-mw-image="image" src="' . esc_url( $img_src ) . '" style="width:100%;height:300px;object-fit:cover;border-radius:var(--mh-border-radius,4px);cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.1);" /></div></div>';
				break;
			case 'content':
				$h .= '<div style="text-align:left;max-width:800px;margin:0 auto;">';
				$h .= '<h2 data-mw-edit="title" style="margin-bottom:16px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2>';
				$h .= '<p data-mw-edit="text" style="color:var(--mh-color-text-muted);line-height:1.8;">' . wp_kses_post( $this->get_edit( $section, 'text', 'This is a rich content section for long-form text, articles, or any structured content constrained for optimal reading width.' ) ) . '</p>';
				$h .= '</div>';
				break;
			case 'features':
				$h .= '<div style="text-align:center;"><h2 data-mw-edit="title" style="margin-bottom:40px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:30px;">';
				$icons = array('⚡','🎯','🔒'); 
				$names = array('Fast Performance','Precision Targeting','Secure by Default');
				for ( $i=0; $i<3; $i++ ) {
					$h .= '<div style="padding:30px;background:var(--mh-color-card,#f9f9f9);border:1px solid var(--mh-color-border-muted,#eee);border-radius:var(--mh-border-radius,4px);">';
					$h .= '<div data-mw-edit="f_icon_'.$i.'" style="font-size:32px;margin-bottom:12px;">' . esc_html( $this->get_edit( $section, 'f_icon_'.$i, $icons[$i] ) ) . '</div>';
					$h .= '<h3 data-mw-edit="f_title_'.$i.'" style="margin-bottom:8px;font-size:18px;">' . esc_html( $this->get_edit( $section, 'f_title_'.$i, $names[$i] ) ) . '</h3>';
					$h .= '<p data-mw-edit="f_desc_'.$i.'" style="color:var(--mh-color-text-muted);font-size:14px;">' . wp_kses_post( $this->get_edit( $section, 'f_desc_'.$i, 'A concise description of this feature.' ) ) . '</p>';
					$h .= '</div>';
				}
				$h .= '</div></div>';
				break;
			case 'numbers':
				$h .= '<div style="text-align:center;"><h2 data-mw-edit="title" style="margin-bottom:40px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:30px;">';
				$stats = array(array('500+','Projects'),array('50+','Team Members'),array('99%','Uptime'),array('24/7','Support'));
				foreach ( $stats as $i => $s ) {
					$h .= '<div><div data-mw-edit="num_'.$i.'" style="font-size:36px;font-weight:700;color:var(--mh-color-brand-base,#62c9ff);">' . esc_html( $this->get_edit( $section, 'num_'.$i, $s[0] ) ) . '</div>';
					$h .= '<div data-mw-edit="num_lbl_'.$i.'" style="color:var(--mh-color-text-muted);margin-top:4px;">' . esc_html( $this->get_edit( $section, 'num_lbl_'.$i, $s[1] ) ) . '</div></div>';
				}
				$h .= '</div></div>';
				break;
			case 'cta':
				$h .= '<div style="background:var(--mh-color-brand-base,#62c9ff);padding:60px 40px;border-radius:var(--mh-border-radius,4px);text-align:center;">';
				$h .= '<h2 data-mw-edit="title" style="color:#fff;margin-bottom:16px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:rgba(255,255,255,0.85);max-width:500px;margin:0 auto 30px;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Take the next step. Join thousands who already made the switch.' ) ) . '</p>';
				$h .= '<a data-mw-edit="button" href="' . esc_url( $this->get_edit( $section, 'button_url', '#' ) ) . '" style="display:inline-block;padding:14px 36px;background:#fff;color:var(--mh-color-brand-base,#333);border-radius:var(--mh-border-radius,4px);text-decoration:none;font-weight:600;">' . esc_html( $this->get_edit( $section, 'button', 'Get Started' ) ) . '</a></div>';
				break;
			case 'testimonials':
				$h .= '<div style="text-align:center;"><h2 data-mw-edit="title" style="margin-bottom:40px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:30px;">';
				$quotes = array(array('This product changed the way we work.','Alex M.'),array('Outstanding support and beautiful design.','Sarah K.'),array('Highly recommended for any business.','James R.'));
				foreach ( $quotes as $i => $q ) {
					$h .= '<div style="padding:30px;background:var(--mh-color-card,#f9f9f9);border:1px solid var(--mh-color-border-muted,#eee);border-radius:var(--mh-border-radius,4px);text-align:left;">';
					$h .= '<p data-mw-edit="quote_'.$i.'" style="color:var(--mh-color-text-muted);font-style:italic;line-height:1.6;margin-bottom:16px;">"' . esc_html( $this->get_edit( $section, 'quote_'.$i, $q[0] ) ) . '"</p>';
					$h .= '<strong data-mw-edit="author_'.$i.'" style="font-size:13px;">- ' . esc_html( $this->get_edit( $section, 'author_'.$i, $q[1] ) ) . '</strong></div>';
				}
				$h .= '</div></div>';
				break;
			case 'clients':
				$h .= '<div style="text-align:center;"><h2 data-mw-edit="title" style="margin-bottom:30px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2><div style="display:flex;flex-wrap:wrap;justify-content:center;gap:40px;align-items:center;opacity:0.8;">';
				for ( $i=1; $i<=5; $i++ ) {
					$img_src = $this->get_edit( $section, 'logo_'.$i, 'https://picsum.photos/seed/client' . $index . '_' . $i . '/120/50' );
					$h .= '<img data-mw-image="logo_'.$i.'" src="' . esc_url($img_src) . '" style="max-height:50px;cursor:pointer;" />';
				}
				$h .= '</div></div>';
				break;
			case 'team':
				$h .= '<div style="text-align:center;"><h2 data-mw-edit="title" style="margin-bottom:40px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:30px;">';
				$wp_users = get_users( array( 'number' => 3 ) );
				if ( ! empty( $wp_users ) ) {
					foreach ( $wp_users as $i => $u ) {
						$avatar_url = get_avatar_url( $u->ID, array( 'size' => 128 ) );
						$h .= '<div><img data-mw-image="member_img_'.$i.'" src="' . esc_url( $avatar_url ) . '" style="width:100px;height:100px;border-radius:50%;object-fit:cover;margin:0 auto 16px;display:block;cursor:pointer;" />';
						$h .= '<h4 data-mw-edit="member_'.$i.'" style="margin-bottom:4px;">' . esc_html( $this->get_edit( $section, 'member_'.$i, $u->display_name ) ) . '</h4>';
						$roles = implode( ', ', array_map( 'ucfirst', (array) $u->roles ) );
						$h .= '<p data-mw-edit="role_'.$i.'" style="color:var(--mh-color-text-muted);font-size:13px;">' . esc_html( $this->get_edit( $section, 'role_'.$i, $roles ) ) . '</p></div>';
					}
				} else {
					$h .= '<p style="color:var(--mh-color-text-muted);grid-column:1/-1;">No team members found.</p>';
				}
				$h .= '</div></div>';
				break;
			case 'portfolio':
				$h .= '<div style="text-align:center;"><h2 data-mw-edit="title" style="margin-bottom:40px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px;">';
				for ( $i=1; $i<=6; $i++ ) {
					$img_src = $this->get_edit( $section, 'project_img_'.$i, '' );
					if ( ! empty( $img_src ) ) {
						$h .= '<img data-mw-image="project_img_'.$i.'" src="' . esc_url($img_src) . '" style="width:100%;height:250px;object-fit:cover;border-radius:var(--mh-border-radius,4px);cursor:pointer;" />';
					} else {
						$h .= '<div style="width:100%;height:200px;background:var(--mh-color-card,#1e293b);border:1px dashed var(--mh-color-border-muted,#334155);border-radius:var(--mh-border-radius,4px);display:flex;align-items:center;justify-content:center;color:var(--mh-color-text-muted);font-size:12px;">Empty Project Slot ' . $i . '</div>';
					}
				}
				$h .= '</div></div>';
				break;
			case 'latest-posts':
				$h .= '<div style="text-align:center;"><h2 data-mw-edit="title" style="margin-bottom:40px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:30px;text-align:left;">';
				$posts = get_posts(array('posts_per_page'=>3));
				if ( ! empty( $posts ) ) {
					foreach ( $posts as $p ) {
						$img = get_the_post_thumbnail_url($p, 'medium');
						$h .= '<div style="border:1px solid var(--mh-color-border-muted,#eee);border-radius:var(--mh-border-radius,4px);overflow:hidden;">';
						if ( $img ) {
							$h .= '<img src="' . esc_url($img) . '" style="width:100%;height:160px;object-fit:cover;" />';
						}
						$h .= '<div style="padding:20px;"><h3 style="font-size:16px;margin-bottom:8px;"><a href="' . get_permalink($p) . '" style="text-decoration:none;color:inherit;">' . esc_html($p->post_title) . '</a></h3><p style="color:var(--mh-color-text-muted);font-size:13px;">' . wp_trim_words($p->post_content,15) . '</p></div></div>';
					}
				} else {
					$h .= '<p style="color:var(--mh-color-text-muted);text-align:center;grid-column:1/-1;">No posts found.</p>';
				}
				$h .= '</div></div>';
				break;
			case 'contact':
				$h .= '<div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;text-align:left;"><div>';
				$h .= '<h2 data-mw-edit="title" style="margin-bottom:16px;">' . esc_html( $this->get_edit( $section, 'title', $t ) ) . '</h2>';
				$h .= '<p data-mw-edit="subtitle" style="color:var(--mh-color-text-muted);margin-bottom:24px;">' . esc_html( $this->get_edit( $section, 'subtitle', 'Get in touch.' ) ) . '</p>';
				$admin_email = get_bloginfo( 'admin_email' );
				$h .= '<div style="margin-bottom:12px;"><strong>Email:</strong> <span data-mw-edit="email" style="color:var(--mh-color-text-muted);">' . esc_html( $this->get_edit( $section, 'email', $admin_email ) ) . '</span></div>';
				$h .= '<div><strong>Phone:</strong> <span data-mw-edit="phone" style="color:var(--mh-color-text-muted);">' . esc_html( $this->get_edit( $section, 'phone', '' ) ) . '</span></div></div>';
				$h .= '<div style="background:var(--mh-color-card,#f9f9f9);padding:30px;border-radius:var(--mh-border-radius,4px);border:1px solid var(--mh-color-border-muted,#eee);">';
				$shortcode = $this->get_edit( $section, 'shortcode', '[contact-form-7]' );
				$h .= '<div data-mw-shortcode="shortcode" style="cursor:pointer;" title="Click to edit shortcode">';
				$rendered = do_shortcode( wp_kses_post( $shortcode ) );
				if ( empty( trim( $rendered ) ) || $rendered === $shortcode ) {
					$h .= '<div style="padding:40px 20px;background:#fff;border:1px dashed #ccc;text-align:center;color:#666;font-family:monospace;border-radius:4px;">' . esc_html( $shortcode ) . '</div>';
				} else {
					$h .= $rendered;
				}
				$h .= '</div></div></div>';
				break;
			default:
				$h .= '<div style="text-align:center;padding:40px;color:var(--mh-color-text-muted);"><p>Unknown section: <strong>' . esc_html($type) . '</strong></p></div>';
		}
		return $h;
	}

}
