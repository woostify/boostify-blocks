import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import getBackgroundColorGradientStyles from "../utils/getBackgroundColorGradientStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getBoxShadowStyles from "../utils/getBoxShadowStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { WcbAttrsForSave } from "./Save";
import { DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES } from "../________.ts";

interface Props extends WcbAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_content,
		general_preset,
		style_background,
		style_border,
		style_boxshadow,
		style_dimension,
		style_icon,
		style_text,
		//
		advance_responsiveCondition,
		advance_zIndex,
	} = attrs;

	const {
		buttonInheritFromTheme,
		buttonTheme,
	} = DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
	const isInheritFromTheme = general_content.isInheritFromTheme;
	const themeLayoutGlobal = window.boostify_blocks_layout_global_settings;
	const inheritFromTheme = buttonInheritFromTheme === "true" ? true : false;
	const finalIsInheritFromTheme = isInheritFromTheme === undefined ? inheritFromTheme : isInheritFromTheme;
	// Button Theme Style
	const background_color =
		themeLayoutGlobal?.buttonTheme?.backgroundColor ||
		buttonTheme?.backgroundColor ||
		"#0073aa";
	const background_color_hover =
		themeLayoutGlobal?.buttonTheme?.backgroundColorHover ||
		buttonTheme?.backgroundColorHover ||
		"#3a3a3a";
	const text_color =
		themeLayoutGlobal?.buttonTheme?.textColor ||
		buttonTheme?.textColor ||
		"#ffffff";
	const text_color_hover =
		themeLayoutGlobal?.buttonTheme?.textColorHover ||
		buttonTheme?.textColorHover ||
		"#ffffff";
	const border_radius =
		themeLayoutGlobal?.buttonTheme?.borderRadius ||
		buttonTheme?.borderRadius ||
		"50px";

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const BUTTON_CLASSNAME = `${WRAP_CLASSNAME} .wcb-button__main`;
	const BUTTON_TEXT = `${WRAP_CLASSNAME} .wcb-button__text`;
	const BUTTON_ICON = `${WRAP_CLASSNAME} .wcb-button__icon`;

	// ------------------- WRAP DIV

	let {
		value_Desktop: iconSize_desktop,
		value_Tablet: iconSize_tablet,
		value_Mobile: iconSize_mobile,
	} = getValueFromAttrsResponsives(style_icon.size);

	const IconSizeConverted: HasResponsive<string> = {
		Desktop: iconSize_desktop + "px",
		Tablet: iconSize_tablet + "px",
		Mobile: iconSize_mobile + "px",
	};	

	if (!uniqueId) {
		return null;
	}
	return (
		<>
			{/* <Global styles={getDivWrapStyles()} /> */}

			{finalIsInheritFromTheme ? (
				// {/* Button Theme Styles  */}
				<Global
					styles={[
						{
							[BUTTON_CLASSNAME]: {
								backgroundColor: background_color,
								borderRadius: border_radius,
								":hover": {
									backgroundColor: background_color_hover,
								},
							},
						},
					]}
				/>
			) : (
				<Global
					styles={[
						// BACKGROUND COLOR & GRADIENT
						getBackgroundColorGradientStyles({
							className: BUTTON_CLASSNAME,
							background: style_background.normal,
							backgroundHover: style_background.hover,
						}),
						// BORDER
						getBorderStyles({
							className: BUTTON_CLASSNAME,
							border: style_border,
							isWithRadius: true,
						}),
					]}
				/>
			)}

			{/* DIMENSION  */}
			<Global
				styles={[
					getPaddingMarginStyles({
						className: BUTTON_CLASSNAME,
						padding: style_dimension.padding,
						margin: style_dimension.margin,
					}),
					getStyleObjectFromResponsiveAttr({
						className: `${BUTTON_CLASSNAME}`,
						value: style_dimension.colGap,
						prefix: "gap",
					}),
				]}
			/>
			{/* BOXSHADOW  */}
			<Global
				styles={getBoxShadowStyles({
					className: BUTTON_CLASSNAME,
					boxShadow: style_boxshadow,
				})}
			/>

			{/* // TEXT & ICON */}
			<Global
				styles={[
					getTypographyStyles({
						className: BUTTON_TEXT,
						typography: style_text.typography,
					}),
					getStyleObjectFromResponsiveAttr({
						className: `${BUTTON_ICON}, ${BUTTON_ICON}:before, ${BUTTON_ICON} svg`,
						value: IconSizeConverted,
						prefix: "fontSize",
						prefix_2: "height",
						prefix_3: "width",
					}),
					{
						[BUTTON_TEXT]: {
							...(finalIsInheritFromTheme
								? { color: text_color }
								: (style_text?.color ? { color: style_text.color } : {})),
						},
						[BUTTON_ICON]: {
							...(finalIsInheritFromTheme
								? { color: text_color }
								: (style_icon?.color ? { color: style_icon.color } : {})),
						},
						// BUTTON HOVER
						[BUTTON_CLASSNAME]: {
							":hover": {
								".wcb-button__text": {
									...(finalIsInheritFromTheme
										? { color: text_color_hover }
										: (style_text?.hoverColor ? { color: style_text.hoverColor } : {})),
								},
								".wcb-button__icon": {
									...(finalIsInheritFromTheme
										? { color: text_color_hover }
										: (style_icon?.hoverColor ? { color: style_icon.hoverColor } : {})),
								},
							},
						},
					},
				]}
			/>

			{/* ADVANCE  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_responsiveCondition,
					advance_zIndex,
					className: WRAP_CLASSNAME,
					defaultDisplay: "block",
				})}
			/>
		</>
	);
};

export default React.memo(GlobalCss);
