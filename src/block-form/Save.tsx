import React from "react";
import { __ } from "@wordpress/i18n";
import {
	// @ts-ignore
	useInnerBlocksProps,
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
// @ts-ignore
import "./style.scss";

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_action,
		general_general,
		general_gg_recaptcha,
		general_submit_button,
		style_checkbox_radio_toggle,
		style_input,
		style_label,
		style_messages,
		style_spacing,
		style_submit_button,
		advance_motionEffect,
	} = attributes;
	//

	const newAttrForSave: Omit<WcbAttrs, "btnSubmitText"> = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_action,
		general_general,
		general_gg_recaptcha,
		general_submit_button,
		style_checkbox_radio_toggle,
		style_input,
		style_label,
		style_messages,
		style_spacing,
		style_submit_button,
		advance_motionEffect,
	};
	//

	const reCaptchaV2 =
		general_gg_recaptcha.enableReCaptcha &&
		general_gg_recaptcha.version === "v2";
	const reCaptchaV3 =
		general_gg_recaptcha.enableReCaptcha &&
		general_gg_recaptcha.version === "v3";

	//
	const interactivityContext = {
		isSubmitting: false,
		showSuccessMessage: false,
		showErrorMessage: false,
		mailInfo: {
			to: general_action.main.To.email,
			cc: general_action.main.CC.email,
			bcc: general_action.main.BCC.email,
			subject: general_action.subject,
		},
		confirmationType: general_general.confirmationType,
		successRedirectUrl: general_general.successRedirectUrl,
		recaptchaEnabled: general_gg_recaptcha.enableReCaptcha,
		recaptchaVersion: general_gg_recaptcha.version,
	};
	//
	const wrapBlockProps = useBlockProps.save({
		className: "wcb-form__wrap",
		"data-wp-interactive": "boostify-blocks/form",
		"data-wp-context": JSON.stringify(interactivityContext),
		"data-wp-on--submit": "actions.submitForm",
	});
	//
	const blockProps = useBlockProps.save({ className: "wcb-form__inner" });
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);
	//

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
			HtmlTag="form"
		>
			<div className="wcb-form__box">
				<div children={innerBlocksProps.children} className="wcb-form__inner" />
				{/* V2 */}
				{reCaptchaV2 && (
					<div className="g-recaptcha" data-wp-init="callbacks.initRecaptchaV2"></div>
				)}

				<div className="wcb-form__btn-submit-wrap">
					<RichText.Content
						className={`wcb-form__btn-submit ${
							reCaptchaV3 ? "g-recaptcha" : ""
						}`}
						value={attributes.btnSubmitText}
						tagName="button"
						type="submit"
						data-wp-bind--disabled="context.isSubmitting"
					/>
				</div>
			</div>
			<div
				className="wcb-form__successMessageText"
				data-wp-class--is-visible="context.showSuccessMessage"
			>
				<span>{attributes.general_general.successMessageText}</span>
			</div>
			<div
				className="wcb-form__errorMessageText"
				data-wp-class--is-visible="context.showErrorMessage"
			>
				<span>{attributes.general_general.errorMessageText}</span>
			</div>
		</SaveCommon>
	);
}
