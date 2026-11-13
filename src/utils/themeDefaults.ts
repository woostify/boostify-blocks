import { TextAlignment} from "../components/controls/MyTextAlignControl/MyTextAlignControl";

export type ThemeDefaults = {
    catalog_mode?: boolean;
    product_per_row?: { desktop?: number; tablet?: number; mobile?: number };
    product_per_page?: number;
    shop_archive_border?: { style?: string; width?: number; color?: string };
    shop_archive_product_content?: {
        title_flag?: boolean;
        category_flag?: string | boolean | number;
        rating_flag?: string | boolean | number;
        price_flag?: string | boolean | number;
        quantity_flag?: string | boolean | number;
        equal_flag?: string | boolean | number;
        align?: TextAlignment;
        min_height?: number;
    };
    shop_archive_product_image?: {
        style?: string;
        width?: number;
        color?: string;
        hover?: "swap" | "zoom" | "none";
        equal_height_flag?: boolean;
        image_height?: number;
    };
    shop_archive_sale_tag?: {
        bg_color?: string;
        text_color?: string;
        position?: string;
        shape?: string;
        sale_percent?: boolean;
        text?: string;
        border_radius?: number;
        is_square?: boolean;
        size?: number;
    };
    shop_archive_out_of_stock?: {
        bg_color?: string;
        text_color?: string;
        position?: string;
        shape?: string;
        text?: string;
        border_radius?: number;
        is_square?: boolean;
        size?: number;
    };
    shop_archive_general_design?: {
        title_color?: string;
        title_font_size?: {
            desktop?: number;
            tablet?: number;
            mobile?: number;
        };
        price_color?: string;
        price_font_size?: {
            desktop?: number;
            tablet?: number;
            mobile?: number;
        };
    };
    shop_archive_add_to_cart_btn?: {
        text_color?: string;
        bg_color?: string;
        hover_text_color?: string;
        hover_bg_color?: string;
        border_radius?: number;
        position?: string;
        show_icon?: boolean;
        by_position?: Record<
            string,
            {
                text_color?: string;
                bg_color?: string;
                hover_text_color?: string;
                hover_bg_color?: string;
                border_radius?: number;
            }
        >;
    };
    shop_archive_wishlist_btn?: {
        position?: 'top-right' | 'bottom-right' | 'none';
        style?:  'yith' | 'ti';
        wishlist_plugin_active?: boolean;
        color?: string;
        bg_color?: string;
        hover_color?: string;
        hover_bg_color?: string;
    };
    shop_quick_view_btn?: {
        enabled?: boolean;
        position?: 'bottom-image' | 'top-right' | 'center-image' | 'none';
        show_icon?: boolean;
        bg_color?: string;
        text_color?: string;
        hover_bg_color?: string;
        hover_text_color?: string;
        border_radius?: number | string;
        woostify_pro_active?: boolean;
    };
    countdown_urgency?: {
        active?: boolean;
        style?: 'default' | 'style-1';
        apply_for?: 'all' | 'categories' | 'products';
        categories_selected?: string | false;
        products_selected?: string | false;
        categories_exclude?: string | false;
        products_exclude?: string | false;
        time_duration?: string;
        time_type?: 'days' | 'hours' | 'minutes';
        message?: string;
        days_label?: string;
        hours_label?: string;
        minutes_label?: string;
        seconds_label?: string;
        display_on_thumbnail?: '0' | '1';
        hide_after_time_up?: '0' | '1';
    };
};
  
export function getThemeDefaults(): ThemeDefaults {
    try {
        // @ts-ignore
        const win = typeof window !== "undefined" ? (window as any) : null;
        if (!win) return {};
        if (win.BOOSTIFY_BLOCKS_THEME_DEFAULTS) return win.BOOSTIFY_BLOCKS_THEME_DEFAULTS;
        if (win.parent && win.parent.BOOSTIFY_BLOCKS_THEME_DEFAULTS) return win.parent.BOOSTIFY_BLOCKS_THEME_DEFAULTS;
        if (win.top && win.top.BOOSTIFY_BLOCKS_THEME_DEFAULTS) return win.top.BOOSTIFY_BLOCKS_THEME_DEFAULTS;
    } catch (e) {
        // Cross-origin iframe fallback
    }
    return {};
}
