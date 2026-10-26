/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./Edit";
import save from "./Save";
import metadata from "./block.json";
const { Fragment } = wp.element;
const { withSelect } = wp.data;
import attributes from "./attributes";
import deprecated from "./deprecated";
import convertObjectAttrToPreview from "../utils/convertAttsToPreview";
import useGetDeviceType from "../hooks/useGetDeviceType";
//------------------ TAILWINDCSS AND COMMON CSS -----------------

registerBlockType(metadata.name, {
	__experimentalLabel(attributes, { context }) {
		if (context === "accessibility") {
			const { caption, alt, url } = attributes;

			if (!url) {
				return __("Empty");
			}

			if (!alt) {
				return caption || "";
			}

			// This is intended to be read by a screen reader.
			// A period simply means a pause, no need to translate it.
			return alt + (caption ? ". " + caption : "");
		}
	},
	getEditWrapperProps(attributes) {
		const deviceType = useGetDeviceType() || "Desktop";
		return {
			"data-align": 
				deviceType === "Desktop" ? attributes.general_settings?.alignment?.Desktop :
				deviceType === "Tablet" ? attributes.general_settings?.alignment?.Tablet : 
				attributes.general_settings?.alignment?.Mobile,
		};
	},
	edit: Edit,
	save,
	attributes,
	deprecated: deprecated,
	example: convertObjectAttrToPreview(attributes),
});
