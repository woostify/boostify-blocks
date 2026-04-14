'use strict';

(function () {

	function syncQuantity(input) {
		var qty = parseInt(input.value, 10);

		if (isNaN(qty) || qty < 1) {
			qty = 1;
			input.value = 1;
		}

		var wrapper = input.closest('.wcb-products__quantity-add-to-cart');
		if (!wrapper) return;

		var product = wrapper.closest('.wcb-products__product');

		var buttons = product
			? product.querySelectorAll('.add_to_cart_button')
			: wrapper.querySelectorAll('.add_to_cart_button');

		buttons.forEach(function (btn) {
			btn.setAttribute('data-quantity', qty);

			if (typeof window.jQuery !== 'undefined') {
				window.jQuery(btn).data('quantity', qty);
			}
		});
	}

	document.addEventListener('input', function (e) {
		if (e.target.classList.contains('wcb-products__quantity-input')) {
			syncQuantity(e.target);
		}
	});

	document.addEventListener('click', function (e) {
		var btn = e.target.closest('.wcb-products__quantity-btn');
		if (!btn) return;

		var quantityDiv = btn.closest('.wcb-products__quantity');
		if (!quantityDiv) return;

		var input = quantityDiv.querySelector('.wcb-products__quantity-input');
		if (!input) return;

		var qty = parseInt(input.value, 10) || 1;

		if (btn.classList.contains('wcb-products__quantity-minus')) {
			qty = Math.max(1, qty - 1);
		}

		if (btn.classList.contains('wcb-products__quantity-plus')) {
			qty++;
		}

		input.value = qty;
		syncQuantity(input);
	});

})();