import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks, RichText } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "designation" | "description"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		general_date,
		daylabel,
		hrslabel,
		minlabel,
		seclabel,
		style_label,
		style_number,
		style_dimension,
		advance_motionEffect,
		general_preset
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		general_date,
		style_label,
		style_number,
		style_dimension,
		advance_motionEffect,
		general_preset
	};
	//
	const wrapBlockProps = useBlockProps.save({
		className: "bcb-countdown__wrap",
	});
	//

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
		>

			{/* CHILD CONTENT  */}
			<div className={`bcb-countdown__content ${general_preset.preset}`}>

				<div className="bcb-countdown__box">
					<div className="bcb-countdown__number bcb-countdown-day"></div>
					<RichText.Content
						tagName='div'
						value={daylabel}
						className="bcb-countdown__label bcb-countdown__daylabel"
					/>
				</div>
				<div className="bcb-countdown__box">
					<div className="bcb-countdown__number bcb-countdown-hrs"></div>

					<RichText.Content
						tagName='div'
						value={hrslabel}
						className="bcb-countdown__label bcb-countdown__hrslabel"
					/>
				</div>
				<div className="bcb-countdown__box">
					<div className="bcb-countdown__number bcb-countdown-mins"></div>

					<RichText.Content
						tagName='div'
						value={minlabel}
						className="bcb-countdown__label bcb-countdown__minlabel"
					/>
				</div>
				<div className="bcb-countdown__box">
					<div className="bcb-countdown__number bcb-countdown-secs"></div>

					<RichText.Content
						tagName='div'
						value={seclabel}
						className="bcb-countdown__label bcb-countdown__seclabel"
					/>
				</div>
			</div>
		</SaveCommon>
	);
}
