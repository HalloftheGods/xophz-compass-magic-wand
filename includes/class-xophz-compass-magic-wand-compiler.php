<?php

class Xophz_Compass_Magic_Wand_Compiler {

	public function register_routes() {
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
	}

	public function check_permission() {
		return current_user_can( 'edit_theme_options' );
	}

	public function compile_template( WP_REST_Request $request ) {
		$templates = $request->get_param( 'templates' );

		if ( empty( $templates ) || ! is_array( $templates ) ) {
			return new WP_Error( 'missing_templates', 'Template data is required', array( 'status' => 400 ) );
		}

		// Protect the parent theme
		$stylesheet = get_stylesheet();
		if ( $stylesheet === 'xophz-magic-hat' || $stylesheet === 'xophz-blank-slate' ) {
			return new WP_Error( 'parent_theme_active', 'You cannot compile directly into the Magic Hat parent theme. Please create a child theme first.', array( 'status' => 403 ) );
		}

		$theme_dir = get_stylesheet_directory(); // Writes to the child theme if active, else parent

		$saved_files = array();

		foreach ( $templates as $key => $html_content ) {
			$template_name = sanitize_file_name( $key );
			
			// Ensure we are only writing safe php/html extensions
			if ( ! str_ends_with( $template_name, '.php' ) ) {
				$template_name .= '.php';
			}

			$file_path = $theme_dir . '/' . $template_name;

			// Step 1: Strip editor-specific classes
			$html_content = preg_replace( '/\s*magic-wand-(hover|selected|editing|dimmed)\s*/', ' ', $html_content );
			$html_content = str_replace( 'class=""', '', $html_content );

			// Step 2: Translate dynamic Magic Wand components into native WordPress PHP functions
			// Translate Site Identity block
			$html_content = preg_replace(
				'/<([^>]+)data-mw-type="site-identity"([^>]*)>(.*?)<\/\1>/s',
				'<$1$2><?php bloginfo(\'name\'); ?></$1>',
				$html_content
			);

			// Translate Menu block
			$html_content = preg_replace(
				'/<([^>]+)data-mw-type="menu"([^>]*)>(.*?)<\/\1>/s',
				'<?php wp_nav_menu( array( \'theme_location\' => \'primary\', \'container_class\' => \'magic-menu\' ) ); ?>',
				$html_content
			);

			// Step 3: Wrap the HTML with the appropriate WordPress structural PHP
			$compiled_content = "<?php\n/**\n * Compiled by Magic Wand\n */\n?>\n";

			if ( $template_name === 'header.php' ) {
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
			} elseif ( $template_name === 'footer.php' ) {
				$compiled_content .= wp_unslash( $html_content ) . "\n";
				$compiled_content .= '    <?php wp_footer(); ?>' . "\n";
				$compiled_content .= '</body>' . "\n";
				$compiled_content .= '</html>' . "\n";
			} else {
				// Standard page/post template (index.php, single.php, etc)
				$compiled_content .= "<?php get_header(); ?>\n";
				$compiled_content .= wp_unslash( $html_content ) . "\n";
				$compiled_content .= "<?php get_footer(); ?>\n";
			}

			$result = file_put_contents( $file_path, $compiled_content );

			if ( $result === false ) {
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

		// Create the directory
		if ( ! mkdir( $child_dir, 0777, true ) ) {
			return new WP_Error( 'mkdir_failed', 'Could not create child theme directory. Check permissions.', array( 'status' => 500 ) );
		}

		// Create style.css
		$style_css = "/**\n";
		$style_css .= " * Theme Name: {$theme_name}\n";
		$style_css .= " * Template: xophz-magic-hat\n";
		$style_css .= " * Description: Magic Wand Child Theme\n";
		$style_css .= " * Author: Xophz COMPASS\n";
		$style_css .= " */\n";

		file_put_contents( $child_dir . '/style.css', $style_css );

		// Create functions.php
		$functions_php = "<?php\n/**\n * Child Theme Functions\n */\n";
		$functions_php .= "add_action( 'wp_enqueue_scripts', function() {\n";
		$functions_php .= "\twp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );\n";
		$functions_php .= "} );\n";

		file_put_contents( $child_dir . '/functions.php', $functions_php );

		// Activate the new theme
		switch_theme( $theme_slug );

		return rest_ensure_response( array(
			'success' => true,
			'message' => 'Child theme created and activated!',
			'theme'   => $theme_slug
		) );
	}
}
