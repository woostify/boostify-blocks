import { useEffect, useState } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
import { patchSwiperMountForIframe } from "../utils/patchSwiperMount";
import { WCB_PRODUCTS_PANEL_STYLE_LAYOUT } from "./WcbProductsPanel_StyleLayout";
import { pauseCarouselOnHover, resolveCarouselGap } from "../../public/js/products-carousel/options.js";

patchSwiperMountForIframe(Swiper);

interface UseProductsCarouselEditorParams {
	styleLayout?: WCB_PRODUCTS_PANEL_STYLE_LAYOUT;
	activeCol: string | number;
	activeColGap: string;
}

/**
 * Manages Swiper lifecycle for the Products block in the Gutenberg editor (`ServerSideRender`).
 * Uses a callback-ref state (`setSsrContainerEl`) so observers automatically rebind when
 * `MyCacheProvider` or the `editor-canvas` iframe remounts the container node on initial load.
 */
export function useProductsCarouselEditor({
	styleLayout,
	activeCol,
	activeColGap,
}: UseProductsCarouselEditorParams) {
	const [ssrContainerEl, setSsrContainerEl] = useState<HTMLDivElement | null>(
		null
	);

	const isCarouselMode = styleLayout?.layoutType === "carousel";
	const carouselIsShowArrow = styleLayout?.isShowArrow ?? true;
	const carouselIsShowDots = styleLayout?.isShowDots ?? true;
	const carouselIsAutoPlay = styleLayout?.isAutoPlay ?? false;
	const carouselAutoplaySpeed = styleLayout?.autoplaySpeed ?? 3000;
	const carouselHoverpause = styleLayout?.hoverpause ?? true;
	const carouselLoop = styleLayout?.loop ?? false;
	const carouselSpeed = styleLayout?.animationDuration ?? 500;

	useEffect(() => {
		if (!isCarouselMode || !ssrContainerEl) {
			return;
		}

		let swiperInstance: Swiper | null = null;
		let mountedCarouselEl: HTMLElement | null = null;
		let rafId: number | null = null;
		let rafWin: Window | null = null;
		let postInitRafId: number | null = null;
		let postInitRafWin: Window | null = null;

		const scheduleRaf = (win: Window, fn: () => void) => {
			if (rafId !== null) {
				return;
			}
			rafWin = win;
			rafId = win.requestAnimationFrame(() => {
				rafId = null;
				rafWin = null;
				fn();
			});
		};

		const initEditorSwiper = () => {
			const carousel = ssrContainerEl.querySelector(
				".wcb-products__carousel"
			);
			const carouselEl = carousel?.querySelector<HTMLElement>(
				":scope > .wcb-products__carousel-viewport"
			);
			if (!carousel || !carouselEl) {
				return;
			}
			const ownerWin = carouselEl.ownerDocument?.defaultView || window;
			if (carouselEl.clientWidth === 0) {
				scheduleRaf(ownerWin, initEditorSwiper);
				return;
			}

			const prevEl = carousel.querySelector<HTMLElement>(
				":scope > .swiper-button-prev"
			);
			const nextEl = carousel.querySelector<HTMLElement>(
				":scope > .swiper-button-next"
			);
			const pagEl = carouselEl.querySelector(
				".swiper-pagination"
			) as HTMLElement | null;

			const hasExpectedDots =
				!carouselIsShowDots || (pagEl !== null && pagEl.children.length > 0);
			const hasExpectedArrows =
				!carouselIsShowArrow || (prevEl !== null && nextEl !== null);

			const existingSwiper = (carouselEl as any).swiper;
			if (
				carouselEl === mountedCarouselEl &&
				existingSwiper &&
				!existingSwiper.destroyed &&
				existingSwiper.initialized &&
				hasExpectedDots &&
				hasExpectedArrows
			) {
				existingSwiper.update();
				return;
			}

			if (swiperInstance) {
				swiperInstance.destroy(true, true);
				swiperInstance = null;
			} else if (existingSwiper) {
				existingSwiper.destroy(true, true);
			}
			mountedCarouselEl = carouselEl;

			try {
				swiperInstance = new Swiper(carouselEl, {
					modules: [Navigation, Pagination, Autoplay],
					observer: true,
					observeParents: true,
					allowTouchMove: false,
					simulateTouch: false,
					loop: carouselLoop,
					speed: carouselSpeed,
					autoplay: carouselIsAutoPlay
						? {
								delay: carouselAutoplaySpeed,
								stopOnLastSlide: !carouselLoop,
						  }
						: false,
					slidesPerView: Math.max(1, Number(activeCol) || 1),
					slidesPerGroup: 1,
					spaceBetween: resolveCarouselGap(activeColGap, carouselEl),
					navigation:
						carouselIsShowArrow && prevEl && nextEl
							? { prevEl, nextEl }
							: false,
					pagination:
						carouselIsShowDots && pagEl
							? { el: pagEl, clickable: true }
							: false,
				});
				if (carouselIsAutoPlay && carouselHoverpause) {
					pauseCarouselOnHover(carousel, swiperInstance);
				}
			} catch (error) {
				console.error("Products Swiper editor init failed:", error);
			}

			if (postInitRafId !== null) {
				(postInitRafWin || ownerWin).cancelAnimationFrame(postInitRafId);
				postInitRafId = null;
				postInitRafWin = null;
			}
			postInitRafWin = ownerWin;
			postInitRafId = ownerWin.requestAnimationFrame(() => {
				postInitRafId = null;
				postInitRafWin = null;
				if (
					swiperInstance &&
					!swiperInstance.destroyed &&
					carouselEl.isConnected
				) {
					swiperInstance.update();
					if (
						carouselIsShowDots &&
						swiperInstance.pagination &&
						pagEl &&
						pagEl.children.length === 0
					) {
						swiperInstance.params.pagination = {
							...(typeof swiperInstance.params.pagination === "object"
								? swiperInstance.params.pagination
								: {}),
							el: pagEl,
							clickable: true,
						};
						swiperInstance.pagination.init();
						swiperInstance.pagination.render();
						swiperInstance.pagination.update();
					}
				}
			});
		};

		initEditorSwiper();

		const observer = new MutationObserver(() => {
			initEditorSwiper();
		});
		observer.observe(ssrContainerEl, { childList: true, subtree: true });

		const resizeObserver =
			typeof ResizeObserver !== "undefined"
				? new ResizeObserver(() => {
						initEditorSwiper();
				  })
				: null;
		resizeObserver?.observe(ssrContainerEl);

		return () => {
			if (rafId !== null) {
				(rafWin || window).cancelAnimationFrame(rafId);
			}
			if (postInitRafId !== null) {
				(postInitRafWin || window).cancelAnimationFrame(postInitRafId);
			}
			resizeObserver?.disconnect();
			observer.disconnect();
			if (swiperInstance) {
				swiperInstance.destroy(true, true);
				swiperInstance = null;
			}
		};
	}, [
		ssrContainerEl,
		isCarouselMode,
		activeCol,
		activeColGap,
		carouselIsShowArrow,
		carouselIsShowDots,
		carouselIsAutoPlay,
		carouselAutoplaySpeed,
		carouselHoverpause,
		carouselLoop,
		carouselSpeed,
	]);

	return {
		setSsrContainerEl,
		isCarouselMode,
		carouselIsShowArrow,
		carouselIsShowDots,
	};
}
