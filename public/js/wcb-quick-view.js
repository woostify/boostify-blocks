jQuery(document).on('mouseenter', '.product-quick-view-btn', function () {
    const $btn = jQuery(this);
    const productId = $btn.data('product_id');

    if ($btn.data('loaded')) return;

    jQuery.post({
        action: 'wcb_get_product_gallery',
        product_id: productId,
    }, function (res) {
        $btn.closest('.wcb-products__product')
            .find('.wcb-quick-view-hover-gallery')
            .html(res.html);

        tns({
            container: '.wcb-quick-view-hover-gallery',
            items: 1,
            autoplay: true,
        });

        $btn.data('loaded', true);
    });
});

// Function to initialize quick view slider
function initQuickViewSlider() {
    if (typeof tns !== 'undefined' && document.querySelector('#quick-view-gallery')) {
        tns({
            container: '#quick-view-gallery',
            items: 1,
            autoplay: false, // Disable autoplay for manual control
            controls: true,
            controlsText: ['<', '>'],
            nav: true,            
            loop: false,            
            autoplayButtonOutput: false,
        });
    }
}

// Function to initialize quantity buttons in quick view
function initQuickViewQuantity() {
    // Call the theme's customQuantity function if it exists
    if (typeof customQuantity === 'function') {
        // Run immediately
        customQuantity();
        
        // Also run after a short delay in case content is still loading
        setTimeout(customQuantity, 300);
    }
}
// Function to handle add to cart in quick view
function handleQuickViewAddToCart() {
    // Disable theme's handler for quick view buttons
    jQuery(document).on('click', '#woostify-quick-view-panel .single_add_to_cart_button', function(e) {
        e.stopPropagation();
        e.preventDefault();
        
        // Handle manually
        handleQuickViewAddToCartManual(jQuery(this));
        return false;
    });
    
    // Also handle form submit as backup
    jQuery(document).on('submit', '#woostify-quick-view-panel form.cart', function(e) {
        e.preventDefault();
        const $button = jQuery(this).find('.single_add_to_cart_button');
        handleQuickViewAddToCartManual($button);
    });
}

// Manual add to cart handler for quick view
function handleQuickViewAddToCartManual($button) {
    // Prevent multiple calls if already processing
    if ($button.hasClass('add_to_cart_button--loading')) {
        return;
    }
    
    const $form = $button.closest('form.cart');
    
    // Add loading state
    $button.addClass('add_to_cart_button--loading').prop('disabled', true);
    
    // Prepare form data using FormData (same as theme)
    const formData = new FormData($form[0]);
    formData.append('ajax_nonce', woostify_woocommerce_general.ajax_nonce);
    
    // Send AJAX request using fetch (same as theme)
    fetch(wc_add_to_cart_params.wc_ajax_url.toString().replace('%%endpoint%%', 'woostify_single_add_to_cart'), {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Network response was not ok: ' + response.status);
        }
    })
    .then(data => {
        // Check for errors in response
        if (data && data.error) {
            throw new Error(data.error);
        }
        
        // Update cart fragments
        if (typeof woostifyAjaxSingleUpdateFragments === 'function') {
            woostifyAjaxSingleUpdateFragments($button[0]);
        }
        
        // Manually trigger sidebar opening (since theme's logic may not work for quick view)
        setTimeout(function() {
            if (typeof cartSidebarOpen === 'function') {
                cartSidebarOpen();
            }
        }, 100);
        
        // Remove loading state
        $button.removeClass('add_to_cart_button--loading').prop('disabled', false);
        
        // Close quick view
        document.documentElement.classList.remove('quick-view-open');
        
    })
    .catch(error => {
        console.error('Add to cart error:', error);
        $button.removeClass('add_to_cart_button--loading').prop('disabled', false);
        
        // Show error message
        if (typeof woostifyShowNotification === 'function') {
            woostifyShowNotification('Failed to add product to cart. Please try again.', 'error');
        } else {
            alert('Failed to add product to cart. Please try again.');
        }
    });
}

// Initialize on document ready
jQuery(document).ready(function() {
    initQuickViewSlider();
    initQuickViewQuantity();
    handleQuickViewAddToCart();
});

// Also initialize when modal is shown (assuming modal is added dynamically)
jQuery(document).on('click', '.product-quick-view-btn', function() {
    // Assuming the modal is shown here, initialize slider and quantity after a short delay
    setTimeout(function() {
        initQuickViewSlider();
        initQuickViewQuantity();
        handleQuickViewAddToCart();
    }, 100); // Increase delay
});

// Listen for when the quick view modal is opened
const quickViewObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const target = mutation.target;
            if (target === document.documentElement && target.classList.contains('quick-view-open')) {
                // Quick view modal opened, initialize quantity buttons
                setTimeout(initQuickViewQuantity, 300);
            }
        }
    });
});

// Use MutationObserver to detect when quick view content is added to DOM
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    if (node.id === 'quick-view-gallery' || node.querySelector('#quick-view-gallery') ||
                        node.classList && node.classList.contains('quick-view-content') ||
                        node.querySelector && node.querySelector('.quantity')) {
                        setTimeout(function() {
                            initQuickViewSlider();
                            initQuickViewQuantity();
                            handleQuickViewAddToCart();
                        }, 200);
                    }
                }
            });
        }
    });
});

// Start observing DOM changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Observe class changes on documentElement for quick view modal
quickViewObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
});