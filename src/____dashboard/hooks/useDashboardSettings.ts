import { useState, useCallback, useMemo } from "react";
import { __ } from "@wordpress/i18n";
import toast from "react-hot-toast";
import { postAjax } from "../utils/ajax";

interface UseDashboardSettingsProps {
	initSettings: Record<string, any>;
	onSettingsSaved?: (newSettings: Record<string, any>) => void;
}

export function useDashboardSettings({
	initSettings,
	onSettingsSaved,
}: UseDashboardSettingsProps) {
	const [settings, setSettings] = useState<Record<string, any>>({ ...initSettings });
	const [savedSettings, setSavedSettings] = useState<Record<string, any>>({ ...initSettings });
	const [isSaving, setIsSaving] = useState(false);

	// Update single or multiple keys
	const updateSetting = useCallback((keyOrObj: string | Record<string, any>, value?: any) => {
		setSettings((prev) => {
			if (typeof keyOrObj === "string") {
				// Don't track sample keys
				if (keyOrObj.startsWith("sample_")) return prev;
				return {
					...prev,
					[keyOrObj]: value,
				};
			}
			const cleanedObj: Record<string, any> = {};
			Object.entries(keyOrObj).forEach(([k, v]) => {
				if (!k.startsWith("sample_")) {
					cleanedObj[k] = v;
				}
			});
			return {
				...prev,
				...cleanedObj,
			};
		});
	}, []);

	// Calculate dirty keys count
	const dirtyKeys = useMemo(() => {
		const changed: string[] = [];
		const allKeys = new Set([...Object.keys(settings), ...Object.keys(savedSettings)]);

		allKeys.forEach((key) => {
			if (
				key.startsWith("sample_") ||
				key.startsWith("_action_") ||
				key.startsWith("_custom_") ||
				key === "site_visibility_page_title"
			) {
				return;
			}
			const currentVal = settings[key];
			const savedVal = savedSettings[key];

			// Handle array or comma-separated comparison (e.g. selectedFonts)
			if (key === "selectedFonts") {
				const normalizeFonts = (v: any) =>
					(Array.isArray(v) ? v : typeof v === "string" ? v.split(",") : [])
						.map((s: string) => String(s).trim())
						.filter(Boolean)
						.sort()
						.join(",");
				if (normalizeFonts(currentVal) !== normalizeFonts(savedVal)) {
					changed.push(key);
				}
			} else if (Array.isArray(currentVal) || Array.isArray(savedVal)) {
				const currArr = Array.isArray(currentVal) ? [...currentVal].sort() : [];
				const savedArr = Array.isArray(savedVal) ? [...savedVal].sort() : [];
				if (JSON.stringify(currArr) !== JSON.stringify(savedArr)) {
					changed.push(key);
				}
			} else if (String(currentVal ?? "") !== String(savedVal ?? "")) {
				changed.push(key);
			}
		});

		return changed;
	}, [settings, savedSettings]);

	const dirtyCount = dirtyKeys.length;

	// Discard changes
	const discardChanges = useCallback(
		(options?: { silent?: boolean }) => {
			setSettings({ ...savedSettings });
			if (!options?.silent) {
				toast(__( "Settings changes discarded.", "boostify-blocks" ), { icon: "↩️" });
			}
		},
		[savedSettings]
	);

	// Save changes
	const saveChanges = useCallback(
		async (options?: { silent?: boolean }): Promise<{ ok: boolean; error?: string }> => {
			setIsSaving(true);
			const shouldRegenerateAssets =
				savedSettings.enableFileGeneration !== "true" &&
				settings.enableFileGeneration === "true";

			try {
				const response = await postAjax({
					action: "boostify_blocks_dashboard_update_settings",
					data: { settings },
					timeout: 15000,
				});
				setIsSaving(false);
				const nextSaved =
					response?.data && typeof response.data === "object"
						? { ...response.data }
						: { ...settings };

				setSavedSettings(nextSaved);
				setSettings(nextSaved);
				if (typeof window !== "undefined") {
					window.boostify_blocks_global_variables = nextSaved;
				}
				onSettingsSaved && onSettingsSaved(nextSaved);

				if (shouldRegenerateAssets) {
					postAjax({
						action: "boostify_blocks_regenerate_assets",
						timeout: 25000,
					}).catch(() => {});
				}

				if (!options?.silent) {
					toast.success(__( "Settings saved successfully!", "boostify-blocks" ));
				}
				return { ok: true };
			} catch (err: any) {
				setIsSaving(false);
				const msg =
					err?.message || __( "Failed to save settings. Please try again.", "boostify-blocks" );
				if (!options?.silent) {
					toast.error(msg);
				}
				return { ok: false, error: msg };
			}
		},
		[settings, savedSettings, onSettingsSaved]
	);

	return {
		settings,
		updateSetting,
		dirtyCount,
		dirtyKeys,
		isSaving,
		discardChanges,
		saveChanges,
	};
}

