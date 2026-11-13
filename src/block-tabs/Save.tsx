import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import MyIconFull from "../components/controls/MyIconFull";
import "./style.scss";

export interface WcbAttrsForSave extends Omit<WcbAttrs, "general_preset"> {}

export const resolveInitialActiveTab = (
    titlesLength: number,
    initOpenTab?: string,
    activeTabIndex = 0
): number => {
    const match = initOpenTab?.match(/^tab(\d+)$/);
    if (match) {
        const parsed = parseInt(match[1], 10) - 1;
        if (parsed >= 0 && parsed < titlesLength) {
            return parsed;
        }
    }
    if (activeTabIndex >= 0 && activeTabIndex < titlesLength) {
        return activeTabIndex;
    }
    return 0;
};

export default function save({ attributes }: { attributes: WcbAttrs }) {
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

    const initialActiveTab = resolveInitialActiveTab(
        titles.length,
        general_tabTitle?.initOpenTab,
        activeTabIndex
    );

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
        'data-wp-interactive': 'boostify-blocks/tabs',
        'data-wp-context': JSON.stringify({ activeTab: initialActiveTab }),
    });

    const renderIcon = (index: number) => {
        if (!general_tabTitle.enableIcon) return null;
        return general_tabTitle.icon ? (
            <MyIconFull
                className="wcb-tabs__icon"
                icon={general_tabTitle.icon}
            />
        ) : null;
    };

    return (
        <SaveCommon {...wrapBlockProps} attributes={newAttrForSave} uniqueId={uniqueId}>
            <div className="wcb-tabs__contents">
                <div className="wcb-tabs__titles" role="tablist">
                    {titles.map((item, index) => (
                        <div
                            className={`wcb-tabs__title_inner relative group wcb-tabs__title_inner--icon-${general_tabTitle.iconPosition} ${initialActiveTab === index ? "is-active" : ""}`}
                            key={item.id}
                            role="tab"
                            id={`tab-${uniqueId}-${index}`}
                            aria-controls={`tabpanel-${uniqueId}-${index}`}
                            data-tab-index={item.dataTabIndex}
                            data-wp-context={JSON.stringify({ tabIndex: index })}
                            data-wp-on--click="actions.switchTab"
                            data-wp-watch="callbacks.syncActiveTab"
                            data-wp-class--is-active="context.isActiveTab"
                            data-wp-bind--aria-selected="context.isActiveTab"
                        >
                            {(general_tabTitle.iconPosition === "left" || general_tabTitle.iconPosition === "top") && renderIcon(index)}
                            <RichText.Content
                                tagName="p"
                                className="wcb-tabs__title"
                                value={item.title}
                                placeholder="Title"
                            />
                            {(general_tabTitle.iconPosition === "right" || general_tabTitle.iconPosition === "bottom") && renderIcon(index)}
                        </div>
                    ))}
                </div>
                <InnerBlocks.Content />
            </div>
        </SaveCommon>
    );
}
