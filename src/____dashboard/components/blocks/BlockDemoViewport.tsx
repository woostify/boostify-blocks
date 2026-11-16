import React, { FC } from "react";
import { __ } from "@wordpress/i18n";
import BlockDemoPatternBar from "./BlockDemoPatternBar";
import { PreviewDevice, RemoteDemoPattern } from "../../types";

interface BlockDemoViewportProps {
	isOpen: boolean;
	blockTitle: string;
	patterns: RemoteDemoPattern[];
	safeIndex: number;
	onSelectIndex: React.Dispatch<React.SetStateAction<number>>;
	activePattern: RemoteDemoPattern;
	device: PreviewDevice;
	deviceWidths: Record<PreviewDevice, number>;
	stageContainerRef: React.RefObject<HTMLDivElement>;
	stageWidth: number;
	stageHeight: number;
	zoomMode: "fit" | "full";
	onToggleZoomMode: () => void;
	iframeRef: React.RefObject<HTMLIFrameElement>;
	iframeHeight: number;
	isIframeReady: boolean;
	onIframeLoad: () => void;
	patternCacheKey: string;
	activeLiveHtml: string;
	isPreviewFetching: boolean;
	hasValidRemoteImage: boolean;
	activeMode: "live" | "image" | "fallback";
	viewMode: "live" | "image";
	onChangeViewMode: (mode: "live" | "image") => void;
	onImageError: () => void;
}

/**
 * Renders a pattern card featuring the multi-pattern switcher bar, 2D fit-scaled device live iframe
 * or static image fallback, interactive Fit/Full scale toggle, and Live/Image switch.
 */
const BlockDemoViewport: FC<BlockDemoViewportProps> = ({
	isOpen,
	blockTitle,
	patterns,
	safeIndex,
	onSelectIndex,
	activePattern,
	device,
	deviceWidths,
	stageContainerRef,
	stageWidth,
	stageHeight,
	zoomMode,
	onToggleZoomMode,
	iframeRef,
	iframeHeight,
	isIframeReady,
	onIframeLoad,
	patternCacheKey,
	activeLiveHtml,
	isPreviewFetching,
	hasValidRemoteImage,
	activeMode,
	viewMode,
	onChangeViewMode,
	onImageError,
}) => {
	const borderPx = device === "mobile" ? 4 : 2;
	const targetWidth = deviceWidths[device];
	const outerTargetWidth = targetWidth + borderPx;
	const outerTargetHeight = iframeHeight + borderPx;

	// Fit both width and modal viewport height so full patterns show cleanly in one glance.
	const hasPatternBar = patterns.length > 1;
	const chromeReserve = (hasPatternBar ? 48 : 0) + 106;
	const availableFitHeight = stageHeight > 0 ? Math.max(220, stageHeight - chromeReserve) : 0;

	const widthScale = stageWidth > 0 ? Math.min(1, stageWidth / outerTargetWidth) : 1;
	const heightScale =
		availableFitHeight > 0 && outerTargetHeight > 0
			? availableFitHeight / outerTargetHeight
			: 1;
	const minScaleFloor = device === "mobile" ? 0.62 : 0.48;
	const fitScale = Math.min(1, widthScale, Math.max(minScaleFloor, heightScale));

	const canToggleZoom = fitScale < widthScale - 0.03;
	const scale = zoomMode === "fit" ? fitScale : widthScale;

	const scaledW = Math.round(outerTargetWidth * scale);
	const scaledH = Math.round(outerTargetHeight * scale);

	return (
		<div className="bb-demo-card">
			<BlockDemoPatternBar
				isOpen={isOpen}
				patterns={patterns}
				activeIndex={safeIndex}
				onSelect={onSelectIndex}
			/>

			<div
				ref={stageContainerRef}
				className={`bb-demo-viewport-stage is-device-${device} is-mode-${activeMode}`}
			>
				{isPreviewFetching ? (
					<div className="bb-demo-loading bb-demo-loading-inline">
						<div className="bb-demo-spinner" aria-hidden="true" />
						<span>{__("Preparing live preview...", "boostify-blocks")}</span>
					</div>
				) : activeMode === "live" && activeLiveHtml ? (
					<div
						className="bb-demo-scale-shell"
						style={{
							width: stageWidth > 0 ? `${scaledW}px` : "100%",
							height: isIframeReady ? `${scaledH}px` : "220px",
						}}
					>
						{!isIframeReady && (
							<div className="bb-demo-iframe-loader">
								<div className="bb-demo-spinner" aria-hidden="true" />
							</div>
						)}
						<div
							className={`bb-demo-device-frame is-device-${device} ${isIframeReady ? "is-ready" : "is-measuring"}`}
							style={{
								width: `${outerTargetWidth}px`,
								transform: `scale(${scale})`,
								transformOrigin: "top left",
							}}
						>
							<iframe
								key={patternCacheKey}
								ref={iframeRef}
								srcDoc={activeLiveHtml}
								title={`${activePattern.title || blockTitle} (${device})`}
								sandbox="allow-scripts allow-same-origin"
								onLoad={onIframeLoad}
								className="bb-demo-iframe"
								style={{
									width: `${targetWidth}px`,
									height: `${iframeHeight}px`,
								}}
							/>
						</div>
					</div>
				) : (
					<div className="bb-demo-image-wrap">
						<img
							src={activePattern.imageUrl}
							alt={activePattern.title || blockTitle}
							className="bb-demo-image"
							onError={onImageError}
						/>
					</div>
				)}
			</div>

			<div className="bb-demo-caption">
				<div className="bb-demo-caption-left">
					<span className="bb-demo-caption-title">{activePattern.title}</span>
					{activePattern.category && (
						<span className="bb-demo-caption-badge">{activePattern.category}</span>
					)}
				</div>

				<div className="bb-demo-caption-right">
					{activeMode === "live" && isIframeReady && (
						canToggleZoom ? (
							<button
								type="button"
								onClick={onToggleZoomMode}
								title={
									zoomMode === "fit"
										? __("Click to view full width", "boostify-blocks")
										: __("Click to fit entire preview", "boostify-blocks")
								}
								className={`bb-demo-viewport-meta bb-demo-viewport-meta-btn ${zoomMode === "fit" ? "is-fit" : ""}`}
							>
								{targetWidth}px · {Math.round(scale * 100)}% ({zoomMode === "fit" ? __("Fit", "boostify-blocks") : __("Full", "boostify-blocks")})
							</button>
						) : (
							<span className="bb-demo-viewport-meta">
								{targetWidth}px{scale < 0.99 ? ` (${Math.round(scale * 100)}%)` : ""}
							</span>
						)
					)}

					{activeLiveHtml && hasValidRemoteImage && (
						<div
							className="bb-demo-view-switch"
							role="group"
							aria-label={__("Preview mode", "boostify-blocks")}
						>
							<button
								type="button"
								onClick={() => onChangeViewMode("live")}
								className={`bb-demo-view-btn ${viewMode === "live" ? "is-active" : ""}`}
							>
								{__("Live", "boostify-blocks")}
							</button>
							<button
								type="button"
								onClick={() => onChangeViewMode("image")}
								className={`bb-demo-view-btn ${viewMode === "image" ? "is-active" : ""}`}
							>
								{__("Image", "boostify-blocks")}
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default BlockDemoViewport;
