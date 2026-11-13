/**
 * Tabs block — WordPress Interactivity API store (front-end).
 *
 * Data flow:
 *   Parent context: { activeTab }
 *   Title/Panel context: { tabIndex, isActiveTab }
 *
 *   - switchTab (data-wp-on--click): sets parent.activeTab on title click.
 *   - syncActiveTab (data-wp-watch): reactively syncs context.isActiveTab
 *     with parent.activeTab on title, panel, and icon elements.
 *
 * @package Boostify Blocks
 */

import { store, getContext, getElement } from '@wordpress/interactivity';

const NAMESPACE = 'boostify-blocks/tabs';

store(NAMESPACE, {
	actions: {
		switchTab: () => {
			const context = getContext();
			const parentContext = getContext(NAMESPACE);
			const { ref } = getElement();
			parentContext.activeTab = context.tabIndex;

			// Re-measure hidden child blocks (Swiper carousels, product sliders, etc.)
			// once the newly active tabpanel is unhidden on the next animation frame.
			const tabsWrap = ref?.closest?.('.wcb-tabs__wrap');
			const raf = window.requestAnimationFrame || ((fn) => setTimeout(fn, 16));
			raf(() => {
				if (tabsWrap) {
					tabsWrap.querySelectorAll('.swiper').forEach((swiperEl) => {
						if (swiperEl.swiper && typeof swiperEl.swiper.update === 'function') {
							swiperEl.swiper.update();
						}
					});
				}
				window.dispatchEvent(new Event('resize'));
			});
		},
	},
	callbacks: {
		syncActiveTab: () => {
			const context = getContext();
			const parentContext = getContext(NAMESPACE);
			context.isActiveTab = parentContext.activeTab === context.tabIndex;
		},
	},
});