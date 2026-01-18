/**
 * Load preview gallery when hovering the Quick View button
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
 * Click swatch → update select → trigger Woo variation logic 
 * Select dropdowns swatches
 */
jQuery(document).on(
  'change',
  '#woostify-quick-view-panel select[name^="attribute_"]',
  function () {

    const $select   = jQuery(this);
    const value     = $select.val();
    const attribute = $select.attr('name');
    const $form     = $select.closest('form.variations_form');

    if (attribute && value) {
        // Trigger lại Woo logic nếu cần
        $form.trigger('check_variations');
        $form.trigger('woocommerce_variation_select_change');

        setTimeout(function() {
            updateQuickViewGallery($form, attribute, value);
        }, 50);
    }
  }
);


/**
 * Click swatch → update select → trigger Woo variation logic 
 * Color - Image - Label swatches
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
            }, 50);
        }
    }
);


/**
 * Update gallery slider when variation changes
 * @param {jQuery} $form - The variations form jQuery object
 * @param {string} attribute - The attribute name (e.g., 'attribute_pa_color')
 * @param {string} value - The selected attribute value
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
                // quickViewSlider.destroy();
                quickViewSlider = null;
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
                quickViewSlider = null;
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
 * Block theme handlers and apply custom reset logic
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

        // Apply custom reset logic
        handleQuickViewResetURL(resetBtn);
        // set initial gallery

        if (quickViewSlider) {
            quickViewSlider = null;
        }

        if (!originalGalleryHtml) return;

        const gallery = document.querySelector('#quick-view-gallery');
        if (!gallery) return;

        gallery.innerHTML = originalGalleryHtml;

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
    },
    true // Capture phase (important)
);


/**
 * Clear variations, swatches, and sync URL state
 */
function handleQuickViewResetURL(btn) {
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
 * Initialize / re-initialize gallery slider
 */
let quickViewSlider = null;
let originalGalleryHtml = '';
let originalGalleryInitialized = '';

function initQuickViewSlider() {
    const gallery = document.querySelector('#quick-view-gallery');
    if (!gallery) return;

    // Store original gallery for reset
    if (!originalGalleryHtml) {
        originalGalleryHtml = gallery.innerHTML;
    }

    // Destroy existing slider before re-init
    if (quickViewSlider) {
        quickViewSlider = null;
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

 * QUICK VIEW QUANTITY
 * Initialize +/- quantity buttons

 */
function initQuickViewQuantity() {
    if (typeof customQuantity === 'function') {
        customQuantity();
        setTimeout(customQuantity, 100);
        setTimeout(customQuantity, 500);
    }
}


/**

 * QUICK VIEW ADD TO CART (Override theme handler)

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
 * Manual AJAX add to cart handler
 * @param {jQuery} $button - The add to cart button jQuery object
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

             // Re-init buy now button.
            if ( 'function' === typeof( woostifyBuyNowProduct ) ) {
                woostifyBuyNowProduct( true );
            }

            // Reset state
            $button.removeClass('add_to_cart_button--loading').prop('disabled', false);
            document.documentElement.classList.remove('quick-view-open');
        })
        .catch(error => {
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
 * Sync swatches when product opens with ?attribute_pa_xxx=
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
 * Initialize quick view variation swatches
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
 * Init on document ready
 */
jQuery(document).ready(function () {
    initQuickViewSlider();
    initQuickViewQuantity();
    initQuickViewVariationSwatches();
    handleQuickViewAddToCart();
     // Re-init buy now button.
    if ( 'function' === typeof( woostifyBuyNowProduct ) ) {
        woostifyBuyNowProduct( true );
    }
});


/**
 * Click quick view button → re-init handlers
 */
jQuery(document).on('click', '.product-quick-view-btn', function () {
    originalGalleryHtml = '';
    setTimeout(function () {
        initQuickViewSlider();
        initQuickViewQuantity();
        initQuickViewVariationSwatches();
        handleQuickViewAddToCart();
        // Re-init buy now button.
        if ( 'function' === typeof( woostifyBuyNowProduct ) ) {
            woostifyBuyNowProduct( true );
        }

    }, 500);
});


/**
 * Observe quick view panel open/close via class change
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
                 // Re-init buy now button.
                if ( 'function' === typeof( woostifyBuyNowProduct ) ) {
                    woostifyBuyNowProduct( true );
                }
            }, 300);
        }
    });
});

quickViewObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
});
