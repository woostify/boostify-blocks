import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import { DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import checkResponsiveValueForOptimizeCSS from "../utils/checkResponsiveValueForOptimizeCSS";

import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";

interface Props extends WcbAttrsForSave {
	deviceType?: ResponsiveDevices;
}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		deviceType = "Desktop",
		// ATTRS OF BLOCK
		general_layout,
		style_desination,
		style_Icon,
		style_title,
		//
		advance_responsiveCondition,
		advance_zIndex,
		general_icon,
		style_dimension,
		advance_motionEffect,
	} = attrs;
	// Get current device type
	const { media_desktop, media_tablet } = DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const INNER_CLASSNAME = `${WRAP_CLASSNAME} > .wcb-icon-list__icon-wrap`;
	const CONTENT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-icon-list__content`;

	if (!uniqueId) {
		return null;
	}

	// Convert text alignment to flex alignment
	const getFlexAlignment = (alignment?: string | number | null) => {
		switch (alignment) {
			case "center":
				return "center";
			case "right":
				return "flex-end";
			case "left":
			default:
				return "flex-start";
		}
	};

	const { textAlignment } = general_layout;

	let ta_desktop = "left";
	let ta_tablet = "left";
	let ta_mobile = "left";

	if (typeof textAlignment === "string") {
		ta_desktop = textAlignment;
		ta_tablet = textAlignment;
		ta_mobile = textAlignment;
	} else if (textAlignment && typeof textAlignment === "object") {
		ta_desktop = textAlignment.Desktop || "left";
		ta_tablet = textAlignment.Tablet || ta_desktop;
		ta_mobile = textAlignment.Mobile || ta_tablet;
	}

	// Active alignment for the currently selected editor device preview
	const activeAlign =
		deviceType === "Mobile"
			? ta_mobile
			: deviceType === "Tablet"
			? ta_tablet
			: ta_desktop;

	const activeFlexAlign = getFlexAlignment(activeAlign);

	return (
		<>
			{/* INNER_CLASSNAME: List Container & Alignment */}
			<Global styles={[
				{
					[`${INNER_CLASSNAME}`]: {
						display: "flex",
						width: "100%",
						flexDirection: general_layout.layout === "vertical" ? "column" : "row",
						...(general_layout.layout === "horizontal"
							? {
								alignItems: general_icon.verticalAlignment === "middle" ? "center" : "flex-start",
								justifyContent: activeFlexAlign,
								[`@media (min-width: ${media_tablet})`]: {
									justifyContent: getFlexAlignment(ta_tablet),
								},
								[`@media (min-width: ${media_desktop})`]: {
									justifyContent: getFlexAlignment(ta_desktop),
								},
							}
							: {
								alignItems: activeFlexAlign,
								[`@media (min-width: ${media_tablet})`]: {
									alignItems: getFlexAlignment(ta_tablet),
								},
								[`@media (min-width: ${media_desktop})`]: {
									alignItems: getFlexAlignment(ta_desktop),
								},
							}),
					},

					[`${WRAP_CLASSNAME} .wcb-icon-list__heading`]: {
						textAlign: activeAlign,
						[`@media (min-width: ${media_tablet})`]: {
							textAlign: ta_tablet,
						},
						[`@media (min-width: ${media_desktop})`]: {
							textAlign: ta_desktop,
						},
					},

					[`${WRAP_CLASSNAME} .wcb-icon-list__designation`]: {
						textAlign: activeAlign,
						[`@media (min-width: ${media_tablet})`]: {
							textAlign: ta_tablet,
						},
						[`@media (min-width: ${media_desktop})`]: {
							textAlign: ta_desktop,
						},
					},

					// Dynamic vertical alignment inside child items in horizontal layout
					...(general_layout.layout === "horizontal"
						? {
							[`${INNER_CLASSNAME} > .wp-block`]: {
								width: "auto !important",
								maxWidth: "100%",
								marginLeft: "0 !important",
								marginRight: "0 !important",
								display: "inline-flex !important",
								flexShrink: 1,
							},
							[`${INNER_CLASSNAME} > .block-list-appender`]: {
								width: "auto !important",
								margin: "0 !important",
								display: "inline-flex !important",
								alignSelf: "center",
								flexShrink: 0,
							},
							[`${INNER_CLASSNAME} .wcb-icon-list__wrap[data-block-type="icon-item"]`]: {
								width: "auto",
								display: "inline-flex",
								alignItems: general_icon.verticalAlignment === "middle" ? "center" : "flex-start",
								flexShrink: 1,
							},
							[`${INNER_CLASSNAME} [data-block-type="icon-item"] .wcb-icon-list__content`]: {
								width: "auto",
								display: "inline-flex",
								flex: "0 1 auto",
								minWidth: 0,
							},
							[`${INNER_CLASSNAME} [data-block-type="icon-item"] .wcb-icon-list__content-title-wrap`]: {
								width: "auto",
								display: "inline-flex",
								alignItems: general_icon.verticalAlignment === "middle" ? "center" : "flex-start",
								minWidth: 0,
							},
							[`${INNER_CLASSNAME} [data-block-type="icon-item"] .wcb-icon-list__content-title`]: {
								flex: "0 1 auto",
								width: "auto",
								minWidth: 0,
							},
							[`${INNER_CLASSNAME} [data-block-type="icon-item"] .wcb-icon-list__heading`]: {
								wordBreak: "break-word",
								overflowWrap: "break-word",
							},
							[`${INNER_CLASSNAME} [data-block-type="icon-item"] .wcb-icon-list__icon-wrap`]: {
								flexShrink: 0,
							},
						}
						: {
							[`${INNER_CLASSNAME} > .wp-block`]: {
								marginLeft: "0 !important",
								marginRight: "0 !important",
							},
						}),

					[`${WRAP_CLASSNAME} .wcb-icon-list__content-title-wrap`]: {
						display:
							general_icon.iconPosition === "leftOfTitle" ||
							general_icon.iconPosition === "rightOfTitle"
								? "inline-flex"
								: "block",
						alignItems: general_icon.verticalAlignment === "middle" ? "center" : "flex-start",
					},

					[`${WRAP_CLASSNAME} .wcb-icon-list__content-title-wrap .wcb-icon-list__icon-wrap`]: {
						alignSelf: general_icon.verticalAlignment === "middle" ? "center" : "flex-start",
						marginTop: general_icon.verticalAlignment === "middle" ? 0 : "0.2em",
						flexShrink: 0,
						order: general_icon.iconPosition === "leftOfTitle" ? 0 : 2,
					},
				},
			]}/>

			<Global
				styles={getPaddingMarginStyles({
					className: WRAP_CLASSNAME,
					margin: style_dimension.margin,
					padding: style_dimension.padding,
				})}
			/>

			{style_dimension.gapBetweenItems?.Desktop ? (
				<Global
					styles={getStyleObjectFromResponsiveAttr({
						className: `${WRAP_CLASSNAME} > .wcb-icon-list__icon-wrap`,
						value: style_dimension.gapBetweenItems,
						prefix: "gap",
					})}
				/>
			) : (
				<Global
					styles={[
						{
							[`${WRAP_CLASSNAME} > .wcb-icon-list__icon-wrap`]: {
								gap: "10px",
							},
						},
					]}
				/>
			)}

			{/* --------- ICON --------- */}
			{general_icon.enableIcon ? (
				<Global
					styles={[
						getPaddingMarginStyles({
							className: `${WRAP_CLASSNAME} .wcb-icon-list__icon`,
							margin: style_Icon.dimensions.margin,
						}),
						getPaddingMarginStyles({
							className: `${WRAP_CLASSNAME} .wcb-icon-list__icon`,
							padding: style_Icon.dimensions.padding,
						}),
						getBorderStyles({
							border: style_Icon.border,
							className: `${WRAP_CLASSNAME} .wcb-icon-list__icon`,
							isWithRadius: true,
						}),
						getStyleObjectFromResponsiveAttr({
							className: `${WRAP_CLASSNAME} .wcb-icon-full`,
							value: style_Icon.iconSize,
							prefix: "width",
							prefix_2: "fontSize",
							prefix_3: "height",
						}),
						{
							[`${WRAP_CLASSNAME} .wcb-icon-full`]: {
								color: style_Icon.color,
								":hover": {
									color: style_Icon.hoverColor,
								},
							},
						},
					]}
				/>
			) : null}

			{/* --------- TITLE --------- */}
			{general_layout.enableTitle ? (
				<Global
					styles={[
						getTypographyStyles({
							typography: style_title.typography,
							className: `${WRAP_CLASSNAME} .wcb-icon-list__heading`,
						}),
						getStyleObjectFromResponsiveAttr({
							className: `${WRAP_CLASSNAME} .wcb-icon-list__heading`,
							value: style_title.marginBottom,
							prefix: "marginBottom",
						}),
						{
							[`${WRAP_CLASSNAME} .wcb-icon-list__heading`]: {
								color: style_title.textColor,
							},
							[`${WRAP_CLASSNAME} .wcb-icon-list__heading:hover`]: {
								color: style_title.textColorHover,
							},
						},
					]}
				/>
			) : null}


			{/* --------- DESIGNATION --------- */}
			{general_layout.enablePrefix ? (
				<Global
					styles={[
						getTypographyStyles({
							typography: style_desination.typography,
							className: `${WRAP_CLASSNAME} .wcb-icon-list__designation`,
						}),
						getStyleObjectFromResponsiveAttr({
							className: `${WRAP_CLASSNAME} .wcb-icon-list__designation`,
							value: style_desination.marginBottom,
							prefix: "marginBottom",
						}),
						{
							[`${WRAP_CLASSNAME} .wcb-icon-list__designation`]: {
								color: style_desination.textColor,
							},
						},
					]}
				/>
			) : null}

			{/* ADVANCE  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_responsiveCondition,
					advance_motionEffect,
					advance_zIndex,
					className: WRAP_CLASSNAME,
				})}
			/>
		</>
	);
};

export default React.memo(GlobalCss);
