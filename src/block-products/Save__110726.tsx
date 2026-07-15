import React from "react";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommonLegacy from "../components/SaveCommonLegacy";
// @ts-ignore
import "./style.scss";

export interface WcbAttrsForSave extends Omit<WcbAttrs, "heading" | "subHeading"> {}

// Final fix - Force match database format
export default function save({ attributes }: { attributes: WcbAttrs }) {
	// Deep clone to avoid mutation
	const attrs = JSON.parse(JSON.stringify(attributes || {}));

	// Force all typography to object format (match post body)
	const stylesWithTypography = [
		'style_addToCardBtn',
		'style_price',
		'style_saleBadge',
		'style_title',
		'style_category',
		'style_outOfStock'
	];

	stylesWithTypography.forEach(key => {
		if (attrs[key] && attrs[key].typography) {
			attrs[key].typography = {
				...attrs[key].typography,
				appearance: {
					...(attrs[key].typography.appearance || {}),
					style: {},
				},
				lineHeight: {},
				letterSpacing: {},
			};
		}
	});

	// Ensure advance_zIndex
	if (!attrs.advance_zIndex) {
		attrs.advance_zIndex = {};
	}

	const blockProps = useBlockProps.save({ className: "wcb-products__wrap" });

	return (
		<SaveCommonLegacy
			attributes={attrs}
			uniqueId={attrs.uniqueId}
			{...blockProps}
		>
			{null}
		</SaveCommonLegacy>
	);
}
