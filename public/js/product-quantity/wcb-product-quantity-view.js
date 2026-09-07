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
store( 'boostify-blocks/product-quantity', {
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
		// Step 4: Keep WooCommerce's legacy jQuery quantity cache in sync.
		// WooCommerce's ajax add-to-cart handler reads the quantity from
		// jQuery's cached .data(), which doesn't pick up the plain attribute
		// changes made via data-wp-bind, so keep that cache in sync too.
		syncQuantityJqueryData: () => {
			// Step 4a: Get the current reactive quantity and the root element
			// this callback (data-wp-watch) is attached to.
			const context = getContext();
			const { ref } = getElement();

			// Step 4b: Bail out if jQuery isn't loaded (nothing to sync).
			if ( typeof window.jQuery === 'undefined' ) {
				return;
			}

			// Step 4c: Push the latest quantity into jQuery's .data() cache
			// for every "Add to cart" button inside this element.
			ref.querySelectorAll( '.add_to_cart_button' ).forEach( ( btn ) => {
				window.jQuery( btn ).data( 'quantity', context.quantity );
			} );
		},
	},
} );
