import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import MyDimensionsNoGapControl from "../components/controls/MyDimensionsControl/MyDimensionsNoGapControl";
import {
	MyDimensionsNoGapControlData,
	MY_DIMENSIONS_NO_GAP_DEMO__EMPTY,
} from "../components/controls/MyDimensionsControl/types";

export interface WCB_COUNTDOWN_PANEL_DIMENSION {
	dimension: MyDimensionsNoGapControlData;
}

export const WCB_COUNTDOWN_PANEL_DIMENSION_DEMO: WCB_COUNTDOWN_PANEL_DIMENSION = {
	dimension: {
		...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY,
	},
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_COUNTDOWN_PANEL_DIMENSION;
	setAttr__: (data: WCB_COUNTDOWN_PANEL_DIMENSION) => void;
}

const WcbCountdownPanelDimension: FC<Props> = ({
	panelData = WCB_COUNTDOWN_PANEL_DIMENSION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { dimension } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Dimension", "boostify-blocks")}
		>
			<MyDimensionsNoGapControl
				dimensionControl={dimension}
				setAttrs__dimensions={(dimension) => setAttr__({ dimension })}
			/>
		</PanelBody>
	);
};

export default WcbCountdownPanelDimension;
