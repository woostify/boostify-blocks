import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";

export interface WCB_ICON_BOX_PANEL_STYLE_PROGRESS {
	progressColor: string;
}

export const WCB_ICON_BOX_PANEL_STYLE_PROGRESS_DEMO: WCB_ICON_BOX_PANEL_STYLE_PROGRESS =
	{
		progressColor: "#007cba",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_BOX_PANEL_STYLE_PROGRESS;
	setAttr__: (data: WCB_ICON_BOX_PANEL_STYLE_PROGRESS) => void;
}

const WcbIconBoxPanel_StyleProgress: FC<Props> = ({
	panelData = WCB_ICON_BOX_PANEL_STYLE_PROGRESS_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { progressColor } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Progress", "boostify-blocks")}
		>
			<div className="space-y-5">
				<MyColorPicker
					onChange={(color) => {
						setAttr__({ ...panelData, progressColor: color });
					}}
					color={progressColor}
					label={__("Progress color", "boostify-blocks")}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbIconBoxPanel_StyleProgress;
