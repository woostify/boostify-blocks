import { __ } from "@wordpress/i18n";
import { EyeIcon } from "@heroicons/react/24/outline";

// ============================================================================
// CONFIG: Centralized Base URLs for Documentation & Demos
// Values passed from PHP constants (BOOSTIFY_BLOCKS_WEBSITE_URL & BOOSTIFY_BLOCKS_DOCS_URL)
// ============================================================================
export const WCB_WEBSITE_URL =
	window.boostify_blocks_urls?.website_url || "https://woostifyblocks.com/";

export const WCB_DOCS_BASE_URL =
	window.boostify_blocks_urls?.docs_url || "https://woostifyblocks.com/docs/";

/**
 * Helper to generate documentation URL for an Extension
 * @param slug - Extension slug, e.g. "display-conditions"
 */
export const getExtensionDocUrl = (slug: string): string => {
	const cleanBase = WCB_DOCS_BASE_URL.replace(/\/+$/, "");
	const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
	return `${cleanBase}/${cleanSlug}/`;
};

/**
 * Helper to generate demo URL for a Block
 * @param blockName - Block name, e.g. "boostify-blocks/container"
 */
export const getBlockDemoUrl = (blockName: string): string => {
	const cleanBase = WCB_WEBSITE_URL.replace(/\/+$/, "");
	const slug = blockName.replace(/\//g, "-");
	return `${cleanBase}/${slug}`;
};

export type Wcb_item_type = "block" | "extension";

export interface Wcb_grid_item_Type {
	name: string;
	title: string;
	description: string;
	icon: any;
	type: Wcb_item_type;
	category?: string;
	parent?: unknown;
	docSlug?: string;
	demoUrl?: string;
	settingKey?: string;
}

export const EXTENSIONS_LIST: Wcb_grid_item_Type[] = [
	{
		name: "display-conditions",
		title: __( "Display Conditions", "boostify-blocks" ),
		description: __(
			'Enable the "Display Conditions" option in the Advanced tab of blocks to conditionally display blocks based on user state, user role, operating system, browser, or day of the week.',
			"boostify-blocks"
		),
		icon: EyeIcon,
		type: "extension",
		docSlug: "display-conditions",
		demoUrl: getExtensionDocUrl( "display-conditions" ),
		settingKey: "enableDisplayConditions",
	},
];
