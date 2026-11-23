import type Swiper from "swiper";

export function resolveCarouselGap(
	value: string | number | undefined,
	viewport: HTMLElement,
	fallback?: number | string
): number | string;

export function pauseCarouselOnHover(carousel: Element, swiper: Swiper): void;
