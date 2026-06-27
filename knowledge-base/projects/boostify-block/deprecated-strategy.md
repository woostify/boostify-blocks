# Deprecated Strategy

## Khi nào cần tạo deprecated version?

Khi `Save.tsx` thay đổi HTML output — bất kỳ thay đổi nào ảnh hưởng đến string HTML được lưu vào database:
- Thêm/xóa wrapper element
- Thay đổi class name
- Thay đổi tag HTML (div → section)
- Thêm attribute HTML mới (data-*, aria-*)
- Thay đổi thứ tự children

**Không cần deprecated** khi chỉ thay đổi:
- `Edit.tsx` (editor UI)
- `FrontendStyles.tsx` (CSS)
- `attributes.ts` defaults (nếu Save không dùng attribute đó)

---

## Quy trình tạo deprecated

### Bước 1: Snapshot Save hiện tại
```bash
# Copy Save.tsx thành snapshot với ngày hiện tại (format: DDMMYY)
cp src/block-xxx/Save.tsx src/block-xxx/Save__230624.tsx
```

### Bước 2: Sửa Save.tsx với code mới

### Bước 3: Cập nhật deprecated.tsx

```typescript
// deprecated.tsx
import Save__230624 from "./Save__230624";  // mới nhất
import Save__300523 from "./Save__300523";  // cũ hơn
import blokcAttrs from "./attributes";

// Version mới nhất (trước khi thay đổi lần này)
const v_latest = {
  attributes: {
    ...blokcAttrs,
    // Nếu attrs cũ bị xóa, thêm lại ở đây với default cũ
  },
  save: Save__230624,
};

// Version cũ hơn
const v_older = {
  attributes: { ...blokcAttrs },
  save: Save__300523,
};

export default [v_latest, v_older]; // Mới nhất trước
```

---

## Ví dụ thực tế — block-form

```
src/block-form/
├── Save.tsx           ← Version hiện tại (mới nhất)
├── Save__290723.tsx   ← Snapshot 29/07/2023
├── Save__300523.tsx   ← Snapshot 30/05/2023
├── Save__250523.tsx   ← Snapshot 25/05/2023
└── deprecated.tsx     ← [v3: Save__290723, v2: Save__300523, v1: Save__250523]
```

deprecated.tsx structure:
- `v3` = attrs hiện tại + `style_submit_button` cũ + `Save__290723`
- `v2` = attrs hiện tại + `Save__300523`  
- `v1` = attrs hiện tại + `Save__250523`

---

## Lỗi thường gặp với deprecated

### "Block contains unexpected content" vẫn còn sau khi thêm deprecated
- Kiểm tra thứ tự: mảng deprecated phải **mới nhất trước**.
- Kiểm tra attributes trong deprecated version có đủ không — thiếu attribute sẽ fail validation.
- Kiểm tra Save cũ có import đúng không.

### Snapshot không khớp
- Save snapshot phải **giống y chang** HTML output của Save cũ tại thời điểm đó.
- Không được sửa gì trong file `Save__DDMMYY.tsx`.

---

## Kiểm tra block validation

Trong browser console (khi editing page):
```js
// Kiểm tra block validation error
wp.data.select('core/block-editor').getBlockValidationIssues()
```

Hoặc: Click vào block bị lỗi → "Attempt Block Recovery" → nếu recover được là deprecated đúng.
