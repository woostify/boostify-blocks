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

patchSwiperMountForIframe(Swiper);

export interface ProductsSwiperConfig {
	columns?: {
		Desktop?: number;
		Tablet?: number;
		Mobile?: number;
	};
	spaceBetween?: {
		Desktop?: string | number;
		Tablet?: string | number;
		Mobile?: string | number;
	};
	isShowArrow?: boolean;
	isShowDots?: boolean;
	isAutoPlay?: boolean;
	autoplaySpeed?: number;
	hoverpause?: boolean;
	loop?: boolean;
	animationDuration?: number;
}

/**
 * Convert a CSS length string (px, rem, em, numeric) to pixels for Swiper's spaceBetween option.
 */
export function parseSpaceBetweenPx(
	value?: string | number | null,
	fallback = 24
): number {
	if (value === undefined || value === null || value === "") {
		return fallback;
	}
	if (typeof value === "number") {
		return Number.isFinite(value) ? value : fallback;
	}
	const trimmed = String(value).trim();
	const parsed = parseFloat(trimmed);
	if (!Number.isFinite(parsed)) {
		return fallback;
	}
	if (trimmed.endsWith("rem") || trimmed.endsWith("em")) {
		const rootFontSize =
			typeof window !== "undefined" && typeof document !== "undefined"
				? parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
				: 16;
		return parsed * rootFontSize;
	}
	return parsed;
}

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
			const carouselEl = ssrContainerEl.querySelector(
				".wcb-products__carousel"
			) as HTMLElement | null;
			if (!carouselEl) {
				return;
			}
			const ownerWin = carouselEl.ownerDocument?.defaultView || window;
			if (carouselEl.clientWidth === 0) {
				scheduleRaf(ownerWin, initEditorSwiper);
				return;
			}

			const prevEl = carouselEl.querySelector(
				".swiper-button-prev"
			) as HTMLElement | null;
			const nextEl = carouselEl.querySelector(
				".swiper-button-next"
			) as HTMLElement | null;
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
					loop: carouselLoop,
					speed: carouselSpeed,
					autoplay: carouselIsAutoPlay
						? {
								delay: carouselAutoplaySpeed,
								pauseOnMouseEnter: carouselHoverpause,
								stopOnLastSlide: !carouselLoop,
						  }
						: false,
					slidesPerView: Math.max(1, Number(activeCol) || 1),
					slidesPerGroup: 1,
					spaceBetween: parseSpaceBetweenPx(activeColGap, 24),
					navigation:
						carouselIsShowArrow && prevEl && nextEl
							? { prevEl, nextEl }
							: false,
					pagination:
						carouselIsShowDots && pagEl
							? { el: pagEl, clickable: true }
							: false,
				});
			} catch (error) {
				console.error("Products Swiper editor init failed:", error);
			}

			ownerWin.requestAnimationFrame(() => {
				if (swiperInstance && !swiperInstance.destroyed) {
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
