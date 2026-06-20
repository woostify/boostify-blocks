import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import {
	// @ts-ignore
	__experimentalUnitControl as UnitControl,
	Button,
	Tooltip,
} from "@wordpress/components";
import { link, linkOff } from "@wordpress/icons";
import { __ } from "@wordpress/i18n";
import { DimensionSettings } from "./types";

// Helpers

function getAllValue(values: Partial<DimensionSettings>): string {
	const { top, right, bottom, left } = values;
	if (top === right && right === bottom && bottom === left) return top || "";
	return "";
}

function isMixedValues(values: Partial<DimensionSettings>): boolean {
	const { top, right, bottom, left } = values;
	return !(top === right && right === bottom && bottom === left);
}

function isValuesDefined(values?: Partial<DimensionSettings>): boolean {
	if (!values) return false;
	return Object.values(values).some((v) => !!v && /\d/.test(v as string));
}

function parseValue(v: string): { num: number; unit: string } {
	if (!v) return { num: 0, unit: "px" };
	const match = v.match(/^([\d.]+)([a-z%]*)$/i);
	if (!match) return { num: 0, unit: "px" };
	return { num: parseFloat(match[1]) || 0, unit: match[2] || "px" };
}

function getSliderMax(unit: string): number {
	switch (unit.toLowerCase()) {
		case "rem":
		case "em":
			return 20;
		case "%":
		case "vw":
		case "vh":
			return 100;
		default:
			return 1000;
	}
}

function getSliderStep(unit: string): number {
	switch (unit.toLowerCase()) {
		case "rem":
		case "em":
			return 0.1;
		default:
			return 1;
	}
}

const DEFAULT_VALUES: DimensionSettings = {
	top: "",
	right: "",
	bottom: "",
	left: "",
};

type Side = keyof DimensionSettings;
type ActiveSide = "all" | Side;

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

// BoxControlIcon
const IconRoot = styled.span`
	box-sizing: border-box;
	display: block;
	flex: 0 0 24px;
	width: 24px;
	height: 24px;
	position: relative;
	padding: 4px;
`;

const IconViewbox = styled.span`
	box-sizing: border-box;
	display: block;
	position: relative;
	width: 100%;
	height: 100%;
`;

const Stroke = styled.span<{ isFocused: boolean }>`
	box-sizing: border-box;
	display: block;
	pointer-events: none;
	position: absolute;
	background-color: currentColor;
	opacity: ${({ isFocused }) => (isFocused ? 1 : 0.3)};
`;

const TopStroke = styled(Stroke)`
	height: 2px;
	left: 3px;
	right: 3px;
	top: 0;
`;

const RightStroke = styled(Stroke)`
	bottom: 3px;
	top: 3px;
	width: 2px;
	right: 0;
`;

const BottomStroke = styled(Stroke)`
	height: 2px;
	left: 3px;
	right: 3px;
	bottom: 0;
`;

const LeftStroke = styled(Stroke)`
	bottom: 3px;
	top: 3px;
	width: 2px;
	left: 0;
`;

const BoxIcon: FC<{ side: ActiveSide }> = ({ side }) => {
	const isFocused = (s: Side) => side === "all" || side === s;
	return (
		<IconRoot>
			<IconViewbox>
				<TopStroke isFocused={isFocused("top")} />
				<RightStroke isFocused={isFocused("right")} />
				<BottomStroke isFocused={isFocused("bottom")} />
				<LeftStroke isFocused={isFocused("left")} />
			</IconViewbox>
		</IconRoot>
	);
};

// Slider

const StyledSlider = styled.input`
	display: block;
	width: 100%;
	height: 4px;
	appearance: none;
	-webkit-appearance: none;
	border-radius: 2px;
	outline: none;
	cursor: pointer;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: #0073aa;
		cursor: pointer;
		margin-top: -5px;
	}

	&::-moz-range-thumb {
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: #0073aa;
		border: none;
		cursor: pointer;
	}

	&::-webkit-slider-runnable-track {
		height: 4px;
		border-radius: 2px;
	}

	&::-moz-range-track {
		height: 4px;
		border-radius: 2px;
		background: #ddd;
	}
`;

const SideSlider: FC<{
	value: string;
	min: number;
	onChange: (newValue: string) => void;
}> = ({ value, min, onChange }) => {
	const { num, unit } = parseValue(value);
	const max = getSliderMax(unit);
	const step = getSliderStep(unit);
	const clamped = Math.max(min, Math.min(max, num));
	const pct = max > min ? ((clamped - min) / (max - min)) * 100 : 0;

	return (
		<StyledSlider
			type="range"
			value={clamped}
			min={min}
			max={max}
			step={step}
			style={{
				background: `linear-gradient(to right, #0073aa ${pct}%, #ddd ${pct}%)`,
			}}
			onChange={(e) => {
				const newNum = parseFloat(e.target.value);
				onChange(unit ? `${newNum}${unit}` : `${newNum}`);
			}}
			onWheel={(e) => e.currentTarget.blur()}
		/>
	);
};

// Layout

const Root = styled.div`
	box-sizing: border-box;
	width: 100%;
	padding-bottom: 12px;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;
`;

const HeaderActions = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`;

const SideRow = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	margin-bottom: 8px;

	&:last-child {
		margin-bottom: 0;
	}
`;

const SideUnitControl = styled(UnitControl as any)`
	flex: 0 0 110px;
	width: 110px;
`;

const SliderWrapper = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

// Component

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
	const hasInitialValue = isValuesDefined(values);
	const [isLinked, setIsLinked] = useState(
		!hasInitialValue || !isMixedValues(values)
	);
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
		<Root>
			<Header>
				<div>{label}</div>
				<HeaderActions>
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
				</HeaderActions>
			</Header>

			{isLinked ? (
				<SideRow>
					<BoxIcon side="all" />
					<SideUnitControl
						aria-label={typeof label === "string" ? label : undefined}
						className="component-box-control__unit-control"
						value={allValue}
						onChange={(v: string) => handleAllChange(v)}
						min={min}
						placeholder={isMixed ? LABELS.mixed : undefined}
						isResetValueOnUnitChange={false}
					/>
					<SliderWrapper>
						<SideSlider
							value={allValue || merged.top}
							min={min}
							onChange={handleAllChange}
						/>
					</SliderWrapper>
				</SideRow>
			) : (
				SIDES.map(({ key }) => (
					<SideRow key={key}>
						<BoxIcon side={key} />
						<SideUnitControl
							aria-label={LABELS[key]}
							className="component-box-control__unit-control"
							value={merged[key]}
							onChange={(v: string) => handleSideChange(key, v)}
							min={min}
							isResetValueOnUnitChange={false}
						/>
						<SliderWrapper>
							<SideSlider
								value={merged[key]}
								min={min}
								onChange={(v) => handleSideChange(key, v)}
							/>
						</SliderWrapper>
					</SideRow>
				))
			)}
		</Root>
	);
};

export default MyDimensionsUnitControl;
