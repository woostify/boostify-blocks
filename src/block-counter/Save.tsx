import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks, RichText } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";
import MyIconFull from "../components/controls/MyIconFull";

export interface WcbAttrsForSave
    extends Omit<WcbAttrs, "heading" | "description"> {}

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
        style_progress,
		style_circle,
		style_title,
		general_icon,
        style_dimension,
        advance_motionEffect,
    } = attributes;

    const newAttrForSave: WcbAttrsForSave = {
        uniqueId,
        advance_responsiveCondition,
        advance_zIndex,
        general_layout,
        endNumber,
        designation,
        style_description,
        style_desination,
        style_Icon,
        style_progress,
		style_circle,
		style_title,
		general_icon,
        style_dimension,
        advance_motionEffect,
    };

    // Format number for static display (used in non-circle/bar layouts)
    const formatNumber = (num: string, decimalPlaces: string) => {
        const decimal = parseInt(decimalPlaces);
        const fixed = parseFloat(num || "0").toFixed(
            isNaN(decimal) || decimal < 0 ? 0 : decimal
        );
        const thousandSeparator = general_layout?.thousand || "";
        if (!thousandSeparator) {
            return fixed;
        }
        const parts = fixed.split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
        return parts.join(".");
    };

    // Circle geometry constants (kept in sync with the editor)
    const counterViewBoxSize = 300;
    const counterRadius = counterViewBoxSize / 2;
    const counterStroke = 5;
    const counterNormalizedRadius = counterRadius - counterStroke * 2;
    const counterCircumference = counterNormalizedRadius * 2 * Math.PI;

    // Interactivity API context consumed by the counter view script
    const counterContext = {
        start: parseFloat(general_layout?.startNumber || "0"),
        end: parseFloat(general_layout?.endNumber || "0"),
        total: parseFloat(general_layout?.totalNumber || general_layout?.endNumber || "0"),
        duration: parseInt(general_layout?.animationDuration || "1500") || 1500,
        decimals: parseInt(general_layout?.decimalNumber || "0") || 0,
        prefix: general_layout?.numberPrefix || "",
        suffix: general_layout?.numberSuffix || "",
        thousand: general_layout?.thousand || "",
        mode: general_layout?.type || "number",
        easing: general_layout?.animationType || "easeOutCubic",
        circumference: counterCircumference,
        current: formatNumber(general_layout?.startNumber || "0", general_layout?.decimalNumber || "0"),
        dashOffset: counterCircumference,
        width: "0%",
        animated: false,
    };

    // Render the progress circle structure
    const renderProgressCircle = () => {
        const radius = counterRadius;
        const stroke = counterStroke;
        const normalizedRadius = counterNormalizedRadius;
        const circumference = counterCircumference;
        const viewBoxSize = counterViewBoxSize;

        const isIconBesideContent =
            general_icon.iconPosition === "left" ||
            general_icon.iconPosition === "right";

        const isIconBesideTitle =
            general_icon.iconPosition === "leftOfTitle" ||
            general_icon.iconPosition === "rightOfTitle";

        const iconEl = general_icon.enableIcon ? (
            <div className="wcb-icon-box__icon">
                <MyIconFull icon={general_icon.icon} />
            </div>
        ) : null;

        const numberEl = (
            <div className="wcb-icon-box__number">
                <span>{general_layout.numberPrefix}</span>
                <span className="wcb-icon-box__number-value" data-wp-text="context.current">
                    {formatNumber(general_layout?.startNumber || "0", general_layout?.decimalNumber)}
                </span>
                <span>{general_layout.numberSuffix}</span>
            </div>
        );

        const descriptionEl = general_layout.enableDescription ? (
            <RichText.Content
                tagName="div"
                value={description}
                placeholder={__("Description of box ...")}
                className="wcb-icon-box__description"
                style={{
                    wordBreak: "break-word",
                    maxWidth: "100%",
                }}
            />
        ) : null;

        return (
            <div
                className="wcb-icon-box__progress-circle-wrap"
                style={{
                    position: "relative",
                }}
                data-start-number={general_layout?.startNumber || "0"}
                data-end-number={general_layout?.endNumber || "0"}
                data-animation-duration={general_layout?.animationDuration || "1500"}
                data-decimal-places={general_layout?.decimalNumber || "0"}
                data-number-suffix={general_layout?.numberSuffix || ""}
            >
                <svg
                    className="wcb-icon-box__progress-circle-svg"
                    viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
                    width="100%"
                    height="100%"
                >
                    <circle
                        stroke="#e0e0e0"
                        fill="transparent"
                        strokeWidth={stroke}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                    <circle
                        className="wcb-icon-box__progress-circle"
                        stroke={style_progress.progressColor}
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeDasharray={`${circumference} ${circumference}`}
                        style={{ strokeDashoffset: circumference }} // Initially set to 0% progress
                        data-wp-style--stroke-dashoffset="context.dashOffset"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                </svg>
                <div className="wcb-icon-box__progress-circle-content">
                    {isIconBesideContent ? (
                        <>
                            {general_icon.iconPosition === "left" && iconEl}
                            <div className="wcb-icon-box__progress-circle-content-inner">
                                {numberEl}
                                {descriptionEl}
                            </div>
                            {general_icon.iconPosition === "right" && iconEl}
                        </>
                    ) : isIconBesideTitle ? (
                        <>
                            <div className="wcb-icon-box__progress-circle-content-row">
                                {general_icon.iconPosition === "leftOfTitle" &&
                                    iconEl}
                                {numberEl}
                                {general_icon.iconPosition === "rightOfTitle" &&
                                    iconEl}
                            </div>
                            {descriptionEl}
                        </>
                    ) : (
                        <>
                            {general_icon.iconPosition === "top" && iconEl}
                            {numberEl}
                            {general_icon.iconPosition === "bellowTitle" && iconEl}
                            {descriptionEl}
                            {general_icon.iconPosition === "bottom" && iconEl}
                        </>
                    )}
                </div>
            </div>
        );
    };

    // Render the progress bar structure
    const renderProgressBar = () => {
        return (
            <div
                className="wcb-icon-box__progress-bar-wrap"
                data-start-number={general_layout?.startNumber || "0"}
                data-end-number={general_layout?.endNumber || "0"}
                data-animation-duration={general_layout?.animationDuration || "1500"}
                data-number-prefix={general_layout?.numberPrefix || ""}
                data-number-suffix={general_layout?.numberSuffix || ""}
            >
                <div className="wcb-icon-box__progress-bar-track">
                    <div
                        className="wcb-icon-box__progress-bar"
                        data-wp-style--width="context.width"
                        style={{
                            width: "0%",
                            backgroundColor: style_progress.progressColor,
                        }}
                    >
                    <div className="wcb-icon-box__number" style={{
							marginBottom: "0px"
						}}>
							<span>{general_layout.numberPrefix}</span>
                            <span className="wcb-icon-box__number-value" data-wp-text="context.current">0</span>
							<span>{general_layout.numberSuffix}</span>
						</div>
                    </div>
                </div>
                {general_layout.enableDescription && (
                    <RichText.Content
                        tagName="div"
                        value={description}
                        placeholder={__("Description of box ...")}
                        className="wcb-icon-box__description"
                        style={{
                            wordBreak: "break-word",
                            maxWidth: "100%",
                        }}
                    />
                )}
            </div>
        );
    };

    const renderIcon = () => {
        return (
            <>
                {general_icon.enableIcon && general_layout.type !== "circle" && general_layout.type !== "bar" && (
                    <div className="wcb-icon-box__icon-wrap">
                        <div className="wcb-icon-box__icon">
                            <MyIconFull icon={general_icon.icon} />
                        </div>
                    </div>
                )}
            </>
        );
    };

    const wrapBlockProps = useBlockProps.save({
        className: "wcb-counter-box__wrap",
        'data-wp-interactive': 'boostify-blocks/counter',
        'data-wp-context': JSON.stringify(counterContext),
        'data-wp-init': 'actions.init',
    });

    return (
        <SaveCommon
            {...wrapBlockProps}
            attributes={newAttrForSave}
            uniqueId={uniqueId}
        >
            {(general_icon.iconPosition === "top" || general_icon.iconPosition === "left") &&
                general_layout.type !== "circle" &&
                general_layout.type !== "bar" &&
                renderIcon()}

            {/* CHILD CONTENT */}
            <div className="wcb-icon-box__content">
                <div className="wcb-icon-box__content-title-wrap">
                    {general_icon.iconPosition === "leftOfTitle" &&
                        general_layout.type !== "circle" &&
                        general_layout.type !== "bar" &&
                        renderIcon()}
                    <div className="wcb-icon-box__content-title">
                        {general_layout.enablePrefix &&
                            general_layout.type !== "circle" &&
                            general_layout.type !== "bar" && (
                                <RichText.Content
                                    tagName="div"
                                    value={designation}
                                    placeholder={__("Designation...")}
                                    className="wcb-icon-box__designation"
                                />
                            )}

                        {general_layout.enableTitle &&
                            general_layout.type !== "circle" &&
                            general_layout.type !== "bar" && (
                                <div 
									className="wcb-icon-box__number"
									data-start-number={general_layout?.startNumber || "0"}
                                    data-end-number={general_layout?.endNumber || "0"}
                                    data-animation-duration={general_layout?.animationDuration || "1500"}
                                    data-decimal-places={general_layout?.decimalNumber || "0"}
								>
                                    <span>{general_layout.numberPrefix}</span>
									<span className="wcb-icon-box__number-value" data-wp-text="context.current">
										{formatNumber(general_layout.startNumber, general_layout?.decimalNumber)}
									</span>
                                    <span>{general_layout.numberSuffix}</span>
                                </div>
                            )}

                        {general_layout.type === "circle" && renderProgressCircle()}
                        {general_layout.type === "bar" && renderProgressBar()}
                    </div>
                    {(general_icon.iconPosition === "rightOfTitle" ||
                        general_icon.iconPosition === "bellowTitle") &&
                        general_layout.type !== "circle" &&
                        general_layout.type !== "bar" &&
                        renderIcon()}
                </div>

                {general_layout.enableDescription &&
                    general_layout.type !== "circle" &&
                    general_layout.type !== "bar" && (
                        <RichText.Content
                            tagName="div"
                            value={description}
                            placeholder={__("Description...")}
                            className="wcb-icon-box__description"
                        />
                    )}

                {general_layout.enableCTAButton && <InnerBlocks.Content />}
            </div>

            {(general_icon.iconPosition === "right" ||
                general_icon.iconPosition === "bottom") &&
                general_layout.type !== "circle" &&
                general_layout.type !== "bar" &&
                renderIcon()}
        </SaveCommon>
    );
}