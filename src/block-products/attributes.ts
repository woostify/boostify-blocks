import {
	AttrsGenericType,
	WcbAttrsCommonFromWp,
} from "../block-container/attributes";
import {
	MY_BORDER_CONTROL_DEMO,
	MyBorderControlData,
} from "../components/controls/MyBorderControl/types";
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
	BCB_PRODUCTS_PANEL_SORTINGANDFILTERING,
	BCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO,
} from "./WcbProducstPanelSortingAndFiltering";
import {
	BCB_PRODUCTS_PANEL_ADD_TO_CART_BTN,
	BCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO,
} from "./WcbProductsPanelButton";
import {
	BCB_PRODUCTS_PANEL_COTENT,
	BCB_PRODUCTS_PANEL_COTENT_DEMO,
} from "./WcbProductsPanelContent";
import {
	BCB_PRODUCTS_PANEL_FEATURED_IMAGE,
	BCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO,
} from "./WcbProductsPanelFeaturedImage";
import {
	BCB_PRODUCTS_PANEL_PAGINATION,
	BCB_PRODUCTS_PANEL_PAGINATION_DEMO,
} from "./WcbProductsPanelPagination";
import {
	BCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN,
	BCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO,
} from "./WcbProductsPanel_StyleAddToCartBtn";
import {
	BCB_PRODUCTS_PANEL_STYLE_CATEGORY,
	BCB_PRODUCTS_PANEL_STYLE_CATEGORY_DEMO,
} from "./WcbProductsPanel_StyleCategory";
import {
	BCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE,
	BCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO,
} from "./WcbProductsPanel_StyleFeaturedImage";
import {
	BCB_PRODUCTS_PANEL_STYLE_LAYOUT,
	BCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
} from "./WcbProductsPanel_StyleLayout";
import {
	BCB_PRODUCTS_PANEL_STYLE_PAGINATION,
	BCB_PRODUCTS_PANEL_STYLE_PAGINATION_DEMO,
} from "./WcbProductsPanel_StylePagination";
import {
	BCB_PRODUCTS_PANEL_STYLE_PRICE,
	BCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO,
} from "./WcbProductsPanel_StylePrice";
import {
	BCB_PRODUCTS_PANEL_STYLE_RATING,
	BCB_PRODUCTS_PANEL_STYLE_RATING_DEMO,
} from "./WcbProductsPanel_StyleRating";
import {
	BCB_PRODUCTS_PANEL_STYLE_SALE_BADGE,
	BCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO,
} from "./WcbProductsPanel_StyleSaleBadge";
import {
	BCB_PRODUCTS_PANEL_STYLE_TITLE,
	BCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO,
} from "./WcbProductsPanel_StyleTitle";
export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;

	//
	general_sortingAndFiltering?: BCB_PRODUCTS_PANEL_SORTINGANDFILTERING;
	general_content?: BCB_PRODUCTS_PANEL_COTENT;
	general_featuredImage?: BCB_PRODUCTS_PANEL_FEATURED_IMAGE;
	general_addToCartBtn?: BCB_PRODUCTS_PANEL_ADD_TO_CART_BTN;
	general_pagination?: BCB_PRODUCTS_PANEL_PAGINATION;
	//
	style_category?: BCB_PRODUCTS_PANEL_STYLE_CATEGORY;
	style_title?: BCB_PRODUCTS_PANEL_STYLE_TITLE;
	style_featuredImage?: BCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE;
	style_layout?: BCB_PRODUCTS_PANEL_STYLE_LAYOUT;
	style_addToCardBtn?: BCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN;
	style_pagination?: BCB_PRODUCTS_PANEL_STYLE_PAGINATION;
	style_saleBadge?: BCB_PRODUCTS_PANEL_STYLE_SALE_BADGE;
	style_border?: MyBorderControlData;
	style_price?: BCB_PRODUCTS_PANEL_STYLE_PRICE;
	style_rating?: BCB_PRODUCTS_PANEL_STYLE_RATING;
	//
	advance_responsiveCondition?: MyResponsiveConditionControlData;
	advance_zIndex?: MyZIndexControlData;
	advance_motionEffect?: MyMotionEffectData;
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},

	// THE ATTRS OF BLOCK HERE
	general_sortingAndFiltering: {
		type: "object",
		// default: BCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO,
	},
	general_content: {
		type: "object",
		// default: BCB_PRODUCTS_PANEL_COTENT_DEMO,
	},
	general_featuredImage: {
		type: "object",
		// default: BCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO,
	},
	general_addToCartBtn: {
		type: "object",
		// default: BCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO,
	},
	general_pagination: {
		type: "object",
		// default: BCB_PRODUCTS_PANEL_PAGINATION_DEMO,
	},
	//
	style_title: {
		type: "object",
		// default: BCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO,
	},
	style_category: {
		type: "object",
		// default: BCB_PRODUCTS_PANEL_STYLE_CATEGORY_DEMO,
	},
	style_featuredImage: {
		type: "object",
		// default: BCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO,
	},
	style_layout: {
		type: "object",
		// default: BCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
	},
	style_addToCardBtn: {
		type: "object",
		// default: BCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO,
	},
	style_pagination: {
		type: "object",
		// default: BCB_PRODUCTS_PANEL_STYLE_PAGINATION_DEMO,
	},
	style_saleBadge: {
		type: "object",
		// default: BCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO,
	},
	style_border: {
		type: "object",
		// default: MY_BORDER_CONTROL_DEMO,
	},
	style_price: {
		type: "object",
		// default: BCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO,
	},
	style_rating: {
		type: "object",
		// default: BCB_PRODUCTS_PANEL_STYLE_RATING_DEMO,
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
