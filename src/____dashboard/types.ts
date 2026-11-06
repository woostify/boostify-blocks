import React from "react";
import "jquery";
import { Wcb_theme_layout_global_settings } from "../types";

declare global {
	var ajaxurl: string;
	interface Window {
		boostify_blocks_frontend_ajax_object?: {
			ajaxurl: string;
			homeUrl: string;
			nonce: string;
		};
		boostify_blocks_global_variables?: Record<string, any>;
		boostify_blocks_urls?: Record<string, string>;
	}
}

export interface Wcb_block_Type {
	name: string;
	title: string;
	category: string;
	icon: string;
	description: string;
	parent?: unknown;
}

export type Wcb_blocks_enable_disable_options_Type = Record<string, "enabled" | "disabled">;

export interface ChangelogItem {
	version: string;
	items: string[];
}

export interface DashboardMeta {
	version: string;
	changelog: ChangelogItem[];
	showSample: boolean;
	isWaitlistSubscribed: boolean;
	urls: {
		support: string;
		newPage: string;
		docs: string;
		community: string;
		rate: string;
		demoBase: string;
	};
}

export interface DashboardProps {
	boostify_blocks_list: Wcb_block_Type[];
	boostify_blocks_enable_disable_options: Wcb_blocks_enable_disable_options_Type;
	boostify_blocks_settings_options: Record<string, any>;
	boostify_blocks_layout_global_settings?: Wcb_theme_layout_global_settings;
	boostify_blocks_meta?: DashboardMeta;
}

export type Path = "overview" | "blocks" | "settings";

export type BlockCategory =
	| "All"
	| "Layout"
	| "Content"
	| "Marketing"
	| "Media"
	| "Interactive"
	| "Extensions";

export interface UnifiedBlockItem {
	id: string;
	name: string;
	title: string;
	description: string;
	category: string;
	icon: string;
	status: "enabled" | "disabled";
	isPro?: boolean;
	isNew?: boolean;
	isExtension?: boolean;
	source: "real" | "sample" | "extension";
	settingKey?: string;
	demoUrl?: string;
}
