// SAMPLE – mock data not connected to backend.
// Items below exist in the design mockups but are not yet implemented in the plugin.
// Rendered in disabled/Coming soon state matching design requirements.

import { UnifiedBlockItem } from "../types";

export interface SampleSettingItem {
	id: string;
	key: string;
	label: string;
	desc: string;
	section: "editor" | "performance" | "integrations";
	type: "toggle" | "text";
	defaultValue: any;
	placeholder?: string;
	disabled: boolean;
	badge: string;
	source: "sample";
}

export const SAMPLE_PRO_BLOCKS: UnifiedBlockItem[] = [
	{
		id: "sample-popup",
		name: "boostify-blocks/sample-popup",
		title: "Popup",
		description: "Show popups and slide-ins triggered by scroll, time or exit intent.",
		category: "Marketing",
		icon: "lni-popup",
		status: "disabled",
		isPro: true,
		source: "sample",
		demoUrl: "#",
	},
	{
		id: "sample-pricing",
		name: "boostify-blocks/sample-pricing",
		title: "Pricing table",
		description: "Compare plans side by side with highlighted features.",
		category: "Marketing",
		icon: "lni-tag",
		status: "disabled",
		isPro: true,
		source: "sample",
		demoUrl: "#",
	},
	{
		id: "sample-mega-menu",
		name: "boostify-blocks/sample-mega-menu",
		title: "Mega menu",
		description: "Build multi-column navigation menus out of blocks.",
		category: "Layout",
		icon: "lni-menu",
		status: "disabled",
		isPro: true,
		source: "sample",
		demoUrl: "#",
	},
	{
		id: "sample-dynamic",
		name: "boostify-blocks/sample-dynamic",
		title: "Dynamic content",
		description: "Pull post meta and custom fields into any block.",
		category: "Content",
		icon: "lni-database",
		status: "disabled",
		isPro: true,
		source: "sample",
		demoUrl: "#",
	},
];

export const SAMPLE_SETTINGS: SampleSettingItem[] = [
	{
		id: "sample-catFirst",
		key: "sample_catFirst",
		label: "Show Boostify category first",
		desc: "Move Boostify Blocks to the top of the Gutenberg block inserter.",
		section: "editor",
		type: "toggle",
		defaultValue: "false",
		disabled: true,
		badge: "Coming soon",
		source: "sample",
	},
	{
		id: "sample-assets",
		key: "sample_assets",
		label: "Load assets only where needed",
		desc: "Dynamically load CSS and JavaScript only on pages where Boostify blocks are present.",
		section: "performance",
		type: "toggle",
		defaultValue: "false",
		disabled: true,
		badge: "Coming soon",
		source: "sample",
	},
	{
		id: "sample-mapsKey",
		key: "sample_mapsKey",
		label: "Google Maps API key",
		desc: "Enter your Google Maps JavaScript API key for advanced map rendering and custom pin styles.",
		section: "integrations",
		type: "text",
		defaultValue: "",
		placeholder: "AIzaSy...",
		disabled: true,
		badge: "Coming soon",
		source: "sample",
	},
];
