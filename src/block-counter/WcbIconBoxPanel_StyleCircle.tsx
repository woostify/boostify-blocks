import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import SpacingInputControl from "../components/controls/MySpacingSizesControl/SpacingInputControl";
import { MyUnit } from "../components/controls/MyUnitControl";
import ResetButton from "../components/controls/ResetButton";

export interface WCB_ICON_BOX_PANEL_STYLE_CIRCLE {
	circleSize: HasResponsive<string>;
}

export const WCB_ICON_BOX_PANEL_STYLE_CIRCLE_DEMO: WCB_ICON_BOX_PANEL_STYLE_CIRCLE =
	{
		circleSize: { Desktop: "300px" },
	};

export const CIRCLE_SIZE_DEFAULT = "300px";

export const CIRCLE_SIZE_UNITS: MyUnit[] = [
	{ value: "px", label: "px", default: 300 },
	{ value: "rem", label: "rem", default: 18.75 },
	{ value: "em", label: "em", default: 18.75 },
];

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_BOX_PANEL_STYLE_CIRCLE;
	setAttr__: (data: WCB_ICON_BOX_PANEL_STYLE_CIRCLE) => void;
}

const WcbIconBoxPanel_StyleCircle: FC<Props> = ({
	panelData = WCB_ICON_BOX_PANEL_STYLE_CIRCLE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { circleSize } = panelData;
	const { currentDeviceValue: currentCircleSize } =
		getValueFromAttrsResponsives(circleSize, deviceType);

	const handleChange = (value: string) => {
		setAttr__({
			...panelData,
			circleSize: {
				...circleSize,
				[deviceType]: value,
			},
		});
	};

	const handleReset = () => {
		setAttr__({
			...panelData,
			circleSize: {
				...circleSize,
				[deviceType]: CIRCLE_SIZE_DEFAULT,
			},
		});
	};

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Circle", "boostify-blocks")}
		>
			<div className="space-y-5">
				<div>
					<div className="flex items-center justify-between mb-2">
						<MyLabelControl hasResponsive className="mb-0">
							{__("Circle size", "boostify-blocks")}
						</MyLabelControl>
						<ResetButton onClick={handleReset} />
					</div>
					<SpacingInputControl
						value={currentCircleSize || CIRCLE_SIZE_DEFAULT}
						onChange={handleChange}
						units={CIRCLE_SIZE_UNITS}
					/>
				</div>
			</div>
		</PanelBody>
	);
};

export default WcbIconBoxPanel_StyleCircle;
