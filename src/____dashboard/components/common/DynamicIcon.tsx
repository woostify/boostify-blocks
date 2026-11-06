import React, { FC, CSSProperties } from "react";
import { MATERIAL_SYMBOLS, IconDef } from "./MaterialSymbolsData";

// Map block names and slugs to exact LineIcons font classes used in Gutenberg editor
const BLOCK_TO_LNI: Record<string, string> = {
	// Block names (from block.json)
	"boostify-blocks/container": "lni-layout",
	"boostify-blocks/products": "lni-restaurant",
	"boostify-blocks/posts-grid": "lni-grid-alt",
	"boostify-blocks/buttons": "lni-page-break",
	"boostify-blocks/faq": "lni-support",
	"boostify-blocks/accordion": "lni-list",
	"boostify-blocks/team": "lni-users",
	"boostify-blocks/icon-box": "lni-clipboard",
	"boostify-blocks/icon-list": "lni-agenda",
	"boostify-blocks/form": "lni-postcard",
	"boostify-blocks/testimonials-swiper": "lni-quotation",
	"boostify-blocks/countdown": "lni-timer",
	"boostify-blocks/counter": "lni-dashboard",
	"boostify-blocks/image": "lni-image",
	"boostify-blocks/map": "lni-map",
	"boostify-blocks/boostify-icon": "lni-star",
	"boostify-blocks/slider-swiper": "lni-layers",
	"boostify-blocks/tabs": "lni-tab",
	"boostify-blocks/display-conditions": "lni-eye",

	// Short names / slugs
	container: "lni-layout",
	products: "lni-restaurant",
	"posts-grid": "lni-grid-alt",
	buttons: "lni-page-break",
	faq: "lni-support",
	accordion: "lni-list",
	team: "lni-users",
	"icon-box": "lni-clipboard",
	"icon-list": "lni-agenda",
	form: "lni-postcard",
	testimonials: "lni-quotation",
	"testimonials-swiper": "lni-quotation",
	countdown: "lni-timer",
	counter: "lni-dashboard",
	image: "lni-image",
	map: "lni-map",
	"google-maps": "lni-map",
	"boostify-icon": "lni-star",
	icon: "lni-star",
	slider: "lni-layers",
	"slider-swiper": "lni-layers",
	tabs: "lni-tab",
	"display-conditions": "lni-eye",

	// Sample / Pro blocks
	"sample-popup": "lni-popup",
	popup: "lni-popup",
	"sample-pricing": "lni-tag",
	pricing: "lni-tag",
	"sample-mega-menu": "lni-menu",
	"mega-menu": "lni-menu",
	"sample-dynamic": "lni-database",
	dynamic: "lni-database",
};

interface DynamicIconProps {
	name?: string;
	blockName?: string;
	className?: string;
	style?: CSSProperties;
	size?: number | string;
}

const DynamicIcon: FC<DynamicIconProps> = ({
	name = "",
	blockName = "",
	className = "",
	style,
	size,
}) => {
	const rawName = String(name || "").trim();
	const rawBlockName = String(blockName || "").trim();

	// 1. Check if this is the Heading block (renders exact Gutenberg SVG icon)
	const isHeading =
		rawName === "heading" ||
		rawName.includes("heading") ||
		rawBlockName === "boostify-blocks/heading" ||
		rawBlockName.includes("heading");

	if (isHeading) {
		const sizePx = size ? (typeof size === "number" ? `${size}px` : size) : "22px";
		return (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				width={sizePx}
				height={sizePx}
				className={className}
				style={{
					display: "inline-block",
					verticalAlign: "middle",
					flexShrink: 0,
					color: "currentColor",
					...style,
				}}
				aria-hidden="true"
				focusable="false"
			>
				<path
					d="M6 4.5V19.5M18 4.5V19.5M6 12H18"
					stroke="currentColor"
					strokeWidth="1.75"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	}

	// 2. Mini toggle switches (following the exact active/deactive card switches below)
	if (rawName === "toggle_on") {
		const widthNum = typeof size === "number" ? size : 22;
		const heightNum = Math.round((widthNum * 13) / 22);
		return (
			<svg
				width={widthNum}
				height={heightNum}
				viewBox="0 0 22 13"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				style={{
					display: "inline-block",
					verticalAlign: "middle",
					flexShrink: 0,
					...style,
				}}
				aria-hidden="true"
				focusable="false"
			>
				<rect width="22" height="13" rx="6.5" fill="#635bff" />
				<circle cx="15.5" cy="6.5" r="4.8" fill="#ffffff" />
			</svg>
		);
	}

	if (rawName === "toggle_off") {
		const widthNum = typeof size === "number" ? size : 22;
		const heightNum = Math.round((widthNum * 13) / 22);
		return (
			<svg
				width={widthNum}
				height={heightNum}
				viewBox="0 0 22 13"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				style={{
					display: "inline-block",
					verticalAlign: "middle",
					flexShrink: 0,
					...style,
				}}
				aria-hidden="true"
				focusable="false"
			>
				<rect width="22" height="13" rx="6.5" fill="#d4d4dc" />
				<circle cx="6.5" cy="6.5" r="4.8" fill="#ffffff" />
			</svg>
		);
	}

	// 2. Check if this resolves to a LineIcons class matching Gutenberg editor
	let lniClass: string | null = null;

	if (BLOCK_TO_LNI[rawBlockName]) {
		lniClass = BLOCK_TO_LNI[rawBlockName];
	} else if (BLOCK_TO_LNI[rawName]) {
		lniClass = BLOCK_TO_LNI[rawName];
	} else if (rawName.includes("lni-")) {
		const match = rawName.match(/lni-[a-z0-9-]+/i);
		if (match) {
			lniClass = match[0];
		}
	}

	if (lniClass) {
		const sizePx = size ? (typeof size === "number" ? `${size}px` : size) : "22px";
		return (
			<i
				className={`lni ${lniClass} ${className}`}
				style={{
					fontSize: sizePx,
					lineHeight: 1,
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					color: "currentColor",
					flexShrink: 0,
					...style,
				}}
				aria-hidden="true"
			/>
		);
	}

	// 3. Fallback to Material Symbols SVG (for UI icons: support, search, switches, etc.)
	const iconDef: IconDef =
		MATERIAL_SYMBOLS[rawName] || MATERIAL_SYMBOLS["featured_play_list"];

	const sizePx = size ? (typeof size === "number" ? `${size}px` : size) : undefined;
	const inlineStyle: CSSProperties = {
		display: "inline-block",
		verticalAlign: "middle",
		flexShrink: 0,
		...(sizePx ? { width: sizePx, height: sizePx } : {}),
		...style,
	};

	return (
		<svg
			viewBox={iconDef.viewBox}
			fill="currentColor"
			className={className}
			style={inlineStyle}
			aria-hidden="true"
			focusable="false"
		>
			<path d={iconDef.d} />
		</svg>
	);
};

export default DynamicIcon;
