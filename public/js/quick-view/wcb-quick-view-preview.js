/**
 * Quick View hover gallery preview — WordPress Interactivity API store (front-end).
 *
 * Replaces the old jQuery mouseenter handler in public/js/wcb-quick-view.js:
 * hovering the "Quick View" button preloads the product's gallery images and
 * shows them as a Tiny Slider preview over the product image.
 *
 * @package Boostify Blocks
 */

import { store, getContext, getElement } from '@wordpress/interactivity';

store( 'boostify-blocks/quick-view-preview', {
	actions: {
		async preloadGallery() {
			const context = getContext();

			// Prevent multiple/parallel AJAX calls for the same product.
			if ( context.loaded || context.loading ) {
				return;
			}

			context.loading = true;

			const ajaxSettings = window.boostify_blocks_frontend_ajax_object || {};
			const formData = new FormData();
			formData.append( 'action', 'boostify_blocks_get_product_gallery' );
			formData.append( 'product_id', context.productId );
			formData.append( 'nonce', ajaxSettings.nonce || '' );

			try {
				const response = await window.fetch( ajaxSettings.ajaxurl, {
					method: 'POST',
					body: formData,
					credentials: 'same-origin',
				} );
				const data = await response.json();

				if ( data.success && data.data && data.data.html ) {
					context.galleryHtml = data.data.html;
					context.loaded = true;
				}
			} catch ( error ) {
				// Silently ignore — the regular Quick View panel still works
				// without this hover preview.
			} finally {
				context.loading = false;
			}
		},
	},
	callbacks: {
		renderGallery: () => {
			const context = getContext();
			const { ref } = getElement();

			if ( ! context.galleryHtml || ref.dataset.rendered === context.galleryHtml ) {
				return;
			}

			ref.innerHTML = context.galleryHtml;
			ref.dataset.rendered = context.galleryHtml;

			if ( typeof window.tns === 'function' ) {
				window.tns( {
					container: ref,
					items: 1,
					autoplay: true,
				} );
			}
		},
	},
} );
