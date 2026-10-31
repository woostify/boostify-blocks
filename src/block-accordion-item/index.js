/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./Edit";
import save from "./Save";
import metadata from "./block.json";
import attributes from "./attributes";
import deprecated from "./deprecated";
import convertObjectAttrToPreview from "../utils/convertAttsToPreview";

import { __ } from "@wordpress/i18n";

registerBlockType(metadata.name, {
	__experimentalLabel(attributes, { context }) {
		const { title } = attributes || {};
		const cleanTitle = typeof title === "string" ? title.replace(/<[^>]*>?/gm, "").trim() : "";
		if (context === "list-view" && cleanTitle) {
			return cleanTitle;
		}
		return cleanTitle || __("Accordion Item", "boostify-blocks");
	},
	edit: Edit,
	save,
	attributes,
	deprecated,
	example: convertObjectAttrToPreview(attributes),
});
