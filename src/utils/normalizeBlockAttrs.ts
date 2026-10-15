/**
 * Normalize block attributes to prevent object vs array inconsistency between PHP json_encode and Gutenberg.
 * In PHP/Gutenberg serialization, empty associative arrays/objects `{}` get serialized as `[]` in block comments.
 * When Gutenberg re-parses them, they become empty arrays instead of empty objects.
 * This function converts any empty array back to `{}` to ensure exact match with saved HTML.
 */
export const normalizeBlockAttrs = (obj: any): any => {
	if (Array.isArray(obj)) {
		return obj.length === 0 ? {} : obj.map((item) => normalizeBlockAttrs(item));
	}
	if (obj && typeof obj === "object") {
		const normalized: any = {};
		for (const [key, value] of Object.entries(obj)) {
			normalized[key] = normalizeBlockAttrs(value);
		}
		return normalized;
	}
	return obj;
};

export default normalizeBlockAttrs;
