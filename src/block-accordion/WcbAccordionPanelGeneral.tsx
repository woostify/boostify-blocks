import { ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import { dispatch } from "@wordpress/data";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import { TextAlignment } from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_ACCORDION_PANEL_GENERAL {
	headingTag: keyof HTMLElementTagNameMap;
	allowMultipleOpen: boolean;
	linkPaneCollapse?: boolean;
	startCollapsed: boolean;
	openPane: number;
	faqSchema: boolean;
	enableSeparator: boolean;
	columns: HasResponsive<number>;
	textAlignment: TextAlignment;
}

export const WCB_ACCORDION_PANEL_GENERAL_DEMO: WCB_ACCORDION_PANEL_GENERAL = {
	headingTag: "div",
	allowMultipleOpen: false,
	linkPaneCollapse: true,
	startCollapsed: false,
	openPane: 0,
	faqSchema: false,
	enableSeparator: true,
	columns: { Desktop: 1, Tablet: 1, Mobile: 1 },
	textAlignment: "left",
};

interface Props {
	panelData: WCB_ACCORDION_PANEL_GENERAL;
	setAttr__: (data: WCB_ACCORDION_PANEL_GENERAL) => void;
	childBlocks?: any[];
}

const WcbAccordionPanelGeneral: FC<Props> = ({
	panelData = WCB_ACCORDION_PANEL_GENERAL_DEMO,
	setAttr__,
	childBlocks = [],
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const {
		allowMultipleOpen,
		linkPaneCollapse,
		startCollapsed,
		openPane,
		columns,
	} = panelData;

	const { currentDeviceValue: currentColumns } = getValueFromAttrsResponsives(
		columns,
		deviceType
	);

	const isLinkPaneCollapse =
		linkPaneCollapse !== undefined ? linkPaneCollapse : !allowMultipleOpen;

	const handleSetDeviceType = (dv: ResponsiveDevices) => {
		const editorDispatch = (dispatch as any)("core/editor");
		const editPostDispatch = (dispatch as any)("core/edit-post");

		if (editorDispatch?.setDeviceType) {
			editorDispatch.setDeviceType(dv);
		}
		if (editPostDispatch?.__experimentalSetPreviewDeviceType) {
			editPostDispatch.__experimentalSetPreviewDeviceType(dv);
		}
	};

	const panesCount =
		childBlocks && childBlocks.length > 0 ? childBlocks.length : 2;
	const panes = Array.from({ length: panesCount }, (_, i) => i);

	return (
		<div
			className="components-panel__body is-opened"
			style={{ borderTop: 0, padding: "16px" }}
		>
			<div className="space-y-4">
				<ToggleControl
					label={__("Panes close when another opens", "boostify-blocks")}
					checked={isLinkPaneCollapse}
					onChange={(checked) => {
						setAttr__({
							...panelData,
							allowMultipleOpen: !checked,
							linkPaneCollapse: checked,
						});
					}}
				/>

				<ToggleControl
					label={__("Start with all panes collapsed", "boostify-blocks")}
					checked={!!startCollapsed}
					onChange={(checked) => {
						setAttr__({ ...panelData, startCollapsed: checked });
					}}
				/>

				<div className="wcb-column-layout-control pt-1">
					<div className="flex items-center justify-between mb-2">
						<span className="font-medium text-xs text-gray-900">
							{__("Column Layout", "boostify-blocks")}
						</span>
						<div className="flex items-center gap-1">
							<button
								type="button"
								onClick={() => handleSetDeviceType("Desktop")}
								className={`p-1 rounded hover:bg-gray-100 transition-colors cursor-pointer border-0 bg-transparent ${
									deviceType === "Desktop"
										? "text-[#2271b1]"
										: "text-gray-400 hover:text-gray-600"
								}`}
								title={__("Desktop", "boostify-blocks")}
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<rect x="2" y="3" width="20" height="14" rx="2" />
									<line x1="8" y1="21" x2="16" y2="21" />
									<line x1="12" y1="17" x2="12" y2="21" />
								</svg>
							</button>
							<button
								type="button"
								onClick={() => handleSetDeviceType("Tablet")}
								className={`p-1 rounded hover:bg-gray-100 transition-colors cursor-pointer border-0 bg-transparent ${
									deviceType === "Tablet"
										? "text-[#2271b1]"
										: "text-gray-400 hover:text-gray-600"
								}`}
								title={__("Tablet", "boostify-blocks")}
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<rect x="4" y="2" width="16" height="20" rx="2" />
									<line x1="12" y1="18" x2="12.01" y2="18" />
								</svg>
							</button>
							<button
								type="button"
								onClick={() => handleSetDeviceType("Mobile")}
								className={`p-1 rounded hover:bg-gray-100 transition-colors cursor-pointer border-0 bg-transparent ${
									deviceType === "Mobile"
										? "text-[#2271b1]"
										: "text-gray-400 hover:text-gray-600"
								}`}
								title={__("Mobile", "boostify-blocks")}
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<rect x="5" y="2" width="14" height="20" rx="2" />
									<line x1="12" y1="18" x2="12.01" y2="18" />
								</svg>
							</button>
						</div>
					</div>

					<div className="flex gap-2 w-full">
						{[1, 2, 3].map((colNum) => {
							const isSelected = (currentColumns || 1) === colNum;
							return (
								<button
									key={colNum}
									type="button"
									className={`flex-1 min-w-0 flex items-center justify-center py-2 px-1 rounded border transition-all cursor-pointer ${
										isSelected
											? "bg-[#2271b1] border-[#2271b1] text-white shadow-sm"
											: "bg-white border-[#dcdcde] text-[#8c8f94] hover:border-[#2271b1] hover:text-[#2271b1]"
									}`}
									onClick={() => {
										setAttr__({
											...panelData,
											columns: {
												...columns,
												[deviceType]: colNum,
											},
										});
									}}
									title={`${colNum} ${
										colNum === 1
											? __("Column", "boostify-blocks")
											: __("Columns", "boostify-blocks")
									}`}
								>
									{colNum === 1 && (
										<svg
											className="w-full h-auto max-h-[26px]"
											viewBox="0 0 68 34"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="3"
												y="3"
												width="62"
												height="28"
												rx="2"
												fill="currentColor"
											/>
										</svg>
									)}
									{colNum === 2 && (
										<svg
											className="w-full h-auto max-h-[26px]"
											viewBox="0 0 68 34"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="3"
												y="3"
												width="29"
												height="28"
												rx="2"
												fill="currentColor"
											/>
											<rect
												x="36"
												y="3"
												width="29"
												height="28"
												rx="2"
												fill="currentColor"
											/>
										</svg>
									)}
									{colNum === 3 && (
										<svg
											className="w-full h-auto max-h-[26px]"
											viewBox="0 0 68 34"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												x="3"
												y="3"
												width="18"
												height="28"
												rx="2"
												fill="currentColor"
											/>
											<rect
												x="25"
												y="3"
												width="18"
												height="28"
												rx="2"
												fill="currentColor"
											/>
											<rect
												x="47"
												y="3"
												width="18"
												height="28"
												rx="2"
												fill="currentColor"
											/>
										</svg>
									)}
								</button>
							);
						})}
					</div>
				</div>

				{!startCollapsed && (
					<div className="wcb-init-open-accordion pt-2">
						<h2 className="text-xs font-semibold text-gray-900 mb-2">
							{__("Initial Open Accordion", "boostify-blocks")}
						</h2>
						<div className="space-y-2">
							{panes.map((_, index) => {
								const isPaneActive = (openPane ?? 0) === index;
								const childTitle = childBlocks?.[index]?.attributes?.title;
								return (
									<button
										key={index}
										type="button"
										className={`w-full text-left px-3 py-2 text-xs font-semibold rounded border transition-colors cursor-pointer ${
											isPaneActive
												? "bg-[#1e1e1e] text-white border-[#1e1e1e]"
												: "bg-white text-[#1e1e1e] border-[#1e1e1e] hover:bg-gray-100"
										}`}
										onClick={() => {
											setAttr__({
												...panelData,
												openPane: index,
											});
										}}
									>
										{childTitle && childTitle.trim() !== ""
											? `${index + 1}. ${childTitle}`
											: `${__("Accordion Pane", "boostify-blocks")} ${index + 1}`}
									</button>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default WcbAccordionPanelGeneral;
