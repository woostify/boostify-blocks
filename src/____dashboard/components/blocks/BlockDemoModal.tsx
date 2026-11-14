import React, { FC, Fragment, useState, useEffect, useRef, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { __ } from "@wordpress/i18n";
import toast from "react-hot-toast";
import {
	ArrowPathIcon,
	ArrowTopRightOnSquareIcon,
	CheckIcon,
	ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import DynamicIcon from "../common/DynamicIcon";
import DevicePreviewSwitcher from "../common/DevicePreviewSwitcher";
import BlockDemoViewport from "./BlockDemoViewport";
import BlockDemoFallback from "./BlockDemoFallback";
import { useLiveDemoPreview } from "../../hooks/useLiveDemoPreview";
import { copyTextToClipboard } from "../../utils/clipboard";
import { PreviewDevice, RemoteDemoPattern, UnifiedBlockItem } from "../../types";

const DEMO_PREVIEW_DEVICES: PreviewDevice[] = ["desktop", "mobile"];

interface BlockDemoModalProps {
	isOpen: boolean;
	block: UnifiedBlockItem | null;
	remotePatterns: RemoteDemoPattern[];
	demosVersion?: number;
	breakpoints?: {
		tablet?: number;
		desktop?: number;
	};
	isLoading: boolean;
	onClose: () => void;
	onRefresh: () => void;
	onToggleBlock: (id: string, nextStatus: "enabled" | "disabled") => void;
}

const BlockDemoModal: FC<BlockDemoModalProps> = ({
	isOpen,
	block,
	remotePatterns,
	demosVersion = 0,
	breakpoints,
	isLoading,
	onClose,
	onRefresh,
	onToggleBlock,
}) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [failedImageIds, setFailedImageIds] = useState<Record<string, boolean>>({});
	const [isCopied, setIsCopied] = useState(false);
	const [device, setDevice] = useState<PreviewDevice>("desktop");
	const [viewMode, setViewMode] = useState<"live" | "image">("live");
	const [zoomMode, setZoomMode] = useState<"fit" | "full">("fit");

	const modalDialogRef = useRef<HTMLDivElement | null>(null);
	const demoStageRef = useRef<HTMLDivElement | null>(null);
	const copyResetTimerRef = useRef<number | null>(null);

	const resetStageScroll = useCallback(() => {
		if (demoStageRef.current) {
			demoStageRef.current.scrollTop = 0;
		}
	}, []);

	useEffect(() => {
		setActiveIndex(0);
		setFailedImageIds({});
		setIsCopied(false);
		setDevice("desktop");
		setViewMode("live");
		setZoomMode("fit");
		resetStageScroll();
	}, [block?.id, remotePatterns, resetStageScroll]);

	useEffect(() => {
		if (!isOpen) {
			setDevice("desktop");
			setViewMode("live");
			setZoomMode("fit");
		}
	}, [isOpen]);

	useEffect(() => {
		setIsCopied(false);
		setViewMode("live");
		setZoomMode("fit");
		resetStageScroll();
	}, [activeIndex, resetStageScroll]);

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

	const {
		stageContainerRef,
		iframeRef,
		hasPatternMarkup,
		patternCacheKey,
		activeLiveHtml,
		isPreviewFetching,
		isIframeReady,
		deviceWidths,
		stageWidth,
		stageHeight,
		iframeHeight,
		handleIframeLoad,
	} = useLiveDemoPreview({
		isOpen,
		isLoading,
		blockId: block?.id,
		demoKey: block?.demoKey,
		activePattern,
		demosVersion,
		device,
		viewMode,
		breakpoints,
		stageViewportRef: demoStageRef,
	});

	const activeMode: "live" | "image" | "fallback" = activeLiveHtml
		? viewMode === "image" && hasValidRemoteImage
			? "image"
			: "live"
		: hasValidRemoteImage
		? "image"
		: "fallback";

	const isEnabled = block?.status === "enabled";

	const handleSelectDevice = (nextDevice: PreviewDevice) => {
		setDevice(nextDevice);
		setZoomMode("fit");
		if (viewMode === "image" && activeLiveHtml) {
			setViewMode("live");
		}
	};

	const handleCopyBlock = async () => {
		if (!block) return;

		const markup =
			hasPatternMarkup && activePattern?.content
				? activePattern.content.trim()
				: `<!-- wp:${block.name} /-->`;

		const copied = await copyTextToClipboard(markup, modalDialogRef.current);
		if (copied) {
			setIsCopied(true);
			if (copyResetTimerRef.current) {
				window.clearTimeout(copyResetTimerRef.current);
			}
			copyResetTimerRef.current = window.setTimeout(() => {
				setIsCopied(false);
			}, 2000);
			toast.success(
				hasPatternMarkup
					? __("Pattern markup copied!", "boostify-blocks")
					: __("Block markup copied!", "boostify-blocks")
			);
		} else {
			toast.error(__("Could not copy to clipboard.", "boostify-blocks"));
		}
	};

	const renderBody = () => {
		if (!block) return null;

		if (isLoading) {
			return (
				<div className="bb-demo-loading">
					<div className="bb-demo-spinner" aria-hidden="true" />
					<span>{__("Loading preview...", "boostify-blocks")}</span>
				</div>
			);
		}

		if (activePattern && (activeLiveHtml || hasValidRemoteImage || isPreviewFetching)) {
			return (
				<BlockDemoViewport
					isOpen={isOpen}
					blockTitle={block.title}
					patterns={remotePatterns}
					safeIndex={safeIndex}
					onSelectIndex={setActiveIndex}
					activePattern={activePattern}
					device={device}
					deviceWidths={deviceWidths}
					stageContainerRef={stageContainerRef}
					stageWidth={stageWidth}
					stageHeight={stageHeight}
					zoomMode={zoomMode}
					onToggleZoomMode={() => setZoomMode((prev) => (prev === "fit" ? "full" : "fit"))}
					iframeRef={iframeRef}
					iframeHeight={iframeHeight}
					isIframeReady={isIframeReady}
					onIframeLoad={handleIframeLoad}
					patternCacheKey={patternCacheKey}
					activeLiveHtml={activeLiveHtml}
					isPreviewFetching={isPreviewFetching}
					hasValidRemoteImage={hasValidRemoteImage}
					activeMode={activeMode}
					viewMode={viewMode}
					onChangeViewMode={setViewMode}
					onImageError={() =>
						setFailedImageIds((prev) => ({
							...prev,
							[activeImageKey]: true,
						}))
					}
				/>
			);
		}

		return (
			<BlockDemoFallback
				demoKey={block.demoKey}
				title={block.title}
				description={block.description}
				device={device}
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
											<DevicePreviewSwitcher
												device={device}
												onChange={handleSelectDevice}
												devices={DEMO_PREVIEW_DEVICES}
												deviceWidths={deviceWidths}
											/>

											<button
												type="button"
												onClick={onRefresh}
												disabled={isLoading}
												title={__("Refresh preview", "boostify-blocks")}
												aria-label={__("Refresh preview", "boostify-blocks")}
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
												title={__("Close", "boostify-blocks")}
												aria-label={__("Close", "boostify-blocks")}
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
									<div ref={demoStageRef} className="bb-demo-stage">{renderBody()}</div>

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
													? __("Enabled on this site", "boostify-blocks")
													: __("Disabled. Turn on to use it in the editor.", "boostify-blocks")}
											</span>
										</div>

										<div className="bb-demo-footer-actions">
											{(Boolean(activeLiveHtml) || hasValidRemoteImage) && activePattern?.link && (
												<a
													href={activePattern.link}
													target="_blank"
													rel="noopener noreferrer"
													className="bb-demo-action-btn"
												>
													<span>{__("View live demo", "boostify-blocks")}</span>
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
															? __("Copied!", "boostify-blocks")
															: __("Copy block", "boostify-blocks")}
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
