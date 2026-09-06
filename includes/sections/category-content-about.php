<?php
/**
 * Category 2: Content & About Sections
 *
 * Narrative content blocks, split column features, about grids, and media showcases.
 * Standardized as 100% native WordPress core Gutenberg blocks.
 *
 * @package Xophz_Compass_Magic_Wand
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

return array(
	'about' => array(
		'id'       => 'about',
		'name'     => __( 'Story & Mission Split', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Two-column narrative on mission and team history with photography.', 'xophz-compass-magic-wand' ),
		'category' => 'about',
		'icon'     => 'dashicons-info-outline',
		'color'    => '#8b5cf6',
		'source'   => 'core',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-about about","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-about about has-surface-body-background-color has-background">
	<!-- wp:columns {"align":"wide","verticalAlignment":"center"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%">
			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">Our Mission &amp; Vision</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-main","style":{"typography":{"fontSize":"1.125rem","lineHeight":"1.7"}}} -->
			<p class="has-text-main-color has-text-color">We believe digital publishing should empower creators without complex friction or clunky builder bloat.</p>
			<!-- /wp:paragraph -->
			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#read-story">Read Our Story</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%">
			<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}}},"backgroundColor":"surface-section","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group has-surface-section-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Mission &amp; Story Spotlight</p>
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
	'faq' => array(
		'id'       => 'faq',
		'name'     => __( '2-Column FAQ Grid', 'xophz-compass-magic-wand' ),
		'desc'     => __( '4 frequently asked questions with clean, concise answers.', 'xophz-compass-magic-wand' ),
		'category' => 'content',
		'icon'     => 'dashicons-editor-help',
		'color'    => '#64748b',
		'source'   => 'core',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-faq faq","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-faq faq has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Frequently Asked Questions</h2>
		<!-- /wp:heading -->
		<!-- wp:columns {"align":"wide","style":{"spacing":{"margin":{"top":"var:preset|spacing|8"}}}} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:heading {"level":3,"fontSize":"md","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">Does this use standard Gutenberg blocks?</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Yes. All sections serialize directly into standard WordPress block comment markup. Zero proprietary lock-in.</p>
				<!-- /wp:paragraph -->
				<!-- wp:heading {"level":3,"fontSize":"md","textColor":"text-heading","style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">Can I customize the design tokens?</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Yes. All styling hooks directly into theme.json and CSS variables, providing consistent typography and circadian color palettes.</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->
			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:heading {"level":3,"fontSize":"md","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">Can I edit in the Site Editor and Customizer?</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Yes. Both work harmoniously because post_content is the single shared source of truth.</p>
				<!-- /wp:paragraph -->
				<!-- wp:heading {"level":3,"fontSize":"md","textColor":"text-heading","style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">Is there any external dependency?</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">None. All scripts, fonts, and assets are local, self-contained, and performant.</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->
		</div>
		<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),
	'content-image-right' => array(
		'id'       => 'content-image-right',
		'name'     => __( 'Content', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Content with image on the right', 'xophz-compass-magic-wand' ),
		'category' => 'content',
		'icon'     => 'dashicons-media-text',
		'color'    => '#0ea5e9',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-content-image-right content-image-right","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-content-image-right content-image-right has-surface-body-background-color has-background">
	<!-- wp:columns {"align":"wide","verticalAlignment":"center"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"55%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:55%">
			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">This is one of the things we do best</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-main","style":{"typography":{"fontSize":"1.125rem","lineHeight":"1.7"}}} -->
			<p class="has-text-main-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			<!-- /wp:paragraph -->
			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#learn-more">Learn More</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"45%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:45%">
			<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}}},"backgroundColor":"surface-section","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group has-surface-section-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontWeight":"600","letterSpacing":"0.5px"}}} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">MEDIA SHOWCASE</p>
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
	'content-image-left' => array(
		'id'       => 'content-image-left',
		'name'     => __( 'Content', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Content with image on the left', 'xophz-compass-magic-wand' ),
		'category' => 'content',
		'icon'     => 'dashicons-media-text',
		'color'    => '#0ea5e9',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-content-image-left content-image-left","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-content-image-left content-image-left has-surface-body-background-color has-background">
	<!-- wp:columns {"align":"wide","verticalAlignment":"center"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"45%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:45%">
			<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}}},"backgroundColor":"surface-section","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group has-surface-section-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontWeight":"600","letterSpacing":"0.5px"}}} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">MEDIA SHOWCASE</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"55%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:55%">
			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">This is one of the things we do best</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-main","style":{"typography":{"fontSize":"1.125rem","lineHeight":"1.7"}}} -->
			<p class="has-text-main-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			<!-- /wp:paragraph -->
			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#learn-more">Learn More</a></div>
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
	'content-full-left-image-section' => array(
		'id'       => 'content-full-left-image-section',
		'name'     => __( 'Content', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Full width content section', 'xophz-compass-magic-wand' ),
		'category' => 'content',
		'icon'     => 'dashicons-media-text',
		'color'    => '#0ea5e9',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-content-full-left content-full-left-image-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-content-full-left content-full-left-image-section has-surface-section-background-color has-background">
	<!-- wp:columns {"align":"wide","verticalAlignment":"center"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"45%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:45%">
			<!-- wp:group {"style":{"border":{"radius":"12px"},"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}}},"backgroundColor":"surface-card","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group has-surface-card-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Case Study Feature Showcase</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"55%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:55%">
			<!-- wp:paragraph {"textColor":"brand-base","fontSize":"xs","style":{"typography":{"fontWeight":"700","letterSpacing":"1px"}}} -->
			<p class="has-brand-base-color has-text-color has-xs-font-size">CASE STUDY</p>
			<!-- /wp:paragraph -->
			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">The Secret of Success</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-main"} -->
			<p class="has-text-main-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			<!-- /wp:paragraph -->
			<!-- wp:columns {"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
			<div class="wp-block-columns">
				<!-- wp:column -->
				<div class="wp-block-column">
					<!-- wp:heading {"level":4,"fontSize":"md","textColor":"text-heading"} -->
					<h4 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">CAMERA</h4>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">High-definition optics and real-time processing.</p>
					<!-- /wp:paragraph -->
					<!-- wp:heading {"level":4,"fontSize":"md","textColor":"text-heading","style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
					<h4 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">MUSIC CENTER</h4>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Studio fidelity audio hardware and spatial sound.</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:column -->
				<!-- wp:column -->
				<div class="wp-block-column">
					<!-- wp:heading {"level":4,"fontSize":"md","textColor":"text-heading"} -->
					<h4 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">MESSAGES</h4>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Encrypted peer-to-peer real-time dispatch.</p>
					<!-- /wp:paragraph -->
					<!-- wp:heading {"level":4,"fontSize":"md","textColor":"text-heading","style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
					<h4 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">CHANNELS</h4>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Multi-cast publishing with unified distribution.</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:column -->
			</div>
			<!-- /wp:columns -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->',
	),
	'content-full-right-image-section' => array(
		'id'       => 'content-full-right-image-section',
		'name'     => __( 'Content', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Full width content section with image on the right', 'xophz-compass-magic-wand' ),
		'category' => 'content',
		'icon'     => 'dashicons-media-text',
		'color'    => '#0ea5e9',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-content-full-right content-full-right-image-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-content-full-right content-full-right-image-section has-surface-section-background-color has-background">
	<!-- wp:columns {"align":"wide","verticalAlignment":"center"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"55%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:55%">
			<!-- wp:paragraph {"textColor":"brand-base","fontSize":"xs","style":{"typography":{"fontWeight":"700","letterSpacing":"1px"}}} -->
			<p class="has-brand-base-color has-text-color has-xs-font-size">CASE STUDY</p>
			<!-- /wp:paragraph -->
			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">The Secret of Success</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-main"} -->
			<p class="has-text-main-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			<!-- /wp:paragraph -->
			<!-- wp:columns {"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
			<div class="wp-block-columns">
				<!-- wp:column -->
				<div class="wp-block-column">
					<!-- wp:heading {"level":4,"fontSize":"md","textColor":"text-heading"} -->
					<h4 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">CAMERA</h4>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">High-definition optics and real-time processing.</p>
					<!-- /wp:paragraph -->
					<!-- wp:heading {"level":4,"fontSize":"md","textColor":"text-heading","style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
					<h4 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">MUSIC CENTER</h4>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Studio fidelity audio hardware and spatial sound.</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:column -->
				<!-- wp:column -->
				<div class="wp-block-column">
					<!-- wp:heading {"level":4,"fontSize":"md","textColor":"text-heading"} -->
					<h4 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">MESSAGES</h4>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Encrypted peer-to-peer real-time dispatch.</p>
					<!-- /wp:paragraph -->
					<!-- wp:heading {"level":4,"fontSize":"md","textColor":"text-heading","style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
					<h4 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">CHANNELS</h4>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Multi-cast publishing with unified distribution.</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:column -->
			</div>
			<!-- /wp:columns -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"45%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:45%">
			<!-- wp:group {"style":{"border":{"radius":"12px"},"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}}},"backgroundColor":"surface-card","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group has-surface-card-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Case Study Feature Showcase</p>
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
	'blog-section' => array(
		'id'       => 'blog-section',
		'name'     => __( 'Latest posts', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Blog section with recent publications', 'xophz-compass-magic-wand' ),
		'category' => 'content',
		'icon'     => 'dashicons-format-aside',
		'color'    => '#ef4444',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-blog blog-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-blog blog-section has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Latest News</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Read our latest articles, product updates, and technical deep-dives.</p>
		<!-- /wp:paragraph -->
		<!-- wp:latest-posts {"postsToShow":3,"displayPostDate":true,"align":"wide"} /-->
		<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|8"}}}} -->
		<div class="wp-block-buttons">
			<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
			<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#all-posts">See All Blog Posts</a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),
	'about-big-images-section' => array(
		'id'       => 'about-big-images-section',
		'name'     => __( 'About', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'About big images section', 'xophz-compass-magic-wand' ),
		'category' => 'about',
		'icon'     => 'dashicons-info-outline',
		'color'    => '#8b5cf6',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-about-big-images about-big-images-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-about-big-images about-big-images-section has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:paragraph {"align":"center","textColor":"brand-base","fontSize":"xs","style":{"typography":{"fontWeight":"700","letterSpacing":"1px"}}} -->
		<p class="has-text-align-center has-brand-base-color has-text-color has-xs-font-size">LOREM IPSUM DOLOR</p>
		<!-- /wp:paragraph -->
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Brand new WordPress theme with unlimited power and customization possibilities</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|6"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
		<!-- /wp:paragraph -->
		<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|10"}}}} -->
		<div class="wp-block-buttons">
			<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
			<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#get-started">Get Started Now</a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
				<div class="wp-block-group has-surface-section-background-color has-background">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Showcase Left</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:column -->
			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-card","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
				<div class="wp-block-group has-surface-card-background-color has-background">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Centerpiece Showcase</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:column -->
			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
				<div class="wp-block-group has-surface-section-background-color has-background">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Showcase Right</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:column -->
		</div>
		<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),
	'about-four-boxes-section' => array(
		'id'       => 'about-four-boxes-section',
		'name'     => __( 'About', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'About four boxes section', 'xophz-compass-magic-wand' ),
		'category' => 'about',
		'icon'     => 'dashicons-info-outline',
		'color'    => '#8b5cf6',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-about-four-boxes about-four-boxes-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-about-four-boxes about-four-boxes-section has-surface-section-background-color has-background">
	<!-- wp:columns {"align":"wide"} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column -->
		<div class="wp-block-column">
			<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-card","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group has-surface-card-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Project Showcase 1</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column -->
		<div class="wp-block-column">
			<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-group has-surface-card-background-color has-background">
				<!-- wp:paragraph {"textColor":"brand-base","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
				<p class="has-brand-base-color has-text-color has-xs-font-size">LOREM IPSUM DOLOR</p>
				<!-- /wp:paragraph -->
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Something Cool</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column -->
		<div class="wp-block-column">
			<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-group has-surface-card-background-color has-background">
				<!-- wp:paragraph {"textColor":"brand-base","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
				<p class="has-brand-base-color has-text-color has-xs-font-size">LOREM IPSUM DOLOR</p>
				<!-- /wp:paragraph -->
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Creative Impact</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column -->
		<div class="wp-block-column">
			<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-card","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group has-surface-card-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Project Showcase 2</p>
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
	'about-images-right-section' => array(
		'id'       => 'about-images-right-section',
		'name'     => __( 'About', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'About images right section', 'xophz-compass-magic-wand' ),
		'category' => 'about',
		'icon'     => 'dashicons-info-outline',
		'color'    => '#8b5cf6',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-about-images-right about-images-right-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-about-images-right about-images-right-section has-surface-body-background-color has-background">
	<!-- wp:columns {"align":"wide","verticalAlignment":"center"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%">
			<!-- wp:paragraph {"textColor":"brand-base","fontSize":"xs","style":{"typography":{"fontWeight":"700","letterSpacing":"1px"}}} -->
			<p class="has-brand-base-color has-text-color has-xs-font-size">LOREM IPSUM DOLOR</p>
			<!-- /wp:paragraph -->
			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">Enjoy the best design and functions combined together</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-main"} -->
			<p class="has-text-main-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			<!-- /wp:paragraph -->
			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#get-started">Get Started Now</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%">
			<!-- wp:group {"style":{"border":{"radius":"12px"},"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group has-surface-section-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Overlapping Media Showcase</p>
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
	'about-text-grid-section' => array(
		'id'       => 'about-text-grid-section',
		'name'     => __( 'About', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'About text grid section', 'xophz-compass-magic-wand' ),
		'category' => 'about',
		'icon'     => 'dashicons-info-outline',
		'color'    => '#8b5cf6',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-about-text-grid about-text-grid-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-about-text-grid about-text-grid-section has-surface-body-background-color has-background">
	<!-- wp:columns {"align":"wide","verticalAlignment":"center"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"40%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:40%">
			<!-- wp:paragraph {"textColor":"brand-base","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
			<p class="has-brand-base-color has-text-color has-xs-font-size">LOREM IPSUM DOLOR</p>
			<!-- /wp:paragraph -->
			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">Enjoy the best design and functions combined together</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-main"} -->
			<p class="has-text-main-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
			<!-- /wp:paragraph -->
			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#get-started">Get Started Now</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"60%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:60%">
			<!-- wp:columns -->
			<div class="wp-block-columns">
				<!-- wp:column -->
				<div class="wp-block-column">
					<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
					<div class="wp-block-group has-surface-section-background-color has-background">
						<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
						<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Media Feature</p>
						<!-- /wp:paragraph -->
					</div>
					<!-- /wp:group -->
					<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"},"margin":{"top":"var:preset|spacing|4"}}},"backgroundColor":"surface-card"} -->
					<div class="wp-block-group has-surface-card-background-color has-background">
						<!-- wp:heading {"level":4,"fontSize":"sm","textColor":"text-heading"} -->
						<h4 class="wp-block-heading has-text-heading-color has-text-color has-sm-font-size">LOREM IPSUM DOLOR</h4>
						<!-- /wp:heading -->
						<!-- wp:paragraph {"textColor":"text-muted","fontSize":"xs"} -->
						<p class="has-text-muted-color has-text-color has-xs-font-size">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						<!-- /wp:paragraph -->
					</div>
					<!-- /wp:group -->
				</div>
				<!-- /wp:column -->
				<!-- wp:column -->
				<div class="wp-block-column">
					<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-card"} -->
					<div class="wp-block-group has-surface-card-background-color has-background">
						<!-- wp:heading {"level":4,"fontSize":"sm","textColor":"text-heading"} -->
						<h4 class="wp-block-heading has-text-heading-color has-text-color has-sm-font-size">LOREM IPSUM DOLOR</h4>
						<!-- /wp:heading -->
						<!-- wp:paragraph {"textColor":"text-muted","fontSize":"xs"} -->
						<p class="has-text-muted-color has-text-color has-xs-font-size">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						<!-- /wp:paragraph -->
					</div>
					<!-- /wp:group -->
					<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"},"margin":{"top":"var:preset|spacing|4"}}},"backgroundColor":"surface-section","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
					<div class="wp-block-group has-surface-section-background-color has-background">
						<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
						<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Media Feature</p>
						<!-- /wp:paragraph -->
					</div>
					<!-- /wp:group -->
				</div>
				<!-- /wp:column -->
			</div>
			<!-- /wp:columns -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->',
	),
	'about-text-icons-section' => array(
		'id'       => 'about-text-icons-section',
		'name'     => __( 'About', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'About text icons section', 'xophz-compass-magic-wand' ),
		'category' => 'about',
		'icon'     => 'dashicons-info-outline',
		'color'    => '#8b5cf6',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-about-text-icons about-text-icons-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-about-text-icons about-text-icons-section has-surface-body-background-color has-background">
	<!-- wp:columns {"align":"wide","verticalAlignment":"center"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"35%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:35%">
			<!-- wp:paragraph {"textColor":"brand-base","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
			<p class="has-brand-base-color has-text-color has-xs-font-size">LOREM IPSUM DOLOR</p>
			<!-- /wp:paragraph -->
			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">Enjoy the best design and functions combined together</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-main"} -->
			<p class="has-text-main-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			<!-- /wp:paragraph -->
			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#get-started">Get Started Now</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"65%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:65%">
			<!-- wp:columns -->
			<div class="wp-block-columns">
				<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
				<div class="wp-block-column has-surface-card-background-color has-background">
					<!-- wp:heading {"level":3,"fontSize":"md","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">Responsive Design</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Fluid layouts adjusting dynamically across desktop, tablet, and handheld displays.</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:column -->
				<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
				<div class="wp-block-column has-surface-card-background-color has-background">
					<!-- wp:heading {"level":3,"fontSize":"md","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">Modular Controls</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Customizer controls and Site Editor blocks working together without friction.</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:column -->
			</div>
			<!-- /wp:columns -->
			<!-- wp:columns {"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
			<div class="wp-block-columns">
				<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
				<div class="wp-block-column has-surface-card-background-color has-background">
					<!-- wp:heading {"level":3,"fontSize":"md","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">Design Tokens</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Dynamic palettes, circadian lighting cycles, and unified color standards.</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:column -->
				<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
				<div class="wp-block-column has-surface-card-background-color has-background">
					<!-- wp:heading {"level":3,"fontSize":"md","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">Fast Execution</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Sub-second rendering with minimal CSS footprint and zero bloat.</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:column -->
			</div>
			<!-- /wp:columns -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->',
	),
	'about-image-section-pro' => array(
		'id'       => 'about-image-section-pro',
		'name'     => __( 'About us', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Classic about section with image', 'xophz-compass-magic-wand' ),
		'category' => 'about',
		'icon'     => 'dashicons-info-outline',
		'color'    => '#8b5cf6',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-about-pro about-image-section-pro","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-about-pro about-image-section-pro has-surface-body-background-color has-background">
	<!-- wp:columns {"align":"wide","verticalAlignment":"center"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%">
			<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}}},"backgroundColor":"surface-section","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group has-surface-section-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontWeight":"600","letterSpacing":"0.5px"}}} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">ABOUT MEDIA SHOWCASE</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%">
			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">About Our Vision</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-main","style":{"typography":{"fontSize":"1.125rem","lineHeight":"1.7"}}} -->
			<p class="has-text-main-color has-text-color">We design beautiful, high performance digital experiences that elevate your brand.</p>
			<!-- /wp:paragraph -->
			<!-- wp:paragraph {"textColor":"text-muted"} -->
			<p class="has-text-muted-color has-text-color">Our dedicated team merges creative storytelling with robust engineering to deliver seamless web solutions.</p>
			<!-- /wp:paragraph -->
			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#our-story">Read Our Story</a></div>
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
	'content-video-left' => array(
		'id'       => 'content-video-left',
		'name'     => __( 'Content', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Content with video on left', 'xophz-compass-magic-wand' ),
		'category' => 'content',
		'icon'     => 'dashicons-media-text',
		'color'    => '#0ea5e9',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-content-video-left content-video-left","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-content-video-left content-video-left has-surface-body-background-color has-background">
	<!-- wp:columns {"align":"wide","verticalAlignment":"center"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%">
			<!-- wp:group {"style":{"border":{"radius":"12px"},"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}}},"backgroundColor":"surface-card","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"textColor":"brand-base"} -->
				<h3 class="wp-block-heading has-text-align-center has-brand-base-color has-text-color">Platform Walkthrough</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Watch our 2-minute architectural overview.</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
					<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#watch-video">Watch Video</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%">
			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">See How It Works In Action</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-main","style":{"typography":{"fontSize":"1.125rem","lineHeight":"1.7"}}} -->
			<p class="has-text-main-color has-text-color">Watch our quick walkthrough to discover how our platform powers modern web experiences.</p>
			<!-- /wp:paragraph -->
			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#explore-features">Explore Features</a></div>
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
	'content-video-right' => array(
		'id'       => 'content-video-right',
		'name'     => __( 'Content', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Content with video on right', 'xophz-compass-magic-wand' ),
		'category' => 'content',
		'icon'     => 'dashicons-media-text',
		'color'    => '#0ea5e9',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-content-video-right content-video-right","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-content-video-right content-video-right has-surface-body-background-color has-background">
	<!-- wp:columns {"align":"wide","verticalAlignment":"center"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%">
			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">Engineered for High Impact</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-main","style":{"typography":{"fontSize":"1.125rem","lineHeight":"1.7"}}} -->
			<p class="has-text-main-color has-text-color">Streamline workflows, collaborate seamlessly, and achieve sub-second page performance across devices.</p>
			<!-- /wp:paragraph -->
			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#get-started">Get Started Free</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%">
			<!-- wp:group {"style":{"border":{"radius":"12px"},"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}}},"backgroundColor":"surface-card","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"textColor":"brand-base"} -->
				<h3 class="wp-block-heading has-text-align-center has-brand-base-color has-text-color">Feature Tour</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Explore the full component suite in motion.</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
					<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#watch-video">Watch Video</a></div>
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
	'full-width-video-popup' => array(
		'id'       => 'full-width-video-popup',
		'name'     => __( 'Content', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Section with video lightbox button', 'xophz-compass-magic-wand' ),
		'category' => 'content',
		'icon'     => 'dashicons-media-text',
		'color'    => '#0ea5e9',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-video-popup full-width-video-popup","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-video-popup full-width-video-popup has-surface-section-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Watch the Full Presentation</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"typography":{"fontSize":"1.125rem"}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Take an immersive tour through our next generation design architecture.</p>
		<!-- /wp:paragraph -->
		<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
		<div class="wp-block-buttons">
			<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
			<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#play-presentation">Play Video Presentation</a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),
	'video-on-bottom' => array(
		'id'       => 'video-on-bottom',
		'name'     => __( 'Content', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Content with video on bottom', 'xophz-compass-magic-wand' ),
		'category' => 'content',
		'icon'     => 'dashicons-media-text',
		'color'    => '#0ea5e9',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-video-bottom video-on-bottom","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-video-bottom video-on-bottom has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Experience Pure Speed</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"typography":{"fontSize":"1.125rem"}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Watch our lightning-fast deployment cycle in real time.</p>
		<!-- /wp:paragraph -->
		<!-- wp:group {"style":{"border":{"radius":"12px"},"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|8","right":"var:preset|spacing|8"},"margin":{"top":"var:preset|spacing|8"}}},"backgroundColor":"surface-section","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
		<div class="wp-block-group has-surface-section-background-color has-background">
			<!-- wp:heading {"textAlign":"center","level":3,"textColor":"brand-base"} -->
			<h3 class="wp-block-heading has-text-align-center has-brand-base-color has-text-color">Real-Time Architectural Demo</h3>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Sub-second builds, atomic deployments, and instant preview synchronization.</p>
			<!-- /wp:paragraph -->
			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#watch-demo">Watch Live Demo</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:group -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),
);
