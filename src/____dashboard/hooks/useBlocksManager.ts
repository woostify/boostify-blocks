import { useState, useMemo, useCallback } from "react";
import { __ } from "@wordpress/i18n";
import toast from "react-hot-toast";
import {
	Wcb_block_Type,
	Wcb_blocks_enable_disable_options_Type,
	UnifiedBlockItem,
} from "../types";
import { BLOCK_META, FALLBACK_CATEGORY } from "../data/blocksMeta";
import { SAMPLE_PRO_BLOCKS } from "../data/sampleData";
import { EXTENSIONS_LIST } from "../extensions";
import { DEFAULT_URLS } from "../data/constants";
import { postAjax } from "../utils/ajax";

interface UseBlocksManagerProps {
	initBlocks: Wcb_block_Type[];
	initStatus: Wcb_blocks_enable_disable_options_Type;
	isDisplayConditionsEnabled?: boolean;
	onToggleDisplayConditions?: (enabled: boolean) => void;
	showSample?: boolean;
	demoBase?: string;
}

export function useBlocksManager({
	initBlocks,
	initStatus,
	isDisplayConditionsEnabled = true,
	onToggleDisplayConditions,
	showSample = true,
	demoBase = DEFAULT_URLS.demoBase,
}: UseBlocksManagerProps) {
	// Filter real parent blocks (hide children)
	const realParentBlocks = useMemo(() => {
		if (!Array.isArray(initBlocks)) return [];
		return initBlocks.filter((b) => !b.parent);
	}, [initBlocks]);

	// Initialize status map for real blocks
	const [blocksStatus, setBlocksStatus] = useState<Wcb_blocks_enable_disable_options_Type>(() => {
		const initial: Wcb_blocks_enable_disable_options_Type = { ...initStatus };
		realParentBlocks.forEach((block) => {
			if (!initial[block.name]) {
				initial[block.name] = "enabled";
			}
		});
		return initial;
	});

	const [savedBlocksStatus, setSavedBlocksStatus] = useState<Wcb_blocks_enable_disable_options_Type>(blocksStatus);

	// UI filters
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
	const [isSaving, setIsSaving] = useState(false);

	// Unified blocks list
	const allUnifiedBlocks = useMemo<UnifiedBlockItem[]>(() => {
		const items: UnifiedBlockItem[] = [];

		// 1. Real parent blocks
		realParentBlocks.forEach((block) => {
			const meta = BLOCK_META[block.name] || {
				cat: FALLBACK_CATEGORY,
				icon: "CubeIcon",
			};
			const status = blocksStatus[block.name] === "disabled" ? "disabled" : "enabled";
			const slug = meta.demoSlug || block.name.replace("boostify-blocks/", "").replace("wcb-", "");

			items.push({
				id: block.name,
				name: block.name,
				title: block.title,
				description: block.description,
				category: meta.cat,
				icon: meta.icon,
				status,
				isNew: !!meta.isNew,
				source: "real",
				demoKey: slug,
				demoUrl: demoBase ? `${demoBase}/${slug}` : undefined,
			});
		});

		// 2. Extensions (Display Conditions)
		EXTENSIONS_LIST.forEach((ext) => {
			const status = isDisplayConditionsEnabled ? "enabled" : "disabled";
			const extKey = ext.demoSlug || ext.id;
			items.push({
				id: ext.id,
				name: ext.name,
				title: ext.title,
				description: ext.description,
				category: ext.category,
				icon: ext.icon,
				status,
				isExtension: true,
				source: "extension",
				settingKey: ext.settingKey,
				demoKey: extKey,
				demoUrl: demoBase ? `${demoBase}/${extKey}` : undefined,
			});
		});

		// 3. Sample PRO blocks (if enabled)
		if (showSample) {
			SAMPLE_PRO_BLOCKS.forEach((item) => {
				const sampleKey = item.id.replace("sample-", "");
				items.push({
					...item,
					demoKey: sampleKey,
					demoUrl: demoBase ? `${demoBase}/${sampleKey}` : undefined,
				});
			});
		}

		return items;
	}, [realParentBlocks, blocksStatus, isDisplayConditionsEnabled, showSample, demoBase]);

	// Filtered blocks based on search and category
	const filteredBlocks = useMemo(() => {
		const query = searchQuery.trim().toLowerCase();
		return allUnifiedBlocks.filter((item) => {
			// Category filter
			if (selectedCategory !== "All" && item.category.toLowerCase() !== selectedCategory.toLowerCase()) {
				return false;
			}
			// Search filter
			if (query) {
				const titleMatch = item.title.toLowerCase().includes(query);
				const descMatch = (item.description || "").toLowerCase().includes(query);
				if (!titleMatch && !descMatch) {
					return false;
				}
			}
			return true;
		});
	}, [allUnifiedBlocks, selectedCategory, searchQuery]);

	// Grouped by category
	const groupedFilteredBlocks = useMemo(() => {
		const groups: Record<string, UnifiedBlockItem[]> = {};
		filteredBlocks.forEach((item) => {
			const cat = item.category || FALLBACK_CATEGORY;
			if (!groups[cat]) {
				groups[cat] = [];
			}
			groups[cat].push(item);
		});
		return groups;
	}, [filteredBlocks]);

	// Calculate counts
	const activeCount = useMemo(() => {
		let count = 0;
		realParentBlocks.forEach((b) => {
			if (blocksStatus[b.name] !== "disabled") {
				count += 1;
			}
		});
		if (isDisplayConditionsEnabled) {
			count += 1;
		}
		return count;
	}, [realParentBlocks, blocksStatus, isDisplayConditionsEnabled]);

	const totalRealCount = realParentBlocks.length + EXTENSIONS_LIST.length;

	// Calculate dirty changes
	const dirtyCount = useMemo(() => {
		let count = 0;
		realParentBlocks.forEach((b) => {
			if (blocksStatus[b.name] !== savedBlocksStatus[b.name]) {
				count += 1;
			}
		});
		return count;
	}, [realParentBlocks, blocksStatus, savedBlocksStatus]);

	// Toggle block
	const toggleBlock = useCallback(
		(id: string, nextStatus: "enabled" | "disabled") => {
			// Extension check
			const ext = EXTENSIONS_LIST.find((e) => e.id === id || e.name === id);
			if (ext) {
				onToggleDisplayConditions?.(nextStatus === "enabled");
				return;
			}

			// Real block check
			setBlocksStatus((prev) => ({
				...prev,
				[id]: nextStatus,
			}));
		},
		[onToggleDisplayConditions]
	);

	// Enable or disable only the blocks/extensions within the selected category tab
	const toggleCategoryBlocks = useCallback(
		(category: string, enabled: boolean) => {
			const nextStatus = enabled ? "enabled" : "disabled";
			const normalizedCat = category.toLowerCase();
			const isAll = normalizedCat === "all";

			const updated: Wcb_blocks_enable_disable_options_Type = { ...blocksStatus };
			let hasRealUpdates = false;
			realParentBlocks.forEach((b) => {
				const metaCat = (BLOCK_META[b.name]?.cat || FALLBACK_CATEGORY).toLowerCase();
				if (isAll || metaCat === normalizedCat) {
					updated[b.name] = nextStatus;
					hasRealUpdates = true;
				}
			});
			if (hasRealUpdates) {
				setBlocksStatus(updated);
			}

			if (isAll || normalizedCat === "extensions") {
				onToggleDisplayConditions?.(enabled);
			}
		},
		[blocksStatus, realParentBlocks, onToggleDisplayConditions]
	);

	// Discard unsaved changes
	const discardChanges = useCallback(
		(options?: { silent?: boolean }) => {
			setBlocksStatus(savedBlocksStatus);
			if (!options?.silent) {
				toast(__( "Changes discarded.", "boostify-blocks" ), { icon: "↩️" });
			}
		},
		[savedBlocksStatus]
	);

	// Save changes via AJAX
	const saveChanges = useCallback(
		async (options?: { silent?: boolean }): Promise<{ ok: boolean; error?: string }> => {
			setIsSaving(true);

			try {
				const response = await postAjax({
					action: "boostify_blocks_dashboard_blocks_disable_enable",
					data: { blocksStatus },
					timeout: 15000,
				});
				if (response?.data && typeof response.data === "object") {
					setSavedBlocksStatus({ ...blocksStatus, ...response.data });
				} else {
					setSavedBlocksStatus({ ...blocksStatus });
				}
				setIsSaving(false);
				if (!options?.silent) {
					toast.success(__( "Blocks settings saved successfully!", "boostify-blocks" ));
				}
				return { ok: true };
			} catch (err: any) {
				setIsSaving(false);
				const errorMsg =
					err?.message || __( "Failed to save settings. Please try again.", "boostify-blocks" );
				if (!options?.silent) {
					toast.error(errorMsg);
				}
				return { ok: false, error: errorMsg };
			}
		},
		[blocksStatus]
	);

	return {
		allUnifiedBlocks,
		filteredBlocks,
		groupedFilteredBlocks,
		activeCount,
		totalRealCount,
		searchQuery,
		setSearchQuery,
		selectedCategory,
		setSelectedCategory,
		viewMode,
		setViewMode,
		toggleBlock,
		toggleCategoryBlocks,
		dirtyCount,
		isSaving,
		discardChanges,
		saveChanges,
	};
}

