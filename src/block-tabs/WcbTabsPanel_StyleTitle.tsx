import { PanelBody, TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
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
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import MyDimensionsUnitControl from "../components/controls/MyDimensionsControl/MyDimensionsUnitControl";
import MyTabPanel from "../components/controls/MyTabPanel/MyTabPanel";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import {
	MY_BORDER_CONTROL_DEMO,
	MyBorderControlData,
} from "../components/controls/MyBorderControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import { getThemeDefaults } from "../utils/themeDefaults";
import { WCB_TAGS_PANEL_GENERAL } from "./WcbTabsPanelGeneral";

export interface WCB_TABS_PANEL_STYLE_TITLE {
	typography: MyTypographyControlData;
	padding: HasResponsive<DimensionSettings>;
	color: string;
	backgroundColor: string;
	colorActive: string;
	backgroundColorActive: string;
	rowGap: HasResponsive<string>;
	colunmGap: HasResponsive<string>;
	border: MyBorderControlData;
	borderActive: MyBorderControlData;
}

export const WCB_TABS_PANEL_STYLE_TITLE_DEMO: WCB_TABS_PANEL_STYLE_TITLE = {
	typography: TYPOGRAPHY_CONTROL_DEMO,
	border: MY_BORDER_CONTROL_DEMO,
	borderActive: MY_BORDER_CONTROL_DEMO,
	padding: {
		Desktop: {
			top: "0rem",
			left: "0rem",
			right: "0rem",
			bottom: "0rem",
		},
	},
	backgroundColor: "",
	backgroundColorActive: "",
	color: "",
	colorActive: "",
	colunmGap: { Desktop: "1rem" },
	rowGap: { Desktop: "1rem" },
};

const isLightBackgroundColor = (color: string): boolean => {
	const trimmed = (color || "").trim();
	const hexMatch = trimmed.match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);
	if (hexMatch) {
		let hex = hexMatch[1];
		if (hex.length === 3) {
			hex = hex.split("").map((ch) => ch + ch).join("");
		}
		const r = parseInt(hex.slice(0, 2), 16);
		const g = parseInt(hex.slice(2, 4), 16);
		const b = parseInt(hex.slice(4, 6), 16);
		return (r * 299 + g * 587 + b * 114) / 1000 >= 186;
	}
	const rgbMatch = trimmed.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
	if (rgbMatch) {
		const r = Number(rgbMatch[1]);
		const g = Number(rgbMatch[2]);
		const b = Number(rgbMatch[3]);
		return (r * 299 + g * 587 + b * 114) / 1000 >= 186;
	}
	return false;
};

/**
 * Resolve default active tab colors from the active theme color setting.
 */
export const getTabsThemeActiveColors = (): Pick<
	WCB_TABS_PANEL_STYLE_TITLE,
	"backgroundColorActive" | "colorActive"
> => {
	const themeColor = getThemeDefaults()?.theme_color || "#1346af";
	return {
		backgroundColorActive: themeColor,
		colorActive: isLightBackgroundColor(themeColor) ? "#111827" : "#ffffff",
	};
};

type TabHere = "Normal" | "Active";

export const PANEL_COLOR_TABS: {
	name: TabHere;
	title: string;
}[] = [
	{ name: "Normal", title: __("Normal", "boostify-blocks") },
	{ name: "Active", title: __("Active", "boostify-blocks") },
];

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TABS_PANEL_STYLE_TITLE;
	setAttr__: (data: WCB_TABS_PANEL_STYLE_TITLE) => void;
	style: WCB_TAGS_PANEL_GENERAL["style"];
}

const WcbTabsPanel_StyleTitle: FC<Props> = ({
	panelData = WCB_TABS_PANEL_STYLE_TITLE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
	style,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const {
		typography,
		padding,
		backgroundColor,
		color,
		colunmGap,
		rowGap,
		border,
		borderActive,
		backgroundColorActive,
		colorActive,
	} = panelData;
	const { currentDeviceValue: currentPadding } = getValueFromAttrsResponsives(
		padding,
		deviceType
	);
	const { currentDeviceValue: currentRowGap } = getValueFromAttrsResponsives(
		rowGap,
		deviceType
	);
	const { currentDeviceValue: currentColunmGap } = getValueFromAttrsResponsives(
		colunmGap,
		deviceType
	);

	const renderColorTab = (tab: TabPanel.Tab) => {
		const tabName = tab.name as TabHere;
		if (tabName === "Normal") {
			return (
				<div key="normal" className="space-y-4">
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
		if (tabName === "Active") {
			return (
				<div key="active" className="space-y-4">
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
		return <div></div>;
	};

	const renderBorderTab = (tab: TabPanel.Tab) => {
		const tabName = tab.name as TabHere;
		if (tabName === "Normal") {
			return (
				<MyBorderControl
					key="normal"
					borderControl={border}
					setAttrs__border={(value) => {
						setAttr__({ ...panelData, border: value });
					}}
				/>
			);
		}
		if (tabName === "Active") {
			return (
				<MyBorderControl
					key="active"
					borderControl={borderActive}
					setAttrs__border={(value) => {
						setAttr__({ ...panelData, borderActive: value });
					}}
				/>
			);
		}
		return <div></div>;
	};

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Title", "boostify-blocks")}
		>
			<div className={"space-y-3.5"}>
				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(value) => {
						setAttr__({ ...panelData, typography: value });
					}}
				/>

				<MyDisclosure label={__("Colors", "boostify-blocks")}>
					<MyTabPanel tabs={PANEL_COLOR_TABS}>{renderColorTab}</MyTabPanel>
				</MyDisclosure>
				
				{
					// Folder-tab styles use their own connected active/panel borders.
					style !== "horizontalStyle2" && style !== "verticalStyle2" && (
						<MyDisclosure label={__("Border", "boostify-blocks")}>
							<MyTabPanel tabs={PANEL_COLOR_TABS}>{renderBorderTab}</MyTabPanel>
						</MyDisclosure>
					)
				}

				<MyDisclosure label={__("Dimension", "boostify-blocks")}>
					<MyDimensionsUnitControl
						label={
							<MyLabelControl className="" hasResponsive>
								{__("Padding", "boostify-blocks")}
							</MyLabelControl>
						}
						values={currentPadding ?? {}}
						onChange={(value) => {
							setAttr__({
								...panelData,
								padding: {
									...padding,
									[deviceType]: value,
								},
							});
						}}
						min={0}
					/>

					<MySpacingSizesControl
						onChange={(value) => {
							setAttr__({
								...panelData,
								rowGap: {
									...rowGap,
									[deviceType]: value,
								},
							});
						}}
						value={currentRowGap || "0"}
						label={__("Row Gap", "boostify-blocks")}
					/>
					<div>
						<MySpacingSizesControl
							onChange={(value) => {
								setAttr__({
									...panelData,
									colunmGap: {
										...colunmGap,
										[deviceType]: value,
									},
								});
							}}
							value={currentColunmGap || "0"}
							label={__("Column Gap", "boostify-blocks")}
						/>
					</div>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbTabsPanel_StyleTitle;
