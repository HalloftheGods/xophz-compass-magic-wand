<?php
/**
 * Category 1: Hero & Overlapable Sections
 *
 * Implements 6 Hero and Overlapable sections for Magic Hat & Magic Wand.
 * Rebranded with .mh-section-* wrapper classes, tokenized SVG / CSS mock containers,
 * and 100% native WordPress Gutenberg core block patterns.
 * Zero raw legacy HTML elements inside wp:group.
 *
 * @package Xophz_Compass_Magic_Wand
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

return array(
	'hero' => array(
		'id'       => 'hero',
		'name'     => __( 'Split Image Hero', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Bold headline, value copy, dual action buttons, and side image.', 'xophz-compass-magic-wand' ),
		'category' => 'hero',
		'icon'     => 'dashicons-format-image',
		'color'    => '#2563eb',
		'source'   => 'core',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-hero","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-hero has-surface-body-background-color has-background">
	<!-- wp:columns {"verticalAlignment":"center","align":"wide"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"55%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:55%">
			<!-- wp:group {"style":{"border":{"radius":"9999px","width":"1px","color":"rgba(37,99,235,0.25)"},"spacing":{"padding":{"top":"var:preset|spacing|1","bottom":"var:preset|spacing|1","left":"var:preset|spacing|3","right":"var:preset|spacing|3"}}},"backgroundColor":"surface-card","layout":{"type":"flex","justifyContent":"left"}} -->
			<div class="wp-block-group has-surface-card-background-color has-background">
				<!-- wp:paragraph {"textColor":"brand-base","fontSize":"xs","style":{"typography":{"fontWeight":"700","letterSpacing":"1px"}}} -->
				<p class="has-brand-base-color has-text-color has-xs-font-size">NEXT GENERATION PLATFORM</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->

			<!-- wp:heading {"level":1,"style":{"typography":{"fontSize":"clamp(2.5rem, 5vw, 3.75rem)","lineHeight":"1.15","fontWeight":"800"}},"textColor":"text-heading"} -->
			<h1 class="wp-block-heading has-text-heading-color has-text-color">Build Stunning Experiences with Quantum Precision</h1>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"textColor":"text-muted","style":{"typography":{"fontSize":"1.125rem","lineHeight":"1.6"}}} -->
			<p class="has-text-muted-color has-text-color">Craft responsive, accessible web applications with unified tokens, modular patterns, and zero-entropy engineering.</p>
			<!-- /wp:paragraph -->

			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#get-started">Get Started</a></div>
				<!-- /wp:button -->

				<!-- wp:button {"variant":"outline","style":{"border":{"radius":"6px","width":"1px"}}} -->
				<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="#explore">Explore Features</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"verticalAlignment":"center","width":"45%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:45%">
			<!-- wp:group {"className":"mh-mock-media-box","style":{"border":{"radius":"12px"},"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}}},"backgroundColor":"surface-section","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontWeight":"700","letterSpacing":"1px"}}} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">HERO MEDIA SHOWCASE</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->',
	),

	'hero-centered' => array(
		'id'       => 'hero-centered',
		'name'     => __( 'Centered Impact Hero', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Centered headline with badge pill, primary CTA, and proof avatars.', 'xophz-compass-magic-wand' ),
		'category' => 'hero',
		'icon'     => 'dashicons-align-center',
		'color'    => '#3b82f6',
		'source'   => 'core',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-hero-centered","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-hero-centered has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":1,"style":{"typography":{"fontSize":"clamp(2.5rem, 6vw, 4.25rem)","lineHeight":"1.1","fontWeight":"800"}},"textColor":"text-heading"} -->
		<h1 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Modern Websites Crafted with Pure Simplicity</h1>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"typography":{"fontSize":"1.25rem","lineHeight":"1.6"}},"layout":{"type":"constrained","justifyContent":"center"}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Synthesizing real-time token standards, modular Gutenberg patterns, and direct visual canvas controls into a pure blank-canvas experience.</p>
		<!-- /wp:paragraph -->

		<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
		<div class="wp-block-buttons">
			<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
			<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#get-started">Get Started</a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),

	'stripped-about-four-boxes-section' => array(
		'id'       => 'stripped-about-four-boxes-section',
		'name'     => __( 'Overlapable Four Boxes', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Four card grid layout with alternating visual media containers and narrative text.', 'xophz-compass-magic-wand' ),
		'category' => 'overlapable',
		'icon'     => 'dashicons-align-center',
		'color'    => '#6366f1',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-overlap mh-section-overlap-four-boxes stripped-about-four-boxes-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|0","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-overlap mh-section-overlap-four-boxes stripped-about-four-boxes-section">
	<!-- wp:columns {"align":"wide","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|6"}}}} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}},"border":{"radius":"8px"}},"backgroundColor":"surface-section"} -->
		<div class="wp-block-column is-vertically-aligned-center has-surface-section-background-color has-background">
			<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontWeight":"700","letterSpacing":"1px"}}} -->
			<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">VISUAL SHOWCASE</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column is-vertically-aligned-center has-surface-card-background-color has-background">
			<!-- wp:paragraph {"textColor":"brand-base","fontSize":"xs","style":{"typography":{"fontWeight":"700","letterSpacing":"1.5px"}}} -->
			<p class="has-brand-base-color has-text-color has-xs-font-size">LOREM IPSUM DOLOR</p>
			<!-- /wp:paragraph -->

			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">Something cool</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"textColor":"text-muted"} -->
			<p class="has-text-muted-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->

	<!-- wp:columns {"align":"wide"} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column is-vertically-aligned-center has-surface-card-background-color has-background">
			<!-- wp:paragraph {"textColor":"brand-base","fontSize":"xs","style":{"typography":{"fontWeight":"700","letterSpacing":"1.5px"}}} -->
			<p class="has-brand-base-color has-text-color has-xs-font-size">LOREM IPSUM DOLOR</p>
			<!-- /wp:paragraph -->

			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">Something cool</h2>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"textColor":"text-muted"} -->
			<p class="has-text-muted-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}},"border":{"radius":"8px"}},"backgroundColor":"surface-section"} -->
		<div class="wp-block-column is-vertically-aligned-center has-surface-section-background-color has-background">
			<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontWeight":"700","letterSpacing":"1px"}}} -->
			<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">VISUAL SHOWCASE</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->',
	),

	'stripped-coloured-icon-boxes' => array(
		'id'       => 'stripped-coloured-icon-boxes',
		'name'     => __( 'Overlapable Coloured Icon Boxes', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Four high-impact feature columns with icons, descriptions, and action buttons in an overlapping band.', 'xophz-compass-magic-wand' ),
		'category' => 'overlapable',
		'icon'     => 'dashicons-align-center',
		'color'    => '#6366f1',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-overlap mh-section-overlap-coloured-boxes stripped-coloured-icon-boxes","style":{"spacing":{"padding":{"top":"var:preset|spacing|0","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-overlap mh-section-overlap-coloured-boxes stripped-coloured-icon-boxes">
	<!-- wp:columns {"align":"wide"} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column has-surface-card-background-color has-background">
			<!-- wp:group {"style":{"border":{"radius":"9999px"},"spacing":{"padding":{"top":"var:preset|spacing|3","bottom":"var:preset|spacing|3","left":"var:preset|spacing|3","right":"var:preset|spacing|3"},"margin":{"bottom":"var:preset|spacing|4"}}},"backgroundColor":"brand-muted","layout":{"type":"flex","justifyContent":"center"}} -->
			<div class="wp-block-group has-brand-muted-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"brand-base","fontSize":"lg"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-lg-font-size"><i class="fa fa-bolt"></i></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->

			<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
			<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Responsive Design</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Craft responsive web applications designed to adapt effortlessly across all screen sizes.</p>
			<!-- /wp:paragraph -->

			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-muted","textColor":"brand-base","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}},"fontSize":"xs"} -->
				<div class="wp-block-button has-custom-font-size has-xs-font-size"><a class="wp-block-button__link has-brand-base-color has-brand-muted-background-color has-text-color has-background wp-element-button" href="#learn-more">Learn More</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column has-surface-card-background-color has-background">
			<!-- wp:group {"style":{"border":{"radius":"9999px"},"spacing":{"padding":{"top":"var:preset|spacing|3","bottom":"var:preset|spacing|3","left":"var:preset|spacing|3","right":"var:preset|spacing|3"},"margin":{"bottom":"var:preset|spacing|4"}}},"backgroundColor":"brand-muted","layout":{"type":"flex","justifyContent":"center"}} -->
			<div class="wp-block-group has-brand-muted-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"brand-base","fontSize":"lg"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-lg-font-size"><i class="fa fa-cloud"></i></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->

			<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
			<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Cloud Architecture</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Scale your infrastructure seamlessly with modular cloud integrations and microservices.</p>
			<!-- /wp:paragraph -->

			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-muted","textColor":"brand-base","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}},"fontSize":"xs"} -->
				<div class="wp-block-button has-custom-font-size has-xs-font-size"><a class="wp-block-button__link has-brand-base-color has-brand-muted-background-color has-text-color has-background wp-element-button" href="#learn-more">Learn More</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column has-surface-card-background-color has-background">
			<!-- wp:group {"style":{"border":{"radius":"9999px"},"spacing":{"padding":{"top":"var:preset|spacing|3","bottom":"var:preset|spacing|3","left":"var:preset|spacing|3","right":"var:preset|spacing|3"},"margin":{"bottom":"var:preset|spacing|4"}}},"backgroundColor":"brand-muted","layout":{"type":"flex","justifyContent":"center"}} -->
			<div class="wp-block-group has-brand-muted-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"brand-base","fontSize":"lg"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-lg-font-size"><i class="fa fa-signal"></i></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->

			<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
			<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">High Performance</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Achieve optimal loading metrics, smooth frame rates, and sub-second interaction speed.</p>
			<!-- /wp:paragraph -->

			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-muted","textColor":"brand-base","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}},"fontSize":"xs"} -->
				<div class="wp-block-button has-custom-font-size has-xs-font-size"><a class="wp-block-button__link has-brand-base-color has-brand-muted-background-color has-text-color has-background wp-element-button" href="#learn-more">Learn More</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column has-surface-card-background-color has-background">
			<!-- wp:group {"style":{"border":{"radius":"9999px"},"spacing":{"padding":{"top":"var:preset|spacing|3","bottom":"var:preset|spacing|3","left":"var:preset|spacing|3","right":"var:preset|spacing|3"},"margin":{"bottom":"var:preset|spacing|4"}}},"backgroundColor":"brand-muted","layout":{"type":"flex","justifyContent":"center"}} -->
			<div class="wp-block-group has-brand-muted-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"brand-base","fontSize":"lg"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-lg-font-size"><i class="fa fa-pie-chart"></i></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->

			<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
			<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Actionable Analytics</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Real-time analytics and telemetry tracking to monitor engagement and user conversions.</p>
			<!-- /wp:paragraph -->

			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-muted","textColor":"brand-base","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}},"fontSize":"xs"} -->
				<div class="wp-block-button has-custom-font-size has-xs-font-size"><a class="wp-block-button__link has-brand-base-color has-brand-muted-background-color has-text-color has-background wp-element-button" href="#learn-more">Learn More</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->',
	),

	'stripped-features-image-cards-section' => array(
		'id'       => 'stripped-features-image-cards-section',
		'name'     => __( 'Overlapable Image Cards', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Three floating card columns with media preview headers, descriptions, and chevron links.', 'xophz-compass-magic-wand' ),
		'category' => 'overlapable',
		'icon'     => 'dashicons-align-center',
		'color'    => '#6366f1',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-overlap mh-section-overlap-image-cards stripped-features-image-cards-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|0","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-overlap mh-section-overlap-image-cards stripped-features-image-cards-section">
	<!-- wp:columns {"align":"wide"} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|6","left":"0","right":"0"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column has-surface-card-background-color has-background">
			<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":{"topLeft":"8px","topRight":"8px","bottomLeft":"0px","bottomRight":"0px"}}},"backgroundColor":"surface-section","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group has-surface-section-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontWeight":"700","letterSpacing":"1px"}}} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">MEDIA SHOWCASE</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->

			<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|2","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"layout":{"type":"constrained"}} -->
			<div class="wp-block-group">
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Responsive Design</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Adaptable layouts engineered for optimal performance across desktop, tablet, and mobile screens.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"variant":"outline","style":{"border":{"radius":"6px"}},"fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" href="#learn-more">Learn More</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|6","left":"0","right":"0"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column has-surface-card-background-color has-background">
			<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":{"topLeft":"8px","topRight":"8px","bottomLeft":"0px","bottomRight":"0px"}}},"backgroundColor":"surface-section","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group has-surface-section-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontWeight":"700","letterSpacing":"1px"}}} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">MEDIA SHOWCASE</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->

			<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|2","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"layout":{"type":"constrained"}} -->
			<div class="wp-block-group">
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Clean Code Architecture</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Engineered with atomic principles, strict typing, and decoupled components.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"variant":"outline","style":{"border":{"radius":"6px"}},"fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" href="#learn-more">Learn More</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|6","left":"0","right":"0"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column has-surface-card-background-color has-background">
			<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":{"topLeft":"8px","topRight":"8px","bottomLeft":"0px","bottomRight":"0px"}}},"backgroundColor":"surface-section","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group has-surface-section-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontWeight":"700","letterSpacing":"1px"}}} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">MEDIA SHOWCASE</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->

			<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|2","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"layout":{"type":"constrained"}} -->
			<div class="wp-block-group">
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Circadian Theming</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Dynamic lighting palette transitions aligned with time and ambient illumination.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"variant":"outline","style":{"border":{"radius":"6px"}},"fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" href="#learn-more">Learn More</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->',
	),

	'stripped-features-overlapped-icons-section' => array(
		'id'       => 'stripped-features-overlapped-icons-section',
		'name'     => __( 'Overlapable Icons', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Four overlapping icon feature blocks with accent icons, headlines, and details.', 'xophz-compass-magic-wand' ),
		'category' => 'overlapable',
		'icon'     => 'dashicons-align-center',
		'color'    => '#6366f1',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-overlap mh-section-overlap-icons stripped-features-overlapped-icons-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|0","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-overlap mh-section-overlap-icons stripped-features-overlapped-icons-section">
	<!-- wp:columns {"align":"wide"} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column has-surface-card-background-color has-background">
			<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|3","bottom":"var:preset|spacing|3","left":"var:preset|spacing|3","right":"var:preset|spacing|3"},"margin":{"bottom":"var:preset|spacing|4"}}},"backgroundColor":"brand-muted","layout":{"type":"flex","justifyContent":"center"}} -->
			<div class="wp-block-group has-brand-muted-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"brand-base","fontSize":"lg"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-lg-font-size"><i class="fa fa-bolt"></i></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->

			<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
			<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Responsive Design</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-muted-color has-text-color has-sm-font-size">Craft responsive layouts that maintain clarity and balance on every display.</p>
			<!-- /wp:paragraph -->

			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"variant":"outline","style":{"border":{"radius":"6px"}},"fontSize":"xs"} -->
				<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" href="#learn-more">Learn More</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column has-surface-card-background-color has-background">
			<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|3","bottom":"var:preset|spacing|3","left":"var:preset|spacing|3","right":"var:preset|spacing|3"},"margin":{"bottom":"var:preset|spacing|4"}}},"backgroundColor":"brand-muted","layout":{"type":"flex","justifyContent":"center"}} -->
			<div class="wp-block-group has-brand-muted-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"brand-base","fontSize":"lg"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-lg-font-size"><i class="fa fa-rocket"></i></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->

			<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
			<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Rapid Deployment</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-muted-color has-text-color has-sm-font-size">Deploy production-ready components quickly with standardized blocks and patterns.</p>
			<!-- /wp:paragraph -->

			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"variant":"outline","style":{"border":{"radius":"6px"}},"fontSize":"xs"} -->
				<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" href="#learn-more">Learn More</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column has-surface-card-background-color has-background">
			<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|3","bottom":"var:preset|spacing|3","left":"var:preset|spacing|3","right":"var:preset|spacing|3"},"margin":{"bottom":"var:preset|spacing|4"}}},"backgroundColor":"brand-muted","layout":{"type":"flex","justifyContent":"center"}} -->
			<div class="wp-block-group has-brand-muted-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"brand-base","fontSize":"lg"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-lg-font-size"><i class="fa fa-signal"></i></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->

			<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
			<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Scalable Growth</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-muted-color has-text-color has-sm-font-size">Built to handle increasing traffic, complex catalogues, and enterprise workloads.</p>
			<!-- /wp:paragraph -->

			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"variant":"outline","style":{"border":{"radius":"6px"}},"fontSize":"xs"} -->
				<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" href="#learn-more">Learn More</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column has-surface-card-background-color has-background">
			<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|3","bottom":"var:preset|spacing|3","left":"var:preset|spacing|3","right":"var:preset|spacing|3"},"margin":{"bottom":"var:preset|spacing|4"}}},"backgroundColor":"brand-muted","layout":{"type":"flex","justifyContent":"center"}} -->
			<div class="wp-block-group has-brand-muted-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"brand-base","fontSize":"lg"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-lg-font-size"><i class="fa fa-cogs"></i></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->

			<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
			<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Modular Controls</h3>
			<!-- /wp:heading -->

			<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-muted-color has-text-color has-sm-font-size">Full customizer integration and atomic Gutenberg blocks tailored to your workflow.</p>
			<!-- /wp:paragraph -->

			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"variant":"outline","style":{"border":{"radius":"6px"}},"fontSize":"xs"} -->
				<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" href="#learn-more">Learn More</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->',
	),
);
