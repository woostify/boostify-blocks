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
import transforms from "./transforms";
import convertObjectAttrToPreview from "../utils/convertAttsToPreview";

registerBlockType(metadata.name, {
	edit: Edit,
	save,
	attributes,
	transforms,
	example: convertObjectAttrToPreview(attributes),
	deprecated,
	providesContext: {
		"boostify-blocks/accordion_general": "general_general",
		"boostify-blocks/accordion_icon": "general_icon",
	},
});
