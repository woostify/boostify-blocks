# Code Patterns — Boostify Blocks

## 1. Khai báo Attribute mới

```typescript
// attributes.ts
export interface BlockXxxAttrs extends WcbAttrsCommonFromWp {
  uniqueId: string;
  // Attribute đơn giản
  myText: string;
  // Attribute responsive (Desktop/Tablet/Mobile)
  myPadding: MyDimensionsControlData;
  // Attribute phức tạp dùng control riêng
  styles_border: MyBorderControlData;
}

export const blokcAttrs: AttrsGenericType<BlockXxxAttrs> = {
  uniqueId: { type: "string", default: "" },
  myText: { type: "string", default: "" },
  myPadding: { type: "object", default: MY_DIMENSIONS_CONTROL_DEMO },
  styles_border: { type: "object", default: MY_BORDER_CONTROL_DEMO },
};
```

**Lưu ý:** Luôn dùng `_DEMO` constant làm default value — đã được định nghĩa trong control component tương ứng.

---

## 2. Responsive Attribute Pattern

Attributes có responsive luôn dùng format:
```typescript
{
  Desktop: { top: "1rem", right: "1rem", bottom: "1rem", left: "1rem" },
  Tablet:  { top: "0.5rem", ... },
  Mobile:  { top: "0.5rem", ... },
}
```

Đọc trong FrontendStyles:
```typescript
// FrontendStyles.tsx
const deviceType = useGetDeviceType(); // "Desktop" | "Tablet" | "Mobile"
const paddingStyle = getStyleObjectFromResponsiveAttr(myPadding, deviceType);
```

---

## 3. FrontendStyles Pattern (CSS-in-JS)

```tsx
// FrontendStyles.tsx
import { css, Global } from "@emotion/react";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import { CacheProvider } from "@emotion/react";

interface Props {
  uniqueId: string;
  attributes: BlockXxxAttrs;
}

const BlockXxxFrontendStyles: FC<Props> = ({ uniqueId, attributes }) => {
  const { myPadding, styles_border } = attributes;
  const { cache, ref } = useCreateCacheEmotion();

  const globalCss = css`
    .wcb-block-xxx-${uniqueId} {
      ${getPaddingMarginStyles({ padding: myPadding })}
      ${getBorderStyles(styles_border)}
    }
  `;

  return (
    <CacheProvider value={cache}>
      <div ref={ref} />
      <Global styles={globalCss} />
    </CacheProvider>
  );
};
```

**Quan trọng:** Mọi CSS phải scoped theo `uniqueId` để tránh conflict giữa các block instances.

---

## 4. Edit.tsx Structure

```tsx
// Edit.tsx
const Edit: FC<EditProps<BlockXxxAttrs>> = (props) => {
  const { attributes, setAttributes, clientId, isSelected } = props;
  const { uniqueId, myText, styles_border } = attributes;

  // 1. Tạo uniqueId nếu chưa có
  useEffect(() => {
    if (!uniqueId) {
      setAttributes({ uniqueId: converUniqueId(clientId) });
    }
  }, []);

  // 2. Panel state management
  const { handleTogglePanel, tabGeneralIsPanelOpen, tabStylesIsPanelOpen } =
    useSetBlockPanelInfo(uniqueId);

  // 3. Block props
  const blockProps = useBlockProps({ className: `wcb-block-xxx-${uniqueId}` });

  return (
    <>
      {/* Sidebar panels */}
      <HOCInspectorControls uniqueId={uniqueId} ...>
        {(tab) => {
          if (tab.name === "General") return <WcbXxxPanelGeneral ... />;
          if (tab.name === "Styles") return <WcbXxxPanelStyles ... />;
          if (tab.name === "Advances") return <WcbXxxPanelAdvances ... />;
        }}
      </HOCInspectorControls>

      {/* Frontend styles inject */}
      <BlockXxxFrontendStyles uniqueId={uniqueId} attributes={attributes} />

      {/* Block content */}
      <div {...blockProps}>
        {/* editor UI */}
      </div>
    </>
  );
};
```

---

## 5. Save.tsx Pattern

```tsx
// Save.tsx
const Save: FC<{ attributes: BlockXxxAttrs }> = ({ attributes }) => {
  const { uniqueId, myText } = attributes;
  const blockProps = useBlockProps.save({
    className: `wcb-block-xxx-${uniqueId}`,
  });

  return (
    <div {...blockProps}>
      <RichText.Content value={myText} tagName="p" />
    </div>
  );
};
```

**Quan trọng:** `Save.tsx` phải **stable** — mọi thay đổi HTML output đều cần tạo deprecated snapshot.

---

## 6. PHP Register Block Pattern

```php
// wcb-register-blocks.php
register_block_type(
    BOOSTIFY_BLOCKS_BUILD_PATH . '/block-xxx',
    [
        "render_callback" => "boostify_blocks_block_xxx_render_callback",
        "ancestor" => (($boostify_blocks_enable_disable['boostify-blocks/xxx'] ?? "") !== 'disabled')
            ? null
            : BOOSTIFY_BLOCKS_UNIQUE_NAME,
        "view_script_handles" => []
    ]
);

// wcb-blocks-render-callback.php
function boostify_blocks_block_xxx_render_callback($attributes, $content) {
    boostify_blocks_enqueue_script_block_commoncss_frontend_styles();
    return $content;
}
```

---

## 7. Parent-Child Block Pattern

Child blocks phụ thuộc parent qua `parent` field trong `block.json`:
```json
{
  "name": "boostify-blocks/faq-child",
  "parent": ["boostify-blocks/faq"]
}
```

Child blocks thường không có `render_callback` riêng — chỉ register đơn giản:
```php
register_block_type(BOOSTIFY_BLOCKS_BUILD_PATH . '/block-faq-child', []);
```

---

## 8. Deprecated Block Pattern

```tsx
// deprecated.tsx
import Save__300523 from "./Save__300523";  // snapshot ngày 30/05/2023
import Save__250523 from "./Save__250523";
import blokcAttrs from "./attributes";

const v3 = {
  attributes: {
    ...blokcAttrs,
    // Thêm attrs cũ đã bị xóa nếu cần
    old_attribute: { type: "object", default: OLD_DEMO },
  },
  save: Save__300523,
};

const v2 = { attributes: { ...blokcAttrs }, save: Save__250523 };

export default [v3, v2]; // Mới nhất trước
```

---

## 9. Form AJAX Pattern

```js
// Frontend JS
fetch(boostify_blocks_frontend_ajax_object.ajaxurl, {
  method: 'POST',
  body: new FormData({
    action: 'boostify_blocks_form_action',
    nonce: boostify_blocks_frontend_ajax_object.nonce,
    formData: JSON.stringify(formData),
    mailInfo: JSON.stringify(mailInfo),
  })
});
```

PHP handler: `includes/wcb-ajax-for-block-form.php` → `boostify_blocks_form_action_init()`.
