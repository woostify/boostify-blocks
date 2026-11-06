import React, { FC } from "react";
import { __ } from "@wordpress/i18n";
import SettingsSectionCard from "./SettingsSectionCard";
import { SETTINGS_SCHEMA } from "../../data/settingsSchema";

interface SettingsPageProps {
	settings: Record<string, any>;
	onUpdateSetting: (key: string, value: any) => void;
	showSample?: boolean;
}

const SettingsPage: FC<SettingsPageProps> = ({
	settings,
	onUpdateSetting,
	showSample = true,
}) => {
	return (
		<main className="bb-settings-container">
			{/* Page Title */}
			<div className="bb-page-title-group">
				<h1 className="bb-page-title">
					{__( "Settings", "boostify-blocks" )}
				</h1>
				<div className="bb-page-subtitle">
					{__( "Global options that apply to every Boostify block.", "boostify-blocks" )}
				</div>
			</div>

			{/* Section Cards List */}
			{SETTINGS_SCHEMA.map((section, idx) => (
				<SettingsSectionCard
					key={section.id}
					section={section}
					settings={settings}
					onUpdateSetting={onUpdateSetting}
					showSample={showSample}
					zIndex={SETTINGS_SCHEMA.length - idx}
				/>
			))}
		</main>
	);
};

export default SettingsPage;
