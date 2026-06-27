# Known Bugs & Solutions

> Cập nhật file này mỗi khi fix xong bug mới. Mục đích: AI không lặp lại cách tiếp cận sai.

---

## Template — thêm bug mới

```
## BUG-XXX: [Mô tả ngắn]

**Block:** block-xxx  
**Triệu chứng:** ...  
**Root cause:** ...  
**Fix:** ...  
**Files đã sửa:** ...  
**Ngày:** YYYY-MM-DD
```

---

## BUG-001: Block Validation Error sau khi sửa Save.tsx

**Block:** Bất kỳ block nào  
**Triệu chứng:** Editor hiện "This block contains unexpected or invalid content" — block bị recover về HTML.  
**Root cause:** `Save.tsx` thay đổi HTML output mà không thêm entry vào `deprecated.tsx`.  
**Fix:**
1. Tạo snapshot `Save__DDMMYY.tsx` copy từ Save cũ.
2. Thêm entry mới nhất vào đầu mảng `deprecated.tsx`.
3. Nếu attributes cũng thay đổi, include attrs cũ vào version deprecated đó.  
**Files:** `Save.tsx`, `Save__DDMMYY.tsx` (mới), `deprecated.tsx`

---

## BUG-002: CSS không apply ở frontend (chỉ hiện trong editor)

**Block:** Bất kỳ block có FrontendStyles  
**Triệu chứng:** Styles đúng trong editor, nhưng frontend không có CSS.  
**Root cause:** `render_callback` không được đăng ký trong `wcb-register-blocks.php`, nên `boostify_blocks_enqueue_script_block_commoncss_frontend_styles()` không được gọi.  
**Fix:** Thêm `render_callback` cho block trong `wcb-register-blocks.php`.  
**Files:** `includes/wcb-register-blocks.php`, `includes/wcb-blocks-render-callback.php`

---

## BUG-003: Attribute type mismatch — không save được

**Block:** Bất kỳ  
**Triệu chứng:** Thay đổi attribute trong editor, save page, reload — giá trị reset về default.  
**Root cause:** Type trong `attributes.ts` không khớp với type WordPress expect. Ví dụ: dùng `type: "bool"` thay vì `type: "boolean"`.  
**Fix:** Kiểm tra type string chính xác: `"string"`, `"number"`, `"boolean"`, `"object"`, `"array"`, `"null"`.  
**Files:** `src/block-xxx/attributes.ts`

---

## BUG-004: Emotion CSS không inject vào editor iframe

**Block:** Bất kỳ block có FrontendStyles  
**Triệu chứng:** FrontendStyles hoạt động ở frontend nhưng không thấy style trong editor (Gutenberg iframe editor).  
**Root cause:** Thiếu `useCreateCacheEmotion` hook — Emotion cần inject vào đúng document của iframe.  
**Fix:** Dùng pattern chuẩn với `CacheProvider` + `useCreateCacheEmotion`:
```tsx
const { cache, ref } = useCreateCacheEmotion();
return (
  <CacheProvider value={cache}>
    <div ref={ref} />
    <Global styles={globalCss} />
  </CacheProvider>
);
```
**Files:** `src/block-xxx/FrontendStyles.tsx`

---

## BUG-005: Block Products/Posts Grid không hiển thị ở frontend

**Block:** block-products, block-posts-grid  
**Triệu chứng:** Block trống ở frontend.  
**Root cause:** Các block này có PHP render phức tạp, không chỉ return `$content`.  
**Fix:** Kiểm tra render callback riêng trong:
- `includes/wcb-render-callback-for-block-products.php`
- `includes/wcb-render-callback-for-block-posts-grid.php`  
**Lưu ý:** Products chỉ hoạt động khi WooCommerce active (`defined('WC_PLUGIN_FILE')`).

---

## BUG-006: Form submit không gửi email

**Block:** block-form  
**Triệu chứng:** Form submit không có lỗi JS nhưng không nhận được email.  
**Checklist:**
1. Kiểm tra nonce: `boostifyblocks_form_nonce` — phải match giữa `wp_localize_script` và `wp_verify_nonce`.
2. Kiểm tra `to` email hợp lệ trong block settings.
3. WordPress `wp_mail()` phụ thuộc server SMTP — kiểm tra server mail config.
4. Action: `wp_ajax_boostify_blocks_form_action` (logged in) + `wp_ajax_nopriv_boostify_blocks_form_action` (not logged in) — cả 2 phải được đăng ký.  
**Files:** `includes/wcb-ajax-for-block-form.php`

---

## BUG-007: Block bị ẩn khỏi inserter khi không nên

**Triệu chứng:** Block không xuất hiện trong block inserter.  
**Root cause:** `ancestor` bị set thành `BOOSTIFY_BLOCKS_UNIQUE_NAME` — xảy ra khi option `boostify_blocks_enable_disable_options` có block bị set `'disabled'`.  
**Fix:** Kiểm tra WordPress admin → Boostify Blocks dashboard → bật lại block bị tắt.  
**Files:** `includes/wcb-register-blocks.php`, `includes/wcb-dashboard-settings-options.php`
