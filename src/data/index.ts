import { createReduxStore, register } from "@wordpress/data";
import { InspectorControlsTabTitle } from "../components/HOCInspectorControls";

export interface BlockInPanelStore {
	Advances?: { panelIsOpen: string };
	General?: { panelIsOpen: string };
	Styles?: { panelIsOpen: string };
	tabIsOpen: InspectorControlsTabTitle;
}

const INIT_BLOCK: BlockInPanelStore = {
	Advances: { panelIsOpen: "" },
	General: { panelIsOpen: "first" },
	Styles: { panelIsOpen: "first" },
	tabIsOpen: "General",
};

export interface WcbPanelStoreState extends Record<string, BlockInPanelStore> {}
const DEFAULT_STATE: WcbPanelStoreState = {};

const WCB_STORE_PANELS = "boostify-blocks/panels";

const actions = {
	setBlockPanelInfo(blockId: string, block: BlockInPanelStore) {
		return {
			type: "SET_BLOCK_PANEL_INFO",
			blockId,
			block,
		};
	},
};

const store = createReduxStore(WCB_STORE_PANELS, {
	reducer(
		state: WcbPanelStoreState = DEFAULT_STATE,
		action
	): WcbPanelStoreState {
		switch (action.type) {
			case "SET_BLOCK_PANEL_INFO":
				const newBlock: BlockInPanelStore = state[action.blockId] || INIT_BLOCK;
				return {
					...state,
					[action.blockId]: {
						...newBlock,
						...action.block,
					},
				};

			default:
				return state;
		}
	},

	actions,

	selectors: {
		getBlockPanelInfo(state: WcbPanelStoreState) {
			return state;
		},
	},

	controls: {},

	resolvers: {},
});

// Guard against duplicate registration: each block is a separate webpack bundle,
// but all bundles share the same browser window. Only register once.
type WinWithStoreFlag = Window & { __boostifyPanelsStoreRegistered?: boolean };
const _win = window as WinWithStoreFlag;
if (!_win.__boostifyPanelsStoreRegistered) {
	_win.__boostifyPanelsStoreRegistered = true;
	register(store);
}

export { WCB_STORE_PANELS };
