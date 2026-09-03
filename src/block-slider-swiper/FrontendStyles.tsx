import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}

// Swiper breakpoints are min-width based ("applies at this width and up"),
// the opposite direction of the Slick max-width breakpoints block-slider
// uses - the base `slidesPerView` covers mobile, then these two breakpoints
// widen it for tablet/desktop. Must match the values Edit.tsx uses for the
// editor preview.
const BREAKPOINT_TABLET = 768;
const BREAKPOINT_DESKTOP = 1024;

function equalizeItemHeights(wrap: Element | null) {
	if (!wrap) return;

	const items = wrap.querySelectorAll<HTMLElement>(".wcb-slider__item-inner");
	if (!items.length) return;

	items.forEach((el) => {
		el.style.height = "auto";
		el.style.display = "flex";
		el.style.alignItems = "center";
		el.style.justifyContent = "center";
	});

	let maxHeight = 0;
	items.forEach((el) => {
		maxHeight = Math.max(maxHeight, el.offsetHeight || 0);
	});
	items.forEach((el) => {
		el.style.height = `${maxHeight}px`;
	});
}

// Counterpart to block-slider/FrontendStyles.tsx's initCarouselForWcbSliders,
// wired the same way (block-common-css/FrontendStyles.tsx's classes.forEach
// dispatcher calls this directly with the block's DOM node + parsed
// attributes JSON) instead of through the WordPress Interactivity API - the
// previous view.js store (public/js/slider-swiper/boostify-blocks-slider-swiper-view.js)
// depended on data-wp-init actually firing, which turned out unreliable.
// Uses the vendored global `window.Swiper` (see
// boostify_blocks_block_slider_swiper_render_callback() in
// includes/wcb-blocks-render-callback.php) instead of jQuery/Slick.
export function initCarouselForWcbSliderSwiper(div: Element, props: Props) {
	if (typeof (window as any).Swiper !== "function") {
		return;
	}

	// Safety check: return early if this is a slide child or missing required props
	if (!props.general_carousel || !props.general_general) {
		return;
	}

	const ref = div.querySelector(".wcb-slider__wrap-items.swiper") as
		| (HTMLElement & { swiper?: unknown })
		| null;

	// Guard against a missing target and against double init.
	if (!ref || ref.swiper) {
		return;
	}

	const {
		animationDuration,
		autoplaySpeed,
		hoverpause,
		isAutoPlay,
		rewind,
		showArrowsDots,
		adaptiveHeight,
	} = props.general_carousel;
	const { columns } = props.general_general;

	const {
		value_Desktop: columnsDesktop,
		value_Tablet: columnsTablet,
		value_Mobile: columnsMobile,
	} = getValueFromAttrsResponsives(columns);

	const wrap = ref.closest(".wcb-slider__wrap") || ref;

	try {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		new (window as any).Swiper(ref, {
			loop: !!rewind,
			speed: animationDuration || 500,
			autoplay: isAutoPlay
				? {
						delay: autoplaySpeed || 3000,
						pauseOnMouseEnter: !!hoverpause,
				  }
				: false,
			autoHeight: !!adaptiveHeight,
			slidesPerView: columnsMobile || 1,
			navigation:
				showArrowsDots !== "Dot"
					? {
							prevEl: ref.querySelector(".swiper-button-prev"),
							nextEl: ref.querySelector(".swiper-button-next"),
					  }
					: false,
			pagination:
				showArrowsDots !== "Arrow"
					? {
							el: ref.querySelector(".swiper-pagination"),
							clickable: true,
					  }
					: false,
			breakpoints: {
				[BREAKPOINT_TABLET]: {
					slidesPerView: columnsTablet || columnsMobile || 1,
				},
				[BREAKPOINT_DESKTOP]: {
					slidesPerView: columnsDesktop || columnsTablet || 1,
				},
			},
			on: {
				init: () => equalizeItemHeights(wrap),
				resize: () => equalizeItemHeights(wrap),
				slideChangeTransitionEnd: () => equalizeItemHeights(wrap),
			},
		});

		if ("ResizeObserver" in window) {
			const ro = new ResizeObserver(() => equalizeItemHeights(wrap));
			ro.observe(wrap);
		}
	} catch (error) {
		console.error("🎠 Slider (Swiper) initialization failed:", error);
	}
}
