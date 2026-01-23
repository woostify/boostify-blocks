import {
	PanelBody,
	// @ts-ignore
	__experimentalInputControl as InputControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";

export interface BCB_HIDDEN_PANEL_GENERAL {
	name: string;
	value: string;
}

export const BCB_HIDDEN_PANEL_GENERAL_DEMO: BCB_HIDDEN_PANEL_GENERAL = {
	name: "Input hidden name",
	value: "Hidden default value",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: BCB_HIDDEN_PANEL_GENERAL;
	setAttr__: (data: BCB_HIDDEN_PANEL_GENERAL) => void;
}

const WcbHiddenPanelGeneral: FC<Props> = ({
	panelData = BCB_HIDDEN_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { name, value } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("General", "wcb")}
		>
			<div className={"space-y-5"}>
				<InputControl
					label={__("Name", "wcb")}
					value={name}
					onChange={(nextValue) => {
						setAttr__({ ...panelData, name: nextValue });
					}}
				/>
				<InputControl
					label={__("Value", "wcb")}
					value={value}
					onChange={(nextValue) => {
						setAttr__({ ...panelData, value: nextValue });
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbHiddenPanelGeneral;
