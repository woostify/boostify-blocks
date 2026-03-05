import { __ } from "@wordpress/i18n";
import {
	RichText,
	useBlockProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import React, { useEffect, FC, useRef } from "react";
import { WcbAttrs } from "./attributes";
import { EditProps } from "../block-container/Edit";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import { WCB_FAQ_PANEL_ICON } from "../block-faq/WcbFaqPanelIcon";
import { WCB_FAQ_PANEL_GENERAL } from "../block-faq/WcbFaqPanelGeneral";
import { useSelect } from "@wordpress/data";
import MyCacheProvider from "../components/MyCacheProvider";
import MyIconFull from "../components/controls/MyIconFull";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

const Edit: FC<
	EditProps<
		WcbAttrs,
		{
			"boostify-blocks/faq_icon"?: WCB_FAQ_PANEL_ICON;
			"boostify-blocks/faq_general"?: WCB_FAQ_PANEL_GENERAL;
		}
	>
> = (props) => {
	const { attributes, setAttributes, clientId, context, isSelected } = props;
	const {
		uniqueId,
		answer,
		layout,
		question,
		general_icon,
		headingTag,
		defaultExtend,
		enableSeparator,
	} = attributes;
	//  COMMON HOOKS
	const ref = useRef<HTMLDivElement>(null);
	// const { myCache, ref } = useCreateCacheEmotion();
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

	//

	useEffect(() => {
		console.log(12, "------ FAQ CHILD setAttributes ON useEffect --------");

		setAttributes({
			layout: context["boostify-blocks/faq_general"]?.layout,
			headingTag: context["boostify-blocks/faq_general"]?.headingTag,
			general_icon: context["boostify-blocks/faq_icon"],
			enableSeparator: context["boostify-blocks/faq_general"]?.enableSeparator,
			defaultExtend:
				!context["boostify-blocks/faq_general"]?.collapseOtherItems ||
				(context["boostify-blocks/faq_general"]?.collapseOtherItems &&
					!blockIndex &&
					context["boostify-blocks/faq_general"]?.expandFirstItem),
		});
	}, [context["boostify-blocks/faq_general"], context["boostify-blocks/faq_icon"], blockIndex]);

	const renderIcon = () => {
		if (!general_icon.enableIcon || layout !== "accordion") {
			return null;
		}
		return (
			<>
				{general_icon.icon && (
					<MyIconFull
						className="wcb-faq-child__icon wcb-faq-child__icon--active"
						icon={general_icon.icon}
					/>
				)}
				{general_icon.inactiveIcon && (
					<MyIconFull
						className="wcb-faq-child__icon wcb-faq-child__icon--inactive"
						icon={general_icon.inactiveIcon}
					/>
				)}
			</>
		);
	};

	const ACTIVE = (defaultExtend || isSelected) && layout === "accordion";

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${
					wrapBlockProps?.className
				} wcb-faq-child__wrap wcb-faq-child__wrap--${layout} ${
					ACTIVE ? "active" : ""
				} ${uniqueId}`}
				data-uniqueid={uniqueId}
			>
				<div className="ac-header">
					<div
						className={`wcb-faq-child__question wcb-faq-child__question--icon-${general_icon.iconPosition}`}
					>
						{general_icon.iconPosition === "left" && renderIcon()}
						<RichText
							tagName={headingTag || "h4"}
							value={question}
							allowedFormats={["core/bold", "core/italic"]}
							onChange={(content) => setAttributes({ question: content })}
							placeholder={__("Question...")}
							className="wcb-faq-child__question-text"
						/>

						{general_icon.iconPosition === "right" && renderIcon()}
					</div>
				</div>
				{(ACTIVE || layout === "grid") && (
					<div className="ac-panel">
						{enableSeparator && (
							<div className="wcb-faq-child__separator"></div>
						)}
						<div className="wcb-faq-child__answer">
							<RichText
								tagName="p"
								value={answer}
								allowedFormats={["core/bold", "core/italic"]}
								onChange={(content) => setAttributes({ answer: content })}
								placeholder={__("Answer...")}
								className="wcb-faq-child__answer-text"
							/>
						</div>
					</div>
				)}
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
