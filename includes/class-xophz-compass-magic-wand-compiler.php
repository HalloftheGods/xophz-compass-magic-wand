<?php

class Xophz_Compass_Magic_Wand_Compiler {

	public function register_routes() {
		// Existing compilation & child theme routes
		register_rest_route( 'magic-wand/v1', '/compile', array(
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => array( $this, 'compile_template' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( 'magic-wand/v1', '/create-child-theme', array(
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => array( $this, 'create_child_theme' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		// Site Editor REST API routes
		register_rest_route( 'magic-wand/v1', '/pages', array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => array( $this, 'get_pages' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( 'magic-wand/v1', '/page-content', array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => array( $this, 'get_page_content' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( 'magic-wand/v1', '/save-page', array(
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => array( $this, 'save_page' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( 'magic-wand/v1', '/create-page', array(
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => array( $this, 'create_page' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( 'magic-wand/v1', '/templates', array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => array( $this, 'get_templates' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( 'magic-wand/v1', '/save-template', array(
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => array( $this, 'save_template' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( 'magic-wand/v1', '/patterns', array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => array( $this, 'get_patterns' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( 'magic-wand/v1', '/render-blocks', array(
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => array( $this, 'render_blocks' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );

		register_rest_route( 'magic-wand/v1', '/theme-tokens', array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => array( $this, 'get_theme_tokens' ),
			'permission_callback' => array( $this, 'check_permission' ),
		) );
	}

	public function check_permission() {
		return current_user_can( 'edit_theme_options' );
	}

	/**
	 * Retrieve all WordPress pages and key templates
	 */
	public function get_pages( WP_REST_Request $request ) {
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
			$has_blocks = has_blocks( $p->post_content );
			$template   = get_post_meta( $p->ID, '_wp_page_template', true ) ?: 'default';
			$permalink  = get_permalink( $p->ID );

			$results[] = array(
				'id'         => $p->ID,
				'title'      => ! empty( $p->post_title ) ? $p->post_title : '(Untitled #' . $p->ID . ')',
				'slug'       => $p->post_name,
				'status'     => $p->post_status,
				'modified'   => $p->post_modified,
				'has_blocks' => $has_blocks,
				'template'   => $template,
				'url'        => $permalink,
			);
		}

		return rest_ensure_response( array(
			'success' => true,
			'pages'   => $results,
		) );
	}

	/**
	 * Retrieve full page content with raw block markup, parsed AST, and rendered preview HTML
	 */
	public function get_page_content( WP_REST_Request $request ) {
		$id = absint( $request->get_param( 'id' ) );
		if ( ! $id ) {
			return new WP_Error( 'missing_id', 'Page ID is required', array( 'status' => 400 ) );
		}

		$post = get_post( $id );
		if ( ! $post ) {
			return new WP_Error( 'not_found', 'Page not found', array( 'status' => 404 ) );
		}

		$raw_content = $post->post_content;
		$parsed_blocks = parse_blocks( $raw_content );
		$rendered_html = do_blocks( $raw_content );

		return rest_ensure_response( array(
			'success'       => true,
			'id'            => $post->ID,
			'title'         => $post->post_title,
			'slug'          => $post->post_name,
			'status'        => $post->post_status,
			'raw_content'   => $raw_content,
			'parsed_blocks' => $parsed_blocks,
			'rendered_html' => $rendered_html,
			'url'           => get_permalink( $post->ID ),
		) );
	}

	/**
	 * Save block markup into a WordPress page
	 */
	public function save_page( WP_REST_Request $request ) {
		$id      = absint( $request->get_param( 'id' ) );
		$content = $request->get_param( 'content' );
		$title   = $request->get_param( 'title' );
		$status  = $request->get_param( 'status' );

		if ( ! $id ) {
			return new WP_Error( 'missing_id', 'Page ID is required', array( 'status' => 400 ) );
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

		return rest_ensure_response( array(
			'success'   => true,
			'id'        => $updated_id,
			'message'   => 'Page saved successfully with native Gutenberg blocks',
			'timestamp' => current_time( 'mysql' ),
			'url'       => get_permalink( $updated_id ),
		) );
	}

	/**
	 * Create a new page and return ID
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

		return rest_ensure_response( array(
			'success' => true,
			'id'      => $new_id,
			'title'   => $title,
			'url'     => get_permalink( $new_id ),
			'message' => 'New page created',
		) );
	}

	/**
	 * Get theme templates and template parts
	 */
	public function get_templates( WP_REST_Request $request ) {
		$theme_dir  = get_template_directory();
		$child_dir  = get_stylesheet_directory();
		$templates  = array();
		$parts      = array();

		// Check templates
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

			$content = file_exists( $file_path ) ? file_get_contents( $file_path ) : '';

			$templates[] = array(
				'slug'    => $slug,
				'label'   => $label,
				'type'    => 'template',
				'content' => $content,
				'file'    => basename( $file_path ),
			);
		}

		// Check template parts
		$part_files = array(
			'header' => array( 'label' => 'Site Header', 'area' => 'header' ),
			'footer' => array( 'label' => 'Site Footer', 'area' => 'footer' ),
		);

		foreach ( $part_files as $slug => $meta ) {
			$file_path = file_exists( $child_dir . '/parts/' . $slug . '.html' )
				? $child_dir . '/parts/' . $slug . '.html'
				: $theme_dir . '/parts/' . $slug . '.html';

			$content = file_exists( $file_path ) ? file_get_contents( $file_path ) : '';

			$parts[] = array(
				'slug'    => $slug,
				'label'   => $meta['label'],
				'area'    => $meta['area'],
				'type'    => 'part',
				'content' => $content,
				'file'    => basename( $file_path ),
			);
		}

		return rest_ensure_response( array(
			'success'   => true,
			'templates' => $templates,
			'parts'     => $parts,
		) );
	}

	/**
	 * Save block markup into a template or template part
	 */
	public function save_template( WP_REST_Request $request ) {
		$slug    = sanitize_file_name( $request->get_param( 'slug' ) );
		$type    = sanitize_key( $request->get_param( 'type' ) ?: 'template' );
		$content = $request->get_param( 'content' );

		if ( empty( $slug ) || empty( $content ) ) {
			return new WP_Error( 'missing_params', 'Slug and content are required', array( 'status' => 400 ) );
		}

		$stylesheet = get_stylesheet();
		// If editing parent theme directly, require child theme
		if ( 'xophz-magic-hat' === $stylesheet || 'xophz-blank-slate' === $stylesheet ) {
			return new WP_Error( 'parent_theme_active', 'Protected parent theme active. Please create a child theme to save template modifications.', array( 'status' => 403 ) );
		}

		$target_dir = get_stylesheet_directory() . ( 'part' === $type ? '/parts' : '/templates' );
		if ( ! file_exists( $target_dir ) ) {
			wp_mkdir_p( $target_dir );
		}

		$target_file = $target_dir . '/' . $slug . '.html';
		$result      = file_put_contents( $target_file, wp_unslash( $content ) );

		if ( false === $result ) {
			return new WP_Error( 'write_failed', 'Could not save template file. Check directory permissions.', array( 'status' => 500 ) );
		}

		return rest_ensure_response( array(
			'success' => true,
			'message' => 'Template part saved successfully',
			'file'    => basename( $target_file ),
		) );
	}

	/**
	 * Return registered Magic Hat patterns
	 */
	public function get_patterns( WP_REST_Request $request ) {
		$theme_dir = get_template_directory();
		$patterns_dir = $theme_dir . '/patterns';
		$results = array();

		if ( is_dir( $patterns_dir ) ) {
			$files = glob( $patterns_dir . '/*.php' );
			foreach ( $files as $f ) {
				$code = file_get_contents( $f );
				// Parse header comments
				$title       = '';
				$slug        = '';
				$categories  = array();
				$description = '';

				if ( preg_match( '/Title:\s*(.+)/i', $code, $m ) ) { $title = trim( $m[1] ); }
				if ( preg_match( '/Slug:\s*(.+)/i', $code, $m ) ) { $slug = trim( $m[1] ); }
				if ( preg_match( '/Categories:\s*(.+)/i', $code, $m ) ) { $categories = array_map( 'trim', explode( ',', $m[1] ) ); }
				if ( preg_match( '/Description:\s*(.+)/i', $code, $m ) ) { $description = trim( $m[1] ); }

				// Extract block markup (everything after the closing PHP tag)
				$block_markup = '';
				$parts = explode( '?>', $code, 2 );
				if ( count( $parts ) > 1 ) {
					$block_markup = trim( $parts[1] );
				}

				if ( ! empty( $slug ) ) {
					$results[] = array(
						'slug'         => $slug,
						'title'        => $title ?: basename( $f, '.php' ),
						'categories'   => $categories,
						'description'  => $description,
						'block_markup' => $block_markup,
					);
				}
			}
		}

		return rest_ensure_response( array(
			'success'  => true,
			'patterns' => $results,
		) );
	}

	/**
	 * Server-side block markup renderer
	 */
	public function render_blocks( WP_REST_Request $request ) {
		$content = $request->get_param( 'content' );
		if ( empty( $content ) ) {
			return rest_ensure_response( array( 'success' => true, 'html' => '' ) );
		}

		$rendered = do_blocks( wp_unslash( $content ) );
		return rest_ensure_response( array(
			'success' => true,
			'html'    => $rendered,
		) );
	}

	/**
	 * Retrieve theme tokens from theme.json and theme mods
	 */
	public function get_theme_tokens( WP_REST_Request $request ) {
		$theme_json_file = get_template_directory() . '/theme.json';
		$theme_json = array();
		if ( file_exists( $theme_json_file ) ) {
			$theme_json = json_decode( file_get_contents( $theme_json_file ), true ) ?: array();
		}

		$palette = isset( $theme_json['settings']['color']['palette'] ) ? $theme_json['settings']['color']['palette'] : array();
		$font_families = isset( $theme_json['settings']['typography']['fontFamilies'] ) ? $theme_json['settings']['typography']['fontFamilies'] : array();
		$font_sizes = isset( $theme_json['settings']['typography']['fontSizes'] ) ? $theme_json['settings']['typography']['fontSizes'] : array();
		$spacing_sizes = isset( $theme_json['settings']['spacing']['spacingSizes'] ) ? $theme_json['settings']['spacing']['spacingSizes'] : array();
		$layout = isset( $theme_json['settings']['layout'] ) ? $theme_json['settings']['layout'] : array( 'contentSize' => '840px', 'wideSize' => '1340px' );

		return rest_ensure_response( array(
			'success'       => true,
			'palette'       => $palette,
			'font_families' => $font_families,
			'font_sizes'    => $font_sizes,
			'spacing_sizes' => $spacing_sizes,
			'layout'        => $layout,
		) );
	}

	/**
	 * Compile template for classic PHP themes
	 */
	public function compile_template( WP_REST_Request $request ) {
		$templates = $request->get_param( 'templates' );

		if ( empty( $templates ) || ! is_array( $templates ) ) {
			return new WP_Error( 'missing_templates', 'Template data is required', array( 'status' => 400 ) );
		}

		// Protect the parent theme
		$stylesheet = get_stylesheet();
		if ( 'xophz-magic-hat' === $stylesheet || 'xophz-blank-slate' === $stylesheet ) {
			return new WP_Error( 'parent_theme_active', 'You cannot compile directly into the Magic Hat parent theme. Please create a child theme first.', array( 'status' => 403 ) );
		}

		$theme_dir = get_stylesheet_directory();
		$saved_files = array();

		foreach ( $templates as $key => $html_content ) {
			$template_name = sanitize_file_name( $key );
			
			if ( ! str_ends_with( $template_name, '.php' ) && ! str_ends_with( $template_name, '.html' ) ) {
				$template_name .= '.php';
			}

			$file_path = $theme_dir . '/' . $template_name;

			// Strip editor-specific classes
			$html_content = preg_replace( '/\s*magic-wand-(hover|selected|editing|dimmed)\s*/', ' ', $html_content );
			$html_content = str_replace( 'class=""', '', $html_content );

			// Translate dynamic Magic Wand components into native WordPress PHP functions
			$html_content = preg_replace(
				'/<([^>]+)data-mw-type="site-identity"([^>]*)>(.*?)<\/\1>/s',
				'<$1$2><?php bloginfo(\'name\'); ?></$1>',
				$html_content
			);

			$html_content = preg_replace(
				'/<([^>]+)data-mw-type="menu"([^>]*)>(.*?)<\/\1>/s',
				'<?php wp_nav_menu( array( \'theme_location\' => \'primary\', \'container_class\' => \'magic-menu\' ) ); ?>',
				$html_content
			);

			$compiled_content = "<?php\n/**\n * Compiled by Magic Wand\n */\n?>\n";

			if ( 'header.php' === $template_name ) {
				$compiled_content .= '<!DOCTYPE html>' . "\n";
				$compiled_content .= '<html <?php language_attributes(); ?>>' . "\n";
				$compiled_content .= '<head>' . "\n";
				$compiled_content .= '    <meta charset="<?php bloginfo( \'charset\' ); ?>">' . "\n";
				$compiled_content .= '    <meta name="viewport" content="width=device-width, initial-scale=1">' . "\n";
				$compiled_content .= '    <?php wp_head(); ?>' . "\n";
				$compiled_content .= '</head>' . "\n";
				$compiled_content .= '<body <?php body_class(); ?>>' . "\n";
				$compiled_content .= '    <?php wp_body_open(); ?>' . "\n";
				$compiled_content .= wp_unslash( $html_content ) . "\n";
			} elseif ( 'footer.php' === $template_name ) {
				$compiled_content .= wp_unslash( $html_content ) . "\n";
				$compiled_content .= '    <?php wp_footer(); ?>' . "\n";
				$compiled_content .= '</body>' . "\n";
				$compiled_content .= '</html>' . "\n";
			} else {
				$compiled_content .= "<?php get_header(); ?>\n";
				$compiled_content .= wp_unslash( $html_content ) . "\n";
				$compiled_content .= "<?php get_footer(); ?>\n";
			}

			$result = file_put_contents( $file_path, $compiled_content );

			if ( false === $result ) {
				return new WP_Error( 'write_failed', 'Could not write to ' . $template_name . '. Check directory permissions.', array( 'status' => 500 ) );
			}

			$saved_files[] = $template_name;
		}

		return rest_ensure_response( array(
			'success' => true,
			'message' => 'Templates compiled successfully',
			'files'   => $saved_files,
		) );
	}

	public function create_child_theme( WP_REST_Request $request ) {
		$theme_name = sanitize_text_field( $request->get_param( 'theme_name' ) );
		
		if ( empty( $theme_name ) ) {
			return new WP_Error( 'missing_name', 'Child theme name is required', array( 'status' => 400 ) );
		}

		$theme_slug = sanitize_title( $theme_name );
		$themes_dir = get_theme_root();
		$child_dir  = $themes_dir . '/' . $theme_slug;

		if ( file_exists( $child_dir ) ) {
			return new WP_Error( 'theme_exists', 'A theme with this slug already exists.', array( 'status' => 400 ) );
		}

		if ( ! mkdir( $child_dir, 0777, true ) ) {
			return new WP_Error( 'mkdir_failed', 'Could not create child theme directory. Check permissions.', array( 'status' => 500 ) );
		}

		$style_css = "/**\n";
		$style_css .= " * Theme Name: {$theme_name}\n";
		$style_css .= " * Template: xophz-magic-hat\n";
		$style_css .= " * Description: Magic Wand Child Theme\n";
		$style_css .= " * Author: Xophz COMPASS\n";
		$style_css .= " */\n";

		file_put_contents( $child_dir . '/style.css', $style_css );

		$functions_php = "<?php\n/**\n * Child Theme Functions\n */\n";
		$functions_php .= "add_action( 'wp_enqueue_scripts', function() {\n";
		$functions_php .= "\twp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );\n";
		$functions_php .= "} );\n";

		file_put_contents( $child_dir . '/functions.php', $functions_php );

		// Create template directories for FSE block templates
		wp_mkdir_p( $child_dir . '/templates' );
		wp_mkdir_p( $child_dir . '/parts' );

		switch_theme( $theme_slug );

		return rest_ensure_response( array(
			'success' => true,
			'message' => 'Child theme created and activated!',
			'theme'   => $theme_slug,
		) );
	}
}
