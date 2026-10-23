import Save__011123 from "./Save__011123";
import Save__300726 from "./Save__300726";
import Save__050826 from "./Save__050826";
import blokc1Attrs from "./attributes";
import { WCB_COUNTDOWN_PANEL_STYLE_TITLE_DEMO } from "./WcbCountdownPanel_StyleTitle";
import { WCB_COUNTDOWN_PANEL_STYLE_NUMBER_DEMO } from "./WcbCountdownPanel_StyleNumber";
import { TYPOGRAPHY_CONTROL_DEMO } from "../components/controls/MyTypographyControl/types";

const v1 = {};
const v2 = {};
const v3 = {
	attributes: blokc1Attrs,
	save: Save__011123,
};
const v4 = {
	attributes: blokc1Attrs,
	save: Save__300726,
};
const v5 = {
	attributes: blokc1Attrs,
	save: Save__050826,
};

// v6: blocks saved before commit 9121af08 where appearance.style had fontWeight: "400" by default
const v6 = {
	attributes: {
		...blokc1Attrs,
		style_label: {
			...blokc1Attrs.style_label,
			default: {
				...WCB_COUNTDOWN_PANEL_STYLE_TITLE_DEMO,
				typography: {
					...WCB_COUNTDOWN_PANEL_STYLE_TITLE_DEMO.typography,
					appearance: {
						...TYPOGRAPHY_CONTROL_DEMO.appearance,
						style: {
							...TYPOGRAPHY_CONTROL_DEMO.appearance?.style,
							fontWeight: "400",
						},
					},
				},
			},
		},
		style_number: {
			...blokc1Attrs.style_number,
			default: {
				...WCB_COUNTDOWN_PANEL_STYLE_NUMBER_DEMO,
				typography: {
					...WCB_COUNTDOWN_PANEL_STYLE_NUMBER_DEMO.typography,
					appearance: {
						...TYPOGRAPHY_CONTROL_DEMO.appearance,
						style: {
							...TYPOGRAPHY_CONTROL_DEMO.appearance?.style,
							fontWeight: "400",
						},
					},
				},
			},
		},
	},
	save: Save__050826,
};

const deprecated = [v6, v5, v4, v3, v2, v1];

export default deprecated;
