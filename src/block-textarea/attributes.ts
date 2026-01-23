import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import {
	BCB_TEXAREA_PANEL_GENERAL,
	BCB_TEXAREA_PANEL_GENERAL_DEMO,
} from "./WcbTextareaPanelGeneral";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	label: string;
	//
	general_general: BCB_TEXAREA_PANEL_GENERAL;
	//
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	label: {
		type: "string",
		source: "html",
		selector: ".bcb-form__label",
		default: "Label",
	},
	//
	general_general: {
		type: "object",
		default: BCB_TEXAREA_PANEL_GENERAL_DEMO,
	},
	// ADVANCE
};

export default blokc1Attrs;
