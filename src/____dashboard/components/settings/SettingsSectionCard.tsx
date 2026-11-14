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
	zIndex,
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
						<AssetGenerationControl />
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

			if (
				field.customComponent === "SiteVisibilityControl" ||
				field.customComponent === "SiteVisibilityComingSoon" ||
				field.customComponent === "SiteVisibilityMaintenance"
			) {
				const showComingSoon = field.customComponent !== "SiteVisibilityMaintenance";
				const showMaintenance = field.customComponent !== "SiteVisibilityComingSoon";
				return (
					<SettingsPageSiteVisibility
						key={field.key}
						allSettings={settings as any}
						showComingSoon={showComingSoon}
						showMaintenance={showMaintenance}
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
						{!isDepSatisfied && field.disabledHint && (
							<div className="bb-settings-hint">
								{field.disabledHint}
							</div>
						)}
					</div>

					<button
						type="button"
						role="switch"
						aria-label={field.label}
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

					<label className="bb-number-input-wrap">
						<input
							type="number"
							min={0}
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
									return;
								}
								const safeVal = Math.max(0, parsed);
								if (field.unit) {
									onUpdateSetting(field.key, `${safeVal}${field.unit}`);
								} else if (typeof rawValue === "string" && rawValue.endsWith("px")) {
									onUpdateSetting(field.key, `${safeVal}px`);
								} else {
									onUpdateSetting(field.key, safeVal);
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
					</label>
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
							autoComplete="off"
							spellCheck={false}
							onChange={(e) => onUpdateSetting(field.key, e.target.value)}
							className={`bb-text-input ${isSecret ? "is-secret" : ""}`}
						/>
						{isSecret && (
							<button
								type="button"
								onClick={() => toggleSecretVisibility(field.key)}
								aria-label={
									isVisible
										? __( "Hide key", "boostify-blocks" )
										: __( "Show key", "boostify-blocks" )
								}
								title={
									isVisible
										? __( "Hide key", "boostify-blocks" )
										: __( "Show key", "boostify-blocks" )
								}
								className="bb-secret-toggle"
							>
								<DynamicIcon name={isVisible ? "visibility_off" : "visibility"} size={17} />
							</button>
						)}
					</div>
				</div>
			);
		}

		return null;
	};

	const renderFields = () => {
		const hasComingSoon = section.fields.some(
			(f) => f.customComponent === "SiteVisibilityComingSoon"
		);
		const hasMaintenance = section.fields.some(
			(f) => f.customComponent === "SiteVisibilityMaintenance"
		);
		let visibilityRendered = false;

		return section.fields.map((field, idx) => {
			if (
				field.customComponent === "SiteVisibilityComingSoon" ||
				field.customComponent === "SiteVisibilityMaintenance"
			) {
				if (visibilityRendered) {
					return null;
				}
				visibilityRendered = true;
				return (
					<SettingsPageSiteVisibility
						key="site-visibility-group"
						allSettings={settings as any}
						showComingSoon={hasComingSoon}
						showMaintenance={hasMaintenance}
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
			return renderField(field, idx === 0);
		});
	};

	return (
		<section
			className="bb-settings-section"
			style={zIndex !== undefined ? { zIndex } : undefined}
		>
			{/* Section Header */}
			{section.title && (
				<div className="bb-section-header">
					<h3 className="bb-section-title">
						{section.title}
					</h3>
				</div>
			)}

			{/* Section Card */}
			<div className="bb-settings-card">
				{renderFields()}
			</div>
		</section>
	);
};

export default SettingsSectionCard;
