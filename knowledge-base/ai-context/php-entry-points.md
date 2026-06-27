# PHP Entry Points

## boostify-blocks.php (Main file)

Defines constants, requires all PHP files:

```
BOOSTIFY_BLOCKS_UNIQUE_NAME  = 'boostify-blocks'
BOOSTIFY_BLOCKS_VERSION      = '1.1.13'
BOOSTIFY_BLOCKS_FILE         = __FILE__
BOOSTIFY_BLOCKS_PATH         = plugin_dir_path(__FILE__)
BOOSTIFY_BLOCKS_URI          = plugins_url('/', __FILE__)
BOOSTIFY_BLOCKS_BUILD_PATH   = __DIR__ . '/build'
```

---

## includes/ — Danh sách file PHP

### wcb-hooks.php
- `boostify_blocks_add_new_block_category()` — thêm category "Boostify" vào block inserter.  
  Hook: `block_categories_all` priority 9999999
- `boostify_blocks_add_rest_method()` — backward compat REST API cho WP < 5.5.  
  Hook: `rest_endpoints`

### wcb-register-blocks.php
- **Entry point chính** cho đăng ký tất cả blocks.
- Hook: `init` → `boostify_blocks_create_blocks_gutenberg_init()`
- Requires: `wcb-editor-defaults.php`, cả 2 render callback files, `wcb-ajax-for-block-form.php`
- Đọc option `boostify_blocks_enable_disable_options` để check block nào bị disable.
- WooCommerce check: `block-products` chỉ register khi `defined('WC_PLUGIN_FILE')`.

### wcb-blocks-render-callback.php
- Chứa render callbacks cho **hầu hết blocks** — pattern đơn giản:
  ```php
  function boostify_blocks_block_XXX_render_callback($attributes, $content) {
      boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
      return $content;
  }
  ```
- Blocks có callback ở đây: tabs, map, image, icon-box, counter, team, faq, cta, buttons, button, icon, countdown, testimonials, icon-list, icon-child, heading, slider, container.

### wcb-render-callback-for-block-posts-grid.php
- `boostify_blocks_block_posts_grid_render_callback()` — WP_Query, phân trang, filter.
- **Complex PHP render** — không chỉ return `$content`.

### wcb-render-callback-for-block-products.php
- `boostify_blocks_block_products_render_callback()` — WC_Product_Query.
- Chỉ chạy khi WooCommerce active.
- **Complex PHP render** — không chỉ return `$content`.

### wcb-ajax-for-block-form.php
- `boostify_blocks_form_action_init()` — xử lý form submit.
- Actions: `wp_ajax_boostify_blocks_form_action`, `wp_ajax_nopriv_boostify_blocks_form_action`
- Nonce: `boostifyblocks_form_nonce`
- Sanitization: `boostify_blocks_sanitize_array()` recursive
- Gửi email qua `wp_mail()`

### wcb-enqueue-scripts.php
- `boostify_blocks_my_scripts_method()` — enqueue CSS/JS cho **frontend**.
- CSS: `block-common-css/style-index.css`, `public/css/frontend.css`
- JS libraries: Slick.js, Countdown, Tiny Slider, Quick View, BuyNow
- `wp_localize_script`: inject `boostify_blocks_frontend_ajax_object`, `boostify_blocks_layout_global_settings`, `boostify_blocks_global_variables`

### wcb-custom-funcs.php
- Helper functions dùng chung.
- `boostify_blocks_enqueue_script_block_commoncss_frontend_styles()` — được gọi trong mọi render callback.

### wcb-dashboard-settings-options.php
- WordPress options cho plugin settings.
- Option key: `boostify_blocks_settings_options`, `boostify_blocks_enable_disable_options`.

### wcb-ajax-for-dashboard-page.php
- AJAX handlers cho trang admin dashboard của plugin.

### wcb-menu-page.php
- Đăng ký admin menu page cho Boostify Blocks.

### wcb-editor-defaults.php
- Default values/config được inject vào editor.

### wcb-all-patterns-data.php
- Dữ liệu block patterns (____toolbar-patterns block).

### settings-page.php
- UI cho trang settings của plugin.

### woo/index.php
- WooCommerce integration code.

---

## WordPress Options được dùng

| Option key | Mô tả |
|-----------|-------|
| `boostify_blocks_settings_options` | Plugin global settings (map key, recaptcha, v.v.) |
| `boostify_blocks_enable_disable_options` | `{ 'boostify-blocks/xxx': 'disabled' \| '' }` |
