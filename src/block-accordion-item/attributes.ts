import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import { WCB_ACCORDION_PANEL_GENERAL } from "../block-accordion/WcbAccordionPanelGeneral";
import {
	WCB_ACCORDION_PANEL_ICON,
	WCB_ACCORDION_PANEL_ICON_DEMO,
} from "../block-accordion/WcbAccordionPanelIcon";
import { MyIcon } from "../components/controls/SelectIcon/SelecIcon";
import { DEFAULT_MEDIA_UPLOAD } from "../components/controls/MyMediaUploadCheck";

export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	title: string;
	defaultOpen: boolean;
	enableSeparator: boolean;
	headingTag: WCB_ACCORDION_PANEL_GENERAL["headingTag"];
	general_icon: WCB_ACCORDION_PANEL_ICON;
	icon?: MyIcon;
	iconSide?: "right" | "left";
	hideLabel?: boolean;
	ariaLabel?: string;
}

const accordionItemAttrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	title: {
		type: "string",
		source: "html",
		selector: ".wcb-accordion-item__title",
		default: "",
	},
	defaultOpen: {
		type: "boolean",
		default: false,
	},
	headingTag: {
		type: "string",
		default: "div",
	},
	enableSeparator: {
		type: "boolean",
		default: true,
	},
	general_icon: {
		type: "object",
		default: WCB_ACCORDION_PANEL_ICON_DEMO,
	},
	icon: {
		type: "object",
		default: {
			type: "icon",
			iconName: undefined,
			imageData: DEFAULT_MEDIA_UPLOAD,
			svgCode: "",
		},
	},
	iconSide: {
		type: "string",
		default: "right",
	},
	hideLabel: {
		type: "boolean",
		default: false,
	},
	ariaLabel: {
		type: "string",
		default: "",
	},
};

export default accordionItemAttrs;
