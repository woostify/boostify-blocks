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
	WCB_ACCORDION_PANEL_GENERAL,
	WCB_ACCORDION_PANEL_GENERAL_DEMO,
} from "./WcbAccordionPanelGeneral";
import {
	WCB_ACCORDION_PANEL_ICON,
	WCB_ACCORDION_PANEL_ICON_DEMO,
} from "./WcbAccordionPanelIcon";
import {
	WCB_ACCORDION_PANEL_PRESET,
	WCB_ACCORDION_PANEL_PRESET_DEMO,
} from "./WcbAccordionPanelPreset";
import {
	WCB_ACCORDION_PANEL_STYLE_ANSWER,
	WCB_ACCORDION_PANEL_STYLE_ANSWER_DEMO,
} from "./WcbAccordionPanel_StyleAnswer";
import {
	WCB_ACCORDION_PANEL_STYLE_CONTAINER,
	WCB_ACCORDION_PANEL_STYLE_CONTAINER_DEMO,
} from "./WcbAccordionPanel_StyleContainer";
import {
	WCB_ACCORDION_PANEL_STYLE_DIMENSION,
	WCB_ACCORDION_PANEL_STYLE_DIMENSION_DEMO,
} from "./WcbAccordionPanel_StyleDimension";
import {
	WCB_ACCORDION_PANEL_STYLE_ICON,
	WCB_ACCORDION_PANEL_STYLE_ICON_DEMO,
} from "./WcbAccordionPanel_StyleIcon";
import {
	WCB_ACCORDION_PANEL_STYLE_QUESTION,
	WCB_ACCORDION_PANEL_STYLE_QUESTION_DEMO,
} from "./WcbAccordionPanel_StyleQuestion";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";

export interface WcbAttrs extends WcbAttrsCommonFromWp {

	uniqueId: string;
	general_preset: WCB_ACCORDION_PANEL_PRESET;
	general_general: WCB_ACCORDION_PANEL_GENERAL;
	general_icon: WCB_ACCORDION_PANEL_ICON;
	style_container: WCB_ACCORDION_PANEL_STYLE_CONTAINER;
	style_question: WCB_ACCORDION_PANEL_STYLE_QUESTION;
	style_icon: WCB_ACCORDION_PANEL_STYLE_ICON;
	style_answer: WCB_ACCORDION_PANEL_STYLE_ANSWER;
	style_dimension: WCB_ACCORDION_PANEL_STYLE_DIMENSION;
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
	advance_motionEffect: MyMotionEffectData;
}

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "general_preset"> {}


const accordionAttrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	// BLOCK ATTRS
	general_preset: {
		type: "object",
		default: WCB_ACCORDION_PANEL_PRESET_DEMO,
	},
	general_general: {
		type: "object",
		default: WCB_ACCORDION_PANEL_GENERAL_DEMO,
	},
	general_icon: {
		type: "object",
		default: WCB_ACCORDION_PANEL_ICON_DEMO,
	},
	style_container: {
		type: "object",
		default: WCB_ACCORDION_PANEL_STYLE_CONTAINER_DEMO,
	},
	style_question: {
		type: "object",
		default: WCB_ACCORDION_PANEL_STYLE_QUESTION_DEMO,
	},
	style_icon: {
		type: "object",
		default: WCB_ACCORDION_PANEL_STYLE_ICON_DEMO,
	},
	style_answer: {
		type: "object",
		default: WCB_ACCORDION_PANEL_STYLE_ANSWER_DEMO,
	},
	style_dimension: {
		type: "object",
		default: WCB_ACCORDION_PANEL_STYLE_DIMENSION_DEMO,
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

export default accordionAttrs;
