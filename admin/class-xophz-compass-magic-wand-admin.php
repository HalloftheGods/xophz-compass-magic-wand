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
		wp_enqueue_media();
		wp_enqueue_style( 'dashicons' );
		if ( function_exists( 'get_template_directory' ) && file_exists( get_template_directory() . '/assets/font-awesome/font-awesome.min.css' ) ) {
			wp_enqueue_style( 'magic-hat-font-awesome', get_template_directory_uri() . '/assets/font-awesome/font-awesome.min.css', array(), '4.7.0' );
		}
		wp_enqueue_style( $this->plugin_name . '-admin-customizer', plugin_dir_url( __FILE__ ) . 'css/xophz-compass-magic-wand-admin.css', array(), $this->version, 'all' );
		wp_enqueue_script( $this->plugin_name . '-customizer', plugin_dir_url( __FILE__ ) . 'js/xophz-compass-magic-wand-customizer.js', array( 'jquery', 'customize-controls', 'jquery-ui-sortable' ), $this->version, true );
		
		$registry       = Xophz_Compass_Magic_Wand_Pattern_Registry::get_instance();
		$sections       = array_values( $registry->get_pattern_definitions() );
		$categories_raw = $registry->get_categories();

		$categories = array(
			array( 'id' => 'all', 'name' => __( 'All Sections', 'xophz-compass-magic-wand' ) ),
		);
		foreach ( $categories_raw as $cat_id => $cat_name ) {
			$categories[] = array( 'id' => $cat_id, 'name' => $cat_name );
		}

		wp_localize_script( $this->plugin_name . '-customizer', 'mhMagicWand', array(
			'sections'   => $sections,
			'categories' => $categories,
			'strings'    => array(
				'select_section'     => __( 'Choose a Section', 'xophz-compass-magic-wand' ),
				'search_placeholder' => __( 'Search sections...', 'xophz-compass-magic-wand' ),
				'add_section'        => __( '+ Add Section', 'xophz-compass-magic-wand' ),
				'remove'             => __( 'Remove', 'xophz-compass-magic-wand' ),
				'no_sections'        => __( 'No sections added yet', 'xophz-compass-magic-wand' ),
			),
			'ajaxUrl'     => admin_url( 'admin-ajax.php' ),
			'nonce'       => wp_create_nonce( 'mh_switch_template_nonce' ),
			'showOnFront' => get_option( 'show_on_front', 'posts' ),
			'pageOnFront' => absint( get_option( 'page_on_front' ) ),
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

	/**
	 * AJAX Handler to save sections for a specific page
	 */
	public function ajax_save_page_sections() {
		$nonce = isset( $_REQUEST['nonce'] ) ? sanitize_text_field( wp_unslash( $_REQUEST['nonce'] ) ) : ( isset( $_REQUEST['_ajax_nonce'] ) ? sanitize_text_field( wp_unslash( $_REQUEST['_ajax_nonce'] ) ) : '' );
		if ( ! wp_verify_nonce( $nonce, 'mh_switch_template_nonce' ) && ! wp_verify_nonce( $nonce, 'mh_page_builder_nonce' ) ) {
			wp_send_json_error( array( 'message' => 'Invalid security token' ) );
		}

		if ( ! current_user_can( 'edit_pages' ) && ! current_user_can( 'edit_theme_options' ) ) {
			wp_send_json_error( array( 'message' => 'Unauthorized' ) );
		}

		$page_id = isset( $_POST['page_id'] ) ? absint( $_POST['page_id'] ) : 0;
		$sections_json = isset( $_POST['sections'] ) ? wp_unslash( $_POST['sections'] ) : '[]';

		if ( ! $page_id ) {
			wp_send_json_error( array( 'message' => 'Invalid page ID' ) );
		}

		// Compile sections into standard Gutenberg blocks and persist to post_content
		$sections = json_decode( $sections_json, true );
		if ( is_array( $sections ) && class_exists( 'Xophz_Compass_Magic_Wand_Public' ) ) {
			$public_inst = new Xophz_Compass_Magic_Wand_Public( $this->plugin_name, $this->version );
			$block_content = '';
			foreach ( $sections as $index => $section ) {
				$type  = isset( $section['type'] ) ? $section['type'] : 'hero';
				$label = isset( $section['label'] ) ? $section['label'] : ucfirst( str_replace( '-', ' ', $type ) );
				$block_content .= $public_inst->render_section_type( $type, $label, $section, $index ) . "\n\n";
			}

			wp_update_post( array(
				'ID'           => $page_id,
				'post_content' => trim( $block_content ),
			) );
		}

		// Persist sections metadata to post_meta and theme_mod so Customizer retains active sections
		update_post_meta( $page_id, '_mh_page_sections', wp_slash( $sections_json ) );
		$front_page_id = absint( get_option( 'page_on_front' ) );
		if ( $page_id === $front_page_id || ! $front_page_id ) {
			set_theme_mod( 'mh_page_sections', $sections_json );
		}

		wp_send_json_success( array(
			'page_id' => $page_id,
			'message' => 'Sections saved for page ' . $page_id,
		) );
	}

}

