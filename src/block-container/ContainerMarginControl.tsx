import React, { FC, useState } from "react";
import {
	// @ts-ignore
	__experimentalUnitControl as UnitControl,
	Button,
	Tooltip,
} from "@wordpress/components";
import { link, linkOff } from "@wordpress/icons";
import { __ } from "@wordpress/i18n";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import * as styles from "../components/controls/MyDimensionsControl/style";
import {
	getAllValue,
	isMixedValues,
	isValuesDefined,
	getMaxForUnit,
	getStepForUnit,
} from "../components/controls/MyDimensionsControl/helpers";

// Margin box control for the Container block only. Same UI as the shared
// MyDimensionsUnitControl, but accepts negative values (input + slider).

type Side = keyof DimensionSettings;
type ActiveSide = "all" | Side;

const DEFAULT_VALUES: DimensionSettings = { top: "", right: "", bottom: "", left: "" };
const SIDES: Side[] = ["top", "right", "bottom", "left"];
const MIN_INPUT = -99999;

const LABELS: Record<Side | "mixed", string> = {
	top: __("Top", "boostify-blocks"),
	right: __("Right", "boostify-blocks"),
	bottom: __("Bottom", "boostify-blocks"),
	left: __("Left", "boostify-blocks"),
	mixed: __("Mixed", "boostify-blocks"),
};

/** Like the shared parseValue, but keeps the minus sign ("-16px" -> -16, "px"). */
const parseSignedValue = (v: string): { num: number; unit: string } => {
	const match = (v || "").match(/^(-?[\d.]+)([a-z%]*)$/i);
	if (!match) return { num: 0, unit: "px" };
	return { num: parseFloat(match[1]) || 0, unit: match[2] || "px" };
};

const BoxIcon: FC<{ side: ActiveSide }> = ({ side }) => {
	const focused = (s: Side) => side === "all" || side === s;
	return (
		<span style={styles.iconRoot}>
			<span style={styles.iconViewbox}>
				<span style={styles.stroke(focused("top"),    { height: 2, left: 3, right: 3, top: 0 })} />
				<span style={styles.stroke(focused("right"),  { bottom: 3, top: 3, width: 2, right: 0 })} />
				<span style={styles.stroke(focused("bottom"), { height: 2, left: 3, right: 3, bottom: 0 })} />
				<span style={styles.stroke(focused("left"),   { bottom: 3, top: 3, width: 2, left: 0 })} />
			</span>
		</span>
	);
};

// Slider range is mirrored around 0, e.g. -1000..1000px, -20..20rem
const SignedSlider: FC<{
	value: string;
	onChange: (newValue: string) => void;
}> = ({ value, onChange }) => {
	const { num, unit } = parseSignedValue(value);
	const max = getMaxForUnit(unit);
	const min = -max;
	const step = getStepForUnit(unit);
	const clamped = Math.max(min, Math.min(max, num));
	const pct = ((clamped - min) / (max - min)) * 100;

	return (
		<input
			className="wcb-dimensions-unit-control__range"
			type="range"
			value={clamped}
			min={min}
			max={max}
			step={step}
			style={{ background: `linear-gradient(to right, #0073aa ${pct}%, #ddd ${pct}%)` }}
			onChange={(e) => {
				const newNum = parseFloat(e.target.value);
				onChange(unit ? `${newNum}${unit}` : `${newNum}`);
			}}
			onWheel={(e) => e.currentTarget.blur()}
		/>
	);
};

interface Props {
	label?: React.ReactNode;
	values: Partial<DimensionSettings>;
	onChange: (values: DimensionSettings) => void;
}

const ContainerMarginControl: FC<Props> = ({ label, values = {}, onChange }) => {
	styles.useInjectStyles();

	const hasInitialValue = isValuesDefined(values);
	const [isLinked, setIsLinked] = useState(!hasInitialValue || !isMixedValues(values));
	const [isDirty, setIsDirty] = useState(hasInitialValue);

	const merged: DimensionSettings = {
		top: values.top ?? "",
		right: values.right ?? "",
		bottom: values.bottom ?? "",
		left: values.left ?? "",
	};

	const allValue = getAllValue(merged);
	const isMixed = isValuesDefined(merged) && isMixedValues(merged);

	const handleAllChange = (value: string) => {
		const v = value ?? "";
		onChange({ top: v, right: v, bottom: v, left: v });
		setIsDirty(true);
	};

	const handleSideChange = (side: Side, value: string) => {
		onChange({ ...merged, [side]: value ?? "" });
		setIsDirty(true);
	};

	const handleReset = () => {
		onChange(DEFAULT_VALUES);
		setIsDirty(false);
	};

	const linkLabel = isLinked
		? __("Unlink sides", "boostify-blocks")
		: __("Link sides", "boostify-blocks");

	return (
		<div style={styles.root}>
			<div style={styles.header}>
				<div>{label}</div>
				<div style={styles.headerActions}>
					<Button
						className="component-box-control__reset-button"
						variant="secondary"
						isSmall
						onClick={handleReset}
						disabled={!isDirty}
					>
						{__("Reset", "boostify-blocks")}
					</Button>
					<Tooltip text={linkLabel}>
						<Button
							className="component-box-control__linked-button"
							isSmall
							icon={isLinked ? link : linkOff}
							iconSize={24}
							aria-label={linkLabel}
							onClick={() => setIsLinked((prev) => !prev)}
						/>
					</Tooltip>
				</div>
			</div>

			{isLinked ? (
				<div style={styles.sideRow}>
					<BoxIcon side="all" />
					<UnitControl
						aria-label={typeof label === "string" ? label : undefined}
						className="component-box-control__unit-control"
						style={styles.unitControl}
						value={allValue}
						onChange={(v: string) => handleAllChange(v)}
						min={MIN_INPUT}
						placeholder={isMixed ? LABELS.mixed : undefined}
						isResetValueOnUnitChange={false}
					/>
					<div style={styles.sliderWrapper}>
						<SignedSlider value={allValue || merged.top} onChange={handleAllChange} />
					</div>
				</div>
			) : (
				SIDES.map((key, index) => (
					<div
						key={key}
						style={index === SIDES.length - 1 ? styles.sideRowLast : styles.sideRow}
					>
						<BoxIcon side={key} />
						<UnitControl
							aria-label={LABELS[key]}
							className="component-box-control__unit-control"
							style={styles.unitControl}
							value={merged[key]}
							onChange={(v: string) => handleSideChange(key, v)}
							min={MIN_INPUT}
							isResetValueOnUnitChange={false}
						/>
						<div style={styles.sliderWrapper}>
							<SignedSlider
								value={merged[key]}
								onChange={(v) => handleSideChange(key, v)}
							/>
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default ContainerMarginControl;
