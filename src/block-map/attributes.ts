import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import {
	MY_MOTION_EFFECT_DEMO,
	MyMotionEffectData,
} from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";
import {
	MyResponsiveConditionControlData,
	RESPONSIVE_CONDITON_DEMO,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import {
	MyZIndexControlData,
	Z_INDEX_DEMO,
} from "../components/controls/MyZIndexControl/MyZIndexControl";
import {
	BCB_MAP_PANEL_GENERAL,
	BCB_MAP_PANEL_GENERAL_DEMO,
} from "./WcbMapPanelGeneral";
import {
	BCB_MAP_PANEL_STYLE_BORDER,
	BCB_MAP_PANEL_STYLE_BORDER_DEMO,
} from "./WcbMapPanel_StyleBorder";

export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	general_general: BCB_MAP_PANEL_GENERAL;
	style_border: BCB_MAP_PANEL_STYLE_BORDER;
	//
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
	advance_motionEffect: MyMotionEffectData;
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	// THE ATTRS OF BLOCK HERE
	general_general: {
		type: "object",
		default: BCB_MAP_PANEL_GENERAL_DEMO,
	},
	style_border: {
		type: "object",
		default: BCB_MAP_PANEL_STYLE_BORDER_DEMO,
	},
	// ADVANCE
	advance_responsiveCondition: {
		type: "object",
		default: RESPONSIVE_CONDITON_DEMO,
	},
	advance_zIndex: {
		type: "object",
		default: Z_INDEX_DEMO,
	},
	advance_motionEffect: {
		type: "object",
		default: MY_MOTION_EFFECT_DEMO,
	},
};

export default blokc1Attrs;
