import { __ } from "@wordpress/i18n";

export type SettingFieldType =
	| "toggle"
	| "number"
	| "text"
	| "secret"
	| "font-multi"
	| "custom";

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
	disabled?: boolean;
	badge?: string;
	customComponent?: string;
}

export interface SettingSectionSchema {
	id: string;
	title: string;
	description?: string;
	icon: string;
	fields: SettingFieldSchema[];
}

export const SETTINGS_SCHEMA: SettingSectionSchema[] = [
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
				defaultValue: 1140,
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
				defaultValue: 16,
			},
			{
				key: "containerElementsGap",
				label: __( "Container Elements Gap", "boostify-blocks" ),
				desc: __( "Default gap spacing between child elements inside Container blocks.", "boostify-blocks" ),
				type: "number",
				unit: "px",
				defaultValue: 20,
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
	{
		id: "asset-generation",
		title: __( "Asset Generation", "boostify-blocks" ),
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
				label: __( "Regenerate Assets", "boostify-blocks" ),
				desc: __( "Regenerate CSS files and refresh cached block styles across your site.", "boostify-blocks" ),
				type: "custom",
				customComponent: "AssetGenerationButton",
			},
		],
	},
	{
		id: "performance",
		title: __( "Performance", "boostify-blocks" ),
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
				desc: __( "Preload font files in the document head to eliminate flash of unstyled text (FOUT).", "boostify-blocks" ),
				type: "toggle",
				defaultValue: "false",
				dependsOn: {
					key: "loadGoogleFontsLocally",
					value: "true",
				},
			},
			{
				key: "allowOnlySelectedFonts",
				label: __( "Allow Only Selected Fonts", "boostify-blocks" ),
				desc: __( "Limit typography choices in the editor to a curated list of approved fonts.", "boostify-blocks" ),
				type: "custom",
				customComponent: "FontSelectionControl",
			},
		],
	},
	{
		id: "block-settings",
		title: __( "Block Settings: Form (reCAPTCHA)", "boostify-blocks" ),
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
			},
			{
				key: "reCAPTCHA_v2_secret_key",
				label: __( "reCAPTCHA v2 Secret Key", "boostify-blocks" ),
				desc: __( "Secret key for Google reCAPTCHA v2 verification.", "boostify-blocks" ),
				type: "secret",
				defaultValue: "",
			},
			{
				key: "reCAPTCHA_v3_site_key",
				label: __( "reCAPTCHA v3 Site Key", "boostify-blocks" ),
				desc: __( "Site key for Google reCAPTCHA v3 invisible score-based verification.", "boostify-blocks" ),
				type: "text",
				defaultValue: "",
				placeholder: "6LdIxAcTAAAAAMcZVRqyHh71UMIEGNQ_MXjiZKhI",
			},
			{
				key: "reCAPTCHA_v3_secret_key",
				label: __( "reCAPTCHA v3 Secret Key", "boostify-blocks" ),
				desc: __( "Secret key for Google reCAPTCHA v3 verification.", "boostify-blocks" ),
				type: "secret",
				defaultValue: "",
			},
		],
	},
	{
		id: "site-visibility",
		title: __( "Site Visibility", "boostify-blocks" ),
		description: __( "Put your site in Coming Soon or Maintenance mode with custom landing pages.", "boostify-blocks" ),
		icon: "visibility",
		fields: [
			{
				key: "_custom_site_visibility",
				label: __( "Maintenance & Coming Soon", "boostify-blocks" ),
				type: "custom",
				customComponent: "SiteVisibilityControl",
			},
		],
	},
];
