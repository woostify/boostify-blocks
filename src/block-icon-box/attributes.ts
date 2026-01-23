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
	BCB_ICON_BOX_PANEL_ICON,
	BCB_ICON_BOX_PANEL_ICON_DEMO,
} from "./WcbIconBoxPanelIcon";
import {
	BCB_ICON_BOX_PANEL_LAYOUT,
	BCB_ICON_BOX_PANEL_LAYOUT_DEMO,
} from "./WcbIconBoxPanelLayout";

import {
	BCB_ICON_BOX_PANEL_STYLE_DESIGNATION,
	BCB_ICON_BOX_PANEL_STYLE_DESIGNATION_DEMO,
} from "./WcbTeamPanel_StyleDesignation";
import {
	BCB_ICON_BOX_PANEL_STYLE_DESCRIPTION,
	BCB_ICON_BOX_PANEL_STYLE_DESCRIPTION_DEMO,
} from "./WcbTeamPanel_StyleDescription";
import {
	BCB_ICON_BOX_PANEL_STYLE_TITLE,
	BCB_ICON_BOX_PANEL_STYLE_TITLE_DEMO,
} from "./WcbTeamPanel_StyleTitle";
import {
	BCB_ICON_BOX_PANEL_STYLE_ICON,
	BCB_ICON_BOX_PANEL_STYLE_ICON_DEMO,
} from "./WcbIconBoxPanel_StyleIcons";

import {
	BCB_ICON_BOX_PANEL_STYLE_SEPARATOR,
	BCB_ICON_BOX_PANEL_STYLE_SEPARATOR_DEMO,
} from "./WcbIconBoxPanel_StyleSeparator";
import {
	BCB_ICON_BOX_PANEL_STYLE_DIMENSION,
	BCB_ICON_BOX_PANEL_STYLE_DIMENSION_DEMO,
} from "./WcbIconBoxPanel_StyleDimension";
import {
	BCB_ICON_BOX_PANEL_SEPARATOR,
	BCB_ICON_BOX_PANEL_SEPARATOR_DEMO,
} from "./WcbIconBoxPanelSeparator";
import {
	MY_MOTION_EFFECT_DEMO,
	MyMotionEffectData,
} from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	heading: string;
	designation: string;
	description: string;
	//
	general_layout: BCB_ICON_BOX_PANEL_LAYOUT;
	general_icon: BCB_ICON_BOX_PANEL_ICON;
	general_separator: BCB_ICON_BOX_PANEL_SEPARATOR;
	style_title: BCB_ICON_BOX_PANEL_STYLE_TITLE;
	style_desination: BCB_ICON_BOX_PANEL_STYLE_DESIGNATION;
	style_separator: BCB_ICON_BOX_PANEL_STYLE_SEPARATOR;
	style_description: BCB_ICON_BOX_PANEL_STYLE_DESCRIPTION;
	style_Icon: BCB_ICON_BOX_PANEL_STYLE_ICON;
	style_dimension: BCB_ICON_BOX_PANEL_STYLE_DIMENSION;
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
	heading: {
		type: "string",
		source: "html",
		selector: ".bcb-icon-box__heading",
		default: "John Doe",
	},
	designation: {
		type: "string",
		source: "html",
		selector: ".bcb-icon-box__designation",
		default: "Write a Prefix",
	},
	description: {
		type: "string",
		source: "html",
		selector: ".bcb-icon-box__description",
		default:
			"Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	//

	general_layout: {
		type: "object",
		default: BCB_ICON_BOX_PANEL_LAYOUT_DEMO,
	},
	general_icon: {
		type: "object",
		default: BCB_ICON_BOX_PANEL_ICON_DEMO,
	},
	general_separator: {
		type: "object",
		default: BCB_ICON_BOX_PANEL_SEPARATOR_DEMO,
	},

	style_title: {
		type: "object",
		default: BCB_ICON_BOX_PANEL_STYLE_TITLE_DEMO,
	},
	style_desination: {
		type: "object",
		default: BCB_ICON_BOX_PANEL_STYLE_DESIGNATION_DEMO,
	},
	style_separator: {
		type: "object",
		default: BCB_ICON_BOX_PANEL_STYLE_SEPARATOR_DEMO,
	},
	style_description: {
		type: "object",
		default: BCB_ICON_BOX_PANEL_STYLE_DESCRIPTION_DEMO,
	},
	style_Icon: {
		type: "object",
		default: BCB_ICON_BOX_PANEL_STYLE_ICON_DEMO,
	},

	style_dimension: {
		type: "object",
		default: BCB_ICON_BOX_PANEL_STYLE_DIMENSION_DEMO,
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
