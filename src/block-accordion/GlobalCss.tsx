import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBackgroundColorGradientStyles from "../utils/getBackgroundColorGradientStyles";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import getBorderStyles from "../utils/getBorderStyles";
import { DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./attributes";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";

interface Props extends WcbAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		general_general,
		general_icon,
		style_answer,
		style_container,
		style_question,
		style_icon,
		style_dimension,
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;
	const { media_desktop, media_tablet } = DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid="${uniqueId}"]`;
	const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-accordion__inner`;
	const ITEM_WRAP = `${WRAP_CLASSNAME} .wcb-accordion-item__wrap`;
	const ITEM_TRIGGER = `${WRAP_CLASSNAME} .wcb-accordion-item__trigger`;
	const ITEM_TITLE = `${WRAP_CLASSNAME} .wcb-accordion-item__title`;
	const ITEM_PANEL = `${WRAP_CLASSNAME} .wcb-accordion-item__panel`;
	const ITEM_CONTENT = `${WRAP_CLASSNAME} .wcb-accordion-item__content`;
	const ITEM_ICON = `${WRAP_CLASSNAME} .wcb-accordion-item__icon`;
	const ITEM_SEPARATOR = `${WRAP_CLASSNAME} .wcb-accordion-item__separator`;
	const ITEM_TITLE_WRAP = `${WRAP_CLASSNAME} .wcb-accordion-item__title-wrap`;
	const ITEM_TITLE_ICON = `${WRAP_CLASSNAME} .wcb-accordion-item__title-icon`;

	let {
		value_Desktop: iconSize_desktop,
		value_Tablet: iconSize_tablet,
		value_Mobile: iconSize_mobile,
	} = getValueFromAttrsResponsives(style_icon?.size);

	const IconSizeConverted: HasResponsive<string> = {
		Desktop: (iconSize_desktop || 20) + "px",
		Tablet: (iconSize_tablet || 20) + "px",
		Mobile: (iconSize_mobile || 20) + "px",
	};

	if (!uniqueId) {
		return null;
	}

	const activeColor =
		style_question?.colorActive && style_question?.colorActive !== "#111827"
			? style_question.colorActive
			: "#ffffff";
	const activeBg =
		style_question?.backgroundColorActive &&
		style_question?.backgroundColorActive !== "#f3f4f6"
			? style_question.backgroundColorActive
			: "#4a5568";

	const safeColGap = React.useMemo(() => {
		if (!style_icon?.colGap) return style_icon?.colGap;
		const cap = (val: any) => {
			if (typeof val === "number") return Math.min(val, 80);
			if (typeof val === "string") {
				const num = parseFloat(val);
				if (!isNaN(num) && num > 80 && (val.includes("px") || !/[a-z%]/i.test(val))) {
					return "80px";
				}
			}
			return val;
		};
		if (typeof style_icon.colGap === "object") {
			return {
				Desktop: cap((style_icon.colGap as any).Desktop),
				Tablet: cap((style_icon.colGap as any).Tablet),
				Mobile: cap((style_icon.colGap as any).Mobile),
			};
		}
		return cap(style_icon.colGap);
	}, [style_icon?.colGap]);

	const inner_getGridCol = (): CSSObject => {
		const { value_Desktop = 1, value_Tablet = 1, value_Mobile = 1 } =
			getValueFromAttrsResponsives(general_general?.columns);

		return {
			[INNER_CLASSNAME]: {
				display: "grid",
				alignItems: "start",
				gridTemplateColumns: `repeat(${value_Mobile || 1}, minmax(0, 1fr))`,
				[`@media (min-width: ${media_tablet})`]: {
					gridTemplateColumns: `repeat(${value_Tablet || 1}, minmax(0, 1fr))`,
				},
				[`@media (min-width: ${media_desktop})`]: {
					gridTemplateColumns: `repeat(${value_Desktop || 1}, minmax(0, 1fr))`,
				},
			},
			...(Number(value_Desktop) > 1 || Number(value_Tablet) > 1
				? {
						[ITEM_WRAP]: {
							height: "fit-content",
						},
				  }
				: {}),
		};
	};

	return (
		<>
			{/* ------- WRAP ------- */}
			<Global
				styles={[
					getPaddingMarginStyles({
						className: WRAP_CLASSNAME,
						padding: style_dimension?.padding,
						margin: style_dimension?.margin,
					}),
				]}
			/>

			{/* ------- INNER ------- */}
			<Global
				styles={[
					inner_getGridCol(),
					getStyleObjectFromResponsiveAttr({
						className: INNER_CLASSNAME,
						value: style_container?.rowGap,
						prefix: "rowGap",
					}),
					getStyleObjectFromResponsiveAttr({
						className: INNER_CLASSNAME,
						value: style_container?.colunmGap,
						prefix: "columnGap",
					}),
					{
						[INNER_CLASSNAME]: {
							textAlign: general_general?.textAlignment || "left",
						},
					},
				]}
			/>

			{/* ------- ACCORDION ITEM WRAP ------- */}
			<Global
				styles={[
					getBackgroundColorGradientStyles({
						className: ITEM_WRAP,
						background: style_container?.background,
					}),
					getBorderStyles({
						border: style_question?.border || style_container?.border,
						className: ITEM_WRAP,
						isWithRadius: true,
					}),
					getBorderStyles({
						border: style_question?.border || style_container?.border,
						className: ITEM_SEPARATOR,
						isWithRadius: true,
					}),
				]}
			/>

			{/* ------ HEADER / TRIGGER --------- */}
			<Global
				styles={[
					getTypographyStyles({
						className: ITEM_TRIGGER,
						typography: style_question?.typography,
					}),
					getPaddingMarginStyles({
						className: ITEM_TRIGGER,
						padding: style_question?.padding,
					}),
					getStyleObjectFromResponsiveAttr({
						className: ITEM_TRIGGER,
						value: safeColGap,
						prefix: "gap",
					}),
					{
						[ITEM_TRIGGER]: {
							color: style_question?.color,
							backgroundColor: style_question?.backgroundColor,
							":hover, :focus": {
								color: style_question?.colorHover,
								backgroundColor: style_question?.backgroundColorHover,
							},
						},
						[`${ITEM_WRAP}.is-open .wcb-accordion-item__trigger`]: {
							color: activeColor,
							backgroundColor: activeBg,
						},
					},
				]}
			/>

			{/* ------ ICON --------- */}
			<Global
				styles={[
					getStyleObjectFromResponsiveAttr({
						className: `${ITEM_ICON}, ${ITEM_ICON}:before`,
						value: IconSizeConverted,
						prefix: "fontSize",
					}),
					getStyleObjectFromResponsiveAttr({
						className: `${ITEM_ICON}, ${ITEM_ICON} svg`,
						value: IconSizeConverted,
						prefix: "height",
						prefix_2: "width",
					}),
					{
						[ITEM_ICON]: {
							color: style_icon?.color,
						},
						[`${ITEM_TRIGGER}:hover .wcb-accordion-item__icon, ${ITEM_ICON}:hover`]: {
							color: style_icon?.colorHover || style_icon?.color,
						},
						[`${ITEM_WRAP}.is-open .wcb-accordion-item__icon`]: {
							color: style_icon?.activeColor || activeColor || "#ffffff",
						},
					},
				]}
			/>

			{/* ------ PANEL / CONTENT --------- */}
			<Global
				styles={[
					getTypographyStyles({
						className: ITEM_CONTENT,
						typography: style_answer?.typography,
					}),
					// Same typography for h1-h6 inside the content (theme/editor set their
					// own heading font + size). Specificity (0,2,0) beats those rules but
					// stays below the Heading block's own selectors (0,3,0).
					getTypographyStyles({
						className: `.${uniqueId} .wcb-accordion-item__content :where(h1, h2, h3, h4, h5, h6)`,
						typography: style_answer?.typography,
					}),
					getPaddingMarginStyles({
						className: ITEM_CONTENT,
						padding: style_answer?.padding,
					}),
					{
						[ITEM_PANEL]: {
							backgroundColor: style_answer?.backgroundColor,
						},
						[ITEM_CONTENT]: {
							color: style_answer?.color,
							backgroundColor: style_answer?.backgroundColor,
						},
						// Headings get their own colour from the editor/theme (h1-h6 rule),
						// so inheriting from the content wrapper is not enough.
						// Specificity (0,2,0) beats that global rule (0,1,0) but stays below
						// the Heading block's own colour (0,3,0), so a colour set on the
						// Heading block still wins.
						...(style_answer?.color
							? {
									[`.${uniqueId} .wcb-accordion-item__content :where(h1, h2, h3, h4, h5, h6)`]: {
										color: style_answer.color,
									},
							  }
							: {}),
					},
				]}
			/>

			{/* ADVANCE */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_motionEffect,
					advance_responsiveCondition,
					advance_zIndex,
					className: WRAP_CLASSNAME,
				})}
			/>
		</>
	);
};

export default React.memo(GlobalCss);
