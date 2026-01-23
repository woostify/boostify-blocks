import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyBackgroundControl, {
	BackgroundControlData,
	STYLES_BG_DEMO,
} from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import MyDisclosure from "../components/controls/MyDisclosure";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import MyBackgroundNoImageControl, {
	BackgroundNoImageControlData,
	STYLES_BG_NO_IMAGE_DEMO,
} from "../components/controls/MyBackgroundControl/MyBackgroundNoImageControl";


export interface BCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER {
	background: BackgroundControlData;
	border: MyBorderControlData;
}

export interface BCB_BUTTON_PANEL_STYLE_BACKGROUND {
	normal: BackgroundNoImageControlData;
	hover: BackgroundNoImageControlData;
}

export const BCB_BUTTON_PANEL_STYLE_BACKGROUND_PRESET_1: BCB_BUTTON_PANEL_STYLE_BACKGROUND =
	{
		normal: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#f0f0f1" },
		hover: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#f0f0f1" },
	};
export const BCB_BUTTON_PANEL_STYLE_BACKGROUND_PRESET_3: BCB_BUTTON_PANEL_STYLE_BACKGROUND =
	{
		normal: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#2B2B2B" },
		hover: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#2B2B2B" },
	};
export const BCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO_WHITE: BCB_BUTTON_PANEL_STYLE_BACKGROUND =
	{
		normal: STYLES_BG_NO_IMAGE_DEMO,
		hover: STYLES_BG_NO_IMAGE_DEMO,
	};

export const BCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO: BCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER =
	{
		background: STYLES_BG_DEMO,
		border: MY_BORDER_CONTROL_DEMO,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: BCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER;
	setAttr__: (data: BCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER) => void;
}

const WcbTestimonialsPanel_StyleBackground: FC<Props> = ({
	panelData = BCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { background, border } = panelData;
	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Background & Border", "wcb")}
		>
			<div className="space-y-5">
				<MyDisclosure defaultOpen label="Background">
					<MyBackgroundControl
						backgroundControl={background}
						setAttrs__backgroundControl={(data) =>
							setAttr__({ ...panelData, background: data })
						}
					/>
				</MyDisclosure>
				<MyDisclosure defaultOpen label="Border">
					<MyBorderControl
						borderControl={border}
						setAttrs__border={(data) =>
							setAttr__({ ...panelData, border: data })
						}
					/>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbTestimonialsPanel_StyleBackground;
