import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import MyDimensionsBoxControl from "../components/controls/MyDimensionsControl/MyDimensionsUnitControl";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { WCB_TESTIMONIALS_PANEL_GENERAL } from "./WcbTestimonialsPanelGeneral";
import { WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION } from "./WcbTestimonialsPanel_StyleDimension";

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	generalData: WCB_TESTIMONIALS_PANEL_GENERAL;
	setGeneralAttr__: (data: WCB_TESTIMONIALS_PANEL_GENERAL) => void;
	dimensionData: WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION;
	setDimensionAttr__: (data: WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION) => void;
}

const EMPTY_DIMENSION: DimensionSettings = {
	top: "",
	right: "",
	bottom: "",
	left: "",
};

const hasNonEmptySides = (dim?: HasResponsive<DimensionSettings>): boolean =>
	Boolean(
		dim &&
			Object.values(dim).some(
				(side) =>
					side &&
					(["top", "right", "bottom", "left"] as const).some((k) =>
						Boolean(side[k])
					)
			)
	);

/**
 * Spacing panel for Testimonial card gutters (Column Gap) and inner card padding.
 */
const WcbTestimonialsPanel_StyleSpacing: FC<Props> = ({
	generalData,
	setGeneralAttr__,
	dimensionData,
	setDimensionAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { currentDeviceValue: currentColGap } = getValueFromAttrsResponsives(
		generalData?.colGap,
		deviceType
	);

	const { currentDeviceValue: currentItemPadding } =
		getValueFromAttrsResponsives(dimensionData?.itemPadding, deviceType);

	const handleChangeColGap = (value: string) => {
		setGeneralAttr__({
			...generalData,
			colGap: {
				...generalData?.colGap,
				[deviceType]: value,
			},
		});
	};

	const handleChangeItemPadding = (value: DimensionSettings) => {
		const nextItemPadding: HasResponsive<DimensionSettings> = {
			Desktop: dimensionData?.itemPadding?.Desktop ?? EMPTY_DIMENSION,
			...dimensionData?.itemPadding,
			[deviceType]: value,
		};

		if (!hasNonEmptySides(nextItemPadding)) {
			const { itemPadding: _removed, ...restDimension } = dimensionData;
			setDimensionAttr__(restDimension);
			return;
		}

		setDimensionAttr__({
			...dimensionData,
			itemPadding: nextItemPadding,
		});
	};

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Spacing", "boostify-blocks")}
		>
			<div className="space-y-5">
				<MySpacingSizesControl
					onChange={handleChangeColGap}
					value={currentColGap || "0"}
					label={__("Column Gap", "boostify-blocks")}
					hasResponsive
				/>

				<MyDimensionsBoxControl
					label={
						<MyLabelControl hasResponsive className="">
							{__("Padding", "boostify-blocks")}
						</MyLabelControl>
					}
					values={currentItemPadding || {}}
					onChange={handleChangeItemPadding}
					min={0}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbTestimonialsPanel_StyleSpacing;
