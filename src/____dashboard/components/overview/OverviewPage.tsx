import React, { FC, useState, Fragment } from "react";
import { __ } from "@wordpress/i18n";
import { Dialog, Transition } from "@headlessui/react";
import DynamicIcon from "../common/DynamicIcon";
import toast from "react-hot-toast";
import { postAjax } from "../../utils/ajax";
import { DashboardMeta, ChangelogItem } from "../../types";

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

	const urls = meta?.urls || {
		support: "https://woostify.com/contact/",
		newPage: "post-new.php?post_type=page",
		docs: "https://woostify.com/docs/",
		community: "https://www.facebook.com/groups/woostify",
		rate: "https://wordpress.org/support/plugin/boostify-blocks/reviews/#new-post",
		demoBase: "https://woostify.com/boostify-blocks",
	};

	const activePct = totalBlocksCount > 0 ? Math.round((activeBlocksCount / totalBlocksCount) * 100) : 0;

	const handleWaitlistSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email || !email.includes("@")) {
			toast.error(__( "Please enter a valid email address.", "boostify-blocks" ));
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
					setInternalSubscribed(true);
					onSubscribed && onSubscribed();
					toast.success(__( "You're on the Pro waitlist!", "boostify-blocks" ));
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
			{/* Page Title */}
			<div className="bb-page-title-group">
				<h1 className="bb-page-title">
					{__( "Welcome to Boostify Blocks", "boostify-blocks" )}
				</h1>
				<div className="bb-page-subtitle">
					{__( "Extra blocks for the WordPress block editor. Turn on what you need, leave off what you don’t.", "boostify-blocks" )}
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
					<section className="bb-overview-card" style={{ gap: "4px" }}>
						<div className="bb-overview-card-header" style={{ paddingBottom: "12px" }}>
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
						{recentChangelogs.map((item, idx) => (
							<div key={item.version} className="bb-changelog-row">
								<div className="bb-changelog-ver">
									{item.version}
								</div>
								<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
									<div className="bb-changelog-title">
										{idx === 0 ? __( "Latest Release Update", "boostify-blocks" ) : __( "Previous Release", "boostify-blocks" )}
									</div>
									<div className="bb-changelog-desc">
										{item.items.join(" · ")}
									</div>
								</div>
							</div>
						))}
					</section>
				</div>

				{/* Right Column (span 1) */}
				<div className="bb-overview-col-side">
					{/* Card 1: Active blocks */}
					<section className="bb-overview-card" style={{ gap: "14px" }}>
						<div style={{ fontSize: "13px", fontWeight: 500, color: "#6b6b78" }}>
							{__( "Active blocks", "boostify-blocks" )}
						</div>
						<div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
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
						<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
							<span className="bb-badge-pro" style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
								<DynamicIcon name="bolt" size={12} />
								PRO
							</span>
							<span style={{ fontSize: "12px", color: "#a9a9b6" }}>
								{__( "Coming soon", "boostify-blocks" )}
							</span>
						</div>
						<div style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.3 }}>
							{__( "More blocks, dynamic content and premium templates.", "boostify-blocks" )}
						</div>
						<div style={{ fontSize: "13px", lineHeight: 1.5, color: "#b9b9c4" }}>
							{__( "Join the waitlist to get early access and product updates.", "boostify-blocks" )}
						</div>

						{isSubscribed ? (
							<div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderRadius: "9px", background: "rgba(255,255,255,0.08)", fontSize: "13px", color: "#a7f3d0" }}>
								<DynamicIcon name="check_circle" size={18} style={{ color: "#34d399", flexShrink: 0 }} />
								<span>{__( "You're on the waitlist! We'll be in touch soon.", "boostify-blocks" )}</span>
							</div>
						) : (
							<form onSubmit={handleWaitlistSubmit} style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
								<input
									type="text"
									name="website"
									value={websiteHoneypot}
									onChange={(e) => setWebsiteHoneypot(e.target.value)}
									style={{ display: "none" }}
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
					<section className="bb-overview-card" style={{ padding: "8px", gap: "4px" }}>
						<a
							href={urls.docs}
							target="_blank"
							rel="noopener noreferrer"
							className="bb-resource-link"
						>
							<DynamicIcon name="menu_book" size={20} />
							<span style={{ flex: 1, fontSize: "14px", fontWeight: 500 }}>
								{__( "Documentation", "boostify-blocks" )}
							</span>
							<DynamicIcon name="arrow_outward" size={16} style={{ color: "#a3a3ae" }} />
						</a>

						<a
							href={urls.community}
							target="_blank"
							rel="noopener noreferrer"
							className="bb-resource-link"
						>
							<DynamicIcon name="forum" size={20} />
							<span style={{ flex: 1, fontSize: "14px", fontWeight: 500 }}>
								{__( "Community support", "boostify-blocks" )}
							</span>
							<DynamicIcon name="arrow_outward" size={16} style={{ color: "#a3a3ae" }} />
						</a>

						<a
							href={urls.rate}
							target="_blank"
							rel="noopener noreferrer"
							className="bb-resource-link"
						>
							<DynamicIcon name="star" size={20} />
							<span style={{ flex: 1, fontSize: "14px", fontWeight: 500 }}>
								{__( "Rate on WordPress.org", "boostify-blocks" )}
							</span>
							<DynamicIcon name="arrow_outward" size={16} style={{ color: "#a3a3ae" }} />
						</a>
					</section>
				</div>
			</div>

			{/* Full Changelog Modal */}
			<Transition.Root show={isChangelogOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-50 overflow-y-auto"
					onClose={setIsChangelogOpen}
				>
					<div className="min-h-screen px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-200"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-150"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity" />
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
							<div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl border border-slate-200">
								<div className="flex items-center justify-between pb-4 border-b border-slate-100">
									<Dialog.Title as="h3" className="text-lg font-bold text-slate-900">
										{__( "Changelog", "boostify-blocks" )}
									</Dialog.Title>
									<button
										type="button"
										onClick={() => setIsChangelogOpen(false)}
										className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
									>
										<DynamicIcon name="close" size={20} style={{ color: "#6b6b78" }} />
									</button>
								</div>

								<div className="mt-4 max-h-[60vh] overflow-y-auto space-y-6 pr-2">
									{changelog.map((entry) => (
										<div
											key={entry.version}
											className="border-b border-slate-100 pb-4 last:border-b-0"
										>
											<div className="flex items-center gap-2 mb-2">
												<span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-blue-50 text-blue-700">
													v{entry.version}
												</span>
											</div>
											<ul className="space-y-1.5 pl-5 text-sm text-slate-600 list-disc marker:text-slate-400">
												{entry.items.map((bullet, idx) => (
													<li key={idx} className="leading-relaxed">
														{bullet}
													</li>
												))}
											</ul>
										</div>
									))}
								</div>

								<div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
									<button
										type="button"
										onClick={() => setIsChangelogOpen(false)}
										className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl cursor-pointer"
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
