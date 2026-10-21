import React from "react";
import { 
    useBlockProps, 
	//@ts-ignore
    useInnerBlocksProps 
} from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export interface WcbAttrsForSave
    extends Omit<WcbAttrs, "designation" | "description"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		general_layout,
		general_icon,
		general_separator,
		general_preset,
		style_title,
		style_desination,
		style_separator,
		style_description,
		style_Icon,
		style_dimension,
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	} = attributes;

	const newAttrs: WcbAttrsForSave = {
		uniqueId,
		general_layout,
		general_icon,
		general_separator,
		general_preset,
		style_title,
		style_desination,
		style_separator,
		style_description,
		style_Icon,
		style_dimension,
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
	};

	// Wrapper block props with className same as Edit component
	const wrapBlockProps = useBlockProps.save({
		className: "wcb-icon-list__wrap",
	});

	// Container for list items - avoid useBlockProps.save to prevent duplicate wrapper.
	const innerBlocksProps = useInnerBlocksProps.save({
		className: "wcb-icon-list__icon-wrap",
	});

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrs}
			uniqueId={uniqueId}
		>
			<div {...innerBlocksProps} />
		</SaveCommon>
	);
}