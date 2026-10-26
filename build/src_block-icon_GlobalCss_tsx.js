"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-icon_GlobalCss_tsx"],{

/***/ "./src/block-icon/GlobalCss.tsx":
/*!**************************************!*\
  !*** ./src/block-icon/GlobalCss.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBoxShadowStyles */ "./src/utils/getBoxShadowStyles.ts");
/* harmony import */ var _utils_getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBackgroundColorGradientStyles */ "./src/utils/getBackgroundColorGradientStyles.ts");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");












const GlobalCss = attrs => {
  const {
    uniqueId,
    // ATTRS OF BLOCK
    general_icon,
    style_background,
    style_icon,
    style_border,
    style_boxshadow,
    style_dimension,
    general_preset,
    //
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_8__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const CONTENT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-icon__content`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    const {
      alignment
    } = general_icon;
    const {
      value_Desktop,
      value_Mobile,
      value_Tablet
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(alignment);
    //
    const {
      mobile_v: value_Mobile_new,
      tablet_v: value_Tablet_new,
      desktop_v: value_Desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__["default"])({
      mobile_v: value_Mobile,
      tablet_v: value_Tablet,
      desktop_v: value_Desktop
    });
    return {
      [`${WRAP_CLASSNAME}`]: value_Mobile_new || value_Tablet_new || value_Desktop_new ? {
        textAlign: value_Mobile_new,
        [`@media (min-width: ${media_tablet})`]: value_Tablet_new ? {
          textAlign: value_Tablet_new
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: value_Desktop_new ? {
          textAlign: value_Desktop_new
        } : undefined
      } : undefined
    };
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: CONTENT_CLASSNAME,
      background: style_background.normal,
      backgroundHover: style_background.hover
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_1__["default"])({
      className: CONTENT_CLASSNAME,
      border: style_border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: CONTENT_CLASSNAME,
      boxShadow: style_boxshadow
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: [(0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: WRAP_CLASSNAME,
      margin: style_dimension.margin
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon__content`,
      padding: style_dimension.padding
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-full`,
      value: general_icon.size,
      prefix: "width",
      prefix_2: "fontSize",
      prefix_3: "height"
    }), {
      [`${CONTENT_CLASSNAME} .wcb-icon-full`]: {
        color: style_icon.color
      },
      [`${CONTENT_CLASSNAME}:hover .wcb-icon-full`]: {
        color: style_icon.hoverColor
      },
      [`${WRAP_CLASSNAME} .wcb-icon__content`]: {
        cursor: general_icon.enableLink ? 'pointer' : ''
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_4__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
      advance_responsiveCondition,
      advance_zIndex,
      className: CONTENT_CLASSNAME,
      defaultDisplay: "inline-flex"
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(GlobalCss));

/***/ }),

/***/ "./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts":
/*!**************************************************************************!*\
  !*** ./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getShadowStyleValueFromTwPreset: () => (/* binding */ getShadowStyleValueFromTwPreset)
/* harmony export */ });
const getShadowStyleValueFromTwPreset = (presetClass, color = "") => {
  switch (presetClass) {
    case "shadow-sm":
      return `0 1px 2px 0 ${color || "rgb(0 0 0 / 0.05)"}`;
    case "shadow":
      return `0 1px 3px 0 ${color || "rgb(0 0 0 / 0.1)"}, 0 1px 2px -1px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-md":
      return `0 4px 6px -1px ${color || "rgb(0 0 0 / 0.1)"}, 0 2px 4px -2px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-lg":
      return `0 10px 15px -3px ${color || "rgb(0 0 0 / 0.1)"}, 0 4px 6px -4px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-xl":
      return `0 20px 25px -5px ${color || "rgb(0 0 0 / 0.1)"}, 0 8px 10px -6px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-2xl":
      return `0 25px 50px -12px ${color || "rgb(0 0 0 / 0.25)"}`;
    case "shadow-inner":
      return `inset 0 2px 4px 0 ${color || "rgb(0 0 0 / 0.05)"}`;
    default:
      return "";
  }
};

/***/ }),

/***/ "./src/utils/getBackgroundColorGradientStyles.ts":
/*!*******************************************************!*\
  !*** ./src/utils/getBackgroundColorGradientStyles.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getBackgroundColorGradientStyles = ({
  className,
  background,
  backgroundHover
}) => {
  const {
    bgType,
    color,
    gradient
  } = background;
  const {
    bgType: bgType_h,
    color: color_h,
    gradient: gradient_h
  } = backgroundHover || {};
  if (bgType !== "color" && bgType !== "gradient") {
    return {};
  }
  let preBgName = "";
  let bgValue = "";
  if (bgType === "color") {
    preBgName = "backgroundColor";
    bgValue = color;
  }
  // Backgroud gradient
  if (bgType === "gradient") {
    preBgName = "backgroundImage";
    bgValue = gradient;
  }
  //
  //
  let preBgName_h = "";
  let bgValue_h = "";
  if (bgType_h === "color") {
    preBgName_h = "backgroundColor";
    bgValue_h = color_h || "";
  }
  // Backgroud gradient
  if (bgType_h === "gradient") {
    preBgName_h = "backgroundImage";
    bgValue_h = gradient_h || "";
  }
  //
  //
  return {
    [`${className}`]: {
      [`${preBgName}`]: `${bgValue}`,
      ":hover": {
        [`${preBgName_h}`]: `${bgValue_h || null}`
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBackgroundColorGradientStyles);

/***/ }),

/***/ "./src/utils/getBorderRadiusStyles.ts":
/*!********************************************!*\
  !*** ./src/utils/getBorderRadiusStyles.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



const getBorderRadiusStyles = ({
  className,
  radius,
  isWithIframe = false
}) => {
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  let {
    value_Desktop: radiusDesktop,
    value_Tablet: radiusTablet,
    value_Mobile: radiusMobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(radius);
  const converttted = radiusValue => {
    let newradiusValue = radiusValue;
    if (typeof radiusValue === "string") {
      newradiusValue = {
        bottomLeft: radiusValue,
        bottomRight: radiusValue,
        topLeft: radiusValue,
        topRight: radiusValue
      };
    } else {
      newradiusValue = {
        bottomLeft: radiusValue?.bottomLeft,
        bottomRight: radiusValue?.bottomRight,
        topLeft: radiusValue?.topLeft,
        topRight: radiusValue?.topRight
      };
    }
    return newradiusValue;
  };
  radiusDesktop = converttted(radiusDesktop);
  radiusTablet = converttted(radiusTablet);
  radiusMobile = converttted(radiusMobile);
  const {
    mobile_v: mobile_v_topLeft,
    tablet_v: tablet_v_topLeft,
    desktop_v: desktop_v_topLeft
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.topLeft,
    tablet_v: radiusTablet?.topLeft,
    desktop_v: radiusDesktop?.topLeft
  });
  const {
    mobile_v: mobile_v_topRight,
    tablet_v: tablet_v_topRight,
    desktop_v: desktop_v_topRight
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.topRight,
    tablet_v: radiusTablet?.topRight,
    desktop_v: radiusDesktop?.topRight
  });
  const {
    mobile_v: mobile_v_bottomRight,
    tablet_v: tablet_v_bottomRight,
    desktop_v: desktop_v_bottomRight
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.bottomRight,
    tablet_v: radiusTablet?.bottomRight,
    desktop_v: radiusDesktop?.bottomRight
  });
  const {
    mobile_v: mobile_v_bottomLeft,
    tablet_v: tablet_v_bottomLeft,
    desktop_v: desktop_v_bottomLeft
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.bottomLeft,
    tablet_v: radiusTablet?.bottomLeft,
    desktop_v: radiusDesktop?.bottomLeft
  });

  // Check if className is for iframe
  const applyImportant = isWithIframe ? " !important" : "";
  const formatRadius = val => {
    if (val === undefined || val === null || val === "") {
      return undefined;
    }
    const str = typeof val === "number" ? `${val}px` : `${val}`;
    const withUnit = /^-?\d+(\.\d+)?$/.test(str) ? `${str}px` : str;
    return `${withUnit}${applyImportant}`;
  };
  const mobileStyles = {};
  const tl_m = formatRadius(mobile_v_topLeft);
  const tr_m = formatRadius(mobile_v_topRight);
  const br_m = formatRadius(mobile_v_bottomRight);
  const bl_m = formatRadius(mobile_v_bottomLeft);
  if (tl_m) mobileStyles.borderTopLeftRadius = tl_m;
  if (tr_m) mobileStyles.borderTopRightRadius = tr_m;
  if (br_m) mobileStyles.borderBottomRightRadius = br_m;
  if (bl_m) mobileStyles.borderBottomLeftRadius = bl_m;
  const tl_t = formatRadius(tablet_v_topLeft);
  const tr_t = formatRadius(tablet_v_topRight);
  const br_t = formatRadius(tablet_v_bottomRight);
  const bl_t = formatRadius(tablet_v_bottomLeft);
  if (tl_t || tr_t || br_t || bl_t) {
    mobileStyles[`@media (min-width: ${media_tablet})`] = {
      ...(tl_t ? {
        borderTopLeftRadius: tl_t
      } : {}),
      ...(tr_t ? {
        borderTopRightRadius: tr_t
      } : {}),
      ...(br_t ? {
        borderBottomRightRadius: br_t
      } : {}),
      ...(bl_t ? {
        borderBottomLeftRadius: bl_t
      } : {})
    };
  }
  const tl_d = formatRadius(desktop_v_topLeft);
  const tr_d = formatRadius(desktop_v_topRight);
  const br_d = formatRadius(desktop_v_bottomRight);
  const bl_d = formatRadius(desktop_v_bottomLeft);
  if (tl_d || tr_d || br_d || bl_d) {
    mobileStyles[`@media (min-width: ${media_desktop})`] = {
      ...(tl_d ? {
        borderTopLeftRadius: tl_d
      } : {}),
      ...(tr_d ? {
        borderTopRightRadius: tr_d
      } : {}),
      ...(br_d ? {
        borderBottomRightRadius: br_d
      } : {}),
      ...(bl_d ? {
        borderBottomLeftRadius: bl_d
      } : {})
    };
  }
  if (Object.keys(mobileStyles).length === 0) {
    return {};
  }
  return {
    [`${className}`]: mobileStyles
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBorderRadiusStyles);

/***/ }),

/***/ "./src/utils/getBorderStyles.ts":
/*!**************************************!*\
  !*** ./src/utils/getBorderStyles.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBorderRadiusStyles */ "./src/utils/getBorderRadiusStyles.ts");

const formatSideBorder = side => {
  if (!side) return undefined;
  const {
    width,
    style,
    color
  } = side;
  if (style === "none") {
    return "none";
  }

  // Width must be specified and non-zero
  if (width === undefined || width === null || width === "" || width === "0" || width === "0px" || width === "0rem" || width === "0em" || parseFloat(String(width)) <= 0) {
    return undefined;
  }
  const borderStyle = style || "solid";
  const borderColor = color ? ` ${color}` : "";
  return `${width} ${borderStyle}${borderColor}`.trim();
};
const getBorderStyles = ({
  border,
  className,
  isWithRadius = false,
  isWithIframe = false
}) => {
  if (!border) return {};
  const {
    hoverColor,
    mainSettings,
    radius
  } = border;

  // MAIN BORDER
  let CSSObject = {
    [`${className}`]: {}
  };
  if (mainSettings) {
    const as4Side = mainSettings;
    if ("top" in as4Side || "right" in as4Side || "bottom" in as4Side || "left" in as4Side) {
      const {
        bottom,
        left,
        right,
        top
      } = as4Side;
      const borderTop = formatSideBorder(top);
      const borderRight = formatSideBorder(right);
      const borderBottom = formatSideBorder(bottom);
      const borderLeft = formatSideBorder(left);
      const sideStyles = {};
      if (borderTop) sideStyles.borderTop = borderTop;
      if (borderRight) sideStyles.borderRight = borderRight;
      if (borderBottom) sideStyles.borderBottom = borderBottom;
      if (borderLeft) sideStyles.borderLeft = borderLeft;
      CSSObject = {
        [`${className}`]: {
          ...sideStyles,
          ...(hoverColor ? {
            "&:hover": {
              borderColor: `${hoverColor}`
            }
          } : {})
        }
      };
    } else {
      const singleBorder = formatSideBorder(mainSettings);
      CSSObject = {
        [`${className}`]: {
          ...(singleBorder ? {
            border: singleBorder
          } : {}),
          ...(hoverColor ? {
            "&:hover": {
              borderColor: `${hoverColor || ""}`
            }
          } : {})
        }
      };
    }
  }

  // RAIDUS
  let radiusCSSObject = {
    [`${className}`]: {}
  };
  if (isWithRadius && radius) {
    radiusCSSObject = (0,_getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_0__["default"])({
      radius,
      className,
      isWithIframe
    });
  }

  //
  let a = {};
  let b = {};
  if (typeof CSSObject[className] === "object") {
    a = CSSObject[className] || {};
  }
  if (typeof radiusCSSObject[className] === "object") {
    b = radiusCSSObject[className] || {};
  }
  const merged = {
    ...a,
    ...b
  };

  // Filter out undefined, null or empty object properties
  const cleanStyles = {};
  for (const [k, v] of Object.entries(merged)) {
    if (v !== undefined && v !== null && v !== "" && (typeof v !== "object" || Object.keys(v).length > 0)) {
      cleanStyles[k] = v;
    }
  }
  if (Object.keys(cleanStyles).length === 0) {
    return {};
  }
  return {
    [`${className}`]: cleanStyles
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBorderStyles);

/***/ }),

/***/ "./src/utils/getBoxShadowStyles.ts":
/*!*****************************************!*\
  !*** ./src/utils/getBoxShadowStyles.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/controls/MyBoxShadowControl/getBoxShadowStyles */ "./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts");

const getBoxShadowStyles = ({
  boxShadow,
  className
}) => {
  const {
    Hover,
    Normal
  } = boxShadow;
  const {
    presetClass,
    blur,
    color,
    horizontal,
    position,
    spread,
    vertical
  } = Normal || {};
  const {
    presetClass: presetClass_h,
    blur: blur_h,
    color: color_h,
    horizontal: horizontal_h,
    position: position_h,
    spread: spread_h,
    vertical: vertical_h
  } = Hover || {};
  //
  let VALUE = "";
  let VALUE_H = "";
  //
  if (presetClass) {
    VALUE = (0,_components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_0__.getShadowStyleValueFromTwPreset)(presetClass, color);
  } else {
    VALUE = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color} ${position === "inset" ? position : ""}`;
  }
  //
  if (presetClass_h) {
    VALUE_H = (0,_components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_0__.getShadowStyleValueFromTwPreset)(presetClass_h, color_h);
  } else {
    VALUE_H = `${horizontal_h}px ${vertical_h}px ${blur_h}px ${spread_h}px ${color_h} ${position_h === "inset" ? position_h : ""}`;
  }
  return {
    [`${className}`]: {
      boxShadow: VALUE,
      "&:hover": {
        boxShadow: VALUE_H
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBoxShadowStyles);

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
  margin
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
    if (pTop) rules.push(`padding-top: ${pTop} !important;`);
    if (pRight) rules.push(`padding-right: ${pRight} !important;`);
    if (pBottom) rules.push(`padding-bottom: ${pBottom} !important;`);
    if (pLeft) rules.push(`padding-left: ${pLeft} !important;`);
    if (mTop) rules.push(`margin-top: ${mTop} !important;`);
    if (mRight) rules.push(`margin-right: ${mRight};`);
    if (mBottom) rules.push(`margin-bottom: ${mBottom} !important;`);
    if (mLeft) rules.push(`margin-left: ${mLeft};`);
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

/***/ })

}]);
//# sourceMappingURL=src_block-icon_GlobalCss_tsx.js.map