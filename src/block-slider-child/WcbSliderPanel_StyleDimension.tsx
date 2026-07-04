import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyDimensionsNoGapControl from "../components/controls/MyDimensionsControl/MyDimensionsNoGapControl";
import {
	MyDimensionsNoGapControlData,
} from "../components/controls/MyDimensionsControl/types";
import {
	WCB_SLIDER_PANEL_STYLE_DIMENSION,
	WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
} from "../block-slider/WcbSliderPanel_StyleDimension";

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_SLIDER_PANEL_STYLE_DIMENSION;
	setAttr__: (data: WCB_SLIDER_PANEL_STYLE_DIMENSION) => void;
}

const WcbTestimonialsPanel_StyleDimension: FC<Props> = ({
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
					dimensionControl={panelData as MyDimensionsNoGapControlData}
					setAttrs__dimensions={(data) => setAttr__({ ...panelData, ...data })}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbTestimonialsPanel_StyleDimension;
