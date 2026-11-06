import React, { FC, useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { __ } from "@wordpress/i18n";
import { Toaster } from "react-hot-toast";
import Nav from "./components/Nav";
import OverviewPage from "./components/overview/OverviewPage";
import BlocksPage from "./components/blocks/BlocksPage";
import SettingsPage from "./components/settings/SettingsPage";
import SaveBar from "./components/common/SaveBar";
import NotifyMeModal from "./components/common/NotifyMeModal";
import { useBlocksManager } from "./hooks/useBlocksManager";
import { useDashboardSettings } from "./hooks/useDashboardSettings";
import { DashboardProps, Path } from "./types";
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
	const totalDirtyCount = blocksManager.dirtyCount + settingsManager.dirtyCount;
	const isSaving = blocksManager.isSaving || settingsManager.isSaving;

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

	const handleSaveAll = () => {
		if (blocksManager.dirtyCount > 0) {
			blocksManager.saveChanges();
		}
		if (settingsManager.dirtyCount > 0) {
			settingsManager.saveChanges();
		}
	};

	const handleDiscardAll = () => {
		if (blocksManager.dirtyCount > 0) {
			blocksManager.discardChanges();
		}
		if (settingsManager.dirtyCount > 0) {
			settingsManager.discardChanges();
		}
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
					onEnableAll={blocksManager.enableAll}
					onDisableAll={blocksManager.disableAll}
					onNotifyMe={handleOpenNotifyModal}
					isSubscribed={isWaitlistSubscribed}
				/>
			)}

			{currentPath === "settings" && (
				<SettingsPage
					settings={settingsManager.settings}
					onUpdateSetting={settingsManager.updateSetting}
					showSample={boostify_blocks_meta?.showSample ?? true}
				/>
			)}

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
				containerStyle={{ marginBottom: "20px" }}
				toastOptions={{
					style: {
						background: "#1b1b22",
						color: "#fff",
						fontSize: "13.5px",
						padding: "10px 16px",
						borderRadius: "10px",
						boxShadow: "0 10px 30px rgba(20,20,40,0.25)",
					},
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
