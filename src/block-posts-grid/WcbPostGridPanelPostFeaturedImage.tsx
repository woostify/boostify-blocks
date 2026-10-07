import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MySelect from "../components/controls/MySelect";
import { useSelect } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import MyUnitControl from "../components/controls/MyUnitControl";
import { MY_GAP_UNITS } from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE {
	isShowFeaturedImage: boolean;
	featuredImageSize: string;
	featuredImagePosition: "top" | "left" | "right" | "background";
	linkCompleteBox: boolean;
	imageRatio?: string;
	customHeight?: HasResponsive<string>;
	imageFit?: "cover" | "contain" | "fill";
}

export const WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE_DEMO: WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE =
	{
		isShowFeaturedImage: true,
		featuredImageSize: "large",
		featuredImagePosition: "top",
		linkCompleteBox: false,
		imageRatio: "16/9",
		customHeight: { Desktop: "220px" },
		imageFit: "cover",
	};

const RATIO_OPTIONS = [
	{ value: "16/9", label: __("16:9 (Landscape)", "boostify-blocks") },
	{ value: "4/3", label: __("4:3 (Standard)", "boostify-blocks") },
	{ value: "3/2", label: __("3:2 (Classic)", "boostify-blocks") },
	{ value: "1/1", label: __("1:1 (Square)", "boostify-blocks") },
	{ value: "9/16", label: __("9:16 (Portrait)", "boostify-blocks") },
	{ value: "custom", label: __("Custom Height", "boostify-blocks") },
	{ value: "auto", label: __("Inherit / Original", "boostify-blocks") },
];

const FIT_OPTIONS = [
	{ value: "cover", label: __("Cover", "boostify-blocks") },
	{ value: "contain", label: __("Contain", "boostify-blocks") },
	{ value: "fill", label: __("Fill", "boostify-blocks") },
];

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE;
	setAttr__: (data: WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE) => void;
}

const WcbPostGridPanelPostFeaturedImage: FC<Props> = ({
	panelData = WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const {
		isShowFeaturedImage,
		featuredImageSize,
		featuredImagePosition,
		linkCompleteBox,
		imageRatio = "16/9",
		customHeight = { Desktop: "220px" },
		imageFit = "cover",
	} = panelData;

	const { currentDeviceValue: CUSTOM_HEIGHT } = getValueFromAttrsResponsives(
		customHeight,
		deviceType
	);

	const { imageSizes } = useSelect((select) => {
		const settings = select(blockEditorStore).getSettings();
		return {
			imageSizes: settings.imageSizes as any[],
		};
	}, []);

	const imageSizeOptions =
		imageSizes?.map(({ name, slug }) => ({
			value: slug,
			label: name,
		})) || [];

	const POSTION_PLANS: MyRadioItem<
		WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE["featuredImagePosition"]
	>[] = [
		{ name: "top", icon: "Top" },
		// { name: "left", icon: "Left" },
		// { name: "right", icon: "Right" },
		{ name: "background", icon: "Background" },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Featured image settings", "boostify-blocks")}
		>
			<div className={"space-y-5 "}>
				<ToggleControl
					label={__("Show featured image", "boostify-blocks")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowFeaturedImage: checked })
					}
					checked={isShowFeaturedImage}
				/>

				{isShowFeaturedImage ? (
					<MySelect
						value={featuredImageSize}
						options={imageSizeOptions}
						label={__("Image size", "boostify-blocks")}
						onChange={(size) => {
							setAttr__({ ...panelData, featuredImageSize: size });
						}}
					/>
				) : null}

				{isShowFeaturedImage ? (
					<MyRadioGroup
						label="Position"
						onChange={(selected) =>
							setAttr__({
								...panelData,
								featuredImagePosition: selected as any,
							})
						}
						value={featuredImagePosition}
						plans={POSTION_PLANS}
						hasResponsive={false}
						isWrap
					/>
				) : null}

				{isShowFeaturedImage && featuredImagePosition !== "background" ? (
					<>
						<MySelect
							value={imageRatio}
							options={RATIO_OPTIONS}
							label={__("Image ratio", "boostify-blocks")}
							onChange={(ratio) => {
								setAttr__({ ...panelData, imageRatio: ratio });
							}}
						/>

						{imageRatio === "custom" && (
							<MyUnitControl
								onChange={(value) => {
									setAttr__({
										...panelData,
										customHeight: {
											...(panelData.customHeight || { Desktop: "220px" }),
											[deviceType]: value,
										},
									});
								}}
								value={CUSTOM_HEIGHT || ""}
								units={MY_GAP_UNITS}
								label={__("Custom height", "boostify-blocks")}
								hasResponsive
								className="flex-col space-y-2"
							/>
						)}

						<MySelect
							value={imageFit}
							options={FIT_OPTIONS}
							label={__("Image fit", "boostify-blocks")}
							onChange={(fit) => {
								setAttr__({ ...panelData, imageFit: fit as any });
							}}
						/>
					</>
				) : null}

				{isShowFeaturedImage ? (
					<ToggleControl
						label={__("Link Complete Box", "boostify-blocks")}
						onChange={(checked) =>
							setAttr__({ ...panelData, linkCompleteBox: checked })
						}
						checked={linkCompleteBox}
						help={__(
							"When enabled, the link to the article page will cover the entire card",
							"boostify-blocks"
						)}
					/>
				) : null}
			</div>
		</PanelBody>
	);
};

export default WcbPostGridPanelPostFeaturedImage;
