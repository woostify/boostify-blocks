import React, { FC, useState } from "react";
import {
	// @ts-ignore
	__experimentalUnitControl as UnitControl,
	Button,
	Tooltip,
} from "@wordpress/components";
import { link, linkOff } from "@wordpress/icons";
import { __ } from "@wordpress/i18n";
import { DimensionSettings } from "./types";
import * as styles from "./style";
import { getAllValue, isMixedValues, isValuesDefined, parseValue, getMaxForUnit, getStepForUnit } from "./helpers";

// Constants

type Side = keyof DimensionSettings;
type ActiveSide = "all" | Side;

const DEFAULT_VALUES: DimensionSettings = { top: "", right: "", bottom: "", left: "" };

const SIDES: Array<{ key: Side }> = [
	{ key: "top" },
	{ key: "right" },
	{ key: "bottom" },
	{ key: "left" },
];

const LABELS: Record<Side | "mixed", string> = {
	top: __("Top", "boostify-blocks"),
	right: __("Right", "boostify-blocks"),
	bottom: __("Bottom", "boostify-blocks"),
	left: __("Left", "boostify-blocks"),
	mixed: __("Mixed", "boostify-blocks"),
};

// BoxIcon
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

// SideSlider
const SideSlider: FC<{
	value: string;
	min: number;
	onChange: (newValue: string) => void;
}> = ({ value, min, onChange }) => {
	const { num, unit } = parseValue(value);
	const max = getMaxForUnit(unit);
	const step = getStepForUnit(unit);
	const clamped = Math.max(min, Math.min(max, num));
	const pct = max > min ? ((clamped - min) / (max - min)) * 100 : 0;

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

// MyDimensionsUnitControl
interface Props {
	label?: React.ReactNode;
	values: Partial<DimensionSettings>;
	onChange: (values: DimensionSettings) => void;
	min?: number;
	allowReset?: boolean;
}

const MyDimensionsUnitControl: FC<Props> = ({
	label,
	values = {},
	onChange,
	min = -99999,
	allowReset = true,
}) => {
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
					{allowReset && (
						<Button
							className="component-box-control__reset-button"
							variant="secondary"
							isSmall
							onClick={handleReset}
							disabled={!isDirty}
						>
							{__("Reset", "boostify-blocks")}
						</Button>
					)}
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
						min={min}
						placeholder={isMixed ? LABELS.mixed : undefined}
						isResetValueOnUnitChange={false}
					/>
					<div style={styles.sliderWrapper}>
						<SideSlider value={allValue || merged.top} min={min} onChange={handleAllChange} />
					</div>
				</div>
			) : (
				SIDES.map(({ key }, index) => (
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
							min={min}
							isResetValueOnUnitChange={false}
						/>
						<div style={styles.sliderWrapper}>
							<SideSlider
								value={merged[key]}
								min={min}
								onChange={(v) => handleSideChange(key, v)}
							/>
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default MyDimensionsUnitControl;
