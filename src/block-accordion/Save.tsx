import React from "react";
import { __ } from "@wordpress/i18n";
import {
	// @ts-ignore
	useInnerBlocksProps,
	useBlockProps,
} from "@wordpress/block-editor";
import { WcbAttrs, WcbAttrsForSave } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export type { WcbAttrsForSave };

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_icon,
		style_answer,
		style_container,
		style_question,
		style_icon,
		style_dimension,
		advance_motionEffect,
	} = attributes;

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_icon,
		style_answer,
		style_container,
		style_question,
		style_icon,
		style_dimension,
		advance_motionEffect,
	};

	const wrapBlockProps = useBlockProps.save({
		className: "wcb-accordion__wrap",
		"data-wp-interactive": "boostify-blocks/accordion",
		"data-wp-context": JSON.stringify({
			allowMultipleOpen: !!general_general?.allowMultipleOpen,
			startCollapsed: !!general_general?.startCollapsed,
			openPane: Number(general_general?.openPane || 0),
			activeItem: "",
			hasInteracted: false,
		}),
		"data-faq-schema": general_general?.faqSchema ? "true" : "false",
		"data-wp-init": "callbacks.init",
	});

	const innerBlocksProps = useInnerBlocksProps.save({
		className: "wcb-accordion__inner",
	});

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
		>
			<div {...innerBlocksProps} />
		</SaveCommon>
	);
}
