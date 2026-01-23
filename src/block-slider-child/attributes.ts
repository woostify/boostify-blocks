import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import { MediaUploadData } from "../components/controls/MyMediaUploadCheck";
import { INIT_IMAGE_DATA_UPLOAD_DEMO } from "../components/controls/MyBackgroundControl/MyBackgroundControl";
// Import style types from shared types to avoid circular dependency
import {
	BCB_SLIDER_PANEL_STYLE_NAME,
	BCB_SLIDER_PANEL_STYLE_NAME_DEMO,
	BCB_SLIDER_PANEL_STYLE_CONTENT_DEMO,
	BCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER,
	BCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
	BCB_SLIDER_PANEL_STYLE_DIMENSION,
	BCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
} from "../block-slider/types";
import {
	BCB_SLIDER_PANEL_IMAGE_OR_ICON,
	BCB_SLIDER_PANEL_IMAGE_OR_ICON_DEMO,
} from "./WcbSliderPanel_StyleImage";
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
import { BCB_SLIDER_LAYOUT_PANEL_PRESET, BCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO } from "./WcbSliderPanel_LayoutPreset";
import {
	BCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON,
	BCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_DEMO,
} from "./WcbSliderPanel_StyleCallToActionButton";
import { BCB_SLIDER_PANEL_STYLE_CONTENT } from "./WcbSliderPanel_StyleContent";
import { 
	BCB_SLIDER_BUTTON_PANEL_PRESET,
	BCB_SLIDER_BUTTON_PANEL_PRESET_DEMO 
} from "./WcbSliderPanel_ButtonPreset";
import {
	DEFAULT_MY_ICON,
} from "../components/controls/SelectIcon/SelecIcon";


export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	clientID?: string; // Add clientID for Save component
	content: string;
	name: string;
	callToAction: string;
	//
	image: MediaUploadData;
	rating: number;
	//
	// Style attributes that can be inherited from parent
	style_name?: BCB_SLIDER_PANEL_STYLE_NAME;
	style_content?: BCB_SLIDER_PANEL_STYLE_CONTENT; // Keep as NAME type for now to match parent
	style_callToActionButton?: BCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON; // New attribute for call to action button
	style_image?: BCB_SLIDER_PANEL_IMAGE_OR_ICON;
	style_backgroundAndBorder?: BCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER;
	style_dimension: BCB_SLIDER_PANEL_STYLE_DIMENSION;
	style_buttonPreset?: BCB_SLIDER_BUTTON_PANEL_PRESET;
	style_layoutPreset?: BCB_SLIDER_LAYOUT_PANEL_PRESET;
	// style_sparator?: BCB_SLIDER_BOX_PANEL_STYLE_SPARATOR;
	// Advance attributes
	advance_zIndex: MyZIndexControlData;
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_motionEffect: MyMotionEffectData;
}

const blockAttrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	clientID: {
		type: "string",
		default: "",
	},

	// THE ATTRS OF SLIDER CHILD CONTENT HERE
	content: {
		type: "string",
		// source: "html",
		selector: ".bcb-slider-child__content",
		default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	name: {
		type: "string",
		// source: "html",
		selector: ".bcb-slider-child__name",
		default: "Slider",
	},
	callToAction: {
		type: "string",
		// source: "html",
		selector: ".bcb-slider-child__btn-inner",
		default: "Read More",
	},

	// Image and rating attributes
	image: {
		type: "object",
		default: INIT_IMAGE_DATA_UPLOAD_DEMO,
	},
	rating: {
		type: "number",
		default: 5,
	},

	// Style attributes (optional - only used when not inheriting from parent)
	style_name: {
		type: "object",
		default: BCB_SLIDER_PANEL_STYLE_NAME_DEMO,
	},

	style_content: {
		type: "object",
		default: BCB_SLIDER_PANEL_STYLE_CONTENT_DEMO,
	},

	style_callToActionButton: {
		type: "object",
		default: BCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_DEMO,
	},

	style_image: {
		type: "object",
		default: BCB_SLIDER_PANEL_IMAGE_OR_ICON_DEMO,
	},

	style_backgroundAndBorder: {
		type: "object",
		default: BCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
	},

	style_dimension: {
		type: "object",
		default: BCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
	},

	style_buttonPreset: {
		type: "object",
		// default: BCB_SLIDER_BUTTON_PANEL_PRESET_DEMO,
		default: {
			preset: "bcb-button-1",
			enableIcon: false,
			icon: {
				...DEFAULT_MY_ICON,
				iconName: "lni-arrow-right",
			},
			link: "",
			openInNewWindow: false,
			iconPosition: "afterTitle",
			iconSpacing: { Desktop: "5px" },
		},
	},

	style_layoutPreset: {
		type: "object",
		default: BCB_SLIDER_LAYOUT_PANEL_PRESET_DEMO
	},

	// style_sparator: {
	// 	type: "object",
	// 	default: BCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_DEMO,
	// },

	// ADVANCE
	advance_responsiveCondition: {
		type: "object",
		default: RESPONSIVE_CONDITON_DEMO,
	},
	advance_motionEffect: {
		type: "object",
		default: MY_MOTION_EFFECT_DEMO,
	},
	advance_zIndex: {
		type: "object",
		default: Z_INDEX_DEMO,
	},
};

export default blockAttrs; 