export interface BlockMetaEntry {
	cat: string;
	icon: string;
	isNew?: boolean;
	demoSlug?: string;
}

export const FALLBACK_CATEGORY = "Content";

export const BLOCK_META: Record<string, BlockMetaEntry> = {
	"boostify-blocks/container": {
		cat: "Layout",
		icon: "lni-layout",
		demoSlug: "container",
	},
	"boostify-blocks/heading": {
		cat: "Content",
		icon: "heading",
		demoSlug: "heading",
	},
	"boostify-blocks/posts-grid": {
		cat: "Content",
		icon: "lni-grid-alt",
		demoSlug: "posts-grid",
	},
	"boostify-blocks/products": {
		cat: "Content",
		icon: "lni-restaurant",
		demoSlug: "products",
	},
	"boostify-blocks/buttons": {
		cat: "Content",
		icon: "lni-page-break",
		demoSlug: "buttons",
	},
	"boostify-blocks/faq": {
		cat: "Content",
		icon: "lni-support",
		demoSlug: "faq",
	},
	"boostify-blocks/team": {
		cat: "Content",
		icon: "lni-users",
		demoSlug: "team",
	},
	"boostify-blocks/icon-box": {
		cat: "Content",
		icon: "lni-clipboard",
		demoSlug: "icon-box",
	},
	"boostify-blocks/icon-list": {
		cat: "Content",
		icon: "lni-agenda",
		demoSlug: "icon-list",
	},
	"boostify-blocks/form": {
		cat: "Marketing",
		icon: "lni-postcard",
		demoSlug: "form",
	},
	"boostify-blocks/testimonials-swiper": {
		cat: "Marketing",
		icon: "lni-quotation",
		demoSlug: "testimonials",
	},
	"boostify-blocks/countdown": {
		cat: "Marketing",
		icon: "lni-timer",
		demoSlug: "countdown",
	},
	"boostify-blocks/counter": {
		cat: "Marketing",
		icon: "lni-dashboard",
		demoSlug: "counter",
	},
	"boostify-blocks/image": {
		cat: "Media",
		icon: "lni-image",
		demoSlug: "image",
	},
	"boostify-blocks/map": {
		cat: "Media",
		icon: "lni-map",
		demoSlug: "google-maps",
	},
	"boostify-blocks/boostify-icon": {
		cat: "Media",
		icon: "lni-star",
		isNew: true,
		demoSlug: "icon",
	},
	"boostify-blocks/slider-swiper": {
		cat: "Media",
		icon: "lni-layers",
		isNew: true,
		demoSlug: "slider",
	},
	"boostify-blocks/accordion": {
		cat: "Interactive",
		icon: "lni-list",
		demoSlug: "accordion",
	},
	"boostify-blocks/tabs": {
		cat: "Interactive",
		icon: "lni-tab",
		demoSlug: "tabs",
	},
	"boostify-blocks/display-conditions": {
		cat: "Extensions",
		icon: "lni-eye",
		demoSlug: "display-conditions",
	},
};
