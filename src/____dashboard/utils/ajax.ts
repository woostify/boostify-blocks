/**
 * Centralized AJAX helper for Boostify Blocks Dashboard.
 *
 * Implements native fetch() + async/await with zero dependencies on jQuery.
 * Features:
 * - Robust ajaxurl resolution
 * - Automatic WordPress nonce attachment
 * - AbortController timeout handling
 * - Nested object/array serialization for PHP $_POST compatibility
 * - Unified error message extraction across all HTTP status codes
 */

export const getAjaxUrl = (): string => {
	return (
		window.boostify_blocks_frontend_ajax_object?.ajaxurl ||
		(window as any).ajaxurl ||
		"/wp-admin/admin-ajax.php"
	);
};

export const getAjaxNonce = (): string => {
	return window.boostify_blocks_frontend_ajax_object?.nonce || "";
};

export interface AjaxRequestOptions {
	action: string;
	data?: Record<string, any>;
	timeout?: number; // ms, default 15000
}

export interface AjaxResponse<T = any> {
	success?: boolean;
	data?: T;
	message?: string;
}

/**
 * Recursively append keys and values to FormData so that PHP correctly
 * populates $_POST with nested arrays/objects (e.g. settings[foo]=bar).
 */
export function appendFormData(formData: FormData, key: string, value: any): void {
	if (value === null || value === undefined) {
		return;
	}

	if (Array.isArray(value)) {
		value.forEach((item, index) => {
			appendFormData(formData, `${key}[${index}]`, item);
		});
	} else if (typeof value === "object" && !(value instanceof File) && !(value instanceof Blob)) {
		Object.keys(value).forEach((subKey) => {
			appendFormData(formData, `${key}[${subKey}]`, value[subKey]);
		});
	} else {
		formData.append(key, String(value));
	}
}

/**
 * Build a standard FormData payload for WordPress admin-ajax.php
 */
export function buildFormData(
	action: string,
	nonce: string,
	data: Record<string, any> = {}
): FormData {
	const formData = new FormData();
	formData.append("action", action);
	if (nonce) {
		formData.append("nonce", nonce);
	}

	Object.keys(data).forEach((key) => {
		appendFormData(formData, key, data[key]);
	});

	return formData;
}

/**
 * Perform a safe, timed-out POST request to WordPress admin-ajax.php using native fetch()
 */
export const postAjax = async <T = any>(
	options: AjaxRequestOptions
): Promise<AjaxResponse<T>> => {
	const { action, data = {}, timeout = 15000 } = options;

	const url = getAjaxUrl();
	const nonce = getAjaxNonce();
	const formData = buildFormData(action, nonce, data);

	const controller = new AbortController();
	const timer = setTimeout(() => {
		controller.abort();
	}, timeout);

	try {
		const response = await fetch(url, {
			method: "POST",
			body: formData,
			signal: controller.signal,
			credentials: "same-origin", // Ensures WordPress auth session cookies are included
		});

		clearTimeout(timer);

		const text = await response.text();
		let json: any = null;
		try {
			json = JSON.parse(text);
		} catch {
			// Response was not JSON (e.g. PHP fatal error, HTML notice)
		}

		// Handle HTTP errors or WordPress wp_send_json_error responses
		if (!response.ok || (json && json.success === false)) {
			const errorMsg =
				json?.data?.message ||
				json?.message ||
				(typeof json?.data === "string" ? json.data : null) ||
				(text && text.length < 200 && !text.includes("<html") ? text : null) ||
				`Server error (HTTP ${response.status}: ${response.statusText || "Request failed"})`;

			throw new Error(errorMsg);
		}

		return (json as AjaxResponse<T>) ?? { success: true };
	} catch (err: any) {
		clearTimeout(timer);

		if (err.name === "AbortError") {
			throw new Error("Request timed out. Please check your connection and try again.");
		}

		throw err instanceof Error ? err : new Error(String(err));
	}
};

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (email: string): boolean => {
	return EMAIL_REGEX.test(email.trim());
};

/**
 * Shared helper to subscribe an email address to the Boostify Pro waitlist.
 */
export const subscribeToProWaitlist = async (params: {
	email: string;
	website?: string;
	blockTitle?: string | null;
}): Promise<AjaxResponse> => {
	return postAjax({
		action: "boostify_blocks_waitlist_subscribe",
		data: {
			email: params.email.trim(),
			website: params.website || "",
			block: params.blockTitle || "",
		},
		timeout: 15000,
	});
};
