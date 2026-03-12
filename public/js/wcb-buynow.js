/**
 * Buy Now Product
 *
 * @package Woostify Blocks
 */

'use strict';

/**
 * Fallback: fetch fresh cart fragments and update mini cart DOM.
 * Used only when woostifyAjaxSingleUpdateFragments() is not available.
 */
function woostifyBuyNowRefreshFragments( button, checkoutUrl, redirectDelay ) {
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

	fetch( fragmentsUrl, { method: 'POST' } )
		.then( function( response ) {
			return response.json();
		})
		.then( function( data ) {
			if ( typeof data.fragments !== 'undefined' ) {
				Object.entries( data.fragments ).forEach(
					function( entry ) {
						var key   = entry[0],
							value = entry[1];
						var elements = document.querySelectorAll( key );
						if ( ! elements.length ) {
							return;
						}
						elements.forEach( function( el ) {
							el.insertAdjacentHTML( 'afterend', value );
							el.remove();
						});
					}
				);
			}
		})
		.finally( function() {
			if ( 'function' === typeof( eventCartSidebarClose ) ) {
				eventCartSidebarClose();
			}
			button.classList.remove( 'loading' );

			if ( typeof jQuery !== 'undefined' ) {
				jQuery( document.body ).trigger( 'added_to_cart' );
			}
		});
}

function woostifyBuyNowProduct() {
	var popup = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : false,
		cart  = document.querySelectorAll( 'form.cart' );

	if ( true == popup ) {
		cart = document.querySelectorAll( '#woostify-quick-view-panel form.cart' );
	}

	if ( ! cart.length ) {
		return;
	}

	for ( var i = 0, j = cart.length; i < j; i++ ) {
		if ( cart[i].classList.contains( 'grouped_form' ) ) {
			continue;
		}

		var cartForm = cart[i],
			button   = cartForm.querySelector( '.woostify-buy-now' );

		if ( ! button ) {
			return;
		}

		var checkoutUrl   = button.getAttribute( 'data-checkout_url' ),
			variationForm = cartForm.classList.contains( 'variations_form' );

		if ( variationForm ) {
			var productField   = cartForm.querySelector( '[name="product_id"]' ),
				variationField = cartForm.querySelector( '[name="variation_id"]' ),
				getProductAttr = cartForm.querySelectorAll( 'select[name^="attribute"]' );
		}

		button.addEventListener(
			'click',
			function( e ) {
				e.preventDefault();

				if ( button.classList.contains( 'disabled' ) ) {
					return;
				}

				var productId = this.value,
					input     = cartForm.getElementsByClassName( 'qty' )[0],
					quantity  = input ? input.value : 1;

				// Build form data for AJAX add to cart.
				var formData = new FormData( cartForm );

				if ( ! formData.has( 'add-to-cart' ) ) {
					formData.append( 'add-to-cart', parseInt( productId ) );
				}

				formData.set( 'quantity', parseInt( quantity ) );

				if ( variationForm ) {
					formData.set( 'product_id', productField.value );
					formData.set( 'variation_id', variationField.value );

					getProductAttr.forEach(
						function( x ) {
							formData.set( x.name, x.value );
						}
					);
				}

				// Determine AJAX URL.
				var ajaxUrl = '';

				if ( typeof boostify_blocks_buynow_data !== 'undefined' && boostify_blocks_buynow_data.ajax_url ) {
					ajaxUrl = boostify_blocks_buynow_data.ajax_url.toString().replace( '%%endpoint%%', 'add_to_cart' );
				} else if ( typeof wc_add_to_cart_params !== 'undefined' && wc_add_to_cart_params.wc_ajax_url ) {
					ajaxUrl = wc_add_to_cart_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'add_to_cart' );
				}

				if ( ! ajaxUrl ) {
					// Fallback: redirect with query params (old behavior).
					var items    = {},
						urlParam = [];

					items['add-to-cart'] = parseInt( productId );
					items['quantity']    = parseInt( quantity );

					if ( variationForm ) {
						items['add-to-cart'] = parseInt( productField.value );
						getProductAttr.forEach( function( x ) {
							items[ x.name ] = x.value;
						});
					}

					for ( var key in items ) {
						urlParam.push( encodeURI( key ) + '=' + encodeURI( items[ key ] ) );
					}

					window.location = checkoutUrl + '?' + urlParam.join( '&' );
					return;
				}

				// Delay (ms) to show the cart sidebar before redirecting to checkout.
				var redirectDelay = typeof boostify_blocks_buynow_data !== 'undefined' && boostify_blocks_buynow_data.redirect_delay
					? parseInt( boostify_blocks_buynow_data.redirect_delay )
					: 300;

				// Step 1: Show updating state & open sidebar (same as default Add to Cart).
				button.classList.add( 'loading' );

				if ( 'function' === typeof( eventCartSidebarOpen ) ) {
					eventCartSidebarOpen();
				}

				if ( 'function' === typeof( closeAll ) ) {
					closeAll();
				}

				// Add mini-cart-updating class (same as default Add to Cart).
				document.documentElement.classList.add( 'mini-cart-updating' );

				// Step 2: Listen for added_to_cart to open sidebar & schedule redirect.
				if ( typeof jQuery !== 'undefined' ) {
					jQuery( document.body ).one(
						'added_to_cart',
						function() {
							if ( 'function' === typeof( cartSidebarOpen ) ) {
								cartSidebarOpen();
							}

							// Redirect to checkout after showing the mini cart.
							setTimeout( function() {
								window.location = checkoutUrl;
							}, redirectDelay );
						}
					);
				}

				// Step 3: AJAX add to cart.
				fetch( ajaxUrl, {
					method: 'POST',
					body: formData,
					credentials: 'same-origin',
				}).then(
					function( res ) {
						if ( ! res.ok ) {
							window.location = checkoutUrl;
							return;
						}

						// Open sidebar immediately after add to cart succeeds.
						if ( 'function' === typeof( cartSidebarOpen ) ) {
							cartSidebarOpen();
						}

						document.documentElement.classList.remove( 'mini-cart-updating' );

						// Step 4: Refresh cart fragments to update mini cart content
						// (same as default Add to Cart uses woostifyAjaxSingleUpdateFragments).
						if ( 'function' === typeof( woostifyAjaxSingleUpdateFragments ) ) {
							woostifyAjaxSingleUpdateFragments( button );
						} else {
							// Fallback: manually fetch fragments and trigger event.
							woostifyBuyNowRefreshFragments( button, checkoutUrl, redirectDelay );
						}
					}
				).catch(
					function() {
						document.documentElement.classList.remove( 'mini-cart-updating' );
						// Fallback on network error.
						window.location = checkoutUrl;
					}
				);
			}
		);
	}
}

document.addEventListener(
	'DOMContentLoaded',
	function() {
		woostifyBuyNowProduct();
	}
);
