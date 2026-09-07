/**
 * Magic Wand Customizer - Section List (Screen 2) Controller
 *
 * Adheres to Quantum Engineering Standards (Protocol 1, Protocol 2A & Protocol 5A).
 * Controls Page Settings section rows, sortable reordering, actions, and homepage template switching.
 *
 * @package Xophz_Compass_Magic_Wand
 */

(function(window, $) {
	'use strict';

	window.mhCustomizer = window.mhCustomizer || {};
	var utils = window.mhCustomizer.utils;
	var state = window.mhCustomizer.state;

	var api = null;
	var $pageRowsContainer = null;
	var labelDebounce = null;

	/**
	 * Initialize section list controller.
	 *
	 * @param {Object} wpApi wp.customize instance.
	 */
	function init(wpApi) {
		api = wpApi;
		$pageRowsContainer = $('#mh_page_rows');

		labelDebounce = utils.createDebounce(function(idx, val) {
			var sections = state.getSections();
			var isValidTarget = idx > -1 && idx < sections.length;
			if (isValidTarget) {
				sections[idx].label = val;
				state.saveSectionsQuiet(sections);
			}
		}, 750);

		bindListEvents();
		renderSectionList();
	}

	/**
	 * Render the section rows in Screen 2 (#mh_page_rows).
	 */
	function renderSectionList() {
		if (!$pageRowsContainer || !$pageRowsContainer.length) {
			$pageRowsContainer = $('#mh_page_rows');
		}
		if (!$pageRowsContainer.length) return;

		var sections = state.getSections();
		$pageRowsContainer.empty();

		var hasNoSections = !sections.length;
		if (hasNoSections) {
			$pageRowsContainer.append('<li class="empty">No sections added</li>');
			return;
		}

		var availableSections = (window.mhMagicWand && window.mhMagicWand.sections) || [];

		$.each(sections, function(i, item) {
			var def = availableSections.find(function(s) { return s.id === item.type; });
			if (!def) return;

			var label = item.label || def.name;
			item.settings = item.settings || {};
			var isFull = item.settings.layout === 'full';
			var anchor = item.settings.anchor || utils.slugify(label);
			var badgeColor = def.color || '#2563eb';

			$pageRowsContainer.append(
				'<li class="mh-section-item" data-index="' + i + '">' +
					'<div class="mh-section-item-drag" title="Drag to reorder">' +
						'<span class="dashicons dashicons-menu"></span>' +
					'</div>' +
					'<div class="mh-section-item-info mh-trigger-settings" data-index="' + i + '" title="Click to customize section">' +
						'<div class="mh-section-icon-badge" style="--mh-badge-color: ' + utils.escAttr(badgeColor) + ';">' +
							'<span class="dashicons ' + utils.escAttr(def.icon || 'dashicons-layout') + '"></span>' +
						'</div>' +
						'<div class="mh-section-text-col">' +
							'<span class="mh-section-title-text">' + utils.escAttr(label) + '</span>' +
							'<span class="mh-section-meta-text">#' + utils.escAttr(anchor) + ' \u2022 ' + (isFull ? 'Full Width' : 'Boxed') + '</span>' +
						'</div>' +
					'</div>' +
					'<div class="mh-section-item-actions">' +
						'<button type="button" class="button button-secondary button-small mh-trigger-settings" data-index="' + i + '" title="Configure Section Settings">' +
							'<span class="dashicons dashicons-admin-generic"></span>' +
						'</button>' +
						'<button type="button" class="mh-remove-section-btn" data-index="' + i + '" title="Remove Section">' +
							'<span class="dashicons dashicons-no-alt"></span>' +
						'</button>' +
					'</div>' +
				'</li>'
			);
		});

		initSortable();
	}

	/**
	 * Initialize jQuery UI Sortable for drag-and-drop section reordering.
	 */
	function initSortable() {
		if ($.fn.sortable && $pageRowsContainer && $pageRowsContainer.length) {
			$pageRowsContainer.sortable({
				items: '.mh-section-item',
				axis: 'y',
				handle: '.dashicons-menu',
				update: function() {
					var newOrder = [];
					var cur = state.getSections();
					$pageRowsContainer.find('.mh-section-item').each(function() {
						newOrder.push(cur[$(this).data('index')]);
					});
					state.saveSections(newOrder);
				}
			});
		}
	}

	/**
	 * Attach event listeners for list row interactions and template switcher.
	 */
	function bindListEvents() {
		// Trigger side rail settings
		$('body').on('click', '.mh-trigger-settings, .mh-customize-section-btn', function(e) {
			e.stopPropagation();
			var idx = $(this).data('index');
			if (typeof idx === 'undefined') {
				idx = $(this).closest('.mh-section-item').data('index');
			}
			if (typeof idx !== 'undefined' && window.mhCustomizer.sideRail) {
				var sections = state.getSections();
				var elements = (sections[idx] && sections[idx].elements) ? sections[idx].elements : null;
				window.mhCustomizer.sideRail.openSectionSideRail(idx, elements);
			}
		});

		// Remove section button
		$('body').on('click', '.mh-remove-section-btn, .mh-remove-section', function(e) {
			e.stopPropagation();
			var rawIdx = $(this).attr('data-index');
			if (typeof rawIdx === 'undefined') {
				rawIdx = $(this).closest('.mh-section-item').attr('data-index');
			}
			var idx = parseInt(rawIdx, 10);
			var sections = state.getSections();

			// Stage 1: Validation Predicates
			var isValidNumber = !isNaN(idx);
			var isIndexInRange = idx >= 0 && idx < sections.length;

			// Stage 2: Unified Decision
			var canRemove = isValidNumber && isIndexInRange;
			if (canRemove) {
				sections.splice(idx, 1);
				state.saveSections(sections);

				if (window.mhCustomizer.sideRail) {
					window.mhCustomizer.sideRail.closeSectionSideRail();
				}

				if (api && api.previewer) {
					api.previewer.send('mh-section-removed', { index: idx });
				}
			}
		});

		// Section row click (opens side rail unless clicking a button or handle)
		$('body').on('click', '#mh_page_rows .mh-section-item', function(e) {
			var isInteractiveElement = Boolean($(e.target).closest('input, button, .dashicons-menu').length);
			if (isInteractiveElement) return;

			var index = $(this).data('index');
			if (typeof index !== 'undefined' && window.mhCustomizer.sideRail) {
				window.mhCustomizer.sideRail.openSectionSideRail(index);
			}
		});

		// Toggle section layout (Full Width vs Boxed)
		$('body').on('click', '.mh-toggle-layout-btn', function(e) {
			e.stopPropagation();
			var idx = $(this).data('index');
			var sections = state.getSections();
			var isValidTarget = idx > -1 && idx < sections.length;
			if (isValidTarget) {
				sections[idx].settings = sections[idx].settings || {};
				sections[idx].settings.layout = (sections[idx].settings.layout === 'full') ? 'contained' : 'full';
				state.saveSections(sections);
			}
		});

		// Inline label editing with debounced synchronization
		$('body').on('focus', '.mh-section-label', function() {
			$(this).addClass('is-focused');
		}).on('blur', '.mh-section-label', function() {
			$(this).removeClass('is-focused');
			if (labelDebounce) {
				labelDebounce.flush();
			}
			var idx = $(this).data('index');
			var sections = state.getSections();
			var isValidTarget = idx > -1 && idx < sections.length;
			if (isValidTarget) {
				sections[idx].label = $(this).val().trim();
				state.saveSectionsQuiet(sections);
			}
		}).on('keydown', '.mh-section-label', function(e) {
			if (e.key === 'Enter') {
				e.preventDefault();
				$(this).blur();
			}
		}).on('keyup input', '.mh-section-label', function(e) {
			var ignoredKeys = ['Shift', 'Control', 'Alt', 'Meta', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
			var isIgnoredKey = e.type === 'keyup' && ignoredKeys.indexOf(e.key) !== -1;
			if (isIgnoredKey) return;

			var $input = $(this);
			var val = $input.val().trim();
			var idx = $input.data('index');
			$input.closest('.mh-section-item').find('.mh-section-anchor').text('#' + utils.slugify(val || 'section'));

			if (labelDebounce) {
				labelDebounce.run(idx, val);
			}
		});

		// Template switcher button
		$('body').on('click', '.mh-switch-btn', function(e) {
			e.preventDefault();
			var $btn = $(this);
			var mode = $btn.data('mode');
			var isAlreadyActive = $btn.hasClass('active');
			if (isAlreadyActive) return;

			var $wrap = $btn.closest('.mh-template-switch-wrap');
			$wrap.find('.mh-switch-btn').prop('disabled', true).addClass('is-busy');
			var $status = $('#mh-template-status');
			$status.text('Switching display template...');

			$.post(window.mhMagicWand.ajaxUrl, {
				action: 'mh_switch_front_template',
				mode: mode,
				nonce: window.mhMagicWand.nonce
			}, function(res) {
				$wrap.find('.mh-switch-btn').prop('disabled', false).removeClass('is-busy');
				if (res.success) {
					$wrap.find('.mh-switch-btn').removeClass('active');
					$btn.addClass('active');

					if (mode === 'magic_hat') {
						$status.removeClass('warning').addClass('success').text('\u2713 Magic Hat canvas is active on your homepage.');
					} else {
						$status.removeClass('success').addClass('warning').text('\u26A0 Showing standard blog posts. Switch to Magic Hat to display modular sections.');
					}

					if (api && api.previewer && res.data && res.data.url) {
						api.previewer.previewUrl(res.data.url);
					}
				} else {
					$status.text('Failed to switch template.');
				}
			}).fail(function() {
				$wrap.find('.mh-switch-btn').prop('disabled', false).removeClass('is-busy');
				$status.text('Server communication error.');
			});
		});
	}

	window.mhCustomizer.sectionList = {
		init: init,
		renderSectionList: renderSectionList
	};

})(window, jQuery);
