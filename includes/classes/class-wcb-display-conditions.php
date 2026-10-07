<?php
/**
 * Boostify Blocks Display Conditions.
 *
 * Provides conditional block rendering based on user state, role, OS, browser, or day.
 * Follows Spectra architecture.
 *
 * @package Boostify-Blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Class WCB_Display_Conditions.
 */
class WCB_Display_Conditions {

	/**
	 * Member Variable.
	 *
	 * @var WCB_Display_Conditions|null
	 */
	private static $instance = null;

	/**
	 * Initiator.
	 *
	 * @return WCB_Display_Conditions
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	public function __construct() {
		$options = get_option( 'boostify_blocks_settings_options', array() );
		$enabled = ! isset( $options['enableDisplayConditions'] ) || rest_sanitize_boolean( $options['enableDisplayConditions'] );

		if ( $enabled && ! is_admin() ) {
			add_filter( 'render_block', array( $this, 'render_block_display_conditions' ), 10, 2 );
		}
	}

	/**
	 * Get WordPress User Roles formatted for SelectControl.
	 *
	 * @return array
	 */
	public function get_user_roles() {
		global $wp_roles;

		$roles = array(
			array(
				'value' => '',
				'label' => __( 'None', 'boostify-blocks' ),
			),
		);

		if ( ! empty( $wp_roles ) && is_object( $wp_roles ) ) {
			foreach ( $wp_roles->get_names() as $role_key => $role_name ) {
				$roles[] = array(
					'value' => $role_key,
					'label' => translate_user_role( $role_name ),
				);
			}
		}

		return $roles;
	}

	/**
	 * Filter block HTML based on display conditions.
	 *
	 * @param string $block_content Rendered HTML of the block.
	 * @param array  $block         Parsed block data.
	 * @return string Modified block content, or empty string if hidden.
	 */
	public function render_block_display_conditions( $block_content, $block ) {
		if ( empty( $block_content ) || empty( $block['attrs'] ) || ! is_array( $block['attrs'] ) ) {
			return $block_content;
		}

		// Skip excluded blocks if defined.
		if ( ! empty( $block['blockName'] ) ) {
			$excluded_blocks = apply_filters(
				'boostify_blocks_display_conditions_excluded_blocks',
				array(
					'boostify-blocks/extensions',
					'boostify-blocks/default',
					'boostify-blocks/dashboard',
					'boostify-blocks/tab-child',
					'boostify-blocks/faq-child',
					'boostify-blocks/icon-child',
					'boostify-blocks/slider-child',
					'boostify-blocks/slider-swiper-child',
					'core/archives',
					'core/calendar',
					'core/latest-comments',
					'core/tag-cloud',
					'core/rss',
					'core/legacy-widget',
					'core/navigation',
					'core/search',
					'core/file',
				)
			);
			if ( in_array( $block['blockName'], $excluded_blocks, true ) ) {
				return $block_content;
			}
		}

		$attrs = $block['attrs'];

		if ( empty( $attrs['wcbDisplayConditions'] ) || 'none' === $attrs['wcbDisplayConditions'] ) {
			return $block_content;
		}

		$is_hidden = false;

		switch ( $attrs['wcbDisplayConditions'] ) {
			case 'userstate':
				$is_hidden = $this->check_user_state_visibility( $attrs );
				break;

			case 'userRole':
				$is_hidden = $this->check_user_role_visibility( $attrs );
				break;

			case 'browser':
				$is_hidden = $this->check_browser_visibility( $attrs );
				break;

			case 'os':
				$is_hidden = $this->check_os_visibility( $attrs );
				break;

			case 'day':
				$is_hidden = $this->check_day_visibility( $attrs );
				break;

			default:
				break;
		}

		/**
		 * Filter whether a block should be hidden by display conditions.
		 *
		 * @param bool  $is_hidden Whether the block should be hidden.
		 * @param array $block     Parsed block data.
		 * @param array $attrs     Block attributes.
		 */
		$is_hidden = apply_filters( 'boostify_blocks_is_block_hidden', $is_hidden, $block, $attrs );

		return $is_hidden ? '' : $block_content;
	}

	/**
	 * Check User State Visibility (Logged In / Logged Out).
	 *
	 * @param array $attrs Block attributes.
	 * @return bool True if block should be hidden.
	 */
	private function check_user_state_visibility( $attrs ) {
		$hide_logged_in  = ! empty( $attrs['wcbLoggedIn'] ) && rest_sanitize_boolean( $attrs['wcbLoggedIn'] );
		$hide_logged_out = ! empty( $attrs['wcbLoggedOut'] ) && rest_sanitize_boolean( $attrs['wcbLoggedOut'] );

		if ( $hide_logged_in && is_user_logged_in() ) {
			return true;
		}

		if ( $hide_logged_out && ! is_user_logged_in() ) {
			return true;
		}

		return false;
	}

	/**
	 * Check User Role Visibility.
	 *
	 * @param array $attrs Block attributes.
	 * @return bool True if block should be hidden.
	 */
	private function check_user_role_visibility( $attrs ) {
		if ( empty( $attrs['wcbUserRole'] ) ) {
			return false;
		}

		if ( ! is_user_logged_in() ) {
			return false;
		}

		$current_user = wp_get_current_user();
		if ( ! empty( $current_user->roles ) && in_array( $attrs['wcbUserRole'], $current_user->roles, true ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Check Operating System Visibility.
	 *
	 * @param array $attrs Block attributes.
	 * @return bool True if block should be hidden.
	 */
	private function check_os_visibility( $attrs ) {
		if ( empty( $attrs['wcbSystem'] ) ) {
			return false;
		}

		$user_agent = isset( $_SERVER['HTTP_USER_AGENT'] ) ? sanitize_text_field( wp_unslash( $_SERVER['HTTP_USER_AGENT'] ) ) : '';
		if ( empty( $user_agent ) ) {
			return false;
		}

		$os_patterns = array(
			'iphone'   => '(iPhone)|(iPad)|(iPod)',
			'android'  => '(Android)',
			'windows'  => 'Win16|(Windows 95)|(Win95)|(Windows_95)|(Windows 98)|(Win98)|(Windows NT 5.0)|(Windows 2000)|(Windows NT 5.1)|(Windows XP)|(Windows NT 5.2)|(Windows NT 6.0)|(Windows Vista)|(Windows NT 6.1)|(Windows 7)|(Windows NT 4.0)|(WinNT4.0)|(WinNT)|(Windows NT)|Windows ME|(Windows NT 10.0)',
			'open_bsd' => 'OpenBSD',
			'sun_os'   => 'SunOS',
			'linux'    => '(Linux)|(X11)',
			'mac_os'   => '(Mac_PowerPC)|(Macintosh)',
		);

		if ( isset( $os_patterns[ $attrs['wcbSystem'] ] ) ) {
			return (bool) preg_match( '@' . $os_patterns[ $attrs['wcbSystem'] ] . '@', $user_agent );
		}

		return false;
	}

	/**
	 * Check Browser Visibility.
	 *
	 * @param array $attrs Block attributes.
	 * @return bool True if block should be hidden.
	 */
	private function check_browser_visibility( $attrs ) {
		if ( empty( $attrs['wcbBrowser'] ) ) {
			return false;
		}

		$user_agent = isset( $_SERVER['HTTP_USER_AGENT'] ) ? sanitize_text_field( wp_unslash( $_SERVER['HTTP_USER_AGENT'] ) ) : '';
		if ( empty( $user_agent ) ) {
			return false;
		}

		$detected_browser = $this->get_browser_name( $user_agent );

		return $detected_browser === $attrs['wcbBrowser'];
	}

	/**
	 * Detect browser name from User Agent.
	 *
	 * @param string $user_agent HTTP User Agent.
	 * @return string Browser slug.
	 */
	private function get_browser_name( $user_agent ) {
		if ( false !== strpos( $user_agent, 'Opera Mini' ) || false !== strpos( $user_agent, 'Opera Mobi' ) ) {
			return 'opera_mini';
		} elseif ( false !== strpos( $user_agent, 'Opera' ) || false !== strpos( $user_agent, 'OPR/' ) ) {
			return 'opera';
		} elseif ( false !== strpos( $user_agent, 'Edg' ) || false !== strpos( $user_agent, 'Edge' ) ) {
			return 'edge';
		} elseif ( false !== strpos( $user_agent, 'Chrome' ) ) {
			return 'chrome';
		} elseif ( false !== strpos( $user_agent, 'Safari' ) ) {
			return 'safari';
		} elseif ( false !== strpos( $user_agent, 'Firefox' ) ) {
			return 'firefox';
		} elseif ( false !== strpos( $user_agent, 'MSIE' ) || false !== strpos( $user_agent, 'Trident/7' ) ) {
			return 'ie';
		}

		return '';
	}

	/**
	 * Check Day Visibility.
	 *
	 * @param array $attrs Block attributes.
	 * @return bool True if block should be hidden.
	 */
	private function check_day_visibility( $attrs ) {
		if ( empty( $attrs['wcbDay'] ) ) {
			return false;
		}

		$days = $attrs['wcbDay'];
		if ( is_string( $days ) ) {
			$decoded = json_decode( $days, true );
			if ( is_array( $decoded ) ) {
				$days = $decoded;
			} else {
				$days = array_filter( array_map( 'trim', explode( ',', $days ) ) );
			}
		}

		if ( ! is_array( $days ) || empty( $days ) ) {
			return false;
		}

		$current_day = strtolower( current_datetime()->format( 'l' ) );

		return in_array( $current_day, array_map( 'strtolower', $days ), true );
	}
}

// Initialize.
WCB_Display_Conditions::get_instance();
