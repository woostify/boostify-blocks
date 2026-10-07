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
		general_carousel,
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
	const ITEM_CLASSNAME = `${WRAP_CLASSNAME}.wcb-slider__wrap`;
	const SWIPER_PREV = `${WRAP_CLASSNAME} .swiper-button-prev`;
	const SWIPER_NEXT = `${WRAP_CLASSNAME} .swiper-button-next`;
	const SWIPER_ARROW = `${SWIPER_PREV}, ${SWIPER_NEXT}`;
	const SWIPER_DOTS = `${WRAP_CLASSNAME} .swiper-pagination`;
	const SWIPER_BULLET = `${WRAP_CLASSNAME} .swiper-pagination-bullet`;
	const SWIPER_BULLET_ACTIVE = `${WRAP_CLASSNAME} .swiper-pagination-bullet-active`;
	const WRAP_ITEMS = `${WRAP_CLASSNAME} .wcb-slider__wrap-items`;

	// Dots are absolutely positioned at the bottom of .wcb-slider__wrap-items,
	// so they overlap the slide content. Reserve room below the slides:
	// dots offset + dot height (8px) + 10px gap to the content.
	const showDots = general_carousel?.showArrowsDots !== "Arrow";
	const DOTS_GAP = "10px";
	const DOT_SIZE = "8px";

	const getWrapItemsPaddingBottom = () => {
		const d = style_arrowAndDots.dotsMarginTop?.Desktop ?? "0px";
		const t = style_arrowAndDots.dotsMarginTop?.Tablet ?? d;
		const m = style_arrowAndDots.dotsMarginTop?.Mobile ?? t;
		return {
			Desktop: `calc(${d} + ${DOT_SIZE} + ${DOTS_GAP})`,
			Tablet: `calc(${t} + ${DOT_SIZE} + ${DOTS_GAP})`,
			Mobile: `calc(${m} + ${DOT_SIZE} + ${DOTS_GAP})`,
		};
	};

	// ------------------- WRAP DIV
	const getDivWrapStyles = (): CSSObject[] => {
		return [
			getStyleObjectFromResponsiveAttr({
				value: general_general.textAlignment,
				className: `${ITEM_CLASSNAME}`,
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
						className: ITEM_CLASSNAME,
						isWithRadius: true,
					}),
					getPaddingMarginStyles({
						className: `${ITEM_CLASSNAME}`,
						padding: style_dimension.padding,
						margin: style_dimension.margin,
					}),
					getStyleBackground({
						className: ITEM_CLASSNAME,
						styles_background: style_backgroundAndBorder.background,
					}),
				]}
			/>

			{/* BOXSHADOW  */}
			<Global
				styles={getBoxShadowStyles({
					className: ITEM_CLASSNAME,
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
						[`${SWIPER_DOTS}`]: {
							position: "absolute",
							// Container height = dot height, so the gap is exact
							lineHeight: 0,
						},
					},
					getStyleObjectFromResponsiveAttr({
						className: SWIPER_DOTS,
						value: style_arrowAndDots.dotsMarginTop,
						prefix: "bottom",
					}),
					showDots
						? getStyleObjectFromResponsiveAttr({
							className: WRAP_ITEMS,
							value: getWrapItemsPaddingBottom(),
							prefix: "paddingBottom",
						})
						: null,
					getStyleObjectFromResponsiveAttr({
						className: SWIPER_PREV,
						value: style_arrowAndDots.arrowDistance,
						prefix: "left",
					}),
					getStyleObjectFromResponsiveAttr({
						className: SWIPER_NEXT,
						value: style_arrowAndDots.arrowDistance,
						prefix: "right",
					}),
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
