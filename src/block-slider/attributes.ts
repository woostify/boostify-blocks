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
// SLIDER_ITEM_DEMO moved to child component
import {
	BCB_SLIDER_PANEL_CAROUSEL,
	BCB_SLIDER_PANEL_CAROUSEL_DEMO,
} from "./WcbSliderPanelCarousel";
import {
	BCB_SLIDER_PANEL_GENERAL,
	BCB_SLIDER_PANEL_GENERAL_DEMO,
} from "./WcbSliderPanelGeneral";

import {
	BCB_SLIDER_PANEL_STYLE_ARROW_DOTS,
	BCB_SLIDER_PANEL_STYLE_ARROW_DOTS_DEMO,
} from "./WcbSliderPanel_StyleArrowDots";
import {
	BCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER,
	BCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
} from "./WcbSliderPanel_StyleBackground";
import {
	BCB_SLIDER_PANEL_STYLE_COMPANY,
	BCB_SLIDER_PANEL_STYLE_COMPANY_DEMO,
} from "./WcbSliderPanel_StyleCompany";
import { 
	BCB_SLIDER_PANEL_STYLE_CONTENT,
	BCB_SLIDER_PANEL_STYLE_CONTENT_DEMO 
} from "./WcbSliderPanel_StyleContent";
import {
	BCB_SLIDER_PANEL_STYLE_DIMENSION,
	BCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
} from "./WcbSliderPanel_StyleDimension";

import {
	BCB_SLIDER_PANEL_STYLE_NAME,
	BCB_SLIDER_PANEL_STYLE_NAME_DEMO,
} from "./WcbSliderPanel_StyleName";
import {
	BCB_SLIDER_PANEL_STYLE_BOXSHADOW,
	BCB_SLIDER_PANEL_STYLE_BOXSHADOW_DEMO,
} from "./WcbSliderPanel_StyleBoxshadow"
import {
	BCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT,
	BCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT_DEMO,
} from "./WcbSlidersPanel_StyleVerticalAlignment";

export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	sliders: string[][];
	//
	general_general: BCB_SLIDER_PANEL_GENERAL;
	general_carousel: BCB_SLIDER_PANEL_CAROUSEL;
	//
	style_name: BCB_SLIDER_PANEL_STYLE_NAME;
	style_content: BCB_SLIDER_PANEL_STYLE_CONTENT;
	style_company: BCB_SLIDER_PANEL_STYLE_COMPANY;
	style_verticalAlignment?: BCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT;
	style_arrowAndDots: BCB_SLIDER_PANEL_STYLE_ARROW_DOTS;
	style_backgroundAndBorder: BCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER;
	style_boxshadow: BCB_SLIDER_PANEL_STYLE_BOXSHADOW; // New box shadow style
	style_dimension: BCB_SLIDER_PANEL_STYLE_DIMENSION;
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

	sliders: {
		type: "array",
		default: [
			["wcb/slider-child"],
			["wcb/slider-child"],
			["wcb/slider-child"]
		]
	},

	// THE ATTRS OF BLOCK HERE
	general_general: {
		type: "object",
		default: BCB_SLIDER_PANEL_GENERAL_DEMO,
	},
	general_carousel: {
		type: "object",
		default: BCB_SLIDER_PANEL_CAROUSEL_DEMO,
	},
	//
	style_name: {
		type: "object",
		default: BCB_SLIDER_PANEL_STYLE_NAME_DEMO,
	},
	style_content: {
		type: "object",
		default: BCB_SLIDER_PANEL_STYLE_CONTENT_DEMO,
	},
	style_company: {
		type: "object",
		default: BCB_SLIDER_PANEL_STYLE_COMPANY_DEMO,
	},
	style_verticalAlignment: {
		type: "object",
		default: BCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT_DEMO,
	},
	style_arrowAndDots: {
		type: "object",
		default: BCB_SLIDER_PANEL_STYLE_ARROW_DOTS_DEMO,
	},
	style_backgroundAndBorder: {
		type: "object",
		default: BCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
	},
	style_dimension: {
		type: "object",
		default: BCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
	},
	style_boxshadow: {
		type: "object",
		default: BCB_SLIDER_PANEL_STYLE_BOXSHADOW_DEMO,
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
