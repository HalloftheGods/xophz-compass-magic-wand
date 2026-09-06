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

		// ── SVG Wireframe Illustration Generator ────────────────
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

				case 'about':
				case 'about-values':
				case 'about-timeline':
				case 'about-quote':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="16" width="85" height="10" rx="2" fill="#0f172a"/>' +
						'<rect x="15" y="32" width="100" height="5" rx="1.5" fill="#64748b"/>' +
						'<rect x="15" y="41" width="90" height="5" rx="1.5" fill="#94a3b8"/>' +
						'<rect x="15" y="50" width="75" height="5" rx="1.5" fill="#cbd5e1"/>' +
						'<rect x="15" y="62" width="40" height="10" rx="3" fill="' + c + '"/>' +
						'<rect x="135" y="12" width="90" height="61" rx="6" fill="#faf5ff" stroke="#d8b4fe"/>' +
					'</svg>';

				case 'testimonials':
				case 'testimonials-single':
				case 'clients':
				case 'case-study':
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
				case 'numbers-split':
				case 'numbers-cards':
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

				case 'pricing':
				case 'pricing-flat':
				case 'pricing-table':
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

				case 'team':
				case 'team-split':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<circle cx="38" cy="30" r="14" fill="#fce7f3"/><rect x="20" y="50" width="36" height="5" rx="1.5" fill="#0f172a"/><rect x="24" y="59" width="28" height="3" rx="1" fill="#94a3b8"/>' +
						'<circle cx="92" cy="30" r="14" fill="#fce7f3"/><rect x="74" y="50" width="36" height="5" rx="1.5" fill="#0f172a"/><rect x="78" y="59" width="28" height="3" rx="1" fill="#94a3b8"/>' +
						'<circle cx="146" cy="30" r="14" fill="#fce7f3"/><rect x="128" y="50" width="36" height="5" rx="1.5" fill="#0f172a"/><rect x="132" y="59" width="28" height="3" rx="1" fill="#94a3b8"/>' +
						'<circle cx="200" cy="30" r="14" fill="#fce7f3"/><rect x="182" y="50" width="36" height="5" rx="1.5" fill="#0f172a"/><rect x="186" y="59" width="28" height="3" rx="1" fill="#94a3b8"/>' +
					'</svg>';

				case 'faq':
				case 'faq-accordion':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="12" width="210" height="18" rx="3" fill="#ffffff" stroke="#e2e8f0"/><rect x="25" y="19" width="80" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="15" y="34" width="210" height="18" rx="3" fill="#ffffff" stroke="#e2e8f0"/><rect x="25" y="41" width="100" height="5" rx="1.5" fill="#0f172a"/>' +
						'<rect x="15" y="56" width="210" height="18" rx="3" fill="#ffffff" stroke="#e2e8f0"/><rect x="25" y="63" width="70" height="5" rx="1.5" fill="#0f172a"/>' +
					'</svg>';

				case 'cta':
				case 'cta-newsletter':
				case 'cta-split':
					return '<svg viewBox="0 0 240 85" width="100%" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<rect x="15" y="10" width="210" height="65" rx="6" fill="' + c + '"/>' +
						'<rect x="30" y="24" width="110" height="12" rx="3" fill="#ffffff"/>' +
						'<rect x="30" y="42" width="80" height="5" rx="2" fill="#ffffff" fill-opacity="0.8"/>' +
						'<rect x="155" y="27" width="55" height="18" rx="4" fill="#ffffff"/>' +
					'</svg>';

				case 'contact':
				case 'contact-bar':
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

				case 'latest-posts':
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
		var modalHtml =
			'<div id="mh-sections-modal" style="display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(15,23,42,0.75);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:999999;align-items:center;justify-content:center;padding:24px;box-sizing:border-box;">' +
				'<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;width:100%;max-width:1020px;height:88vh;max-height:840px;display:flex;flex-direction:column;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,sans-serif;">' +
					
					// Modal Header
					'<div style="padding:16px 24px;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;background:#f8fafc;">' +
						'<div style="display:flex;align-items:center;gap:12px;">' +
							'<span class="dashicons dashicons-layout" style="font-size:22px;width:22px;height:22px;color:#2563eb;"></span>' +
							'<div>' +
								'<h3 style="margin:0;font-size:16px;font-weight:700;color:#0f172a;line-height:1.2;">' + (mhMagicWand.strings.select_section || 'Section Library') + '</h3>' +
								'<p style="margin:2px 0 0;font-size:12px;color:#64748b;">Choose from 30+ ready-to-use plug-and-play sections</p>' +
							'</div>' +
						'</div>' +
						'<div style="display:flex;align-items:center;gap:12px;">' +
							'<input type="text" id="mh-modal-search" placeholder="' + (mhMagicWand.strings.search_placeholder || 'Search sections...') + '" style="border:1px solid #cbd5e1;border-radius:6px;padding:6px 12px;font-size:12px;color:#0f172a;outline:none;width:220px;transition:border-color 0.15s;" />' +
							'<button type="button" class="mh-close-modal" style="background:#f1f5f9;border:1px solid #e2e8f0;border-radius:6px;font-size:18px;width:32px;height:32px;cursor:pointer;color:#475569;display:flex;align-items:center;justify-content:center;transition:all 0.15s;">&times;</button>' +
						'</div>' +
					'</div>' +

					// Category Filter Tabs
					'<div id="mh-modal-tabs" style="padding:10px 24px;border-bottom:1px solid #f1f5f9;display:flex;gap:6px;overflow-x:auto;white-space:nowrap;background:#ffffff;scrollbar-width:none;">';
					
		var categories = mhMagicWand.categories || [];
		categories.forEach(function(cat, idx) {
			var isActive = idx === 0 ? ' active' : '';
			var bg = idx === 0 ? '#2563eb' : '#f8fafc';
			var color = idx === 0 ? '#ffffff' : '#475569';
			modalHtml += '<button type="button" class="mh-tab-pill' + isActive + '" data-cat="' + cat.id + '" style="background:' + bg + ';color:' + color + ';border:1px solid ' + (idx === 0 ? '#2563eb' : '#e2e8f0') + ';padding:5px 12px;border-radius:9999px;font-size:11px;font-weight:600;cursor:pointer;transition:all 0.15s;">' + cat.name + '</button>';
		});

		modalHtml += '</div>' +

					// Section Cards Grid Container
					'<div id="mh-modal-cards-wrap" style="flex:1;overflow-y:auto;padding:24px;background:#f8fafc;">' +
						'<div id="mh-modal-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">';

		var sectionsList = mhMagicWand.sections || [];
		sectionsList.forEach(function(s) {
			modalHtml +=
				'<div class="mh-section-card" data-id="' + s.id + '" data-cat="' + s.category + '" style="background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:14px;cursor:pointer;transition:all 0.2s;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 1px 3px rgba(0,0,0,0.03);">' +
					'<div>' +
						// Visual Wireframe Preview Box
						'<div class="mh-preview-box" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;margin-bottom:12px;overflow:hidden;display:flex;align-items:center;justify-content:center;height:85px;transition:border-color 0.2s;">' +
							getWireframeSvg(s.id, s.category, s.color) +
						'</div>' +
						'<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">' +
							'<div style="display:flex;align-items:center;gap:6px;">' +
								'<div style="width:24px;height:24px;border-radius:6px;background:' + s.color + '15;display:flex;align-items:center;justify-content:center;">' +
									'<span class="dashicons ' + s.icon + '" style="font-size:14px;width:14px;height:14px;color:' + s.color + ';"></span>' +
								'</div>' +
								'<h4 style="margin:0;font-size:13px;font-weight:700;color:#0f172a;">' + s.name + '</h4>' +
							'</div>' +
							'<span style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#94a3b8;background:#f1f5f9;padding:2px 5px;border-radius:4px;">' + s.category + '</span>' +
						'</div>' +
						'<p style="margin:0;font-size:11px;color:#64748b;line-height:1.4;">' + (s.desc || 'Pre-designed clean section.') + '</p>' +
					'</div>' +
					'<div style="margin-top:12px;padding-top:10px;border-top:1px solid #f1f5f9;display:flex;justify-content:flex-end;">' +
						'<span class="mh-add-label" style="font-size:11px;font-weight:600;color:#2563eb;display:flex;align-items:center;gap:4px;">' + (mhMagicWand.strings.add_section || '+ Add Section') + '</span>' +
					'</div>' +
				'</div>';
		});

		modalHtml +=
						'</div>' +
						'<div id="mh-modal-empty" style="display:none;text-align:center;padding:48px 20px;color:#94a3b8;font-size:13px;">No matching sections found.</div>' +
					'</div>' +

				'</div>' +
			'</div>';

		$('body').append(modalHtml);
		var $modal = $('#mh-sections-modal');

		window.mhOpenAddSectionPanel = function(insertAt) {
			targetInsertionIndex = (typeof insertAt === 'number') ? insertAt : null;
			$modal.css('display', 'flex').hide().fadeIn(150);
			$('#mh-modal-search').val('').focus();
			filterModalCards();
		};

		$('body').on('click', '.mh-add-section', function(e) {
			e.preventDefault();
			window.mhOpenAddSectionPanel();
		});

		$modal.on('click', '.mh-close-modal', function() {
			$modal.fadeOut(150);
		});

		$modal.on('click', function(e) {
			if ( e.target === this ) {
				$modal.fadeOut(150);
			}
		});

		// Category Tabs Switching
		$modal.on('click', '.mh-tab-pill', function() {
			$modal.find('.mh-tab-pill').removeClass('active').css({'background':'#f8fafc','color':'#475569','border-color':'#e2e8f0'});
			$(this).addClass('active').css({'background':'#2563eb','color':'#ffffff','border-color':'#2563eb'});
			filterModalCards();
		});

		// Search Filter
		$modal.on('input', '#mh-modal-search', function() {
			filterModalCards();
		});

		function filterModalCards() {
			var activeCat = $modal.find('.mh-tab-pill.active').data('cat') || 'all';
			var query = ($('#mh-modal-search').val() || '').toLowerCase().trim();
			var visibleCount = 0;

			$modal.find('.mh-section-card').each(function() {
				var $card = $(this);
				var cardCat = $card.data('cat');
				var title = $card.find('h4').text().toLowerCase();
				var desc = $card.find('p').text().toLowerCase();

				var matchesCat = (activeCat === 'all' || activeCat === cardCat);
				var matchesQuery = !query || title.indexOf(query) !== -1 || desc.indexOf(query) !== -1;

				if ( matchesCat && matchesQuery ) {
					$card.show();
					visibleCount++;
				} else {
					$card.hide();
				}
			});

			if ( visibleCount === 0 ) {
				$('#mh-modal-empty').show();
			} else {
				$('#mh-modal-empty').hide();
			}
		}

		$modal.on('mouseenter', '.mh-section-card', function() {
			$(this).css({'border-color':'#2563eb','transform':'translateY(-2px)','box-shadow':'0 8px 16px -4px rgba(37,99,235,0.12)'});
			$(this).find('.mh-preview-box').css('border-color', '#93c5fd');
		}).on('mouseleave', '.mh-section-card', function() {
			$(this).css({'border-color':'#e2e8f0','transform':'none','box-shadow':'0 1px 3px rgba(0,0,0,0.03)'});
			$(this).find('.mh-preview-box').css('border-color', '#e2e8f0');
		});

		// Insert Selected Section
		$modal.on('click', '.mh-section-card', function() {
			var sectionId = $(this).data('id');
			var def = mhMagicWand.sections.find(function(s) { return s.id === sectionId; });
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
			$modal.fadeOut(150);
			targetInsertionIndex = null;
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
				item.settings = item.settings || {};
				var isFull = (item.settings.layout === 'full');
				var widthTitle = isFull ? 'Layout: Full Width (100% bleed). Click to toggle to Boxed.' : 'Layout: Boxed (1200px container). Click to toggle to Full Width.';
				var widthIcon = isFull ? 'dashicons-editor-expand' : 'dashicons-editor-contract';
				var widthText = isFull ? 'Full' : 'Boxed';
				var widthBg = isFull ? '#0284c7' : '#f1f5f9';
				var widthColor = isFull ? '#ffffff' : '#475569';
				var widthBorder = isFull ? '#0284c7' : '#cbd5e1';

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
						'<div style="display:flex;align-items:center;gap:6px;flex-shrink:0;">' +
							'<button type="button" class="mh-toggle-layout-btn" data-index="' + i + '" title="' + escAttr(widthTitle) + '" style="background:' + widthBg + ';border:1px solid ' + widthBorder + ';border-radius:3px;font-size:10px;padding:2px 6px;cursor:pointer;display:flex;align-items:center;gap:3px;color:' + widthColor + ';font-weight:600;transition:all .15s;"><span class="dashicons ' + widthIcon + '" style="font-size:12px;width:12px;height:12px;line-height:12px;"></span> ' + widthText + '</button>' +
							'<button type="button" class="mh-remove-section" data-index="' + i + '" style="background:none;border:none;color:#ccc;cursor:pointer;padding:2px;display:flex;align-items:center;transition:color .15s;flex-shrink:0;" title="Remove"><span class="dashicons dashicons-no-alt" style="font-size:16px;width:16px;height:16px;"></span></button>' +
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

		function escAttr(str) {
			return str.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
		}

		function slugify(str) {
			return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
		}

		function getSections() {
			if ( pageSectionsCache[ activePageId ] ) {
				return pageSectionsCache[ activePageId ];
			}
			try { return JSON.parse(api(settingId) ? api(settingId).get() : '[]') || []; }
			catch(e) { return []; }
		}

		function saveSections(arr) {
			pageSectionsCache[ activePageId ] = arr;
			if ( ! activePageId || ( mhMagicWand && activePageId === mhMagicWand.pageOnFront ) ) {
				if ( api(settingId) ) { api(settingId).set(JSON.stringify(arr)); }
			}
			if ( mhMagicWand && mhMagicWand.ajaxUrl && activePageId ) {
				$.post( mhMagicWand.ajaxUrl, {
					action: 'mh_save_page_sections',
					page_id: activePageId,
					sections: JSON.stringify( arr ),
					_ajax_nonce: mhMagicWand.nonce
				} );
			}
			renderSectionList();
		}

		function saveSectionsQuiet(arr) {
			pageSectionsCache[ activePageId ] = arr;
			if ( ! activePageId || ( mhMagicWand && activePageId === mhMagicWand.pageOnFront ) ) {
				if ( api(settingId) ) { api(settingId).set(JSON.stringify(arr)); }
			}
			if ( mhMagicWand && mhMagicWand.ajaxUrl && activePageId ) {
				$.post( mhMagicWand.ajaxUrl, {
					action: 'mh_save_page_sections',
					page_id: activePageId,
					sections: JSON.stringify( arr ),
					_ajax_nonce: mhMagicWand.nonce
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

		// Remove section
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
			$(this).css('border-color', '#2563eb');
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
		updateActivePageIndicator();

		if ( api.previewer ) {
			api.previewer.bind( 'mh-preview-page-loaded', function( data ) {
				if ( ! data || ! data.pageId ) return;
				activePageId = data.pageId;
				activePageTitle = data.pageTitle || 'Page ' + data.pageId;
				pageSectionsCache[ activePageId ] = data.sections || [];
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
		}

		if ( api(settingId) ) {
			api(settingId).bind(function() {
				if ( ! activePageId || ( mhMagicWand && activePageId === mhMagicWand.pageOnFront ) ) {
					renderSectionList();
				}
			});
		}
	});

})(jQuery, wp.customize);
