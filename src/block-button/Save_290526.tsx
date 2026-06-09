import React from "react";
import { useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
// @ts-ignore
import "./style.scss";
import Button from "./Button";

export interface WcbAttrsForSave290526 extends Omit<WcbAttrs, "content" | "anchor"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_content,
		general_preset,
		style_background,
		style_border,
		style_boxshadow,
		style_dimension,
		style_icon,
		style_text,
	} = attributes;

	const newAttrForSave: WcbAttrsForSave290526 = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_content,
		general_preset,
		style_background,
		style_border,
		style_boxshadow,
		style_dimension,
		style_icon,
		style_text,
	};

	const wrapBlockProps = useBlockProps.save({ className: "wcb-button__wrap" });

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
		>
			<Button attributes={attributes} isEdit={false} />
		</SaveCommon>
	);
}
