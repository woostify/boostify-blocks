import React, { FC } from "react";
import { __ } from "@wordpress/i18n";
import FontMultiSelect from "../FontMultiSelect";

interface FontSelectionControlProps {
	enabled: boolean;
	selectedFonts: string[];
	onToggle: (enabled: boolean) => void;
	onChangeFonts: (fonts: string[]) => void;
}

const FontSelectionControl: FC<FontSelectionControlProps> = ({
	enabled,
	selectedFonts = [],
	onToggle,
	onChangeFonts,
}) => {
	return (
		<div className="bb-font-control">
			<div className="bb-settings-row is-nested">
				<div className="bb-settings-col-text">
					<div className="bb-settings-label">
						{__( "Allow Only Selected Fonts", "boostify-blocks" )}
					</div>
					<div className="bb-settings-desc">
						{__(
							"Restrict typography choices across all Boostify blocks to a pre-approved list of fonts.",
							"boostify-blocks"
						)}
					</div>
				</div>

				<button
					type="button"
					role="switch"
					aria-checked={enabled}
					onClick={() => onToggle(!enabled)}
					className="bb-switch"
				>
					<span className="bb-switch-thumb" />
				</button>
			</div>

			{enabled && (
				<div className="bb-font-box">
					<span className="bb-font-label">
						{__( "Select approved fonts:", "boostify-blocks" )}
					</span>
					<FontMultiSelect
						value={selectedFonts}
						onChange={onChangeFonts}
					/>
				</div>
			)}
		</div>
	);
};

export default FontSelectionControl;
