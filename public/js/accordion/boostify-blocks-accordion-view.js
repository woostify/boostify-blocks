/**
 * Accordion block — WordPress Interactivity API store (front-end).
 *
 * Fully supports WAI-ARIA Accordion Pattern, keyboard navigation
 * (Arrow keys, Home, End), single/multiple expansion modes, and
 * URL anchor / hash navigation matching Kadence block behavior.
 *
 * @package Boostify Blocks
 */

import { store, getContext, getElement } from '@wordpress/interactivity';

const NAMESPACE = 'boostify-blocks/accordion';

/**
 * Handle URL hash navigation on load or hashchange.
 */
function handleHashNavigation(wrapper) {
	const hash = window.location.hash ? window.location.hash.substring(1) : '';
	if (!hash) {
		return;
	}

	const targetEl = document.getElementById(hash);
	if (!targetEl || !wrapper.contains(targetEl)) {
		return;
	}

	const item = targetEl.closest('.wcb-accordion-item__wrap');
	if (!item) {
		return;
	}

	const trigger = item.querySelector('.wcb-accordion-item__trigger');
	if (trigger && trigger.getAttribute('aria-expanded') !== 'true') {
		trigger.click();
		setTimeout(() => {
			item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
		}, 360);
	}
}

store(NAMESPACE, {
	actions: {
		toggle: () => {
			const context = getContext();
			const parentContext = getContext(NAMESPACE);

			if (parentContext.allowMultipleOpen) {
				context.isOpen = !context.isOpen;
				return;
			}

			// Single-open mode
			parentContext.hasInteracted = true;

			const isActiveItem = parentContext.activeItem === context.itemId;
			const isInitiallyOpen = !parentContext.activeItem && context.isOpen;

			if (isActiveItem || isInitiallyOpen) {
				parentContext.activeItem = '';
			} else {
				parentContext.activeItem = context.itemId;
			}
		},

		onKeyDown: (event) => {
			const key = event.key;
			if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(key)) {
				return;
			}

			const { ref } = getElement();
			const wrapper = ref?.closest?.('[data-wp-interactive="boostify-blocks/accordion"]');
			if (!wrapper) {
				return;
			}

			const triggers = Array.from(
				wrapper.querySelectorAll('.wcb-accordion-item__trigger')
			);
			const index = triggers.indexOf(ref);

			if (index === -1) {
				return;
			}

			event.preventDefault();

			let nextIndex = index;
			if (key === 'ArrowDown') {
				nextIndex = (index + 1) % triggers.length;
			} else if (key === 'ArrowUp') {
				nextIndex = (index - 1 + triggers.length) % triggers.length;
			} else if (key === 'Home') {
				nextIndex = 0;
			} else if (key === 'End') {
				nextIndex = triggers.length - 1;
			}

			triggers[nextIndex]?.focus();
		},
	},

	callbacks: {
		syncActiveItem: () => {
			const context = getContext();
			const parentContext = getContext(NAMESPACE);

			if (!parentContext.allowMultipleOpen && parentContext.hasInteracted) {
				context.isOpen = parentContext.activeItem === context.itemId;
			}
		},

		init: () => {
			const { ref } = getElement();
			if (!ref) {
				return;
			}

			// Handle URL hash navigation on init
			handleHashNavigation(ref);

			// Listen for runtime hash changes
			window.addEventListener('hashchange', () => {
				handleHashNavigation(ref);
			});
		},
	},
});
