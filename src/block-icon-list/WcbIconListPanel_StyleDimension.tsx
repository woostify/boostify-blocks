import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyDimensionsNoGapControl from "../components/controls/MyDimensionsControl/MyDimensionsNoGapControl";
import {
	MyDimensionsNoGapControlData,
	MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
} from "../components/controls/MyDimensionsControl/types";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyUnitControl from "../components/controls/MyUnitControl";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_ICON_LIST_PANEL_STYLE_DIMENSION
	extends MyDimensionsNoGapControlData {
	gapBetweenItems: HasResponsive<string>;
}

export const WCB_ICON_LIST_PANEL_STYLE_DIMENSION_DEMO: WCB_ICON_LIST_PANEL_STYLE_DIMENSION =
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
		gapBetweenItems: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_LIST_PANEL_STYLE_DIMENSION;
	setAttr__: (data: WCB_ICON_LIST_PANEL_STYLE_DIMENSION) => void;
}

const WcbIconListPanel_StyleDimension: FC<Props> = ({
	panelData = WCB_ICON_LIST_PANEL_STYLE_DIMENSION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { currentDeviceValue: gapValue } = getValueFromAttrsResponsives(
		panelData.gapBetweenItems,
		deviceType
	);

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Dimension", "boostify-blocks")}
		>
			<div className="space-y-5">
				<MyUnitControl
					label={__("Gap Between Items", "boostify-blocks")}
					hasResponsive
					value={gapValue || ""}
					onChange={(value) =>
						setAttr__({
							...panelData,
							gapBetweenItems: {
								...panelData.gapBetweenItems,
								[deviceType]: value,
							},
						})
					}
				/>
				<MyDimensionsNoGapControl
					dimensionControl={panelData}
					setAttrs__dimensions={(data) => setAttr__({ ...panelData, ...data })}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbIconListPanel_StyleDimension;
