<?php
/**
 * Category 5: CTA, Contact & Subscribe Sections
 *
 * Rebranded modular catalog definitions for Magic Hat & Magic Wand.
 * 100% native WordPress Gutenberg core blocks styled natively using theme.json tokens.
 * Zero raw legacy HTML elements inside wp:group.
 *
 * @package Xophz_Compass_Magic_Wand
 * @since   26.9.13
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

return array(
	'cta' => array(
		'id'       => 'cta',
		'name'     => __( 'High-Impact Accent Banner', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Full-width colored banner with clear headline and primary action button.', 'xophz-compass-magic-wand' ),
		'category' => 'cta',
		'icon'     => 'dashicons-megaphone',
		'color'    => '#ff3366',
		'source'   => 'core',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-cta","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"brand-base","textColor":"text-inverse","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-cta has-text-inverse-color has-brand-base-background-color has-text-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-inverse"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-inverse-color has-text-color">Ready to Launch Your Next Site?</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-inverse","style":{"typography":{"fontSize":"1.125rem"}}} -->
		<p class="has-text-align-center has-text-inverse-color has-text-color">Experience point-and-click publishing with native Gutenberg reliability.</p>
		<!-- /wp:paragraph -->
		<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
		<div class="wp-block-buttons">
			<!-- wp:button {"backgroundColor":"surface-body","textColor":"brand-base","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
			<div class="wp-block-button"><a class="wp-block-button__link has-brand-base-color has-surface-body-background-color has-text-color has-background wp-element-button" href="#get-started">Start Free Trial</a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),
	'contact' => array(
		'id'       => 'contact',
		'name'     => __( 'Split Contact & Details', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Direct contact details with office address, email, and hours.', 'xophz-compass-magic-wand' ),
		'category' => 'contact',
		'icon'     => 'dashicons-email-alt',
		'color'    => '#14b8a6',
		'source'   => 'core',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-contact","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-contact has-surface-body-background-color has-background">
	<!-- wp:columns {"align":"wide"} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"width":"50%"} -->
		<div class="wp-block-column" style="flex-basis:50%">
			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">Get in Touch</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-muted"} -->
			<p class="has-text-muted-color has-text-color">Have questions or want to collaborate? Connect directly with our team.</p>
			<!-- /wp:paragraph -->
			<!-- wp:paragraph {"textColor":"text-main","fontSize":"sm"} -->
			<p class="has-text-main-color has-text-color has-sm-font-size">Office: 100 Compass Way, Suite 400</p>
			<!-- /wp:paragraph -->
			<!-- wp:paragraph {"textColor":"text-main","fontSize":"sm"} -->
			<p class="has-text-main-color has-text-color has-sm-font-size">Hours: Monday to Friday, 9am to 6pm PST</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"width":"50%"} -->
		<div class="wp-block-column" style="flex-basis:50%">
			<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section"} -->
			<div class="wp-block-group has-surface-section-background-color has-background">
				<!-- wp:heading {"level":3,"fontSize":"md","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">Direct Inquiries</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Send inquiries through our secure contact portal or customer support desk.</p>
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
	'cta-blue-section' => array(
		'id'       => 'cta-blue-section',
		'name'     => __( 'Call to Action Banner', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'CTA banner with brand accent background and bold typography.', 'xophz-compass-magic-wand' ),
		'category' => 'cta',
		'icon'     => 'dashicons-megaphone',
		'color'    => '#2563eb',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-cta-blue cta-blue-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"brand-base","textColor":"text-inverse","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-cta-blue cta-blue-section has-text-inverse-color has-brand-base-background-color has-text-color has-background">
	<!-- wp:columns {"verticalAlignment":"center","align":"wide"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"70%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:70%">
			<!-- wp:heading {"level":2,"textColor":"text-inverse"} -->
			<h2 class="wp-block-heading has-text-inverse-color has-text-color"><strong>Join us.</strong> It will only take a minute</h2>
			<!-- /wp:heading -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"30%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:30%">
			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"right"}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"surface-body","textColor":"brand-base","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-brand-base-color has-surface-body-background-color has-text-color has-background wp-element-button" href="#get-started">GET STARTED TODAY</a></div>
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
	'contact-section' => array(
		'id'       => 'contact-section',
		'name'     => __( 'Contact Form Section', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Lead capture contact form with headline, narrative copy, and native inputs.', 'xophz-compass-magic-wand' ),
		'category' => 'contact',
		'icon'     => 'dashicons-email-alt',
		'color'    => '#14b8a6',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-contact-form contact-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-contact-form contact-section has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Say Hello</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Have questions or need assistance? Send us a message and our team will get back to you promptly.</p>
		<!-- /wp:paragraph -->
		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background" style="border-radius:8px">
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Direct Message &amp; Inquiries</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Our customer engineering team is on standby to assist with deployments, technical queries, and partnership opportunities.</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
					<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="mailto:hello@youmeos.com">Send Message</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->
			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}},"border":{"radius":"8px"}},"backgroundColor":"surface-section"} -->
			<div class="wp-block-column has-surface-section-background-color has-background" style="border-radius:8px">
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Support &amp; Response Times</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Typical response time is under 4 business hours. For emergency incidents, visit the platform status console.</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"variant":"outline","style":{"border":{"radius":"6px"}}} -->
					<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="#status">View Status Portal</a></div>
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
	'contact-2columns-section' => array(
		'id'       => 'contact-2columns-section',
		'name'     => __( 'Two-Column Contact', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Split layout with office contact details on left and direct contact form on right.', 'xophz-compass-magic-wand' ),
		'category' => 'contact',
		'icon'     => 'dashicons-email-alt',
		'color'    => '#14b8a6',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-contact-2cols contact-2columns-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-contact-2cols contact-2columns-section has-surface-body-background-color has-background">
	<!-- wp:columns {"align":"wide","verticalAlignment":"center"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"45%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:45%">
			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">Get In Touch</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-main","style":{"typography":{"fontSize":"1.125rem"}}} -->
			<p class="has-text-main-color has-text-color">We would love to hear about your next project.</p>
			<!-- /wp:paragraph -->
			<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-muted-color has-text-color has-sm-font-size">Location: 100 Compass Way, Suite 400</p>
			<!-- /wp:paragraph -->
			<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-muted-color has-text-color has-sm-font-size">Phone: +1 (234) 567-890</p>
			<!-- /wp:paragraph -->
			<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-muted-color has-text-color has-sm-font-size">Email: hello@youmeos.com</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"55%","style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}},"border":{"radius":"8px"}},"backgroundColor":"surface-section"} -->
		<div class="wp-block-column is-vertically-aligned-center has-surface-section-background-color has-background" style="flex-basis:55%;border-radius:8px">
			<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
			<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Send Us a Message</h3>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-muted-color has-text-color has-sm-font-size">Share your project requirements and our team will get back to you promptly.</p>
			<!-- /wp:paragraph -->
			<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="mailto:hello@youmeos.com">Send Message</a></div>
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
	'contact-3-section' => array(
		'id'       => 'contact-3-section',
		'name'     => __( 'Three-Column Contact Cards', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Three distinct cards for office visit, email support, and operating hours.', 'xophz-compass-magic-wand' ),
		'category' => 'contact',
		'icon'     => 'dashicons-email-alt',
		'color'    => '#14b8a6',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-contact-3cols contact-3-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-contact-3cols contact-3-section has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Contact Information</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Choose the best way to reach us</p>
		<!-- /wp:paragraph -->
		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background" style="border-radius:8px">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Visit Our Office</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">100 Compass Way, Suite 400<br>San Francisco, CA 94107</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"variant":"outline","style":{"border":{"radius":"6px"}},"fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" href="#directions">Get Directions</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->
			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background" style="border-radius:8px">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Email Support</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">hello@youmeos.com<br>support@youmeos.com</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"}},"fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="mailto:hello@youmeos.com">Email Team</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->
			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background" style="border-radius:8px">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Office Hours</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Monday to Friday: 9am - 6pm<br>Weekend: Closed</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"variant":"outline","style":{"border":{"radius":"6px"}},"fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" href="#hours">View Schedule</a></div>
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
	'contact-map-section' => array(
		'id'       => 'contact-map-section',
		'name'     => __( 'Contact Form with Map', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Side-by-side contact form and interactive map location container.', 'xophz-compass-magic-wand' ),
		'category' => 'contact',
		'icon'     => 'dashicons-email-alt',
		'color'    => '#14b8a6',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-contact-map contact-map-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-contact-map contact-map-section has-surface-body-background-color has-background">
	<!-- wp:columns {"verticalAlignment":"center","align":"wide"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}},"border":{"radius":"8px"}},"backgroundColor":"surface-section"} -->
		<div class="wp-block-column is-vertically-aligned-center has-surface-section-background-color has-background" style="flex-basis:50%;border-radius:8px">
			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">Send a Message</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-muted"} -->
			<p class="has-text-muted-color has-text-color">Connect directly with our engineering specialists and platform support team.</p>
			<!-- /wp:paragraph -->
			<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="mailto:hello@youmeos.com">Send Message</a></div>
				<!-- /wp:button -->
			</div>
			<!-- /wp:buttons -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%">
			<!-- wp:group {"className":"mh-mock-map-box","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card","layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
			<div class="wp-block-group mh-mock-map-box has-surface-card-background-color has-background" style="border-radius:8px">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"base","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-base-font-size">Interactive Map Location</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">San Francisco, California</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"variant":"outline","style":{"border":{"radius":"6px"}},"fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" href="#maps">Open in Maps</a></div>
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
	'google-maps-section' => array(
		'id'       => 'google-maps-section',
		'name'     => __( 'Full Width Map', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Edge-to-edge full width map showcase container for headquarters location.', 'xophz-compass-magic-wand' ),
		'category' => 'contact',
		'icon'     => 'dashicons-location-alt',
		'color'    => '#14b8a6',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-map-full google-maps-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-map-full google-maps-section has-surface-section-background-color has-background">
	<!-- wp:group {"align":"wide","className":"mh-mock-map-full","layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
	<div class="wp-block-group alignwide mh-mock-map-full">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Global Headquarters Map</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"base"} -->
		<p class="has-text-align-center has-text-muted-color has-text-color has-base-font-size">100 Compass Way, Suite 400, San Francisco, CA</p>
		<!-- /wp:paragraph -->
		<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
		<div class="wp-block-buttons">
			<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
			<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#view-map">View Interactive Map</a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),
	'cta-centered-bg-section' => array(
		'id'       => 'cta-centered-bg-section',
		'name'     => __( 'Centered Gradient Call to Action', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Centered high-impact banner with gradient background and dual buttons.', 'xophz-compass-magic-wand' ),
		'category' => 'cta',
		'icon'     => 'dashicons-megaphone',
		'color'    => '#ff3366',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-cta-centered-bg cta-centered-bg-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"cta-base","textColor":"text-inverse","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-cta-centered-bg cta-centered-bg-section has-text-inverse-color has-cta-base-background-color has-text-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-inverse"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-inverse-color has-text-color">Ready to Launch Your Next Site?</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-inverse","style":{"typography":{"fontSize":"1.125rem"}}} -->
		<p class="has-text-align-center has-text-inverse-color has-text-color">Join thousands of creative professionals building with our modular framework.</p>
		<!-- /wp:paragraph -->
		<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
		<div class="wp-block-buttons">
			<!-- wp:button {"backgroundColor":"surface-body","textColor":"cta-base","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
			<div class="wp-block-button"><a class="wp-block-button__link has-cta-base-color has-surface-body-background-color has-text-color has-background wp-element-button" href="#get-started">Get Started Free</a></div>
			<!-- /wp:button -->
			<!-- wp:button {"variant":"outline","textColor":"text-inverse","style":{"border":{"radius":"6px","width":"1px","color":"#ffffff"}}} -->
			<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-text-inverse-color has-text-color wp-element-button" href="#contact">Contact Sales</a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),
	'cta-centered-section-grid' => array(
		'id'       => 'cta-centered-section-grid',
		'name'     => __( 'Inline Action Bar', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Horizontal split row with headline and right-aligned call-to-action button.', 'xophz-compass-magic-wand' ),
		'category' => 'cta',
		'icon'     => 'dashicons-megaphone',
		'color'    => '#2563eb',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-cta-centered-grid cta-centered-section-grid","style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-cta-centered-grid cta-centered-section-grid has-surface-section-background-color has-background">
	<!-- wp:columns {"verticalAlignment":"center","align":"wide"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"70%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:70%">
			<!-- wp:heading {"level":2,"textColor":"text-heading"} -->
			<h2 class="wp-block-heading has-text-heading-color has-text-color">Start Building Without Limits Today</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-muted","style":{"typography":{"fontSize":"1.125rem"}}} -->
			<p class="has-text-muted-color has-text-color">Zero dependencies, pure block architecture, infinite customization.</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"30%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:30%">
			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"right"}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
				<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#try-now">Try Now</a></div>
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
	'subscribe-2cols-section' => array(
		'id'       => 'subscribe-2cols-section',
		'name'     => __( 'Split Newsletter Subscribe', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Horizontal banner with newsletter text on left and inline subscribe input on right.', 'xophz-compass-magic-wand' ),
		'category' => 'subscribe',
		'icon'     => 'dashicons-email',
		'color'    => '#3b82f6',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-subscribe-2cols subscribe-2cols-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"brand-base","textColor":"text-inverse","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-subscribe-2cols subscribe-2cols-section has-text-inverse-color has-brand-base-background-color has-text-color has-background">
	<!-- wp:columns {"verticalAlignment":"center","align":"wide"} -->
	<div class="wp-block-columns alignwide are-vertically-aligned-center">
		<!-- wp:column {"verticalAlignment":"center","width":"55%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:55%">
			<!-- wp:heading {"level":2,"textColor":"text-inverse"} -->
			<h2 class="wp-block-heading has-text-inverse-color has-text-color">Subscribe to Our Newsletter</h2>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-inverse","style":{"typography":{"fontSize":"1.125rem"}}} -->
			<p class="has-text-inverse-color has-text-color">Get weekly engineering insights and releases directly in your inbox.</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"45%","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column is-vertically-aligned-center has-surface-card-background-color has-background" style="flex-basis:45%;border-radius:8px">
			<!-- wp:heading {"level":3,"fontSize":"md","textColor":"text-heading"} -->
			<h3 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">Join the Community</h3>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-muted-color has-text-color has-sm-font-size">Enter your email to receive technical briefings and early access.</p>
			<!-- /wp:paragraph -->
			<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}},"width":100} -->
				<div class="wp-block-button has-custom-width wp-block-button__width-100"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#subscribe">Subscribe Now</a></div>
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
	'subscribe-centered-section' => array(
		'id'       => 'subscribe-centered-section',
		'name'     => __( 'Centered Newsletter Subscribe', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Clean centered newsletter signup card with privacy assurance.', 'xophz-compass-magic-wand' ),
		'category' => 'subscribe',
		'icon'     => 'dashicons-email',
		'color'    => '#3b82f6',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-subscribe-centered subscribe-centered-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-subscribe-centered subscribe-centered-section has-surface-section-background-color has-background">
	<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card","layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
	<div class="wp-block-group alignwide has-surface-card-background-color has-background" style="border-radius:8px">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Stay in the Loop</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"typography":{"fontSize":"1.125rem"}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Join over 25,000 developers and designers receiving our monthly digest.</p>
		<!-- /wp:paragraph -->
		<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
		<div class="wp-block-buttons">
			<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
			<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#subscribe">Join Now</a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"spacing":{"margin":{"top":"var:preset|spacing|3"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size">We respect your privacy. Unsubscribe at any time.</p>
		<!-- /wp:paragraph -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),
	'subscribe-social-section' => array(
		'id'       => 'subscribe-social-section',
		'name'     => __( 'Subscribe & Social Community', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Newsletter subscription box coupled with social media channel links.', 'xophz-compass-magic-wand' ),
		'category' => 'subscribe',
		'icon'     => 'dashicons-share',
		'color'    => '#2563eb',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-subscribe-social subscribe-social-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-subscribe-social subscribe-social-section has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Connect with Our Global Community</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"typography":{"fontSize":"1.125rem"}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Subscribe for fresh updates and connect with us across social channels.</p>
		<!-- /wp:paragraph -->
		<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
		<div class="wp-block-buttons">
			<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","style":{"border":{"radius":"6px"},"typography":{"fontWeight":"700"}}} -->
			<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#subscribe">Subscribe to Updates</a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
		<!-- wp:group {"style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}},"layout":{"type":"flex","justifyContent":"center"}} -->
		<div class="wp-block-group">
			<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
			<div class="wp-block-buttons">
				<!-- wp:button {"variant":"outline","style":{"border":{"radius":"9999px"}},"fontSize":"xs"} -->
				<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" href="#twitter">Twitter</a></div>
				<!-- /wp:button -->
				<!-- wp:button {"variant":"outline","style":{"border":{"radius":"9999px"}},"fontSize":"xs"} -->
				<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" href="#github">GitHub</a></div>
				<!-- /wp:button -->
				<!-- wp:button {"variant":"outline","style":{"border":{"radius":"9999px"}},"fontSize":"xs"} -->
				<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" href="#linkedin">LinkedIn</a></div>
				<!-- /wp:button -->
				<!-- wp:button {"variant":"outline","style":{"border":{"radius":"9999px"}},"fontSize":"xs"} -->
				<div class="wp-block-button has-custom-font-size has-xs-font-size is-style-outline"><a class="wp-block-button__link wp-element-button" href="#youtube">YouTube</a></div>
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
