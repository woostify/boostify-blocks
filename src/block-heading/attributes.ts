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
	BCB_HEADING_PANEL_BACKGROUND,
	BCB_HEADING_PANEL_BACKGROUND_DEMO,
} from "./WcbHeadingPanelBackground";
import {
	BCB_HEADING_PANEL_CONTENT,
	BCB_HEADING_PANEL_CONTENT_DEMO,
} from "./WcbHeadingPanelContent";
import {
	BCB_HEADING_PANEL_DIMENSION,
	BCB_HEADING_PANEL_DIMENSION_DEMO,
} from "./WcbHeadingPanelDimension";
import {
	BCB_HEADING_PANEL_HEADING,
	BCB_HEADING_PANEL_HEADING_DEMO,
} from "./WcbHeadingPanelHeading";
import {
	BCB_HEADING_PANEL_HIGHLIGHT,
	BCB_HEADING_PANEL_HIGHLIGHT_DEMO,
} from "./WcbHeadingPanelHighlight";
import {
	BCB_HEADING_PANEL_LINK,
	BCB_HEADING_PANEL_LINK_DEMO,
} from "./WcbHeadingPanelLink";
import {
	BCB_HEADING_PANEL_SEPARATOR,
	BCB_HEADING_PANEL_SEPARATOR_DEMO,
} from "./WcbHeadingPanelSeparator";
import {
	BCB_HEADING_PANEL_SUB_HEADING,
	BCB_HEADING_PANEL_SUB_HEADING_DEMO,
} from "./WcbHeadingPanelSubHeading";
import {
	BCB_HEADING_PANEL_STYLE_BORDER,
	BCB_HEADING_PANEL_STYLE_BORDER_DEMO,
} from "./WcbHeadingPanel_StyleBorder";

export interface WcbBlockHeadingAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	heading: string;
	subHeading: string;
	general_content: BCB_HEADING_PANEL_CONTENT;
	//
	styles_heading: BCB_HEADING_PANEL_HEADING;
	styles_separator: BCB_HEADING_PANEL_SEPARATOR;
	styles_subHeading: BCB_HEADING_PANEL_SUB_HEADING;
	styles_link: BCB_HEADING_PANEL_LINK;
	styles_highlight: BCB_HEADING_PANEL_HIGHLIGHT;
	styles_background: BCB_HEADING_PANEL_BACKGROUND;
	styles_border: BCB_HEADING_PANEL_STYLE_BORDER;
	styles_dimensions: BCB_HEADING_PANEL_DIMENSION;
	//

	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
	advance_motionEffect: MyMotionEffectData;
}

const blokc1Attrs: AttrsGenericType<WcbBlockHeadingAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	heading: {
		type: "string",
		source: "html",
		selector: ".bcb-heading__heading",
		default: "",
	},
	subHeading: {
		type: "string",
		source: "html",
		selector: ".bcb-heading__subHeading",
		default: "",
	},
	//
	general_content: {
		type: "object",
		default: BCB_HEADING_PANEL_CONTENT_DEMO,
	},
	//
	styles_heading: {
		type: "object",
		default: BCB_HEADING_PANEL_HEADING_DEMO,
	},
	styles_separator: {
		type: "object",
		default: BCB_HEADING_PANEL_SEPARATOR_DEMO,
	},
	styles_subHeading: {
		type: "object",
		default: BCB_HEADING_PANEL_SUB_HEADING_DEMO,
	},
	styles_link: {
		type: "object",
		default: BCB_HEADING_PANEL_LINK_DEMO,
	},
	styles_highlight: {
		type: "object",
		default: BCB_HEADING_PANEL_HIGHLIGHT_DEMO,
	},
	styles_background: {
		type: "object",
		default: BCB_HEADING_PANEL_BACKGROUND_DEMO,
	},
	styles_border: {
		type: "object",
		default: BCB_HEADING_PANEL_STYLE_BORDER_DEMO,
	},
	styles_dimensions: {
		type: "object",
		default: BCB_HEADING_PANEL_DIMENSION_DEMO,
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
