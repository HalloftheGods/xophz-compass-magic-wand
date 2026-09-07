/**
 * Magic Wand Customizer - Orchestrator Entry Point
 *
 * Adheres to Quantum Engineering Standards (Protocol 1, Protocol 2A & Protocol 6).
 * Coordinates modular Customizer submodules, previewer synchronization, and setting bindings with zero em dashes.
 *
 * @package Xophz_Compass_Magic_Wand
 */

(function(window, $, api) {
	'use strict';

	api.bind('ready', function() {
		// Stage 1: Localized Configuration Validation
		var hasConfig = typeof window.mhMagicWand === 'object' && window.mhMagicWand !== null;
		var hasSections = hasConfig && Array.isArray(window.mhMagicWand.sections);

		// Stage 2: Unified Decision Guard
		var canInitialize = hasConfig && hasSections;
		if (!canInitialize) return;

		var mh = window.mhCustomizer || {};
		var state = mh.state;
		var sectionModal = mh.sectionModal;
		var sideRail = mh.sideRail;
		var sectionList = mh.sectionList;

		var hasRequiredModules = Boolean(state && sectionModal && sideRail && sectionList);
		if (!hasRequiredModules) return;

		// Initialize modular sub-controllers
		state.init(api);
		sectionModal.init(api);
		sideRail.init(api);
		sectionList.init(api);
		state.updateActivePageIndicator();

		// Bind Customizer Previewer Messaging Events
		if (api.previewer) {
			api.previewer.bind('mh-preview-page-loaded', function(data) {
				var isValidPayload = Boolean(data && typeof data.pageId !== 'undefined');
				if (!isValidPayload) return;

				var pageTitle = data.pageTitle || (data.pageId ? 'Page ' + data.pageId : 'Front Page');
				state.setActivePage(data.pageId, pageTitle);

				if (data.isFront) {
					$('.mh-template-switch-wrap').show();
				} else {
					$('.mh-template-switch-wrap').hide();
				}

				var hasIncomingSections = Boolean(data.sections && Array.isArray(data.sections));
				if (hasIncomingSections) {
					state.setSectionsCache(data.pageId, data.sections);
				} else {
					var cached = state.getSections(data.pageId);
					if (!cached.length && api(state.settingId)) {
						try {
							var initial = JSON.parse(api(state.settingId).get() || '[]');
							if (Array.isArray(initial)) {
								state.setSectionsCache(data.pageId, initial);
							}
						} catch (e) {
							// Parse error guard
						}
					}
				}

				sectionList.renderSectionList();
			});

			// Navigate to Homepage Settings from Page Settings
			$(document).on('click keydown', '#mh-nav-to-homepage-settings', function(e) {
				if (e.type === 'keydown' && e.which !== 13 && e.which !== 32) {
					return;
				}
				e.preventDefault();
				if (api && api.section && api.section('static_front_page')) {
					api.section('static_front_page').focus();
				}
			});

			// Seamless return back to Page Settings when exiting Homepage Settings
			$(document).on('click', '#sub-accordion-section-static_front_page .customize-section-back', function(e) {
				e.preventDefault();
				e.stopPropagation();
				if (api && api.section && api.section('mh_page_builder')) {
					api.section('mh_page_builder').focus();
				}
			});

			api.previewer.bind('mh-page-sections-updated', function(data) {
				var isValidPayload = Boolean(data && data.pageId);
				if (!isValidPayload) return;

				state.setSectionsCache(data.pageId, data.sections || []);
				var isActivePage = data.pageId === state.getActivePageId();
				if (isActivePage) {
					sectionList.renderSectionList();
				}
			});

			api.previewer.bind('mh-open-section-side-rail', function(data) {
				var hasIndex = Boolean(data && typeof data.index === 'number');
				if (!hasIndex) return;

				if (api.section && api.section('mh_page_builder')) {
					api.section('mh_page_builder').expand();
				}
				sideRail.openSectionSideRail(data.index, data.elements);
			});
		}

		// Close side rail if page builder accordion section is collapsed
		if (api.section && api.section('mh_page_builder')) {
			api.section('mh_page_builder').expanded.bind(function(isExpanded) {
				if (!isExpanded) {
					sideRail.closeSectionSideRail();
				}
			});
		}

		// External Setting Synchronization
		if (api(state.settingId)) {
			api(state.settingId).bind(function(newVal) {
				try {
					var parsed = JSON.parse(newVal || '[]');
					if (Array.isArray(parsed)) {
						state.setSectionsCache(state.getActivePageId(), parsed);
					}
				} catch (e) {
					// Parse error guard
				}
				sectionList.renderSectionList();
			});
		}

		// Section & Menu Emoji Enlargement
		function initEmojiEnlargement() {
			var emojiRegex = /(\p{Extended_Pictographic}(?:\uFE0F|\u200D\p{Extended_Pictographic})*)/gu;

			function wrapEmojisInTree(root) {
				if (!root) return;

				var targets = root.querySelectorAll ? root.querySelectorAll('.accordion-section-title, .accordion-trigger, .customize-section-title h3, .customize-panel-title, .mh-customizer-nav-item .mh-nav-item-title') : [];
				var all = Array.prototype.slice.call(targets);
				if (root.matches && (root.matches('.accordion-section-title') || root.matches('.accordion-trigger') || root.matches('.customize-section-title h3') || root.matches('.customize-panel-title') || root.matches('.mh-customizer-nav-item .mh-nav-item-title'))) {
					all.unshift(root);
				}

				for (var i = 0; i < all.length; i++) {
					var el = all[i];
					if (!el || el.querySelector('.mh-section-emoji')) continue;

					var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
					var textNodes = [];
					var currentNode;
					while ((currentNode = walker.nextNode())) {
						var parent = currentNode.parentElement;
						if (parent && (parent.classList.contains('screen-reader-text') || parent.classList.contains('mh-section-emoji') || parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE')) {
							continue;
						}
						textNodes.push(currentNode);
					}

					for (var t = 0; t < textNodes.length; t++) {
						var textNode = textNodes[t];
						var text = textNode.nodeValue;
						if (!text || !emojiRegex.test(text)) continue;
						emojiRegex.lastIndex = 0;

						var frag = document.createDocumentFragment();
						var lastIdx = 0;
						var match;
						while ((match = emojiRegex.exec(text)) !== null) {
							if (match.index > lastIdx) {
								frag.appendChild(document.createTextNode(text.substring(lastIdx, match.index)));
							}
							var span = document.createElement('span');
							span.className = 'mh-section-emoji';
							span.textContent = match[1];
							frag.appendChild(span);
							lastIdx = emojiRegex.lastIndex;
						}
						if (lastIdx < text.length) {
							frag.appendChild(document.createTextNode(text.substring(lastIdx)));
						}
						if (textNode.parentNode) {
							textNode.parentNode.replaceChild(frag, textNode);
						}
					}
				}
			}

			function scan() {
				var container = document.getElementById('customize-theme-controls') || document.getElementById('customize-controls') || document.body;
				wrapEmojisInTree(container);
			}

			scan();

			if (window.MutationObserver) {
				var scheduled = false;
				var observer = new MutationObserver(function() {
					if (!scheduled) {
						scheduled = true;
						requestAnimationFrame(function() {
							scheduled = false;
							scan();
						});
					}
				});
				var targetContainer = document.getElementById('customize-controls') || document.body;
				observer.observe(targetContainer, { childList: true, subtree: true });
			}
		}

		initEmojiEnlargement();
	});

})(window, jQuery, wp.customize);
