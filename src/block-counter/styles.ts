import { CSSProperties } from "react";

/**
 * Shared inline style for the content positioned inside the progress circle.
 * Used by both the editor (Edit.tsx) and the front-end markup (Save.tsx).
 */
export const getProgressCircleContentStyles = (
	isRowDirection: boolean
): CSSProperties => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	textAlign: "center",
	display: "flex",
	flexDirection: isRowDirection ? "row" : "column",
	alignItems: "center",
	gap: "10px",
	maxWidth: "100%",
	width: "100%",
	padding: "10px",
});
