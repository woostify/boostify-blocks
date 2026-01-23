import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";

export interface BCB_ICON_PANEL_STYLE_BORDER extends MyBorderControlData {}

export const BCB_ICON_PANEL_STYLE_BORDER_DEMO_ROUND: BCB_ICON_PANEL_STYLE_BORDER =
	{
		...MY_BORDER_CONTROL_DEMO,
		radius: {
			Desktop: {
				bottomLeft: "50%",
				bottomRight: "50%",
				topLeft: "50%",
				topRight: "50%",
			},
		},
	};
export const BCB_ICON_PANEL_STYLE_BORDER_DEMO_WHITE: BCB_ICON_PANEL_STYLE_BORDER =
	{
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#d1d5db",
		},
		radius: {
			Desktop: {
				bottomLeft: "50%",
				bottomRight: "50%",
				topLeft: "50%",
				topRight: "50%",
			},
		},
		hoverColor: "",
	};
export const BCB_ICON_PANEL_STYLE_BORDER_DEMO_SECONDARY: BCB_ICON_PANEL_STYLE_BORDER =
	{
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#d1d5db",
		},
		hoverColor: "#d1d5db",
	};
export const BCB_ICON_PANEL_STYLE_BORDER_DEMO_PRIMARY: BCB_ICON_PANEL_STYLE_BORDER =
	{
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#d1d5db",
		},
		hoverColor: "#d1d5db",
	};

export const BCB_ICON_PANEL_STYLE_BORDER_DEMO =
	BCB_ICON_PANEL_STYLE_BORDER_DEMO_ROUND;

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: BCB_ICON_PANEL_STYLE_BORDER;
	setAttr__: (data: BCB_ICON_PANEL_STYLE_BORDER) => void;
}

const WcbIconPanel_StyleBorder: FC<Props> = ({
	panelData = BCB_ICON_PANEL_STYLE_BORDER_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Border", "wcb")}
		>
			<MyBorderControl
				borderControl={panelData}
				setAttrs__border={(data) => {
					setAttr__({
						...data,
					});
				}}
			/>
		</PanelBody>
	);
};

export default WcbIconPanel_StyleBorder;
