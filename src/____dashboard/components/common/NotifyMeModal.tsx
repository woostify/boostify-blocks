import React, { FC, Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { __, sprintf } from "@wordpress/i18n";
import DynamicIcon from "./DynamicIcon";
import toast from "react-hot-toast";
import { isValidEmail, subscribeToProWaitlist } from "../../utils/ajax";

interface NotifyMeModalProps {
	isOpen: boolean;
	onClose: () => void;
	blockTitle?: string | null;
	isSubscribed: boolean;
	onSubscribed: () => void;
}

const NotifyMeModal: FC<NotifyMeModalProps> = ({
	isOpen,
	onClose,
	blockTitle,
	isSubscribed,
	onSubscribed,
}) => {
	const [email, setEmail] = useState("");
	const [websiteHoneypot, setWebsiteHoneypot] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		if (isOpen) {
			setErrorMessage("");
		}
	}, [isOpen, blockTitle]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setErrorMessage("");

		if (!isValidEmail(email)) {
			setErrorMessage(__( "Please enter a valid email address.", "boostify-blocks" ));
			return;
		}

		setIsSubmitting(true);

		subscribeToProWaitlist({
			email,
			website: websiteHoneypot,
			blockTitle,
		})
			.then((response: any) => {
				setIsSubmitting(false);
				if (response?.success) {
					onSubscribed();
					toast.success(__( "You're on the Pro waitlist! We'll be in touch soon.", "boostify-blocks" ));
					onClose();
				} else {
					const msg =
						response?.data?.message || __( "Subscription failed. Please try again.", "boostify-blocks" );
					setErrorMessage(msg);
					toast.error(msg);
				}
			})
			.catch((err: any) => {
				setIsSubmitting(false);
				const msg =
					err?.message ||
					__( "Unable to connect to the waitlist service. Please try again.", "boostify-blocks" );
				setErrorMessage(msg);
				toast.error(msg);
			});
	};

	const modalTitle = blockTitle
		? sprintf(
				/* translators: %s: Block title */
				__( "Get notified when %s is available", "boostify-blocks" ),
				blockTitle
		  )
		: __( "Get notified when Boostify Pro launches", "boostify-blocks" );

	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog
				as="div"
				className="bb-modal-root"
				onClose={() => {
					if (!isSubmitting) {
						onClose();
					}
				}}
			>
				<div className="bb-modal-container">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-200"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-150"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="bb-modal-overlay" />
					</Transition.Child>

					<span className="bb-modal-center-trick" aria-hidden="true">
						&#8203;
					</span>

					<Transition.Child
						as={Fragment}
						enter="ease-out duration-200"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-150"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<div className="bb-modal-dialog bb-modal-notify">
							{/* Close Button */}
							<button
								type="button"
								onClick={onClose}
								className="bb-modal-close"
								aria-label={__( "Close modal", "boostify-blocks" )}
							>
								<DynamicIcon name="close" size={18} />
							</button>

							{/* Header */}
							<div className="bb-modal-header">
								<div className="bb-pro-badge-row">
									<span className="bb-badge-pro bb-badge-pro-icon">
										<DynamicIcon name="bolt" size={12} className="bb-icon-pro" />
										PRO
									</span>
									<span className="bb-modal-coming-soon">
										{__( "Coming soon", "boostify-blocks" )}
									</span>
								</div>

								<Dialog.Title as="h3" className="bb-modal-title">
									{modalTitle}
								</Dialog.Title>

								<p className="bb-modal-desc">
									{__(
										"Boostify Pro brings powerful WooCommerce superpowers including Popup Builder, Mega Menu, Dynamic Content, and Pricing Tables. Join the waitlist for early access and product updates.",
										"boostify-blocks"
									)}
								</p>
							</div>

							{/* Content */}
							<div>
								{isSubscribed ? (
									<div className="bb-modal-success">
										<DynamicIcon name="check_circle" size={22} className="bb-icon-success" />
										<div className="bb-modal-success-col">
											<div className="bb-modal-success-title">
												{__( "You're already on the waitlist!", "boostify-blocks" )}
											</div>
											<div className="bb-modal-success-desc">
												{__(
													"We'll email you with early access and updates when Boostify Pro is ready.",
													"boostify-blocks"
												)}
											</div>
										</div>
									</div>
								) : (
									<form onSubmit={handleSubmit} className="bb-modal-form">
										{/* Honeypot field for spam prevention */}
										<input
											type="text"
											name="website"
											value={websiteHoneypot}
											onChange={(e) => setWebsiteHoneypot(e.target.value)}
											className="bb-honeypot"
											tabIndex={-1}
											autoComplete="off"
										/>

										<div className="bb-modal-form-row">
											<input
												id="bb-notify-email"
												type="email"
												required
												aria-label={__( "Email address", "boostify-blocks" )}
												placeholder="you@example.com"
												value={email}
												onChange={(e) => {
													setEmail(e.target.value);
													if (errorMessage) setErrorMessage("");
												}}
												disabled={isSubmitting}
												className="bb-modal-input"
											/>

											<button
												type="submit"
												disabled={isSubmitting}
												className="bb-modal-btn-submit"
											>
												{isSubmitting && (
													<svg
														className="animate-spin h-4 w-4 text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
													>
														<circle
															className="opacity-25"
															cx="12"
															cy="12"
															r="10"
															stroke="currentColor"
															strokeWidth="4"
														/>
														<path
															className="opacity-75"
															fill="currentColor"
															d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
														/>
													</svg>
												)}
												{isSubmitting
													? __( "Subscribing...", "boostify-blocks" )
													: __( "Notify me", "boostify-blocks" )}
											</button>
										</div>

										{errorMessage && (
											<div className="bb-modal-error">
												{errorMessage}
											</div>
										)}

										<p className="bb-modal-note">
											{__(
												"Your email is sent to woostify.com solely to notify you when Boostify Pro is released. No spam, ever.",
												"boostify-blocks"
											)}
										</p>
									</form>
								)}
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default NotifyMeModal;

