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

	//  COMMON HOOKS
	const ref = useRef<HTMLDivElement>(null);
	const wrapBlockProps = useBlockProps({ ref });
	const {} = useSetBlockPanelInfo(uniqueId);

	// make uniqueid
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);

	//
	const blockIndex: number = useSelect(
		(select) => select(blockEditorStore).getBlockIndex(clientId),
		[clientId]
	);

	const activeTabIndex = context["boostify-blocks/tabs/activeTabIndex"] ?? 0;
	const tabContents = context["boostify-blocks/tabs/tabContents"] as string[] | undefined;
	const savedContent = tabContents?.[blockIndex] || "";
	const isActiveTab = blockIndex === activeTabIndex;

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
	const blockProps = useBlockProps({
		className: `wcb-tab-child__inner`,
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: null,
		template: MY_TEMPLATE,
	});

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-tab-child__wrap ${uniqueId}`}
				data-uniqueid={uniqueId}
				style={{ display: isActiveTab ? undefined : 'none' }}
			>
				<div {...innerBlocksProps} id={undefined} />
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
