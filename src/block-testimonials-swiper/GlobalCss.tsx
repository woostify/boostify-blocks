import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getSingleDimensionStyles from "../utils/getSingleDimensionStyles";
import getTypographyStyles from "../utils/getTypographyStyles";
import getBorderRadiusStyles from "../utils/getBorderRadiusStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getStyleBackground from "../utils/getStyleBackground";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_general,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_company,
		style_content,
		style_dimension,
		style_image,
		style_rating,
		style_name,
		//
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attrs;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const ITEM_CLASSNAME = `${WRAP_CLASSNAME} .wcb-testimonials-swiper__item`;
	const ITEM_NAME = `${WRAP_CLASSNAME} .wcb-testimonials-swiper__item-name`;
	const ITEM_CONTENT = `${WRAP_CLASSNAME} .wcb-testimonials-swiper__item-content`;
	const ITEM_COMPANY = `${WRAP_CLASSNAME} .wcb-testimonials-swiper__item-company`;
	const ITEM_IMAGE = `${WRAP_CLASSNAME} .wcb-testimonials-swiper__item-image`;
	const ITEM_RATING = `${WRAP_CLASSNAME} .wcb-testimonials-swiper__item-rating`;
	// Swiper's DOM structure differs from Slick's: arrows/pagination are
	// .swiper-button-prev/next + .swiper-pagination-bullet[-active] divs,
	// not Slick's <button>/<li> with a `:before` glyph.
	const SWIPER_PREV = `${WRAP_CLASSNAME} .swiper-button-prev`;
	const SWIPER_NEXT = `${WRAP_CLASSNAME} .swiper-button-next`;
	const SWIPER_ARROW = `${SWIPER_PREV}, ${SWIPER_NEXT}`;
	// Built from SWIPER_PREV/SWIPER_NEXT separately (each with its own " svg"
	// suffix) rather than as `${SWIPER_ARROW} svg` - appending " svg" to the
	// already-comma-joined SWIPER_ARROW string only lands on the last selector
	// in the list, leaving .swiper-button-prev itself (not its svg) sized by
	// the rule below.
	const SWIPER_ARROW_SVG = `${SWIPER_PREV} svg, ${SWIPER_NEXT} svg`;
	const SWIPER_DOTS = `${WRAP_CLASSNAME} .swiper-pagination`;
	const SWIPER_BULLET = `${WRAP_CLASSNAME} .swiper-pagination-bullet`;
	const SWIPER_BULLET_ACTIVE = `${WRAP_CLASSNAME} .swiper-pagination-bullet-active`;

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

			{/* ITEM NAME  */}
			<Global
				styles={[
					getTypographyStyles({
						typography: style_name.typography,
						className: ITEM_NAME,
					}),
					getSingleDimensionStyles({
						value: style_name.marginBottom,
						className: ITEM_NAME,
						prefix: "marginBottom",
					}),
					{
						[ITEM_NAME]: {
							color: style_name.textColor,
						},
					},
				]}
			/>

			{/* ITEM CONTENT  */}
			<Global
				styles={[
					getTypographyStyles({
						typography: style_content.typography,
						className: ITEM_CONTENT,
					}),
					getSingleDimensionStyles({
						value: style_content.marginBottom,
						className: ITEM_CONTENT,
						prefix: "marginBottom",
					}),
					{
						[ITEM_CONTENT]: {
							color: style_content.textColor,
						},
					},
				]}
			/>

			{/* ITEM COMPANY  */}
			<Global
				styles={[
					getTypographyStyles({
						typography: style_company.typography,
						className: ITEM_COMPANY,
					}),
					{
						[ITEM_COMPANY]: {
							color: style_company.textColor,
						},
					},
				]}
			/>

			{/* ITEM IMAGE  */}
			<Global
				styles={[
					getPaddingMarginStyles({
						padding: style_image.padding,
						className: ITEM_IMAGE,
					}),
					getBorderRadiusStyles({
						radius: style_image.radius,
						className: `${ITEM_IMAGE} img`,
					}),
					getStyleObjectFromResponsiveAttr({
						className: `${ITEM_IMAGE} img`,
						prefix: "height",
						prefix_2: "width",
						value: style_image.imageSize,
					}),
					{
						[`${ITEM_IMAGE} img`]: {
							objectFit: style_image.objectFit,
						},
					},
				]}
			/>

			{/* ITEM WRAP  */}
			<Global
				styles={[
					getBorderStyles({
						border: style_backgroundAndBorder.border,
						className: ITEM_CLASSNAME,
						isWithRadius: true,
					}),
					getStyleObjectFromResponsiveAttr({
						className: ITEM_CLASSNAME,
						value: general_general.colGap,
						prefix: "paddingLeft",
						prefix_2: "paddingRight",
					}),
					getPaddingMarginStyles({
						className: `${WRAP_CLASSNAME} .wcb-testimonials-swiper__item-inner`,
						margin: style_dimension.margin,
						padding: style_dimension.padding,
					}),
					getStyleBackground({
						className: `${ITEM_CLASSNAME} .wcb-testimonials-swiper__item-background`,
						styles_background: style_backgroundAndBorder.background,
					}),
				]}
			/>

			{/* SWIPER ARROW & DOTS  */}
			<Global
				styles={[
					getBorderStyles({
						border: style_arrowAndDots.border,
						className: SWIPER_ARROW,
						isWithRadius: true,
					}),
					getStyleObjectFromResponsiveAttr({
						className: SWIPER_DOTS,
						value: style_arrowAndDots.dotsMarginTop,
						prefix: "marginTop",
					}),
					{
						[`${SWIPER_ARROW}`]: {
							cursor: "pointer",
						},
						[`${SWIPER_ARROW_SVG}`]: {
							width: style_arrowAndDots.arrowSize,
							height: style_arrowAndDots.arrowSize,
							color: style_arrowAndDots.color,
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
				]}
			/>

			{/* RATING */}
			<Global
				styles={[
					getSingleDimensionStyles({
						value: style_rating.marginBottom,
						className: ITEM_RATING,
						prefix: "marginBottom",
					}),
					{
						[`${ITEM_RATING} .active`]: {
							color: style_rating.color,
						},
					},
				]}
			/>

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
