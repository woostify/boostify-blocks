import React, { FC, useState, useEffect, useCallback } from "react";
import * as ReactDOM from "react-dom";
import { __ } from "@wordpress/i18n";
import toast, { Toaster } from "react-hot-toast";
import Nav from "./components/Nav";
import OverviewPage from "./components/overview/OverviewPage";
import BlocksPage from "./components/blocks/BlocksPage";
import BlockDemoModal from "./components/blocks/BlockDemoModal";
import SettingsPage from "./components/settings/SettingsPage";
import SaveBar from "./components/common/SaveBar";
import NotifyMeModal from "./components/common/NotifyMeModal";
import { useBlocksManager } from "./hooks/useBlocksManager";
import { useDashboardSettings } from "./hooks/useDashboardSettings";
import { DashboardProps, Path, RemoteDemosMap, UnifiedBlockItem } from "./types";
import { postAjax } from "./utils/ajax";
import "../________";

const App: FC<DashboardProps> = ({
	boostify_blocks_list = [],
	boostify_blocks_enable_disable_options = {},
	boostify_blocks_settings_options = {},
	boostify_blocks_layout_global_settings,
	boostify_blocks_meta,
}) => {
	// Active Path Router
	const [currentPath, setCurrentPath] = useState<Path>(() => {
		const params = new URLSearchParams(window.location.search);
		const p = params.get("path");
		if (p === "blocks" || p === "settings" || p === "overview") {
			return p as Path;
		}
		if (p === "welcome") {
			return "overview";
		}
		return "overview";
	});

	// Waitlist Pro subscription state
	const [isWaitlistSubscribed, setIsWaitlistSubscribed] = useState<boolean>(() => {
		return Boolean(boostify_blocks_meta?.isWaitlistSubscribed);
	});
	const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);
	const [notifyTargetTitle, setNotifyTargetTitle] = useState<string | null>(null);

	const handleOpenNotifyModal = (title?: string) => {
		setNotifyTargetTitle(title || null);
		setIsNotifyModalOpen(true);
	};

	// Block Demo Modal state & cached fetch from boostifyblocks.com
	const [demoTargetBlockId, setDemoTargetBlockId] = useState<string | null>(null);
	const [remoteDemos, setRemoteDemos] = useState<RemoteDemosMap>({});
	const [hasLoadedDemos, setHasLoadedDemos] = useState(false);
	const [isDemosLoading, setIsDemosLoading] = useState(false);

	const fetchRemoteDemos = useCallback(async (forceRefresh = false) => {
		setIsDemosLoading(true);
		try {
			const res = await postAjax<{ demos?: RemoteDemosMap }>({
				action: "boostify_blocks_get_block_demos",
				data: forceRefresh ? { refresh: "1" } : {},
				timeout: 15000,
			});
			if (res?.data?.demos && typeof res.data.demos === "object") {
				setRemoteDemos(res.data.demos);
			}
			if (forceRefresh) {
				toast.success(__( "Demo previews refreshed.", "boostify-blocks" ));
			}
		} catch {
			// Fallback illustration UI renders automatically when offline or unreachable
		} finally {
			setIsDemosLoading(false);
			setHasLoadedDemos(true);
		}
	}, []);

	const handleOpenDemoModal = useCallback(
		(block: UnifiedBlockItem) => {
			setDemoTargetBlockId(block.id);
			if (!hasLoadedDemos && !isDemosLoading) {
				fetchRemoteDemos(false);
			}
		},
		[hasLoadedDemos, isDemosLoading, fetchRemoteDemos]
	);

	// Sync path with URL history
	const handleChangePath = (nextPath: Path) => {
		setCurrentPath(nextPath);
		const params = new URLSearchParams(window.location.search);
		params.set("path", nextPath);
		if (nextPath !== "settings") {
			params.delete("tab");
		}
		window.history.replaceState(null, "", `?${params.toString()}`);
	};

	useEffect(() => {
		const handlePopState = () => {
			const params = new URLSearchParams(window.location.search);
			const p = params.get("path");
			if (p === "blocks" || p === "settings" || p === "overview") {
				setCurrentPath(p as Path);
			} else {
				setCurrentPath("overview");
			}
		};
		window.addEventListener("popstate", handlePopState);
		return () => window.removeEventListener("popstate", handlePopState);
	}, []);

	// Settings hook
	const settingsManager = useDashboardSettings({
		initSettings: boostify_blocks_settings_options,
	});

	// Blocks hook
	const blocksManager = useBlocksManager({
		initBlocks: boostify_blocks_list,
		initStatus: boostify_blocks_enable_disable_options,
		isDisplayConditionsEnabled: settingsManager.settings.enableDisplayConditions !== "false",
		onToggleDisplayConditions: (enabled: boolean) => {
			settingsManager.updateSetting("enableDisplayConditions", enabled ? "true" : "false");
		},
		showSample: boostify_blocks_meta?.showSample ?? true,
		demoBase: boostify_blocks_meta?.urls?.demoBase,
	});

	// Unified dirty state across all tabs
	const [isBatchSaving, setIsBatchSaving] = useState(false);
	const totalDirtyCount = blocksManager.dirtyCount + settingsManager.dirtyCount;
	const isSaving = isBatchSaving || blocksManager.isSaving || settingsManager.isSaving;

	// Warn user before leaving page or closing tab if unsaved changes exist
	useEffect(() => {
		const handleBeforeUnload = (e: BeforeUnloadEvent) => {
			if (totalDirtyCount > 0) {
				e.preventDefault();
				e.returnValue = "";
			}
		};
		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, [totalDirtyCount]);

	const handleSaveAll = async () => {
		if (isSaving || totalDirtyCount <= 0) {
			return;
		}

		setIsBatchSaving(true);
		const hasBlockChanges = blocksManager.dirtyCount > 0;
		const hasSettingChanges = settingsManager.dirtyCount > 0;
		let errorMsg: string | undefined;

		try {
			if (hasBlockChanges) {
				const blockRes = await blocksManager.saveChanges({ silent: true });
				if (!blockRes.ok) {
					errorMsg = blockRes.error;
				}
			}

			if (!errorMsg && hasSettingChanges) {
				const settingRes = await settingsManager.saveChanges({ silent: true });
				if (!settingRes.ok) {
					errorMsg = settingRes.error;
				}
			}
		} finally {
			setIsBatchSaving(false);
		}

		if (errorMsg) {
			toast.error(errorMsg);
		} else if (currentPath === "blocks") {
			toast.success(__( "Blocks settings saved successfully!", "boostify-blocks" ));
		} else {
			toast.success(__( "Settings saved successfully!", "boostify-blocks" ));
		}
	};

	const handleDiscardAll = () => {
		if (isSaving || totalDirtyCount <= 0) {
			return;
		}
		if (blocksManager.dirtyCount > 0) {
			blocksManager.discardChanges({ silent: true });
		}
		if (settingsManager.dirtyCount > 0) {
			settingsManager.discardChanges({ silent: true });
		}
		toast(__( "Changes discarded.", "boostify-blocks" ), { icon: "↩️" });
	};

	return (
		<div className="bb-dashboard">
			{/* Header Navigation */}
			<Nav
				currentPath={currentPath}
				onChangePath={handleChangePath}
				version={boostify_blocks_meta?.version}
				supportUrl={boostify_blocks_meta?.urls?.support}
			/>

			{/* Main Content Area */}
			{currentPath === "overview" && (
				<OverviewPage
					meta={boostify_blocks_meta}
					activeBlocksCount={blocksManager.activeCount}
					totalBlocksCount={blocksManager.totalRealCount}
					onGoToBlocks={() => handleChangePath("blocks")}
					isSubscribed={isWaitlistSubscribed}
					onSubscribed={() => setIsWaitlistSubscribed(true)}
				/>
			)}

			{currentPath === "blocks" && (
				<BlocksPage
					allUnifiedBlocks={blocksManager.allUnifiedBlocks}
					filteredBlocks={blocksManager.filteredBlocks}
					groupedFilteredBlocks={blocksManager.groupedFilteredBlocks}
					activeCount={blocksManager.activeCount}
					totalRealCount={blocksManager.totalRealCount}
					searchQuery={blocksManager.searchQuery}
					setSearchQuery={blocksManager.setSearchQuery}
					selectedCategory={blocksManager.selectedCategory}
					setSelectedCategory={blocksManager.setSelectedCategory}
					viewMode={blocksManager.viewMode}
					setViewMode={blocksManager.setViewMode}
					onToggle={blocksManager.toggleBlock}
					onBulkToggleCategory={blocksManager.toggleCategoryBlocks}
					onOpenDemo={handleOpenDemoModal}
					onNotifyMe={handleOpenNotifyModal}
					isSubscribed={isWaitlistSubscribed}
				/>
			)}

			{currentPath === "settings" && (
				<SettingsPage
					settings={settingsManager.settings}
					onUpdateSetting={settingsManager.updateSetting}
					themeLayoutGlobal={boostify_blocks_layout_global_settings}
					showSample={boostify_blocks_meta?.showSample ?? true}
				/>
			)}

			{/* Block Demo Modal (fetches screenshots from boostifyblocks.com + fallback UI) */}
			{(() => {
				const demoBlock = demoTargetBlockId
					? blocksManager.allUnifiedBlocks.find((b) => b.id === demoTargetBlockId) || null
					: null;
				const demoPatterns = demoBlock?.demoKey ? remoteDemos[demoBlock.demoKey] || [] : [];
				return (
					<BlockDemoModal
						isOpen={!!demoBlock}
						block={demoBlock}
						remotePatterns={demoPatterns}
						isLoading={isDemosLoading}
						onClose={() => setDemoTargetBlockId(null)}
						onRefresh={() => fetchRemoteDemos(true)}
						onToggleBlock={blocksManager.toggleBlock}
					/>
				);
			})()}

			{/* Notify Me / Pro Waitlist Modal */}
			<NotifyMeModal
				isOpen={isNotifyModalOpen}
				onClose={() => setIsNotifyModalOpen(false)}
				blockTitle={notifyTargetTitle}
				isSubscribed={isWaitlistSubscribed}
				onSubscribed={() => setIsWaitlistSubscribed(true)}
			/>

			{/* Floating Batch Save Bar */}
			<SaveBar
				dirtyCount={totalDirtyCount}
				isSaving={isSaving}
				onSave={handleSaveAll}
				onDiscard={handleDiscardAll}
			/>

			{/* Toast Notifications */}
			<Toaster
				position="bottom-center"
				containerClassName="bb-toast-container"
				toastOptions={{
					className: "bb-toast",
					duration: 3000,
				}}
			/>
		</div>
	);
};

// Mount to DOM
const dashboardRoot = document.getElementById("boostify-blocks-dashboard-root");
if (dashboardRoot) {
	const rawProps = dashboardRoot.getAttribute("data-props");
	const props: DashboardProps = rawProps ? JSON.parse(rawProps) : {};
	ReactDOM.render(<App {...props} />, dashboardRoot);
}

export default App;
