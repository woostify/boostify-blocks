import React from "react";
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import "./style.scss";
import MyIconFull from "../components/controls/MyIconFull";

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		title,
		headingTag,
		enableSeparator,
		general_icon,
		defaultOpen,
		icon,
		iconSide = "right",
		hideLabel = false,
		ariaLabel = "",
	} = attributes;

	const HeadingTag = (headingTag || "div") as keyof JSX.IntrinsicElements;
	const headerId = `wcb-accordion-header-${uniqueId}`;
	const panelId = `wcb-accordion-panel-${uniqueId}`;
	const iconPos = general_icon?.iconPosition || "right";

	const hasCustomIcon = !!(
		icon?.iconName ||
		icon?.svgCode ||
		icon?.imageData?.mediaUrl
	);

	const wrapBlockProps = useBlockProps.save({
		className: `wcb-accordion-item__wrap ${defaultOpen ? "is-open" : ""}`,
		"data-wp-context": JSON.stringify({
			itemId: uniqueId,
			isOpen: !!defaultOpen,
		}),
		"data-wp-watch": "callbacks.syncActiveItem",
		"data-wp-class--is-open": "context.isOpen",
	});

	const renderIcon = () => {
		if (!general_icon?.enableIcon) {
			return null;
		}
		return (
			<span className="wcb-accordion-item__icon-wrapper">
				{general_icon.icon && (
					<MyIconFull
						className="wcb-accordion-item__icon wcb-accordion-item__icon--active"
						icon={general_icon.icon}
						data-wp-bind--hidden="!context.isOpen"
					/>
				)}
				{general_icon.inactiveIcon && (
					<MyIconFull
						className="wcb-accordion-item__icon wcb-accordion-item__icon--inactive"
						icon={general_icon.inactiveIcon}
						data-wp-bind--hidden="context.isOpen"
					/>
				)}
			</span>
		);
	};

	return (
		<div {...wrapBlockProps}>
			<div className="wcb-accordion-item__header">
				<HeadingTag className="wcb-accordion-item__heading">
					<button
						type="button"
						id={headerId}
						className={`wcb-accordion-item__trigger wcb-accordion-item__trigger--icon-${iconPos} ${
							hideLabel ? "wcb-accordion-item--hide-label" : ""
						}`}
						aria-controls={panelId}
						aria-expanded={defaultOpen ? "true" : "false"}
						aria-label={ariaLabel || undefined}
						data-wp-on--click="actions.toggle"
						data-wp-on--keydown="actions.onKeyDown"
						data-wp-bind--aria-expanded="context.isOpen"
					>
						{iconPos === "left" && renderIcon()}
						<span className="wcb-accordion-item__title-wrap">
							{hasCustomIcon && iconSide === "left" && (
								<span className="wcb-accordion-item__title-icon wcb-accordion-item__title-icon--left">
									<MyIconFull icon={icon} />
								</span>
							)}
							<RichText.Content
								tagName="span"
								value={title}
								className="wcb-accordion-item__title"
							/>
							{hasCustomIcon && iconSide === "right" && (
								<span className="wcb-accordion-item__title-icon wcb-accordion-item__title-icon--right">
									<MyIconFull icon={icon} />
								</span>
							)}
						</span>
						{iconPos === "right" && renderIcon()}
					</button>
				</HeadingTag>
			</div>
			<div
				id={panelId}
				className={`wcb-accordion-item__panel ${defaultOpen ? "is-open" : ""}`}
				role="region"
				aria-labelledby={headerId}
				data-wp-class--is-open="context.isOpen"
			>
				<div className="wcb-accordion-item__panel-inner">
					{enableSeparator && <div className="wcb-accordion-item__separator" />}
					<div className="wcb-accordion-item__content">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
