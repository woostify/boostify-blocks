import React from "react";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommonLegacy from "../components/SaveCommonLegacy";
// @ts-ignore
import "./style.scss";

export interface WcbAttrsForSave extends Omit<WcbAttrs, "heading" | "subHeading"> {}

// Force typography to exactly match stored data in database
const forceTypographyMatch = (typography: any) => {
	if (!typography) return {};

	return {
		...typography,
		appearance: {
			...(typography.appearance || {}),
			style: {},
		},
		lineHeight: {},
		letterSpacing: {},
	};
};

export default function save({ attributes }: { attributes: WcbAttrs }) {
	// Clone and fix
	const fixedAttrs: WcbAttrsForSave = { ...attributes };

	// Fix all typography fields
	if (fixedAttrs.style_addToCardBtn) {
		fixedAttrs.style_addToCardBtn = {
			...fixedAttrs.style_addToCardBtn,
			typography: forceTypographyMatch(fixedAttrs.style_addToCardBtn.typography),
		};
	}
	if (fixedAttrs.style_price) {
		fixedAttrs.style_price = {
			...fixedAttrs.style_price,
			typography: forceTypographyMatch(fixedAttrs.style_price.typography),
		};
	}
	if (fixedAttrs.style_saleBadge) {
		fixedAttrs.style_saleBadge = {
			...fixedAttrs.style_saleBadge,
			typography: forceTypographyMatch(fixedAttrs.style_saleBadge.typography),
		};
	}
	if (fixedAttrs.style_title) {
		fixedAttrs.style_title = {
			...fixedAttrs.style_title,
			typography: forceTypographyMatch(fixedAttrs.style_title.typography),
		};
	}
	if (fixedAttrs.style_category) {
		fixedAttrs.style_category = {
			...fixedAttrs.style_category,
			typography: forceTypographyMatch(fixedAttrs.style_category.typography),
		};
	}
	if (fixedAttrs.style_outOfStock) {
		fixedAttrs.style_outOfStock = {
			...fixedAttrs.style_outOfStock,
			typography: forceTypographyMatch(fixedAttrs.style_outOfStock.typography),
		};
	}

	// Ensure advance_zIndex exists
	if (!fixedAttrs.advance_zIndex) {
		fixedAttrs.advance_zIndex = {};
	}

	const blockProps = useBlockProps.save({ className: "wcb-products__wrap" });

	return (
		<SaveCommonLegacy
			attributes={fixedAttrs}
			uniqueId={fixedAttrs.uniqueId}
			{...blockProps}
		>
			{null}
		</SaveCommonLegacy>
	);
}
