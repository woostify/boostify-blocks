import React, { FC } from "react";
import MyToggle from "./MyToggle";

interface Props {
	allSettings: typeof window.boostify_blocks_global_variables;
	onChange: (data: typeof window.boostify_blocks_global_variables) => void;
}

// Simple debounce utility
const debounce = (func: Function, delay: number) => {
	let timeoutId: any;
	return (...args: any[]) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func(...args), delay);
	};
};

const SettingsPageTemplates: FC<Props> = ({ allSettings, onChange }) => {
	const debounce_fun = debounce(function (data: Props["allSettings"]) {
		console.log("Function debounced after 300ms!", { data });
		onChange(data);
	}, 300);

	return (
		<div className="divide-y">
			<div className="pb-8">
				<MyToggle
					checked={allSettings.enableTemplatesButton === "true"}
					onChange={(checked) => {
						debounce_fun({
							...allSettings,
							enableTemplatesButton: checked ? "true" : "false",
						});
					}}
					label="Enable Templates Button"
					desc="Woostify comes with a stunning library of page templates and block patterns. This library is accessible with the Templates button while editing the page or post. Manage the visibility of that button with this option.."
					id="MyToggle_EnableTemplatesButton"
				/>
			</div>
		</div>
	);
};

export default SettingsPageTemplates;
