// @ts-nocheck

import { CustomPlugin } from "./MyScrollSnapSlider";
import { WcbAttrsForSave } from "./Save";
import { getThemeDefaults } from "../utils/themeDefaults";

interface Props extends WcbAttrsForSave {}

/**
 * Initialize carousel for WCB Products block
 * 
 * @param div div element of the block
 * @param props peoperties of the block
 */
export function initCarouselForWcbProducts(div: Element, props: Props) {
	const getAddToCartPosition = () => {
		const blockPosition = props?.general_addToCartBtn?.position;
		const position = props?.general_layout?.isCustomizerGeneralLayout && blockPosition
			? blockPosition
			: getThemeDefaults().shop_archive_add_to_cart_btn?.position || blockPosition;
		return (position === "inside image" || position === "image") && props?.general_featuredImage?.isShowFeaturedImage === false
			? "bottom visible"
			: position;
	};

	// 1. Handle Wishlist Click
	const handleWishlistClick = () => {
		const dataUniqueid = div.getAttribute("data-uniqueid") || "";
		
		// Sure every block only register listener one time
		if (!(window as any).__wcbWishlistListeners) {
			(window as any).__wcbWishlistListeners = new Set();
		}
		// Avoid attach multi for the same block
		if (!(window as any).__wcbWishlistListeners.has(dataUniqueid)) {
			(window as any).__wcbWishlistListeners.add(dataUniqueid);
			
			document.addEventListener("click", (e) => {
				const target = e.target as HTMLElement;
				const btnBottomRight = target.closest(
					`.${dataUniqueid} .wcb-products__product--wishlistBottomRight--item`
				);
				const btnTopRight = target.closest(
					`.${dataUniqueid} .wcb-products__product--wishlistTopRight--item`
				);

				if (!btnBottomRight && !btnTopRight) return;
				if (btnTopRight) {
					btnTopRight.classList.add("is-in-wishlist");
				}
				if (btnBottomRight) {
					btnBottomRight.classList.add("is-in-wishlist");
				}
			});
		}
	}

	// 2. Handle add style hidden for add to cart button
	const handleAddToCartStyleHidden = () => {
		const dataUniqueid = div.getAttribute("data-uniqueid") || "";

		// Only attach listener 1 time / block
		if (!(window as any).__wcbAddToCartLayout2Listeners) {
			(window as any).__wcbAddToCartLayout2Listeners = new Set();
		}
		if ((window as any).__wcbAddToCartLayout2Listeners.has(dataUniqueid)) return;
		(window as any).__wcbAddToCartLayout2Listeners.add(dataUniqueid);

		document.addEventListener("click", (e) => {
			const target = e.target as HTMLElement;

			// Find button add-to-cart depence on block
			const btnLayoutInsiteImage = target.closest(
				`.${dataUniqueid} .wcb-products__product-add-to-cart .add_to_cart_button`
			) as HTMLElement | null;

			if (!btnLayoutInsiteImage) return;

			switch (getAddToCartPosition()) {
				case 'bottom-visible':
				case 'bottom visible':
					btnLayoutInsiteImage.classList.add("wcb-products__product-style-hidden-btn-add-to-cart");
					break;
				case 'inside image':
				case 'image':
					setTimeout(() => {
						btnLayoutInsiteImage.classList.add("wcb-products__product-style-hidden-btn-add-to-cart");
					}, 200);
					break;
				case 'bottom':
					setTimeout(() => {
						btnLayoutInsiteImage.classList.add("wcb-products__product-style-hidden-btn-add-to-cart");
					}, 500);
					break;
				case 'icon':
					// Do nothing
					break;
				default:
					// Do nothing
					break;
			}

			// 2. Show view cart trong cùng block
			const parent = btnLayoutInsiteImage.closest(
				`.${dataUniqueid} .wcb-products__product-add-to-cart`
			) as HTMLElement | null;
			if (!parent) return;

			const viewCart = parent.querySelector(".added_to_cart") as HTMLElement | null;
			if (viewCart) {
				viewCart.classList.add("visible");
			}
		});
	};

	/**
	 * Check button add to cart is loading state
	 * 
	 * @param buttonEl HTMLButtonElement
	 * @returns boolean
	 */
	const checkIsLoadingAddToCart = (buttonEl: HTMLElement | null): boolean => {
		if (!buttonEl) return false;

		return (
			buttonEl.classList.contains("ajax_add_to_cart") &&
			!buttonEl.classList.contains("added")
		);
	};

	/**
	 * Check button add to cart has class ajax_add_to_cart
	 * 
	 * @param buttonEl HTMLButtonElement
	 * @returns boolean
	 */
	const hasAjaxAddToCartClass = (buttonEl): boolean => {
		if (!buttonEl) return false;
		return buttonEl.classList.contains("ajax_add_to_cart");
	};

	// 3. Handle add style is loading for add to cart button
	const handleAddToCartIsLoading = () => {
		const dataUniqueid = div.getAttribute("data-uniqueid") || "";

		// Only attach listener 1 time / block
		if (!(window as any).__wcbAddToCartIsLoadingListeners) {
			(window as any).__wcbAddToCartIsLoadingListeners = new Set();
		}
		if ((window as any).__wcbAddToCartIsLoadingListeners.has(dataUniqueid)) return;
		(window as any).__wcbAddToCartIsLoadingListeners.add(dataUniqueid);

		document.addEventListener("click", (e) => {
			const target = e.target as HTMLElement;

			// Find button add-to-cart depence on block
			const btnLayoutBottomVisible = target.closest(
				`.${dataUniqueid} .wcb-products__product-add-to-cart .add_to_cart_button`
			) as HTMLElement | null;

			const btnLayoutTopRightIcon = target.closest(
				`.${dataUniqueid} .wcb-products__product--btnIconAddToCart--item`
			) as HTMLElement | null;

			// 1. Add className loading
			if (btnLayoutBottomVisible || btnLayoutTopRightIcon) {
			
				switch (getAddToCartPosition()) {
					case 'bottom-visible':
					case 'bottom visible':
						if (checkIsLoadingAddToCart(btnLayoutBottomVisible)){
							btnLayoutBottomVisible.classList.add("add_to_cart_button--loading");
						}
						break;
					case 'inside image':
					case 'image':
						if (checkIsLoadingAddToCart(btnLayoutBottomVisible)){
							btnLayoutBottomVisible?.classList.add("add_to_cart_button__insite-image--loading");
						}
						break;
					case 'bottom':
						if (checkIsLoadingAddToCart(btnLayoutBottomVisible)){
							const iconWrapper = btnLayoutBottomVisible.querySelector('.wcb-products__add-to-cart-icon');
							// Delete SVG if have
							if (iconWrapper) {
								const svg = iconWrapper.querySelector("svg");
								if (svg) {
									svg.remove();
								}
								iconWrapper.classList.add("add_to_cart_button__style-bottom-visible--loading");
							}
						}
						break;
					case 'icon':
						// Do nothing
						if (hasAjaxAddToCartClass(btnLayoutTopRightIcon)) {
							btnLayoutTopRightIcon?.classList.add("add_to_cart_button--loading");
						}
						break;
					default:
						// Do nothing
						break;
				}
				
				if (btnLayoutTopRightIcon) {
					// 2. Show view cart trong cùng block
					const parent = btnLayoutTopRightIcon.closest(
						`.${dataUniqueid} .wcb-products__product--topRight`
					) as HTMLElement | null;
					if (!parent) return;

					const viewCart = parent.querySelector(".added_to_cart") as HTMLElement | null;
					if (viewCart) {
						viewCart.classList.add("visible");
					}
				}

				// Delay 500ms
				setTimeout(() => {
					if (btnLayoutBottomVisible) {
						btnLayoutBottomVisible.classList.remove("add_to_cart_button--loading");
					    btnLayoutBottomVisible.classList.remove("add_to_cart_button__style-bottom-visible--loading");
						btnLayoutBottomVisible.classList.remove("add_to_cart_button__insite-image--loading");
					} 
					if (btnLayoutTopRightIcon) {
						btnLayoutTopRightIcon.classList.remove("add_to_cart_button--loading");
					}
				}, 500);
			}
		});
	};

	const handleCarouselForWcbProducts = () => {
		const dataUniqueid = div.getAttribute("data-uniqueid") || "";

		// Swiper Carousel mode is initialized via the WordPress Interactivity API store
		// (`boostify-blocks/products-carousel`); only run Scroll-Snap Grid controls here.
		const sliderMultiElement = (
			div.querySelector(".scroll-snap-slider.-multi") ||
			document.querySelector(`.${dataUniqueid} .scroll-snap-slider.-multi`)
		) as HTMLElement | null;
		if (
			!sliderMultiElement ||
			sliderMultiElement.classList.contains("swithToScrollSnapX--None") ||
			!sliderMultiElement.firstElementChild ||
			(sliderMultiElement as any).__wcbCarouselInitialized
		) {
			return;
		}
		(sliderMultiElement as any).__wcbCarouselInitialized = true;

		const sliderMulti = new CustomPlugin({ element: sliderMultiElement });

		const arrows = (
			div.querySelector(".indicators.-multi") ||
			document.querySelector(`.${dataUniqueid} .indicators.-multi`)
		) as HTMLElement | null;
		const prev = (
			div.querySelector(".indicators.-multi .p-arrow.-prev") ||
			document.querySelector(
				`.${dataUniqueid} .indicators.-multi .p-arrow.-prev`
			)
		) as HTMLElement | null;
		const next = (
			div.querySelector(".indicators.-multi .p-arrow.-next") ||
			document.querySelector(
				`.${dataUniqueid} .indicators.-multi .p-arrow.-next`
			)
		) as HTMLElement | null;

		const isScrollable = () =>
			sliderMultiElement.scrollWidth > sliderMultiElement.clientWidth + 1;

		const updateArrows = function () {
			const canScroll = isScrollable();
			sliderMultiElement.classList.toggle("-draggable", canScroll);
			prev?.classList.toggle("-disabled", sliderMultiElement.scrollLeft <= 0);
			next?.classList.toggle(
				"-disabled",
				sliderMultiElement.scrollLeft + sliderMultiElement.offsetWidth >=
					sliderMultiElement.scrollWidth - 1
			);
			if (prev instanceof HTMLButtonElement) prev.disabled = !canScroll || prev.classList.contains("-disabled");
			if (next instanceof HTMLButtonElement) next.disabled = !canScroll || next.classList.contains("-disabled");
			arrows?.classList.toggle("-hidden", !canScroll);
		};

		// Enable desktop mouse drag-to-scroll without triggering product link clicks.
		let isPointerDown = false;
		let hasDragged = false;
		let startX = 0;
		let startScrollLeft = 0;

		const preventClickAfterDrag = (clickEvent: MouseEvent) => {
			clickEvent.preventDefault();
			clickEvent.stopPropagation();
		};

		sliderMultiElement.addEventListener("mousedown", (event: MouseEvent) => {
			if (event.button !== 0 || !isScrollable()) {
				return;
			}
			const target = event.target as HTMLElement | null;
			if (target?.closest("button, input, select, textarea")) {
				return;
			}
			isPointerDown = true;
			hasDragged = false;
			startX = event.pageX;
			startScrollLeft = sliderMultiElement.scrollLeft;
		});

		window.addEventListener("mousemove", (event: MouseEvent) => {
			if (!isPointerDown) {
				return;
			}
			const dx = event.pageX - startX;
			if (!hasDragged && Math.abs(dx) > 5) {
				hasDragged = true;
				sliderMultiElement.classList.add("-dragging");
				sliderMultiElement.style.scrollBehavior = "auto";
				sliderMultiElement.style.scrollSnapType = "none";
			}
			if (hasDragged) {
				event.preventDefault();
				sliderMultiElement.scrollLeft = startScrollLeft - dx;
			}
		});

		window.addEventListener("mouseup", () => {
			if (!isPointerDown) {
				return;
			}
			isPointerDown = false;
			if (hasDragged) {
				sliderMultiElement.classList.remove("-dragging");
				sliderMultiElement.style.scrollBehavior = "";
				sliderMultiElement.style.scrollSnapType = "";
				sliderMultiElement.addEventListener("click", preventClickAfterDrag, {
					capture: true,
					once: true,
				});
				setTimeout(() => {
					sliderMultiElement.removeEventListener(
						"click",
						preventClickAfterDrag,
						{ capture: true }
					);
				}, 0);
				updateArrows();
			}
		});

		prev?.addEventListener("click", function () {
			const prevI = (sliderMulti.slide || 1) - 1;
			sliderMulti.slideTo(prevI);
		});

		next?.addEventListener("click", function () {
			const nextI = (sliderMulti.slide || 0) + 1;
			sliderMulti.slideTo(nextI);
		});

		sliderMulti.addEventListener("slide-pass", updateArrows);
		sliderMulti.addEventListener("slide-stop", updateArrows);

		//
		sliderMulti.slideTo(0);
		window.addEventListener("resize", updateArrows);
		updateArrows();
	};

	const initAll = () => {
		handleWishlistClick();
		handleCarouselForWcbProducts();
		handleAddToCartStyleHidden();
		handleAddToCartIsLoading();
	};

	const uniqueId = div.getAttribute("data-uniqueid") || "";

	if (
		div.querySelector(".wcb-products__list") ||
		div.querySelector(".wcb-products__carousel") ||
		document.querySelector(`[data-block-products-uniqueid="${uniqueId}"]`)
	) {
		setTimeout(initAll, 200);
	} else {
		// Observe DOM changes to ensure the block is fully loaded
		const domObserver = new MutationObserver(() => {
			if (
				div.querySelector(".wcb-products__list") ||
				div.querySelector(".wcb-products__carousel") ||
				document.querySelector(`[data-block-products-uniqueid="${uniqueId}"]`)
			) {
				domObserver.disconnect();
				setTimeout(initAll, 200);
			}
		});

		domObserver.observe(document.body || document, {
			childList: true,
			subtree: true,
		});
	}
}
