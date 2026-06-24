import { CSSProperties, useEffect } from "react";

// ─── Slider pseudo-element CSS ────────────────────────────────────────────────
// Injected directly into document.head to bypass Emotion's CacheProvider
// (which may target the iframed editor canvas on WordPress 6.2+).

const STYLE_TAG_ID = "wcb-dimensions-unit-control-styles";

const CSS = `
.wcb-dimensions-unit-control__range {
	display: block;
	width: 100%;
	height: 4px;
	appearance: none;
	-webkit-appearance: none;
	border-radius: 2px;
	outline: none;
	cursor: pointer;
}
.wcb-dimensions-unit-control__range::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background: #0073aa;
	cursor: pointer;
	margin-top: -5px;
}
.wcb-dimensions-unit-control__range::-moz-range-thumb {
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background: #0073aa;
	border: none;
	cursor: pointer;
}
.wcb-dimensions-unit-control__range::-webkit-slider-runnable-track {
	height: 4px;
	border-radius: 2px;
}
.wcb-dimensions-unit-control__range::-moz-range-track {
	height: 4px;
	border-radius: 2px;
	background: #ddd;
}
`;

export function useInjectStyles() {
	useEffect(() => {
		if (document.getElementById(STYLE_TAG_ID)) return;
		const tag = document.createElement("style");
		tag.id = STYLE_TAG_ID;
		tag.textContent = CSS;
		document.head.appendChild(tag);
	}, []);
}

// BoxIcon styles ───────────────────────────────────────────────────────────

export const iconRoot: CSSProperties = {
	boxSizing: "border-box",
	display: "block",
	flex: "0 0 24px",
	width: 24,
	height: 24,
	position: "relative",
	padding: 4,
};

export const iconViewbox: CSSProperties = {
	boxSizing: "border-box",
	display: "block",
	position: "relative",
	width: "100%",
	height: "100%",
};

const baseStroke: CSSProperties = {
	boxSizing: "border-box",
	display: "block",
	pointerEvents: "none",
	position: "absolute",
	backgroundColor: "currentColor",
};

export function stroke(focused: boolean, extra: CSSProperties): CSSProperties {
	return { ...baseStroke, opacity: focused ? 1 : 0.3, ...extra };
}

// ─── Layout styles ────────────────────────────────────────────────────────────

export const root: CSSProperties = {
	boxSizing: "border-box",
	width: "100%",
	paddingBottom: 12,
};

export const header: CSSProperties = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginBottom: 8,
};

export const headerActions: CSSProperties = {
	display: "flex",
	alignItems: "center",
	gap: 4,
};

export const sideRow: CSSProperties = {
	display: "flex",
	alignItems: "center",
	gap: 8,
	marginBottom: 8,
};

export const sideRowLast: CSSProperties = {
	...sideRow,
	marginBottom: 0,
};

export const unitControl: CSSProperties = {
	flex: "0 0 110px",
	width: 110,
};

export const sliderWrapper: CSSProperties = {
	flex: 1,
	display: "flex",
	alignItems: "center",
};
