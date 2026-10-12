import React, { FC, useState, useEffect, useCallback, useRef } from "react";
import { __, sprintf } from "@wordpress/i18n";
import {
	ChevronDownIcon,
	MagnifyingGlassIcon,
	CheckIcon,
} from "@heroicons/react/24/outline";
import MyToggle from "./MyToggle";
import "../../________";

interface Props {
	allSettings: typeof window.boostify_blocks_global_variables;
	onChange: (data: typeof window.boostify_blocks_global_variables) => void;
}

interface PageOption {
	value: string;
	label: string;
	edit_url?: string;
	view_url?: string;
}

const debounce = (func: Function, delay: number) => {
	let timeoutId: any;
	return (...args: any[]) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func(...args), delay);
	};
};

const SettingsPageSiteVisibility: FC<Props> = ({ allSettings, onChange }) => {
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

	const dropdownRef = useRef<HTMLDivElement>(null);
	const searchInputRef = useRef<HTMLInputElement>(null);

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
		};
	}, []);

	// Focus search input when dropdown opens
	useEffect(() => {
		if (isOpenDropdown && searchInputRef.current) {
			searchInputRef.current.focus();
		}
	}, [isOpenDropdown]);

	const fetchPages = useCallback((searchKeyword = "") => {
		if (typeof jQuery !== "function") {
			return;
		}

		setIsLoadingPages(true);
		const data = {
			action: "boostify_blocks_search_pages",
			nonce: (window as any)?.boostify_blocks_frontend_ajax_object?.nonce,
			keyword: searchKeyword,
		};

		// @ts-ignore
		jQuery.post(ajaxurl, data, function (response: any) {
			setIsLoadingPages(false);
			if (response && response.success && Array.isArray(response.data)) {
				setPages(response.data);
				if (currentPageId) {
					const found = response.data.find(
						(p: PageOption) => String(p.value) === String(currentPageId)
					);
					if (found) {
						setSelectedPageInfo(found);
					}
				}
			}
		});
	}, [currentPageId]);

	useEffect(() => {
		fetchPages();
	}, [fetchPages]);

	const debouncedFetchPages = useCallback(
		debounce((kw: string) => {
			fetchPages(kw);
		}, 300),
		[fetchPages]
	);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		setSearchTerm(val);
		debouncedFetchPages(val);
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

	const selectedPageLabel =
		selectedPageInfo?.label ||
		pages.find((p) => String(p.value) === String(currentPageId))?.label ||
		allSettings?.site_visibility_page_title ||
		"";

	const renderSelectComponent = () => {
		return (
			<div ref={dropdownRef} className="relative mt-4 w-9/12 max-w-lg">
				{/* Selector trigger button */}
				<button
					type="button"
					onClick={() => {
						const nextState = !isOpenDropdown;
						setIsOpenDropdown(nextState);
						if (nextState && pages.length === 0) {
							fetchPages();
						}
					}}
					className="w-full h-10 px-3.5 bg-white border border-slate-200 rounded-md text-sm text-left flex items-center justify-between cursor-pointer shadow-none hover:border-slate-300 focus:outline-none focus:border-slate-400 transition"
				>
					<span
						className={`truncate block ${
							selectedPageLabel ? "text-slate-600 font-medium" : "text-slate-400"
						}`}
					>
						{selectedPageLabel ||
							__("Select the page you want", "boostify-blocks")}
					</span>
					<ChevronDownIcon
						className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-150 ${
							isOpenDropdown ? "rotate-180" : ""
						}`}
						aria-hidden="true"
					/>
				</button>

				{/* Dropdown menu */}
				{isOpenDropdown && (
					<div className="absolute left-0 right-0 z-50 mt-1.5 bg-white border border-slate-200 rounded-md shadow-lg overflow-hidden animate-fadeIn">
						{/* Search input inside dropdown */}
						<div className="p-2 border-b border-slate-100 flex items-center space-x-2 bg-slate-50/50">
							<MagnifyingGlassIcon className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
							<input
								ref={searchInputRef}
								type="text"
								value={searchTerm}
								onChange={handleSearchChange}
								placeholder={__("Search pages...", "boostify-blocks")}
								className="w-full bg-transparent border-none text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-0 p-1"
							/>
						</div>

						{/* Options list */}
						<div className="max-h-48 overflow-y-auto py-1">
							{isLoadingPages ? (
								<div className="py-3 px-3 text-xs text-slate-400 text-center">
									{__("Loading pages...", "boostify-blocks")}
								</div>
							) : pages.length === 0 ? (
								<div className="py-3 px-3 text-xs text-slate-400 text-center">
									{__("No pages found", "boostify-blocks")}
								</div>
							) : (
								pages.map((p) => {
									const isSelected = String(p.value) === String(currentPageId);
									return (
										<div
											key={p.value}
											onClick={() => updateSelectedPage(p)}
											className={`px-3.5 py-2 text-sm cursor-pointer flex items-center justify-between transition ${
												isSelected
													? "bg-slate-50 text-blue-600 font-medium"
													: "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
											}`}
										>
											<span className="truncate flex-1">{p.label}</span>
											{isSelected && (
												<CheckIcon className="w-4 h-4 text-blue-600 shrink-0 ml-2" />
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
		<div className="divide-y divide-gray-200">
			<div className="pb-8">
				<h2 className="text-xl font-semibold text-gray-800 mb-6">
					{__("Site Visibility", "boostify-blocks")}
				</h2>

				<div className="space-y-0">
					{/* Coming Soon Mode */}
					<div className="py-6">
						<MyToggle
							checked={enableComingSoonModeStatus}
							onChange={() => updateVisibilityMode("comingsoon")}
							label={__("Enable Coming Soon Mode", "boostify-blocks")}
							desc={__(
								"Is your website still in the making and not yet ready for other people to see? When the site is ready to be indexed, the 'Coming Soon' page returns an HTTP 200 status code.",
								"boostify-blocks"
							)}
							id="MyToggle_ComingSoonMode"
						/>
						{enableComingSoonModeStatus && renderSelectComponent()}
					</div>

					<hr className="w-full border-b-0 border-x-0 border-t border-solid border-slate-200" />

					{/* Maintenance Mode */}
					<div className="py-6">
						<MyToggle
							checked={enableMaintenanceModeStatus}
							onChange={() => updateVisibilityMode("maintenance")}
							label={__("Enable Maintenance Mode", "boostify-blocks")}
							desc={__(
								"Maintenance Mode returns an HTTP 503 status code, signaling to search engines to revisit the website shortly. However, it's advisable not to utilize this mode for extended periods, ideally limiting its use to a few days.",
								"boostify-blocks"
							)}
							id="MyToggle_MaintenanceMode"
						/>
						{enableMaintenanceModeStatus && renderSelectComponent()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingsPageSiteVisibility;
