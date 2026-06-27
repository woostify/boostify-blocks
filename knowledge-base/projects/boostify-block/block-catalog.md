# Block Catalog — Boostify Blocks

**Tổng:** 37 blocks | **Version:** 1.1.13  
**Category:** `boostify-blocks`

---

## Nhóm Layout

### block-container
- **Title:** Container  
- **Slug:** `boostify-blocks/container`  
- **Src:** `src/block-container/`  
- **PHP callback:** `boostify_blocks_block_container_render_callback` (return $content)  
- **InnerBlocks:** Có — chứa bất kỳ block nào  
- **Đặc biệt:** Có `BlockVariationPicker` (chọn layout preset khi insert). `isShowVariations` attribute.  
- **Attributes key:** `general_container`, `general_flexProperties`, `styles_background`, `styles_border`, `styles_boxShadow`, `styles_dimensions`, `advance_responsiveCondition`, `advance_zIndex`, `advance_motionEffect`

---

## Nhóm Content

### block-heading
- **Title:** Heading  
- **Slug:** `boostify-blocks/heading`  
- **Src:** `src/block-heading/`  
- **PHP callback:** `boostify_blocks_block_heading_render_callback`  
- **Attributes key:** `heading` (RichText), `subHeading` (RichText), `general_content`, `styles_heading`, `styles_subHeading`, `styles_separator`, `styles_highlight`, `styles_link`, `styles_border`, `styles_background`, `styles_dimensions`

### block-image
- **Title:** Image  
- **Slug:** `boostify-blocks/image`  
- **PHP callback:** `boostify_blocks_block_image_render_callback`

### block-icon
- **Title:** Icon  
- **Slug:** `boostify-blocks/boostify-icon`  
- **PHP callback:** `boostify_blocks_block_icon_render_callback`  
- **Lưu ý slug:** `boostify-icon` (không phải `icon`)

### block-icon-box
- **Title:** Icon box  
- **Slug:** `boostify-blocks/icon-box`  
- **PHP callback:** `boostify_blocks_block_icon_box_render_callback`

### block-cta
- **Title:** Call to action  
- **Slug:** `boostify-blocks/cta`  
- **PHP callback:** `boostify_blocks_block_cta_render_callback`

### block-map
- **Title:** Google maps  
- **Slug:** `boostify-blocks/map`  
- **PHP callback:** `boostify_blocks_block_map_render_callback`  
- **Yêu cầu:** Google Maps API key (lưu trong `boostify_blocks_settings_options`)

### block-team
- **Title:** Team  
- **Slug:** `boostify-blocks/team`  
- **PHP callback:** `boostify_blocks_block_team_render_callback`

### block-counter
- **Title:** Counter  
- **Slug:** `boostify-blocks/counter`  
- **PHP callback:** `boostify_blocks_block_counter_render_callback`

### block-countdown
- **Title:** Countdown  
- **Slug:** `boostify-blocks/countdown`  
- **PHP callback:** `boostify_blocks_block_countdown_render_callback`  
- **JS lib:** `public/js/countdown/boostify-blocks-countdown.js`

---

## Nhóm List & Accordion

### block-icon-list (parent)
- **Title:** Icon List  
- **Slug:** `boostify-blocks/icon-list`  
- **PHP callback:** `boostify_blocks_block_icon_list_render_callback`  
- **Children:** `block-icon-child`

### block-icon-child
- **Title:** List Item  
- **Slug:** `boostify-blocks/icon` ← **Chú ý: slug khác tên thư mục**  
- **Parent:** `boostify-blocks/icon-list`  
- **PHP callback:** `boostify_blocks_block_icon_child_render_callback`

### block-faq (parent)
- **Title:** FAQ  
- **Slug:** `boostify-blocks/faq`  
- **PHP callback:** `boostify_blocks_block_faq_render_callback`  
- **Children:** `block-faq-child`

### block-faq-child
- **Title:** FAQ child  
- **Parent:** `boostify-blocks/faq`  
- **PHP callback:** Không có (register đơn giản)

### block-tabs (parent)
- **Title:** Tabs  
- **Slug:** `boostify-blocks/tabs`  
- **PHP callback:** `boostify_blocks_block_tabs_render_callback`  
- **Children:** `block-tab-child`

### block-tab-child
- **Parent:** `boostify-blocks/tabs`  
- **PHP callback:** Không có

### block-testimonials
- **Title:** Testimonials  
- **Slug:** `boostify-blocks/testimonials`  
- **PHP callback:** `boostify_blocks_block_testimonials_render_callback`  
- **JS lib:** Slick.js (`public/slick/slick.min.js`)

---

## Nhóm Slider

### block-slider (parent)
- **Title:** Slider  
- **Slug:** `boostify-blocks/slider`  
- **PHP callback:** `boostify_blocks_block_slider_render_callback`  
- **Children:** `block-slider-child`  
- **JS lib:** Tiny Slider

### block-slider-child
- **Parent:** `boostify-blocks/slider`  
- **PHP callback:** Không có

---

## Nhóm Buttons

### block-buttons (parent)
- **Title:** Buttons  
- **Slug:** `boostify-blocks/buttons`  
- **PHP callback:** `boostify_blocks_block_buttons_render_callback`  
- **Children:** `block-button`

### block-button
- **Title:** Button  
- **Parent:** `boostify-blocks/buttons`  
- **PHP callback:** `boostify_blocks_block_button_render_callback`

---

## Nhóm Posts/Products (Server-Side Render)

### block-posts-grid
- **Title:** Posts grid  
- **Slug:** `boostify-blocks/posts-grid`  
- **PHP callback:** `boostify_blocks_block_posts_grid_render_callback`  
- **File riêng:** `includes/wcb-render-callback-for-block-posts-grid.php`  
- **Render:** Server-side PHP hoàn toàn (WP_Query)  
- **Attributes (PHP-registered):** `uniqueId`, `general_sortingAndFiltering`, `general_postContent`, `general_postMeta`, `general_postFeaturedImage`, `general_readmoreLink`, `general_layout`, `general_pagination`, `style_*`, `advance_*`

### block-products
- **Title:** Products  
- **Slug:** `boostify-blocks/products`  
- **PHP callback:** `boostify_blocks_block_products_render_callback`  
- **File riêng:** `includes/wcb-render-callback-for-block-products.php`  
- **Yêu cầu:** WooCommerce active (`defined('WC_PLUGIN_FILE')`)  
- **Attributes (PHP-registered):** Tương tự posts-grid + `general_addToCartBtn`, `style_saleBadge`, `style_outOfStock`, `style_rating`, `style_wishlistBtn`, `style_quickViewBtn`, `style_countdownUrgency`

---

## Nhóm Form

### block-form (parent)
- **Title:** Form  
- **Slug:** `boostify-blocks/form`  
- **PHP callback:** `boostify_blocks_block_form_render_callback`  
- **AJAX:** `boostify_blocks_form_action_init()` — `wcb-ajax-for-block-form.php`  
- **Children:** input, email, phone, textarea, checkbox, radio, url, select, toggle, date, accept, hidden  
- **Deprecated:** Có — `deprecated.tsx` với 3 versions (Save__300523, Save__250523, Save__290723)

### Form Child Blocks (không có render_callback)

| Block | Title | Slug |
|-------|-------|------|
| block-input | Input | `boostify-blocks/input` |
| block-email | Email | `boostify-blocks/email` |
| block-phone | Phone | `boostify-blocks/phone` |
| block-textarea | Textarea | `boostify-blocks/textarea` |
| block-checkbox | Checkbox | `boostify-blocks/checkbox` |
| block-radio | Radio | `boostify-blocks/radio` |
| block-url | Url | `boostify-blocks/url` |
| block-select | Select | `boostify-blocks/select` |
| block-toggle | Toggle | `boostify-blocks/toggle` |
| block-date | Date | `boostify-blocks/date` |
| block-accept | Accept | `boostify-blocks/accept` |
| block-hidden | Hidden | `boostify-blocks/hidden` |

---

## Blocks đặc biệt (không hiển thị trong inserter)

### block-common-css
- **Mục đích:** Inject CSS chung cho tất cả blocks ở frontend
- **CSS:** `build/block-common-css/style-index.css` — luôn enqueue

### ____dashboard
- **Mục đích:** Block cho trang admin dashboard của plugin

### ____toolbar-patterns
- **Mục đích:** Toolbar patterns cho Gutenberg toolbar

### __default
- **Mục đích:** Default block styles/config
