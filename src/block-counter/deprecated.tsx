import Save from "./Save";
import blokc1Attrs from "./attributes";
import { DEFAULT_MY_ICON } from "../components/controls/SelectIcon/SelecIcon";

const v1 = {};
const v2 = {};
const v3 = {
	attributes: {
		...blokc1Attrs,
		general_icon: {
			type: "object",
			default: {
				enableIcon: true,
				iconPosition: "top",
				icon: {
					...DEFAULT_MY_ICON,
					iconName: "lni-checkmark-circle",
				},
			},
		},
	},
	save: Save,
};

// v4: handles blocks that were saved when endNumber had a broken source: "html"
// pointing to ".wcb-icon-box__heading" (non-existent), causing endNumber to be
// extracted as "" on reload. The migrate function restores endNumber from general_layout.
const v4 = {
	attributes: {
		...blokc1Attrs,
		endNumber: {
			type: "string",
			source: "html",
			selector: ".wcb-icon-box__heading",
			default: "80",
		},
		general_icon: {
			type: "object",
			default: {
				enableIcon: true,
				iconPosition: "top",
				icon: {
					...DEFAULT_MY_ICON,
					iconName: "lni-checkmark-circle",
				},
			},
		},
	},
	migrate(attributes: any) {
		return {
			...attributes,
			endNumber: attributes.general_layout?.endNumber || attributes.endNumber || "0",
		};
	},
	save: Save,
};

const deprecated = [v4, v3, v2, v1];

export default deprecated;
