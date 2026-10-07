import { __ } from '@wordpress/i18n';

export const DISPLAY_CONDITIONS_TYPES = [
	{ value: 'none', label: __( 'None', 'boostify-blocks' ) },
	{ value: 'userstate', label: __( 'User State', 'boostify-blocks' ) },
	{ value: 'userRole', label: __( 'User Role', 'boostify-blocks' ) },
	{ value: 'browser', label: __( 'Browser', 'boostify-blocks' ) },
	{ value: 'os', label: __( 'Operating System', 'boostify-blocks' ) },
	{ value: 'day', label: __( 'Day', 'boostify-blocks' ) },
];

export const OS_OPTIONS = [
	{ value: '', label: __( 'None', 'boostify-blocks' ) },
	{ value: 'iphone', label: __( 'iOS', 'boostify-blocks' ) },
	{ value: 'android', label: __( 'Android', 'boostify-blocks' ) },
	{ value: 'windows', label: __( 'Windows', 'boostify-blocks' ) },
	{ value: 'mac_os', label: __( 'Mac OS', 'boostify-blocks' ) },
	{ value: 'linux', label: __( 'Linux', 'boostify-blocks' ) },
	{ value: 'open_bsd', label: __( 'OpenBSD', 'boostify-blocks' ) },
	{ value: 'sun_os', label: __( 'SunOS', 'boostify-blocks' ) },
];

export const BROWSER_OPTIONS = [
	{ value: '', label: __( 'None', 'boostify-blocks' ) },
	{ value: 'firefox', label: __( 'Mozilla Firefox', 'boostify-blocks' ) },
	{ value: 'chrome', label: __( 'Google Chrome', 'boostify-blocks' ) },
	{ value: 'opera_mini', label: __( 'Opera Mini', 'boostify-blocks' ) },
	{ value: 'opera', label: __( 'Opera', 'boostify-blocks' ) },
	{ value: 'safari', label: __( 'Safari', 'boostify-blocks' ) },
	{ value: 'edge', label: __( 'Microsoft Edge', 'boostify-blocks' ) },
];

export const DAY_OPTIONS = [
	{ value: 'monday', label: __( 'Monday', 'boostify-blocks' ) },
	{ value: 'tuesday', label: __( 'Tuesday', 'boostify-blocks' ) },
	{ value: 'wednesday', label: __( 'Wednesday', 'boostify-blocks' ) },
	{ value: 'thursday', label: __( 'Thursday', 'boostify-blocks' ) },
	{ value: 'friday', label: __( 'Friday', 'boostify-blocks' ) },
	{ value: 'saturday', label: __( 'Saturday', 'boostify-blocks' ) },
	{ value: 'sunday', label: __( 'Sunday', 'boostify-blocks' ) },
];

export const EXCLUDED_BLOCKS = [
	// Boostify Blocks internal & dependent child blocks
	'boostify-blocks/extensions',
	'boostify-blocks/default',
	'boostify-blocks/dashboard',
	'boostify-blocks/tab-child',
	'boostify-blocks/faq-child',
	'boostify-blocks/icon-child',
	'boostify-blocks/slider-child',
	'boostify-blocks/slider-swiper-child',

	// WordPress Core blocks excluded (following wp-spectra standard: dynamic widgets, navigation & system blocks)
	'core/archives',
	'core/calendar',
	'core/latest-comments',
	'core/tag-cloud',
	'core/rss',
	'core/legacy-widget',
	'core/navigation',
	'core/search',
	'core/file',
];
