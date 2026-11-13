import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import MyDisclosure from "../components/controls/MyDisclosure";

export interface WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS {
	arrowSize: string;
	border: MyBorderControlData;
	arrowDistance?: HasResponsive<string>;
	dotsMarginTop: HasResponsive<string>;
	color: string;
	backgroundColor?: string;
}
export const WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO: WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS =
	{
		arrowSize: "1.25rem",
		border: {
			...MY_BORDER_CONTROL_DEMO,
			mainSettings: {
				...MY_BORDER_CONTROL_DEMO.mainSettings,
				style: "solid",
				width: "1px",
				color: "#d1d5db",
			},
			hoverColor: "#6b7280",
			radius: { Desktop: "99px" },
		},
		arrowDistance: { Desktop: "0px" },
		dotsMarginTop: { Desktop: "8px" },
		color: "#374151",
		backgroundColor: "#fff",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS) => void;
	showArrowsDots?: "Dot" | "Arrow" | "Both";
}

const WcbTestimonialsPanel_StyleArrowDots: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO,
	setAttr__,
	showArrowsDots = "Both",
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { arrowSize, border, arrowDistance, dotsMarginTop, color, backgroundColor } = panelData;
	const { currentDeviceValue: currentDotsMarginTop } =
		getValueFromAttrsResponsives(dotsMarginTop, deviceType);
	const { currentDeviceValue: currentArrowDistance } =
		getValueFromAttrsResponsives(arrowDistance, deviceType);
	const showArrows = showArrowsDots !== "Dot";
	const showDots = showArrowsDots !== "Arrow";
	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Arrow & Dots", "boostify-blocks")}
		>
			<div className="space-y-5">
				{showArrows && (
					<>
						<MyDisclosure defaultOpen label="Arrow settings">
							<MySpacingSizesControl
								onChange={(value) => {
									setAttr__({
										...panelData,
										arrowSize: value,
									});
								}}
								value={arrowSize || "1.25rem"}
								hasResponsive={false}
								label={__("Arrow size", "boostify-blocks")}
							/>

							<MyBorderControl
								borderControl={border}
								setAttrs__border={(border: MyBorderControlData) => {
									setAttr__({
										...panelData,
										border,
									});
								}}
							/>
						</MyDisclosure>

						<MySpacingSizesControl
							onChange={(value) => {
								setAttr__({
									...panelData,
									arrowDistance: {
										Desktop: arrowDistance?.Desktop ?? "0px",
										...arrowDistance,
										[deviceType]: value,
									},
								});
							}}
							minCustomValue={-100}
							value={currentArrowDistance || "0px"}
							label={__("Arrow Distance from Edges", "boostify-blocks")}
						/>
					</>
				)}

				{showDots && (
					<MySpacingSizesControl
						onChange={(value) => {
							setAttr__({
								...panelData,
								dotsMarginTop: {
									...dotsMarginTop,
									[deviceType]: value,
								},
							});
						}}
						minCustomValue={-200}
						value={currentDotsMarginTop || "8px"}
						label={__("Dots Margin top", "boostify-blocks")}
					/>
				)}

				<MyColorPicker
					label={__("Color", "boostify-blocks")}
					onChange={(value) => {
						setAttr__({
							...panelData,
							color: value,
						});
					}}
					color={color}
				/>

				{showArrows && (
					<MyColorPicker
						label={__("Background Color", "boostify-blocks")}
						onChange={(value) => {
							setAttr__({
								...panelData,
								backgroundColor: value,
							});
						}}
						color={backgroundColor || "#fff"}
					/>
				)}
			</div>
		</PanelBody>
	);
};

export default WcbTestimonialsPanel_StyleArrowDots;
