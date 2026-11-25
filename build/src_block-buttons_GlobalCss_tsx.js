"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-buttons_GlobalCss_tsx"],{

/***/ "./src/block-buttons/GlobalCss.tsx":
/*!*****************************************!*\
  !*** ./src/block-buttons/GlobalCss.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../________ */ "./src/________.ts");









const GlobalCss = attrs => {
  const {
    uniqueId,
    // ATTRS OF BLOCK
    general_general,
    style_dimension,
    style_text,
    //
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect
  } = attrs;
  const {
    stackOrientation,
    alignment,
    size
  } = general_general;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_6__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-buttons__inner`;
  // const INNER_BUTTON = `#${uniqueId} .wcb-button__main`;
  const INNER_BUTTON_TEXT = `#${uniqueId} .wcb-button__text`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    return {
      [`.${uniqueId}`]: {
        [`@media (min-width: ${media_tablet})`]: {},
        [`@media (min-width: ${media_desktop})`]: {}
      }
    };
  };
  const {
    value_Desktop: alignment_Desktop,
    value_Tablet: alignment_tablet,
    value_Mobile: alignment_mobile
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(alignment);
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [{
      [INNER_CLASSNAME]: {
        flexDirection: stackOrientation !== "none" ? "column" : "row",
        justifyContent: stackOrientation !== "none" ? undefined : alignment_mobile,
        alignItems: stackOrientation !== "none" ? alignment_mobile : "center",
        ">*": {
          flex: alignment_mobile === "stretch" ? 1 : undefined,
          display: alignment_mobile === "stretch" ? "flex" : "block"
        },
        [`@media (min-width: ${media_tablet})`]: {
          flexDirection: stackOrientation !== "none" && stackOrientation !== "Mobile" ? "column" : "row",
          justifyContent: stackOrientation !== "none" && stackOrientation !== "Mobile" ? undefined : alignment_tablet,
          alignItems: stackOrientation !== "none" && stackOrientation !== "Mobile" ? alignment_tablet : "center",
          ">*": {
            flex: alignment_tablet === "stretch" ? 1 : undefined,
            display: alignment_tablet === "stretch" ? "flex" : "block"
          }
        },
        [`@media (min-width: ${media_desktop})`]: {
          flexDirection: stackOrientation === "Desktop" ? "column" : "row",
          justifyContent: stackOrientation === "Desktop" ? undefined : alignment_Desktop,
          alignItems: stackOrientation === "Desktop" ? alignment_Desktop : "center",
          ">*": {
            flex: alignment_Desktop === "stretch" ? 1 : undefined,
            display: alignment_Desktop === "stretch" ? "flex" : "block"
          }
        }
      }
    }, (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: INNER_CLASSNAME,
      value: general_general.gap,
      prefix: "gap"
    })]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      // className: INNER_BUTTON,
      className: WRAP_CLASSNAME,
      padding: style_dimension.padding,
      margin: style_dimension.margin
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: INNER_BUTTON_TEXT,
      typography: style_text.typography
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME,
      defaultDisplay: "block"
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(GlobalCss));

/***/ }),

/***/ "./src/utils/color.js":
/*!****************************!*\
  !*** ./src/utils/color.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wcbCreateColor: () => (/* binding */ wcbCreateColor),
/* harmony export */   wcbGetRgb: () => (/* binding */ wcbGetRgb)
/* harmony export */ });
/* harmony import */ var color_rgba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-rgba */ "./node_modules/color-rgba/index.mjs");


/**
 * Creates a new random color.
 */
const wcbCreateColor = () => {
  return `#${((1 << 24) * Math.random() | 0).toString(16)}`;
};
/**
 * Returns an rgb string of the hex color.
 *
 * @param {string} hex Color
 */
const wcbGetRgb = hex => {
  const rgbColor = (0,color_rgba__WEBPACK_IMPORTED_MODULE_0__["default"])(hex.match(/^#/) ? hex : `#${hex}`);
  rgbColor.splice(3, 1);
  return rgbColor.join(', ');
};

/***/ }),

/***/ "./src/utils/font.ts":
/*!***************************!*\
  !*** ./src/utils/font.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLinkTagWithGoogleFont: () => (/* binding */ createLinkTagWithGoogleFont),
/* harmony export */   getGoogleFontURL: () => (/* binding */ getGoogleFontURL),
/* harmony export */   isGoogleFontEnqueued: () => (/* binding */ isGoogleFontEnqueued),
/* harmony export */   isWebFont: () => (/* binding */ isWebFont),
/* harmony export */   loadGoogleFont: () => (/* binding */ loadGoogleFont)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/utils/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../________ */ "./src/________.ts");


const NON_WEB_FONT_RE = /^(arial|helvetica|helvetica neue|times new roman|times|georgia|verdana|trebuchet ms|courier new|courier|palatino|palatino linotype|garamond|tahoma|impact|comic sans ms|lucida sans unicode|lucida grande|lucida console|century gothic|book antiqua|segoe ui|sans[-+]serif|serif|monospace|serif-alt|cursive|fantasy|system-ui|ui-sans-serif|ui-serif|ui-monospace|system stack|-apple-system|blinkmacsystemfont|default|inherit|initial|unset|revert|auto)$/i;
const normalizeFontName = fontName => fontName.split(",")[0].replace(/^["'\s]+|["'\s]+$/g, "").replace(/[:@].*$/, "").trim();
const normalizeWeights = weights => {
  if (!weights?.length) {
    return [];
  }
  const out = [];
  weights.forEach(variant => {
    const clean = String(variant || "").trim();
    const normalized = clean === "regular" ? "400" : clean === "italic" ? "400italic" : clean;
    if (normalized && !out.includes(normalized)) {
      out.push(normalized);
    }
  });
  return out;
};
const getGoogleFontURL = (fontName, weights) => {
  const cleanName = normalizeFontName(fontName);
  const family = encodeURIComponent(cleanName).replace(/%20/g, "+");
  const validWeights = normalizeWeights(weights);
  const weightSuffix = validWeights.length > 0 ? `:${validWeights.join(",")}` : "";
  return `https://fonts.googleapis.com/css?family=${family}${weightSuffix}&display=swap`;
};
const isWebFont = fontName => {
  if (!fontName) {
    return false;
  }
  const cleanName = normalizeFontName(fontName);
  if (!cleanName || /^var\(/i.test(fontName.trim())) {
    return false;
  }
  return !NON_WEB_FONT_RE.test(cleanName);
};

/**
 * Load the stylesheet of a Google Font.
 * Skipped when loadGoogleFontsLocally is enabled — PHP serves fonts locally in that case.
 *
 * @param {string} fontName The name of the font
 * @param {string[]} weights Optional Google Font weights supported by this family
 */
const loadGoogleFont = (fontName, weights) => {
  if (!isWebFont(fontName)) {
    return;
  }
  const cleanName = normalizeFontName(fontName);
  setTimeout(() => {
    const _loadGoogleFont = head => {
      if (!head) {
        return;
      }
      const existing = isGoogleFontEnqueued(cleanName, head);
      if (existing) {
        if (weights?.length && existing.getAttribute("data-font-name") === cleanName && !(existing.getAttribute("href") || "").includes(":")) {
          existing.setAttribute("href", getGoogleFontURL(cleanName, weights));
        }
        return;
      }
      const link = createLinkTagWithGoogleFont(cleanName, weights);
      head.appendChild(link);
    };
    const headElement = (0,___WEBPACK_IMPORTED_MODULE_0__.getDocumentHead)();
    _loadGoogleFont(headElement);
    const mainHead = document.querySelector("head");
    if (headElement !== mainHead) {
      _loadGoogleFont(mainHead);
    }
  }, 50);
};
const createLinkTagWithGoogleFont = (fontName = "", weights) => {
  const cleanName = normalizeFontName(fontName);
  const link = document.createElement("link");
  link.classList.add("wcb-google-fonts");
  link.setAttribute("data-font-name", cleanName);
  link.setAttribute("href", getGoogleFontURL(cleanName, weights));
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  return link;
};
const isGoogleFontEnqueued = (fontName, head = document.querySelector("head")) => {
  if (!head || !fontName) {
    return null;
  }
  const cleanName = normalizeFontName(fontName);
  if (!cleanName) {
    return null;
  }
  const escapedName = cleanName.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const tagged = head.querySelector(`link[data-font-name="${escapedName}"]`);
  if (tagged) {
    return tagged;
  }
  const slug = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const plusFamily = cleanName.replace(/ /g, "+");
  const links = head.querySelectorAll('link[rel="stylesheet"]');
  for (let i = 0; i < links.length; i++) {
    const linkEl = links[i];
    const id = linkEl.getAttribute("id") || "";
    if (id === `boostify-google-font-${slug}-css` || id === `boostify-local-font-${slug}-css`) {
      return linkEl;
    }
    const href = linkEl.getAttribute("href") || "";
    if (href.includes(`fonts.googleapis.com`) && href.includes(`family=${plusFamily}`)) {
      return linkEl;
    }
  }
  return null;
};

/***/ }),

/***/ "./src/utils/getPaddingMarginStyles.ts":
/*!*********************************************!*\
  !*** ./src/utils/getPaddingMarginStyles.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");




const getPaddingMarginStyles = ({
  className,
  padding,
  margin,
  importantHorizontalMargin = false
}) => {
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  const {
    value_Desktop: margin_Desktop,
    value_Tablet: margin_Tablet,
    value_Mobile: margin_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(margin);
  //

  const {
    value_Desktop: padding_Desktop,
    value_Tablet: padding_Tablet,
    value_Mobile: padding_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(padding);
  //

  //
  const {
    mobile_v: padding_Mobile_top,
    tablet_v: padding_Tablet_top,
    desktop_v: padding_Desktop_top
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.top,
    tablet_v: padding_Tablet?.top,
    desktop_v: padding_Desktop?.top
  });
  const {
    mobile_v: padding_Mobile_left,
    tablet_v: padding_Tablet_left,
    desktop_v: padding_Desktop_left
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.left,
    tablet_v: padding_Tablet?.left,
    desktop_v: padding_Desktop?.left
  });
  const {
    mobile_v: padding_Mobile_right,
    tablet_v: padding_Tablet_right,
    desktop_v: padding_Desktop_right
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.right,
    tablet_v: padding_Tablet?.right,
    desktop_v: padding_Desktop?.right
  });
  const {
    mobile_v: padding_Mobile_bottom,
    tablet_v: padding_Tablet_bottom,
    desktop_v: padding_Desktop_bottom
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.bottom,
    tablet_v: padding_Tablet?.bottom,
    desktop_v: padding_Desktop?.bottom
  });
  //
  const {
    mobile_v: margin_Mobile_top,
    tablet_v: margin_Tablet_top,
    desktop_v: margin_Desktop_top
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.top,
    tablet_v: margin_Tablet?.top,
    desktop_v: margin_Desktop?.top
  });
  const {
    mobile_v: margin_Mobile_left,
    tablet_v: margin_Tablet_left,
    desktop_v: margin_Desktop_left
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.left,
    tablet_v: margin_Tablet?.left,
    desktop_v: margin_Desktop?.left
  });
  const {
    mobile_v: margin_Mobile_right,
    tablet_v: margin_Tablet_right,
    desktop_v: margin_Desktop_right
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.right,
    tablet_v: margin_Tablet?.right,
    desktop_v: margin_Desktop?.right
  });
  const {
    mobile_v: margin_Mobile_bottom,
    tablet_v: margin_Tablet_bottom,
    desktop_v: margin_Desktop_bottom
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.bottom,
    tablet_v: margin_Tablet?.bottom,
    desktop_v: margin_Desktop?.bottom
  });
  const buildSideRules = (pTop, pRight, pBottom, pLeft, mTop, mRight, mBottom, mLeft) => {
    const rules = [];
    const hasVal = val => val !== undefined && val !== null && val !== "";
    const horizontalMarginSuffix = importantHorizontalMargin ? " !important" : "";
    if (hasVal(pTop)) rules.push(`padding-top: ${pTop} !important;`);
    if (hasVal(pRight)) rules.push(`padding-right: ${pRight} !important;`);
    if (hasVal(pBottom)) rules.push(`padding-bottom: ${pBottom} !important;`);
    if (hasVal(pLeft)) rules.push(`padding-left: ${pLeft} !important;`);
    if (hasVal(mTop)) rules.push(`margin-top: ${mTop} !important;`);
    if (hasVal(mRight)) rules.push(`margin-right: ${mRight}${horizontalMarginSuffix};`);
    if (hasVal(mBottom)) rules.push(`margin-bottom: ${mBottom} !important;`);
    if (hasVal(mLeft)) rules.push(`margin-left: ${mLeft}${horizontalMarginSuffix};`);
    return rules;
  };
  const mobileRules = buildSideRules(padding_Mobile_top, padding_Mobile_right, padding_Mobile_bottom, padding_Mobile_left, margin_Mobile_top, margin_Mobile_right, margin_Mobile_bottom, margin_Mobile_left);
  const tabletRules = buildSideRules(padding_Tablet_top, padding_Tablet_right, padding_Tablet_bottom, padding_Tablet_left, margin_Tablet_top, margin_Tablet_right, margin_Tablet_bottom, margin_Tablet_left);
  const desktopRules = buildSideRules(padding_Desktop_top, padding_Desktop_right, padding_Desktop_bottom, padding_Desktop_left, margin_Desktop_top, margin_Desktop_right, margin_Desktop_bottom, margin_Desktop_left);
  if (mobileRules.length === 0 && tabletRules.length === 0 && desktopRules.length === 0) {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)``;
  }
  let cssString = `body ${className} {\n`;
  if (mobileRules.length > 0) {
    cssString += `\t${mobileRules.join("\n\t")}\n`;
  }
  if (tabletRules.length > 0) {
    cssString += `\t@media (min-width: ${media_tablet}) {\n\t\t${tabletRules.join("\n\t\t")}\n\t}\n`;
  }
  if (desktopRules.length > 0) {
    cssString += `\t@media (min-width: ${media_desktop}) {\n\t\t${desktopRules.join("\n\t\t")}\n\t}\n`;
  }
  cssString += `}`;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)`${cssString}`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPaddingMarginStyles);

/***/ }),

/***/ "./src/utils/getStyleObjectFromResponsiveAttr.ts":
/*!*******************************************************!*\
  !*** ./src/utils/getStyleObjectFromResponsiveAttr.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



function getStyleObjectFromResponsiveAttr({
  className,
  prefix,
  prefix_2,
  prefix_3,
  prefix_4,
  value,
  hasUnit = true,
  unit
}) {
  if (!value) {
    return {};
  }
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  let {
    value_Desktop,
    value_Tablet,
    value_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (!hasUnit && !!unit) {
    if (typeof value_Desktop === "number") {
      value_Desktop = value_Desktop + unit;
      value_Tablet = value_Tablet + unit;
      value_Mobile = value_Mobile + unit;
    }
    if (typeof value_Desktop === "string") {
      value_Desktop = value_Desktop ? value_Desktop + unit : null;
      value_Tablet = value_Tablet ? value_Tablet + unit : null;
      value_Mobile = value_Mobile ? value_Mobile + unit : null;
    }
  }

  //
  let prefix2 = prefix_2 || "";
  let prefix3 = prefix_3 || "";
  let prefix4 = prefix_4 || "";

  //
  const {
    mobile_v: value_Mobile_new,
    tablet_v: value_Tablet_new,
    desktop_v: value_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: value_Mobile,
    tablet_v: value_Tablet,
    desktop_v: value_Desktop
  });
  //

  return {
    [className]: {
      [prefix]: value_Mobile_new !== null && value_Mobile_new !== void 0 ? value_Mobile_new : null,
      [prefix2]: prefix_2 ? value_Mobile_new !== null && value_Mobile_new !== void 0 ? value_Mobile_new : null : null,
      [prefix3]: prefix_3 ? value_Mobile_new !== null && value_Mobile_new !== void 0 ? value_Mobile_new : null : null,
      [prefix4]: prefix_4 ? value_Mobile_new !== null && value_Mobile_new !== void 0 ? value_Mobile_new : null : null,
      [`@media (min-width: ${media_tablet})`]: value_Tablet_new ? {
        [prefix]: value_Tablet_new,
        [prefix2]: prefix_2 ? value_Tablet_new : null,
        [prefix3]: prefix_3 ? value_Tablet_new : null,
        [prefix4]: prefix_4 ? value_Tablet_new : null
      } : undefined,
      [`@media (min-width: ${media_desktop})`]: value_Desktop_new ? {
        [prefix]: value_Desktop_new,
        [prefix2]: prefix_2 ? value_Desktop_new : null,
        [prefix3]: prefix_3 ? value_Desktop_new : null,
        [prefix4]: prefix_4 ? value_Desktop_new : null
      } : undefined
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStyleObjectFromResponsiveAttr);

/***/ }),

/***/ "./src/utils/getTypographyStyles.ts":
/*!******************************************!*\
  !*** ./src/utils/getTypographyStyles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font */ "./src/utils/font.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



const pickDefined = (...values) => values.find(v => v !== undefined && v !== null && v !== "");
const pickDeviceTypographyValue = (deviceType, mobile, tablet, desktop) => {
  if (deviceType === "Mobile") {
    return pickDefined(mobile, tablet, desktop);
  }
  if (deviceType === "Tablet") {
    return pickDefined(tablet, desktop, mobile);
  }
  return pickDefined(desktop, tablet, mobile);
};
const getTypographyStyles = ({
  typography,
  className,
  deviceType
}) => {
  if (!typography || !className) {
    return {};
  }
  const {
    appearance,
    fontFamily,
    fontSizes,
    letterSpacing,
    lineHeight,
    textDecoration,
    textTransform
  } = typography;
  const effectiveFontFamily = fontFamily && fontFamily !== "Default" ? fontFamily : undefined;
  if (effectiveFontFamily) {
    (0,_font__WEBPACK_IMPORTED_MODULE_1__.loadGoogleFont)(effectiveFontFamily);
  }
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  //
  const fontSize_Desktop = fontSizes?.Desktop;
  const fontSize_Tablet = fontSizes?.Tablet || fontSize_Desktop;
  const fontSize_Mobile = fontSizes?.Mobile || fontSize_Tablet;
  //
  const lineHeight_Desktop = lineHeight?.Desktop;
  const lineHeight_Tablet = lineHeight?.Tablet || lineHeight_Desktop;
  const lineHeight_Mobile = lineHeight?.Mobile || lineHeight_Tablet;
  //
  const letterSpacing_Desktop = letterSpacing?.Desktop;
  const letterSpacing_Tablet = letterSpacing?.Tablet || letterSpacing_Desktop;
  const letterSpacing_Mobile = letterSpacing?.Mobile || letterSpacing_Tablet;
  //

  //
  const {
    mobile_v: fontSize_Mobile_new,
    tablet_v: fontSize_Tablet_new,
    desktop_v: fontSize_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: fontSize_Mobile,
    tablet_v: fontSize_Tablet,
    desktop_v: fontSize_Desktop
  });
  const {
    mobile_v: lineHeight_Mobile_new,
    tablet_v: lineHeight_Tablet_new,
    desktop_v: lineHeight_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: lineHeight_Mobile,
    tablet_v: lineHeight_Tablet,
    desktop_v: lineHeight_Desktop
  });
  const {
    mobile_v: letterSpacing_Mobile_new,
    tablet_v: letterSpacing_Tablet_new,
    desktop_v: letterSpacing_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: letterSpacing_Mobile,
    tablet_v: letterSpacing_Tablet,
    desktop_v: letterSpacing_Desktop
  });
  //

  const isDefaultAppearance = !appearance?.key || appearance?.key === "default" || appearance?.name?.toLowerCase() === "default";
  const fontWeight = isDefaultAppearance ? undefined : appearance?.style?.fontWeight;
  const fontStyle = isDefaultAppearance ? undefined : appearance?.style?.fontStyle;
  const baseStyles = {
    fontFamily: effectiveFontFamily,
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    textDecoration,
    textTransform
  };
  if (deviceType) {
    return {
      [`${className}`]: {
        ...baseStyles,
        fontSize: pickDeviceTypographyValue(deviceType, fontSize_Mobile, fontSize_Tablet, fontSize_Desktop),
        lineHeight: pickDeviceTypographyValue(deviceType, lineHeight_Mobile, lineHeight_Tablet, lineHeight_Desktop),
        letterSpacing: pickDeviceTypographyValue(deviceType, letterSpacing_Mobile, letterSpacing_Tablet, letterSpacing_Desktop)
      }
    };
  }
  return {
    [`${className}`]: {
      ...baseStyles,
      //
      fontSize: fontSize_Mobile_new !== null && fontSize_Mobile_new !== void 0 ? fontSize_Mobile_new : undefined,
      lineHeight: lineHeight_Mobile_new !== null && lineHeight_Mobile_new !== void 0 ? lineHeight_Mobile_new : undefined,
      letterSpacing: letterSpacing_Mobile_new !== null && letterSpacing_Mobile_new !== void 0 ? letterSpacing_Mobile_new : undefined,
      [`@media (min-width: ${media_tablet})`]: fontSize_Tablet_new || lineHeight_Tablet_new || letterSpacing_Tablet_new ? {
        fontSize: fontSize_Tablet_new !== null && fontSize_Tablet_new !== void 0 ? fontSize_Tablet_new : undefined,
        lineHeight: lineHeight_Tablet_new !== null && lineHeight_Tablet_new !== void 0 ? lineHeight_Tablet_new : undefined,
        letterSpacing: letterSpacing_Tablet_new !== null && letterSpacing_Tablet_new !== void 0 ? letterSpacing_Tablet_new : undefined
      } : undefined,
      [`@media (min-width: ${media_desktop})`]: fontSize_Desktop_new || lineHeight_Desktop_new || letterSpacing_Desktop_new ? {
        fontSize: fontSize_Desktop_new !== null && fontSize_Desktop_new !== void 0 ? fontSize_Desktop_new : undefined,
        lineHeight: lineHeight_Desktop_new !== null && lineHeight_Desktop_new !== void 0 ? lineHeight_Desktop_new : undefined,
        letterSpacing: letterSpacing_Desktop_new !== null && letterSpacing_Desktop_new !== void 0 ? letterSpacing_Desktop_new : undefined
      } : undefined
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTypographyStyles);

/***/ }),

/***/ "./src/utils/getValueFromAttrsResponsives.ts":
/*!***************************************************!*\
  !*** ./src/utils/getValueFromAttrsResponsives.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getValueFromAttrsResponsives = function (properties, currentDevice) {
  var _properties$Tablet, _properties$Mobile;
  const v_Desktop = properties?.Desktop;
  const v_Tablet = (_properties$Tablet = properties?.Tablet) !== null && _properties$Tablet !== void 0 ? _properties$Tablet : v_Desktop;
  const v_Mobile = (_properties$Mobile = properties?.Mobile) !== null && _properties$Mobile !== void 0 ? _properties$Mobile : v_Tablet;
  let currentDeviceValue = undefined;
  if (currentDevice) {
    currentDeviceValue = currentDevice === "Desktop" ? v_Desktop : currentDevice === "Tablet" ? v_Tablet : v_Mobile;
  }
  return {
    value_Desktop: v_Desktop !== null && v_Desktop !== void 0 ? v_Desktop : null,
    value_Tablet: v_Tablet !== null && v_Tablet !== void 0 ? v_Tablet : null,
    value_Mobile: v_Mobile !== null && v_Mobile !== void 0 ? v_Mobile : null,
    currentDeviceValue
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValueFromAttrsResponsives);

/***/ }),

/***/ "./src/utils/global-style.js":
/*!***********************************!*\
  !*** ./src/utils/global-style.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToResponsiveStyle: () => (/* binding */ convertToResponsiveStyle),
/* harmony export */   createStyleTagWithGlobalStyleContent: () => (/* binding */ createStyleTagWithGlobalStyleContent),
/* harmony export */   isStyleTagAdded: () => (/* binding */ isStyleTagAdded),
/* harmony export */   removeOldStyleTag: () => (/* binding */ removeOldStyleTag),
/* harmony export */   renderGlobalStyle: () => (/* binding */ renderGlobalStyle)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/utils/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api */ "@wordpress/api");
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api__WEBPACK_IMPORTED_MODULE_2__);



const convertToResponsiveStyle = () => {
  let responsiveJson = {
    'desktop': {
      'style': []
    },
    'tablet': {
      'breakpoint': '991px',
      'style': []
    },
    'mobile': {
      'breakpoint': '767px',
      'style': []
    }
  };
  let content = '';
  _wordpress_api__WEBPACK_IMPORTED_MODULE_2__.loadPromise.then(() => {
    const settings = new _wordpress_api__WEBPACK_IMPORTED_MODULE_2__.models.Settings();
    settings.fetch().then(response => {
      const typography = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.head)(response.wcb_global_typography);
      const colors = response.wcb_global_colors;
      for (const selector in typography) {
        //styleContent += `${cssPrefix} ${selector}{${JSToCSS(typo[selector])}}`;
        const attrs = typography[selector];
        let selectorStyle = {
          [selector]: {}
        };
        responsiveJson['desktop']['style'].push(selectorStyle);
        responsiveJson['mobile']['style'].push(selectorStyle);
        responsiveJson['tablet']['style'].push(selectorStyle);
        for (const attrName in attrs) {
          if (attrName.includes('Tablet')) {} else if (attrName.includes('Mobile')) {} else {}
        }
      }
      return responsiveJson;
    });
  });
  return content;
};
const renderGlobalStyle = () => {
  setTimeout(() => {
    const _renderGlobalStyle = head => {
      if (head) {
        removeOldStyleTag(head);
        const style = createStyleTagWithGlobalStyleContent();
        head.appendChild(style);
      }
    };
    const headElement = (0,___WEBPACK_IMPORTED_MODULE_0__.getDocumentHead)();
    _renderGlobalStyle(headElement);
    if (headElement !== document.querySelector('head')) {
      _renderGlobalStyle(document.querySelector('head'));
    }
  }, 50);
};
const createStyleTagWithGlobalStyleContent = () => {
  let cssPrefix = '.woostify-block';
  if ((0,___WEBPACK_IMPORTED_MODULE_0__.isEditingPost)()) {
    cssPrefix = '.editor-styles-wrapper .woostify-block';
  }
  const style = document.createElement('style');
  style.classList.add('wcb-global-style');
  style.textContent = convertToResponsiveStyle();
  return style;
};
const removeOldStyleTag = (head = document.querySelector('head')) => {
  if (!isStyleTagAdded(head)) {
    return;
  }
  const oldTag = head.querySelector('.wcb-global-style');
  oldTag.remove();
};
const isStyleTagAdded = (head = document.querySelector('head')) => {
  return head.querySelector('.wcb-global-style');
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSToCSS: () => (/* binding */ JSToCSS),
/* harmony export */   capitalizeFirstLetter: () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   convertToResponsiveStyle: () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.convertToResponsiveStyle),
/* harmony export */   createLinkTagWithGoogleFont: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.createLinkTagWithGoogleFont),
/* harmony export */   createStyleTagWithGlobalStyleContent: () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.createStyleTagWithGlobalStyleContent),
/* harmony export */   getDocumentHead: () => (/* binding */ getDocumentHead),
/* harmony export */   getGoogleFontURL: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.getGoogleFontURL),
/* harmony export */   isEditingContent: () => (/* binding */ isEditingContent),
/* harmony export */   isEditingPost: () => (/* binding */ isEditingPost),
/* harmony export */   isGoogleFontEnqueued: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.isGoogleFontEnqueued),
/* harmony export */   isStyleTagAdded: () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.isStyleTagAdded),
/* harmony export */   isWebFont: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.isWebFont),
/* harmony export */   loadGoogleFont: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.loadGoogleFont),
/* harmony export */   removeOldStyleTag: () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.removeOldStyleTag),
/* harmony export */   renderGlobalStyle: () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.renderGlobalStyle),
/* harmony export */   wcbCreateColor: () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.wcbCreateColor),
/* harmony export */   wcbGetRgb: () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.wcbGetRgb)
/* harmony export */ });
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./font */ "./src/utils/font.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./src/utils/color.js");
/* harmony import */ var _global_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-style */ "./src/utils/global-style.js");




/**
 * Capitalize the first letter in string
 * @param {*} string
 * @returns
 */
const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const getDocumentHead = () => {
  if (isEditingContent()) {
    const iframe = document.querySelector('iframe[name="editor-canvas"]');
    const iframeHead = iframe?.contentDocument?.head || iframe?.contentWindow?.document?.head || null;
    if (iframeHead) {
      return iframeHead;
    }
  }
  return document.querySelector('head');
};
const isEditingContent = () => !!document.querySelector('iframe[name="editor-canvas"]');
const isEditingPost = () => {
  if (document.querySelector('.edit-post-visual-editor')) {
    return true;
  }
  return false;
};
const JSToCSS = JS => {
  let cssString = '';
  for (let objectKey in JS) {
    if (objectKey.includes('Unit')) {
      return;
    }
    let suffix = '';
    if (objectKey.includes('fontFamily')) {
      suffix = ', Sans-serif';
    }
    if (objectKey.includes('letterSpacing')) {
      suffix = 'px';
    }
    cssString += objectKey.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`) + ': ' + JS[objectKey] + suffix + ';\n';
  }
  return cssString;
};

/***/ })

}]);
//# sourceMappingURL=src_block-buttons_GlobalCss_tsx.js.map