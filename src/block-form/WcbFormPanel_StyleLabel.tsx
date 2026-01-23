import { ColorPicker, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";

export interface BCB_FORM_PANEL_STYLE_LABEL {
	typography: MyTypographyControlData;
	textColor: string;
	textColorHover: string;
}

export const BCB_FORM_PANEL_STYLE_LABEL_DEMO: BCB_FORM_PANEL_STYLE_LABEL = {
	typography: {
		...TYPOGRAPHY_CONTROL_DEMO,
		appearance: {
			...TYPOGRAPHY_CONTROL_DEMO.appearance,
			style: {
				...TYPOGRAPHY_CONTROL_DEMO.appearance.style,
				fontWeight: 500,
			},
		},
	},
	textColor: "",
	textColorHover: "",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: BCB_FORM_PANEL_STYLE_LABEL;
	setAttr__: (data: BCB_FORM_PANEL_STYLE_LABEL) => void;
}

const WcbFormPanel_StyleLabel: FC<Props> = ({
	panelData = BCB_FORM_PANEL_STYLE_LABEL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { textColor, textColorHover, typography } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Label", "wcb")}
		>
			<div className={"space-y-4"}>
				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(typography) => {
						setAttr__({
							...panelData,
							typography,
						});
					}}
				/>
				<MyDisclosure defaultOpen label="Color">
					<MyColorPicker
						label={__("Color", "wcb")}
						onChange={(value) => {
							setAttr__({
								...panelData,
								textColor: value,
							});
						}}
						color={textColor}
					/>
					<MyColorPicker
						label={__("Hover Color", "wcb")}
						onChange={(value) => {
							setAttr__({
								...panelData,
								textColorHover: value,
							});
						}}
						color={textColorHover}
					/>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbFormPanel_StyleLabel;
