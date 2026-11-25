import { __ } from "@wordpress/i18n";
import React, { FC } from "react";


export interface WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON {
	enabled?: boolean;
	position: 'bottom-image' | 'top-right' | 'center-image' | 'none';
	show_icon: boolean;
	bg_color: string;
	text_color: string;
	hover_bg_color: string;
	hover_text_color: string;
	border_radius: number | string;
	woostify_pro_active?: boolean;
}

export const WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO: WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON =
	{
		enabled: false,
		position: "bottom-image",
		show_icon: true,
		bg_color: "",
		text_color: "",
		hover_bg_color: "",
		hover_text_color: "",
		border_radius: "",
		woostify_pro_active: false,
	};
