/**
 * Product Quantity Sync
 *
 * Syncs the quantity input inside .wcb-products__quantity-add-to-cart
 * with the sibling add-to-cart button's data-quantity attribute.
 * Also handles +/- button clicks.
 *
 * @package Boostify Blocks
 */

'use strict';

( function () {
	function syncQuantity( input ) {
		var qty = parseInt( input.value, 10 );
		if ( isNaN( qty ) || qty < 1 ) {
			qty = 1;
			input.value = 1;
		}
		var wrapper = input.closest( '.wcb-products__quantity-add-to-cart' );
		if ( ! wrapper ) {
			return;
		}
		var btn = wrapper.querySelector( '.add_to_cart_button' );
		if ( btn ) {
			btn.setAttribute( 'data-quantity', qty );
		}
	}

	document.addEventListener( 'input', function ( e ) {
		if ( e.target && e.target.classList.contains( 'wcb-products__quantity-input' ) ) {
			syncQuantity( e.target );
		}
	} );

	document.addEventListener( 'change', function ( e ) {
		if ( e.target && e.target.classList.contains( 'wcb-products__quantity-input' ) ) {
			syncQuantity( e.target );
		}
	} );

	document.addEventListener( 'click', function ( e ) {
		var btn = e.target && e.target.closest( '.wcb-products__quantity-btn' );
		if ( ! btn ) {
			return;
		}
		var quantityDiv = btn.closest( '.wcb-products__quantity' );
		if ( ! quantityDiv ) {
			return;
		}
		var input = quantityDiv.querySelector( '.wcb-products__quantity-input' );
		if ( ! input ) {
			return;
		}
		var qty = parseInt( input.value, 10 ) || 1;
		if ( btn.classList.contains( 'wcb-products__quantity-minus' ) ) {
			qty = Math.max( 1, qty - 1 );
		} else if ( btn.classList.contains( 'wcb-products__quantity-plus' ) ) {
			qty = qty + 1;
		}
		input.value = qty;
		syncQuantity( input );
	} );
}() );
