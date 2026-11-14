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

	// Custom crisp 24x24 UI icons matching Material Symbols Rounded weight
	if (rawName === "edit_square") {
		const sizePx = size ? (typeof size === "number" ? `${size}px` : size) : "20px";
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
					d="M11 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
					stroke="currentColor"
					strokeWidth="1.75"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18.375 2.625a1.5 1.5 0 0 1 2.121 2.121L12 13.243l-3.25.812.812-3.25 8.813-8.18Z"
					stroke="currentColor"
					strokeWidth="1.75"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	}

	if (rawName === "widgets") {
		const sizePx = size ? (typeof size === "number" ? `${size}px` : size) : "20px";
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
				<rect x="3.5" y="3.5" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.75" />
				<rect x="3.5" y="13.5" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.75" />
				<rect x="13.5" y="13.5" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.75" />
				<rect
					x="14.2"
					y="4.2"
					width="5.6"
					height="5.6"
					rx="1.1"
					transform="rotate(45 17 7)"
					stroke="currentColor"
					strokeWidth="1.75"
				/>
			</svg>
		);
	}

	if (rawName === "visibility_off") {
		const sizePx = size ? (typeof size === "number" ? `${size}px` : size) : "20px";
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
					d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
					stroke="currentColor"
					strokeWidth="1.75"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	}

	if (rawName === "autorenew") {
		const sizePx = size ? (typeof size === "number" ? `${size}px` : size) : "18px";
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
					d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3 3v5h5"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M16 16h5v5"
					stroke="currentColor"
					strokeWidth="1.8"
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
