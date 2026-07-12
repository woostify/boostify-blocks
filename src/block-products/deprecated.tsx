import Save__260523 from "./Save__260523";
import Save__300523 from "./Save__300523";
import Save__020723 from "./Save__020723";
import Save__260626 from "./Save__260626";
import Save__110726 from "./Save__110726";
import Save__120726 from "./Save__120726";
import blokc1Attrs from "./attributes";

const v1 = {};
const v2 = {};
const v3 = {
	attributes: blokc1Attrs,
	save: Save__260523,
};
const v4 = {
	attributes: blokc1Attrs,
	save: Save__300523,
};

const v5 = {
	attributes: blokc1Attrs,
	save: Save__020723,
};

const v6 = {
	attributes: blokc1Attrs,
	save: Save__260626,
};

const v7 = {
	attributes: blokc1Attrs,
	save: Save__110726,
}

// Matches content saved before `advance_zIndex` existed and before
// typography empty-array values ([]) were normalized to empty objects ({}).
// Must NOT default advance_zIndex, so it stays undefined (and is dropped
// from the serialized JSON) when absent from old post content.
const legacyAttrsNoZIndex = {
	...blokc1Attrs,
	advance_zIndex: { type: "object" },
};
const v8 = {
	attributes: legacyAttrsNoZIndex,
	save: Save__120726,
};

const deprecated = [v8, v7,v6, v5, v4, v3, v2, v1];

export default deprecated;
