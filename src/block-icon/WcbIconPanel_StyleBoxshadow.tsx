import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyBoxShadowControl, {
	MyBoxShadowControlData,
} from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
import { MY_BOX_SHADOW_CONTROL_DEMO } from "../components/controls/MyBoxShadowControl/types";

export interface BCB_ICON_PANEL_STYLE_BOXSHADOW
	extends MyBoxShadowControlData {}

export const BCB_ICON_PANEL_STYLE_BOXSHADOW_DEMO: BCB_ICON_PANEL_STYLE_BOXSHADOW =
	{
		...MY_BOX_SHADOW_CONTROL_DEMO,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: BCB_ICON_PANEL_STYLE_BOXSHADOW;
	setAttr__: (data: BCB_ICON_PANEL_STYLE_BOXSHADOW) => void;
}

const WcbIconPanel_StyleBoxshadow: FC<Props> = ({
	panelData = BCB_ICON_PANEL_STYLE_BOXSHADOW_DEMO,
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
			title={__("Box shadow", "wcb")}
		>
			<MyBoxShadowControl
				boxShadowControl={panelData}
				setAttrs__boxShadow={(data) => setAttr__({ ...data })}
			/>
		</PanelBody>
	);
};

export default WcbIconPanel_StyleBoxshadow;
