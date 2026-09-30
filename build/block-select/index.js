/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@heroicons/react/24/outline/PlusIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/PlusIcon.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const React = __webpack_require__(/*! react */ \"react\");\n\nfunction PlusIcon({\n  title,\n  titleId,\n  ...props\n}, svgRef) {\n  return /*#__PURE__*/React.createElement(\"svg\", Object.assign({\n    xmlns: \"http://www.w3.org/2000/svg\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    strokeWidth: 1.5,\n    stroke: \"currentColor\",\n    \"aria-hidden\": \"true\",\n    ref: svgRef,\n    \"aria-labelledby\": titleId\n  }, props), title ? /*#__PURE__*/React.createElement(\"title\", {\n    id: titleId\n  }, title) : null, /*#__PURE__*/React.createElement(\"path\", {\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\",\n    d: \"M12 4.5v15m7.5-7.5h-15\"\n  }));\n}\n\nconst ForwardRef = React.forwardRef(PlusIcon);\nmodule.exports = ForwardRef;\n\n//# sourceURL=webpack://boostify-blocks/./node_modules/@heroicons/react/24/outline/PlusIcon.js?");

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/XMarkIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/XMarkIcon.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const React = __webpack_require__(/*! react */ \"react\");\n\nfunction XMarkIcon({\n  title,\n  titleId,\n  ...props\n}, svgRef) {\n  return /*#__PURE__*/React.createElement(\"svg\", Object.assign({\n    xmlns: \"http://www.w3.org/2000/svg\",\n    fill: \"none\",\n    viewBox: \"0 0 24 24\",\n    strokeWidth: 1.5,\n    stroke: \"currentColor\",\n    \"aria-hidden\": \"true\",\n    ref: svgRef,\n    \"aria-labelledby\": titleId\n  }, props), title ? /*#__PURE__*/React.createElement(\"title\", {\n    id: titleId\n  }, title) : null, /*#__PURE__*/React.createElement(\"path\", {\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\",\n    d: \"M6 18L18 6M6 6l12 12\"\n  }));\n}\n\nconst ForwardRef = React.forwardRef(XMarkIcon);\nmodule.exports = ForwardRef;\n\n//# sourceURL=webpack://boostify-blocks/./node_modules/@heroicons/react/24/outline/XMarkIcon.js?");

/***/ }),

/***/ "./src/block-select/index.js":
/*!************************************************!*\
  !*** ./src/block-select/index.js + 20 modules ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
eval("\n// EXTERNAL MODULE: external \"React\"\nvar external_React_ = __webpack_require__(\"react\");\n;// external [\"wp\",\"blocks\"]\nconst external_wp_blocks_namespaceObject = window[\"wp\"][\"blocks\"];\n;// ./src/block-select/style.scss\n// extracted by mini-css-extract-plugin\n\n;// external [\"wp\",\"i18n\"]\nconst external_wp_i18n_namespaceObject = window[\"wp\"][\"i18n\"];\n;// external [\"wp\",\"blockEditor\"]\nconst external_wp_blockEditor_namespaceObject = window[\"wp\"][\"blockEditor\"];\n;// external [\"wp\",\"components\"]\nconst external_wp_components_namespaceObject = window[\"wp\"][\"components\"];\n;// ./src/components/HOCInspectorControls.tsx\n\n\n\n\n\nconst INSPECTOR_CONTROLS_TABS = [{\n  name: \"General\",\n  title: (0,external_React_.createElement)(\"div\", {\n    className: \"flex flex-col items-center justify-center space-y-0.5\"\n  }, (0,external_React_.createElement)(\"svg\", {\n    viewBox: \"0 0 24 24\",\n    fill: \"none\",\n    className: \"w-5 h-5 fill-none\"\n  }, (0,external_React_.createElement)(\"path\", {\n    d: \"M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeMiterlimit: \"10\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  }), (0,external_React_.createElement)(\"path\", {\n    d: \"M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeMiterlimit: \"10\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  }), (0,external_React_.createElement)(\"path\", {\n    d: \"M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeMiterlimit: \"10\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  }), (0,external_React_.createElement)(\"path\", {\n    d: \"M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeMiterlimit: \"10\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  })), (0,external_React_.createElement)(\"div\", null, (0,external_wp_i18n_namespaceObject.__)(\"General\", \"boostify-blocks\")))\n}, {\n  name: \"Styles\",\n  title: (0,external_React_.createElement)(\"div\", {\n    className: \"flex flex-col items-center justify-center space-y-0.5\"\n  }, (0,external_React_.createElement)(\"svg\", {\n    className: \"w-5 h-5 fill-none\",\n    viewBox: \"0 0 24 24\",\n    fill: \"none\"\n  }, (0,external_React_.createElement)(\"path\", {\n    d: \"M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeLinecap: \"round\"\n  }), (0,external_React_.createElement)(\"path\", {\n    d: \"M11.47 6H16.47\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeLinecap: \"round\"\n  }), (0,external_React_.createElement)(\"path\", {\n    d: \"M11.47 18H15.47\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeLinecap: \"round\"\n  }), (0,external_React_.createElement)(\"path\", {\n    d: \"M11.47 13.95L16.47 14\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeLinecap: \"round\"\n  }), (0,external_React_.createElement)(\"path\", {\n    d: \"M11.47 10H14.47\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeLinecap: \"round\"\n  }), (0,external_React_.createElement)(\"path\", {\n    d: \"M5.49 2C3.86 2 2.53 3.33 2.53 4.95V17.91C2.53 18.36 2.72 19.04 2.95 19.43L3.77 20.79C4.71 22.36 6.26 22.36 7.2 20.79L8.02 19.43C8.25 19.04 8.44 18.36 8.44 17.91V4.95C8.44 3.33 7.11 2 5.49 2Z\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeLinecap: \"round\"\n  }), (0,external_React_.createElement)(\"path\", {\n    d: \"M8.44 7H2.53\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeLinecap: \"round\"\n  })), (0,external_React_.createElement)(\"div\", null, (0,external_wp_i18n_namespaceObject.__)(\"Styles\", \"boostify-blocks\")))\n}, {\n  name: \"Advances\",\n  title: (0,external_React_.createElement)(\"div\", {\n    className: \"flex flex-col items-center justify-center space-y-0.5\"\n  }, (0,external_React_.createElement)(\"svg\", {\n    className: \"w-5 h-5 fill-none\",\n    viewBox: \"0 0 24 24\",\n    fill: \"none\"\n  }, (0,external_React_.createElement)(\"path\", {\n    d: \"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeMiterlimit: \"10\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  }), (0,external_React_.createElement)(\"path\", {\n    d: \"M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeMiterlimit: \"10\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  })), (0,external_React_.createElement)(\"div\", null, (0,external_wp_i18n_namespaceObject.__)(\"Advances\", \"boostify-blocks\")))\n}];\nconst HOCInspectorControls = ({\n  renderTabPanels,\n  tabs = INSPECTOR_CONTROLS_TABS,\n  uniqueId = \"\",\n  tabDefaultActive = \"General\",\n  onChangeActive\n}) => {\n  (0,external_React_.useEffect)(() => {\n    setTimeout(() => {\n      const tabIsOpenEl = document.querySelector(\".components-panel__body.is-opened\");\n      if (!tabIsOpenEl) {\n        return;\n      }\n      tabIsOpenEl.scrollIntoView({\n        behavior: \"smooth\"\n      });\n    }, 500);\n  }, []);\n\n  // HIDDEN PANEL ADVANCE DEFAULT OF WP\n  const handleTooglePanelAdvanceDefaultWp = () => {\n    const advancedPanel = document.querySelector(\".components-panel__body.block-editor-block-inspector__advanced\");\n    const elAdvancesbtn = document.querySelector(\".HOCInspectorControls__ative-tab\");\n    const isAdvanceTabActive = !!elAdvancesbtn?.id.includes(\"-Advances\");\n    if (!advancedPanel) {\n      return;\n    }\n    advancedPanel.style.display = isAdvanceTabActive ? \"block\" : \"none\";\n  };\n  const handleChageTab = tabName => {\n    onChangeActive && onChangeActive(tabName);\n    setTimeout(() => {\n      handleTooglePanelAdvanceDefaultWp();\n    }, 100);\n  };\n  const renderContent = () => {\n    return (0,external_React_.createElement)(external_wp_components_namespaceObject.TabPanel, {\n      className: `wcb-inspectorControls__panel ${uniqueId}`,\n      activeClass: \"HOCInspectorControls__ative-tab active-tab\",\n      tabs: tabs,\n      onSelect: handleChageTab,\n      initialTabName: tabDefaultActive\n    }, tab => {\n      return (0,external_React_.createElement)(\"div\", {\n        key: tab.name,\n        className: tab.name\n      }, renderTabPanels(tab));\n    });\n  };\n  const renderContent2 = () => {\n    !!uniqueId && setTimeout(() => {\n      handleTooglePanelAdvanceDefaultWp();\n    }, 100);\n    return null;\n  };\n  return (0,external_React_.createElement)(external_wp_blockEditor_namespaceObject.InspectorControls, null, renderContent(), renderContent2());\n};\n/* harmony default export */ const components_HOCInspectorControls = ((0,external_React_.memo)(HOCInspectorControls));\n;// ./src/block-select/editor.scss\n// extracted by mini-css-extract-plugin\n\n;// external [\"wp\",\"data\"]\nconst external_wp_data_namespaceObject = window[\"wp\"][\"data\"];\n;// ./src/data/index.ts\n\nconst INIT_BLOCK = {\n  Advances: {\n    panelIsOpen: \"\"\n  },\n  General: {\n    panelIsOpen: \"first\"\n  },\n  Styles: {\n    panelIsOpen: \"first\"\n  },\n  tabIsOpen: \"General\"\n};\nconst DEFAULT_STATE = {};\nconst WCB_STORE_PANELS = \"boostify-blocks/panels\";\nconst actions = {\n  setBlockPanelInfo(blockId, block) {\n    return {\n      type: \"SET_BLOCK_PANEL_INFO\",\n      blockId,\n      block\n    };\n  }\n};\nconst store = (0,external_wp_data_namespaceObject.createReduxStore)(WCB_STORE_PANELS, {\n  reducer(state = DEFAULT_STATE, action) {\n    switch (action.type) {\n      case \"SET_BLOCK_PANEL_INFO\":\n        const newBlock = state[action.blockId] || INIT_BLOCK;\n        return {\n          ...state,\n          [action.blockId]: {\n            ...newBlock,\n            ...action.block\n          }\n        };\n      default:\n        return state;\n    }\n  },\n  actions,\n  selectors: {\n    getBlockPanelInfo(state) {\n      return state;\n    }\n  },\n  controls: {},\n  resolvers: {}\n});\n\n// Guard against duplicate registration: each block is a separate webpack bundle,\n// but all bundles share the same browser window. Only register once.\n\nconst _win = window;\nif (!_win.__boostifyPanelsStoreRegistered) {\n  _win.__boostifyPanelsStoreRegistered = true;\n  (0,external_wp_data_namespaceObject.register)(store);\n}\n\n;// ./src/hooks/useSetBlockPanelInfo.ts\n\n\n// @ts-ignore\n\nconst useSetBlockPanelInfo = uniqueId => {\n  // This ensures Emotion global CSS is imported inside the mobile iframe.\n  const {\n    setBlockPanelInfo\n  } = (0,external_wp_data_namespaceObject.useDispatch)(WCB_STORE_PANELS);\n  const {\n    blockStores\n  } = (0,external_wp_data_namespaceObject.useSelect)(select => {\n    return {\n      blockStores: select(WCB_STORE_PANELS\n      // @ts-ignore\n      )?.getBlockPanelInfo()\n    };\n  }, [uniqueId]);\n  const {\n    tabIsOpen,\n    Advances,\n    General,\n    Styles\n  } = blockStores[uniqueId] || {};\n  const blockStore = blockStores[uniqueId];\n  (0,external_React_.useEffect)(() => {\n    if (!blockStore && setBlockPanelInfo) {\n      setBlockPanelInfo(uniqueId, {\n        tabIsOpen: \"General\",\n        General: {\n          panelIsOpen: \"first\"\n        },\n        Styles: {\n          panelIsOpen: \"first\"\n        }\n      });\n    }\n  }, [uniqueId]);\n  const handleTogglePanel = (tab, panel, initOpenPanel) => {\n    if (!setBlockPanelInfo) {\n      return;\n    }\n    if (initOpenPanel && blockStore && blockStore[tab]?.panelIsOpen === \"first\") {\n      panel = \"\";\n    }\n    if (blockStore && blockStore[tab]?.panelIsOpen === panel) {\n      panel = \"\";\n    }\n    setBlockPanelInfo(uniqueId, {\n      tabIsOpen: tab,\n      [tab]: {\n        panelIsOpen: panel === undefined && blockStore ? blockStore[tab]?.panelIsOpen : panel\n      }\n    });\n  };\n  return {\n    setBlockPanelInfo,\n    tabAdvances: Advances,\n    tabGeneral: General,\n    tabStyles: Styles,\n    tabIsOpen,\n    blockStore,\n    handleTogglePanel,\n    tabGeneralIsPanelOpen: General?.panelIsOpen,\n    tabStylesIsPanelOpen: Styles?.panelIsOpen,\n    tabAdvancesIsPanelOpen: Advances?.panelIsOpen\n  };\n};\n/* harmony default export */ const hooks_useSetBlockPanelInfo = (useSetBlockPanelInfo);\n;// ./src/block-select/WcbSelectPanelGeneral.tsx\n\n\n\n\nconst WCB_SELECT_PANEL_GENERAL_DEMO = {\n  isRequired: false\n};\nconst WcbRadioPanelGeneral = ({\n  panelData = WCB_SELECT_PANEL_GENERAL_DEMO,\n  setAttr__,\n  initialOpen,\n  onToggle,\n  opened\n}) => {\n  const {\n    isRequired\n  } = panelData;\n  return (0,external_React_.createElement)(external_wp_components_namespaceObject.PanelBody, {\n    initialOpen: initialOpen,\n    onToggle: onToggle,\n    opened: opened,\n    title: (0,external_wp_i18n_namespaceObject.__)(\"General\", \"boostify-blocks\")\n  }, (0,external_React_.createElement)(\"div\", {\n    className: \"space-y-5\"\n  }, (0,external_React_.createElement)(external_wp_components_namespaceObject.ToggleControl, {\n    label: (0,external_wp_i18n_namespaceObject.__)(\"Required\", \"boostify-blocks\"),\n    checked: isRequired,\n    onChange: isChecked => {\n      setAttr__({\n        ...panelData,\n        isRequired: isChecked\n      });\n    }\n  })));\n};\n/* harmony default export */ const WcbSelectPanelGeneral = (WcbRadioPanelGeneral);\n;// ./src/block-form/FormInputLabelRichText.tsx\n\n\n\nconst FormInputLabelRichText = ({\n  isRequired,\n  value,\n  className = \"\",\n  onChange\n}) => {\n  return (0,external_React_.createElement)(external_wp_blockEditor_namespaceObject.RichText, {\n    onChange: onChange,\n    value: value,\n    className: `wcb-form__label ${className} ${isRequired ? \"required\" : \"\"}`,\n    tagName: \"span\"\n  });\n};\n// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/PlusIcon.js\nvar PlusIcon = __webpack_require__(\"./node_modules/@heroicons/react/24/outline/PlusIcon.js\");\n// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/XMarkIcon.js\nvar XMarkIcon = __webpack_require__(\"./node_modules/@heroicons/react/24/outline/XMarkIcon.js\");\n;// ./src/utils/converUniqueId.ts\nfunction converUniqueId(text, prefix = \"\") {\n  if (!text) {\n    return prefix + \"converUniqueIdReturnNull\";\n  }\n  return prefix + text.replace(/-/g, \"\").replace(/ /g, \"\");\n}\n;// ./src/utils/converUniqueIdToAnphaKey.ts\nfunction converUniqueIdToAnphaKey(text, prefix = \"wcb-\") {\n  if (!text) {\n    return (prefix + \"converniquedreturnnull\" + Date.now() + Math.random()).replace(/\\./g, \"-\");\n  }\n\n  // Convert clientId to a valid CSS class name\n  // Example: \"a1b2c3d4-e5f6-7890\" -> \"wcb-a1b2c3d4e5f67890\"\n  const cleanId = text.replace(/-/g, \"\") // Remove hyphens\n  .replace(/\\s/g, \"\") // Remove spaces\n  .substring(0, 12); // Keep first 12 characters for reasonable length\n\n  return prefix + cleanId;\n}\n\n// Alternative function that maintains full uniqueness\nfunction converClientIdToUniqueClass(clientId, prefix = \"wcb-\") {\n  if (!clientId) {\n    return prefix + \"fallback\" + Date.now();\n  }\n\n  // Create a hash-like short identifier from clientId\n  let hash = 0;\n  for (let i = 0; i < clientId.length; i++) {\n    const char = clientId.charCodeAt(i);\n    hash = (hash << 5) - hash + char;\n    hash = hash & hash; // Convert to 32-bit integer\n  }\n\n  // Convert to positive number and base36 (alphanumeric)\n  const shortId = Math.abs(hash).toString(36);\n  return prefix + shortId;\n}\n;// ./src/block-select/Edit.tsx\n\n\n\n\n\n\n\n\n\n\n\n\nconst MY_RADIO_OPTIONS_DEMO = [{\n  label: \"Option label\",\n  value: \"option-value\"\n}];\nconst Edit = props => {\n  const {\n    attributes,\n    setAttributes,\n    clientId,\n    isSelected\n  } = props;\n  const {\n    general_general,\n    uniqueId,\n    label\n  } = attributes;\n  //  COMMON HOOKS\n  // const { myCache, ref } = useCreateCacheEmotion();\n  const wrapBlockProps = (0,external_wp_blockEditor_namespaceObject.useBlockProps)();\n  const {\n    tabIsOpen,\n    tabAdvancesIsPanelOpen,\n    tabGeneralIsPanelOpen,\n    tabStylesIsPanelOpen,\n    handleTogglePanel\n  } = hooks_useSetBlockPanelInfo(uniqueId);\n  const UNIQUE_NAME = converUniqueId(uniqueId, \"select\");\n  // make uniqueid\n  const UNIQUE_ID = wrapBlockProps.id;\n  (0,external_React_.useEffect)(() => {\n    setAttributes({\n      uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID)\n    });\n  }, [UNIQUE_ID]);\n  //\n\n  //\n  const converValueFromString = text => {\n    return text.replace(/ /g, \"-\");\n  };\n  //\n\n  const renderTabBodyPanels = tab => {\n    switch (tab.name) {\n      case \"General\":\n        return (0,external_React_.createElement)(external_React_.Fragment, null, (0,external_React_.createElement)(WcbSelectPanelGeneral, {\n          onToggle: () => handleTogglePanel(\"General\", \"General\", true),\n          initialOpen: tabGeneralIsPanelOpen === \"General\" || tabGeneralIsPanelOpen === \"first\",\n          opened: tabGeneralIsPanelOpen === \"General\" || undefined\n          //\n          ,\n          setAttr__: data => {\n            setAttributes({\n              general_general: data\n            });\n          },\n          panelData: general_general\n        }));\n      // case \"Styles\":\n      // \treturn <></>;\n      case \"Advances\":\n        return (0,external_React_.createElement)(external_React_.Fragment, null);\n      default:\n        return (0,external_React_.createElement)(\"div\", null);\n    }\n  };\n  const renderSelect = () => {\n    return (0,external_React_.createElement)(\"select\", {\n      className: \"wcb-select__select\",\n      name: UNIQUE_NAME,\n      id: \"\"\n    }, (attributes.options || []).map((item, index) => (0,external_React_.createElement)(\"option\", {\n      key: index + \"-\" + item.value,\n      value: item.value\n    }, item.label)));\n  };\n  const renderAddnewButton = () => {\n    return (0,external_React_.createElement)(\"div\", {\n      className: \"py-3 flex justify-center \"\n    }, (0,external_React_.createElement)(\"button\", {\n      type: \"button\",\n      className: \"relative flex w-full max-w-md items-center justify-center rounded-lg px-5 h-10 bg-sky-100/80 hover:bg-sky-100 text-sky-900 text-sm font-medium\",\n      onClick: e => {\n        e.preventDefault();\n        setAttributes({\n          options: [...(attributes.options || []), MY_RADIO_OPTIONS_DEMO[0]]\n        });\n      }\n    }, (0,external_React_.createElement)(PlusIcon, {\n      className: \"w-5 h-5\"\n    }), (0,external_React_.createElement)(\"span\", {\n      className: \"ml-2.5\"\n    }, (0,external_wp_i18n_namespaceObject.__)(\"Add option\", \"boostify-blocks\"))));\n  };\n  const renderOptionEditItem = (item, index) => {\n    return (0,external_React_.createElement)(\"div\", {\n      key: index + \"-\",\n      className: \"flex items-center justify-between space-x-2\"\n    }, (0,external_React_.createElement)(\"div\", {\n      className: \"flex-1 flex space-x-2\"\n    }, (0,external_React_.createElement)(\"label\", {\n      className: \"flex-1 flex \"\n    }, (0,external_React_.createElement)(external_wp_blockEditor_namespaceObject.RichText, {\n      onChange: value => {\n        setAttributes({\n          options: attributes.options.map((item, j) => {\n            if (j !== index) {\n              return item;\n            }\n            return {\n              ...item,\n              label: value || \"\"\n            };\n          })\n        });\n      },\n      value: item.label,\n      tagName: \"span\",\n      className: \"block flex-1 p-2 rounded-lg border border-slate-300 text-slate-500 text-sm\"\n    })), (0,external_React_.createElement)(\"label\", {\n      className: \"flex-1 flex\"\n    }, (0,external_React_.createElement)(external_wp_blockEditor_namespaceObject.RichText, {\n      onChange: value => {\n        setAttributes({\n          options: attributes.options.map((item, j) => {\n            if (j !== index) {\n              return item;\n            }\n            return {\n              ...item,\n              value: converValueFromString(value || \"\")\n            };\n          })\n        });\n      },\n      value: item.value,\n      tagName: \"span\",\n      className: \"block flex-1 p-2 rounded-lg border border-slate-300 text-slate-500 text-sm\"\n    }))), (0,external_React_.createElement)(\"button\", {\n      className: \"flex-shrink-0 inline-flex items-center justify-center rounded-md h-8 w-8 bg-red-50 hover:bg-red-100 text-red-600\",\n      title: (0,external_wp_i18n_namespaceObject.__)(\"Remove\", \"boostify-blocks\"),\n      onClick: () => {\n        setAttributes({\n          options: attributes.options.filter((_, j) => j !== index)\n        });\n      }\n    }, (0,external_React_.createElement)(XMarkIcon, {\n      className: \"w-5 h-5\"\n    })));\n  };\n  const renderSelectOptionsEditing = () => {\n    return (0,external_React_.createElement)(\"div\", {\n      className: \"w-full flex flex-col space-y-2 p-4 my-2.5 rounded-lg border border-slate-300\"\n    }, (0,external_React_.createElement)(\"div\", {\n      className: \"flex items-center justify-between space-x-2\"\n    }, (0,external_React_.createElement)(\"div\", {\n      className: \"flex-1 flex space-x-2 text-base font-medium\"\n    }, (0,external_React_.createElement)(\"label\", {\n      className: \"flex-1\"\n    }, (0,external_wp_i18n_namespaceObject.__)(\"Label\", \"boostify-blocks\")), (0,external_React_.createElement)(\"label\", {\n      className: \"flex-1\"\n    }, (0,external_wp_i18n_namespaceObject.__)(\"Value\", \"boostify-blocks\")), (0,external_React_.createElement)(\"button\", {\n      className: \" w-8 opacity-0\"\n    }))), (attributes.options || []).map(renderOptionEditItem), renderAddnewButton());\n  };\n  return (\n    // <CacheProvider value={myCache}>\n    (0,external_React_.createElement)(\"div\", {\n      ...wrapBlockProps,\n      className: `${wrapBlockProps?.className} wcb-select__wrap ${uniqueId}`,\n      \"data-uniqueid\": uniqueId\n    }, (0,external_React_.createElement)(components_HOCInspectorControls, {\n      tabs: INSPECTOR_CONTROLS_TABS.filter(item => item.name !== \"Styles\"),\n      renderTabPanels: renderTabBodyPanels\n    }), (0,external_React_.createElement)(FormInputLabelRichText, {\n      value: label,\n      isRequired: general_general.isRequired,\n      onChange: value => {\n        setAttributes({\n          label: value\n        });\n      }\n    }), isSelected ? renderSelectOptionsEditing() : renderSelect())\n    // </CacheProvider>\n  );\n};\n/* harmony default export */ const block_select_Edit = (Edit);\n;// ./src/block-form/FormInputLabelRichTextContent.tsx\n\n\n\nconst FormInputLabelRichTextContent = ({\n  isRequired,\n  value,\n  className = \"\",\n  uniqueName\n}) => {\n  return (0,external_React_.createElement)(external_wp_blockEditor_namespaceObject.RichText.Content, {\n    value: value,\n    className: `wcb-form__label ${className} ${isRequired ? \"required\" : \"\"}`,\n    tagName: \"span\",\n    \"data-label-for\": uniqueName\n  });\n};\n;// ./src/block-select/Save.tsx\n\n\n\n\n\n\nfunction save({\n  attributes\n}) {\n  const {\n    uniqueId,\n    general_general\n  } = attributes;\n  const UNIQUE_NAME = converUniqueId(uniqueId, \"select\");\n\n  //\n  const blockProps = external_wp_blockEditor_namespaceObject.useBlockProps.save({\n    className: \"wcb-select__wrap \" + UNIQUE_NAME\n  });\n  const renderSelect = () => {\n    return (0,external_React_.createElement)(\"select\", {\n      className: \"wcb-select__select\",\n      name: UNIQUE_NAME\n    }, (attributes.options || []).map((item, index) => (0,external_React_.createElement)(\"option\", {\n      key: index + \"-\" + item.value,\n      value: item.value\n    }, item.label)));\n  };\n  return (0,external_React_.createElement)(\"label\", {\n    ...blockProps,\n    \"data-uniqueid\": uniqueId\n  }, (0,external_React_.createElement)(FormInputLabelRichTextContent, {\n    value: attributes.label,\n    isRequired: general_general.isRequired,\n    uniqueName: UNIQUE_NAME\n  }), renderSelect());\n}\n;// ./src/block-select/block.json\nconst block_namespaceObject = /*#__PURE__*/JSON.parse('{\"apiVersion\":3,\"name\":\"boostify-blocks/select\",\"version\":\"0.1.0\",\"title\":\"Select\",\"parent\":[\"boostify-blocks/form\"],\"category\":\"boostify-blocks\",\"icon\":\"- wcb-block-editor-block-icon lni lni-select text-xl\",\"description\":\"Example static block scaffolded with Create Block tool.\",\"supports\":{\"__experimentalSelector\":\"span,label\"},\"textdomain\":\"boostify-blocks\",\"editorScript\":\"file:./index.js\",\"editorStyle\":\"file:./index.css\",\"style\":\"file:./style-index.css\"}');\n;// ./src/block-select/attributes.ts\n\n\nconst blokc1Attrs = {\n  uniqueId: {\n    type: \"string\",\n    default: \"\"\n  },\n  label: {\n    type: \"string\",\n    source: \"html\",\n    selector: \".wcb-form__label\",\n    default: \"Label\"\n  },\n  options: {\n    type: \"array\",\n    default: MY_RADIO_OPTIONS_DEMO\n  },\n  //\n  general_general: {\n    type: \"object\",\n    default: WCB_SELECT_PANEL_GENERAL_DEMO\n  }\n  // ADVANCE\n};\n/* harmony default export */ const attributes = (blokc1Attrs);\n;// ./src/utils/convertAttsToPreview.ts\nfunction convertObjectAttrToPreview(A) {\n  let B = {};\n  for (let key in A) {\n    if (A.hasOwnProperty(key)) {\n      B[key] = A[key].default;\n    }\n  }\n  return B;\n}\n;// ./src/block-select/index.js\n\n/**\n * Registers a new block provided a unique name and an object defining its behavior.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/\n */\n\n\n/**\n * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.\n * All files containing `style` keyword are bundled together. The code used\n * gets applied both to the front of your site and to the editor.\n *\n * @see https://www.npmjs.com/package/@wordpress/scripts#using-css\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n\nconst {\n  Fragment\n} = wp.element;\nconst {\n  withSelect\n} = wp.data;\n\n\n//------------------ TAILWINDCSS AND COMMON CSS -----------------\n\n(0,external_wp_blocks_namespaceObject.registerBlockType)(block_namespaceObject.name, {\n  edit: block_select_Edit,\n  save: save,\n  attributes: attributes,\n  example: convertObjectAttrToPreview(attributes),\n  icon: (0,external_React_.createElement)(\"svg\", {\n    className: \"wcb-editor-block-icons fill-none \",\n    width: 24,\n    height: 24,\n    viewBox: \"0 0 24 24\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, (0,external_React_.createElement)(\"path\", {\n    d: \"M12.37 8.87988H17.62\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  }), (0,external_React_.createElement)(\"path\", {\n    d: \"M6.38 8.87988L7.13 9.62988L9.38 7.37988\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  }), (0,external_React_.createElement)(\"path\", {\n    d: \"M12.37 15.8799H17.62\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  }), (0,external_React_.createElement)(\"path\", {\n    d: \"M6.38 15.8799L7.13 16.6299L9.38 14.3799\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  }), (0,external_React_.createElement)(\"path\", {\n    d: \"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z\",\n    stroke: \"currentColor\",\n    strokeWidth: \"1.5\",\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  }))\n});\n\n//# sourceURL=webpack://boostify-blocks/./src/block-select/index.js_+_20_modules?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"block-select/index": 0,
/******/ 			"block-select/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["block-select/style-index"], () => (__webpack_require__("./src/block-select/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;