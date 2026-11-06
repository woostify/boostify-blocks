import React, { FC, useState } from "react";
import { __ } from "@wordpress/i18n";
import DynamicIcon from "../common/DynamicIcon";
import AssetGenerationControl from "./AssetGenerationControl";
import FontSelectionControl from "./FontSelectionControl";
import SettingsPageSiteVisibility from "../SettingsPageSiteVisibility";
import { SettingSectionSchema, SettingFieldSchema } from "../../data/settingsSchema";
import { postAjax } from "../../utils/ajax";

interface SettingsSectionCardProps {
	section: SettingSectionSchema;
	settings: Record<string, any>;
	onUpdateSetting: (key: string, value: any) => void;
	showSample?: boolean;
	zIndex?: number;
}

const SettingsSectionCard: FC<SettingsSectionCardProps> = ({
	section,
	settings,
	onUpdateSetting,
	zIndex,
}) => {
	const ACCENT_COLOR = "#635bff";
	const [visibleSecrets, setVisibleSecrets] = useState<Record<string, boolean>>({});

	const toggleSecretVisibility = (key: string) => {
		setVisibleSecrets((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	const renderField = (field: SettingFieldSchema, isFirst: boolean) => {
		// Dependency check
		if (field.dependsOn) {
			const parentVal = settings[field.dependsOn.key];
			if (String(parentVal ?? "") !== String(field.dependsOn.value)) {
				return null;
			}
		}

		// Custom renderers
		if (field.type === "custom") {
			if (field.customComponent === "AssetGenerationButton") {
				return (
					<div
						key={field.key}
						className="bb-settings-row"
					>
						<AssetGenerationControl
							enableFileGeneration={settings.enableFileGeneration === "true"}
							onToggleFileGeneration={(enabled) =>
								onUpdateSetting("enableFileGeneration", enabled ? "true" : "false")
							}
						/>
					</div>
				);
			}

			if (field.customComponent === "FontSelectionControl") {
				const isEnabled = settings.allowOnlySelectedFonts === "true";
				const fonts = Array.isArray(settings.selectedFonts) ? settings.selectedFonts : [];
				return (
					<div
						key={field.key}
						className="bb-settings-row"
					>
						<FontSelectionControl
							enabled={isEnabled}
							selectedFonts={fonts}
							onToggle={(checked) =>
								onUpdateSetting("allowOnlySelectedFonts", checked ? "true" : "false")
							}
							onChangeFonts={(newFonts) =>
								onUpdateSetting("selectedFonts", newFonts)
							}
						/>
					</div>
				);
			}

			if (field.customComponent === "SiteVisibilityControl") {
				return (
					<SettingsPageSiteVisibility
						key={field.key}
						allSettings={settings as any}
						onChange={(newSettings) => {
							Object.entries(newSettings).forEach(([k, v]) => {
								onUpdateSetting(k, v);
							});
						}}
					/>
				);
			}
			return null;
		}

		const rawValue = settings[field.key] ?? field.defaultValue ?? "";

		// Toggle row
		if (field.type === "toggle") {
			const isChecked = String(rawValue) === "true";
			return (
				<div
					key={field.key}
					className="bb-settings-row"
				>
					<div className="bb-settings-col-text">
						<div className="bb-settings-label">
							{field.label}
						</div>
						{field.desc && (
							<div className="bb-settings-desc">
								{field.desc}
							</div>
						)}
					</div>

					<button
						type="button"
						role="switch"
						aria-checked={isChecked}
						onClick={() => {
							const nextVal = isChecked ? "false" : "true";
							onUpdateSetting(field.key, nextVal);
							if (field.key === "enableFileGeneration" && nextVal === "true") {
								postAjax({
									action: "boostify_blocks_regenerate_assets",
									timeout: 25000,
								}).catch(() => {});
							}
						}}
						className="bb-switch"
					>
						<span className="bb-switch-thumb" />
					</button>
				</div>
			);
		}

		// Number input row
		if (field.type === "number") {
			// Strip 'px' if stored as string e.g. "1140px"
			const numValue = typeof rawValue === "string" ? rawValue.replace(/[^0-9]/g, "") : rawValue;
			return (
				<div
					key={field.key}
					className="bb-settings-row"
				>
					<div className="bb-settings-col-text">
						<div className="bb-settings-label">
							{field.label}
						</div>
						{field.desc && (
							<div className="bb-settings-desc">
								{field.desc}
							</div>
						)}
					</div>

					<div className="bb-number-input-wrap">
						<input
							type="number"
							value={numValue}
							onChange={(e) => {
								const parsed = parseInt(e.target.value, 10);
								const val = isNaN(parsed) ? 0 : parsed;
								// Keep 'px' format if that is how it's stored
								if (typeof rawValue === "string" && rawValue.endsWith("px")) {
									onUpdateSetting(field.key, `${val}px`);
								} else {
									onUpdateSetting(field.key, val);
								}
							}}
							className="bb-number-input"
						/>
						{field.unit && (
							<span className="bb-input-unit">
								{field.unit}
							</span>
						)}
					</div>
				</div>
			);
		}

		// Text & Secret row
		if (field.type === "text" || field.type === "secret") {
			const isSecret = field.type === "secret";
			const isVisible = visibleSecrets[field.key] || false;
			return (
				<div
					key={field.key}
					className="bb-settings-row"
				>
					<div className="bb-settings-col-text">
						<div className="bb-settings-label">
							{field.label}
						</div>
						{field.desc && (
							<div className="bb-settings-desc">
								{field.desc}
							</div>
						)}
					</div>

					<div className="bb-text-input-wrap">
						<input
							type={isSecret && !isVisible ? "password" : "text"}
							value={rawValue}
							placeholder={field.placeholder || ""}
							onChange={(e) => onUpdateSetting(field.key, e.target.value)}
							className={`bb-text-input ${isSecret ? "is-secret" : ""}`}
						/>
						{isSecret && (
							<button
								type="button"
								onClick={() => toggleSecretVisibility(field.key)}
								className="bb-secret-toggle"
							>
								<DynamicIcon name="visibility" size={16} />
							</button>
						)}
					</div>
				</div>
			);
		}

		return null;
	};

	return (
		<section
			className="bb-settings-section"
			style={{ zIndex: zIndex ?? "auto" }}
		>
			{/* Section Header */}
			<div className="bb-section-header">
				<h2 className="bb-section-title">
					{section.title}
				</h2>
			</div>

			{/* Section Card */}
			<div className="bb-settings-card">
				{section.fields.map((field, idx) => renderField(field, idx === 0))}
			</div>
		</section>
	);
};

export default SettingsSectionCard;
