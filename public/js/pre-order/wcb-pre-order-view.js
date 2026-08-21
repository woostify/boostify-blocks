/**
 * Pre-order countdown badge — WordPress Interactivity API store (front-end).
 *
 * @package Boostify Blocks
 */

import { store, getContext } from '@wordpress/interactivity';

function pad( n ) {
	return n < 10 ? '0' + n : '' + n;
}

store( 'boostify-blocks/pre-order', {
	callbacks: {
		start: () => {
			const context = getContext();

			// Pre-order closes at 23:59 on the end date, same rule the legacy
			// (theme) countdown used.
			const deadline = new Date( context.endDate );
			deadline.setHours( 23, 59, 0, 0 );
			const deadlineTime = deadline.getTime();

			const tick = () => {
				const distance = deadlineTime - Date.now();

				if ( distance <= 0 ) {
					context.closed = true;
					clearInterval( intervalId );
					return;
				}

				context.days = pad( Math.floor( distance / 86400000 ) );
				context.hours = pad( Math.floor( distance / 3600000 ) % 24 );
				context.minutes = pad( Math.floor( distance / 60000 ) % 60 );
				context.seconds = pad( Math.floor( distance / 1000 ) % 60 );
			};

			tick();
			const intervalId = setInterval( tick, 1000 );

			return () => clearInterval( intervalId );
		},
	},
} );
