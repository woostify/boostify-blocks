import React, { ReactNode } from "react";
import _ from "lodash";
import { WcbAttrsCommonFromWp } from "../block-container/attributes";

interface Props<T = any> {
	className?: string;
	id?: string;
	uniqueId: string;
	HtmlTag?: React.ElementType<any>;
	children: ReactNode;
	attributes: (WcbAttrsCommonFromWp & T) & {
		advance_responsiveCondition?: {
			isHiddenOnDesktop?: boolean;
			isHiddenOnTablet?: boolean;
			isHiddenOnMobile?: boolean;
		};
	};
}

function SaveCommonLegacy<T>({
	className = "",
	uniqueId = "",
	HtmlTag = "div",
	children,
	attributes,
	id,
	...props
}: Props<T>) {
	let blockJson = "";

	try {
		/**
		 * Legacy serializer.
		 *
		 * IMPORTANT:
		 * Do NOT normalize or mutate attributes.
		 * Gutenberg deprecated blocks must output exactly
		 * the same JSON that was stored by older versions.
		 */
		blockJson = _.escape(JSON.stringify(attributes));
	} catch (error) {
		console.log("attributes JSON.stringify error on SAVE function", {
			error,
			className,
			attributes,
		});
	}

	const rc = attributes?.advance_responsiveCondition || {};

	const responsiveClasses = [
		rc.isHiddenOnDesktop ? "wcb-hide-desktop" : "",
		rc.isHiddenOnTablet ? "wcb-hide-tab" : "",
		rc.isHiddenOnMobile ? "wcb-hide-mob" : "",
	]
		.filter(Boolean)
		.join(" ");

	return (
		<HtmlTag
			{...props}
			className={`wcb-cm wcb-update-div ${responsiveClasses} ${className.trim()} ${uniqueId.trim()}`}
			id={id || attributes?.anchor}
			data-uniqueid={uniqueId}
			data-is-wcb-save-common
		>
			{children}

			<div data-wcb-global-styles={uniqueId}></div>

			<pre
				data-wcb-block-attrs={uniqueId}
				style={{ display: "none" }}
			>
				{blockJson}
			</pre>
		</HtmlTag>
	);
}

export default SaveCommonLegacy;