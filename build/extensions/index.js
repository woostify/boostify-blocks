/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/extensions/copy-paste-styles/icons.js":
/*!***************************************************!*\
  !*** ./src/extensions/copy-paste-styles/icons.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SettingsIcons = {
  copy: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    height: "18px",
    viewBox: "0 0 24 24",
    width: "18px",
    fill: "#000000"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
  })),
  paste: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    height: "18px",
    viewBox: "0 0 24 24",
    width: "18px",
    fill: "#000000"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"
  }))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsIcons);

/***/ }),

/***/ "./src/extensions/copy-paste-styles/index.js":
/*!***************************************************!*\
  !*** ./src/extensions/copy-paste-styles/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons.js */ "./src/extensions/copy-paste-styles/icons.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../editor.scss */ "./src/extensions/editor.scss");












// get data from local store by key
const getWCBEditorStateLocalStorage = (key = false) => {
  if (!window.localStorage) {
    return null;
  }
  if (!key) {
    return localStorage;
  }
  const wcbLastOpenedSettingState = localStorage.getItem(key);
  if (wcbLastOpenedSettingState) {
    return JSON.parse(wcbLastOpenedSettingState);
  }
  return null;
};
const WCBCopyPasteStyles = () => {
  // Registering the shortcuts
  const {
    registerShortcut
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__.store);
  const [showPopup, setshowPopup] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const [disablePaste, setdisablePaste] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const {
    hasMultiSelection
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)('core/block-editor');
  const wcbCopyPasteStylesSetter = getWCBEditorStateLocalStorage();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    const wcbCopyPasteStyles = getWCBEditorStateLocalStorage('wcbCopyPasteStyles');
    if (!wcbCopyPasteStyles) {
      wcbCopyPasteStylesSetter.setItem('wcbCopyPasteStyles', JSON.stringify({}));
    }
    if (wcbCopyPasteStyles) {
      for (const block in wcbCopyPasteStyles) {
        const hoursSinceStylesSaved = Math.abs(Date.now() - wcbCopyPasteStyles[block].stylesSavedTimeStamp) / 36e5;
        if (hoursSinceStylesSaved >= 8) {
          delete wcbCopyPasteStyles[block];
        }
      }
      wcbCopyPasteStylesSetter.setItem('wcbCopyPasteStyles', JSON.stringify(wcbCopyPasteStyles));
    }
    registerShortcut({
      name: 'boostify-blocks/copy',
      category: 'block',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy the selected block(s).', 'boostify-blocks'),
      keyCombination: {
        modifier: 'primaryShift',
        character: 'y'
      }
    });
    registerShortcut({
      name: 'boostify-blocks/paste',
      category: 'block',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Paste the selected block(s).', 'boostify-blocks'),
      keyCombination: {
        modifier: 'primaryShift',
        character: 'u'
      }
    });
  }, []);
  const copyStylesHandler = () => {
    setshowPopup(false);

    // eslint-disable-next-line no-shadow
    const {
      getSelectedBlock,
      hasMultiSelection,
      getMultiSelectedBlocks
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)('core/block-editor');
    if (hasMultiSelection()) {
      const multiSelectedBlocksData = getMultiSelectedBlocks();
      multiSelectedBlocksData.map(block => {
        if (block) {
          storeBlockStyles(block);
        }
        return block;
      });
      return;
    }
    const selectedBlockData = getSelectedBlock();
    if (selectedBlockData) {
      storeBlockStyles(selectedBlockData);
    }
  };
  const pasteStylesHandler = () => {
    setshowPopup(false);

    // eslint-disable-next-line no-shadow
    const {
      getSelectedBlock,
      hasMultiSelection,
      getMultiSelectedBlocks
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)('core/block-editor');
    if (hasMultiSelection()) {
      const multiSelectedBlocksData = getMultiSelectedBlocks();
      multiSelectedBlocksData.map(block => {
        if (block) {
          pasteBlockStyles(block);
        }
        return block;
      });
      return;
    }
    const selectedBlockData = getSelectedBlock();
    if (selectedBlockData) {
      pasteBlockStyles(selectedBlockData);
    }
  };
  const storeBlockStyles = blockData => {
    const wcbCopyPasteStyles = getWCBEditorStateLocalStorage('wcbCopyPasteStyles');
    wcbCopyPasteStylesSetter.setItem('wcbCopyPasteStyles', JSON.stringify({}));
    const {
      attributes,
      name,
      innerBlocks
    } = blockData;
    if (wcbCopyPasteStyles) {
      wcbCopyPasteStylesSetter.setItem('wcbCopyPasteStyles', JSON.stringify({}));
    }
    let styles = {};
    const parentStyle = {};

    // Only allow your blocks
    if (name.includes('boostify-blocks/')) {
      const blockType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)('core/blocks').getBlockType(name);
      let blockAttributes = blockType?.attributes;
      const blockName = name.replace('boostify-blocks/', '');
      wcbCopyPasteStyles[`${blockName}-styles`] = {};
      wcbCopyPasteStyles[`global-style`] = {};
      if (blockAttributes && wcbCopyPasteStyles) {
        Object.keys(blockAttributes).map(attribute => {
          if (blockAttributes[attribute].default) {
            if (undefined !== attributes[attribute] && null !== attributes[attribute]) {
              styles[attribute] = attributes[attribute];
              parentStyle[attribute] = attributes[attribute];
            }
          }
          return attribute;
        });
      }
      if (innerBlocks) {
        parentStyle.innerblocks = innerBlocks;
      }
      styles.stylesSavedTimeStamp = Date.now();
      wcbCopyPasteStyles[`${blockName}-styles`] = parentStyle;
      wcbCopyPasteStyles[`global-style`] = styles;
      wcbCopyPasteStylesSetter.setItem('wcbCopyPasteStyles', JSON.stringify(wcbCopyPasteStyles));
    }
  };
  const pasteBlockStyles = blockData => {
    const {
      name,
      clientId,
      innerBlocks
    } = blockData;
    let styles;
    let pasteStyle;
    const parentAttr = {};
    const wcbCopyPasteStyles = getWCBEditorStateLocalStorage('wcbCopyPasteStyles');
    if (name.includes('boostify-blocks/')) {
      styles = wcbCopyPasteStyles[`global-style`];
      const blockType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)('core/blocks').getBlockType(name);
      let blockAttributes = blockType?.attributes;
      const blockName = name.replace('boostify-blocks/', '');
      pasteStyle = wcbCopyPasteStyles[`${blockName}-styles`];
      if (blockAttributes && pasteStyle) {
        updateBlockStyles(clientId, pasteStyle);
        if (innerBlocks) {
          const childAttr = {};
          innerBlocks.map((childBlock, index) => {
            const childName = childBlock.name.replace('boostify-blocks/', '');
            // eslint-disable-next-line no-shadow
            const blockAttributes = blockAttributes[childName];
            if (pasteStyle.innerblocks[index].name === 'boostify-blocks/' + childName) {
              Object.keys(blockAttributes).map(attribute => {
                if (blockAttributes[attribute].default) {
                  childAttr[attribute] = pasteStyle.innerblocks[index].attributes[attribute];
                }
                return childAttr;
              });
            }
            updateBlockStyles(childBlock.clientId, childAttr);
            return childBlock;
          });
        }
      } else if (blockAttributes && styles) {
        Object.keys(blockAttributes).map(attribute => {
          if (blockAttributes[attribute].default) {
            const key = attribute;
            Object.keys(styles).map(item => {
              if (item === key) {
                parentAttr[attribute] = styles[key];
              }
              return parentAttr;
            });
          }
          return parentAttr;
        });
        updateBlockStyles(clientId, parentAttr);
      }
    }
  };
  const updateBlockStyles = (clientId, styles) => {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/block-editor').updateBlockAttributes(clientId, styles);
  };
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__.useShortcut)('boostify-blocks/copy', event => {
    copyStylesHandler();
    event.preventDefault();
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__.useShortcut)('boostify-blocks/paste', event => {
    pasteStylesHandler();
    event.preventDefault();
  });
  const openPopup = () => {
    const wcbCopyPasteStyles = getWCBEditorStateLocalStorage('wcbCopyPasteStyles') || {};
    setshowPopup(!showPopup);
    if (0 === Object.keys(wcbCopyPasteStyles).length) {
      setdisablePaste(true);
      return;
    }
    setdisablePaste(false);
  };
  let stylesText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style', 'boostify-blocks');
  if (hasMultiSelection()) {
    stylesText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Styles', 'boostify-blocks');
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, {
    group: "block"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarGroup, {
    className: "wcb-copy-paste-styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
    icon: "admin-appearance",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Boostify Copy/Paste', 'boostify-blocks'),
    onClick: () => {
      openPopup();
    }
  })), showPopup && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Popover, {
    position: "bottom center",
    className: "wcb-copy-paste-styles-popover",
    focusOnMount: "container",
    onFocusOutside: () => {
      setshowPopup(false);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
    onClick: copyStylesHandler
  }, _icons_js__WEBPACK_IMPORTED_MODULE_9__["default"].copy, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy ', 'boostify-blocks') + stylesText), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
    icon: 'paste',
    onClick: pasteStylesHandler,
    disabled: disablePaste
  }, _icons_js__WEBPACK_IMPORTED_MODULE_9__["default"].paste, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Paste ', 'boostify-blocks') + stylesText)));
};
const displayWCBCopyPasteSettingConditionally = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    const {
      getSelectedBlock,
      getMultiSelectedBlocks
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)('core/block-editor');
    const selectedBlock = getSelectedBlock();
    const multiSelectedBlock = getMultiSelectedBlocks();
    let singleSelectBlockFlag = false;
    let multiSelectBlockFlag = false;
    if (selectedBlock) {
      const singleSelectedBlockName = selectedBlock.name;
      if (singleSelectedBlockName.includes('boostify-blocks/')) {
        singleSelectBlockFlag = true;
      }
    }
    if (multiSelectedBlock && 0 !== multiSelectedBlock.length) {
      multiSelectedBlock.map(value => {
        const singleSelectedBlockName = value.name;
        if (singleSelectedBlockName.includes('boostify-blocks/')) {
          multiSelectBlockFlag = true;
        }
        return value;
      });
    }
    const {
      isSelected
    } = props;
    if (isSelected) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      }), (singleSelectBlockFlag || multiSelectBlockFlag) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WCBCopyPasteStyles, null));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    });
  };
}, 'displayWCBCopyPasteSettingConditionally');
const boostify_blocks_global_variables = window.boostify_blocks_global_variables || {};
if (boostify_blocks_global_variables.enableCopyPasteStyles === 'true') {
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__.addFilter)('editor.BlockEdit', 'wcb-copy-paste', displayWCBCopyPasteSettingConditionally);
}

/***/ }),

/***/ "./src/extensions/editor.scss":
/*!************************************!*\
  !*** ./src/extensions/editor.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keyboard-shortcuts":
/*!*******************************************!*\
  !*** external ["wp","keyboardShortcuts"] ***!
  \*******************************************/
/***/ ((module) => {

module.exports = window["wp"]["keyboardShortcuts"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/extensions/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copy_paste_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy-paste-styles */ "./src/extensions/copy-paste-styles/index.js");

})();

/******/ })()
;
//# sourceMappingURL=index.js.map