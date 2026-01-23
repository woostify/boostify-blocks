import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import {
	MY_BORDER_CONTROL_DEMO,
	MyBorderControlData,
} from "../components/controls/MyBorderControl/types";
import { MyBoxShadowControlData } from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
import { MY_BOX_SHADOW_CONTROL_DEMO } from "../components/controls/MyBoxShadowControl/types";
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
	BCB_POST_GRID_PANEL_PAGINATION,
	BCB_POST_GRID_PANEL_PAGINATION_DEMO,
} from "./WcbPostGridPanelPagination";
import {
	BCB_POST_GRID_PANEL_POST_CONTENT,
	BCB_POST_GRID_PANEL_POST_CONTENT_DEMO,
} from "./WcbPostGridPanelPostContent";
import {
	BCB_POST_GRID_PANEL_POST_FEATURED_IMAGE,
	BCB_POST_GRID_PANEL_POST_FEATURED_IMAGE_DEMO,
} from "./WcbPostGridPanelPostFeaturedImage";
import {
	BCB_POST_GRID_PANEL_POST_META,
	BCB_POST_GRID_PANEL_POST_META_DEMO,
} from "./WcbPostGridPanelPostMeta";
import {
	BCB_POST_GRID_PANEL_READMORE_LINK,
	BCB_POST_GRID_PANEL_READMORE_LINK_DEMO,
} from "./WcbPostGridPanelReadMoreLink";
import {
	BCB_POST_GRID_PANEL_STYLE_EXCERPT,
	BCB_POST_GRID_PANEL_STYLE_EXCERPT_DEMO,
} from "./WcbPostGridPanel_StyleExcerpt";
import {
	BCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE,
	BCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE_DEMO,
} from "./WcbPostGridPanel_StyleFeaturedImage";
import {
	BCB_POST_GRID_PANEL_STYLE_LAYOUT,
	BCB_POST_GRID_PANEL_STYLE_LAYOUT_DEMO,
} from "./WcbPostGridPanel_StyleLayout";
import {
	BCB_POST_GRID_PANEL_STYLE_META,
	BCB_POST_GRID_PANEL_STYLE_META_DEMO,
} from "./WcbPostGridPanel_StyleMeta";
import {
	BCB_POST_GRID_PANEL_STYLE_PAGINATION,
	BCB_POST_GRID_PANEL_STYLE_PAGINATION_DEMO,
} from "./WcbPostGridPanel_StylePagination";
import {
	BCB_POST_GRID_PANEL_STYLE_READMORE_LINK,
	BCB_POST_GRID_PANEL_STYLE_READMORE_LINK_DEMO,
} from "./WcbPostGridPanel_StyleReadmoreLink";
import {
	BCB_POST_GRID_PANEL_STYLE_TAXONOMY,
	BCB_POST_GRID_PANEL_STYLE_TAXONOMY_DEMO,
} from "./WcbPostGridPanel_StyleTaxonomy";
import {
	BCB_POST_GRID_PANEL_STYLE_TITLE,
	BCB_POST_GRID_PANEL_STYLE_TITLE_DEMO,
} from "./WcbPostGridPanel_StyleTitle";
import {
	BCB_POSTS_GRID_PANEL_SORTINGANDFILTERING,
	BCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO,
} from "./WcbPostsGridPanelSortingAndFiltering";
export interface WcbBlockPostsGridAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	//
	general_sortingAndFiltering?: BCB_POSTS_GRID_PANEL_SORTINGANDFILTERING;
	general_postContent?: BCB_POST_GRID_PANEL_POST_CONTENT;
	general_postMeta?: BCB_POST_GRID_PANEL_POST_META;
	general_postFeaturedImage?: BCB_POST_GRID_PANEL_POST_FEATURED_IMAGE;
	general_readmoreLink?: BCB_POST_GRID_PANEL_READMORE_LINK;
	general_pagination?: BCB_POST_GRID_PANEL_PAGINATION;
	//
	style_layout?: BCB_POST_GRID_PANEL_STYLE_LAYOUT;
	style_title?: BCB_POST_GRID_PANEL_STYLE_TITLE;
	style_excerpt?: BCB_POST_GRID_PANEL_STYLE_EXCERPT;
	style_taxonomy?: BCB_POST_GRID_PANEL_STYLE_TAXONOMY;
	style_meta?: BCB_POST_GRID_PANEL_STYLE_META;
	style_readmoreLink?: BCB_POST_GRID_PANEL_STYLE_READMORE_LINK;
	style_pagination?: BCB_POST_GRID_PANEL_STYLE_PAGINATION;
	style_featuredImage?: BCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE;
	style_border?: MyBorderControlData;
	style_boxShadow?: MyBoxShadowControlData;
	//
	advance_responsiveCondition?: MyResponsiveConditionControlData;
	advance_zIndex?: MyZIndexControlData;
	advance_motionEffect?: MyMotionEffectData;
}

const blokc1Attrs: AttrsGenericType<WcbBlockPostsGridAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	// THE ATTRS OF BLOCK HERE
	general_sortingAndFiltering: {
		type: "object",
		// default: BCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO,
	},
	general_postContent: {
		type: "object",
		// default: BCB_POST_GRID_PANEL_POST_CONTENT_DEMO,
	},
	general_postMeta: {
		type: "object",
		// default: BCB_POST_GRID_PANEL_POST_META_DEMO,
	},
	general_postFeaturedImage: {
		type: "object",
		// default: BCB_POST_GRID_PANEL_POST_FEATURED_IMAGE_DEMO,
	},
	general_readmoreLink: {
		type: "object",
		// default: BCB_POST_GRID_PANEL_READMORE_LINK_DEMO,
	},
	general_pagination: {
		type: "object",
		// default: BCB_POST_GRID_PANEL_PAGINATION_DEMO,
	},
	// STYLES
	style_layout: {
		type: "object",
		// default: BCB_POST_GRID_PANEL_STYLE_LAYOUT_DEMO,
	},
	style_title: {
		type: "object",
		// default: BCB_POST_GRID_PANEL_STYLE_TITLE_DEMO,
	},
	style_excerpt: {
		type: "object",
		// default: BCB_POST_GRID_PANEL_STYLE_EXCERPT_DEMO,
	},
	style_taxonomy: {
		type: "object",
		// default: BCB_POST_GRID_PANEL_STYLE_TAXONOMY_DEMO,
	},
	style_meta: {
		type: "object",
		// default: BCB_POST_GRID_PANEL_STYLE_META_DEMO,
	},
	style_readmoreLink: {
		type: "object",
		// default: BCB_POST_GRID_PANEL_STYLE_READMORE_LINK_DEMO,
	},
	style_pagination: {
		type: "object",
		// default: BCB_POST_GRID_PANEL_STYLE_PAGINATION_DEMO,
	},
	style_featuredImage: {
		type: "object",
		// default: BCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE_DEMO,
	},
	style_border: {
		type: "object",
		// default: MY_BORDER_CONTROL_DEMO,
	},
	style_boxShadow: {
		type: "object",
		// default: MY_BOX_SHADOW_CONTROL_DEMO,
	},
	// ADVANCE
	advance_responsiveCondition: {
		type: "object",
		// default: RESPONSIVE_CONDITON_DEMO,
	},
	advance_zIndex: {
		type: "object",
		// default: Z_INDEX_DEMO,
	},
	advance_motionEffect: {
		type: "object",
		// default: MY_MOTION_EFFECT_DEMO,
	},
};

export default blokc1Attrs;
