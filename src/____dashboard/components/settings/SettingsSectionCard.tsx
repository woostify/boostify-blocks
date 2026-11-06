import React, { FC, useState } from "react";
import { __ } from "@wordpress/i18n";
import DynamicIcon from "../common/DynamicIcon";
import AssetGenerationControl from "./AssetGenerationControl";
import FontSelectionControl from "./FontSelectionControl";
import SettingsPageSiteVisibility from "../SettingsPageSiteVisibility";
import { SettingSectionSchema, SettingFieldSchema } from "../../data/settingsSchema";
import { Wcb_theme_layout_global_settings } from "../../../types";

interface SettingsSectionCardProps {
	section: SettingSectionSchema;
	settings: Record<string, any>;
	onUpdateSetting: (key: string, value: any) => void;
	themeLayoutGlobal?: Wcb_theme_layout_global_settings;
	showSample?: boolean;
	zIndex?: number;
}

const SettingsSectionCard: FC<SettingsSectionCardProps> = ({
	section,
	settings,
	onUpdateSetting,
	themeLayoutGlobal,
}) => {
	const [visibleSecrets, setVisibleSecrets] = useState<Record<string, boolean>>({});

	const toggleSecretVisibility = (key: string) => {
		setVisibleSecrets((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	const renderField = (field: SettingFieldSchema, isFirst: boolean) => {
		// Dependency check: disabled instead of hidden so the user sees all available options
		const isDepSatisfied = !field.dependsOn || String(settings[field.dependsOn.key] ?? "") === String(field.dependsOn.value);

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
				const fonts = Array.isArray(settings.selectedFonts)
					? settings.selectedFonts
					: typeof settings.selectedFonts === "string"
					? settings.selectedFonts.split(",").map((f: string) => f.trim()).filter(Boolean)
					: [];
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
								onUpdateSetting("selectedFonts", newFonts.join(","))
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
								if (settings[k] !== v) {
									onUpdateSetting(k, v);
								}
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
			const effectiveToggleVal =
				settings[field.key] !== undefined && settings[field.key] !== ""
					? settings[field.key]
					: field.defaultValue ?? "false";
			const isChecked = String(effectiveToggleVal) === "true";
			return (
				<div
					key={field.key}
					className={`bb-settings-row ${!isDepSatisfied ? "is-disabled" : ""}`}
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
						disabled={!isDepSatisfied}
						onClick={() => {
							if (!isDepSatisfied) return;
							const nextVal = isChecked ? "false" : "true";
							onUpdateSetting(field.key, nextVal);
							if (field.key === "loadGoogleFontsLocally" && nextVal === "false") {
								onUpdateSetting("preloadLocalFonts", "false");
							}
						}}
						className={`bb-switch ${!isDepSatisfied ? "is-disabled" : ""}`}
					>
						<span className="bb-switch-thumb" />
					</button>
				</div>
			);
		}

		// Number input row
		if (field.type === "number") {
			// Strip 'px' if stored as string e.g. "1140px"
			const numValue =
				rawValue === "" || rawValue === undefined || rawValue === null
					? ""
					: typeof rawValue === "string"
					? rawValue.replace(/[^0-9]/g, "")
					: String(rawValue);

			const fallbackPlaceholder =
				field.key === "defaultContentWidth" && themeLayoutGlobal?.contentSize
					? String(parseInt(themeLayoutGlobal.contentSize, 10) || field.defaultValue || 1200)
					: field.defaultValue !== undefined
					? String(field.defaultValue)
					: "";

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
							placeholder={fallbackPlaceholder}
							onChange={(e) => {
								const raw = e.target.value.trim();
								if (raw === "") {
									onUpdateSetting(field.key, "");
									return;
								}
								const parsed = parseInt(raw, 10);
								if (isNaN(parsed)) {
									onUpdateSetting(field.key, "");
								} else if (field.unit) {
									onUpdateSetting(field.key, `${parsed}${field.unit}`);
								} else if (typeof rawValue === "string" && rawValue.endsWith("px")) {
									onUpdateSetting(field.key, `${parsed}px`);
								} else {
									onUpdateSetting(field.key, parsed);
								}
							}}
							onBlur={() => {
								// Restore default value on blur for required numeric fields if left empty
								if (
									numValue === "" &&
									field.key !== "defaultContentWidth" &&
									field.defaultValue !== undefined
								) {
									onUpdateSetting(
										field.key,
										field.unit ? `${field.defaultValue}${field.unit}` : field.defaultValue
									);
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
		<section className="bb-settings-section">
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
