/**
 * ======================================================
 * QUICK VIEW HOVER GALLERY (PRODUCT LOOP – hover button)
 * Load preview gallery when hovering the Quick View button
 * ======================================================
 */
jQuery(document).on('mouseenter', '.product-quick-view-btn', function () {
    const $btn = jQuery(this);
    const productId = $btn.data('product_id');

    // Prevent multiple AJAX calls
    if ($btn.data('loaded')) return;

    // Load product gallery via AJAX
    jQuery.post({
        action: 'wcb_get_product_gallery',
        product_id: productId,
    }, function (res) {
        // Inject gallery HTML
        $btn.closest('.wcb-products__product')
            .find('.wcb-quick-view-hover-gallery')
            .html(res.html);

        // Init Tiny Slider
        tns({
            container: '.wcb-quick-view-hover-gallery',
            items: 1,
            autoplay: true,
        });

        // Mark gallery as loaded
        $btn.data('loaded', true);
    });
});


/**
 * ======================================================
 * VARIATION SWATCH CLICK (Quick View)
 * Click swatch → update select → trigger Woo variation logic
 * ======================================================
 */
jQuery(document).on(
    'click',
    '#woostify-quick-view-panel .woostify-variation-swatches .swatch',
    function () {
        const $swatch = jQuery(this);
        const value = $swatch.data('value');

        // Swatch wrapper (contains attribute name)
        const $wrap = $swatch.closest('.woostify-variation-swatches');
        const attribute = $wrap.data('attribute_name');

        // Find variation form & select
        const $form = $swatch.closest('form.variations_form');
        const $select = $form.find(`select[name="${attribute}"]`);

        if ($select.length) {
            // Update select value
            $select.val(value).trigger('change');

            // Trigger WooCommerce variation events
            $form.trigger('check_variations');
            $form.trigger('woocommerce_variation_select_change');

            setTimeout(function() {
                updateQuickViewGallery($form, attribute, value);
            }, 500);
        }
    }
);


/**
 * ======================================================
 * UPDATE QUICK VIEW GALLERY
 * Update gallery slider when variation changes
 * ======================================================
 */
function updateQuickViewGallery($form, attribute, value) {
    const gallery = document.querySelector('#quick-view-gallery');
    if (!gallery) return;

    // Get available variations
    const variations = $form.data('product_variations');
    if (!variations || !variations.length) return;

    // Find variation matching the clicked attribute
    const matchedVariation = variations.find(v => {
        return v.attributes && v.attributes[attribute] === value;
    });

    if (matchedVariation && matchedVariation.variation_id) {
        // Variation found → use variation image
        const variation = $form.data('product_variations')?.find(
            v => v.variation_id == matchedVariation.variation_id
        );
        
        if (variation && variation.image && matchedVariation.image.src) {
            // Replace gallery with variation image
            const newImage = `
                <div class="quick-view-gallery__slide">
                    <img src="${matchedVariation.image.src}" 
                         srcset="${matchedVariation.image.srcset || ''}"
                         sizes="${matchedVariation.image.sizes || ''}"
                         alt="${matchedVariation.image.alt || ''}" />
                </div>
            `;
            
            gallery.innerHTML = newImage;
            
            // Re-initialize slider
            if (quickViewSlider) {
                quickViewSlider.destroy();
            }
            quickViewSlider = tns({
                container: gallery,
                items: 1,
                autoplay: false,
                controls: true,
                controlsText: ['<', '>'],
                nav: true,
                loop: false,
                autoplayButtonOutput: false,
            });
        }
    } else {
        // No variation selected → restore original gallery
        if (originalGalleryHtml) {
            gallery.innerHTML = originalGalleryHtml;
            
            // Re-initialize slider
            if (quickViewSlider) {
                quickViewSlider.destroy();
            }
            quickViewSlider = tns({
                container: gallery,
                items: 1,
                autoplay: false,
                controls: true,
                controlsText: ['<', '>'],
                nav: true,
                loop: false,
                autoplayButtonOutput: false,
            });
        }
    }
}


/**
 * ======================================================
 * WOOCOMMERCE RESET VARIATION EVENT
 * Restore original gallery when variations are cleared
 * ======================================================
 */
jQuery(document).on('reset_data', '#woostify-quick-view-panel form.variations_form', function() {
    console.log('🔄 Resetting gallery to original');
    
    const gallery = document.querySelector('#quick-view-gallery');
    if (!gallery || !originalGalleryHtml) return;
    
    gallery.innerHTML = originalGalleryHtml;
    
    // Re-initialize slider
    if (quickViewSlider) {
        quickViewSlider.destroy();
    }
    quickViewSlider = tns({
        container: gallery,
        items: 1,
        autoplay: false,
        controls: true,
        controlsText: ['<', '>'],
        nav: true,
        loop: false,
        autoplayButtonOutput: false,
    });
});


/**
 * ======================================================
 * RESET VARIATIONS (Capture phase override)
 * Block theme handlers and apply custom reset logic
 * ======================================================
 */
document.addEventListener(
    'click',
    function (e) {
        const resetBtn = e.target.closest(
            '#woostify-quick-view-panel .reset_variations'
        );
        if (!resetBtn) return;

        // Block all theme / Woo handlers
        e.preventDefault();
        e.stopImmediatePropagation();

        handleQuickViewReset(resetBtn);
    },
    true // Capture phase (important)
);


/**
 * ======================================================
 * QUICK VIEW RESET HANDLER
 * Clear variations, swatches, and sync URL state
 * ======================================================
 */
function handleQuickViewReset(btn) {
    const $form = jQuery(btn).closest('form.variations_form');

    /* 1. Reset URL – keep page_id */
    const url = new URL(window.location.href);

    // Fallback: restore page_id if theme already reset URL
    if (!url.searchParams.has('page_id')) {
        const pageId = btn.closest('#woostify-quick-view-panel')
            ?.getAttribute('data-page-id');

        if (pageId) {
            url.searchParams.set('page_id', pageId);
        }
    }

    // Remove all attribute_* params
    [...url.searchParams.keys()].forEach(key => {
        if (key.startsWith('attribute_')) {
            url.searchParams.delete(key);
        }
    });

    history.replaceState({}, '', url.toString());

    /* 2. Clear variation selects */
    $form.find('select[name^="attribute_"]').val('');

    /* 3. Clear selected swatches */
    $form.find('.woostify-variation-swatches .swatch')
        .removeClass('selected');

    /* 4. Trigger Woo reset events */
    $form.trigger('reset_data');
    $form.trigger('check_variations');
}


/**
 * ======================================================
 * QUICK VIEW SLIDER
 * Initialize / re-initialize gallery slider
 * ======================================================
 */
let quickViewSlider = null;
let originalGalleryHtml = '';

function initQuickViewSlider() {
    const gallery = document.querySelector('#quick-view-gallery');
    if (!gallery) return;

    // Store original gallery for reset
    if (!originalGalleryHtml) {
        originalGalleryHtml = gallery.innerHTML;
    }

    // Destroy existing slider before re-init
    if (quickViewSlider) {
        quickViewSlider.destroy();
    }

    // Init Tiny Slider
    quickViewSlider = tns({
        container: gallery,
        items: 1,
        autoplay: false,
        controls: true,
        controlsText: ['<', '>'],
        nav: true,
        loop: false,
        autoplayButtonOutput: false,
    });
}


/**
 * ======================================================
 * QUICK VIEW QUANTITY
 * Initialize +/- quantity buttons
 * ======================================================
 */
function initQuickViewQuantity() {
    if (typeof customQuantity === 'function') {
        customQuantity();
        setTimeout(customQuantity, 100);
        setTimeout(customQuantity, 500);
    }
}


/**
 * ======================================================
 * QUICK VIEW ADD TO CART (Override theme handler)
 * ======================================================
 */
function handleQuickViewAddToCart() {

    // Handle button click
    jQuery(document).on(
        'click',
        '#woostify-quick-view-panel .single_add_to_cart_button',
        function (e) {
            e.preventDefault();
            e.stopPropagation();
            handleQuickViewAddToCartManual(jQuery(this));
            return false;
        }
    );

    // Handle form submit (fallback)
    jQuery(document).on(
        'submit',
        '#woostify-quick-view-panel form.cart',
        function (e) {
            e.preventDefault();
            const $button = jQuery(this).find('.single_add_to_cart_button');
            handleQuickViewAddToCartManual($button);
        }
    );
}


/**
 * ======================================================
 * MANUAL ADD TO CART HANDLER (AJAX)
 * ======================================================
 */
function handleQuickViewAddToCartManual($button) {

    // Prevent double submit
    if ($button.hasClass('add_to_cart_button--loading')) return;

    const $form = $button.closest('form.cart');

    // Set loading state
    $button.addClass('add_to_cart_button--loading').prop('disabled', true);

    // Prepare form data
    const formData = new FormData($form[0]);
    formData.append('ajax_nonce', woostify_woocommerce_general.ajax_nonce);

    // AJAX add to cart
    fetch(
        wc_add_to_cart_params.wc_ajax_url
            .toString()
            .replace('%%endpoint%%', 'woostify_single_add_to_cart'),
        {
            method: 'POST',
            body: formData
        }
    )
        .then(res => res.json())
        .then(data => {
            if (data.error) throw data.error;

            // Update cart fragments
            if (typeof woostifyAjaxSingleUpdateFragments === 'function') {
                woostifyAjaxSingleUpdateFragments($button[0]);
            }

            // Open cart sidebar
            setTimeout(() => {
                if (typeof cartSidebarOpen === 'function') {
                    cartSidebarOpen();
                }
            }, 100);

            // Reset state
            $button.removeClass('add_to_cart_button--loading').prop('disabled', false);
            document.documentElement.classList.remove('quick-view-open');
        })
        .catch(error => {
            console.error('Add to cart error:', error);
            $button.removeClass('add_to_cart_button--loading').prop('disabled', false);

            if (typeof woostifyShowNotification === 'function') {
                woostifyShowNotification(
                    'Failed to add product to cart. Please try again.',
                    'error'
                );
            } else {
                alert('Failed to add product to cart.');
            }
        });
}


/**
 * ======================================================
 * APPLY URL PARAMS TO VARIATION SWATCHES
 * Sync swatches when product opens with ?attribute_pa_xxx=
 * ======================================================
 */
function applyUrlParamsToSwatches() {
    const quickViewPanel = document.getElementById('woostify-quick-view-panel');
    if (!quickViewPanel) return;

    const urlParams = new URLSearchParams(window.location.search);
    const swatches = quickViewPanel.querySelectorAll('.woostify-variation-swatches .swatch');
    if (!swatches.length) return;

    swatches.forEach(swatch => {
        const attributeName =
            swatch.closest('.woostify-variation-swatches')
                ?.getAttribute('data-attribute_name');

        const value = swatch.getAttribute('data-value');

        if (attributeName && urlParams.has(attributeName)) {
            const urlValue = urlParams.get(attributeName);

            if (value === urlValue) {
                swatch.classList.add('selected');

                const select = swatch.closest('.value')?.querySelector('select');
                if (select) {
                    const $form = jQuery(select).closest('form.variations_form');

                    jQuery(select).val(value).trigger('change');
                    $form.trigger('check_variations');
                    $form.trigger('woocommerce_variation_select_change');
                }
            } else {
                swatch.classList.remove('selected');
            }
        }
    });
}


/**
 * ======================================================
 * INIT VARIATION SWATCHES IN QUICK VIEW
 * ======================================================
 */
function initQuickViewVariationSwatches() {

    // Init Woostify swatches
    if (typeof woostifyVariationSwatches === 'function') {
        woostifyVariationSwatches();
    }

    // Init available variations
    const quickViewPanel = document.getElementById('woostify-quick-view-panel');
    if (quickViewPanel && typeof woostifyAvailableVariations === 'function') {
        woostifyAvailableVariations(quickViewPanel);
    }

    // Enable URL variation syncing
    if (typeof variationAddUrl === 'function') {
        variationAddUrl();
    }

    // Apply URL params to swatches
    applyUrlParamsToSwatches();
}


/**
 * ======================================================
 * DOCUMENT READY INIT
 * ======================================================
 */
jQuery(document).ready(function () {
    initQuickViewSlider();
    initQuickViewQuantity();
    initQuickViewVariationSwatches();
    handleQuickViewAddToCart();
});


/**
 * ======================================================
 * QUICK VIEW OPEN (Button click)
 * ======================================================
 */
jQuery(document).on('click', '.product-quick-view-btn', function () {
    originalGalleryHtml = '';
    setTimeout(function () {
        initQuickViewSlider();
        initQuickViewQuantity();
        initQuickViewVariationSwatches();
        handleQuickViewAddToCart();
    }, 500);
});


/**
 * ======================================================
 * OBSERVE QUICK VIEW OPEN (Class mutation)
 * ======================================================
 */
const quickViewObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (
            mutation.type === 'attributes' &&
            mutation.attributeName === 'class' &&
            document.documentElement.classList.contains('quick-view-open')
        ) {
            originalGalleryHtml = '';
            setTimeout(function () {
                initQuickViewSlider();
                initQuickViewQuantity();
                initQuickViewVariationSwatches();
                handleQuickViewAddToCart();
            }, 300);
        }
    });
});

quickViewObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
});
