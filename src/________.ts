import "jquery";
import { Wcb_theme_layout_global_settings } from "./types";

declare global {
	var wp: any | undefined;
	var grecaptcha: any | undefined;
	var boostifyblocksGlobalVariables: {
		media_tablet: string;
		media_desktop: string;
		reCAPTCHA_v3_site_key?: string;
		reCAPTCHA_v3_secret_key?: string;
		reCAPTCHA_v2_site_key?: string;
		reCAPTCHA_v2_secret_key?: string;
		defaultContentWidth?: string;
		enableTemplatesButton?: "true" | "false";
		enableCopyPasteStyles?: "true" | "false";
		// containerElementsGap?: string;
		customColorPallete?: { name: string; color: string }[];
	};
	var boostifyblocksFrontendAjaxObject: {
		ajaxurl: string;
		homeUrl: string;
		nonce: string;
	};
	var boostifyblocksLayoutGlobalSettings: Wcb_theme_layout_global_settings;
}

const INIT_BOOSTIFYBLOCKS_GLOBAL_VARIABLES: typeof window.boostifyblocksGlobalVariables = {
	media_tablet: "768px",
	media_desktop: "1024px",
	reCAPTCHA_v3_secret_key: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
	reCAPTCHA_v3_site_key: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
	reCAPTCHA_v2_site_key: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
	reCAPTCHA_v2_secret_key: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
	// se sd khi pick container lan dau tien / or khi truong contentWidth cua container khong duoc nhap
	defaultContentWidth: window?.boostifyblocksLayoutGlobalSettings?.contentSize || "",
	enableTemplatesButton: "true",
	enableCopyPasteStyles: "false",
};

export const DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES: typeof window.boostifyblocksGlobalVariables = {
	...INIT_BOOSTIFYBLOCKS_GLOBAL_VARIABLES,
	...(window.boostifyblocksGlobalVariables || {}),
	defaultContentWidth:
		window.boostifyblocksGlobalVariables?.defaultContentWidth ||
		window.boostifyblocksLayoutGlobalSettings?.contentSize,
};

export const ___boostify_blocks_global = 1;
