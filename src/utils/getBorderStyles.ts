import { CSSObject } from "@emotion/react";
import {
	BorderMain4Side,
	BorderMainSingleSide,
	MyBorderControlData,
} from "../components/controls/MyBorderControl/types";
import getBorderRadiusStyles from "./getBorderRadiusStyles";

interface Params {
	border: Partial<MyBorderControlData>;
	className: string;
	isWithRadius?: boolean;
	isWithIframe?: boolean;
}

const getBorderStyles = ({
	border,
	className,
	isWithRadius = false,
	isWithIframe = false,
}: Params): CSSObject => {
	const { hoverColor, mainSettings, radius } = border;
	//

	// MAIN BORDER
	let CSSObject: CSSObject = { [`${className}`]: {} };
	if (mainSettings) {
		const as4Side = mainSettings as BorderMain4Side;
		if ("top" in as4Side || "right" in as4Side || "bottom" in as4Side || "left" in as4Side) {
			const { bottom, left, right, top } = as4Side;
			CSSObject = {
				[`${className}`]: {
					...(top ? { borderTop: `${top.width} ${top.style || "none"} ${top.color || ""}` } : {}),
					...(left ? { borderLeft: `${left.width} ${left.style || "none"} ${left.color || ""}` } : {}),
					...(right ? { borderRight: `${right.width} ${right.style || "none"} ${right.color || ""}` } : {}),
					...(bottom ? { borderBottom: `${bottom.width} ${bottom.style || "none"} ${bottom.color || ""}` } : {}),
					"&:hover": {
						borderColor: `${hoverColor}`,
					},
				},
			};
		} else {
			const { color, style, width } = mainSettings as BorderMainSingleSide;

			CSSObject = {
				[`${className}`]: {
					border: `${width} ${style || "none"} ${color || ""}`,
					"&:hover": {
						borderColor: `${hoverColor || ""}`,
					},
				},
			};
		}
	}

	// RAIDUS
	let radiusCSSObject: CSSObject = { [`${className}`]: {} };
	if (isWithRadius && radius) {
		radiusCSSObject = getBorderRadiusStyles({ radius, className, isWithIframe });
	}

	//
	let a = {};
	let b = {};
	if (typeof CSSObject[className] === "object") {
		a = CSSObject[className] || {};
	}
	if (typeof radiusCSSObject[className] === "object") {
		b = radiusCSSObject[className] || {};
	}

	const merged = {
		...a,
		...b,
	};

	// Filter out undefined, null or empty object properties
	const cleanStyles: Record<string, any> = {};
	for (const [k, v] of Object.entries(merged)) {
		if (v !== undefined && v !== null && v !== "" && (typeof v !== "object" || Object.keys(v).length > 0)) {
			cleanStyles[k] = v;
		}
	}

	if (Object.keys(cleanStyles).length === 0) {
		return {};
	}

	return {
		[`${className}`]: cleanStyles,
	};
};

export default getBorderStyles;
