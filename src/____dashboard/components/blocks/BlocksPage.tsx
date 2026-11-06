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
	onEnableAll: () => void;
	onDisableAll: () => void;
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
	onEnableAll,
	onDisableAll,
	onNotifyMe,
	isSubscribed,
}) => {
	const isSearching = searchQuery.trim().length > 0;
	const shouldGroup = selectedCategory === "All" && !isSearching;

	const proCount = allUnifiedBlocks.filter((b) => b.isPro).length;

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
			{/* Top Header: Title + Enable/Disable All */}
			<div className="bb-page-header">
				<div className="bb-page-title-group">
					<h1 className="bb-page-title">
						{__( "Blocks", "boostify-blocks" )}
					</h1>
					<div className="bb-page-subtitle">
						{summaryText}
					</div>
				</div>

				<div className="bb-btn-group">
					<button
						type="button"
						onClick={onEnableAll}
						className="bb-btn-outline"
					>
						<DynamicIcon name="toggle_on" size={20} />
						{__( "Enable all", "boostify-blocks" )}
					</button>

					<button
						type="button"
						onClick={onDisableAll}
						className="bb-btn-outline"
					>
						<DynamicIcon name="toggle_off" size={20} />
						{__( "Disable all", "boostify-blocks" )}
					</button>
				</div>
			</div>

			{/* Filter Toolbar */}
			<div className="bb-filter-toolbar">
				{/* Search Box */}
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

				{/* Category Pills */}
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

				<div className="bb-spacer" />

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
