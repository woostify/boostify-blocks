import React from "react";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommonLegacy from "../components/SaveCommonLegacy";
// @ts-ignore
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "subHeading"> {}

const normalizeTypographyForLegacy = (typography: any) => {
	if (!typography) return typography;

	return {
		...typography,
		appearance: {
			...typography.appearance,
			style: Array.isArray(typography.appearance?.style)
				? {}
				: typography.appearance?.style ?? {},
		},
		lineHeight: Array.isArray(typography.lineHeight)
			? {}
			: typography.lineHeight ?? {},
		letterSpacing: Array.isArray(typography.letterSpacing)
			? {}
			: typography.letterSpacing ?? {},
	};
};

export default function save({
	attributes,
}: {
	attributes: WcbAttrs;
}) {
	const {
		uniqueId,

		advance_responsiveCondition,
		advance_zIndex,

		general_addToCartBtn,
		general_content,
		general_featuredImage,
		general_pagination,
		general_sortingAndFiltering,

		style_addToCardBtn,
		style_border,
		style_featuredImage,
		style_layout,
		style_pagination,
		style_price,
		style_rating,
		style_saleBadge,
		style_outOfStock,
		style_title,
		style_wishlistBtn,
		style_category,
		style_countdownUrgency,
		style_dimension,

		advance_motionEffect,
	} = attributes;

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,

		advance_responsiveCondition,
		advance_zIndex,

		general_addToCartBtn,
		general_content,
		general_featuredImage,
		general_pagination,
		general_sortingAndFiltering,

		style_addToCardBtn: style_addToCardBtn
			? {
					...style_addToCardBtn,
					typography: normalizeTypographyForLegacy(
						style_addToCardBtn.typography
					),
			  }
			: undefined,

		style_price: style_price
			? {
					...style_price,
					typography: normalizeTypographyForLegacy(
						style_price.typography
					),
			  }
			: undefined,

		style_saleBadge: style_saleBadge
			? {
					...style_saleBadge,
					typography: normalizeTypographyForLegacy(
						style_saleBadge.typography
					),
			  }
			: undefined,

		style_title: style_title
			? {
					...style_title,
					typography: normalizeTypographyForLegacy(
						style_title.typography
					),
			  }
			: undefined,

		style_category: style_category
			? {
					...style_category,
					typography: normalizeTypographyForLegacy(
						style_category.typography
					),
			  }
			: undefined,

		style_outOfStock: style_outOfStock
			? {
					...style_outOfStock,
					typography: normalizeTypographyForLegacy(
						style_outOfStock.typography
					),
			  }
			: undefined,

		style_border,
		style_featuredImage,
		style_layout,
		style_pagination,
		style_rating,
		style_wishlistBtn,
		style_countdownUrgency,
		style_dimension,

		advance_motionEffect,
	};

	const blockProps = useBlockProps.save({
		className: "wcb-products__wrap",
	});
	
	console.log("======= SAVE__110726 =======");

	return (
		<SaveCommonLegacy
			attributes={newAttrForSave}
			uniqueId={uniqueId}
			{...blockProps}
		>
			{null}
		</SaveCommonLegacy>
	);
}
