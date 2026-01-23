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
    BCB_ICON_PANEL_ICON,
    BCB_ICON_PANEL_ICON_DEMO,
} from "./WcbIconPanelIcon";
import {
    BCB_ICON_PANEL_PRESET,
    BCB_ICON_PANEL_PRESET_DEMO,
} from "./WcbIconPanelPreset";

import {
    BCB_ICON_PANEL_STYLE_ICON,
    BCB_ICON_PANEL_STYLE_ICON_DEMO,
} from "./WcbIconPanel_StyleIcon";

import {
    BCB_ICON_PANEL_STYLE_BACKGROUND,
    BCB_ICON_PANEL_STYLE_BACKGROUND_DEMO,
} from "./WcbIconPanel_StyleBackground";

import {
    BCB_ICON_PANEL_STYLE_BORDER,
    BCB_ICON_PANEL_STYLE_BORDER_DEMO,
} from "./WcbIconPanel_StyleBorder";

import {
    BCB_ICON_PANEL_STYLE_BOXSHADOW,
    BCB_ICON_PANEL_STYLE_BOXSHADOW_DEMO,
} from "./WcbIconPanel_StyleBoxshadow";

import {
	BCB_ICON_PANEL_STYLE_DIMENSION,
	BCB_ICON_PANEL_STYLE_DIMENSION_DEMO,
} from "./WcbIconPanel_StyleDimension";

export interface WcbAttrs extends WcbAttrsCommonFromWp {
    cover: string;
    uniqueId: string;
    daylabel: string;
    hrslabel: string;
    minlabel: string;
    seclabel: string;
    //
    general_preset: BCB_ICON_PANEL_PRESET;
    general_icon: BCB_ICON_PANEL_ICON;
    style_background: BCB_ICON_PANEL_STYLE_BACKGROUND;
    style_icon: BCB_ICON_PANEL_STYLE_ICON;
    style_border: BCB_ICON_PANEL_STYLE_BORDER;
    style_boxshadow: BCB_ICON_PANEL_STYLE_BOXSHADOW;
    style_dimension: BCB_ICON_PANEL_STYLE_DIMENSION;
    //
    advance_responsiveCondition: MyResponsiveConditionControlData;
    advance_zIndex: MyZIndexControlData;
    advance_motionEffect: MyMotionEffectData;
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	cover: {
        type: 'string',
        default: '',
    },

    uniqueId: {
        type: "string",
        default: "",
    },
    //

    general_icon: {
        type: "object",
        default: BCB_ICON_PANEL_ICON_DEMO,
    },
    general_preset: {
        type: "object",
        default: BCB_ICON_PANEL_PRESET_DEMO,
    },
    style_icon: {
        type: "object",
        default: BCB_ICON_PANEL_STYLE_ICON_DEMO,
    },
    style_background: {
        type: "object",
        default: BCB_ICON_PANEL_STYLE_BACKGROUND_DEMO,
    },
    style_border: {
        type: "object",
        default: BCB_ICON_PANEL_STYLE_BORDER_DEMO,
    },
    style_boxshadow: {
        type: "object",
        default: BCB_ICON_PANEL_STYLE_BOXSHADOW_DEMO,
    },
    style_dimension: {
        type: "object",
        default: BCB_ICON_PANEL_STYLE_DIMENSION_DEMO,
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
