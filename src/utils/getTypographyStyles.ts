import { CSSObject } from "@emotion/react";
import { MyTypographyControlData } from "../components/controls/MyTypographyControl/types";
import { DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES } from "../________";
import { loadGoogleFont } from "./font";
import checkResponsiveValueForOptimizeCSS from "./checkResponsiveValueForOptimizeCSS";

export type TypographyDeviceType = "Desktop" | "Tablet" | "Mobile";

interface Params {
	typography: MyTypographyControlData;
	className: string;
	deviceType?: TypographyDeviceType | null;
}

const pickDefined = <T,>(...values: (T | undefined | null)[]): T | undefined =>
	values.find((v): v is T => v !== undefined && v !== null && v !== "");

const pickDeviceTypographyValue = <T,>(
	deviceType: TypographyDeviceType,
	mobile: T | undefined,
	tablet: T | undefined,
	desktop: T | undefined
): T | undefined => {
	if (deviceType === "Mobile") {
		return pickDefined(mobile, tablet, desktop);
	}
	if (deviceType === "Tablet") {
		return pickDefined(tablet, desktop, mobile);
	}
	return pickDefined(desktop, tablet, mobile);
};

const getTypographyStyles = ({
	typography,
	className,
	deviceType,
}: Params): CSSObject => {
	if (!typography || !className) {
		return {};
	}
	const {
		appearance,
		fontFamily,
		fontSizes,
		letterSpacing,
		lineHeight,
		textDecoration,
		textTransform,
	} = typography;

	const effectiveFontFamily =
		fontFamily && fontFamily !== "Default" ? fontFamily : undefined;

	if (effectiveFontFamily) {
		loadGoogleFont(effectiveFontFamily);
	}

	const { media_desktop, media_tablet } = DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
	//
	const fontSize_Desktop = fontSizes?.Desktop;
	const fontSize_Tablet = fontSizes?.Tablet || fontSize_Desktop;
	const fontSize_Mobile = fontSizes?.Mobile || fontSize_Tablet;
	//
	const lineHeight_Desktop = lineHeight?.Desktop;
	const lineHeight_Tablet = lineHeight?.Tablet || lineHeight_Desktop;
	const lineHeight_Mobile = lineHeight?.Mobile || lineHeight_Tablet;
	//
	const letterSpacing_Desktop = letterSpacing?.Desktop;
	const letterSpacing_Tablet = letterSpacing?.Tablet || letterSpacing_Desktop;
	const letterSpacing_Mobile = letterSpacing?.Mobile || letterSpacing_Tablet;
	//

	//
	const {
		mobile_v: fontSize_Mobile_new,
		tablet_v: fontSize_Tablet_new,
		desktop_v: fontSize_Desktop_new,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: fontSize_Mobile,
		tablet_v: fontSize_Tablet,
		desktop_v: fontSize_Desktop,
	});
	const {
		mobile_v: lineHeight_Mobile_new,
		tablet_v: lineHeight_Tablet_new,
		desktop_v: lineHeight_Desktop_new,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: lineHeight_Mobile,
		tablet_v: lineHeight_Tablet,
		desktop_v: lineHeight_Desktop,
	});
	const {
		mobile_v: letterSpacing_Mobile_new,
		tablet_v: letterSpacing_Tablet_new,
		desktop_v: letterSpacing_Desktop_new,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: letterSpacing_Mobile,
		tablet_v: letterSpacing_Tablet,
		desktop_v: letterSpacing_Desktop,
	});
	//

	const isDefaultAppearance =
		!appearance?.key ||
		appearance?.key === "default" ||
		appearance?.name?.toLowerCase() === "default";
	const fontWeight = isDefaultAppearance
		? undefined
		: appearance?.style?.fontWeight;
	const fontStyle = isDefaultAppearance
		? undefined
		: appearance?.style?.fontStyle;

	const baseStyles = {
		fontFamily: effectiveFontFamily,
		fontWeight: fontWeight,
		fontStyle: fontStyle,
		textDecoration,
		textTransform,
	};

	if (deviceType) {
		return {
			[`${className}`]: {
				...baseStyles,
				fontSize: pickDeviceTypographyValue(
					deviceType,
					fontSize_Mobile,
					fontSize_Tablet,
					fontSize_Desktop
				),
				lineHeight: pickDeviceTypographyValue(
					deviceType,
					lineHeight_Mobile,
					lineHeight_Tablet,
					lineHeight_Desktop
				),
				letterSpacing: pickDeviceTypographyValue(
					deviceType,
					letterSpacing_Mobile,
					letterSpacing_Tablet,
					letterSpacing_Desktop
				),
			},
		};
	}

	return {
		[`${className}`]: {
			...baseStyles,
			//
			fontSize: fontSize_Mobile_new ?? undefined,
			lineHeight: lineHeight_Mobile_new ?? undefined,
			letterSpacing: letterSpacing_Mobile_new ?? undefined,
			[`@media (min-width: ${media_tablet})`]:
				fontSize_Tablet_new || lineHeight_Tablet_new || letterSpacing_Tablet_new
					? {
							fontSize: fontSize_Tablet_new ?? undefined,
							lineHeight: lineHeight_Tablet_new ?? undefined,
							letterSpacing: letterSpacing_Tablet_new ?? undefined,
					  }
					: undefined,
			[`@media (min-width: ${media_desktop})`]:
				fontSize_Desktop_new ||
				lineHeight_Desktop_new ||
				letterSpacing_Desktop_new
					? {
							fontSize: fontSize_Desktop_new ?? undefined,
							lineHeight: lineHeight_Desktop_new ?? undefined,
							letterSpacing: letterSpacing_Desktop_new ?? undefined,
					  }
					: undefined,
		},
	};
};

export default getTypographyStyles;
