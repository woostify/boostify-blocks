import { __ } from "@wordpress/i18n";
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import React, { useState, useEffect, FC, useRef, useCallback } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbIconBoxPanelLayout from "./WcbIconBoxPanelLayout";
import WcbIconBoxPanelIcon from "./WcbIconBoxPanelIcon";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import WcbTeamPanel_StyleTitle from "./WcbTeamPanel_StyleTitle";
import WcbTeamPanel_StyleDesignation from "./WcbTeamPanel_StyleDesignation";
import WcbTeamPanel_StyleDescription from "./WcbTeamPanel_StyleDescription";
import WcbIconBoxPanel_StyleIcons from "./WcbIconBoxPanel_StyleIcons";
import MyIconFull from "../components/controls/MyIconFull";
import WcbIconBoxPanel_StyleDimension from "./WcbIconBoxPanel_StyleDimension";
import WcbIconBoxPanel_StyleProgress from "./WcbIconBoxPanel_StyleProgress";
import WcbIconBoxPanel_StyleCircle from "./WcbIconBoxPanel_StyleCircle";
import { MY_DIMENSIONS_NO_GAP_DEMO__EMPTY } from "../components/controls/MyDimensionsControl/types";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

// Easing functions (keep in sync with the front-end counter view script).
const EASING_FUNCTIONS: Record<string, (t: number) => number> = {
	easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
	easeInOutQuad: (t) =>
		t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
	easeInOutCubic: (t) =>
		t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
	easeOutElastic: (t) => {
		const c4 = (2 * Math.PI) / 3;
		return t === 0
			? 0
			: t === 1
			? 1
			: Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
	},
};

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		endNumber,
		description,
		designation,
		uniqueId,
		general_layout,
		general_icon,
		style_title,
		style_desination,
		style_description,
		style_Icon,
		style_progress,
		style_circle,
		style_dimension,
		advance_motionEffect,
	} = attributes;

	// COMMON HOOKS
	const ref = useRef<HTMLDivElement>(null);
	const wrapBlockProps = useBlockProps({ ref });
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	const deviceType = useGetDeviceType() || "Desktop";
	const { currentDeviceValue: currentCircleSize } = getValueFromAttrsResponsives(
		style_circle?.circleSize,
		deviceType
	);

	// Make uniqueId
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);

	// State manage value current_number
	const [currentNumber, setCurrentNumber] = useState(
		parseFloat(general_layout?.startNumber || "0")
	);

	useEffect(() => {
		const start = parseFloat(general_layout?.startNumber || "0");
		const end = parseFloat(general_layout?.endNumber || "0");
		const duration = parseInt(general_layout?.animationDuration || "1500") || 1500;

		setCurrentNumber(start);

		if (start === end) {
			return;
		}

		let animationFrameId = 0;
		const startedAt = performance.now();

		// Matches the front-end counter view script.
		const easingFn =
			EASING_FUNCTIONS[general_layout?.animationType || "easeOutCubic"] ||
			EASING_FUNCTIONS.easeOutCubic;

		const tick = (now: number) => {
			const progress = Math.min((now - startedAt) / duration, 1);
			const value = start + (end - start) * easingFn(progress);

			setCurrentNumber(value);

			if (progress < 1) {
				animationFrameId = requestAnimationFrame(tick);
			} else {
				setCurrentNumber(end);
			}
		};

		animationFrameId = requestAnimationFrame(tick);

		return () => cancelAnimationFrame(animationFrameId);
	}, [
		endNumber,
		general_layout?.animationDuration,
		general_layout?.animationType,
		general_layout?.startNumber,
		general_layout?.decimalNumber,
		general_layout?.type,
		general_layout?.endNumber
	]);

	// Format number before display
	const formatNumber = (num: number, decimalPlaces: string) => {
		const decimal = parseInt(decimalPlaces);
		const fixed = num.toFixed(isNaN(decimal) || decimal < 0 ? 0 : decimal);
		const thousandSeparator = general_layout?.thousand || "";
		if (!thousandSeparator) {
			return fixed;
		}
		const parts = fixed.split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
		return parts.join(".");
	};

	// Render the progress circle with content inside
	const renderProgressCircle = () => {
		const viewBoxSize = 300;
		const radius = viewBoxSize / 2;
		const stroke = 5;
		const normalizedRadius = radius - stroke * 2;
		const circumference = normalizedRadius * 2 * Math.PI;
		const totalNumber =
			parseFloat(general_layout?.totalNumber || general_layout?.endNumber) ||
			0;
		const progressFraction =
			totalNumber !== 0
				? Math.min(Math.max(currentNumber / totalNumber, 0), 1)
				: 0;
		const strokeDashoffset = circumference * (1 - progressFraction);
		const circleSize = currentCircleSize || "300px";

		const isIconBesideContent =
			general_icon.iconPosition === "left" ||
			general_icon.iconPosition === "right";

		const isIconBesideTitle =
			general_icon.iconPosition === "leftOfTitle" ||
			general_icon.iconPosition === "rightOfTitle";

		const iconEl = general_icon.enableIcon ? (
			<div className="wcb-icon-box__icon">
				<MyIconFull icon={general_icon.icon} />
			</div>
		) : null;

		const numberEl = (
			<div className="wcb-icon-box__number">
				<span>{general_layout.numberPrefix}</span>
				{formatNumber(currentNumber, general_layout?.decimalNumber)}
				<span>{general_layout.numberSuffix}</span>
			</div>
		);

		const descriptionEl = general_layout.enableDescription ? (
			<RichText
				tagName="div"
				value={description}
				allowedFormats={["core/bold", "core/italic"]}
				onChange={(content) => setAttributes({ description: content })}
				placeholder={__("Description of box ...")}
				className="wcb-icon-box__description"
				style={{
					wordBreak: "break-word",
					maxWidth: "100%",
				}}
			/>
		) : null;

		return (
			<div
				className="wcb-icon-box__progress-circle-wrap"
				style={{
					position: "relative",
					width: circleSize,
					height: circleSize,
				}}
			>
				<svg
					className="wcb-icon-box__progress-circle-svg"
					viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
					width="100%"
					height="100%"
				>
					<circle
						stroke="#e0e0e0"
						fill="transparent"
						strokeWidth={stroke}
						r={normalizedRadius}
						cx={radius}
						cy={radius}
					/>
					<circle
						className="wcb-icon-box__progress-circle"
						stroke={style_progress.progressColor}
						fill="transparent"
                        strokeWidth={stroke}
						strokeDasharray={`${circumference} ${circumference}`}
						style={{ strokeDashoffset }}
						r={normalizedRadius}
						cx={radius}
						cy={radius}
					/>
				</svg>
				<div className="wcb-icon-box__progress-circle-content">
					{isIconBesideContent ? (
						<>
							{general_icon.iconPosition === "left" && iconEl}
							<div className="wcb-icon-box__progress-circle-content-inner">
								{numberEl}
								{descriptionEl}
							</div>
							{general_icon.iconPosition === "right" && iconEl}
						</>
					) : isIconBesideTitle ? (
						<>
							<div className="wcb-icon-box__progress-circle-content-row">
								{general_icon.iconPosition === "leftOfTitle" &&
									iconEl}
								{numberEl}
								{general_icon.iconPosition === "rightOfTitle" &&
									iconEl}
							</div>
							{descriptionEl}
						</>
					) : (
						<>
							{general_icon.iconPosition === "top" && iconEl}
							{numberEl}
							{general_icon.iconPosition === "bellowTitle" && iconEl}
							{descriptionEl}
							{general_icon.iconPosition === "bottom" && iconEl}
						</>
					)}
				</div>
			</div>
		);
	};

	const renderProgressBar = () => {
		const totalNumber =
			parseFloat(general_layout?.totalNumber || general_layout?.endNumber) ||
			0;
		const barWidth =
			totalNumber !== 0
				? Math.min((currentNumber / totalNumber) * 100, 100)
				: 0;

		return (
			<div className="wcb-icon-box__progress-bar-wrap">
				<div className="wcb-icon-box__progress-bar-track">
					<div
						className="wcb-icon-box__progress-bar"
						style={{
							width: `${barWidth}%`,
							backgroundColor: style_progress.progressColor,
						}}
					>
						<div className="wcb-icon-box__number" style={{
							marginBottom: "0px"
						}}>
							<span>{general_layout.numberPrefix}</span>
							{formatNumber(currentNumber, general_layout?.decimalNumber)}
							<span>{general_layout.numberSuffix}</span>
						</div>
					</div>
					
				</div>
				{general_layout.enableDescription && (
					<RichText
						tagName="div"
						value={description}
						allowedFormats={["core/bold", "core/italic"]}
						onChange={(content) => setAttributes({ description: content })}
						placeholder={__("Description of box ...")}
						className="wcb-icon-box__description"
						style={{
							wordBreak: "break-word",
							maxWidth: "100%",
						}}
					/>
				)}
			</div>
		);
	};

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbIconBoxPanelLayout
							onToggle={() => handleTogglePanel("General", "Layout", true)}
							initialOpen={
								tabGeneralIsPanelOpen === "Layout" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={tabGeneralIsPanelOpen === "Layout" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_layout: data });
							}}
							panelData={general_layout}
						/>

						{general_layout.type !== "bar" && (
						<WcbIconBoxPanelIcon
							onToggle={() => handleTogglePanel("General", "Icon")}
							initialOpen={tabGeneralIsPanelOpen === "Icon"}
							opened={tabGeneralIsPanelOpen === "Icon" || undefined}
							//
							setAttr__={(data) => {
								if (
									data.iconPosition === "leftOfTitle" ||
									data.iconPosition === "left"
								) {
									return setAttributes({
										general_icon: data,
										general_layout: {
											...general_layout,
											textAlignment: {
												Desktop: "left",
												Tablet: "left",
												Mobile: "left",
											},
										},
										style_Icon: {
											...style_Icon,
											dimensions: {
												...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY,
												margin: {
													Desktop: {
														...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY.margin.Desktop,
														right: "1rem",
													},
												},
											},
										},
									});
								}
								if (
									data.iconPosition === "rightOfTitle" ||
									data.iconPosition === "right"
								) {
									return setAttributes({
										general_icon: data,
										general_layout: {
											...general_layout,
											textAlignment: {
												Desktop: "right",
												Tablet: "right",
												Mobile: "right",
											},
										},
										style_Icon: {
											...style_Icon,
											dimensions: {
												...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY,
												margin: {
													Desktop: {
														...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY.margin.Desktop,
														left: "1rem",
													},
												},
											},
										},
									});
								}

								return setAttributes({
									general_icon: data,
									style_Icon: {
										...style_Icon,
										dimensions: {
											...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY,
											margin: {
												Desktop: {
													...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY.margin.Desktop,
													top: "1rem",
													bottom: "1rem",
												},
											},
										},
									},
								});
							}}
							panelData={general_icon}
						/>
						)}
					</>
				);
			case "Styles":
				return (
					<>
						{general_icon.enableIcon && general_layout.type !== "bar" && (
							<WcbIconBoxPanel_StyleIcons
								onToggle={() => handleTogglePanel("Styles", "_StyleIcons")}
								initialOpen={tabStylesIsPanelOpen === "_StyleIcons"}
								opened={tabStylesIsPanelOpen === "_StyleIcons" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_Icon: data });
								}}
								panelData={style_Icon}
								generalLayoutType={general_layout.type}
							/>
						)}

						{(general_layout.type === "circle" || general_layout.type === "bar") && (
							<WcbIconBoxPanel_StyleProgress
								onToggle={() => handleTogglePanel("Styles", "_StyleProgress")}
								initialOpen={tabStylesIsPanelOpen === "_StyleProgress"}
								opened={tabStylesIsPanelOpen === "_StyleProgress" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_progress: data });
								}}
								panelData={style_progress}
							/>
						)}
						{general_layout.type === "circle" && (
							<WcbIconBoxPanel_StyleCircle
								onToggle={() => handleTogglePanel("Styles", "_StyleCircle")}
								initialOpen={tabStylesIsPanelOpen === "_StyleCircle"}
								opened={tabStylesIsPanelOpen === "_StyleCircle" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_circle: data });
								}}
								panelData={style_circle}
							/>
						)}
						{general_layout.enablePrefix && (
							<WcbTeamPanel_StyleDesignation
								onToggle={() =>
									handleTogglePanel("Styles", "_StyleDesignation")
								}
								initialOpen={tabStylesIsPanelOpen === "_StyleDesignation"}
								opened={
									tabStylesIsPanelOpen === "_StyleDesignation" || undefined
								}
								//
								setAttr__={(data) => {
									setAttributes({ style_desination: data });
								}}
								panelData={style_desination}
							/>
						)}
						{general_layout.enableTitle && (
							<WcbTeamPanel_StyleTitle
								onToggle={() =>
									handleTogglePanel("Styles", "_StyleTitle", true)
								}
								initialOpen={
									tabStylesIsPanelOpen === "_StyleTitle" ||
									tabStylesIsPanelOpen === "first"
								}
								opened={tabStylesIsPanelOpen === "_StyleTitle" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_title: data });
								}}
								panelData={style_title}
							/>
						)}

						{general_layout.enableDescription && (
							<WcbTeamPanel_StyleDescription
								onToggle={() =>
									handleTogglePanel("Styles", "_StyleDescription")
								}
								initialOpen={tabStylesIsPanelOpen === "_StyleDescription"}
								opened={
									tabStylesIsPanelOpen === "_StyleDescription" || undefined
								}
								//
								setAttr__={(data) => {
									setAttributes({ style_description: data });
								}}
								panelData={style_description}
							/>
						)}
						
						<WcbIconBoxPanel_StyleDimension
							onToggle={() => handleTogglePanel("Styles", "_StyleDimension")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDimension"}
							opened={tabStylesIsPanelOpen === "_StyleDimension" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_dimension: data });
							}}
							panelData={style_dimension}
						/>
						
					</>
				);
			case "Advances":
				return (
					<>
						<AdvancePanelCommon
							advance_motionEffect={advance_motionEffect}
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
				return <div></div>;
		}
	};

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_layout,
			endNumber,
			designation,
			style_title,
			style_desination,
			style_description,
			style_Icon,
			style_progress,
			style_circle,
			style_dimension,
			general_icon,
			advance_motionEffect,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		endNumber,
		designation,
		style_title,
		style_desination,
		style_description,
		style_Icon,
		style_progress,
		style_circle,
		style_dimension,
		general_icon,
		advance_motionEffect,
	]);

	const renderIcon = () => {
		return (
			<>
				{general_icon.enableIcon && general_layout.type !== "circle" && (
						<div className="wcb-icon-box__icon-wrap">
							<div className="wcb-icon-box__icon">
								<MyIconFull icon={general_icon.icon} />
							</div>
						</div>
					)}
			</>
		);
	};

	const HeadingTag = general_layout.headingTag;

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-counter-box__wrap ${uniqueId}`}
				data-uniqueid={uniqueId}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{/* CSS IN JS */}
				<GlobalCss {...WcbAttrsForSave()} />

				{(general_icon.iconPosition === "top" ||
					general_icon.iconPosition === "left") &&
					general_layout.type !== "circle" &&
					general_layout.type !== "bar" &&
					renderIcon()}

				{/* CHILD CONTENT */}
				<div className="wcb-icon-box__content">
					<div className="wcb-icon-box__content-title-wrap">
						{general_icon.iconPosition === "leftOfTitle" &&
							general_layout.type !== "circle" &&
							general_layout.type !== "bar" &&
							renderIcon()}

						<div className="wcb-icon-box__content-title">
							{
								general_layout.enablePrefix && 
								general_layout.type !== "circle" &&
								general_layout.type !== "bar" &&(
									<RichText
										tagName="div"
										value={designation}
										allowedFormats={[]}
										onChange={(content) =>
											setAttributes({ designation: content })
										}
										placeholder={__("Write a Prefix")}
										className="wcb-icon-box__designation"
									/>
								)
							}
							{
								general_layout.enableTitle && 
								general_layout.type !== "circle" &&
								general_layout.type !== "bar" && (
									<div>
										<div className="wcb-icon-box__number">
											<span>{general_layout.numberPrefix}</span>
										{formatNumber(currentNumber, general_layout?.decimalNumber)}
											<span>{general_layout.numberSuffix}</span>
										</div>
									</div>
								)}

							{general_layout.type === "circle" && renderProgressCircle()}
							{general_layout.type === "bar" && renderProgressBar()}
						</div>

						{(general_icon.iconPosition === "rightOfTitle" ||
							general_icon.iconPosition === "bellowTitle") &&
							general_layout.type !== "circle" &&
							general_layout.type !== "bar" &&
							renderIcon()}
					</div>

					{
						general_layout.enableDescription && 
						general_layout.type !== "circle" &&
						general_layout.type !== "bar" && (
							<RichText
								tagName="div"
								value={description}
								allowedFormats={["core/bold", "core/italic"]}
								onChange={(content) => setAttributes({ description: content })}
								placeholder={__("Description of box ...")}
								className="wcb-icon-box__description"
							/>
						)
					}

					{general_layout.enableCTAButton && (
						<InnerBlocks allowedBlocks={[]} template={[["boostify-blocks/button", {}]]} />
					)}
				</div>

			{(general_icon.iconPosition === "right" ||
				general_icon.iconPosition === "bottom") &&
					general_layout.type !== "circle" &&
					general_layout.type !== "bar" &&
					renderIcon()}
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
