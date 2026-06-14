import { FC, useCallback } from "react";
import MyToggle from "./MyToggle";
import FontMultiSelect from "./FontMultiSelect";
import "../../________";

interface Props {
	allSettings: typeof window.boostify_blocks_global_variables;
	onChange: (data: typeof window.boostify_blocks_global_variables) => void;
}

const debounce = (func: Function, delay: number) => {
	let timeoutId: any;
	return (...args: any[]) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func(...args), delay);
	};
};

const SettingsPagePerformance: FC<Props> = ({ allSettings, onChange }) => {
	const debounce_fun = useCallback(
		debounce((data: Props["allSettings"]) => {
			onChange(data);
		}, 300),
		[]
	);

	const loadLocally = allSettings.loadGoogleFontsLocally === "true";
	const allowOnlySelected = allSettings.allowOnlySelectedFonts === "true";

	const selectedFonts = (allSettings.selectedFonts || "")
		.split(",")
		.map((f: string) => f.trim())
		.filter(Boolean);

	return (
		<div className="divide-y">
			<div className="pb-8">
				<h2 className="text-xl font-semibold text-gray-800 mb-6">Performance</h2>

				<div className="space-y-0 divide-y">
					{/* Load Google Fonts Locally */}
					<div className="py-6">
						<MyToggle
							checked={loadLocally}
							onChange={(checked) => {
								debounce_fun({
									...allSettings,
									loadGoogleFontsLocally: checked ? "true" : "false",
									...(!checked ? { preloadLocalFonts: "false" } : {}),
								});
							}}
							label="Load Google Fonts Locally"
							desc="Enable this option to download Google fonts and save them on your server. This can be great for improving speed of your website and to comply with GDPR laws."
							id="MyToggle_LoadGoogleFontsLocally"
						/>
					</div>

					{/* Preload Local Fonts */}
					<div className={`py-6 ${!loadLocally ? "opacity-50 pointer-events-none" : ""}`}>
						<MyToggle
							checked={allSettings.preloadLocalFonts === "true"}
							disabled={!loadLocally}
							onChange={(checked) => {
								debounce_fun({
									...allSettings,
									preloadLocalFonts: checked ? "true" : "false",
								});
							}}
							label="Preload Local Fonts"
							desc="This option will load the font files right away on page load. Preloading Local Fonts can speeds up your website even further."
							id="MyToggle_PreloadLocalFonts"
						/>
					</div>

					{/* Allow Only Selected Fonts */}
					<div className="py-6">
						<MyToggle
							checked={allowOnlySelected}
							onChange={(checked) => {
								debounce_fun({
									...allSettings,
									allowOnlySelectedFonts: checked ? "true" : "false",
								});
							}}
							label="Allow Only Selected Fonts"
							desc="Woostify offers 1500+ Google font options. If this is overwhelming for your clients, you can use this option to show only limited number of fonts in the block settings."
							id="MyToggle_AllowOnlySelectedFonts"
						/>

						{allowOnlySelected && (
							<div className="mt-4">
								<FontMultiSelect
									value={selectedFonts}
									onChange={(fonts) => {
										debounce_fun({
											...allSettings,
											selectedFonts: fonts.join(","),
										});
									}}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsPagePerformance;
