import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import {
	BCB_HIDDEN_PANEL_GENERAL,
	BCB_HIDDEN_PANEL_GENERAL_DEMO,
} from "./WcbHiddenPanelGeneral";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	//
	general_general: BCB_HIDDEN_PANEL_GENERAL;
	//
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	//
	general_general: {
		type: "object",
		default: BCB_HIDDEN_PANEL_GENERAL_DEMO,
	},
};

export default blokc1Attrs;
