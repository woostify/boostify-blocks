/**
 * FAQ block — WordPress Interactivity API store (front-end).
 *
 * @package Boostify Blocks
 */

import { store, getContext, getElement } from '@wordpress/interactivity';

const NAMESPACE = 'boostify-blocks/faq';

/**
 * Generate FAQPage JSON-LD schema from rendered FAQ items and inject it
 * into the document head when `data-faq-schema="true"`.
 */
function generateFaqSchema(wrapper) {
	const items = wrapper.querySelectorAll('.wcb-faq-child__wrap');
	if (!items.length) {
		return;
	}

	const mainEntity = Array.from(items)
		.map((item) => {
			const questionEl = item.querySelector('.wcb-faq-child__question-text');
			const answerEl = item.querySelector('.wcb-faq-child__answer-text');
			const question = questionEl?.textContent?.trim();
			const answer = answerEl?.textContent?.trim();

			if (!question || !answer) {
				return null;
			}

			return {
				'@type': 'Question',
				name: question,
				acceptedAnswer: {
					'@type': 'Answer',
					text: answer,
				},
			};
		})
		.filter(Boolean);

	if (!mainEntity.length) {
		return;
	}

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity,
	};

	const script = document.createElement('script');
	script.type = 'application/ld+json';
	script.setAttribute('data-wcb-faq-schema', 'true');
	script.textContent = JSON.stringify(schema);
	document.head.appendChild(script);
}

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
		generateSchema: () => {
			const { ref } = getElement();
			const wrapper = ref?.closest?.('[data-wp-interactive="boostify-blocks/faq"]');

			if (wrapper?.getAttribute('data-faq-schema') === 'true') {
				generateFaqSchema(wrapper);
			}
		},
	},
});