# Dev Agent Prompt — Boostify Blocks

Dùng prompt này khi giao task fix bug hoặc thêm feature cho AI agent.

---

## Template Prompt: Fix Bug

```
## Context
Plugin: Boostify Blocks (WordPress Gutenberg blocks plugin)
Stack: TypeScript/TSX, React, @emotion/react, PHP 7.3+, @wordpress/scripts

## Tài liệu quan trọng (đọc trước)
- knowledge-base/ai-context/codebase-map.md       ← map file
- knowledge-base/ai-context/patterns.md            ← code patterns
- knowledge-base/ai-context/known-bugs.md          ← bug đã biết
- knowledge-base/projects/boostify-block/block-catalog.md  ← thông tin block

## Bug cần fix
**Block:** [tên block, vd: block-form]
**Triệu chứng:** [mô tả bug]
**Bước tái hiện:** [steps]
**Expected:** [kết quả mong muốn]

## Yêu cầu
1. Đọc knowledge-base trước khi xem code
2. Chỉ sửa file liên quan đến bug, không refactor code khác
3. Nếu Save.tsx thay đổi → tạo deprecated snapshot
4. Cập nhật known-bugs.md sau khi fix xong
```

---

## Template Prompt: Thêm Feature / Block mới

```
## Context
Plugin: Boostify Blocks v1.1.13
Stack: TypeScript/TSX, React, @emotion/react, PHP 7.3+

## Tài liệu quan trọng (đọc trước)
- knowledge-base/ai-context/patterns.md            ← pattern bắt buộc theo
- knowledge-base/ai-context/php-entry-points.md    ← PHP integration
- knowledge-base/projects/boostify-block/architecture.md  ← architecture

## Feature cần thêm
[Mô tả feature]

## Yêu cầu
1. Follow patterns trong knowledge-base/ai-context/patterns.md
2. Đặt tên file đúng convention: WcbXxxPanelGeneral.tsx, WcbXxxPanel_StyleXxx.tsx
3. Thêm vào wcb-register-blocks.php và wcb-blocks-render-callback.php
4. Cập nhật block-catalog.md sau khi tạo xong
```

---

## Template Prompt: Thêm Attribute mới vào block có sẵn

```
## Context
Plugin: Boostify Blocks
Block cần sửa: [block-xxx]

## Files cần đọc
1. src/block-xxx/attributes.ts
2. src/block-xxx/Edit.tsx
3. src/block-xxx/FrontendStyles.tsx
4. src/block-xxx/Save.tsx
5. knowledge-base/ai-context/patterns.md (mục "Luồng data khi thêm attribute mới")

## Attribute cần thêm
- Tên: [myAttribute]
- Type: [string | number | boolean | object]
- Default: [giá trị mặc định]
- Hiển thị ở tab: [General | Styles | Advances]
- Ảnh hưởng đến HTML output (Save.tsx): [Có / Không]

## Lưu ý
- Nếu ảnh hưởng Save.tsx → tạo deprecated snapshot TRƯỚC khi sửa
- Theo đúng luồng: attributes.ts → Panel → Edit.tsx → FrontendStyles.tsx → Save.tsx
```

---

## Quy tắc cho Dev Agent

1. **Đọc knowledge-base trước** — không đọc toàn bộ src/ nếu không cần.
2. **Không refactor** code ngoài phạm vi task.
3. **Không thêm dependency mới** mà không hỏi.
4. **Luôn tạo deprecated** nếu Save.tsx thay đổi.
5. **Cập nhật known-bugs.md** sau khi fix bug.
6. **Test build** sau khi xong: `yarn build` không có error.
