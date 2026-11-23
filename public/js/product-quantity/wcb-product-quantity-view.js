/**
 * Product quantity stepper — WordPress Interactivity API store (front-end).
 *
 * @package Boostify Blocks
 */

// Step 1: Import the Interactivity API helpers.
// - store: registers the actions/callbacks for this namespace.
// - getContext: reads/writes the reactive state bound to the current element (data-wp-context).
// - getElement: gives access to the DOM element the directive is running on.
import { store, getContext, getElement } from '@wordpress/interactivity';

// Step 2: Register the store under the "boostify-blocks/product-quantity" namespace.
// Directives in the rendered HTML (data-wp-on--click="actions.increaseQuantity", etc.)
// reference these actions/callbacks by name.
const quantityStore = {
	actions: {
		// Step 3a: "+" button handler — increment the quantity in context by 1.
		increaseQuantity: () => {
			const context = getContext();
			context.quantity = Number( context.quantity ) + 1;
		},

		// Step 3b: "-" button handler — decrement the quantity, never going below 1.
		decreaseQuantity: () => {
			const context = getContext();
			context.quantity = Math.max( 1, Number( context.quantity ) - 1 );
		},

		// Step 3c: Manual input handler — parse the typed value and clamp it to a
		// valid minimum of 1 (falls back to 1 if the input is empty/non-numeric).
		updateQuantityInput: ( event ) => {
			const context = getContext();
			let qty = parseInt( event.target.value, 10 );

			if ( isNaN( qty ) || qty < 1 ) {
				qty = 1;
			}

			context.quantity = qty;
		},
	},
	callbacks: {
		syncQuantityJqueryData: syncAddToCartQuantity,
	},
};

function syncAddToCartQuantity() {
	const { quantity } = getContext();
	const { ref } = getElement();

	ref?.querySelectorAll( '.add_to_cart_button' ).forEach( ( button ) => {
		// WooCommerce can read the quantity from jQuery's cached data.
		window.jQuery?.( button ).data( 'quantity', quantity );

		const originalUrl = button.dataset.wcbAddToCartUrl;
		if ( ! originalUrl ) {
			return;
		}
		if ( quantity === 1 ) {
			button.setAttribute( 'href', originalUrl );
			return;
		}

		// Carry the same quantity when WooCommerce follows the link directly.
		const url = new URL( originalUrl, button.baseURI );
		url.searchParams.set( 'quantity', quantity );
		button.href = url.href;
	} );
}

store( 'boostify-blocks/product-quantity', quantityStore );
store( 'boostify-blocks/quantity', quantityStore );

