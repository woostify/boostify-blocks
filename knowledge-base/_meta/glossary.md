# Glossary — Thuật ngữ Boostify Blocks

## Thuật ngữ project-specific

### `uniqueId`
- **Là gì:** String attribute bắt buộc trên mọi block, dùng làm CSS scope và store key.
- **Sinh ra:** `converUniqueId.ts` — gán khi block được insert lần đầu.
- **Dùng ở đâu:** CSS selector (`.wcb-{blockName}-{uniqueId}`), `WCB_STORE_PANELS` key, React hook `useSetBlockPanelInfo(uniqueId)`.

### `WcbAttrsCommonFromWp`
- Interface base cho mọi block attrs: `{ className?, anchor?, align? }`.
- Mọi block attrs đều `extends WcbAttrsCommonFromWp`.

### `AttrsGenericType<T>`
- Type helper để khai báo attributes schema cho Gutenberg từ TypeScript interface.
- Pattern: `const blokcAttrs: AttrsGenericType<BlockXxxAttrs> = { ... }`.

### `HOCInspectorControls`
- Higher-Order Component bọc `<InspectorControls>` của Gutenberg.
- Tạo 3 tab: **General**, **Styles**, **Advances** — dùng `TabPanel` của `@wordpress/components`.
- Type: `InspectorControlsTabTitle = "General" | "Styles" | "Advances"`.

### `useSetBlockPanelInfo(uniqueId)`
- Hook quản lý trạng thái mở/đóng panel trong sidebar.
- Dùng `WCB_STORE_PANELS` (custom Redux store) để lưu `{ tabIsOpen, General, Styles, Advances }`.
- Trả về: `handleTogglePanel`, `tabGeneralIsPanelOpen`, `tabStylesIsPanelOpen`, `tabAdvancesIsPanelOpen`.

### `FrontendStyles`
- Component React render CSS-in-JS (Emotion) vào `<head>` của editor iframe và frontend.
- Được import trong cả `Edit.tsx` và `Save.tsx`.
- Dùng `useCreateCacheEmotion` để inject đúng vào iframe editor.

### `WCB_STORE_PANELS`
- Custom Redux store (`@wordpress/data`) lưu trạng thái panel của tất cả blocks đang active.
- Tên store: `"wcb-panel-store"` (xem `src/data/`).

### `boostify_blocks_enable_disable_options`
- WordPress option lưu trạng thái bật/tắt từng block.
- Format: `{ 'boostify-blocks/heading': 'disabled' | '' }`.
- Khi block bị disable: `ancestor` được set thành `BOOSTIFY_BLOCKS_UNIQUE_NAME` → block chỉ hiện khi tìm kiếm nếu ở trong plugin.

### `render_callback`
- PHP function xử lý server-side render cho block.
- Hầu hết blocks chỉ gọi `boostify_blocks_enqueue_script_block_commoncss_frontend_styles()` rồi return `$content`.
- Ngoại lệ: `block-posts-grid`, `block-products` — có render PHP phức tạp.
- Block-form: gọi `boostify_blocks_block_form_render_callback` để xử lý HTML form.

### `Save__DDMMYY.tsx`
- Snapshot của `Save.tsx` tại thời điểm cụ thể (ví dụ `Save__300523.tsx` = 30/05/2023).
- Dùng trong `deprecated.tsx` để backward compatibility khi Save output thay đổi.

### `block-common-css`
- Block đặc biệt (không hiển thị trong editor), inject CSS chung cho tất cả blocks ở frontend.
- CSS: `build/block-common-css/style-index.css` — luôn được enqueue.

### Responsive attrs pattern
- Attributes có responsive dùng object: `{ Desktop: {...}, Tablet: {...}, Mobile: {...} }`.
- Hook: `useGetDeviceType()` — trả về device hiện tại trong editor.
- Utils: `getStyleObjectFromResponsiveAttr()`, `getCssProperyHasResponsive()`.

---

## Thuật ngữ WordPress/Gutenberg

| Thuật ngữ | Giải thích |
|-----------|-----------|
| `register_block_type` | PHP function đăng ký block, đọc `block.json` |
| `block.json` | Metadata của block: name, title, category, supports |
| `InnerBlocks` | Block chứa các block con |
| `apiVersion: 3` | Phiên bản Gutenberg API mới nhất (dùng trong tất cả blocks) |
| `deprecated` | Mảng các phiên bản Save cũ để backward compat |
| `useBlockProps` | Hook lấy props chuẩn của block wrapper |
| `ServerSideRender` | Component render block bằng PHP ở phía editor |
| `wp_localize_script` | Truyền data PHP → JS qua `window.varName` |
