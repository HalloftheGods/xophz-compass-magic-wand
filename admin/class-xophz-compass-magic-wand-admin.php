<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Xophz_Compass_Magic_Wand
 * @subpackage Xophz_Compass_Magic_Wand/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Xophz_Compass_Magic_Wand
 * @subpackage Xophz_Compass_Magic_Wand/admin
 * @author     Your Name <email@example.com>
 */
class Xophz_Compass_Magic_Wand_Admin {

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
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
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

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/xophz-compass-magic-wand-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
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

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/xophz-compass-magic-wand-admin.js', array( 'jquery' ), $this->version, false );

	}

	/**
	 * Add menu item 
	 *
	 * @since    1.0.0
	 */
	public function addToMenu(){
        Xophz_Compass::add_submenu($this->plugin_name);
	}

	/**
	 * Register Customizer scripts for Page Builder UI
	 */
	public function customize_controls_scripts() {
		wp_enqueue_script( $this->plugin_name . '-customizer', plugin_dir_url( __FILE__ ) . 'js/xophz-compass-magic-wand-customizer.js', array( 'jquery', 'customize-controls', 'jquery-ui-sortable' ), $this->version, true );
		
		wp_localize_script( $this->plugin_name . '-customizer', 'mhMagicWand', array(
			'sections' => array(
				// Heroes
				array('id' => 'hero',              'name' => 'Split Image Hero',       'desc' => 'Bold headline, value copy, dual action buttons, and side image.',             'icon' => 'dashicons-format-image',   'color' => '#2563eb', 'category' => 'hero'),
				array('id' => 'hero-centered',     'name' => 'Centered Impact Hero',   'desc' => 'Centered headline with badge pill, primary CTA, and proof avatars.',          'icon' => 'dashicons-align-center',   'color' => '#3b82f6', 'category' => 'hero'),
				array('id' => 'hero-editorial',    'name' => 'Editorial Minimal Hero', 'desc' => 'Oversized statement typography with elegant clean links.',                   'icon' => 'dashicons-editor-quote',   'color' => '#1d4ed8', 'category' => 'hero'),
				array('id' => 'hero-app',          'name' => 'App Showcase Hero',      'desc' => 'Product proposition with mobile/desktop app mockup frame.',                   'icon' => 'dashicons-smartphone',     'color' => '#6366f1', 'category' => 'hero'),
				array('id' => 'hero-video',        'name' => 'Video Ambient Hero',     'desc' => 'High-contrast headline over an ambient looping video background.',           'icon' => 'dashicons-video-alt3',     'color' => '#8b5cf6', 'category' => 'hero'),

				// Features & Services
				array('id' => 'features',          'name' => '3-Card Feature Grid',    'desc' => '3 responsive cards with icons, headers, and descriptions.',                   'icon' => 'dashicons-grid-view',      'color' => '#10b981', 'category' => 'features'),
				array('id' => 'features-4col',     'name' => '4-Column Feature Matrix','desc' => 'Compact 4-column capability matrix for high-density offerings.',              'icon' => 'dashicons-screenoptions',  'color' => '#059669', 'category' => 'features'),
				array('id' => 'features-alt',      'name' => 'Alternating Story Rows', 'desc' => 'Zig-zag rows alternating image and explanatory text with badges.',            'icon' => 'dashicons-image-flip-horizontal', 'color' => '#14b8a6', 'category' => 'features'),
				array('id' => 'features-checklist','name' => 'Benefit Checklist',      'desc' => 'Bullet-proof value checklist with accompanying illustration.',                'icon' => 'dashicons-yes-alt',        'color' => '#06b6d4', 'category' => 'features'),
				array('id' => 'features-bento',    'name' => 'Bento Feature Grid',     'desc' => 'Asymmetric 4-card bento box layout with prominent feature card.',            'icon' => 'dashicons-dashboard',      'color' => '#0ea5e9', 'category' => 'features'),

				// About & Narrative
				array('id' => 'about',             'name' => 'Story & Mission Split',  'desc' => 'Two-column narrative on mission and team history with photography.',          'icon' => 'dashicons-info-outline',   'color' => '#8b5cf6', 'category' => 'about'),
				array('id' => 'about-values',      'name' => 'Core Values Pillars',    'desc' => '3 institutional pillars highlighting integrity, craft, and speed.',            'icon' => 'dashicons-awards',         'color' => '#a855f7', 'category' => 'about'),
				array('id' => 'about-timeline',    'name' => 'Milestones Timeline',    'desc' => 'Chronological 4-step timeline tracking company founding to current scale.',   'icon' => 'dashicons-backup',         'color' => '#7c3aed', 'category' => 'about'),
				array('id' => 'about-quote',       'name' => 'Leadership Quote',       'desc' => 'Large pullout statement from company leadership with bio.',                   'icon' => 'dashicons-format-chat',    'color' => '#9333ea', 'category' => 'about'),

				// Social Proof & Testimonials
				array('id' => 'testimonials',      'name' => '3-Card Testimonials',    'desc' => 'Customer reviews with 5-star badges, quotes, and avatars.',                   'icon' => 'dashicons-format-quote',   'color' => '#f59e0b', 'category' => 'proof'),
				array('id' => 'testimonials-single','name' => 'Large Pull-Quote Hero', 'desc' => 'High-impact standalone customer endorsement with credentials.',             'icon' => 'dashicons-testimonial',    'color' => '#d97706', 'category' => 'proof'),
				array('id' => 'clients',           'name' => 'Client Logo Wall',       'desc' => 'Curated grayscale logo row of trusted partners and enterprises.',            'icon' => 'dashicons-groups',         'color' => '#64748b', 'category' => 'proof'),
				array('id' => 'case-study',        'name' => 'Featured Case Study',    'desc' => 'In-depth client success story with metrics, quote, and screenshot.',          'icon' => 'dashicons-clipboard',      'color' => '#475569', 'category' => 'proof'),

				// Numbers & Metrics
				array('id' => 'numbers',           'name' => '4-Column Stat Band',     'desc' => 'Clean horizontal band showcasing 4 key quantitative achievements.',           'icon' => 'dashicons-chart-bar',      'color' => '#2563eb', 'category' => 'numbers'),
				array('id' => 'numbers-split',     'name' => 'Metric & Narrative Split','desc' => 'Two prominent stat callouts paired with contextual narrative paragraph.',    'icon' => 'dashicons-analytics',      'color' => '#1d4ed8', 'category' => 'numbers'),
				array('id' => 'numbers-cards',     'name' => 'Elevated Stat Cards',    'desc' => '3 boxed metric cards with subtle background elevation.',                       'icon' => 'dashicons-chart-area',     'color' => '#3b82f6', 'category' => 'numbers'),

				// Pricing & Plans
				array('id' => 'pricing',           'name' => '3-Tier Pricing Table',   'desc' => 'Starter, Professional with "Popular" badge, and Enterprise.',                 'icon' => 'dashicons-tag',            'color' => '#10b981', 'category' => 'pricing'),
				array('id' => 'pricing-flat',      'name' => 'Single All-Inclusive Card','desc' => 'Clean single-tier pricing block with checklist and direct CTA.',              'icon' => 'dashicons-money-alt',      'color' => '#059669', 'category' => 'pricing'),
				array('id' => 'pricing-table',     'name' => 'Feature Comparison Matrix','desc' => 'Structured comparison table displaying feature availability across tiers.',   'icon' => 'dashicons-list-view',      'color' => '#047857', 'category' => 'pricing'),

				// Team & People
				array('id' => 'team',              'name' => '4-Column Team Grid',     'desc' => 'Grid of team members with avatars, titles, and social handles.',             'icon' => 'dashicons-admin-users',    'color' => '#ec4899', 'category' => 'team'),
				array('id' => 'team-split',        'name' => 'Executive Profile Split','desc' => 'Executive portrait paired with background narrative and career history.',    'icon' => 'dashicons-id',             'color' => '#db2777', 'category' => 'team'),

				// FAQ & Accordion
				array('id' => 'faq',               'name' => '2-Column FAQ Grid',      'desc' => '4 frequently asked questions with clean, concise answers.',                   'icon' => 'dashicons-editor-help',    'color' => '#64748b', 'category' => 'faq'),
				array('id' => 'faq-accordion',     'name' => 'Expandable FAQ Cards',   'desc' => 'Card-based FAQ format with distinct question boxes and clear spacing.',        'icon' => 'dashicons-excerpt-view',   'color' => '#475569', 'category' => 'faq'),

				// Call to Action (CTA)
				array('id' => 'cta',               'name' => 'High-Impact Accent Banner','desc' => 'Full-width colored banner with clear headline and primary action button.', 'icon' => 'dashicons-megaphone',      'color' => '#ff3366', 'category' => 'cta'),
				array('id' => 'cta-newsletter',    'name' => 'Newsletter Signup Box',  'desc' => 'Focused subscription box with email input and privacy guarantee.',            'icon' => 'dashicons-email',          'color' => '#e11d48', 'category' => 'cta'),
				array('id' => 'cta-split',         'name' => 'Dual Action Split Banner','desc' => 'Split conversion card with two distinct action pathways.',                   'icon' => 'dashicons-share',          'color' => '#be123c', 'category' => 'cta'),

				// Contact & Utility
				array('id' => 'contact',           'name' => 'Split Contact & Form',   'desc' => 'Direct contact details (email, phone, address) with integrated inquiry form.', 'icon' => 'dashicons-email-alt',      'color' => '#14b8a6', 'category' => 'contact'),
				array('id' => 'contact-bar',       'name' => 'Horizontal Contact Strip','desc' => 'Clean single-row strip displaying hours, email, phone, and office address.',   'icon' => 'dashicons-phone',          'color' => '#0d9488', 'category' => 'contact'),
				array('id' => 'latest-posts',      'name' => 'Latest 3 Blog Posts',    'desc' => 'Dynamic query displaying 3 most recent articles with thumbnails and excerpts.','icon' => 'dashicons-admin-post',     'color' => '#ef4444', 'category' => 'contact'),
			),
			'categories' => array(
				array('id' => 'all',       'name' => 'All Sections'),
				array('id' => 'hero',      'name' => 'Heroes'),
				array('id' => 'features',  'name' => 'Features'),
				array('id' => 'about',     'name' => 'About & Story'),
				array('id' => 'proof',     'name' => 'Social Proof'),
				array('id' => 'numbers',   'name' => 'Metrics'),
				array('id' => 'pricing',   'name' => 'Pricing'),
				array('id' => 'team',      'name' => 'Team'),
				array('id' => 'faq',       'name' => 'FAQ'),
				array('id' => 'cta',       'name' => 'Call to Action'),
				array('id' => 'contact',   'name' => 'Contact & Blog'),
			),
			'strings' => array(
				'select_section' => __('Choose a Section', 'xophz-compass-magic-wand'),
				'search_placeholder' => __('Search sections...', 'xophz-compass-magic-wand'),
				'add_section'    => __('+ Add Section', 'xophz-compass-magic-wand'),
				'remove'         => __('Remove', 'xophz-compass-magic-wand'),
				'no_sections'    => __('No sections added yet', 'xophz-compass-magic-wand'),
			),
			'ajaxUrl'      => admin_url( 'admin-ajax.php' ),
			'nonce'        => wp_create_nonce( 'mh_switch_template_nonce' ),
			'showOnFront'  => get_option( 'show_on_front', 'posts' ),
			'pageOnFront'  => absint( get_option( 'page_on_front' ) ),
		) );
	}

	/**
	 * AJAX Handler to switch front page template between Magic Hat canvas and blog posts
	 */
	public function ajax_switch_front_template() {
		check_ajax_referer( 'mh_switch_template_nonce', 'nonce' );

		if ( ! current_user_can( 'manage_options' ) && ! current_user_can( 'edit_theme_options' ) ) {
			wp_send_json_error( array( 'message' => 'Unauthorized' ) );
		}

		$mode = isset( $_POST['mode'] ) ? sanitize_key( $_POST['mode'] ) : 'magic_hat';

		if ( $mode === 'magic_hat' ) {
			// Find or create front page
			$front_page_id = absint( get_option( 'page_on_front' ) );
			if ( ! $front_page_id || ! get_post( $front_page_id ) ) {
				$existing = get_page_by_path( 'home' );
				if ( ! $existing ) {
					$existing = get_page_by_title( 'Home' );
				}
				if ( $existing ) {
					$front_page_id = $existing->ID;
				} else {
					$front_page_id = wp_insert_post( array(
						'post_title'   => 'Home',
						'post_name'    => 'home',
						'post_status'  => 'publish',
						'post_type'    => 'page',
						'post_content' => '',
					) );
				}
			}

			update_option( 'show_on_front', 'page' );
			update_option( 'page_on_front', $front_page_id );

			// Also ensure a blog page exists for posts if needed
			$blog_page_id = absint( get_option( 'page_for_posts' ) );
			if ( ! $blog_page_id || ! get_post( $blog_page_id ) ) {
				$existing_blog = get_page_by_path( 'blog' );
				if ( ! $existing_blog ) {
					$existing_blog = get_page_by_title( 'Blog' );
				}
				if ( $existing_blog ) {
					update_option( 'page_for_posts', $existing_blog->ID );
				}
			}

			wp_send_json_success( array(
				'mode'          => 'magic_hat',
				'show_on_front' => 'page',
				'page_on_front' => $front_page_id,
				'url'           => home_url( '/' ),
				'message'       => 'Switched to Magic Hat Canvas',
			) );
		} else {
			update_option( 'show_on_front', 'posts' );
			wp_send_json_success( array(
				'mode'          => 'posts',
				'show_on_front' => 'posts',
				'url'           => home_url( '/' ),
				'message'       => 'Switched to Blog Posts Feed',
			) );
		}
	}

}
