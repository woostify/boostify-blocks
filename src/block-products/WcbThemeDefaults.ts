import { WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO } from "../block-products/WcbProductsPanel_StyleLayout";
import { MY_BORDER_CONTROL_DEMO } from "../components/controls/MyBorderControl/types";
import { getThemeDefaults } from "../utils/themeDefaults";
import { WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO } from "./WcbProducstPanelSortingAndFiltering";
import { WCB_PRODUCTS_PANEL_COTENT_DEMO } from "./WcbProductsPanelContent";
import { WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO } from "./WcbProductsPanelFeaturedImage";
import { WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO } from "./WcbProductsPanel_StyleFeaturedImage";
import { WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO } from "./WcbProductsPanel_StyleSaleBadge";
import { WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO } from "./WcbProductsPanel_StyleTitle";
import { WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO } from "./WcbProductsPanel_StylePrice";
import { WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO } from "./WcbProductsPanel_StyleAddToCartBtn";
import { WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO } from "./WcbProductsPanelButton";
import { WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK_DEMO } from "./WcbProductsPanel_StyleOutOfStock";
import { WCB_PRODUCTS_PANEL_STYLE_OUT_OF_STOCK } from "./WcbProductsPanel_StyleOutOfStock";
import { WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE } from "./WcbProductsPanel_StyleSaleBadge";
import { WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO } from "./WcbProductsPanel_StyleWishListButton";
import { WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO } from "./WcbProductsPanel_StyleQuickViewButton";
import { WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO } from "./WcbProductsPanel_StyleCountdownUrgency";

/**
 * Builds style_layout with theme numberOfColumn and textAlignment.
 * Customizer attributes use the theme value; all others use demo defaults.
 */
export function buildStyleLayoutDefault(_attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO>) {
    const theme = getThemeDefaults();
    return {
        ...WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
        numberOfColumn: {
            Desktop:
                theme.product_per_row?.desktop ??
                WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.numberOfColumn.Desktop,
            Tablet:
                theme.product_per_row?.tablet ??
                WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.numberOfColumn.Tablet,
            Mobile:
                theme.product_per_row?.mobile ??
                WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.numberOfColumn.Mobile,
        },
        textAlignment:
            theme.shop_archive_product_content?.align ??
            WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.textAlignment,
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
    const toBool = (v: any, def: boolean): boolean =>
        v === undefined ? def : v === true || v === '1' || v === 1;
    return {
        ...WCB_PRODUCTS_PANEL_COTENT_DEMO,
        isShowTitle: toBool(content?.title_flag, WCB_PRODUCTS_PANEL_COTENT_DEMO.isShowTitle),
        isShowCategory: toBool(content?.category_flag, WCB_PRODUCTS_PANEL_COTENT_DEMO.isShowCategory),
        isShowRating: toBool(content?.rating_flag, WCB_PRODUCTS_PANEL_COTENT_DEMO.isShowRating),
        isShowPrice: toBool(content?.price_flag, WCB_PRODUCTS_PANEL_COTENT_DEMO.isShowPrice),
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
        rawPosition === "left" ? "top-left" : "top-right";

    return {
        ...WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO,
        backgroundColor:
            saleTag?.bg_color ??
            WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO.backgroundColor,
        textColor:
            saleTag?.text_color ??
            WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO.textColor,
        position: convertedPosition,
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
        rawPosition === "left"
            ? "top-left"
            : rawPosition === "right"
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
export function buildStyleAddToCartBtnDefault(_attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO>) {
    const theme = getThemeDefaults();
    const addToCartBtn = theme.shop_archive_add_to_cart_btn;
    return {
        ...WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO,
        colorAndBackgroundColor: {
            ...WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.colorAndBackgroundColor,
            Normal: {
                color:
                    addToCartBtn?.text_color ??
                    WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.colorAndBackgroundColor?.Normal?.color,
                backgroundColor:
                    addToCartBtn?.bg_color ??
                    WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.colorAndBackgroundColor?.Normal?.backgroundColor,
            },
            Hover: {
                color:
                    addToCartBtn?.hover_text_color ??
                    WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.colorAndBackgroundColor?.Hover?.color,
                backgroundColor:
                    addToCartBtn?.hover_bg_color ??
                    WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.colorAndBackgroundColor?.Hover?.backgroundColor,
            },
        },
        border: {
            ...WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.border,
            radius: {
                Desktop:
                    (addToCartBtn?.border_radius != null ? `${addToCartBtn.border_radius}px` : undefined) ??
                    WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.border.radius.Desktop,
                Tablet:
                    (addToCartBtn?.border_radius != null ? `${addToCartBtn.border_radius}px` : undefined) ??
                    WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.border.radius.Tablet,
                Mobile:
                    (addToCartBtn?.border_radius != null ? `${addToCartBtn.border_radius}px` : undefined) ??
                    WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO.border.radius.Mobile,
            },
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
    return {
        ...WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO,
        isShowButton:
            addToCartBtn?.position === 'none' ? false :
            WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO.isShowButton,
        position:
            addToCartBtn?.position === 'bottom-visible' ? 'bottom visible' :
            addToCartBtn?.position === 'image' ? 'inside image' :
            addToCartBtn?.position === 'icon' ? 'icon' :
            addToCartBtn?.position === 'bottom' ? 'bottom' :
            addToCartBtn?.position ??
            WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO.position,
        isShowQuantity:
            addToCartBtn?.position === 'none' ? false :
            WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO.isShowQuantity,
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
            quickViewBtn?.show_icon ??
            WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO.show_icon,
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
            quickViewBtn?.border_radius ??
            WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO.border_radius,
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
