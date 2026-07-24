import React, { useEffect, useState } from "react";
import { Button, Modal, Spinner } from "@wordpress/components";
import {
	ArrowDownOnSquareIcon,
	ArrowTopRightOnSquareIcon,
	ArrowUpRightIcon,
	CheckIcon,
	ClipboardIcon,
	HeartIcon,
	MagnifyingGlassIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { gql, useLazyQuery } from "@apollo/client";
import { GET_WCB_BLOCKS } from "./constant";
import { Edge, Edge2, Node, WcbBlocksRoot } from "./type";
import copy from "copy-to-clipboard";
import { useTimeoutFn } from "react-use";
import { useSelect, useDispatch } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";
import { rawHandler } from "@wordpress/blocks";
import Logo from "../components/Logo";

const HeaderToolBarPatterns = () => {
	// STATE
	let [indexCopying, setIndexCopying] = useState("");
	let [, , resetIsCopying] = useTimeoutFn(() => setIndexCopying(""), 1500);

	const [isOpen, setOpen] = useState(false);

	const [currentCategorySelected, setCurrentCategorySelected] =
		useState<string>("");
	const [currentTab, setCurrentTab] = useState<"patterns" | "page" | "favorites">(
		"patterns"
	);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
	const [togglingFavoriteId, setTogglingFavoriteId] = useState<number | null>(
		null
	);

	// CONSTS
	const [loadGreeting, { called, loading, data }] =
		useLazyQuery<WcbBlocksRoot>(GET_WCB_BLOCKS);

	let patternsEdge: Edge[] = [];
	let categoriesEdge: Record<string, Edge2["node"]> = {};
	if (data) {
		patternsEdge = data.wcbBlocks.edges;
		data.wcbBlocks.edges.forEach((element) => {
			element.node.wcbBlocksCategories.edges.map((item) => {
				categoriesEdge[item.node.id] = item.node;
			});
		});
	}

	// HOOKS
	const { selectedBlockClientIndex, selectedBlockClientId } = useSelect(
		(select) => {
			// @ts-ignore
			const { getSelectedBlockClientId, getBlockIndex } =
				select(blockEditorStore);
			const selectedBlockClientId = getSelectedBlockClientId();
			return {
				selectedBlockClientId,
				selectedBlockClientIndex: getBlockIndex(selectedBlockClientId),
			};
		},
		[]
	);
	const { insertBlocks } = useDispatch(blockEditorStore);

	// HANDLE
	const openModal = () => {
		setOpen(true);
		!called && loadGreeting();

		if (typeof jQuery === "function") {
			jQuery.post(
				(window as any).ajaxurl,
				{
					action: "boostify_blocks_get_favorite_patterns",
					nonce: (window as any)?.boostify_blocks_frontend_ajax_object?.nonce,
				},
				function (response: { data?: number[] }) {
					if (response?.data) {
						setFavoriteIds(response.data);
					}
				}
			);
		}
	};
	const closeModal = () => {
		setOpen(false);
	};

	const toggleFavorite = (databaseId: number) => {
		if (typeof jQuery !== "function" || togglingFavoriteId) {
			return;
		}

		const wasFavorite = favoriteIds.includes(databaseId);
		setFavoriteIds((prev) =>
			wasFavorite ? prev.filter((id) => id !== databaseId) : [...prev, databaseId]
		);
		setTogglingFavoriteId(databaseId);

		jQuery
			// @ts-ignore
			.post((window as any).ajaxurl, {
				action: "boostify_blocks_toggle_favorite_pattern",
				nonce: (window as any)?.boostify_blocks_frontend_ajax_object?.nonce,
				patternId: databaseId,
			})
			.done(function (response: { data?: number[] }) {
				if (response?.data) {
					setFavoriteIds(response.data);
				}
			})
			.fail(function () {
				// revert optimistic update on failure
				setFavoriteIds((prev) =>
					wasFavorite ? [...prev, databaseId] : prev.filter((id) => id !== databaseId)
				);
			})
			.always(function () {
				setTogglingFavoriteId(null);
			});
	};

	const insertWcbBlocks = (content: string) => {
		setOpen(false);
		const newBlocks = rawHandler({
			HTML: content,
		});
		const newIndex =
			selectedBlockClientIndex === -1
				? undefined
				: (selectedBlockClientIndex || 0) + 1;

		insertBlocks(newBlocks, newIndex);
	};

	// RENDER
	const renderBadge = (value: Edge2, index: number) => {
		const name = value.node.name;

		return (
			<div
				key={value.node.id}
				className={`relative text-white text-[10px] rounded-full px-2 py-0.5 leading-none capitalize font-medium flex items-center justify-center ${
					name === "pro" ? "bg-red-500" : "bg-green-500"
				}`}
			>
				<span>{name}</span>
			</div>
		);
	};

	const renderImportBtns = (post: Node) => {
		return (
			<div className="space-x-2 absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
				<button
					type="button"
					className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					onClick={(e) => {
						e.preventDefault();
						insertWcbBlocks(post.contentOrigin);
					}}
				>
					<ArrowDownOnSquareIcon
						className="-ml-1 mr-2 h-5 w-5"
						aria-hidden="true"
					/>
					Import
				</button>

				<button
					type="button"
					className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					onClick={(e) => {
						e.preventDefault();
						copy(post.contentOrigin, {
							format: "text/plain",
						});
						setIndexCopying(post.id);
						resetIsCopying();
					}}
				>
					{indexCopying !== post.id ? (
						<ClipboardIcon
							className="-ml-1 mr-2 h-5 w-5 text-gray-500"
							aria-hidden="true"
						/>
					) : (
						<CheckIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
					)}
					{indexCopying !== post.id ? "Copy" : "Copied!"}
				</button>
			</div>
		);
	};

	const renderCardItem = (value: Edge, index: number) => {
		const post = value.node;
		const isIncludeCategorySelected = !currentCategorySelected
			? true
			: post.wcbBlocksCategories.edges.some(
					(item) => item.node.id === currentCategorySelected
			  );

		const isIncludeTab =
			currentTab === "favorites" ? favoriteIds.includes(post.databaseId) : true;

		const normalizedSearchTerm = searchTerm.trim().toLowerCase();
		const isMatchSearch = !normalizedSearchTerm
			? true
			: post.title.toLowerCase().includes(normalizedSearchTerm) ||
			  post.wcbBlocksCategories.edges.some((item) =>
					item.node.name.toLowerCase().includes(normalizedSearchTerm)
			  ) ||
			  post.wcbBlocksTags.edges.some((item) =>
					item.node.name.toLowerCase().includes(normalizedSearchTerm)
			  );

		// CHECK FILTER
		if (!isIncludeCategorySelected || !isIncludeTab || !isMatchSearch) {
			return null;
		}

		const isFavorite = favoriteIds.includes(post.databaseId);

		return (
			<li key={post.id}>
				<div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-100/60 before:opacity-0 hover:before:opacity-100">
					<div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
						{renderImportBtns(post)}

						<button
							type="button"
							onClick={(e) => {
								e.preventDefault();
								toggleFavorite(post.databaseId);
							}}
							aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
							aria-pressed={isFavorite}
							className="absolute bottom-2 right-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white transition-colors"
						>
							{isFavorite ? (
								<HeartIconSolid className="h-4 w-4 text-red-500" />
							) : (
								<HeartIcon className="h-4 w-4 text-slate-600" />
							)}
						</button>

						{post.featuredImage?.node.sourceUrl && (
							<img
								src={post.featuredImage?.node.sourceUrl}
								srcSet={post.featuredImage?.node.srcSet}
								sizes="550px"
								alt="heroes"
								className="absolute inset-0 h-full w-full object-contain group-hover:opacity-60 transition-opacity"
							/>
						)}
					</div>
					<div className="flex space-x-2 mt-3.5 ">
						<h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600">
							<span className="relative">{post.title}</span>
						</h4>
						{post.wcbBlocksPricingPackages?.edges?.map(renderBadge)}
					</div>
					<a
						href={post.link}
						target="_blank"
						rel="noopener noreferrer"
						className="relative mt-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 flex items-center space-x-2"
					>
						<span>View demo</span>
						<ArrowUpRightIcon className="w-3 h-3" />
					</a>
				</div>
			</li>
		);
	};

	const renderTopTabs = () => {
		const tabs: { key: typeof currentTab; label: string }[] = [
			{ key: "patterns", label: "Patterns" },
			{ key: "page", label: "Page" },
			{ key: "favorites", label: "Favorites" },
		];

		return (
			<div
				className="flex h-full items-center gap-6"
				role="tablist"
				aria-orientation="horizontal"
			>
				{tabs.map((tab) => {
					const isActive = currentTab === tab.key;

					return (
						<button
							key={tab.key}
							type="button"
							role="tab"
							aria-selected={isActive}
							onClick={() => setCurrentTab(tab.key)}
							className={`relative flex h-full items-center gap-1.5 text-sm font-medium transition-colors ${
								isActive
									? "text-slate-900 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-slate-900"
									: "text-slate-500 hover:text-slate-800"
							}`}
						>
							{tab.key === "favorites" &&
								(isActive ? (
									<HeartIconSolid className="h-4 w-4 text-red-500" />
								) : (
									<HeartIcon className="h-4 w-4" />
								))}
							{tab.label}
						</button>
					);
				})}
			</div>
		);
	};

	const renderCategoryList = () => {
		const categories = Object.values(categoriesEdge);

		return (
			<div className="flex flex-col gap-0.5" role="list">
				<button
					type="button"
					onClick={() => setCurrentCategorySelected("")}
					className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
						!currentCategorySelected
							? "bg-sky-50 text-sky-700"
							: "text-slate-600 hover:bg-slate-100"
					}`}
				>
					All
				</button>
				{categories.map((item) => (
					<button
						key={item.id}
						type="button"
						onClick={() => setCurrentCategorySelected(item.id)}
						className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
							currentCategorySelected === item.id
								? "bg-sky-50 text-sky-700"
								: "text-slate-600 hover:bg-slate-100"
						}`}
					>
						{item.name}
					</button>
				))}
			</div>
		);
	};

	const renderSearchInput = () => {
		return (
			<div className="relative w-full p-0.5">
				<MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
				<input
					type="text"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.currentTarget.value)}
					placeholder="Search patterns..."
					className="h-9 w-full rounded-lg border-0 bg-slate-100 pl-9 pr-8 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
				/>
				{searchTerm && (
					<button
						type="button"
						onClick={() => setSearchTerm("")}
						aria-label="Clear search"
						className="absolute right-2 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-slate-400 hover:text-slate-600"
					>
						<XMarkIcon className="h-3.5 w-3.5" />
					</button>
				)}
			</div>
		);
	};

	const renderEmpty = () => {
		return (
			<div className="text-center">
				<svg
					className="mx-auto h-12 w-12 text-gray-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						vectorEffect="non-scaling-stroke"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
					/>
				</svg>
				<h3 className="mt-2 text-sm font-semibold text-gray-900">No items!</h3>
				<p className="mt-1 text-sm text-gray-500">
					{currentTab === "favorites"
						? "You haven't favorited any patterns yet."
						: "Please try filtering another way."}
				</p>
			</div>
		);
	};

	const renderNoData = () => {
		return (
			<div className="text-center">
				<svg
					className="mx-auto h-12 w-12 text-gray-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						vectorEffect="non-scaling-stroke"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
					/>
				</svg>
				<h3 className="mt-2 text-sm font-semibold text-gray-900">No data</h3>
				<p className="mt-1 text-sm text-gray-500">
					There are no page templates yet.
				</p>
			</div>
		);
	};

	const renderContent = () => {
		if (currentTab === "page") {
			return (
				<div className="flex flex-1 items-center justify-center">{renderNoData()}</div>
			);
		}

		const renderedCards = patternsEdge.map(renderCardItem).filter(Boolean);

		if (!renderedCards.length) {
			return (
				<div className="flex flex-1 items-center justify-center">{renderEmpty()}</div>
			);
		}

		return (
			<ul className="col-span-3 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8">
				{renderedCards}
			</ul>
		);
	};

	const renderModal = () => {
		return (
			<Modal
				onRequestClose={closeModal}
				// @ts-ignore
				isFullScreen
				__experimentalHideHeader
			>
				<div className="flex h-full min-h-0 flex-col">
					{/* Top bar: logo/title, tabs, actions */}
					<div className="flex flex-shrink-0 flex-wrap items-center justify-between gap-y-3 border-b border-slate-200 pb-4">
						<div className="flex min-w-0 items-center">
							<Logo className="h-5 w-5 text-slate-900" />
							<h2 className="ml-2 truncate text-base font-medium leading-7 text-slate-900">
								Templates
							</h2>
							<p className="ml-3 whitespace-nowrap rounded-lg bg-slate-100 py-0.5 px-2 text-xs font-semibold leading-6 text-slate-700 block">
								{data ? patternsEdge.length : ""} patterns
							</p>
						</div>

						<div className="h-9">{renderTopTabs()}</div>

						<div className="flex items-center">
							<a
								href="https://boostifyblocks.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="relative ml-2 h-9 w-9 items-center justify-center flex hover:bg-gray-100 rounded-md transition-colors"
							>
								<ArrowTopRightOnSquareIcon className="w-4 h-4" />
							</a>
							<button
								type="button"
								onClick={closeModal}
								className="relative ml-2 h-9 w-9 items-center justify-center flex hover:bg-gray-200 rounded-md transition-colors"
								aria-label="Close modal"
							>
								<XMarkIcon className="w-4 h-4" />
							</button>
						</div>
					</div>

					{/* Body: sidebar (search + categories) + pattern grid */}
					{called && loading ? (
						<div className="flex flex-1 min-h-0 items-center justify-center">
							<Spinner />
						</div>
					) : (
						<div className="flex flex-1 min-h-0 gap-6 pt-6">
							<div className="hidden w-56 flex-shrink-0 flex-col gap-4 overflow-y-auto pr-2 sm:flex">
								{renderSearchInput()}
								{renderCategoryList()}
							</div>

							<div className="flex min-w-0 flex-1 flex-col overflow-y-auto">
								<div className="mb-4 sm:hidden">{renderSearchInput()}</div>
								{renderContent()}
							</div>
						</div>
					)}
				</div>
			</Modal>
		);
	};

	// MAIN RETURN
	return (
		<>
			<Button
				className="wcb-HeaderToolBarPatternsBtn flex-shrink-0 mx-2 button button-primary leading-none h-[33px] text-[13px] flex items-center justify-center"
				onClick={openModal}
			>
				<Logo className="w-4 h-4 text-white" />
				<span className="ml-2">Templates</span>
			</Button>

			{isOpen && renderModal()}
		</>
	);
};

export default HeaderToolBarPatterns;
