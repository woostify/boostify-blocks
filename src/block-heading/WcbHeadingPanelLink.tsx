import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyLinkColorControl, {
	MyLinkColorControlData,
	MY_LINK_COLOR_CONTROL_DEMO,
} from "../components/controls/MyLinkColorControl/MyLinkColorControl";

export interface BCB_HEADING_PANEL_LINK {
	linkColor: MyLinkColorControlData;
}

export const BCB_HEADING_PANEL_LINK_DEMO: BCB_HEADING_PANEL_LINK = {
	linkColor: MY_LINK_COLOR_CONTROL_DEMO,
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: BCB_HEADING_PANEL_LINK;
	setAttr__: (data: BCB_HEADING_PANEL_LINK) => void;
}

const WcbHeadingPanelLink: FC<Props> = ({
	panelData = BCB_HEADING_PANEL_LINK_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { linkColor } = panelData;
	//

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Link color", "wcb")}
		>
			<MyLinkColorControl
				linkColorControl={linkColor}
				setAttrs__linkColor={(linkColor) => setAttr__({ linkColor })}
			/>
		</PanelBody>
	);
};

export default WcbHeadingPanelLink;
