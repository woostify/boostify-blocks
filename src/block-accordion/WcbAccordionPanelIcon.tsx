import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import SelecIcon, {
	DEFAULT_MY_ICON,
	MyIcon,
} from "../components/controls/SelectIcon/SelecIcon";

export interface WCB_ACCORDION_PANEL_ICON {
	enableIcon: boolean;
	icon: MyIcon;
	inactiveIcon?: MyIcon;
	iconPosition: "left" | "right";
}

export const WCB_ACCORDION_PANEL_ICON_DEMO: WCB_ACCORDION_PANEL_ICON = {
	enableIcon: true,
	inactiveIcon: { ...DEFAULT_MY_ICON, iconName: "lni-plus" },
	iconPosition: "right",
	icon: { ...DEFAULT_MY_ICON, iconName: "lni-minus" },
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ACCORDION_PANEL_ICON;
	setAttr__: (data: WCB_ACCORDION_PANEL_ICON) => void;
}

const WcbAccordionPanelIcon: FC<Props> = ({
	panelData = WCB_ACCORDION_PANEL_ICON_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { enableIcon, icon, iconPosition, inactiveIcon } = panelData;

	const PLANS_DEMO: MyRadioItem<WCB_ACCORDION_PANEL_ICON["iconPosition"]>[] = [
		{ name: "left", icon: "Left" },
		{ name: "right", icon: "Right" },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Pane Title Trigger Icon", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Enable Icon", "boostify-blocks")}
					checked={enableIcon}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enableIcon: checked });
					}}
				/>
				{enableIcon && (
					<>
						<SelecIcon
							label={__("Active Icon:", "boostify-blocks")}
							iconData={icon}
							onChange={(value: any) => {
								setAttr__({
									...panelData,
									icon: value,
								});
							}}
						/>

						<SelecIcon
							label={__("Inactive Icon:", "boostify-blocks")}
							iconData={inactiveIcon || DEFAULT_MY_ICON}
							onChange={(value: any) => {
								setAttr__({
									...panelData,
									inactiveIcon: value,
								});
							}}
						/>

						<MyRadioGroup
							label={__("Icon position", "boostify-blocks")}
							value={iconPosition}
							onChange={(value) => {
								setAttr__({
									...panelData,
									iconPosition: value as typeof iconPosition,
								});
							}}
							hasResponsive={false}
							plans={PLANS_DEMO}
						/>
					</>
				)}
			</div>
		</PanelBody>
	);
};

export default WcbAccordionPanelIcon;
