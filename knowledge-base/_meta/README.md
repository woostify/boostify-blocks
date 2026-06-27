# Boostify Blocks — Knowledge Base

**Plugin:** Boostify Blocks v1.1.13  
**Mục đích:** Tài liệu cô đọng để AI agent fix bug, thêm tính năng, review code — **không cần đọc toàn bộ repo mỗi lần**.

---

## Cách sử dụng (cho AI agent)

Khi nhận task, load theo thứ tự:

1. `ai-context/codebase-map.md` — tìm file liên quan đến block cần sửa
2. `ai-context/patterns.md` — đọc pattern trước khi viết code
3. `ai-context/known-bugs.md` — kiểm tra bug tương tự đã gặp chưa
4. `projects/boostify-block/block-catalog.md` — tra thông tin block cụ thể

Chỉ đọc thêm file source khi cần thiết.

---

## Cấu trúc

```
knowledge-base/
├── _meta/               # Tài liệu tổng quan (file này)
├── ai-context/          # ← QUAN TRỌNG NHẤT, load trước
├── projects/
│   └── boostify-block/  # Tài liệu project chi tiết
├── service-lines/
│   └── app-dev/         # Common bugs, best practices
└── ai-agents/
    └── dev-agent/       # Prompt template cho dev task
```

---

## Stack

| Layer | Technology |
|-------|-----------|
| Build | `@wordpress/scripts` (webpack custom config) |
| Frontend JS | TypeScript, React, `@emotion/react` (CSS-in-JS) |
| Styling | Tailwind CSS (utility classes), SCSS (editor) |
| PHP | PHP 7.3+, WordPress 5.8+ |
| WooCommerce | Optional integration (`defined('WC_PLUGIN_FILE')`) |
| Sliders | Slick.js, Tiny Slider |

---

## Thư mục gốc plugin

```
boostify-blocks/
├── boostify-blocks.php     # Entry point, constants, require includes
├── src/                    # Source code (TypeScript/TSX)
│   ├── block-*/            # Mỗi block 1 thư mục
│   ├── components/         # Shared React components & controls
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── data/               # Redux store (WCB_STORE_PANELS)
│   └── plugins/            # Gutenberg plugins (toolbar, etc.)
├── build/                  # Output webpack (không sửa tay)
├── includes/               # PHP backend logic
└── public/                 # Static assets (CSS, JS libraries)
```
