<?php
/**
 * REST API Compiler and Site Editor Endpoint Controller
 *
 * Provides endpoints for Gutenberg block serialization, template loading,
 * block rendering, and theme token extraction adhering to Quantum standards.
 *
 * @package Xophz_Compass_Magic_Wand
 * @since   1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Xophz_Compass_Magic_Wand_Compiler {

	/**
	 * Register REST API routes.
	 */
	public function register_routes(): void {
		$namespace = 'magic-wand/v1';

		register_rest_route( $namespace, '/pages', array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => array( $this, 'get_pages' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( $namespace, '/page-content', array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => array( $this, 'get_page_content' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( $namespace, '/save-page', array(
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => array( $this, 'save_page' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( $namespace, '/create-page', array(
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => array( $this, 'create_page' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( $namespace, '/templates', array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => array( $this, 'get_templates' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( $namespace, '/save-template', array(
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => array( $this, 'save_template' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( $namespace, '/patterns', array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => array( $this, 'get_patterns' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( $namespace, '/render-blocks', array(
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => array( $this, 'render_blocks' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( $namespace, '/theme-tokens', array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => array( $this, 'get_theme_tokens' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( $namespace, '/create-child-theme', array(
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => array( $this, 'create_child_theme' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );
	}

	/**
	 * Permission check for theme editing operations.
	 */
	public function check_permission(): bool {
		return current_user_can( 'edit_theme_options' ) || current_user_can( 'edit_pages' );
	}

	/**
	 * Helper: Return standardized REST response envelope.
	 *
	 * @param array<string, mixed> $data   Data payload.
	 * @param int                  $status HTTP status code.
	 */
	private function respond( array $data, int $status = 200 ): WP_REST_Response {
		$version = defined( 'XOPHZ_COMPASS_MAGIC_WAND_VERSION' ) ? XOPHZ_COMPASS_MAGIC_WAND_VERSION : '1.0.0';

		$envelope = array(
			'success' => true,
			'data'    => $data,
			'meta'    => array(
				'timestamp' => time(),
				'version'   => $version,
			),
		);

		// Mirror keys to top-level for backwards compatibility with legacy callers
		foreach ( $data as $k => $v ) {
			if ( ! isset( $envelope[ $k ] ) ) {
				$envelope[ $k ] = $v;
			}
		}

		return new WP_REST_Response( $envelope, $status );
	}

	/**
	 * Retrieve all WordPress pages.
	 */
	public function get_pages( WP_REST_Request $request ): WP_REST_Response {
		$post_type = $request->get_param( 'post_type' ) ?: 'page';
		$posts = get_posts( array(
			'post_type'      => $post_type,
			'post_status'    => array( 'publish', 'draft', 'pending', 'future' ),
			'posts_per_page' => 100,
			'orderby'        => 'title',
			'order'          => 'ASC',
		) );

		$results = array();
		foreach ( $posts as $p ) {
			$results[] = array(
				'id'         => $p->ID,
				'title'      => ! empty( $p->post_title ) ? $p->post_title : '(Untitled #' . $p->ID . ')',
				'slug'       => $p->post_name,
				'status'     => $p->post_status,
				'modified'   => $p->post_modified,
				'has_blocks' => has_blocks( $p->post_content ),
				'template'   => get_post_meta( $p->ID, '_wp_page_template', true ) ?: 'default',
				'url'        => get_permalink( $p->ID ),
			);
		}

		return $this->respond( array( 'pages' => $results ) );
	}

	/**
	 * Retrieve page content with raw block markup, parsed AST, and rendered preview HTML.
	 */
	public function get_page_content( WP_REST_Request $request ) {
		$id = absint( $request->get_param( 'id' ) );
		if ( ! $id ) {
			return new WP_Error( 'missing_id', __( 'Page ID is required', 'xophz-compass-magic-wand' ), array( 'status' => 400 ) );
		}

		$post = get_post( $id );
		if ( ! $post ) {
			return new WP_Error( 'not_found', __( 'Page not found', 'xophz-compass-magic-wand' ), array( 'status' => 404 ) );
		}

		// Run legacy migration if needed
		Xophz_Compass_Magic_Wand_Migration::migrate_page( $id );
		$post = get_post( $id );

		$raw_content = $post->post_content;

		return $this->respond( array(
			'id'            => $post->ID,
			'title'         => $post->post_title,
			'slug'          => $post->post_name,
			'status'        => $post->post_status,
			'raw_content'   => $raw_content,
			'parsed_blocks' => parse_blocks( $raw_content ),
			'rendered_html' => do_blocks( $raw_content ),
			'url'           => get_permalink( $post->ID ),
		) );
	}

	/**
	 * Save block markup into a WordPress page.
	 */
	public function save_page( WP_REST_Request $request ) {
		$id      = absint( $request->get_param( 'id' ) );
		$content = $request->get_param( 'content' );
		$title   = $request->get_param( 'title' );
		$status  = $request->get_param( 'status' );

		if ( ! $id ) {
			return new WP_Error( 'missing_id', __( 'Page ID is required', 'xophz-compass-magic-wand' ), array( 'status' => 400 ) );
		}

		$update_args = array(
			'ID'           => $id,
			'post_content' => wp_unslash( $content ),
		);

		if ( ! empty( $title ) ) {
			$update_args['post_title'] = sanitize_text_field( $title );
		}
		if ( ! empty( $status ) && in_array( $status, array( 'publish', 'draft', 'pending' ), true ) ) {
			$update_args['post_status'] = $status;
		}

		$updated_id = wp_update_post( $update_args, true );
		if ( is_wp_error( $updated_id ) ) {
			return $updated_id;
		}

		return $this->respond( array(
			'id'        => $updated_id,
			'message'   => __( 'Page saved successfully with native Gutenberg blocks', 'xophz-compass-magic-wand' ),
			'timestamp' => current_time( 'mysql' ),
			'url'       => get_permalink( $updated_id ),
		) );
	}

	/**
	 * Create a new page.
	 */
	public function create_page( WP_REST_Request $request ) {
		$title    = sanitize_text_field( $request->get_param( 'title' ) ?: 'New Magic Wand Page' );
		$content  = $request->get_param( 'content' ) ?: '';
		$template = sanitize_text_field( $request->get_param( 'template' ) ?: 'default' );

		$new_id = wp_insert_post( array(
			'post_title'   => $title,
			'post_content' => wp_unslash( $content ),
			'post_status'  => 'publish',
			'post_type'    => 'page',
		), true );

		if ( is_wp_error( $new_id ) ) {
			return $new_id;
		}

		if ( ! empty( $template ) && 'default' !== $template ) {
			update_post_meta( $new_id, '_wp_page_template', $template );
		}

		return $this->respond( array(
			'id'      => $new_id,
			'title'   => $title,
			'url'     => get_permalink( $new_id ),
			'message' => __( 'New page created', 'xophz-compass-magic-wand' ),
		) );
	}

	/**
	 * Get theme templates and template parts.
	 */
	public function get_templates( WP_REST_Request $request ): WP_REST_Response {
		$theme_dir = get_template_directory();
		$child_dir = get_stylesheet_directory();
		$templates = array();
		$parts     = array();

		$template_files = array(
			'index'   => 'Index (Blog / Archive)',
			'page'    => 'Page Default',
			'single'  => 'Single Post',
			'archive' => 'Archive',
			'404'     => '404 Not Found',
			'blank'   => 'Blank Canvas',
		);

		foreach ( $template_files as $slug => $label ) {
			$file_path = file_exists( $child_dir . '/templates/' . $slug . '.html' )
				? $child_dir . '/templates/' . $slug . '.html'
				: $theme_dir . '/templates/' . $slug . '.html';

			$templates[] = array(
				'slug'    => $slug,
				'label'   => $label,
				'type'    => 'template',
				'content' => file_exists( $file_path ) ? file_get_contents( $file_path ) : '',
				'file'    => basename( $file_path ),
			);
		}

		$part_files = array(
			'header' => array( 'label' => 'Site Header', 'area' => 'header' ),
			'footer' => array( 'label' => 'Site Footer', 'area' => 'footer' ),
		);

		foreach ( $part_files as $slug => $meta ) {
			$file_path = file_exists( $child_dir . '/parts/' . $slug . '.html' )
				? $child_dir . '/parts/' . $slug . '.html'
				: $theme_dir . '/parts/' . $slug . '.html';

			$parts[] = array(
				'slug'    => $slug,
				'label'   => $meta['label'],
				'area'    => $meta['area'],
				'type'    => 'part',
				'content' => file_exists( $file_path ) ? file_get_contents( $file_path ) : '',
				'file'    => basename( $file_path ),
			);
		}

		return $this->respond( array(
			'templates' => $templates,
			'parts'     => $parts,
		) );
	}

	/**
	 * Save block markup into a template or template part file.
	 */
	public function save_template( WP_REST_Request $request ) {
		$slug    = sanitize_file_name( $request->get_param( 'slug' ) );
		$type    = sanitize_key( $request->get_param( 'type' ) ?: 'template' );
		$content = $request->get_param( 'content' );

		if ( empty( $slug ) || empty( $content ) ) {
			return new WP_Error( 'missing_params', __( 'Slug and content are required', 'xophz-compass-magic-wand' ), array( 'status' => 400 ) );
		}

		$stylesheet = get_stylesheet();
		if ( 'xophz-magic-hat' === $stylesheet || 'xophz-blank-slate' === $stylesheet ) {
			return new WP_Error( 'parent_theme_active', __( 'Protected parent theme active. Please create a child theme to save template modifications.', 'xophz-compass-magic-wand' ), array( 'status' => 403 ) );
		}

		$target_dir = get_stylesheet_directory() . ( 'part' === $type ? '/parts' : '/templates' );
		if ( ! file_exists( $target_dir ) ) {
			wp_mkdir_p( $target_dir );
		}

		$target_file = $target_dir . '/' . $slug . '.html';
		$result      = file_put_contents( $target_file, wp_unslash( $content ) );

		if ( false === $result ) {
			return new WP_Error( 'write_failed', __( 'Could not save template file. Check directory permissions.', 'xophz-compass-magic-wand' ), array( 'status' => 500 ) );
		}

		return $this->respond( array(
			'message' => __( 'Template part saved successfully', 'xophz-compass-magic-wand' ),
			'file'    => basename( $target_file ),
		) );
	}

	/**
	 * Return registered block patterns sourced from the Pattern Registry.
	 */
	public function get_patterns( WP_REST_Request $request ): WP_REST_Response {
		$registry = Xophz_Compass_Magic_Wand_Pattern_Registry::get_instance();
		$patterns = array_values( $registry->get_pattern_definitions() );

		return $this->respond( array( 'patterns' => $patterns ) );
	}

	/**
	 * Server-side block markup renderer.
	 */
	public function render_blocks( WP_REST_Request $request ): WP_REST_Response {
		$content = $request->get_param( 'content' );
		if ( empty( $content ) ) {
			return $this->respond( array( 'html' => '' ) );
		}

		$rendered = do_blocks( wp_unslash( $content ) );
		return $this->respond( array( 'html' => $rendered ) );
	}

	/**
	 * Retrieve theme tokens from theme.json.
	 */
	public function get_theme_tokens( WP_REST_Request $request ): WP_REST_Response {
		$theme_json_file = get_template_directory() . '/theme.json';
		$theme_json = array();
		if ( file_exists( $theme_json_file ) ) {
			$theme_json = json_decode( file_get_contents( $theme_json_file ), true ) ?: array();
		}

		$palette       = isset( $theme_json['settings']['color']['palette'] ) ? $theme_json['settings']['color']['palette'] : array();
		$font_families = isset( $theme_json['settings']['typography']['fontFamilies'] ) ? $theme_json['settings']['typography']['fontFamilies'] : array();
		$font_sizes    = isset( $theme_json['settings']['typography']['fontSizes'] ) ? $theme_json['settings']['typography']['fontSizes'] : array();
		$spacing_sizes = isset( $theme_json['settings']['spacing']['spacingSizes'] ) ? $theme_json['settings']['spacing']['spacingSizes'] : array();
		$layout        = isset( $theme_json['settings']['layout'] ) ? $theme_json['settings']['layout'] : array( 'contentSize' => '840px', 'wideSize' => '1340px' );

		return $this->respond( array(
			'palette'       => $palette,
			'font_families' => $font_families,
			'font_sizes'    => $font_sizes,
			'spacing_sizes' => $spacing_sizes,
			'layout'        => $layout,
			'tokens'        => array(
				'palette'       => $palette,
				'fontFamilies'  => $font_families,
				'fontSizes'     => $font_sizes,
				'spacingSizes'  => $spacing_sizes,
				'layout'        => $layout,
			),
		) );
	}

	/**
	 * Create and activate a child theme.
	 */
	public function create_child_theme( WP_REST_Request $request ) {
		$theme_name = sanitize_text_field( $request->get_param( 'theme_name' ) );
		if ( empty( $theme_name ) ) {
			return new WP_Error( 'missing_name', __( 'Child theme name is required', 'xophz-compass-magic-wand' ), array( 'status' => 400 ) );
		}

		$theme_slug = sanitize_title( $theme_name );
		$themes_dir = get_theme_root();
		$child_dir  = $themes_dir . '/' . $theme_slug;

		if ( file_exists( $child_dir ) ) {
			return new WP_Error( 'theme_exists', __( 'A theme with this slug already exists.', 'xophz-compass-magic-wand' ), array( 'status' => 400 ) );
		}

		if ( ! mkdir( $child_dir, 0755, true ) ) {
			return new WP_Error( 'mkdir_failed', __( 'Could not create child theme directory.', 'xophz-compass-magic-wand' ), array( 'status' => 500 ) );
		}

		$style_css = "/**\n * Theme Name: {$theme_name}\n * Template: xophz-magic-hat\n * Description: Magic Wand Child Theme\n * Author: Xophz COMPASS\n */\n";
		file_put_contents( $child_dir . '/style.css', $style_css );

		$functions_php = "<?php\nadd_action( 'wp_enqueue_scripts', function() {\n\twp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );\n} );\n";
		file_put_contents( $child_dir . '/functions.php', $functions_php );

		wp_mkdir_p( $child_dir . '/templates' );
		wp_mkdir_p( $child_dir . '/parts' );

		switch_theme( $theme_slug );

		return $this->respond( array(
			'message' => __( 'Child theme created and activated', 'xophz-compass-magic-wand' ),
			'theme'   => $theme_slug,
		) );
	}
}
