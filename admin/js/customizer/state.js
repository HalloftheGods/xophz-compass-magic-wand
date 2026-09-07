/**
 * Magic Wand Customizer - State Management & Storage
 *
 * Adheres to Quantum Engineering Standards (Protocol 1, Protocol 2A & Protocol 4D).
 * Manages active page tracking, section cache, and persistence with 2-stage atomic booleans.
 *
 * @package Xophz_Compass_Magic_Wand
 */

(function(window, $) {
	'use strict';

	window.mhCustomizer = window.mhCustomizer || {};
	var utils = window.mhCustomizer.utils;

	var settingId = 'mh_page_sections';
	var activePageId = 0;
	var activePageTitle = 'Front Page';
	var pageSectionsCache = {};
	var api = null;

	/**
	 * Initialize state storage with Customizer API instance.
	 *
	 * @param {Object} wpApi wp.customize instance.
	 */
	function init(wpApi) {
		api = wpApi;

		var hasLocalizedConfig = typeof window.mhMagicWand === 'object' && window.mhMagicWand !== null;
		if (hasLocalizedConfig) {
			activePageId = window.mhMagicWand.pageOnFront ? window.mhMagicWand.pageOnFront : 0;
			activePageTitle = window.mhMagicWand.showOnFront === 'page' ? 'Home' : 'Front Page';
		}
	}

	/**
	 * Get current active page ID.
	 *
	 * @return {number} Page ID.
	 */
	function getActivePageId() {
		return activePageId;
	}

	/**
	 * Get current active page title.
	 *
	 * @return {string} Page title.
	 */
	function getActivePageTitle() {
		return activePageTitle;
	}

	/**
	 * Update active page metadata.
	 *
	 * @param {number} pageId Target page ID.
	 * @param {string} pageTitle Target page title.
	 */
	function setActivePage(pageId, pageTitle) {
		activePageId = pageId;
		if (pageTitle) {
			activePageTitle = pageTitle;
		}
		updateActivePageIndicator();
	}

	/**
	 * Update the "Editing Page: [Title]" indicator badge above template switcher.
	 */
	function updateActivePageIndicator() {
		var $indicator = $('#mh-active-page-badge');
		var isBadgeMissing = !$indicator.length;

		if (isBadgeMissing) {
			$('.mh-template-switch-wrap').before(
				'<div id="mh-active-page-badge" class="mh-active-page-badge">' +
					'<span class="mh-active-page-badge-label">Editing Page:</span>' +
					'<span id="mh-active-page-title" class="mh-active-page-badge-title">' + utils.escAttr(activePageTitle) + '</span>' +
				'</div>'
			);
		} else {
			$('#mh-active-page-title').text(activePageTitle);
		}
	}

	/**
	 * Retrieve sections list for active or specified page.
	 *
	 * @param {number} [targetPageId] Optional page ID.
	 * @return {Array<Object>} List of section instances.
	 */
	function getSections(targetPageId) {
		var pageKey = typeof targetPageId === 'number' ? targetPageId : activePageId;

		var hasCachedArray = Array.isArray(pageSectionsCache[pageKey]);
		if (hasCachedArray) {
			return pageSectionsCache[pageKey];
		}

		// Fallback to Customizer setting
		var hasSetting = Boolean(api && api(settingId));
		if (hasSetting) {
			try {
				var raw = api(settingId).get();
				var parsed = JSON.parse(raw || '[]');
				var isParsedArray = Array.isArray(parsed);
				if (isParsedArray) {
					pageSectionsCache[pageKey] = parsed;
					return parsed;
				}
			} catch (e) {
				// Syntax error fallback
			}
		}

		return pageSectionsCache[pageKey] || [];
	}

	/**
	 * Store sections directly into memory cache.
	 *
	 * @param {number} pageId Target page ID.
	 * @param {Array<Object>} sections Section array.
	 */
	function setSectionsCache(pageId, sections) {
		var isValidArray = Array.isArray(sections);
		if (isValidArray) {
			pageSectionsCache[pageId] = sections;
		}
	}

	/**
	 * Persist sections to Customizer setting and WordPress AJAX endpoint.
	 *
	 * @param {Array<Object>} arr New sections array.
	 * @param {boolean} [triggerRender=true] Whether to trigger section list re-render.
	 */
	function persistSections(arr, triggerRender) {
		pageSectionsCache[activePageId] = arr;

		// Stage 1: Atomic Concept Declarations
		var isFrontPage = !activePageId || (window.mhMagicWand && parseInt(activePageId, 10) === parseInt(window.mhMagicWand.pageOnFront, 10));
		var hasSetting = Boolean(api && api(settingId));

		// Stage 2: Unified Decision
		var canUpdateCustomizerSetting = isFrontPage && hasSetting;
		if (canUpdateCustomizerSetting) {
			api(settingId).set(JSON.stringify(arr));
		}

		// Stage 1: AJAX Capability Declarations
		var hasAjaxConfig = Boolean(window.mhMagicWand && window.mhMagicWand.ajaxUrl);
		var hasValidPageId = Boolean(activePageId);

		// Stage 2: Unified AJAX Decision
		var canDispatchAjax = hasAjaxConfig && hasValidPageId;
		if (canDispatchAjax) {
			$.post(window.mhMagicWand.ajaxUrl, {
				action: 'mh_save_page_sections',
				page_id: activePageId,
				sections: JSON.stringify(arr),
				_ajax_nonce: window.mhMagicWand.nonce,
				nonce: window.mhMagicWand.nonce
			});
		}

		var shouldRender = triggerRender !== false;
		if (shouldRender && window.mhCustomizer.sectionList && typeof window.mhCustomizer.sectionList.renderSectionList === 'function') {
			window.mhCustomizer.sectionList.renderSectionList();
		}
	}

	/**
	 * Save sections and re-render list UI.
	 *
	 * @param {Array<Object>} arr New sections array.
	 */
	function saveSections(arr) {
		persistSections(arr, true);
	}

	/**
	 * Save sections quietly without re-rendering active form inputs.
	 *
	 * @param {Array<Object>} arr New sections array.
	 */
	function saveSectionsQuiet(arr) {
		persistSections(arr, false);
	}

	window.mhCustomizer.state = {
		settingId: settingId,
		init: init,
		getActivePageId: getActivePageId,
		getActivePageTitle: getActivePageTitle,
		setActivePage: setActivePage,
		updateActivePageIndicator: updateActivePageIndicator,
		getSections: getSections,
		setSectionsCache: setSectionsCache,
		saveSections: saveSections,
		saveSectionsQuiet: saveSectionsQuiet
	};

})(window, jQuery);
