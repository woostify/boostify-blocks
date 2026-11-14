import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { __, sprintf } from "@wordpress/i18n";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import DynamicIcon from "../common/DynamicIcon";
import SettingsSectionCard from "./SettingsSectionCard";
import {
	SETTINGS_CATEGORIES,
	SettingCategoryId,
	SettingCategorySchema,
} from "../../data/settingsSchema";
import { Wcb_theme_layout_global_settings } from "../../../types";

interface SettingsPageProps {
	settings: Record<string, any>;
	dirtyKeys?: string[];
	onUpdateSetting: (key: string, value: any) => void;
	themeLayoutGlobal?: Wcb_theme_layout_global_settings;
	showSample?: boolean;
}

interface FilteredCategory extends SettingCategorySchema {
	matchCount: number;
	totalCount: number;
	isDirty: boolean;
}

const VALID_CATEGORY_IDS: SettingCategoryId[] = [
	"editor",
	"performance",
	"block-settings",
	"site-visibility",
];

// Precompute lowercase searchable text per field once since SETTINGS_CATEGORIES is static.
const FIELD_SEARCH_INDEX: Record<string, string> = (() => {
	const index: Record<string, string> = {};
	for (const category of SETTINGS_CATEGORIES) {
		for (const section of category.sections) {
			for (const field of section.fields) {
				index[field.key] = [
					field.label,
					field.desc || "",
					field.searchKeywords || "",
					section.title || "",
					category.title,
				]
					.join(" ")
					.toLowerCase();
			}
		}
	}
	return index;
})();

function getInitialTabFromUrl(): SettingCategoryId {
	if (typeof window === "undefined") {
		return "editor";
	}
	const tabParam = new URLSearchParams(window.location.search).get("tab");
	if (tabParam && VALID_CATEGORY_IDS.includes(tabParam as SettingCategoryId)) {
		return tabParam as SettingCategoryId;
	}
	return "editor";
}

const SettingsPage: FC<SettingsPageProps> = ({
	settings,
	dirtyKeys = [],
	onUpdateSetting,
	themeLayoutGlobal,
	showSample = true,
}) => {
	const [activeCategory, setActiveCategory] = useState<SettingCategoryId>(getInitialTabFromUrl);
	const [searchQuery, setSearchQuery] = useState("");
	const navRef = useRef<HTMLElement>(null);
	const [scrollState, setScrollState] = useState({
		canScrollLeft: false,
		canScrollRight: false,
		hasOverflow: false,
		thumbWidthPct: 100,
		thumbLeftPct: 0,
	});

	const updateNavScrollState = useCallback(() => {
		const nav = navRef.current;
		if (!nav) {
			return;
		}
		const { scrollLeft, scrollWidth, clientWidth } = nav;
		const maxScroll = Math.max(0, scrollWidth - clientWidth);
		const hasOverflow = maxScroll > 2;
		const canScrollLeft = hasOverflow && scrollLeft > 2;
		const canScrollRight = hasOverflow && scrollLeft < maxScroll - 2;
		const thumbWidthPct = hasOverflow
			? Math.max(20, Math.min(100, (clientWidth / scrollWidth) * 100))
			: 100;
		const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollLeft / maxScroll)) : 0;
		const thumbLeftPct = progress * (100 - thumbWidthPct);

		setScrollState((prev) => {
			if (
				prev.canScrollLeft === canScrollLeft &&
				prev.canScrollRight === canScrollRight &&
				prev.hasOverflow === hasOverflow &&
				Math.abs(prev.thumbWidthPct - thumbWidthPct) < 0.25 &&
				Math.abs(prev.thumbLeftPct - thumbLeftPct) < 0.25
			) {
				return prev;
			}
			return {
				canScrollLeft,
				canScrollRight,
				hasOverflow,
				thumbWidthPct,
				thumbLeftPct,
			};
		});
	}, []);

	// Track horizontal overflow & scroll progress on mobile/tablet nav bar
	useEffect(() => {
		const nav = navRef.current;
		if (!nav) {
			return;
		}
		const rafId = window.requestAnimationFrame(updateNavScrollState);
		const handleScroll = () => updateNavScrollState();
		nav.addEventListener("scroll", handleScroll, { passive: true });

		let resizeObserver: ResizeObserver | null = null;
		if (typeof ResizeObserver !== "undefined") {
			resizeObserver = new ResizeObserver(updateNavScrollState);
			resizeObserver.observe(nav);
		}
		window.addEventListener("resize", updateNavScrollState);

		return () => {
			window.cancelAnimationFrame(rafId);
			nav.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", updateNavScrollState);
			if (resizeObserver) {
				resizeObserver.disconnect();
			}
		};
	}, [updateNavScrollState]);

	useEffect(() => {
		const rafId = window.requestAnimationFrame(updateNavScrollState);
		return () => window.cancelAnimationFrame(rafId);
	}, [activeCategory, updateNavScrollState]);

	// Ensure preselected URL ?tab= item starts centered inside scrollable mobile nav
	useEffect(() => {
		const nav = navRef.current;
		if (!nav || nav.scrollWidth <= nav.clientWidth) {
			return;
		}
		const activeBtn = nav.querySelector(".bb-settings-nav-item.is-active");
		if (activeBtn && typeof (activeBtn as HTMLElement).scrollIntoView === "function") {
			(activeBtn as HTMLElement).scrollIntoView({
				behavior: "auto",
				block: "nearest",
				inline: "center",
			});
			window.requestAnimationFrame(updateNavScrollState);
		}
		// Run only once on initial mount
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const trimmedQuery = searchQuery.trim().toLowerCase();
	const isSearching = trimmedQuery.length > 0;
	const dirtySet = useMemo(() => new Set(dirtyKeys), [dirtyKeys]);

	// Compute filtered categories, item counts, and per-category dirty indicators
	const filteredCategories = useMemo<FilteredCategory[]>(() => {
		return SETTINGS_CATEGORIES.map((category) => {
			let totalCount = 0;
			let isDirty = false;

			const filteredSections = category.sections
				.map((section) => {
					totalCount += section.fields.length;

					const matchingFields = section.fields.filter((field) => {
						const trackedKeys = field.dirtyTrackKeys ?? [field.key];
						if (trackedKeys.some((k) => dirtySet.has(k))) {
							isDirty = true;
						}

						if (!trimmedQuery) {
							return true;
						}

						return (FIELD_SEARCH_INDEX[field.key] || "").includes(trimmedQuery);
					});

					return {
						...section,
						fields: matchingFields,
					};
				})
				.filter((section) => section.fields.length > 0);

			const matchCount = filteredSections.reduce(
				(sum, sec) => sum + sec.fields.length,
				0
			);

			return {
				...category,
				sections: filteredSections,
				matchCount,
				totalCount,
				isDirty,
			};
		});
	}, [trimmedQuery, dirtySet]);

	// Categories displayed in the main content pane
	const visibleGroups = useMemo(() => {
		if (isSearching) {
			return filteredCategories.filter((cat) => cat.matchCount > 0);
		}
		const selected = filteredCategories.find((cat) => cat.id === activeCategory);
		return selected ? [selected] : [filteredCategories[0]];
	}, [isSearching, filteredCategories, activeCategory]);

	// Compute total visible sections for z-index ordering (top sections stack above bottom dropdowns)
	const totalVisibleSections = useMemo(
		() => visibleGroups.reduce((sum, g) => sum + g.sections.length, 0),
		[visibleGroups]
	);

	const handleSelectCategory = (
		categoryId: SettingCategoryId,
		event?: React.MouseEvent<HTMLButtonElement>
	) => {
		setActiveCategory(categoryId);
		setSearchQuery("");

		const button = event?.currentTarget;
		const nav = button?.parentElement;
		if (button && nav && nav.scrollWidth > nav.clientWidth) {
			button.scrollIntoView?.({
				behavior: "smooth",
				block: "nearest",
				inline: "center",
			});
		}

		if (typeof window !== "undefined") {
			const params = new URLSearchParams(window.location.search);
			params.set("path", "settings");
			params.set("tab", categoryId);
			window.history.replaceState(null, "", `?${params.toString()}`);
		}
	};

	const handleScrollNav = (direction: "left" | "right") => {
		const nav = navRef.current;
		if (!nav) {
			return;
		}
		const step = Math.max(140, Math.round(nav.clientWidth * 0.65));
		nav.scrollBy?.({
			left: direction === "left" ? -step : step,
			behavior: "smooth",
		});
	};

	const handleClearSearch = () => {
		setSearchQuery("");
	};

	let runningSectionIdx = 0;

	return (
		<main className="bb-settings-container">
			{/* Page Header + Search */}
			<div className="bb-page-header bb-settings-header">
				<div className="bb-page-title-group">
					<h1 className="bb-page-title">
						{__( "Settings", "boostify-blocks" )}
					</h1>
					<div className="bb-page-subtitle">
						{__( "Global options that apply to every Boostify block.", "boostify-blocks" )}
					</div>
				</div>

				<label className="bb-settings-search-box">
					<span className="bb-settings-search-icon">
						<DynamicIcon name="search" size={18} />
					</span>
					<input
						type="text"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Escape" && searchQuery) {
								e.preventDefault();
								handleClearSearch();
							}
						}}
						placeholder={__( "Search settings", "boostify-blocks" )}
						aria-label={__( "Search settings", "boostify-blocks" )}
						className="bb-settings-search-input"
					/>
					{isSearching && (
						<button
							type="button"
							onClick={handleClearSearch}
							aria-label={__( "Clear search", "boostify-blocks" )}
							title={__( "Clear search", "boostify-blocks" )}
							className="bb-settings-search-clear"
						>
							<DynamicIcon name="close" size={16} />
						</button>
					)}
				</label>
			</div>

			{/* 2-Column Sub-Navigation + Settings Content */}
			<div className="bb-settings-layout">
				{/* Left Category Navigation (scrollable with indicators on mobile/tablet) */}
				<div
					className={`bb-settings-nav-wrap ${
						scrollState.canScrollLeft ? "can-scroll-left" : ""
					} ${scrollState.canScrollRight ? "can-scroll-right" : ""} ${
						scrollState.hasOverflow ? "has-scroll-overflow" : ""
					}`}
				>
					<button
						type="button"
						className="bb-settings-nav-arrow is-left"
						aria-label={__( "Scroll settings sections left", "boostify-blocks" )}
						tabIndex={scrollState.canScrollLeft ? 0 : -1}
						onClick={() => handleScrollNav("left")}
					>
						<ChevronLeftIcon className="bb-settings-nav-arrow-icon" aria-hidden="true" />
					</button>

					<nav
						ref={navRef}
						className="bb-settings-nav"
						aria-label={__( "Settings sections", "boostify-blocks" )}
					>
						{filteredCategories.map((cat) => {
							const isActive = !isSearching && activeCategory === cat.id;
							const isDimmed = isSearching && cat.matchCount === 0;
							const displayedCount = isSearching ? cat.matchCount : cat.totalCount;

							return (
								<button
									key={cat.id}
									type="button"
									onClick={(e) => handleSelectCategory(cat.id, e)}
									aria-current={isActive ? "page" : undefined}
									className={`bb-settings-nav-item ${isActive ? "is-active" : ""} ${
										isDimmed ? "is-dimmed" : ""
									}`}
								>
									<span className="bb-settings-nav-icon">
										<DynamicIcon name={cat.icon} size={19} />
									</span>
									<span className="bb-settings-nav-label">{cat.title}</span>
									{cat.isDirty && (
										<span
											className="bb-settings-nav-dot"
											title={__( "Unsaved changes", "boostify-blocks" )}
										/>
									)}
									<span className="bb-settings-nav-count">{displayedCount}</span>
								</button>
							);
						})}
					</nav>

					<button
						type="button"
						className="bb-settings-nav-arrow is-right"
						aria-label={__( "Scroll settings sections right", "boostify-blocks" )}
						tabIndex={scrollState.canScrollRight ? 0 : -1}
						onClick={() => handleScrollNav("right")}
					>
						<ChevronRightIcon className="bb-settings-nav-arrow-icon" aria-hidden="true" />
					</button>

					{scrollState.hasOverflow && (
						<div className="bb-settings-nav-track" aria-hidden="true">
							<div
								className="bb-settings-nav-thumb"
								style={{
									width: `${scrollState.thumbWidthPct}%`,
									left: `${scrollState.thumbLeftPct}%`,
								}}
							/>
						</div>
					)}
				</div>

				{/* Right Settings Panels */}
				<div className="bb-settings-main">
					{visibleGroups.length > 0 ? (
						visibleGroups.map((group, groupIdx) => (
							<div
								key={group.id}
								className="bb-settings-group"
								style={{ zIndex: visibleGroups.length - groupIdx }}
							>
								<div className="bb-settings-group-header">
									<h2 className="bb-settings-group-title">{group.title}</h2>
									<div className="bb-settings-group-desc">
										{group.description}
									</div>
								</div>

								<div className="bb-settings-group-sections">
									{group.sections.map((section) => {
										const zIdx = totalVisibleSections - runningSectionIdx;
										runningSectionIdx += 1;
										return (
											<SettingsSectionCard
												key={section.id}
												section={section}
												settings={settings}
												onUpdateSetting={onUpdateSetting}
												themeLayoutGlobal={themeLayoutGlobal}
												showSample={showSample}
												zIndex={zIdx}
											/>
										);
									})}
								</div>
							</div>
						))
					) : (
						<div className="bb-settings-empty">
							<span className="bb-settings-empty-icon">
								<DynamicIcon name="search_off" size={30} />
							</span>
							<div className="bb-settings-empty-title">
								{sprintf(
									__( "No settings match “%s”", "boostify-blocks" ),
									searchQuery.trim()
								)}
							</div>
							<button
								type="button"
								onClick={handleClearSearch}
								className="bb-link-btn"
							>
								{__( "Clear search", "boostify-blocks" )}
							</button>
						</div>
					)}
				</div>
			</div>
		</main>
	);
};

export default SettingsPage;
