import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import {
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import MyDisclosure from "../components/controls/MyDisclosure";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import { WCB_ACCORDION_PANEL_STYLE_CONTAINER } from "./WcbAccordionPanel_StyleContainer";

export interface WCB_ACCORDION_PANEL_STYLE_DIMENSION {
	padding: HasResponsive<DimensionSettings>;
	margin: HasResponsive<DimensionSettings>;
}

export const WCB_ACCORDION_PANEL_STYLE_DIMENSION_DEMO: WCB_ACCORDION_PANEL_STYLE_DIMENSION =
	{
		padding: {
			Desktop: {
				top: "",
				left: "",
				right: "",
				bottom: "",
			},
		},
		margin: {
			Desktop: {
				top: "",
				left: "",
				right: "",
				bottom: "",
			},
		},
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ACCORDION_PANEL_STYLE_DIMENSION;
	setAttr__: (data: WCB_ACCORDION_PANEL_STYLE_DIMENSION) => void;
	containerData?: WCB_ACCORDION_PANEL_STYLE_CONTAINER;
	setAttr__container?: (data: WCB_ACCORDION_PANEL_STYLE_CONTAINER) => void;
	columns?: HasResponsive<number>;
}

const WcbAccordionPanel_StyleDimension: FC<Props> = ({
	panelData = WCB_ACCORDION_PANEL_STYLE_DIMENSION_DEMO,
	setAttr__,
	containerData,
	setAttr__container,
	columns,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { margin, padding } = panelData;
	const { currentDeviceValue: currentPadding } = getValueFromAttrsResponsives(
		padding,
		deviceType
	);
	const { currentDeviceValue: currentMargin } = getValueFromAttrsResponsives(
		margin,
		deviceType
	);
	const { currentDeviceValue: currentRowGap } = getValueFromAttrsResponsives(
		containerData?.rowGap,
		deviceType
	);
	const { currentDeviceValue: currentColunmGap } = getValueFromAttrsResponsives(
		containerData?.colunmGap,
		deviceType
	);
	const { currentDeviceValue: currentColumns } = getValueFromAttrsResponsives(
		columns,
		deviceType
	);

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Dimension", "boostify-blocks")}
		>
			<div className={"space-y-4"}>
				<BoxControl
					label={
						<MyLabelControl className="" hasResponsive>
							{__("Padding", "boostify-blocks")}
						</MyLabelControl>
					}
					values={currentPadding}
					onChange={(value: any) => {
						setAttr__({
							...panelData,
							padding: {
								...padding,
								[deviceType]: value,
							},
						});
					}}
				/>

				<BoxControl
					label={
						<MyLabelControl className="" hasResponsive>
							{__("Margin", "boostify-blocks")}
						</MyLabelControl>
					}
					values={currentMargin}
					onChange={(value: any) => {
						setAttr__({
							...panelData,
							margin: {
								...margin,
								[deviceType]: value,
							},
						});
					}}
				/>

				{containerData && setAttr__container && (
					<MyDisclosure label={__("Gaps & Spacing", "boostify-blocks")}>
						<MySpacingSizesControl
							onChange={(value) => {
								setAttr__container({
									...containerData,
									rowGap: {
										...containerData.rowGap,
										[deviceType]: value,
									},
								});
							}}
							value={currentRowGap || "10px"}
							label={__("Row Gap", "boostify-blocks")}
						/>
						{Number(currentColumns) > 1 && (
							<MySpacingSizesControl
								onChange={(value) => {
									setAttr__container({
										...containerData,
										colunmGap: {
											...containerData.colunmGap,
											[deviceType]: value,
										},
									});
								}}
								value={currentColunmGap || "16px"}
								label={__("Column Gap", "boostify-blocks")}
							/>
						)}
					</MyDisclosure>
				)}
			</div>
		</PanelBody>
	);
};

export default WcbAccordionPanel_StyleDimension;
