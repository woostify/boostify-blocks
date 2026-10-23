import { RadioGroup } from "@headlessui/react";
import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import ResetButton from "../components/controls/ResetButton";

export interface WCB_ACCORDION_PANEL_PRESET {
	preset: "simple" | "solid" | "borderless" | "";
}

export const WCB_ACCORDION_PANEL_PRESET_DEMO: WCB_ACCORDION_PANEL_PRESET = {
	preset: "",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ACCORDION_PANEL_PRESET;
	setAttr__: (data: WCB_ACCORDION_PANEL_PRESET) => void;
}

export const ACCORDION_PRESETS: {
	name: WCB_ACCORDION_PANEL_PRESET["preset"];
	title: string;
}[] = [
	{ name: "simple", title: __("Simple", "boostify-blocks") },
	{ name: "solid", title: __("Solid", "boostify-blocks") },
	{ name: "borderless", title: __("Borderless", "boostify-blocks") },
];

const WcbAccordionPanelPreset: FC<Props> = ({
	panelData = WCB_ACCORDION_PANEL_PRESET_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const setPreset = (preset: WCB_ACCORDION_PANEL_PRESET["preset"]) => {
		setAttr__({ preset });
	};

	const renderPresetItem = (name: WCB_ACCORDION_PANEL_PRESET["preset"]) => {
		if (name === "simple") {
			return (
				<div className="flex-1 flex flex-col gap-1.5 w-full">
					<div className="border border-slate-300 p-1.5 rounded-md">
						<div className="flex justify-between items-center mb-1">
							<div className="rounded w-7/12 h-1 bg-slate-500"></div>
							<div className="w-2 h-1 bg-slate-400 rounded"></div>
						</div>
						<div className="rounded w-10/12 h-1 bg-slate-200 mb-0.5"></div>
						<div className="rounded w-5/12 h-1 bg-slate-200"></div>
					</div>
					<div className="border border-slate-300 p-1.5 rounded-md">
						<div className="flex justify-between items-center">
							<div className="rounded w-7/12 h-1 bg-slate-500"></div>
							<div className="w-2 h-1 bg-slate-400 rounded"></div>
						</div>
					</div>
				</div>
			);
		}
		if (name === "solid") {
			return (
				<div className="flex-1 flex flex-col gap-1.5 w-full">
					<div className="p-1.5 border border-slate-200 bg-slate-100 rounded-md">
						<div className="flex justify-between items-center mb-1">
							<div className="rounded w-7/12 h-1 bg-slate-600"></div>
							<div className="w-2 h-1 bg-slate-500 rounded"></div>
						</div>
						<div className="rounded w-10/12 h-1 bg-slate-300 mb-0.5"></div>
						<div className="rounded w-5/12 h-1 bg-slate-300"></div>
					</div>
					<div className="p-1.5 border border-slate-200 bg-slate-100 rounded-md">
						<div className="flex justify-between items-center">
							<div className="rounded w-7/12 h-1 bg-slate-600"></div>
							<div className="w-2 h-1 bg-slate-500 rounded"></div>
						</div>
					</div>
				</div>
			);
		}
		if (name === "borderless") {
			return (
				<div className="flex-1 flex flex-col gap-1.5 w-full">
					<div className="border-b border-slate-200 pb-1.5">
						<div className="flex justify-between items-center mb-1">
							<div className="rounded w-7/12 h-1 bg-slate-600"></div>
							<div className="w-2 h-1 bg-slate-400 rounded"></div>
						</div>
						<div className="rounded w-10/12 h-1 bg-slate-200 mb-0.5"></div>
						<div className="rounded w-5/12 h-1 bg-slate-200"></div>
					</div>
					<div className="border-b border-slate-200 pb-1.5">
						<div className="flex justify-between items-center">
							<div className="rounded w-7/12 h-1 bg-slate-600"></div>
							<div className="w-2 h-1 bg-slate-400 rounded"></div>
						</div>
					</div>
				</div>
			);
		}
		return null;
	};

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Preset", "boostify-blocks")}
		>
			<RadioGroup value={panelData.preset} onChange={setPreset}>
				<RadioGroup.Label className="relative flex items-center justify-between mb-2">
					<span>{__("Select Preset", "boostify-blocks")}</span>
					<ResetButton onClick={() => setPreset("")} />
				</RadioGroup.Label>
				<div className="relative p-3 bg-slate-50 rounded-lg">
					<div className="relative grid grid-cols-2 gap-3">
						{ACCORDION_PRESETS.map((item) => (
							<RadioGroup.Option key={item.name} value={item.name}>
								{({ checked }) => (
									<div
										className={`relative flex flex-col items-center justify-center w-full p-2 cursor-pointer rounded-lg hover:ring-2 ring-offset-1 ring-sky-400 ${
											checked ? "bg-white ring-2" : "bg-white"
										}`}
									>
										{renderPresetItem(item.name)}
										<span className="text-xs text-slate-600 mt-1">
											{item.title}
										</span>
									</div>
								)}
							</RadioGroup.Option>
						))}
					</div>
				</div>
			</RadioGroup>
		</PanelBody>
	);
};

export default WcbAccordionPanelPreset;
