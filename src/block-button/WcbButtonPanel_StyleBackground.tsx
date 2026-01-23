import { PanelBody, TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyBackgroundNoImageControl, {
	BackgroundNoImageControlData,
	STYLES_BG_NO_IMAGE_DEMO,
} from "../components/controls/MyBackgroundControl/MyBackgroundNoImageControl";

export interface BCB_BUTTON_PANEL_STYLE_BACKGROUND {
	normal: BackgroundNoImageControlData;
	hover: BackgroundNoImageControlData;
}

export const BCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO_PRIMARY: BCB_BUTTON_PANEL_STYLE_BACKGROUND =
	{
		normal: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#0284c7" },
		hover: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#0369a1" },
	};
export const BCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO_SECONDARY: BCB_BUTTON_PANEL_STYLE_BACKGROUND =
	{
		normal: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#e0f2fe" },
		hover: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#bae6fd" },
	};
export const BCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO_WHITE: BCB_BUTTON_PANEL_STYLE_BACKGROUND =
	{
		normal: STYLES_BG_NO_IMAGE_DEMO,
		hover: STYLES_BG_NO_IMAGE_DEMO,
	};

export const BCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO =
	BCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO_PRIMARY;
interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: BCB_BUTTON_PANEL_STYLE_BACKGROUND;
	setAttr__: (data: BCB_BUTTON_PANEL_STYLE_BACKGROUND) => void;
}

type TabsHere = "normal" | "hover";
const PanelTab: {
	name: TabsHere;
	title: string;
}[] = [
	{ name: "normal", title: __("Normal", "wcb") },
	{ name: "hover", title: __("Hover", "wcb") },
];

const WcbButtonPanel_StyleBackground: FC<Props> = ({
	panelData = BCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { hover, normal } = panelData;
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Background", "wcb")}
		>
			<TabPanel
				className={`bcb-bodyControls__panel `}
				activeClass="active-tab"
				initialTabName={"normal"}
				tabs={PanelTab}
			>
				{(tab) => {
					if (tab.name === "normal") {
						return (
							<MyBackgroundNoImageControl
								backgroundControl={normal}
								setAttrs__backgroundControl={(data) => {
									setAttr__({ ...panelData, normal: data });
								}}
							/>
						);
					} else {
						return (
							<MyBackgroundNoImageControl
								backgroundControl={hover}
								setAttrs__backgroundControl={(data) => {
									setAttr__({ ...panelData, hover: data });
								}}
							/>
						);
					}
				}}
			</TabPanel>
		</PanelBody>
	);
};

export default WcbButtonPanel_StyleBackground;
