/**
 * Countdown block — WordPress Interactivity API store (front-end).
 *
 * @package Boostify Blocks
 */

import { store, getContext } from '@wordpress/interactivity';

const COOKIE_PREFIX = 'wpblocks-';

function getCookie( name ) {
	const match = document.cookie.match(
		new RegExp( '(?:^|; )' + COOKIE_PREFIX + name + '=([^;]*)' )
	);
	return match ? decodeURIComponent( match[ 1 ] ) : '';
}

function setCookie( name, value, days ) {
	const expires = new Date( Date.now() + days * 24 * 60 * 60 * 1000 ).toUTCString();
	document.cookie = COOKIE_PREFIX + name + '=' + value + '; expires=' + expires + '; path=/';
}

function deleteCookie( name ) {
	document.cookie = COOKIE_PREFIX + name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
}

// Evergreen timers persist their deadline in a per-visitor cookie so the
// countdown doesn't restart on every page load.
function resolveDeadline( context ) {
	if ( context.timerType !== 'evergreen' ) {
		return new Date( context.endDateTime ).getTime();
	}

	const cached = getCookie( context.campaignKey );
	if ( cached ) {
		return Number( cached );
	}

	const deadline =
		Date.now() +
		Number( context.evergreenDays ) * 24 * 60 * 60 * 1000 +
		Number( context.evergreenHrs ) * 60 * 60 * 1000 +
		Number( context.evergreenMinutes ) * 60 * 1000 +
		100;

	setCookie( context.campaignKey, deadline, context.resetDays || 30 );
	return deadline;
}

store( 'boostify-blocks/countdown', {
	callbacks: {
		start: () => {
			const context = getContext();
			const deadline = resolveDeadline( context );
			let intervalId;

			const tick = () => {
				const diff = deadline - Date.now();
				const isOvertime = diff < 0;

				const days = Math.floor( diff / 86400000 );
				let hours = Math.floor( diff / 3600000 ) % 24;
				let minutes = Math.floor( diff / 60000 ) % 60;
				let seconds = Math.floor( diff / 1000 ) % 60;

				// Fold hidden larger units into the smallest visible one, same
				// cascade as the previous vanilla implementation.
				let showHours = context.showHours;
				let showMinutes = context.showMinutes;
				if ( context.showDays ) {
					showHours = true;
					showMinutes = true;
				}
				if ( showHours ) {
					showMinutes = true;
				}

				if ( ! context.showDays ) {
					hours += days * 24;
				}
				if ( ! showHours ) {
					minutes += hours * 60;
				}
				if ( ! showMinutes ) {
					seconds += minutes * 60;
				}

				context.days = isOvertime ? 0 : days;
				context.hours = isOvertime ? 0 : hours;
				context.minutes = isOvertime ? 0 : minutes;
				context.seconds = isOvertime ? 0 : seconds;

				if ( isOvertime ) {
					clearInterval( intervalId );

					if ( context.timerType === 'evergreen' ) {
						deleteCookie( context.campaignKey );
					}
				}
			};

			tick();
			intervalId = setInterval( tick, 1000 );

			return () => clearInterval( intervalId );
		},
	},
} );
