import React from "react";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommonLegacy from "../components/SaveCommonLegacy";
// @ts-ignore
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "subHeading"> {}

/**
 * True legacy save: reproduces content saved before `advance_zIndex`
 * existed and before typography empty-array values were normalized to
 * empty objects. Must be paired in deprecated.tsx with an attributes
 * schema where `advance_zIndex` has no default, and must go through
 * SaveCommonLegacy (no normalization) — not SaveCommon.
 */
export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
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
		style_title,
		advance_motionEffect,
		style_category,
	} = attributes;

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
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
		style_title,
		advance_motionEffect,
		style_category,
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
