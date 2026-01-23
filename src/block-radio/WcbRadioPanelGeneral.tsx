import {
	PanelBody,
	SelectControl,
	ToggleControl,
	// @ts-ignore
	__experimentalInputControl as InputControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup from "../components/controls/MyRadioGroup";

export interface BCB_RADIO_PANEL_GENERAL {
	isRequired: boolean;
	layout: "square" | "round";
}

export const BCB_RADIO_PANEL_GENERAL_DEMO: BCB_RADIO_PANEL_GENERAL = {
	isRequired: false,
	layout: "round",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: BCB_RADIO_PANEL_GENERAL;
	setAttr__: (data: BCB_RADIO_PANEL_GENERAL) => void;
}

const WcbRadioPanelGeneral: FC<Props> = ({
	panelData = BCB_RADIO_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { isRequired, layout } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("General", "wcb")}
		>
			<div className={"space-y-5"}>
				<MyRadioGroup
					label={__("Layout", "wcb")}
					value={layout}
					onChange={(value) => {
						setAttr__({
							...panelData,
							layout: value as BCB_RADIO_PANEL_GENERAL["layout"],
						});
					}}
					plans={[
						{ name: "square", icon: "Square" },
						{ name: "round", icon: "Round" },
					]}
					hasResponsive={false}
				/>
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

export default WcbRadioPanelGeneral;
