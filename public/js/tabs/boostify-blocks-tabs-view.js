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

import { store, getContext } from '@wordpress/interactivity';

const NAMESPACE = 'boostify-blocks/tabs';

store(NAMESPACE, {
	actions: {
		switchTab: () => {
			const context = getContext();
			const parentContext = getContext(NAMESPACE);
			parentContext.activeTab = context.tabIndex;
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