<?php
/**
 * Category 3: Features & Numbers Sections
 *
 * Canonical Gutenberg block pattern definitions for Features and Numbers sections.
 * Implemented 100% with native WordPress core blocks and Quantum theme design tokens.
 *
 * @package Xophz_Compass_Magic_Wand
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

return array(
	'features' => array(
		'id'       => 'features',
		'name'     => __( '3-Card Feature Grid', 'xophz-compass-magic-wand' ),
		'desc'     => __( '3 responsive cards with icons, headers, and descriptions.', 'xophz-compass-magic-wand' ),
		'category' => 'features',
		'icon'     => 'dashicons-grid-view',
		'color'    => '#10b981',
		'source'   => 'core',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-features","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-features has-surface-section-background-color has-background">
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
<!-- /wp:group -->',
	),
	'numbers' => array(
		'id'       => 'numbers',
		'name'     => __( '4-Column Stat Band', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Clean horizontal band showcasing 4 key quantitative achievements.', 'xophz-compass-magic-wand' ),
		'category' => 'numbers',
		'icon'     => 'dashicons-chart-bar',
		'color'    => '#2563eb',
		'source'   => 'core',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-numbers","style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-card","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-numbers has-surface-card-background-color has-background">
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
<!-- /wp:group -->',
	),
	'numbers-section' => array(
		'id'       => 'numbers-section',
		'name'     => __( 'Numbers', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Quantitative milestone stats grid showcasing team achievements.', 'xophz-compass-magic-wand' ),
		'category' => 'numbers',
		'icon'     => 'dashicons-chart-bar',
		'color'    => '#2563eb',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-numbers-grid","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-numbers-grid has-surface-section-background-color has-background">
	<!-- wp:columns {"align":"wide"} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column has-surface-card-background-color has-background">
			<!-- wp:heading {"textAlign":"center","level":2,"textColor":"brand-base","style":{"typography":{"fontSize":"3rem","fontWeight":"800"}}} -->
			<h2 class="wp-block-heading has-text-align-center has-brand-base-color has-text-color" style="font-size:3rem;font-weight:800">230</h2>
			<!-- /wp:heading -->
			<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"sm","textColor":"text-heading","style":{"typography":{"letterSpacing":"1px"}}} -->
			<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-sm-font-size" style="letter-spacing:1px">PROJECTS COMPLETED</h3>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Delivered with high performance across enterprise platforms.</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column has-surface-card-background-color has-background">
			<!-- wp:heading {"textAlign":"center","level":2,"textColor":"brand-base","style":{"typography":{"fontSize":"3rem","fontWeight":"800"}}} -->
			<h2 class="wp-block-heading has-text-align-center has-brand-base-color has-text-color" style="font-size:3rem;font-weight:800">75,340</h2>
			<!-- /wp:heading -->
			<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"sm","textColor":"text-heading","style":{"typography":{"letterSpacing":"1px"}}} -->
			<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-sm-font-size" style="letter-spacing:1px">WORKED HOURS</h3>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Dedicated craft and engineering invested into user experiences.</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
		<div class="wp-block-column has-surface-card-background-color has-background">
			<!-- wp:heading {"textAlign":"center","level":2,"textColor":"brand-base","style":{"typography":{"fontSize":"3rem","fontWeight":"800"}}} -->
			<h2 class="wp-block-heading has-text-align-center has-brand-base-color has-text-color" style="font-size:3rem;font-weight:800">25</h2>
			<!-- /wp:heading -->
			<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"sm","textColor":"text-heading","style":{"typography":{"letterSpacing":"1px"}}} -->
			<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-sm-font-size" style="letter-spacing:1px">TEAM MEMBERS</h3>
			<!-- /wp:heading -->
			<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
			<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Specialists cooperating across engineering and interface design.</p>
			<!-- /wp:paragraph -->
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->',
	),
	'features-coloured-icon-boxes-section' => array(
		'id'       => 'features-coloured-icon-boxes-section',
		'name'     => __( 'Features', 'xophz-compass-magic-wand' ),
		'desc'     => __( '4 responsive coloured feature boxes with distinct brand accents.', 'xophz-compass-magic-wand' ),
		'category' => 'features',
		'icon'     => 'dashicons-grid-view',
		'color'    => '#10b981',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-features-coloured-boxes","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-features-coloured-boxes has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">A Few Things We Are Great At</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Engineered solutions crafted for resilience, clarity, and performance.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Responsive Design</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Fluid typography, container queries, and sub-second rendering across all devices.</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button">LEARN MORE</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Cloud Integration</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Seamless backend connectivity with high-availability cloud infrastructure.</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"status-success","textColor":"text-inverse","fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size"><a class="wp-block-button__link has-text-inverse-color has-status-success-background-color has-text-color has-background wp-element-button">LEARN MORE</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Realtime Signals</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Instant state synchronization powering responsive interactive components.</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"status-warning","textColor":"text-inverse","fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size"><a class="wp-block-button__link has-text-inverse-color has-status-warning-background-color has-text-color has-background wp-element-button">LEARN MORE</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Data Analytics</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Accurate operational telemetry visualized in real-time dashboards.</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-active","textColor":"text-inverse","fontSize":"xs"} -->
					<div class="wp-block-button has-custom-font-size has-xs-font-size"><a class="wp-block-button__link has-text-inverse-color has-brand-active-background-color has-text-color has-background wp-element-button">LEARN MORE</a></div>
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
	'features-image-cards-section' => array(
		'id'       => 'features-image-cards-section',
		'name'     => __( 'Features', 'xophz-compass-magic-wand' ),
		'desc'     => __( '3-column image cards showcasing media headers, descriptions, and action links.', 'xophz-compass-magic-wand' ),
		'category' => 'features',
		'icon'     => 'dashicons-grid-view',
		'color'    => '#10b981',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-features-image-cards","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-features-image-cards has-surface-section-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">A Few Things We Are Great At</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Engineered solutions crafted for resilience, clarity, and performance.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|0","bottom":"var:preset|spacing|6","left":"var:preset|spacing|0","right":"var:preset|spacing|0"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
				<div class="wp-block-group has-surface-section-background-color has-background">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"letterSpacing":"1px"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="letter-spacing:1px">MEDIA SHOWCASE</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|2","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"layout":{"type":"constrained"}} -->
				<div class="wp-block-group">
					<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Responsive Architecture</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Fluid layouts adjusting dynamically across desktop, tablet, and mobile displays.</p>
					<!-- /wp:paragraph -->
					<!-- wp:paragraph {"textColor":"brand-base","fontSize":"sm"} -->
					<p class="has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|0","bottom":"var:preset|spacing|6","left":"var:preset|spacing|0","right":"var:preset|spacing|0"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
				<div class="wp-block-group has-surface-section-background-color has-background">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"letterSpacing":"1px"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="letter-spacing:1px">MEDIA SHOWCASE</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|2","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"layout":{"type":"constrained"}} -->
				<div class="wp-block-group">
					<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Design System Tokens</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Cohesive palettes and typographic hierarchies synchronized across block themes.</p>
					<!-- /wp:paragraph -->
					<!-- wp:paragraph {"textColor":"brand-base","fontSize":"sm"} -->
					<p class="has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|0","bottom":"var:preset|spacing|6","left":"var:preset|spacing|0","right":"var:preset|spacing|0"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
				<div class="wp-block-group has-surface-section-background-color has-background">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"letterSpacing":"1px"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="letter-spacing:1px">MEDIA SHOWCASE</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|2","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"layout":{"type":"constrained"}} -->
				<div class="wp-block-group">
					<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Standardized Blocks</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Clean, standardized Gutenberg block markup providing lifetime maintainability.</p>
					<!-- /wp:paragraph -->
					<!-- wp:paragraph {"textColor":"brand-base","fontSize":"sm"} -->
					<p class="has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
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
	'features-large-icons-section' => array(
		'id'       => 'features-large-icons-section',
		'name'     => __( 'Features', 'xophz-compass-magic-wand' ),
		'desc'     => __( '4 feature columns with prominent icon badges and action links.', 'xophz-compass-magic-wand' ),
		'category' => 'features',
		'icon'     => 'dashicons-grid-view',
		'color'    => '#10b981',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-features-large-icons","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-features-large-icons has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">A Few Things We Are Great At</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Engineered solutions crafted for resilience, clarity, and performance.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Lightning Speed</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Sub-second rendering and fluid transitions optimized for modern hardware.</p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"brand-base","fontSize":"sm"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Cloud Native</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Automated horizontal scalability with resilient serverless backend services.</p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"brand-base","fontSize":"sm"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Realtime Data</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Live telemetry and event dispatching through robust WebSockets channels.</p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"brand-base","fontSize":"sm"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Audited Security</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Strict permission boundaries and zero-trust verification at every layer.</p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"brand-base","fontSize":"sm"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
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
	'features-overlapped-icons-section' => array(
		'id'       => 'features-overlapped-icons-section',
		'name'     => __( 'Features', 'xophz-compass-magic-wand' ),
		'desc'     => __( '4 elevated cards with centered icon badges resting on top.', 'xophz-compass-magic-wand' ),
		'category' => 'features',
		'icon'     => 'dashicons-grid-view',
		'color'    => '#10b981',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-features-overlapped-icons","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-features-overlapped-icons has-surface-section-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">A Few Things We Are Great At</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Engineered solutions crafted for resilience, clarity, and performance.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Responsive Design</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Adaptive viewports with container queries for all form factors.</p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"brand-base","fontSize":"sm"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Parallax Effect</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Layered visual depth transitions rendered at 60 FPS.</p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"brand-base","fontSize":"sm"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">WooCommerce Ready</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Native eCommerce integration with optimized checkout flows.</p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"brand-base","fontSize":"sm"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color has-lg-font-size">Content Blocks</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Predefined atomic blocks designed for fast site assembly.</p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"textAlign":"center","textColor":"brand-base","fontSize":"sm"} -->
				<p class="has-text-align-center has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
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
	'features-small-icon-cards-section' => array(
		'id'       => 'features-small-icon-cards-section',
		'name'     => __( 'Features', 'xophz-compass-magic-wand' ),
		'desc'     => __( '6 compact icon cards organized in a responsive 3-column grid.', 'xophz-compass-magic-wand' ),
		'category' => 'features',
		'icon'     => 'dashicons-grid-view',
		'color'    => '#10b981',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-features-small-icon-cards","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-features-small-icon-cards has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">A Few Things We Are Great At</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Engineered solutions crafted for resilience, clarity, and performance.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"},"margin":{"bottom":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
				<div class="wp-block-group has-surface-card-background-color has-background">
					<!-- wp:heading {"level":3,"fontSize":"base","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-base-font-size">Responsive Design</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Fluid layouts adjusting dynamically across desktop, tablet, and mobile displays.</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
				<div class="wp-block-group has-surface-card-background-color has-background">
					<!-- wp:heading {"level":3,"fontSize":"base","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-base-font-size">Live Synchronization</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Instant event updates propagated seamlessly across active sessions.</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"},"margin":{"bottom":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
				<div class="wp-block-group has-surface-card-background-color has-background">
					<!-- wp:heading {"level":3,"fontSize":"base","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-base-font-size">Data Analytics</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Detailed quantitative telemetry visualized with zero performance degradation.</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
				<div class="wp-block-group has-surface-card-background-color has-background">
					<!-- wp:heading {"level":3,"fontSize":"base","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-base-font-size">Modular Configuration</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Extensible architecture easily adapted to changing business requirements.</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"},"margin":{"bottom":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
				<div class="wp-block-group has-surface-card-background-color has-background">
					<!-- wp:heading {"level":3,"fontSize":"base","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-base-font-size">Accelerated Delivery</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Parallel pipelines ensuring fast compilation and atomic releases.</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
				<div class="wp-block-group has-surface-card-background-color has-background">
					<!-- wp:heading {"level":3,"fontSize":"base","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-base-font-size">Scheduled Routines</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Reliable cron orchestration maintaining system integrity round the clock.</p>
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
	'features-small-image-cards-section' => array(
		'id'       => 'features-small-image-cards-section',
		'name'     => __( 'Features', 'xophz-compass-magic-wand' ),
		'desc'     => __( '4 split media feature cards with media banners and descriptive copy.', 'xophz-compass-magic-wand' ),
		'category' => 'features',
		'icon'     => 'dashicons-grid-view',
		'color'    => '#10b981',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-features-small-image-cards","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-features-small-image-cards has-surface-section-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">A Few Things We Are Great At</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Engineered solutions crafted for resilience, clarity, and performance.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"},"margin":{"bottom":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
				<div class="wp-block-group has-surface-card-background-color has-background">
					<!-- wp:heading {"level":3,"fontSize":"base","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-base-font-size">Responsive Layout</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Fluid design adapting cleanly across varied display densities.</p>
					<!-- /wp:paragraph -->
					<!-- wp:paragraph {"textColor":"brand-base","fontSize":"sm"} -->
					<p class="has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
				<div class="wp-block-group has-surface-card-background-color has-background">
					<!-- wp:heading {"level":3,"fontSize":"base","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-base-font-size">Token Architecture</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Standard CSS variables maintaining synchronized visual cohesion.</p>
					<!-- /wp:paragraph -->
					<!-- wp:paragraph {"textColor":"brand-base","fontSize":"sm"} -->
					<p class="has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column -->
			<div class="wp-block-column">
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"},"margin":{"bottom":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
				<div class="wp-block-group has-surface-card-background-color has-background">
					<!-- wp:heading {"level":3,"fontSize":"base","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-base-font-size">Component Modularity</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Self-contained modules assembled into complex view templates.</p>
					<!-- /wp:paragraph -->
					<!-- wp:paragraph {"textColor":"brand-base","fontSize":"sm"} -->
					<p class="has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->

				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
				<div class="wp-block-group has-surface-card-background-color has-background">
					<!-- wp:heading {"level":3,"fontSize":"base","textColor":"text-heading"} -->
					<h3 class="wp-block-heading has-text-heading-color has-text-color has-base-font-size">Quantum Consistency</h3>
					<!-- /wp:heading -->
					<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
					<p class="has-text-muted-color has-text-color has-sm-font-size">Strict declarative boundaries avoiding unintended side effects.</p>
					<!-- /wp:paragraph -->
					<!-- wp:paragraph {"textColor":"brand-base","fontSize":"sm"} -->
					<p class="has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
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
	'features-square-image-section' => array(
		'id'       => 'features-square-image-section',
		'name'     => __( 'Features', 'xophz-compass-magic-wand' ),
		'desc'     => __( '3 square media feature cards with headers, descriptions, and action links.', 'xophz-compass-magic-wand' ),
		'category' => 'features',
		'icon'     => 'dashicons-grid-view',
		'color'    => '#10b981',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-features-square-image","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-features-square-image has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">A Few Things We Are Great At</h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Engineered solutions crafted for resilience, clarity, and performance.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"},"margin":{"bottom":"var:preset|spacing|4"}},"border":{"radius":"6px"}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
				<div class="wp-block-group has-surface-section-background-color has-background">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"letterSpacing":"1px"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="letter-spacing:1px">MEDIA SHOWCASE</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Responsive Design</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Fluid layouts adjusting dynamically across desktop, tablet, and mobile displays.</p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"textColor":"brand-base","fontSize":"sm"} -->
				<p class="has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"},"margin":{"bottom":"var:preset|spacing|4"}},"border":{"radius":"6px"}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
				<div class="wp-block-group has-surface-section-background-color has-background">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"letterSpacing":"1px"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="letter-spacing:1px">MEDIA SHOWCASE</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Parallax Effect</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Layered visual depth transitions rendered at 60 FPS.</p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"textColor":"brand-base","fontSize":"sm"} -->
				<p class="has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
				<!-- /wp:paragraph -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column has-surface-card-background-color has-background">
				<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"},"margin":{"bottom":"var:preset|spacing|4"}},"border":{"radius":"6px"}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
				<div class="wp-block-group has-surface-section-background-color has-background">
					<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"xs","style":{"typography":{"letterSpacing":"1px"}}} -->
					<p class="has-text-align-center has-text-muted-color has-text-color has-xs-font-size" style="letter-spacing:1px">MEDIA SHOWCASE</p>
					<!-- /wp:paragraph -->
				</div>
				<!-- /wp:group -->
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Predefined Content Blocks</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-muted-color has-text-color has-sm-font-size">Predefined atomic blocks designed for fast site assembly.</p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"textColor":"brand-base","fontSize":"sm"} -->
				<p class="has-brand-base-color has-text-color has-sm-font-size"><a href="#">Learn more &rarr;</a></p>
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
