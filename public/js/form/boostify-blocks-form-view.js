/**
 * Form block — WordPress Interactivity API store (front-end).
 *
 * Data flow:
 *   Context (per form instance): { mailInfo, confirmationType, successRedirectUrl,
 *     recaptchaEnabled, recaptchaVersion, isSubmitting, showSuccessMessage, showErrorMessage }
 *
 *   - submitForm (data-wp-on--submit): serializes the form, runs reCAPTCHA v3 when
 *     enabled, posts to admin-ajax.php, then toggles the success/error message.
 *   - initRecaptchaV2 (data-wp-init): explicitly renders the reCAPTCHA v2 widget into
 *     the .g-recaptcha container once the Google script is ready. Explicit rendering
 *     (rather than relying on Google's implicit data-sitekey scan) avoids any race
 *     between this module script and the classic reCAPTCHA <script> tag load order.
 *
 * @package Boostify Blocks
 */

import { store, getContext, getElement } from '@wordpress/interactivity';

const NAMESPACE = 'boostify-blocks/form';

function getFieldLabel( form, name ) {
	const escaped = window.CSS?.escape ? window.CSS.escape( name ) : name;
	const labelEl = form.querySelector( `[data-label-for="${ escaped }"]` );
	return labelEl?.textContent?.trim() || name;
}

function buildAjaxPayload( fields, mailInfo ) {
	const payload = new FormData();
	payload.append( 'action', 'boostify_blocks_form_action' );
	payload.append( 'nonce', window.boostify_blocks_frontend_ajax_object?.nonce || '' );
	fields.forEach( ( field, index ) => {
		payload.append( `formData[${ index }][name]`, field.name );
		payload.append( `formData[${ index }][value]`, field.value );
	} );
	Object.entries( mailInfo || {} ).forEach( ( [ key, value ] ) => {
		payload.append( `mailInfo[${ key }]`, value ?? '' );
	} );
	return payload;
}

function runRecaptchaV3( siteKey ) {
	return new Promise( ( resolve ) => {
		if ( typeof window.grecaptcha !== 'object' || ! siteKey ) {
			resolve();
			return;
		}
		window.grecaptcha.ready( () => {
			window.grecaptcha
				.execute( siteKey, { action: 'submit' } )
				.then( resolve )
				.catch( resolve );
		} );
	} );
}

const { state } = store( NAMESPACE, {
	state: {
		get recaptchaSiteKeyV2() {
			return window.boostify_blocks_global_variables?.reCAPTCHA_v2_site_key || '';
		},
		get recaptchaSiteKeyV3() {
			return window.boostify_blocks_global_variables?.reCAPTCHA_v3_site_key || '';
		},
	},
	actions: {
		*submitForm( event ) {
			event.preventDefault();

			const context = getContext();
			const { ref: form } = getElement();

			context.isSubmitting = true;
			context.showSuccessMessage = false;
			context.showErrorMessage = false;

			try {
				if ( context.recaptchaEnabled && context.recaptchaVersion === 'v3' ) {
					yield runRecaptchaV3( state.recaptchaSiteKeyV3 );
				}

				const fields = Array.from( new FormData( form ).entries() ).map(
					( [ name, value ] ) => ( {
						name: getFieldLabel( form, name ),
						value: typeof value === 'string' ? value : '',
					} )
				);

				const response = yield window.fetch(
					window.boostify_blocks_frontend_ajax_object.ajaxurl,
					{
						method: 'POST',
						credentials: 'same-origin',
						body: buildAjaxPayload( fields, context.mailInfo ),
					}
				);

				if ( ! response.ok ) {
					throw new Error( 'Form submission failed' );
				}

				context.showSuccessMessage = true;

				if ( context.confirmationType === 'url-text' && context.successRedirectUrl ) {
					window.location.href = context.successRedirectUrl;
				}
			} catch ( error ) {
				context.showErrorMessage = true;
			} finally {
				context.isSubmitting = false;
			}
		},
	},
	callbacks: {
		initRecaptchaV2: () => {
			const context = getContext();
			if ( ! context.recaptchaEnabled || context.recaptchaVersion !== 'v2' ) {
				return;
			}

			const { ref } = getElement();
			const siteKey = state.recaptchaSiteKeyV2;
			if ( ! siteKey ) {
				return;
			}

			const renderWidget = () => {
				if ( ref.dataset.rendered === 'true' || ! window.grecaptcha?.render ) {
					return;
				}
				window.grecaptcha.render( ref, { sitekey: siteKey } );
				ref.dataset.rendered = 'true';
			};

			if ( window.grecaptcha?.render ) {
				window.grecaptcha.ready( renderWidget );
				return;
			}

			// The Google script loads asynchronously; poll briefly until it's ready.
			let attempts = 0;
			const interval = window.setInterval( () => {
				attempts += 1;
				if ( window.grecaptcha?.render ) {
					window.clearInterval( interval );
					window.grecaptcha.ready( renderWidget );
				} else if ( attempts > 100 ) {
					window.clearInterval( interval );
				}
			}, 100 );
		},
	},
} );
