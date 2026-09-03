/**
 * Slider (Swiper) block — WordPress Interactivity API store (front-end).
 *
 * Uses the global `Swiper` class exposed by the vendored
 * public/swiper/swiper-bundle.min.js (enqueued as a classic script before
 * this module runs - see boostify_blocks_block_slider_swiper_render_callback()
 * in includes/wcb-blocks-render-callback.php), the same way public/slick/*
 * is vendored for the original Slider block. Hand-written and unbundled,
 * like the plugin's other Interactivity stores (tabs, counter, faq, form).
 *
 * @package Boostify Blocks
 */

import { store, getContext, getElement } from '@wordpress/interactivity';

const NAMESPACE = 'boostify-blocks/slider-swiper';

// Swiper breakpoints are min-width based ("applies at this width and up"),
// the opposite direction of the Slick max-width breakpoints the old carousel
// used - the base `slidesPerView` below covers mobile, then these two
// breakpoints widen it for tablet/desktop.
const BREAKPOINT_TABLET = 768;
const BREAKPOINT_DESKTOP = 1024;

function equalizeItemHeights(wrap) {
	if (!wrap) return;

	const items = wrap.querySelectorAll('.wcb-slider__item-inner');
	if (!items.length) return;

	items.forEach((el) => {
		el.style.height = 'auto';
		el.style.display = 'flex';
		el.style.alignItems = 'center';
		el.style.justifyContent = 'center';
	});

	let maxHeight = 0;
	items.forEach((el) => {
		maxHeight = Math.max(maxHeight, el.offsetHeight || 0);
	});
	items.forEach((el) => {
		el.style.height = `${maxHeight}px`;
	});
}

store(NAMESPACE, {
	callbacks: {
		initSwiper: () => {
			const { ref } = getElement();
			const context = getContext();

			// Guard against double init (e.g. repeated view-transition navigations)
			// and against the vendored Swiper script not having loaded yet.
			if (!ref || ref.swiper || typeof window.Swiper !== 'function') {
				return;
			}

			const wrap = ref.closest('.wcb-slider__wrap') || ref;
			const columns = context.columns || {};

			new window.Swiper(ref, {
				loop: !!context.rewind,
				speed: context.animationDuration || 500,
				autoplay: context.isAutoPlay
					? {
							delay: context.autoplaySpeed || 3000,
							pauseOnMouseEnter: !!context.hoverpause,
					  }
					: false,
				autoHeight: !!context.adaptiveHeight,
				slidesPerView: columns.mobile || 1,
				navigation:
					context.showArrowsDots !== 'Dot'
						? {
								prevEl: ref.querySelector('.swiper-button-prev'),
								nextEl: ref.querySelector('.swiper-button-next'),
						  }
						: false,
				pagination:
					context.showArrowsDots !== 'Arrow'
						? {
								el: ref.querySelector('.swiper-pagination'),
								clickable: true,
						  }
						: false,
				breakpoints: {
					[BREAKPOINT_TABLET]: {
						slidesPerView: columns.tablet || columns.mobile || 1,
					},
					[BREAKPOINT_DESKTOP]: {
						slidesPerView: columns.desktop || columns.tablet || 1,
					},
				},
				on: {
					init: () => equalizeItemHeights(wrap),
					resize: () => equalizeItemHeights(wrap),
					slideChangeTransitionEnd: () => equalizeItemHeights(wrap),
				},
			});

			if ('ResizeObserver' in window) {
				const ro = new ResizeObserver(() => equalizeItemHeights(wrap));
				ro.observe(wrap);
			}
		},
	},
});
