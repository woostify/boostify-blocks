/**
 * Centralized dashboard constants and default configurations.
 * Single source of truth for dashboard URLs, categories, and fallbacks.
 */

export const DEFAULT_URLS = {
	support: "https://woostify.com/contact/",
	newPage: "post-new.php?post_type=page",
	docs: "https://woostify.com/docs/",
	community: "https://www.facebook.com/groups/woostify",
	rate: "https://wordpress.org/support/plugin/boostify-blocks/reviews/#new-post",
	demoBase: "https://woostify.com/boostify-blocks",
} as const;

export const BLOCK_CATEGORIES = [
	"Layout",
	"Content",
	"Marketing",
	"Media",
	"Interactive",
	"Extensions",
] as const;

export const ALL_CATEGORIES = ["All", ...BLOCK_CATEGORIES] as const;
