(function($, api) {
	'use strict';

	api.bind('ready', function() {
		if ( ! mhMagicWand || ! mhMagicWand.sections ) {
			return;
		}

		var $pageRowsContainer = $('#mh_page_rows');
		var settingId = 'mh_page_sections';

		// ── Slide-out panel (organized by category) ──────────────
		var panelHtml =
			'<div id="mh-sections-panel" style="position:absolute;top:0;left:-100%;width:100%;height:100%;background:rgba(26,27,38,0.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-right:1px solid rgba(255,255,255,0.05);z-index:500000;transition:left .25s ease;display:flex;flex-direction:column;">' +
				'<div style="background:rgba(0,0,0,0.2);padding:15px;border-bottom:1px solid rgba(255,255,255,0.05);display:flex;justify-content:space-between;align-items:center;">' +
					'<span style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#62c9ff;text-shadow:0 0 8px rgba(98,201,255,0.4);">' + mhMagicWand.strings.select_section + '</span>' +
					'<button type="button" class="mh-close-panel" style="background:none;border:none;font-size:24px;cursor:pointer;color:rgba(255,255,255,0.5);padding:0;line-height:1;transition:color 0.2s;">&times;</button>' +
				'</div>' +
				'<div style="flex:1;overflow-y:auto;padding:15px;">';

		// Group sections by category
		var categories = mhMagicWand.categories || [];
		categories.forEach(function(cat) {
			var catSections = mhMagicWand.sections.filter(function(s) { return s.category === cat.id; });
			if ( !catSections.length ) return;

			panelHtml += '<div style="margin-bottom:20px;">' +
				'<h4 style="margin:0 0 10px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,0.4);">' + cat.name + '</h4>';

			catSections.forEach(function(s) {
				panelHtml +=
					'<div class="mh-choice" data-id="' + s.id + '" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.05);padding:12px 15px;cursor:pointer;border-radius:6px;display:flex;align-items:center;gap:12px;transition:all .2s;margin-bottom:8px;">' +
						'<span class="dashicons ' + s.icon + '" style="font-size:18px;width:18px;height:18px;color:' + s.color + ';flex-shrink:0;"></span>' +
						'<span style="font-size:13px;font-weight:500;color:rgba(255,255,255,0.9);">' + s.name + '</span>' +
					'</div>';
			});

			panelHtml += '</div>';
		});

		panelHtml += '</div></div>';

		$('.wp-full-overlay-sidebar').append(panelHtml);
		var $panel = $('#mh-sections-panel');

		window.mhOpenAddSectionPanel = function() {
			api.section('mh_page_builder').focus();
			$panel.css('left', '0');
		};

		$('body').on('click', '.mh-add-section', function(e) {
			e.preventDefault();
			window.mhOpenAddSectionPanel();
		});

		$panel.on('click', '.mh-close-panel', function() {
			$panel.css('left', '-100%');
		});

		$panel.on('mouseenter', '.mh-choice', function() {
			$(this).css({'border-color':'#62c9ff','background':'rgba(98,201,255,0.05)','box-shadow':'0 0 10px rgba(98,201,255,0.1)'});
		}).on('mouseleave', '.mh-choice', function() {
			$(this).css({'border-color':'rgba(255,255,255,0.05)','background':'rgba(255,255,255,0.03)','box-shadow':'none'});
		});

		// ── Section list rendering ───────────────────────────────
		function renderSectionList() {
			var sections = getSections();
			$pageRowsContainer.empty();

			if ( !sections.length ) {
				$pageRowsContainer.append('<li class="empty">No sections added</li>');
				return;
			}

			$.each(sections, function(i, item) {
				var def = mhMagicWand.sections.find(function(s) { return s.id === item.type; });
				if ( !def ) return;

				var label = item.label || def.name;

				$pageRowsContainer.append(
					'<li class="mh-section-item" data-index="' + i + '">' +
						'<div style="display:flex;align-items:center;gap:8px;flex:1;min-width:0;">' +
							'<span class="dashicons dashicons-menu" style="color:#ccc;font-size:16px;width:16px;height:16px;cursor:move;flex-shrink:0;"></span>' +
							'<span class="dashicons ' + def.icon + '" style="color:' + def.color + ';font-size:16px;width:16px;height:16px;flex-shrink:0;"></span>' +
							'<div style="min-width:0;flex:1;">' +
								'<input type="text" class="mh-section-label" data-index="' + i + '" value="' + escAttr(label) + '" style="display:block;width:100%;border:1px solid transparent;background:transparent;padding:1px 3px;font-size:12px;font-weight:500;color:#333;border-radius:2px;outline:none;transition:border-color .15s;margin:0;line-height:1.4;" />' +
								'<span class="mh-section-anchor" style="font-size:10px;color:#aaa;padding-left:3px;">#' + slugify(label) + '</span>' +
							'</div>' +
						'</div>' +
						'<button type="button" class="mh-remove-section" data-index="' + i + '" style="background:none;border:none;color:#ccc;cursor:pointer;padding:2px;display:flex;align-items:center;transition:color .15s;flex-shrink:0;" title="Remove"><span class="dashicons dashicons-no-alt" style="font-size:16px;width:16px;height:16px;"></span></button>' +
					'</li>'
				);
			});

			if ( $.fn.sortable ) {
				$pageRowsContainer.sortable({
					items: '.mh-section-item',
					axis: 'y',
					handle: '.dashicons-menu',
					update: function() {
						var newOrder = [];
						var cur = getSections();
						$pageRowsContainer.find('.mh-section-item').each(function() {
							newOrder.push(cur[$(this).data('index')]);
						});
						saveSections(newOrder);
					}
				});
			}
		}

		function escAttr(str) {
			return str.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
		}

		function slugify(str) {
			return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
		}

		function getSections() {
			try { return JSON.parse(api(settingId) ? api(settingId).get() : '[]') || []; }
			catch(e) { return []; }
		}

		function saveSections(arr) {
			if ( api(settingId) ) { api(settingId).set(JSON.stringify(arr)); }
			renderSectionList();
		}

		function saveSectionsQuiet(arr) {
			if ( api(settingId) ) { api(settingId).set(JSON.stringify(arr)); }
		}

		// Add from panel
		$panel.on('click', '.mh-choice', function() {
			var def = mhMagicWand.sections.find(function(s) { return s.id === $(this).data('id'); }.bind(this));
			var sections = getSections();
			sections.push({
				type: $(this).data('id'),
				id: 'section_' + Date.now(),
				label: def ? def.name : ''
			});
			saveSections(sections);
			$panel.css('left', '-100%');
		});

		// Remove
		$('body').on('click', '.mh-remove-section', function(e) {
			e.stopPropagation();
			var idx = $(this).data('index');
			var sections = getSections();
			if ( idx > -1 && idx < sections.length ) {
				sections.splice(idx, 1);
				saveSections(sections);
			}
		});

		// Scroll to section on click
		$pageRowsContainer.on('click', '.mh-section-item', function(e) {
			if ( $(e.target).closest('input, button, .dashicons-menu').length ) return;
			var index = $(this).data('index');
			var section = getSections()[index];
			if ( section ) {
				var slug = slugify(section.label || 'section');
				if ( api.previewer ) {
					api.previewer.send('mh-scroll-to', slug);
				}
			}
		});

		// Label editing
		$('body').on('focus', '.mh-section-label', function() {
			$(this).css('border-color', '#c3a486');
		}).on('blur', '.mh-section-label', function() {
			$(this).css('border-color', 'transparent');
			var idx = $(this).data('index');
			var sections = getSections();
			if ( idx > -1 && idx < sections.length ) {
				sections[idx].label = $(this).val().trim();
				saveSectionsQuiet(sections);
			}
		}).on('keydown', '.mh-section-label', function(e) {
			if ( e.key === 'Enter' ) { e.preventDefault(); $(this).blur(); }
		}).on('input', '.mh-section-label', function() {
			var val = $(this).val().trim();
			$(this).closest('.mh-section-item').find('.mh-section-anchor').text('#' + slugify(val || 'section'));
		});

		$('body').on('mouseenter', '.mh-remove-section', function() {
			$(this).css('color', '#dc3232');
		}).on('mouseleave', '.mh-remove-section', function() {
			$(this).css('color', '#ccc');
		});

		renderSectionList();

		if ( api(settingId) ) {
			api(settingId).bind(function() { renderSectionList(); });
		}
	});

})(jQuery, wp.customize);
