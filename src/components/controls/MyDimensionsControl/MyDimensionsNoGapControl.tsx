import React, { FC } from "react";
import { __ } from "@wordpress/i18n";
import MyLabelControl from "../MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../../../hooks/useGetDeviceType";
import {
	DimensionSettings,
	MyDimensionsNoGapControlData,
	MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
} from "./types";
import getValueFromAttrsResponsives from "../../../utils/getValueFromAttrsResponsives";
import MyDimensionsBoxControl from "./MyDimensionsUnitControl";

interface Props {
	className?: string;
	dimensionControl: MyDimensionsNoGapControlData;
	setAttrs__dimensions: (data: MyDimensionsNoGapControlData) => void;
}

const MyDimensionsNoGapControl: FC<Props> = ({
	className = "space-y-5",
	dimensionControl = MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
	setAttrs__dimensions,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//
	const { margin: marginProps, padding: paddingProps } = dimensionControl;

	const { currentDeviceValue: margin } = getValueFromAttrsResponsives(
		marginProps,
		deviceType
	);

	const { currentDeviceValue: padding } = getValueFromAttrsResponsives(
		paddingProps,
		deviceType
	);

	//

	const handleChangeMargin = (value: DimensionSettings) => {
		setAttrs__dimensions({
			...dimensionControl,
			margin: {
				...marginProps,
				[deviceType]: value,
			},
		});
	};

	const handleChangePadding = (value: DimensionSettings) => {
		setAttrs__dimensions({
			...dimensionControl,
			padding: {
				...paddingProps,
				[deviceType]: value,
			},
		});
	};

	return (
		<div className={className}>
			<MyDimensionsBoxControl
				label={
					<MyLabelControl hasResponsive className="">
						{__("Padding", "boostify-blocks")}
					</MyLabelControl>
				}
				values={padding || {}}
				onChange={handleChangePadding}
				min={0}
			/>
			<MyDimensionsBoxControl
				label={
					<MyLabelControl className="" hasResponsive>
						{__("Margin", "boostify-blocks")}
					</MyLabelControl>
				}
				values={margin || {}}
				onChange={handleChangeMargin}
				min={0}
			/>
		</div>
	);
};

export default MyDimensionsNoGapControl;
