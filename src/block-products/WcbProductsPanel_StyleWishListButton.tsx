import { __ } from "@wordpress/i18n";
import React, { FC } from "react";


export interface WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON {
	position: 'top-right' | 'bottom-right' | 'none';
	style: 'yith' | 'ti';
	wishlist_plugin_active?: boolean;
}

export const WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON_DEMO: WCB_PRODUCTS_PANEL_STYLE_WISHLIST_BUTTON =
	{
		position: "top-right",
		style: "yith",
		wishlist_plugin_active: false,
	};
