import React from "react";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommonLegacy from "../components/SaveCommonLegacy";
// @ts-ignore
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "subHeading"> {}

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

	/**
	 * IMPORTANT
	 *
	 * Deprecated save MUST output exactly the same
	 * JSON structure that older versions stored.
	 *
	 * Do NOT normalize.
	 * Do NOT mutate.
	 * Do NOT convert {} <-> [].
	 */

	const newAttrForSave: WcbAttrsForSave = {
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
	};

	const blockProps = useBlockProps.save({
		className: "wcb-products__wrap",
	});

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
