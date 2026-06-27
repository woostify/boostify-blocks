# Codebase Map — Tìm file khi fix bug

## Khi có bug ở block X, đọc theo thứ tự:

```
src/block-X/
├── attributes.ts        ← 1. Khai báo tất cả attributes + default values
├── block.json           ← 2. Metadata: name, title, supports
├── Edit.tsx             ← 3. Editor UI (React component)
├── FrontendStyles.tsx   ← 4. CSS-in-JS cho cả editor và frontend
├── Save.tsx             ← 5. HTML output lưu vào database
├── deprecated.tsx       ← 6. Nếu có lỗi block validation
└── WcbXxxPanel*.tsx     ← 7. Sidebar panels (General/Styles/Advances)
```

**PHP liên quan:**
```
includes/wcb-register-blocks.php          ← register_block_type + render_callback assignment
includes/wcb-blocks-render-callback.php   ← Hầu hết render callbacks (return $content)
includes/wcb-render-callback-for-block-posts-grid.php  ← Posts Grid (phức tạp)
includes/wcb-render-callback-for-block-products.php    ← Products (phức tạp)
includes/wcb-ajax-for-block-form.php      ← Form submission handler
```

---

## Map block → file PHP đặc biệt

| Block | PHP đặc biệt |
|-------|-------------|
| `block-form` | `wcb-ajax-for-block-form.php` — AJAX submit, nonce `boostifyblocks_form_nonce` |
| `block-posts-grid` | `wcb-render-callback-for-block-posts-grid.php` — WP_Query |
| `block-products` | `wcb-render-callback-for-block-products.php` — WC_Product_Query |
| `block-container` | `wcb-blocks-render-callback.php` — `boostify_blocks_block_container_render_callback` |

---

## Shared code hay dùng

### Components (`src/components/`)
```
HOCInspectorControls.tsx      ← Wrapper tạo 3 tab sidebar (General/Styles/Advances)
SaveCommon.tsx                 ← Base component dùng trong Save.tsx
controls/
  MyBackgroundControl/        ← Background (color, gradient, image)
  MyBorderControl/            ← Border + border-radius
  MyBoxShadowControl/         ← Box shadow
  MyDimensionsControl/        ← Padding/margin
  MyFlexPropertiesControl/    ← Flexbox settings
  MyResponsiveConditionControl/ ← Hiện/ẩn theo device
  MyZIndexControl/            ← Z-index
  MyMotionEffectControl/      ← Animation/motion effects
  MyTypographyControl/        ← Font, size, weight, line-height
```

### Hooks (`src/hooks/`)
```
useSetBlockPanelInfo.ts    ← Quản lý open/close panel trong sidebar
useGetDeviceType.ts        ← Lấy device hiện tại (Desktop/Tablet/Mobile) trong editor
useCreateCacheEmotion.ts   ← Inject Emotion CSS vào editor iframe
useGetImageSizeOptions.ts  ← Lấy danh sách image size từ WordPress
```

### Utils (`src/utils/`)
```
converUniqueId.ts              ← Tạo uniqueId cho block mới
getStyleObjectFromResponsiveAttr.ts  ← Convert responsive attr → CSS object
getPaddingMarginStyles.ts      ← Generate padding/margin CSS
getBorderStyles.ts             ← Generate border CSS
getTypographyStyles.ts         ← Generate font CSS
getStyleBackground.tsx         ← Generate background CSS
```

---

## Luồng data khi thêm attribute mới

```
1. attributes.ts      → Thêm vào interface BlockXxxAttrs + blokcAttrs object
2. WcbXxxPanel.tsx    → Thêm control UI (input, select, toggle...)
3. Edit.tsx           → Destructure từ attributes, pass vào Panel + FrontendStyles
4. FrontendStyles.tsx → Đọc attribute, generate CSS string
5. Save.tsx           → Nếu attribute ảnh hưởng HTML output → thêm vào JSX
6. deprecated.tsx     → Nếu Save.tsx thay đổi → tạo snapshot mới
```

---

## Global JS variables (frontend)

Được inject qua `wp_localize_script` trong `wcb-enqueue-scripts.php`:

| Variable | Nội dung |
|----------|---------|
| `window.boostify_blocks_frontend_ajax_object` | `{ ajaxurl, homeUrl, nonce }` |
| `window.boostify_blocks_layout_global_settings` | Layout global settings |
| `window.boostify_blocks_global_variables` | Plugin settings từ dashboard |

---

## Build & Dev

```bash
yarn start    # Watch mode
yarn build    # Production build
```

Output: `build/block-{name}/` — mỗi block có `index.js`, `style-index.css`, `block.json`.
