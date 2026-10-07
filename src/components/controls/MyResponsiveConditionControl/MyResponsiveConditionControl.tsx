import { FormToggle, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";

export interface MyResponsiveConditionControlData {
	isHiddenOnDesktop: boolean;
	isHiddenOnTablet: boolean;
	isHiddenOnMobile: boolean;
}
export const RESPONSIVE_CONDITON_DEMO: MyResponsiveConditionControlData = {
	isHiddenOnDesktop: false,
	isHiddenOnTablet: false,
	isHiddenOnMobile: false,
};

interface Props {
	className?: string;
	responsiveConditionControl: MyResponsiveConditionControlData;
	setAttrs__responsiveCondition: (
		data: MyResponsiveConditionControlData
	) => void;
}
const MyResponsiveConditionControl: FC<Props> = ({
	className = "space-y-4",
	responsiveConditionControl = RESPONSIVE_CONDITON_DEMO,
	setAttrs__responsiveCondition,
}) => {
	const rc = {
		...RESPONSIVE_CONDITON_DEMO,
		...(responsiveConditionControl || {}),
	};
	const { isHiddenOnDesktop, isHiddenOnMobile, isHiddenOnTablet } = rc;

	const toggleHiddenOnDesktop = (e: boolean) => {
		setAttrs__responsiveCondition({
			...rc,
			isHiddenOnDesktop: Boolean(e),
		});
	};
	const toggleHiddenOnTablet = (e: boolean) => {
		setAttrs__responsiveCondition({
			...rc,
			isHiddenOnTablet: Boolean(e),
		});
	};
	const toggleHiddenOnMobile = (e: boolean) => {
		setAttrs__responsiveCondition({
			...rc,
			isHiddenOnMobile: Boolean(e),
		});
	};
	return (
		<div className={className}>
			<ToggleControl
				label={__("Hide on Desktop", "boostify-blocks")}
				checked={Boolean(isHiddenOnDesktop)}
				onChange={toggleHiddenOnDesktop}
				className="mb-0"
			/>
			<ToggleControl
				label={__("Hide on Tablet", "boostify-blocks")}
				checked={Boolean(isHiddenOnTablet)}
				onChange={toggleHiddenOnTablet}
			/>
			<ToggleControl
				label={__("Hide on Mobile", "boostify-blocks")}
				checked={Boolean(isHiddenOnMobile)}
				onChange={toggleHiddenOnMobile}
			/>
		</div>
	);
};

export default MyResponsiveConditionControl;
