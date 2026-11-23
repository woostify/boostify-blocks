import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	store as blockEditorStore,
	// @ts-ignore
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import React, { useEffect, FC, useRef } from "react";
import { WcbAttrs } from "./attributes";
import { EditProps } from "../block-container/Edit";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import { useSelect } from "@wordpress/data";
import MyCacheProvider from "../components/MyCacheProvider";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

const Edit: FC<
	EditProps<
		WcbAttrs,
		{
			"boostify-blocks/tabs/activeTabIndex"?: number;
			"boostify-blocks/tabs/tabContents"?: string[];
		}
	>
> = (props) => {
	const { attributes, setAttributes, clientId, context, isSelected } = props;
	const { uniqueId, defaultExtend } = attributes;

	const activeTabIndex = context["boostify-blocks/tabs/activeTabIndex"] ?? 0;
	const tabContents = context["boostify-blocks/tabs/tabContents"] as string[] | undefined;

	const blockIndex: number = useSelect(
		(select) => (select(blockEditorStore) as any).getBlockIndex(clientId),
		[clientId]
	);

	const savedContent = tabContents?.[blockIndex] || "";
	const isActiveTab = blockIndex === activeTabIndex;

	//  COMMON HOOKS
	const ref = useRef<HTMLDivElement>(null);
	const childWrapProps = useBlockProps({
		ref,
		className: `wcb-tab-child__wrap ${uniqueId}`,
		"data-uniqueid": uniqueId,
		style: { display: isActiveTab ? undefined : "none" },
	});
	useSetBlockPanelInfo(uniqueId);

	// make uniqueid
	const UNIQUE_ID = childWrapProps.id;
	useEffect(() => {
		if (!UNIQUE_ID) return;
		const nextUniqueId = converUniqueIdToAnphaKey(UNIQUE_ID);
		if (uniqueId !== nextUniqueId) {
			setAttributes({
				uniqueId: nextUniqueId,
			});
		}
	}, [UNIQUE_ID]);

	const DEFAULT_CONTENT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.";

	const MY_TEMPLATE = [
		[
			"core/paragraph",
			{
				placeholder: DEFAULT_CONTENT,
				content: savedContent || DEFAULT_CONTENT,
			},
		],
	];

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "wcb-tab-child__inner",
		},
		{
			template: MY_TEMPLATE,
		}
	);

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div {...childWrapProps}>
				<div {...innerBlocksProps} />
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
