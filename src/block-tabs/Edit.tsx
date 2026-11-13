import { __ } from "@wordpress/i18n";
import {
    InnerBlocks,
    RichText,
    useBlockProps,
    store as blockEditorStore,
} from "@wordpress/block-editor";
import React, { useEffect, FC, useRef, useCallback } from "react";
import { WcbAttrs, WCB_TABS_PANEL_STYLE_CONTAINER_DEMO } from "./attributes";
import HOCInspectorControls, { InspectorControlsTabs } from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
// @ts-ignore
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import { useSelect, useDispatch, useRegistry } from "@wordpress/data";
import WcbTabsPanel_StyleTitle, {
    WCB_TABS_PANEL_STYLE_TITLE_DEMO,
    getTabsThemeActiveColors,
} from "./WcbTabsPanel_StyleTitle";
import WcbTabsPanel_StyleIcon, { WCB_TABS_PANEL_STYLE_ICON_DEMO } from "./WcbTabsPanel_StyleIcon";
import WcbTabsPanelPreset from "./WcbTabsPanelPreset";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import WcbTabsPanelTabTitle from "./WcbTabsPanelTabTitle";
import { createBlock } from "@wordpress/blocks";
import { BlockTabTitleItem } from "./types";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import WcbTabsPanel_StyleBody, {
    WCB_TABS_BODY_SOLID_PRESET,
    WCB_TABS_PANEL_STYLE_BODY_DEMO,
} from "./WcbTabsPanel_StyleBody";
import MyIconFull from "../components/controls/MyIconFull";
import WcbTabsPanelGeneral from "./WcbTabsPanelGeneral";
import WcbTabsPanel_StyleDimension from "./WcbTabsPanel_StyleDimension";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
    const { attributes, setAttributes, clientId, isSelected } = props;
    const {
        advance_responsiveCondition,
        advance_zIndex,
        advance_motionEffect,
        uniqueId,
        general_tabTitle,
        titles,
        tabContents,
        activeTabIndex,
        style_container,
        style_title,
        style_body,
        style_icon,
        style_dimension,
        general_preset,
        general_general,
    } = attributes;

    const ref = useRef<HTMLDivElement>(null);
    const wrapBlockProps = useBlockProps({ ref });
    const { tabIsOpen, tabAdvancesIsPanelOpen, tabGeneralIsPanelOpen, tabStylesIsPanelOpen, handleTogglePanel } = useSetBlockPanelInfo(uniqueId);

    const { childInnerBlocks, isBlockListReady, selectedChildTabIndex } = useSelect(
        (select) => {
            const storeSelect = select(blockEditorStore) as any;
            const children = storeSelect.getBlocks(clientId) || [];
            const selectedId = storeSelect.getSelectedBlockClientId();
            const childIndexWithSelection = children.findIndex(
                (child: any) =>
                    child.clientId === selectedId ||
                    storeSelect.hasSelectedInnerBlock(child.clientId, true)
            );
            return {
                childInnerBlocks: children,
                isBlockListReady: Boolean(storeSelect.getBlockListSettings(clientId)),
                selectedChildTabIndex: childIndexWithSelection,
            };
        },
        [clientId]
    );
    const { insertBlock, insertBlocks, removeBlock, removeBlocks } = useDispatch(blockEditorStore);
    const registry = useRegistry();

    const DEFAULT_TAB_CONTENT =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.";

    const createDefaultTabChild = useCallback(
        (legacyContent?: string) =>
            createBlock("boostify-blocks/tab-child", {}, [
                createBlock("core/paragraph", {
                    content: legacyContent || DEFAULT_TAB_CONTENT,
                }),
            ]),
        []
    );

    // Generate uniqueId and apply initial active tab color from the active theme once on insert.
    const UNIQUE_ID = wrapBlockProps.id;
    useEffect(() => {
        if (!UNIQUE_ID) return;
        const resolvedUniqueId = converUniqueIdToAnphaKey(UNIQUE_ID);
        if (!uniqueId) {
            const themeActiveColors = getTabsThemeActiveColors();
            const nextAttrs: Partial<WcbAttrs> = {
                uniqueId: resolvedUniqueId,
            };
            if (!style_title?.backgroundColorActive && !style_title?.colorActive) {
                nextAttrs.style_title = {
                    ...WCB_TABS_PANEL_STYLE_TITLE_DEMO,
                    ...style_title,
                    ...themeActiveColors,
                };
            }
            if (!style_icon?.activeColor) {
                nextAttrs.style_icon = {
                    ...WCB_TABS_PANEL_STYLE_ICON_DEMO,
                    ...style_icon,
                    activeColor: themeActiveColors.colorActive,
                };
            }
            setAttributes(nextAttrs);
        } else if (uniqueId !== resolvedUniqueId) {
            setAttributes({ uniqueId: resolvedUniqueId });
        }
    }, [UNIQUE_ID]);

    // Auto-switch to the matching tab when selecting a child/inner block via List View.
    useEffect(() => {
        if (selectedChildTabIndex >= 0 && selectedChildTabIndex !== activeTabIndex) {
            setAttributes({ activeTabIndex: selectedChildTabIndex });
        }
    }, [selectedChildTabIndex]);

    // Sync initOpenTab setting → activeTabIndex.
    useEffect(() => {
        const match = general_tabTitle.initOpenTab?.match(/^tab(\d+)$/);
        if (match) {
            const tabNum = parseInt(match[1], 10) - 1;
            if (tabNum >= 0 && tabNum < titles.length && tabNum !== activeTabIndex) {
                setAttributes({ activeTabIndex: tabNum });
            }
        }
    }, [general_tabTitle.initOpenTab]);

    // Synchronize number of childInnerBlocks with titles (runs once blockListSettings is registered,
    // using a micro-delay so InnerBlocks template finishes initializing first without duplication).
    useEffect(() => {
        if (!isBlockListReady || childInnerBlocks.length === titles.length) {
            return;
        }

        const timer = setTimeout(() => {
            const latestBlocks =
                (registry as any)?.select(blockEditorStore)?.getBlocks(clientId) || [];

            if (latestBlocks.length < titles.length) {
                const missingChildren = [];
                for (let i = latestBlocks.length; i < titles.length; i++) {
                    missingChildren.push(createDefaultTabChild(tabContents?.[i]));
                }
                if (missingChildren.length > 0) {
                    insertBlocks(missingChildren, latestBlocks.length, clientId, false);
                }
            } else if (latestBlocks.length > titles.length) {
                const extraIds = latestBlocks
                    .slice(titles.length)
                    .map((b: any) => b.clientId)
                    .filter(Boolean);
                if (extraIds.length > 0) {
                    removeBlocks(extraIds, false);
                }
            }
        }, 0);

        return () => clearTimeout(timer);
    }, [
        isBlockListReady,
        childInnerBlocks.length,
        titles.length,
        tabContents,
        createDefaultTabChild,
        insertBlocks,
        removeBlocks,
        registry,
        clientId,
    ]);


    // Tab visibility in editor is now handled by child blocks via
    // context "boostify-blocks/tabs/activeTabIndex" and hidden prop.

    const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
        switch (tab.name) {
            case "General":
                return (
                    <>
                        <WcbTabsPanelGeneral
                            onToggle={() => handleTogglePanel("General", "General")}
                            initialOpen={tabGeneralIsPanelOpen === "General" || tabGeneralIsPanelOpen === "first"}
                            opened={tabGeneralIsPanelOpen === "General" || undefined}
                            setAttr__={(data) => setAttributes({ general_general: data, general_preset: { ...general_preset, preset: "" } })}
                            panelData={general_general}
                        />
                        <WcbTabsPanelTabTitle
                            onToggle={() => handleTogglePanel("General", "TabTitle")}
                            initialOpen={tabGeneralIsPanelOpen === "TabTitle"}
                            opened={tabGeneralIsPanelOpen === "TabTitle" || undefined}
                            setAttr__={(data) => setAttributes({ general_tabTitle: data, general_preset: { ...general_preset, preset: "" } })}
                            panelData={general_tabTitle}
                            tabTitles={titles}
                            isGridLayout={general_general?.layout === "grid"}
                        />
                        <WcbTabsPanelPreset
                            onToggle={() => handleTogglePanel("General", "Preset", true)}
                            initialOpen={tabGeneralIsPanelOpen === "Preset"}
                            opened={tabGeneralIsPanelOpen === "Preset" || undefined}
                            setAttr__={(data) => {
                                const themeActiveColors = getTabsThemeActiveColors();
                                const presetTitleStyle = {
                                    ...WCB_TABS_PANEL_STYLE_TITLE_DEMO,
                                    ...themeActiveColors,
                                };
                                const presetIconStyle = {
                                    ...WCB_TABS_PANEL_STYLE_ICON_DEMO,
                                    activeColor: themeActiveColors.colorActive,
                                };
                                if (data.preset === "carousel-simple") {
                                    setAttributes({
                                        general_preset: data,
                                        general_general: {
                                            ...general_general,
                                            layout: "accordion",
                                            style: general_general.style.startsWith("horizontal")
                                                ? general_general.style
                                                : "horizontalStyle1",
                                        },
                                        style_container: WCB_TABS_PANEL_STYLE_CONTAINER_DEMO,
                                        style_title: presetTitleStyle,
                                        style_body: WCB_TABS_PANEL_STYLE_BODY_DEMO,
                                        style_icon: presetIconStyle,
                                    });
                                } else if (data.preset === "carousel-solid") {
                                    setAttributes({
                                        general_preset: data,
                                        general_general: {
                                            ...general_general,
                                            layout: "accordion",
                                            style: general_general.style.startsWith("horizontal")
                                                ? general_general.style
                                                : "horizontalStyle1",
                                        },
                                        style_container: WCB_TABS_PANEL_STYLE_CONTAINER_DEMO,
                                        style_title: presetTitleStyle,
                                        style_body: WCB_TABS_BODY_SOLID_PRESET,
                                        style_icon: presetIconStyle,
                                    });
                                } else if (data.preset === "grid-simple") {
                                    setAttributes({
                                        general_preset: data,
                                        general_general: {
                                            ...general_general,
                                            layout: "grid",
                                            style: general_general.style.startsWith("vertical")
                                                ? general_general.style
                                                : "verticalStyle1",
                                        },
                                        style_container: WCB_TABS_PANEL_STYLE_CONTAINER_DEMO,
                                        style_title: presetTitleStyle,
                                        style_body: WCB_TABS_PANEL_STYLE_BODY_DEMO,
                                        style_icon: presetIconStyle,
                                    });
                                } else if (data.preset === "grid-solid") {
                                    setAttributes({
                                        general_preset: data,
                                        general_general: {
                                            ...general_general,
                                            layout: "grid",
                                            style: general_general.style.startsWith("vertical")
                                                ? general_general.style
                                                : "verticalStyle1",
                                        },
                                        style_container: WCB_TABS_PANEL_STYLE_CONTAINER_DEMO,
                                        style_title: presetTitleStyle,
                                        style_body: WCB_TABS_BODY_SOLID_PRESET,
                                        style_icon: presetIconStyle,
                                    });
                                } else {
                                    setAttributes({ general_preset: data });
                                }
                            }}
                            panelData={general_preset}
                        />
                    </>
                );
            case "Styles":
                return (
                    <>
                        <WcbTabsPanel_StyleTitle
                            onToggle={() => handleTogglePanel("Styles", "_StyleTitle")}
                            initialOpen={tabStylesIsPanelOpen === "_StyleTitle" || tabStylesIsPanelOpen === "first"}
                            opened={tabStylesIsPanelOpen === "_StyleTitle" || undefined}
                            setAttr__={(data) => setAttributes({ style_title: data, general_preset: { ...general_preset, preset: "" } })}
                            panelData={style_title}
                            style={attributes.general_general.style}
                        />
                        <WcbTabsPanel_StyleIcon
                            onToggle={() => handleTogglePanel("Styles", "_StyleIcon")}
                            initialOpen={tabStylesIsPanelOpen === "_StyleIcon"}
                            opened={tabStylesIsPanelOpen === "_StyleIcon" || undefined}
                            setAttr__={(data) => setAttributes({ style_icon: data, general_preset: { ...general_preset, preset: "" } })}
                            panelData={style_icon}
                        />
                        <WcbTabsPanel_StyleBody
                            onToggle={() => handleTogglePanel("Styles", "_StyleBody")}
                            initialOpen={tabStylesIsPanelOpen === "_StyleBody"}
                            opened={tabStylesIsPanelOpen === "_StyleBody" || undefined}
                            setAttr__={(data) => setAttributes({ style_body: data, general_preset: { ...general_preset, preset: "" } })}
                            panelData={style_body}
                        />
                        <WcbTabsPanel_StyleDimension
                            onToggle={() => handleTogglePanel("Styles", "_StyleDimension")}
                            initialOpen={tabStylesIsPanelOpen === "_StyleDimension"}
                            opened={tabStylesIsPanelOpen === "_StyleDimension" || undefined}
                            setAttr__={(data) => setAttributes({ style_dimension: data, general_preset: { ...general_preset, preset: "" } })}
                            panelData={style_dimension}
                        />
                    </>
                );
            case "Advances":
                return (
                    <AdvancePanelCommon
                        advance_motionEffect={advance_motionEffect}
                        advance_responsiveCondition={advance_responsiveCondition}
                        advance_zIndex={advance_zIndex}
                        handleTogglePanel={handleTogglePanel}
                        setAttributes={setAttributes}
                        tabAdvancesIsPanelOpen={tabAdvancesIsPanelOpen}
                    />
                );
            default:
                return <div></div>;
        }
    };

    const WcbAttrsForSave = useCallback((): WcbAttrsForSave => ({
        advance_responsiveCondition,
        advance_zIndex,
        uniqueId,
        advance_motionEffect,
        general_general,
        general_tabTitle,
        style_container,
        titles,
        tabContents,
        activeTabIndex,
        style_icon,
        style_title,
        style_body,
        style_dimension,
    }), [
        advance_responsiveCondition,
        advance_zIndex,
        general_general,
        general_tabTitle,
        style_container,
        style_icon,
        style_title,
        uniqueId,
        advance_motionEffect,
        titles,
        tabContents,
        activeTabIndex,
        style_body,
        style_dimension,
    ]);

    const renderAddnewButton = () => (
        <button
            type="button"
            className="relative wcb-tabs__title_inner_btn flex flex-shrink-0 items-center justify-center rounded-lg px-3 bg-sky-100/80 hover:bg-sky-100 text-sky-900 text-sm font-medium"
            onClick={() => {
                const nextIndex = titles.length;
                const newChild = createDefaultTabChild();
                const applyAdd = () => {
                    insertBlock(newChild, nextIndex, clientId, false);
                    setAttributes({
                        titles: [...titles, { id: Date.now().toString(), title: "Tab", dataTabIndex: nextIndex }],
                        activeTabIndex: nextIndex,
                    });
                };
                if (typeof (registry as any)?.batch === "function") {
                    (registry as any).batch(applyAdd);
                } else {
                    applyAdd();
                }
            }}
        >
            <PlusIcon className="w-5 h-5" />
            <span className="ml-2.5">{__("Add tab", "boostify-blocks")}</span>
        </button>
    );

    const renderRemoveBtn = (item: BlockTabTitleItem, index: number) => {
        if (titles.length <= 1) return null;
        return (
            <button
                type="button"
                className="absolute bottom-full left-1/2 -translate-x-1/2 hidden group-hover:flex flex-shrink-0 items-center justify-center rounded-md h-8 w-8 bg-red-50 hover:bg-red-100 text-red-600"
                title={__("Remove", "boostify-blocks")}
                onClick={(e) => {
                    e.stopPropagation();
                    const newTitles = titles
                        .filter((j) => j.id !== item.id)
                        .map((t, i) => ({ ...t, dataTabIndex: i }));
                    const nextIndex =
                        activeTabIndex === index
                            ? 0
                            : activeTabIndex > index
                            ? activeTabIndex - 1
                            : Math.min(activeTabIndex, Math.max(0, newTitles.length - 1));
                    const targetClientId = childInnerBlocks?.[index]?.clientId;
                    const initMatch = general_tabTitle.initOpenTab?.match(/^tab(\d+)$/);
                    const initTabNum = initMatch ? parseInt(initMatch[1], 10) : 0;
                    const shouldResetInitOpen = initTabNum > newTitles.length;
                    const applyRemove = () => {
                        if (targetClientId) {
                            removeBlock(targetClientId, false);
                        }
                        setAttributes({
                            titles: newTitles,
                            activeTabIndex: nextIndex,
                            ...(shouldResetInitOpen
                                ? {
                                      general_tabTitle: {
                                          ...general_tabTitle,
                                          initOpenTab: "",
                                      },
                                  }
                                : {}),
                        });
                    };
                    if (typeof (registry as any)?.batch === "function") {
                        (registry as any).batch(applyRemove);
                    } else {
                        applyRemove();
                    }
                }}
            >
                <XMarkIcon className="w-5 h-5" />
            </button>
        );
    };

    const renderIcon = (index: number) => {
        if (!general_tabTitle.enableIcon) return null;
        return general_tabTitle.icon ? <MyIconFull className="wcb-tabs__icon" icon={general_tabTitle.icon} /> : null;
    };

    const isVerticalLayout =
        general_general?.layout === "grid" ||
        general_general?.style === "verticalStyle1" ||
        general_general?.style === "verticalStyle2";
    const isVerticalStyle2 = isVerticalLayout && general_general?.style === "verticalStyle2";
    const isHorizontalStyle2 = !isVerticalLayout && general_general?.style === "horizontalStyle2";
    const layoutClassNames = [
        isVerticalLayout ? "wcb-tabs--vertical" : "",
        isVerticalStyle2 ? "wcb-tabs--verticalStyle2" : "",
        isHorizontalStyle2 ? "wcb-tabs--horizontalStyle2" : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <MyCacheProvider uniqueKey={clientId}>
            <div
                {...wrapBlockProps}
                className={`${wrapBlockProps?.className} wcb-tabs__wrap ${uniqueId}${layoutClassNames ? ` ${layoutClassNames}` : ""}`}
                data-uniqueid={uniqueId}
            >
                <HOCInspectorControls renderTabPanels={renderTabBodyPanels} uniqueId={uniqueId} />
                {uniqueId && <GlobalCss {...WcbAttrsForSave()} />}
                <div className="wcb-tabs__contents">
                    <div className="wcb-tabs__titles">
                        {titles.map((item, index) => (
                            <div
                                className={`wcb-tabs__title_inner relative group wcb-tabs__title_inner--icon-${general_tabTitle.iconPosition} ${activeTabIndex === index ? "is-active" : ""}`}
                                data-tab-index={item.dataTabIndex}
                                key={item.id}
                                onClick={() => {
                                    if (activeTabIndex !== index) {
                                        setAttributes({ activeTabIndex: index });
                                    }
                                }}
                            >
                                {renderRemoveBtn(item, index)}
                                {(general_tabTitle.iconPosition === "left" || general_tabTitle.iconPosition === "top") && renderIcon(index)}
                                <RichText
                                    key={item.id}
                                    tagName="p"
                                    className="wcb-tabs__title"
                                    value={item.title}
                                    onFocusCapture={() => {
                                        if (activeTabIndex !== index) {
                                            setAttributes({ activeTabIndex: index });
                                        }
                                    }}
                                    onChange={(value) => {
                                        const newTitles = titles.map((j) => (j.id !== item.id ? j : { ...j, title: value }));
                                        setAttributes({ titles: newTitles });
                                    }}
                                    placeholder="Title"
                                />
                                {(general_tabTitle.iconPosition === "right" || general_tabTitle.iconPosition === "bottom") && renderIcon(index)}
                            </div>
                        ))}
                        {renderAddnewButton()}
                    </div>
                    <InnerBlocks
                        allowedBlocks={["boostify-blocks/tab-child"]}
                        template={[
                            ["boostify-blocks/tab-child", {}],
                            ["boostify-blocks/tab-child", {}],
                            ["boostify-blocks/tab-child", {}],
                        ]}
                        renderAppender={() => null}
                    />
                </div>
            </div>
        </MyCacheProvider>
    );
};

export default Edit;
