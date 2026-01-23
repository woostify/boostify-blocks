import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { useEffect, FC } from "react";
import MyDimensionsNoGapControl from "../components/controls/MyDimensionsControl/MyDimensionsNoGapControl";
import {
	MyDimensionsNoGapControlData,
	MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
} from "../components/controls/MyDimensionsControl/types";

export interface BCB_HEADING_PANEL_DIMENSION {
	dimension: MyDimensionsNoGapControlData;
}

export const BCB_HEADING_PANEL_DIMENSION_DEMO: BCB_HEADING_PANEL_DIMENSION = {
	dimension: {
		...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
		padding: {
			Desktop: {
				bottom: "",
				top: "",
				left: "",
				right: "",
			},
		},
	},
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: BCB_HEADING_PANEL_DIMENSION;
	setAttr__: (data: BCB_HEADING_PANEL_DIMENSION) => void;
}

const WcbHeadingPanelDimension: FC<Props> = ({
	panelData = BCB_HEADING_PANEL_DIMENSION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { dimension } = panelData;

	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Dimension", "wcb")}
		>
			<MyDimensionsNoGapControl
				dimensionControl={dimension}
				setAttrs__dimensions={(dimension) => setAttr__({ dimension })}
			/>
		</PanelBody>
	);
};

export default WcbHeadingPanelDimension;
