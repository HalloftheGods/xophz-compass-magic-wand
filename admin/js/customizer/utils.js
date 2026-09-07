/**
 * Magic Wand Customizer - Shared Utilities
 *
 * Adheres to Quantum Engineering Standards (Protocol 1 & Protocol 7C).
 * Self-cleaning timer utilities, escaping, and slugification with zero em dashes.
 *
 * @package Xophz_Compass_Magic_Wand
 */

(function(window) {
	'use strict';

	window.mhCustomizer = window.mhCustomizer || {};

	/**
	 * Escape string for safe HTML attribute insertion.
	 *
	 * @param {string|number|null|undefined} str Value to escape.
	 * @return {string} Escaped string.
	 */
	function escAttr(str) {
		var isNil = str === null || typeof str === 'undefined';
		if (isNil) return '';

		return String(str)
			.replace(/&/g, '&amp;')
			.replace(/"/g, '&quot;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
	}

	/**
	 * Convert a human-readable title or label into a URL-friendly anchor slug.
	 *
	 * @param {string} str Raw string.
	 * @return {string} Slugified string.
	 */
	function slugify(str) {
		var isInvalid = !str || typeof str !== 'string';
		if (isInvalid) return 'section';

		return str
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '');
	}

	/**
	 * Create a self-cleaning debounced function.
	 *
	 * @param {Function} fn Callback to execute.
	 * @param {number} delay Debounce delay in milliseconds.
	 * @return {{ run: Function, cancel: Function, flush: Function }} Debounce controller.
	 */
	function createDebounce(fn, delay) {
		var timer = null;
		var lastArgs = null;
		var lastContext = null;

		function cancel() {
			var hasTimer = timer !== null;
			if (hasTimer) {
				clearTimeout(timer);
				timer = null;
			}
			lastArgs = null;
			lastContext = null;
		}

		function flush() {
			var hasTimer = timer !== null;
			if (hasTimer && fn) {
				clearTimeout(timer);
				timer = null;
				fn.apply(lastContext, lastArgs || []);
				lastArgs = null;
				lastContext = null;
			}
		}

		function run() {
			lastArgs = Array.prototype.slice.call(arguments);
			lastContext = this;

			cancel();
			timer = setTimeout(function() {
				timer = null;
				fn.apply(lastContext, lastArgs || []);
				lastArgs = null;
				lastContext = null;
			}, delay || 750);
		}

		return {
			run: run,
			cancel: cancel,
			flush: flush
		};
	}

	window.mhCustomizer.utils = {
		escAttr: escAttr,
		slugify: slugify,
		createDebounce: createDebounce
	};

})(window);
