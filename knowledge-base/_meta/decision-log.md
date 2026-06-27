# Decision Log — Quyết định kiến trúc

## ADR-001: Dùng @emotion/react thay vì SCSS thuần

**Quyết định:** CSS-in-JS với Emotion cho frontend styles, SCSS chỉ dùng cho editor.

**Lý do:**
- CSS scoping tự động theo `uniqueId` — tránh class conflict giữa nhiều block instance cùng trang.
- Style responsive (`Desktop/Tablet/Mobile`) dễ generate dynamically từ attributes.
- Styles được inject cả trong editor iframe và frontend mà không cần build SCSS riêng.

**Hệ quả:**
- Mỗi block có `FrontendStyles.tsx` — không sửa `style.scss` cho logic, chỉ dùng SCSS cho editor-only styles.
- File `editor.scss` chỉ dùng trong editor, không ảnh hưởng frontend.

---

## ADR-002: Custom Webpack config thay vì dùng mặc định @wordpress/scripts

**Quyết định:** Extend webpack config của `@wordpress/scripts`, không override hoàn toàn.

**File:** `webpack.config.js`

**Lý do:**
- Cần `safeStyleChunkNamer` để tránh crash khi unnamed chunks không có `name`.
- Dùng `getWebpackEntryPoints()` để auto-detect tất cả blocks từ `src/block-*/index.js`.

---

## ADR-003: Deprecated snapshots dùng date suffix

**Quyết định:** Khi `Save.tsx` thay đổi breaking, tạo snapshot `Save__DDMMYY.tsx` thay vì xóa.

**Pattern:**
```
Save__300523.tsx  ← Save cũ (30/05/2023)
Save__250523.tsx  ← Save cũ hơn
deprecated.tsx    ← import và export tất cả snapshot + attrs tương ứng
```

**Lý do:** WordPress yêu cầu phải support đọc được content cũ trong database.

---

## ADR-004: HOCInspectorControls với 3 tabs cố định

**Quyết định:** Mọi block dùng chung 3 tab sidebar: General, Styles, Advances.

**Lý do:** UX nhất quán, dễ train user. State tab/panel lưu trong `WCB_STORE_PANELS`.

---

## ADR-005: PHP render_callback cho hầu hết blocks

**Quyết định:** Dùng `render_callback` PHP cho hầu hết blocks, kể cả khi chỉ return `$content`.

**Lý do:**
- Đảm bảo `boostify_blocks_enqueue_script_block_commoncss_frontend_styles()` được gọi.
- Frontend CSS injection đúng lúc (chỉ khi block có mặt trên trang).

**Ngoại lệ:** Form child blocks (input, email, phone, v.v.) không có render_callback.

---

## ADR-006: Block enable/disable qua WordPress option

**Quyết định:** Dùng `get_option('boostify_blocks_enable_disable_options')` để bật/tắt blocks.

**Cơ chế:** Block bị disabled → `ancestor` được set thành `BOOSTIFY_BLOCKS_UNIQUE_NAME` → block ẩn khỏi inserter nhưng không bị unregister.
