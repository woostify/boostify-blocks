import React, { FC, ReactNode } from "react";
import { __ } from "@wordpress/i18n";
import _ from "lodash";
import { WcbAttrsCommonFromWp } from "../block-container/attributes";
import normalizeBlockAttrs from "../utils/normalizeBlockAttrs";
// @ts-ignore
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
		const normalizeData = normalizeBlockAttrs;

		// Special handling for responsive values to ensure consistency
		const normalizeResponsiveObject = (obj: any) => {
			if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
				return {};
			}
			
			// For responsive objects, ensure they have proper structure
			const normalized: any = {};
			['Desktop', 'Tablet', 'Mobile'].forEach(device => {
				if (obj[device] !== undefined && obj[device] !== null && obj[device] !== '') {
					normalized[device] = obj[device];
				}
			});
			
			// Only return object if it has at least one valid responsive value
			return Object.keys(normalized).length > 0 ? normalized : {};
		};

		const normalizedAttributes = normalizeData(attributes);
		blockJson = _.escape(JSON.stringify(normalizedAttributes));
	} catch (error) {
		console.error("[Boostify Blocks] Failed to serialize block attributes for save:", error);
	}

	const rc = attributes?.advance_responsiveCondition || {};
	const responsiveClasses = [
		rc?.isHiddenOnDesktop ? 'wcb-hide-desktop' : '',
		rc?.isHiddenOnTablet ? 'wcb-hide-tab' : '',
		rc?.isHiddenOnMobile ? 'wcb-hide-mob' : '',
	].filter(Boolean).join(' ');

	return (
		<HtmlTag
			{...props}
			className={`wcb-cm wcb-update-div ${responsiveClasses} ${className.trim()} ${uniqueId.trim()}`}
			id={id || attributes?.anchor}
			data-uniqueid={uniqueId}
			data-is-wcb-save-common
		>
			{children}
			{/*  */}
			<div data-wcb-global-styles={uniqueId}></div>
			<pre data-wcb-block-attrs={uniqueId} style={{ display: "none" }}>
				{blockJson}
			</pre>
		</HtmlTag>
	);
}

export default SaveCommon;
