# Architecture — Boostify Blocks

## Tổng quan data flow

```
[User thay đổi control trong sidebar]
        ↓
  setAttributes({ attr: value })
        ↓
  attributes (WP block state)
        ↓
  ┌─────────────────────────────────┐
  │  Edit.tsx (Editor UI)           │
  │  ├── HOCInspectorControls       │  ← Sidebar panels
  │  ├── FrontendStyles.tsx         │  ← CSS-in-JS → <style> in head
  │  └── Block content JSX         │  ← Hiển thị trong editor
  └─────────────────────────────────┘
        ↓ (khi save page)
  Save.tsx → HTML string → database
        ↓ (khi load frontend)
  PHP render_callback($attrs, $content)
  ├── enqueue common CSS
  └── return $content (hoặc render PHP)
```

---

## Cấu trúc mỗi block

```
src/block-xxx/
├── block.json              # Metadata Gutenberg
├── index.js                # Webpack entry: import Edit, Save, register
├── attributes.ts           # TypeScript interface + WP attribute schema
├── Edit.tsx                # Editor component
├── ContainerEdit.tsx       # (nếu có) tách logic ra khỏi Edit.tsx
├── Save.tsx                # Static HTML output
├── FrontendStyles.tsx      # CSS-in-JS (Emotion) — dùng cả editor lẫn frontend
├── deprecated.tsx          # Backward compat với Save cũ
├── Save__DDMMYY.tsx        # Snapshot Save cũ
├── WcbXxxPanelGeneral.tsx  # Sidebar tab General
├── WcbXxxPanel_StyleXxx.tsx # Sidebar tab Styles  
├── editor.scss             # Editor-only CSS (không ảnh hưởng frontend)
├── style.scss              # Frontend base CSS (ít dùng, chủ yếu dùng Emotion)
└── types.ts                # TypeScript types bổ sung
```

---

## Luồng CSS

### Editor
```
FrontendStyles.tsx
  → useCreateCacheEmotion()    ← inject đúng vào iframe document
  → @emotion/react Global      ← CSS scoped by .wcb-block-xxx-{uniqueId}
  → <style> tag trong editor iframe head
```

### Frontend
```
PHP render_callback
  → boostify_blocks_enqueue_script_block_commoncss_frontend_styles()
     → wp_enqueue_style('block-common-css/style-index.css')

FrontendStyles.tsx (compiled vào build/block-xxx/style-index.css)
  → Emotion SSR / hydration
  → CSS scoped by .wcb-block-xxx-{uniqueId}

public/css/frontend.css
  → Global styles chung
```

---

## Redux Store — WCB_STORE_PANELS

Custom `@wordpress/data` store quản lý trạng thái panel sidebar:

```typescript
// State shape
{
  [uniqueId: string]: {
    tabIsOpen: "General" | "Styles" | "Advances",
    General: { panelIsOpen: string },
    Styles:  { panelIsOpen: string },
    Advances: { panelIsOpen: string },
  }
}
```

Actions: `setBlockPanelInfo(blockId, block)`  
Selectors: `getBlockPanelInfo()`

---

## Block Registration Flow

```
WordPress init hook
  → boostify_blocks_create_blocks_gutenberg_init()
     → get_option('boostify_blocks_enable_disable_options')
     → register_block_type(BUILD_PATH . '/block-xxx', [...])
        → đọc build/block-xxx/block.json (auto)
        → gán render_callback PHP
        → set ancestor (nếu block bị disable)
```

---

## Webpack Build

```
webpack.config.js (extends @wordpress/scripts)
  → entry: getWebpackEntryPoints()
     → auto-detect tất cả src/*/index.js
  → output: build/{block-name}/
     → index.js    (editor script)
     → index.css   (editor style)
     → style-index.css (frontend style)
     → block.json  (copy từ src)
     → index.asset.php (dependencies)
```

Custom: `safeStyleChunkNamer` — tránh crash khi unnamed chunks.

---

## WooCommerce Integration

```php
// Chỉ register khi WC active
if (defined('WC_PLUGIN_FILE')):
    register_block_type(BUILD . '/block-products', [...]);
endif;
```

```
includes/woo/index.php  ← WC-specific code
```

JS check: `window.boostify_blocks_global_variables` có thể chứa WC settings.

---

## Frontend JavaScript Libraries

| Library | Version | Dùng cho |
|---------|---------|---------|
| jQuery | WP bundled | Base dependency |
| Slick.js | 1.8.0 | Testimonials slider |
| Tiny Slider | 2.9.4 | block-slider |
| Countdown (custom) | - | block-countdown |
| WCB Quick View | custom | WC product quick view |
| WCB BuyNow | custom | WC buy now button |
