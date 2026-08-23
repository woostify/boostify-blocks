import React from "react";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import GlobalCss from "./GlobalCss";
import { WCB_SLIDER_PANEL_GENERAL_DEMO } from "./WcbSliderPanelGeneral";
import { WCB_SLIDER_PANEL_CAROUSEL_DEMO } from "./WcbSliderPanelCarousel";
import { WCB_SLIDER_PANEL_STYLE_ARROW_DOTS_DEMO } from "./WcbSliderPanel_StyleArrowDots";
import { WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO } from "./WcbSliderPanel_StyleBackground";
import { WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO } from "./WcbSliderPanel_StyleDimension";
import { WCB_SLIDER_PANEL_STYLE_NAME_DEMO } from "./WcbSliderPanel_StyleName";
import { WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO } from "./WcbSliderPanel_StyleContent";
import { WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO } from "./WcbSliderPanel_StyleCompany";
import { WCB_SLIDER_PANEL_STYLE_BOXSHADOW_DEMO } from "./WcbSliderPanel_StyleBoxshadow";
import { WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT_DEMO } from "./WcbSlidersPanel_StyleVerticalAlignment";
import { RESPONSIVE_CONDITON_DEMO } from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import { Z_INDEX_DEMO } from "../components/controls/MyZIndexControl/MyZIndexControl";
import { MY_MOTION_EFFECT_DEMO } from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
// @ts-ignore
import "./style.scss";

export interface WcbAttrsForSave extends WcbAttrs {}

const NAMESPACE = "boostify-blocks/slider-swiper";

// Arrow icons for the custom prev/next navigation buttons, matching the
// ones rendered in Edit.tsx so editor/frontend stay visually consistent.
function ArrowIcon({ direction }: { direction: "next" | "prev" }) {
	return (
		<svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d={
					direction === "next"
						? "M8.25 4.5l7.5 7.5-7.5 7.5"
						: "M15.75 19.5L8.25 12l7.5-7.5"
				}
			/>
		</svg>
	);
}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		sliders,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_carousel,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_dimension,
		style_name,
		style_content,
		style_company,
		style_boxshadow,
		advance_motionEffect,
		style_verticalAlignment,
	} = attributes;

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		sliders,
		advance_responsiveCondition: advance_responsiveCondition || RESPONSIVE_CONDITON_DEMO,
		advance_zIndex: advance_zIndex || Z_INDEX_DEMO,
		general_general: general_general || WCB_SLIDER_PANEL_GENERAL_DEMO,
		general_carousel: general_carousel || WCB_SLIDER_PANEL_CAROUSEL_DEMO,
		style_arrowAndDots: style_arrowAndDots || WCB_SLIDER_PANEL_STYLE_ARROW_DOTS_DEMO,
		style_backgroundAndBorder: style_backgroundAndBorder || WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
		style_dimension: style_dimension || WCB_SLIDER_PANEL_STYLE_DIMENSION_DEMO,
		style_name: style_name || WCB_SLIDER_PANEL_STYLE_NAME_DEMO,
		style_content: style_content || WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO,
		style_company: style_company || WCB_SLIDER_PANEL_STYLE_COMPANY_DEMO,
		style_boxshadow: style_boxshadow || WCB_SLIDER_PANEL_STYLE_BOXSHADOW_DEMO,
		advance_motionEffect: advance_motionEffect || MY_MOTION_EFFECT_DEMO,
		style_verticalAlignment: style_verticalAlignment || WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT_DEMO,
	};

	const blockProps = useBlockProps.save({
		className: `wcb-slider__wrap ${uniqueId} wcb-update-div`,
		"data-uniqueid": uniqueId,
	});

	const {
		animationDuration,
		autoplaySpeed,
		hoverpause,
		isAutoPlay,
		rewind,
		showArrowsDots,
		adaptiveHeight,
	} = newAttrForSave.general_carousel;
	const { columns } = newAttrForSave.general_general;

	const {
		value_Desktop: columnsDesktop,
		value_Tablet: columnsTablet,
		value_Mobile: columnsMobile,
	} = getValueFromAttrsResponsives(columns);

	const showArrows = showArrowsDots !== "Dot";
	const showDots = showArrowsDots !== "Arrow";

	// Config read by callbacks.initSwiper (view.js) to build the Swiper
	// instance - the Interactivity API equivalent of the old FrontendStyles.tsx
	// jQuery init props.
	const swiperContext = {
		rewind,
		animationDuration: animationDuration || 500,
		isAutoPlay,
		autoplaySpeed,
		hoverpause,
		adaptiveHeight,
		showArrowsDots,
		columns: {
			desktop: columnsDesktop || 1,
			tablet: columnsTablet || columnsDesktop || 1,
			mobile: columnsMobile || columnsTablet || columnsDesktop || 1,
		},
	};

	return (
		<div {...blockProps}>
			{/* Frontend CSS injection elements */}
			<div data-wcb-global-styles={uniqueId}></div>
			<pre data-wcb-block-attrs={uniqueId} style={{ display: "none" }}>
				{JSON.stringify(newAttrForSave, null, 2)}
			</pre>

			{/* Parent CSS styles for edit mode */}
			<GlobalCss {...newAttrForSave} />

			{/* Slider structure - Swiper markup baked in at save time, initialised
			    on the frontend via the Interactivity API store (view.js). */}
			<div
				className="wcb-slider__wrap-items swiper"
				data-wp-interactive={NAMESPACE}
				data-wp-context={JSON.stringify(swiperContext)}
				data-wp-init="callbacks.initSwiper"
			>
				<div className="swiper-wrapper">
					<InnerBlocks.Content />
				</div>

				{showArrows && (
					<>
						<div className="swiper-button-prev">
							<ArrowIcon direction="prev" />
						</div>
						<div className="swiper-button-next">
							<ArrowIcon direction="next" />
						</div>
					</>
				)}

				{showDots && <div className="swiper-pagination"></div>}
			</div>
		</div>
	);
}
