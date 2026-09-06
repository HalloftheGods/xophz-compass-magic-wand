<?php
/**
 * Pattern Registry for Xophz Compass Magic Wand
 *
 * Registers native Gutenberg block patterns for all modular section archetypes
 * and provides catalog querying methods for the Customizer and REST API.
 *
 * @package Xophz_Compass_Magic_Wand
 * @since   26.9.8
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Xophz_Compass_Magic_Wand_Pattern_Registry {

	/**
	 * Instance singleton.
	 *
	 * @var Xophz_Compass_Magic_Wand_Pattern_Registry|null
	 */
	private static $instance = null;

	/**
	 * Get singleton instance.
	 */
	public static function get_instance(): self {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_patterns' ) );
	}

	/**
	 * Register Gutenberg pattern categories and patterns with WordPress.
	 */
	public function register_patterns(): void {
		if ( ! function_exists( 'register_block_pattern_category' ) || ! function_exists( 'register_block_pattern' ) ) {
			return;
		}

		$categories = $this->get_categories();
		foreach ( $categories as $slug => $label ) {
			register_block_pattern_category(
				'magic-wand-' . $slug,
				array( 'label' => __( 'Magic Wand: ', 'xophz-compass-magic-wand' ) . $label )
			);
		}

		$patterns = $this->get_pattern_definitions();
		foreach ( $patterns as $id => $data ) {
			register_block_pattern(
				'magic-wand/' . $id,
				array(
					'title'         => $data['name'],
					'description'   => $data['desc'],
					'categories'    => array( 'magic-wand-' . $data['category'] ),
					'content'       => $data['content'],
					'keywords'      => array( 'magic-wand', $data['category'], $id ),
					'viewportWidth' => 1200,
				)
			);
		}
	}

	/**
	 * Get all pattern categories.
	 *
	 * @return array<string, string>
	 */
	public function get_categories(): array {
		return array(
			'hero'     => __( 'Heroes', 'xophz-compass-magic-wand' ),
			'features' => __( 'Features & Services', 'xophz-compass-magic-wand' ),
			'about'    => __( 'About & Narrative', 'xophz-compass-magic-wand' ),
			'proof'    => __( 'Social Proof', 'xophz-compass-magic-wand' ),
			'numbers'  => __( 'Metrics & Stats', 'xophz-compass-magic-wand' ),
			'pricing'  => __( 'Pricing & Plans', 'xophz-compass-magic-wand' ),
			'team'     => __( 'Team & People', 'xophz-compass-magic-wand' ),
			'faq'      => __( 'FAQ & Answers', 'xophz-compass-magic-wand' ),
			'cta'      => __( 'Call to Action', 'xophz-compass-magic-wand' ),
			'contact'  => __( 'Contact & Connect', 'xophz-compass-magic-wand' ),
		);
	}

	/**
	 * Retrieve pattern definitions with Gutenberg block markup.
	 *
	 * @return array<string, array<string, mixed>>
	 */
	public function get_pattern_definitions(): array {
		return array(
			'hero' => array(
				'id'       => 'hero',
				'name'     => __( 'Split Image Hero', 'xophz-compass-magic-wand' ),
				'desc'     => __( 'Bold headline, value copy, dual action buttons, and side image.', 'xophz-compass-magic-wand' ),
				'icon'     => 'dashicons-format-image',
				'color'    => '#2563eb',
				'category' => 'hero',
				'content'  => $this->build_hero_pattern(),
			),
			'hero-centered' => array(
				'id'       => 'hero-centered',
				'name'     => __( 'Centered Impact Hero', 'xophz-compass-magic-wand' ),
				'desc'     => __( 'Centered headline with badge pill, primary CTA, and proof avatars.', 'xophz-compass-magic-wand' ),
				'icon'     => 'dashicons-align-center',
				'color'    => '#3b82f6',
				'category' => 'hero',
				'content'  => $this->build_hero_centered_pattern(),
			),
			'features' => array(
				'id'       => 'features',
				'name'     => __( '3-Card Feature Grid', 'xophz-compass-magic-wand' ),
				'desc'     => __( '3 responsive cards with icons, headers, and descriptions.', 'xophz-compass-magic-wand' ),
				'icon'     => 'dashicons-grid-view',
				'color'    => '#10b981',
				'category' => 'features',
				'content'  => $this->build_features_pattern(),
			),
			'about' => array(
				'id'       => 'about',
				'name'     => __( 'Story & Mission Split', 'xophz-compass-magic-wand' ),
				'desc'     => __( 'Two-column narrative on mission and team history with photography.', 'xophz-compass-magic-wand' ),
				'icon'     => 'dashicons-info-outline',
				'color'    => '#8b5cf6',
				'category' => 'about',
				'content'  => $this->build_about_pattern(),
			),
			'pricing' => array(
				'id'       => 'pricing',
				'name'     => __( '3-Tier Pricing Table', 'xophz-compass-magic-wand' ),
				'desc'     => __( 'Starter, Professional with Popular badge, and Enterprise.', 'xophz-compass-magic-wand' ),
				'icon'     => 'dashicons-tag',
				'color'    => '#10b981',
				'category' => 'pricing',
				'content'  => $this->build_pricing_pattern(),
			),
			'cta' => array(
				'id'       => 'cta',
				'name'     => __( 'High-Impact Accent Banner', 'xophz-compass-magic-wand' ),
				'desc'     => __( 'Full-width colored banner with clear headline and primary action button.', 'xophz-compass-magic-wand' ),
				'icon'     => 'dashicons-megaphone',
				'color'    => '#ff3366',
				'category' => 'cta',
				'content'  => $this->build_cta_pattern(),
			),
			'contact' => array(
				'id'       => 'contact',
				'name'     => __( 'Split Contact & Details', 'xophz-compass-magic-wand' ),
				'desc'     => __( 'Direct contact details with office address, email, and hours.', 'xophz-compass-magic-wand' ),
				'icon'     => 'dashicons-email-alt',
				'color'    => '#14b8a6',
				'category' => 'contact',
				'content'  => $this->build_contact_pattern(),
			),
			'numbers' => array(
				'id'       => 'numbers',
				'name'     => __( '4-Column Stat Band', 'xophz-compass-magic-wand' ),
				'desc'     => __( 'Clean horizontal band showcasing 4 key quantitative achievements.', 'xophz-compass-magic-wand' ),
				'icon'     => 'dashicons-chart-bar',
				'color'    => '#2563eb',
				'category' => 'numbers',
				'content'  => $this->build_numbers_pattern(),
			),
			'faq' => array(
				'id'       => 'faq',
				'name'     => __( '2-Column FAQ Grid', 'xophz-compass-magic-wand' ),
				'desc'     => __( '4 frequently asked questions with clean, concise answers.', 'xophz-compass-magic-wand' ),
				'icon'     => 'dashicons-editor-help',
				'color'    => '#64748b',
				'category' => 'faq',
				'content'  => $this->build_faq_pattern(),
			),
		);
	}

	/**
	 * Helper: Build Split Hero block pattern markup.
	 */
	private function build_hero_pattern(): string {
		return '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-surface-body-background-color has-background">
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
			<!-- wp:group {"style":{"border":{"radius":"12px"},"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}}},"backgroundColor":"surface-section","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","alignItems":"center"}} -->
			<div class="wp-block-group has-surface-section-background-color has-background">
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Hero Media Showcase</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->';
	}

	/**
	 * Helper: Build Centered Hero pattern markup.
	 */
	private function build_hero_centered_pattern(): string {
		return '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-surface-body-background-color has-background">
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
<!-- /wp:group -->';
	}

	/**
	 * Helper: Build Features pattern markup.
	 */
	private function build_features_pattern(): string {
		return '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-surface-section-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Engineered for Performance</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Everything required to build high-converting, accessible web destinations.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Fast &amp; Responsive</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Fluid typography, container queries, and sub-second rendering across all modern devices.</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Design Tokens</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Dynamic palettes, circadian lighting cycles, and synchronized block themes.</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Native WordPress</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Zero proprietary lock-in. Clean, standardized Gutenberg blocks that last forever.</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->
		</div>
		<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->';
	}

	/**
	 * Helper: Build About pattern markup.
	 */
	private function build_about_pattern(): string {
		return '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-surface-body-background-color has-background">
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
		</div>
		<!-- /wp:column -->
		<!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
		<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%">
			<!-- wp:group {"style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|8","right":"var:preset|spacing|8"}}},"backgroundColor":"surface-section","layout":{"type":"flex","justifyContent":"center"}} -->
			<div class="wp-block-group has-surface-section-background-color has-background">
				<!-- wp:paragraph {"textColor":"text-muted"} -->
				<p class="has-text-muted-color has-text-color">Mission &amp; Story Spotlight</p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->';
	}

	/**
	 * Helper: Build Pricing pattern markup.
	 */
	private function build_pricing_pattern(): string {
		return '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-surface-section-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Simple, Transparent Pricing</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Choose the plan that fits your growth.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Starter</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"brand-base","style":{"typography":{"fontSize":"2rem","fontWeight":"800"}}} -->
				<p class="has-brand-base-color has-text-color">$19 / mo</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","width":100} -->
					<div class="wp-block-button has-custom-width wp-block-button__width-100"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#signup">Get Started</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px","width":"2px","color":"#2563eb"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Professional</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"brand-base","style":{"typography":{"fontSize":"2rem","fontWeight":"800"}}} -->
				<p class="has-brand-base-color has-text-color">$49 / mo</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","width":100} -->
					<div class="wp-block-button has-custom-width wp-block-button__width-100"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#signup">Choose Pro</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Enterprise</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"brand-base","style":{"typography":{"fontSize":"2rem","fontWeight":"800"}}} -->
				<p class="has-brand-base-color has-text-color">$99 / mo</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons -->
				<div class="wp-block-buttons">
					<!-- wp:button {"variant":"outline","width":100} -->
					<div class="wp-block-button has-custom-width wp-block-button__width-100 is-style-outline"><a class="wp-block-button__link wp-element-button" href="#contact">Contact Us</a></div>
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
<!-- /wp:group -->';
	}

	/**
	 * Helper: Build CTA pattern markup.
	 */
	private function build_cta_pattern(): string {
		return '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"brand-base","textColor":"text-inverse","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-text-inverse-color has-brand-base-background-color has-text-color has-background">
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
<!-- /wp:group -->';
	}

	/**
	 * Helper: Build Contact pattern markup.
	 */
	private function build_contact_pattern(): string {
		return '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-surface-body-background-color has-background">
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
<!-- /wp:group -->';
	}

	/**
	 * Helper: Build Numbers pattern markup.
	 */
	private function build_numbers_pattern(): string {
		return '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-card","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-surface-card-background-color has-background">
	<!-- wp:columns {"align":"wide"} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column -->
		<div class="wp-block-column">
			<!-- wp:heading {"textAlign":"center","level":3,"textColor":"brand-base","style":{"typography":{"fontSize":"2.5rem","fontWeight":"800"}}} -->
			<h3 class="wp-block-heading has-text-align-center has-brand-base-color has-text-color" style="font-size:2.5rem;font-weight:800">99.9%</h3>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Uptime Reliability</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column -->
		<div class="wp-block-column">
			<!-- wp:heading {"textAlign":"center","level":3,"textColor":"brand-base","style":{"typography":{"fontSize":"2.5rem","fontWeight":"800"}}} -->
			<h3 class="wp-block-heading has-text-align-center has-brand-base-color has-text-color" style="font-size:2.5rem;font-weight:800">&lt; 100ms</h3>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Render Latency</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column -->
		<div class="wp-block-column">
			<!-- wp:heading {"textAlign":"center","level":3,"textColor":"brand-base","style":{"typography":{"fontSize":"2.5rem","fontWeight":"800"}}} -->
			<h3 class="wp-block-heading has-text-align-center has-brand-base-color has-text-color" style="font-size:2.5rem;font-weight:800">60 FPS</h3>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Canvas Performance</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->
		<!-- wp:column -->
		<div class="wp-block-column">
			<!-- wp:heading {"textAlign":"center","level":3,"textColor":"brand-base","style":{"typography":{"fontSize":"2.5rem","fontWeight":"800"}}} -->
			<h3 class="wp-block-heading has-text-align-center has-brand-base-color has-text-color" style="font-size:2.5rem;font-weight:800">100%</h3>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Block Standard Compliance</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->';
	}

	/**
	 * Helper: Build FAQ pattern markup.
	 */
	private function build_faq_pattern(): string {
		return '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Frequently Asked Questions</h2>
		<!-- /wp:heading -->

		<!-- wp:columns {"align":"wide","style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:heading {"level":3,"fontSize":"md","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-md-font-size">Does this use standard Gutenberg blocks?</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Yes. All sections serialize directly into standard WordPress block comment markup. Zero proprietary lock-in.</p>
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
			</div>
			<!-- /wp:column -->
		</div>
		<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->';
	}
}
