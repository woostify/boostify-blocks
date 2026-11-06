import React, { FC, CSSProperties } from "react";
import { MATERIAL_SYMBOLS, IconDef } from "./MaterialSymbolsData";
import { BLOCK_META } from "../../data/blocksMeta";
import { SAMPLE_PRO_BLOCKS } from "../../data/sampleData";
import { EXTENSIONS_LIST } from "../../extensions";

// Build block-to-LineIcons mapping dynamically from the single sources of truth
const BLOCK_TO_LNI: Record<string, string> = {};

// 1. Register real blocks from BLOCK_META
Object.entries(BLOCK_META).forEach(([fullName, meta]) => {
	const icon = meta.icon;
	if (icon && icon.startsWith("lni-")) {
		BLOCK_TO_LNI[fullName] = icon;
		const shortName = fullName.replace("boostify-blocks/", "").replace("wcb-", "");
		BLOCK_TO_LNI[shortName] = icon;
		if (meta.demoSlug) {
			BLOCK_TO_LNI[meta.demoSlug] = icon;
		}
	}
});

// 2. Register sample pro blocks from SAMPLE_PRO_BLOCKS
SAMPLE_PRO_BLOCKS.forEach((block) => {
	const icon = block.icon;
	if (icon && icon.startsWith("lni-")) {
		BLOCK_TO_LNI[block.name] = icon;
		BLOCK_TO_LNI[block.id] = icon;
		const shortName = block.name.replace("boostify-blocks/", "");
		BLOCK_TO_LNI[shortName] = icon;
		const proSlug = block.id.replace("sample-", "");
		BLOCK_TO_LNI[proSlug] = icon;
	}
});

// 3. Register extensions from EXTENSIONS_LIST
EXTENSIONS_LIST.forEach((ext) => {
	const icon = ext.icon;
	if (icon && icon.startsWith("lni-")) {
		BLOCK_TO_LNI[ext.name] = icon;
		BLOCK_TO_LNI[ext.id] = icon;
		if (ext.demoSlug) {
			BLOCK_TO_LNI[ext.demoSlug] = icon;
		}
	}
});

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
				className={`bb-dynamic-icon ${className}`.trim()}
				style={style}
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
				className={`bb-dynamic-icon ${className}`.trim()}
				style={style}
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
				className={`bb-dynamic-icon ${className}`.trim()}
				style={style}
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
		const lniStyle = sizePx || style ? {
			...(sizePx ? { fontSize: sizePx } : {}),
			...style,
		} : undefined;
		return (
			<i
				className={`lni ${lniClass} bb-dynamic-icon bb-dynamic-icon--lni ${className}`.trim()}
				style={lniStyle}
				aria-hidden="true"
			/>
		);
	}

	// 3. Fallback to Material Symbols SVG (for UI icons: support, search, switches, etc.)
	const iconDef: IconDef =
		MATERIAL_SYMBOLS[rawName] || MATERIAL_SYMBOLS["featured_play_list"];

	const sizePx = size ? (typeof size === "number" ? `${size}px` : size) : undefined;
	const inlineStyle: CSSProperties | undefined =
		sizePx || style
			? {
					...(sizePx ? { width: sizePx, height: sizePx } : {}),
					...style,
			  }
			: undefined;

	return (
		<svg
			viewBox={iconDef.viewBox}
			fill="currentColor"
			className={`bb-dynamic-icon ${className}`.trim()}
			style={inlineStyle}
			aria-hidden="true"
			focusable="false"
		>
			<path d={iconDef.d} />
		</svg>
	);
};

export default DynamicIcon;
