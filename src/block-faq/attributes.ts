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
	BCB_FAQ_PANEL_GENERAL,
	BCB_FAQ_PANEL_GENERAL_DEMO,
} from "./WcbFaqPanelGeneral";
import { BCB_FAQ_PANEL_ICON, BCB_FAQ_PANEL_ICON_DEMO } from "./WcbFaqPanelIcon";
import {
	BCB_FAQ_PANEL_PRESET,
	BCB_FAQ_PANEL_PRESET_DEMO,
} from "./WcbFaqPanelPreset";
import {
	BCB_FAQ_PANEL_STYLE_ANSWER,
	BCB_FAQ_PANEL_STYLE_ANSWER_DEMO,
} from "./WcbFaqPanel_StyleAnswer";
import {
	BCB_FAQ_PANEL_STYLE_CONTAINER,
	BCB_FAQ_PANEL_STYLE_CONTAINER_DEMO,
} from "./WcbFaqPanel_StyleContainer";
import {
	BCB_FAQ_PANEL_STYLE_ICON,
	BCB_FAQ_PANEL_STYLE_ICON_DEMO,
} from "./WcbFaqPanel_StyleIcon";
import {
	BCB_FAQ_PANEL_STYLE_QUESTION,
	BCB_FAQ_PANEL_STYLE_QUESTION_DEMO,
} from "./WcbFaqPanel_StyleQuestion";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	general_preset: BCB_FAQ_PANEL_PRESET;
	general_general: BCB_FAQ_PANEL_GENERAL;
	general_icon: BCB_FAQ_PANEL_ICON;
	style_container: BCB_FAQ_PANEL_STYLE_CONTAINER;
	style_question: BCB_FAQ_PANEL_STYLE_QUESTION;
	style_icon: BCB_FAQ_PANEL_STYLE_ICON;
	style_answer: BCB_FAQ_PANEL_STYLE_ANSWER;
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
	general_preset: {
		type: "object",
		default: BCB_FAQ_PANEL_PRESET_DEMO,
	},
	general_general: {
		type: "object",
		default: BCB_FAQ_PANEL_GENERAL_DEMO,
	},
	general_icon: {
		type: "object",
		default: BCB_FAQ_PANEL_ICON_DEMO,
	},
	style_container: {
		type: "object",
		default: BCB_FAQ_PANEL_STYLE_CONTAINER_DEMO,
	},
	style_question: {
		type: "object",
		default: BCB_FAQ_PANEL_STYLE_QUESTION_DEMO,
	},
	style_icon: {
		type: "object",
		default: BCB_FAQ_PANEL_STYLE_ICON_DEMO,
	},
	style_answer: {
		type: "object",
		default: BCB_FAQ_PANEL_STYLE_ANSWER_DEMO,
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
