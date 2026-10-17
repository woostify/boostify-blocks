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

const formatSideBorder = (side?: Partial<BorderMainSingleSide>): string | undefined => {
	if (!side) return undefined;
	const { width, style, color } = side;

	if (style === "none") {
		return "none";
	}

	// Width must be specified and non-zero
	if (
		width === undefined ||
		width === null ||
		width === "" ||
		width === "0" ||
		width === "0px" ||
		width === "0rem" ||
		width === "0em" ||
		parseFloat(String(width)) <= 0
	) {
		return undefined;
	}

	const borderStyle = style || "solid";
	const borderColor = color ? ` ${color}` : "";
	return `${width} ${borderStyle}${borderColor}`.trim();
};

const getBorderStyles = ({
	border,
	className,
	isWithRadius = false,
	isWithIframe = false,
}: Params): CSSObject => {
	if (!border) return {};
	const { hoverColor, mainSettings, radius } = border;

	// MAIN BORDER
	let CSSObject: CSSObject = { [`${className}`]: {} };
	if (mainSettings) {
		const as4Side = mainSettings as BorderMain4Side;
		if ("top" in as4Side || "right" in as4Side || "bottom" in as4Side || "left" in as4Side) {
			const { bottom, left, right, top } = as4Side;
			const borderTop = formatSideBorder(top);
			const borderRight = formatSideBorder(right);
			const borderBottom = formatSideBorder(bottom);
			const borderLeft = formatSideBorder(left);

			const sideStyles: Record<string, string> = {};
			if (borderTop) sideStyles.borderTop = borderTop;
			if (borderRight) sideStyles.borderRight = borderRight;
			if (borderBottom) sideStyles.borderBottom = borderBottom;
			if (borderLeft) sideStyles.borderLeft = borderLeft;

			CSSObject = {
				[`${className}`]: {
					...sideStyles,
					...(hoverColor
						? {
								"&:hover": {
									borderColor: `${hoverColor}`,
								},
						  }
						: {}),
				},
			};
		} else {
			const singleBorder = formatSideBorder(mainSettings as BorderMainSingleSide);

			CSSObject = {
				[`${className}`]: {
					...(singleBorder ? { border: singleBorder } : {}),
					...(hoverColor
						? {
								"&:hover": {
									borderColor: `${hoverColor || ""}`,
								},
						  }
						: {}),
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
