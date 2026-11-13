import React, { FC } from "react";
import { Global } from "@emotion/react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import getBorderStyles from "../utils/getBorderStyles";
import getBackgroundColorGradientStyles from "../utils/getBackgroundColorGradientStyles";
import { WcbAttrsForSave } from "./Save";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";

interface Props extends WcbAttrsForSave {}

const getFlexAlignment = (align: string) => {
    switch (align) {
        case "left":
            return "flex-start";
        case "right":
            return "flex-end";
        case "center":
            return "center";
        default:
            return "flex-start";
    }
};

const GlobalCss: FC<Props> = (attrs) => {
    const {
        uniqueId,
        style_icon,
        general_tabTitle,
        style_container,
        style_body,
        style_title,
        style_dimension,
        advance_responsiveCondition,
        advance_zIndex,
        advance_motionEffect,
        general_general,
    } = attrs;

    if (!uniqueId) return null;

    const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
    const TITLE_WRAP_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__titles`;
    const TITLE_CHILD_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__title_inner`;
    const TITLE_CHILD_CLASSNAME_ACTIVE = `${WRAP_CLASSNAME} .wcb-tabs__title_inner.is-active`;
    const TITLE_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__title`;
    const TITLE_CLASSNAME_ACTIVE = `${TITLE_CHILD_CLASSNAME_ACTIVE} .wcb-tabs__title`;
    const BODY_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tab-child__wrap`;
    const BODY_CHILD_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tab-child__inner`;
    const ICON_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__icon`;
    const ICON_CLASSNAME_ACTIVE = `${TITLE_CHILD_CLASSNAME_ACTIVE} .wcb-tabs__icon`;
    const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__contents`;

    const iconDesk = getValueFromAttrsResponsives(style_icon?.size)?.value_Desktop;
    const iconTab = getValueFromAttrsResponsives(style_icon?.size)?.value_Tablet;
    const iconMob = getValueFromAttrsResponsives(style_icon?.size)?.value_Mobile;
    const IconSizeConverted: HasResponsive<string | undefined> = {
        Desktop: iconDesk !== null && iconDesk !== undefined ? `${iconDesk}px` : undefined,
        Tablet: iconTab !== null && iconTab !== undefined ? `${iconTab}px` : undefined,
        Mobile: iconMob !== null && iconMob !== undefined ? `${iconMob}px` : undefined,
    };

    const isVerticalLayout =
        general_general?.layout === "grid" ||
        general_general?.style === "verticalStyle1" ||
        general_general?.style === "verticalStyle2";
    const isVerticalStyle2 = isVerticalLayout && general_general?.style === "verticalStyle2";
    const isHorizontalStyle2 =
        !isVerticalLayout && general_general?.style === "horizontalStyle2";

    const tabAlign = getFlexAlignment(general_tabTitle?.tabAlignment || "left");
    const textAlign = getFlexAlignment(general_tabTitle?.textAlignment || "left");

    return (
        <>
            {/* Inner container dynamic alignment & legacy container gaps */}
            <Global
                styles={[
                    getStyleObjectFromResponsiveAttr({ className: INNER_CLASSNAME, value: style_container?.colunmGap, prefix: "columnGap" }),
                    getStyleObjectFromResponsiveAttr({ className: INNER_CLASSNAME, value: style_container?.rowGap, prefix: "rowGap" }),
                    { [INNER_CLASSNAME]: { textAlign: general_general?.textAlignment } },
                ]}
            />

            {/* Dynamic alignment & spacing for Tab Titles / Icon */}
            <Global
                styles={[
                    {
                        ...(!isVerticalLayout
                            ? {
                                  [TITLE_WRAP_CLASSNAME]: {
                                      justifyContent: tabAlign,
                                  },
                              }
                            : {}),
                        [TITLE_CHILD_CLASSNAME]: {
                            justifyContent: textAlign,
                        },
                        [`${TITLE_CHILD_CLASSNAME}--icon-top`]: {
                            alignItems: textAlign,
                        },
                        [`${TITLE_CHILD_CLASSNAME}--icon-bottom`]: {
                            alignItems: textAlign,
                        },
                    },
                    getStyleObjectFromResponsiveAttr({
                        className: TITLE_CHILD_CLASSNAME,
                        value: style_icon?.colGap,
                        prefix: "gap",
                    }),
                ]}
            />

            {/* Dynamic user Styles: Legacy container, Title, Body */}
            <Global
                styles={[
                    ...(style_container?.background
                        ? [getBackgroundColorGradientStyles({ className: BODY_CLASSNAME, background: style_container.background })]
                        : []),
                    ...(style_container?.border
                        ? [getBorderStyles({ border: style_container.border, className: BODY_CLASSNAME, isWithRadius: true })]
                        : []),
                    getStyleObjectFromResponsiveAttr({ className: TITLE_WRAP_CLASSNAME, value: style_title?.colunmGap, prefix: "columnGap" }),
                    getStyleObjectFromResponsiveAttr({ className: TITLE_WRAP_CLASSNAME, value: style_title?.rowGap, prefix: "rowGap" }),
                    getTypographyStyles({ className: TITLE_CLASSNAME, typography: style_title?.typography }),
                    getPaddingMarginStyles({ className: TITLE_CLASSNAME, padding: style_title?.padding }),
                    {
                        [TITLE_CHILD_CLASSNAME]: {
                            backgroundColor: style_title?.backgroundColor,
                        },
                        [TITLE_CLASSNAME]: {
                            color: style_title?.color,
                        },
                        [TITLE_CHILD_CLASSNAME_ACTIVE]: {
                            backgroundColor: style_title?.backgroundColorActive,
                        },
                        [TITLE_CLASSNAME_ACTIVE]: {
                            color: style_title?.colorActive,
                        },
                    },
                    getTypographyStyles({ className: BODY_CLASSNAME, typography: style_body?.typography }),
                    getPaddingMarginStyles({ className: BODY_CLASSNAME, padding: style_body?.padding, margin: style_body?.margin }),
                    {
                        [BODY_CLASSNAME]: {
                            color: style_body?.color,
                            backgroundColor: style_body?.backgroundColor,
                            "&:hover": {
                                backgroundColor: style_body?.backgroundColorHover,
                            },
                        },
                        [BODY_CHILD_CLASSNAME]: {
                            color: style_body?.color,
                            "&:hover": {
                                color: style_body?.colorHover,
                            },
                        },
                    },
                ]}
            />

            {/* Dynamic Icon Size & Colors */}
            <Global
                styles={[
                    getStyleObjectFromResponsiveAttr({
                        className: `${ICON_CLASSNAME}, ${ICON_CLASSNAME}:before, ${ICON_CLASSNAME} svg`,
                        value: IconSizeConverted,
                        prefix: "fontSize",
                        prefix_2: "height",
                        prefix_3: "width",
                    }),
                    {
                        [ICON_CLASSNAME]: { color: style_icon?.color },
                        [ICON_CLASSNAME_ACTIVE]: { color: style_icon?.activeColor },
                    },
                ]}
            />

            {/* Dimension & Advance */}
            <Global
                styles={getPaddingMarginStyles({
                    className: WRAP_CLASSNAME,
                    padding: style_dimension?.padding,
                    margin: style_dimension?.margin,
                })}
            />
            <Global
                styles={getAdvanveDivWrapStyles({
                    advance_motionEffect,
                    advance_responsiveCondition,
                    advance_zIndex,
                    className: WRAP_CLASSNAME,
                })}
            />

            {/* Title Border (non-folder-tab styles only) */}
            {!isHorizontalStyle2 && !isVerticalStyle2 && (
                <Global
                    styles={[
                        getBorderStyles({
                            className: TITLE_CHILD_CLASSNAME,
                            border: style_title?.border,
                            isWithRadius: true,
                        }),
                        getBorderStyles({
                            className: TITLE_CHILD_CLASSNAME_ACTIVE,
                            border: style_title?.borderActive,
                            isWithRadius: true,
                        }),
                    ]}
                />
            )}

            {/* Body Border */}
            <Global
                styles={[
                    getBorderStyles({
                        className: BODY_CLASSNAME,
                        border: style_body?.border,
                        isWithRadius: true,
                    }),
                ]}
            />
        </>
    );
};

export default React.memo(GlobalCss);
