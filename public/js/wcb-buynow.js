/**
 * Buy Now Product — WordPress Interactivity API store (front-end).
 *
 * The ".woostify-buy-now" button is rendered by a separate plugin/theme,
 * so there are no server-rendered `data-wp-*` directives to hydrate here.
 * This module still registers a real Interactivity API store (state +
 * actions) and attaches behavior via delegated click events, which also
 * covers buttons injected later (e.g. the quick view popup) without any
 * manual re-init.
 *
 * @package Boostify Blocks
 */

import { store } from '@wordpress/interactivity';

const NAMESPACE = 'boostify-blocks/buynow';

const { state, actions } = store( NAMESPACE, {
	// Populated server-side via wp_interactivity_state() in
	// includes/wcb-enqueue-scripts.php, merged in automatically on init.
	state: {
		ajaxUrl: '',
		redirectDelay: 300,
	},
	actions: {
		/**
		 * Fallback: fetch fresh cart fragments and update mini cart DOM.
		 * Used only when woostifyAjaxSingleUpdateFragments() is not available.
		 */
		async refreshFragments( button, checkoutUrl, redirectDelay ) {
			var fragmentsUrl = '';

			if ( typeof wc_cart_fragments_params !== 'undefined' && wc_cart_fragments_params.wc_ajax_url ) {
				fragmentsUrl = wc_cart_fragments_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'get_refreshed_fragments' );
			} else if ( typeof wc_add_to_cart_params !== 'undefined' && wc_add_to_cart_params.wc_ajax_url ) {
				fragmentsUrl = wc_add_to_cart_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'get_refreshed_fragments' );
			}

			if ( ! fragmentsUrl ) {
				// Cannot refresh fragments, redirect after delay.
				setTimeout( function() {
					window.location = checkoutUrl;
				}, redirectDelay );
				return;
			}

			try {
				const response = await fetch( fragmentsUrl, { method: 'POST' } );
				const data     = await response.json();

				if ( typeof data.fragments !== 'undefined' ) {
					Object.entries( data.fragments ).forEach( function( entry ) {
						var key      = entry[0],
							value    = entry[1],
							elements = document.querySelectorAll( key );

						if ( ! elements.length ) {
							return;
						}

						elements.forEach( function( el ) {
							el.insertAdjacentHTML( 'afterend', value );
							el.remove();
						} );
					} );
				}
			} finally {
				if ( 'function' === typeof eventCartSidebarClose ) {
					eventCartSidebarClose();
				}
				button.classList.remove( 'loading' );

				if ( typeof jQuery !== 'undefined' ) {
					jQuery( document.body ).trigger( 'added_to_cart' );
				}
			}
		},

		/**
		 * Buy Now click handler — AJAX add-to-cart, then redirect to checkout.
		 */
		async buyNow( button ) {
			if ( button.classList.contains( 'disabled' ) ) {
				return;
			}

			var cartForm = button.closest( 'form.cart' );

			if ( ! cartForm || cartForm.classList.contains( 'grouped_form' ) ) {
				return;
			}

			var checkoutUrl   = button.getAttribute( 'data-checkout_url' ),
				variationForm = cartForm.classList.contains( 'variations_form' ),
				productField   = variationForm ? cartForm.querySelector( '[name="product_id"]' ) : null,
				variationField = variationForm ? cartForm.querySelector( '[name="variation_id"]' ) : null,
				getProductAttr = variationForm ? cartForm.querySelectorAll( 'select[name^="attribute"]' ) : [];

			var productId = button.value,
				input     = cartForm.getElementsByClassName( 'qty' )[0],
				quantity  = input ? input.value : 1;

			// Build form data for AJAX add to cart.
			var formData = new FormData( cartForm );

			if ( ! formData.has( 'add-to-cart' ) ) {
				formData.append( 'add-to-cart', parseInt( productId, 10 ) );
			}

			formData.set( 'quantity', parseInt( quantity, 10 ) );

			if ( variationForm ) {
				formData.set( 'product_id', productField.value );
				formData.set( 'variation_id', variationField.value );

				getProductAttr.forEach( function( x ) {
					formData.set( x.name, x.value );
				} );
			}

			// Determine AJAX URL.
			var ajaxUrl = '';

			if ( state.ajaxUrl ) {
				ajaxUrl = state.ajaxUrl.toString().replace( '%%endpoint%%', 'add_to_cart' );
			} else if ( typeof wc_add_to_cart_params !== 'undefined' && wc_add_to_cart_params.wc_ajax_url ) {
				ajaxUrl = wc_add_to_cart_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'add_to_cart' );
			}

			if ( ! ajaxUrl ) {
				// Fallback: redirect with query params (old behavior).
				var items    = {},
					urlParam = [];

				items['add-to-cart'] = parseInt( productId, 10 );
				items['quantity']    = parseInt( quantity, 10 );

				if ( variationForm ) {
					items['add-to-cart'] = parseInt( productField.value, 10 );
					getProductAttr.forEach( function( x ) {
						items[ x.name ] = x.value;
					} );
				}

				for ( var key in items ) {
					urlParam.push( encodeURI( key ) + '=' + encodeURI( items[ key ] ) );
				}

				window.location = checkoutUrl + '?' + urlParam.join( '&' );
				return;
			}

			// Delay (ms) to show the cart sidebar before redirecting to checkout.
			var redirectDelay = state.redirectDelay ? parseInt( state.redirectDelay, 10 ) : 300;

			// Step 1: Show updating state & open sidebar (same as default Add to Cart).
			button.classList.add( 'loading' );

			if ( 'function' === typeof eventCartSidebarOpen ) {
				eventCartSidebarOpen();
			}

			if ( 'function' === typeof closeAll ) {
				closeAll();
			}

			// Add mini-cart-updating class (same as default Add to Cart).
			document.documentElement.classList.add( 'mini-cart-updating' );

			// Step 2: Listen for added_to_cart to open sidebar & schedule redirect.
			if ( typeof jQuery !== 'undefined' ) {
				jQuery( document.body ).one( 'added_to_cart', function() {
					if ( 'function' === typeof cartSidebarOpen ) {
						cartSidebarOpen();
					}

					// Redirect to checkout after showing the mini cart.
					setTimeout( function() {
						window.location = checkoutUrl;
					}, redirectDelay );
				} );
			}

			// Step 3: AJAX add to cart.
			try {
				const res = await fetch( ajaxUrl, {
					method: 'POST',
					body: formData,
					credentials: 'same-origin',
				} );

				if ( ! res.ok ) {
					window.location = checkoutUrl;
					return;
				}

				// Open sidebar immediately after add to cart succeeds.
				if ( 'function' === typeof cartSidebarOpen ) {
					cartSidebarOpen();
				}

				document.documentElement.classList.remove( 'mini-cart-updating' );

				// Step 4: Refresh cart fragments to update mini cart content
				// (same as default Add to Cart uses woostifyAjaxSingleUpdateFragments).
				if ( 'function' === typeof woostifyAjaxSingleUpdateFragments ) {
					woostifyAjaxSingleUpdateFragments( button );
				} else {
					// Fallback: manually fetch fragments and trigger event.
					actions.refreshFragments( button, checkoutUrl, redirectDelay );
				}
			} catch ( error ) {
				document.documentElement.classList.remove( 'mini-cart-updating' );
				// Fallback on network error.
				window.location = checkoutUrl;
			}
		},
	},
} );

// Delegated click handler: catches every ".woostify-buy-now" button on the
// page, including ones injected later (e.g. inside the quick view popup),
// without needing to re-bind listeners per button.
document.addEventListener( 'click', function( event ) {
	var button = event.target.closest( '.woostify-buy-now' );

	if ( ! button ) {
		return;
	}

	event.preventDefault();
	actions.buyNow( button );
} );

// Backward-compatible no-op: public/js/wcb-quick-view.js (a classic script)
// still calls woostifyBuyNowProduct( true ) after injecting popup markup.
// The delegated listener above already covers those buttons, so this stub
// only exists to keep that legacy call site from throwing.
window.woostifyBuyNowProduct = function() {};
