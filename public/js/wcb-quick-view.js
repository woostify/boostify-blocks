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
            nav: true,            loop: false,            autoplayButtonOutput: false,
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
        setTimeout(customQuantity, 100);
        setTimeout(customQuantity, 500);
    }
}

// Initialize on document ready
jQuery(document).ready(function() {
    initQuickViewSlider();
    initQuickViewQuantity();
});

// Also initialize when modal is shown (assuming modal is added dynamically)
jQuery(document).on('click', '.product-quick-view-btn', function() {
    // Assuming the modal is shown here, initialize slider and quantity after a short delay
    setTimeout(function() {
        initQuickViewSlider();
        initQuickViewQuantity();
    }, 500); // Increase delay
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