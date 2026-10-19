import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import {
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";

export interface WCB_ACCORDION_PANEL_STYLE_ANSWER {
	typography: MyTypographyControlData;
	padding: HasResponsive<DimensionSettings>;
	color: string;
	backgroundColor: string;
}

export const WCB_ACCORDION_PANEL_STYLE_ANSWER_DEMO: WCB_ACCORDION_PANEL_STYLE_ANSWER =
	{
		typography: TYPOGRAPHY_CONTROL_DEMO,
		padding: {
			Desktop: {
				top: "14px",
				left: "16px",
				right: "16px",
				bottom: "14px",
			},
		},
		backgroundColor: "#ffffff",
		color: "#4b5563",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ACCORDION_PANEL_STYLE_ANSWER;
	setAttr__: (data: WCB_ACCORDION_PANEL_STYLE_ANSWER) => void;
}

const WcbAccordionPanel_StyleAnswer: FC<Props> = ({
	panelData = WCB_ACCORDION_PANEL_STYLE_ANSWER_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { typography, padding, backgroundColor, color } = panelData;
	const { currentDeviceValue: currentPadding } = getValueFromAttrsResponsives(
		padding,
		deviceType
	);

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Pane Content", "boostify-blocks")}
		>
			<div className={"space-y-3.5"}>
				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(value) => {
						setAttr__({ ...panelData, typography: value });
					}}
				/>

				<MyDisclosure defaultOpen label={__("Colors & Padding", "boostify-blocks")}>
					<MyColorPicker
						label={__("Color", "boostify-blocks")}
						onChange={(value) => {
							setAttr__({ ...panelData, color: value });
						}}
						color={color}
					/>
					<MyColorPicker
						label={__("Background color", "boostify-blocks")}
						onChange={(value) => {
							setAttr__({ ...panelData, backgroundColor: value });
						}}
						color={backgroundColor}
					/>

					<BoxControl
						label={
							<MyLabelControl className="" hasResponsive>
								{__("Padding", "boostify-blocks")}
							</MyLabelControl>
						}
						values={currentPadding}
						onChange={(value: any) => {
							setAttr__({
								...panelData,
								padding: {
									...padding,
									[deviceType]: value,
								},
							});
						}}
					/>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbAccordionPanel_StyleAnswer;
