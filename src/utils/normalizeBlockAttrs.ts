/**
 * Whitelist of valid Array attribute names across Boostify Blocks.
 *
 * Why this is needed:
 * 1. In WordPress REST API / PHP serialization, empty associative arrays `{}`
 *    get converted to `[]` by `json_encode` in block comments.
 * 2. Unconditionally converting every `[]` back to `{}` breaks real array attributes
 *    (e.g., testimonials, slides, items), causing `.map()` or `.length` runtime crashes.
 * 3. This whitelist ensures genuine array attributes preserve their array type (even when empty `[]`),
 *    while empty arrays representing PHP-serialized empty objects are safely restored to `{}`.
 */
const ARRAY_PROPERTIES = new Set([
	// Media, Sliders & Testimonials
	"images",
	"ratings",
	"testimonials",
	"slides",
	"sliders",

	// Tabs, Content & Repeater Items
	"titles",
	"tabContents",
	"tabItems",
	"items",
	"options",
	"buttons",
	"socials",

	// Products, Posts Grid & Taxonomy Filtering
	"categories",
	"tags",
	"stockStatus",
	"attributes",
	"selectedTerms",
]);

/**
 * Normalizes block attributes before saving to HTML comment / script tag.
 * Restores PHP-mangled empty objects (`[]` -> `{}`) while preserving genuine arrays.
 *
 * @param obj - The attribute value to normalize
 * @param keyName - Parent attribute key name (checked against ARRAY_PROPERTIES)
 */
export const normalizeBlockAttrs = (obj: any, keyName?: string): any => {
	if (Array.isArray(obj)) {
		// Preserve genuine array attributes even when empty
		if (keyName && ARRAY_PROPERTIES.has(keyName)) {
			return obj.map((item) => normalizeBlockAttrs(item));
		}
		// Convert PHP-serialized empty objects back to {}, otherwise recurse
		return obj.length === 0 ? {} : obj.map((item) => normalizeBlockAttrs(item));
	}

	if (obj && typeof obj === "object") {
		const normalized: any = {};
		for (const [key, value] of Object.entries(obj)) {
			normalized[key] = normalizeBlockAttrs(value, key);
		}
		return normalized;
	}

	return obj;
};

export default normalizeBlockAttrs;
