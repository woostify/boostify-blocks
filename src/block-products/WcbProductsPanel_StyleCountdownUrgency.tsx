import { __ } from "@wordpress/i18n";
import React, { FC } from "react";


export interface WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY {
	position: 'top-right' | 'bottom-right' | 'none';
	style: 'default' | 'style-1';
	countdownUrgencyActive?: boolean;
	applyFor?: 'all' | 'categories' | 'products';
	categoriesSelected?: string | false;
	productsSelected?: string | false;
	categoriesExclude?: string | false;
	productsExclude?: string | false;
	timeDuration?: string;
	timeType?: 'days' | 'hours' | 'minutes';
	message?: string;
	daysLabel?: string;
	hoursLabel?: string;
	minutesLabel?: string;
	secondsLabel?: string;
	displayOnThumbnail?: '0' | '1';
	hideAfterTimeUp?: '0' | '1';
}

export const WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY_DEMO: WCB_PRODUCTS_PANEL_STYLE_COUNTDOWN_URGENCY =
	{
		position: "top-right",
		style: "default",
		countdownUrgencyActive: false,
		applyFor: "all",
		categoriesSelected: false,
		productsSelected: false,
		categoriesExclude: false,
		productsExclude: false,
		timeDuration: "1",
		timeType: "days",
		message: "Hurry up! Flash Sale Ends Soon!",
		daysLabel: "DAYS",
		hoursLabel: "HOURS",
		minutesLabel: "MINS",
		secondsLabel: "SECS",
		displayOnThumbnail: "0",
		hideAfterTimeUp: "1",
	};


