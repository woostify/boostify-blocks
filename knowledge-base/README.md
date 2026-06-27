# Boostify Blocks — Knowledge Base

**Mục đích:** Tài liệu cô đọng giúp AI agent fix bug, thêm feature mà không cần đọc toàn bộ codebase mỗi lần.

---

## Khi fix bug — đọc theo thứ tự này

```
1. ai-context/codebase-map.md       ← Tìm file liên quan
2. ai-context/known-bugs.md         ← Đã gặp bug này chưa?
3. ai-context/patterns.md           ← Code pattern chuẩn
4. ai-context/php-entry-points.md   ← Nếu bug ở phía PHP
5. projects/boostify-block/block-catalog.md  ← Thông tin block cụ thể
```

---

## Nội dung

| File | Dùng khi |
|------|---------|
| `_meta/README.md` | Overview tổng quan |
| `_meta/glossary.md` | Không hiểu thuật ngữ |
| `_meta/decision-log.md` | Muốn biết lý do kiến trúc |
| `ai-context/codebase-map.md` | Cần biết sửa file nào |
| `ai-context/patterns.md` | Cần viết code mới |
| `ai-context/known-bugs.md` | Gặp bug, tìm solution |
| `ai-context/php-entry-points.md` | Bug ở PHP layer |
| `projects/boostify-block/block-catalog.md` | Tìm thông tin block |
| `projects/boostify-block/architecture.md` | Hiểu data flow |
| `projects/boostify-block/deprecated-strategy.md` | Sửa Save.tsx |
| `service-lines/app-dev/common-bugs.md` | Lỗi Gutenberg phổ biến |
| `ai-agents/dev-agent/prompt.md` | Template prompt cho AI |
