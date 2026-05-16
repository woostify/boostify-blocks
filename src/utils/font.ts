import { getDocumentHead } from ".";
import "../________";

export const getGoogleFontURL = (fontName: string) => {
	const family = fontName.replace(/ /g, "+");
	const subset = "";
	return `https://fonts.googleapis.com/css?family=${family}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic${subset}`;
};

export const isWebFont = (fontName: string | null) =>
	fontName && !fontName?.match(/^(sans[-+]serif|serif|monospace|serif-alt)$/i);

/**
 * Load the stylesheet of a Google Font.
 * Skipped when loadGoogleFontsLocally is enabled — PHP serves fonts locally in that case.
 *
 * @param {string} fontName The name of the font
 */
export const loadGoogleFont = (fontName: string) => {
	if (window.boostify_blocks_global_variables?.loadGoogleFontsLocally === "true") {
		return;
	}

	setTimeout(() => {
		const _loadGoogleFont = (head: HTMLHeadElement | null) => {
			if (head && isWebFont(fontName)) {
				if (isGoogleFontEnqueued(fontName, head)) {
					return;
				}

				const link = createLinkTagWithGoogleFont(fontName);
				head.appendChild(link);
			}
		};

		const headElement = getDocumentHead();
		_loadGoogleFont(headElement);

		if (headElement !== document.querySelector("head")) {
			_loadGoogleFont(document.querySelector("head"));
		}
	}, 50);
};

export const createLinkTagWithGoogleFont = (fontName = "") => {
	const link = document.createElement("link");
	link.classList.add("wcb-google-fonts");
	link.setAttribute("data-font-name", fontName);
	link.setAttribute("href", getGoogleFontURL(fontName));
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("type", "text/css");
	return link;
};

export const isGoogleFontEnqueued = (
	fontName: string,
	head = document.querySelector("head") as HTMLHeadElement
) => {
	return head.querySelector(`[data-font-name="${fontName}"]`);
};
