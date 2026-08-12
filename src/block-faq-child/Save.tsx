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
		defaultExtend,
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
						className="wcb-faq-child__icon wcb-faq-child__icon--active"
						icon={general_icon.icon}
						data-wp-bind--hidden="!context.isOpen"
					/>
				)}
				{general_icon.inactiveIcon && (
					<MyIconFull
						className="wcb-faq-child__icon wcb-faq-child__icon--inactive"
						icon={general_icon.inactiveIcon}
						data-wp-bind--hidden="context.isOpen"
					/>
				)}
			</>
		);
	};

	const ariaControls = uniqueId + "controls";
	
	// Determine if the layout is accordion
	const isAccordion = layout === "accordion";

	const wrapBlockProps = useBlockProps.save({
		className: `ac wcb-faq-child__wrap wcb-faq-child__wrap--${layout}`,
		...(isAccordion ?
		{
			'data-wp-context': JSON.stringify({
				isOpen: defaultExtend,
				itemId: uniqueId,
			}),
			'data-wp-watch': 'callbacks.syncActiveItem',
			'data-wp-class--is-open': 'context.isOpen',
		} : {}),
	});

	// className for the trigger and panel elements
	const triggerProps: Record<string, string> = {
		className: `ac-trigger wcb-faq-child__question wcb-faq-child__question--icon-${general_icon.iconPosition}`,
	};
	// Add interactivity attributes only if the layout is accordion
	if (isAccordion) {
		triggerProps['data-wp-on--click'] = 'actions.toggle';
		triggerProps['data-wp-bind--aria-expanded'] = 'context.isOpen';
	}
	// className for the panel element
	const panelProps: Record<string, string> = {
		className: 'ac-panel',
	};
	// Add interactivity attributes only if the layout is accordion
	if (isAccordion) {
		panelProps['data-wp-class--is-open'] = 'context.isOpen';
	}

	return (
		<div {...wrapBlockProps}>
			<div className="ac-header">
				<div
					{...triggerProps}
					aria-controls={ariaControls}
				>
					{general_icon.iconPosition === "left" && renderIcon()}
					<RichText.Content
						tagName={headingTag || "h4"}
						value={question}
						className="wcb-faq-child__question-text"
					/>

					{general_icon.iconPosition === "right" && renderIcon()}
				</div>
			</div>
			<div {...panelProps}>
				<div className="ac-panel-inner">
					{enableSeparator && <div className="wcb-faq-child__separator"></div>}
					<div className="wcb-faq-child__answer" id={ariaControls}>
						<RichText.Content
							tagName="p"
							value={answer}
							className="wcb-faq-child__answer-text ac-text"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
