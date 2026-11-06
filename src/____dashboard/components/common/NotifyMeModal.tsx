import React, { FC, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { __, sprintf } from "@wordpress/i18n";
import DynamicIcon from "./DynamicIcon";
import toast from "react-hot-toast";
import { postAjax } from "../../utils/ajax";

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

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setErrorMessage("");

		if (!email || !email.includes("@")) {
			setErrorMessage(__( "Please enter a valid email address.", "boostify-blocks" ));
			return;
		}

		setIsSubmitting(true);

		postAjax({
			action: "boostify_blocks_waitlist_subscribe",
			data: {
				email,
				website: websiteHoneypot,
			},
			timeout: 15000,
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

					<span className="inline-block h-screen align-middle" aria-hidden="true">
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
						<div className="bb-modal-dialog">
							{/* Close Button */}
							<button
								type="button"
								onClick={onClose}
								className="bb-modal-close"
								aria-label={__( "Close modal", "boostify-blocks" )}
							>
								<DynamicIcon name="close" size={20} />
							</button>

							{/* Header */}
							<div className="bb-modal-header">
								<div className="bb-modal-tag-pro">
									<DynamicIcon name="bolt" size={13} style={{ color: "#b45309" }} />
									{__( "PRO COMING SOON", "boostify-blocks" )}
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
										<DynamicIcon name="check_circle" size={24} style={{ color: "#059669", flexShrink: 0 }} />
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
										<div className="bb-modal-field">
											<label htmlFor="bb-notify-email" className="bb-modal-label">
												{__( "Email address", "boostify-blocks" )}
											</label>
											<input
												id="bb-notify-email"
												type="email"
												required
												placeholder="you@example.com"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												disabled={isSubmitting}
												className="bb-modal-input"
											/>
										</div>

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

										{errorMessage && (
											<div className="bb-modal-error">
												{errorMessage}
											</div>
										)}

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

