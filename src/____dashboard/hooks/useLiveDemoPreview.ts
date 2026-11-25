import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { postAjax } from "../utils/ajax";
import { PreviewDevice, RemoteDemoPattern, RenderedDemoPreview } from "../types";

/**
 * Compute preview canvas widths for Desktop, Tablet, and Mobile aligned with plugin media breakpoints.
 */
export function computeDeviceWidths(
	tabletBp = 768,
	desktopBp = 1024
): Record<PreviewDevice, number> {
	const safeTablet = tabletBp > 320 ? tabletBp : 768;
	const safeDesktop = desktopBp > safeTablet ? desktopBp : safeTablet + 1;

	const desktop = Math.max(1200, safeDesktop + 100);
	const tablet =
		safeTablet <= 768 && safeDesktop > 768
			? 768
			: Math.max(
					safeTablet,
					Math.min(safeDesktop - 1, Math.round((safeTablet + safeDesktop) / 2))
			  );
	const mobile = Math.min(390, Math.max(320, safeTablet - 20));

	return { desktop, tablet, mobile };
}

const MAX_PREVIEW_CACHE = 24;

interface UseLiveDemoPreviewParams {
	isOpen: boolean;
	isLoading: boolean;
	blockId?: string;
	demoKey?: string;
	activePattern: RemoteDemoPattern | null;
	demosVersion: number;
	device: PreviewDevice;
	viewMode?: "live" | "image";
	breakpoints?: { tablet?: number; desktop?: number };
	stageViewportRef?: React.RefObject<HTMLDivElement>;
}

/**
 * Handles remote pattern live-HTML preview rendering, bounded per-session caching,
 * 2D Fit-to-Stage measurement, and intrinsic `.wcb-preview-root` height tracking.
 */
export function useLiveDemoPreview({
	isOpen,
	isLoading,
	blockId,
	demoKey,
	activePattern,
	demosVersion,
	device,
	viewMode = "live",
	breakpoints,
	stageViewportRef,
}: UseLiveDemoPreviewParams) {
	const [previewCache, setPreviewCache] = useState<Record<string, RenderedDemoPreview>>({});
	const [stageWidth, setStageWidth] = useState<number>(0);
	const [stageHeight, setStageHeight] = useState<number>(0);
	const [iframeHeight, setIframeHeight] = useState<number>(200);
	const [isIframeReady, setIsIframeReady] = useState<boolean>(false);

	const stageContainerRef = useRef<HTMLDivElement | null>(null);
	const iframeRef = useRef<HTMLIFrameElement | null>(null);
	const iframeObserverRef = useRef<ResizeObserver | null>(null);
	const observedDocRef = useRef<Document | null>(null);
	const cacheRef = useRef<Record<string, RenderedDemoPreview>>({});
	const inFlightKeysRef = useRef<Set<string>>(new Set());
	const versionRef = useRef<number>(demosVersion);
	const isMountedRef = useRef<boolean>(true);
	const loadRafRef = useRef<number | null>(null);
	const measureRafRef = useRef<number | null>(null);
	const readyFallbackTimerRef = useRef<number | null>(null);

	versionRef.current = demosVersion;

	const clearIframeTimersAndObserver = useCallback(() => {
		if (loadRafRef.current !== null) {
			window.cancelAnimationFrame(loadRafRef.current);
			loadRafRef.current = null;
		}
		if (measureRafRef.current !== null) {
			window.cancelAnimationFrame(measureRafRef.current);
			measureRafRef.current = null;
		}
		if (readyFallbackTimerRef.current !== null) {
			window.clearTimeout(readyFallbackTimerRef.current);
			readyFallbackTimerRef.current = null;
		}
		if (iframeObserverRef.current) {
			iframeObserverRef.current.disconnect();
			iframeObserverRef.current = null;
		}
		observedDocRef.current = null;
	}, []);

	const writePreviewCache = useCallback((key: string, entry: RenderedDemoPreview) => {
		const next = { ...cacheRef.current };
		if (Object.prototype.hasOwnProperty.call(next, key)) {
			delete next[key];
		}
		next[key] = entry;
		const keys = Object.keys(next);
		if (keys.length > MAX_PREVIEW_CACHE) {
			const excess = keys.length - MAX_PREVIEW_CACHE;
			for (let i = 0; i < excess; i++) {
				delete next[keys[i]];
			}
		}
		cacheRef.current = next;
		setPreviewCache(next);
	}, []);

	useEffect(() => {
		cacheRef.current = {};
		inFlightKeysRef.current.clear();
		setPreviewCache({});
	}, [demosVersion]);

	const hasPatternMarkup = Boolean(activePattern?.content?.trim());
	const patternCacheKey = activePattern ? `${demosVersion}:${activePattern.id}` : "";
	const cachedPreview = patternCacheKey ? previewCache[patternCacheKey] : undefined;
	const activeLiveHtml = cachedPreview?.hasContent && cachedPreview.html ? cachedPreview.html : "";
	const isPreviewFetching = Boolean(
		isOpen && !isLoading && activePattern && hasPatternMarkup && cachedPreview === undefined
	);

	// Reset readiness whenever modal closes, pattern changes, or Live view remounts from Image mode.
	useEffect(() => {
		clearIframeTimersAndObserver();
		setIsIframeReady(false);
		if (!isOpen || viewMode !== "live") {
			return;
		}
		setIframeHeight(200);
	}, [isOpen, patternCacheKey, blockId, viewMode, clearIframeTimersAndObserver]);

	useEffect(() => {
		isMountedRef.current = true;
		return () => {
			isMountedRef.current = false;
			clearIframeTimersAndObserver();
		};
	}, [clearIframeTimersAndObserver]);

	// Render live pattern HTML once per pattern ID and deduplicate concurrent requests across fast clicks.
	useEffect(() => {
		if (!isOpen || isLoading || !blockId || !activePattern || !hasPatternMarkup || !patternCacheKey) {
			return;
		}
		if (
			cacheRef.current[patternCacheKey] !== undefined ||
			inFlightKeysRef.current.has(patternCacheKey)
		) {
			return;
		}

		const fetchKey = patternCacheKey;
		const fetchVersion = demosVersion;
		inFlightKeysRef.current.add(fetchKey);

		postAjax<RenderedDemoPreview>({
			action: "boostify_blocks_render_demo_preview",
			data: {
				demoKey: demoKey || "",
				patternId: activePattern.id,
			},
			timeout: 12000,
		})
			.then((res) => {
				if (versionRef.current !== fetchVersion) return;
				inFlightKeysRef.current.delete(fetchKey);
				if (!isMountedRef.current) return;
				const data = res?.data;
				writePreviewCache(
					fetchKey,
					data && data.hasContent && typeof data.html === "string" && data.html.trim()
						? {
								html: data.html,
								hasContent: true,
								reason: data.reason,
								breakpoints: data.breakpoints,
						  }
						: {
								html: "",
								hasContent: false,
								reason: data?.reason || "empty",
								breakpoints: data?.breakpoints,
						  }
				);
			})
			.catch(() => {
				if (versionRef.current !== fetchVersion) return;
				inFlightKeysRef.current.delete(fetchKey);
				if (!isMountedRef.current) return;
				writePreviewCache(fetchKey, {
					html: "",
					hasContent: false,
					reason: "request_failed",
				});
			});
	}, [
		isOpen,
		isLoading,
		blockId,
		demoKey,
		activePattern?.id,
		hasPatternMarkup,
		patternCacheKey,
		demosVersion,
		writePreviewCache,
	]);

	const deviceWidths = useMemo(() => {
		const tabletBp = cachedPreview?.breakpoints?.tablet ?? breakpoints?.tablet ?? 768;
		const desktopBp = cachedPreview?.breakpoints?.desktop ?? breakpoints?.desktop ?? 1024;
		return computeDeviceWidths(tabletBp, desktopBp);
	}, [
		cachedPreview?.breakpoints?.tablet,
		cachedPreview?.breakpoints?.desktop,
		breakpoints?.tablet,
		breakpoints?.desktop,
	]);

	// Measure stage inner width & outer stage viewport height cleanly (excluding padding)
	// so 2D Fit-to-Stage scaling always respects stage padding without resize loops.
	useEffect(() => {
		const el = stageContainerRef.current;
		const outerEl = stageViewportRef?.current;
		if (!isOpen || (!el && !outerEl)) return undefined;

		let metricsRafId: number | null = null;
		const updateMetrics = () => {
			if (el) {
				const cs = window.getComputedStyle(el);
				const padX = (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0);
				const nextWidth = Math.max(0, Math.floor(el.clientWidth - padX));
				if (nextWidth > 0) {
					setStageWidth((prev) => (Math.abs(prev - nextWidth) > 1 ? nextWidth : prev));
				}
			}
			if (outerEl) {
				const csOut = window.getComputedStyle(outerEl);
				const padY = (parseFloat(csOut.paddingTop) || 0) + (parseFloat(csOut.paddingBottom) || 0);
				const nextHeight = Math.max(0, Math.floor(outerEl.clientHeight - padY));
				if (nextHeight > 0) {
					setStageHeight((prev) => (Math.abs(prev - nextHeight) > 1 ? nextHeight : prev));
				}
			}
		};
		const scheduleMetrics = () => {
			if (metricsRafId !== null) return;
			metricsRafId = window.requestAnimationFrame(() => {
				metricsRafId = null;
				updateMetrics();
			});
		};

		updateMetrics();
		let ro: ResizeObserver | null = null;
		if (typeof ResizeObserver !== "undefined") {
			ro = new ResizeObserver(scheduleMetrics);
			if (el) ro.observe(el);
			if (outerEl) ro.observe(outerEl);
		}
		window.addEventListener("resize", scheduleMetrics);

		return () => {
			if (metricsRafId !== null) {
				window.cancelAnimationFrame(metricsRafId);
			}
			if (ro) ro.disconnect();
			window.removeEventListener("resize", scheduleMetrics);
		};
	}, [isOpen, blockId, activePattern?.id, isLoading, isPreviewFetching, activeLiveHtml, stageViewportRef]);

	const measureIframeHeight = useCallback((): number => {
		const iframe = iframeRef.current;
		if (!iframe) return 0;
		try {
			const doc = iframe.contentDocument;
			if (!doc) return 0;
			// Measure `.wcb-preview-root` directly (never `documentElement.scrollHeight`,
			// which stretches to the iframe viewport and prevents shrinking on shorter patterns).
			const root = doc.querySelector(".wcb-preview-root") as HTMLElement | null;
			const rawH = root
				? Math.max(root.getBoundingClientRect().height, root.scrollHeight)
				: Math.max(doc.body?.getBoundingClientRect().height || 0, doc.body?.scrollHeight || 0);
			if (rawH > 0) {
				const clamped = Math.max(80, Math.min(2800, Math.ceil(rawH)));
				setIframeHeight((prev) => (Math.abs(prev - clamped) > 1 ? clamped : prev));
			}
			return rawH;
		} catch {
			// Ignore cross-origin restrictions safely.
			return 0;
		}
	}, []);

	const scheduleMeasureIframeHeight = useCallback(() => {
		if (measureRafRef.current !== null) return;
		measureRafRef.current = window.requestAnimationFrame(() => {
			measureRafRef.current = null;
			measureIframeHeight();
		});
	}, [measureIframeHeight]);

	const attachIframeObservers = useCallback(
		(doc: Document) => {
			if (iframeObserverRef.current) {
				iframeObserverRef.current.disconnect();
				iframeObserverRef.current = null;
			}
			const targetEl = (doc.querySelector(".wcb-preview-root") as HTMLElement | null) || doc.body;
			if (targetEl && typeof ResizeObserver !== "undefined") {
				const ro = new ResizeObserver(scheduleMeasureIframeHeight);
				ro.observe(targetEl);
				iframeObserverRef.current = ro;
			}
			if (observedDocRef.current === doc) {
				return;
			}
			observedDocRef.current = doc;
			if ((doc as any).fonts?.ready) {
				(doc as any).fonts.ready.then(scheduleMeasureIframeHeight).catch(() => {});
			}
			doc.querySelectorAll("img").forEach((img) => {
				if (!img.complete) {
					img.addEventListener("load", scheduleMeasureIframeHeight, { once: true });
					img.addEventListener("error", scheduleMeasureIframeHeight, { once: true });
				}
			});
		},
		[scheduleMeasureIframeHeight]
	);

	const handleIframeLoad = useCallback(() => {
		if (readyFallbackTimerRef.current !== null) {
			window.clearTimeout(readyFallbackTimerRef.current);
			readyFallbackTimerRef.current = null;
		}
		if (loadRafRef.current !== null) {
			window.cancelAnimationFrame(loadRafRef.current);
			loadRafRef.current = null;
		}

		measureIframeHeight();
		loadRafRef.current = window.requestAnimationFrame(() => {
			loadRafRef.current = null;
			measureIframeHeight();
			setIsIframeReady(true);
		});

		try {
			const doc = iframeRef.current?.contentDocument;
			if (doc) {
				attachIframeObservers(doc);
			}
		} catch {
			// Ignore sandbox restrictions safely.
		}
	}, [measureIframeHeight, attachIframeObservers]);

	// Reveal preview cleanly if external images/fonts inside srcDoc delay iframe onLoad.
	useEffect(() => {
		if (!isOpen || viewMode !== "live" || !activeLiveHtml || isIframeReady) {
			return undefined;
		}
		readyFallbackTimerRef.current = window.setTimeout(() => {
			readyFallbackTimerRef.current = null;
			try {
				const doc = iframeRef.current?.contentDocument;
				if (!doc || (doc.readyState !== "interactive" && doc.readyState !== "complete")) {
					return;
				}
				if (measureIframeHeight() > 0) {
					attachIframeObservers(doc);
					setIsIframeReady(true);
				}
			} catch {
				// Ignore sandbox restrictions safely.
			}
		}, 1500);

		return () => {
			if (readyFallbackTimerRef.current !== null) {
				window.clearTimeout(readyFallbackTimerRef.current);
				readyFallbackTimerRef.current = null;
			}
		};
	}, [
		isOpen,
		viewMode,
		patternCacheKey,
		activeLiveHtml,
		isIframeReady,
		measureIframeHeight,
		attachIframeObservers,
	]);

	// Re-dispatch resize inside iframe when device switches so carousels & height sync immediately.
	useEffect(() => {
		if (!isOpen || viewMode !== "live" || !activeLiveHtml) return undefined;
		try {
			iframeRef.current?.contentWindow?.dispatchEvent(new Event("resize"));
		} catch {
			// Safe no-op.
		}
		const t1 = window.setTimeout(scheduleMeasureIframeHeight, 40);
		const t2 = window.setTimeout(scheduleMeasureIframeHeight, 200);
		return () => {
			window.clearTimeout(t1);
			window.clearTimeout(t2);
		};
	}, [isOpen, viewMode, device, activeLiveHtml, scheduleMeasureIframeHeight]);

	return {
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
	};
}
