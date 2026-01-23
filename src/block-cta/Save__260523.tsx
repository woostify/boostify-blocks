import React from "react";
import { __ } from "@wordpress/i18n";
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "title" | "description" | "general_preset"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		style_description,
		style_dimension,
		style_title,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		style_description,
		style_dimension,
		style_title,
	};
	//
	const wrapBlockProps = useBlockProps.save({ className: "bcb-cta__wrap" });

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
		>
			<div className="bcb-cta__inner">
				<div className="bcb-cta__content">
					<RichText.Content
						tagName={attributes.general_layout.headingTag}
						value={attributes.title}
						className="bcb-cta__title"
					/>
					<RichText.Content
						tagName="p"
						value={attributes.description}
						className="bcb-cta__description"
					/>
				</div>
				<div className="bcb-cta__buttons">
					<InnerBlocks.Content />
				</div>
			</div>
		</SaveCommon>
	);
}
