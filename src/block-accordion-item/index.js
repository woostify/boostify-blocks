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
	icon: (
		<svg
			className="wcb-editor-block-icons fill-none"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="3"
				y="4"
				width="18"
				height="16"
				rx="1.5"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M3 10H21"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M17 7H19"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M7 14H15"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinecap="round"
			/>
			<path
				d="M7 16.5H12"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinecap="round"
			/>
		</svg>
	),
});
