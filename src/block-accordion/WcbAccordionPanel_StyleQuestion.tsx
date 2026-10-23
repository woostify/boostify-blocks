import { PanelBody, RangeControl, TabPanel } from "@wordpress/components";
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
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import {
	WCB_ACCORDION_PANEL_STYLE_ICON,
	WCB_ACCORDION_PANEL_STYLE_ICON_DEMO,
} from "./WcbAccordionPanel_StyleIcon";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import {
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import MyTabPanel from "../components/controls/MyTabPanel/MyTabPanel";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";

export interface WCB_ACCORDION_PANEL_STYLE_QUESTION {
	typography: MyTypographyControlData;
	padding: HasResponsive<DimensionSettings>;
	color: string;
	backgroundColor: string;
	colorHover: string;
	backgroundColorHover: string;
	colorActive: string;
	backgroundColorActive: string;
	border?: MyBorderControlData;
}

export const WCB_ACCORDION_PANEL_STYLE_QUESTION_DEMO: WCB_ACCORDION_PANEL_STYLE_QUESTION =
	{
		typography: {
			...TYPOGRAPHY_CONTROL_DEMO,
			fontSizes: { Desktop: "16px" },
			appearance: {
				...TYPOGRAPHY_CONTROL_DEMO.appearance,
				style: {
					fontWeight: "500",
					fontStyle: "normal",
				},
			},
		},
		padding: {
			Desktop: {
				top: "12px",
				left: "16px",
				right: "16px",
				bottom: "12px",
			},
		},
		backgroundColor: "#f9fafb",
		backgroundColorHover: "#f3f4f6",
		backgroundColorActive: "#4a5568",
		color: "#111827",
		colorHover: "#111827",
		colorActive: "#ffffff",
		border: {
			...MY_BORDER_CONTROL_DEMO,
			mainSettings: {
				...MY_BORDER_CONTROL_DEMO.mainSettings,
				color: "#e5e7eb",
				style: "solid",
				width: "1px",
			},
			radius: {
				Desktop: "6px",
				Tablet: "6px",
				Mobile: "6px",
			},
		},
	};

type TabHere = "Normal" | "Hover" | "Active";

export const PANEL_COLOR_TABS: {
	name: TabHere;
	title: string;
}[] = [
	{ name: "Normal", title: __("Normal", "boostify-blocks") },
	{ name: "Hover", title: __("Hover", "boostify-blocks") },
	{ name: "Active", title: __("Active", "boostify-blocks") },
];

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ACCORDION_PANEL_STYLE_QUESTION;
	setAttr__: (data: WCB_ACCORDION_PANEL_STYLE_QUESTION) => void;
	iconData?: WCB_ACCORDION_PANEL_STYLE_ICON;
	setAttr__icon?: (data: WCB_ACCORDION_PANEL_STYLE_ICON) => void;
}

const WcbAccordionPanel_StyleQuestion: FC<Props> = ({
	panelData = WCB_ACCORDION_PANEL_STYLE_QUESTION_DEMO,
	setAttr__,
	iconData = WCB_ACCORDION_PANEL_STYLE_ICON_DEMO,
	setAttr__icon,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const {
		typography,
		padding,
		backgroundColor,
		backgroundColorHover,
		backgroundColorActive,
		color,
		colorHover,
		colorActive,
		border,
	} = panelData;
	const { currentDeviceValue: currentPadding } = getValueFromAttrsResponsives(
		padding,
		deviceType
	);
	const { currentDeviceValue: currentIconSize } = getValueFromAttrsResponsives(
		iconData?.size,
		deviceType
	);

	const renderColorTab = (tab: TabPanel.Tab) => {
		const tabName = tab.name as TabHere;
		if (tabName === "Normal") {
			return (
				<div className="space-y-4">
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
				</div>
			);
		}
		if (tabName === "Hover") {
			return (
				<div className="space-y-4">
					<MyColorPicker
						label={__("Color", "boostify-blocks")}
						onChange={(value) => {
							setAttr__({ ...panelData, colorHover: value });
						}}
						color={colorHover}
					/>
					<MyColorPicker
						label={__("Background color", "boostify-blocks")}
						onChange={(value) => {
							setAttr__({ ...panelData, backgroundColorHover: value });
						}}
						color={backgroundColorHover}
					/>
				</div>
			);
		}
		if (tabName === "Active") {
			return (
				<div className="space-y-4">
					<MyColorPicker
						label={__("Color", "boostify-blocks")}
						onChange={(value) => {
							setAttr__({ ...panelData, colorActive: value });
						}}
						color={colorActive}
					/>
					<MyColorPicker
						label={__("Background color", "boostify-blocks")}
						onChange={(value) => {
							setAttr__({ ...panelData, backgroundColorActive: value });
						}}
						color={backgroundColorActive}
					/>
				</div>
			);
		}
		return <div />;
	};

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Pane Header", "boostify-blocks")}
		>
			<div className={"space-y-3.5"}>
				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(value) => {
						setAttr__({ ...panelData, typography: value });
					}}
				/>

				<MyDisclosure defaultOpen label={__("Colors & Padding", "boostify-blocks")}>
					<MyTabPanel tabs={PANEL_COLOR_TABS}>{renderColorTab}</MyTabPanel>

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

				<MyDisclosure label={__("Border", "boostify-blocks")}>
					<MyBorderControl
						borderControl={border || MY_BORDER_CONTROL_DEMO}
						setAttrs__border={(value) => {
							setAttr__({ ...panelData, border: value });
						}}
					/>
				</MyDisclosure>

				<MyDisclosure label={__("Icon", "boostify-blocks")}>
					<RangeControl
						label={
							<MyLabelControl hasResponsive className="">
								{__("Size", "boostify-blocks")}
							</MyLabelControl>
						}
						value={currentIconSize || 20}
						onChange={(value) => {
							if (setAttr__icon && iconData) {
								setAttr__icon({
									...iconData,
									size: {
										...iconData.size,
										[deviceType]: value,
									},
								});
							}
						}}
						min={10}
						max={80}
					/>

					<MyColorPicker
						label={__("Color", "boostify-blocks")}
						onChange={(value) => {
							if (setAttr__icon && iconData) {
								setAttr__icon({ ...iconData, color: value });
							}
						}}
						color={iconData?.color || ""}
					/>

					<MyColorPicker
						label={__("Hover Color", "boostify-blocks")}
						onChange={(value) => {
							if (setAttr__icon && iconData) {
								setAttr__icon({ ...iconData, colorHover: value });
							}
						}}
						color={iconData?.colorHover || ""}
					/>

					<MyColorPicker
						label={__("Active Color", "boostify-blocks")}
						onChange={(value) => {
							if (setAttr__icon && iconData) {
								setAttr__icon({ ...iconData, activeColor: value });
							}
						}}
						color={iconData?.activeColor || ""}
					/>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbAccordionPanel_StyleQuestion;
