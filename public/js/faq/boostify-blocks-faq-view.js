/**
 * FAQ block — WordPress Interactivity API store (front-end).
 *
 * @package Boostify Blocks
 */

import { store, getContext } from '@wordpress/interactivity';

const NAMESPACE = 'boostify-blocks/faq';

store(NAMESPACE, {
	actions: {
		toggle: () => {
			const context = getContext();
			const parentContext = getContext(NAMESPACE);

			// Multi-open mode: each item toggles independently
			if (parentContext.showMultiple) {
				context.isOpen = !context.isOpen;
				return;
			}

			// Single-open mode
			parentContext.hasInteracted = true;

			const isActiveItem = parentContext.activeItem === context.itemId;
			const isInitiallyOpen = !parentContext.activeItem && context.isOpen;

			if (isActiveItem || isInitiallyOpen) {
				// Close all: clicking the active item, or
				// initial all-open state → close everything.
				parentContext.activeItem = '';
			} else {
				// Open this item. The syncActiveItem callback
				// will reactively close all other items.
				parentContext.activeItem = context.itemId;
			}
		},
	},
	callbacks: {
		syncActiveItem: () => {
			const context = getContext();
			const parentContext = getContext(NAMESPACE);

			// Only enforce single-open after the user has interacted.
			// On initial load, defaultExtend from data-wp-context is preserved.
			if (!parentContext.showMultiple && parentContext.hasInteracted) {
				context.isOpen = parentContext.activeItem === context.itemId;
			}
		},
	},
});