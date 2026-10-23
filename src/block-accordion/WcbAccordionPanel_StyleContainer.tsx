import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyBackgroundNoImageControl, {
	BackgroundNoImageControlData,
	STYLES_BG_NO_IMAGE_DEMO,
} from "../components/controls/MyBackgroundControl/MyBackgroundNoImageControl";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_ACCORDION_PANEL_STYLE_CONTAINER {
	background: BackgroundNoImageControlData;
	border: MyBorderControlData;
	rowGap: HasResponsive<string>;
	colunmGap: HasResponsive<string>;
}

export const WCB_ACCORDION_PANEL_STYLE_CONTAINER_DEMO_SIMPLE: WCB_ACCORDION_PANEL_STYLE_CONTAINER =
	{
		background: STYLES_BG_NO_IMAGE_DEMO,
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
		rowGap: { Desktop: "8px" },
		colunmGap: { Desktop: "16px" },
	};

export const WCB_ACCORDION_PANEL_STYLE_CONTAINER_DEMO_SOLID: WCB_ACCORDION_PANEL_STYLE_CONTAINER =
	{
		background: {
			...STYLES_BG_NO_IMAGE_DEMO,
			bgType: "color",
			color: "#f9fafb",
		},
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
		rowGap: { Desktop: "8px" },
		colunmGap: { Desktop: "16px" },
	};

export const WCB_ACCORDION_PANEL_STYLE_CONTAINER_DEMO_BORDERLESS: WCB_ACCORDION_PANEL_STYLE_CONTAINER =
	{
		background: STYLES_BG_NO_IMAGE_DEMO,
		border: {
			...MY_BORDER_CONTROL_DEMO,
			mainSettings: {
				...MY_BORDER_CONTROL_DEMO.mainSettings,
				color: "#e2e8f0",
				style: "none",
				width: "0px",
			},
			radius: {
				Desktop: "0px",
				Tablet: "0px",
				Mobile: "0px",
			},
		},
		rowGap: { Desktop: "6px" },
		colunmGap: { Desktop: "16px" },
	};

export const WCB_ACCORDION_PANEL_STYLE_CONTAINER_DEMO =
	WCB_ACCORDION_PANEL_STYLE_CONTAINER_DEMO_SIMPLE;

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ACCORDION_PANEL_STYLE_CONTAINER;
	setAttr__: (data: WCB_ACCORDION_PANEL_STYLE_CONTAINER) => void;
}

const WcbAccordionPanel_StyleContainer: FC<Props> = ({
	panelData = WCB_ACCORDION_PANEL_STYLE_CONTAINER_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { background, border, rowGap, colunmGap } = panelData;
	const { currentDeviceValue: currentRowGap } = getValueFromAttrsResponsives(
		rowGap,
		deviceType
	);
	const { currentDeviceValue: currentColunmGap } = getValueFromAttrsResponsives(
		colunmGap,
		deviceType
	);

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Container", "boostify-blocks")}
		>
			<div className={"space-y-3.5"}>
				<MyDisclosure defaultOpen label={__("Background", "boostify-blocks")}>
					<MyBackgroundNoImageControl
						backgroundControl={background}
						setAttrs__backgroundControl={(value) => {
							setAttr__({ ...panelData, background: value });
						}}
					/>
				</MyDisclosure>
				<MyDisclosure label={__("Border", "boostify-blocks")}>
					<MyBorderControl
						borderControl={border}
						setAttrs__border={(value) => {
							setAttr__({ ...panelData, border: value });
						}}
					/>
				</MyDisclosure>
				<MyDisclosure label={__("Gaps & Spacing", "boostify-blocks")}>
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
						value={currentRowGap || "10px"}
						label={__("Row Gap", "boostify-blocks")}
					/>
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
						value={currentColunmGap || "16px"}
						label={__("Column Gap", "boostify-blocks")}
					/>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbAccordionPanel_StyleContainer;
