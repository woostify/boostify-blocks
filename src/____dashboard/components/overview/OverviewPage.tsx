import React, { FC, useState, Fragment } from "react";
import { __ } from "@wordpress/i18n";
import { Dialog, Transition } from "@headlessui/react";
import DynamicIcon from "../common/DynamicIcon";
import toast from "react-hot-toast";
import { isValidEmail, subscribeToProWaitlist } from "../../utils/ajax";
import { DashboardMeta, ChangelogItem } from "../../types";
import { DEFAULT_URLS } from "../../data/constants";

interface OverviewPageProps {
	meta?: DashboardMeta;
	activeBlocksCount: number;
	totalBlocksCount: number;
	onGoToBlocks: () => void;
	isSubscribed?: boolean;
	onSubscribed?: () => void;
}

const OverviewPage: FC<OverviewPageProps> = ({
	meta,
	activeBlocksCount,
	totalBlocksCount,
	onGoToBlocks,
	isSubscribed: isSubscribedProp,
	onSubscribed,
}) => {
	const ACCENT_COLOR = "#635bff";
	const [isChangelogOpen, setIsChangelogOpen] = useState(false);

	// Waitlist form state
	const [email, setEmail] = useState("");
	const [websiteHoneypot, setWebsiteHoneypot] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [internalSubscribed, setInternalSubscribed] = useState(meta?.isWaitlistSubscribed ?? false);
	const isSubscribed = isSubscribedProp !== undefined ? isSubscribedProp : internalSubscribed;

	const changelog = meta?.changelog || [];
	const recentChangelogs = changelog.slice(0, 2);

	const urls = meta?.urls || DEFAULT_URLS;

	const activePct = totalBlocksCount > 0 ? Math.round((activeBlocksCount / totalBlocksCount) * 100) : 0;

	const handleWaitlistSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!isValidEmail(email)) {
			toast.error(__( "Please enter a valid email address.", "boostify-blocks" ));
			return;
		}

		setIsSubmitting(true);

		subscribeToProWaitlist({
			email,
			website: websiteHoneypot,
		})
			.then((response: any) => {
				setIsSubmitting(false);
				if (response?.success) {
					setInternalSubscribed(true);
					onSubscribed && onSubscribed();
					toast.success(__( "You're on the Pro waitlist! We'll be in touch soon.", "boostify-blocks" ));
				} else {
					toast.error(response?.data?.message || __( "Subscription failed. Please try again.", "boostify-blocks" ));
				}
			})
			.catch((err: any) => {
				setIsSubmitting(false);
				const msg =
					err?.message ||
					__( "Unable to connect to the waitlist service. Please try again.", "boostify-blocks" );
				toast.error(msg);
			});
	};

	return (
		<main className="bb-page-container">
			{/* Page Header */}
			<div className="bb-page-header">
				<div className="bb-page-title-group">
					<h1 className="bb-page-title">
						{__( "Welcome to Boostify Blocks", "boostify-blocks" )}
					</h1>
					<div className="bb-page-subtitle">
						{__( "Extra blocks for the WordPress block editor. Turn on what you need, leave off what you don’t.", "boostify-blocks" )}
					</div>
				</div>
			</div>

			{/* 2-Column Asymmetric Grid (2fr / 1fr) */}
			<div className="bb-overview-grid">
				{/* Left Column (span 2) */}
				<div className="bb-overview-col-main">
					{/* Section 1: Get started */}
					<section className="bb-overview-card">
						<div className="bb-overview-card-header">
							<h2 className="bb-overview-card-title">
								{__( "Get started", "boostify-blocks" )}
							</h2>
							<a
								href={urls.docs}
								target="_blank"
								rel="noopener noreferrer"
								className="bb-link-arrow"
							>
								<span>{__( "Read the guide", "boostify-blocks" )}</span>
								<DynamicIcon name="arrow_outward" size={15} />
							</a>
						</div>

						{/* 3 Step Boxes */}
						<div className="bb-step-grid">
							{/* Step 01 */}
							<div className="bb-step-box">
								<div className="bb-step-num">01</div>
								<div className="bb-step-title">
									{__( "Pick your blocks", "boostify-blocks" )}
								</div>
								<div className="bb-step-desc">
									{__( "Enable only what your site uses to keep the editor clean and fast.", "boostify-blocks" )}
								</div>
							</div>

							{/* Step 02 */}
							<div className="bb-step-box">
								<div className="bb-step-num">02</div>
								<div className="bb-step-title">
									{__( "Open the editor", "boostify-blocks" )}
								</div>
								<div className="bb-step-desc">
									{__( "Type", "boostify-blocks" )}{" "}
									<span className="bb-code-inline">
										/boostify
									</span>{" "}
									{__( "or find the Boostify category in the inserter.", "boostify-blocks" )}
								</div>
							</div>

							{/* Step 03 */}
							<div className="bb-step-box">
								<div className="bb-step-num">03</div>
								<div className="bb-step-title">
									{__( "Style it your way", "boostify-blocks" )}
								</div>
								<div className="bb-step-desc">
									{__( "Every block has layout, typography and color controls in the sidebar.", "boostify-blocks" )}
								</div>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="bb-btn-group">
							<a
								href={urls.newPage}
								className="bb-btn-primary"
							>
								<DynamicIcon name="add" size={18} />
								<span>{__( "Create a new page", "boostify-blocks" )}</span>
							</a>
							<button
								type="button"
								onClick={onGoToBlocks}
								className="bb-btn-outline"
							>
								{__( "Manage blocks", "boostify-blocks" )}
							</button>
						</div>
					</section>

					{/* Section 2: What's new */}
					<section className="bb-overview-card bb-card-compact">
						<div className="bb-overview-card-header bb-header-tight">
							<h2 className="bb-overview-card-title">
								{__( "What’s new", "boostify-blocks" )}
							</h2>
							{changelog.length > 0 && (
								<button
									type="button"
									onClick={() => setIsChangelogOpen(true)}
									className="bb-link-arrow"
								>
									<span>{__( "Full changelog", "boostify-blocks" )}</span>
									<DynamicIcon name="arrow_outward" size={15} />
								</button>
							)}
						</div>

						{/* Changelog Entries */}
						{recentChangelogs.length === 0 ? (
							<div className="bb-changelog-empty">
								{__( "No changelog entries found.", "boostify-blocks" )}
							</div>
						) : (
							recentChangelogs.map((item, idx) => (
								<div key={item.version} className="bb-changelog-row">
									<div className="bb-changelog-ver">
										{item.version}
									</div>
									<div className="bb-changelog-col">
										<div className="bb-changelog-title">
											{idx === 0 ? __( "Latest Release Update", "boostify-blocks" ) : __( "Previous Release", "boostify-blocks" )}
										</div>
										<div className="bb-changelog-desc">
											{item.items.join(" · ")}
										</div>
									</div>
								</div>
							))
						)}
					</section>
				</div>

				{/* Right Column (span 1) */}
				<div className="bb-overview-col-side">
					{/* Card 1: Active blocks */}
					<section className="bb-overview-card bb-card-stat">
						<div className="bb-stat-title">
							{__( "Active blocks", "boostify-blocks" )}
						</div>
						<div className="bb-stat-row">
							<div className="bb-stat-number">
								{activeBlocksCount}
							</div>
							<div className="bb-stat-label">
								{__( "of", "boostify-blocks" )} {totalBlocksCount}
							</div>
						</div>
						<div className="bb-progress-bar">
							<div
								className="bb-progress-bar-fill"
								style={{ width: `${activePct}%` }}
							/>
						</div>
						<button
							type="button"
							onClick={onGoToBlocks}
							className="bb-link-arrow"
						>
							<span>{__( "Manage blocks", "boostify-blocks" )}</span>
							<DynamicIcon name="arrow_forward" size={16} />
						</button>
					</section>

					{/* Card 2: PRO - Coming soon */}
					<section className="bb-pro-banner">
						<div className="bb-pro-badge-row">
							<span className="bb-badge-pro bb-badge-pro-icon">
								<DynamicIcon name="bolt" size={12} />
								PRO
							</span>
							<span className="bb-pro-coming-soon">
								{__( "Coming soon", "boostify-blocks" )}
							</span>
						</div>
						<div className="bb-pro-title">
							{__( "More blocks, dynamic content and premium templates.", "boostify-blocks" )}
						</div>
						<div className="bb-pro-desc">
							{__( "Join the waitlist to get early access and product updates.", "boostify-blocks" )}
						</div>

						{isSubscribed ? (
							<div className="bb-pro-success">
								<DynamicIcon name="check_circle" size={18} className="bb-icon-success" />
								<span>{__( "You're on the waitlist! We'll be in touch soon.", "boostify-blocks" )}</span>
							</div>
						) : (
							<form onSubmit={handleWaitlistSubmit} className="bb-pro-form">
								<input
									type="text"
									name="website"
									value={websiteHoneypot}
									onChange={(e) => setWebsiteHoneypot(e.target.value)}
									className="bb-honeypot"
									tabIndex={-1}
									autoComplete="off"
								/>
								<input
									type="email"
									required
									placeholder="you@example.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									disabled={isSubmitting}
									className="bb-pro-input"
								/>
								<button
									type="submit"
									disabled={isSubmitting}
									className="bb-pro-btn"
								>
									{isSubmitting ? __( "Sending...", "boostify-blocks" ) : __( "Notify me", "boostify-blocks" )}
								</button>
							</form>
						)}
					</section>

					{/* Card 3: Resources */}
					<section className="bb-overview-card bb-card-resources">
						<a
							href={urls.docs}
							target="_blank"
							rel="noopener noreferrer"
							className="bb-resource-link"
						>
							<DynamicIcon name="menu_book" size={20} />
							<span className="bb-resource-label">
								{__( "Documentation", "boostify-blocks" )}
							</span>
							<DynamicIcon name="arrow_outward" size={16} className="bb-icon-muted" />
						</a>

						<a
							href={urls.community}
							target="_blank"
							rel="noopener noreferrer"
							className="bb-resource-link"
						>
							<DynamicIcon name="forum" size={20} />
							<span className="bb-resource-label">
								{__( "Community support", "boostify-blocks" )}
							</span>
							<DynamicIcon name="arrow_outward" size={16} className="bb-icon-muted" />
						</a>

						<a
							href={urls.rate}
							target="_blank"
							rel="noopener noreferrer"
							className="bb-resource-link"
						>
							<DynamicIcon name="star" size={20} />
							<span className="bb-resource-label">
								{__( "Rate on WordPress.org", "boostify-blocks" )}
							</span>
							<DynamicIcon name="arrow_outward" size={16} className="bb-icon-muted" />
						</a>
					</section>
				</div>
			</div>

			{/* Full Changelog Modal */}
			<Transition.Root show={isChangelogOpen} as={Fragment}>
				<Dialog
					as="div"
					className="bb-modal-root"
					onClose={() => setIsChangelogOpen(false)}
				>
					<div className="bb-modal-container">
						{/* Backdrop */}
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-200"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-150"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="bb-modal-overlay" />
						</Transition.Child>

						{/* Element to center modal */}
						<span className="bb-modal-center-trick" aria-hidden="true">
							&#8203;
						</span>

						{/* Modal Dialog */}
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-200"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-150"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="bb-modal-dialog bb-modal-changelog">
								<div className="bb-cl-header">
									<Dialog.Title as="h3" className="bb-cl-title">
										{__( "Changelog", "boostify-blocks" )}
									</Dialog.Title>
									<button
										type="button"
										onClick={() => setIsChangelogOpen(false)}
										className="bb-cl-close"
										title={__( "Close", "boostify-blocks" )}
									>
										<DynamicIcon name="close" size={20} />
									</button>
								</div>

								<div className="bb-cl-body">
									{changelog.map((entry, entryIdx) => (
										<div
											key={entry.version}
											className="bb-cl-entry"
										>
											<div className="bb-cl-version-row">
												<span className="bb-cl-badge">
													v{entry.version}
												</span>
												{entryIdx === 0 && (
													<span className="bb-cl-badge-latest">
														{__( "Latest", "boostify-blocks" )}
													</span>
												)}
											</div>
											<ul className="bb-cl-list">
												{entry.items.map((bullet, idx) => (
													<li key={idx} className="bb-cl-item">
														{bullet}
													</li>
												))}
											</ul>
										</div>
									))}
								</div>

								<div className="bb-cl-footer">
									<button
										type="button"
										onClick={() => setIsChangelogOpen(false)}
										className="bb-cl-btn-close"
									>
										{__( "Close", "boostify-blocks" )}
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</main>
	);
};

export default OverviewPage;
