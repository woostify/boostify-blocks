export interface ExtensionItem {
	id: string;
	name: string;
	title: string;
	description: string;
	category: string;
	settingKey: string;
	badge?: string;
	icon: string;
	demoSlug?: string;
}

export const EXTENSIONS_LIST: ExtensionItem[] = [
	{
		id: "display-conditions",
		name: "boostify-blocks/display-conditions",
		title: "Display Conditions",
		description: "Display or hide blocks dynamically based on user login status, roles, device, operating system, and browser.",
		category: "Extensions",
		settingKey: "enableDisplayConditions",
		badge: "Extension",
		icon: "lni-eye",
		demoSlug: "display-conditions",
	},
];
