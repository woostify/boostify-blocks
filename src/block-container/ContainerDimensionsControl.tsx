import React, { FC } from "react";
import { __ } from "@wordpress/i18n";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import {
	DimensionSettings,
	MyDimensionsControlData,
	MY_DIMENSIONS_CONTROL_DEMO,
} from "../components/controls/MyDimensionsControl/types";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import MyDimensionsBoxControl from "../components/controls/MyDimensionsControl/MyDimensionsUnitControl";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import ContainerMarginControl from "./ContainerMarginControl";

// Container-only version of MyDimensionsControl: same gaps/padding, but
// margin accepts negative values (see ContainerMarginControl).

interface Props {
	className?: string;
	dimensionControl: MyDimensionsControlData;
	setAttrs__dimensions: (data: MyDimensionsControlData) => void;
}

const ContainerDimensionsControl: FC<Props> = ({
	className = "space-y-5",
	dimensionControl = MY_DIMENSIONS_CONTROL_DEMO,
	setAttrs__dimensions,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//
	const {
		colunmGap: colunmGapProps,
		rowGap: rowGapProps,
		margin: marginProps,
		padding: paddingProps,
	} = dimensionControl;

	const { currentDeviceValue: colunmGap } = getValueFromAttrsResponsives(
		colunmGapProps,
		deviceType
	);
	const { currentDeviceValue: rowGap } = getValueFromAttrsResponsives(
		rowGapProps,
		deviceType
	);
	const { currentDeviceValue: margin } = getValueFromAttrsResponsives(
		marginProps,
		deviceType
	);
	const { currentDeviceValue: padding } = getValueFromAttrsResponsives(
		paddingProps,
		deviceType
	);

	//
	const setRowGrap = (value: string) => {
		setAttrs__dimensions({
			...dimensionControl,
			rowGap: { ...rowGapProps, [deviceType]: value },
		});
	};
	const setColumnGap = (value: string) => {
		setAttrs__dimensions({
			...dimensionControl,
			colunmGap: { ...colunmGapProps, [deviceType]: value },
		});
	};
	const handleChangeMargin = (value: DimensionSettings) => {
		setAttrs__dimensions({
			...dimensionControl,
			margin: { ...marginProps, [deviceType]: value },
		});
	};
	const handleChangePadding = (value: DimensionSettings) => {
		setAttrs__dimensions({
			...dimensionControl,
			padding: { ...paddingProps, [deviceType]: value },
		});
	};

	return (
		<div className={className}>
			<MySpacingSizesControl
				onChange={setRowGrap}
				value={rowGap || ""}
				label={__("Row Gap", "boostify-blocks")}
			/>
			<MySpacingSizesControl
				onChange={setColumnGap}
				value={colunmGap || ""}
				label={__("Column Gap", "boostify-blocks")}
			/>

			<MyDimensionsBoxControl
				label={
					<MyLabelControl className="" hasResponsive>
						{__("Padding", "boostify-blocks")}
					</MyLabelControl>
				}
				values={padding || {}}
				onChange={handleChangePadding}
			/>
			<ContainerMarginControl
				label={
					<MyLabelControl className="" hasResponsive>
						{__("Margin", "boostify-blocks")}
					</MyLabelControl>
				}
				values={margin || {}}
				onChange={handleChangeMargin}
			/>
		</div>
	);
};

export default ContainerDimensionsControl;
