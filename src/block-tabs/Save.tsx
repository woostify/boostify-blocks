import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import MyIconFull from "../components/controls/MyIconFull";
import "./style.scss";

export interface WcbAttrsForSave extends Omit<WcbAttrs, "general_preset"> {}

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
        advance_motionEffect,
        general_general,
    };

    const wrapBlockProps = useBlockProps.save({ className: "bcb-tabs__wrap" });

    const renderIcon = (index: number) => {
        if (!general_tabTitle.enableIcon) return null;
        return general_tabTitle.icon ? <MyIconFull className={`bcb-tabs__icon ${activeTabIndex === index ? "bcb-tabs__icon-selected" : ""}`} icon={general_tabTitle.icon} /> : null;
    };

    return (
        <SaveCommon {...wrapBlockProps} attributes={newAttrForSave} uniqueId={uniqueId}>
            <div className="bcb-tabs__contents">
                <div className="bcb-tabs__titles">
                    {titles.map((item, index) => (
                        <div 
                            className={`bcb-tabs__title_inner relative group ${activeTabIndex === index ? "bcb-tabs__title_inner-selected" : ""}`} 
                            key={item.id} 
                            data-tab-index={item.dataTabIndex}>
                            {(general_tabTitle.iconPosition === "left" || general_tabTitle.iconPosition === "top") && renderIcon(index)}
                            <RichText.Content 
                                tagName="p" 
                                className={`bcb-tabs__title ${activeTabIndex === index ? "bcb-tabs__title-selected" : ""}`}
                                value={item.title} 
                                placeholder="Title" />
                            {(general_tabTitle.iconPosition === "right" || general_tabTitle.iconPosition === "bottom") && renderIcon(index)}
                        </div>
                    ))}
                </div>
                {titles.map((_, index) => (
                    <div
                        key={index}
                        className="wp-block-bcb-tab-child bcb-tab-child__wrap"
                        role="tabpanel"
                        id={`tabpanel-${uniqueId}-${index}`}
                        aria-labelledby={`tab-${uniqueId}-${index}`}
                        hidden={index !== activeTabIndex}
                    >
                        <div className="bcb-tab-child__inner">
                            <div dangerouslySetInnerHTML={{ __html: tabContents[index] }} />
                        </div>
                    </div>
                ))}
            </div>
        </SaveCommon>
    );
}
