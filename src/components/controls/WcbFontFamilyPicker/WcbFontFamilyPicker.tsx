import googleFonts from "./google-fonts.json";
import { __ } from "@wordpress/i18n";
import { loadGoogleFont } from "../../../utils";
import React, { FC, Fragment, useState, useEffect } from "react";
import MyCombobox from "../MyCombobox";
import MyLabelControl from "../MyLabelControl/MyLabelControl";

interface Props {
	onChangeFontFamily: (font: string) => void;
	selectedFont?: string;
}

const WcbFontFamilyPicker: FC<Props> = ({
	onChangeFontFamily,
	selectedFont,
}) => {
	const [fontFamily, setFontFamily] = useState(selectedFont);
	useEffect(() => {
		setFontFamily(selectedFont);
	}, [selectedFont]);

	const systemFonts = [
		{ value: "Arial", label: "Arial" },
		{ value: "Helvetica", label: "Helvetica" },
		{ value: "Times New Roman", label: "Times New Roman" },
		{ value: "Georgia", label: "Georgia" },
	];

	const googleFontsList: {
		value: string;
		label: string;
	}[] = [];

	Object.keys(googleFonts).forEach((k) => {
		googleFontsList.push({ value: k, label: k });
	});

	const globalVars = window.boostify_blocks_global_variables;
	const allowOnlySelected = globalVars?.allowOnlySelectedFonts === "true";
	const selectedFontNames = (globalVars?.selectedFonts || "")
		.split(",")
		.map((f) => f.trim())
		.filter(Boolean);

	const filteredGoogleFontsList =
		allowOnlySelected && selectedFontNames.length > 0
			? googleFontsList.filter((f) => selectedFontNames.includes(f.value))
			: googleFontsList;

	const handleChangeFont = (newFont: string | null) => {
		const nextFont = newFont || "";
		setFontFamily(nextFont);
		onChangeFontFamily(nextFont);
		if (nextFont) {
			const fontMeta = (
				googleFonts as Record<string, { weight?: string[] }>
			)[nextFont];
			if (fontMeta) {
				loadGoogleFont(nextFont, fontMeta.weight);
			}
		}
	};

	const FONTS = [
		{
			value: "",
			label: "Default",
		},
		...systemFonts,
		...filteredGoogleFontsList,
	];
	return (
		<>
			<MyLabelControl>{__("Font Family", "boostify-blocks")}</MyLabelControl>

			<MyCombobox
				value={fontFamily || ""}
				options={FONTS}
				onChange={handleChangeFont}
			/>
		</>
	);
};

export default WcbFontFamilyPicker;
