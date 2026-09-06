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
		':root { --mw-brand: var(--mh-color-brand-base, var(--wp--preset--color--brand-base, #2563eb)); --mw-brand-hover: var(--mh-color-brand-hover, #3b82f6); --mw-dark: var(--mh-color-text-heading, #0f172a); }' +
		'.mw-overlay { position: absolute; pointer-events: none; border: 2px solid var(--mw-brand); border-radius: 4px; z-index: 99990; opacity: 0; transition: opacity 0.15s, border-color 0.15s; box-shadow: 0 0 0 1px color-mix(in srgb, var(--mw-brand) 20%, transparent); }' +
		'.mw-overlay.active { opacity: 1; }' +
		'.mw-overlay-label { position: absolute; top: -1px; left: -1px; background: var(--mw-dark); color: #ffffff; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; padding: 4px 10px; border-radius: 0 0 6px 0; pointer-events: auto; white-space: nowrap; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.15); }' +
		'.mw-overlay-actions { position: absolute; top: -1px; right: -1px; display: flex; pointer-events: auto; background: var(--mw-dark); border-radius: 0 0 0 6px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.15); }' +
		'.mw-overlay-actions button { background: var(--mw-dark); color: #f8fafc; border: none; width: 28px; height: 26px; font-size: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }' +
		'.mw-overlay-actions button:hover { background: var(--mw-brand); color: #ffffff; }' +
		'.mw-overlay-actions button.mw-action-delete:hover { background: #ef4444; }' +
		'.mw-editable { outline: none; cursor: text; transition: box-shadow 0.15s; }' +
		'.mw-editable:focus { box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--mw-brand) 40%, transparent); border-radius: 2px; }' +
		'.mw-section { position: relative; }' +
		'.mw-section:hover { outline: 1px dashed color-mix(in srgb, var(--mw-brand) 40%, transparent); outline-offset: 2px; }' +
		
		// Inter-section insertion notch
		'.mw-insert-notch { position: absolute; left: 0; right: 0; height: 16px; transform: translateY(-50%); z-index: 99995; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.15s; pointer-events: auto; }' +
		'.mw-insert-notch:hover, .mw-insert-notch.active { opacity: 1; }' +
		'.mw-insert-notch::before { content: ""; position: absolute; left: 10%; right: 10%; height: 2px; background: var(--mw-brand); border-radius: 1px; }' +
		'.mw-insert-btn { position: relative; background: var(--mw-brand); color: #ffffff; border: none; border-radius: 9999px; padding: 3px 12px; font-size: 11px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 4px; box-shadow: 0 2px 6px color-mix(in srgb, var(--mw-brand) 35%, transparent); transition: transform 0.15s, background 0.15s; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }' +
		'.mw-insert-btn:hover { background: var(--mw-brand-hover); transform: scale(1.05); }' +

		// Floating Text Formatting Toolbar
		'#mw-format-toolbar { position: absolute; display: none; background: var(--mw-dark); border-radius: 6px; padding: 4px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3); z-index: 99999; gap: 2px; align-items: center; }' +
		'#mw-format-toolbar button { background: transparent; color: #f8fafc; border: none; width: 26px; height: 26px; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.15s; }' +
		'#mw-format-toolbar button:hover { background: rgba(255,255,255,0.15); color: #60a5fa; }' +
		
		// Image hover indicator
		'[data-mw-image]:hover { outline: 2px dashed var(--mw-brand); outline-offset: 2px; cursor: pointer; filter: brightness(0.95); }' +
		
		// Popovers
		'#mw-link-popover, #mw-shortcode-popover { border-radius: 6px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.15); border: 1px solid var(--mh-color-border-muted, #e2e8f0); }';

	$('head').append('<style>' + css + '</style>');

	// ── Editable Text Elements ────────────────────────────────
	function initEditables() {
		$('.mh-section [data-mw-edit]').each(function() {
			$(this).attr('contenteditable', 'true').addClass('mw-editable');
		});
	}

	$(document).on('blur', '[data-mw-edit]', function() {
		var $el = $(this);
		var $section = $el.closest('.mh-section');
		var index = $('.mh-section').index($section);
		var key = $el.attr('data-mw-edit');
		var newText = $el.text().trim();

		var sections = getSections();
		if ( index > -1 && index < sections.length ) {
			if ( !sections[index].edits ) {
				sections[index].edits = {};
			}
			sections[index].edits[key] = newText;
			saveSections(sections);
		}
	});

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

	function createOverlays() {
		$overlayContainer.empty();
		var $sections = $('.mh-section');

		$sections.each(function(index) {
			var $section = $(this);
			$section.addClass('mw-section');
			var sectionId = $section.attr('id') || 'section-' + index;
			var label = sectionId.replace(/-/g, ' ');

			// Overlay frame
			var $overlay = $(
				'<div class="mw-overlay" data-section-index="' + index + '">' +
					'<span class="mw-overlay-label">' +
						'<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#2563eb;"></span>' +
						label +
					'</span>' +
					'<div class="mw-overlay-actions">' +
						'<button type="button" class="mw-action-up" title="Move Up" data-index="' + index + '">&#8593;</button>' +
						'<button type="button" class="mw-action-down" title="Move Down" data-index="' + index + '">&#8595;</button>' +
						'<button type="button" class="mw-action-layout" title="Toggle Contained/Full Width" data-index="' + index + '">&#9974;</button>' +
						'<button type="button" class="mw-action-settings" title="Section Settings" data-index="' + index + '">&#9881;</button>' +
						'<button type="button" class="mw-action-delete" title="Remove Section" data-index="' + index + '">&times;</button>' +
					'</div>' +
				'</div>'
			);

			$overlayContainer.append($overlay);
			$overlay.data('section', $section);

			// Inter-section insertion notch (bottom of each section)
			var $notch = $(
				'<div class="mw-insert-notch" data-insert-after="' + index + '">' +
					'<button type="button" class="mw-insert-btn" data-insert-after="' + index + '">+ Add Section</button>' +
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

	// ── Section Actions (Reorder / Delete / Width / Settings) ──
	function getSections() {
		if ( window.mhPreviewData && window.mhPreviewData.sections ) {
			return window.mhPreviewData.sections;
		}
		try { return JSON.parse(parentApi('mh_page_sections').get() || '[]'); }
		catch(e) { return []; }
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
					_ajax_nonce: window.mhPreviewData.nonce
				} );
			}
		}
		if ( !window.mhPreviewData || window.mhPreviewData.isFrontPage ) {
			if ( parentApi && parentApi('mh_page_sections') ) {
				parentApi('mh_page_sections').set(JSON.stringify(arr));
			}
		}
	}

	$(document).on('click', '.mw-action-delete', function(e) {
		e.stopPropagation();
		var idx = parseInt($(this).data('index'), 10);
		var sections = getSections();
		if ( idx > -1 && idx < sections.length ) {
			sections.splice(idx, 1);
			saveSections(sections);
		}
	});

	$(document).on('click', '.mw-action-up', function(e) {
		e.stopPropagation();
		var idx = parseInt($(this).data('index'), 10);
		var sections = getSections();
		if ( idx > 0 ) {
			var temp = sections[idx - 1];
			sections[idx - 1] = sections[idx];
			sections[idx] = temp;
			saveSections(sections);
		}
	});

	$(document).on('click', '.mw-action-down', function(e) {
		e.stopPropagation();
		var idx = parseInt($(this).data('index'), 10);
		var sections = getSections();
		if ( idx < sections.length - 1 ) {
			var temp = sections[idx + 1];
			sections[idx + 1] = sections[idx];
			sections[idx] = temp;
			saveSections(sections);
		}
	});

	$(document).on('click', '.mw-action-layout', function(e) {
		e.stopPropagation();
		var idx = parseInt($(this).data('index'), 10);
		var sections = getSections();
		if ( idx > -1 && idx < sections.length ) {
			if ( !sections[idx].settings ) sections[idx].settings = {};
			sections[idx].settings.layout = sections[idx].settings.layout === 'full' ? 'contained' : 'full';
			saveSections(sections);
		}
	});

	$(document).on('click', '.mw-action-settings', function(e) {
		e.stopPropagation();
		if ( parentApi && parentApi.section ) {
			parentApi.section('mh_page_builder').focus();
		}
	});

	// ── Image Replacement (WP Media Library) ──────────────────
	var mediaFrame;
	$(document).on('click', '[data-mw-image]', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var $el = $(this);
		var $section = $el.closest('.mh-section');
		var index = $('.mh-section').index($section);
		var key = $el.attr('data-mw-image');
		
		if ( mediaFrame ) {
			mediaFrame.open();
			return;
		}
		
		mediaFrame = parent.wp.media({
			title: 'Select or Upload Image',
			button: { text: 'Use this Image' },
			multiple: false
		});
		
		mediaFrame.on('select', function() {
			var attachment = mediaFrame.state().get('selection').first().toJSON();
			var newSrc = attachment.url;
			$el.attr('src', newSrc);
			
			var sections = getSections();
			if ( index > -1 && index < sections.length ) {
				if ( !sections[index].edits ) sections[index].edits = {};
				sections[index].edits[key] = newSrc;
				saveSections(sections);
			}
		});
		
		mediaFrame.open();
	});

	// ── Link Popover ──────────────────────────────────────────
	var $linkPopover = $(
		'<div id="mw-link-popover" style="position:absolute;display:none;background:#ffffff;padding:8px;border-radius:6px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.15);z-index:99999;border:1px solid #e2e8f0;display:flex;gap:6px;align-items:center;">' +
			'<input type="text" placeholder="https://" style="border:1px solid #cbd5e1;padding:6px 10px;border-radius:4px;font-size:12px;color:#0f172a;width:220px;outline:none;" />' +
			'<button type="button" style="background:#2563eb;color:#ffffff;border:none;border-radius:4px;padding:6px 12px;cursor:pointer;font-size:12px;font-weight:600;">Apply</button>' +
		'</div>'
	);
	$('body').append($linkPopover);

	var currentLinkEl = null;

	$(document).on('click', 'a[data-mw-edit]', function(e) {
		e.preventDefault();
		currentLinkEl = $(this);
		var offset = currentLinkEl.offset();
		var urlKey = currentLinkEl.attr('data-mw-edit') + '_url';
		var sections = getSections();
		var index = $('.mh-section').index(currentLinkEl.closest('.mh-section'));
		var currentUrl = '#';
		if (sections[index] && sections[index].edits && sections[index].edits[urlKey]) {
			currentUrl = sections[index].edits[urlKey];
		} else {
			currentUrl = currentLinkEl.attr('href');
		}

		$linkPopover.find('input').val(currentUrl);
		$linkPopover.css({
			top: offset.top - $linkPopover.outerHeight() - 8,
			left: offset.left,
			display: 'flex'
		});
	});

	$linkPopover.find('button').on('click', function(e) {
		e.stopPropagation();
		if ( !currentLinkEl ) return;
		var newUrl = $linkPopover.find('input').val();
		var urlKey = currentLinkEl.attr('data-mw-edit') + '_url';
		var index = $('.mh-section').index(currentLinkEl.closest('.mh-section'));
		
		currentLinkEl.attr('href', newUrl);
		
		var sections = getSections();
		if ( index > -1 && index < sections.length ) {
			if ( !sections[index].edits ) sections[index].edits = {};
			sections[index].edits[urlKey] = newUrl;
			saveSections(sections);
		}
		$linkPopover.hide();
		currentLinkEl = null;
	});

	$(document).on('click', function(e) {
		if ( !$(e.target).closest('#mw-link-popover').length && !$(e.target).closest('a[data-mw-edit]').length ) {
			$linkPopover.hide();
			currentLinkEl = null;
		}
	});

	// ── Shortcode Popover ─────────────────────────────────────
	var $shortcodePopover = $(
		'<div id="mw-shortcode-popover" style="position:absolute;display:none;background:#ffffff;padding:8px;border-radius:6px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.15);z-index:99999;border:1px solid #e2e8f0;display:flex;gap:6px;align-items:center;">' +
			'<input type="text" placeholder="[shortcode]" style="border:1px solid #cbd5e1;padding:6px 10px;border-radius:4px;font-size:12px;color:#0f172a;width:220px;font-family:monospace;outline:none;" />' +
			'<button type="button" style="background:#2563eb;color:#ffffff;border:none;border-radius:4px;padding:6px 12px;cursor:pointer;font-size:12px;font-weight:600;">Apply</button>' +
		'</div>'
	);
	$('body').append($shortcodePopover);

	var currentShortcodeEl = null;

	$(document).on('click', '[data-mw-shortcode]', function(e) {
		e.preventDefault();
		e.stopPropagation();
		currentShortcodeEl = $(this);
		var offset = currentShortcodeEl.offset();
		var key = currentShortcodeEl.attr('data-mw-shortcode');
		var sections = getSections();
		var index = $('.mh-section').index(currentShortcodeEl.closest('.mh-section'));
		var currentVal = '[contact-form-7]';
		if (sections[index] && sections[index].edits && sections[index].edits[key]) {
			currentVal = sections[index].edits[key];
		}

		$shortcodePopover.find('input').val(currentVal);
		$shortcodePopover.css({
			top: offset.top - $shortcodePopover.outerHeight() - 8,
			left: offset.left,
			display: 'flex'
		});
	});

	$shortcodePopover.find('button').on('click', function(e) {
		e.stopPropagation();
		if ( !currentShortcodeEl ) return;
		var newVal = $shortcodePopover.find('input').val();
		var key = currentShortcodeEl.attr('data-mw-shortcode');
		var index = $('.mh-section').index(currentShortcodeEl.closest('.mh-section'));
		
		var sections = getSections();
		if ( index > -1 && index < sections.length ) {
			if ( !sections[index].edits ) sections[index].edits = {};
			sections[index].edits[key] = newVal;
			saveSections(sections);
		}
		$shortcodePopover.hide();
		currentShortcodeEl = null;
	});

	$(document).on('click', function(e) {
		if ( !$(e.target).closest('#mw-shortcode-popover').length && !$(e.target).closest('[data-mw-shortcode]').length ) {
			$shortcodePopover.hide();
			currentShortcodeEl = null;
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
			parentApi.previewer.send( 'mh-preview-page-loaded', window.mhPreviewData );
		}

		if ( window.wp && window.wp.customize && window.wp.customize.preview ) {
			window.wp.customize.preview.bind('mh-scroll-to', function(slug) {
				var $el = $('#' + slug);
				if ($el.length) {
					$('html, body').animate({ scrollTop: $el.offset().top - 32 }, 300);
				}
			});
		}
	});

	$(window).on('resize', function() {
		positionOverlays();
	});

})(jQuery);
