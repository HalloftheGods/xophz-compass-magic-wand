/**
 * Magic Wand Customizer - Side Rail (Screen 3) Engine
 *
 * Adheres to Quantum Engineering Standards (Protocol 1, Protocol 2A & Protocol 5A).
 * Native WordPress Customizer Third Controls Screen for fine-grained section customization.
 *
 * @package Xophz_Compass_Magic_Wand
 */

(function(window, $) {
	'use strict';

	window.mhCustomizer = window.mhCustomizer || {};
	var utils = window.mhCustomizer.utils;
	var defaultItems = window.mhCustomizer.defaultItems;
	var state = window.mhCustomizer.state;

	var api = null;
	var $sideRail = null;
	var currentSideRailIndex = null;
	var railMediaFrame = null;
	var sideRailDebounce = null;

	/**
	 * Initialize side rail engine.
	 *
	 * @param {Object} wpApi wp.customize instance.
	 */
	function init(wpApi) {
		api = wpApi;

		sideRailDebounce = utils.createDebounce(function() {
			var sections = state.getSections();
			state.saveSectionsQuiet(sections);
		}, 750);

		ensureSideRailElement();
		bindSideRailEvents();

		window.mhOpenSectionSideRail = openSectionSideRail;
	}

	/**
	 * Ensure the #mh-section-side-rail container element exists in the DOM.
	 */
	function ensureSideRailElement() {
		var $existing = $('#mh-section-side-rail');
		var $target = $('#customize-controls');

		if (!$target.length) {
			$target = $('.wp-full-overlay-sidebar');
		}
		if (!$target.length) {
			$target = $('#sub-accordion-section-mh_page_builder');
		}
		if (!$target.length) {
			$target = $('body');
		}

		if (!$existing.length) {
			$target.append('<div id="mh-section-side-rail" class="mh-section-side-rail"></div>');
		} else if ($existing.parent()[0] !== $target[0]) {
			$target.append($existing);
		}

		$sideRail = $('#mh-section-side-rail');
	}

	/**
	 * Open Section Settings Side Rail for a specific section index.
	 *
	 * @param {number} index Section row index.
	 * @param {Array}  [incomingElements] Living element outline from preview canvas.
	 */
	function openSectionSideRail(index, incomingElements) {
		var sections = state.getSections();

		// Stage 1: Validation Predicates
		var isNumber = typeof index === 'number';
		var isIndexInRange = isNumber && index >= 0 && index < sections.length;

		// Stage 2: Fallback Evaluation
		if (!isIndexInRange) {
			try {
				var raw = api(state.settingId) ? api(state.settingId).get() : '[]';
				var parsed = JSON.parse(raw);
				var hasParsedElements = Array.isArray(parsed) && parsed.length > index;
				if (hasParsedElements) {
					sections = parsed;
					state.setSectionsCache(state.getActivePageId(), parsed);
					isIndexInRange = true;
				}
			} catch (e) {
				// Parse fallback
			}
		}

		if (!isIndexInRange) return;

		currentSideRailIndex = index;
		ensureSideRailElement();
		renderSideRail(index, incomingElements);

		var hasPageBuilderSection = Boolean(api && api.section && api.section('mh_page_builder'));
		if (hasPageBuilderSection) {
			api.section('mh_page_builder').expand();
		}

		$sideRail.addClass('active');

		var section = sections[index];
		var anchor = (section.settings && section.settings.anchor) ? section.settings.anchor : utils.slugify(section.label || 'section');
		if (api && api.previewer) {
			api.previewer.send('mh-scroll-to', anchor);
		}
	}

	/**
	 * Close Section Settings Side Rail and return to Screen 2.
	 */
	function closeSectionSideRail() {
		if (sideRailDebounce) {
			sideRailDebounce.flush();
		}

		if ($sideRail) {
			$sideRail.removeClass('active');
		}
		currentSideRailIndex = null;

		if (window.mhCustomizer.sectionList && typeof window.mhCustomizer.sectionList.renderSectionList === 'function') {
			window.mhCustomizer.sectionList.renderSectionList();
		}
	}

	/**
	 * Render HTML for the Content Items repeater accordion.
	 *
	 * @param {Object} s Section descriptor.
	 * @return {string} Generated markup.
	 */
	function renderItemsManagerHtml(s) {
		var type = s.type || '';
		var items = s.items || [];
		var html =
			'<div class="mh-control-group">' +
				'<div class="mh-items-control-head">' +
					'<span class="mh-control-group-title">Content Items (' + items.length + ')</span>' +
					'<button type="button" class="button button-secondary button-small mh-rail-add-item-btn">+ Add Item</button>' +
				'</div>' +
				'<div class="mh-items-accordion">';

		items.forEach(function(item, idx) {
			var titlePreview = item.title || item.name || item.question || item.value || item.headline || 'Item ' + (idx + 1);
			html +=
				'<div class="mh-item-card" data-item-idx="' + idx + '">' +
					'<div class="mh-item-card-header">' +
						'<div class="mh-item-card-title-wrap">' +
							'<span class="dashicons dashicons-menu mh-item-drag-icon"></span>' +
							'<span class="mh-item-card-title">' + utils.escAttr(titlePreview) + '</span>' +
						'</div>' +
						'<div class="mh-item-card-actions">' +
							'<button type="button" class="mh-item-card-toggle" aria-expanded="true"><span class="dashicons dashicons-arrow-down-alt2"></span></button>' +
						'</div>' +
					'</div>' +
					'<div class="mh-item-card-body">';

			if (type.indexOf('feature') !== -1) {
				html +=
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Card Title</label>' +
						'<input type="text" class="mh-rail-input" data-prop="title" value="' + utils.escAttr(item.title || '') + '" />' +
					'</div>' +
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Description</label>' +
						'<textarea class="mh-rail-textarea" data-prop="desc">' + utils.escAttr(item.desc || '') + '</textarea>' +
					'</div>' +
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Dashicon Slug</label>' +
						'<input type="text" class="mh-rail-input" data-prop="icon" value="' + utils.escAttr(item.icon || 'dashicons-star-filled') + '" />' +
					'</div>' +
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Link URL</label>' +
						'<input type="text" class="mh-rail-input" data-prop="link" value="' + utils.escAttr(item.link || '#') + '" />' +
					'</div>';
			} else if (type.indexOf('testimonial') !== -1 || type === 'clients' || type === 'case-study') {
				html +=
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Author Name</label>' +
						'<input type="text" class="mh-rail-input" data-prop="name" value="' + utils.escAttr(item.name || '') + '" />' +
					'</div>' +
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Role / Company</label>' +
						'<input type="text" class="mh-rail-input" data-prop="role" value="' + utils.escAttr(item.role || '') + '" />' +
					'</div>' +
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Quote / Review</label>' +
						'<textarea class="mh-rail-textarea" data-prop="quote">' + utils.escAttr(item.quote || '') + '</textarea>' +
					'</div>';
			} else if (type.indexOf('number') !== -1) {
				html +=
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Metric Value (e.g. 99.9%, 10x)</label>' +
						'<input type="text" class="mh-rail-input" data-prop="value" value="' + utils.escAttr(item.value || '') + '" />' +
					'</div>' +
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Metric Description</label>' +
						'<input type="text" class="mh-rail-input" data-prop="label" value="' + utils.escAttr(item.label || '') + '" />' +
					'</div>';
			} else if (type.indexOf('pricing') !== -1) {
				html +=
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Plan Name</label>' +
						'<input type="text" class="mh-rail-input" data-prop="name" value="' + utils.escAttr(item.name || '') + '" />' +
					'</div>' +
					'<div class="mh-rail-field mh-rail-field-row">' +
						'<div class="mh-rail-field-col"><label class="mh-rail-label">Price</label><input type="text" class="mh-rail-input" data-prop="price" value="' + utils.escAttr(item.price || '$29') + '" /></div>' +
						'<div class="mh-rail-field-col"><label class="mh-rail-label">Period</label><input type="text" class="mh-rail-input" data-prop="period" value="' + utils.escAttr(item.period || '/mo') + '" /></div>' +
					'</div>' +
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Features (one per line)</label>' +
						'<textarea class="mh-rail-textarea" data-prop="features">' + utils.escAttr(item.features || '') + '</textarea>' +
					'</div>' +
					'<div class="mh-rail-field mh-rail-field-row">' +
						'<div class="mh-rail-field-col"><label class="mh-rail-label">Button Text</label><input type="text" class="mh-rail-input" data-prop="btn_text" value="' + utils.escAttr(item.btn_text || 'Get Started') + '" /></div>' +
						'<div class="mh-rail-field-col"><label class="mh-rail-label">Button Link</label><input type="text" class="mh-rail-input" data-prop="btn_link" value="' + utils.escAttr(item.btn_link || '#') + '" /></div>' +
					'</div>';
			} else if (type.indexOf('team') !== -1) {
				html +=
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Member Name</label>' +
						'<input type="text" class="mh-rail-input" data-prop="name" value="' + utils.escAttr(item.name || '') + '" />' +
					'</div>' +
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Role / Title</label>' +
						'<input type="text" class="mh-rail-input" data-prop="role" value="' + utils.escAttr(item.role || '') + '" />' +
					'</div>' +
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Short Bio</label>' +
						'<textarea class="mh-rail-textarea" data-prop="bio">' + utils.escAttr(item.bio || '') + '</textarea>' +
					'</div>';
			} else if (type.indexOf('faq') !== -1) {
				html +=
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Question</label>' +
						'<input type="text" class="mh-rail-input" data-prop="question" value="' + utils.escAttr(item.question || '') + '" />' +
					'</div>' +
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Answer</label>' +
						'<textarea class="mh-rail-textarea" data-prop="answer">' + utils.escAttr(item.answer || '') + '</textarea>' +
					'</div>';
			} else if (type.indexOf('cta') !== -1) {
				html +=
					'<div class="mh-rail-field mh-rail-field-row">' +
						'<div class="mh-rail-field-col"><label class="mh-rail-label">Primary Button</label><input type="text" class="mh-rail-input" data-prop="btn1_text" value="' + utils.escAttr(item.btn1_text || 'Get Started') + '" /></div>' +
						'<div class="mh-rail-field-col"><label class="mh-rail-label">Primary Link</label><input type="text" class="mh-rail-input" data-prop="btn1_link" value="' + utils.escAttr(item.btn1_link || '#') + '" /></div>' +
					'</div>' +
					'<div class="mh-rail-field mh-rail-field-row">' +
						'<div class="mh-rail-field-col"><label class="mh-rail-label">Secondary Button</label><input type="text" class="mh-rail-input" data-prop="btn2_text" value="' + utils.escAttr(item.btn2_text || 'Learn More') + '" /></div>' +
						'<div class="mh-rail-field-col"><label class="mh-rail-label">Secondary Link</label><input type="text" class="mh-rail-input" data-prop="btn2_link" value="' + utils.escAttr(item.btn2_link || '#') + '" /></div>' +
					'</div>';
			} else if (type.indexOf('contact') !== -1) {
				html +=
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Office Address</label>' +
						'<input type="text" class="mh-rail-input" data-prop="address" value="' + utils.escAttr(item.address || '') + '" />' +
					'</div>' +
					'<div class="mh-rail-field mh-rail-field-row">' +
						'<div class="mh-rail-field-col"><label class="mh-rail-label">Phone</label><input type="text" class="mh-rail-input" data-prop="phone" value="' + utils.escAttr(item.phone || '') + '" /></div>' +
						'<div class="mh-rail-field-col"><label class="mh-rail-label">Email</label><input type="text" class="mh-rail-input" data-prop="email" value="' + utils.escAttr(item.email || '') + '" /></div>' +
					'</div>' +
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Contact Form Shortcode</label>' +
						'<input type="text" class="mh-rail-input" data-prop="shortcode" value="' + utils.escAttr(item.shortcode || '[contact-form-7]') + '" />' +
					'</div>';
			} else {
				html +=
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Title</label>' +
						'<input type="text" class="mh-rail-input" data-prop="title" value="' + utils.escAttr(item.title || '') + '" />' +
					'</div>' +
					'<div class="mh-rail-field">' +
						'<label class="mh-rail-label">Description</label>' +
						'<textarea class="mh-rail-textarea" data-prop="desc">' + utils.escAttr(item.desc || '') + '</textarea>' +
					'</div>';
			}

			html +=
					'<div class="mh-item-card-footer">' +
						'<button type="button" class="button-link-delete mh-rail-item-delete-btn" data-item-idx="' + idx + '">Remove Item</button>' +
					'</div>' +
				'</div></div>';
		});

		html += '</div></div>';
		return html;
	}

	/**
	 * Render HTML for the Section Elements Navigator.
	 *
	 * @param {Object} s Section descriptor.
	 * @return {string} Generated markup.
	 */
	function renderElementsNavigatorHtml(s) {
		var elements = s.elements || [];
		if (!elements.length) {
			return (
				'<div class="mh-elements-nav-empty">' +
					'<span>Click anywhere directly on this section in the preview canvas to edit live.</span>' +
				'</div>'
			);
		}

		var html = '<div class="mh-elements-navigator-list">';
		elements.forEach(function(el) {
			var rawTag = (el.tag || 'item').toLowerCase();
			var tag = rawTag.toUpperCase();
			var tagClass = 'mh-element-tag-' + rawTag;
			if (rawTag === 'a' || (el.selector && el.selector.indexOf('button') !== -1)) {
				tag = 'BTN';
				tagClass = 'mh-element-tag-btn';
			}
			html +=
				'<button type="button" class="mh-element-nav-pill" data-selector="' + utils.escAttr(el.selector) + '" title="Click to scroll &amp; highlight in canvas">' +
					'<span class="mh-element-tag ' + tagClass + '">' + utils.escAttr(tag) + '</span>' +
					'<span class="mh-element-nav-text">' + utils.escAttr(el.text || 'Element') + '</span>' +
					'<span class="dashicons dashicons-arrow-right-alt2 mh-element-nav-arrow"></span>' +
				'</button>';
		});
		html += '</div>';
		return html;
	}

	/**
	 * Render the entire Side Rail Third Controls Screen.
	 *
	 * @param {number} index Target section index.
	 * @param {Array}  [incomingElements] Living element outline from preview canvas.
	 */
	function renderSideRail(index, incomingElements) {
		var sections = state.getSections();
		var s = sections[index];
		if (!s) {
			closeSectionSideRail();
			return;
		}

		if (incomingElements && Array.isArray(incomingElements)) {
			s.elements = incomingElements;
		}

		var availableSections = (window.mhMagicWand && window.mhMagicWand.sections) || [];
		var def = availableSections.find(function(sec) { return sec.id === s.type; }) || {
			name: 'Section',
			icon: 'dashicons-layout',
			color: '#2563eb'
		};

		s.settings = s.settings || {};
		s.items = s.items || [];
		s.edits = s.edits || {};

		var label = s.label || def.name;
		var anchor = s.settings.anchor || utils.slugify(label);
		var layout = s.settings.layout || 'boxed';
		var padTop = s.settings.padding_top || 'normal';
		var padBottom = s.settings.padding_bottom || 'normal';
		var bgType = s.settings.bg_type || 'default';
		var bgColor = s.settings.bg_color || '#2563eb';
		var bgImg = s.settings.bg_image || '';
		var textScheme = s.settings.text_scheme || 'auto';
		var customClasses = s.settings.classes || '';

		var isColorVisible = bgType === 'color';
		var isGradientVisible = bgType === 'gradient';
		var isImageVisible = bgType === 'image';

		var html =
			'<div class="mh-screen3-header customize-section-title">' +
				'<button type="button" class="mh-screen3-back-btn customize-section-back" tabindex="0" title="Back to Page Settings">' +
					'<span class="dashicons dashicons-arrow-left-alt2"></span>' +
					'<span class="screen-reader-text">Back</span>' +
				'</button>' +
				'<div class="mh-screen3-title-wrap">' +
					'<span class="mh-screen3-breadcrumb customize-action">Customizing &#9656; Page Settings</span>' +
					'<h3 class="mh-screen3-section-title">' + utils.escAttr(label) + '</h3>' +
				'</div>' +
			'</div>' +

			'<div class="mh-screen3-tabs">' +
				'<button type="button" class="mh-screen3-tab-btn active" data-tab="content"><span class="dashicons dashicons-edit"></span> Content</button>' +
				'<button type="button" class="mh-screen3-tab-btn" data-tab="style"><span class="dashicons dashicons-art"></span> Style &amp; Layout</button>' +
				'<button type="button" class="mh-screen3-tab-btn" data-tab="advanced"><span class="dashicons dashicons-admin-generic"></span> Advanced</button>' +
			'</div>' +

			'<div class="mh-screen3-body">' +
				// Tab 1: Content
				'<div class="mh-rail-tab-pane active" id="mh-pane-content">' +
					'<div class="mh-canvas-guide-box">' +
						'<div class="mh-canvas-guide-header">' +
							'<span class="dashicons dashicons-edit-page mh-canvas-guide-icon"></span>' +
							'<span>Direct Canvas Editing</span>' +
						'</div>' +
						'<p class="mh-canvas-guide-desc">Click directly on any heading, paragraph, button, or image in the preview canvas to edit live.</p>' +
					'</div>' +

					'<div class="mh-control-group">' +
						'<div class="mh-control-group-title">Section Elements Navigator</div>' +
						'<p class="mh-control-field-desc">Select an element to scroll and focus it on the live canvas:</p>' +
						renderElementsNavigatorHtml(s) +
					'</div>' +

					'<div class="mh-control-group">' +
						'<div class="mh-control-group-title">Section Identity</div>' +
						'<div class="mh-control-field">' +
							'<label class="mh-control-field-title">Section Label</label>' +
							'<input type="text" class="mh-control-input mh-rail-label-input" value="' + utils.escAttr(label) + '" placeholder="Section Label" />' +
							'<p class="mh-control-field-desc">Identifier shown in the section list and outline.</p>' +
						'</div>' +
					'</div>' +

					(s.type && s.type.indexOf('countdown') !== -1 ?
						'<div class="mh-control-group">' +
							'<div class="mh-control-group-title">Countdown Applet</div>' +
							'<div class="mh-control-field">' +
								'<label class="mh-control-field-title">Target Date &amp; Time (ISO 8601)</label>' +
								'<input type="text" class="mh-control-input mh-rail-target-date-input" value="' + utils.escAttr(s.settings.target_date || '2027-01-01T00:00:00Z') + '" placeholder="2027-01-01T00:00:00Z" />' +
							'</div>' +
						'</div>' : '') +

					(s.items && s.items.length ? renderItemsManagerHtml(s) : '') +
				'</div>' +

				// Tab 2: Style & Layout
				'<div class="mh-rail-tab-pane" id="mh-pane-style">' +
					'<div class="mh-control-group">' +
						'<div class="mh-control-group-title">Container Width</div>' +
						'<div class="mh-btn-group">' +
							'<button type="button" class="button mh-width-opt' + (layout === 'boxed' ? ' active' : '') + '" data-layout="boxed">Boxed (1200px)</button>' +
							'<button type="button" class="button mh-width-opt' + (layout === 'full' ? ' active' : '') + '" data-layout="full">Full Width (100%)</button>' +
						'</div>' +
					'</div>' +

					'<div class="mh-control-group">' +
						'<div class="mh-control-group-title">Section Spacing</div>' +
						'<div class="mh-control-field">' +
							'<label class="mh-control-field-title">Top Padding</label>' +
							'<div class="mh-btn-group">' +
								'<button type="button" class="button mh-pad-top-opt' + (padTop === 'compact' ? ' active' : '') + '" data-val="compact">Compact (32px)</button>' +
								'<button type="button" class="button mh-pad-top-opt' + (padTop === 'normal' ? ' active' : '') + '" data-val="normal">Normal (64px)</button>' +
								'<button type="button" class="button mh-pad-top-opt' + (padTop === 'spacious' ? ' active' : '') + '" data-val="spacious">Spacious (96px)</button>' +
								'<button type="button" class="button mh-pad-top-opt' + (padTop === 'extra' ? ' active' : '') + '" data-val="extra">Extra (128px)</button>' +
							'</div>' +
						'</div>' +
						'<div class="mh-control-field">' +
							'<label class="mh-control-field-title">Bottom Padding</label>' +
							'<div class="mh-btn-group">' +
								'<button type="button" class="button mh-pad-bottom-opt' + (padBottom === 'compact' ? ' active' : '') + '" data-val="compact">Compact (32px)</button>' +
								'<button type="button" class="button mh-pad-bottom-opt' + (padBottom === 'normal' ? ' active' : '') + '" data-val="normal">Normal (64px)</button>' +
								'<button type="button" class="button mh-pad-bottom-opt' + (padBottom === 'spacious' ? ' active' : '') + '" data-val="spacious">Spacious (96px)</button>' +
								'<button type="button" class="button mh-pad-bottom-opt' + (padBottom === 'extra' ? ' active' : '') + '" data-val="extra">Extra (128px)</button>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="mh-control-group">' +
						'<div class="mh-control-group-title">Background Styling</div>' +
						'<div class="mh-control-field">' +
							'<label class="mh-control-field-title">Background Type</label>' +
							'<select class="mh-control-select mh-bg-type-select">' +
								'<option value="default"' + (bgType === 'default' ? ' selected' : '') + '>Default (Theme Body Background)</option>' +
								'<option value="surface"' + (bgType === 'surface' ? ' selected' : '') + '>Surface Card / Alt Surface</option>' +
								'<option value="color"' + (bgType === 'color' ? ' selected' : '') + '>Solid Custom Color</option>' +
								'<option value="gradient"' + (bgType === 'gradient' ? ' selected' : '') + '>Gradient Preset</option>' +
								'<option value="image"' + (bgType === 'image' ? ' selected' : '') + '>Background Image</option>' +
							'</select>' +
						'</div>' +

						'<div class="mh-bg-color-wrap mh-control-field' + (isColorVisible ? '' : ' is-hidden') + '">' +
							'<label class="mh-control-field-title">Custom Background Color</label>' +
							'<input type="color" class="mh-control-input mh-bg-color-input mh-color-input" value="' + utils.escAttr(bgColor) + '" />' +
							'<div class="mh-rail-color-swatches">' +
								'<button type="button" class="mh-rail-color-swatch" data-color="#2563eb" style="--mh-swatch-color: #2563eb;" title="Brand Cyan"></button>' +
								'<button type="button" class="mh-rail-color-swatch" data-color="#0f172a" style="--mh-swatch-color: #0f172a;" title="Dark Slate"></button>' +
								'<button type="button" class="mh-rail-color-swatch" data-color="#1e293b" style="--mh-swatch-color: #1e293b;" title="Navy Surface"></button>' +
								'<button type="button" class="mh-rail-color-swatch" data-color="#f8fafc" style="--mh-swatch-color: #f8fafc;" title="Light Surface"></button>' +
								'<button type="button" class="mh-rail-color-swatch" data-color="#ffffff" style="--mh-swatch-color: #ffffff;" title="Pure White"></button>' +
								'<button type="button" class="mh-rail-color-swatch" data-color="#ff3366" style="--mh-swatch-color: #ff3366;" title="Neon Accent"></button>' +
								'<button type="button" class="mh-rail-color-swatch" data-color="#10b981" style="--mh-swatch-color: #10b981;" title="Emerald Success"></button>' +
							'</div>' +
						'</div>' +

						'<div class="mh-bg-gradient-wrap mh-control-field' + (isGradientVisible ? '' : ' is-hidden') + '">' +
							'<label class="mh-control-field-title">Gradient Presets</label>' +
							'<div class="mh-grad-grid">' +
								'<button type="button" class="button mh-rail-grad-btn mh-grad-btn" data-grad="linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)" style="--mh-grad-val: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);">Cosmic Cyan</button>' +
								'<button type="button" class="button mh-rail-grad-btn mh-grad-btn" data-grad="linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" style="--mh-grad-val: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);">Dark Slate</button>' +
								'<button type="button" class="button mh-rail-grad-btn mh-grad-btn" data-grad="linear-gradient(135deg, #ff3366 0%, #ff6b3d 100%)" style="--mh-grad-val: linear-gradient(135deg, #ff3366 0%, #ff6b3d 100%);">Sunset Flare</button>' +
								'<button type="button" class="button mh-rail-grad-btn mh-grad-btn" data-grad="linear-gradient(135deg, #064e3b 0%, #065f46 100%)" style="--mh-grad-val: linear-gradient(135deg, #064e3b 0%, #065f46 100%);">Deep Emerald</button>' +
							'</div>' +
						'</div>' +

						'<div class="mh-bg-image-wrap mh-control-field' + (isImageVisible ? '' : ' is-hidden') + '">' +
							'<label class="mh-control-field-title">Background Image</label>' +
							'<div class="mh-rail-media-wrap">' +
								'<img class="mh-rail-media-preview mh-bg-img-preview" src="' + utils.escAttr(bgImg || 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' fill=\'%23cbd5e1\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z\'/%3E%3C/svg%3E') + '" />' +
								'<div class="mh-rail-field-col">' +
									'<button type="button" class="button button-secondary button-small mh-choose-bg-img-btn">Select Image</button>' +
									(bgImg ? ' <button type="button" class="button-link-delete mh-remove-bg-img-btn">Remove</button>' : '') +
									'<input type="hidden" class="mh-bg-img-input" value="' + utils.escAttr(bgImg) + '" />' +
								'</div>' +
							'</div>' +
						'</div>' +

						'<div class="mh-control-field">' +
							'<label class="mh-control-field-title">Text Color Scheme</label>' +
							'<div class="mh-btn-group">' +
								'<button type="button" class="button mh-text-scheme-opt' + (textScheme === 'auto' ? ' active' : '') + '" data-val="auto">Auto</button>' +
								'<button type="button" class="button mh-text-scheme-opt' + (textScheme === 'dark' ? ' active' : '') + '" data-val="dark">Dark Text</button>' +
								'<button type="button" class="button mh-text-scheme-opt' + (textScheme === 'light' ? ' active' : '') + '" data-val="light">Light Text</button>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +

				// Tab 3: Advanced
				'<div class="mh-rail-tab-pane" id="mh-pane-advanced">' +
					'<div class="mh-control-group">' +
						'<div class="mh-control-group-title">Navigation Anchor</div>' +
						'<div class="mh-control-field">' +
							'<label class="mh-control-field-title">Section ID / Anchor</label>' +
							'<div class="mh-anchor-input-wrap">' +
								'<span class="mh-anchor-prefix">#</span>' +
								'<input type="text" class="mh-control-input mh-rail-anchor-input" value="' + utils.escAttr(anchor) + '" placeholder="section-id" />' +
							'</div>' +
							'<p class="mh-control-field-desc">Use this ID to link menu items directly to this section with smooth scrolling (e.g. <code>#' + utils.escAttr(anchor) + '</code>).</p>' +
						'</div>' +
					'</div>' +

					'<div class="mh-control-group">' +
						'<div class="mh-control-group-title">Custom Styling Classes</div>' +
						'<div class="mh-control-field">' +
							'<label class="mh-control-field-title">Additional CSS Classes</label>' +
							'<input type="text" class="mh-control-input mh-rail-classes-input" value="' + utils.escAttr(customClasses) + '" placeholder="my-custom-class another-class" />' +
						'</div>' +
					'</div>' +

					'<div class="mh-control-group">' +
						'<div class="mh-control-group-title">Responsive Display</div>' +
						'<div class="mh-control-field mh-responsive-field">' +
							'<label class="mh-responsive-label">' +
								'<input type="checkbox" class="mh-rail-hide-mobile" ' + (s.settings.hide_mobile ? 'checked' : '') + ' /> Hide on Mobile devices' +
							'</label>' +
							'<label class="mh-responsive-label">' +
								'<input type="checkbox" class="mh-rail-hide-desktop" ' + (s.settings.hide_desktop ? 'checked' : '') + ' /> Hide on Desktop devices' +
							'</label>' +
						'</div>' +
					'</div>' +
				'</div>' +

				// Footer Actions
				'<div class="mh-screen3-footer">' +
					'<div class="mh-screen3-reorder-group">' +
						'<button type="button" class="button button-secondary mh-rail-move-up" title="Move Up"' + (index === 0 ? ' disabled' : '') + '><span class="dashicons dashicons-arrow-up-alt2"></span> Move Up</button>' +
						'<button type="button" class="button button-secondary mh-rail-move-down" title="Move Down"' + (index === sections.length - 1 ? ' disabled' : '') + '><span class="dashicons dashicons-arrow-down-alt2"></span> Move Down</button>' +
						'<button type="button" class="button button-secondary mh-rail-duplicate" title="Duplicate Section"><span class="dashicons dashicons-admin-page"></span> Duplicate</button>' +
					'</div>' +
					'<button type="button" class="button-link-delete mh-screen3-delete-btn mh-rail-delete" title="Delete Section"><span class="dashicons dashicons-trash"></span> Delete Section</button>' +
				'</div>' +
			'</div>';

		$sideRail.html(html);
	}

	/**
	 * Extract changes from side rail inputs and synchronize with preview and state.
	 *
	 * @param {boolean} immediateSave Whether to save immediately or use debounced sync.
	 */
	function syncCurrentSideRailChanges(immediateSave) {
		if (currentSideRailIndex === null) return;

		var sections = state.getSections();
		var s = sections[currentSideRailIndex];
		if (!s) return;

		s.settings = s.settings || {};
		s.items = s.items || [];

		// Section Identity
		var newLabel = $sideRail.find('.mh-rail-label-input').val();
		if (newLabel) {
			s.label = newLabel;
			$sideRail.find('.mh-screen3-section-title').text(s.label);
			$('#mh_page_rows .mh-section-item[data-index="' + currentSideRailIndex + '"] .mh-section-title-text').text(s.label);
		}

		// Countdown Target Date
		if (s.type && s.type.indexOf('countdown') !== -1) {
			s.settings.target_date = $sideRail.find('.mh-rail-target-date-input').val() || '';
		}

		// Layout
		s.settings.layout = $sideRail.find('.mh-width-opt.active').data('layout') || 'boxed';
		var anchorSlug = s.settings.anchor || utils.slugify(s.label || 'section');
		var layoutText = s.settings.layout === 'full' ? 'Full Width' : 'Boxed';
		$('#mh_page_rows .mh-section-item[data-index="' + currentSideRailIndex + '"] .mh-section-meta-text').text(
			'#' + anchorSlug + ' \u2022 ' + layoutText
		);

		// Padding & Background
		s.settings.padding_top = $sideRail.find('.mh-pad-top-opt.active').data('val') || 'normal';
		s.settings.padding_bottom = $sideRail.find('.mh-pad-bottom-opt.active').data('val') || 'normal';
		s.settings.bg_type = $sideRail.find('.mh-bg-type-select').val() || 'default';
		s.settings.bg_color = $sideRail.find('.mh-bg-color-input').val() || '#2563eb';
		s.settings.bg_image = $sideRail.find('.mh-bg-img-input').val() || '';
		s.settings.text_scheme = $sideRail.find('.mh-text-scheme-opt.active').data('val') || 'auto';

		// Advanced
		s.settings.anchor = utils.slugify($sideRail.find('.mh-rail-anchor-input').val() || s.label || 'section');
		s.settings.classes = $sideRail.find('.mh-rail-classes-input').val() || '';
		s.settings.hide_mobile = $sideRail.find('.mh-rail-hide-mobile').is(':checked');
		s.settings.hide_desktop = $sideRail.find('.mh-rail-hide-desktop').is(':checked');

		// Items (only if configured)
		if (s.items && s.items.length) {
			$sideRail.find('.mh-item-card, .mh-rail-item-card').each(function() {
				var itemIdx = $(this).data('item-idx');
				if (typeof itemIdx === 'number' && s.items[itemIdx]) {
					var item = s.items[itemIdx];
					$(this).find('input[data-prop], textarea[data-prop]').each(function() {
						var prop = $(this).data('prop');
						item[prop] = $(this).val();
					});
					var cardTitle = item.title || item.name || item.question || item.value || item.headline || 'Item ' + (itemIdx + 1);
					$(this).find('.mh-item-card-title, .mh-rail-item-header-title').text(cardTitle);
				}
			});
		}

		// Live preview synchronization
		if (api && api.previewer) {
			api.previewer.send('mh-update-section-preview', {
				index: currentSideRailIndex,
				section: s
			});
		}

		if (immediateSave) {
			if (sideRailDebounce) {
				sideRailDebounce.cancel();
			}
			state.saveSectionsQuiet(sections);
		} else if (sideRailDebounce) {
			sideRailDebounce.run();
		}
	}

	/**
	 * Attach event listeners to side rail controls.
	 */
	function bindSideRailEvents() {
		// Navigation
		$('body').on('click', '.mh-screen3-back-btn, .mh-side-rail-back-btn', function(e) {
			e.preventDefault();
			closeSectionSideRail();
		});

		$('body').on('click', '.mh-screen3-tab-btn, .mh-side-rail-tab-btn', function(e) {
			e.preventDefault();
			var tab = $(this).data('tab');
			$sideRail.find('.mh-screen3-tab-btn, .mh-side-rail-tab-btn').removeClass('active');
			$(this).addClass('active');
			$sideRail.find('.mh-rail-tab-pane').removeClass('active');
			$sideRail.find('#mh-pane-' + tab).addClass('active');
		});

		// Element Navigator: scroll & highlight element on live preview canvas
		$('body').on('click', '.mh-element-nav-pill', function(e) {
			e.preventDefault();
			var selector = $(this).data('selector');
			if (api && api.previewer && currentSideRailIndex !== null) {
				api.previewer.send('mh-focus-element', {
					index: currentSideRailIndex,
					selector: selector
				});
			}
		});

		// Items Accordion
		$('body').on('click', '.mh-item-card-header, .mh-rail-item-header', function(e) {
			var isDeleteBtn = Boolean($(e.target).closest('.mh-rail-item-delete-btn, .button-link-delete').length);
			if (isDeleteBtn) return;

			var $card = $(this).closest('.mh-item-card, .mh-rail-item-card');
			$card.toggleClass('collapsed');
			var isCollapsed = $card.hasClass('collapsed');
			$card.find('.mh-item-card-toggle').attr('aria-expanded', isCollapsed ? 'false' : 'true');
		});

		$('body').on('click', '.mh-rail-item-delete-btn', function(e) {
			e.stopPropagation();
			var itemIdx = $(this).data('item-idx');
			var sections = state.getSections();
			var s = sections[currentSideRailIndex];
			if (s && s.items && typeof itemIdx === 'number') {
				s.items.splice(itemIdx, 1);
				state.saveSectionsQuiet(sections);
				renderSideRail(currentSideRailIndex);
				if (api && api.previewer) {
					api.previewer.send('mh-update-section-preview', {
						index: currentSideRailIndex,
						section: s
					});
				}
			}
		});

		$('body').on('click', '.mh-rail-add-item-btn', function(e) {
			e.preventDefault();
			var sections = state.getSections();
			var s = sections[currentSideRailIndex];
			if (s) {
				s.items = s.items || [];
				s.items.push({ title: 'New Item', desc: 'Description of this new feature or item.' });
				state.saveSectionsQuiet(sections);
				renderSideRail(currentSideRailIndex);
				if (api && api.previewer) {
					api.previewer.send('mh-update-section-preview', {
						index: currentSideRailIndex,
						section: s
					});
				}
			}
		});

		// Options
		$('body').on('click', '.mh-width-opt', function(e) {
			e.preventDefault();
			$(this).siblings('.mh-width-opt').removeClass('active');
			$(this).addClass('active');
			syncCurrentSideRailChanges(true);
		});

		$('body').on('click', '.mh-pad-top-opt, .mh-pad-bottom-opt', function(e) {
			e.preventDefault();
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			syncCurrentSideRailChanges(true);
		});

		$('body').on('click', '.mh-text-scheme-opt', function(e) {
			e.preventDefault();
			$(this).siblings('.mh-text-scheme-opt').removeClass('active');
			$(this).addClass('active');
			syncCurrentSideRailChanges(true);
		});

		$('body').on('change', '.mh-bg-type-select', function() {
			var val = $(this).val();
			$sideRail.find('.mh-bg-color-wrap, .mh-bg-gradient-wrap, .mh-bg-image-wrap').addClass('is-hidden').hide();
			if (val === 'color') $sideRail.find('.mh-bg-color-wrap').removeClass('is-hidden').show();
			if (val === 'gradient') $sideRail.find('.mh-bg-gradient-wrap').removeClass('is-hidden').show();
			if (val === 'image') $sideRail.find('.mh-bg-image-wrap').removeClass('is-hidden').show();
			syncCurrentSideRailChanges(true);
		});

		$('body').on('click', '.mh-rail-color-swatch', function(e) {
			e.preventDefault();
			var color = $(this).data('color');
			$sideRail.find('.mh-bg-color-input').val(color);
			syncCurrentSideRailChanges(true);
		});

		$('body').on('click', '.mh-rail-grad-btn', function(e) {
			e.preventDefault();
			var grad = $(this).data('grad');
			var sections = state.getSections();
			if (sections[currentSideRailIndex]) {
				sections[currentSideRailIndex].settings = sections[currentSideRailIndex].settings || {};
				sections[currentSideRailIndex].settings.bg_gradient = grad;
				syncCurrentSideRailChanges(true);
			}
		});

		// Media Frame
		$('body').on('click', '.mh-choose-bg-img-btn', function(e) {
			e.preventDefault();
			if (railMediaFrame) {
				railMediaFrame.open();
				return;
			}
			railMediaFrame = wp.media({
				title: 'Select Background Image',
				button: { text: 'Use Image' },
				multiple: false
			});
			railMediaFrame.on('select', function() {
				var attachment = railMediaFrame.state().get('selection').first().toJSON();
				$sideRail.find('.mh-bg-img-input').val(attachment.url);
				$sideRail.find('.mh-bg-img-preview').attr('src', attachment.url);
				syncCurrentSideRailChanges(true);
			});
			railMediaFrame.open();
		});

		$('body').on('click', '.mh-remove-bg-img-btn', function(e) {
			e.preventDefault();
			$sideRail.find('.mh-bg-img-input').val('');
			$sideRail.find('.mh-bg-img-preview').attr('src', 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' fill=\'%23cbd5e1\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z\'/%3E%3C/svg%3E');
			$(this).remove();
			syncCurrentSideRailChanges(true);
		});

		// Header Reorder & Actions
		$('body').on('click', '.mh-rail-move-up', function(e) {
			e.preventDefault();
			if (currentSideRailIndex > 0) {
				var sections = state.getSections();
				var temp = sections[currentSideRailIndex - 1];
				sections[currentSideRailIndex - 1] = sections[currentSideRailIndex];
				sections[currentSideRailIndex] = temp;
				state.saveSections(sections);
				openSectionSideRail(currentSideRailIndex - 1);
			}
		});

		$('body').on('click', '.mh-rail-move-down', function(e) {
			e.preventDefault();
			var sections = state.getSections();
			if (currentSideRailIndex < sections.length - 1) {
				var temp = sections[currentSideRailIndex + 1];
				sections[currentSideRailIndex + 1] = sections[currentSideRailIndex];
				sections[currentSideRailIndex] = temp;
				state.saveSections(sections);
				openSectionSideRail(currentSideRailIndex + 1);
			}
		});

		$('body').on('click', '.mh-rail-duplicate', function(e) {
			e.preventDefault();
			var sections = state.getSections();
			if (sections[currentSideRailIndex]) {
				var clone = JSON.parse(JSON.stringify(sections[currentSideRailIndex]));
				clone.id = 'section_' + Date.now();
				clone.label = (clone.label || 'Section') + ' (Copy)';
				sections.splice(currentSideRailIndex + 1, 0, clone);
				state.saveSections(sections);
				openSectionSideRail(currentSideRailIndex + 1);
			}
		});

		$('body').on('click', '.mh-rail-delete', function(e) {
			e.preventDefault();
			var sections = state.getSections();
			var isValidTarget = currentSideRailIndex > -1 && currentSideRailIndex < sections.length;
			if (isValidTarget) {
				var delIdx = currentSideRailIndex;
				sections.splice(delIdx, 1);
				state.saveSections(sections);
				closeSectionSideRail();
				if (api && api.previewer) {
					api.previewer.send('mh-section-removed', { index: delIdx });
				}
			}
		});

		// Live Debounced Input Sync
		$('body').on('keyup input', '#mh-section-side-rail input, #mh-section-side-rail textarea', function(e) {
			var ignoredKeys = ['Shift', 'Control', 'Alt', 'Meta', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
			var isIgnoredKey = e.type === 'keyup' && ignoredKeys.indexOf(e.key) !== -1;
			if (isIgnoredKey) return;

			syncCurrentSideRailChanges(false);
		});

		$('body').on('change blur', '#mh-section-side-rail input, #mh-section-side-rail textarea', function() {
			syncCurrentSideRailChanges(true);
		});
	}

	window.mhCustomizer.sideRail = {
		init: init,
		openSectionSideRail: openSectionSideRail,
		closeSectionSideRail: closeSectionSideRail,
		syncCurrentSideRailChanges: syncCurrentSideRailChanges
	};

})(window, jQuery);
