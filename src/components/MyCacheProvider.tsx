import React, { useRef, FC, ReactNode, memo, useState, useEffect } from "react";
import { CacheProvider } from "@emotion/react";
import createCache, { EmotionCache } from "@emotion/cache";

interface Props {
	children: ReactNode;
	uniqueKey: string;
}

// Reuse one EmotionCache per (key, iframeHead) across all blocks in the canvas
// so we never churn caches or re-inject duplicate <style> tags on DOM edits.
const iframeCacheRegistry = new Map<string, WeakMap<HTMLHeadElement, EmotionCache>>();

const getOrCreateIframeCache = (key: string, iframeHead: HTMLHeadElement): EmotionCache => {
	let map = iframeCacheRegistry.get(key);
	if (!map) {
		map = new WeakMap<HTMLHeadElement, EmotionCache>();
		iframeCacheRegistry.set(key, map);
	}
	let existing = map.get(iframeHead);
	if (!existing) {
		existing = createCache({ key, container: iframeHead });
		map.set(iframeHead, existing);
	}
	return existing;
};

const useCreateEmotionCache = function (key = "wcb-custom-cache-key") {
	const [cache, setCache] = useState<EmotionCache | null>(null);
	const currentIframeRef = useRef<HTMLIFrameElement | null>(null);
	const currentHeadRef = useRef<HTMLHeadElement | null>(null);

	useEffect(() => {
		let cancelled = false;
		let observer: MutationObserver | null = null;
		let retryTimer: ReturnType<typeof setTimeout> | null = null;
		let tries = 0;

		const attachIframeCache = (iframe: HTMLIFrameElement) => {
			if (cancelled) return;
			const iframeHead = iframe?.contentDocument?.head ?? null;
			if (!iframeHead) return;
			if (currentIframeRef.current === iframe && currentHeadRef.current === iframeHead) {
				return;
			}
			currentIframeRef.current = iframe;
			currentHeadRef.current = iframeHead;
			setCache(getOrCreateIframeCache(key, iframeHead));
		};

		const watchIframe = () => {
			if (cancelled) return;
			const iframe = document.querySelector(
				'iframe[name="editor-canvas"]'
			) as HTMLIFrameElement | null;
			if (!iframe) {
				if (tries < 20) {
					tries++;
					retryTimer = setTimeout(watchIframe, 150);
				}
				return;
			}

			if (iframe.contentDocument?.readyState === "complete") {
				attachIframeCache(iframe);
			} else {
				iframe.addEventListener("load", () => attachIframeCache(iframe), {
					once: true,
				});
			}
		};

		// Initial attach
		watchIframe();

		// Only re-query when the currently attached canvas iframe was detached or
		// hasn't been found yet; avoids recreating the Emotion cache on every
		// unrelated editor DOM mutation (e.g. slider drags in the sidebar).
		observer = new MutationObserver(() => {
			if (
				currentIframeRef.current?.isConnected &&
				currentHeadRef.current?.isConnected
			) {
				return;
			}
			const iframe = document.querySelector(
				'iframe[name="editor-canvas"]'
			) as HTMLIFrameElement | null;
			const nextHead = iframe?.contentDocument?.head ?? null;
			if (
				iframe &&
				(iframe !== currentIframeRef.current || nextHead !== currentHeadRef.current)
			) {
				tries = 0;
				if (retryTimer) {
					clearTimeout(retryTimer);
					retryTimer = null;
				}
				watchIframe();
			}
		});

		observer.observe(document.body, { childList: true, subtree: true });

		return () => {
			cancelled = true;
			if (retryTimer) clearTimeout(retryTimer);
			observer?.disconnect();
		};
	}, [key]);

	return { cache };
};

const MyCacheProvider: FC<Props> = ({ children }) => {
	const { cache } = useCreateEmotionCache("wcb-key-cache");

	if (!cache) {
		return <>{children}</>;
	}

	return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export default memo(MyCacheProvider);
