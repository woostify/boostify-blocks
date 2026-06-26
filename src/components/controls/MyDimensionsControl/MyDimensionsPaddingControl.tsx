import React, { FC } from "react";
import { __ } from "@wordpress/i18n";
import MyLabelControl from "../MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../../../hooks/useGetDeviceType";
import {
	DimensionSettings,
	MyDimensionsPaddingControlData,
	MY_DIMENSIONS_PADDING_CONTROL_DEMO,
} from "./types";
import getValueFromAttrsResponsives from "../../../utils/getValueFromAttrsResponsives";
import MyDimensionsBoxControl from "./MyDimensionsUnitControl";

interface Props {
	className?: string;
	dimensionControl: MyDimensionsPaddingControlData;
	setAttrs__dimensions: (data: MyDimensionsPaddingControlData) => void;
    paddingLabel?: string;
}

const MyDimensionsPaddingControl: FC<Props> = ({
	className = "space-y-5",
	dimensionControl = MY_DIMENSIONS_PADDING_CONTROL_DEMO,
	setAttrs__dimensions,
    paddingLabel = __("Padding", "boostify-blocks"),
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//
	const { padding: paddingProps } = dimensionControl;

	const { currentDeviceValue: padding } = getValueFromAttrsResponsives(
		paddingProps,
		deviceType
	);

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
						{paddingLabel}
					</MyLabelControl>
				}
				values={padding || {}}
				onChange={handleChangePadding}
				min={0}
			/>
		</div>
	);
};

export default MyDimensionsPaddingControl;
