import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import {
	MyResponsiveConditionControlData,
	RESPONSIVE_CONDITON_DEMO,
} from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import {
	MyZIndexControlData,
	Z_INDEX_DEMO,
} from "../components/controls/MyZIndexControl/MyZIndexControl";
import {
	BCB_BUTTON_PANEL_CONTENT,
	BCB_BUTTON_PANEL_CONTENT_DEMO,
} from "./WcbButtonPanelContent";
import {
	BCB_BUTTON_PANEL_PRESET,
	BCB_BUTTON_PANEL_PRESET_DEMO,
} from "./WcbButtonPanelPreset";
import {
	BCB_BUTTON_PANEL_STYLE_BACKGROUND,
	BCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO,
} from "./WcbButtonPanel_StyleBackground";
import {
	BCB_BUTTON_PANEL_STYLE_BORDER,
	BCB_BUTTON_PANEL_STYLE_BORDER_DEMO,
} from "./WcbButtonPanel_StyleBorder";
import {
	BCB_BUTTON_PANEL_STYLE_BOXSHADOW,
	BCB_BUTTON_PANEL_STYLE_BOXSHADOW_DEMO,
} from "./WcbButtonPanel_StyleBoxshadow";
import {
	BCB_BUTTON_PANEL_STYLE_DIMENSION,
	BCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO,
} from "./WcbButtonPanel_StyleDimension";
import {
	BCB_BUTTON_PANEL_STYLE_ICON,
	BCB_BUTTON_PANEL_STYLE_ICON_DEMO,
} from "./WcbButtonPanel_StyleIcon";
import {
	BCB_BUTTON_PANEL_STYLE_TEXT,
	BCB_BUTTON_PANEL_STYLE_TEXT_DEMO,
} from "./WcbButtonPanel_StyleText";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	content: string;
	//
	general_preset: BCB_BUTTON_PANEL_PRESET;
	general_content: BCB_BUTTON_PANEL_CONTENT;
	style_text: BCB_BUTTON_PANEL_STYLE_TEXT;
	style_icon: BCB_BUTTON_PANEL_STYLE_ICON;
	style_background: BCB_BUTTON_PANEL_STYLE_BACKGROUND;
	style_border: BCB_BUTTON_PANEL_STYLE_BORDER;
	style_boxshadow: BCB_BUTTON_PANEL_STYLE_BOXSHADOW;
	style_dimension: BCB_BUTTON_PANEL_STYLE_DIMENSION;
	//
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	content: {
		type: "string",
		source: "html",
		selector: ".bcb-button__text",
		default: "Button",
	},
	// THE ATTRS OF BLOCK HERE
	general_preset: {
		type: "object",
		default: BCB_BUTTON_PANEL_PRESET_DEMO,
	},
	general_content: {
		type: "object",
		default: BCB_BUTTON_PANEL_CONTENT_DEMO,
	},
	style_text: {
		type: "object",
		default: BCB_BUTTON_PANEL_STYLE_TEXT_DEMO,
	},
	style_icon: {
		type: "object",
		default: BCB_BUTTON_PANEL_STYLE_ICON_DEMO,
	},
	style_background: {
		type: "object",
		default: BCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO,
	},
	style_border: {
		type: "object",
		default: BCB_BUTTON_PANEL_STYLE_BORDER_DEMO,
	},
	style_boxshadow: {
		type: "object",
		default: BCB_BUTTON_PANEL_STYLE_BOXSHADOW_DEMO,
	},
	style_dimension: {
		type: "object",
		default: BCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO,
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
};

export default blokc1Attrs;
