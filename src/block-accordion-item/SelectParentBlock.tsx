import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";
import * as blockEditor from "@wordpress/block-editor";
const {
	store: blockEditorStore,
	BlockIcon,
} = blockEditor as any;
const useBlockDisplayInformation =
	(blockEditor as any).useBlockDisplayInformation ||
	((window as any).wp?.blockEditor?.useBlockDisplayInformation);
import { useSelect, useDispatch } from "@wordpress/data";
import React, { FC } from "react";

interface Props {
	clientId: string;
}

const SelectParentBlock: FC<Props> = ({ clientId }) => {
	const { selectBlock } = useDispatch(blockEditorStore);
	const parentClientId = useSelect(
		(select) => {
			const { getBlockParents } = select(blockEditorStore) as any;
			const parents = getBlockParents(clientId);
			return parents && parents.length > 0
				? parents[parents.length - 1]
				: undefined;
		},
		[clientId]
	);

	const blockInformation = useBlockDisplayInformation(parentClientId || "");

	if (!parentClientId) {
		return null;
	}

	return (
		<div className="wcb-block-parent-selector">
			<Button
				className="wcb-block-parent-selector__button"
				onClick={() => selectBlock(parentClientId)}
				icon={<BlockIcon icon={blockInformation?.icon} />}
			>
				{__("View Parent Block Settings", "boostify-blocks")}
			</Button>
		</div>
	);
};

export default SelectParentBlock;
