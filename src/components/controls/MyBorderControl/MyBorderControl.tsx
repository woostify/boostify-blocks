import React, { FC } from "react";
import {
	// @ts-ignore
	__experimentalBorderBoxControl as BorderBoxControl,
} from "@wordpress/components";
// @ts-ignore
import { __experimentalBorderRadiusControl as BorderRadiusControl } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import MyColorPicker from "../MyColorPicker/MyColorPicker";
import MyLabelControl from "../MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../../../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../../../utils/getValueFromAttrsResponsives";
import {
	BorderMainSettings,
	BorderRadiusSettings,
	DEFAULT_BORDER_RADIUS,
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "./types";

interface Props {
	className?: string;
	borderControl: MyBorderControlData;
	setAttrs__border: (data: MyBorderControlData) => void;
}

const MyBorderControl: FC<Props> = ({
	className = "space-y-4",
	borderControl = MY_BORDER_CONTROL_DEMO,
	setAttrs__border,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//
	const {
		mainSettings: mainSettingsProps,
		hoverColor: hoverColorProps,
		radius: radiusProps,
	} = borderControl;

	const handleChangeBorder = (newBorders: BorderMainSettings) => {
		setAttrs__border({
			...borderControl,
			mainSettings: newBorders,
		});
	};
	const handleChangeBorderHoverColor = (hoverColor: string) => {
		setAttrs__border({
			...borderControl,
			hoverColor,
		});
	};

	const handleChangeBorderRadius = (newRadius: BorderRadiusSettings) => {
		// Clean up untouched legacy { Desktop: "0", Tablet: "0", Mobile: "0" }
		// defaults when editing Desktop so Tablet/Mobile cascade from Desktop
		// without locking Mobile when Tablet is customized later.
		const isUntouchedLegacyZero =
			radiusProps?.Desktop === "0" &&
			radiusProps?.Tablet === "0" &&
			radiusProps?.Mobile === "0";

		if (deviceType === "Desktop") {
			const nextDesktop =
				newRadius === undefined ? DEFAULT_BORDER_RADIUS : newRadius;
			setAttrs__border({
				...borderControl,
				radius: isUntouchedLegacyZero
					? { Desktop: nextDesktop }
					: { ...radiusProps, Desktop: nextDesktop },
			});
			return;
		}

		// Tablet / Mobile: only update the active device; clearing reverts it to cascade.
		const nextRadius = { ...radiusProps };
		if (newRadius === undefined) {
			delete nextRadius[deviceType];
		} else {
			nextRadius[deviceType] = newRadius;
		}
		setAttrs__border({
			...borderControl,
			radius: nextRadius,
		});
	};

	const RADIUS: BorderRadiusSettings =
		getValueFromAttrsResponsives(radiusProps, deviceType)
			.currentDeviceValue ?? DEFAULT_BORDER_RADIUS;

	return (
		<div className={className}>
			<BorderBoxControl
				label={__("Border")}
				onChange={handleChangeBorder}
				value={mainSettingsProps}
				colors={[]}
				enableAlpha={true}
				// enableStyle={ showBorderStyle }
				popoverOffset={40}
				popoverPlacement="left-start"
				__experimentalHasMultipleOrigins={true}
				__experimentalIsRenderedInSidebar={true}
				size={"__unstable-large"}
				className="wcb-BorderBoxControl"
			/>

			<MyColorPicker
				label={__("Hover border color", "boostify-blocks")}
				onChange={handleChangeBorderHoverColor}
				color={hoverColorProps}
			/>

			<div className="MyBorderControl__BorderRadiusControl">
				<MyLabelControl className="mb-2" hasResponsive>
					{__("Border radius", "boostify-blocks")}
				</MyLabelControl>
				<BorderRadiusControl
					key={deviceType}
					values={RADIUS}
					onChange={(value: any) => {
						handleChangeBorderRadius(value);
					}}
					label={""}
					// label={
					// 	<MyLabelControl className="" hasResponsive>
					// 		{__("Border radius", "boostify-blocks")}
					// 	</MyLabelControl>
					// }
				/>
			</div>
		</div>
	);
};

export default MyBorderControl;
