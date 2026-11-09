import { WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO, WCB_PRODUCTS_PANEL_STYLE_LAYOUT } from "../block-products/WcbProductsPanel_StyleLayout";
import { MY_BORDER_CONTROL_DEMO } from "../components/controls/MyBorderControl/types";
import { getThemeDefaults } from "../utils/themeDefaults";
import { WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO } from "./WcbProducstPanelSortingAndFiltering";
import { WCB_PRODUCTS_PANEL_COTENT_DEMO } from "./WcbProductsPanelContent";
import { WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO } from "./WcbProductsPanelFeaturedImage";
import { WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO } from "./WcbProductsPanel_StyleFeaturedImage";
import { WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO, WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE } from "./WcbProductsPanel_StyleSaleBadge";
import { WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO } from "./WcbProductsPanel_StyleTitle";
import { WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO } from "./WcbProductsPanel_StylePrice";
import { WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO } from "./WcbProductsPanel_StyleAddToCartBtn";
import { WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO, WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN } from "./WcbProductsPanelButton";
import { WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO, WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK } from "./WcbProductsPanel_StyleOutOfStock";
import { WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO } from "./WcbProductsPanel_StyleWishListButton";
import { WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO } from "./WcbProductsPanel_StyleQuickViewButton";
import { WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO } from "./WcbProductsPanel_StyleCountdownUrgency";
import { WcbAttrs } from "./attributes";

const toBool = (v: unknown, def: boolean): boolean =>
    v === undefined ? def : v === true || v === '1' || v === 1;

/**
 * Builds style_layout with theme numberOfColumn and textAlignment.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildStyleLayoutDefault(_attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO>) {
    const theme = getThemeDefaults();
    const numberOfColumn = {
        Desktop:
            theme.product_per_row?.desktop ??
            WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.numberOfColumn.Desktop,
        Tablet:
            theme.product_per_row?.tablet ??
            WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.numberOfColumn.Tablet,
        Mobile:
            theme.product_per_row?.mobile ??
            WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.numberOfColumn.Mobile,
    };
    const equalFlag = theme.shop_archive_product_content?.equal_flag;
    const isContentEqual = toBool(equalFlag, false);

    return {
        ...WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
        numberOfColumn,
        numberOfColumnFromCustomizer: { ...numberOfColumn },
        isNumberOfColumnEdited: false,
        textAlignment:
            theme.shop_archive_product_content?.align ??
            WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.textAlignment,
        contentEqualHeight: isContentEqual,
        contentMinHeight: theme.shop_archive_product_content?.min_height ?? 160,
    };
}

/**
 * Builds style_border with theme border styles.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildStyleBorderDefault(_attr?: Partial<typeof MY_BORDER_CONTROL_DEMO>) {
    const theme = getThemeDefaults();
    const style = theme.shop_archive_border?.style;
    const color = theme.shop_archive_border?.color;
    const widthPx = theme.shop_archive_border?.width != null ?
        `${theme.shop_archive_border.width}px` : undefined;
    const base = MY_BORDER_CONTROL_DEMO.mainSettings as any;
    const resolved = style && style !== "none"
        ? {
            color: color ?? base.color,
            style: style ?? base.style,
            width: widthPx ?? base.width }
        : base;
    return { ...MY_BORDER_CONTROL_DEMO, mainSettings: resolved };
}

/**
 * Builds general_sortingAndFiltering with theme numberOfItems.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildSortingAndFilteringDefault(
    _attr?: Partial<typeof WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO>
) {
    const theme = getThemeDefaults();
    return {
        ...WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO,
        numberOfItems:
            theme.product_per_page ||
            WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO.numberOfItems,
    };
}

/**
 * Builds general_content with theme content flags.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildGeneralContractDefault(_attr?: Partial<typeof WCB_PRODUCTS_PANEL_COTENT_DEMO>) {
    const theme = getThemeDefaults();
    const content = theme.shop_archive_product_content;
    const saleTag = theme.shop_archive_sale_tag;
    const outOfStock = theme.shop_archive_out_of_stock;

    const isShowSale = saleTag?.position !== 'none';
    const isShowOut = outOfStock?.position !== 'none';
    const salePercent = saleTag?.sale_percent !== undefined ? Boolean(saleTag.sale_percent) : false;

    return {
        ...WCB_PRODUCTS_PANEL_COTENT_DEMO,
        isShowTitle: toBool(content?.title_flag, WCB_PRODUCTS_PANEL_COTENT_DEMO.isShowTitle),
        isShowCategory: toBool(content?.category_flag, false),
        isShowRating: toBool(content?.rating_flag, WCB_PRODUCTS_PANEL_COTENT_DEMO.isShowRating),
        isShowPrice: toBool(content?.price_flag, WCB_PRODUCTS_PANEL_COTENT_DEMO.isShowPrice),
        isShowSaleBadge: isShowSale,
        showSaleBadgeDiscoutPercent: salePercent,
        isShowOutOfStock: isShowOut,
    };
}

/**
 * Builds general_featuredImage with theme hover type.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildGeneralFeaturedImageDefault(_attr?: Partial<typeof WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO>) {
    const theme = getThemeDefaults();
    const content = theme.shop_archive_product_image;
    return {
        ...WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO,
        hoverType:
            content?.hover ??
            WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO.hoverType,
    };
}

/**
 * Builds style_featuredImage with theme border styles.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildStyleFeaturedImageDefault(_attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO>) {
    const theme = getThemeDefaults();
    const style = theme.shop_archive_product_image?.style;
    const color = theme.shop_archive_product_image?.color;
    const widthPx = theme.shop_archive_product_image?.width != null ?
        `${theme.shop_archive_product_image.width}px` : undefined;

    const base = WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO.border.mainSettings as any;
    const resolved = style && style !== "none"
        ? {
            color: color ?? base.color,
            style: style ?? base.style,
            width: widthPx ?? base.width }
        : base;

    return {
        ...WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO,
        border: { ...WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO.border, mainSettings: resolved },
    };
}

/**
 * Builds style_saleBadge with theme styles.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildStyleSaleBadgeDefault(_attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO>) {
    const theme = getThemeDefaults();
    const saleTag = theme.shop_archive_sale_tag;

    const rawPosition =
        saleTag?.position ??
        WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO.position;

    const convertedPosition: WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE["position"] =
        rawPosition === "left" || rawPosition === "top-left"
            ? "top-left"
            : rawPosition === "none"
            ? "none"
            : "top-right";

    return {
        ...WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO,
        backgroundColor:
            saleTag?.bg_color ??
            WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO.backgroundColor,
        textColor:
            saleTag?.text_color ??
            WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO.textColor,
        position: convertedPosition,
        shape: saleTag?.shape ?? WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO.shape,
        borderRadius: saleTag?.border_radius ?? 0,
        isSquare: saleTag?.is_square ?? false,
        size: saleTag?.size ?? 40,
    };
}

/**
 * Builds style_outOfStock with theme styles.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildStyleOutOfStockDefault(_attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO>) {
    const theme = getThemeDefaults();
    const outOfStock = theme.shop_archive_out_of_stock;

    const rawPosition =
        outOfStock?.position ??
        WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO.position;

    const convertedPosition: WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK["position"] =
        rawPosition === "left" || rawPosition === "top-left"
            ? "top-left"
            : rawPosition === "right" || rawPosition === "top-right"
            ? "top-right"
            : "none";

    return {
        ...WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO,
        backgroundColor:
            outOfStock?.bg_color ??
            WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO.backgroundColor,
        textColor:
            outOfStock?.text_color ??
            WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO.textColor,
        position: convertedPosition,
        shape: outOfStock?.shape ?? WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO.shape,
        borderRadius: outOfStock?.border_radius ?? 0,
        isSquare: outOfStock?.is_square ?? false,
        size: outOfStock?.size ?? 40,
    };
}

/**
 * Builds style_title with theme title styles.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildStyleTitleDefault(_attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO>) {
    const theme = getThemeDefaults();
    const general = theme.shop_archive_general_design;
    return {
        ...WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO,
        textColor:
            general?.title_color ??
            WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO.textColor,
        typography: {
            ...WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO.typography,
            fontSizes: {
                Desktop:
                    (general?.title_font_size != null ? `${general.title_font_size.desktop}px` : undefined) ??
                    WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO.typography.fontSizes.Desktop,
                Tablet:
                    (general?.title_font_size != null ? `${general.title_font_size.tablet}px` : undefined) ??
                    WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO.typography.fontSizes.Tablet,
                Mobile:
                    (general?.title_font_size != null ? `${general.title_font_size.mobile}px` : undefined) ??
                    WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO.typography.fontSizes.Mobile,
            },
        },
    };
}

/**
 * Builds style_price with theme price styles.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildStylePriceDefault(_attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO>) {
    const theme = getThemeDefaults();
    const general = theme.shop_archive_general_design;
    return {
        ...WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO,
        textColor:
            general?.price_color ??
            WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO.textColor,
        typography: {
            ...WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO.typography,
            fontSizes: {
                Desktop:
                    (general?.price_font_size != null ? `${general.price_font_size.desktop}px` : undefined) ??
                    WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO.typography.fontSizes.Desktop,
                Tablet:
                    (general?.price_font_size != null ? `${general.price_font_size.tablet}px` : undefined) ??
                    WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO.typography.fontSizes.Tablet,
                Mobile:
                    (general?.price_font_size != null ? `${general.price_font_size.mobile}px` : undefined) ??
                    WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO.typography.fontSizes.Mobile,
            },
        },
    };
}

/**
 * Builds style_addToCartBtn with theme styles.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildStyleAddToCartBtnDefault(_attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO>, currentPos?: string) {
    const theme = getThemeDefaults();
    const addToCartBtn = theme.shop_archive_add_to_cart_btn;
    const pos = currentPos || addToCartBtn?.position || 'bottom';
    const normalizedPos = pos === 'bottom-visible' ? 'bottom visible' : pos === 'image' ? 'inside image' : pos;
    const posStyle = addToCartBtn?.by_position?.[normalizedPos] || addToCartBtn?.by_position?.[pos];

    const isIconPos = normalizedPos === 'icon';
    const textColor = posStyle?.text_color ?? (isIconPos ? '#2b2b2b' : addToCartBtn?.text_color ?? WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.colorAndBackgroundColor?.Normal?.color);
    const bgColor = posStyle?.bg_color ?? (isIconPos ? '#ffffff' : addToCartBtn?.bg_color ?? WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.colorAndBackgroundColor?.Normal?.backgroundColor);
    const hoverTextColor = posStyle?.hover_text_color ?? (isIconPos ? '#ffffff' : addToCartBtn?.hover_text_color ?? WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.colorAndBackgroundColor?.Hover?.color);
    const hoverBgColor = posStyle?.hover_bg_color ?? (isIconPos ? '#e33333' : addToCartBtn?.hover_bg_color ?? WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.colorAndBackgroundColor?.Hover?.backgroundColor);
    const radiusVal = posStyle?.border_radius !== undefined ? posStyle.border_radius : (isIconPos ? 0 : addToCartBtn?.border_radius);

    return {
        ...WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO,
        colorAndBackgroundColor: {
            ...WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.colorAndBackgroundColor,
            Normal: {
                color: textColor,
                backgroundColor: bgColor,
            },
            Hover: {
                color: hoverTextColor,
                backgroundColor: hoverBgColor,
            },
        },
        border: {
            ...WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.border,
            radius: (() => {
                const radiusPx = radiusVal != null && radiusVal > 0 ? `${radiusVal}px` : "0px";
                const uniformRadius = { topLeft: radiusPx, topRight: radiusPx, bottomRight: radiusPx, bottomLeft: radiusPx };
                return { Desktop: uniformRadius, Tablet: uniformRadius, Mobile: uniformRadius };
            })(),
        },
    };
}

/**
 * Builds general_addToCartBtn with theme styles.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildGeneralAddToCartBtnDefault(_attr?: Partial<typeof WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO>) {
    const theme = getThemeDefaults();
    const addToCartBtn = theme.shop_archive_add_to_cart_btn;
    const isCatalog = Boolean(theme.catalog_mode);

    const isShowQty = isCatalog
        ? false
        : toBool(theme.shop_archive_product_content?.quantity_flag, false);

    const isShowBtn = isCatalog
        ? false
        : (addToCartBtn?.position === 'none' ? false : true);

    return {
        ...WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO,
        isShowButton: isShowBtn,
        position:
            addToCartBtn?.position === 'bottom-visible' ? 'bottom visible' :
            addToCartBtn?.position === 'image' ? 'inside image' :
            addToCartBtn?.position === 'icon' ? 'icon' :
            addToCartBtn?.position === 'bottom' ? 'bottom' :
            addToCartBtn?.position ??
            WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO.position,
        isShowQuantity: isShowQty,
        isShowIcon:
            addToCartBtn?.show_icon !== undefined
                ? addToCartBtn.show_icon
                : WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO.isShowIcon,
    };
}

/**
 * Builds style_wishlistButton with theme styles.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildStyleWishlistButtonDefault(_attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO>) {
    const theme = getThemeDefaults();
    const wishlistBtn = theme.shop_archive_wishlist_btn;
    return {
        ...WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO,
        position:
            wishlistBtn?.position ??
            WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO.position,
        style:
            wishlistBtn?.style ??
            WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO.style,
        wishlist_plugin_active:
            wishlistBtn?.wishlist_plugin_active ??
            WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO.wishlist_plugin_active,
        color:
            wishlistBtn?.color ??
            WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO.color,
        backgroundColor:
            wishlistBtn?.bg_color ??
            WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO.backgroundColor,
        hoverColor:
            wishlistBtn?.hover_color ??
            WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO.hoverColor,
        hoverBackgroundColor:
            wishlistBtn?.hover_bg_color ??
            WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO.hoverBackgroundColor,
    };
}

/**
 * Builds style_quickViewButton with theme styles.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildStyleQuickViewButtonDefault(_attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO>) {
    const theme = getThemeDefaults();
    const quickViewBtn = theme.shop_quick_view_btn;
    return {
        ...WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO,
        enabled:
            quickViewBtn?.enabled ??
            WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO.enabled,
        position:
            quickViewBtn?.position ??
            WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO.position,
        show_icon:
            quickViewBtn?.show_icon !== undefined
                ? (Boolean(quickViewBtn.show_icon) && String(quickViewBtn.show_icon) !== "0" && String(quickViewBtn.show_icon) !== "false")
                : (_attr?.show_icon ?? WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO.show_icon),
        bg_color:
            quickViewBtn?.bg_color ??
            WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO.bg_color,
        text_color:
            quickViewBtn?.text_color ??
            WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO.text_color,
        hover_bg_color:
            quickViewBtn?.hover_bg_color ??
            WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO.hover_bg_color,
        hover_text_color:
            quickViewBtn?.hover_text_color ??
            WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO.hover_text_color,
        border_radius:
            quickViewBtn?.border_radius !== undefined
                ? (typeof quickViewBtn.border_radius === 'string' ? parseInt(quickViewBtn.border_radius, 10) || 0 : Number(quickViewBtn.border_radius))
                : (_attr?.border_radius ?? WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO.border_radius),
        woostify_pro_active:
            quickViewBtn?.woostify_pro_active ??
            WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO.woostify_pro_active,
    };
}

/**
 * Builds style_countdownUrgency with theme styles.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildStyleCountdownUrgencyDefault(_attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO>) {
    const theme = getThemeDefaults();
    const cu = theme.countdown_urgency;
    return {
        ...WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO,
        countdownUrgencyActive:
            cu?.active ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.countdownUrgencyActive,
        style:
            cu?.style ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.style,
        applyFor:
            cu?.apply_for ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.applyFor,
        categoriesSelected:
            cu?.categories_selected ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.categoriesSelected,
        productsSelected:
            cu?.products_selected ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.productsSelected,
        categoriesExclude:
            cu?.categories_exclude ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.categoriesExclude,
        productsExclude:
            cu?.products_exclude ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.productsExclude,
        timeDuration:
            cu?.time_duration ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.timeDuration,
        timeType:
            cu?.time_type ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.timeType,
        message:
            cu?.message ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.message,
        daysLabel:
            cu?.days_label ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.daysLabel,
        hoursLabel:
            cu?.hours_label ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.hoursLabel,
        minutesLabel:
            cu?.minutes_label ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.minutesLabel,
        secondsLabel:
            cu?.seconds_label ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.secondsLabel,
        displayOnThumbnail:
            cu?.display_on_thumbnail ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.displayOnThumbnail,
        hideAfterTimeUp:
            cu?.hide_after_time_up ??
            WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO.hideAfterTimeUp,
    };
}

/**
 * Applies Woostify theme and Pro options to block attributes based on priority rules:
 * - Priority 1 (Default / isCustomizerGeneralLayout === false): Theme Customizer & Pro settings strictly apply.
 * - Priority 2 (Block override / isCustomizerGeneralLayout === true): Block settings take priority; unconfigured fall back to theme.
 * - Column count override: If isNumberOfColumnEdited === true, user-selected column count takes priority regardless.
 */
export function applyThemeDefaultsToBlockAttributes(attrs: WcbAttrs): WcbAttrs {
    const isOverride = Boolean(attrs.general_layout?.isCustomizerGeneralLayout);
    const theme = getThemeDefaults();

    // 1. Style Layout
    const baseLayout = attrs.style_layout || buildStyleLayoutDefault();
    const isColEdited = Boolean(baseLayout.isNumberOfColumnEdited);
    const themeCol = theme.product_per_row;
    const effectiveNumCol = isColEdited
        ? {
              Desktop: baseLayout.numberOfColumn.Desktop ?? themeCol?.desktop ?? 3,
              Tablet: baseLayout.numberOfColumn.Tablet ?? themeCol?.tablet ?? 2,
              Mobile: baseLayout.numberOfColumn.Mobile ?? themeCol?.mobile ?? 1,
          }
        : {
              Desktop: themeCol?.desktop ?? baseLayout.numberOfColumn.Desktop ?? 3,
              Tablet: themeCol?.tablet ?? baseLayout.numberOfColumn.Tablet ?? 2,
              Mobile: themeCol?.mobile ?? baseLayout.numberOfColumn.Mobile ?? 1,
          };

    const equalFlag = theme.shop_archive_product_content?.equal_flag;
    const themeEqual = toBool(equalFlag, false);
    const themeMinHeight = theme.shop_archive_product_content?.min_height ?? 160;

    const effectiveLayout: WCB_PRODUCTS_PANEL_STYLE_LAYOUT = {
        ...baseLayout,
        numberOfColumn: effectiveNumCol,
        textAlignment: isOverride
            ? (baseLayout.textAlignment ?? theme.shop_archive_product_content?.align ?? 'center')
            : (theme.shop_archive_product_content?.align ?? baseLayout.textAlignment ?? 'center'),
        contentEqualHeight: isOverride
            ? (baseLayout.contentEqualHeight !== undefined ? baseLayout.contentEqualHeight : themeEqual)
            : themeEqual,
        contentMinHeight: isOverride
            ? (baseLayout.contentMinHeight ?? themeMinHeight)
            : themeMinHeight,
    };

    // 2. Sorting & Filtering
    const baseSort = attrs.general_sortingAndFiltering || buildSortingAndFilteringDefault();
    const effectiveSort = {
        ...baseSort,
        numberOfItems: isOverride
            ? (baseSort.numberOfItems || theme.product_per_page || 12)
            : (theme.product_per_page || baseSort.numberOfItems || 12),
    };

    // 3. Content flags
    const baseContent = attrs.general_content || buildGeneralContractDefault();
    const themeContent = theme.shop_archive_product_content;
    const themeSaleTag = theme.shop_archive_sale_tag;
    const themeOut = theme.shop_archive_out_of_stock;

    const effectiveContent = isOverride
        ? {
              ...baseContent,
              isShowTitle: baseContent.isShowTitle !== undefined ? baseContent.isShowTitle : toBool(themeContent?.title_flag, true),
              isShowCategory: baseContent.isShowCategory !== undefined ? baseContent.isShowCategory : toBool(themeContent?.category_flag, false),
              isShowRating: baseContent.isShowRating !== undefined ? baseContent.isShowRating : toBool(themeContent?.rating_flag, true),
              isShowPrice: baseContent.isShowPrice !== undefined ? baseContent.isShowPrice : toBool(themeContent?.price_flag, true),
              isShowSaleBadge: baseContent.isShowSaleBadge !== undefined ? baseContent.isShowSaleBadge : (themeSaleTag?.position !== 'none'),
              showSaleBadgeDiscoutPercent: baseContent.showSaleBadgeDiscoutPercent !== undefined ? baseContent.showSaleBadgeDiscoutPercent : Boolean(themeSaleTag?.sale_percent),
              isShowOutOfStock: baseContent.isShowOutOfStock !== undefined ? baseContent.isShowOutOfStock : (themeOut?.position !== 'none'),
          }
        : {
              ...baseContent,
              isShowTitle: toBool(themeContent?.title_flag, true),
              isShowCategory: toBool(themeContent?.category_flag, false),
              isShowRating: toBool(themeContent?.rating_flag, true),
              isShowPrice: toBool(themeContent?.price_flag, true),
              isShowSaleBadge: themeSaleTag?.position !== 'none',
              showSaleBadgeDiscoutPercent: Boolean(themeSaleTag?.sale_percent),
              isShowOutOfStock: themeOut?.position !== 'none',
          };

    // 4. Featured Image
    const baseFeatured = attrs.general_featuredImage || buildGeneralFeaturedImageDefault();
    const effectiveFeatured = {
        ...baseFeatured,
        hoverType: isOverride
            ? (baseFeatured.hoverType || theme.shop_archive_product_image?.hover || 'swap')
            : (theme.shop_archive_product_image?.hover || baseFeatured.hoverType || 'swap'),
    };

    // 5. Add to Cart Button
    const baseAddToCart = attrs.general_addToCartBtn || buildGeneralAddToCartBtnDefault();
    const themeAddToCart = theme.shop_archive_add_to_cart_btn;
    const isCatalog = Boolean(theme.catalog_mode);

    let mappedThemePos: WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN['position'] = 'bottom';
    const rawPos = themeAddToCart?.position;
    if (rawPos === 'bottom-visible') mappedThemePos = 'bottom visible';
    else if (rawPos === 'image') mappedThemePos = 'inside image';
    else if (rawPos === 'icon') mappedThemePos = 'icon';
    else if (rawPos === 'none') mappedThemePos = 'none';
    else if (rawPos === 'bottom') mappedThemePos = 'bottom';

    const effectiveAddToCartBtn: WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN = isOverride
        ? {
              ...baseAddToCart,
              isShowButton: isCatalog ? false : (baseAddToCart.isShowButton !== undefined ? baseAddToCart.isShowButton : (themeAddToCart?.position !== 'none')),
              position: (baseAddToCart.position as WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN['position']) || mappedThemePos,
              isShowQuantity: isCatalog ? false : (baseAddToCart.isShowQuantity !== undefined ? baseAddToCart.isShowQuantity : toBool(themeContent?.quantity_flag, false)),
              isShowIcon: baseAddToCart.isShowIcon !== undefined ? baseAddToCart.isShowIcon : (themeAddToCart?.show_icon ?? true),
          }
        : {
              ...baseAddToCart,
              isShowButton: isCatalog ? false : (themeAddToCart?.position !== 'none'),
              position: isCatalog ? 'none' : mappedThemePos,
              isShowQuantity: isCatalog ? false : toBool(themeContent?.quantity_flag, false),
              isShowIcon: themeAddToCart?.show_icon ?? true,
          };

    // 6. Style Add to Cart Button
    const baseStyleAddToCart = attrs.style_addToCardBtn || buildStyleAddToCartBtnDefault(undefined, effectiveAddToCartBtn.position);
    const effectiveStyleAddToCart = isOverride
        ? baseStyleAddToCart
        : buildStyleAddToCartBtnDefault(undefined, effectiveAddToCartBtn.position);

    // 7. Style Sale Badge & Out of Stock
    const effectiveSaleBadge = isOverride
        ? (attrs.style_saleBadge || buildStyleSaleBadgeDefault())
        : buildStyleSaleBadgeDefault();

    const effectiveOutOfStock = isOverride
        ? (attrs.style_outOfStock || buildStyleOutOfStockDefault())
        : buildStyleOutOfStockDefault();

    // 8. Style Title & Price
    const effectiveTitle = isOverride
        ? (attrs.style_title || buildStyleTitleDefault())
        : buildStyleTitleDefault();

    const effectivePrice = isOverride
        ? (attrs.style_price || buildStylePriceDefault())
        : buildStylePriceDefault();

    // 9. Style Border & Featured Image Border
    const effectiveBorder = isOverride
        ? (attrs.style_border || buildStyleBorderDefault())
        : buildStyleBorderDefault();

    const effectiveFeaturedImageStyle = isOverride
        ? (attrs.style_featuredImage || buildStyleFeaturedImageDefault())
        : buildStyleFeaturedImageDefault();

    // 10. Wishlist, Quick View, Countdown Urgency
    const effectiveWishlist = buildStyleWishlistButtonDefault(attrs.style_wishlistBtn);
    const effectiveQuickView = buildStyleQuickViewButtonDefault(attrs.style_quickViewBtn);
    const effectiveCountdown = buildStyleCountdownUrgencyDefault(attrs.style_countdownUrgency);

    return {
        ...attrs,
        general_layout: attrs.general_layout,
        style_layout: effectiveLayout,
        general_sortingAndFiltering: effectiveSort,
        general_content: effectiveContent,
        general_featuredImage: effectiveFeatured,
        general_addToCartBtn: effectiveAddToCartBtn,
        style_addToCardBtn: effectiveStyleAddToCart,
        style_saleBadge: effectiveSaleBadge,
        style_outOfStock: effectiveOutOfStock,
        style_title: effectiveTitle,
        style_price: effectivePrice,
        style_border: effectiveBorder,
        style_featuredImage: effectiveFeaturedImageStyle,
        style_wishlistBtn: effectiveWishlist,
        style_quickViewBtn: effectiveQuickView,
        style_countdownUrgency: effectiveCountdown,
    };
}
