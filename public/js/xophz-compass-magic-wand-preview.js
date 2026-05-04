/**
 * Magic Wand - Preview Handles
 * Runs INSIDE the Customizer preview iframe.
 * Adds hover overlays, inline text editing, and section-level controls.
 */
(function($) {
	'use strict';

	// Only run inside Customizer preview
	if ( !window.parent || !window.parent.wp || !window.parent.wp.customize ) {
		return;
	}

	var parentApi = window.parent.wp.customize;

	// ── Styles ────────────────────────────────────────────────
	var css =
		'.mw-overlay{position:absolute;pointer-events:none;border:2px solid #c3a486;border-radius:3px;z-index:99990;opacity:0;transition:opacity .15s;}' +
		'.mw-overlay.active{opacity:1;}' +
		'.mw-overlay-label{position:absolute;top:-1px;left:-1px;background:#c3a486;color:#fff;font-size:10px;font-weight:600;letter-spacing:.5px;text-transform:uppercase;padding:2px 8px;border-radius:0 0 3px 0;pointer-events:auto;white-space:nowrap;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;}' +
		'.mw-overlay-actions{position:absolute;top:-1px;right:-1px;display:flex;gap:2px;pointer-events:auto;}' +
		'.mw-overlay-actions button{background:#c3a486;color:#fff;border:none;width:24px;height:24px;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;}' +
		'.mw-overlay-actions button:hover{background:#a88c6d;}' +
		'.mw-editable{outline:none;cursor:text;}' +
		'.mw-editable:focus{box-shadow:inset 0 0 0 2px rgba(195,164,134,0.4);border-radius:2px;}' +
		'.mw-section:hover{outline:1px dashed rgba(195,164,134,0.3);outline-offset:2px;}' +
		'.mw-add-section-preview:hover button{opacity:0.85;transform:translateY(-1px);}';

	$('head').append('<style>' + css + '</style>');

	// ── Editable elements ────────────────────────────────────
	// Mark text elements as editable when in customizer
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

	// ── Section overlays ─────────────────────────────────────
	var $overlayContainer = $('<div id="mw-overlays" style="position:absolute;top:0;left:0;width:100%;pointer-events:none;z-index:99990;"></div>');
	$('body').append($overlayContainer);

	function createOverlays() {
		$overlayContainer.empty();
		$('.mh-section').each(function(index) {
			var $section = $(this);
			$section.addClass('mw-section');
			var sectionId = $section.attr('id') || 'section-' + index;
			var label = sectionId.replace(/-/g, ' ');

			var $overlay = $('<div class="mw-overlay" data-section-index="' + index + '">' +
				'<span class="mw-overlay-label">' + label + '</span>' +
				'<div class="mw-overlay-actions">' +
					'<button class="mw-action-layout" title="Toggle Layout Width" data-index="' + index + '">⛶</button>' +
					'<button class="mw-action-up" title="Move up" data-index="' + index + '">↑</button>' +
					'<button class="mw-action-down" title="Move down" data-index="' + index + '">↓</button>' +
					'<button class="mw-action-delete" title="Remove" data-index="' + index + '">×</button>' +
				'</div>' +
			'</div>');

			$overlayContainer.append($overlay);
			$overlay.data('section', $section);
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
		}, 100);
	});

	// ── Section actions (reorder / delete via parent API) ─────
	function getSections() {
		try { return JSON.parse(parentApi('mh_page_sections').get() || '[]'); }
		catch(e) { return []; }
	}

	function saveSections(arr) {
		parentApi('mh_page_sections').set(JSON.stringify(arr));
	}

	$(document).on('click', '.mw-action-delete', function(e) {
		e.stopPropagation();
		var idx = parseInt($(this).data('index'));
		var sections = getSections();
		if ( idx > -1 && idx < sections.length ) {
			sections.splice(idx, 1);
			saveSections(sections);
		}
	});

	$(document).on('click', '.mw-action-up', function(e) {
		e.stopPropagation();
		var idx = parseInt($(this).data('index'));
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
		var idx = parseInt($(this).data('index'));
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
		var idx = parseInt($(this).data('index'));
		var sections = getSections();
		if ( idx > -1 && idx < sections.length ) {
			if ( !sections[idx].settings ) sections[idx].settings = {};
			sections[idx].settings.layout = sections[idx].settings.layout === 'full' ? 'contained' : 'full';
			saveSections(sections);
		}
	});

	// ── Images ───────────────────────────────────────────────
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
			title: 'Select Image',
			button: { text: 'Use this image' },
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

	// ── Links ────────────────────────────────────────────────
	var $linkPopover = $('<div id="mw-link-popover" style="position:absolute;display:none;background:#fff;padding:8px;border-radius:4px;box-shadow:0 2px 10px rgba(0,0,0,0.1);z-index:99991;border:1px solid #ddd;display:flex;gap:4px;">' +
		'<input type="text" placeholder="https://" style="border:1px solid #ddd;padding:4px 8px;border-radius:2px;font-size:12px;color:#333;width:200px;" />' +
		'<button style="background:#c3a486;color:#fff;border:none;border-radius:2px;padding:4px 8px;cursor:pointer;font-size:12px;">OK</button>' +
	'</div>');
	$('body').append($linkPopover);

	var currentLinkEl = null;

	$(document).on('click', 'a[data-mw-edit]', function(e) {
		e.preventDefault(); // stop navigation
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

	// ── Shortcodes ───────────────────────────────────────────
	var $shortcodePopover = $('<div id="mw-shortcode-popover" style="position:absolute;display:none;background:#fff;padding:8px;border-radius:4px;box-shadow:0 2px 10px rgba(0,0,0,0.1);z-index:99991;border:1px solid #ddd;display:flex;gap:4px;">' +
		'<input type="text" placeholder="[shortcode]" style="border:1px solid #ddd;padding:4px 8px;border-radius:2px;font-size:12px;color:#333;width:200px;font-family:monospace;" />' +
		'<button style="background:#c3a486;color:#fff;border:none;border-radius:2px;padding:4px 8px;cursor:pointer;font-size:12px;">OK</button>' +
	'</div>');
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

	// ── Initialize ───────────────────────────────────────────
	$(document).ready(function() {
		setTimeout(function() {
			initEditables();
			createOverlays();
		}, 500);

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
