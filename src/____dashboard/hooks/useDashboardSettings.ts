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
			if (key.startsWith("sample_") || key.startsWith("_action_") || key.startsWith("_custom_")) {
				return;
			}
			const currentVal = settings[key];
			const savedVal = savedSettings[key];

			// Handle array comparison (e.g. selectedFonts)
			if (Array.isArray(currentVal) || Array.isArray(savedVal)) {
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
	const discardChanges = useCallback(() => {
		setSettings({ ...savedSettings });
		toast(__( "Settings changes discarded.", "boostify-blocks" ), { icon: "↩️" });
	}, [savedSettings]);

	// Save changes
	const saveChanges = useCallback(() => {
		setIsSaving(true);

		postAjax({
			action: "boostify_blocks_dashboard_update_settings",
			data: { settings },
			timeout: 15000,
		})
			.then((response: any) => {
				setIsSaving(false);
				if (response?.data) {
					setSavedSettings({ ...response.data });
					setSettings({ ...response.data });
					onSettingsSaved && onSettingsSaved(response.data);
				} else {
					setSavedSettings({ ...settings });
				}
				toast.success(__( "Settings saved successfully!", "boostify-blocks" ));
			})
			.catch((err: any) => {
				setIsSaving(false);
				const msg = err?.message || __( "Failed to save settings. Please try again.", "boostify-blocks" );
				toast.error(msg);
			});
	}, [settings, onSettingsSaved]);

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

