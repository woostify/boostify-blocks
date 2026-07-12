import React from "react";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommonLegacy from "../components/SaveCommonLegacy";
// @ts-ignore
import "./style.scss";

export interface WcbAttrsForSave extends Omit<WcbAttrs, "heading" | "subHeading"> {}

// Deep normalize để đảm bảo tất cả empty values là object
const deepNormalize = (obj: any): any => {
	if (obj === null || obj === undefined) return {};
	if (Array.isArray(obj)) {
		return obj.length === 0 ? {} : obj;
	}
	if (typeof obj === "object") {
		const normalized: any = {};
		for (const [key, value] of Object.entries(obj)) {
			normalized[key] = deepNormalize(value);
		}
		return normalized;
	}
	return obj;
};

const normalizeTypographyForSave = (typography: any) => {
	if (!typography || typeof typography !== "object") return {};

	return {
		...typography,
		fontSizes: typography.fontSizes || {},
		appearance: {
			...(typography.appearance || {}),
			style: Array.isArray(typography.appearance?.style) || !typography.appearance?.style 
				? {} 
				: typography.appearance.style,
		},
		lineHeight: Array.isArray(typography.lineHeight) || !typography.lineHeight 
			? {} 
			: typography.lineHeight,
		letterSpacing: Array.isArray(typography.letterSpacing) || !typography.letterSpacing 
			? {} 
			: typography.letterSpacing,
	};
};

export default function save({ attributes }: { attributes: WcbAttrs }) {
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

	// Tạo object trước khi deep normalize
	let newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition: deepNormalize(advance_responsiveCondition),
		advance_zIndex: deepNormalize(advance_zIndex),

		general_addToCartBtn: deepNormalize(general_addToCartBtn),
		general_content: deepNormalize(general_content),
		general_featuredImage: deepNormalize(general_featuredImage),
		general_pagination: deepNormalize(general_pagination),
		general_sortingAndFiltering: deepNormalize(general_sortingAndFiltering),

		style_addToCardBtn: style_addToCardBtn 
			? { ...style_addToCardBtn, typography: normalizeTypographyForSave(style_addToCardBtn.typography) }
			: undefined,

		style_price: style_price 
			? { ...style_price, typography: normalizeTypographyForSave(style_price.typography) }
			: undefined,

		style_saleBadge: style_saleBadge 
			? { ...style_saleBadge, typography: normalizeTypographyForSave(style_saleBadge.typography) }
			: undefined,

		style_title: style_title 
			? { ...style_title, typography: normalizeTypographyForSave(style_title.typography) }
			: undefined,

		style_category: style_category 
			? { ...style_category, typography: normalizeTypographyForSave(style_category.typography) }
			: undefined,

		style_outOfStock: style_outOfStock 
			? { ...style_outOfStock, typography: normalizeTypographyForSave(style_outOfStock.typography) }
			: undefined,

		style_border: deepNormalize(style_border),
		style_featuredImage: deepNormalize(style_featuredImage),
		style_layout: deepNormalize(style_layout),
		style_pagination: deepNormalize(style_pagination),
		style_rating: deepNormalize(style_rating),
		style_wishlistBtn: deepNormalize(style_wishlistBtn),
		style_countdownUrgency: deepNormalize(style_countdownUrgency),
		style_dimension: deepNormalize(style_dimension),

		advance_motionEffect: deepNormalize(advance_motionEffect),
	};

	// Deep normalize lần cuối
	newAttrForSave = deepNormalize(newAttrForSave);

	const blockProps = useBlockProps.save({ className: "wcb-products__wrap" });

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
