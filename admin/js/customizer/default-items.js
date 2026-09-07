/**
 * Magic Wand Customizer - Default Archetype Items Provider
 *
 * Adheres to Quantum Engineering Standards (Protocol 1 & Protocol 4B).
 * Provides authentic template schemas with zero synthetic personal data or mock identities.
 *
 * @package Xophz_Compass_Magic_Wand
 */

(function(window) {
	'use strict';

	window.mhCustomizer = window.mhCustomizer || {};

	/**
	 * Retrieve default content items array for a specified section archetype.
	 *
	 * @param {string} type Archetype identifier slug.
	 * @return {Array<Object>} Array of default section item descriptors.
	 */
	function getDefaultItems(type) {
		var sectionType = type || '';

		switch (sectionType) {
			case 'features':
			case 'features-4col':
			case 'features-alt':
			case 'features-checklist':
			case 'features-bento':
				return [
					{ title: 'Ultra Fast Performance', desc: 'Engineered for sub-50ms render latency and fluid transitions across modern viewports.', icon: 'dashicons-performance', link: '#' },
					{ title: 'Modular Precision', desc: 'Atomic design architecture with strict zero-entropy token enforcement and verified layout hierarchy.', icon: 'dashicons-layout', link: '#' },
					{ title: 'Enterprise Security', desc: 'Built-in security boundary guards, automated auditing, and encrypted data flow workflows.', icon: 'dashicons-shield', link: '#' }
				];

			case 'testimonials':
			case 'testimonials-single':
			case 'clients':
			case 'case-study':
				return [
					{ name: 'Product Leader', role: 'Verified Enterprise Client', quote: 'Magic Hat transformed how we deploy and iterate on landing experiences. Seamless and lightning fast.', rating: 5, avatar: '' },
					{ name: 'Design Lead', role: 'Digital Studio Partner', quote: 'The modular quantum components and instant live previews save our team dozens of hours every sprint.', rating: 5, avatar: '' },
					{ name: 'Engineering Director', role: 'Cloud Platform Team', quote: 'Rock solid reliability. The Gutenberg block syncing without proprietary lock-in is a game changer.', rating: 5, avatar: '' }
				];

			case 'numbers':
			case 'numbers-split':
			case 'numbers-cards':
				return [
					{ value: '99.9%', label: 'Uptime Reliability' },
					{ value: '250+', label: 'Pre-built Patterns' },
					{ value: '<50ms', label: 'Render Latency' },
					{ value: '10x', label: 'Velocity Multiplier' }
				];

			case 'pricing':
			case 'pricing-flat':
			case 'pricing-table':
				return [
					{ name: 'Starter', price: '$29', period: '/mo', features: 'Up to 5 Projects\nCore Component Library\nCommunity Support\nMonthly Updates', btn_text: 'Get Started', btn_link: '#', is_popular: false },
					{ name: 'Professional', price: '$79', period: '/mo', features: 'Unlimited Projects\nFull Pattern Access\nPriority Support\nCustomizer Side Rails\nWeekly Sync', btn_text: 'Go Pro', btn_link: '#', is_popular: true },
					{ name: 'Enterprise', price: '$199', period: '/mo', features: 'Dedicated Architect\nCustom Pattern Conjuring\nSLA Guarantee\nMulti-network Deployment', btn_text: 'Contact Sales', btn_link: '#', is_popular: false }
				];

			case 'team':
			case 'team-split':
				return [
					{ name: 'Lead Architect', role: 'System Architecture', bio: 'Pioneering modular layout systems and distributed design systems.', photo: '', social: '#' },
					{ name: 'Systems Engineer', role: 'Core Infrastructure', bio: 'Specialist in low-latency rendering and headless WordPress infrastructures.', photo: '', social: '#' },
					{ name: 'Creative Director', role: 'Design Systems', bio: 'Crafting cosmic visual narratives and sleek futuristic interfaces.', photo: '', social: '#' }
				];

			case 'faq':
			case 'faq-accordion':
				return [
					{ question: 'How does the modular page builder work?', answer: 'Each section is an atomic, self-contained Gutenberg pattern that you can customize via the Side Rail or directly in the live preview canvas.' },
					{ question: 'Is my content tied to proprietary shortcodes?', answer: 'No. Magic Wand renders clean, native WordPress Gutenberg blocks directly into post_content with zero lock-in.' },
					{ question: 'Can I customize colors and spacing per section?', answer: 'Yes. Every section has dedicated Style & Layout controls in its side rail for backgrounds, padding, and width.' },
					{ question: 'How do navigation menu anchors connect to sections?', answer: 'Each section has a unique HTML Anchor (#slug). Simply link any menu item to that anchor for smooth scrolling.' }
				];

			case 'cta':
			case 'cta-newsletter':
			case 'cta-split':
				return [
					{ title: 'Ready to Accelerate Your Digital Presence?', desc: 'Synthesize lightning-fast modern websites with modular precision.', btn1_text: 'Get Started Now', btn1_link: '#', btn2_text: 'Schedule Demo', btn2_link: '#' }
				];

			case 'about':
			case 'about-values':
			case 'about-timeline':
			case 'about-quote':
				return [
					{ title: 'Engineering Clean Web Experiences', subtitle: 'Our Mission and Architecture Philosophy', body: 'We believe building websites should be as fluid as sketching, yet as robust as aerospace engineering. Every section delivers speed, accessibility, and elegance.', image: '' }
				];

			case 'contact':
			case 'contact-bar':
				return [
					{ address: 'Headquarters Location', phone: '', email: '', hours: 'Mon - Fri: 9:00 AM - 6:00 PM', shortcode: '[contact-form-7 id="1" title="Contact form"]' }
				];

			case 'hero':
			case 'hero-centered':
			case 'hero-editorial':
			case 'hero-app':
			case 'hero-video':
			case 'atom-countdown-hero':
				return [
					{ badge: 'MISSION COUNTDOWN ACTIVATED', headline: 'Next Generation Quantum Architecture', subtitle: 'Deploy reactive autonomous micro-frontends with Starship precision, sub-50ms latency, and zero configuration.', target_date: '2027-01-01T00:00:00Z', btn1_text: 'Initialize Terminal', btn1_link: '#', btn2_text: 'Explore Codex', btn2_link: '#' }
				];

			case 'about-big-images-section':
				return [
					{ title: 'Showcase Left', desc: 'Visual showcase overview' },
					{ title: 'Centerpiece Showcase', desc: 'Featured presentation showcase' },
					{ title: 'Showcase Right', desc: 'Supplementary media showcase' }
				];

			case 'atom-glassmorphic-features':
				return [
					{ title: 'Sub-50ms Latency', desc: 'Optimized tree-shaken bundles deliver instant frame renders and fluid 60fps animations.', chip: 'PERFORMANCE', btn_text: 'Documentation ->', link: '#' },
					{ title: 'Boundary Isolation', desc: 'Runtime sanitization guards, zero synthetic data enforcement, and encrypted synchronization.', chip: 'SECURITY', btn_text: 'Audit Report ->', link: '#' },
					{ title: 'Circadian Harmony', desc: 'OKLCH color-mix transitions breathing smoothly between High Noon, Golden Hour, and Astral Void.', chip: 'COLOR ENGINE', btn_text: 'Palette Studio ->', link: '#' }
				];

			case 'atom-quantum-pricing':
				return [
					{ name: 'Starter', price: '$29', period: '/mo', features: 'Up to 5 Projects\nCore Quantum Atoms\nCommunity Codex Access\nMonthly Feature Drops', btn_text: 'Get Started', btn_link: '#', is_popular: false },
					{ name: 'Professional', price: '$79', period: '/mo', features: 'Unlimited Projects\nComplete 67-Section Catalog\nPriority Customizer Sync\nReal-Time Preview Engineering', btn_text: 'Go Pro', btn_link: '#', is_popular: true },
					{ name: 'Enterprise', price: '$199', period: '/mo', features: 'Dedicated Systems Architect\nCustom Pattern Conjuring\n99.9% SLA Guarantee\nMulti-Cluster Deployments', btn_text: 'Contact Sales', btn_link: '#', is_popular: false }
				];

			default:
				return [
					{ title: 'Item 1', desc: 'Custom content description.' },
					{ title: 'Item 2', desc: 'Custom content description.' }
				];
		}
	}

	window.mhCustomizer.defaultItems = {
		getDefaultItems: getDefaultItems
	};

})(window);
