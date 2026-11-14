import React, { FC } from "react";
import { __, sprintf } from "@wordpress/i18n";
import DynamicIcon from "../common/DynamicIcon";
import BlockCardGrid from "./BlockCardGrid";
import BlockRowList from "./BlockRowList";
import { UnifiedBlockItem } from "../../types";
import { ALL_CATEGORIES, BLOCK_CATEGORIES } from "../../data/constants";

interface BlocksPageProps {
	allUnifiedBlocks: UnifiedBlockItem[];
	filteredBlocks: UnifiedBlockItem[];
	groupedFilteredBlocks: Record<string, UnifiedBlockItem[]>;
	activeCount: number;
	totalRealCount: number;
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	selectedCategory: string;
	setSelectedCategory: (cat: string) => void;
	viewMode: "grid" | "list";
	setViewMode: (mode: "grid" | "list") => void;
	onToggle: (id: string, nextStatus: "enabled" | "disabled") => void;
	onBulkToggleCategory: (category: string, enabled: boolean) => void;
	onOpenDemo: (block: UnifiedBlockItem) => void;
	onNotifyMe?: (title?: string) => void;
	isSubscribed?: boolean;
}

const BlocksPage: FC<BlocksPageProps> = ({
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
	onToggle,
	onBulkToggleCategory,
	onOpenDemo,
	onNotifyMe,
	isSubscribed,
}) => {
	const isSearching = searchQuery.trim().length > 0;
	const shouldGroup = selectedCategory === "All" && !isSearching;

	const proCount = allUnifiedBlocks.filter((b) => b.isPro).length;

	// Scope of non-Pro blocks belonging to the currently selected tab
	const scopeBlocks = allUnifiedBlocks.filter(
		(b) =>
			!b.isPro &&
			(selectedCategory === "All" || b.category.toLowerCase() === selectedCategory.toLowerCase())
	);
	const enabledInScope = scopeBlocks.filter((b) => b.status === "enabled").length;
	const totalInScope = scopeBlocks.length;
	const isAllInScopeEnabled = totalInScope > 0 && enabledInScope === totalInScope;
	const isNoneInScopeEnabled = enabledInScope === 0;
	const bulkStateClass = isAllInScopeEnabled
		? "is-all"
		: isNoneInScopeEnabled
		? "is-none"
		: "is-partial";
	const bulkLabel =
		selectedCategory === "All"
			? __( "All blocks", "boostify-blocks" )
			: sprintf(
					/* translators: %s: active category tab name */
					__( "All %s", "boostify-blocks" ),
					selectedCategory
			  );
	const bulkTitle = isAllInScopeEnabled
		? sprintf( __( "Disable %s", "boostify-blocks" ), bulkLabel.toLowerCase() )
		: sprintf( __( "Enable %s", "boostify-blocks" ), bulkLabel.toLowerCase() );

	// Summary string matching prototype
	const summaryText = sprintf(
		/* translators: 1: active blocks, 2: total real blocks, 3: pro blocks */
		__( "%1$d of %2$d blocks active · %3$d Pro blocks coming soon", "boostify-blocks" ),
		activeCount,
		totalRealCount,
		proCount
	);

	return (
		<main className="bb-page-container">
			{/* Top Header: Title + Summary */}
			<div className="bb-page-header">
				<div className="bb-page-title-group">
					<h1 className="bb-page-title">
						{__( "Blocks", "boostify-blocks" )}
					</h1>
					<div className="bb-page-subtitle">
						{summaryText}
					</div>
				</div>
			</div>

			{/* 2-Row Filter Toolbar matching new design */}
			<div className="bb-filter-toolbar">
				{/* Row 1: Search Box + Category Bulk Toggle + View Switcher */}
				<div className="bb-toolbar-top">
					<div className="bb-search-box">
						<span className="bb-search-icon">
							<DynamicIcon name="search" size={18} />
						</span>
						<input
							type="text"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder={__( "Search blocks", "boostify-blocks" )}
							className="bb-search-input"
						/>
					</div>

					<div className="bb-toolbar-actions">
						{totalInScope > 0 && (
							<>
								<button
									type="button"
									role="switch"
									aria-checked={
										isAllInScopeEnabled ? "true" : isNoneInScopeEnabled ? "false" : "mixed"
									}
									title={bulkTitle}
									onClick={() => onBulkToggleCategory(selectedCategory, !isAllInScopeEnabled)}
									className="bb-bulk-toggle"
								>
									<span className={`bb-bulk-switch ${bulkStateClass}`}>
										<span className="bb-bulk-switch-thumb" />
									</span>
									<span className="bb-bulk-label">{bulkLabel}</span>
									<span className="bb-bulk-count">
										{enabledInScope}/{totalInScope}
									</span>
								</button>

								<div className="bb-toolbar-divider" aria-hidden="true" />
							</>
						)}

						{/* Segmented View Switcher */}
						<div className="bb-view-switcher">
							<button
								type="button"
								title={__( "Grid view", "boostify-blocks" )}
								onClick={() => setViewMode("grid")}
								className={`bb-view-btn ${viewMode === "grid" ? "is-active" : ""}`}
							>
								<DynamicIcon name="grid_view" size={18} />
							</button>

							<button
								type="button"
								title={__( "List view", "boostify-blocks" )}
								onClick={() => setViewMode("list")}
								className={`bb-view-btn ${viewMode === "list" ? "is-active" : ""}`}
							>
								<DynamicIcon name="view_list" size={18} />
							</button>
						</div>
					</div>
				</div>

				{/* Row 2: Category Pills */}
				<div className="bb-category-pills">
					{ALL_CATEGORIES.map((cat) => {
						const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
						const count =
							cat === "All"
								? allUnifiedBlocks.length
								: allUnifiedBlocks.filter((b) => b.category.toLowerCase() === cat.toLowerCase()).length;

						return (
							<button
								key={cat}
								type="button"
								onClick={() => setSelectedCategory(cat)}
								className={`bb-category-pill ${isSelected ? "is-active" : ""}`}
							>
								{cat}
								<span className="bb-category-pill-count">
									{count}
								</span>
							</button>
						);
					})}
				</div>
			</div>

			{/* Empty State */}
			{filteredBlocks.length === 0 ? (
				<div className="bb-empty-state">
					<DynamicIcon name="search_off" size={32} />
					<div className="bb-empty-title">
						{__( "No blocks match your search", "boostify-blocks" )}
					</div>
					<button
						type="button"
						onClick={() => {
							setSearchQuery("");
							setSelectedCategory("All");
						}}
						className="bb-link-btn"
					>
						{__( "Clear filters", "boostify-blocks" )}
					</button>
				</div>
			) : shouldGroup ? (
				/* Grouped by Category */
				<div className="bb-block-sections-flow">
					{BLOCK_CATEGORIES.map((catName) => {
						const items = groupedFilteredBlocks[catName] || [];
						if (items.length === 0) return null;

						const activeInCat = items.filter((b) => b.status === "enabled" && !b.isPro).length;
						const realInCat = items.filter((b) => !b.isPro).length;

						return (
							<section key={catName} className="bb-block-section">
								{/* Category Header */}
								<div className="bb-section-header">
									<h2 className="bb-section-title">
										{catName}
									</h2>
									{realInCat > 0 && (
										<span className="bb-section-count">
											{sprintf(
												/* translators: 1: active in cat, 2: real in cat */
												__( "%1$d/%2$d active", "boostify-blocks" ),
												activeInCat,
												realInCat
											)}
										</span>
									)}
								</div>

								{/* Render Cards or List Rows */}
								{viewMode === "grid" ? (
									<div className="bb-card-grid">
										{items.map((block) => (
											<BlockCardGrid
												key={block.id}
												block={block}
												onToggle={onToggle}
												onOpenDemo={onOpenDemo}
												onNotifyMe={onNotifyMe}
												isSubscribed={isSubscribed}
											/>
										))}
									</div>
								) : (
									<div className="bb-list-wrapper">
										{items.map((block, idx) => (
											<BlockRowList
												key={block.id}
												block={block}
												isFirst={idx === 0}
												onToggle={onToggle}
												onOpenDemo={onOpenDemo}
												onNotifyMe={onNotifyMe}
												isSubscribed={isSubscribed}
											/>
										))}
									</div>
								)}
							</section>
						);
					})}
				</div>
			) : (
				/* Ungrouped (Filtered/Searching) */
				viewMode === "grid" ? (
					<div className="bb-card-grid">
						{filteredBlocks.map((block) => (
							<BlockCardGrid
								key={block.id}
								block={block}
								onToggle={onToggle}
								onOpenDemo={onOpenDemo}
								onNotifyMe={onNotifyMe}
								isSubscribed={isSubscribed}
							/>
						))}
					</div>
				) : (
					<div className="bb-list-wrapper">
						{filteredBlocks.map((block, idx) => (
							<BlockRowList
								key={block.id}
								block={block}
								isFirst={idx === 0}
								onToggle={onToggle}
								onOpenDemo={onOpenDemo}
								onNotifyMe={onNotifyMe}
								isSubscribed={isSubscribed}
							/>
						))}
					</div>
				)
			)}
		</main>
	);
};

export default BlocksPage;
