import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import React, { FC } from "react";
import { MY_DIMENSIONS_NO_GAP_CONTROL_DEMO, MyDimensionsNoGapControlData } from "../components/controls/MyDimensionsControl/types";
import MyDimensionsNoGapControl from "../components/controls/MyDimensionsControl/MyDimensionsNoGapControl";

export interface WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION extends MyDimensionsNoGapControlData {}

export const WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION_DEMO: WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION =
	{
		...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
		padding: {
			Desktop: {
				top: "",
				left: "",
				right: "",
				bottom: "",
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
	panelData: WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION) => void;
}

const WcbTestimonialsPanel_StyleDimension: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {

	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Dimension", "wcb")}
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

export default WcbTestimonialsPanel_StyleDimension;
