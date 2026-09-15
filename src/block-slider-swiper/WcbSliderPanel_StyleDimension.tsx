import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyDimensionsNoGapControl from "../components/controls/MyDimensionsControl/MyDimensionsNoGapControl";
import {
	MyDimensionsNoGapControlData,
	MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
} from "../components/controls/MyDimensionsControl/types";

export interface WCB_SLIDER_PANEL_STYLE_DIMENSION
	extends MyDimensionsNoGapControlData {}

export const WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO: WCB_SLIDER_PANEL_STYLE_DIMENSION =
	{
		...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
		padding: {
			Desktop: {
				top: "1rem",
				left: "1rem",
				right: "1rem",
				bottom: "1rem",
			},
		},
		margin: {
			Desktop: {
				top: "",
				left: "",
				right: "",
				bottom: "",
			},
		},
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_SLIDER_PANEL_STYLE_DIMENSION;
	setAttr__: (data: WCB_SLIDER_PANEL_STYLE_DIMENSION) => void;
}

const WcbSlidersPanel_StyleDimension: FC<Props> = ({
	panelData = WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Dimension", "boostify-blocks")}
		>
			<div className="space-y-5">
				<MyDimensionsNoGapControl
					dimensionControl={panelData}
					setAttrs__dimensions={(data) => setAttr__({ ...panelData, ...data })}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbSlidersPanel_StyleDimension;