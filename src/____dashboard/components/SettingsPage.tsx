import React, { useEffect, useState, FC } from "react";
import { __ } from "@wordpress/i18n";
import {
	Cog6ToothIcon,
	RectangleGroupIcon,
	CubeIcon,
	Squares2X2Icon,
	RocketLaunchIcon,
	EyeIcon,
} from "@heroicons/react/24/outline";
import SettingsPageEditorOptions from "./SettingsPageEditorOptions";
import toast, { Toaster } from "react-hot-toast";
import SettingsPageTemplates from "./SettingsPageTemplates";
import SettingsPageBlockSettings from "./SettingsPageBlockSettings";
import SettingsPageAssetGeneration from "./SettingPageAssetGeneration";
import SettingsPagePerformance from "./SettingsPagePerformance";
import SettingsPageSiteVisibility from "./SettingsPageSiteVisibility";
import { Wcb_theme_layout_global_settings } from "../../types";

interface Tab {
	name: string;
	label: string;
	icon: any;
}

const TABS: Tab[] = [
	{
		name: "editor-options",
		label: __( "Editor options", "boostify-blocks" ),
		icon: Cog6ToothIcon,
	},
	{
		name: "templates",
		label: __( "Templates", "boostify-blocks" ),
		icon: RectangleGroupIcon,
	},
	{
		name: "asset-generation",
		label: "Asset Generation",
		icon: CubeIcon,
	},
	{
		name: "block-settings",
		label: __( "Block settings", "boostify-blocks" ),
		icon: Squares2X2Icon,
	},
	{
		name: "performance",
		label: __( "Performance", "boostify-blocks" ),
		icon: RocketLaunchIcon,
	},
	{
		name: "site-visibility",
		label: __( "Site visibility", "boostify-blocks" ),
		icon: EyeIcon,
	},
];

interface Props {
	initData: typeof window.boostify_blocks_global_variables;
	themeLayoutGlobal?: Wcb_theme_layout_global_settings;
	allSettings?: typeof window.boostify_blocks_global_variables;
	onUpdateSettings?: (newData: typeof window.boostify_blocks_global_variables) => void;
}

const SettingsPage: FC<Props> = ({
	initData,
	themeLayoutGlobal,
	allSettings: externalSettings,
	onUpdateSettings,
}) => {
	const [localSettings, setLocalSettings] = useState(initData);
	const allSettings = externalSettings ?? localSettings;
	const [currentTab, setcurrentTab] = useState(TABS[0].name);

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const tab = urlParams.get("tab");
		if (tab && TABS.some((item) => item.name === tab)) {
			setcurrentTab(tab);
		}
	}, []);

	const setHistoryStateParams = (tab: string) => {
		let queryParams = new URLSearchParams(window.location.search);
		const path = queryParams.get("path");
		if (path) {
			queryParams.set("path", path);
		}
		queryParams.set("tab", tab);

		history.replaceState(null, "", `?${queryParams.toString()}`);
	};

	const handleUpdateSettings = (newData: typeof window.boostify_blocks_global_variables) => {
		if (onUpdateSettings) {
			onUpdateSettings(newData);
			return;
		}

		if (typeof jQuery !== "function") {
			return;
		}

		const newSettings = {
			...allSettings,
			...newData,
		};
		setLocalSettings(newSettings);
		const data = {
			action: "boostify_blocks_dashboard_update_settings",
			nonce: (window as any)?.boostify_blocks_frontend_ajax_object?.nonce,
			settings: newSettings,
		};

		toast.promise(
			// @ts-ignore
			jQuery.post(ajaxurl, data, function (response) {
				console.log("Got this from the server: ", response);
			}),
			{
				loading: __( "Saving...", "boostify-blocks" ),
				success: <div>{__( "Successfully saved!", "boostify-blocks" )}</div>,
				error: <div>{__( "Could not save.", "boostify-blocks" )}</div>,
			}
		);
	};

	const renderLeft = () => {
		return (
			<div className="space-y-1">
				{TABS.map((item) => {
					const isActive = currentTab === item.name;
					return (
						<div
							key={item.name}
							className={`flex items-center space-x-3 text-base font-medium px-3.5 py-3.5 rounded-xl cursor-pointer ${isActive
									? "bg-slate-100/80 text-blue-600"
									: "text-slate-800 hover:bg-slate-50"
								}`}
							onClick={() => {
								setcurrentTab(item.name);
								setHistoryStateParams(item.name);
							}}
						>
							<item.icon
								className={`w-6 h-6  ${isActive ? " text-blue-600" : "text-slate-400"
									}`}
							/>
							<span>{item.label}</span>
						</div>
					);
				})}
			</div>
		);
	};

	const renderRight = () => {
		switch (currentTab) {
			case "editor-options":
				return (
					<SettingsPageEditorOptions
						themeLayoutGlobal={themeLayoutGlobal}
						onChange={(data) => {
							handleUpdateSettings(data);
						}}
						allSettings={allSettings}
					/>
				);
			case "templates":
				return (
					<SettingsPageTemplates
						onChange={(data) => {
							handleUpdateSettings(data);
						}}
						allSettings={allSettings}
					/>
				);
			case "asset-generation":
				return (
					<SettingsPageAssetGeneration
						onChange={(data) => {
							handleUpdateSettings(data);
						}}
						allSettings={allSettings}
					/>
				);
			case "block-settings":
				return (
					<SettingsPageBlockSettings
						onChange={(data) => {
							handleUpdateSettings(data);
						}}
						allSettings={allSettings}
					/>
				);

			case "performance":
				return (
					<SettingsPagePerformance
						onChange={(data) => {
							handleUpdateSettings(data);
						}}
						allSettings={allSettings}
					/>
				);

			case "site-visibility":
				return (
					<SettingsPageSiteVisibility
						onChange={(data) => {
							handleUpdateSettings(data);
						}}
						allSettings={allSettings}
					/>
				);

			default:
				return <div className="text-lg font-medium">{__( "Coming soon ...", "boostify-blocks" )}</div>;
		}
	};

	return (
		<div>
			<div className="lg:grid lg:grid-cols-12 min-h-[36rem] h-full">
				<div className="py-8 sm:px-8 lg:pr-8 lg:pl-0 lg:col-span-3">
					{renderLeft()}
				</div>
				<div className="lg:col-span-9 border-l p-8">{renderRight()}</div>
			</div>
		</div>
	);
};

export default SettingsPage;
