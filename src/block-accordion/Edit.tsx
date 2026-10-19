import { __ } from "@wordpress/i18n";
import {
	Button,
	PanelBody,
	SelectControl,
	ToggleControl,
} from "@wordpress/components";
import {
	useBlockProps,
	// @ts-ignore
	useInnerBlocksProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { BlockInstance, createBlock } from "@wordpress/blocks";
import { useSelect, useDispatch } from "@wordpress/data";
import React, { useEffect, FC, useRef, useCallback } from "react";
import { WcbAttrs, WcbAttrsForSave } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbAccordionPanelGeneral from "./WcbAccordionPanelGeneral";
import WcbAccordionPanelIcon from "./WcbAccordionPanelIcon";
import WcbAccordionPanel_StyleContainer, {
	WCB_ACCORDION_PANEL_STYLE_CONTAINER_DEMO_SIMPLE,
	WCB_ACCORDION_PANEL_STYLE_CONTAINER_DEMO_SOLID,
	WCB_ACCORDION_PANEL_STYLE_CONTAINER_DEMO_BORDERLESS,
} from "./WcbAccordionPanel_StyleContainer";
import WcbAccordionPanel_StyleQuestion, {
	WCB_ACCORDION_PANEL_STYLE_QUESTION_DEMO,
} from "./WcbAccordionPanel_StyleQuestion";
import WcbAccordionPanel_StyleAnswer, {
	WCB_ACCORDION_PANEL_STYLE_ANSWER_DEMO,
} from "./WcbAccordionPanel_StyleAnswer";
import WcbAccordionPanel_StyleIcon, {
	WCB_ACCORDION_PANEL_STYLE_ICON_DEMO,
} from "./WcbAccordionPanel_StyleIcon";
import WcbAccordionPanel_StyleDimension from "./WcbAccordionPanel_StyleDimension";
import WcbAccordionPanelPreset from "./WcbAccordionPanelPreset";
import MyCacheProvider from "../components/MyCacheProvider";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

const ALLOWED_BLOCKS = ["boostify-blocks/accordion-item"];
const TEMPLATE: any = [
	["boostify-blocks/accordion-item", { title: "What is an accordion?" }],
	["boostify-blocks/accordion-item", { title: "How do I add rich content?" }],
];

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		uniqueId,
		general_general,
		general_icon,
		style_container,
		style_question,
		style_icon,
		style_answer,
		style_dimension,
		general_preset,
		advance_motionEffect,
	} = attributes;

	const ref = useRef<HTMLDivElement>(null);
	const wrapBlockProps = useBlockProps({ ref });
	const {
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		if (UNIQUE_ID) {
			setAttributes({
				uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
			});
		}
	}, [UNIQUE_ID]);

	useEffect(() => {
		if (
			style_question?.backgroundColorActive === "#f3f4f6" ||
			style_question?.colorActive === "#111827"
		) {
			setAttributes({
				style_question: {
					...style_question,
					backgroundColorActive:
						style_question?.backgroundColorActive === "#f3f4f6"
							? "#4a5568"
							: style_question?.backgroundColorActive || "#4a5568",
					colorActive:
						style_question?.colorActive === "#111827"
							? "#ffffff"
							: style_question?.colorActive || "#ffffff",
				},
			});
		}
	}, []);

	// Child blocks management (Add / Remove)
	const childBlocks: BlockInstance[] = useSelect(
		(select) =>
			(select(blockEditorStore) as any).getBlock(clientId)?.innerBlocks || [],
		[clientId]
	);
	const isAnyChildSelected: boolean = useSelect(
		(select) =>
			Boolean(
				(select(blockEditorStore) as any).hasSelectedInnerBlock(clientId, true)
			),
		[clientId]
	);

	const { insertBlock, removeBlock, updateBlockAttributes } =
		useDispatch(blockEditorStore);

	const handleAddAccordionItem = () => {
		const newItem = createBlock(
			"boostify-blocks/accordion-item",
			{
				title: "",
				headingTag: general_general?.headingTag || "div",
				enableSeparator: general_general?.enableSeparator ?? true,
			},
			[]
		);
		insertBlock(newItem, childBlocks.length, clientId);
	};

	const handleRemoveLastAccordionItem = () => {
		if (childBlocks.length > 1) {
			removeBlock(childBlocks[childBlocks.length - 1].clientId);
		}
	};

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbAccordionPanelGeneral
							setAttr__={(data) => {
								setAttributes({
									general_general: data,
									general_preset: { ...general_preset, preset: "" },
								});
							}}
							panelData={general_general}
							childBlocks={childBlocks}
						/>

						<WcbAccordionPanelIcon
							onToggle={() => handleTogglePanel("General", "Icon")}
							initialOpen={tabGeneralIsPanelOpen === "Icon"}
							opened={tabGeneralIsPanelOpen === "Icon" || undefined}
							setAttr__={(data) => {
								setAttributes({
									general_icon: data,
									general_preset: { ...general_preset, preset: "" },
								});
							}}
							panelData={general_icon}
						/>

						<PanelBody
							onToggle={() => handleTogglePanel("General", "TitleTag")}
							initialOpen={tabGeneralIsPanelOpen === "TitleTag"}
							opened={tabGeneralIsPanelOpen === "TitleTag" || undefined}
							title={__("Title Tag Settings", "boostify-blocks")}
						>
							<SelectControl
								label={__("Title Tag", "boostify-blocks")}
								value={general_general?.headingTag || "div"}
								options={[
									{ value: "div", label: "div" },
									{ value: "h2", label: "h2" },
									{ value: "h3", label: "h3" },
									{ value: "h4", label: "h4" },
									{ value: "h5", label: "h5" },
									{ value: "h6", label: "h6" },
								]}
								onChange={(value) => {
									const tag = value as keyof HTMLElementTagNameMap;
									setAttributes({
										general_general: {
											...general_general,
											headingTag: tag,
										},
										general_preset: { ...general_preset, preset: "" },
									});
									childBlocks.forEach((child) => {
										updateBlockAttributes(child.clientId, {
											headingTag: tag,
										});
									});
								}}
							/>
						</PanelBody>

						{(!general_general?.headingTag ||
							general_general?.headingTag === "div") && (
							<div style={{ padding: "0 16px 16px" }}>
								<div
									className="components-base-control"
									style={{
										backgroundColor: "#fcf9e8",
										padding: "10px 12px",
										border: "1px solid #dba617",
										fontSize: "12px",
										lineHeight: "1.5",
										color: "#1e1e1e",
										borderRadius: "2px",
									}}
								>
									{__(
										"Accessibility Note: The title tag is not currently a heading. This block might be more accessible if you choose an",
										"boostify-blocks"
									)}{" "}
									<a
										href="https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H42.html"
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "#2271b1", textDecoration: "underline" }}
									>
										{__("appropriate heading level.", "boostify-blocks")}
									</a>
								</div>
							</div>
						)}
					</>
				);

			case "Styles":
				return (
					<>
						<WcbAccordionPanel_StyleQuestion
							onToggle={() =>
								handleTogglePanel("Styles", "_StyleQuestion", true)
							}
							initialOpen={
								tabStylesIsPanelOpen === "_StyleQuestion" ||
								tabStylesIsPanelOpen === "first" ||
								tabStylesIsPanelOpen === "_StyleContainer" ||
								tabStylesIsPanelOpen === "_StyleIcon"
							}
							opened={tabStylesIsPanelOpen === "_StyleQuestion" || undefined}
							setAttr__={(data) => {
								setAttributes({
									style_question: data,
									style_container: {
										...style_container,
										border: data.border || style_container?.border,
									},
									general_preset: { ...general_preset, preset: "" },
								});
							}}
							panelData={{
								...style_question,
								border: style_question?.border || style_container?.border,
							}}
							iconData={style_icon}
							setAttr__icon={(data) => {
								setAttributes({
									style_icon: data,
									general_preset: { ...general_preset, preset: "" },
								});
							}}
						/>

						<WcbAccordionPanel_StyleAnswer
							onToggle={() => handleTogglePanel("Styles", "_StyleAnswer")}
							initialOpen={tabStylesIsPanelOpen === "_StyleAnswer"}
							opened={tabStylesIsPanelOpen === "_StyleAnswer" || undefined}
							setAttr__={(data) => {
								setAttributes({
									style_answer: data,
									general_preset: { ...general_preset, preset: "" },
								});
							}}
							panelData={style_answer}
						/>

						<WcbAccordionPanel_StyleDimension
							onToggle={() => handleTogglePanel("Styles", "_StyleDimension")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDimension"}
							opened={tabStylesIsPanelOpen === "_StyleDimension" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_dimension: data });
							}}
							panelData={style_dimension}
							containerData={style_container}
							setAttr__container={(data) => {
								setAttributes({ style_container: data });
							}}
							columns={general_general?.columns}
						/>
					</>
				);

			case "Advances":
				return (
					<>
						<PanelBody
							title={__("FAQ Schema", "boostify-blocks")}
							initialOpen={false}
						>
							<ToggleControl
								label={__("Enable FAQ Schema", "boostify-blocks")}
								help={__(
									"Generate valid FAQPage structured data in document head (server-side)",
									"boostify-blocks"
								)}
								checked={!!general_general?.faqSchema}
								onChange={(value) => {
									setAttributes({
										general_general: {
											...general_general,
											faqSchema: value,
										},
									});
								}}
							/>
						</PanelBody>

						<AdvancePanelCommon
							advance_motionEffect={attributes.advance_motionEffect}
							advance_responsiveCondition={
								attributes.advance_responsiveCondition
							}
							advance_zIndex={attributes.advance_zIndex}
							handleTogglePanel={handleTogglePanel}
							setAttributes={setAttributes}
							tabAdvancesIsPanelOpen={tabAdvancesIsPanelOpen}
						/>
					</>
				);

			default:
				return <div />;
		}
	};

	const deviceType = useGetDeviceType() || "Desktop";
	const { currentDeviceValue: activeColumns } = getValueFromAttrsResponsives(
		general_general?.columns,
		deviceType
	);
	const colCount = activeColumns || 1;

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: `wcb-accordion__inner wcb-accordion-cols-${colCount}`,
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
			renderAppender: false,
		}
	);

	const WcbAttrsForSaveCallback = useCallback((): WcbAttrsForSave => {
		return {
			advance_responsiveCondition,
			advance_zIndex,
			general_general,
			general_icon,
			style_answer,
			style_container,
			style_icon,
			style_question,
			style_dimension,
			uniqueId,
			advance_motionEffect,
		};
	}, [
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_icon,
		style_answer,
		style_container,
		style_icon,
		style_question,
		style_dimension,
		uniqueId,
		advance_motionEffect,
	]);

	const showQuickActions = isSelected || isAnyChildSelected;

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-accordion__wrap ${uniqueId}`}
				data-uniqueid={uniqueId}
			>
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{uniqueId && <GlobalCss {...WcbAttrsForSaveCallback()} />}

				<div {...innerBlocksProps} />

				{showQuickActions && (
					<div className="wcb-accordion-add-bar">
						<Button
							variant="primary"
							icon="plus"
							className="wcb-accordion-add-btn"
							onClick={handleAddAccordionItem}
						>
							{__("Add Accordion Item", "boostify-blocks")}
						</Button>
						{childBlocks.length > 1 && (
							<Button
								variant="secondary"
								icon="minus"
								className="wcb-accordion-remove-btn"
								label={__("Remove Accordion Item", "boostify-blocks")}
								onClick={handleRemoveLastAccordionItem}
							/>
						)}
					</div>
				)}
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
