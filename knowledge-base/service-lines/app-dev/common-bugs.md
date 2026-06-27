# Common Bugs — WordPress Gutenberg Block Development

> Các lỗi phổ biến khi làm việc với Gutenberg blocks, đặc biệt trong Boostify Blocks.

---

## 1. Block Validation Errors

### "This block contains unexpected or invalid content"
**Nguyên nhân:** `Save.tsx` thay đổi HTML output mà database vẫn lưu HTML cũ.  
**Fix:** Thêm deprecated version. Xem `knowledge-base/projects/boostify-block/deprecated-strategy.md`.

### Block không load sau update plugin
**Nguyên nhân:** Save output thay đổi nhiều version mà deprecated chain bị đứt.  
**Fix:** Kiểm tra deprecated array — phải cover tất cả versions từ trước đến nay.

---

## 2. Attributes Issues

### Attribute không persist sau save
- Kiểm tra type: phải là `"boolean"` (không phải `"bool"`), `"number"` (không phải `"int"`).
- Kiểm tra attribute có trong `block.json` không (hoặc được register qua PHP cho server-side blocks).
- Object attribute: cần `type: "object"` — không dùng nested type declarations.

### Default value không apply
- Default trong `attributes.ts` chỉ apply lần đầu insert block.
- Không dùng `undefined` làm default — dùng `null` hoặc `""` hoặc `_DEMO` constant.

---

## 3. CSS/Styling Issues

### Style không hiện ở frontend
1. Thiếu `render_callback` → `boostify_blocks_enqueue_script_block_commoncss_frontend_styles()` không chạy.
2. `FrontendStyles.tsx` không được import trong `Save.tsx`.
3. CSS scoping sai — class name không match giữa Save HTML và FrontendStyles selector.

### Style không hiện trong editor (iframe)
- Thiếu `useCreateCacheEmotion` trong `FrontendStyles.tsx`.
- Emotion inject vào wrong document (main document thay vì iframe document).

### Responsive style không hoạt động
- Kiểm tra `useGetDeviceType()` đang trả về đúng device.
- Attribute responsive chưa có key đúng: phải là `"Desktop"`, `"Tablet"`, `"Mobile"` (case-sensitive).

---

## 4. Gutenberg Editor Issues

### Block không hiện trong inserter
- Block bị disable trong dashboard settings.
- `ancestor` bị set sai → block chỉ hiện trong context cụ thể.
- `block.json` category sai (phải là `"boostify-blocks"`).

### Sidebar panel không mở
- `useSetBlockPanelInfo(uniqueId)` cần `uniqueId` đã được set.
- Race condition: block mới insert chưa có `uniqueId` → useEffect chưa chạy.

### InnerBlocks không chấp nhận block nhất định
- Kiểm tra `allowedBlocks` trong `InnerBlocks` component.
- Kiểm tra `parent` field trong `block.json` của child block.

---

## 5. PHP Issues

### Block không render ở frontend
- `register_block_type` chưa được gọi (block chưa được add vào `wcb-register-blocks.php`).
- Build chưa được chạy — `build/block-xxx/` không tồn tại.
- `render_callback` function name typo.

### WooCommerce block không hoạt động
- WooCommerce chưa được cài/activate → `defined('WC_PLUGIN_FILE')` = false → block không register.
- Kiểm tra trong `wcb-register-blocks.php` phần `if (defined('WC_PLUGIN_FILE')):`.

### Form không gửi email
- SMTP server chưa config → `wp_mail()` fail silently.
- Nonce mismatch — xem `known-bugs.md#BUG-006`.
- `wp_ajax_nopriv_*` action thiếu → form không hoạt động với user chưa đăng nhập.

---

## 6. Build Issues

### Webpack build fail với "Cannot read path.dirname of undefined"
- Unnamed chunk trong code splitting.
- Fix: `safeStyleChunkNamer` trong `webpack.config.js` đã handle — kiểm tra config không bị override.

### Block không update sau sửa code
- Chạy `yarn build` hoặc `yarn start`.
- Clear browser cache.
- WordPress block editor cache: `localStorage.removeItem('GUTENBERG_PREFERENCES')`.

---

## 7. TypeScript Issues

### "@ts-ignore" comments
- Nhiều WordPress imports không có type definitions đầy đủ → dùng `@ts-ignore` là chấp nhận được.
- Không cố sửa TS errors trong `@wordpress/*` imports.

### Type errors với block props
- Dùng `EditProps<BlockXxxAttrs>` type cho Edit component.
- `setAttributes` type: `(newAttributes: Partial<BlockXxxAttrs>) => void`.
