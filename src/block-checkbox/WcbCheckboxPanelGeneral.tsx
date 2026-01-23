import {
	PanelBody,
	SelectControl,
	ToggleControl,
	// @ts-ignore
	__experimentalInputControl as InputControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";

export interface BCB_CHECKBOX_PANEL_GENERAL {
	isRequired: boolean;
}

export const BCB_CHECKBOX_PANEL_GENERAL_DEMO: BCB_CHECKBOX_PANEL_GENERAL = {
	isRequired: false,
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: BCB_CHECKBOX_PANEL_GENERAL;
	setAttr__: (data: BCB_CHECKBOX_PANEL_GENERAL) => void;
}

const WcbCheckboxPanelGeneral: FC<Props> = ({
	panelData = BCB_CHECKBOX_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { isRequired } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("General", "wcb")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Required", "wcb")}
					checked={isRequired}
					onChange={(isChecked) => {
						setAttr__({ ...panelData, isRequired: isChecked });
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbCheckboxPanelGeneral;
