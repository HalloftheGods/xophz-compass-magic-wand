<?php
/**
 * Category 7: Quantum Atoms Sections
 *
 * Flagship section templates powered by Project Compass Vue 3 Quantum Atoms.
 * Seamlessly integrates XBtn, XCard, XChip, XCountdownClock, and XAlert
 * with zero-runtime JSX dependencies and client-side reactive hydration.
 *
 * @package Xophz_Compass_Magic_Wand
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

return array(
	'atom-countdown-hero' => array(
		'id'       => 'atom-countdown-hero',
		'name'     => __( 'Quantum Countdown Hero', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Flagship launch hero featuring live countdown clock, status chip, and quantum action buttons.', 'xophz-compass-magic-wand' ),
		'category' => 'quantum-atoms',
		'icon'     => 'dashicons-clock',
		'color'    => '#62c9ff',
		'source'   => 'core',
		'anatomy'  => array(
			'layout'     => 'hero-centered',
			'columns'    => 1,
			'hasBadge'   => true,
			'hasButtons' => true,
			'hasMedia'   => true,
		),
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-atom-countdown-hero","style":{"spacing":{"padding":{"top":"var:preset|spacing|12","bottom":"var:preset|spacing|12","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div style="padding-top:var(--wp--preset--spacing--12);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--12);padding-left:var(--wp--preset--spacing--6);" class="wp-block-group alignfull mh-section mh-section-full-width mh-section-atom-countdown-hero has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<div data-magic-wand-mount class="has-text-align-center" style="margin-bottom:var(--wp--preset--spacing--4);">
			<x-chip color="primary" size="small">MISSION COUNTDOWN ACTIVATED</x-chip>
		</div>
		<!-- wp:heading {"textAlign":"center","level":1,"textColor":"text-heading"} -->
		<h1 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Next Generation Quantum Architecture</h1>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p style="margin-bottom:var(--wp--preset--spacing--8);" class="has-text-align-center has-text-muted-color has-text-color">Deploy reactive autonomous micro-frontends with Starship precision, sub-50ms latency, and zero configuration.</p>
		<!-- /wp:paragraph -->
		<div data-magic-wand-mount class="has-text-align-center" style="margin-bottom:var(--wp--preset--spacing--8);">
			<x-countdown-clock target-date="2027-01-01T00:00:00Z"></x-countdown-clock>
		</div>
		<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
		<div class="wp-block-buttons">
			<div data-magic-wand-mount>
				<x-btn color="primary" variant="elevated" size="large">Initialize Terminal</x-btn>
			</div>
			<!-- wp:button {"className":"is-style-outline"} -->
			<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="#explore">Explore Codex</a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),

	'atom-glassmorphic-features' => array(
		'id'       => 'atom-glassmorphic-features',
		'name'     => __( 'Quantum Glassmorphic Cards', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Three responsive glassmorphic cards with status chips, titles, and interactive quantum buttons.', 'xophz-compass-magic-wand' ),
		'category' => 'quantum-atoms',
		'icon'     => 'dashicons-grid-view',
		'color'    => '#62c9ff',
		'source'   => 'core',
		'anatomy'  => array(
			'layout'   => 'grid',
			'columns'  => 3,
			'hasCards' => true,
		),
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-atom-glassmorphic-features","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div style="padding-top:var(--wp--preset--spacing--10);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--10);padding-left:var(--wp--preset--spacing--6);" class="wp-block-group alignfull mh-section mh-section-full-width mh-section-atom-glassmorphic-features has-surface-section-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<div data-magic-wand-mount class="has-text-align-center" style="margin-bottom:var(--wp--preset--spacing--3);">
			<x-chip color="brand-base" size="small">QUANTUM CORE CAPABILITIES</x-chip>
		</div>
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Modular Precision at Planetary Scale</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p style="margin-bottom:var(--wp--preset--spacing--8);" class="has-text-align-center has-text-muted-color has-text-color">Engineered with atomic encapsulation, zero mock data, and instant design token hydration.</p>
		<!-- /wp:paragraph -->
		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column -->
			<div data-mw-item-idx="0" class="wp-block-column">
				<div data-magic-wand-mount style="height:100%;">
					<x-card elevation="2" rounded="lg" style="padding:24px;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
						<div>
							<div style="margin-bottom:12px;"><x-chip color="primary" size="x-small">PERFORMANCE</x-chip></div>
							<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size" data-mw-item-prop="title">Sub-50ms Latency</h3>
							<p class="has-text-muted-color has-text-color has-sm-font-size" data-mw-item-prop="desc">Optimized tree-shaken bundles deliver instant frame renders and fluid 60fps animations.</p>
						</div>
						<div style="margin-top:16px;">
							<x-btn color="primary" variant="text" size="small">Documentation &rarr;</x-btn>
						</div>
					</x-card>
				</div>
			</div>
			<!-- /wp:column -->
			<!-- wp:column -->
			<div data-mw-item-idx="1" class="wp-block-column">
				<div data-magic-wand-mount style="height:100%;">
					<x-card elevation="2" rounded="lg" style="padding:24px;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
						<div>
							<div style="margin-bottom:12px;"><x-chip color="secondary" size="x-small">SECURITY</x-chip></div>
							<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size" data-mw-item-prop="title">Boundary Isolation</h3>
							<p class="has-text-muted-color has-text-color has-sm-font-size" data-mw-item-prop="desc">Runtime sanitization guards, zero synthetic data enforcement, and encrypted synchronization.</p>
						</div>
						<div style="margin-top:16px;">
							<x-btn color="secondary" variant="text" size="small">Audit Report &rarr;</x-btn>
						</div>
					</x-card>
				</div>
			</div>
			<!-- /wp:column -->
			<!-- wp:column -->
			<div data-mw-item-idx="2" class="wp-block-column">
				<div data-magic-wand-mount style="height:100%;">
					<x-card elevation="2" rounded="lg" style="padding:24px;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
						<div>
							<div style="margin-bottom:12px;"><x-chip color="accent" size="x-small">COLOR ENGINE</x-chip></div>
							<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size" data-mw-item-prop="title">Circadian Harmony</h3>
							<p class="has-text-muted-color has-text-color has-sm-font-size" data-mw-item-prop="desc">OKLCH color-mix transitions breathing smoothly between High Noon, Golden Hour, and Astral Void.</p>
						</div>
						<div style="margin-top:16px;">
							<x-btn color="accent" variant="text" size="small">Palette Studio &rarr;</x-btn>
						</div>
					</x-card>
				</div>
			</div>
			<!-- /wp:column -->
		</div>
		<!-- /wp:columns -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),

	'atom-interactive-alert-banner' => array(
		'id'       => 'atom-interactive-alert-banner',
		'name'     => __( 'Quantum Alert Banner', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Full width announcement bar featuring reactive XAlert notification and quantum CTA action.', 'xophz-compass-magic-wand' ),
		'category' => 'quantum-atoms',
		'icon'     => 'dashicons-megaphone',
		'color'    => '#62c9ff',
		'source'   => 'core',
		'anatomy'  => array(
			'layout'     => 'cta',
			'columns'    => 1,
			'hasButtons' => true,
		),
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-atom-interactive-alert-banner","style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div style="padding-top:var(--wp--preset--spacing--8);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--8);padding-left:var(--wp--preset--spacing--6);" class="wp-block-group alignfull mh-section mh-section-full-width mh-section-atom-interactive-alert-banner has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<div data-magic-wand-mount>
			<x-alert type="info" variant="tonal" border="start" style="padding:18px 24px;border-radius:10px;">
				<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;width:100%;">
					<div>
						<strong style="font-size:15px;display:block;margin-bottom:2px;">Quantum Engineering Standards v26.9 Operational</strong>
						<span style="font-size:13px;opacity:0.85;">All section archetypes are synchronized with live Customizer preview and native block compilation.</span>
					</div>
					<div>
						<x-btn color="primary" variant="elevated" size="small">Upgrade Workflows</x-btn>
					</div>
				</div>
			</x-alert>
		</div>
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
	),

	'atom-quantum-pricing' => array(
		'id'       => 'atom-quantum-pricing',
		'name'     => __( 'Quantum Glassmorphic Pricing', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Three column pricing tiers with glassmorphic cards, popular highlights, and quantum action buttons.', 'xophz-compass-magic-wand' ),
		'category' => 'quantum-atoms',
		'icon'     => 'dashicons-tag',
		'color'    => '#62c9ff',
		'source'   => 'core',
		'anatomy'  => array(
			'layout'   => 'pricing',
			'columns'  => 3,
			'hasCards' => true,
		),
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-atom-quantum-pricing","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div style="padding-top:var(--wp--preset--spacing--10);padding-right:var(--wp--preset--spacing--6);padding-bottom:var(--wp--preset--spacing--10);padding-left:var(--wp--preset--spacing--6);" class="wp-block-group alignfull mh-section mh-section-full-width mh-section-atom-quantum-pricing has-surface-section-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<div data-magic-wand-mount class="has-text-align-center" style="margin-bottom:var(--wp--preset--spacing--3);">
			<x-chip color="primary" size="small">TRANSPARENT VALUE METRICS</x-chip>
		</div>
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Predictable Architecture Pricing</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p style="margin-bottom:var(--wp--preset--spacing--8);" class="has-text-align-center has-text-muted-color has-text-color">Deploy independently on your infrastructure with lifetime ownership and zero seat fees.</p>
		<!-- /wp:paragraph -->
		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column -->
			<div data-mw-item-idx="0" class="wp-block-column">
				<div data-magic-wand-mount style="height:100%;">
					<x-card elevation="1" rounded="lg" style="padding:28px;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
						<div>
							<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size" data-mw-item-prop="title">Starter</h3>
							<div style="margin:16px 0;"><span style="font-size:36px;font-weight:800;" class="mh-price-num">$29</span><span class="has-text-muted-color">/mo</span></div>
							<p class="has-text-muted-color has-text-color has-sm-font-size" data-mw-item-prop="desc">Up to 5 Projects<br>Core Quantum Atoms<br>Community Codex Access<br>Monthly Feature Drops</p>
						</div>
						<div style="margin-top:24px;">
							<x-btn color="primary" variant="outlined" block>Get Started</x-btn>
						</div>
					</x-card>
				</div>
			</div>
			<!-- /wp:column -->
			<!-- wp:column -->
			<div data-mw-item-idx="1" class="wp-block-column">
				<div data-magic-wand-mount style="height:100%;">
					<x-card elevation="3" rounded="lg" style="padding:28px;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;border:1px solid #62c9ff;">
						<div>
							<div style="margin-bottom:8px;"><x-chip color="primary" size="x-small">MOST POPULAR</x-chip></div>
							<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size" data-mw-item-prop="title">Professional</h3>
							<div style="margin:16px 0;"><span style="font-size:36px;font-weight:800;color:#62c9ff;" class="mh-price-num">$79</span><span class="has-text-muted-color">/mo</span></div>
							<p class="has-text-muted-color has-text-color has-sm-font-size" data-mw-item-prop="desc">Unlimited Projects<br>Complete 67-Section Catalog<br>Priority Customizer Sync<br>Real-Time Preview Engineering</p>
						</div>
						<div style="margin-top:24px;">
							<x-btn color="primary" variant="elevated" block>Go Pro</x-btn>
						</div>
					</x-card>
				</div>
			</div>
			<!-- /wp:column -->
			<!-- wp:column -->
			<div data-mw-item-idx="2" class="wp-block-column">
				<div data-magic-wand-mount style="height:100%;">
					<x-card elevation="1" rounded="lg" style="padding:28px;height:100%;display:flex;flex-direction:column;justify-content:space-between;text-align:center;">
						<div>
							<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size" data-mw-item-prop="title">Enterprise</h3>
							<div style="margin:16px 0;"><span style="font-size:36px;font-weight:800;" class="mh-price-num">$199</span><span class="has-text-muted-color">/mo</span></div>
							<p class="has-text-muted-color has-text-color has-sm-font-size" data-mw-item-prop="desc">Dedicated Systems Architect<br>Custom Pattern Conjuring<br>99.9% SLA Guarantee<br>Multi-Cluster Deployments</p>
						</div>
						<div style="margin-top:24px;">
							<x-btn color="primary" variant="outlined" block>Contact Sales</x-btn>
						</div>
					</x-card>
				</div>
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
