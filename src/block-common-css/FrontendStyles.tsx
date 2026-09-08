import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { initCarouselForWcbTestimonials } from "../block-testimonials/FrontendStyles";
import { initCarouselForWcbSliders } from "../block-slider/FrontendStyles";
import { initCarouselForWcbProducts } from "../block-products/FrontendStyles";

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
		// Testimonials (Swiper) block - only needs GlobalCss (dynamic
		// color/size/spacing CSS) rendered here. Swiper itself is
		// initialised separately via the Interactivity API store (public/js/
		// testimonials-swiper/boostify-blocks-testimonials-swiper-view.js),
		// reading data-wp-context straight off the saved markup - no F
		// callback needed for this entry. Uses its own distinct wrapper
		// class (not "wcb-testimonials__wrap"), so unlike the Slick/Swiper
		// Slider blocks there's no selector collision to guard against.
		D: ".wcb-testimonials-swiper__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-testimonials-swiper/GlobalCss")),
	},
	{
		D: ".wcb-countdown__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-countdown/GlobalCss")),
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
		// :not(.wcb-slider-swiper__wrap) excludes the newer Swiper-based Slider
		// block, which reuses this same "wcb-slider__wrap ... wcb-update-div"
		// class string. Without the exclusion this entry's Slick-targeting
		// GlobalCss and jQuery Slick init (initCarouselForWcbSliders) would
		// also match and run against the Swiper block's markup, silently
		// producing no arrow/dot CSS (wrong selectors: .slick-prev/.slick-dots)
		// and corrupting its DOM via Slick's carousel init - see the dedicated
		// entry below for the correct component.
		D: ".wcb-slider__wrap.wcb-update-div:not(.wcb-slider-swiper__wrap)",
		C: React.lazy(() => import("../block-slider/GlobalCss")),
		F: initCarouselForWcbSliders,
	},
	{
		// Swiper-based Slider block - only needs GlobalCss (dynamic
		// color/size/spacing CSS) rendered here. Swiper itself is
		// initialised separately via the Interactivity API store (public/js/
		// slider-swiper/boostify-blocks-slider-swiper-view.js), reading
		// data-wp-context straight off the saved markup - no F callback
		// needed for this entry.
		D: ".wcb-slider-swiper__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-slider-swiper/GlobalCss")),
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
classes.forEach(({ D, C, F }) => {
	const divs = document.querySelectorAll(D);

	if (divs && divs.length) {
		renderToDom(divs, C, F);
	}
});

/**
 * Renders the GlobalCss component to the DOM and optionally executes a function on each element.
 * 
 * @param {NodeListOf<Element>} divsToUpdate - The divs to update.
 * @param {React.LazyExoticComponent<React.NamedExoticComponent<any>>} GlobalCss - The GlobalCss component to render.
 * @param {(el: Element, props: any) => void} [funcRunOnEl] - Optional function to run on each element after rendering.
 */
function renderToDom(
	divsToUpdate: NodeListOf<Element>,
	GlobalCss: React.LazyExoticComponent<React.NamedExoticComponent<any>>,
	funcRunOnEl?: (el: Element, props: any) => void
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

		ReactDOM.render(
			<Suspense fallback={<div />}>
				<GlobalCss {...props} />
			</Suspense>,
			divRenderCssEl
		);

		// run function if exits
		funcRunOnEl && funcRunOnEl(div, props);

		//
		div.classList.remove("wcb-update-div");
		preEl.remove();
	});
}
