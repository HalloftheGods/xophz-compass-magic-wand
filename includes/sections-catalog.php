<?php
/**
 * Canonical Sections Catalog for Magic Hat & Magic Wand
 *
 * Modular orchestrator loading category definitions from includes/sections/.
 *
 * @package Xophz_Compass_Magic_Wand
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Retrieve the full canonical sections catalog by merging all category definitions.
 *
 * @return array<string, array<string, mixed>> Merged catalog of section definitions.
 */
function mh_get_sections_catalog(): array {
	static $catalog = null;
	if ( null !== $catalog ) {
		return $catalog;
	}

	$sections_dir = __DIR__ . '/sections';
	$files = array(
		'hero-overlap'      => $sections_dir . '/category-hero-overlap.php',
		'content-about'     => $sections_dir . '/category-content-about.php',
		'features-numbers'  => $sections_dir . '/category-features-numbers.php',
		'team-testimonials' => $sections_dir . '/category-team-testimonials.php',
		'cta-contact'       => $sections_dir . '/category-cta-contact.php',
		'pricing-portfolio' => $sections_dir . '/category-pricing-portfolio.php',
	);

	$catalog = array();
	foreach ( $files as $slug => $filepath ) {
		if ( file_exists( $filepath ) ) {
			$category_sections = require $filepath;
			if ( is_array( $category_sections ) ) {
				$catalog = array_merge( $catalog, $category_sections );
			}
		}
	}

	return $catalog;
}
