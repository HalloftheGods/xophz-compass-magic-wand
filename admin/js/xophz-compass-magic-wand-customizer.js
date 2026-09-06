(function($, api) {
	'use strict';

	api.bind('ready', function() {
		if ( ! mhMagicWand || ! mhMagicWand.sections ) {
			return;
		}

		var $pageRowsContainer = $('#mh_page_rows');
		var settingId = 'mh_page_sections';
		var targetInsertionIndex = null;
		var activePageId = ( mhMagicWand && mhMagicWand.pageOnFront ) ? mhMagicWand.pageOnFront : 0;
		var activePageTitle = ( mhMagicWand && mhMagicWand.showOnFront === 'page' ) ? 'Home' : 'Front Page';
		var pageSectionsCache = {};

		function updateActivePageIndicator() {
			var $indicator = $('#mh-active-page-badge');
			if ( ! $indicator.length ) {
				$('.mh-template-switch-wrap').before(
					'<div id="mh-active-page-badge" style="margin-bottom: 12px; padding: 6px 10px; background: color-mix(in srgb, var(--mh-color-brand-base, #2563eb) 12%, transparent); border: 1px solid var(--mh-color-brand-base, #2563eb); border-radius: 4px; display: flex; align-items: center; justify-content: space-between;">' +
						'<span style="font-size: 11px; font-weight: 700; color: #2563eb; text-transform: uppercase;">Editing Page:</span>' +
						'<span id="mh-active-page-title" style="font-size: 11px; font-weight: 600; color: #0f172a; max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">' + escAttr( activePageTitle ) + '</span>' +
					'</div>'
				);
			} else {
				$('#mh-active-page-title').text( activePageTitle );
			}
		}

		// Category Dashicons Map
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
			'subscribe': 'dashicons-bell'
		};

		// SVG Wireframe Illustration Generator
		function getWireframeSvg(id, category, color) {
			var c = color || '#2563eb';
			switch(id) {
				case 'hero':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="18" width="90" height="12" rx="3" fill="#0f172a"/>' +
						'<rect x="15" y="36" width="100" height="5" rx="2" fill="#94a3b8"/>' +
						'<rect x="15" y="45" width="70" height="5" rx="2" fill="#cbd5e1"/>' +
						'<rect x="15" y="58" width="38" height="12" rx="3" fill="' + c + '"/>' +
						'<rect x="58" y="58" width="38" height="12" rx="3" fill="#e2e8f0"/>' +
						'<rect x="135" y="14" width="90" height="58" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>' +
						'<circle cx="160" cy="33" r="7" fill="#93c5fd"/>' +
						'<path d="M140 65L165 44L180 56L195 42L220 65Z" fill="#60a5fa" fill-opacity="0.4"/>' +
					'</svg>';

				case 'hero-centered':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="95" y="12" width="50" height="7" rx="3" fill="#dbeafe"/>' +
						'<rect x="45" y="24" width="150" height="14" rx="3" fill="#0f172a"/>' +
						'<rect x="65" y="44" width="110" height="5" rx="2" fill="#94a3b8"/>' +
						'<rect x="95" y="55" width="50" height="12" rx="4" fill="' + c + '"/>' +
						'<circle cx="108" cy="74" r="3.5" fill="#94a3b8"/>' +
						'<circle cx="116" cy="74" r="3.5" fill="#64748b"/>' +
						'<circle cx="124" cy="74" r="3.5" fill="#475569"/>' +
						'<circle cx="132" cy="74" r="3.5" fill="#334155"/>' +
					'</svg>';

				case 'hero-editorial':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="20" y="16" width="200" height="16" rx="3" fill="#0f172a"/>' +
						'<rect x="20" y="38" width="150" height="16" rx="3" fill="#0f172a"/>' +
						'<rect x="20" y="60" width="60" height="8" rx="2" fill="' + c + '"/>' +
					'</svg>';

				case 'hero-app':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="55" y="10" width="130" height="10" rx="3" fill="#0f172a"/>' +
						'<rect x="75" y="24" width="90" height="5" rx="2" fill="#94a3b8"/>' +
						'<rect x="98" y="34" width="44" height="50" rx="5" fill="#f8fafc" stroke="' + c + '" stroke-width="1.5"/>' +
						'<rect x="105" y="40" width="30" height="36" rx="2" fill="#e0e7ff"/>' +
					'</svg>';

				case 'hero-video':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="10" width="210" height="65" rx="6" fill="#0f172a"/>' +
						'<circle cx="120" cy="42" r="13" fill="' + c + '"/>' +
						'<polygon points="117,37 127,42 117,47" fill="#ffffff"/>' +
						'<rect x="40" y="20" width="60" height="5" rx="2" fill="#ffffff" fill-opacity="0.8"/>' +
					'</svg>';

				case 'features':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="12" width="64" height="61" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="22" y="18" width="12" height="12" rx="3" fill="' + c + '"/>' +
						'<rect x="22" y="35" width="40" height="6" rx="2" fill="#0f172a"/>' +
						'<rect x="22" y="45" width="48" height="4" rx="2" fill="#94a3b8"/>' +
						'<rect x="88" y="12" width="64" height="61" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="95" y="18" width="12" height="12" rx="3" fill="' + c + '"/>' +
						'<rect x="95" y="35" width="40" height="6" rx="2" fill="#0f172a"/>' +
						'<rect x="95" y="45" width="48" height="4" rx="2" fill="#94a3b8"/>' +
						'<rect x="161" y="12" width="64" height="61" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="168" y="18" width="12" height="12" rx="3" fill="' + c + '"/>' +
						'<rect x="168" y="35" width="40" height="6" rx="2" fill="#0f172a"/>' +
						'<rect x="168" y="45" width="48" height="4" rx="2" fill="#94a3b8"/>' +
					'</svg>';

				case 'features-4col':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="14" width="46" height="57" rx="3" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="20" y="20" width="10" height="10" rx="2" fill="' + c + '"/>' +
						'<rect x="20" y="35" width="30" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="20" y="44" width="36" height="3" rx="1" fill="#94a3b8"/>' +
						'<rect x="70" y="14" width="46" height="57" rx="3" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="75" y="20" width="10" height="10" rx="2" fill="' + c + '"/>' +
						'<rect x="75" y="35" width="30" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="75" y="44" width="36" height="3" rx="1" fill="#94a3b8"/>' +
						'<rect x="125" y="14" width="46" height="57" rx="3" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="130" y="20" width="10" height="10" rx="2" fill="' + c + '"/>' +
						'<rect x="130" y="35" width="30" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="130" y="44" width="36" height="3" rx="1" fill="#94a3b8"/>' +
						'<rect x="180" y="14" width="46" height="57" rx="3" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="185" y="20" width="10" height="10" rx="2" fill="' + c + '"/>' +
						'<rect x="185" y="35" width="30" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="185" y="44" width="36" height="3" rx="1" fill="#94a3b8"/>' +
					'</svg>';

				case 'features-alt':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="12" width="85" height="28" rx="4" fill="#eff6ff" stroke="#bfdbfe"/>' +
						'<rect x="115" y="14" width="105" height="8" rx="2" fill="#0f172a"/>' +
						'<rect x="115" y="26" width="90" height="5" rx="1.5" fill="#94a3b8"/>' +
						'<rect x="15" y="48" width="105" height="8" rx="2" fill="#0f172a"/>' +
						'<rect x="15" y="60" width="90" height="5" rx="1.5" fill="#94a3b8"/>' +
						'<rect x="135" y="46" width="85" height="28" rx="4" fill="#eff6ff" stroke="#bfdbfe"/>' +
					'</svg>';

				case 'features-checklist':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<circle cx="22" cy="22" r="4" fill="#10b981"/><rect x="32" y="20" width="70" height="5" rx="1.5" fill="#0f172a"/>' +
						'<circle cx="22" cy="38" r="4" fill="#10b981"/><rect x="32" y="36" width="60" height="5" rx="1.5" fill="#0f172a"/>' +
						'<circle cx="22" cy="54" r="4" fill="#10b981"/><rect x="32" y="52" width="75" height="5" rx="1.5" fill="#0f172a"/>' +
						'<circle cx="22" cy="70" r="4" fill="#10b981"/><rect x="32" y="68" width="65" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="125" y="12" width="100" height="61" rx="6" fill="#f0fdf4" stroke="#86efac"/>' +
					'</svg>';

				case 'features-bento':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="12" width="115" height="61" rx="4" fill="#eff6ff" stroke="#93c5fd"/>' +
						'<rect x="25" y="20" width="14" height="14" rx="3" fill="' + c + '"/>' +
						'<rect x="25" y="40" width="70" height="7" rx="2" fill="#0f172a"/>' +
						'<rect x="25" y="52" width="85" height="4" rx="1" fill="#64748b"/>' +
						'<rect x="138" y="12" width="87" height="28" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="146" y="19" width="45" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="146" y="27" width="65" height="3" rx="1" fill="#94a3b8"/>' +
						'<rect x="138" y="45" width="87" height="28" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="146" y="52" width="45" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="146" y="60" width="65" height="3" rx="1" fill="#94a3b8"/>' +
					'</svg>';
			}

			// Category-based wireframes
			var cat = category || '';
			switch(cat) {
				case 'hero':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="18" width="95" height="12" rx="3" fill="#0f172a"/>' +
						'<rect x="15" y="36" width="100" height="5" rx="2" fill="#94a3b8"/>' +
						'<rect x="15" y="45" width="75" height="5" rx="2" fill="#cbd5e1"/>' +
						'<rect x="15" y="58" width="40" height="12" rx="3" fill="' + c + '"/>' +
						'<rect x="60" y="58" width="40" height="12" rx="3" fill="#e2e8f0"/>' +
						'<rect x="130" y="14" width="95" height="58" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>' +
						'<circle cx="155" cy="33" r="7" fill="#93c5fd"/>' +
						'<path d="M135 65L160 44L175 56L190 42L220 65Z" fill="#60a5fa" fill-opacity="0.4"/>' +
					'</svg>';

				case 'overlapable':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="8" width="210" height="34" rx="4" fill="#1e293b"/>' +
						'<rect x="25" y="15" width="70" height="6" rx="1.5" fill="#ffffff"/>' +
						'<rect x="25" y="25" width="100" height="4" rx="1" fill="#94a3b8"/>' +
						'<rect x="22" y="30" width="60" height="44" rx="4" fill="#ffffff" stroke="#cbd5e1"/>' +
						'<rect x="28" y="36" width="12" height="12" rx="2" fill="' + c + '"/>' +
						'<rect x="28" y="52" width="40" height="4" rx="1" fill="#0f172a"/>' +
						'<rect x="28" y="60" width="46" height="3" rx="1" fill="#94a3b8"/>' +
						'<rect x="90" y="30" width="60" height="44" rx="4" fill="#ffffff" stroke="#cbd5e1"/>' +
						'<rect x="96" y="36" width="12" height="12" rx="2" fill="' + c + '"/>' +
						'<rect x="96" y="52" width="40" height="4" rx="1" fill="#0f172a"/>' +
						'<rect x="96" y="60" width="46" height="3" rx="1" fill="#94a3b8"/>' +
						'<rect x="158" y="30" width="60" height="44" rx="4" fill="#ffffff" stroke="#cbd5e1"/>' +
						'<rect x="164" y="36" width="12" height="12" rx="2" fill="' + c + '"/>' +
						'<rect x="164" y="52" width="40" height="4" rx="1" fill="#0f172a"/>' +
						'<rect x="164" y="60" width="46" height="3" rx="1" fill="#94a3b8"/>' +
					'</svg>';

				case 'about':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="16" width="85" height="10" rx="2" fill="#0f172a"/>' +
						'<rect x="15" y="32" width="100" height="5" rx="1.5" fill="#64748b"/>' +
						'<rect x="15" y="41" width="90" height="5" rx="1.5" fill="#94a3b8"/>' +
						'<rect x="15" y="50" width="75" height="5" rx="1.5" fill="#cbd5e1"/>' +
						'<rect x="15" y="62" width="40" height="10" rx="3" fill="' + c + '"/>' +
						'<rect x="135" y="12" width="90" height="61" rx="6" fill="#faf5ff" stroke="#d8b4fe"/>' +
						'<circle cx="165" cy="32" r="8" fill="#c084fc"/>' +
						'<path d="M140 68L165 48L180 58L200 45L220 68Z" fill="#a855f7" fill-opacity="0.3"/>' +
					'</svg>';

				case 'features':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="12" width="64" height="61" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="22" y="18" width="12" height="12" rx="3" fill="' + c + '"/>' +
						'<rect x="22" y="35" width="40" height="6" rx="2" fill="#0f172a"/>' +
						'<rect x="22" y="45" width="48" height="4" rx="2" fill="#94a3b8"/>' +
						'<rect x="88" y="12" width="64" height="61" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="95" y="18" width="12" height="12" rx="3" fill="' + c + '"/>' +
						'<rect x="95" y="35" width="40" height="6" rx="2" fill="#0f172a"/>' +
						'<rect x="95" y="45" width="48" height="4" rx="2" fill="#94a3b8"/>' +
						'<rect x="161" y="12" width="64" height="61" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="168" y="18" width="12" height="12" rx="3" fill="' + c + '"/>' +
						'<rect x="168" y="35" width="40" height="6" rx="2" fill="#0f172a"/>' +
						'<rect x="168" y="45" width="48" height="4" rx="2" fill="#94a3b8"/>' +
					'</svg>';

				case 'content':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="16" width="90" height="8" rx="2" fill="#0f172a"/>' +
						'<rect x="15" y="30" width="95" height="4" rx="1" fill="#64748b"/>' +
						'<rect x="15" y="38" width="85" height="4" rx="1" fill="#94a3b8"/>' +
						'<rect x="15" y="46" width="70" height="4" rx="1" fill="#cbd5e1"/>' +
						'<rect x="15" y="58" width="36" height="11" rx="3" fill="' + c + '"/>' +
						'<rect x="125" y="14" width="100" height="57" rx="5" fill="#f1f5f9" stroke="#cbd5e1"/>' +
						'<circle cx="175" cy="42" r="11" fill="' + c + '"/>' +
						'<polygon points="172,37 180,42 172,47" fill="#ffffff"/>' +
					'</svg>';

				case 'cta':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="10" width="210" height="65" rx="6" fill="' + c + '"/>' +
						'<rect x="30" y="24" width="110" height="12" rx="3" fill="#ffffff"/>' +
						'<rect x="30" y="42" width="80" height="5" rx="2" fill="#ffffff" fill-opacity="0.8"/>' +
						'<rect x="155" y="27" width="55" height="18" rx="4" fill="#ffffff"/>' +
					'</svg>';

				case 'testimonials':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="14" width="64" height="57" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<circle cx="23" cy="23" r="2.5" fill="#f59e0b"/><circle cx="30" cy="23" r="2.5" fill="#f59e0b"/><circle cx="37" cy="23" r="2.5" fill="#f59e0b"/><circle cx="44" cy="23" r="2.5" fill="#f59e0b"/><circle cx="51" cy="23" r="2.5" fill="#f59e0b"/>' +
						'<rect x="22" y="32" width="50" height="4" rx="1" fill="#64748b"/>' +
						'<circle cx="28" cy="55" r="5" fill="#cbd5e1"/>' +
						'<rect x="37" y="53" width="25" height="4" rx="1" fill="#0f172a"/>' +
						'<rect x="88" y="14" width="64" height="57" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<circle cx="96" cy="23" r="2.5" fill="#f59e0b"/><circle cx="103" cy="23" r="2.5" fill="#f59e0b"/><circle cx="110" cy="23" r="2.5" fill="#f59e0b"/><circle cx="117" cy="23" r="2.5" fill="#f59e0b"/><circle cx="124" cy="23" r="2.5" fill="#f59e0b"/>' +
						'<rect x="95" y="32" width="50" height="4" rx="1" fill="#64748b"/>' +
						'<circle cx="101" cy="55" r="5" fill="#cbd5e1"/>' +
						'<rect x="110" y="53" width="25" height="4" rx="1" fill="#0f172a"/>' +
						'<rect x="161" y="14" width="64" height="57" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<circle cx="169" cy="23" r="2.5" fill="#f59e0b"/><circle cx="176" cy="23" r="2.5" fill="#f59e0b"/><circle cx="183" cy="23" r="2.5" fill="#f59e0b"/><circle cx="190" cy="23" r="2.5" fill="#f59e0b"/><circle cx="197" cy="23" r="2.5" fill="#f59e0b"/>' +
						'<rect x="168" y="32" width="50" height="4" rx="1" fill="#64748b"/>' +
						'<circle cx="174" cy="55" r="5" fill="#cbd5e1"/>' +
						'<rect x="183" y="53" width="25" height="4" rx="1" fill="#0f172a"/>' +
					'</svg>';

				case 'numbers':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="22" width="40" height="14" rx="3" fill="' + c + '"/>' +
						'<rect x="15" y="42" width="35" height="4" rx="1" fill="#64748b"/>' +
						'<rect x="70" y="22" width="40" height="14" rx="3" fill="' + c + '"/>' +
						'<rect x="70" y="42" width="35" height="4" rx="1" fill="#64748b"/>' +
						'<rect x="125" y="22" width="40" height="14" rx="3" fill="' + c + '"/>' +
						'<rect x="125" y="42" width="35" height="4" rx="1" fill="#64748b"/>' +
						'<rect x="180" y="22" width="40" height="14" rx="3" fill="' + c + '"/>' +
						'<rect x="180" y="42" width="35" height="4" rx="1" fill="#64748b"/>' +
					'</svg>';

				case 'clients':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="32" width="38" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1"/>' +
						'<rect x="21" y="41" width="26" height="4" rx="1" fill="#94a3b8"/>' +
						'<rect x="59" y="32" width="38" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1"/>' +
						'<rect x="65" y="41" width="26" height="4" rx="1" fill="#94a3b8"/>' +
						'<rect x="103" y="32" width="38" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1"/>' +
						'<rect x="109" y="41" width="26" height="4" rx="1" fill="#94a3b8"/>' +
						'<rect x="147" y="32" width="38" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1"/>' +
						'<rect x="153" y="41" width="26" height="4" rx="1" fill="#94a3b8"/>' +
						'<rect x="191" y="32" width="38" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1"/>' +
						'<rect x="197" y="41" width="26" height="4" rx="1" fill="#94a3b8"/>' +
					'</svg>';

				case 'team':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<circle cx="38" cy="30" r="14" fill="#fce7f3"/><rect x="20" y="50" width="36" height="5" rx="1.5" fill="#0f172a"/><rect x="24" y="59" width="28" height="3" rx="1" fill="#94a3b8"/>' +
						'<circle cx="92" cy="30" r="14" fill="#fce7f3"/><rect x="74" y="50" width="36" height="5" rx="1.5" fill="#0f172a"/><rect x="78" y="59" width="28" height="3" rx="1" fill="#94a3b8"/>' +
						'<circle cx="146" cy="30" r="14" fill="#fce7f3"/><rect x="128" y="50" width="36" height="5" rx="1.5" fill="#0f172a"/><rect x="132" y="59" width="28" height="3" rx="1" fill="#94a3b8"/>' +
						'<circle cx="200" cy="30" r="14" fill="#fce7f3"/><rect x="182" y="50" width="36" height="5" rx="1.5" fill="#0f172a"/><rect x="186" y="59" width="28" height="3" rx="1" fill="#94a3b8"/>' +
					'</svg>';

				case 'latest_news':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="12" width="64" height="61" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="15" y="12" width="64" height="24" rx="3" fill="#fee2e2"/>' +
						'<rect x="22" y="42" width="50" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="22" y="52" width="38" height="4" rx="1" fill="#94a3b8"/>' +
						'<rect x="22" y="61" width="22" height="4" rx="1" fill="#ef4444"/>' +
						'<rect x="88" y="12" width="64" height="61" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="88" y="12" width="64" height="24" rx="3" fill="#fee2e2"/>' +
						'<rect x="95" y="42" width="50" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="95" y="52" width="38" height="4" rx="1" fill="#94a3b8"/>' +
						'<rect x="95" y="61" width="22" height="4" rx="1" fill="#ef4444"/>' +
						'<rect x="161" y="12" width="64" height="61" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="161" y="12" width="64" height="24" rx="3" fill="#fee2e2"/>' +
						'<rect x="168" y="42" width="50" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="168" y="52" width="38" height="4" rx="1" fill="#94a3b8"/>' +
						'<rect x="168" y="61" width="22" height="4" rx="1" fill="#ef4444"/>' +
					'</svg>';

				case 'contact':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="12" width="95" height="61" rx="4" fill="#f8fafc" stroke="#e2e8f0"/>' +
						'<circle cx="26" cy="24" r="3.5" fill="' + c + '"/><rect x="35" y="22" width="50" height="5" rx="1" fill="#475569"/>' +
						'<circle cx="26" cy="36" r="3.5" fill="' + c + '"/><rect x="35" y="34" width="60" height="5" rx="1" fill="#475569"/>' +
						'<circle cx="26" cy="48" r="3.5" fill="' + c + '"/><rect x="35" y="46" width="45" height="5" rx="1" fill="#475569"/>' +
						'<rect x="120" y="12" width="105" height="61" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="128" y="20" width="89" height="10" rx="2" fill="#f8fafc" stroke="#cbd5e1"/>' +
						'<rect x="128" y="34" width="89" height="16" rx="2" fill="#f8fafc" stroke="#cbd5e1"/>' +
						'<rect x="165" y="54" width="52" height="11" rx="2" fill="' + c + '"/>' +
					'</svg>';

				case 'portfolio':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="12" width="64" height="61" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="15" y="12" width="64" height="36" rx="3" fill="#eff6ff"/>' +
						'<path d="M22 42L36 28L48 38L58 26L74 42Z" fill="#93c5fd" fill-opacity="0.6"/>' +
						'<rect x="22" y="54" width="40" height="5" rx="1" fill="#0f172a"/>' +
						'<rect x="22" y="62" width="28" height="3" rx="1" fill="#94a3b8"/>' +
						'<rect x="88" y="12" width="64" height="61" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="88" y="12" width="64" height="36" rx="3" fill="#f0fdf4"/>' +
						'<path d="M95 42L109 28L121 38L131 26L147 42Z" fill="#86efac" fill-opacity="0.6"/>' +
						'<rect x="95" y="54" width="40" height="5" rx="1" fill="#0f172a"/>' +
						'<rect x="95" y="62" width="28" height="3" rx="1" fill="#94a3b8"/>' +
						'<rect x="161" y="12" width="64" height="61" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="161" y="12" width="64" height="36" rx="3" fill="#faf5ff"/>' +
						'<path d="M168 42L182 28L194 38L204 26L220 42Z" fill="#d8b4fe" fill-opacity="0.6"/>' +
						'<rect x="168" y="54" width="40" height="5" rx="1" fill="#0f172a"/>' +
						'<rect x="168" y="62" width="28" height="3" rx="1" fill="#94a3b8"/>' +
					'</svg>';

				case 'woocommerce':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="10" width="64" height="65" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="20" y="15" width="54" height="30" rx="3" fill="#f8fafc" stroke="#e2e8f0"/>' +
						'<circle cx="47" cy="30" r="7" fill="#cbd5e1"/>' +
						'<rect x="20" y="49" width="34" height="4" rx="1" fill="#0f172a"/>' +
						'<rect x="20" y="57" width="18" height="6" rx="1" fill="#10b981"/>' +
						'<rect x="52" y="55" width="22" height="10" rx="2" fill="' + c + '"/>' +
						'<rect x="88" y="10" width="64" height="65" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="93" y="15" width="54" height="30" rx="3" fill="#f8fafc" stroke="#e2e8f0"/>' +
						'<circle cx="120" cy="30" r="7" fill="#cbd5e1"/>' +
						'<rect x="93" y="49" width="34" height="4" rx="1" fill="#0f172a"/>' +
						'<rect x="93" y="57" width="18" height="6" rx="1" fill="#10b981"/>' +
						'<rect x="125" y="55" width="22" height="10" rx="2" fill="' + c + '"/>' +
						'<rect x="161" y="10" width="64" height="65" rx="4" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="166" y="15" width="54" height="30" rx="3" fill="#f8fafc" stroke="#e2e8f0"/>' +
						'<circle cx="193" cy="30" r="7" fill="#cbd5e1"/>' +
						'<rect x="166" y="49" width="34" height="4" rx="1" fill="#0f172a"/>' +
						'<rect x="166" y="57" width="18" height="6" rx="1" fill="#10b981"/>' +
						'<rect x="198" y="55" width="22" height="10" rx="2" fill="' + c + '"/>' +
					'</svg>';

				case 'gallery':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="14" width="48" height="57" rx="3" fill="#eff6ff" stroke="#bfdbfe"/>' +
						'<rect x="69" y="14" width="48" height="57" rx="3" fill="#f0fdf4" stroke="#bbf7d0"/>' +
						'<rect x="123" y="14" width="48" height="57" rx="3" fill="#fef3c7" stroke="#fde68a"/>' +
						'<rect x="177" y="14" width="48" height="57" rx="3" fill="#fae8ff" stroke="#f5d0fe"/>' +
					'</svg>';

				case 'pricing':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="16" width="62" height="55" rx="3" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="22" y="23" width="30" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="22" y="32" width="20" height="8" rx="2" fill="' + c + '"/>' +
						'<rect x="22" y="46" width="48" height="3" rx="1" fill="#cbd5e1"/>' +
						'<rect x="22" y="58" width="48" height="7" rx="2" fill="#f1f5f9"/>' +
						'<rect x="86" y="8" width="68" height="69" rx="4" fill="#eff6ff" stroke="' + c + '" stroke-width="1.5"/>' +
						'<rect x="94" y="18" width="35" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="94" y="28" width="26" height="9" rx="2" fill="' + c + '"/>' +
						'<rect x="94" y="44" width="52" height="3" rx="1" fill="#93c5fd"/>' +
						'<rect x="94" y="56" width="52" height="9" rx="2" fill="' + c + '"/>' +
						'<rect x="163" y="16" width="62" height="55" rx="3" fill="#ffffff" stroke="#e2e8f0"/>' +
						'<rect x="170" y="23" width="30" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="170" y="32" width="20" height="8" rx="2" fill="' + c + '"/>' +
						'<rect x="170" y="46" width="48" height="3" rx="1" fill="#cbd5e1"/>' +
						'<rect x="170" y="58" width="48" height="7" rx="2" fill="#f1f5f9"/>' +
					'</svg>';

				case 'faq':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="12" width="210" height="18" rx="3" fill="#ffffff" stroke="#e2e8f0"/><rect x="25" y="19" width="80" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="15" y="34" width="210" height="18" rx="3" fill="#ffffff" stroke="#e2e8f0"/><rect x="25" y="41" width="100" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="15" y="56" width="210" height="18" rx="3" fill="#ffffff" stroke="#e2e8f0"/><rect x="25" y="63" width="70" height="5" rx="1.5" fill="#0f172a"/>' +
					'</svg>';

				case 'subscribe':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="60" y="16" width="120" height="9" rx="2" fill="#0f172a"/>' +
						'<rect x="75" y="30" width="90" height="5" rx="1.5" fill="#64748b"/>' +
						'<rect x="35" y="46" width="120" height="20" rx="4" fill="#ffffff" stroke="#cbd5e1"/>' +
						'<rect x="42" y="53" width="65" height="6" rx="1.5" fill="#94a3b8"/>' +
						'<rect x="160" y="46" width="45" height="20" rx="4" fill="' + c + '"/>' +
						'<rect x="170" y="53" width="25" height="6" rx="1.5" fill="#ffffff"/>' +
					'</svg>';

				default:
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="20" y="18" width="100" height="12" rx="3" fill="#0f172a"/>' +
						'<rect x="20" y="38" width="130" height="5" rx="1.5" fill="#94a3b8"/>' +
						'<rect x="20" y="48" width="90" height="5" rx="1.5" fill="#cbd5e1"/>' +
						'<rect x="160" y="18" width="60" height="50" rx="4" fill="#f8fafc" stroke="#e2e8f0"/>' +
					'</svg>';
			}
		}

		// ── Section Library Modal ──────────────────────────────
		var categories = mhMagicWand.categories || [];
		var sectionsList = (mhMagicWand.sections || []).map(function(s) {
			if ( s && s.category ) {
				s.category = s.category.replace(/^magic-wand-/, '');
			}
			return s;
		});
		var activeSource = 'all';
		var activeCat = 'all';
		var currentPreviewSectionId = null;

		var modalHtml =
			'<div id="mh-sections-modal" class="mh-modal-backdrop">' +
				'<div class="mh-modal-container">' +

					// Header
					'<div class="mh-modal-header">' +
						'<div class="mh-modal-header-left">' +
							'<span class="dashicons dashicons-layout mh-modal-header-icon"></span>' +
							'<div>' +
								'<h3 class="mh-modal-title">' + (mhMagicWand.strings.select_section || 'Section Library') + '</h3>' +
								'<p class="mh-modal-subtitle">Choose from ' + sectionsList.length + ' modular section templates</p>' +
							'</div>' +
						'</div>' +

						// Source Filter Pills (All / Core / Classic)
						'<div class="mh-source-filter-group">' +
							'<button type="button" class="mh-source-pill active" data-source="all">All <span class="mh-source-badge" id="mh-source-count-all">' + sectionsList.length + '</span></button>' +
							'<button type="button" class="mh-source-pill" data-source="core">Core <span class="mh-source-badge" id="mh-source-count-core">9</span></button>' +
							'<button type="button" class="mh-source-pill" data-source="classic">Classic <span class="mh-source-badge" id="mh-source-count-classic">54</span></button>' +
						'</div>' +

						// Search & Close
						'<div class="mh-modal-header-right">' +
							'<div class="mh-search-wrapper">' +
								'<span class="dashicons dashicons-search mh-search-icon"></span>' +
								'<input type="text" id="mh-modal-search" placeholder="' + (mhMagicWand.strings.search_placeholder || 'Search sections...') + '" autocomplete="off" />' +
								'<button type="button" id="mh-search-clear" style="display:none;">&times;</button>' +
							'</div>' +
							'<button type="button" class="mh-close-modal" title="Close modal">&times;</button>' +
						'</div>' +
					'</div>' +

					// Modal Body
					'<div class="mh-modal-body">' +

						// Left Sidebar Navigation
						'<aside class="mh-modal-sidebar">' +
							'<div class="mh-sidebar-title">Categories</div>' +
							'<nav class="mh-cat-nav">';

		categories.forEach(function(cat, idx) {
			var isActive = (idx === 0) ? ' active' : '';
			var iconClass = catIconMap[cat.id] || 'dashicons-category';
			modalHtml +=
				'<a href="#" class="mh-cat-item' + isActive + '" data-cat="' + cat.id + '">' +
					'<span class="dashicons ' + iconClass + '"></span>' +
					'<span class="mh-cat-label">' + escAttr(cat.name) + '</span>' +
					'<span class="mh-cat-count-badge">0</span>' +
				'</a>';
		});

		modalHtml +=
							'</nav>' +
						'</aside>' +

						// Center Main Grid View
						'<main class="mh-modal-main-view">' +
							'<div id="mh-modal-cards-wrap">';

		categories.forEach(function(cat) {
			if ( cat.id === 'all' ) return;

			var catSections = sectionsList.filter(function(s) { return s.category === cat.id; });
			if ( !catSections.length ) return;

			modalHtml +=
				'<div class="mh-category-group" data-cat="' + cat.id + '">' +
					'<div class="mh-category-bar">' +
						'<span>' + escAttr(cat.name) + '</span>' +
						'<span class="mh-category-group-count" style="font-size:10px;color:#64748b;font-weight:600;">' + catSections.length + ' SECTIONS</span>' +
					'</div>' +
					'<div class="mh-category-grid">';

			catSections.forEach(function(s) {
				var sourceLabel = s.source === 'core' ? 'Core' : 'Classic';
				var sourceClass = s.source === 'core' ? 'mh-source-core' : 'mh-source-classic';
				var wireframe = getWireframeSvg(s.id, s.category, s.color);

				modalHtml +=
					'<div class="mh-section-card" data-id="' + s.id + '" data-cat="' + s.category + '" data-source="' + (s.source || 'core') + '" title="' + escAttr(s.desc || s.name) + '">' +
						'<div class="mh-card-thumb-wrap">' +
							'<span class="mh-card-source-tag ' + sourceClass + '">' + sourceLabel + '</span>' +
							wireframe +
							'<div class="mh-card-hover-overlay">' +
								'<button type="button" class="mh-btn-card-preview" data-id="' + s.id + '">' +
									'<span class="dashicons dashicons-visibility"></span> Preview' +
								'</button>' +
								'<button type="button" class="mh-btn-card-add" data-id="' + s.id + '">' +
									'<span class="dashicons dashicons-plus-alt2"></span> + Add' +
								'</button>' +
							'</div>' +
						'</div>' +
						'<div class="mh-card-info">' +
							'<div class="mh-card-title">' + escAttr(s.name) + '</div>' +
							'<div class="mh-card-desc">' + escAttr(s.desc || s.name) + '</div>' +
						'</div>' +
					'</div>';
			});

			modalHtml +=
					'</div>' +
				'</div>';
		});

		modalHtml +=
								'<div id="mh-modal-empty" style="display:none;">' +
									'<span class="dashicons dashicons-search" style="font-size:32px;width:32px;height:32px;color:#94a3b8;margin-bottom:8px;display:inline-block;"></span>' +
									'<p style="margin:0;">No matching sections found.</p>' +
								'</div>' +
							'</div>' +
						'</main>' +

						// Live Preview Pane
						'<div id="mh-preview-pane" style="display:none;">' +
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

		$('body').append(modalHtml);
		var $modal = $('#mh-sections-modal');

		window.mhOpenAddSectionPanel = function(insertAt) {
			targetInsertionIndex = (typeof insertAt === 'number') ? insertAt : null;
			closeLivePreview();
			$modal.css('display', 'flex').hide().fadeIn(150);
			$('#mh-modal-search').val('');
			$('#mh-search-clear').hide();
			filterModalCards();
		};

		function closeSectionsModal() {
			$modal.fadeOut(150);
			closeLivePreview();
			targetInsertionIndex = null;
		}

		function openLivePreview(sectionId) {
			var def = sectionsList.find(function(s) { return s.id === sectionId; });
			if ( ! def ) return;

			currentPreviewSectionId = sectionId;
			$('#mh-preview-title').text(def.name);

			var isCore = (def.source === 'core');
			$('#mh-preview-source-badge')
				.text(isCore ? 'Core' : 'Classic')
				.removeClass('mh-badge-core mh-badge-classic')
				.addClass(isCore ? 'mh-badge-core' : 'mh-badge-classic');

			var catDef = categories.find(function(c) { return c.id === def.category; });
			$('#mh-preview-cat-badge').text(catDef ? catDef.name : def.category);

			$('#mh-preview-content').html(def.content || '<div style="padding:40px;text-align:center;color:#94a3b8;">Empty Section</div>');
			$('#mh-preview-stage').css('width', '100%');
			$modal.find('.mh-viewport-btn').removeClass('active');
			$modal.find('.mh-viewport-btn[data-width="100%"]').addClass('active');

			$('.mh-modal-main-view').hide();
			$('#mh-preview-pane').show();
		}

		function closeLivePreview() {
			$('#mh-preview-pane').hide();
			$('.mh-modal-main-view').show();
			$('#mh-preview-content').empty();
			currentPreviewSectionId = null;
		}

		function insertSectionById(sectionId) {
			var def = sectionsList.find(function(s) { return s.id === sectionId; });
			var sections = getSections();
			var newSection = {
				type: sectionId,
				id: 'section_' + Date.now(),
				label: def ? def.name : ''
			};

			if ( targetInsertionIndex !== null && targetInsertionIndex >= 0 && targetInsertionIndex <= sections.length ) {
				sections.splice(targetInsertionIndex, 0, newSection);
			} else {
				sections.push(newSection);
			}

			saveSections(sections);
			closeSectionsModal();
			if ( api.previewer ) {
				api.previewer.refresh();
			}
		}

		$('body').on('click', '.mh-add-section', function(e) {
			e.preventDefault();
			window.mhOpenAddSectionPanel();
		});

		$modal.on('click', '.mh-close-modal', function() {
			closeSectionsModal();
		});

		$modal.on('click', function(e) {
			if ( e.target === this ) {
				closeSectionsModal();
			}
		});

		$(document).on('keydown', function(e) {
			if ( e.key === 'Escape' && $modal.is(':visible') ) {
				closeSectionsModal();
			}
		});

		// Source Filter Switching (All / Core / Classic)
		$modal.on('click', '.mh-source-pill', function() {
			$modal.find('.mh-source-pill').removeClass('active');
			$(this).addClass('active');
			activeSource = $(this).data('source') || 'all';
			closeLivePreview();
			filterModalCards();
		});

		// Category Sidebar Navigation
		$modal.on('click', '.mh-cat-item', function(e) {
			e.preventDefault();
			$modal.find('.mh-cat-item').removeClass('active');
			$(this).addClass('active');
			activeCat = $(this).data('cat') || 'all';
			closeLivePreview();
			filterModalCards();
		});

		// Search Input Filter
		$modal.on('input', '#mh-modal-search', function() {
			var val = $(this).val();
			if ( val ) {
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

		// Live Preview Interactions
		$modal.on('click', '.mh-btn-card-preview', function(e) {
			e.preventDefault();
			e.stopPropagation();
			var sectionId = $(this).data('id');
			openLivePreview(sectionId);
		});

		$modal.on('click', '.mh-section-card', function(e) {
			if ( $(e.target).closest('.mh-btn-card-add').length ) {
				return;
			}
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

		$modal.on('click', '#mh-preview-back-btn', function(e) {
			e.preventDefault();
			closeLivePreview();
		});

		$modal.on('click', '#mh-preview-insert-btn', function(e) {
			e.preventDefault();
			if ( currentPreviewSectionId ) {
				insertSectionById(currentPreviewSectionId);
			}
		});

		$modal.on('click', '.mh-viewport-btn', function() {
			var w = $(this).data('width') || '100%';
			$modal.find('.mh-viewport-btn').removeClass('active');
			$(this).addClass('active');
			$('#mh-preview-stage').css('width', w);
		});

		function filterModalCards() {
			var query = ($('#mh-modal-search').val() || '').toLowerCase().trim();
			var totalVisible = 0;

			// Track counts per category and source matching search query
			var catCounts = {};
			categories.forEach(function(c) { catCounts[c.id] = 0; });
			var sourceCounts = { all: 0, core: 0, classic: 0 };

			// Update cards and group visibility
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

					var matchesQuery = !query || id.indexOf(query) !== -1 || title.indexOf(query) !== -1 || desc.indexOf(query) !== -1;
					var matchesSource = (activeSource === 'all' || source === activeSource);
					var matchesCat = (activeCat === 'all' || groupCat === activeCat);

					// Compute global category counts under activeSource
					if ( matchesQuery && matchesSource ) {
						catCounts[groupCat] = (catCounts[groupCat] || 0) + 1;
						catCounts['all'] = (catCounts['all'] || 0) + 1;
					}

					// Compute source totals under activeCat and search
					if ( matchesQuery && matchesCat ) {
						sourceCounts.all++;
						if ( source === 'core' ) sourceCounts.core++;
						if ( source === 'classic' ) sourceCounts.classic++;
					}

					if ( matchesQuery && matchesSource && matchesCat ) {
						$card.show();
						groupVisible++;
						totalVisible++;
					} else {
						$card.hide();
					}
				});

				$group.find('.mh-category-group-count').text(groupVisible + ' SECTIONS');

				if ( groupVisible > 0 ) {
					$group.show();
				} else {
					$group.hide();
				}
			});

			// Update category sidebar badge counts
			$modal.find('.mh-cat-item').each(function() {
				var catId = $(this).data('cat');
				var count = catCounts[catId] || 0;
				var $badge = $(this).find('.mh-cat-count-badge');
				$badge.text(count);
				if ( count === 0 ) {
					$(this).addClass('is-empty');
				} else {
					$(this).removeClass('is-empty');
				}
			});

			// Update source pill badges
			$('#mh-source-count-all').text(sourceCounts.all);
			$('#mh-source-count-core').text(sourceCounts.core);
			$('#mh-source-count-classic').text(sourceCounts.classic);

			if ( totalVisible === 0 ) {
				$('#mh-modal-empty').show();
			} else {
				$('#mh-modal-empty').hide();
			}
		}

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
				item.settings = item.settings || {};
				var isFull = (item.settings.layout === 'full');
				var anchor = item.settings.anchor || slugify(label);

				$pageRowsContainer.append(
					'<li class="mh-section-item" data-index="' + i + '">' +
						'<div class="mh-section-item-drag" title="Drag to reorder">' +
							'<span class="dashicons dashicons-menu"></span>' +
						'</div>' +
						'<div class="mh-section-item-info mh-trigger-settings" data-index="' + i + '" title="Click to customize section">' +
							'<div class="mh-section-icon-badge" style="background:' + def.color + '15;color:' + def.color + ';">' +
								'<span class="dashicons ' + def.icon + '" style="font-size:16px;width:16px;height:16px;"></span>' +
							'</div>' +
							'<div class="mh-section-text-col">' +
								'<span class="mh-section-title-text">' + escAttr(label) + '</span>' +
								'<span class="mh-section-meta-text">#' + escAttr(anchor) + ' &bull; ' + (isFull ? 'Full Width' : 'Boxed') + '</span>' +
							'</div>' +
						'</div>' +
						'<div class="mh-section-item-actions">' +
							'<button type="button" class="button button-secondary button-small mh-trigger-settings" data-index="' + i + '" title="Configure Section Settings">' +
								'<span class="dashicons dashicons-admin-generic" style="font-size:13px;width:13px;height:13px;line-height:13px;"></span>' +
							'</button>' +
							'<button type="button" class="mh-remove-section-btn" data-index="' + i + '" title="Remove Section">' +
								'<span class="dashicons dashicons-no-alt" style="font-size:16px;width:16px;height:16px;"></span>' +
							'</button>' +
						'</div>' +
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

		// ── One Page Express Section Settings Side Rail Engine ──
		var currentSideRailIndex = null;
		var $sideRail = null;

		function ensureSideRailElement() {
			var $existing = $('#mh-section-side-rail');
			var $target = $('#customize-controls');
			if ( ! $target.length ) {
				$target = $('.wp-full-overlay-sidebar');
			}
			if ( ! $target.length ) {
				$target = $('#sub-accordion-section-mh_page_builder');
			}
			if ( ! $target.length ) {
				$target = $('body');
			}

			if ( ! $existing.length ) {
				$target.append('<div id="mh-section-side-rail" class="mh-section-side-rail"></div>');
			} else if ( $existing.parent()[0] !== $target[0] ) {
				$target.append($existing);
			}
			$sideRail = $('#mh-section-side-rail');
		}

		function getDefaultItems(type) {
			switch ( type ) {
				case 'features':
				case 'features-4col':
				case 'features-alt':
				case 'features-checklist':
				case 'features-bento':
					return [
						{ title: 'Ultra Fast Performance', desc: 'Engineered for sub-50ms render latency and fluid transitions across modern viewports.', icon: 'dashicons-performance', link: '#' },
						{ title: 'Modular Precision', desc: 'Atomic design architecture with strict zero-entropy token enforcement and verified layout hierarchy.', icon: 'dashicons-layout', link: '#' },
						{ title: 'Enterprise Security', desc: 'Built-in security boundary guards, automated auditing, and encrypted data flow workflows.', icon: 'dashicons-shield', link: '#' }
					];
				case 'testimonials':
				case 'testimonials-single':
				case 'clients':
				case 'case-study':
					return [
						{ name: 'Alex Rivera', role: 'VP of Product, Starship Systems', quote: 'Magic Hat transformed how we deploy and iterate on landing experiences. Seamless and lightning fast.', rating: 5, avatar: '' },
						{ name: 'Elena Rostova', role: 'Design Lead, Astral Cloud', quote: 'The modular quantum components and instant live previews save our team dozens of hours every sprint.', rating: 5, avatar: '' },
						{ name: 'Marcus Vance', role: 'CTO, Horizon Ventures', quote: 'Rock solid reliability. The Gutenberg block syncing without proprietary lock-in is a game changer.', rating: 5, avatar: '' }
					];
				case 'numbers':
				case 'numbers-split':
				case 'numbers-cards':
					return [
						{ value: '99.9%', label: 'Uptime Reliability' },
						{ value: '250+', label: 'Pre-built Patterns' },
						{ value: '<50ms', label: 'Render Latency' },
						{ value: '10x', label: 'Velocity Multiplier' }
					];
				case 'pricing':
				case 'pricing-flat':
				case 'pricing-table':
					return [
						{ name: 'Starter', price: '$29', period: '/mo', features: 'Up to 5 Projects\nCore Component Library\nCommunity Support\nMonthly Updates', btn_text: 'Get Started', btn_link: '#', is_popular: false },
						{ name: 'Professional', price: '$79', period: '/mo', features: 'Unlimited Projects\nFull Pattern Access\nPriority Support\nCustomizer Side Rails\nWeekly Sync', btn_text: 'Go Pro', btn_link: '#', is_popular: true },
						{ name: 'Enterprise', price: '$199', period: '/mo', features: 'Dedicated Architect\nCustom Pattern Conjuring\nSLA Guarantee\nMulti-network Deployment', btn_text: 'Contact Sales', btn_link: '#', is_popular: false }
					];
				case 'team':
				case 'team-split':
					return [
						{ name: 'Samantha Reed', role: 'Lead Architect', bio: 'Pioneering modular layout systems and distributed design systems.', photo: '', social: '#' },
						{ name: 'David Chen', role: 'Systems Engineer', bio: 'Specialist in low-latency rendering and headless WordPress infrastructures.', photo: '', social: '#' },
						{ name: 'Amara Okafor', role: 'Creative Director', bio: 'Crafting cosmic visual narratives and sleek futuristic interfaces.', photo: '', social: '#' }
					];
				case 'faq':
				case 'faq-accordion':
					return [
						{ question: 'How does the modular page builder work?', answer: 'Each section is an atomic, self-contained Gutenberg pattern that you can customize via the Side Rail or directly in the live preview canvas.' },
						{ question: 'Is my content tied to proprietary shortcodes?', answer: 'No. Magic Wand renders clean, native WordPress Gutenberg blocks directly into post_content with zero lock-in.' },
						{ question: 'Can I customize colors and spacing per section?', answer: 'Yes. Every section has dedicated Style & Layout controls in its side rail for backgrounds, padding, and width.' },
						{ question: 'How do navigation menu anchors connect to sections?', answer: 'Each section has a unique HTML Anchor (#slug). Simply link any menu item to that anchor for smooth scrolling.' }
					];
				case 'cta':
				case 'cta-newsletter':
				case 'cta-split':
					return [
						{ title: 'Ready to Accelerate Your Digital Presence?', desc: 'Join thousands of creators synthesizing lightning-fast modern websites with Magic Hat today.', btn1_text: 'Get Started Now', btn1_link: '#', btn2_text: 'Schedule Demo', btn2_link: '#' }
					];
				case 'about':
				case 'about-values':
				case 'about-timeline':
				case 'about-quote':
					return [
						{ title: 'We Build Modern Web Standards', subtitle: 'Our Mission & Engineering Philosophy', body: 'We believe building websites should be as creative and fluid as sketching, yet as robust as aerospace engineering. Every section is designed to deliver unmatched speed, accessibility, and elegance.', image: '' }
					];
				case 'contact':
				case 'contact-bar':
					return [
						{ address: '100 Nexus Blvd, Suite 400, San Francisco, CA', phone: '+1 (555) 019-2834', email: 'hello@example.com', hours: 'Mon - Fri: 9am - 6pm PST', shortcode: '[contact-form-7 id="1" title="Contact form"]' }
					];
				case 'hero':
				case 'hero-centered':
				case 'hero-editorial':
				case 'hero-app':
				case 'hero-video':
					return [
						{ badge: '⚡ NEW GENERATION THEME', headline: 'We Synthesize The Modern Web', subtitle: 'Create stunning, high-converting digital experiences with modular precision.', btn1_text: 'Get Started', btn1_link: '#', btn2_text: 'Explore Architecture', btn2_link: '#', image: '' }
					];
				default:
					return [
						{ title: 'Item 1', desc: 'Custom content description.' },
						{ title: 'Item 2', desc: 'Custom content description.' }
					];
			}
		}

		function renderItemsManagerHtml(s) {
			var type = s.type;
			var items = s.items || [];
			var html = '<div class="mh-control-group">' +
				'<div class="mh-items-control-head">' +
					'<span class="mh-control-group-title" style="margin:0;">Content Items (' + items.length + ')</span>' +
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
								'<span class="mh-item-card-title">' + escAttr(titlePreview) + '</span>' +
							'</div>' +
							'<div class="mh-item-card-actions">' +
								'<button type="button" class="mh-item-card-toggle" aria-expanded="true"><span class="dashicons dashicons-arrow-down-alt2"></span></button>' +
							'</div>' +
						'</div>' +
						'<div class="mh-item-card-body">';

				// Render field editors per item type
				if ( type.indexOf('feature') !== -1 ) {
					html +=
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Card Title</label>' +
							'<input type="text" class="mh-rail-input" data-prop="title" value="' + escAttr(item.title || '') + '" />' +
						'</div>' +
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Description</label>' +
							'<textarea class="mh-rail-textarea" data-prop="desc">' + escAttr(item.desc || '') + '</textarea>' +
						'</div>' +
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Dashicon Slug</label>' +
							'<input type="text" class="mh-rail-input" data-prop="icon" value="' + escAttr(item.icon || 'dashicons-star-filled') + '" />' +
						'</div>' +
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Link URL</label>' +
							'<input type="text" class="mh-rail-input" data-prop="link" value="' + escAttr(item.link || '#') + '" />' +
						'</div>';
				} else if ( type.indexOf('testimonial') !== -1 || type === 'clients' || type === 'case-study' ) {
					html +=
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Author Name</label>' +
							'<input type="text" class="mh-rail-input" data-prop="name" value="' + escAttr(item.name || '') + '" />' +
						'</div>' +
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Role / Company</label>' +
							'<input type="text" class="mh-rail-input" data-prop="role" value="' + escAttr(item.role || '') + '" />' +
						'</div>' +
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Quote / Review</label>' +
							'<textarea class="mh-rail-textarea" data-prop="quote">' + escAttr(item.quote || '') + '</textarea>' +
						'</div>';
				} else if ( type.indexOf('number') !== -1 ) {
					html +=
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Metric Value (e.g. 99.9%, 10x)</label>' +
							'<input type="text" class="mh-rail-input" data-prop="value" value="' + escAttr(item.value || '') + '" />' +
						'</div>' +
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Metric Description</label>' +
							'<input type="text" class="mh-rail-input" data-prop="label" value="' + escAttr(item.label || '') + '" />' +
						'</div>';
				} else if ( type.indexOf('pricing') !== -1 ) {
					html +=
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Plan Name</label>' +
							'<input type="text" class="mh-rail-input" data-prop="name" value="' + escAttr(item.name || '') + '" />' +
						'</div>' +
						'<div class="mh-rail-field" style="display:flex;gap:8px;">' +
							'<div style="flex:1;"><label class="mh-rail-label">Price</label><input type="text" class="mh-rail-input" data-prop="price" value="' + escAttr(item.price || '$29') + '" /></div>' +
							'<div style="flex:1;"><label class="mh-rail-label">Period</label><input type="text" class="mh-rail-input" data-prop="period" value="' + escAttr(item.period || '/mo') + '" /></div>' +
						'</div>' +
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Features (one per line)</label>' +
							'<textarea class="mh-rail-textarea" data-prop="features">' + escAttr(item.features || '') + '</textarea>' +
						'</div>' +
						'<div class="mh-rail-field" style="display:flex;gap:8px;">' +
							'<div style="flex:1;"><label class="mh-rail-label">Button Text</label><input type="text" class="mh-rail-input" data-prop="btn_text" value="' + escAttr(item.btn_text || 'Get Started') + '" /></div>' +
							'<div style="flex:1;"><label class="mh-rail-label">Button Link</label><input type="text" class="mh-rail-input" data-prop="btn_link" value="' + escAttr(item.btn_link || '#') + '" /></div>' +
						'</div>';
				} else if ( type.indexOf('team') !== -1 ) {
					html +=
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Member Name</label>' +
							'<input type="text" class="mh-rail-input" data-prop="name" value="' + escAttr(item.name || '') + '" />' +
						'</div>' +
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Role / Title</label>' +
							'<input type="text" class="mh-rail-input" data-prop="role" value="' + escAttr(item.role || '') + '" />' +
						'</div>' +
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Short Bio</label>' +
							'<textarea class="mh-rail-textarea" data-prop="bio">' + escAttr(item.bio || '') + '</textarea>' +
						'</div>';
				} else if ( type.indexOf('faq') !== -1 ) {
					html +=
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Question</label>' +
							'<input type="text" class="mh-rail-input" data-prop="question" value="' + escAttr(item.question || '') + '" />' +
						'</div>' +
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Answer</label>' +
							'<textarea class="mh-rail-textarea" data-prop="answer">' + escAttr(item.answer || '') + '</textarea>' +
						'</div>';
				} else if ( type.indexOf('cta') !== -1 ) {
					html +=
						'<div class="mh-rail-field" style="display:flex;gap:8px;">' +
							'<div style="flex:1;"><label class="mh-rail-label">Primary Button</label><input type="text" class="mh-rail-input" data-prop="btn1_text" value="' + escAttr(item.btn1_text || 'Get Started') + '" /></div>' +
							'<div style="flex:1;"><label class="mh-rail-label">Primary Link</label><input type="text" class="mh-rail-input" data-prop="btn1_link" value="' + escAttr(item.btn1_link || '#') + '" /></div>' +
						'</div>' +
						'<div class="mh-rail-field" style="display:flex;gap:8px;">' +
							'<div style="flex:1;"><label class="mh-rail-label">Secondary Button</label><input type="text" class="mh-rail-input" data-prop="btn2_text" value="' + escAttr(item.btn2_text || 'Learn More') + '" /></div>' +
							'<div style="flex:1;"><label class="mh-rail-label">Secondary Link</label><input type="text" class="mh-rail-input" data-prop="btn2_link" value="' + escAttr(item.btn2_link || '#') + '" /></div>' +
						'</div>';
				} else if ( type.indexOf('contact') !== -1 ) {
					html +=
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Office Address</label>' +
							'<input type="text" class="mh-rail-input" data-prop="address" value="' + escAttr(item.address || '') + '" />' +
						'</div>' +
						'<div class="mh-rail-field" style="display:flex;gap:8px;">' +
							'<div style="flex:1;"><label class="mh-rail-label">Phone</label><input type="text" class="mh-rail-input" data-prop="phone" value="' + escAttr(item.phone || '') + '" /></div>' +
							'<div style="flex:1;"><label class="mh-rail-label">Email</label><input type="text" class="mh-rail-input" data-prop="email" value="' + escAttr(item.email || '') + '" /></div>' +
						'</div>' +
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Contact Form Shortcode</label>' +
							'<input type="text" class="mh-rail-input" data-prop="shortcode" value="' + escAttr(item.shortcode || '[contact-form-7]') + '" />' +
						'</div>';
				} else {
					html +=
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Title</label>' +
							'<input type="text" class="mh-rail-input" data-prop="title" value="' + escAttr(item.title || '') + '" />' +
						'</div>' +
						'<div class="mh-rail-field">' +
							'<label class="mh-rail-label">Description</label>' +
							'<textarea class="mh-rail-textarea" data-prop="desc">' + escAttr(item.desc || '') + '</textarea>' +
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

		function openSectionSideRail(index) {
			var sections = getSections();
			if ( typeof index !== 'number' || index < 0 || index >= sections.length ) {
				try {
					var raw = JSON.parse(api(settingId) ? api(settingId).get() : '[]');
					if ( Array.isArray(raw) && raw.length > index ) {
						sections = raw;
						pageSectionsCache[ activePageId ] = raw;
					}
				} catch(e) {}
			}
			if ( typeof index !== 'number' || index < 0 || index >= sections.length ) return;

			currentSideRailIndex = index;
			ensureSideRailElement();
			renderSideRail(index);

			if ( api.section && api.section('mh_page_builder') ) {
				api.section('mh_page_builder').expand();
			}

			$sideRail.addClass('active');

			var section = sections[index];
			var slug = (section.settings && section.settings.anchor) ? section.settings.anchor : slugify(section.label || 'section');
			if ( api.previewer ) {
				api.previewer.send('mh-scroll-to', slug);
			}
		}

		window.mhOpenSectionSideRail = openSectionSideRail;

		function closeSectionSideRail() {
			if ( sideRailSyncTimer ) {
				clearTimeout(sideRailSyncTimer);
				sideRailSyncTimer = null;
				var sections = getSections();
				saveSectionsQuiet(sections);
			}
			if ( $sideRail ) {
				$sideRail.removeClass('active');
			}
			currentSideRailIndex = null;
			renderSectionList();
		}

		function renderSideRail(index) {
			var sections = getSections();
			var s = sections[index];
			if ( ! s ) {
				closeSectionSideRail();
				return;
			}
			var def = mhMagicWand.sections.find(function(sec) { return sec.id === s.type; }) || {
				name: 'Section',
				icon: 'dashicons-layout',
				color: '#2563eb'
			};

			s.settings = s.settings || {};
			s.items = s.items || getDefaultItems(s.type);
			s.edits = s.edits || {};

			var label = s.label || def.name;
			var anchor = s.settings.anchor || slugify(label);
			var layout = s.settings.layout || 'boxed';
			var padTop = s.settings.padding_top || 'normal';
			var padBottom = s.settings.padding_bottom || 'normal';
			var bgType = s.settings.bg_type || 'default';
			var bgColor = s.settings.bg_color || '#2563eb';
			var bgGrad = s.settings.bg_gradient || 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)';
			var bgImg = s.settings.bg_image || '';
			var textScheme = s.settings.text_scheme || 'auto';
			var customClasses = s.settings.classes || '';

			var html =
				'<div class="mh-screen3-header customize-section-title">' +
					'<button type="button" class="mh-screen3-back-btn customize-section-back" tabindex="0" title="Back to Page Settings">' +
						'<span class="dashicons dashicons-arrow-left-alt2"></span>' +
						'<span class="screen-reader-text">Back</span>' +
					'</button>' +
					'<div class="mh-screen3-title-wrap">' +
						'<span class="mh-screen3-breadcrumb customize-action">Customizing &#9656; Page Settings</span>' +
						'<h3 class="mh-screen3-section-title">' + escAttr(label) + '</h3>' +
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
						'<div class="mh-control-group">' +
							'<div class="mh-control-group-title">Section Headings</div>' +
							'<div class="mh-control-field">' +
								'<label class="mh-control-field-title">Section Title</label>' +
								'<input type="text" class="mh-control-input mh-rail-title-input" value="' + escAttr(s.settings.title || label) + '" placeholder="Enter section heading..." />' +
							'</div>' +
							'<div class="mh-control-field">' +
								'<label class="mh-control-field-title">Section Subtitle / Description</label>' +
								'<textarea class="mh-control-textarea mh-rail-subtitle-input" placeholder="Brief descriptive subtitle...">' + escAttr(s.settings.subtitle || '') + '</textarea>' +
							'</div>' +
						'</div>' +

						renderItemsManagerHtml(s) +

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

							'<div class="mh-bg-color-wrap mh-control-field" style="' + (bgType === 'color' ? '' : 'display:none;') + '">' +
								'<label class="mh-control-field-title">Custom Background Color</label>' +
								'<input type="color" class="mh-control-input mh-bg-color-input" value="' + escAttr(bgColor) + '" style="height:34px;padding:2px 4px;cursor:pointer;" />' +
								'<div class="mh-rail-color-swatches">' +
									'<button type="button" class="mh-rail-color-swatch" data-color="#2563eb" style="background:#2563eb;" title="Brand Cyan"></button>' +
									'<button type="button" class="mh-rail-color-swatch" data-color="#0f172a" style="background:#0f172a;" title="Dark Slate"></button>' +
									'<button type="button" class="mh-rail-color-swatch" data-color="#1e293b" style="background:#1e293b;" title="Navy Surface"></button>' +
									'<button type="button" class="mh-rail-color-swatch" data-color="#f8fafc" style="background:#f8fafc;" title="Light Surface"></button>' +
									'<button type="button" class="mh-rail-color-swatch" data-color="#ffffff" style="background:#ffffff;" title="Pure White"></button>' +
									'<button type="button" class="mh-rail-color-swatch" data-color="#ff3366" style="background:#ff3366;" title="Neon Accent"></button>' +
									'<button type="button" class="mh-rail-color-swatch" data-color="#10b981" style="background:#10b981;" title="Emerald Success"></button>' +
								'</div>' +
							'</div>' +

							'<div class="mh-bg-gradient-wrap mh-control-field" style="' + (bgType === 'gradient' ? '' : 'display:none;') + '">' +
								'<label class="mh-control-field-title">Gradient Presets</label>' +
								'<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:4px;">' +
									'<button type="button" class="button mh-rail-grad-btn" data-grad="linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)" style="background:linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);color:#fff;border:none;font-weight:600;">Cosmic Cyan</button>' +
									'<button type="button" class="button mh-rail-grad-btn" data-grad="linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" style="background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%);color:#fff;border:none;font-weight:600;">Dark Slate</button>' +
									'<button type="button" class="button mh-rail-grad-btn" data-grad="linear-gradient(135deg, #ff3366 0%, #ff6b3d 100%)" style="background:linear-gradient(135deg, #ff3366 0%, #ff6b3d 100%);color:#fff;border:none;font-weight:600;">Sunset Flare</button>' +
									'<button type="button" class="button mh-rail-grad-btn" data-grad="linear-gradient(135deg, #064e3b 0%, #065f46 100%)" style="background:linear-gradient(135deg, #064e3b 0%, #065f46 100%);color:#fff;border:none;font-weight:600;">Deep Emerald</button>' +
								'</div>' +
							'</div>' +

							'<div class="mh-bg-image-wrap mh-control-field" style="' + (bgType === 'image' ? '' : 'display:none;') + '">' +
								'<label class="mh-control-field-title">Background Image</label>' +
								'<div class="mh-rail-media-wrap">' +
									'<img class="mh-rail-media-preview mh-bg-img-preview" src="' + escAttr(bgImg || 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' fill=\'%23cbd5e1\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z\'/%3E%3C/svg%3E') + '" />' +
									'<div style="flex:1;">' +
										'<button type="button" class="button button-secondary button-small mh-choose-bg-img-btn">Select Image</button>' +
										(bgImg ? ' <button type="button" class="button-link-delete mh-remove-bg-img-btn" style="margin-left:6px;font-size:11px;">Remove</button>' : '') +
										'<input type="hidden" class="mh-bg-img-input" value="' + escAttr(bgImg) + '" />' +
									'</div>' +
								'</div>' +
							'</div>' +

							'<div class="mh-control-field" style="margin-top:10px;">' +
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
								'<div style="display:flex;align-items:center;">' +
									'<span style="padding:5px 8px;background:#f0f0f1;border:1px solid #8c8f94;border-right:none;border-radius:4px 0 0 4px;color:#50575e;font-weight:600;font-size:12px;">#</span>' +
									'<input type="text" class="mh-control-input mh-rail-anchor-input" value="' + escAttr(anchor) + '" style="border-radius:0 4px 4px 0;" placeholder="section-id" />' +
								'</div>' +
								'<p class="mh-control-field-desc">Use this ID to link menu items directly to this section with smooth scrolling (e.g. <code>#' + escAttr(anchor) + '</code>).</p>' +
							'</div>' +
						'</div>' +

						'<div class="mh-control-group">' +
							'<div class="mh-control-group-title">Custom Styling Classes</div>' +
							'<div class="mh-control-field">' +
								'<label class="mh-control-field-title">Additional CSS Classes</label>' +
								'<input type="text" class="mh-control-input mh-rail-classes-input" value="' + escAttr(customClasses) + '" placeholder="my-custom-class another-class" />' +
							'</div>' +
						'</div>' +

						'<div class="mh-control-group">' +
							'<div class="mh-control-group-title">Responsive Display</div>' +
							'<div class="mh-control-field" style="display:flex;flex-direction:column;gap:6px;">' +
								'<label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#1d2327;cursor:pointer;">' +
									'<input type="checkbox" class="mh-rail-hide-mobile" ' + (s.settings.hide_mobile ? 'checked' : '') + ' /> Hide on Mobile devices' +
								'</label>' +
								'<label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#1d2327;cursor:pointer;">' +
									'<input type="checkbox" class="mh-rail-hide-desktop" ' + (s.settings.hide_desktop ? 'checked' : '') + ' /> Hide on Desktop devices' +
								'</label>' +
							'</div>' +
						'</div>' +
					'</div>' +

					// Footer Section Actions
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

		var sideRailSyncTimer = null;

		function syncCurrentSideRailChanges(immediateSave) {
			if ( currentSideRailIndex === null ) return;
			var sections = getSections();
			var s = sections[currentSideRailIndex];
			if ( ! s ) return;

			s.settings = s.settings || {};
			s.items = s.items || [];

			// Update headings
			s.settings.title = $sideRail.find('.mh-rail-title-input').val() || '';
			s.settings.subtitle = $sideRail.find('.mh-rail-subtitle-input').val() || '';
			if ( s.settings.title ) {
				s.label = s.settings.title;
				$sideRail.find('.mh-screen3-section-title').text(s.label);
				$('#mh_page_rows .mh-section-item[data-index="' + currentSideRailIndex + '"] .mh-section-title-text').text(s.label);
			}

			// Update layout
			s.settings.layout = $sideRail.find('.mh-width-opt.active').data('layout') || 'boxed';
			var anchorSlug = s.settings.anchor || slugify(s.label || 'section');
			var layoutText = (s.settings.layout === 'full' ? 'Full Width' : 'Boxed');
			$('#mh_page_rows .mh-section-item[data-index="' + currentSideRailIndex + '"] .mh-section-meta-text').text(
				'#' + anchorSlug + ' • ' + layoutText
			);

			// Update padding
			s.settings.padding_top = $sideRail.find('.mh-pad-top-opt.active').data('val') || 'normal';
			s.settings.padding_bottom = $sideRail.find('.mh-pad-bottom-opt.active').data('val') || 'normal';

			// Update background
			s.settings.bg_type = $sideRail.find('.mh-bg-type-select').val() || 'default';
			s.settings.bg_color = $sideRail.find('.mh-bg-color-input').val() || '#2563eb';
			s.settings.bg_image = $sideRail.find('.mh-bg-img-input').val() || '';

			// Text scheme
			s.settings.text_scheme = $sideRail.find('.mh-text-scheme-opt.active').data('val') || 'auto';

			// Advanced
			s.settings.anchor = slugify($sideRail.find('.mh-rail-anchor-input').val() || s.label || 'section');
			s.settings.classes = $sideRail.find('.mh-rail-classes-input').val() || '';
			s.settings.hide_mobile = $sideRail.find('.mh-rail-hide-mobile').is(':checked');
			s.settings.hide_desktop = $sideRail.find('.mh-rail-hide-desktop').is(':checked');

			// Read updated items
			$sideRail.find('.mh-item-card, .mh-rail-item-card').each(function() {
				var itemIdx = $(this).data('item-idx');
				if ( typeof itemIdx === 'number' && s.items[itemIdx] ) {
					var item = s.items[itemIdx];
					$(this).find('input[data-prop], textarea[data-prop]').each(function() {
						var prop = $(this).data('prop');
						item[prop] = $(this).val();
					});
					var cardTitle = item.title || item.name || item.question || item.value || item.headline || 'Item ' + (itemIdx + 1);
					$(this).find('.mh-item-card-title, .mh-rail-item-header-title').text(cardTitle);
				}
			});

			// Send live update to preview iframe
			if ( api.previewer ) {
				api.previewer.send('mh-update-section-preview', {
					index: currentSideRailIndex,
					section: s
				});
			}

			// Debounce saving so keypresses do not cause jarring immediate saves
			if ( sideRailSyncTimer ) {
				clearTimeout(sideRailSyncTimer);
				sideRailSyncTimer = null;
			}

			if ( immediateSave ) {
				saveSectionsQuiet(sections);
			} else {
				sideRailSyncTimer = setTimeout(function() {
					saveSectionsQuiet(sections);
					sideRailSyncTimer = null;
				}, 750);
			}
		}

		// Screen 3 Back Button
		$('body').on('click', '.mh-screen3-back-btn, .mh-side-rail-back-btn', function(e) {
			e.preventDefault();
			closeSectionSideRail();
		});

		// Screen 3 Tabs Bar
		$('body').on('click', '.mh-screen3-tab-btn, .mh-side-rail-tab-btn', function(e) {
			e.preventDefault();
			var tab = $(this).data('tab');
			$sideRail.find('.mh-screen3-tab-btn, .mh-side-rail-tab-btn').removeClass('active');
			$(this).addClass('active');
			$sideRail.find('.mh-rail-tab-pane').removeClass('active');
			$sideRail.find('#mh-pane-' + tab).addClass('active');
		});

		// Accordion Item Header Toggle
		$('body').on('click', '.mh-item-card-header, .mh-rail-item-header', function(e) {
			if ( $(e.target).closest('.mh-rail-item-delete-btn, .button-link-delete').length ) return;
			var $card = $(this).closest('.mh-item-card, .mh-rail-item-card');
			$card.toggleClass('collapsed');
			var isCollapsed = $card.hasClass('collapsed');
			$card.find('.mh-item-card-toggle').attr('aria-expanded', isCollapsed ? 'false' : 'true');
		});

		// Trigger Settings Screen
		$('body').on('click', '.mh-trigger-settings, .mh-customize-section-btn', function(e) {
			e.stopPropagation();
			var idx = $(this).data('index');
			if ( typeof idx === 'undefined' ) {
				idx = $(this).closest('.mh-section-item').data('index');
			}
			if ( typeof idx !== 'undefined' ) {
				openSectionSideRail(idx);
			}
		});

		// Remove Section Button on Row
		$('body').on('click', '.mh-remove-section-btn, .mh-remove-section', function(e) {
			e.stopPropagation();
			var rawIdx = $(this).attr('data-index');
			if ( typeof rawIdx === 'undefined' ) {
				rawIdx = $(this).closest('.mh-section-item').attr('data-index');
			}
			var idx = parseInt(rawIdx, 10);
			var sections = getSections();
			if ( ! isNaN(idx) && idx >= 0 && idx < sections.length ) {
				sections.splice(idx, 1);
				saveSections(sections);
				if ( currentSideRailIndex === idx ) {
					closeSectionSideRail();
				} else if ( currentSideRailIndex !== null && currentSideRailIndex > idx ) {
					currentSideRailIndex--;
				}
				if ( api.previewer ) {
					api.previewer.send('mh-section-removed', { index: idx });
				}
			}
		});

		// Width and Style options
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

		$('body').on('click', '.mh-rail-item-delete-btn', function(e) {
			e.stopPropagation();
			var itemIdx = $(this).data('item-idx');
			var sections = getSections();
			var s = sections[currentSideRailIndex];
			if ( s && s.items && typeof itemIdx === 'number' ) {
				s.items.splice(itemIdx, 1);
				saveSectionsQuiet(sections);
				renderSideRail(currentSideRailIndex);
				if ( api.previewer ) {
					api.previewer.send('mh-update-section-preview', {
						index: currentSideRailIndex,
						section: s
					});
				}
			}
		});

		$('body').on('click', '.mh-rail-add-item-btn', function(e) {
			e.preventDefault();
			var sections = getSections();
			var s = sections[currentSideRailIndex];
			if ( s ) {
				s.items = s.items || [];
				s.items.push({ title: 'New Item', desc: 'Description of this new feature or item.' });
				saveSectionsQuiet(sections);
				renderSideRail(currentSideRailIndex);
				if ( api.previewer ) {
					api.previewer.send('mh-update-section-preview', {
						index: currentSideRailIndex,
						section: s
					});
				}
			}
		});

		$('body').on('click', '.mh-rail-segment-btn', function(e) {
			e.preventDefault();
			$(this).siblings('.mh-rail-segment-btn').removeClass('active');
			$(this).addClass('active');
			syncCurrentSideRailChanges();
		});

		$('body').on('change', '.mh-bg-type-select', function() {
			var val = $(this).val();
			$sideRail.find('.mh-bg-color-wrap, .mh-bg-gradient-wrap, .mh-bg-image-wrap').hide();
			if ( val === 'color' ) $sideRail.find('.mh-bg-color-wrap').show();
			if ( val === 'gradient' ) $sideRail.find('.mh-bg-gradient-wrap').show();
			if ( val === 'image' ) $sideRail.find('.mh-bg-image-wrap').show();
			syncCurrentSideRailChanges();
		});

		$('body').on('click', '.mh-rail-color-swatch', function(e) {
			e.preventDefault();
			var color = $(this).data('color');
			$sideRail.find('.mh-bg-color-input').val(color);
			syncCurrentSideRailChanges();
		});

		$('body').on('click', '.mh-rail-grad-btn', function(e) {
			e.preventDefault();
			var grad = $(this).data('grad');
			var sections = getSections();
			if ( sections[currentSideRailIndex] ) {
				sections[currentSideRailIndex].settings = sections[currentSideRailIndex].settings || {};
				sections[currentSideRailIndex].settings.bg_gradient = grad;
				syncCurrentSideRailChanges();
			}
		});

		// Media Library picker in Side Rail
		var railMediaFrame;
		$('body').on('click', '.mh-choose-bg-img-btn', function(e) {
			e.preventDefault();
			if ( railMediaFrame ) {
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
				syncCurrentSideRailChanges();
			});
			railMediaFrame.open();
		});

		$('body').on('click', '.mh-remove-bg-img-btn', function(e) {
			e.preventDefault();
			$sideRail.find('.mh-bg-img-input').val('');
			$sideRail.find('.mh-bg-img-preview').attr('src', 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' fill=\'%23cbd5e1\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z\'/%3E%3C/svg%3E');
			$(this).remove();
			syncCurrentSideRailChanges();
		});

		// Header actions: Move up, down, duplicate, delete
		$('body').on('click', '.mh-rail-move-up', function(e) {
			e.preventDefault();
			if ( currentSideRailIndex > 0 ) {
				var sections = getSections();
				var temp = sections[currentSideRailIndex - 1];
				sections[currentSideRailIndex - 1] = sections[currentSideRailIndex];
				sections[currentSideRailIndex] = temp;
				saveSections(sections);
				openSectionSideRail(currentSideRailIndex - 1);
			}
		});

		$('body').on('click', '.mh-rail-move-down', function(e) {
			e.preventDefault();
			var sections = getSections();
			if ( currentSideRailIndex < sections.length - 1 ) {
				var temp = sections[currentSideRailIndex + 1];
				sections[currentSideRailIndex + 1] = sections[currentSideRailIndex];
				sections[currentSideRailIndex] = temp;
				saveSections(sections);
				openSectionSideRail(currentSideRailIndex + 1);
			}
		});

		$('body').on('click', '.mh-rail-duplicate', function(e) {
			e.preventDefault();
			var sections = getSections();
			if ( sections[currentSideRailIndex] ) {
				var clone = JSON.parse(JSON.stringify(sections[currentSideRailIndex]));
				clone.id = 'section_' + Date.now();
				clone.label = (clone.label || 'Section') + ' (Copy)';
				sections.splice(currentSideRailIndex + 1, 0, clone);
				saveSections(sections);
				openSectionSideRail(currentSideRailIndex + 1);
			}
		});

		$('body').on('click', '.mh-rail-delete', function(e) {
			e.preventDefault();
			var sections = getSections();
			if ( currentSideRailIndex > -1 && currentSideRailIndex < sections.length ) {
				var delIdx = currentSideRailIndex;
				sections.splice(delIdx, 1);
				saveSections(sections);
				closeSectionSideRail();
				if ( api.previewer ) {
					api.previewer.send('mh-section-removed', { index: delIdx });
				}
			}
		});

		// Live input synchronization with keyup debounce delay
		$('body').on('keyup input', '#mh-section-side-rail input, #mh-section-side-rail textarea', function(e) {
			if ( e.type === 'keyup' && ['Shift', 'Control', 'Alt', 'Meta', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].indexOf(e.key) !== -1 ) {
				return;
			}
			syncCurrentSideRailChanges(false);
		});

		$('body').on('change blur', '#mh-section-side-rail input, #mh-section-side-rail textarea', function() {
			syncCurrentSideRailChanges(true);
		});

		// Open side rail on customize button click
		$('body').on('click', '.mh-customize-section-btn', function(e) {
			e.stopPropagation();
			var idx = $(this).data('index');
			openSectionSideRail(idx);
		});

		function escAttr(str) {
			if (str === null || str === undefined) return '';
			return String(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
		}

		function slugify(str) {
			return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
		}

		function getSections() {
			if ( Array.isArray( pageSectionsCache[ activePageId ] ) ) {
				return pageSectionsCache[ activePageId ];
			}
			try {
				var raw = api(settingId) ? api(settingId).get() : '[]';
				var parsed = JSON.parse(raw || '[]');
				if ( Array.isArray(parsed) ) {
					pageSectionsCache[ activePageId ] = parsed;
					return parsed;
				}
			} catch(e) {}
			return pageSectionsCache[ activePageId ] || [];
		}

		function saveSections(arr) {
			pageSectionsCache[ activePageId ] = arr;
			if ( ! activePageId || ( mhMagicWand && parseInt(activePageId, 10) === parseInt(mhMagicWand.pageOnFront, 10) ) ) {
				if ( api(settingId) ) { api(settingId).set(JSON.stringify(arr)); }
			}
			if ( mhMagicWand && mhMagicWand.ajaxUrl && activePageId ) {
				$.post( mhMagicWand.ajaxUrl, {
					action: 'mh_save_page_sections',
					page_id: activePageId,
					sections: JSON.stringify( arr ),
					_ajax_nonce: mhMagicWand.nonce,
					nonce: mhMagicWand.nonce
				} );
			}
			renderSectionList();
		}

		function saveSectionsQuiet(arr) {
			pageSectionsCache[ activePageId ] = arr;
			if ( ! activePageId || ( mhMagicWand && parseInt(activePageId, 10) === parseInt(mhMagicWand.pageOnFront, 10) ) ) {
				if ( api(settingId) ) { api(settingId).set(JSON.stringify(arr)); }
			}
			if ( mhMagicWand && mhMagicWand.ajaxUrl && activePageId ) {
				$.post( mhMagicWand.ajaxUrl, {
					action: 'mh_save_page_sections',
					page_id: activePageId,
					sections: JSON.stringify( arr ),
					_ajax_nonce: mhMagicWand.nonce,
					nonce: mhMagicWand.nonce
				} );
			}
		}

		// ── Template Switcher Interaction ────────────────────────
		$('body').on('click', '.mh-switch-btn', function(e) {
			e.preventDefault();
			var $btn = $(this);
			var mode = $btn.data('mode');
			if ( $btn.hasClass('active') ) return;

			var $wrap = $btn.closest('.mh-template-switch-wrap');
			$wrap.find('.mh-switch-btn').prop('disabled', true).css('opacity', '0.6');
			var $status = $('#mh-template-status');
			$status.text('Switching display template...');

			$.post(mhMagicWand.ajaxUrl, {
				action: 'mh_switch_front_template',
				mode: mode,
				nonce: mhMagicWand.nonce
			}, function(res) {
				$wrap.find('.mh-switch-btn').prop('disabled', false).css('opacity', '1');
				if ( res.success ) {
					$wrap.find('.mh-switch-btn').removeClass('active');
					$btn.addClass('active');

					if ( mode === 'magic_hat' ) {
						$status.removeClass('warning').addClass('success').text('✓ Magic Hat canvas is active on your homepage.');
					} else {
						$status.removeClass('success').addClass('warning').text('⚠️ Showing standard blog posts. Switch to Magic Hat to display modular sections.');
					}

					if ( api.previewer ) {
						api.previewer.previewUrl(res.data.url);
					}
				} else {
					$status.text('Failed to switch template.');
				}
			}).fail(function() {
				$wrap.find('.mh-switch-btn').prop('disabled', false).css('opacity', '1');
				$status.text('Server communication error.');
			});
		});

		// Toggle section layout (Full Width vs Boxed)
		$('body').on('click', '.mh-toggle-layout-btn', function(e) {
			e.stopPropagation();
			var idx = $(this).data('index');
			var sections = getSections();
			if ( idx > -1 && idx < sections.length ) {
				sections[idx].settings = sections[idx].settings || {};
				sections[idx].settings.layout = (sections[idx].settings.layout === 'full') ? 'contained' : 'full';
				saveSections(sections);
			}
		});

		// Open side rail and scroll on section row click
		$pageRowsContainer.on('click', '.mh-section-item', function(e) {
			if ( $(e.target).closest('input, button, .dashicons-menu').length ) return;
			var index = $(this).data('index');
			openSectionSideRail(index);
		});

		// Label editing with keyup debounce delay
		var labelSyncTimer = null;
		$('body').on('focus', '.mh-section-label', function() {
			$(this).css('border-color', '#2563eb');
		}).on('blur', '.mh-section-label', function() {
			$(this).css('border-color', 'transparent');
			if ( labelSyncTimer ) {
				clearTimeout(labelSyncTimer);
				labelSyncTimer = null;
			}
			var idx = $(this).data('index');
			var sections = getSections();
			if ( idx > -1 && idx < sections.length ) {
				sections[idx].label = $(this).val().trim();
				saveSectionsQuiet(sections);
			}
		}).on('keydown', '.mh-section-label', function(e) {
			if ( e.key === 'Enter' ) { e.preventDefault(); $(this).blur(); }
		}).on('keyup input', '.mh-section-label', function(e) {
			var $input = $(this);
			var val = $input.val().trim();
			$input.closest('.mh-section-item').find('.mh-section-anchor').text('#' + slugify(val || 'section'));

			if ( e.type === 'keyup' && ['Shift', 'Control', 'Alt', 'Meta', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].indexOf(e.key) !== -1 ) {
				return;
			}
			if ( labelSyncTimer ) {
				clearTimeout(labelSyncTimer);
			}
			labelSyncTimer = setTimeout(function() {
				var idx = $input.data('index');
				var sections = getSections();
				if ( idx > -1 && idx < sections.length ) {
					sections[idx].label = $input.val().trim();
					saveSectionsQuiet(sections);
				}
				labelSyncTimer = null;
			}, 750);
		});

		$('body').on('mouseenter', '.mh-remove-section-btn, .mh-remove-section', function() {
			$(this).css('color', '#dc3232');
		}).on('mouseleave', '.mh-remove-section-btn, .mh-remove-section', function() {
			$(this).css('color', '#ccc');
		});

		renderSectionList();
		updateActivePageIndicator();

		if ( api.previewer ) {
			api.previewer.bind( 'mh-preview-page-loaded', function( data ) {
				if ( ! data || ! data.pageId ) return;
				activePageId = data.pageId;
				activePageTitle = data.pageTitle || 'Page ' + data.pageId;
				if ( data.sections && Array.isArray(data.sections) ) {
					pageSectionsCache[ activePageId ] = data.sections;
				} else if ( ! Array.isArray(pageSectionsCache[ activePageId ]) ) {
					try {
						var initial = JSON.parse(api(settingId) ? api(settingId).get() : '[]');
						if ( Array.isArray(initial) ) {
							pageSectionsCache[ activePageId ] = initial;
						}
					} catch(e) {}
				}
				updateActivePageIndicator();
				renderSectionList();
			} );

			api.previewer.bind( 'mh-page-sections-updated', function( data ) {
				if ( ! data || ! data.pageId ) return;
				pageSectionsCache[ data.pageId ] = data.sections || [];
				if ( data.pageId === activePageId ) {
					renderSectionList();
				}
			} );

			api.previewer.bind( 'mh-open-section-side-rail', function( data ) {
				if ( data && typeof data.index === 'number' ) {
					if ( api.section && api.section('mh_page_builder') ) {
						api.section('mh_page_builder').expand();
					}
					openSectionSideRail( data.index );
				}
			} );
		}

		if ( api.section && api.section('mh_page_builder') ) {
			api.section('mh_page_builder').expanded.bind(function(isExpanded) {
				if ( ! isExpanded ) {
					closeSectionSideRail();
				}
			});
		}

		if ( api(settingId) ) {
			api(settingId).bind(function(newVal) {
				try {
					var parsed = JSON.parse(newVal || '[]');
					if ( Array.isArray(parsed) ) {
						pageSectionsCache[ activePageId ] = parsed;
					}
				} catch(e) {}
				renderSectionList();
			});
		}
	});

})(jQuery, wp.customize);
