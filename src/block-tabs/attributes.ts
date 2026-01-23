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
	BCB_FAQ_PANEL_PRESET,
	BCB_FAQ_PANEL_PRESET_DEMO,
} from "./WcbTabsPanelPreset";

import {
	BCB_TABS_PANEL_STYLE_ICON,
	BCB_TABS_PANEL_STYLE_ICON_DEMO,
} from "./WcbTabsPanel_StyleIcon";
import {
	BCB_TABS_PANEL_STYLE_TITLE,
	BCB_TABS_PANEL_STYLE_TITLE_DEMO,
} from "./WcbTabsPanel_StyleTitle";
import {
	BCB_TABS_PANEL_TAB_TITLE,
	BCB_TABS_PANEL_TAB_TITLE_DEMO,
} from "./WcbTabsPanelTabTitle";
import { BlockTabTitleItem } from "./types";
import {
	BCB_TABS_PANEL_STYLE_BODY,
	BCB_TABS_PANEL_STYLE_BODY_DEMO,
} from "./WcbTabsPanel_StyleBody";
import {
    BCB_TAGS_PANEL_GENERAL,
	BCB_TAGS_PANEL_GENERAL_DEMO
} from "./WcbTabsPanelGeneral";
import {
	BCB_TABS_PANEL_STYLE_CONTAINER,
	BCB_TABS_PANEL_STYLE_CONTAINER_DEMO,
} from "./WcbTabsPanel_StyleContainer";

export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	titles: BlockTabTitleItem[];
	tabContents: string[]; // save content of tab
    activeTabIndex: number;
	general_tabTitle: BCB_TABS_PANEL_TAB_TITLE;
	style_container: BCB_TABS_PANEL_STYLE_CONTAINER;
	style_title: BCB_TABS_PANEL_STYLE_TITLE;
	style_body: BCB_TABS_PANEL_STYLE_BODY;
	general_preset: BCB_FAQ_PANEL_PRESET;
	style_icon: BCB_TABS_PANEL_STYLE_ICON;
	//
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
	advance_motionEffect: MyMotionEffectData;
	general_general: BCB_TAGS_PANEL_GENERAL;
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	titles: {
		type: "array",
		default: [
			{ id: "1", title: "Tab 1", dataTabIndex: 0 },
			{ id: "2", title: "Tab 2", dataTabIndex: 1 },
			{ id: "3", title: "Tab 3", dataTabIndex: 2 },
		],
	},
	tabContents: {
        type: "array",
        default: ["", "", ""],
    },
    activeTabIndex: {
        type: "number",
        default: 0,
    },
	general_tabTitle: {
		type: "object",
		default: BCB_TABS_PANEL_TAB_TITLE_DEMO,
	},
	style_container: {
        type: "object",
        default: BCB_TABS_PANEL_STYLE_CONTAINER_DEMO,
    },
	style_title: {
		type: "object",
		default: BCB_TABS_PANEL_STYLE_TITLE_DEMO,
	},
	style_body: {
		type: "object",
		default: BCB_TABS_PANEL_STYLE_BODY_DEMO,
	},
	// THE ATTRS OF BLOCK HERE
	general_preset: {
		type: "object",
		default: BCB_FAQ_PANEL_PRESET_DEMO,
	},

	general_general: {
		type: "object",
		default: BCB_TAGS_PANEL_GENERAL_DEMO,
	},

	style_icon: {
		type: "object",
		default: BCB_TABS_PANEL_STYLE_ICON_DEMO,
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
