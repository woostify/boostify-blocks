import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
    const {
        uniqueId,
        general_layout,
        style_description,
        style_desination,
        style_Icon,
        style_title,
        style_circle,
        advance_responsiveCondition,
        advance_zIndex,
        general_icon,
        style_dimension,
        advance_motionEffect,
    } = attrs;
    const { media_desktop, media_tablet } = DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;

    const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;

    // ------------------- WRAP DIV
    const getDivWrapStyles = (): CSSObject[] => {
        const isIconBesideContent =
            general_icon.iconPosition === "left" ||
            general_icon.iconPosition === "right";
        const isIconBesideTitle =
            general_icon.iconPosition === "leftOfTitle" ||
            general_icon.iconPosition === "rightOfTitle";

        // Convert text alignment to flex alignment for horizontal layouts.
        const getFlexAlignment = (alignment?: string | null) => {
            switch (alignment) {
                case "center":
                    return "center";
                case "right":
                    return "flex-end";
                case "left":
                default:
                    return "flex-start";
            }
        };

        const { value_Desktop, value_Tablet, value_Mobile } =
            getValueFromAttrsResponsives(general_layout.textAlignment);

        const justifyContentResponsive = {
            justifyContent: getFlexAlignment(value_Mobile),
            [`@media (min-width: ${media_tablet})`]: {
                justifyContent: getFlexAlignment(value_Tablet),
            },
            [`@media (min-width: ${media_desktop})`]: {
                justifyContent: getFlexAlignment(value_Desktop),
            },
        };

        const horizontalJustifyStyles: CSSObject = {
            [`${WRAP_CLASSNAME}`]: {
                ...justifyContentResponsive,
                ".wcb-icon-box__content": {
                    flexGrow: 0,
                },
            },
        };

        const titleJustifyStyles: CSSObject = {
            [`${WRAP_CLASSNAME} .wcb-icon-box__content-title-wrap`]: {
                ...justifyContentResponsive,
                ".wcb-icon-box__content-title": {
                    flexGrow: 0,
                },
            },
        };

        return [
            getStyleObjectFromResponsiveAttr({
                className: WRAP_CLASSNAME,
                value: general_layout.textAlignment,
                prefix: "textAlign",
            }),

            ...(general_layout.type === "number" && isIconBesideContent
                ? [horizontalJustifyStyles]
                : []),
            ...(general_layout.type === "number" && isIconBesideTitle
                ? [titleJustifyStyles]
                : []),

            {
                [`${WRAP_CLASSNAME}`]: {
                    display:
                        general_icon.iconPosition === "left" ||
                        general_icon.iconPosition === "right"
                            ? "flex"
                            : "block",
                    flexDirection:
                        general_icon.stackOn === "mobile" ||
                        general_icon.stackOn === "tablet"
                            ? general_icon.iconPosition === "right"
                                ? "column-reverse"
                                : "column"
                            : undefined,

                    ".wcb-icon-box__icon-wrap, .wcb-icon-box__content": {
                        alignSelf:
                            general_icon.verticalAlignment === "middle"
                                ? "center"
                                : undefined,
                    },

                    ".wcb-icon-box__content-title-wrap": {
                        display:
                            general_icon.iconPosition === "leftOfTitle" ||
                            general_icon.iconPosition === "rightOfTitle"
                                ? "flex"
                                : "block",
                    },

                    ".wcb-icon-box__progress-circle-wrap": {
                        position: "relative",
                        display: "inline-block",
                        verticalAlign: "top",
                    },

                    ".wcb-icon-box__progress-circle-svg": {
                        transform: "rotate(-90deg)",
                    },

                    ".wcb-icon-box__progress-circle-content": {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: isIconBesideContent ? "row" : "column",
                        alignItems: "center",
                        gap: "10px",
                        maxWidth: "100%",
                        width: "100%",
                        padding: "10px",
                    },

                    ".wcb-icon-box__progress-circle-content-inner": {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "10px",
                    },

                    ".wcb-icon-box__progress-circle-content-row": {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                    },

                    ".wcb-icon-box__progress-bar-wrap": {
                        position: "relative",
                        width: "100%",
                    },

                    ".wcb-icon-box__progress-bar-track": {
                        width: "100%",
                        backgroundColor: "#e0e0e0",
                        height: "100%",
                        borderRadius: "5px",
                        overflow: "hidden",
                        position: "relative",
                    },

                    ".wcb-icon-box__progress-bar": {
                        height: "100%",
                        transition: "transparent",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        paddingRight: "4px",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                    },

                    ".wcb-icon-box__title": {
                        fontSize: "16px",
                        color: "#666",
                        marginTop: "10px",
                    },

                    ".wcb-icon-box__icon": {
                        fontSize: "20px",
                    },

                    [`@media (min-width: ${media_tablet})`]: {
                        flexDirection:
                            general_icon.stackOn === "mobile" ? "row" : undefined,
                    },

                    [`@media (min-width: ${media_desktop})`]: {
                        flexDirection: "row",
                    },
                },
            },
        ];
    };

    if (!uniqueId) {
        return null;
    }

    return (
        <>
            <Global styles={getDivWrapStyles()} />
            <Global
                styles={getPaddingMarginStyles({
                    className: WRAP_CLASSNAME,
                    margin: style_dimension?.margin,
                    padding: style_dimension?.padding,
                })}
            />

            {/* --------- CIRCLE --------- */}
            {general_layout.type === "circle" ? (
                <Global
                    styles={[
                        getStyleObjectFromResponsiveAttr({
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__progress-circle-wrap`,
                            value: style_circle?.circleSize,
                            prefix: "width",
                            prefix_2: "height",
                        }),
                    ]}
                />
            ) : null}

            {/* --------- ICON --------- */}
            {general_icon.enableIcon ? (
                <Global
                    styles={[
                        getPaddingMarginStyles({
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__icon-wrap`,
                            margin: style_Icon.dimensions?.margin,
                        }),
                        getPaddingMarginStyles({
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__icon-wrap`,
                            padding: style_Icon.dimensions?.padding,
                        }),
                        getBorderStyles({
                            border: style_Icon.border,
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__icon`,
                            isWithRadius: true,
                        }),
                        getStyleObjectFromResponsiveAttr({
                            className: `${WRAP_CLASSNAME} .wcb-icon-full`,
                            value: style_Icon.iconSize,
                            prefix: "width",
                            prefix_2: "fontSize",
                        }),
                        {
                            [`${WRAP_CLASSNAME} .wcb-icon-full`]: {
                                color: style_Icon.color,
                                ":hover": {
                                    color: style_Icon.hoverColor,
                                },
                            },
                        },
                    ]}
                />
            ) : null}

            {/* --------- DESIGNATION --------- */}
            {general_layout.enablePrefix ? (
                <Global
                    styles={[
                        getTypographyStyles({
                            typography: style_desination.typography,
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__number`,
                        }),
                        getStyleObjectFromResponsiveAttr({
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__number`,
                            value: style_desination.marginBottom,
                            prefix: "marginBottom",
                        }),
                        {
                            [`${WRAP_CLASSNAME} .wcb-icon-box__number`]: {
                                color: style_desination.textColor,
                            },
                        },
                    ]}
                />
            ) : null}

            {/* --------- TITLE --------- */}
            {general_layout.enableTitle ? (
                <Global
                    styles={[
                        getTypographyStyles({
                            typography: style_title.typography,
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__number`,
                        }),
                        getStyleObjectFromResponsiveAttr({
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__number`,
                            value: style_title.marginBottom,
                            prefix: "marginBottom",
                        }),
                        {
                            [`${WRAP_CLASSNAME} .wcb-icon-box__number`]: {
                                color: style_title.textColor,
                            },
                        },
                    ]}
                />
            ) : null}

            {/* --------- DESCRIPTION --------- */}
            {general_layout.enableDescription ? (
                <Global
                    styles={[
                        getTypographyStyles({
                            typography: style_description.typography,
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__description`,
                        }),
                        getStyleObjectFromResponsiveAttr({
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__description`,
                            value: style_description.marginBottom,
                            prefix: "marginBottom",
                        }),
                        {
                            [`${WRAP_CLASSNAME} .wcb-icon-box__description`]: {
                                color: style_description.textColor,
                            },
                        },
                    ]}
                />
            ) : null}

            {/* ADVANCE */}
            <Global
                styles={getAdvanveDivWrapStyles({
                    advance_responsiveCondition,
                    advance_motionEffect,
                    advance_zIndex,
                    className: WRAP_CLASSNAME,
                })}
            />
        </>
    );
};

export default React.memo(GlobalCss);