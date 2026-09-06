<?php
/**
 * Category 4: Team & Testimonials Sections
 *
 * Implements 5 Team and Testimonials sections for Magic Hat and Magic Wand.
 * 100% native WordPress Gutenberg core blocks (wp:group, wp:columns, wp:column,
 * wp:heading, wp:paragraph, wp:buttons) styled natively using theme.json tokens.
 * Zero raw legacy HTML elements inside wp:group.
 *
 * @package Xophz_Compass_Magic_Wand
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

return array(
	'team-colors-section' => array(
		'id'       => 'team-colors-section',
		'name'     => __( 'Team Colors Showcase', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Personnel showcase featuring colorful header accents, member photo avatars, role badges, bios, and social links.', 'xophz-compass-magic-wand' ),
		'category' => 'magic-wand-team',
		'icon'     => 'dashicons-businessman',
		'color'    => '#ec4899',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-team-colors","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-team-colors has-surface-body-background-color has-background" style="padding-top:var(--wp--preset--spacing--12);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--12);padding-left:var(--wp--preset--spacing--6)">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Our Leadership &amp; Team</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color" style="margin-bottom:var(--wp--preset--spacing--8)">Meet the visionary minds, systems architects, and creative directors driving continuous innovation and operational excellence.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"className":"mh-team-color-card","style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|6","left":"0","right":"0"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-team-color-card has-surface-card-background-color has-background" style="border-radius:8px;padding-top:0;padding-right:0;padding-bottom:var(--wp--preset--spacing--6);padding-left:0">
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8"}}},"backgroundColor":"brand-base","layout":{"type":"constrained"}} -->
				<div class="wp-block-group has-brand-base-background-color has-background" style="padding-top:var(--wp--preset--spacing--8);padding-bottom:var(--wp--preset--spacing--8)"></div>
				<!-- /wp:group -->

				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|4","left":"var:preset|spacing|4","right":"var:preset|spacing|4"},"margin":{"top":"-40px","bottom":"var:preset|spacing|3"}},"border":{"radius":"9999px","width":"4px","color":"var:preset|color|surface-card"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-color:var(--wp--preset--color--surface-card);border-width:4px;border-radius:9999px;margin-top:-40px;margin-bottom:var(--wp--preset--spacing--3);padding-top:var(--wp--preset--spacing--4);padding-right:var(--wp--preset--spacing--4);padding-bottom:var(--wp--preset--spacing--4);padding-left:var(--wp--preset--spacing--4)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">MEMBER</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Chief Executive Officer</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontStyle":"italic"}}} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size" style="font-style:italic">Executive Director &amp; Founder</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"align":"center","textColor":"text-main","fontSize":"sm","style":{"spacing":{"padding":{"left":"var:preset|spacing|4","right":"var:preset|spacing|4"}}}} -->
				<p class="has-text-align-center has-text-main-color has-text-color has-sm-font-size" style="padding-right:var(--wp--preset--spacing--4);padding-left:var(--wp--preset--spacing--4)">Directs strategic vision, architectural standards, and core operations across all platform initiatives.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--4)">
					<!-- wp:button {"className":"is-style-outline","style":{"border":{"radius":"9999px"}},"fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" style="border-radius:9999px" href="#profile">Connect</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-team-color-card","style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|6","left":"0","right":"0"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-team-color-card has-surface-card-background-color has-background" style="border-radius:8px;padding-top:0;padding-right:0;padding-bottom:var(--wp--preset--spacing--6);padding-left:0">
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8"}}},"backgroundColor":"status-success","layout":{"type":"constrained"}} -->
				<div class="wp-block-group has-status-success-background-color has-background" style="padding-top:var(--wp--preset--spacing--8);padding-bottom:var(--wp--preset--spacing--8)"></div>
				<!-- /wp:group -->

				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|4","left":"var:preset|spacing|4","right":"var:preset|spacing|4"},"margin":{"top":"-40px","bottom":"var:preset|spacing|3"}},"border":{"radius":"9999px","width":"4px","color":"var:preset|color|surface-card"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-color:var(--wp--preset--color--surface-card);border-width:4px;border-radius:9999px;margin-top:-40px;margin-bottom:var(--wp--preset--spacing--3);padding-top:var(--wp--preset--spacing--4);padding-right:var(--wp--preset--spacing--4);padding-bottom:var(--wp--preset--spacing--4);padding-left:var(--wp--preset--spacing--4)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">MEMBER</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Chief Technology Officer</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontStyle":"italic"}}} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size" style="font-style:italic">VP of Engineering</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"align":"center","textColor":"text-main","fontSize":"sm","style":{"spacing":{"padding":{"left":"var:preset|spacing|4","right":"var:preset|spacing|4"}}}} -->
				<p class="has-text-align-center has-text-main-color has-text-color has-sm-font-size" style="padding-right:var(--wp--preset--spacing--4);padding-left:var(--wp--preset--spacing--4)">Orchestrates scalable infrastructure, distributed cloud microservices, and quantum system resilience.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--4)">
					<!-- wp:button {"className":"is-style-outline","style":{"border":{"radius":"9999px"}},"fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" style="border-radius:9999px" href="#profile">Connect</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-team-color-card","style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|6","left":"0","right":"0"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-team-color-card has-surface-card-background-color has-background" style="border-radius:8px;padding-top:0;padding-right:0;padding-bottom:var(--wp--preset--spacing--6);padding-left:0">
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8"}}},"backgroundColor":"status-warning","layout":{"type":"constrained"}} -->
				<div class="wp-block-group has-status-warning-background-color has-background" style="padding-top:var(--wp--preset--spacing--8);padding-bottom:var(--wp--preset--spacing--8)"></div>
				<!-- /wp:group -->

				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|4","left":"var:preset|spacing|4","right":"var:preset|spacing|4"},"margin":{"top":"-40px","bottom":"var:preset|spacing|3"}},"border":{"radius":"9999px","width":"4px","color":"var:preset|color|surface-card"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-color:var(--wp--preset--color--surface-card);border-width:4px;border-radius:9999px;margin-top:-40px;margin-bottom:var(--wp--preset--spacing--3);padding-top:var(--wp--preset--spacing--4);padding-right:var(--wp--preset--spacing--4);padding-bottom:var(--wp--preset--spacing--4);padding-left:var(--wp--preset--spacing--4)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">MEMBER</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Head of Product Design</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontStyle":"italic"}}} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size" style="font-style:italic">Design Systems Director</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"align":"center","textColor":"text-main","fontSize":"sm","style":{"spacing":{"padding":{"left":"var:preset|spacing|4","right":"var:preset|spacing|4"}}}} -->
				<p class="has-text-align-center has-text-main-color has-text-color has-sm-font-size" style="padding-right:var(--wp--preset--spacing--4);padding-left:var(--wp--preset--spacing--4)">Designs cohesive component libraries, accessible design tokens, and user experience workflows.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--4)">
					<!-- wp:button {"className":"is-style-outline","style":{"border":{"radius":"9999px"}},"fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" style="border-radius:9999px" href="#profile">Connect</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-team-color-card","style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|6","left":"0","right":"0"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-team-color-card has-surface-card-background-color has-background" style="border-radius:8px;padding-top:0;padding-right:0;padding-bottom:var(--wp--preset--spacing--6);padding-left:0">
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8"}}},"backgroundColor":"cta-base","layout":{"type":"constrained"}} -->
				<div class="wp-block-group has-cta-base-background-color has-background" style="padding-top:var(--wp--preset--spacing--8);padding-bottom:var(--wp--preset--spacing--8)"></div>
				<!-- /wp:group -->

				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|4","left":"var:preset|spacing|4","right":"var:preset|spacing|4"},"margin":{"top":"-40px","bottom":"var:preset|spacing|3"}},"border":{"radius":"9999px","width":"4px","color":"var:preset|color|surface-card"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-color:var(--wp--preset--color--surface-card);border-width:4px;border-radius:9999px;margin-top:-40px;margin-bottom:var(--wp--preset--spacing--3);padding-top:var(--wp--preset--spacing--4);padding-right:var(--wp--preset--spacing--4);padding-bottom:var(--wp--preset--spacing--4);padding-left:var(--wp--preset--spacing--4)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">MEMBER</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Principal Solutions Architect</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontStyle":"italic"}}} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size" style="font-style:italic">Client Solutions &amp; Operations</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"align":"center","textColor":"text-main","fontSize":"sm","style":{"spacing":{"padding":{"left":"var:preset|spacing|4","right":"var:preset|spacing|4"}}}} -->
				<p class="has-text-align-center has-text-main-color has-text-color has-sm-font-size" style="padding-right:var(--wp--preset--spacing--4);padding-left:var(--wp--preset--spacing--4)">Partners with enterprise teams to implement high-throughput workflows and robust data pipelines.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--4)">
					<!-- wp:button {"className":"is-style-outline","style":{"border":{"radius":"9999px"}},"fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" style="border-radius:9999px" href="#profile">Connect</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->
		</div>
		<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),

	'team-large-square-section' => array(
		'id'       => 'team-large-square-section',
		'name'     => __( 'Team Square Cards', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Three column team showcase with interactive hover swap overlays revealing social actions, member credentials, and biographies.', 'xophz-compass-magic-wand' ),
		'category' => 'magic-wand-team',
		'icon'     => 'dashicons-businessman',
		'color'    => '#ec4899',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-team-large-square","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-team-large-square has-surface-body-background-color has-background" style="padding-top:var(--wp--preset--spacing--12);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--12);padding-left:var(--wp--preset--spacing--6)">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Executive Leadership</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color" style="margin-bottom:var(--wp--preset--spacing--8)">Our cross-disciplinary team pairs deep technical mastery with product strategy to build high-performance digital platforms.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"className":"mh-team-square-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px","bottom":{"width":"4px","color":"var:preset|color|brand-base"}}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-team-square-card has-surface-card-background-color has-background" style="border-bottom-color:var(--wp--preset--color--brand-base);border-bottom-width:4px;border-radius:8px;padding-top:var(--wp--preset--spacing--6);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--6);padding-left:var(--wp--preset--spacing--6)">
				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8"}},"border":{"radius":"6px"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-radius:6px;padding-top:var(--wp--preset--spacing--8);padding-bottom:var(--wp--preset--spacing--8)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">EXECUTIVE PROFILE</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"brand-base","style":{"spacing":{"margin":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|1"}},"typography":{"textTransform":"uppercase","letterSpacing":"0.5px"}}} -->
				<h3 class="wp-block-heading has-brand-base-color has-text-color has-lg-font-size" style="margin-top:var(--wp--preset--spacing--4);margin-bottom:var(--wp--preset--spacing--1);letter-spacing:0.5px;text-transform:uppercase">Chief Executive Officer</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontStyle":"italic"},"spacing":{"margin":{"bottom":"var:preset|spacing|3"}}}} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size" style="margin-bottom:var(--wp--preset--spacing--3);font-style:italic">Co-founder &amp; CEO</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"textColor":"text-main","fontSize":"sm"} -->
				<p class="has-text-main-color has-text-color has-sm-font-size">Directs organizational growth, executive governance, and technical alignment across all platform products.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--4)">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#profile">View Profile</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-team-square-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px","bottom":{"width":"4px","color":"var:preset|color|brand-base"}}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-team-square-card has-surface-card-background-color has-background" style="border-bottom-color:var(--wp--preset--color--brand-base);border-bottom-width:4px;border-radius:8px;padding-top:var(--wp--preset--spacing--6);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--6);padding-left:var(--wp--preset--spacing--6)">
				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8"}},"border":{"radius":"6px"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-radius:6px;padding-top:var(--wp--preset--spacing--8);padding-bottom:var(--wp--preset--spacing--8)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">EXECUTIVE PROFILE</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"brand-base","style":{"spacing":{"margin":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|1"}},"typography":{"textTransform":"uppercase","letterSpacing":"0.5px"}}} -->
				<h3 class="wp-block-heading has-brand-base-color has-text-color has-lg-font-size" style="margin-top:var(--wp--preset--spacing--4);margin-bottom:var(--wp--preset--spacing--1);letter-spacing:0.5px;text-transform:uppercase">Chief Operating Officer</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontStyle":"italic"},"spacing":{"margin":{"bottom":"var:preset|spacing|3"}}}} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size" style="margin-bottom:var(--wp--preset--spacing--3);font-style:italic">Co-founder &amp; COO</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"textColor":"text-main","fontSize":"sm"} -->
				<p class="has-text-main-color has-text-color has-sm-font-size">Oversees strategic operations, partnership alliances, and continuous delivery across client engagements.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--4)">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#profile">View Profile</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-team-square-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px","bottom":{"width":"4px","color":"var:preset|color|brand-base"}}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-team-square-card has-surface-card-background-color has-background" style="border-bottom-color:var(--wp--preset--color--brand-base);border-bottom-width:4px;border-radius:8px;padding-top:var(--wp--preset--spacing--6);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--6);padding-left:var(--wp--preset--spacing--6)">
				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8"}},"border":{"radius":"6px"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-radius:6px;padding-top:var(--wp--preset--spacing--8);padding-bottom:var(--wp--preset--spacing--8)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">EXECUTIVE PROFILE</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"brand-base","style":{"spacing":{"margin":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|1"}},"typography":{"textTransform":"uppercase","letterSpacing":"0.5px"}}} -->
				<h3 class="wp-block-heading has-brand-base-color has-text-color has-lg-font-size" style="margin-top:var(--wp--preset--spacing--4);margin-bottom:var(--wp--preset--spacing--1);letter-spacing:0.5px;text-transform:uppercase">Chief Marketing Officer</h3>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm","style":{"typography":{"fontStyle":"italic"},"spacing":{"margin":{"bottom":"var:preset|spacing|3"}}}} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size" style="margin-bottom:var(--wp--preset--spacing--3);font-style:italic">Co-founder &amp; CMO</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph {"textColor":"text-main","fontSize":"sm"} -->
				<p class="has-text-main-color has-text-color has-sm-font-size">Leads community outreach, developer relations, and global marketing strategies across omnichannel touchpoints.</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--4)">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#profile">View Profile</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->
		</div>
		<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),

	'team-small-section' => array(
		'id'       => 'team-small-section',
		'name'     => __( 'Team Small Cards', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Compact grid presenting multiple team members with circular avatar badges, titles, and social profile links.', 'xophz-compass-magic-wand' ),
		'category' => 'magic-wand-team',
		'icon'     => 'dashicons-businessman',
		'color'    => '#ec4899',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-team-small","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-team-small has-surface-body-background-color has-background" style="padding-top:var(--wp--preset--spacing--12);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--12);padding-left:var(--wp--preset--spacing--6)">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Core Engineering &amp; Operations</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color" style="margin-bottom:var(--wp--preset--spacing--8)">The specialized engineers, designers, and specialists behind every release and platform breakthrough.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|4","left":"var:preset|spacing|4","right":"var:preset|spacing|4"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--4);padding-right:var(--wp--preset--spacing--4);padding-bottom:var(--wp--preset--spacing--4);padding-left:var(--wp--preset--spacing--4)">
				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6"}},"border":{"radius":"9999px","width":"3px","color":"var:preset|color|brand-base"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-color:var(--wp--preset--color--brand-base);border-width:3px;border-radius:9999px;padding-top:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--6)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">MEMBER</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:heading {"textAlign":"center","level":4,"fontSize":"base","textColor":"text-heading"} -->
				<h4 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-base-font-size">Team Lead</h4>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontStyle":"italic"}}} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-style:italic">Founder &amp; CEO</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"className":"is-style-outline","style":{"border":{"radius":"9999px"}},"fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" style="border-radius:9999px" href="#connect">Connect</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|4","left":"var:preset|spacing|4","right":"var:preset|spacing|4"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--4);padding-right:var(--wp--preset--spacing--4);padding-bottom:var(--wp--preset--spacing--4);padding-left:var(--wp--preset--spacing--4)">
				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6"}},"border":{"radius":"9999px","width":"3px","color":"var:preset|color|brand-base"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-color:var(--wp--preset--color--brand-base);border-width:3px;border-radius:9999px;padding-top:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--6)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">MEMBER</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:heading {"textAlign":"center","level":4,"fontSize":"base","textColor":"text-heading"} -->
				<h4 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-base-font-size">Operations Lead</h4>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontStyle":"italic"}}} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-style:italic">Chief Operating Officer</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"className":"is-style-outline","style":{"border":{"radius":"9999px"}},"fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" style="border-radius:9999px" href="#connect">Connect</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|4","left":"var:preset|spacing|4","right":"var:preset|spacing|4"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--4);padding-right:var(--wp--preset--spacing--4);padding-bottom:var(--wp--preset--spacing--4);padding-left:var(--wp--preset--spacing--4)">
				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6"}},"border":{"radius":"9999px","width":"3px","color":"var:preset|color|brand-base"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-color:var(--wp--preset--color--brand-base);border-width:3px;border-radius:9999px;padding-top:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--6)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">MEMBER</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:heading {"textAlign":"center","level":4,"fontSize":"base","textColor":"text-heading"} -->
				<h4 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-base-font-size">Architecture Lead</h4>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontStyle":"italic"}}} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-style:italic">Chief Technology Officer</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"className":"is-style-outline","style":{"border":{"radius":"9999px"}},"fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" style="border-radius:9999px" href="#connect">Connect</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|4","left":"var:preset|spacing|4","right":"var:preset|spacing|4"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--4);padding-right:var(--wp--preset--spacing--4);padding-bottom:var(--wp--preset--spacing--4);padding-left:var(--wp--preset--spacing--4)">
				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6"}},"border":{"radius":"9999px","width":"3px","color":"var:preset|color|brand-base"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-color:var(--wp--preset--color--brand-base);border-width:3px;border-radius:9999px;padding-top:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--6)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">MEMBER</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:heading {"textAlign":"center","level":4,"fontSize":"base","textColor":"text-heading"} -->
				<h4 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-base-font-size">Design Systems Lead</h4>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontStyle":"italic"}}} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-style:italic">Principal UI Designer</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"className":"is-style-outline","style":{"border":{"radius":"9999px"}},"fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" style="border-radius:9999px" href="#connect">Connect</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->
		</div>
		<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),

	'testimonials-boxed-section' => array(
		'id'       => 'testimonials-boxed-section',
		'name'     => __( 'Testimonials Boxed Cards', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Three card testimonial showcase with customer feedback quotes, author avatars, names, and company credentials.', 'xophz-compass-magic-wand' ),
		'category' => 'magic-wand-testimonials',
		'icon'     => 'dashicons-testimonial',
		'color'    => '#f59e0b',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-testimonials-boxed","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-testimonials-boxed has-surface-section-background-color has-background" style="padding-top:var(--wp--preset--spacing--12);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--12);padding-left:var(--wp--preset--spacing--6)">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Client Endorsements &amp; Reviews</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color" style="margin-bottom:var(--wp--preset--spacing--8)">Discover how enterprise partners and product leaders accelerate their delivery cycles using our unified design system.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--8);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--8);padding-left:var(--wp--preset--spacing--6)">
				<!-- wp:paragraph {"align":"center","textColor":"text-main","fontSize":"base","style":{"typography":{"fontStyle":"italic"},"spacing":{"margin":{"bottom":"var:preset|spacing|6"}}}} -->
				<p class="has-text-align-center has-text-main-color has-text-color has-base-font-size" style="margin-bottom:var(--wp--preset--spacing--6);font-style:italic">&ldquo;The modular token architecture transformed how our teams build and release frontend experiences with zero regressions.&rdquo;</p>
				<!-- /wp:paragraph -->

				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|3","bottom":"var:preset|spacing|3"}},"border":{"radius":"9999px","width":"2px","color":"var:preset|color|border-muted"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-color:var(--wp--preset--color--border-muted);border-width:2px;border-radius:9999px;padding-top:var(--wp--preset--spacing--3);padding-bottom:var(--wp--preset--spacing--3)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">CLIENT</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:heading {"textAlign":"center","level":4,"fontSize":"base","textColor":"text-heading","style":{"spacing":{"margin":{"top":"var:preset|spacing|3","bottom":"var:preset|spacing|1"}}}} -->
				<h4 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-base-font-size" style="margin-top:var(--wp--preset--spacing--3);margin-bottom:var(--wp--preset--spacing--1)">Enterprise Partner</h4>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center","textColor":"brand-base","fontSize":"xs","style":{"typography":{"fontWeight":"700","letterSpacing":"1.5px","textTransform":"uppercase"}}} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-xs-font-size" style="letter-spacing:1.5px;text-transform:uppercase;font-weight:700">VP OF TECHNOLOGY</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--8);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--8);padding-left:var(--wp--preset--spacing--6)">
				<!-- wp:paragraph {"align":"center","textColor":"text-main","fontSize":"base","style":{"typography":{"fontStyle":"italic"},"spacing":{"margin":{"bottom":"var:preset|spacing|6"}}}} -->
				<p class="has-text-align-center has-text-main-color has-text-color has-base-font-size" style="margin-bottom:var(--wp--preset--spacing--6);font-style:italic">&ldquo;Standardized component foundations and atomic styling cut our sprint turnaround times in half while boosting accessibility.&rdquo;</p>
				<!-- /wp:paragraph -->

				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|3","bottom":"var:preset|spacing|3"}},"border":{"radius":"9999px","width":"2px","color":"var:preset|color|border-muted"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-color:var(--wp--preset--color--border-muted);border-width:2px;border-radius:9999px;padding-top:var(--wp--preset--spacing--3);padding-bottom:var(--wp--preset--spacing--3)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">CLIENT</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:heading {"textAlign":"center","level":4,"fontSize":"base","textColor":"text-heading","style":{"spacing":{"margin":{"top":"var:preset|spacing|3","bottom":"var:preset|spacing|1"}}}} -->
				<h4 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-base-font-size" style="margin-top:var(--wp--preset--spacing--3);margin-bottom:var(--wp--preset--spacing--1)">Product Executive</h4>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center","textColor":"brand-base","fontSize":"xs","style":{"typography":{"fontWeight":"700","letterSpacing":"1.5px","textTransform":"uppercase"}}} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-xs-font-size" style="letter-spacing:1.5px;text-transform:uppercase;font-weight:700">DIRECTOR OF ENGINEERING</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--8);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--8);padding-left:var(--wp--preset--spacing--6)">
				<!-- wp:paragraph {"align":"center","textColor":"text-main","fontSize":"base","style":{"typography":{"fontStyle":"italic"},"spacing":{"margin":{"bottom":"var:preset|spacing|6"}}}} -->
				<p class="has-text-align-center has-text-main-color has-text-color has-base-font-size" style="margin-bottom:var(--wp--preset--spacing--6);font-style:italic">&ldquo;The zero-entropy engineering approach delivered instant performance gains and simplified continuous integration across teams.&rdquo;</p>
				<!-- /wp:paragraph -->

				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|3","bottom":"var:preset|spacing|3"}},"border":{"radius":"9999px","width":"2px","color":"var:preset|color|border-muted"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-color:var(--wp--preset--color--border-muted);border-width:2px;border-radius:9999px;padding-top:var(--wp--preset--spacing--3);padding-bottom:var(--wp--preset--spacing--3)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">CLIENT</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:heading {"textAlign":"center","level":4,"fontSize":"base","textColor":"text-heading","style":{"spacing":{"margin":{"top":"var:preset|spacing|3","bottom":"var:preset|spacing|1"}}}} -->
				<h4 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-base-font-size" style="margin-top:var(--wp--preset--spacing--3);margin-bottom:var(--wp--preset--spacing--1)">Platform Leader</h4>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center","textColor":"brand-base","fontSize":"xs","style":{"typography":{"fontWeight":"700","letterSpacing":"1.5px","textTransform":"uppercase"}}} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-xs-font-size" style="letter-spacing:1.5px;text-transform:uppercase;font-weight:700">CHIEF PRODUCT OFFICER</p>
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

	'testimonials-full-section' => array(
		'id'       => 'testimonials-full-section',
		'name'     => __( 'Testimonials Full Width Grid', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Horizontal testimonial columns featuring side by side client avatars, longform recommendations, and author affiliations.', 'xophz-compass-magic-wand' ),
		'category' => 'magic-wand-testimonials',
		'icon'     => 'dashicons-testimonial',
		'color'    => '#f59e0b',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-testimonials-full","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-testimonials-full has-surface-body-background-color has-background" style="padding-top:var(--wp--preset--spacing--12);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--12);padding-left:var(--wp--preset--spacing--6)">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Partner Testimonials</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color" style="margin-bottom:var(--wp--preset--spacing--8)">Real feedback from organizations that rely on our platform for mission-critical operations and consistent uptime.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--6);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--6);padding-left:var(--wp--preset--spacing--6)">
				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|4"}},"border":{"radius":"9999px","width":"3px","color":"var:preset|color|border-muted"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-color:var(--wp--preset--color--border-muted);border-width:3px;border-radius:9999px;padding-top:var(--wp--preset--spacing--4);padding-bottom:var(--wp--preset--spacing--4)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">PARTNER</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:paragraph {"align":"center","textColor":"text-main","fontSize":"base","style":{"typography":{"fontStyle":"italic"},"spacing":{"margin":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|4"}}}} -->
				<p class="has-text-align-center has-text-main-color has-text-color has-base-font-size" style="margin-top:var(--wp--preset--spacing--4);margin-bottom:var(--wp--preset--spacing--4);font-style:italic">&ldquo;Adopting this platform allowed our engineering team to reduce technical overhead and focus entirely on core product differentiation.&rdquo;</p>
				<!-- /wp:paragraph -->

				<!-- wp:heading {"textAlign":"center","level":4,"fontSize":"base","textColor":"text-heading","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|1"}}}} -->
				<h4 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-base-font-size" style="margin-bottom:var(--wp--preset--spacing--1)">Executive Leader</h4>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center","textColor":"cta-base","fontSize":"xs","style":{"typography":{"fontWeight":"700","letterSpacing":"1.5px","textTransform":"uppercase"}}} -->
				<p class="has-text-align-center has-cta-base-color has-text-color has-xs-font-size" style="letter-spacing:1.5px;text-transform:uppercase;font-weight:700">DIRECTOR @ GLOBAL CLOUD</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--6);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--6);padding-left:var(--wp--preset--spacing--6)">
				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|4"}},"border":{"radius":"9999px","width":"3px","color":"var:preset|color|border-muted"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-color:var(--wp--preset--color--border-muted);border-width:3px;border-radius:9999px;padding-top:var(--wp--preset--spacing--4);padding-bottom:var(--wp--preset--spacing--4)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">PARTNER</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:paragraph {"align":"center","textColor":"text-main","fontSize":"base","style":{"typography":{"fontStyle":"italic"},"spacing":{"margin":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|4"}}}} -->
				<p class="has-text-align-center has-text-main-color has-text-color has-base-font-size" style="margin-top:var(--wp--preset--spacing--4);margin-bottom:var(--wp--preset--spacing--4);font-style:italic">&ldquo;The attention to design token consistency and modular pattern composition is unmatched in any WordPress ecosystem we have evaluated.&rdquo;</p>
				<!-- /wp:paragraph -->

				<!-- wp:heading {"textAlign":"center","level":4,"fontSize":"base","textColor":"text-heading","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|1"}}}} -->
				<h4 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-base-font-size" style="margin-bottom:var(--wp--preset--spacing--1)">Operations Principal</h4>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center","textColor":"cta-base","fontSize":"xs","style":{"typography":{"fontWeight":"700","letterSpacing":"1.5px","textTransform":"uppercase"}}} -->
				<p class="has-text-align-center has-cta-base-color has-text-color has-xs-font-size" style="letter-spacing:1.5px;text-transform:uppercase;font-weight:700">HEAD OF OPERATIONS @ SCALE PLATFORM</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background" style="border-radius:8px;padding-top:var(--wp--preset--spacing--6);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--6);padding-left:var(--wp--preset--spacing--6)">
				<!-- wp:group {"className":"mh-mock-media-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|4"}},"border":{"radius":"9999px","width":"3px","color":"var:preset|color|border-muted"}},"backgroundColor":"surface-section","layout":{"type":"flex","flexOrientation":"vertical","justifyContent":"center"}} -->
				<div class="wp-block-group mh-mock-media-box has-surface-section-background-color has-background" style="border-color:var(--wp--preset--color--border-muted);border-width:3px;border-radius:9999px;padding-top:var(--wp--preset--spacing--4);padding-bottom:var(--wp--preset--spacing--4)">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"fontWeight":"700"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="font-weight:700">PARTNER</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:paragraph {"align":"center","textColor":"text-main","fontSize":"base","style":{"typography":{"fontStyle":"italic"},"spacing":{"margin":{"top":"var:preset|spacing|4","bottom":"var:preset|spacing|4"}}}} -->
				<p class="has-text-align-center has-text-main-color has-text-color has-base-font-size" style="margin-top:var(--wp--preset--spacing--4);margin-bottom:var(--wp--preset--spacing--4);font-style:italic">&ldquo;From rapid prototyping to enterprise deployment, the architecture provides remarkable reliability and seamless responsive behavior.&rdquo;</p>
				<!-- /wp:paragraph -->

				<!-- wp:heading {"textAlign":"center","level":4,"fontSize":"base","textColor":"text-heading","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|1"}}}} -->
				<h4 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-base-font-size" style="margin-bottom:var(--wp--preset--spacing--1)">Lead Architect</h4>
				<!-- /wp:heading -->

				<!-- wp:paragraph {"align":"center","textColor":"cta-base","fontSize":"xs","style":{"typography":{"fontWeight":"700","letterSpacing":"1.5px","textTransform":"uppercase"}}} -->
				<p class="has-text-align-center has-cta-base-color has-text-color has-xs-font-size" style="letter-spacing:1.5px;text-transform:uppercase;font-weight:700">PRINCIPAL ARCHITECT @ DATA SYSTEMS</p>
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
);
