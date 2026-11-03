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
import {
	RichTextToolbarButton,
	RichTextShortcut,
} from "@wordpress/block-editor";
import { registerFormatType, toggleFormat } from "@wordpress/rich-text";
import MyCustomButton, { WCB_FORMAT_HIGHLIGHT } from "./MyCustomButton";
import deprecated from "./deprecated";
import convertObjectAttrToPreview from "../utils/convertAttsToPreview";
//------------------ TAILWINDCSS AND COMMON CSS -----------------

registerFormatType(WCB_FORMAT_HIGHLIGHT, {
	title: "Highlight",
	tagName: "mark",
	className: "wcb-highlight-text",
	edit: MyCustomButton,
});

const headingIcon = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="wcb-block-editor-block-icon"
	>
		<path
			d="M6 4.5V19.5M18 4.5V19.5M6 12H18"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

registerBlockType(metadata.name, {
	icon: headingIcon,
	edit: Edit,
	save,
	attributes,
	deprecated: deprecated,
	example: convertObjectAttrToPreview(attributes),
});
