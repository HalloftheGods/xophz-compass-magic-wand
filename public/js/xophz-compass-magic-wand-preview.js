/**
 * Magic Wand - Preview Handles
 * Runs INSIDE the Customizer preview iframe.
 * Adds hover overlays, inline text editing, floating formatting toolbar,
 * inter-section insertion notches, and direct section controls.
 */
(function($) {
	'use strict';

	// Only run inside Customizer preview
	if ( !window.parent || !window.parent.wp || !window.parent.wp.customize ) {
		return;
	}

	var parentApi = window.parent.wp.customize;

	// ── Modern Styles ─────────────────────────────────────────
	var css =
		':root { ' +
			'--mw-brand: var(--mh-color-brand-base, var(--wp--preset--color--brand-base, #2563eb)); ' +
			'--mw-brand-hover: var(--mh-color-brand-hover, #3b82f6); ' +
			'--mw-chrome-bg: #0f172a; ' +
			'--mw-chrome-border: rgba(255, 255, 255, 0.16); ' +
			'--mw-chrome-text: #f8fafc; ' +
			'--mw-chrome-cyan: #62c9ff; ' +
		'}' +
		'.mw-overlay { position: absolute; pointer-events: none; border: 1.5px dashed var(--mw-brand); border-radius: 4px; z-index: 99990; opacity: 0; transition: opacity 0.15s; }' +
		'.mw-overlay.active { opacity: 1; }' +
		
		// Badges matching .mh-preview-badge from customizer-preview-header-footer.js
		'.mw-preview-badge, .mh-preview-badge { display: inline-flex; align-items: center; gap: 4px; background: #0f172a !important; border: 1px solid rgba(255, 255, 255, 0.18) !important; border-radius: 9999px !important; padding: 3px 6px !important; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35) !important; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important; pointer-events: auto !important; position: absolute; z-index: 99995; }' +
		'.mw-overlay-label { top: 12px; left: 16px; }' +
		'.mw-overlay-actions { top: 12px; right: 16px; }' +
		'@media (max-width: 640px) { .mw-overlay-actions { top: 48px; left: 16px; right: auto; } }' +
		
		'.mw-badge-title { display: inline-flex; align-items: center; gap: 6px; padding: 3px 8px; color: #f8fafc !important; font-size: 11px !important; font-weight: 700 !important; letter-spacing: 0.5px; text-transform: uppercase; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important; }' +
		'.mw-badge-title .dashicons { font-size: 14px; width: 14px; height: 14px; color: #62c9ff; }' +
		
		'.mw-preview-btn, .mh-preview-btn { background: transparent !important; color: #f8fafc !important; border: none !important; border-radius: 9999px !important; padding: 4px 10px !important; font-size: 11px !important; font-weight: 700 !important; cursor: pointer !important; display: inline-flex !important; align-items: center !important; gap: 5px !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; transition: all 0.15s ease !important; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important; line-height: 1.2 !important; box-shadow: none !important; }' +
		'.mw-preview-btn *, .mh-preview-btn * { pointer-events: none !important; }' +
		'.mw-preview-btn:hover, .mh-preview-btn:hover { background: #2563eb !important; color: #ffffff !important; }' +
		'.mw-preview-btn .dashicons, .mh-preview-btn .dashicons { font-size: 14px; width: 14px; height: 14px; line-height: 14px; }' +
		'.mw-preview-btn.mw-action-delete:hover { background: #ef4444 !important; color: #ffffff !important; }' +
		
		'.mw-editable { outline: none; cursor: text; transition: box-shadow 0.15s; }' +
		'.mw-editable:focus { box-shadow: inset 0 0 0 2px rgba(37, 99, 235, 0.4); border-radius: 2px; }' +
		'.mw-section { position: relative; }' +
		'.mw-section:hover { outline: 1px dashed rgba(37, 99, 235, 0.4); outline-offset: 2px; }' +
		
		// Inter-section insertion notch
		'.mw-insert-notch { position: absolute; left: 0; right: 0; height: 16px; transform: translateY(-50%); z-index: 99995; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.15s; pointer-events: auto; }' +
		'.mw-insert-notch:hover, .mw-insert-notch.active { opacity: 1; }' +
		'.mw-insert-notch::before { content: ""; position: absolute; left: 10%; right: 10%; height: 2px; background: #2563eb; border-radius: 1px; }' +
		'.mw-insert-btn { position: relative; background: #0f172a !important; color: #f8fafc !important; border: 1px solid rgba(255, 255, 255, 0.18) !important; border-radius: 9999px; padding: 4px 14px; font-size: 11px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 5px; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35); transition: transform 0.15s, background 0.15s, border-color 0.15s; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; text-transform: uppercase; letter-spacing: 0.5px; }' +
		'.mw-insert-btn:hover { background: #2563eb !important; border-color: #2563eb !important; color: #ffffff !important; transform: scale(1.04); }' +

		// Floating Text Formatting Toolbar
		'#mw-format-toolbar { position: absolute; display: none; background: #0f172a !important; border: 1px solid rgba(255, 255, 255, 0.18) !important; border-radius: 9999px; padding: 4px 8px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.4); z-index: 99999; gap: 4px; align-items: center; }' +
		'#mw-format-toolbar button { background: transparent; color: #f8fafc; border: none; width: 26px; height: 26px; border-radius: 9999px; font-size: 12px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.15s; }' +
		'#mw-format-toolbar button:hover { background: rgba(255,255,255,0.15); color: #62c9ff; }' +
		
		// Image hover indicator
		'[data-mw-image]:hover { outline: 2px dashed #2563eb; outline-offset: 2px; cursor: pointer; filter: brightness(0.95); }' +
		
		// Popovers
		'#mw-link-popover { border-radius: 8px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.25); border: 1px solid rgba(0, 0, 0, 0.1); }';

	$('head').append('<style>' + css + '</style>');

	// ── Editable Text Elements ────────────────────────────────
	function initEditables() {
		var $sections = getTargetSections();
		$sections.each(function() {
			var $sec = $(this);
			// Find all editable text nodes within the section
			var $textEls = $sec.find('h1, h2, h3, h4, h5, h6, p, .wp-block-heading, .wp-block-paragraph, .wp-block-button__link, x-chip, .mh-section-badge, blockquote, li, [data-mw-edit]');
			
			$textEls.each(function() {
				var $el = $(this);
				// Exclude customizer chrome elements
				if ($el.closest('#mw-overlays, .mw-preview-badge, #mw-format-toolbar, #mw-link-popover, .mw-insert-notch').length) {
					return;
				}
				// Exclude parent containers that have nested headings or paragraphs
				if ($el.find('h1, h2, h3, h4, h5, h6, p, ul, ol, blockquote').length > 0) {
					return;
				}
				$el.attr('contenteditable', 'true').addClass('mw-editable');
				if (typeof $el.attr('data-mw-orig-text') === 'undefined') {
					$el.attr('data-mw-orig-text', $el.text().trim());
				}
			});
		});
	}

	// Direct in-canvas text click: maintain focus directly on the element so user can type on-site
	$(document).on('click', '.mw-editable, [data-mw-edit]', function(e) {
		e.stopPropagation();
		$(this).focus();
	});

	function commitMwEditChange($el) {
		if ( ! $el || ! $el.length ) return;
		var $section = $el.closest('.mh-section, .mw-section, .wp-block-group');
		var index = getTargetSections().index($section);
		if ( index === -1 ) {
			index = $('.mh-section, .mw-section').index($section);
		}
		var key = $el.attr('data-mw-edit') || '';
		var origText = $el.attr('data-mw-orig-text') || '';
		var newText = $el.text().trim();

		if ( origText === newText ) return;

		$el.attr('data-mw-orig-text', newText);

		var sections = getSections();
		if ( index > -1 && index < sections.length ) {
			sections[index].edits = sections[index].edits || {};
			var editKey = key || origText || ('text_' + Date.now());
			sections[index].edits[editKey] = newText;

			// Replace in section block content if available
			if ( sections[index].content && origText ) {
				sections[index].content = sections[index].content.replace(origText, newText);
			}
			saveSections(sections);
		}
	}

	$(document).on('blur', '.mw-editable, [data-mw-edit]', function() {
		commitMwEditChange($(this));
	});

	// Commit any active focused section edit before Customizer saves/publishes
	if ( parentApi && parentApi.previewer ) {
		parentApi.previewer.bind('save', function() {
			var $active = $(':focus.mw-editable, :focus[data-mw-edit]');
			if ( $active.length ) {
				commitMwEditChange($active);
			}
		});
	}

	// ── Floating Text Format Toolbar ──────────────────────────
	var $formatToolbar = $(
		'<div id="mw-format-toolbar">' +
			'<button type="button" data-cmd="bold" title="Bold"><strong>B</strong></button>' +
			'<button type="button" data-cmd="italic" title="Italic"><em>I</em></button>' +
			'<button type="button" data-cmd="underline" title="Underline"><u>U</u></button>' +
			'<button type="button" data-cmd="removeFormat" title="Clear Formatting">&times;</button>' +
		'</div>'
	);
	$('body').append($formatToolbar);

	$(document).on('mouseup keyup', '.mw-editable', function() {
		var selection = window.getSelection();
		if ( selection && selection.toString().trim().length > 0 ) {
			var range = selection.getRangeAt(0);
			var rect = range.getBoundingClientRect();
			$formatToolbar.css({
				top: rect.top + window.scrollY - 38,
				left: rect.left + window.scrollX + (rect.width / 2) - ($formatToolbar.outerWidth() / 2),
				display: 'flex'
			});
		} else {
			$formatToolbar.hide();
		}
	});

	$(document).on('mousedown', '#mw-format-toolbar button', function(e) {
		e.preventDefault();
		var cmd = $(this).data('cmd');
		document.execCommand(cmd, false, null);
	});

	$(document).on('mousedown', function(e) {
		if ( !$(e.target).closest('#mw-format-toolbar').length && !$(e.target).closest('.mw-editable').length ) {
			$formatToolbar.hide();
		}
	});

	// ── Section Overlays & Inter-Section Notches ──────────────
	var $overlayContainer = $('<div id="mw-overlays" style="position:absolute;top:0;left:0;width:100%;pointer-events:none;z-index:99990;"></div>');
	$('body').append($overlayContainer);

	function getTargetSections() {
		var $sections = $('#mw-front-content > .wp-block-group, #mw-front-content > .mh-section, .mh-front-page-main > .wp-block-group, .mh-front-page-main > .mh-section, main > .wp-block-group, main > .mh-section');
		if ( ! $sections.length ) {
			$sections = $('.mh-section');
		}
		if ( ! $sections.length ) {
			$sections = $('.entry-content > .wp-block-group');
		}
		return $sections;
	}

	function escHtml(str) {
		if ( ! str ) return '';
		return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	}

	function createOverlays() {
		$overlayContainer.empty();
		var $sections = getTargetSections();
		var sections = getSections();

		$sections.each(function(index) {
			var $section = $(this);
			$section.addClass('mw-section');
			var sectionId = $section.attr('id') || 'section-' + index;

			var s = ( sections && sections[index] ) ? sections[index] : null;
			var label = '';
			if ( s ) {
				if ( s.label ) {
					label = s.label;
				} else if ( s.settings && s.settings.title ) {
					label = s.settings.title;
				} else if ( s.type ) {
					label = s.type.replace(/[-_]/g, ' ');
				}
			}
			if ( ! label ) {
				label = sectionId ? sectionId.replace(/[-_]/g, ' ') : 'Section ' + (index + 1);
			}
			label = label.replace(/^[\s\-_]+/, '');
			label = label.replace(/\b\w/g, function(l) { return l.toUpperCase(); });

			// Overlay frame with Starship Dark Slate Pill Badges matching Header/Hero/Footer controls
			var $overlay = $(
				'<div class="mw-overlay" data-section-index="' + index + '">' +
					'<div class="mw-preview-badge mw-overlay-label">' +
						'<span class="mw-badge-title">' +
							'<span class="dashicons dashicons-screenoptions"></span>' +
							escHtml(label) +
						'</span>' +
					'</div>' +
					'<div class="mw-preview-badge mw-overlay-actions">' +
						'<button type="button" class="mw-preview-btn mw-action-settings" title="Section Settings" data-index="' + index + '">' +
							'<span class="dashicons dashicons-admin-generic"></span> Settings' +
						'</button>' +
						'<button type="button" class="mw-preview-btn mw-action-layout" title="Toggle Contained/Full Width" data-index="' + index + '">' +
							'<span class="dashicons dashicons-editor-expand"></span> Width' +
						'</button>' +
						'<button type="button" class="mw-preview-btn mw-action-up" title="Move Up" data-index="' + index + '">' +
							'<span class="dashicons dashicons-arrow-up-alt2"></span>' +
						'</button>' +
						'<button type="button" class="mw-preview-btn mw-action-down" title="Move Down" data-index="' + index + '">' +
							'<span class="dashicons dashicons-arrow-down-alt2"></span>' +
						'</button>' +
						'<button type="button" class="mw-preview-btn mw-action-delete" title="Remove Section" data-index="' + index + '" style="color:#f87171;">' +
							'<span class="dashicons dashicons-trash"></span>' +
						'</button>' +
					'</div>' +
				'</div>'
			);

			$overlayContainer.append($overlay);
			$overlay.data('section', $section);

			// Inter-section insertion notch (bottom of each section)
			var $notch = $(
				'<div class="mw-insert-notch" data-insert-after="' + index + '">' +
					'<button type="button" class="mw-insert-btn" data-insert-after="' + index + '">' +
						'<span class="dashicons dashicons-plus-alt2" style="font-size:14px;width:14px;height:14px;"></span> Add Section' +
					'</button>' +
				'</div>'
			);
			$overlayContainer.append($notch);
			$notch.data('section', $section);
		});

		positionOverlays();
	}

	function positionOverlays() {
		$overlayContainer.find('.mw-overlay').each(function() {
			var $overlay = $(this);
			var $section = $overlay.data('section');
			if ( !$section || !$section.length ) return;
			var offset = $section.offset();
			$overlay.css({
				top: offset.top,
				left: offset.left,
				width: $section.outerWidth(),
				height: $section.outerHeight()
			});
		});

		$overlayContainer.find('.mw-insert-notch').each(function() {
			var $notch = $(this);
			var $section = $notch.data('section');
			if ( !$section || !$section.length ) return;
			var offset = $section.offset();
			$notch.css({
				top: offset.top + $section.outerHeight(),
				left: offset.left,
				width: $section.outerWidth()
			});
		});
	}

	// Show/hide overlays on hover
	var hideTimeout;
	$(document).on('mouseenter', '.mh-section, .mw-overlay', function() {
		clearTimeout(hideTimeout);
		var index = $(this).hasClass('mw-overlay') 
			? $(this).attr('data-section-index') 
			: $('.mh-section').index(this);
			
		$overlayContainer.find('.mw-overlay').removeClass('active');
		$overlayContainer.find('.mw-overlay[data-section-index="' + index + '"]').addClass('active');
	});

	$(document).on('mouseleave', '.mh-section, .mw-overlay', function() {
		hideTimeout = setTimeout(function() {
			$overlayContainer.find('.mw-overlay').removeClass('active');
		}, 120);
	});

	// Trigger Add Section from notch
	$(document).on('click', '.mw-insert-btn', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var afterIdx = parseInt($(this).data('insert-after'), 10);
		if ( typeof parent.mhOpenAddSectionPanel === 'function' ) {
			parent.mhOpenAddSectionPanel(afterIdx + 1);
		} else if ( parentApi && parentApi.section ) {
			parentApi.section('mh_page_builder').focus();
		}
	});

	function extractSectionsFromDom() {
		var harvested = [];
		var $sections = getTargetSections();
		$sections.each(function(i) {
			var $sec = $(this);
			var type = $sec.attr('data-section-type');
			if (!type) {
				var cls = $sec.attr('class') || '';
				var m = cls.match(/\bmh-section-([a-z0-9-]+)\b/);
				if (m && m[1] && m[1] !== 'boxed' && m[1] !== 'full-width') {
					type = m[1];
				} else {
					type = 'custom';
				}
			}
			var anchor = $sec.attr('id') || ('section-' + (i + 1));
			var heading = $sec.find('h1, h2, h3, h4, h5, h6, [data-mw-edit="title"]').first().text().trim();
			var sub = $sec.find('p.has-text-muted-color, [data-mw-edit="subtitle"]').first().text().trim();
			var label = heading || anchor.replace(/[-_]/g, ' ');
			label = label.replace(/\b\w/g, function(l) { return l.toUpperCase(); });
			var isFull = $sec.hasClass('mh-section-full-width');

			// Collect living element outline of the section for the Side Rail Element Navigator
			var elements = [];
			$sec.find('h1, h2, h3, h4, h5, h6, p, .wp-block-button__link, img').each(function(eIdx) {
				var $el = $(this);
				if ($el.closest('#mw-overlays, .mw-preview-badge, #mw-format-toolbar, .mw-insert-notch, #mw-link-popover').length) {
					return;
				}
				var tag = this.tagName.toLowerCase();
				var text = (tag === 'img') ? ($el.attr('alt') || $el.attr('src') || 'Image') : $el.text().trim();
				if (!text && tag !== 'img') return;
				if (text.length > 36) text = text.substring(0, 33) + '...';
				elements.push({
					tag: tag,
					text: text,
					selector: tag + ':eq(' + $sec.find(tag).index($el) + ')'
				});
			});

			harvested.push({
				type: type,
				id: 'section_' + i,
				label: label,
				elements: elements,
				settings: {
					title: heading || label,
					subtitle: sub || '',
					layout: isFull ? 'full' : 'contained',
					anchor: anchor
				}
			});
		});
		return harvested;
	}

	var domHarvestedOnce = false;

	function getSections() {
		if ( window.mhPreviewData && Array.isArray( window.mhPreviewData.sections ) ) {
			return window.mhPreviewData.sections;
		}
		try {
			var raw = ( parentApi && parentApi('mh_page_sections') ) ? parentApi('mh_page_sections').get() : null;
			if ( raw !== null && typeof raw !== 'undefined' ) {
				var parsed = JSON.parse( raw || '[]' );
				if ( Array.isArray( parsed ) ) {
					if ( window.mhPreviewData ) {
						window.mhPreviewData.sections = parsed;
					}
					return parsed;
				}
			}
		} catch(e) {}

		if ( ! domHarvestedOnce ) {
			domHarvestedOnce = true;
			var harvested = extractSectionsFromDom();
			if ( harvested.length ) {
				if ( window.mhPreviewData ) {
					window.mhPreviewData.sections = harvested;
				}
				if ( parentApi && parentApi('mh_page_sections') ) {
					parentApi('mh_page_sections').set(JSON.stringify(harvested));
				}
				return harvested;
			}
		}

		return (window.mhPreviewData && Array.isArray(window.mhPreviewData.sections)) ? window.mhPreviewData.sections : [];
	}

	function saveSections(arr) {
		if ( window.mhPreviewData ) {
			window.mhPreviewData.sections = arr;
			if ( parentApi && parentApi.previewer ) {
				parentApi.previewer.send( 'mh-page-sections-updated', {
					pageId: window.mhPreviewData.pageId,
					sections: arr
				} );
			}
			if ( window.mhPreviewData.ajaxUrl && window.mhPreviewData.pageId ) {
				$.post( window.mhPreviewData.ajaxUrl, {
					action: 'mh_save_page_sections',
					page_id: window.mhPreviewData.pageId,
					sections: JSON.stringify( arr ),
					_ajax_nonce: window.mhPreviewData.nonce,
					nonce: window.mhPreviewData.nonce
				} );
			}
		}

		if ( parentApi && parentApi('mh_page_sections') ) {
			parentApi('mh_page_sections').set(JSON.stringify(arr));
		}
	}

	$(document).on('click', '.mw-action-delete', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var $btn = $(this).closest('button');
		var idx = parseInt($btn.attr('data-index'), 10);
		if ( isNaN(idx) ) return;

		var sections = getSections();
		if ( idx < 0 || idx >= sections.length ) return;

		sections.splice(idx, 1);
		saveSections(sections);

		var $sections = getTargetSections();
		var $curr = $sections.eq(idx);
		$overlayContainer.find('.mw-overlay').removeClass('active');
		if ( $curr.length ) {
			$curr.slideUp(180, function() {
				$(this).remove();
				createOverlays();
			});
		} else {
			createOverlays();
		}
	});

	$(document).on('click', '.mw-action-up', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var $btn = $(this).closest('button');
		var idx = parseInt($btn.attr('data-index'), 10);
		if ( isNaN(idx) || idx <= 0 ) return;

		var sections = getSections();
		if ( idx >= sections.length ) return;

		var temp = sections[idx - 1];
		sections[idx - 1] = sections[idx];
		sections[idx] = temp;
		saveSections(sections);

		var $sections = getTargetSections();
		var $curr = $sections.eq(idx);
		var $prev = $sections.eq(idx - 1);
		if ( $curr.length && $prev.length ) {
			$curr.insertBefore($prev);
			$('html, body').stop().animate({
				scrollTop: $curr.offset().top - 40
			}, 200);
		}

		createOverlays();
		$overlayContainer.find('.mw-overlay[data-section-index="' + (idx - 1) + '"]').addClass('active');
	});

	$(document).on('click', '.mw-action-down', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var $btn = $(this).closest('button');
		var idx = parseInt($btn.attr('data-index'), 10);
		if ( isNaN(idx) ) return;

		var sections = getSections();
		if ( idx >= sections.length - 1 ) return;

		var temp = sections[idx + 1];
		sections[idx + 1] = sections[idx];
		sections[idx] = temp;
		saveSections(sections);

		var $sections = getTargetSections();
		var $curr = $sections.eq(idx);
		var $next = $sections.eq(idx + 1);
		if ( $curr.length && $next.length ) {
			$curr.insertAfter($next);
			$('html, body').stop().animate({
				scrollTop: $curr.offset().top - 40
			}, 200);
		}

		createOverlays();
		$overlayContainer.find('.mw-overlay[data-section-index="' + (idx + 1) + '"]').addClass('active');
	});

	$(document).on('click', '.mw-action-layout', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var $btn = $(this).closest('button');
		var idx = parseInt($btn.attr('data-index'), 10);
		if ( isNaN(idx) ) return;

		var sections = getSections();
		if ( idx < 0 || idx >= sections.length ) return;

		if ( !sections[idx].settings ) sections[idx].settings = {};
		var currentLayout = sections[idx].settings.layout || 'contained';
		var newLayout = (currentLayout === 'full') ? 'contained' : 'full';
		sections[idx].settings.layout = newLayout;
		saveSections(sections);

		var $sections = getTargetSections();
		var $curr = $sections.eq(idx);
		if ( $curr.length ) {
			if ( newLayout === 'full' ) {
				$curr.removeClass('mh-section-boxed alignwide').addClass('mh-section-full-width alignfull');
			} else {
				$curr.removeClass('mh-section-full-width alignfull').addClass('mh-section-boxed alignwide');
			}
			positionOverlays();
		}
	});

	$(document).on('click', '.mw-action-settings', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var $btn = $(this).closest('button');
		var idx = parseInt($btn.attr('data-index'), 10);
		if ( isNaN(idx) ) return;

		if ( parentApi && parentApi.section && parentApi.section('mh_page_builder') ) {
			parentApi.section('mh_page_builder').expand();
		}
		if ( typeof parent.mhOpenSectionSideRail === 'function' ) {
			parent.mhOpenSectionSideRail(idx);
		}
		if ( parentApi && parentApi.previewer ) {
			var sections = getSections();
			var secElements = (sections[idx] && sections[idx].elements) ? sections[idx].elements : [];
			parentApi.previewer.send('mh-open-section-side-rail', { index: idx, elements: secElements });
		}
	});

	// ── Image Replacement (WP Media Library) ──────────────────
	var mediaFrame;
	$(document).on('click', '[data-mw-image], .mh-section img, .mw-section img, .wp-block-image img', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var $el = $(this);
		var $section = $el.closest('.mh-section, .mw-section, .wp-block-group');
		var index = getTargetSections().index($section);
		if ( index === -1 ) index = $('.mh-section').index($section);
		var key = $el.attr('data-mw-image') || ('img_' + $section.find('img').index($el));
		var oldSrc = $el.attr('src') || '';
		
		if ( mediaFrame ) {
			mediaFrame.off('select');
		}
		
		mediaFrame = (parent.wp && parent.wp.media) ? parent.wp.media({
			title: 'Select or Upload Image',
			button: { text: 'Use this Image' },
			multiple: false
		}) : null;

		if ( !mediaFrame ) return;
		
		mediaFrame.on('select', function() {
			var attachment = mediaFrame.state().get('selection').first().toJSON();
			var newSrc = attachment.url;
			$el.attr('src', newSrc);
			$el.removeAttr('srcset');
			
			var sections = getSections();
			if ( index > -1 && index < sections.length ) {
				if ( !sections[index].edits ) sections[index].edits = {};
				sections[index].edits[key] = newSrc;
				if ( sections[index].content && oldSrc ) {
					sections[index].content = sections[index].content.replace(oldSrc, newSrc);
				}
				saveSections(sections);
			}
		});
		
		mediaFrame.open();
	});

	// ── Link Popover ──────────────────────────────────────────
	var $linkPopover = $(
		'<div id="mw-link-popover" style="position:absolute;display:none;background:#0f172a;padding:8px 12px;border-radius:9999px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.4);z-index:99999;border:1px solid rgba(255,255,255,0.18);gap:6px;align-items:center;">' +
			'<input type="text" placeholder="https:// or #anchor" style="border:1px solid rgba(255,255,255,0.2);background:#1e293b;padding:5px 10px;border-radius:9999px;font-size:12px;color:#f8fafc;width:200px;outline:none;" />' +
			'<button type="button" style="background:#2563eb;color:#ffffff;border:none;border-radius:9999px;padding:5px 12px;cursor:pointer;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Apply</button>' +
		'</div>'
	);
	$('body').append($linkPopover);

	var currentLinkEl = null;

	$(document).on('click', 'a[data-mw-edit], .mh-section .wp-block-button__link, .mw-section .wp-block-button__link, .mh-section a.button, .mw-section a.button', function(e) {
		e.preventDefault();
		currentLinkEl = $(this);
		var offset = currentLinkEl.offset();
		var urlKey = (currentLinkEl.attr('data-mw-edit') || 'btn') + '_url';
		var sections = getSections();
		var $section = currentLinkEl.closest('.mh-section, .mw-section, .wp-block-group');
		var index = getTargetSections().index($section);
		if ( index === -1 ) index = $('.mh-section').index($section);

		var currentUrl = '#';
		if ( sections[index] && sections[index].edits && sections[index].edits[urlKey] ) {
			currentUrl = sections[index].edits[urlKey];
		} else {
			currentUrl = currentLinkEl.attr('href') || '#';
		}

		$linkPopover.find('input').val(currentUrl);
		$linkPopover.css({
			top: Math.max(10, offset.top - $linkPopover.outerHeight() - 8),
			left: Math.max(10, offset.left),
			display: 'flex'
		});
	});

	$linkPopover.find('button').on('click', function(e) {
		e.stopPropagation();
		if ( !currentLinkEl ) return;
		var newUrl = $linkPopover.find('input').val() || '#';
		var oldUrl = currentLinkEl.attr('href') || '#';
		var urlKey = (currentLinkEl.attr('data-mw-edit') || 'btn') + '_url';
		var $section = currentLinkEl.closest('.mh-section, .mw-section, .wp-block-group');
		var index = getTargetSections().index($section);
		if ( index === -1 ) index = $('.mh-section').index($section);
		
		currentLinkEl.attr('href', newUrl);
		
		var sections = getSections();
		if ( index > -1 && index < sections.length ) {
			if ( !sections[index].edits ) sections[index].edits = {};
			sections[index].edits[urlKey] = newUrl;
			if ( sections[index].content && oldUrl && oldUrl !== newUrl ) {
				sections[index].content = sections[index].content.replace('href="' + oldUrl + '"', 'href="' + newUrl + '"');
			}
			saveSections(sections);
		}
		$linkPopover.hide();
		currentLinkEl = null;
	});

	$(document).on('click', function(e) {
		if ( !$(e.target).closest('#mw-link-popover').length && !$(e.target).closest('a[data-mw-edit], .wp-block-button__link, a.button').length ) {
			$linkPopover.hide();
			currentLinkEl = null;
		}
	});

	// ── Initialize ────────────────────────────────────────────
	$(document).ready(function() {
		setTimeout(function() {
			initEditables();
			createOverlays();
		}, 400);

		// Notify Customizer controls of current page data
		if ( parentApi && parentApi.previewer && window.mhPreviewData ) {
			if ( ! window.mhPreviewData.sections || ! window.mhPreviewData.sections.length ) {
				window.mhPreviewData.sections = getSections();
			}
			parentApi.previewer.send( 'mh-preview-page-loaded', window.mhPreviewData );
		}

		if ( window.wp && window.wp.customize && window.wp.customize.preview ) {
			window.wp.customize.preview.bind('mh-scroll-to', function(slug) {
				var $el = $('#' + slug);
				if ($el.length) {
					$('html, body').animate({ scrollTop: $el.offset().top - 32 }, 300);
				}
			});

			window.wp.customize.preview.bind('mh-focus-element', function(data) {
				if (!data || typeof data.index === 'undefined') return;
				var $sections = getTargetSections();
				var $sec = $sections.eq(data.index);
				if (!$sec.length) return;
				var $target = data.selector ? $sec.find(data.selector).first() : $sec;
				if ($target.length) {
					$('html, body').stop().animate({ scrollTop: Math.max(0, $target.offset().top - 90) }, 250);
					$target.focus();
					var origOutline = $target.css('outline');
					$target.css({ 'outline': '2px solid #62c9ff', 'outline-offset': '4px' });
					setTimeout(function() {
						$target.css('outline', origOutline);
					}, 1400);
				}
			});

			window.wp.customize.preview.bind('mh-section-removed', function(data) {
				if ( ! data || typeof data.index === 'undefined' ) return;
				var idx = parseInt(data.index, 10);
				if ( isNaN(idx) ) return;

				if ( window.mhPreviewData && Array.isArray(window.mhPreviewData.sections) && idx >= 0 && idx < window.mhPreviewData.sections.length ) {
					window.mhPreviewData.sections.splice(idx, 1);
				}

				var $sections = getTargetSections();
				var $sec = $sections.eq(idx);
				if ( $sec.length ) {
					$sec.slideUp(180, function() {
						$(this).remove();
						createOverlays();
					});
				} else {
					createOverlays();
				}
			});

			window.wp.customize.preview.bind('mh-update-section-preview', function(data) {
				if ( ! data || typeof data.index === 'undefined' ) return;
				var $sections = getTargetSections();
				var $sec = $sections.eq(data.index);
				if ( ! $sec.length ) return;

				var s = data.section || {};
				var set = s.settings || {};

				// Container layout width
				if ( set.layout === 'full' ) {
					$sec.removeClass('mh-section-boxed').addClass('mh-section-full-width');
				} else {
					$sec.removeClass('mh-section-full-width').addClass('mh-section-boxed');
				}

				// Spacing padding
				var padMap = { compact: '32px', normal: '64px', spacious: '96px', extra: '128px' };
				if ( set.padding_top ) {
					$sec.css('padding-top', padMap[set.padding_top] || set.padding_top);
				}
				if ( set.padding_bottom ) {
					$sec.css('padding-bottom', padMap[set.padding_bottom] || set.padding_bottom);
				}

				// Background
				if ( set.bg_type === 'color' && set.bg_color ) {
					$sec.css({ 'background-color': set.bg_color, 'background-image': 'none' });
				} else if ( set.bg_type === 'gradient' && set.bg_gradient ) {
					$sec.css({ 'background-image': set.bg_gradient, 'background-color': 'transparent' });
				} else if ( set.bg_type === 'image' && set.bg_image ) {
					$sec.css({
						'background-image': 'url(' + set.bg_image + ')',
						'background-size': 'cover',
						'background-position': 'center'
					});
				} else if ( set.bg_type === 'surface' ) {
					$sec.css({ 'background-color': 'var(--mh-color-surface-card, #f8fafc)', 'background-image': 'none' });
				} else if ( set.bg_type === 'default' ) {
					$sec.css({ 'background': '', 'background-color': '', 'background-image': '' });
				}

				// Text color scheme
				if ( set.text_scheme === 'light' ) {
					$sec.addClass('has-light-text').removeClass('has-dark-text');
				} else if ( set.text_scheme === 'dark' ) {
					$sec.addClass('has-dark-text').removeClass('has-light-text');
				} else {
					$sec.removeClass('has-light-text has-dark-text');
				}

				// Section ID
				if ( s.label || set.anchor ) {
					var slug = set.anchor ? set.anchor.toLowerCase().replace(/[^a-z0-9]+/g, '-') : (s.label ? s.label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'section-' + (data.index + 1));
					$sec.attr('id', slug);
				}

				// Ensure editables are initialized on any modified markup
				initEditables();

				// Re-hydrate any Vue 3 Quantum Atoms on the canvas
				if ( window.XophzMagicWandAtoms && typeof window.XophzMagicWandAtoms.mount === 'function' ) {
					try {
						window.XophzMagicWandAtoms.mount();
					} catch (e) {
						// Safe re-mount fallback
					}
				}


				positionOverlays();
			});
		}
	});

	$(window).on('resize', function() {
		positionOverlays();
	});

})(jQuery);
