import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_ACCORDION_PANEL_STYLE_ICON {
	size: HasResponsive<number>;
	color: string;
	colorHover?: string;
	activeColor: string;
	colGap: HasResponsive<string>;
}

export const ICON_SPACING_UNITS_SETTINGS = {
	px: { max: 80, steps: 1 },
	"%": { max: 20, steps: 1 },
	vw: { max: 10, steps: 1 },
	vh: { max: 10, steps: 1 },
	em: { max: 5, steps: 0.1 },
	rm: { max: 5, steps: 0.1 },
	rem: { max: 5, steps: 0.1 },
};

export const WCB_ACCORDION_PANEL_STYLE_ICON_DEMO: WCB_ACCORDION_PANEL_STYLE_ICON =
	{
		size: { Desktop: 18 },
		color: "",
		colorHover: "",
		activeColor: "",
		colGap: { Desktop: "12px" },
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ACCORDION_PANEL_STYLE_ICON;
	setAttr__: (data: WCB_ACCORDION_PANEL_STYLE_ICON) => void;
}

const WcbAccordionPanel_StyleIcon: FC<Props> = ({
	panelData = WCB_ACCORDION_PANEL_STYLE_ICON_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { activeColor, colGap, color, colorHover, size } = panelData;
	const { currentDeviceValue: currentSize } = getValueFromAttrsResponsives(
		size,
		deviceType
	);
	const { currentDeviceValue: currentColGap } = getValueFromAttrsResponsives(
		colGap,
		deviceType
	);

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Icon Style", "boostify-blocks")}
		>
			<div className={"space-y-4"}>
				<RangeControl
					label={
						<MyLabelControl hasResponsive className="">
							{__("Size", "boostify-blocks")}
						</MyLabelControl>
					}
					value={currentSize || 20}
					onChange={(value) => {
						setAttr__({
							...panelData,
							size: {
								...size,
								[deviceType]: value,
							},
						});
					}}
					min={10}
					max={80}
				/>

				<MyColorPicker
					label={__("Color", "boostify-blocks")}
					onChange={(value) => {
						setAttr__({ ...panelData, color: value });
					}}
					color={color}
				/>

				<MyColorPicker
					label={__("Hover Color", "boostify-blocks")}
					onChange={(value) => {
						setAttr__({ ...panelData, colorHover: value });
					}}
					color={colorHover || ""}
				/>

				<MyColorPicker
					label={__("Active Color", "boostify-blocks")}
					onChange={(value) => {
						setAttr__({ ...panelData, activeColor: value });
					}}
					color={activeColor}
				/>

				<MySpacingSizesControl
					onChange={(value) => {
						setAttr__({
							...panelData,
							colGap: {
								...colGap,
								[deviceType]: value,
							},
						});
					}}
					value={currentColGap || "0"}
					label={__("Spacing with Title", "boostify-blocks")}
					customUnitsValueSettings={ICON_SPACING_UNITS_SETTINGS}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbAccordionPanel_StyleIcon;
