import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import {
	PanelBody,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
	RangeControl,
	SelectControl,
	ToggleControl,
} from "@wordpress/components";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyDimensionsNoMarginControl from "../components/controls/MyDimensionsControl/MyDimensionsNoMarginControl";
import {
	MyDimensionsNoMarginControlData,
	MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO,
} from "../components/controls/MyDimensionsControl/types";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import HelpText from "../components/controls/HelpText";
import MyDisclosure from "../components/controls/MyDisclosure";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";

export interface WCB_PRODUCTS_PANEL_STYLE_LAYOUT
	extends MyDimensionsNoMarginControlData {
	textAlignment: TextAlignment;
	backgroundColor: string;
	numberOfColumn: HasResponsive<number>;
	isNumberOfColumnEdited?: boolean;
	numberOfColumnFromCustomizer?: HasResponsive<number>;
	// peekAfter - The value of the future viewports which have to be visible in the current view
	peekAfter: HasResponsive<string>;
	isEqualHeight: boolean;
	contentEqualHeight?: boolean;
	contentMinHeight?: number;
	swithToScrollSnapX: ResponsiveDevices | "None";
	layoutType?: "grid" | "carousel";
	isShowArrow?: boolean;
	isShowDots?: boolean;
	isAutoPlay?: boolean;
	autoplaySpeed?: number;
	hoverpause?: boolean;
	loop?: boolean;
	animationDuration?: number;
}

export const WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO: WCB_PRODUCTS_PANEL_STYLE_LAYOUT =
	{
		...MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO,
		textAlignment: "center",
		backgroundColor: "",
		padding: {
			Desktop: {
				bottom: "",
				top: "",
				left: "",
				right: "",
			},
		},
		numberOfColumn: { Desktop: 3, Mobile: 2, Tablet: 2 },
		peekAfter: { Desktop: "2rem", Tablet: "2rem", Mobile: "2rem" },
		swithToScrollSnapX: "None",
		layoutType: "grid",
		isShowArrow: true,
		isShowDots: true,
		isAutoPlay: false,
		autoplaySpeed: 3000,
		hoverpause: true,
		loop: false,
		animationDuration: 500,
		isEqualHeight: true,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_PRODUCTS_PANEL_STYLE_LAYOUT;
	setAttr__: (data: WCB_PRODUCTS_PANEL_STYLE_LAYOUT) => void;
}

const WcbProductsPanel_StyleLayout: FC<Props> = ({
	panelData = WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { currentDeviceValue: currentNumberOfColumn } =
		getValueFromAttrsResponsives(panelData.numberOfColumn, deviceType);
	const { currentDeviceValue: currentPeekAfter } = getValueFromAttrsResponsives(
		panelData.peekAfter,
		deviceType
	);

	const { textAlignment, backgroundColor, colunmGap, padding, rowGap } =
		panelData;
	const layoutType = panelData.layoutType || "grid";
	const isShowArrow = panelData.isShowArrow ?? true;
	const isShowDots = panelData.isShowDots ?? true;
	const isAutoPlay = panelData.isAutoPlay ?? false;
	const autoplaySpeed = panelData.autoplaySpeed ?? 3000;
	const hoverpause = panelData.hoverpause ?? true;
	const loop = panelData.loop ?? false;
	const animationDuration = panelData.animationDuration ?? 500;
	const isScrollSnapEnabled =
		layoutType === "grid" && panelData.swithToScrollSnapX !== "None";

	const SNAPX_POSTION_PLANS: MyRadioItem<
		WCB_PRODUCTS_PANEL_STYLE_LAYOUT["swithToScrollSnapX"]
	>[] = [
		{ name: "Desktop", icon: "Desktop" },
		{ name: "Tablet", icon: "Tablet" },
		{ name: "Mobile", icon: "Mobile" },
		{ name: "None", icon: "None" },
	];
	//
	const handleChangeTextAlignment = (selected: CSSProperties["textAlign"]) => {
		setAttr__({
			...panelData,
			textAlignment: selected,
		});
	};

	const handleChangeBgColor = (color: string) => {
		setAttr__({
			...panelData,
			backgroundColor: color,
		});
	};
	//

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Layout", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<SelectControl
					value={layoutType}
					options={[
						{ label: __("Grid", "boostify-blocks"), value: "grid" },
						{ label: __("Carousel", "boostify-blocks"), value: "carousel" },
					]}
					onChange={(value) => {
						setAttr__({
							...panelData,
							layoutType: value as "grid" | "carousel",
						});
					}}
				/>

				<MyTextAlignControl
					textAlignment={textAlignment}
					onChange={handleChangeTextAlignment}
					hasResponsive={false}
				/>

				<MyColorPicker
					label={__("Background color", "boostify-blocks")}
					onChange={handleChangeBgColor}
					color={backgroundColor}
				/>

				{/*  */}
				<RangeControl
					label={
						<MyLabelControl hasResponsive>
							{__("Columns", "boostify-blocks")}
						</MyLabelControl>
					}
					value={currentNumberOfColumn || 1}
					onChange={(number) => {
						setAttr__({
							...panelData,
							numberOfColumn: {
								...panelData.numberOfColumn,
								[deviceType]: number || 2,
							},
							isNumberOfColumnEdited: true,
						});
					}}
					min={1}
					max={6}
					required
				/>

				{layoutType === "grid" ? (
					<MyDisclosure label="Swith to scroll-snap-x" defaultOpen>
						<div>
							<MyRadioGroup
								label="Swith to scroll-snap-x"
								onChange={(selected) =>
									setAttr__({
										...panelData,
										swithToScrollSnapX: selected as any,
									})
								}
								value={panelData.swithToScrollSnapX}
								plans={SNAPX_POSTION_PLANS}
								hasResponsive={false}
								isWrap={false}
							/>
							<HelpText>
								{__(
									"Device selection to start switching from layout GRID to layout is a scroll able row.",
									"boostify-blocks"
								)}
							</HelpText>
						</div>

						{isScrollSnapEnabled && (
							<>
								<div>
									<MySpacingSizesControl
										hasResponsive
										onChange={(value) => {
											setAttr__({
												...panelData,
												peekAfter: {
													...panelData.peekAfter,
													[deviceType]: value,
												},
											});
										}}
										value={currentPeekAfter || "0"}
										label={__("Peek After", "boostify-blocks")}
									/>
									<HelpText>
										{__(
											"The value of the future viewports which have to be visible in the current view.",
											"boostify-blocks"
										)}
									</HelpText>
								</div>
								<ToggleControl
									label={__("Show arrows", "boostify-blocks")}
									checked={isShowArrow}
									onChange={(checked) => {
										setAttr__({ ...panelData, isShowArrow: checked });
									}}
								/>
							</>
						)}
					</MyDisclosure>
				) : (
					<MyDisclosure label={__("Carousel", "boostify-blocks")} defaultOpen>
						<ToggleControl
							label={__("Show arrows", "boostify-blocks")}
							checked={isShowArrow}
							onChange={(checked) => {
								setAttr__({ ...panelData, isShowArrow: checked });
							}}
						/>
						<ToggleControl
							label={__("Show dots", "boostify-blocks")}
							checked={isShowDots}
							onChange={(checked) => {
								setAttr__({ ...panelData, isShowDots: checked });
							}}
						/>
						<ToggleControl
							label={__("Infinite loop", "boostify-blocks")}
							checked={loop}
							onChange={(checked) => {
								setAttr__({ ...panelData, loop: checked });
							}}
						/>
						<ToggleControl
							label={__("Autoplay", "boostify-blocks")}
							checked={isAutoPlay}
							onChange={(checked) => {
								setAttr__({ ...panelData, isAutoPlay: checked });
							}}
						/>
						{isAutoPlay && (
							<>
								<RangeControl
									label={__("Autoplay speed (ms)", "boostify-blocks")}
									value={autoplaySpeed}
									onChange={(value) => {
										setAttr__({
											...panelData,
											autoplaySpeed: value || 3000,
										});
									}}
									min={500}
									max={15000}
									step={100}
								/>
								<ToggleControl
									label={__("Pause on hover", "boostify-blocks")}
									checked={hoverpause}
									onChange={(checked) => {
										setAttr__({ ...panelData, hoverpause: checked });
									}}
								/>
							</>
						)}
						<RangeControl
							label={__("Transition speed (ms)", "boostify-blocks")}
							value={animationDuration}
							onChange={(value) => {
								setAttr__({
									...panelData,
									animationDuration: value || 500,
								});
							}}
							min={100}
							max={5000}
							step={50}
						/>
					</MyDisclosure>
				)}

				<MyDimensionsNoMarginControl
					dimensionControl={{ colunmGap, padding, rowGap }}
					setAttrs__dimensions={(data) => {
						setAttr__({
							...panelData,
							...data,
						});
					}}
					paddingLabel={__("Padding content", "boostify-blocks")}
				/>

				<ToggleControl
					label={__("Equal height", "boostify-blocks")}
					checked={panelData.isEqualHeight}
					onChange={(checked) => {
						setAttr__({ ...panelData, isEqualHeight: checked });
					}}
					help={__(
						"The product cards will have the same height, suitable when you set the border or background",
						"boostify-blocks"
					)}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbProductsPanel_StyleLayout;
