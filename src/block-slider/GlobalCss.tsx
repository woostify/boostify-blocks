import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getStyleBackground from "../utils/getStyleBackground";
import getBoxShadowStyles from "../utils/getBoxShadowStyles";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}

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
	const ITEM_CLASSNAME = `${WRAP_CLASSNAME}.wcb-slider__wrap`;
	const SLICK_ARROW = `${WRAP_CLASSNAME} .slick-arrow`;
	const SLICK_DOTS = `${WRAP_CLASSNAME} .slick-dots`;
	const SLICK_PREV = `${WRAP_CLASSNAME} .slick-prev`;
	const SLICK_NEXT = `${WRAP_CLASSNAME} .slick-next`;

	const colsDesk = Number(general_general.columns?.Desktop) || 1;
	const colsTab = Number(general_general.columns?.Tablet) || colsDesk;
	const colsMob = Number(general_general.columns?.Mobile) || colsTab;
	const hasMultipleCols = colsDesk > 1 || colsTab > 1 || colsMob > 1;

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
					hasMultipleCols
						? getStyleObjectFromResponsiveAttr({
								className: `${WRAP_CLASSNAME} .slick-slide`,
								value: general_general.colGap,
								prefix: "paddingLeft",
								prefix_2: "paddingRight",
						  })
						: null,
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

			{/* SLICK ARROW & DOTS  */}
			<Global
				styles={[
					getBorderStyles({
						border: style_arrowAndDots.border,
						className: SLICK_ARROW,
						isWithRadius: true,
					}),
					{
						[`${SLICK_ARROW} svg`]: {
							width: style_arrowAndDots.arrowSize,
							height: style_arrowAndDots.arrowSize,
							color: style_arrowAndDots.color,
							background: style_arrowAndDots.backgroundColor,
						},
					},
					{
						[`${SLICK_DOTS} li`]: {
							"button:before": {
								color: style_arrowAndDots.color,
							},
						},
					},
					{
						[`${SLICK_ARROW}`]: {
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: style_arrowAndDots.backgroundColor,
							cursor: "pointer",
						},
					},
					getStyleObjectFromResponsiveAttr({
						className: SLICK_DOTS,
						value: style_arrowAndDots.dotsMarginTop,
						prefix: "marginTop",
					}),
					getStyleObjectFromResponsiveAttr({
						className: SLICK_PREV,
						value: style_arrowAndDots.arrowDistance,
						prefix: "left",
					}),
					getStyleObjectFromResponsiveAttr({
						className: SLICK_NEXT,
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
