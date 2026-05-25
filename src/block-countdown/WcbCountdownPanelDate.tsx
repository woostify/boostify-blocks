import { PanelBody, ToggleControl, RadioControl, RangeControl, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import WCBDateTimePicker, {
	countdown_date
} from "../components/controls/WCBDateTimePicker/WCBDateTimePicker";

export interface WCB_COUNTDOWN_PANEL_DATE {
	enableLabel: boolean;
	date: countdown_date;
	show_day: boolean;
	show_hour: boolean;
	show_minute: boolean;
	timerType: 'fixed' | 'evergreen';
	evergreenDays: number;
	evergreenHrs: number;
	evergreenMinutes: number;
	resetDays: number;
	campaignID: string;
}

export const WCB_COUNTDOWN_PANEL_DATE_DEMO: WCB_COUNTDOWN_PANEL_DATE = {
	enableLabel: true,
	date: new Date().toJSON(),
	show_day: true,
	show_hour: true,
	show_minute: true,
	timerType: 'fixed',
	evergreenDays: 1,
	evergreenHrs: 0,
	evergreenMinutes: 0,
	resetDays: 30,
	campaignID: '',
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_COUNTDOWN_PANEL_DATE;
	setAttr__: (data: WCB_COUNTDOWN_PANEL_DATE) => void;
}

const WcbCountdownPanelDate: FC<Props> = ({
	panelData = WCB_COUNTDOWN_PANEL_DATE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const {
		enableLabel,
		date,
		show_day,
		show_hour,
		show_minute,
		timerType = 'fixed',
		evergreenDays = 1,
		evergreenHrs = 0,
		evergreenMinutes = 0,
		resetDays = 30,
		campaignID = '',
	} = panelData;

	const isEvergreen = timerType === 'evergreen';

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Timer End Date & Time", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Enable label", "boostify-blocks")}
					checked={enableLabel}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enableLabel: checked });
					}}
				/>

				<RadioControl
					label={__("Timer Type", "boostify-blocks")}
					selected={timerType}
					options={[
						{ label: __("Fixed Date", "boostify-blocks"), value: "fixed" },
						{ label: __("Evergreen", "boostify-blocks"), value: "evergreen" },
					]}
					onChange={(value: 'fixed' | 'evergreen') => {
						setAttr__({ ...panelData, timerType: value });
					}}
				/>

				{!isEvergreen && (
					<WCBDateTimePicker
						date={date}
						onChange={(value) => {
							setAttr__({ ...panelData, date: value as unknown as countdown_date });
						}}
					/>
				)}

				{isEvergreen && (
					<>
						<RangeControl
							label={__("Days", "boostify-blocks")}
							value={evergreenDays}
							min={0}
							max={365}
							onChange={(value) => {
								setAttr__({ ...panelData, evergreenDays: value ?? 0 });
							}}
						/>
						<RangeControl
							label={__("Hours", "boostify-blocks")}
							value={evergreenHrs}
							min={0}
							max={23}
							onChange={(value) => {
								setAttr__({ ...panelData, evergreenHrs: value ?? 0 });
							}}
						/>
						<RangeControl
							label={__("Minutes", "boostify-blocks")}
							value={evergreenMinutes}
							min={0}
							max={59}
							onChange={(value) => {
								setAttr__({ ...panelData, evergreenMinutes: value ?? 0 });
							}}
						/>
						<RangeControl
							label={__("Reset After (days)", "boostify-blocks")}
							help={__("Number of days before the cookie expires and the timer resets for the visitor.", "boostify-blocks")}
							value={resetDays}
							min={1}
							max={365}
							onChange={(value) => {
								setAttr__({ ...panelData, resetDays: value ?? 30 });
							}}
						/>
						<TextControl
							label={__("Campaign ID (optional)", "boostify-blocks")}
							help={__("Unique ID to share the same evergreen timer across multiple blocks.", "boostify-blocks")}
							value={campaignID}
							onChange={(value) => {
								setAttr__({ ...panelData, campaignID: value });
							}}
						/>
					</>
				)}

				<ToggleControl
					label={__("Show Days", "boostify-blocks")}
					checked={show_day}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, show_day: checked });
					}}
				/>
				{!show_day && (
					<ToggleControl
						label={__("Show Hours", "boostify-blocks")}
						checked={show_hour}
						className="mb-0"
						onChange={(checked) => {
							setAttr__({ ...panelData, show_hour: checked });
						}}
					/>
				)}
				{!show_hour && (
					<ToggleControl
						label={__("Show Minutes", "boostify-blocks")}
						checked={show_minute}
						className="mb-0"
						onChange={(checked) => {
							setAttr__({ ...panelData, show_minute: checked });
						}}
					/>
				)}
			</div>
		</PanelBody>
	);
};

export default WcbCountdownPanelDate;
