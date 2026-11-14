import { useState, useCallback } from "react";
import { __ } from "@wordpress/i18n";
import toast from "react-hot-toast";
import { RemoteDemosMap } from "../types";
import { postAjax } from "../utils/ajax";

/**
 * Manages lazy-loading, caching, version invalidation, and resilient refresh
 * of remote demo patterns fetched from boostifyblocks.com via WordPress AJAX.
 */
export function useRemoteDemos() {
	const [remoteDemos, setRemoteDemos] = useState<RemoteDemosMap>({});
	const [demosVersion, setDemosVersion] = useState(0);
	const [hasLoadedDemos, setHasLoadedDemos] = useState(false);
	const [isDemosLoading, setIsDemosLoading] = useState(false);

	const fetchRemoteDemos = useCallback(async (forceRefresh = false) => {
		setIsDemosLoading(true);
		try {
			const res = await postAjax<{
				demos?: RemoteDemosMap;
				partial?: boolean;
				stale?: boolean;
				remoteError?: boolean;
			}>({
				action: "boostify_blocks_get_block_demos",
				data: forceRefresh ? { refresh: "1" } : {},
				timeout: 22000,
			});

			const rawDemos = res?.data?.demos;
			const hasValidDemos = Boolean(
				rawDemos &&
					typeof rawDemos === "object" &&
					!Array.isArray(rawDemos) &&
					Object.keys(rawDemos).length > 0
			);

			if (hasValidDemos && rawDemos) {
				setRemoteDemos(rawDemos);
				setDemosVersion((prev) => prev + 1);
			}

			if (res?.data?.remoteError) {
				if (forceRefresh) {
					toast.error(
						res?.data?.stale
							? __(
									"Could not refresh from demo site. Showing cached previews.",
									"boostify-blocks"
							  )
							: __(
									"Could not reach the demo library. Keeping available previews.",
									"boostify-blocks"
							  )
					);
				}
			} else if (forceRefresh) {
				toast.success(
					res?.data?.partial
						? __("Loaded available demo previews (partial sync).", "boostify-blocks")
						: __("Demo previews refreshed.", "boostify-blocks")
				);
			}
		} catch {
			if (forceRefresh) {
				toast.error(
					__("Request timed out while refreshing demo previews.", "boostify-blocks")
				);
			}
			// Silent fallback to local illustration previews on initial modal open.
		} finally {
			setIsDemosLoading(false);
			setHasLoadedDemos(true);
		}
	}, []);

	const ensureDemosLoaded = useCallback(() => {
		if (!hasLoadedDemos && !isDemosLoading) {
			fetchRemoteDemos(false);
		}
	}, [hasLoadedDemos, isDemosLoading, fetchRemoteDemos]);

	return {
		remoteDemos,
		demosVersion,
		hasLoadedDemos,
		isDemosLoading,
		fetchRemoteDemos,
		ensureDemosLoaded,
	};
}
