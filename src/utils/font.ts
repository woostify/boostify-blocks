import { getDocumentHead } from ".";
import "../________";

const NON_WEB_FONT_RE =
	/^(arial|helvetica|helvetica neue|times new roman|times|georgia|verdana|trebuchet ms|courier new|courier|palatino|palatino linotype|garamond|tahoma|impact|comic sans ms|lucida sans unicode|lucida grande|lucida console|century gothic|book antiqua|segoe ui|sans[-+]serif|serif|monospace|serif-alt|cursive|fantasy|system-ui|ui-sans-serif|ui-serif|ui-monospace|system stack|-apple-system|blinkmacsystemfont|default|inherit|initial|unset|revert|auto)$/i;

const normalizeFontName = (fontName: string): string =>
	fontName
		.split(",")[0]
		.replace(/^["'\s]+|["'\s]+$/g, "")
		.replace(/[:@].*$/, "")
		.trim();

const normalizeWeights = (weights?: string[]): string[] => {
	if (!weights?.length) {
		return [];
	}
	const out: string[] = [];
	weights.forEach((variant) => {
		const clean = String(variant || "").trim();
		const normalized =
			clean === "regular"
				? "400"
				: clean === "italic"
				? "400italic"
				: clean;
		if (normalized && !out.includes(normalized)) {
			out.push(normalized);
		}
	});
	return out;
};

export const getGoogleFontURL = (fontName: string, weights?: string[]) => {
	const cleanName = normalizeFontName(fontName);
	const family = encodeURIComponent(cleanName).replace(/%20/g, "+");
	const validWeights = normalizeWeights(weights);
	const weightSuffix =
		validWeights.length > 0 ? `:${validWeights.join(",")}` : "";
	return `https://fonts.googleapis.com/css?family=${family}${weightSuffix}&display=swap`;
};

export const isWebFont = (fontName: string | null | undefined): boolean => {
	if (!fontName) {
		return false;
	}
	const cleanName = normalizeFontName(fontName);
	if (!cleanName || /^var\(/i.test(fontName.trim())) {
		return false;
	}
	return !NON_WEB_FONT_RE.test(cleanName);
};

/**
 * Load the stylesheet of a Google Font.
 * Skipped when loadGoogleFontsLocally is enabled — PHP serves fonts locally in that case.
 *
 * @param {string} fontName The name of the font
 * @param {string[]} weights Optional Google Font weights supported by this family
 */
export const loadGoogleFont = (fontName: string, weights?: string[]) => {
	if (!isWebFont(fontName)) {
		return;
	}
	const cleanName = normalizeFontName(fontName);

	setTimeout(() => {
		const _loadGoogleFont = (head: HTMLHeadElement | null) => {
			if (!head) {
				return;
			}
			const existing = isGoogleFontEnqueued(cleanName, head);
			if (existing) {
				if (
					weights?.length &&
					existing.getAttribute("data-font-name") === cleanName &&
					!(existing.getAttribute("href") || "").includes(":")
				) {
					existing.setAttribute(
						"href",
						getGoogleFontURL(cleanName, weights)
					);
				}
				return;
			}

			const link = createLinkTagWithGoogleFont(cleanName, weights);
			head.appendChild(link);
		};

		const headElement = getDocumentHead();
		_loadGoogleFont(headElement);

		const mainHead = document.querySelector("head");
		if (headElement !== mainHead) {
			_loadGoogleFont(mainHead);
		}
	}, 50);
};

export const createLinkTagWithGoogleFont = (
	fontName = "",
	weights?: string[]
) => {
	const cleanName = normalizeFontName(fontName);
	const link = document.createElement("link");
	link.classList.add("wcb-google-fonts");
	link.setAttribute("data-font-name", cleanName);
	link.setAttribute("href", getGoogleFontURL(cleanName, weights));
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("type", "text/css");
	return link;
};

export const isGoogleFontEnqueued = (
	fontName: string,
	head = document.querySelector("head") as HTMLHeadElement | null
): HTMLLinkElement | null => {
	if (!head || !fontName) {
		return null;
	}
	const cleanName = normalizeFontName(fontName);
	if (!cleanName) {
		return null;
	}

	const escapedName = cleanName.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
	const tagged = head.querySelector(
		`link[data-font-name="${escapedName}"]`
	) as HTMLLinkElement | null;
	if (tagged) {
		return tagged;
	}

	const slug = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
	const plusFamily = cleanName.replace(/ /g, "+");
	const links = head.querySelectorAll('link[rel="stylesheet"]');
	for (let i = 0; i < links.length; i++) {
		const linkEl = links[i] as HTMLLinkElement;
		const id = linkEl.getAttribute("id") || "";
		if (
			id === `boostify-google-font-${slug}-css` ||
			id === `boostify-local-font-${slug}-css`
		) {
			return linkEl;
		}
		const href = linkEl.getAttribute("href") || "";
		if (
			href.includes(`fonts.googleapis.com`) &&
			href.includes(`family=${plusFamily}`)
		) {
			return linkEl;
		}
	}

	return null;
};
