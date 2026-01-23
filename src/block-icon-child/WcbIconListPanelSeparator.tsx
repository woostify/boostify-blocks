import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySelect from "../components/controls/MySelect";
import useGetDeviceType from "../hooks/useGetDeviceType";
import { Option } from "../types";

export interface BCB_ICON_LIST_PANEL_SEPARATOR {
	enableSeparator: boolean;
	position: "afterIcon" | "afterPrefix" | "afterTitle" | "afterDescription";
}

export const BCB_ICON_LIST_PANEL_SEPARATOR_DEMO: BCB_ICON_LIST_PANEL_SEPARATOR = {
	enableSeparator: false,
	position: "afterTitle",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: BCB_ICON_LIST_PANEL_SEPARATOR;
	setAttr__: (data: BCB_ICON_LIST_PANEL_SEPARATOR) => void;
	showOptionAfterIcon: boolean;
}

const WcbIconListPanelSeparator: FC<Props> = ({
	panelData = BCB_ICON_LIST_PANEL_SEPARATOR_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
	showOptionAfterIcon,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { enableSeparator, position } = panelData;

	let PLANS_DEMO: Option<BCB_ICON_LIST_PANEL_SEPARATOR["position"]>[] = [
		{ value: "afterPrefix", label: "After Prefix" },
		{ value: "afterTitle", label: "After Title" },
		{ value: "afterDescription", label: "After Description" },
	];

	if (showOptionAfterIcon) {
		PLANS_DEMO = [{ value: "afterIcon", label: "After Icon" }, ...PLANS_DEMO];
	}

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Separator", "wcb")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Enable separator", "wcb")}
					checked={enableSeparator}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enableSeparator: checked });
					}}
				/>

				{enableSeparator && (
					<MySelect
						label={__("Position", "Wcb")}
						options={PLANS_DEMO}
						value={position}
						onChange={(value) => {
							setAttr__({
								...panelData,
								position: value as BCB_ICON_LIST_PANEL_SEPARATOR["position"],
							});
						}}
					/>
				)}
			</div>
		</PanelBody>
	);
};

export default WcbIconListPanelSeparator;
