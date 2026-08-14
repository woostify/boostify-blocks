/**
 * Counter block — WordPress Interactivity API store (front-end).
 *
 * @package Boostify Blocks
 */

import { store, getContext, getElement } from '@wordpress/interactivity';

const NAMESPACE = 'boostify-blocks/counter';

// Easing functions for smoother animations
const easing = {
	// Cubic ease-out for natural deceleration
	easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),

	// Quad ease-in-out for smooth acceleration and deceleration
	easeInOutQuad: (t) =>
		t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,

	// Cubic ease-in-out for very smooth transitions
	easeInOutCubic: (t) =>
		t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,

	// Elastic ease-out for a subtle "bounce" effect
	easeOutElastic: (t) => {
		const c4 = (2 * Math.PI) / 3;
		return t === 0
			? 0
			: t === 1
			? 1
			: Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
	},
};

const { actions } = store(NAMESPACE, {
	actions: {
		init: () => {
			const context = getContext();
			const { ref } = getElement();

			// Guard against double initialisation (e.g. repeated navigations).
			if (context.animated) {
				return;
			}
			context.animated = true;

			const run = () => actions.animate(context);

			if (!('IntersectionObserver' in window) || !ref) {
				run();
				return;
			}

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							run();
							observer.disconnect();
						}
					});
				},
				{
					threshold: 0.15,
					rootMargin: '0px 0px -50px 0px',
				}
			);

			observer.observe(ref);
		},
		animate: (context) => {
			const start = Number(context.start);
			const end = Number(context.end);
			const duration = Number(context.duration) || 1500;
			const decimals = Number(context.decimals) || 0;
			const separator = context.thousand || '';
			const maxValue = 100;

			// Easing type can be overridden per-block via context.easing.
			const easingType = context.easing || 'easeOutCubic';
			const easingFn = easing[easingType] || easing.easeOutCubic;

			// Formats only the numeric value. Prefix/suffix are rendered as
			// separate elements in the saved markup.
			const format = (value) => {
				const fixed = value.toFixed(decimals);
				if (!separator) {
					return fixed;
				}
				const parts = fixed.split('.');
				parts[0] = parts[0].replace(
					/\B(?=(\d{3})+(?!\d))/g,
					separator
				);
				return parts.join('.');
			};

			const setValue = (value) => {
				context.current = format(value);
				context.dashOffset =
					context.circumference * (1 - value / maxValue);
				context.width = `${(value / maxValue) * 100}%`;
			};

			if (start === end) {
				setValue(end);
				context.done = true;
				return;
			}

			const startedAt = performance.now();

			const tick = (now) => {
				const progress = Math.min((now - startedAt) / duration, 1);
				const easedProgress = easingFn(progress);
				const value = start + (end - start) * easedProgress;

				setValue(value);

				if (progress < 1) {
					requestAnimationFrame(tick);
				} else {
					setValue(end);
					context.done = true;
				}
			};

			requestAnimationFrame(tick);
		},
	},
});
