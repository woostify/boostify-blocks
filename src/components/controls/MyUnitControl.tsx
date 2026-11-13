import React, { FC } from "react";
import {
	// @ts-ignore
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import MyLabelControl from "./MyLabelControl/MyLabelControl";
import { __ } from "@wordpress/i18n";

export interface MyUnit {
	value: string;
	label: string;
	default?: string | number;
}

interface Props {
	className?: string;
	units?: MyUnit[];
	label?: string;
	hasResponsive?: boolean;
	onChange: (value: string) => void;
	value: string;
}

const MyUnitControl: FC<Props> = ({
	className = "",
	label = __("Column Gap", "boostify-blocks"),
	hasResponsive,
	onChange,
	value,
	units = [
		{ value: "px", label: "px", default: 32 },
		{ value: "rem", label: "rem", default: 2 },
		{ value: "%", label: "%", default: 10 },
	],
}) => {
	const isCol = className.includes("flex-col");
	const containerStyle: React.CSSProperties = isCol
		? { display: "flex", flexDirection: "column", gap: "8px" }
		: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" };

	return (
		<div className={className} style={containerStyle}>
			<MyLabelControl
				className={isCol ? "mb-0" : "mb-0 flex-1"}
				hasResponsive={hasResponsive}
			>
				{label}
			</MyLabelControl>
			<div style={isCol ? { width: "100%" } : { width: "108px", minWidth: "108px", flexShrink: 0 }}>
				<UnitControl
					onChange={onChange}
					value={value}
					label=""
					units={units}
					// size={"__unstable-large"}
				/>
			</div>
		</div>
	);
};

export default MyUnitControl;
