import { __ } from "@wordpress/i18n";
import {
	RichText,
	InnerBlocks,
	useBlockProps,
	// @ts-ignore
	useInnerBlocksProps,
	store as blockEditorStore,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	Button,
	TabPanel,
} from "@wordpress/components";
import React, { useEffect, useState, FC, useRef } from "react";
import { WcbAttrs } from "./attributes";
import { EditProps } from "../block-container/Edit";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import { WCB_ACCORDION_PANEL_ICON } from "../block-accordion/WcbAccordionPanelIcon";
import { WCB_ACCORDION_PANEL_GENERAL } from "../block-accordion/WcbAccordionPanelGeneral";
import { useSelect } from "@wordpress/data";
import MyCacheProvider from "../components/MyCacheProvider";
import MyIconFull from "../components/controls/MyIconFull";
import SelecIcon, {
	DEFAULT_MY_ICON,
} from "../components/controls/SelectIcon/SelecIcon";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import SelectParentBlock from "./SelectParentBlock";

const Edit: FC<
	EditProps<
		WcbAttrs,
		{
			"boostify-blocks/accordion_icon"?: WCB_ACCORDION_PANEL_ICON;
			"boostify-blocks/accordion_general"?: WCB_ACCORDION_PANEL_GENERAL;
		}
	>
> = (props) => {
	const { attributes, setAttributes, clientId, context } = props;
	const {
		uniqueId,
		title,
		headingTag,
		enableSeparator,
		general_icon,
		defaultOpen,
		icon,
		iconSide = "right",
		hideLabel = false,
		ariaLabel = "",
	} = attributes;

	const ref = useRef<HTMLDivElement>(null);
	const wrapBlockProps = useBlockProps({ ref });
	const {} = useSetBlockPanelInfo(uniqueId);

	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		if (UNIQUE_ID) {
			setAttributes({
				uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
			});
		}
	}, [UNIQUE_ID]);

	const blockIndex: number = useSelect(
		(select) => (select(blockEditorStore) as any).getBlockIndex(clientId),
		[clientId]
	);

	const isInnerBlockSelected: boolean = useSelect(
		(select) =>
			(select(blockEditorStore) as any).hasSelectedInnerBlock(clientId, true),
		[clientId]
	);

	const hasInnerBlocks: boolean = useSelect(
		(select) => {
			const block = (select(blockEditorStore) as any).getBlock(clientId);
			return !!(block && block.innerBlocks.length);
		},
		[clientId]
	);

	const [isOpenInEditor, setIsOpenInEditor] = useState<boolean>(() => {
		const general = context["boostify-blocks/accordion_general"];
		if (!general) return blockIndex === 0;
		const isStartCollapsed = !!general.startCollapsed;
		const openIndex = Number(general.openPane || 0);
		return !isStartCollapsed && blockIndex === openIndex;
	});
	const [activeTab, setActiveTab] = useState<string>("General");

	// Toggle WordPress default Advanced panel depending on activeTab
	useEffect(() => {
		const advancedPanels = document.querySelectorAll(
			".block-editor-block-inspector__advanced, .components-panel__body.block-editor-block-inspector__advanced"
		);
		advancedPanels.forEach((panel) => {
			(panel as HTMLElement).style.display =
				activeTab === "Advances" || activeTab === "Advanced"
					? "block"
					: "none";
		});
		return () => {
			advancedPanels.forEach((panel) => {
				(panel as HTMLElement).style.display = "";
			});
		};
	}, [activeTab]);

	// Sync context from parent accordion (attributes only, do not toggle editor view)
	useEffect(() => {
		const general = context["boostify-blocks/accordion_general"];
		const parentIcon = context["boostify-blocks/accordion_icon"];

		if (general) {
			const isStartCollapsed = !!general.startCollapsed;
			const openIndex = Number(general.openPane || 0);
			const isInitialOpen = !isStartCollapsed && blockIndex === openIndex;

			setAttributes({
				headingTag: general.headingTag || "div",
				enableSeparator: general.enableSeparator ?? true,
				general_icon: parentIcon || general_icon,
				defaultOpen: isInitialOpen,
			});

			setIsOpenInEditor(isInitialOpen);
		}
	}, [
		context["boostify-blocks/accordion_general"],
		context["boostify-blocks/accordion_icon"],
		blockIndex,
	]);

	const isOpen = isInnerBlockSelected || isOpenInEditor;

	const innerBlocksProps = useInnerBlocksProps(
		{ className: "wcb-accordion-item__content" },
		{
			renderAppender: hasInnerBlocks
				? undefined
				: InnerBlocks.ButtonBlockAppender,
		}
	);

	const hasCustomIcon = !!(
		icon?.iconName ||
		icon?.svgCode ||
		icon?.imageData?.mediaUrl
	);

	const renderTriggerIcon = () => {
		if (!general_icon?.enableIcon) {
			return null;
		}
		return (
			<span className="wcb-accordion-item__icon-wrapper">
				{isOpen && general_icon?.icon && (
					<MyIconFull
						className="wcb-accordion-item__icon wcb-accordion-item__icon--active"
						icon={general_icon.icon}
					/>
				)}
				{!isOpen && general_icon?.inactiveIcon && (
					<MyIconFull
						className="wcb-accordion-item__icon wcb-accordion-item__icon--inactive"
						icon={general_icon.inactiveIcon}
					/>
				)}
			</span>
		);
	};

	const HeadingTag = (headingTag || "div") as keyof JSX.IntrinsicElements;
	const triggerIconPos = general_icon?.iconPosition || "right";

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-accordion-item__wrap ${
					isOpen ? "is-open" : ""
				} ${uniqueId}`}
				data-uniqueid={uniqueId}
			>
				<InspectorControls>
					<SelectParentBlock clientId={clientId} />

					<TabPanel
						className="wcb-inspectorControls__panel wcb-pane-tabs"
						activeClass="active-tab"
						initialTabName="General"
						onSelect={(tabName) => setActiveTab(tabName)}
						tabs={[
							{
								name: "General",
								title: (
									<div className="flex flex-col items-center justify-center space-y-0.5">
										<svg
											viewBox="0 0 24 24"
											fill="none"
											className="w-5 h-5 fill-none"
										>
											<path
												d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeMiterlimit="10"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeMiterlimit="10"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeMiterlimit="10"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeMiterlimit="10"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<div>{__("General", "boostify-blocks")}</div>
									</div>
								) as any,
							},
							{
								name: "Advances",
								title: (
									<div className="flex flex-col items-center justify-center space-y-0.5">
										<svg
											className="w-5 h-5 fill-none"
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeMiterlimit="10"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeMiterlimit="10"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<div>{__("Advances", "boostify-blocks")}</div>
									</div>
								) as any,
							},
						]}
					>
						{(tab) => {
							if (tab.name === "General") {
								return (
									<PanelBody
										title={__("Title Icon Settings", "boostify-blocks")}
										initialOpen={true}
									>
										<div className="wcb-pane-icon-control mb-4">
											<SelecIcon
												isCompact={true}
												iconData={
													icon || {
														type: "icon",
														iconName: undefined,
														imageData: { mediaId: 0, mediaUrl: "" },
														svgCode: "",
													}
												}
												onChange={(val) =>
													setAttributes({ icon: val })
												}
											/>
										</div>

										<SelectControl
											label={__("ICON SIDE", "boostify-blocks")}
											value={iconSide || "right"}
											options={[
												{
													value: "right",
													label: __("Right", "boostify-blocks"),
												},
												{
													value: "left",
													label: __("Left", "boostify-blocks"),
												},
											]}
											onChange={(val) =>
												setAttributes({ iconSide: val as "right" | "left" })
											}
										/>

										<ToggleControl
											label={__("Show only Icon", "boostify-blocks")}
											checked={!!hideLabel}
											onChange={(val) => setAttributes({ hideLabel: val })}
										/>

										<TextControl
											label={__(
												"Button Label Attribute for Accessibility",
												"boostify-blocks"
											)}
											value={ariaLabel || ""}
											onChange={(val) =>
												setAttributes({ ariaLabel: val })
											}
										/>
									</PanelBody>
								);
							}
							if (tab.name === "Advances" || tab.name === "Advanced") {
								return (
									<PanelBody
										title={__("Advances", "boostify-blocks")}
										initialOpen={true}
									>
										<p className="components-base-control__help text-xs text-gray-500 mb-2">
											{__(
												"HTML anchor and Additional CSS class(es) can be configured in the WordPress Advanced panel below.",
												"boostify-blocks"
											)}
										</p>
									</PanelBody>
								);
							}
							return <></>;
						}}
					</TabPanel>
				</InspectorControls>

				<div className="wcb-accordion-item__header">
					<HeadingTag className="wcb-accordion-item__heading">
						<button
							type="button"
							className={`wcb-accordion-item__trigger wcb-accordion-item__trigger--icon-${triggerIconPos} ${
								hideLabel ? "wcb-accordion-item--hide-label" : ""
							}`}
							aria-label={ariaLabel || undefined}
							onClick={(e) => {
								e.preventDefault();
								setIsOpenInEditor((prev) => !prev);
							}}
						>
							{triggerIconPos === "left" && renderTriggerIcon()}

							<span className="wcb-accordion-item__title-wrap">
								{hasCustomIcon && iconSide === "left" && (
									<span className="wcb-accordion-item__title-icon wcb-accordion-item__title-icon--left">
										<MyIconFull icon={icon} />
									</span>
								)}

								{hideLabel && !hasCustomIcon && (
									<span className="wcb-accordion-item__title-placeholder text-xs text-gray-400 italic">
										{__("(Select an icon in sidebar)", "boostify-blocks")}
									</span>
								)}

								<RichText
									tagName="span"
									value={title}
									allowedFormats={["core/bold", "core/italic"]}
									onChange={(content) => setAttributes({ title: content })}
									placeholder={__("Add Title", "boostify-blocks")}
									className="wcb-accordion-item__title"
									onClick={(e) => {
										e.stopPropagation();
									}}
								/>

								{hasCustomIcon && iconSide === "right" && (
									<span className="wcb-accordion-item__title-icon wcb-accordion-item__title-icon--right">
										<MyIconFull icon={icon} />
									</span>
								)}
							</span>

							{triggerIconPos === "right" && renderTriggerIcon()}
						</button>
					</HeadingTag>
				</div>

				<div
					className={`wcb-accordion-item__panel ${isOpen ? "is-open" : ""}`}
					style={{
						display: isOpen ? "block" : "none",
					}}
				>
					<div className="wcb-accordion-item__panel-inner">
						{enableSeparator && (
							<div className="wcb-accordion-item__separator" />
						)}
						<div {...innerBlocksProps} />
					</div>
				</div>
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
