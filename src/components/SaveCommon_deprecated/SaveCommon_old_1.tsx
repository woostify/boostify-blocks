import React, { FC, ReactNode } from "react";
import { __ } from "@wordpress/i18n";
import _ from "lodash";
import { WcbAttrsCommonFromWp } from "../../block-container/attributes";
// @ts-ignore
interface Props<T = any> {
	className?: string;
	id?: string;
	uniqueId: string;
	HtmlTag?: React.ElementType<any>;
	children: ReactNode;
	attributes: WcbAttrsCommonFromWp & T;
}

function SaveCommon<T>({
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
		blockJson = _.escape(JSON.stringify(attributes));
	} catch (error) {
		console.log("attributes JSON.stringify error on SAVE function", {
			error,
			className,
			attributes,
		});
	}

	return (
		<HtmlTag
			{...props}
			className={`bcb-cm bcb-update-div ${className.trim()} ${uniqueId.trim()}`}
			id={id || attributes?.anchor}
			data-uniqueid={uniqueId}
			data-is-bcb-save-common
		>
			{children}
			{/*  */}
			<div data-bcb-global-styles={uniqueId}></div>
			<pre data-bcb-block-attrs={uniqueId} style={{ display: "none" }}>
				{blockJson}
			</pre>
		</HtmlTag>
	);
}

export default SaveCommon;
