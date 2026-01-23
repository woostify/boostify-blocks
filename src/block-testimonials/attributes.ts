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
import { TESTIMONIAL_ITEM_DEMO } from "./Edit";
import {
	BCB_TESTIMONIALS_PANEL_CAROUSEL,
	BCB_TESTIMONIALS_PANEL_CAROUSEL_DEMO,
} from "./WcbTestimonialsPanelCarousel";
import {
	BCB_TESTIMONIALS_PANEL_GENERAL,
	BCB_TESTIMONIALS_PANEL_GENERAL_DEMO,
} from "./WcbTestimonialsPanelGeneral";
import {
	BCB_TESTIMONIALS_PANEL_IMAGES,
	BCB_TESTIMONIALS_PANEL_IMAGES_DEMO,
} from "./WcbTestimonialsPanelImages";
import {
	BCB_TESTIMONIALS_PANEL_RATING,
	BCB_TESTIMONIALS_PANEL_RATING_DEMO,
} from "./WcbTestimonialsPanelRating";
import {
	BCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS,
	BCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO,
} from "./WcbTestimonialsPanel_StyleArrowDots";
import {
	BCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER,
	BCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
} from "./WcbTestimonialsPanel_StyleBackground";
import {
	BCB_TESTIMONIALS_PANEL_STYLE_COMPANY,
	BCB_TESTIMONIALS_PANEL_STYLE_COMPANY_DEMO,
} from "./WcbTestimonialsPanel_StyleCompany";
import { BCB_TESTIMONIALS_PANEL_STYLE_CONTENT_DEMO } from "./WcbTestimonialsPanel_StyleContent";
import {
	BCB_TESTIMONIALS_PANEL_STYLE_DIMENSION,
	BCB_TESTIMONIALS_PANEL_STYLE_DIMENSION_DEMO,
} from "./WcbTestimonialsPanel_StyleDimension";
import {
	BCB_TESTIMONIALS_PANEL_STYLE_IMAGE,
	BCB_TESTIMONIALS_PANEL_STYLE_IMAGE_DEMO,
} from "./WcbTestimonialsPanel_StyleImage";
import {
	BCB_TESTIMONIALS_PANEL_STYLE_RATING,
	BCB_TESTIMONIALS_PANEL_STYLE_RATING_DEMO,
} from "./WcbTestimonialsPanel_StyleRating";
import {
	BCB_TESTIMONIALS_PANEL_STYLE_NAME,
	BCB_TESTIMONIALS_PANEL_STYLE_NAME_DEMO,
} from "./WcbTestimonialsPanel_StyleName";

export interface TestimonialItem {
	content: string;
	name: string;
	companyName: string;
}

export interface WcbAttrs extends WcbAttrsCommonFromWp {
	uniqueId: string;
	testimonials: TestimonialItem[];
	//
	general_general: BCB_TESTIMONIALS_PANEL_GENERAL;
	general_images: BCB_TESTIMONIALS_PANEL_IMAGES;
	general_rating: BCB_TESTIMONIALS_PANEL_RATING;
	general_carousel: BCB_TESTIMONIALS_PANEL_CAROUSEL;
	//
	style_name: BCB_TESTIMONIALS_PANEL_STYLE_NAME;
	style_content: BCB_TESTIMONIALS_PANEL_STYLE_NAME;
	style_company: BCB_TESTIMONIALS_PANEL_STYLE_COMPANY;
	style_image: BCB_TESTIMONIALS_PANEL_STYLE_IMAGE;
	style_rating: BCB_TESTIMONIALS_PANEL_STYLE_RATING;
	style_arrowAndDots: BCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS;
	style_backgroundAndBorder: BCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER;
	style_dimension: BCB_TESTIMONIALS_PANEL_STYLE_DIMENSION;
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

	testimonials: {
		type: "array",
		default: [
			TESTIMONIAL_ITEM_DEMO,
			TESTIMONIAL_ITEM_DEMO,
			TESTIMONIAL_ITEM_DEMO,
		],
	},

	// THE ATTRS OF BLOCK HERE
	general_general: {
		type: "object",
		default: BCB_TESTIMONIALS_PANEL_GENERAL_DEMO,
	},
	general_images: {
		type: "object",
		default: BCB_TESTIMONIALS_PANEL_IMAGES_DEMO,
	},
	general_rating: {
		type: "object",
		default: BCB_TESTIMONIALS_PANEL_RATING_DEMO,
	},
	general_carousel: {
		type: "object",
		default: BCB_TESTIMONIALS_PANEL_CAROUSEL_DEMO,
	},
	//
	style_name: {
		type: "object",
		default: BCB_TESTIMONIALS_PANEL_STYLE_NAME_DEMO,
	},
	style_content: {
		type: "object",
		default: BCB_TESTIMONIALS_PANEL_STYLE_CONTENT_DEMO,
	},
	style_company: {
		type: "object",
		default: BCB_TESTIMONIALS_PANEL_STYLE_COMPANY_DEMO,
	},
	style_image: {
		type: "object",
		default: BCB_TESTIMONIALS_PANEL_STYLE_IMAGE_DEMO,
	},
	style_rating: {
		type: "object",
		default: BCB_TESTIMONIALS_PANEL_STYLE_RATING_DEMO,
	},
	style_arrowAndDots: {
		type: "object",
		default: BCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO,
	},
	style_backgroundAndBorder: {
		type: "object",
		default: BCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
	},
	style_dimension: {
		type: "object",
		default: BCB_TESTIMONIALS_PANEL_STYLE_DIMENSION_DEMO,
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
