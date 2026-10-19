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
				y="3"
				width="18"
				height="5"
				rx="1.5"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<rect
				x="3"
				y="10"
				width="18"
				height="11"
				rx="1.5"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M17 5.5H19"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M17 13.5H19"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M6 16H14"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinecap="round"
			/>
			<path
				d="M6 18.5H11"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinecap="round"
			/>
		</svg>
	),
});
