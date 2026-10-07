import { ToggleControl, SelectControl, CheckboxControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import {
	DISPLAY_CONDITIONS_TYPES,
	OS_OPTIONS,
	BROWSER_OPTIONS,
	DAY_OPTIONS,
} from "../../../extensions/display-conditions/options";

export interface MyDisplayConditionsAttributes {
	wcbDisplayConditions?: string;
	wcbLoggedIn?: boolean;
	wcbLoggedOut?: boolean;
	wcbUserRole?: string;
	wcbSystem?: string;
	wcbBrowser?: string;
	wcbDay?: string[];
}

declare global {
	interface Window {
		boostify_blocks_display_conditions_data?: {
			user_roles?: Array<{ value: string; label: string }>;
		};
	}
}

interface Props {
	attributes: MyDisplayConditionsAttributes;
	setAttributes: (data: Partial<MyDisplayConditionsAttributes>) => void;
	className?: string;
}

const MyDisplayConditionsControl: FC<Props> = ({
	attributes,
	setAttributes,
	className = "wcb-display-conditions-control space-y-3",
}) => {
	const {
		wcbDisplayConditions = "none",
		wcbLoggedIn = false,
		wcbLoggedOut = false,
		wcbUserRole = "",
		wcbSystem = "",
		wcbBrowser = "",
		wcbDay = [],
	} = attributes;

	const userRoles = window.boostify_blocks_display_conditions_data?.user_roles || [
		{ value: "", label: __("None", "boostify-blocks") },
	];

	const handleDayToggle = (dayValue: string, isChecked: boolean) => {
		const currentDays = Array.isArray(wcbDay) ? [...wcbDay] : [];
		if (isChecked) {
			if (!currentDays.includes(dayValue)) {
				currentDays.push(dayValue);
			}
		} else {
			const index = currentDays.indexOf(dayValue);
			if (index !== -1) {
				currentDays.splice(index, 1);
			}
		}
		setAttributes({ wcbDay: currentDays });
	};

	return (
		<div className={className}>
			<SelectControl
				label={__("Display Conditions", "boostify-blocks")}
				value={wcbDisplayConditions}
				options={DISPLAY_CONDITIONS_TYPES}
				onChange={(value: string) =>
					setAttributes({ wcbDisplayConditions: value })
				}
			/>

			{wcbDisplayConditions === "userstate" && (
				<div className="wcb-condition-options space-y-2" style={{ marginTop: "12px" }}>
					<ToggleControl
						label={__("Hide From Logged In Users", "boostify-blocks")}
						checked={Boolean(wcbLoggedIn)}
						onChange={(val: boolean) => setAttributes({ wcbLoggedIn: val })}
					/>
					<ToggleControl
						label={__("Hide From Logged Out Users", "boostify-blocks")}
						checked={Boolean(wcbLoggedOut)}
						onChange={(val: boolean) => setAttributes({ wcbLoggedOut: val })}
					/>
				</div>
			)}

			{wcbDisplayConditions === "userRole" && (
				<div className="wcb-condition-options" style={{ marginTop: "12px" }}>
					<SelectControl
						label={__("Hide for User Role", "boostify-blocks")}
						value={wcbUserRole}
						options={userRoles}
						onChange={(value: string) =>
							setAttributes({ wcbUserRole: value })
						}
					/>
				</div>
			)}

			{wcbDisplayConditions === "os" && (
				<div className="wcb-condition-options" style={{ marginTop: "12px" }}>
					<SelectControl
						label={__("Hide on Operating System", "boostify-blocks")}
						value={wcbSystem}
						options={OS_OPTIONS}
						onChange={(value: string) => setAttributes({ wcbSystem: value })}
					/>
				</div>
			)}

			{wcbDisplayConditions === "browser" && (
				<div className="wcb-condition-options" style={{ marginTop: "12px" }}>
					<SelectControl
						label={__("Hide on Browser", "boostify-blocks")}
						value={wcbBrowser}
						options={BROWSER_OPTIONS}
						onChange={(value: string) => setAttributes({ wcbBrowser: value })}
					/>
				</div>
			)}

			{wcbDisplayConditions === "day" && (
				<div className="wcb-condition-options" style={{ marginTop: "12px" }}>
					<p
						style={{
							marginBottom: "10px",
							fontSize: "13px",
							color: "#1e1e1e",
							fontWeight: 400,
						}}
					>
						{__("Select days you want to disable.", "boostify-blocks")}
					</p>
					<div
						className="wcb-days-checkbox-grid"
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
							columnGap: "12px",
							rowGap: "8px",
						}}
					>
						{DAY_OPTIONS.map((day) => (
							<label
								key={day.value}
								style={{
									display: "flex",
									alignItems: "center",
									gap: "8px",
									cursor: "pointer",
									fontSize: "13px",
									color: "#1e1e1e",
									userSelect: "none",
									margin: 0,
								}}
							>
								<input
									type="checkbox"
									value={day.value}
									checked={Array.isArray(wcbDay) && wcbDay.includes(day.value)}
									onChange={(e) =>
										handleDayToggle(day.value, e.target.checked)
									}
									style={{
										margin: 0,
										width: "16px",
										height: "16px",
										borderRadius: "2px",
										cursor: "pointer",
										accentColor: "var(--wp-admin-theme-color, #007cba)",
									}}
								/>
								<span>{day.label}</span>
							</label>
						))}
					</div>
				</div>
			)}

			<p
				className="components-base-control__help"
				style={{
					fontStyle: "italic",
					color: "#757575",
					marginTop: "12px",
					fontSize: "12px",
					lineHeight: "1.4",
				}}
			>
				{__(
					"Above setting will only take effect once you are on the live page, and not while you're editing.",
					"boostify-blocks"
				)}
			</p>
		</div>
	);
};

export default MyDisplayConditionsControl;
