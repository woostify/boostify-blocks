import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { initCarouselForWcbTestimonials } from "../block-testimonials/FrontendStyles";
import { initCarouselForWcbSliders } from "../block-slider/FrontendStyles";
import { initCarouselForWcbProducts } from "../block-products/FrontendStyles";
import { initCountDown } from "../block-countdown/FrontendScript";
import { initAdvanceMotionEffect } from "../block-container/getAdvanveStyles";

/**
 * Helper: creates an init function for advance motion effect (animation)
 * that runs independently of emotion CSS rendering, so it works even when
 * file generation is enabled and inline CSS is skipped.
 */
const createMotionEffectInit = () => (el: Element, props: any) => {
	const { uniqueId } = props;
	if (uniqueId) {
		initAdvanceMotionEffect({
			advance_motionEffect: props.advance_motionEffect,
			className: `.${uniqueId}[data-uniqueid=${uniqueId}]`,
		});
	}
};

const motionEffectInit = createMotionEffectInit();

const classes: {
	D: string;
	C: React.LazyExoticComponent<React.NamedExoticComponent<any>>;
	F?: (el: Element, props: any) => void;
}[] = [
	{
		D: ".wcb-button__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-button/GlobalCss")),
	},
	{
		D: ".wcb-buttons__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-buttons/GlobalCss")),
	},
	{
		D: ".wcb-cta__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-cta/GlobalCss")),
	},
	{
		D: ".wcb-products__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-products/GlobalCss")),
		F: initCarouselForWcbProducts,
	},
	{
		D: ".wcb-posts-grid__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-posts-grid/GlobalCss")),
	},
	{
		D: ".wcb-container__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-container/GlobalCss")),
	},
	{
		D: ".wcb-faq__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-faq/GlobalCss")),
	},
	{
		D: ".wcb-form__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-form/GlobalCss")),
	},
	{
		D: ".wcb-heading__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-heading/GlobalCss")),
	},
	{
		D: ".wcb-icon-box__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-icon-box/GlobalCss")),
	},
	{
		D: ".wcb-image__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-image/GlobalCss")),
	},
	{
		D: ".wcb-map__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-map/GlobalCss")),
	},
	{
		D: ".wcb-team__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-team/GlobalCss")),
	},
	{
		D: ".wcb-testimonials__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-testimonials/GlobalCss")),
		F: initCarouselForWcbTestimonials,
	},
	{
		D: ".wcb-countdown__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-countdown/GlobalCss")),
		F: initCountDown,
	},
	{
		D: ".wcb-tabs__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-tabs/GlobalCss")),
	},
	{
		D: ".wcb-counter-box__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-counter/GlobalCss")),
	},
	{
		D: ".wcb-slider__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-slider/GlobalCss")),
		F: initCarouselForWcbSliders,
	},
	{
		D: ".wcb-slider-child__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-slider-child/GlobalCss")),
	},
	{
		D: ".wcb-icon-list__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-icon-list/GlobalCss")),
	},
	{
		D: ".wcb-icon-list__wrap.wcb-update-div[data-block-type='icon-item']",
		C: React.lazy(() => import("../block-icon-child/GlobalCss")),
	},
	{
		D: ".wcb-icon__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-icon/GlobalCss")),
	},
];
declare global {
	interface Window {
		boostify_blocks_file_generation_enabled?: boolean;
		boostify_blocks_file_css_loaded?: boolean;
		boostify_blocks_fallback_css?: boolean;
	}
}

/**
 * When file generation is ON and a static CSS file was already enqueued,
 * skip emotion <Global> rendering — CSS is served from the static file.
 * Init functions (carousels, forms, counters) still need to run.
 */
const shouldSkipEmotionCss = (): boolean => {
	return !!(
		window.boostify_blocks_file_generation_enabled &&
		window.boostify_blocks_file_css_loaded &&
		!window.boostify_blocks_fallback_css
	);
};

classes.forEach(({ D, C, F }) => {
	const divs = document.querySelectorAll(D);

	if (divs && divs.length) {
		renderToDom(divs, C, F, shouldSkipEmotionCss());
	}
});

/**
 * Renders the GlobalCss component to the DOM and optionally executes a function on each element.
 * 
 * @param {NodeListOf<Element>} divsToUpdate - The divs to update.
 * @param {React.LazyExoticComponent<React.NamedExoticComponent<any>>} GlobalCss - The GlobalCss component to render.
 * @param {(el: Element, props: any) => void} [funcRunOnEl] - Optional function to run on each element after rendering.
 * @param {boolean} [skipCss] - If true, skip emotion CSS rendering (used when static CSS file is loaded).
 */
function renderToDom(
	divsToUpdate: NodeListOf<Element>,
	GlobalCss: React.LazyExoticComponent<React.NamedExoticComponent<any>>,
	funcRunOnEl?: (el: Element, props: any) => void,
	skipCss: boolean = false
) {
	divsToUpdate.forEach((div) => {
		const preEl = div.querySelector(
			`pre[data-wcb-block-attrs=${div.getAttribute("data-uniqueid")}]`
		) as HTMLElement | null;

		const divRenderCssEl = div.querySelector(
			`div[data-wcb-global-styles=${div.getAttribute("data-uniqueid")}]`
		) as HTMLElement | null;

		if (!preEl || !preEl.innerText || !divRenderCssEl) {
			return;
		}
		//
		const props = JSON.parse(preEl?.innerText);
		//

		// Skip emotion <Global> rendering when static CSS file is loaded.
		// Init functions (carousels, forms, counters) still run.
		if (!skipCss) {
			ReactDOM.render(
				<Suspense fallback={<div />}>
					<GlobalCss {...props} />
				</Suspense>,
				divRenderCssEl
			);
		}

		// run function if exits
		funcRunOnEl && funcRunOnEl(div, props);

		// Always run motion effect (animation) init, even when skipCss=true.
		// This is separated from GlobalCss rendering so it works with file generation.
		motionEffectInit(div, props);

		//
		div.classList.remove("wcb-update-div");
		preEl.remove();
	});
}
