/**
 * Magic Wand Customizer - Section Library Modal & Live Preview
 *
 * Adheres to Quantum Engineering Standards (Protocol 1, Protocol 2A & Protocol 5A).
 * Modular modal catalog with category navigation, live filtering, and responsive device preview.
 *
 * @package Xophz_Compass_Magic_Wand
 */

(function(window, $) {
	'use strict';

	window.mhCustomizer = window.mhCustomizer || {};
	var utils = window.mhCustomizer.utils;
	var wireframes = window.mhCustomizer.wireframes;
	var state = window.mhCustomizer.state;

	var api = null;
	var $modal = null;
	var targetInsertionIndex = null;
	var activeSource = 'all';
	var activeCat = 'all';
	var currentPreviewSectionId = null;
	var sectionsList = [];
	var categories = [];

	/**
	 * Build modal markup and attach event bindings.
	 *
	 * @param {Object} wpApi wp.customize instance.
	 */
	function init(wpApi) {
		api = wpApi;

		var hasConfig = typeof window.mhMagicWand === 'object' && window.mhMagicWand !== null;
		if (!hasConfig) return;

		categories = window.mhMagicWand.categories || [];
		sectionsList = (window.mhMagicWand.sections || []).map(function(s) {
			if (s && s.category) {
				s.category = s.category.replace(/^magic-wand-/, '');
			}
			return s;
		});

		mountModalDom();
		bindModalEvents();

		window.mhOpenAddSectionPanel = openAddSectionPanel;
	}

	/**
	 * Construct and append modal HTML to document body.
	 */
	function mountModalDom() {
		var strings = (window.mhMagicWand && window.mhMagicWand.strings) || {};
		var title = strings.select_section || 'Section Library';
		var searchPlaceholder = strings.search_placeholder || 'Search sections...';

		var html =
			'<div id="mh-sections-modal" class="mh-modal-backdrop">' +
				'<div class="mh-modal-container">' +
					// Header
					'<div class="mh-modal-header">' +
						'<div class="mh-modal-header-left">' +
							'<span class="dashicons dashicons-layout mh-modal-header-icon"></span>' +
							'<div>' +
								'<h3 class="mh-modal-title">' + utils.escAttr(title) + '</h3>' +
								'<p class="mh-modal-subtitle">Choose from ' + sectionsList.length + ' modular section templates</p>' +
							'</div>' +
						'</div>' +

						// Source Filter Pills
						'<div class="mh-source-filter-group">' +
							'<button type="button" class="mh-source-pill active" data-source="all">All <span class="mh-source-badge" id="mh-source-count-all">' + sectionsList.length + '</span></button>' +
							'<button type="button" class="mh-source-pill" data-source="core">Core <span class="mh-source-badge" id="mh-source-count-core">9</span></button>' +
							'<button type="button" class="mh-source-pill" data-source="classic">Classic <span class="mh-source-badge" id="mh-source-count-classic">54</span></button>' +
						'</div>' +

						// Search & Close
						'<div class="mh-modal-header-right">' +
							'<div class="mh-search-wrapper">' +
								'<span class="dashicons dashicons-search mh-search-icon"></span>' +
								'<input type="text" id="mh-modal-search" placeholder="' + utils.escAttr(searchPlaceholder) + '" autocomplete="off" />' +
								'<button type="button" id="mh-search-clear" class="mh-search-clear-btn">&times;</button>' +
							'</div>' +
							'<button type="button" class="mh-close-modal" title="Close modal">&times;</button>' +
						'</div>' +
					'</div>' +

					// Modal Body
					'<div class="mh-modal-body">' +
						// Sidebar Navigation
						'<aside class="mh-modal-sidebar">' +
							'<div class="mh-sidebar-title">Categories</div>' +
							'<nav class="mh-cat-nav">';

		categories.forEach(function(cat, idx) {
			var isActive = idx === 0 ? ' active' : '';
			var iconClass = (wireframes.catIconMap && wireframes.catIconMap[cat.id]) || 'dashicons-category';
			html +=
				'<a href="#" class="mh-cat-item' + isActive + '" data-cat="' + utils.escAttr(cat.id) + '">' +
					'<span class="dashicons ' + utils.escAttr(iconClass) + '"></span>' +
					'<span class="mh-cat-label">' + utils.escAttr(cat.name) + '</span>' +
					'<span class="mh-cat-count-badge">0</span>' +
				'</a>';
		});

		html +=
							'</nav>' +
						'</aside>' +

						// Center Main Grid View
						'<main class="mh-modal-main-view">' +
							'<div id="mh-modal-cards-wrap">';

		categories.forEach(function(cat) {
			if (cat.id === 'all') return;

			var catSections = sectionsList.filter(function(s) { return s.category === cat.id; });
			if (!catSections.length) return;

			html +=
				'<div class="mh-category-group" data-cat="' + utils.escAttr(cat.id) + '">' +
					'<div class="mh-category-bar">' +
						'<span>' + utils.escAttr(cat.name) + '</span>' +
						'<span class="mh-category-group-count">' + catSections.length + ' SECTIONS</span>' +
					'</div>' +
					'<div class="mh-category-grid">';

			catSections.forEach(function(s) {
				var sourceLabel = s.source === 'core' ? 'Core' : 'Classic';
				var sourceClass = s.source === 'core' ? 'mh-source-core' : 'mh-source-classic';
				var wireframe = wireframes.getWireframeSvg(s, s.category, s.color);

				html +=
					'<div class="mh-section-card" data-id="' + utils.escAttr(s.id) + '" data-cat="' + utils.escAttr(s.category) + '" data-source="' + utils.escAttr(s.source || 'core') + '" title="' + utils.escAttr(s.desc || s.name) + '">' +
						'<div class="mh-card-thumb-wrap">' +
							'<span class="mh-card-source-tag ' + sourceClass + '">' + sourceLabel + '</span>' +
							wireframe +
							'<div class="mh-card-hover-overlay">' +
								'<button type="button" class="mh-btn-card-preview" data-id="' + utils.escAttr(s.id) + '">' +
									'<span class="dashicons dashicons-visibility"></span> Preview' +
								'</button>' +
								'<button type="button" class="mh-btn-card-add" data-id="' + utils.escAttr(s.id) + '">' +
									'<span class="dashicons dashicons-plus-alt2"></span> + Add' +
								'</button>' +
							'</div>' +
						'</div>' +
						'<div class="mh-card-info">' +
							'<div class="mh-card-title">' + utils.escAttr(s.name) + '</div>' +
							'<div class="mh-card-desc">' + utils.escAttr(s.desc || s.name) + '</div>' +
						'</div>' +
					'</div>';
			});

			html +=
					'</div>' +
				'</div>';
		});

		html +=
								'<div id="mh-modal-empty" class="mh-modal-empty-state is-hidden">' +
									'<span class="dashicons dashicons-search mh-modal-empty-icon"></span>' +
									'<p class="mh-modal-empty-text">No matching sections found.</p>' +
								'</div>' +
							'</div>' +
						'</main>' +

						// Live Preview Pane
						'<div id="mh-preview-pane" class="mh-preview-pane is-hidden">' +
							'<div class="mh-preview-toolbar">' +
								'<button type="button" id="mh-preview-back-btn" class="button">' +
									'<span class="dashicons dashicons-arrow-left-alt2"></span> Back to Sections' +
								'</button>' +
								'<div class="mh-preview-meta">' +
									'<h4 id="mh-preview-title">Section Title</h4>' +
									'<span id="mh-preview-source-badge" class="mh-preview-badge">Core</span>' +
									'<span id="mh-preview-cat-badge" class="mh-preview-badge mh-badge-category">Hero</span>' +
								'</div>' +
								'<div class="mh-preview-viewport-controls">' +
									'<button type="button" class="mh-viewport-btn active" data-width="100%" title="Desktop View">' +
										'<span class="dashicons dashicons-desktop"></span>' +
									'</button>' +
									'<button type="button" class="mh-viewport-btn" data-width="768px" title="Tablet View (768px)">' +
										'<span class="dashicons dashicons-tablet"></span>' +
									'</button>' +
									'<button type="button" class="mh-viewport-btn" data-width="375px" title="Mobile View (375px)">' +
										'<span class="dashicons dashicons-smartphone"></span>' +
									'</button>' +
								'</div>' +
								'<button type="button" id="mh-preview-insert-btn" class="button button-primary">' +
									'<span class="dashicons dashicons-plus-alt2"></span> + Insert Section' +
								'</button>' +
							'</div>' +
							'<div class="mh-preview-canvas">' +
								'<div id="mh-preview-stage" class="mh-preview-stage">' +
									'<div id="mh-preview-content" class="mh-preview-content"></div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';

		$('body').append(html);
		$modal = $('#mh-sections-modal');
	}

	/**
	 * Open Add Section Library Modal.
	 *
	 * @param {number|null} [insertAt] Optional insertion index.
	 */
	function openAddSectionPanel(insertAt) {
		targetInsertionIndex = typeof insertAt === 'number' ? insertAt : null;
		closeLivePreview();

		$modal.css('display', 'flex').hide().fadeIn(150);
		$('#mh-modal-search').val('');
		$('#mh-search-clear').hide();
		filterModalCards();
	}

	/**
	 * Close Add Section Library Modal.
	 */
	function closeSectionsModal() {
		if ($modal) {
			$modal.fadeOut(150);
		}
		closeLivePreview();
		targetInsertionIndex = null;
	}

	/**
	 * Open Live Preview slide-over pane.
	 *
	 * @param {string} sectionId Target section archetype ID.
	 */
	function openLivePreview(sectionId) {
		var def = sectionsList.find(function(s) { return s.id === sectionId; });
		if (!def) return;

		currentPreviewSectionId = sectionId;
		$('#mh-preview-title').text(def.name);

		var isCore = def.source === 'core';
		$('#mh-preview-source-badge')
			.text(isCore ? 'Core' : 'Classic')
			.removeClass('mh-badge-core mh-badge-classic')
			.addClass(isCore ? 'mh-badge-core' : 'mh-badge-classic');

		var catDef = categories.find(function(c) { return c.id === def.category; });
		$('#mh-preview-cat-badge').text(catDef ? catDef.name : def.category);

		var defaultEmptyContent = '<div class="mh-preview-empty">Empty Section</div>';
		$('#mh-preview-content').html(def.content || defaultEmptyContent);
		$('#mh-preview-stage').css('width', '100%');
		$modal.find('.mh-viewport-btn').removeClass('active');
		$modal.find('.mh-viewport-btn[data-width="100%"]').addClass('active');

		if (window.XophzMagicWandAtoms && typeof window.XophzMagicWandAtoms.mount === 'function') {
			setTimeout(function() {
				window.XophzMagicWandAtoms.mount('#mh-preview-content [data-magic-wand-mount]');
			}, 30);
		}

		$('.mh-modal-main-view').hide();
		$('#mh-preview-pane').removeClass('is-hidden').show();
	}

	/**
	 * Close Live Preview pane and return to cards grid.
	 */
	function closeLivePreview() {
		$('#mh-preview-pane').addClass('is-hidden').hide();
		$('.mh-modal-main-view').show();
		$('#mh-preview-content').empty();
		currentPreviewSectionId = null;
	}

	/**
	 * Insert selected section archetype into page builder.
	 *
	 * @param {string} sectionId Target archetype ID.
	 */
	function insertSectionById(sectionId) {
		var def = sectionsList.find(function(s) { return s.id === sectionId; });
		var sections = state.getSections();
		var newSection = {
			type: sectionId,
			id: 'section_' + Date.now(),
			label: def ? def.name : '',
			content: def ? def.content : ''
		};

		// Stage 1: Insertion Bounds Evaluation
		var hasTargetIndex = targetInsertionIndex !== null;
		var isIndexInRange = targetInsertionIndex >= 0 && targetInsertionIndex <= sections.length;

		// Stage 2: Unified Decision
		var canInsertAtIndex = hasTargetIndex && isIndexInRange;
		if (canInsertAtIndex) {
			sections.splice(targetInsertionIndex, 0, newSection);
		} else {
			sections.push(newSection);
		}

		state.saveSections(sections);
		closeSectionsModal();

		if (api && api.previewer) {
			api.previewer.refresh();
		}
	}

	/**
	 * Filter cards and groups based on search query, active source, and active category.
	 * Implements 2-stage atomic boolean composition.
	 */
	function filterModalCards() {
		var query = ($('#mh-modal-search').val() || '').toLowerCase().trim();
		var totalVisible = 0;

		var catCounts = {};
		categories.forEach(function(c) { catCounts[c.id] = 0; });
		var sourceCounts = { all: 0, core: 0, classic: 0 };

		$modal.find('.mh-category-group').each(function() {
			var $group = $(this);
			var groupCat = $group.data('cat');
			var groupVisible = 0;

			$group.find('.mh-section-card').each(function() {
				var $card = $(this);
				var id = ($card.data('id') || '').toLowerCase();
				var source = ($card.data('source') || 'core').toLowerCase();
				var title = $card.find('.mh-card-title').text().toLowerCase();
				var desc = $card.find('.mh-card-desc').text().toLowerCase();

				// Stage 1: Atomic Query & Filter Predicates
				var hasNoQuery = !query;
				var idMatches = id.indexOf(query) !== -1;
				var titleMatches = title.indexOf(query) !== -1;
				var descMatches = desc.indexOf(query) !== -1;
				var queryMatches = hasNoQuery || idMatches || titleMatches || descMatches;

				var sourceMatches = activeSource === 'all' || source === activeSource;
				var catMatches = activeCat === 'all' || groupCat === activeCat;

				// Stage 2: Unified Decision Variables
				var canCountCategory = queryMatches && sourceMatches;
				var canCountSource = queryMatches && catMatches;
				var isCardVisible = queryMatches && sourceMatches && catMatches;

				if (canCountCategory) {
					catCounts[groupCat] = (catCounts[groupCat] || 0) + 1;
					catCounts['all'] = (catCounts['all'] || 0) + 1;
				}

				if (canCountSource) {
					sourceCounts.all++;
					if (source === 'core') sourceCounts.core++;
					if (source === 'classic') sourceCounts.classic++;
				}

				if (isCardVisible) {
					$card.show();
					groupVisible++;
					totalVisible++;
				} else {
					$card.hide();
				}
			});

			$group.find('.mh-category-group-count').text(groupVisible + ' SECTIONS');
			if (groupVisible > 0) {
				$group.show();
			} else {
				$group.hide();
			}
		});

		// Update sidebar count badges
		$modal.find('.mh-cat-item').each(function() {
			var catId = $(this).data('cat');
			var count = catCounts[catId] || 0;
			var $badge = $(this).find('.mh-cat-count-badge');
			$badge.text(count);
			if (count === 0) {
				$(this).addClass('is-empty');
			} else {
				$(this).removeClass('is-empty');
			}
		});

		// Update source pill badges
		$('#mh-source-count-all').text(sourceCounts.all);
		$('#mh-source-count-core').text(sourceCounts.core);
		$('#mh-source-count-classic').text(sourceCounts.classic);

		if (totalVisible === 0) {
			$('#mh-modal-empty').removeClass('is-hidden').show();
		} else {
			$('#mh-modal-empty').addClass('is-hidden').hide();
		}
	}

	/**
	 * Attach event listeners to modal and document.
	 */
	function bindModalEvents() {
		// Open panel trigger
		$('body').on('click', '.mh-add-section', function(e) {
			e.preventDefault();
			openAddSectionPanel();
		});

		// Close modal interactions
		$modal.on('click', '.mh-close-modal', function() {
			closeSectionsModal();
		});

		$modal.on('click', function(e) {
			if (e.target === this) {
				closeSectionsModal();
			}
		});

		$(document).on('keydown', function(e) {
			var isEscape = e.key === 'Escape';
			var isModalVisible = $modal.is(':visible');
			if (isEscape && isModalVisible) {
				closeSectionsModal();
			}
		});

		// Source filter pills
		$modal.on('click', '.mh-source-pill', function() {
			$modal.find('.mh-source-pill').removeClass('active');
			$(this).addClass('active');
			activeSource = $(this).data('source') || 'all';
			closeLivePreview();
			filterModalCards();
		});

		// Category sidebar navigation
		$modal.on('click', '.mh-cat-item', function(e) {
			e.preventDefault();
			$modal.find('.mh-cat-item').removeClass('active');
			$(this).addClass('active');
			activeCat = $(this).data('cat') || 'all';
			closeLivePreview();
			filterModalCards();
		});

		// Search input and clear
		$modal.on('input', '#mh-modal-search', function() {
			var val = $(this).val();
			if (val) {
				$('#mh-search-clear').show();
			} else {
				$('#mh-search-clear').hide();
			}
			filterModalCards();
		});

		$modal.on('click', '#mh-search-clear', function() {
			$('#mh-modal-search').val('').focus();
			$(this).hide();
			filterModalCards();
		});

		// Card actions
		$modal.on('click', '.mh-btn-card-preview', function(e) {
			e.preventDefault();
			e.stopPropagation();
			var sectionId = $(this).data('id');
			openLivePreview(sectionId);
		});

		$modal.on('click', '.mh-section-card', function(e) {
			var isAddBtnClick = Boolean($(e.target).closest('.mh-btn-card-add').length);
			if (isAddBtnClick) return;

			e.preventDefault();
			var sectionId = $(this).data('id');
			openLivePreview(sectionId);
		});

		$modal.on('click', '.mh-btn-card-add', function(e) {
			e.preventDefault();
			e.stopPropagation();
			var sectionId = $(this).data('id');
			insertSectionById(sectionId);
		});

		// Preview pane controls
		$modal.on('click', '#mh-preview-back-btn', function(e) {
			e.preventDefault();
			closeLivePreview();
		});

		$modal.on('click', '#mh-preview-insert-btn', function(e) {
			e.preventDefault();
			if (currentPreviewSectionId) {
				insertSectionById(currentPreviewSectionId);
			}
		});

		$modal.on('click', '.mh-viewport-btn', function() {
			var w = $(this).data('width') || '100%';
			$modal.find('.mh-viewport-btn').removeClass('active');
			$(this).addClass('active');
			$('#mh-preview-stage').css('width', w);
		});
	}

	window.mhCustomizer.sectionModal = {
		init: init,
		openAddSectionPanel: openAddSectionPanel,
		closeSectionsModal: closeSectionsModal,
		insertSectionById: insertSectionById
	};

})(window, jQuery);
