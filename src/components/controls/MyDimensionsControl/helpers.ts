import { DimensionSettings } from "./types";

/** Returns the single value if all 4 sides are equal, otherwise empty string. */
export function getAllValue(values: Partial<DimensionSettings>): string {
	const { top, right, bottom, left } = values;
	if (top === right && right === bottom && bottom === left) return top || "";
	return "";
}

/** Returns true if any side differs from the others. */
export function isMixedValues(values: Partial<DimensionSettings>): boolean {
	const { top, right, bottom, left } = values;
	return !(top === right && right === bottom && bottom === left);
}

/** Returns true if at least one side has a numeric value set. */
export function isValuesDefined(values?: Partial<DimensionSettings>): boolean {
	if (!values) return false;
	return Object.values(values).some((v) => !!v && /\d/.test(v as string));
}

/** Splits a CSS value string (e.g. "16px", "1.5rem") into its numeric part and unit. */
export function parseValue(v: string): { num: number; unit: string } {
	if (!v) return { num: 0, unit: "px" };
	const match = v.match(/^([\d.]+)([a-z%]*)$/i);
	if (!match) return { num: 0, unit: "px" };
	return { num: parseFloat(match[1]) || 0, unit: match[2] || "px" };
}

/** Returns the max allowed dimension value for the given CSS unit. */
export function getMaxForUnit(unit: string): number {
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

/** Returns the increment step for the given CSS unit (0.1 for rem/em, 1 otherwise). */
export function getStepForUnit(unit: string): number {
	return ["rem", "em"].includes(unit.toLowerCase()) ? 0.1 : 1;
}
