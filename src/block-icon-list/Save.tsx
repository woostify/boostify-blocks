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
	} = attributes;

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
			attributes={attributes}
			uniqueId={uniqueId}
		>
			<div {...innerBlocksProps} />
		</SaveCommon>
	);
}