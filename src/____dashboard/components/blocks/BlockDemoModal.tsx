import React, { FC, Fragment, useState, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { __ } from "@wordpress/i18n";
import toast from "react-hot-toast";
import {
	ArrowPathIcon,
	ArrowTopRightOnSquareIcon,
	CheckIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import DynamicIcon from "../common/DynamicIcon";
import BlockDemoFallback from "./BlockDemoFallback";
import { RemoteDemoPattern, UnifiedBlockItem } from "../../types";

interface BlockDemoModalProps {
	isOpen: boolean;
	block: UnifiedBlockItem | null;
	remotePatterns: RemoteDemoPattern[];
	isLoading: boolean;
	onClose: () => void;
	onRefresh: () => void;
	onToggleBlock: (id: string, nextStatus: "enabled" | "disabled") => void;
}

/**
 * Fallback clipboard helper that works on HTTP origins (e.g. *.local) and stays
 * inside Headless UI Dialog's FocusTrap by appending the textarea inside container.
 */
function copyTextExecCommand(text: string, container?: HTMLElement | null): boolean {
	const textarea = document.createElement("textarea");
	textarea.value = text;
	textarea.setAttribute("readonly", "");
	textarea.style.position = "fixed";
	textarea.style.top = "-9999px";
	textarea.style.left = "-9999px";
	textarea.style.opacity = "0";

	const host = container || document.body;
	host.appendChild(textarea);

	const previousActive = document.activeElement as HTMLElement | null;
	textarea.focus({ preventScroll: true });
	textarea.select();
	textarea.setSelectionRange(0, text.length);

	let copied = false;
	try {
		copied = document.execCommand("copy");
	} catch {
		copied = false;
	}

	host.removeChild(textarea);
	if (previousActive && typeof previousActive.focus === "function") {
		previousActive.focus({ preventScroll: true });
	}
	return copied;
}

const BlockDemoModal: FC<BlockDemoModalProps> = ({
	isOpen,
	block,
	remotePatterns,
	isLoading,
	onClose,
	onRefresh,
	onToggleBlock,
}) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [failedImageIds, setFailedImageIds] = useState<Record<string, boolean>>({});
	const [isCopied, setIsCopied] = useState(false);

	const modalDialogRef = useRef<HTMLDivElement | null>(null);
	const copyResetTimerRef = useRef<number | null>(null);

	useEffect(() => {
		setActiveIndex(0);
		setFailedImageIds({});
		setIsCopied(false);
	}, [block?.id, remotePatterns.length]);

	useEffect(() => {
		setIsCopied(false);
	}, [activeIndex]);

	useEffect(() => {
		return () => {
			if (copyResetTimerRef.current) {
				window.clearTimeout(copyResetTimerRef.current);
			}
		};
	}, []);

	const safeIndex = remotePatterns.length > 0 ? Math.min(activeIndex, remotePatterns.length - 1) : 0;
	const activePattern = remotePatterns[safeIndex] || null;
	const activeImageKey = activePattern ? `${activePattern.id}-${activePattern.imageUrl}` : "";
	const hasValidRemoteImage = Boolean(
		activePattern && activePattern.imageUrl && !failedImageIds[activeImageKey]
	);
	const hasPatternContent = Boolean(hasValidRemoteImage && activePattern?.content?.trim());

	const isEnabled = block?.status === "enabled";

	const handleCopyBlock = async () => {
		if (!block) return;

		const markup = hasPatternContent && activePattern?.content
			? activePattern.content.trim()
			: `<!-- wp:${block.name} /-->`;

		let copied = false;
		if (typeof navigator !== "undefined" && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
			try {
				await navigator.clipboard.writeText(markup);
				copied = true;
			} catch {
				copied = false;
			}
		}

		if (!copied) {
			copied = copyTextExecCommand(markup, modalDialogRef.current);
		}

		if (copied) {
			setIsCopied(true);
			if (copyResetTimerRef.current) {
				window.clearTimeout(copyResetTimerRef.current);
			}
			copyResetTimerRef.current = window.setTimeout(() => {
				setIsCopied(false);
			}, 2000);
			toast.success(
				hasPatternContent
					? __( "Pattern markup copied!", "boostify-blocks" )
					: __( "Block markup copied!", "boostify-blocks" )
			);
		} else {
			toast.error(__( "Could not copy to clipboard.", "boostify-blocks" ));
		}
	};

	const renderBody = () => {
		if (!block) return null;

		if (isLoading) {
			return (
				<div className="bb-demo-loading">
					<div className="bb-demo-spinner" aria-hidden="true" />
					<span>{__( "Loading preview...", "boostify-blocks" )}</span>
				</div>
			);
		}

		if (hasValidRemoteImage && activePattern) {
			return (
				<div className="bb-demo-card">
					{remotePatterns.length > 1 && (
						<div className="bb-demo-pattern-bar">
							<div className="bb-demo-pattern-pills">
								{remotePatterns.map((pat, idx) => (
									<button
										key={`${pat.id}-${idx}`}
										type="button"
										onClick={() => setActiveIndex(idx)}
										className={`bb-demo-pattern-pill ${idx === safeIndex ? "is-active" : ""}`}
									>
										{pat.title || `#${idx + 1}`}
									</button>
								))}
							</div>
							<div className="bb-demo-pattern-nav">
								<button
									type="button"
									onClick={() =>
										setActiveIndex((safeIndex - 1 + remotePatterns.length) % remotePatterns.length)
									}
									className="bb-demo-nav-arrow"
									aria-label={__( "Previous pattern", "boostify-blocks" )}
								>
									<ChevronLeftIcon width={15} height={15} />
								</button>
								<span className="bb-demo-nav-counter">
									{safeIndex + 1} / {remotePatterns.length}
								</span>
								<button
									type="button"
									onClick={() => setActiveIndex((safeIndex + 1) % remotePatterns.length)}
									className="bb-demo-nav-arrow"
									aria-label={__( "Next pattern", "boostify-blocks" )}
								>
									<ChevronRightIcon width={15} height={15} />
								</button>
							</div>
						</div>
					)}

					<div className="bb-demo-image-wrap">
						<img
							src={activePattern.imageUrl}
							alt={activePattern.title || block.title}
							className="bb-demo-image"
							onError={() =>
								setFailedImageIds((prev) => ({
									...prev,
									[activeImageKey]: true,
								}))
							}
						/>
					</div>

					<div className="bb-demo-caption">
						<span className="bb-demo-caption-title">{activePattern.title}</span>
						{activePattern.category && (
							<span className="bb-demo-caption-badge">{activePattern.category}</span>
						)}
					</div>
				</div>
			);
		}

		return (
			<BlockDemoFallback
				demoKey={block.demoKey}
				title={block.title}
				description={block.description}
			/>
		);
	};

	return (
		<Transition.Root show={isOpen && !!block} as={Fragment}>
			<Dialog as="div" className="bb-modal-root" onClose={onClose}>
				<div className="bb-modal-container bb-demo-modal-container">
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

					<Transition.Child
						as={Fragment}
						enter="ease-out duration-200"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-150"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<div ref={modalDialogRef} className="bb-modal-dialog bb-modal-demo">
							{block && (
								<>
									{/* Header */}
									<div className="bb-demo-header">
										<div className="bb-demo-header-left">
											<div className="bb-demo-icon-tile">
												<DynamicIcon name={block.icon} blockName={block.name} size={20} />
											</div>
											<div className="bb-demo-title-wrap">
												<Dialog.Title as="h3" className="bb-demo-title">
													{block.title}
												</Dialog.Title>
												<div className="bb-demo-category">{block.category}</div>
											</div>
										</div>

										<div className="bb-demo-header-actions">
											<button
												type="button"
												onClick={onRefresh}
												disabled={isLoading}
												title={__( "Refresh preview", "boostify-blocks" )}
												aria-label={__( "Refresh preview", "boostify-blocks" )}
												className="bb-demo-icon-btn"
											>
												<ArrowPathIcon
													width={17}
													height={17}
													className={isLoading ? "bb-demo-spin" : ""}
												/>
											</button>

											<button
												type="button"
												onClick={onClose}
												title={__( "Close", "boostify-blocks" )}
												aria-label={__( "Close", "boostify-blocks" )}
												className="bb-demo-icon-btn"
											>
												<DynamicIcon name="close" size={18} />
											</button>
										</div>
									</div>

									{/* Description bar */}
									{block.description && (
										<div className="bb-demo-desc-bar">{block.description}</div>
									)}

									{/* Preview Stage */}
									<div className="bb-demo-stage">{renderBody()}</div>

									{/* Footer */}
									<div className="bb-demo-footer">
										<div className="bb-demo-footer-status">
											<button
												type="button"
												role="switch"
												aria-checked={isEnabled}
												onClick={() =>
													onToggleBlock(block.id, isEnabled ? "disabled" : "enabled")
												}
												className="bb-switch"
											>
												<span className="bb-switch-thumb" />
											</button>
											<span className="bb-demo-status-label">
												{isEnabled
													? __( "Enabled on this site", "boostify-blocks" )
													: __( "Disabled. Turn on to use it in the editor.", "boostify-blocks" )}
											</span>
										</div>

										<div className="bb-demo-footer-actions">
											{hasValidRemoteImage && activePattern?.link && (
												<a
													href={activePattern.link}
													target="_blank"
													rel="noopener noreferrer"
													className="bb-demo-action-btn"
												>
													<span>{__( "View live demo", "boostify-blocks" )}</span>
													<ArrowTopRightOnSquareIcon width={15} height={15} />
												</a>
											)}

											{!block.isExtension && !block.isPro && (
												<button
													type="button"
													onClick={handleCopyBlock}
													className={`bb-demo-action-btn ${isCopied ? "is-copied" : ""}`}
												>
													{isCopied ? (
														<CheckIcon width={16} height={16} />
													) : (
														<ClipboardDocumentIcon width={16} height={16} />
													)}
													<span>
														{isCopied
															? __( "Copied!", "boostify-blocks" )
															: __( "Copy block", "boostify-blocks" )}
													</span>
												</button>
											)}
										</div>
									</div>
								</>
							)}
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default BlockDemoModal;
