import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getStyleBackground from "../utils/getStyleBackground";
import getBoxShadowStyles from "../utils/getBoxShadowStyles";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave { }

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_general,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_dimension,
		style_boxshadow,
		//
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid="${uniqueId}"]`;
	const SLIDE_CLASSNAME = `${WRAP_CLASSNAME} .swiper-slide`;
	const SWIPER_PREV = `${WRAP_CLASSNAME} .swiper-button-prev`;
	const SWIPER_NEXT = `${WRAP_CLASSNAME} .swiper-button-next`;
	const SWIPER_ARROW = `${SWIPER_PREV}, ${SWIPER_NEXT}`;
	const SWIPER_DOTS = `${WRAP_CLASSNAME} .swiper-pagination`;
	const SWIPER_BULLET = `${WRAP_CLASSNAME} .swiper-pagination-bullet`;
	const SWIPER_BULLET_ACTIVE = `${WRAP_CLASSNAME} .swiper-pagination-bullet-active`;

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject[] => {
		return [
			getStyleObjectFromResponsiveAttr({
				value: general_general.textAlignment,
				className: `${WRAP_CLASSNAME}`,
				prefix: "textAlign",
			}),
		];
	};

	if (!uniqueId) {
		return null;
	}

	return (
		<>
			<Global styles={getDivWrapStyles()} />

			{/* ITEM WRAP  */}
			<Global
				styles={[
					getBorderStyles({
						border: style_backgroundAndBorder.border,
						className: WRAP_CLASSNAME,
						isWithRadius: true,
					}),
					getStyleObjectFromResponsiveAttr({
						className: SLIDE_CLASSNAME,
						value: general_general.colGap,
						prefix: "paddingLeft",
						prefix_2: "paddingRight",
					}),
					getPaddingMarginStyles({
						className: `${WRAP_CLASSNAME}`,
						padding: style_dimension.padding,
						margin: style_dimension.margin,
					}),
					getStyleBackground({
						className: WRAP_CLASSNAME,
						styles_background: style_backgroundAndBorder.background,
					}),
				]}
			/>

			{/* BOXSHADOW  */}
			<Global
				styles={getBoxShadowStyles({
					className: WRAP_CLASSNAME,
					boxShadow: style_boxshadow,
				})}
			/>

			{/* SWIPER ARROW & DOTS  */}
			<Global
				styles={[
					getBorderStyles({
						border: style_arrowAndDots.border,
						className: SWIPER_ARROW,
						isWithRadius: true,
					}),
					{
						[`${SWIPER_ARROW}`]: {
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: style_arrowAndDots.backgroundColor,
							color: style_arrowAndDots.color,
							cursor: "pointer",
							svg: {
								width: style_arrowAndDots.arrowSize,
								height: style_arrowAndDots.arrowSize,
								color: style_arrowAndDots.color,
								background: style_arrowAndDots.backgroundColor,
							},
						},
					},
					{
						// Swiper renders dots as .swiper-pagination-bullet divs (no
						// :before glyph like Slick's <button>) - style the bullet's
						// background directly, and set the CSS custom property Swiper
						// itself reads for the active bullet's color.
						[`${SWIPER_DOTS}`]: {
							"--swiper-pagination-color": style_arrowAndDots.color,
						},
						[`${SWIPER_BULLET}`]: {
							backgroundColor: style_arrowAndDots.color,
							opacity: 0.4,
						},
						[`${SWIPER_BULLET_ACTIVE}`]: {
							opacity: 1,
						},
					},
					{
						[`${SWIPER_ARROW}`]: {
							backgroundColor: style_arrowAndDots.backgroundColor,
						},
					},
					{
						[`${WRAP_CLASSNAME} .wcb-slider__wrap-items`]: {
							paddingBottom: "2.5rem",
						},
						[`${SWIPER_DOTS}`]: {
							position: "absolute",
							bottom: style_arrowAndDots.dotsMarginTop?.Desktop && style_arrowAndDots.dotsMarginTop?.Desktop !== "0px"
								? style_arrowAndDots.dotsMarginTop.Desktop
								: "8px",
						}
					},
					{
						[`${SWIPER_PREV}`]: {
							left: style_arrowAndDots.arrowDistance?.Desktop || "0px",
						}
					},
					{
						[`${SWIPER_NEXT}`]: {
							right: style_arrowAndDots.arrowDistance?.Desktop || "0px",
						}
					}
				]}
			/>

			{/* VERTICAL ALIGNMENT  */}
			{/* <Global
				styles={{
					[`${ITEM_INNER_CLASSNAME}`]: {
						paddingTop: style_verticalAlignment?.verticalAlignment === "top"
							? "-4rem"
							: style_verticalAlignment?.verticalAlignment === "middle"
							? "0px"
							: "4rem",
					},
				}}
			/> */}

			{/* ADVANCE  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_motionEffect,
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
