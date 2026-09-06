<?php
/**
 * Category 6: Pricing, Portfolio, Gallery, Clients & WooCommerce Sections
 *
 * Implements 12 Pricing, Portfolio, Gallery, Clients, and WooCommerce sections for Magic Hat & Magic Wand.
 * Engineered as 100% native WordPress Gutenberg core blocks with theme token styling,
 * responsive block column layouts, and SVG / mock media components.
 *
 * @package Xophz_Compass_Magic_Wand
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

return array(
	'pricing' => array(
		'id'       => 'pricing',
		'name'     => __( '3-Tier Pricing Table', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Starter, Professional with Popular badge, and Enterprise.', 'xophz-compass-magic-wand' ),
		'category' => 'pricing',
		'icon'     => 'dashicons-tag',
		'color'    => '#10b981',
		'source'   => 'core',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-pricing","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-pricing has-surface-section-background-color has-background">
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
			<!-- wp:column {"className":"mh-pricing-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-pricing-card has-surface-card-background-color has-background">
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Starter</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"brand-base","style":{"typography":{"fontSize":"2rem","fontWeight":"800"}}} -->
				<p class="has-brand-base-color has-text-color" style="font-size:2rem;font-weight:800">$19 / mo</p>
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

			<!-- wp:column {"className":"mh-pricing-card mh-pricing-popular","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px","width":"2px","color":"#2563eb"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-pricing-card mh-pricing-popular has-surface-card-background-color has-background">
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Professional</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"brand-base","style":{"typography":{"fontSize":"2rem","fontWeight":"800"}}} -->
				<p class="has-brand-base-color has-text-color" style="font-size:2rem;font-weight:800">$49 / mo</p>
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

			<!-- wp:column {"className":"mh-pricing-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-pricing-card has-surface-card-background-color has-background">
				<!-- wp:heading {"level":3,"fontSize":"lg","textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-heading-color has-text-color has-lg-font-size">Enterprise</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"textColor":"brand-base","style":{"typography":{"fontSize":"2rem","fontWeight":"800"}}} -->
				<p class="has-brand-base-color has-text-color" style="font-size:2rem;font-weight:800">$99 / mo</p>
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
<!-- /wp:group -->',
	),

	'clients-strip-section' => array(
		'id'       => 'clients-strip-section',
		'name'     => __( 'Clients Strip', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Full width client logos and partner badges band.', 'xophz-compass-magic-wand' ),
		'category' => 'clients',
		'icon'     => 'dashicons-groups',
		'color'    => '#64748b',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-clients-strip clients-strip-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-clients-strip clients-strip-section has-surface-body-background-color has-background">
	<!-- wp:columns {"align":"wide"} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column -->
		<div class="wp-block-column">
			<div class="mh-mock-client-box">
				<i class="fa fa-shield"></i>
				<span>PARTNER</span>
			</div>
		</div>
		<!-- /wp:column -->
		<!-- wp:column -->
		<div class="wp-block-column">
			<div class="mh-mock-client-box">
				<i class="fa fa-diamond"></i>
				<span>ENTERPRISE</span>
			</div>
		</div>
		<!-- /wp:column -->
		<!-- wp:column -->
		<div class="wp-block-column">
			<div class="mh-mock-client-box">
				<i class="fa fa-globe"></i>
				<span>GLOBAL</span>
			</div>
		</div>
		<!-- /wp:column -->
		<!-- wp:column -->
		<div class="wp-block-column">
			<div class="mh-mock-client-box">
				<i class="fa fa-cube"></i>
				<span>PLATFORM</span>
			</div>
		</div>
		<!-- /wp:column -->
		<!-- wp:column -->
		<div class="wp-block-column">
			<div class="mh-mock-client-box">
				<i class="fa fa-bolt"></i>
				<span>VENTURES</span>
			</div>
		</div>
		<!-- /wp:column -->
		<!-- wp:column -->
		<div class="wp-block-column">
			<div class="mh-mock-client-box">
				<i class="fa fa-rocket"></i>
				<span>STUDIOS</span>
			</div>
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->',
	),

	'clients-grid-section' => array(
		'id'       => 'clients-grid-section',
		'name'     => __( 'Clients Grid', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Client logos grid with section headline and descriptive text.', 'xophz-compass-magic-wand' ),
		'category' => 'clients',
		'icon'     => 'dashicons-groups',
		'color'    => '#64748b',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-clients-grid clients-grid-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-clients-grid clients-grid-section has-surface-section-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Some of Our Customers</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Trusted by engineering teams and innovators worldwide to accelerate digital transformation.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column -->
			<div class="wp-block-column">
				<div class="mh-mock-client-box">
					<i class="fa fa-shield"></i>
					<span>PARTNER</span>
				</div>
			</div>
			<!-- /wp:column -->
			<!-- wp:column -->
			<div class="wp-block-column">
				<div class="mh-mock-client-box">
					<i class="fa fa-diamond"></i>
					<span>ENTERPRISE</span>
				</div>
			</div>
			<!-- /wp:column -->
			<!-- wp:column -->
			<div class="wp-block-column">
				<div class="mh-mock-client-box">
					<i class="fa fa-globe"></i>
					<span>GLOBAL</span>
				</div>
			</div>
			<!-- /wp:column -->
			<!-- wp:column -->
			<div class="wp-block-column">
				<div class="mh-mock-client-box">
					<i class="fa fa-cube"></i>
					<span>PLATFORM</span>
				</div>
			</div>
			<!-- /wp:column -->
		</div>
		<!-- /wp:columns -->

		<!-- wp:columns {"align":"wide","style":{"spacing":{"margin":{"top":"var:preset|spacing|4"}}}} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column -->
			<div class="wp-block-column">
				<div class="mh-mock-client-box">
					<i class="fa fa-cloud"></i>
					<span>INFRASTRUCTURE</span>
				</div>
			</div>
			<!-- /wp:column -->
			<!-- wp:column -->
			<div class="wp-block-column">
				<div class="mh-mock-client-box">
					<i class="fa fa-bolt"></i>
					<span>VENTURES</span>
				</div>
			</div>
			<!-- /wp:column -->
			<!-- wp:column -->
			<div class="wp-block-column">
				<div class="mh-mock-client-box">
					<i class="fa fa-rocket"></i>
					<span>STUDIOS</span>
				</div>
			</div>
			<!-- /wp:column -->
			<!-- wp:column -->
			<div class="wp-block-column">
				<div class="mh-mock-client-box">
					<i class="fa fa-code-fork"></i>
					<span>SYSTEMS</span>
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

	'portfolio-cards-section' => array(
		'id'       => 'portfolio-cards-section',
		'name'     => __( 'Portfolio Cards', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Grid of project cards with interactive hover effects and title labels.', 'xophz-compass-magic-wand' ),
		'category' => 'portfolio',
		'icon'     => 'dashicons-portfolio',
		'color'    => '#a855f7',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-portfolio-cards portfolio-cards-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-portfolio-cards portfolio-cards-section has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Check Out Our Cool Projects</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">A curated selection of modern applications, responsive platforms, and creative design systems.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"className":"portfolio-cards-projectcol"} -->
			<div class="wp-block-column portfolio-cards-projectcol">
				<div class="portfolio-cards-projectcard">
					<div class="contentswap-effect ContentSwap104" hover-fx="ContentSwap104">
						<div class="ContentSwap104_content initial-image">
							<div class="mh-mock-media-box">
								<i class="fa fa-folder-open-o"></i>
								<span>Media Showcase</span>
							</div>
						</div>
						<div class="overlay"></div>
						<div class="swap-inner">
							<div class="ContentSwap104-center">
								<a href="#"><i data-cp-fa="true" class="portfolio-card-icon fa fa-search"></i></a>
							</div>
						</div>
					</div>
					<div class="portfolio-cards-projectinfo">
						<a href="#" class="portfolio-cards-projlink"><h4 class="portfolio-cards-projtitle">Cloud Management Console</h4></a>
					</div>
				</div>
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"portfolio-cards-projectcol"} -->
			<div class="wp-block-column portfolio-cards-projectcol">
				<div class="portfolio-cards-projectcard">
					<div class="contentswap-effect ContentSwap104" hover-fx="ContentSwap104">
						<div class="ContentSwap104_content initial-image">
							<div class="mh-mock-media-box">
								<i class="fa fa-laptop"></i>
								<span>Media Showcase</span>
							</div>
						</div>
						<div class="overlay"></div>
						<div class="swap-inner">
							<div class="ContentSwap104-center">
								<a href="#"><i data-cp-fa="true" class="portfolio-card-icon fa fa-search"></i></a>
							</div>
						</div>
					</div>
					<div class="portfolio-cards-projectinfo">
						<a href="#" class="portfolio-cards-projlink"><h4 class="portfolio-cards-projtitle">Point of Sale Terminal</h4></a>
					</div>
				</div>
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"portfolio-cards-projectcol"} -->
			<div class="wp-block-column portfolio-cards-projectcol">
				<div class="portfolio-cards-projectcard">
					<div class="contentswap-effect ContentSwap104" hover-fx="ContentSwap104">
						<div class="ContentSwap104_content initial-image">
							<div class="mh-mock-media-box">
								<i class="fa fa-mobile"></i>
								<span>Media Showcase</span>
							</div>
						</div>
						<div class="overlay"></div>
						<div class="swap-inner">
							<div class="ContentSwap104-center">
								<a href="#"><i data-cp-fa="true" class="portfolio-card-icon fa fa-search"></i></a>
							</div>
						</div>
					</div>
					<div class="portfolio-cards-projectinfo">
						<a href="#" class="portfolio-cards-projlink"><h4 class="portfolio-cards-projtitle">Mobile Companion App</h4></a>
					</div>
				</div>
			</div>
			<!-- /wp:column -->
		</div>
		<!-- /wp:columns -->

		<!-- wp:columns {"align":"wide","style":{"spacing":{"margin":{"top":"var:preset|spacing|6"}}}} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"className":"portfolio-cards-projectcol"} -->
			<div class="wp-block-column portfolio-cards-projectcol">
				<div class="portfolio-cards-projectcard">
					<div class="contentswap-effect ContentSwap104" hover-fx="ContentSwap104">
						<div class="ContentSwap104_content initial-image">
							<div class="mh-mock-media-box">
								<i class="fa fa-database"></i>
								<span>Media Showcase</span>
							</div>
						</div>
						<div class="overlay"></div>
						<div class="swap-inner">
							<div class="ContentSwap104-center">
								<a href="#"><i data-cp-fa="true" class="portfolio-card-icon fa fa-search"></i></a>
							</div>
						</div>
					</div>
					<div class="portfolio-cards-projectinfo">
						<a href="#" class="portfolio-cards-projlink"><h4 class="portfolio-cards-projtitle">Data Analytics Engine</h4></a>
					</div>
				</div>
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"portfolio-cards-projectcol"} -->
			<div class="wp-block-column portfolio-cards-projectcol">
				<div class="portfolio-cards-projectcard">
					<div class="contentswap-effect ContentSwap104" hover-fx="ContentSwap104">
						<div class="ContentSwap104_content initial-image">
							<div class="mh-mock-media-box">
								<i class="fa fa-code"></i>
								<span>Media Showcase</span>
							</div>
						</div>
						<div class="overlay"></div>
						<div class="swap-inner">
							<div class="ContentSwap104-center">
								<a href="#"><i data-cp-fa="true" class="portfolio-card-icon fa fa-search"></i></a>
							</div>
						</div>
					</div>
					<div class="portfolio-cards-projectinfo">
						<a href="#" class="portfolio-cards-projlink"><h4 class="portfolio-cards-projtitle">Quantum API Gateway</h4></a>
					</div>
				</div>
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"portfolio-cards-projectcol"} -->
			<div class="wp-block-column portfolio-cards-projectcol">
				<div class="portfolio-cards-projectcard">
					<div class="contentswap-effect ContentSwap104" hover-fx="ContentSwap104">
						<div class="ContentSwap104_content initial-image">
							<div class="mh-mock-media-box">
								<i class="fa fa-paint-brush"></i>
								<span>Media Showcase</span>
							</div>
						</div>
						<div class="overlay"></div>
						<div class="swap-inner">
							<div class="ContentSwap104-center">
								<a href="#"><i data-cp-fa="true" class="portfolio-card-icon fa fa-search"></i></a>
							</div>
						</div>
					</div>
					<div class="portfolio-cards-projectinfo">
						<a href="#" class="portfolio-cards-projlink"><h4 class="portfolio-cards-projtitle">Circadian Design System</h4></a>
					</div>
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

	'portfolio-full-section' => array(
		'id'       => 'portfolio-full-section',
		'name'     => __( 'Portfolio Full Width', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Edge-to-edge portfolio showcase with full-bleed hover overlays.', 'xophz-compass-magic-wand' ),
		'category' => 'portfolio',
		'icon'     => 'dashicons-portfolio',
		'color'    => '#a855f7',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-portfolio-full portfolio-full-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-portfolio-full portfolio-full-section">
	<!-- wp:columns {"align":"full"} -->
	<div class="wp-block-columns alignfull">
		<!-- wp:column {"className":"portfolio-full-projectcol"} -->
		<div class="wp-block-column portfolio-full-projectcol">
			<div class="contentswap-effect ContentSwap103" hover-fx="ContentSwap103">
				<div class="ContentSwap103_content initial-image">
					<div class="mh-mock-media-box">
						<i class="fa fa-picture-o"></i>
						<span>Media Showcase</span>
					</div>
				</div>
				<div class="overlay"></div>
				<div class="swap-inner">
					<div class="ContentSwap103-center">
						<h4 class="protfolio-full-itemtitle">Cloud Architecture</h4>
						<a class="button yellow" href="#">Check it out</a>
					</div>
				</div>
			</div>
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"className":"portfolio-full-projectcol"} -->
		<div class="wp-block-column portfolio-full-projectcol">
			<div class="contentswap-effect ContentSwap103" hover-fx="ContentSwap103">
				<div class="ContentSwap103_content initial-image">
					<div class="mh-mock-media-box">
						<i class="fa fa-picture-o"></i>
						<span>Media Showcase</span>
					</div>
				</div>
				<div class="overlay"></div>
				<div class="swap-inner">
					<div class="ContentSwap103-center">
						<h4 class="protfolio-full-itemtitle">Bazaar POS Integration</h4>
						<a class="button yellow" href="#">Check it out</a>
					</div>
				</div>
			</div>
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"className":"portfolio-full-projectcol"} -->
		<div class="wp-block-column portfolio-full-projectcol">
			<div class="contentswap-effect ContentSwap103" hover-fx="ContentSwap103">
				<div class="ContentSwap103_content initial-image">
					<div class="mh-mock-media-box">
						<i class="fa fa-picture-o"></i>
						<span>Media Showcase</span>
					</div>
				</div>
				<div class="overlay"></div>
				<div class="swap-inner">
					<div class="ContentSwap103-center">
						<h4 class="protfolio-full-itemtitle">Design Tokens Engine</h4>
						<a class="button yellow" href="#">Check it out</a>
					</div>
				</div>
			</div>
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->',
	),

	'full-width-gallery' => array(
		'id'       => 'full-width-gallery',
		'name'     => __( 'Full Width Gallery', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Seamless 4-column edge-to-edge media showcase.', 'xophz-compass-magic-wand' ),
		'category' => 'gallery',
		'icon'     => 'dashicons-format-gallery',
		'color'    => '#06b6d4',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-gallery-full full-width-gallery","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-gallery-full full-width-gallery">
	<!-- wp:columns {"align":"wide"} -->
	<div class="wp-block-columns alignwide">
		<!-- wp:column {"className":"gallery-item"} -->
		<div class="wp-block-column gallery-item">
			<div class="mh-mock-media-box">
				<i class="fa fa-picture-o"></i>
				<span>Gallery Item 1</span>
			</div>
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"className":"gallery-item"} -->
		<div class="wp-block-column gallery-item">
			<div class="mh-mock-media-box">
				<i class="fa fa-picture-o"></i>
				<span>Gallery Item 2</span>
			</div>
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"className":"gallery-item"} -->
		<div class="wp-block-column gallery-item">
			<div class="mh-mock-media-box">
				<i class="fa fa-picture-o"></i>
				<span>Gallery Item 3</span>
			</div>
		</div>
		<!-- /wp:column -->

		<!-- wp:column {"className":"gallery-item"} -->
		<div class="wp-block-column gallery-item">
			<div class="mh-mock-media-box">
				<i class="fa fa-picture-o"></i>
				<span>Gallery Item 4</span>
			</div>
		</div>
		<!-- /wp:column -->
	</div>
	<!-- /wp:columns -->
</div>
<!-- /wp:group -->',
	),

	'gallery-section' => array(
		'id'       => 'gallery-section',
		'name'     => __( 'Gallery Grid', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Curated 3-column media gallery with titles and category subtitles.', 'xophz-compass-magic-wand' ),
		'category' => 'gallery',
		'icon'     => 'dashicons-format-gallery',
		'color'    => '#06b6d4',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-gallery-grid gallery-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-gallery-grid gallery-section has-surface-section-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Visual Showcase</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">A curated selection of our recent projects and architectural systems</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column -->
			<div class="wp-block-column">
				<div class="gallery-card">
					<div class="mh-mock-media-box">
						<i class="fa fa-folder-open-o"></i>
						<span>Project Blueprint</span>
					</div>
					<div class="gallery-card-body">
						<h4 class="gallery-card-title">Modern Workspace</h4>
						<p class="gallery-card-category">Web Development</p>
					</div>
				</div>
			</div>
			<!-- /wp:column -->

			<!-- wp:column -->
			<div class="wp-block-column">
				<div class="gallery-card">
					<div class="mh-mock-media-box">
						<i class="fa fa-laptop"></i>
						<span>Device Mockup</span>
					</div>
					<div class="gallery-card-body">
						<h4 class="gallery-card-title">Mobile Platform</h4>
						<p class="gallery-card-category">UI/UX Design</p>
					</div>
				</div>
			</div>
			<!-- /wp:column -->

			<!-- wp:column -->
			<div class="wp-block-column">
				<div class="gallery-card">
					<div class="mh-mock-media-box">
						<i class="fa fa-cloud"></i>
						<span>Cloud Architecture</span>
					</div>
					<div class="gallery-card-body">
						<h4 class="gallery-card-title">Cloud Dashboard</h4>
						<p class="gallery-card-category">Systems Architecture</p>
					</div>
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

	'pricing-black-white-section' => array(
		'id'       => 'pricing-black-white-section',
		'name'     => __( 'Monochrome Pricing', 'xophz-compass-magic-wand' ),
		'desc'     => __( '3-column monochrome pricing tiers with high-contrast featured card.', 'xophz-compass-magic-wand' ),
		'category' => 'pricing',
		'icon'     => 'dashicons-layout',
		'color'    => '#2563eb',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-pricing-bw pricing-black-white-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-pricing-bw pricing-black-white-section has-surface-section-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Monochrome Pricing</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Simple, transparent pricing tiers with no hidden fees.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide","className":"mh-pricing-grid"} -->
		<div class="wp-block-columns alignwide mh-pricing-grid">
			<!-- wp:column {"className":"mh-pricing-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-pricing-card has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Starter</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","textColor":"text-heading","style":{"typography":{"fontSize":"2.25rem","fontWeight":"800"}}} -->
				<p class="has-text-align-center has-text-heading-color has-text-color" style="font-size:2.25rem;font-weight:800">$19 <span style="font-size:0.875rem;font-weight:400;color:var(--mh-color-text-muted)">/ mo</span></p>
				<!-- /wp:paragraph -->
				<!-- wp:list {"className":"mh-pricing-features"} -->
				<ul class="wp-block-list mh-pricing-features">
					<li><i class="fa fa-check"></i> 10 Projects</li>
					<li><i class="fa fa-check"></i> 5 GB Cloud Storage</li>
					<li><i class="fa fa-check"></i> Basic Analytics</li>
					<li><i class="fa fa-check"></i> Community Support</li>
				</ul>
				<!-- /wp:list -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","width":100} -->
					<div class="wp-block-button has-custom-width wp-block-button__width-100"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#starter">Select Starter</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-pricing-card mh-pricing-popular","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px","width":"2px","color":"#0f172a"}},"backgroundColor":"text-heading","textColor":"text-inverse"} -->
			<div class="wp-block-column mh-pricing-card mh-pricing-popular has-text-inverse-color has-text-heading-background-color has-text-color has-background">
				<!-- wp:paragraph {"align":"center","className":"mh-pricing-badge"} -->
				<p class="has-text-align-center mh-pricing-badge">Popular</p>
				<!-- /wp:paragraph -->
				<!-- wp:heading {"textAlign":"center","level":3,"textColor":"text-inverse"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-inverse-color has-text-color">Professional</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","textColor":"text-inverse","style":{"typography":{"fontSize":"2.25rem","fontWeight":"800"}}} -->
				<p class="has-text-align-center has-text-inverse-color has-text-color" style="font-size:2.25rem;font-weight:800">$49 <span style="font-size:0.875rem;font-weight:400;color:var(--mh-color-border)">/ mo</span></p>
				<!-- /wp:paragraph -->
				<!-- wp:list {"className":"mh-pricing-features"} -->
				<ul class="wp-block-list mh-pricing-features">
					<li><i class="fa fa-check"></i> Unlimited Projects</li>
					<li><i class="fa fa-check"></i> 50 GB Cloud Storage</li>
					<li><i class="fa fa-check"></i> Advanced Analytics</li>
					<li><i class="fa fa-check"></i> 24/7 Priority Support</li>
				</ul>
				<!-- /wp:list -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","width":100} -->
					<div class="wp-block-button has-custom-width wp-block-button__width-100"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#pro">Choose Pro</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-pricing-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-pricing-card has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Enterprise</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","textColor":"text-heading","style":{"typography":{"fontSize":"2.25rem","fontWeight":"800"}}} -->
				<p class="has-text-align-center has-text-heading-color has-text-color" style="font-size:2.25rem;font-weight:800">$99 <span style="font-size:0.875rem;font-weight:400;color:var(--mh-color-text-muted)">/ mo</span></p>
				<!-- /wp:paragraph -->
				<!-- wp:list {"className":"mh-pricing-features"} -->
				<ul class="wp-block-list mh-pricing-features">
					<li><i class="fa fa-check"></i> Custom Infrastructure</li>
					<li><i class="fa fa-check"></i> Unlimited Storage</li>
					<li><i class="fa fa-check"></i> Custom API Access</li>
					<li><i class="fa fa-check"></i> Dedicated Account Mgr</li>
				</ul>
				<!-- /wp:list -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
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
<!-- /wp:group -->',
	),

	'pricing-colors-section' => array(
		'id'       => 'pricing-colors-section',
		'name'     => __( 'Color Accented Pricing', 'xophz-compass-magic-wand' ),
		'desc'     => __( '3-column pricing table with vibrant accent colored card borders.', 'xophz-compass-magic-wand' ),
		'category' => 'pricing',
		'icon'     => 'dashicons-layout',
		'color'    => '#2563eb',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-pricing-colors pricing-colors-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-pricing-colors pricing-colors-section has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Flexible Plans</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Select the tier tailored to your workflow.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide","className":"mh-pricing-grid"} -->
		<div class="wp-block-columns alignwide mh-pricing-grid">
			<!-- wp:column {"className":"mh-pricing-card mh-pricing-card-brand","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-pricing-card mh-pricing-card-brand has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"textColor":"brand-hover"} -->
				<h3 class="wp-block-heading has-text-align-center has-brand-hover-color has-text-color">Basic</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","textColor":"text-heading","style":{"typography":{"fontSize":"2.25rem","fontWeight":"800"}}} -->
				<p class="has-text-align-center has-text-heading-color has-text-color" style="font-size:2.25rem;font-weight:800">$29 <span style="font-size:0.875rem;font-weight:400;color:var(--mh-color-text-muted)">/ mo</span></p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Ideal for solo creators and freelancers</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-hover","textColor":"text-inverse","width":100} -->
					<div class="wp-block-button has-custom-width wp-block-button__width-100"><a class="wp-block-button__link has-text-inverse-color has-brand-hover-background-color has-text-color has-background wp-element-button" href="#basic">Get Started</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-pricing-card mh-pricing-card-success","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-pricing-card mh-pricing-card-success has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"textColor":"brand-base"} -->
				<h3 class="wp-block-heading has-text-align-center has-brand-base-color has-text-color">Team</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","textColor":"text-heading","style":{"typography":{"fontSize":"2.25rem","fontWeight":"800"}}} -->
				<p class="has-text-align-center has-text-heading-color has-text-color" style="font-size:2.25rem;font-weight:800">$59 <span style="font-size:0.875rem;font-weight:400;color:var(--mh-color-text-muted)">/ mo</span></p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Designed for collaborating small teams</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","width":100} -->
					<div class="wp-block-button has-custom-width wp-block-button__width-100"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#team">Get Started</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-pricing-card mh-pricing-card-accent","style":{"spacing":{"padding":{"top":"var:preset|spacing|6","bottom":"var:preset|spacing|6","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-pricing-card mh-pricing-card-accent has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"textColor":"brand-active"} -->
				<h3 class="wp-block-heading has-text-align-center has-brand-active-color has-text-color">Business</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","textColor":"text-heading","style":{"typography":{"fontSize":"2.25rem","fontWeight":"800"}}} -->
				<p class="has-text-align-center has-text-heading-color has-text-color" style="font-size:2.25rem;font-weight:800">$119 <span style="font-size:0.875rem;font-weight:400;color:var(--mh-color-text-muted)">/ mo</span></p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Comprehensive tools for scaling brands</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-active","textColor":"text-inverse","width":100} -->
					<div class="wp-block-button has-custom-width wp-block-button__width-100"><a class="wp-block-button__link has-text-inverse-color has-brand-active-background-color has-text-color has-background wp-element-button" href="#business">Get Started</a></div>
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

	'pricing-double-colors-section' => array(
		'id'       => 'pricing-double-colors-section',
		'name'     => __( 'Four-Tier Feature Pricing', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Comprehensive 4-column pricing plan matrix for growing platforms.', 'xophz-compass-magic-wand' ),
		'category' => 'pricing',
		'icon'     => 'dashicons-layout',
		'color'    => '#2563eb',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-pricing-double pricing-double-colors-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-section","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-pricing-double pricing-double-colors-section has-surface-section-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Full Feature Comparison</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Four distinct tiers for every stage of growth.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide","className":"mh-pricing-grid"} -->
		<div class="wp-block-columns alignwide mh-pricing-grid">
			<!-- wp:column {"className":"mh-pricing-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|5","bottom":"var:preset|spacing|5","left":"var:preset|spacing|4","right":"var:preset|spacing|4"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-pricing-card has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":4,"textColor":"text-heading"} -->
				<h4 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Free</h4>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","textColor":"text-heading","style":{"typography":{"fontSize":"1.75rem","fontWeight":"800"}}} -->
				<p class="has-text-align-center has-text-heading-color has-text-color" style="font-size:1.75rem;font-weight:800">$0</p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Basic Starter</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"variant":"outline","width":100} -->
					<div class="wp-block-button has-custom-width wp-block-button__width-100 is-style-outline"><a class="wp-block-button__link wp-element-button" href="#free">Sign Up</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-pricing-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|5","bottom":"var:preset|spacing|5","left":"var:preset|spacing|4","right":"var:preset|spacing|4"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-pricing-card has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":4,"textColor":"text-heading"} -->
				<h4 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Pro</h4>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","textColor":"text-heading","style":{"typography":{"fontSize":"1.75rem","fontWeight":"800"}}} -->
				<p class="has-text-align-center has-text-heading-color has-text-color" style="font-size:1.75rem;font-weight:800">$35 <span style="font-size:0.875rem;font-weight:400;color:var(--mh-color-text-muted)">/ mo</span></p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Advanced Tools</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","width":100} -->
					<div class="wp-block-button has-custom-width wp-block-button__width-100"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#pro">Subscribe</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-pricing-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|5","bottom":"var:preset|spacing|5","left":"var:preset|spacing|4","right":"var:preset|spacing|4"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-pricing-card has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":4,"textColor":"text-heading"} -->
				<h4 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Plus</h4>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","textColor":"text-heading","style":{"typography":{"fontSize":"1.75rem","fontWeight":"800"}}} -->
				<p class="has-text-align-center has-text-heading-color has-text-color" style="font-size:1.75rem;font-weight:800">$75 <span style="font-size:0.875rem;font-weight:400;color:var(--mh-color-text-muted)">/ mo</span></p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Full Access</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse","width":100} -->
					<div class="wp-block-button has-custom-width wp-block-button__width-100"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#plus">Subscribe</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-pricing-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|5","bottom":"var:preset|spacing|5","left":"var:preset|spacing|4","right":"var:preset|spacing|4"}},"border":{"radius":"8px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-pricing-card has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":4,"textColor":"text-heading"} -->
				<h4 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Enterprise</h4>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","textColor":"text-heading","style":{"typography":{"fontSize":"1.75rem","fontWeight":"800"}}} -->
				<p class="has-text-align-center has-text-heading-color has-text-color" style="font-size:1.75rem;font-weight:800">Custom</p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"align":"center","textColor":"text-muted","fontSize":"sm"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color has-sm-font-size">Dedicated Scale</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"variant":"outline","width":100} -->
					<div class="wp-block-button has-custom-width wp-block-button__width-100 is-style-outline"><a class="wp-block-button__link wp-element-button" href="#enterprise">Contact</a></div>
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

	'pricing-simple-section' => array(
		'id'       => 'pricing-simple-section',
		'name'     => __( 'Dual Tier Simple Pricing', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'Two focused pricing options with standard and extended licenses.', 'xophz-compass-magic-wand' ),
		'category' => 'pricing',
		'icon'     => 'dashicons-layout',
		'color'    => '#2563eb',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-pricing-simple pricing-simple-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-pricing-simple pricing-simple-section has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Simple Pricing</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">No hidden fees, cancel anytime.</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide","className":"mh-pricing-grid"} -->
		<div class="wp-block-columns alignwide mh-pricing-grid">
			<!-- wp:column {"className":"mh-pricing-card","style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"12px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-pricing-card has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Standard License</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","textColor":"brand-base","style":{"typography":{"fontSize":"2.5rem","fontWeight":"800"}}} -->
				<p class="has-text-align-center has-brand-base-color has-text-color" style="font-size:2.5rem;font-weight:800">$49</p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"align":"center","textColor":"text-muted"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color">Single site usage, lifetime updates, and 1 year of support.</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse"} -->
					<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#purchase-standard">Purchase Now</a></div>
					<!-- /wp:button -->
				</div>
				<!-- /wp:buttons -->
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-pricing-card mh-pricing-card-highlight","style":{"spacing":{"padding":{"top":"var:preset|spacing|8","bottom":"var:preset|spacing|8","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}},"border":{"radius":"12px"}},"backgroundColor":"surface-card"} -->
			<div class="wp-block-column mh-pricing-card mh-pricing-card-highlight has-surface-card-background-color has-background">
				<!-- wp:heading {"textAlign":"center","level":3,"textColor":"text-heading"} -->
				<h3 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Extended License</h3>
				<!-- /wp:heading -->
				<!-- wp:paragraph {"align":"center","textColor":"brand-base","style":{"typography":{"fontSize":"2.5rem","fontWeight":"800"}}} -->
				<p class="has-text-align-center has-brand-base-color has-text-color" style="font-size:2.5rem;font-weight:800">$149</p>
				<!-- /wp:paragraph -->
				<!-- wp:paragraph {"align":"center","textColor":"text-muted"} -->
				<p class="has-text-align-center has-text-muted-color has-text-color">Unlimited sites usage, lifetime priority support, and multi-user access.</p>
				<!-- /wp:paragraph -->
				<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
				<div class="wp-block-buttons">
					<!-- wp:button {"backgroundColor":"brand-base","textColor":"text-inverse"} -->
					<div class="wp-block-button"><a class="wp-block-button__link has-text-inverse-color has-brand-base-background-color has-text-color has-background wp-element-button" href="#purchase-extended">Purchase Now</a></div>
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

	'woocommerce-section' => array(
		'id'       => 'woocommerce-section',
		'name'     => __( 'Products Showcase', 'xophz-compass-magic-wand' ),
		'desc'     => __( 'WooCommerce featured product grid with star ratings and cart actions.', 'xophz-compass-magic-wand' ),
		'category' => 'woocommerce',
		'icon'     => 'dashicons-cart',
		'color'    => '#9333ea',
		'source'   => 'classic',
		'content'  => '<!-- wp:group {"align":"full","className":"mh-section mh-section-full-width mh-section-woocommerce woocommerce-section","style":{"spacing":{"padding":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10","left":"var:preset|spacing|6","right":"var:preset|spacing|6"}}},"backgroundColor":"surface-body","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull mh-section mh-section-full-width mh-section-woocommerce woocommerce-section has-surface-body-background-color has-background">
	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide">
		<!-- wp:heading {"textAlign":"center","level":2,"textColor":"text-heading"} -->
		<h2 class="wp-block-heading has-text-align-center has-text-heading-color has-text-color">Featured Products</h2>
		<!-- /wp:heading -->
		<!-- wp:paragraph {"align":"center","textColor":"text-muted","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|8"}}}} -->
		<p class="has-text-align-center has-text-muted-color has-text-color">Explore best-selling items from our store</p>
		<!-- /wp:paragraph -->

		<!-- wp:columns {"align":"wide"} -->
		<div class="wp-block-columns alignwide">
			<!-- wp:column {"className":"mh-product-col"} -->
			<div class="wp-block-column mh-product-col">
				<div class="product-card mh-product-card">
					<div class="mh-mock-media-box">
						<i class="fa fa-shopping-bag"></i>
						<span>Product 1</span>
					</div>
					<div class="product-card-body">
						<h4 class="mh-product-title">Mechanical Keyboard</h4>
						<div class="mh-product-rating">
							<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
						</div>
						<div class="mh-product-price">$129.00</div>
						<a class="button blue mh-product-btn" href="#">Add to Cart</a>
					</div>
				</div>
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-product-col"} -->
			<div class="wp-block-column mh-product-col">
				<div class="product-card mh-product-card">
					<div class="mh-mock-media-box">
						<i class="fa fa-shopping-bag"></i>
						<span>Product 2</span>
					</div>
					<div class="product-card-body">
						<h4 class="mh-product-title">Wireless Earbuds</h4>
						<div class="mh-product-rating">
							<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>
						</div>
						<div class="mh-product-price">$89.00</div>
						<a class="button blue mh-product-btn" href="#">Add to Cart</a>
					</div>
				</div>
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-product-col"} -->
			<div class="wp-block-column mh-product-col">
				<div class="product-card mh-product-card">
					<div class="mh-mock-media-box">
						<i class="fa fa-shopping-bag"></i>
						<span>Product 3</span>
					</div>
					<div class="product-card-body">
						<h4 class="mh-product-title">Ultra-wide Display</h4>
						<div class="mh-product-rating">
							<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
						</div>
						<div class="mh-product-price">$499.00</div>
						<a class="button blue mh-product-btn" href="#">Add to Cart</a>
					</div>
				</div>
			</div>
			<!-- /wp:column -->

			<!-- wp:column {"className":"mh-product-col"} -->
			<div class="wp-block-column mh-product-col">
				<div class="product-card mh-product-card">
					<div class="mh-mock-media-box">
						<i class="fa fa-shopping-bag"></i>
						<span>Product 4</span>
					</div>
					<div class="product-card-body">
						<h4 class="mh-product-title">Ergonomic Chair</h4>
						<div class="mh-product-rating">
							<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
						</div>
						<div class="mh-product-price">$349.00</div>
						<a class="button blue mh-product-btn" href="#">Add to Cart</a>
					</div>
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
