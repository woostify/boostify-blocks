"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-map_GlobalCss_tsx"],{

/***/ "./src/block-map/GlobalCss.tsx":
/*!*************************************!*\
  !*** ./src/block-map/GlobalCss.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../________ */ "./src/________.ts");







const GlobalCss = attrs => {
  const {
    uniqueId,
    // ATTRS OF BLOCK
    general_general,
    style_border,
    //
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_4__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-map__inner`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    return {
      [`${WRAP_CLASSNAME}`]: {
        [`@media (min-width: ${media_tablet})`]: {},
        [`@media (min-width: ${media_desktop})`]: {}
      }
    };
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.Global, {
    styles: [(0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: WRAP_CLASSNAME,
      border: style_border,
      isWithRadius: true,
      isWithIframe: true
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: INNER_CLASSNAME,
      value: general_general.height,
      prefix: "height"
    })]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.Global, {
    styles: [{
      [WRAP_CLASSNAME]: {
        flex: 1
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.Global, {
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
  const formatRadius = val => val && val !== "0" && val !== "0px" && val !== 0 ? `${val}${applyImportant}` : undefined;
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

const getBorderStyles = ({
  border,
  className,
  isWithRadius = false,
  isWithIframe = false
}) => {
  const {
    hoverColor,
    mainSettings,
    radius
  } = border;
  //

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
      CSSObject = {
        [`${className}`]: {
          ...(top ? {
            borderTop: `${top.width} ${top.style || "none"} ${top.color || ""}`
          } : {}),
          ...(left ? {
            borderLeft: `${left.width} ${left.style || "none"} ${left.color || ""}`
          } : {}),
          ...(right ? {
            borderRight: `${right.width} ${right.style || "none"} ${right.color || ""}`
          } : {}),
          ...(bottom ? {
            borderBottom: `${bottom.width} ${bottom.style || "none"} ${bottom.color || ""}`
          } : {}),
          "&:hover": {
            borderColor: `${hoverColor}`
          }
        }
      };
    } else {
      const {
        color,
        style,
        width
      } = mainSettings;
      CSSObject = {
        [`${className}`]: {
          border: `${width} ${style || "none"} ${color || ""}`,
          "&:hover": {
            borderColor: `${hoverColor || ""}`
          }
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
//# sourceMappingURL=src_block-map_GlobalCss_tsx.js.map