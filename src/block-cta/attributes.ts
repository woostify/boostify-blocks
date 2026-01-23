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
	BCB_CTA_PANEL_LAYOUT,
	BCB_CTA_PANEL_LAYOUT_DEMO,
} from "./WcbCtaPanelLayout";
import {
	BCB_CTA_PANEL_PRESET,
	BCB_CTA_PANEL_PRESET_DEMO,
} from "./WcbCtaPanelPreset";
import { BCB_CTA_PANEL_STYLE_DESCRIPTION_DEMO } from "./WcbCtaPanel_StyleDescription";
import {
	BCB_CTA_PANEL_STYLE_DIMENSION,
	BCB_CTA_PANEL_STYLE_DIMENSION_DEMO,
} from "./WcbCtaPanel_StyleDimension";
import {
	BCB_CTA_PANEL_STYLE_TITLE,
	BCB_CTA_PANEL_STYLE_TITLE_DEMO,
} from "./WcbCtaPanel_StyleTitle";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	title: string;
	description: string;
	//
	general_layout: BCB_CTA_PANEL_LAYOUT;
	general_preset: BCB_CTA_PANEL_PRESET;
	style_title: BCB_CTA_PANEL_STYLE_TITLE;
	style_description: BCB_CTA_PANEL_STYLE_TITLE;
	style_dimension: BCB_CTA_PANEL_STYLE_DIMENSION;
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
	title: {
		type: "string",
		source: "html",
		selector: ".bcb-cta__title",
		default: "",
	},
	description: {
		type: "string",
		source: "html",
		selector: ".bcb-cta__description",
		default: "",
	},

	// ATTRS
	general_layout: {
		type: "object",
		default: BCB_CTA_PANEL_LAYOUT_DEMO,
	},
	general_preset: {
		type: "object",
		default: BCB_CTA_PANEL_PRESET_DEMO,
	},
	style_title: {
		type: "object",
		default: BCB_CTA_PANEL_STYLE_TITLE_DEMO,
	},
	style_description: {
		type: "object",
		default: BCB_CTA_PANEL_STYLE_DESCRIPTION_DEMO,
	},
	style_dimension: {
		type: "object",
		default: BCB_CTA_PANEL_STYLE_DIMENSION_DEMO,
	},
	//
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
