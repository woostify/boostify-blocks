/**
 * Countdown Urgency for Boostify Blocks & Woostify Pro
 *
 * @package Boostify_Blocks
 */

'use strict';

// Sub.
var sub = function( n ) {
	return ( n < 10 ) ? '0' + n : n;
};

// Countdown timer.
var woostifyCountdownUrgency = function() {
	var selector = document.querySelectorAll( '.woostify-countdown-urgency' );
	if ( ! selector.length ) {
		return;
	}

	for ( var i = 0, j = selector.length; i < j; i++ ) {
		( function( element ) {
			if ( element.classList.contains( 'active' ) ) {
				return;
			}

			var durationAttr = element.getAttribute( 'data-duration' );
			if ( ! durationAttr || isNaN( parseInt( durationAttr ) ) ) {
				return;
			}

			var now         = new Date().getTime(),
				duration    = parseInt( durationAttr ),
				timeUp      = element.getAttribute( 'data-time-up' ) === '1',
				deadline    = new Date( now + duration ).getTime(),
				daysHtml    = element.querySelector( '[data-time=days]' ),
				hoursHtml   = element.querySelector( '[data-time=hours]' ),
				minutesHtml = element.querySelector( '[data-time=minutes]' ),
				secondsHtml = element.querySelector( '[data-time=seconds]' );

			if ( ! daysHtml || ! hoursHtml || ! minutesHtml || ! secondsHtml ) {
				return;
			}

			element.classList.add( 'active' );

			var timer = setInterval(
				function() {
					var nows    = new Date().getTime(),
						live    = deadline - nows + 1000,
						oneDay  = 24 * 60 * 60 * 1000,
						oneHour = 60 * 60 * 1000,
						days    = parseInt( live / oneDay ),
						hours   = parseInt( ( live - days * oneDay ) / oneHour ),
						minutes = parseInt( ( live - days * oneDay - hours * oneHour ) / 60000 ),
						seconds = parseInt( ( live % 60000 ) / 1000 );

					if ( live < 0 ) {
						clearInterval( timer );

						if ( timeUp ) {
							element.remove();
						}
						return;
					}

					daysHtml.innerHTML    = sub( days );
					hoursHtml.innerHTML   = sub( hours );
					minutesHtml.innerHTML = sub( minutes );
					secondsHtml.innerHTML = sub( seconds );
				},
				1000
			);
		} )( selector[i] );
	}
};

window.woostifyCountdownUrgency = woostifyCountdownUrgency;

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', function() {
		setTimeout( woostifyCountdownUrgency, 100 );
	} );
} else {
	setTimeout( woostifyCountdownUrgency, 100 );
}

window.addEventListener( 'load', function() {
	setTimeout( woostifyCountdownUrgency, 100 );
} );

if ( window.MutationObserver ) {
	var countdownObserver = new MutationObserver( function() {
		woostifyCountdownUrgency();
	} );
	if ( document.body ) {
		countdownObserver.observe( document.body, { childList: true, subtree: true } );
	} else {
		document.addEventListener( 'DOMContentLoaded', function() {
			countdownObserver.observe( document.body, { childList: true, subtree: true } );
		} );
	}
}
