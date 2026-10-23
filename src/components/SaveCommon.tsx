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

const EXTENSION_ATTR_KEYS = [
	"wcbDisplayConditions",
	"wcbLoggedIn",
	"wcbLoggedOut",
	"wcbUserRole",
	"wcbSystem",
	"wcbBrowser",
	"wcbDay",
];

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

		// Clean out extension attributes that do not belong to block styling
		const cleanAttributes: any = { ...attributes };
		for (const key of EXTENSION_ATTR_KEYS) {
			delete cleanAttributes[key];
		}

		const normalizedAttributes = normalizeData(cleanAttributes);
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
