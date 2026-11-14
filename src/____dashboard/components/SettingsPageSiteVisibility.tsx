import React, { FC, useState, useEffect, useCallback, useRef } from "react";
import { __ } from "@wordpress/i18n";
import {
	ChevronDownIcon,
	MagnifyingGlassIcon,
	CheckIcon,
} from "@heroicons/react/24/outline";
import { postAjax } from "../utils/ajax";

interface Props {
	allSettings: typeof window.boostify_blocks_global_variables;
	onChange: (data: typeof window.boostify_blocks_global_variables) => void;
	showComingSoon?: boolean;
	showMaintenance?: boolean;
}

interface PageOption {
	value: string;
	label: string;
	edit_url?: string;
	view_url?: string;
}

const SettingsPageSiteVisibility: FC<Props> = ({
	allSettings,
	onChange,
	showComingSoon = true,
	showMaintenance = true,
}) => {
	const [pages, setPages] = useState<PageOption[]>([]);
	const [isLoadingPages, setIsLoadingPages] = useState(false);
	const [isOpenDropdown, setIsOpenDropdown] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const currentMode = allSettings.site_visibility_mode || "disabled";
	const currentPageId = String(allSettings.site_visibility_page || "");

	const [selectedPageInfo, setSelectedPageInfo] = useState<PageOption | null>(() => {
		if (currentPageId && allSettings?.site_visibility_page_title) {
			return {
				value: currentPageId,
				label: allSettings.site_visibility_page_title,
			};
		}
		return null;
	});

	// Keep local page info synchronized if settings are discarded or changed externally
	useEffect(() => {
		if (!currentPageId) {
			setSelectedPageInfo(null);
			return;
		}
		if (selectedPageInfo && String(selectedPageInfo.value) === currentPageId) {
			return;
		}
		const matched = pages.find((p) => String(p.value) === currentPageId);
		if (matched) {
			setSelectedPageInfo(matched);
		} else if (allSettings?.site_visibility_page_title) {
			setSelectedPageInfo({
				value: currentPageId,
				label: allSettings.site_visibility_page_title,
			});
		} else {
			setSelectedPageInfo(null);
		}
	}, [currentPageId, allSettings?.site_visibility_page_title, pages, selectedPageInfo]);

	const dropdownRef = useRef<HTMLDivElement>(null);
	const searchInputRef = useRef<HTMLInputElement>(null);
	const currentPageIdRef = useRef<string>(currentPageId);
	currentPageIdRef.current = currentPageId;
	const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const enableComingSoonModeStatus = currentMode === "comingsoon";
	const enableMaintenanceModeStatus = currentMode === "maintenance";

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpenDropdown(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			if (searchTimerRef.current) {
				clearTimeout(searchTimerRef.current);
			}
		};
	}, []);

	// Focus search input when dropdown opens
	useEffect(() => {
		if (isOpenDropdown && searchInputRef.current) {
			searchInputRef.current.focus();
		}
	}, [isOpenDropdown]);

	const fetchPages = useCallback((searchKeyword = "") => {
		setIsLoadingPages(true);

		postAjax({
			action: "boostify_blocks_search_pages",
			data: { keyword: searchKeyword },
			timeout: 10000,
		})
			.then((response: any) => {
				setIsLoadingPages(false);
				if (response && response.success && Array.isArray(response.data)) {
					setPages(response.data);
					const activePageId = currentPageIdRef.current;
					if (activePageId) {
						const found = response.data.find(
							(p: PageOption) => String(p.value) === String(activePageId)
						);
						if (found) {
							setSelectedPageInfo(found);
						}
					}
				}
			})
			.catch(() => {
				setIsLoadingPages(false);
			});
	}, []);

	useEffect(() => {
		fetchPages();
	}, [fetchPages]);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		setSearchTerm(val);
		if (searchTimerRef.current) {
			clearTimeout(searchTimerRef.current);
		}
		searchTimerRef.current = setTimeout(() => {
			fetchPages(val);
		}, 300);
	};

	const updateVisibilityMode = (mode: "comingsoon" | "maintenance") => {
		let nextMode: "disabled" | "comingsoon" | "maintenance";
		if (currentMode === mode) {
			nextMode = "disabled";
		} else {
			nextMode = mode;
		}

		onChange({
			...allSettings,
			site_visibility_mode: nextMode,
		});
	};

	const updateSelectedPage = (page: PageOption) => {
		setSelectedPageInfo(page);
		setIsOpenDropdown(false);
		setSearchTerm("");
		onChange({
			...allSettings,
			site_visibility_page: page.value,
			site_visibility_page_title: page.label,
		});
	};

	const selectedPageLabel = currentPageId
		? (selectedPageInfo && String(selectedPageInfo.value) === currentPageId
				? selectedPageInfo.label
				: "") ||
		  pages.find((p) => String(p.value) === currentPageId)?.label ||
		  allSettings?.site_visibility_page_title ||
		  ""
		: "";

	const renderSelectComponent = () => {
		return (
			<div
				ref={dropdownRef}
				className="bb-visibility-select-wrap"
				onKeyDown={(e) => {
					if (e.key === "Escape") {
						setIsOpenDropdown(false);
					}
				}}
			>
				{/* Selector trigger button */}
				<button
					type="button"
					aria-expanded={isOpenDropdown}
					onClick={() => {
						const nextState = !isOpenDropdown;
						setIsOpenDropdown(nextState);
						if (nextState && pages.length === 0) {
							fetchPages();
						}
					}}
					className="bb-visibility-trigger"
				>
					<span
						className={`bb-visibility-trigger-text ${
							selectedPageLabel ? "is-selected" : "is-placeholder"
						}`}
					>
						{selectedPageLabel ||
							__("Select the page you want", "boostify-blocks")}
					</span>
					<ChevronDownIcon
						className={`bb-visibility-trigger-icon ${
							isOpenDropdown ? "is-open" : ""
						}`}
						aria-hidden="true"
					/>
				</button>

				{/* Dropdown menu */}
				{isOpenDropdown && (
					<div className="bb-visibility-dropdown">
						{/* Search input inside dropdown */}
						<div className="bb-visibility-search-row">
							<MagnifyingGlassIcon className="bb-visibility-search-icon" />
							<input
								ref={searchInputRef}
								type="text"
								value={searchTerm}
								onChange={handleSearchChange}
								placeholder={__("Search pages...", "boostify-blocks")}
								className="bb-visibility-search-input"
							/>
						</div>

						{/* Options list */}
						<div className="bb-visibility-list">
							{isLoadingPages ? (
								<div className="bb-visibility-status-msg">
									{__("Loading pages...", "boostify-blocks")}
								</div>
							) : pages.length === 0 ? (
								<div className="bb-visibility-status-msg">
									{__("No pages found", "boostify-blocks")}
								</div>
							) : (
								pages.map((p) => {
									const isSelected = String(p.value) === String(currentPageId);
									return (
										<div
											key={p.value}
											onClick={() => updateSelectedPage(p)}
											className={`bb-visibility-option ${
												isSelected ? "is-selected" : ""
											}`}
										>
											<span className="bb-visibility-option-label">{p.label}</span>
											{isSelected && (
												<CheckIcon className="bb-visibility-option-check" />
											)}
										</div>
									);
								})
							)}
						</div>
					</div>
				)}
			</div>
		);
	};

	return (
		<>
			{/* Coming Soon Mode */}
			{showComingSoon && (
				<div className="bb-settings-row">
					<div className="bb-settings-col-text">
						<div className="bb-settings-label">
							{__("Enable Coming Soon Mode", "boostify-blocks")}
						</div>
						<div className="bb-settings-desc">
							{__(
								"Is your website still in the making and not yet ready for other people to see? When the site is ready to be indexed, the 'Coming Soon' page returns an HTTP 200 status code.",
								"boostify-blocks"
							)}
						</div>
						{enableComingSoonModeStatus && renderSelectComponent()}
					</div>

					<button
						type="button"
						role="switch"
						aria-label={__("Enable Coming Soon Mode", "boostify-blocks")}
						aria-checked={enableComingSoonModeStatus}
						onClick={() => updateVisibilityMode("comingsoon")}
						className="bb-switch"
					>
						<span className="bb-switch-thumb" />
					</button>
				</div>
			)}

			{/* Maintenance Mode */}
			{showMaintenance && (
				<div className="bb-settings-row">
					<div className="bb-settings-col-text">
						<div className="bb-settings-label">
							{__("Enable Maintenance Mode", "boostify-blocks")}
						</div>
						<div className="bb-settings-desc">
							{__(
								"Maintenance Mode returns an HTTP 503 status code, signaling to search engines to revisit the website shortly. However, it's advisable not to utilize this mode for extended periods, ideally limiting its use to a few days.",
								"boostify-blocks"
							)}
						</div>
						{enableMaintenanceModeStatus && renderSelectComponent()}
					</div>

					<button
						type="button"
						role="switch"
						aria-label={__("Enable Maintenance Mode", "boostify-blocks")}
						aria-checked={enableMaintenanceModeStatus}
						onClick={() => updateVisibilityMode("maintenance")}
						className="bb-switch"
					>
						<span className="bb-switch-thumb" />
					</button>
				</div>
			)}
		</>
	);
};

export default SettingsPageSiteVisibility;
