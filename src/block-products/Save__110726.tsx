import React from "react";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommonLegacy from "../components/SaveCommonLegacy";
// @ts-ignore
import "./style.scss";

export interface WcbAttrsForSave extends Omit<WcbAttrs, "heading" | "subHeading"> {}

// Normalize cực mạnh - áp dụng recursive
const forceAllToObject = (obj: any): any => {
	if (obj === null || obj === undefined) return {};
	if (Array.isArray(obj)) {
		return obj.length === 0 ? {} : obj.map(forceAllToObject);
	}
	if (typeof obj === "object") {
		const normalized: any = {};
		for (const [key, value] of Object.entries(obj)) {
			normalized[key] = forceAllToObject(value);
		}
		return normalized;
	}
	return obj;
};

const normalizeTypography = (typo: any) => {
	if (!typo || typeof typo !== "object") return {};

	return {
		...typo,
		appearance: {
			...(typo.appearance || {}),
			style: Array.isArray(typo.appearance?.style) ? {} : (typo.appearance?.style || {}),
		},
		lineHeight: Array.isArray(typo.lineHeight) ? {} : (typo.lineHeight || {}),
		letterSpacing: Array.isArray(typo.letterSpacing) ? {} : (typo.letterSpacing || {}),
	};
};

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const rawAttrs = { ...attributes };

	// Normalize typography trước
	if (rawAttrs.style_addToCardBtn?.typography) {
		rawAttrs.style_addToCardBtn = {
			...rawAttrs.style_addToCardBtn,
			typography: normalizeTypography(rawAttrs.style_addToCardBtn.typography),
		};
	}
	if (rawAttrs.style_price?.typography) {
		rawAttrs.style_price = {
			...rawAttrs.style_price,
			typography: normalizeTypography(rawAttrs.style_price.typography),
		};
	}
	if (rawAttrs.style_saleBadge?.typography) {
		rawAttrs.style_saleBadge = {
			...rawAttrs.style_saleBadge,
			typography: normalizeTypography(rawAttrs.style_saleBadge.typography),
		};
	}
	if (rawAttrs.style_title?.typography) {
		rawAttrs.style_title = {
			...rawAttrs.style_title,
			typography: normalizeTypography(rawAttrs.style_title.typography),
		};
	}
	if (rawAttrs.style_category?.typography) {
		rawAttrs.style_category = {
			...rawAttrs.style_category,
			typography: normalizeTypography(rawAttrs.style_category.typography),
		};
	}
	if (rawAttrs.style_outOfStock?.typography) {
		rawAttrs.style_outOfStock = {
			...rawAttrs.style_outOfStock,
			typography: normalizeTypography(rawAttrs.style_outOfStock.typography),
		};
	}

	// Force all empty arrays to objects
	const newAttrForSave = forceAllToObject(rawAttrs);

	const blockProps = useBlockProps.save({ className: "wcb-products__wrap" });

	return (
		<SaveCommonLegacy
			attributes={newAttrForSave}
			uniqueId={newAttrForSave.uniqueId}
			{...blockProps}
		>
			{null}
		</SaveCommonLegacy>
	);
}
