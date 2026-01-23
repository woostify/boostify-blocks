import React from "react";
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import "./style.scss";
import MyIconFull from "../components/controls/MyIconFull";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "answer" | "question"> {}

export default function save({
	attributes,
	...props
}: {
	attributes: WcbAttrs;
}) {
	const {
		uniqueId,
		answer,
		question,
		general_icon,
		headingTag,
		layout,
		enableSeparator,
	} = attributes;
	//

	const renderIcon = () => {
		if (!general_icon.enableIcon || layout !== "accordion") {
			return null;
		}
		return (
			<>
				{general_icon.icon && (
					<MyIconFull
						className="bcb-faq-child__icon bcb-faq-child__icon--active"
						icon={general_icon.icon}
					/>
				)}
				{general_icon.inactiveIcon && (
					<MyIconFull
						className="bcb-faq-child__icon bcb-faq-child__icon--inactive"
						icon={general_icon.inactiveIcon}
					/>
				)}
			</>
		);
	};

	const ariaControls = uniqueId + "controls";
	//
	const wrapBlockProps = useBlockProps.save({
		className: `ac bcb-faq-child__wrap bcb-faq-child__wrap--${layout}`,
	});
	//

	return (
		<div {...wrapBlockProps}>
			<div className="ac-header">
				<div
					className={`ac-trigger bcb-faq-child__question bcb-faq-child__question--icon-${general_icon.iconPosition}`}
					type="button"
					aria-expanded="true"
					aria-controls={ariaControls}
				>
					{general_icon.iconPosition === "left" && renderIcon()}
					<RichText.Content
						tagName={headingTag || "h4"}
						value={question}
						className="bcb-faq-child__question-text"
					/>

					{general_icon.iconPosition === "right" && renderIcon()}
				</div>
			</div>
			<div className="ac-panel">
				{enableSeparator && <div className="bcb-faq-child__separator"></div>}
				<div className="bcb-faq-child__answer" id={ariaControls}>
					<RichText.Content
						tagName="p"
						value={answer}
						className="bcb-faq-child__answer-text ac-text"
					/>
				</div>
			</div>
		</div>
	);
}
