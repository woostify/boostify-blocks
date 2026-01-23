import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { useEffect, FC } from "react";
import MyBackgroundNoImageControl, {
	BackgroundNoImageControlData,
	STYLES_BG_NO_IMAGE_DEMO,
} from "../components/controls/MyBackgroundControl/MyBackgroundNoImageControl";

export interface BCB_HEADING_PANEL_BACKGROUND {
	background: BackgroundNoImageControlData;
}

export const BCB_HEADING_PANEL_BACKGROUND_DEMO: BCB_HEADING_PANEL_BACKGROUND = {
	background: STYLES_BG_NO_IMAGE_DEMO,
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: BCB_HEADING_PANEL_BACKGROUND;
	setAttr__: (data: BCB_HEADING_PANEL_BACKGROUND) => void;
}

const WcbHeadingPanelBackground: FC<Props> = ({
	panelData = BCB_HEADING_PANEL_BACKGROUND_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { background } = panelData;

	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Background", "wcb")}
		>
			<MyBackgroundNoImageControl
				backgroundControl={background}
				setAttrs__backgroundControl={(background) => setAttr__({ background })}
			/>
		</PanelBody>
	);
};

export default WcbHeadingPanelBackground;
