import { __ } from "@wordpress/i18n";

export type SettingFieldType =
	| "toggle"
	| "number"
	| "text"
	| "secret"
	| "font-multi"
	| "custom";

export type SettingCategoryId =
	| "editor"
	| "performance"
	| "block-settings"
	| "site-visibility";

export interface SettingFieldSchema {
	key: string;
	label: string;
	desc?: string;
	type: SettingFieldType;
	unit?: string;
	defaultValue?: any;
	placeholder?: string;
	dependsOn?: {
		key: string;
		value: any;
	};
	disabledHint?: string;
	searchKeywords?: string;
	dirtyTrackKeys?: string[];
	disabled?: boolean;
	badge?: string;
	customComponent?: string;
}

export interface SettingSectionSchema {
	id: string;
	title: string;
	description?: string;
	icon?: string;
	fields: SettingFieldSchema[];
}

export interface SettingCategorySchema {
	id: SettingCategoryId;
	title: string;
	description: string;
	icon: string;
	sections: SettingSectionSchema[];
}

export const SETTINGS_CATEGORIES: SettingCategorySchema[] = [
	{
		id: "editor",
		title: __( "Editor", "boostify-blocks" ),
		description: __( "Defaults and tools inside the block editor.", "boostify-blocks" ),
		icon: "edit_square",
		sections: [
			{
				id: "editor-options",
				title: __( "Editor options", "boostify-blocks" ),
				description: __( "Fine-tune container sizing, spacing, and editor features.", "boostify-blocks" ),
				icon: "view_quilt",
				fields: [
					{
						key: "defaultContentWidth",
						label: __( "Default Content Width", "boostify-blocks" ),
						desc: __( "Default max-width for container and content wrappers. Leave blank to inherit from theme.", "boostify-blocks" ),
						type: "number",
						unit: "px",
						defaultValue: 1200,
					},
					{
						key: "buttonInheritFromTheme",
						label: __( "Button – Inherit From Theme", "boostify-blocks" ),
						desc: __( "Inherit button styles (colors, border-radius) from your active theme when available.", "boostify-blocks" ),
						type: "toggle",
						defaultValue: "false",
					},
					{
						key: "containerPadding",
						label: __( "Container Padding", "boostify-blocks" ),
						desc: __( "Default inner padding applied to Container blocks.", "boostify-blocks" ),
						type: "number",
						unit: "px",
						defaultValue: 10,
					},
					{
						key: "containerElementsGap",
						label: __( "Container Elements Gap", "boostify-blocks" ),
						desc: __( "Default gap spacing between child elements inside Container blocks.", "boostify-blocks" ),
						type: "number",
						unit: "px",
						defaultValue: 10,
					},
					{
						key: "blocksEditorSpacing",
						label: __( "Blocks Editor Spacing", "boostify-blocks" ),
						desc: __( "Vertical spacing between blocks inside the Gutenberg editor canvas.", "boostify-blocks" ),
						type: "number",
						unit: "px",
						defaultValue: 0,
					},
					{
						key: "enableCopyPasteStyles",
						label: __( "Copy Paste Styles", "boostify-blocks" ),
						desc: __( "Allow copying styles from one Boostify block and pasting them to another.", "boostify-blocks" ),
						type: "toggle",
						defaultValue: "true",
					},
					{
						key: "enableCustomCss",
						label: __( "Custom CSS", "boostify-blocks" ),
						desc: __( "Add a Custom CSS code editor field to the block inspector for advanced styling.", "boostify-blocks" ),
						type: "toggle",
						defaultValue: "true",
					},
				],
			},
			{
				id: "templates",
				title: __( "Templates", "boostify-blocks" ),
				description: __( "Configure access to the Boostify template library in the editor.", "boostify-blocks" ),
				icon: "grid_view",
				fields: [
					{
						key: "enableTemplatesButton",
						label: __( "Enable Templates Button", "boostify-blocks" ),
						desc: __( "Show the Boostify Templates button in the Gutenberg header to quickly insert pre-designed sections.", "boostify-blocks" ),
						type: "toggle",
						defaultValue: "true",
					},
				],
			},
		],
	},
	{
		id: "performance",
		title: __( "Performance", "boostify-blocks" ),
		description: __( "How block styles, assets and fonts are delivered on the front end.", "boostify-blocks" ),
		icon: "speed",
		sections: [
			{
				id: "asset-generation",
				title: __( "Asset generation", "boostify-blocks" ),
				description: __( "Optimize CSS loading strategy and regenerate cached stylesheets.", "boostify-blocks" ),
				icon: "speed",
				fields: [
					{
						key: "enableFileGeneration",
						label: __( "File Generation", "boostify-blocks" ),
						desc: __( "Generate static CSS files for Boostify blocks instead of inline styles for better cacheability.", "boostify-blocks" ),
						type: "toggle",
						defaultValue: "false",
					},
					{
						key: "_action_regenerate_assets",
						label: __( "Regenerate CSS & Assets", "boostify-blocks" ),
						desc: __( "Clear and recreate all cached CSS files for Boostify blocks. Use this if you notice visual glitches after updating theme or plugins.", "boostify-blocks" ),
						type: "custom",
						customComponent: "AssetGenerationButton",
						dirtyTrackKeys: [],
						searchKeywords: "cache purge css regenerate assets",
					},
				],
			},
			{
				id: "fonts",
				title: __( "Fonts", "boostify-blocks" ),
				description: __( "Speed up page load times and comply with privacy regulations.", "boostify-blocks" ),
				icon: "speed",
				fields: [
					{
						key: "loadGoogleFontsLocally",
						label: __( "Load Google Fonts Locally", "boostify-blocks" ),
						desc: __( "Download and serve Google Fonts from your own server to improve privacy (GDPR) and speed.", "boostify-blocks" ),
						type: "toggle",
						defaultValue: "false",
					},
					{
						key: "preloadLocalFonts",
						label: __( "Preload Local Fonts", "boostify-blocks" ),
						desc: __( "This option will load the font files right away on page load. Preloading Local Fonts can speeds up your website even further.", "boostify-blocks" ),
						type: "toggle",
						defaultValue: "false",
						dependsOn: {
							key: "loadGoogleFontsLocally",
							value: "true",
						},
						disabledHint: __( "Turn on Load Google Fonts Locally to use this.", "boostify-blocks" ),
					},
					{
						key: "allowOnlySelectedFonts",
						label: __( "Allow Only Selected Fonts", "boostify-blocks" ),
						desc: __( "Restrict typography choices across all Boostify blocks to a pre-approved list of fonts.", "boostify-blocks" ),
						type: "custom",
						customComponent: "FontSelectionControl",
						dirtyTrackKeys: ["allowOnlySelectedFonts", "selectedFonts"],
						searchKeywords: "google fonts typography curated list approved",
					},
				],
			},
		],
	},
	{
		id: "block-settings",
		title: __( "Block settings", "boostify-blocks" ),
		description: __( "API keys used by individual blocks.", "boostify-blocks" ),
		icon: "widgets",
		sections: [
			{
				id: "form-recaptcha",
				title: __( "Form (reCAPTCHA)", "boostify-blocks" ),
				description: __( "Configure Google reCAPTCHA keys for the Form block to protect form submissions from spam.", "boostify-blocks" ),
				icon: "edit_note",
				fields: [
					{
						key: "reCAPTCHA_v2_site_key",
						label: __( "reCAPTCHA v2 Site Key", "boostify-blocks" ),
						desc: __( "Site key for Google reCAPTCHA v2 checkbox challenge.", "boostify-blocks" ),
						type: "text",
						defaultValue: "",
						placeholder: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
						searchKeywords: "spam form captcha api key",
					},
					{
						key: "reCAPTCHA_v2_secret_key",
						label: __( "reCAPTCHA v2 Secret Key", "boostify-blocks" ),
						desc: __( "Secret key for Google reCAPTCHA v2 verification.", "boostify-blocks" ),
						type: "secret",
						defaultValue: "",
						searchKeywords: "spam form captcha api key",
					},
					{
						key: "reCAPTCHA_v3_site_key",
						label: __( "reCAPTCHA v3 Site Key", "boostify-blocks" ),
						desc: __( "Site key for Google reCAPTCHA v3 invisible score-based verification.", "boostify-blocks" ),
						type: "text",
						defaultValue: "",
						placeholder: "6LdIxAcTAAAAAMcZVRqyHh71UMIEGNQ_MXjiZKhI",
						searchKeywords: "spam form captcha api key",
					},
					{
						key: "reCAPTCHA_v3_secret_key",
						label: __( "reCAPTCHA v3 Secret Key", "boostify-blocks" ),
						desc: __( "Secret key for Google reCAPTCHA v3 verification.", "boostify-blocks" ),
						type: "secret",
						defaultValue: "",
						searchKeywords: "spam form captcha api key",
					},
				],
			},
		],
	},
	{
		id: "site-visibility",
		title: __( "Site visibility", "boostify-blocks" ),
		description: __( "Hide the site from visitors while it is being built or updated.", "boostify-blocks" ),
		icon: "visibility",
		sections: [
			{
				id: "site-visibility-modes",
				title: "",
				description: __( "Put your site in Coming Soon or Maintenance mode with custom landing pages.", "boostify-blocks" ),
				icon: "visibility",
				fields: [
					{
						key: "site_visibility_coming_soon",
						label: __( "Enable Coming Soon Mode", "boostify-blocks" ),
						desc: __( "Is your website still in the making and not yet ready for other people to see? When the site is ready to be indexed, the 'Coming Soon' page returns an HTTP 200 status code.", "boostify-blocks" ),
						type: "custom",
						customComponent: "SiteVisibilityComingSoon",
						dirtyTrackKeys: ["site_visibility_mode", "site_visibility_page"],
						searchKeywords: "coming soon visibility page http 200",
					},
					{
						key: "site_visibility_maintenance",
						label: __( "Enable Maintenance Mode", "boostify-blocks" ),
						desc: __( "Maintenance Mode returns an HTTP 503 status code, signaling to search engines to revisit the website shortly. However, it's advisable not to utilize this mode for extended periods, ideally limiting its use to a few days.", "boostify-blocks" ),
						type: "custom",
						customComponent: "SiteVisibilityMaintenance",
						dirtyTrackKeys: ["site_visibility_mode", "site_visibility_page"],
						searchKeywords: "maintenance mode visibility page http 503",
					},
				],
			},
		],
	},
];
