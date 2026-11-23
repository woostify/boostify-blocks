/**
 * Products (Swiper Carousel) block — WordPress Interactivity API store (front-end).
 *
 * Uses the global `Swiper` class exposed by public/swiper/swiper-bundle.min.js
 * (enqueued in includes/wcb-render-callback-for-block-products.php).
 *
 * @package Boostify Blocks
 */

import { store, getContext, getElement } from '@wordpress/interactivity';
import { pauseCarouselOnHover, resolveCarouselGap } from './options.js';

const NAMESPACE = 'boostify-blocks/products-carousel';

const BREAKPOINT_TABLET = 768;
const BREAKPOINT_DESKTOP = 1024;
const WAIT_INTERVAL = 50;
const MAX_WAIT_ATTEMPTS = 40;

function mountSwiper( ref, context ) {
	const viewport = ref?.querySelector( ':scope > .wcb-products__carousel-viewport' );
	if ( ! viewport || viewport.swiper ) {
		return;
	}

	const {
		columns = {},
		spaceBetween = {},
		isShowArrow = true,
		isShowDots = true,
		isAutoPlay = false,
		autoplaySpeed = 3000,
		hoverpause = true,
		loop = false,
		animationDuration = 500,
	} = context || {};

	const colD = Math.max( 1, Number( columns.Desktop ) || 3 );
	const colT = Math.max( 1, Number( columns.Tablet ) || colD );
	const colM = Math.max( 1, Number( columns.Mobile ) || colT );

	const gapD = resolveCarouselGap( spaceBetween.Desktop, viewport );
	const gapT = resolveCarouselGap( spaceBetween.Tablet, viewport, gapD );
	const gapM = resolveCarouselGap( spaceBetween.Mobile, viewport, gapT );

	try {
		const swiper = new window.Swiper( viewport, {
			observer: true,
			observeParents: true,
			loop: !! loop,
			speed: Number( animationDuration ) || 500,
			autoplay: isAutoPlay
				? {
						delay: Number( autoplaySpeed ) || 3000,
						stopOnLastSlide: ! loop,
				  }
				: false,
			slidesPerView: colM,
			slidesPerGroup: 1,
			spaceBetween: gapM,
			navigation: isShowArrow
				? {
						prevEl: ref.querySelector( ':scope > .swiper-button-prev' ),
						nextEl: ref.querySelector( ':scope > .swiper-button-next' ),
				  }
				: false,
			pagination: isShowDots
				? {
						el: viewport.querySelector( ':scope > .swiper-pagination' ),
						clickable: true,
				  }
				: false,
			breakpoints: {
				[ BREAKPOINT_TABLET ]: {
					slidesPerView: colT,
					spaceBetween: gapT,
				},
				[ BREAKPOINT_DESKTOP ]: {
					slidesPerView: colD,
					spaceBetween: gapD,
				},
			},
		} );
		if ( isAutoPlay && hoverpause ) {
			pauseCarouselOnHover( ref, swiper );
		}
	} catch ( error ) {
		console.error( 'Products Carousel (Swiper) initialization failed:', error );
	}
}

store( NAMESPACE, {
	callbacks: {
		initSwiper: () => {
			const { ref } = getElement();
			const context = getContext();

			if ( ! ref ) {
				return;
			}

			if ( typeof window.Swiper === 'function' ) {
				mountSwiper( ref, context );
				return;
			}

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
						'Products Carousel (Swiper): window.Swiper still not available after waiting.'
					);
				}
			}, WAIT_INTERVAL );
		},
	},
} );
