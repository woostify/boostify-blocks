import { css } from "@emotion/react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import { DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES } from "../________";
import getValueFromAttrsResponsives from "./getValueFromAttrsResponsives";
import checkResponsiveValueForOptimizeCSS from "./checkResponsiveValueForOptimizeCSS";

interface Params {
	padding?: HasResponsive<DimensionSettings>;
	margin?: HasResponsive<DimensionSettings>;
	className: string;
}

const getPaddingMarginStyles = ({ className, padding, margin }: Params) => {
	const { media_desktop, media_tablet } = DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;

	const {
		value_Desktop: margin_Desktop,
		value_Tablet: margin_Tablet,
		value_Mobile: margin_Mobile,
	} = getValueFromAttrsResponsives(margin);
	//

	const {
		value_Desktop: padding_Desktop,
		value_Tablet: padding_Tablet,
		value_Mobile: padding_Mobile,
	} = getValueFromAttrsResponsives(padding);
	//

	//
	const {
		mobile_v: padding_Mobile_top,
		tablet_v: padding_Tablet_top,
		desktop_v: padding_Desktop_top,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: padding_Mobile?.top,
		tablet_v: padding_Tablet?.top,
		desktop_v: padding_Desktop?.top,
	});
	const {
		mobile_v: padding_Mobile_left,
		tablet_v: padding_Tablet_left,
		desktop_v: padding_Desktop_left,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: padding_Mobile?.left,
		tablet_v: padding_Tablet?.left,
		desktop_v: padding_Desktop?.left,
	});
	const {
		mobile_v: padding_Mobile_right,
		tablet_v: padding_Tablet_right,
		desktop_v: padding_Desktop_right,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: padding_Mobile?.right,
		tablet_v: padding_Tablet?.right,
		desktop_v: padding_Desktop?.right,
	});
	const {
		mobile_v: padding_Mobile_bottom,
		tablet_v: padding_Tablet_bottom,
		desktop_v: padding_Desktop_bottom,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: padding_Mobile?.bottom,
		tablet_v: padding_Tablet?.bottom,
		desktop_v: padding_Desktop?.bottom,
	});
	//
	const {
		mobile_v: margin_Mobile_top,
		tablet_v: margin_Tablet_top,
		desktop_v: margin_Desktop_top,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: margin_Mobile?.top,
		tablet_v: margin_Tablet?.top,
		desktop_v: margin_Desktop?.top,
	});
	const {
		mobile_v: margin_Mobile_left,
		tablet_v: margin_Tablet_left,
		desktop_v: margin_Desktop_left,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: margin_Mobile?.left,
		tablet_v: margin_Tablet?.left,
		desktop_v: margin_Desktop?.left,
	});
	const {
		mobile_v: margin_Mobile_right,
		tablet_v: margin_Tablet_right,
		desktop_v: margin_Desktop_right,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: margin_Mobile?.right,
		tablet_v: margin_Tablet?.right,
		desktop_v: margin_Desktop?.right,
	});
	const {
		mobile_v: margin_Mobile_bottom,
		tablet_v: margin_Tablet_bottom,
		desktop_v: margin_Desktop_bottom,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: margin_Mobile?.bottom,
		tablet_v: margin_Tablet?.bottom,
		desktop_v: margin_Desktop?.bottom,
	});

	const buildSideRules = (
		pTop?: string | number | null,
		pRight?: string | number | null,
		pBottom?: string | number | null,
		pLeft?: string | number | null,
		mTop?: string | number | null,
		mRight?: string | number | null,
		mBottom?: string | number | null,
		mLeft?: string | number | null
	): string[] => {
		const rules: string[] = [];
		if (pTop) rules.push(`padding-top: ${pTop} !important;`);
		if (pRight) rules.push(`padding-right: ${pRight} !important;`);
		if (pBottom) rules.push(`padding-bottom: ${pBottom} !important;`);
		if (pLeft) rules.push(`padding-left: ${pLeft} !important;`);
		if (mTop) rules.push(`margin-top: ${mTop} !important;`);
		if (mRight) rules.push(`margin-right: ${mRight};`);
		if (mBottom) rules.push(`margin-bottom: ${mBottom} !important;`);
		if (mLeft) rules.push(`margin-left: ${mLeft};`);
		return rules;
	};

	const mobileRules = buildSideRules(
		padding_Mobile_top,
		padding_Mobile_right,
		padding_Mobile_bottom,
		padding_Mobile_left,
		margin_Mobile_top,
		margin_Mobile_right,
		margin_Mobile_bottom,
		margin_Mobile_left
	);

	const tabletRules = buildSideRules(
		padding_Tablet_top,
		padding_Tablet_right,
		padding_Tablet_bottom,
		padding_Tablet_left,
		margin_Tablet_top,
		margin_Tablet_right,
		margin_Tablet_bottom,
		margin_Tablet_left
	);

	const desktopRules = buildSideRules(
		padding_Desktop_top,
		padding_Desktop_right,
		padding_Desktop_bottom,
		padding_Desktop_left,
		margin_Desktop_top,
		margin_Desktop_right,
		margin_Desktop_bottom,
		margin_Desktop_left
	);

	if (mobileRules.length === 0 && tabletRules.length === 0 && desktopRules.length === 0) {
		return css``;
	}

	let cssString = `body ${className} {\n`;
	if (mobileRules.length > 0) {
		cssString += `\t${mobileRules.join("\n\t")}\n`;
	}
	if (tabletRules.length > 0) {
		cssString += `\t@media (min-width: ${media_tablet}) {\n\t\t${tabletRules.join("\n\t\t")}\n\t}\n`;
	}
	if (desktopRules.length > 0) {
		cssString += `\t@media (min-width: ${media_desktop}) {\n\t\t${desktopRules.join("\n\t\t")}\n\t}\n`;
	}
	cssString += `}`;

	return css`${cssString}`;
};

export default getPaddingMarginStyles;
