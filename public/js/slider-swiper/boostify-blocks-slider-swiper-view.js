/**
 * Slider (Swiper) block — WordPress Interactivity API store (front-end).
 *
 * Uses the global `Swiper` class exposed by the vendored
 * public/swiper/swiper-bundle.min.js (enqueued as a classic script before
 * this module runs - see boostify_blocks_block_slider_swiper_render_callback()
 * in includes/wcb-blocks-render-callback.php), the same way public/slick/*
 * is vendored for the original Slider block. Hand-written and unbundled,
 * like the plugin's other Interactivity stores (tabs, counter, faq, form).
 *
 * A previous version of this store gave up immediately if `window.Swiper`
 * wasn't defined yet when `callbacks.initSwiper` fired, which is what made
 * it unreliable enough to be temporarily replaced by a plain-JS dispatcher
 * (see block-common-css/FrontendStyles.tsx's classes.forEach dispatcher).
 * Classic scripts are guaranteed to finish executing before module scripts
 * run, so `window.Swiper` should normally already exist by the time
 * initSwiper() fires - but a short retry loop is kept below as a safety net
 * for edge cases (e.g. an optimization/caching plugin altering script
 * loading order or attributes) instead of silently never initializing.
 *
 * @package Boostify Blocks
 */

import { store, getContext, getElement } from '@wordpress/interactivity';

const NAMESPACE = 'boostify-blocks/slider-swiper';

// Swiper breakpoints are min-width based ("applies at this width and up"),
// the opposite direction of the Slick max-width breakpoints the old carousel
// used - the base `slidesPerView` below covers mobile, then these two
// breakpoints widen it for tablet/desktop. Must match BREAKPOINT_TABLET /
// BREAKPOINT_DESKTOP in src/block-slider-swiper/Edit.tsx.
const BREAKPOINT_TABLET = 768;
const BREAKPOINT_DESKTOP = 1024;

// Retry budget while waiting for the vendored Swiper classic script.
const WAIT_INTERVAL = 50; // ms
const MAX_WAIT_ATTEMPTS = 40; // 40 * 50ms = 2s

function equalizeItemHeights( wrap ) {
	if ( ! wrap ) return;

	const items = wrap.querySelectorAll(
		'.wcb-slider-child__item-inner, .wcb-slider__item-inner'
	);
	if ( ! items.length ) return;

	items.forEach( ( el ) => {
		el.style.height = 'auto';
	} );

	let maxHeight = 0;
	items.forEach( ( el ) => {
		maxHeight = Math.max( maxHeight, el.offsetHeight || 0 );
	} );
	items.forEach( ( el ) => {
		el.style.height = `${ maxHeight }px`;
	} );
}

function mountSwiper( ref, context ) {
	// Guard against a missing target and against double init.
	if ( ! ref || ref.swiper ) {
		return;
	}

	const {
		rewind,
		animationDuration,
		autoplaySpeed,
		isAutoPlay,
		hoverpause,
		showArrowsDots,
		adaptiveHeight,
		columns,
	} = context;

	const columnsDesktop = columns?.Desktop;
	const columnsTablet = columns?.Tablet ?? columnsDesktop;
	const columnsMobile = columns?.Mobile ?? columnsTablet;

	const wrap = ref.closest( '.wcb-slider__wrap' ) || ref;

	try {
		new window.Swiper( ref, {
			loop: !! rewind,
			speed: animationDuration || 500,
			autoplay: isAutoPlay
				? {
						delay: autoplaySpeed || 3000,
						pauseOnMouseEnter: !! hoverpause,
				  }
				: false,
			autoHeight: !! adaptiveHeight,
			slidesPerView: columnsMobile || 1,
			// Always advance by exactly one slide per next/prev click,
			// regardless of how many slides are shown at once (columns).
			slidesPerGroup: 1,
			navigation:
				showArrowsDots !== 'Dot'
					? {
							prevEl: ref.querySelector( '.swiper-button-prev' ),
							nextEl: ref.querySelector( '.swiper-button-next' ),
					  }
					: false,
			pagination:
				showArrowsDots !== 'Arrow'
					? {
							el: ref.querySelector( '.swiper-pagination' ),
							clickable: true,
					  }
					: false,
			breakpoints: {
				[ BREAKPOINT_TABLET ]: {
					slidesPerView: columnsTablet || columnsMobile || 1,
				},
				[ BREAKPOINT_DESKTOP ]: {
					slidesPerView: columnsDesktop || columnsTablet || 1,
				},
			},
			on: {
				init: () => equalizeItemHeights( wrap ),
				resize: () => equalizeItemHeights( wrap ),
				slideChangeTransitionEnd: () => equalizeItemHeights( wrap ),
			},
		} );

		if ( 'ResizeObserver' in window ) {
			const ro = new ResizeObserver( () => equalizeItemHeights( wrap ) );
			ro.observe( wrap );
		}
	} catch ( error ) {
		console.error( '🎠 Slider (Swiper) initialization failed:', error );
	}
}

store( NAMESPACE, {
	callbacks: {
		initSwiper: () => {
			const { ref } = getElement();
			const context = getContext();

			if ( ! ref || ref.swiper ) {
				return;
			}

			if ( typeof window.Swiper === 'function' ) {
				mountSwiper( ref, context );
				return;
			}

			// window.Swiper isn't ready yet - retry briefly instead of
			// giving up for good (see file header comment for why).
			let attempts = 0;
			const timer = setInterval( () => {
				attempts += 1;

				if ( typeof window.Swiper === 'function' ) {
					clearInterval( timer );
					mountSwiper( ref, context );
					return;
				}

				if ( attempts >= MAX_WAIT_ATTEMPTS ) {
					clearInterval( timer );
					console.error(
						'🎠 Slider (Swiper): window.Swiper still not available after waiting - the vendored script may have failed to load.'
					);
				}
			}, WAIT_INTERVAL );
		},
	},
} );
