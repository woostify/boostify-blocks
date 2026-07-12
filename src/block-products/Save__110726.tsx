import React from "react";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommonLegacy from "../components/SaveCommonLegacy";
// @ts-ignore
import "./style.scss";

export interface WcbAttrsForSave extends Omit<WcbAttrs, "heading" | "subHeading"> {}

// Normalize strong to the same all old version
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

const normalizeTypography = (typography: any) => {
	if (!typography) return {};
	return {
		...typography,
		appearance: {
			...typography.appearance,
			style: typeof typography.appearance?.style === "object" && !Array.isArray(typography.appearance?.style)
				? typography.appearance.style 
				: {},
		},
		lineHeight: typeof typography.lineHeight === "object" && !Array.isArray(typography.lineHeight)
			? typography.lineHeight 
			: {},
		letterSpacing: typeof typography.letterSpacing === "object" && !Array.isArray(typography.letterSpacing)
			? typography.letterSpacing 
			: {},
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

	const newAttrForSave: WcbAttrsForSave = deepNormalize({
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex: advance_zIndex ?? {},

		general_addToCartBtn,
		general_content,
		general_featuredImage,
		general_pagination,
		general_sortingAndFiltering,

		style_addToCardBtn: style_addToCardBtn ? {
			...style_addToCardBtn,
			typography: normalizeTypography(style_addToCardBtn.typography),
		} : undefined,

		style_price: style_price ? {
			...style_price,
			typography: normalizeTypography(style_price.typography),
		} : undefined,

		style_saleBadge: style_saleBadge ? {
			...style_saleBadge,
			typography: normalizeTypography(style_saleBadge.typography),
		} : undefined,

		style_title: style_title ? {
			...style_title,
			typography: normalizeTypography(style_title.typography),
		} : undefined,

		style_category: style_category ? {
			...style_category,
			typography: normalizeTypography(style_category.typography),
		} : undefined,

		style_outOfStock: style_outOfStock ? {
			...style_outOfStock,
			typography: normalizeTypography(style_outOfStock.typography),
		} : undefined,

		style_border,
		style_featuredImage,
		style_layout,
		style_pagination,
		style_rating,
		style_wishlistBtn,
		style_countdownUrgency,
		style_dimension,

		advance_motionEffect,
	});

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
