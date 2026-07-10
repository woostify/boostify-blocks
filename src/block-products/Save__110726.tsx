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
		advance_motionEffect,
		style_category,
		style_countdownUrgency,
		style_dimension,
	} = attributes;

	/**
	 * Legacy save
	 *
	 * IMPORTANT:
	 * Do not normalize any attribute here.
	 * Deprecated blocks must render exactly the same
	 * structure that was stored in post_content.
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
		advance_motionEffect,
		style_category,
		style_wishlistBtn,
		style_countdownUrgency,
		style_dimension,
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
