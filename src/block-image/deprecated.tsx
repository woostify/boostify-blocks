import Save__230626 from "./Save__230626";
import blokc1Attrs from "./attributes";

const v1 = {};
const v2 = {};

// v3: blocks saved before 2026-06-23. Snapshot of Save.tsx at that date.
const v3 = {
	attributes: blokc1Attrs,
	save: Save__230626,
};

// Order: newest deprecated first, oldest last.
const deprecated = [v3, v2, v1];

export default deprecated;
