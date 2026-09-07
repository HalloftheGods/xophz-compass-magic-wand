/**
 * Magic Wand Customizer - Wireframes Engine
 *
 * Adheres to Quantum Engineering Standards (Protocol 1 & Protocol 5).
 * Generates lightweight vector SVG wireframe illustrations and category icons with zero external image dependencies.
 *
 * @package Xophz_Compass_Magic_Wand
 */

(function(window) {
	'use strict';

	window.mhCustomizer = window.mhCustomizer || {};

	/**
	 * Category Dashicon mapping.
	 */
	var catIconMap = {
		'all': 'dashicons-screenoptions',
		'hero': 'dashicons-format-image',
		'overlapable': 'dashicons-slides',
		'about': 'dashicons-id-alt',
		'features': 'dashicons-star-filled',
		'content': 'dashicons-text-page',
		'cta': 'dashicons-megaphone',
		'testimonials': 'dashicons-testimonial',
		'numbers': 'dashicons-chart-bar',
		'clients': 'dashicons-groups',
		'team': 'dashicons-businessman',
		'latest_news': 'dashicons-admin-post',
		'contact': 'dashicons-email-alt',
		'portfolio': 'dashicons-portfolio',
		'woocommerce': 'dashicons-cart',
		'gallery': 'dashicons-images-alt2',
		'pricing': 'dashicons-money-alt',
		'faq': 'dashicons-editor-help',
		'subscribe': 'dashicons-bell',
		'quantum-atoms': 'dashicons-superhero-alt'
	};

	/**
	 * Parse Gutenberg block markup to derive layout anatomy when not explicitly defined.
	 *
	 * @param {string} content Raw block markup string.
	 * @param {string} category Section category identifier.
	 * @return {Object} Structured anatomy descriptor.
	 */
	function deriveAnatomyFromContent(content, category) {
		var isOverlap = content.indexOf('mh-section-overlap') !== -1 || category === 'overlapable';
		var isColumns = content.indexOf('wp-block-columns') !== -1 || content.indexOf('<!-- wp:columns') !== -1;
		var columnMatches = content.match(/wp-block-column\b/g) || content.match(/<!-- wp:column\b/g) || [];
		var columnCount = columnMatches.length;

		var hasMedia = content.indexOf('wp-block-image') !== -1 || content.indexOf('dashicons-format-image') !== -1 || content.indexOf('wp:image') !== -1;
		var hasButtons = content.indexOf('wp-block-button') !== -1 || content.indexOf('wp:button') !== -1;
		var hasIcons = content.indexOf('fa-') !== -1 || content.indexOf('dashicons-') !== -1 || content.indexOf('fa ') !== -1;
		var hasBadge = content.indexOf('border-radius:9999px') !== -1 || content.indexOf('"radius":"9999px"') !== -1;
		var hasCards = content.indexOf('surface-card') !== -1 || content.indexOf('surface-section') !== -1;
		var isAccordion = content.indexOf('accordion') !== -1 || category === 'faq';

		// Determine dominant layout archetype
		var layout = 'content';
		if (category === 'hero' || content.indexOf('mh-section-hero') !== -1) {
			if (isOverlap || columnCount >= 3) {
				layout = 'hero-overlap';
			} else if (content.indexOf('hero-centered') !== -1 || columnCount === 0) {
				layout = 'hero-centered';
			} else {
				layout = 'split-right-media';
			}
		} else if (isOverlap) {
			layout = 'hero-overlap';
		} else if (isAccordion) {
			layout = 'faq';
		} else if (category === 'pricing' || content.indexOf('pricing') !== -1) {
			layout = 'pricing';
		} else if (category === 'testimonials' || content.indexOf('testimonial') !== -1) {
			layout = 'testimonials';
		} else if (category === 'numbers' || content.indexOf('number') !== -1 || content.indexOf('counter') !== -1) {
			layout = 'numbers';
		} else if (category === 'cta' || category === 'subscribe' || content.indexOf('subscribe') !== -1) {
			layout = 'cta';
		} else if (isColumns && columnCount > 1) {
			layout = 'grid';
		} else if (hasMedia) {
			layout = 'split-right-media';
		}

		return {
			layout: layout,
			columns: columnCount > 0 ? columnCount : (layout === 'grid' ? 3 : 1),
			isOverlap: isOverlap,
			hasMedia: hasMedia,
			hasButtons: hasButtons,
			hasIcons: hasIcons,
			hasBadge: hasBadge,
			hasCards: hasCards
		};
	}

	// 1. Hero Overlap (Hero with overlapping card columns on bottom border)
	function buildHeroOverlapSvg(c, columns, hasIcons, hasButtons) {
		var cols = columns && columns >= 2 ? Math.min(columns, 4) : 4;
		var colW = Math.floor((210 - (cols - 1) * 6) / cols);
		var svg = '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">';
		
		// Upper background hero area
		svg += '<rect x="15" y="6" width="210" height="34" rx="4" fill="#0f172a"/>';
		svg += '<rect x="25" y="14" width="70" height="8" rx="2" fill="#ffffff"/>';
		svg += '<rect x="25" y="26" width="95" height="4" rx="1.5" fill="#94a3b8"/>';
		svg += '<rect x="180" y="12" width="35" height="20" rx="3" fill="#1e293b" stroke="#334155"/>';

		// Overlapping bottom cards
		var startX = 15;
		for (var i = 0; i < cols; i++) {
			var x = startX + i * (colW + 6);
			svg += '<rect x="' + x + '" y="34" width="' + colW + '" height="45" rx="3" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>';
			if (hasIcons) {
				svg += '<circle cx="' + (x + Math.floor(colW / 2)) + '" cy="44" r="5" fill="' + c + '"/>';
				svg += '<rect x="' + (x + 4) + '" y="53" width="' + (colW - 8) + '" height="4" rx="1" fill="#0f172a"/>';
				svg += '<rect x="' + (x + 6) + '" y="60" width="' + (colW - 12) + '" height="3" rx="1" fill="#94a3b8"/>';
			} else {
				svg += '<rect x="' + (x + 4) + '" y="42" width="' + (colW - 8) + '" height="5" rx="1" fill="#0f172a"/>';
				svg += '<rect x="' + (x + 4) + '" y="51" width="' + (colW - 8) + '" height="3" rx="1" fill="#94a3b8"/>';
				svg += '<rect x="' + (x + 4) + '" y="57" width="' + Math.max(colW - 14, 8) + '" height="3" rx="1" fill="#cbd5e1"/>';
			}
			if (hasButtons) {
				svg += '<rect x="' + (x + 6) + '" y="67" width="' + (colW - 12) + '" height="6" rx="2" fill="' + c + '" fill-opacity="0.2"/>';
			}
		}

		svg += '</svg>';
		return svg;
	}

	// 2. Split Right Media (Headline & CTAs on left, image/mockup on right)
	function buildSplitRightSvg(c, hasBadge, hasButtons) {
		var svg = '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">';
		var textY = 16;

		if (hasBadge) {
			svg += '<rect x="15" y="12" width="45" height="6" rx="3" fill="' + c + '" fill-opacity="0.25"/>';
			textY = 22;
		}

		svg += '<rect x="15" y="' + textY + '" width="95" height="12" rx="3" fill="#0f172a"/>';
		svg += '<rect x="15" y="' + (textY + 16) + '" width="105" height="5" rx="1.5" fill="#94a3b8"/>';
		svg += '<rect x="15" y="' + (textY + 24) + '" width="75" height="5" rx="1.5" fill="#cbd5e1"/>';

		if (hasButtons) {
			svg += '<rect x="15" y="58" width="42" height="13" rx="3" fill="' + c + '"/>';
			svg += '<rect x="62" y="58" width="42" height="13" rx="3" fill="#e2e8f0"/>';
		}

		// Image container on right
		svg += '<rect x="135" y="14" width="90" height="58" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>';
		svg += '<circle cx="160" cy="33" r="7" fill="#93c5fd"/>';
		svg += '<path d="M140 65L165 44L180 56L195 42L220 65Z" fill="#60a5fa" fill-opacity="0.4"/>';

		svg += '</svg>';
		return svg;
	}

	// 3. Centered Impact Hero
	function buildCenteredHeroSvg(c, hasBadge, hasButtons) {
		var svg = '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">';
		var y = 12;

		if (hasBadge) {
			svg += '<rect x="95" y="' + y + '" width="50" height="7" rx="3" fill="' + c + '" fill-opacity="0.2"/>';
			y += 12;
		}

		svg += '<rect x="45" y="' + y + '" width="150" height="14" rx="3" fill="#0f172a"/>';
		svg += '<rect x="65" y="' + (y + 18) + '" width="110" height="5" rx="2" fill="#94a3b8"/>';
		svg += '<rect x="75" y="' + (y + 26) + '" width="90" height="5" rx="2" fill="#cbd5e1"/>';

		if (hasButtons) {
			svg += '<rect x="95" y="56" width="50" height="13" rx="4" fill="' + c + '"/>';
		}

		svg += '</svg>';
		return svg;
	}

	// 4. Multi-Column Grid (Cards / Features / Numbers)
	function buildGridSvg(c, columns, hasIcons, hasCards) {
		var cols = columns >= 2 ? Math.min(columns, 4) : 3;
		var colW = Math.floor((210 - (cols - 1) * 8) / cols);
		var svg = '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">';

		// Section header bar
		svg += '<rect x="85" y="10" width="70" height="6" rx="2" fill="#0f172a"/>';
		svg += '<rect x="98" y="18" width="44" height="4" rx="1.5" fill="#94a3b8"/>';

		var startX = 15;
		for (var i = 0; i < cols; i++) {
			var x = startX + i * (colW + 8);
			if (hasCards) {
				svg += '<rect x="' + x + '" y="28" width="' + colW + '" height="48" rx="4" fill="#ffffff" stroke="#e2e8f0"/>';
			}
			if (hasIcons) {
				svg += '<circle cx="' + (x + Math.floor(colW / 2)) + '" cy="38" r="6" fill="' + c + '"/>';
				svg += '<rect x="' + (x + 6) + '" y="49" width="' + (colW - 12) + '" height="5" rx="1" fill="#0f172a"/>';
				svg += '<rect x="' + (x + 4) + '" y="57" width="' + (colW - 8) + '" height="3" rx="1" fill="#94a3b8"/>';
				svg += '<rect x="' + (x + 8) + '" y="63" width="' + (colW - 16) + '" height="3" rx="1" fill="#cbd5e1"/>';
			} else {
				svg += '<rect x="' + (x + 6) + '" y="36" width="' + (colW - 12) + '" height="7" rx="1.5" fill="#0f172a"/>';
				svg += '<rect x="' + (x + 4) + '" y="47" width="' + (colW - 8) + '" height="4" rx="1" fill="#94a3b8"/>';
				svg += '<rect x="' + (x + 6) + '" y="54" width="' + (colW - 12) + '" height="3" rx="1" fill="#cbd5e1"/>';
				svg += '<rect x="' + (x + 8) + '" y="60" width="' + (colW - 16) + '" height="3" rx="1" fill="#cbd5e1"/>';
			}
		}

		svg += '</svg>';
		return svg;
	}

	// 5. Pricing Table (3 columns with highlighted center tier)
	function buildPricingSvg(c) {
		var svg = '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">';
		// Left Tier
		svg += '<rect x="15" y="16" width="62" height="55" rx="3" fill="#ffffff" stroke="#e2e8f0"/>';
		svg += '<rect x="22" y="23" width="30" height="5" rx="1.5" fill="#0f172a"/>';
		svg += '<rect x="22" y="32" width="20" height="8" rx="2" fill="' + c + '"/>';
		svg += '<rect x="22" y="46" width="48" height="3" rx="1" fill="#cbd5e1"/>';
		svg += '<rect x="22" y="58" width="48" height="7" rx="2" fill="#f1f5f9"/>';
		// Center Tier (Featured/Highlighted)
		svg += '<rect x="86" y="8" width="68" height="69" rx="4" fill="#eff6ff" stroke="' + c + '" stroke-width="1.5"/>';
		svg += '<rect x="94" y="18" width="35" height="5" rx="1.5" fill="#0f172a"/>';
		svg += '<rect x="94" y="28" width="26" height="9" rx="2" fill="' + c + '"/>';
		svg += '<rect x="94" y="44" width="52" height="3" rx="1" fill="#93c5fd"/>';
		svg += '<rect x="94" y="56" width="52" height="9" rx="2" fill="' + c + '"/>';
		// Right Tier
		svg += '<rect x="163" y="16" width="62" height="55" rx="3" fill="#ffffff" stroke="#e2e8f0"/>';
		svg += '<rect x="170" y="23" width="30" height="5" rx="1.5" fill="#0f172a"/>';
		svg += '<rect x="170" y="32" width="20" height="8" rx="2" fill="' + c + '"/>';
		svg += '<rect x="170" y="46" width="48" height="3" rx="1" fill="#cbd5e1"/>';
		svg += '<rect x="170" y="58" width="48" height="7" rx="2" fill="#f1f5f9"/>';
		svg += '</svg>';
		return svg;
	}

	// 6. Testimonials (Quotes with user avatar circles)
	function buildTestimonialsSvg(c) {
		var svg = '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">';
		// Card 1
		svg += '<rect x="15" y="14" width="98" height="58" rx="4" fill="#ffffff" stroke="#e2e8f0"/>';
		svg += '<circle cx="32" cy="30" r="8" fill="' + c + '"/>';
		svg += '<rect x="46" y="24" width="45" height="5" rx="1.5" fill="#0f172a"/>';
		svg += '<rect x="46" y="32" width="30" height="3" rx="1" fill="#94a3b8"/>';
		svg += '<rect x="25" y="45" width="78" height="4" rx="1" fill="#cbd5e1"/>';
		svg += '<rect x="25" y="52" width="55" height="4" rx="1" fill="#cbd5e1"/>';
		// Card 2
		svg += '<rect x="127" y="14" width="98" height="58" rx="4" fill="#ffffff" stroke="#e2e8f0"/>';
		svg += '<circle cx="144" cy="30" r="8" fill="#94a3b8"/>';
		svg += '<rect x="158" y="24" width="45" height="5" rx="1.5" fill="#0f172a"/>';
		svg += '<rect x="158" y="32" width="30" height="3" rx="1" fill="#94a3b8"/>';
		svg += '<rect x="137" y="45" width="78" height="4" rx="1" fill="#cbd5e1"/>';
		svg += '<rect x="137" y="52" width="55" height="4" rx="1" fill="#cbd5e1"/>';
		svg += '</svg>';
		return svg;
	}

	// 7. FAQ / Accordion Rows
	function buildFaqSvg(c) {
		var svg = '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">';
		var rows = [12, 34, 56];
		for (var i = 0; i < rows.length; i++) {
			var y = rows[i];
			svg += '<rect x="15" y="' + y + '" width="210" height="18" rx="3" fill="#ffffff" stroke="#e2e8f0"/>';
			svg += '<rect x="25" y="' + (y + 6) + '" width="' + (80 + i * 20) + '" height="6" rx="1.5" fill="#0f172a"/>';
			svg += '<circle cx="212" cy="' + (y + 9) + '" r="3" fill="' + c + '"/>';
		}
		svg += '</svg>';
		return svg;
	}

	// 8. CTA / Subscribe Bar
	function buildCtaSvg(c) {
		var svg = '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">';
		svg += '<rect x="15" y="12" width="210" height="61" rx="6" fill="#0f172a"/>';
		svg += '<rect x="35" y="22" width="100" height="9" rx="2" fill="#ffffff"/>';
		svg += '<rect x="35" y="35" width="120" height="4" rx="1.5" fill="#94a3b8"/>';
		svg += '<rect x="35" y="47" width="100" height="16" rx="3" fill="#ffffff" stroke="#334155"/>';
		svg += '<rect x="142" y="47" width="63" height="16" rx="3" fill="' + c + '"/>';
		svg += '</svg>';
		return svg;
	}

	// 9. Numbers / Stats KPIs
	function buildNumbersSvg(c) {
		var svg = '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">';
		var colW = 46;
		var startX = 15;
		for (var i = 0; i < 4; i++) {
			var x = startX + i * (colW + 8);
			svg += '<rect x="' + x + '" y="16" width="' + colW + '" height="53" rx="3" fill="#ffffff" stroke="#e2e8f0"/>';
			svg += '<rect x="' + (x + 8) + '" y="26" width="' + (colW - 16) + '" height="11" rx="2" fill="' + c + '"/>';
			svg += '<rect x="' + (x + 6) + '" y="44" width="' + (colW - 12) + '" height="4" rx="1" fill="#0f172a"/>';
			svg += '<rect x="' + (x + 10) + '" y="52" width="' + (colW - 20) + '" height="3" rx="1" fill="#94a3b8"/>';
		}
		svg += '</svg>';
		return svg;
	}

	/**
	 * Main Wireframe Resolution Pipeline
	 *
	 * @param {string|Object} sectionOrId Section ID string or full Section object.
	 * @param {string} [category] Section category slug.
	 * @param {string} [color] Accent color hex code.
	 * @return {string} Crisp, proportional inline SVG string.
	 */
	function getWireframeSvg(sectionOrId, category, color) {
		var section = (typeof sectionOrId === 'object' && sectionOrId !== null)
			? sectionOrId
			: { id: sectionOrId, category: category, color: color };

		var c = color || section.color || '#2563eb';
		var cat = category || section.category || 'content';
		var content = section.content || '';

		// Resolve structured anatomy (declared or derived)
		var anatomy = section.anatomy || deriveAnatomyFromContent(content, cat);
		var layout = anatomy.layout || 'content';

		switch (layout) {
			case 'hero-overlap':
				return buildHeroOverlapSvg(c, anatomy.columns || 4, anatomy.hasIcons !== false, anatomy.hasButtons !== false);

			case 'hero-centered':
				return buildCenteredHeroSvg(c, anatomy.hasBadge !== false, anatomy.hasButtons !== false);

			case 'split-right-media':
			case 'split-left-media':
				return buildSplitRightSvg(c, anatomy.hasBadge !== false, anatomy.hasButtons !== false);

			case 'grid':
			case 'features':
				return buildGridSvg(c, anatomy.columns || 3, anatomy.hasIcons !== false, anatomy.hasCards !== false);

			case 'pricing':
				return buildPricingSvg(c);

			case 'testimonials':
				return buildTestimonialsSvg(c);

			case 'faq':
				return buildFaqSvg(c);

			case 'cta':
			case 'subscribe':
				return buildCtaSvg(c);

			case 'numbers':
				return buildNumbersSvg(c);

			default:
				if (anatomy.columns && anatomy.columns > 1) {
					return buildGridSvg(c, anatomy.columns, anatomy.hasIcons, anatomy.hasCards);
				}
				return buildSplitRightSvg(c, anatomy.hasBadge, anatomy.hasButtons);
		}
	}

	window.mhCustomizer.wireframes = {
		catIconMap: catIconMap,
		getWireframeSvg: getWireframeSvg,
		deriveAnatomyFromContent: deriveAnatomyFromContent
	};

})(window);
