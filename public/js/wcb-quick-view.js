/**
 * Load preview gallery when hovering the Quick View button.
 * Handled by the Interactivity API store in
 * public/js/quick-view/wcb-quick-view-preview.js — see the
 * `data-wp-interactive="boostify-blocks/quick-view-preview"` wrapper
 * rendered around the button in wcb-render-callback-for-block-products.php.
 */


const WCB_QV_FALLBACK_ICONS = {
    prev: '<span class="woostify-svg-icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"><path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z" fill="currentColor"></path></svg></span>',
    next: '<span class="woostify-svg-icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"><path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z" fill="currentColor"></path></svg></span>',
};

function getQuickViewArrowIcon(direction) {
    if (typeof window.get_svg_icon === 'function') {
        const iconName = direction === 'prev' ? 'angle-left' : 'angle-right';
        const iconHtml = window.get_svg_icon(iconName);
        if (iconHtml && iconHtml.indexOf('<svg') !== -1) {
            return iconHtml;
        }
    }
    return WCB_QV_FALLBACK_ICONS[direction] || '';
}

let quickViewSlider = null;
let isBoostifyQuickView = false;
let quickViewGalleryState = {
    originalHtml: '',
    originalIsSlider: false,
    showingVariation: false,
};

/**
 * Safely destroy active Tiny Slider instance on the Quick View modal.
 */
function destroyQuickViewSlider() {
    if (quickViewSlider && typeof quickViewSlider.destroy === 'function') {
        try {
            quickViewSlider.destroy();
        } catch (e) {}
    }
    quickViewSlider = null;
}

/**
 * Rebuild #quick-view-gallery contents and mount Tiny Slider at most once when multi-slide.
 *
 * @param {string|null} slidesHtml
 * @param {boolean} shouldInitSlider
 */
function rebuildQuickViewGallery(slidesHtml, shouldInitSlider) {
    const panel = document.getElementById('woostify-quick-view-panel');
    if (!panel) return;

    destroyQuickViewSlider();

    const gallery = panel.querySelector('#quick-view-gallery');
    if (!gallery) return;

    // Unwrap any leftover .tns-outer wrapper so repeated variation/reset actions never stack wrappers.
    const outer = gallery.closest('.tns-outer');
    if (outer && outer.parentNode) {
        outer.parentNode.insertBefore(gallery, outer);
        outer.remove();
    }

    gallery.className = shouldInitSlider ? 'quick-view-slider' : '';

    if (typeof slidesHtml === 'string') {
        gallery.innerHTML = slidesHtml;
    }

    if (shouldInitSlider && typeof window.tns === 'function' && gallery.children.length > 1) {
        const prevIcon = getQuickViewArrowIcon('prev');
        const nextIcon = getQuickViewArrowIcon('next');
        quickViewSlider = window.tns({
            container: gallery,
            items: 1,
            autoplay: false,
            controls: true,
            controlsText: [prevIcon, nextIcon],
            nav: true,
            loop: false,
            mouseDrag: true,
            autoplayButtonOutput: false,
        });
    }

    return panel.querySelector('#quick-view-gallery');
}

/**
 * Select dropdowns swatches
 */
jQuery(document).on(
    'change',
    '#woostify-quick-view-panel select[name^="attribute_"]',
    function () {
        if (!isBoostifyQuickView) return;

        const $select = jQuery(this);
        const $form = $select.closest('form.variations_form');
        const attribute = $select.attr('name');

        if (!attribute) return;

        $form.trigger('check_variations');
        $form.trigger('woocommerce_variation_select_change');

        setTimeout(function () {
            updateQuickViewGallery($form, attribute, $select.val());
        }, 50);
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
        if (!isBoostifyQuickView) return;

        const $swatch = jQuery(this);
        const value = $swatch.data('value');
        const $wrap = $swatch.closest('.woostify-variation-swatches');
        const attribute = $wrap.data('attribute_name');
        const $form = $swatch.closest('form.variations_form');
        const $select = $form.find(`select[name="${attribute}"]`);

        if ($select.length) {
            // Triggers the 'change' listener above which runs check_variations & updateQuickViewGallery.
            $select.val(value).trigger('change');
        }
    }
);

/**
 * Update gallery slider when variation changes
 * @param {jQuery} $form - The variations form jQuery object
 * @param {string} attribute - The changed attribute name
 * @param {string} value - The selected attribute value
 */
function updateQuickViewGallery($form, attribute, value) {
    const gallery = document.querySelector('#woostify-quick-view-panel #quick-view-gallery');
    if (!gallery) return;

    const variations = $form.data('product_variations');
    if (!variations || !variations.length) return;

    const selectedAttrs = {};
    $form.find('select[name^="attribute_"]').each(function () {
        if (this.value) {
            selectedAttrs[this.name] = this.value;
        }
    });

    const hasAnySelection = Object.keys(selectedAttrs).length > 0;
    const matchedVariation = hasAnySelection
        ? variations.find((v) =>
              v.attributes &&
              Object.keys(selectedAttrs).every(
                  (key) => !v.attributes[key] || v.attributes[key] === selectedAttrs[key]
              )
          ) ||
          (value
              ? variations.find((v) => v.attributes && v.attributes[attribute] === value)
              : null)
        : null;

    if (matchedVariation && matchedVariation.variation_id && matchedVariation.image && matchedVariation.image.src) {
        const img = document.createElement('img');
        img.src = matchedVariation.image.src;
        if (matchedVariation.image.srcset) img.srcset = matchedVariation.image.srcset;
        if (matchedVariation.image.sizes) img.sizes = matchedVariation.image.sizes;
        img.alt = matchedVariation.image.alt || '';

        const slide = document.createElement('div');
        slide.className = 'image-item';
        slide.appendChild(img);

        rebuildQuickViewGallery(slide.outerHTML, false);
        quickViewGalleryState.showingVariation = true;
    } else if (quickViewGalleryState.originalHtml && quickViewGalleryState.showingVariation) {
        quickViewGalleryState.showingVariation = false;
        rebuildQuickViewGallery(
            quickViewGalleryState.originalHtml,
            quickViewGalleryState.originalIsSlider
        );
    }
}

/**
 * Block theme handlers and apply custom reset logic on Boostify product Quick View
 */
document.addEventListener(
    'click',
    function (e) {
        if (!isBoostifyQuickView) return;

        const resetBtn = e.target.closest(
            '#woostify-quick-view-panel .reset_variations'
        );
        if (!resetBtn) return;

        e.preventDefault();
        e.stopImmediatePropagation();

        handleQuickViewResetURL(resetBtn);

        if (quickViewGalleryState.originalHtml && quickViewGalleryState.showingVariation) {
            quickViewGalleryState.showingVariation = false;
            rebuildQuickViewGallery(
                quickViewGalleryState.originalHtml,
                quickViewGalleryState.originalIsSlider
            );
        } else if (quickViewSlider && typeof quickViewSlider.goTo === 'function') {
            quickViewSlider.goTo('first');
        }
    },
    true
);

/**
 * Clear variations, swatches, and sync URL state
 */
function handleQuickViewResetURL(btn) {
    const $form = jQuery(btn).closest('form.variations_form');

    const url = new URL(window.location.href);
    if (!url.searchParams.has('page_id')) {
        const pageId = btn.closest('#woostify-quick-view-panel')
            ?.getAttribute('data-page-id');
        if (pageId) {
            url.searchParams.set('page_id', pageId);
        }
    }

    [...url.searchParams.keys()].forEach(key => {
        if (key.startsWith('attribute_')) {
            url.searchParams.delete(key);
        }
    });

    history.replaceState({}, '', url.toString());

    $form.find('select[name^="attribute_"]').val('');
    $form.find('.woostify-variation-swatches .swatch').removeClass('selected');
    $form.trigger('reset_data');
    $form.trigger('check_variations');
}

/**
 * Initialize Quick View slider once after AJAX content mounts (only if not already wrapped by theme JS)
 */
function initQuickViewSlider() {
    const gallery = document.querySelector('#woostify-quick-view-panel #quick-view-gallery');
    if (!gallery) return;

    if (!gallery.closest('.tns-outer')) {
        quickViewGalleryState = {
            originalHtml: gallery.innerHTML,
            originalIsSlider: gallery.classList.contains('quick-view-slider'),
            showingVariation: false,
        };
    }

    // If Woostify Pro already mounted Tiny Slider cleanly, do not stack another wrapper.
    if (gallery.closest('.tns-outer')) {
        return;
    }

    if (gallery.classList.contains('quick-view-slider')) {
        rebuildQuickViewGallery(null, true);
    }
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
let addToCartHandlersBound = false;

function handleQuickViewAddToCart() {
    if (addToCartHandlersBound) return;
    addToCartHandlersBound = true;

    // Handle button click
    jQuery(document).on(
        'click',
        '#woostify-quick-view-panel .single_add_to_cart_button',
        function (e) {
            if (!isBoostifyQuickView) return;
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
            if (!isBoostifyQuickView) return;
            e.preventDefault();
            const $button = jQuery(this).find('.single_add_to_cart_button');
            handleQuickViewAddToCartManual($button);
        }
    );
}

/**
 * Manual AJAX add to cart handler (FIXED for variable products)
 * @param {jQuery} $button
 */
function handleQuickViewAddToCartManual($button) {

    // Prevent double submit
    if ($button.hasClass('add_to_cart_button--loading')) return;

    const $form = $button.closest('form.cart');

    // Loading state
    $button.addClass('add_to_cart_button--loading').prop('disabled', true);

    try {

        const formData = new FormData($form[0]);
        const variations = $form.data('product_variations') || [];
        let variationId = '';

        /* ----------------------------------------------------
         * 1. Collect selected attributes
         * ---------------------------------------------------- */
        const attributes = {};
        let hasEmpty = false;

        $form.find('select[name^="attribute_"]').each(function () {
            const name  = this.name;
            const value = this.value;

            if (!value) {
                hasEmpty = true;
            }
            attributes[name] = value;
        });

        // TODO: Enable this check if needed
        // if (hasEmpty && variations.length) {
        //     throw 'Please select all product options.';
        // }

        /* ----------------------------------------------------
         * 2. Match variation
         * ---------------------------------------------------- */
        if (variations.length) {
            const matched = variations.find(v =>
                Object.keys(attributes).every(attr =>
                    v.attributes[attr] === attributes[attr]
                )
            );

            // TODO: Enable this check if needed
            // if (!matched) {
            //     throw 'Selected variation not found.';
            // }

            if (matched && matched.variation_id) {
                variationId = matched.variation_id;
                formData.set('variation_id', variationId);
            }
        }

        /* ----------------------------------------------------
         * 3. Required fields
         * ---------------------------------------------------- */
        // TODO: Enable this check if needed
        // if (!formData.get('product_id')) {
        //     throw 'Missing product ID.';
        // }

        formData.append(
            'ajax_nonce',
            woostify_woocommerce_general.ajax_nonce
        );

        /* ----------------------------------------------------
         * 4. AJAX add to cart
         * ---------------------------------------------------- */
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

            if (data.error) {
                throw data.error;
            }

            // Update cart fragments
            if (typeof woostifyAjaxSingleUpdateFragments === 'function') {
                woostifyAjaxSingleUpdateFragments($button[0]);
            }

            // Open cart sidebar
            setTimeout(() => {
                if (typeof cartSidebarOpen === 'function') {
                    cartSidebarOpen();

                    // Add loading state to cart sidebar
                    const cartSidebarDOM = jQuery('#shop-cart-sidebar');
                    cartSidebarDOM.addClass('cart-sidebar--loading');

                    setTimeout(() => {
                        cartSidebarDOM.removeClass('cart-sidebar--loading');
                    }, 400);
                }
            }, 200);
            
             // Re-init buy now button.
            if ( 'function' === typeof( woostifyBuyNowProduct ) ) {
                woostifyBuyNowProduct( true );
            }
            // Reset UI
            $button
                .removeClass('add_to_cart_button--loading')
                .prop('disabled', false);

            document.documentElement.classList.remove('quick-view-open');
        })
        .catch(err => {
            throw err;
        });

    } catch (error) {

        $button
            .removeClass('add_to_cart_button--loading')
            .prop('disabled', false);

        if (typeof woostifyShowNotification === 'function') {
            woostifyShowNotification(
                typeof error === 'string'
                    ? error
                    : 'Failed to add product to cart.',
                'error'
            );
        } else {
            console.log(error);
            // alert(error);
        }
    }
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
 * Initialize quick view variation swatches & Woo variation form
 */
function initQuickViewVariationSwatches() {
    const $variationForm = jQuery('#woostify-quick-view-panel .variations_form');
    if ($variationForm.length && typeof $variationForm.wc_variation_form === 'function' && !$variationForm.data('wc_variation_form')) {
        $variationForm.wc_variation_form();
        $variationForm.find('.variations select').trigger('change');
    }

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


function initBoostifyQuickViewHandlers() {
    initQuickViewSlider();
    initQuickViewQuantity();
    initQuickViewVariationSwatches();
    handleQuickViewAddToCart();
    if ('function' === typeof woostifyBuyNowProduct) {
        woostifyBuyNowProduct(true);
    }
    if ('function' === typeof woostifyCountdownPreorder) {
        woostifyCountdownPreorder(true);
    }
    if ('function' === typeof woostifyCountdownUrgency) {
        woostifyCountdownUrgency(true);
    }
}

let quickViewContentObserver = null;

function ensureQuickViewContentObserver() {
    if (quickViewContentObserver) return;
    const contentEl = document.querySelector('#woostify-quick-view-panel .quick-view-content');
    if (!contentEl) return;

    const tryInitIfReady = () => {
        if (!isBoostifyQuickView) return;
        const gallery = contentEl.querySelector('#quick-view-gallery');
        if (!gallery || gallery.dataset.wcbInitialized === '1') return;

        gallery.dataset.wcbInitialized = '1';
        initBoostifyQuickViewHandlers();
    };

    quickViewContentObserver = new MutationObserver(function () {
        tryInitIfReady();
    });
    quickViewContentObserver.observe(contentEl, {
        childList: true,
        subtree: false,
    });
    tryInitIfReady();
}

/**
 * Init on document ready
 */
jQuery(document).ready(function () {
    handleQuickViewAddToCart();
    ensureQuickViewContentObserver();
});

/**
 * Track whether Quick View was triggered from a Boostify Blocks Products card.
 * Uses capture phase so flag is set before Woostify Pro's AJAX request resolves.
 */
document.addEventListener(
    'click',
    function (e) {
        const btn = e.target.closest('.product-quick-view-btn');
        if (!btn) return;

        isBoostifyQuickView = Boolean(btn.closest('.wcb-products__wrap'));
        ensureQuickViewContentObserver();

        const panel = document.getElementById('woostify-quick-view-panel');
        const clickedId = btn.getAttribute('data-pid');
        const currentId = panel ? panel.getAttribute('data-view_id') : null;
        if (clickedId !== currentId) {
            destroyQuickViewSlider();
        }
    },
    true
);

/**
 * Fallback if Woostify Pro fires woostify_quickview_displayed after DOM insertion.
 */
document.addEventListener('woostify_quickview_displayed', function () {
    if (!isBoostifyQuickView) return;
    const gallery = document.querySelector('#woostify-quick-view-panel #quick-view-gallery');
    if (!gallery || gallery.dataset.wcbInitialized === '1') return;
    gallery.dataset.wcbInitialized = '1';
    initBoostifyQuickViewHandlers();
});
