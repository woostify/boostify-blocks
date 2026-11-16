import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import MyTextAlignControl, { TextAlignment } from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import MySelect from "../components/controls/MySelect";
import { MySelectOption } from "../types";

export interface WCB_TAGS_PANEL_GENERAL {
    layout: "accordion" | "grid";
    style: "horizontalStyle1" | "horizontalStyle2" | "verticalStyle1" | "verticalStyle2";
    textAlignment: TextAlignment;
}

export const WCB_TAGS_PANEL_GENERAL_DEMO: WCB_TAGS_PANEL_GENERAL = {
    layout: "accordion",
    style: "horizontalStyle1",
    textAlignment: "left",
};

interface Props extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
    panelData: WCB_TAGS_PANEL_GENERAL;
    setAttr__: (data: WCB_TAGS_PANEL_GENERAL) => void;
}

const WcbTabsPanelGeneral: FC<Props> = ({
    panelData = WCB_TAGS_PANEL_GENERAL_DEMO,
    setAttr__,
    initialOpen,
    onToggle,
    opened,
}) => {
    const {
        textAlignment,
        style,
        layout,
    } = panelData;

    const PLANS_DEMO: MyRadioItem<WCB_TAGS_PANEL_GENERAL["layout"]>[] = [
        { icon: "Accordion", name: "accordion" },
        { icon: "Grid", name: "grid" },
    ];

    const OPTION_STYLE_OPEN_TAB_DEMO: MySelectOption<WCB_TAGS_PANEL_GENERAL["style"]>[] = [
        { label: "Horizontal Style 1", value: "horizontalStyle1" },
        { label: "Horizontal Style 2", value: "horizontalStyle2" },
        { label: "Vertical Style 1", value: "verticalStyle1" },
        { label: "Vertical Style 2", value: "verticalStyle2" },
    ];

    // filter options with layout
    const filteredStyleOptions =
    layout === "accordion"
        ? OPTION_STYLE_OPEN_TAB_DEMO.filter(opt => opt.value.startsWith("horizontal"))
        : OPTION_STYLE_OPEN_TAB_DEMO.filter(opt => opt.value.startsWith("vertical"));


    return (
        <PanelBody initialOpen={initialOpen} onToggle={onToggle} opened={opened} title={__("General", "boostify-blocks")}>
            <div className="space-y-5">
                <MySelect
                    label={__("Style", "boostify-blocks")}
                    options={filteredStyleOptions}
                    value={style}
                    onChange={(value) => {
                        setAttr__({
                            ...panelData,
                            style: value as WCB_TAGS_PANEL_GENERAL["style"],
                        });
                    }}
                />
                <MyRadioGroup
                    hasResponsive={false}
                    label={__("Layout", "boostify-blocks")}
                    onChange={(value) => {
                        const nextLayout = value as WCB_TAGS_PANEL_GENERAL["layout"];
                        let nextStyle = style;
                        if (nextLayout === "grid" && style.startsWith("horizontal")) {
                            nextStyle = style === "horizontalStyle2" ? "verticalStyle2" : "verticalStyle1";
                        } else if (nextLayout === "accordion" && style.startsWith("vertical")) {
                            nextStyle = style === "verticalStyle2" ? "horizontalStyle2" : "horizontalStyle1";
                        }
                        setAttr__({ ...panelData, layout: nextLayout, style: nextStyle });
                    }}
                    value={layout}
                    plans={PLANS_DEMO}
                />
                <MyTextAlignControl
                    textAlignment={textAlignment}
                    onChange={(selected) => setAttr__({ ...panelData, textAlignment: selected })}
                    hasResponsive={false}
                />
            </div>
        </PanelBody>
    );
};

export default WcbTabsPanelGeneral;
