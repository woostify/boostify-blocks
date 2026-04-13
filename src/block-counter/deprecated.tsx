import Save__130426 from "./Save__130426";
import Save__old_heading from "./Save__old_heading";
import blokc1Attrs from "./attributes";
import { DEFAULT_MY_ICON } from "../components/controls/SelectIcon/SelecIcon";

const v1 = {};
const v2 = {};

// v3: blocks saved before the circle/bar feature was introduced.
// general_icon had a different default iconName.
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
    save: Save__130426,
};

// v4: blocks saved when endNumber was stored inside `.wcb-icon-box__heading`
// (source:"html" on that selector). Save__old_heading reproduces that exact
// HTML so WordPress can validate the old block and run migrate().
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
    save: Save__old_heading,
};

// v5: blocks saved when `designation` was temporarily changed to source:"html".
// At that time, enablePrefix=false → element absent from HTML → WordPress read ""
// from DOM → stored data-wcb-block-attrs got "designation":"".
// Using default:"" here so the missing element resolves to "" and matches
// the stored value, allowing validation to pass and migrate() to run.
const v5 = {
    attributes: {
        ...blokc1Attrs,
        designation: {
            type: "string",
            source: "html",
            selector: ".wcb-icon-box__designation",
            default: "",
        },
    },
    migrate(attributes: any) {
        return {
            ...attributes,
            // Restore a sensible default since the source:html era stored "".
            designation: attributes.designation || "Write a Prefix",
        };
    },
    save: Save__130426, 
};

// Order: newest deprecated first, oldest last.
// WordPress tries each until one validates the stored HTML.
const deprecated = [v5, v4, v3, v2, v1];

export default deprecated;
