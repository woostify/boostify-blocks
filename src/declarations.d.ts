declare module "*.scss" {
	const content: Record<string, string>;
	export default content;
}

declare module "*.css" {
	const content: Record<string, string>;
	export default content;
}

declare const ajaxurl: string;

interface Window {
	boostify_blocks_global_variables?: Record<string, any>;
	boostify_blocks_frontend_ajax_object?: {
		ajaxurl: string;
		homeUrl: string;
		nonce: string;
	};
}
