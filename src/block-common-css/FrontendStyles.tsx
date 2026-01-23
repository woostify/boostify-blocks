import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { initCarouselForWcbFaq } from "../block-faq/FrontendStyles";
import { handleSubmitFormForWcbForm } from "../block-form/FrontendStyles";
import { initCarouselForWcbTestimonials } from "../block-testimonials/FrontendStyles";
import { initCarouselForWcbSliders } from "../block-slider/FrontendStyles";
import { initCarouselForWcbProducts } from "../block-products/FrontendStyles";
import { initCountDown } from "../block-countdown/FrontendScript";
import { initTabsForWcbTabs } from "../block-tabs/FrontendStyles";
import { animateProgressElements } from "../block-counter/FrontendStyles";

const classes: {
	D: string;
	C: React.LazyExoticComponent<React.NamedExoticComponent<any>>;
	F?: (el: Element, props: any) => void;
}[] = [
	{
		D: ".bcb-button__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-button/GlobalCss")),
	},
	{
		D: ".bcb-buttons__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-buttons/GlobalCss")),
	},
	{
		D: ".bcb-cta__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-cta/GlobalCss")),
	},
	{
		D: ".bcb-products__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-products/GlobalCss")),
		F: initCarouselForWcbProducts,
	},
	{
		D: ".bcb-posts-grid__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-posts-grid/GlobalCss")),
	},
	{
		D: ".bcb-container__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-container/GlobalCss")),
	},
	{
		D: ".bcb-faq__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-faq/GlobalCss")),
		F: initCarouselForWcbFaq,
	},
	{
		D: ".bcb-form__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-form/GlobalCss")),
		F: handleSubmitFormForWcbForm,
	},
	{
		D: ".bcb-heading__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-heading/GlobalCss")),
	},
	{
		D: ".bcb-icon-box__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-icon-box/GlobalCss")),
	},
	{
		D: ".bcb-image__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-image/GlobalCss")),
	},
	{
		D: ".bcb-map__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-map/GlobalCss")),
	},
	{
		D: ".bcb-team__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-team/GlobalCss")),
	},
	{
		D: ".bcb-testimonials__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-testimonials/GlobalCss")),
		F: initCarouselForWcbTestimonials,
	},
	{
		D: ".bcb-countdown__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-countdown/GlobalCss")),
		F: initCountDown,
	},
	{
		D: ".bcb-tabs__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-tabs/GlobalCss")),
		F: initTabsForWcbTabs,
	},
	{
		D: ".bcb-counter-box__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-counter/GlobalCss")),
		F: animateProgressElements,
	},
	{
		D: ".bcb-slider__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-slider/GlobalCss")),
		F: initCarouselForWcbSliders,
	},
	{
		D: ".bcb-slider-child__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-slider-child/GlobalCss")),
	},
	{
		D: ".bcb-icon-list__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-icon-list/GlobalCss")),
	},
	{
		D: ".bcb-icon-list__wrap.bcb-update-div[data-block-type='icon-item']",
		C: React.lazy(() => import("../block-icon-child/GlobalCss")),
	},
	{
		D: ".bcb-icon__wrap.bcb-update-div",
		C: React.lazy(() => import("../block-icon/GlobalCss")),
	},
];
       
classes.forEach(({ D, C, F }) => {
	const divs = document.querySelectorAll(D);

	if (divs && divs.length) {
		renderToDom(divs, C, F);
	}
});

// ---

function renderToDom(
	divsToUpdate: NodeListOf<Element>,
	GlobalCss: React.LazyExoticComponent<React.NamedExoticComponent<any>>,
	funcRunOnEl?: (el: Element, props: any) => void
) {
	divsToUpdate.forEach((div) => {
		const preEl = div.querySelector(
			`pre[data-bcb-block-attrs=${div.getAttribute("data-uniqueid")}]`
		) as HTMLElement | null;

		const divRenderCssEl = div.querySelector(
			`div[data-bcb-global-styles=${div.getAttribute("data-uniqueid")}]`
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
		div.classList.remove("bcb-update-div");
		preEl.remove();
	});
}
