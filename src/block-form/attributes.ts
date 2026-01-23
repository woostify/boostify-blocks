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
	BCB_FORM_PANEL_ACTION,
	BCB_FORM_PANEL_ACTION_DEMO,
} from "./WcbFormPanelAction";
import {
	BCB_FORM_PANEL_GENERAL,
	BCB_FORM_PANEL_GENERAL_DEMO,
} from "./WcbFormPanelGeneral";
import {
	BCB_FORM_PANEL_GOOGLE_RECAPTCHA,
	BCB_FORM_PANEL_GOOGLE_RECAPTCHA_DEMO,
} from "./WcbFormPanelGoogleRecaptcha";
import {
	BCB_FORM_PANEL_SUBMIT_BUTTON,
	BCB_FORM_PANEL_SUBMIT_BUTTON_DEMO,
} from "./WcbFormPanelSubmitButton";
import {
	BCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE,
	BCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO,
} from "./WcbFormPanel_StyleCheckBoxRadio";
import {
	BCB_FORM_PANEL_STYLE_INPUT,
	BCB_FORM_PANEL_STYLE_INPUT_DEMO,
} from "./WcbFormPanel_StyleInput";
import {
	BCB_FORM_PANEL_STYLE_LABEL,
	BCB_FORM_PANEL_STYLE_LABEL_DEMO,
} from "./WcbFormPanel_StyleLabel";
import {
	BCB_FORM_PANEL_STYLE_SPACING,
	BCB_FORM_PANEL_STYLE_SPACING_DEMO,
} from "./WcbFormPanel_StyleSpacing";
import {
	BCB_FORM_PANEL_STYLE_MESSAGES,
	BCB_FORM_PANEL_STYLE_MESSAGES_DEMO,
} from "./WcbPostGridPanel_StyleMessages";
import {
	BCB_FORM_PANEL_STYLE_SUBMIT_BUTTON,
	BCB_FORM_PANEL_STYLE_SUBMIT_BUTTON_DEMO,
} from "./WcbPostGridPanel_StyleSubmitButton";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	btnSubmitText: string;
	//
	general_general: BCB_FORM_PANEL_GENERAL;
	general_submit_button: BCB_FORM_PANEL_SUBMIT_BUTTON;
	general_action: BCB_FORM_PANEL_ACTION;
	general_gg_recaptcha: BCB_FORM_PANEL_GOOGLE_RECAPTCHA;
	//
	style_label: BCB_FORM_PANEL_STYLE_LABEL;
	style_input: BCB_FORM_PANEL_STYLE_INPUT;
	style_checkbox_radio_toggle: BCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE;
	style_submit_button: BCB_FORM_PANEL_STYLE_SUBMIT_BUTTON;
	style_messages: BCB_FORM_PANEL_STYLE_MESSAGES;
	style_spacing: BCB_FORM_PANEL_STYLE_SPACING;
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
	btnSubmitText: {
		type: "string",
		source: "html",
		selector: "button.bcb-form__btn-submit",
		default: "Submit",
	},

	// THE ATTRS OF BLOCK HERE
	general_general: {
		type: "object",
		default: BCB_FORM_PANEL_GENERAL_DEMO,
	},
	general_submit_button: {
		type: "object",
		default: BCB_FORM_PANEL_SUBMIT_BUTTON_DEMO,
	},
	general_action: {
		type: "object",
		default: BCB_FORM_PANEL_ACTION_DEMO,
	},
	general_gg_recaptcha: {
		type: "object",
		default: BCB_FORM_PANEL_GOOGLE_RECAPTCHA_DEMO,
	},
	//
	style_label: {
		type: "object",
		default: BCB_FORM_PANEL_STYLE_LABEL_DEMO,
	},
	style_input: {
		type: "object",
		default: BCB_FORM_PANEL_STYLE_INPUT_DEMO,
	},
	style_checkbox_radio_toggle: {
		type: "object",
		default: BCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO,
	},
	style_submit_button: {
		type: "object",
		default: BCB_FORM_PANEL_STYLE_SUBMIT_BUTTON_DEMO,
	},
	style_messages: {
		type: "object",
		default: BCB_FORM_PANEL_STYLE_MESSAGES_DEMO,
	},
	style_spacing: {
		type: "object",
		default: BCB_FORM_PANEL_STYLE_SPACING_DEMO,
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
