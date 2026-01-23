import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import { BCB_FAQ_PANEL_GENERAL } from "../block-faq/WcbFaqPanelGeneral";
import {
	BCB_FAQ_PANEL_ICON,
	BCB_FAQ_PANEL_ICON_DEMO,
} from "../block-faq/WcbFaqPanelIcon";

export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	question: string;
	answer: string;
	//
	defaultExtend: boolean;
	enableSeparator: boolean;
	headingTag: BCB_FAQ_PANEL_GENERAL["headingTag"];
	layout: BCB_FAQ_PANEL_GENERAL["layout"];
	//
	general_icon: BCB_FAQ_PANEL_ICON;

	//
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	layout: {
		type: "string",
		default: "accordion",
	},
	headingTag: {
		type: "string",
		default: "div",
	},
	general_icon: {
		type: "object",
		default: BCB_FAQ_PANEL_ICON_DEMO,
	},
	defaultExtend: {
		type: "bool",
		default: false,
	},
	enableSeparator: {
		type: "bool",
		default: false,
	},

	// THE ATTRS OF BLOCK HERE
	question: {
		type: "string",
		source: "html",
		selector: ".bcb-faq-child__question-text",
		default: "What is FAQ?",
	},
	answer: {
		type: "string",
		source: "html",
		selector: ".bcb-faq-child__answer-text",
		default:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},

	// ADVANCE
};

export default blokc1Attrs;
