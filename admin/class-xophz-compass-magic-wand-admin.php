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
				// Content
				array('id' => 'hero',          'name' => 'Hero',          'icon' => 'dashicons-format-image',   'color' => '#62c9ff',  'category' => 'content'),
				array('id' => 'about',         'name' => 'About',         'icon' => 'dashicons-info-outline',   'color' => '#8b5cf6',  'category' => 'content'),
				array('id' => 'content',       'name' => 'Content',       'icon' => 'dashicons-text-page',      'color' => '#3b82f6',  'category' => 'content'),
				// Features
				array('id' => 'features',      'name' => 'Features',      'icon' => 'dashicons-grid-view',      'color' => '#10b981',  'category' => 'features'),
				array('id' => 'numbers',       'name' => 'Numbers',       'icon' => 'dashicons-chart-bar',      'color' => '#f59e0b',  'category' => 'features'),
				// Engagement
				array('id' => 'cta',           'name' => 'Call to Action','icon' => 'dashicons-megaphone',      'color' => '#ff3366',  'category' => 'engage'),
				array('id' => 'testimonials',  'name' => 'Testimonials',  'icon' => 'dashicons-format-quote',   'color' => '#06b6d4',  'category' => 'engage'),
				array('id' => 'clients',       'name' => 'Clients',       'icon' => 'dashicons-groups',         'color' => '#64748b',  'category' => 'engage'),
				// Team & Portfolio
				array('id' => 'team',          'name' => 'Team',          'icon' => 'dashicons-admin-users',    'color' => '#ec4899',  'category' => 'people'),
				array('id' => 'portfolio',     'name' => 'Portfolio',     'icon' => 'dashicons-portfolio',      'color' => '#a855f7',  'category' => 'people'),
				// Utility
				array('id' => 'latest-posts',  'name' => 'Latest Posts',  'icon' => 'dashicons-admin-post',     'color' => '#ef4444',  'category' => 'utility'),
				array('id' => 'contact',       'name' => 'Contact',       'icon' => 'dashicons-email-alt',      'color' => '#14b8a6',  'category' => 'utility'),
			),
			'categories' => array(
				array('id' => 'content',  'name' => 'Content'),
				array('id' => 'features', 'name' => 'Features'),
				array('id' => 'engage',   'name' => 'Engagement'),
				array('id' => 'people',   'name' => 'Team & Portfolio'),
				array('id' => 'utility',  'name' => 'Utility'),
			),
			'strings' => array(
				'select_section' => __('Choose a Section', 'xophz-compass-magic-wand'),
				'remove'         => __('Remove', 'xophz-compass-magic-wand'),
				'no_sections'    => __('No sections added', 'xophz-compass-magic-wand'),
			)
		) );
	}

}
