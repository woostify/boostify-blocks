import React, { FC, useState } from "react";
import {
	CheckIcon,
	SignalSlashIcon,
	ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { Wcb_blocks_enable_disable_options_Type, Wcb_block_Type } from "../App";
import MyToggle from "./MyToggle";
import toast from "react-hot-toast";
import { Menu } from "@headlessui/react";
import { __ } from "@wordpress/i18n";
import {
	EXTENSIONS_LIST,
	Wcb_grid_item_Type,
	getBlockDemoUrl,
} from "../extensions";

interface Props {
	initWcbBlocksEnableDisable: Wcb_blocks_enable_disable_options_Type;
	initWcbBlocksList: Wcb_block_Type[];
	blocksStatus: Wcb_blocks_enable_disable_options_Type;
	setBlocksStatus: (status: Wcb_blocks_enable_disable_options_Type) => void;
	allSettings?: typeof window.boostify_blocks_global_variables;
	onUpdateSettings?: (settings: Partial<typeof window.boostify_blocks_global_variables>) => void;
}

const BlocksPage: FC<Props> = ({
	initWcbBlocksList,
	blocksStatus,
	setBlocksStatus,
	allSettings = {},
	onUpdateSettings,
}) => {
	const [blocksList] = useState(initWcbBlocksList);

	const allItems: Wcb_grid_item_Type[] = [
		...blocksList.map((block) => ({
			...block,
			type: "block" as const,
			demoUrl: getBlockDemoUrl(block.name),
		})),
		...EXTENSIONS_LIST,
	];

	const handleDisableEnableBlocks = (obj: any) => {
		if (typeof jQuery !== "function") {
			return;
		}
		const newBlocksStatus = {
			...blocksStatus,
			...obj,
		};
		setBlocksStatus(newBlocksStatus);
		const data = {
			action: "boostify_blocks_dashboard_blocks_disable_enable",
			nonce: (window as any)?.boostify_blocks_frontend_ajax_object?.nonce,
			blocksStatus: newBlocksStatus,
		};
		toast.promise(
			// @ts-ignore
			jQuery.post(ajaxurl, data, function (response) {
				console.log("Got this from the server: ", response);
			}),
			{
				loading: __( "Saving...", "boostify-blocks" ),
				success: <div>{__( "Successful saved!", "boostify-blocks" )}</div>,
				error: <div>{__( "Could not save.", "boostify-blocks" )}</div>,
			}
		);
	};

	const renderButtons = () => {
		return (
			<div className="flex space-x-3 justify-end">
				<button
					type="button"
					className="inline-flex items-center rounded-xl border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					onClick={() => {
						const newblocksStatus: Wcb_blocks_enable_disable_options_Type =
							Object.keys(blocksStatus).reduce(
								(obj: Wcb_blocks_enable_disable_options_Type, item) => {
									return {
										...obj,
										[item]: "enabled",
									};
								},
								{}
							);
						handleDisableEnableBlocks(newblocksStatus);
					}}
				>
					<CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
					{__( "Active all", "boostify-blocks" )}
				</button>
				<button
					type="button"
					className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					onClick={() => {
						const newblocksStatus = Object.keys(blocksStatus).reduce(
							(obj, item) => {
								return {
									...obj,
									[item]: "disabled",
								};
							},
							{}
						);
						handleDisableEnableBlocks(newblocksStatus);
					}}
				>
					<SignalSlashIcon
						className="-ml-1 mr-2 h-5 w-5 text-gray-500"
						aria-hidden="true"
					/>
					{__( "Deactive all", "boostify-blocks" )}
				</button>
			</div>
		);
	};

	const renderCard = (item: Wcb_grid_item_Type) => {
		if (item.parent) {
			return null;
		}

		const isExtension = item.type === "extension";
		const enabled = isExtension
			? (allSettings as Record<string, any>)?.[item.settingKey!] !== "false"
			: blocksStatus[item.name] !== "disabled";

		const handleToggle = (checked: boolean) => {
			if (isExtension) {
				if (onUpdateSettings && item.settingKey) {
					onUpdateSettings({
						[item.settingKey]: checked ? "true" : "false",
					});
				}
			} else {
				handleDisableEnableBlocks({
					[item.name]: checked ? "enabled" : "disabled",
				});
			}
		};

		return (
			<li
				key={item.name}
				className="overflow-hidden rounded-xl border border-gray-200 flex flex-col"
			>
				<div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6 ">
					<div className="h-11 w-11 flex-shrink-0 flex items-center justify-center rounded-lg bg-white ring-1 ring-gray-900/10">
						{typeof item.icon === "string" ? (
							<i
								className={`text-lg w-6 h-6 text-black dashicon dashicons dashicons-${item.icon} ${item.icon}`}
							/>
						) : (
							<item.icon className="w-6 h-6 text-black" />
						)}
					</div>
					<div className="flex items-center gap-x-2">
						<span className="text-sm font-medium leading-6 text-gray-900">
							{item.title}
						</span>
						{isExtension && (
							<span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">
								{__( "Extension", "boostify-blocks" )}
							</span>
						)}
					</div>
					{item.demoUrl && (
						<Menu
							as="a"
							href={item.demoUrl}
							target="_blank"
							rel="noopener noreferrer"
							title={
								isExtension
									? __( "Documentation", "boostify-blocks" )
									: __( "View demo", "boostify-blocks" )
							}
							className="relative ml-auto text-slate-700 hover:text-black"
						>
							<ArrowUpRightIcon className="w-5 h-5" />
						</Menu>
					)}
				</div>
				<dl className="flex-grow flex flex-col -my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6 ">
					<div className="flex justify-between gap-x-4 py-3">
						<p className="text-gray-700">{item.description}</p>
					</div>
					<div className="mt-auto flex justify-between gap-x-4 py-3">
						<dt className="text-gray-500">{__( "Turn on/off", "boostify-blocks" )}</dt>
						<dd className="flex items-start gap-x-2">
							<div className="flex-shrink-0">
								<MyToggle
									checked={enabled}
									id={item.name}
									name={item.name}
									onChange={handleToggle}
								/>
							</div>
						</dd>
					</div>
				</dl>
			</li>
		);
	};

	const renderGridCards = () => {
		return (
			<ul
				role="list"
				className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8"
			>
				{allItems.map(renderCard)}
			</ul>
		);
	};

	return (
		<div>
			{renderButtons()}
			{renderGridCards()}
		</div>
	);
};

export default BlocksPage;
