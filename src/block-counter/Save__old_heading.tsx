/**
 * Save function for block-counter blocks that were saved when `endNumber`
 * was stored inside `.wcb-icon-box__heading` (via source:"html").
 *
 * This is used as the `save` for the v4 deprecated entry so WordPress can
 * validate old stored HTML and run the v4 migrate() function.
 *
 * DO NOT modify this file — it must exactly match the HTML produced by the
 * old save so block validation succeeds.
 */
import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";
import MyIconFull from "../components/controls/MyIconFull";

export default function save({ attributes }: { attributes: WcbAttrs }) {
    const {
        uniqueId,
        advance_responsiveCondition,
        advance_zIndex,
        general_layout,
        description,
        designation,
        endNumber,
        style_description,
        style_desination,
        style_Icon,
        style_title,
        general_icon,
        style_dimension,
        advance_motionEffect,
    } = attributes;

    const newAttrForSave = {
        uniqueId,
        advance_responsiveCondition,
        advance_zIndex,
        general_layout,
        endNumber,
        designation,
        style_description,
        style_desination,
        style_Icon,
        style_title,
        general_icon,
        style_dimension,
        advance_motionEffect,
    };

    const renderIcon = () => (
        <>
            {general_icon.enableIcon && (
                <div className="wcb-icon-box__icon-wrap">
                    <div className="wcb-icon-box__icon">
                        <MyIconFull icon={general_icon.icon} />
                    </div>
                </div>
            )}
        </>
    );

    const wrapBlockProps = useBlockProps.save({
        className: "wcb-counter-box__wrap",
    });

    return (
        <SaveCommon
            {...wrapBlockProps}
            attributes={newAttrForSave}
            uniqueId={uniqueId}
        >
            {(general_icon.iconPosition === "top" || general_icon.iconPosition === "left") &&
                renderIcon()}

            <div className="wcb-icon-box__content">
                <div className="wcb-icon-box__content-title-wrap">
                    {general_icon.iconPosition === "leftOfTitle" && renderIcon()}
                    <div className="wcb-icon-box__content-title">
                        {general_layout.enablePrefix && (
                            <RichText.Content
                                tagName="div"
                                value={designation}
                                placeholder={__("Designation...")}
                                className="wcb-icon-box__designation"
                            />
                        )}

                        {general_layout.enableTitle && (
                            <RichText.Content
                                tagName="h4"
                                value={endNumber}
                                className="wcb-icon-box__heading"
                            />
                        )}
                    </div>
                    {(general_icon.iconPosition === "rightOfTitle" ||
                        general_icon.iconPosition === "bellowTitle") &&
                        renderIcon()}
                </div>

                {general_layout.enableDescription && (
                    <RichText.Content
                        tagName="div"
                        value={description}
                        placeholder={__("Description...")}
                        className="wcb-icon-box__description"
                    />
                )}
            </div>

            {general_icon.iconPosition === "right" && renderIcon()}
        </SaveCommon>
    );
}
