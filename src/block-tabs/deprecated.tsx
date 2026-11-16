import React from "react";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { createBlock, BlockInstance } from "@wordpress/blocks";
import blockAttrs, { WcbAttrs } from "./attributes";
import { WcbAttrsForSave } from "./Save";
import SaveCommon from "../components/SaveCommon";
import MyIconFull from "../components/controls/MyIconFull";

const DEFAULT_LEGACY_CONTENT =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.";

const v1 = {
	attributes: blockAttrs,
	save({ attributes }: { attributes: WcbAttrs }) {
		const {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_tabTitle,
			titles,
			tabContents,
			activeTabIndex,
			style_icon,
			style_container,
			style_title,
			style_body,
			style_dimension,
			advance_motionEffect,
			general_general,
		} = attributes;

		const newAttrForSave: WcbAttrsForSave = {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_tabTitle,
			titles,
			tabContents,
			activeTabIndex,
			style_icon,
			style_container,
			style_title,
			style_body,
			style_dimension,
			advance_motionEffect,
			general_general,
		};

		const wrapBlockProps = useBlockProps.save({
			className: "wcb-tabs__wrap",
			"data-wp-interactive": "boostify-blocks/tabs",
			"data-wp-context": JSON.stringify({ activeTab: activeTabIndex }),
		});

		const renderIcon = () => {
			if (!general_tabTitle?.enableIcon) return null;
			return general_tabTitle.icon ? (
				<MyIconFull
					className="wcb-tabs__icon"
					icon={general_tabTitle.icon}
				/>
			) : null;
		};

		return (
			<SaveCommon
				{...wrapBlockProps}
				attributes={newAttrForSave}
				uniqueId={uniqueId}
			>
				<div className="wcb-tabs__contents">
					<div className="wcb-tabs__titles">
						{(titles || []).map((item, index) => (
							<div
								className={`wcb-tabs__title_inner relative group wcb-tabs__title_inner--icon-${general_tabTitle?.iconPosition}`}
								key={item.id}
								data-tab-index={item.dataTabIndex}
								data-wp-context={JSON.stringify({ tabIndex: index })}
								data-wp-on--click="actions.switchTab"
								data-wp-watch="callbacks.syncActiveTab"
								data-wp-class--is-active="context.isActiveTab"
							>
								{(general_tabTitle?.iconPosition === "left" ||
									general_tabTitle?.iconPosition === "top") &&
									renderIcon()}
								<RichText.Content
									tagName="p"
									className="wcb-tabs__title"
									value={item.title}
									placeholder="Title"
								/>
								{(general_tabTitle?.iconPosition === "right" ||
									general_tabTitle?.iconPosition === "bottom") &&
									renderIcon()}
							</div>
						))}
					</div>
					{(titles || []).map((_, index) => (
						<div
							key={index}
							className="wp-block-wcb-tab-child wcb-tab-child__wrap"
							role="tabpanel"
							id={`tabpanel-${uniqueId}-${index}`}
							aria-labelledby={`tab-${uniqueId}-${index}`}
							data-wp-context={JSON.stringify({ tabIndex: index })}
							data-wp-watch="callbacks.syncActiveTab"
							data-wp-bind--hidden="!context.isActiveTab"
						>
							<div className="wcb-tab-child__inner">
								<div
									dangerouslySetInnerHTML={{
										__html: tabContents?.[index] || "",
									}}
								/>
							</div>
						</div>
					))}
				</div>
			</SaveCommon>
		);
	},
	migrate(attributes: WcbAttrs, innerBlocks: BlockInstance[]) {
		if (innerBlocks && innerBlocks.length > 0) {
			return [attributes, innerBlocks];
		}
		const titles = attributes.titles || [];
		const migratedChildren = titles.map((_, idx) =>
			createBlock("boostify-blocks/tab-child", {}, [
				createBlock("core/paragraph", {
					content: attributes.tabContents?.[idx] || DEFAULT_LEGACY_CONTENT,
				}),
			])
		);
		return [attributes, migratedChildren];
	},
};

const deprecated = [v1];

export default deprecated;
