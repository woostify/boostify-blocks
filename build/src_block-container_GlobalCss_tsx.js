"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-container_GlobalCss_tsx"],{

/***/ "./src/block-container/GlobalCss.tsx":
/*!*******************************************!*\
  !*** ./src/block-container/GlobalCss.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/controls/MyBoxShadowControl/getBoxShadowStyles */ "./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getFlexPropertiesStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getFlexPropertiesStyles */ "./src/utils/getFlexPropertiesStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getStyleBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getStyleBackground */ "./src/utils/getStyleBackground.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getAdvanveStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");












const GlobalCss = attrs => {
  const {
    uniqueId,
    general_container,
    general_flexProperties,
    styles_background,
    styles_border,
    styles_boxShadow,
    styles_color,
    styles_dimensions,
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect
  } = attrs;
  const {
    margin,
    padding
  } = styles_dimensions;
  const {
    value_Desktop: margin_Desktop,
    value_Tablet: margin_Tablet,
    value_Mobile: margin_Mobile
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(margin);
  const hasValue = val => val !== undefined && val !== null && val !== "";
  const hasSpacing = val => hasValue(val) && val !== "";
  const hasMarginTopDesktop = hasSpacing(margin_Desktop?.top);
  const hasMarginBottomDesktop = hasSpacing(margin_Desktop?.bottom);
  const {
    media_desktop,
    media_tablet,
    defaultContentWidth,
    containerPadding,
    containerElementsGap
  } = ___WEBPACK_IMPORTED_MODULE_7__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  const WP_BLOCK_CLASSNAME = `.wp-block`;
  const WRAP_CLASSNAME = `.wcb-container__wrap.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-container__inner`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    var _ref, _ref2, _ref3, _ref4, _ref5, _ref6;
    const {
      containerWidthType,
      customWidth,
      overflow,
      minHeight
    } = general_container;
    let {
      value_Desktop: cWidthDesktop,
      value_Tablet: cWidthTablet,
      value_Mobile: cWidthMobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(customWidth);
    if (containerWidthType !== "Custom") {
      cWidthDesktop = null;
      cWidthTablet = null;
      cWidthMobile = null;
    }
    const {
      value_Desktop: minHeightDesktop,
      value_Tablet: minHeightTablet,
      value_Mobile: minHeightMobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(minHeight);

    //
    const {
      mobile_v: cWidthMobile_new,
      tablet_v: cWidthTablet_new,
      desktop_v: cWidthDesktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__["default"])({
      mobile_v: cWidthMobile,
      tablet_v: cWidthTablet,
      desktop_v: cWidthDesktop
    });
    const {
      mobile_v: minHeightMobile_new,
      tablet_v: minHeightTablet_new,
      desktop_v: minHeightDesktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__["default"])({
      mobile_v: minHeightMobile,
      tablet_v: minHeightTablet,
      desktop_v: minHeightDesktop
    });
    //

    const getResponsiveWidthValue = value => {
      if (value === undefined || value === null || value === "") {
        return undefined;
      }
      return value;
    };
    const getResponsiveMaxWidthValue = value => {
      const responsiveValue = getResponsiveWidthValue(value);
      if (responsiveValue === undefined) {
        return undefined;
      }
      return `${responsiveValue} !important`;
    };
    const cWidthDesktop_new_child = (_ref = (_ref2 = cWidthDesktop_new !== null && cWidthDesktop_new !== void 0 ? cWidthDesktop_new : cWidthTablet_new) !== null && _ref2 !== void 0 ? _ref2 : cWidthMobile_new) !== null && _ref !== void 0 ? _ref : undefined;
    const cWidthTablet_new_child = (_ref3 = cWidthTablet_new !== null && cWidthTablet_new !== void 0 ? cWidthTablet_new : cWidthMobile_new) !== null && _ref3 !== void 0 ? _ref3 : undefined;
    const cWidthMobile_new_child = getResponsiveWidthValue(cWidthMobile_new);
    return [{
      [`${WP_BLOCK_CLASSNAME}:has(> .wcb-container__wrap.${uniqueId}[data-uniqueid=${uniqueId}])`]: {
        marginTop: hasMarginTopDesktop ? "0px" + " !important" : "",
        marginBottom: hasMarginBottomDesktop ? "0px" + " !important" : ""
      }
    }, {
      [`${WP_BLOCK_CLASSNAME}[data-align="full"]:has(> .wcb-container__wrap.${uniqueId}[data-uniqueid=${uniqueId}])`]: {
        [WRAP_CLASSNAME]: {
          "marginLeft": `auto`,
          "marginRight": `auto`
        }
      }
    }, {
      [`${WP_BLOCK_CLASSNAME}[data-align="wide"]:has(> .wcb-container__wrap.${uniqueId}[data-uniqueid=${uniqueId}])`]: {
        "marginLeft": `-8px`,
        "marginRight": `-8px`,
        [WRAP_CLASSNAME]: {
          "marginLeft": `auto`,
          "marginRight": `auto`
        }
      }
    }, {
      [WRAP_CLASSNAME]: {
        padding: containerPadding || "",
        color: styles_color,
        overflow: overflow,
        maxWidth: getResponsiveMaxWidthValue(cWidthMobile_new),
        width: cWidthMobile_new_child,
        minHeight: minHeightMobile_new !== null && minHeightMobile_new !== void 0 ? minHeightMobile_new : undefined,
        "&.alignfull": {
          marginLeft: `calc(-50vw + 50%)`,
          marginRight: `calc(-50vw + 50%)`
        },
        "&.is_wcb_container_child": {
          width: cWidthMobile_new_child,
          maxWidth: getResponsiveMaxWidthValue(cWidthMobile_new)
        },
        [`@media (min-width: ${media_tablet})`]: {
          maxWidth: getResponsiveMaxWidthValue(cWidthTablet_new),
          // width: cWidthTablet_new,
          minHeight: (_ref4 = minHeightTablet_new !== null && minHeightTablet_new !== void 0 ? minHeightTablet_new : minHeightMobile_new) !== null && _ref4 !== void 0 ? _ref4 : undefined,
          "&.is_wcb_container_child": {
            // If tablet is optimized away (null) but equals mobile, use mobile value							
            width: cWidthTablet_new_child
          }
        },
        [`@media (min-width: ${media_desktop})`]: {
          maxWidth: getResponsiveMaxWidthValue(cWidthDesktop_new),
          // width: cWidthDesktop_new,
          minHeight: (_ref5 = (_ref6 = minHeightDesktop_new !== null && minHeightDesktop_new !== void 0 ? minHeightDesktop_new : minHeightTablet_new) !== null && _ref6 !== void 0 ? _ref6 : minHeightMobile_new) !== null && _ref5 !== void 0 ? _ref5 : undefined,
          "&.is_wcb_container_child": {
            // If desktop is optimized away (null) but equals mobile, use mobile value
            // This prevents old tablet values from interfering when user changes desktop
            width: cWidthDesktop_new_child
          }
        }
      }
    }];
  };
  const getDivWrapStyles__Border = () => {
    return (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      border: styles_border,
      className: WRAP_CLASSNAME,
      isWithRadius: true
    });
  };
  const getDivWrapStyles__BoxShadow = () => {
    const {
      Hover,
      Normal
    } = styles_boxShadow;
    const {
      presetClass,
      blur,
      color,
      horizontal,
      position,
      spread,
      vertical
    } = Normal;
    const {
      presetClass: presetClass_h,
      blur: blur_h,
      color: color_h,
      horizontal: horizontal_h,
      position: position_h,
      spread: spread_h,
      vertical: vertical_h
    } = Hover;
    //
    let VALUE = "";
    let VALUE_H = "";
    //
    if (presetClass) {
      VALUE = (0,_components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_1__.getShadowStyleValueFromTwPreset)(presetClass, color);
    } else {
      VALUE = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color} ${position === "inset" ? position : ""}`;
    }
    //
    if (presetClass_h) {
      VALUE_H = (0,_components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_1__.getShadowStyleValueFromTwPreset)(presetClass_h, color_h);
    } else {
      VALUE_H = `${horizontal_h}px ${vertical_h}px ${blur_h}px ${spread_h}px ${color_h} ${position_h === "inset" ? position_h : ""}`;
    }
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.css)`
			${WRAP_CLASSNAME} {
				box-shadow: ${VALUE};
				&:hover {
					box-shadow: ${VALUE_H};
				}
			}
		`;
  };
  const getDivWrapStyles__PaddingMargin = () => {
    const {
      margin,
      padding
    } = styles_dimensions;
    return (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      margin,
      padding,
      className: WRAP_CLASSNAME
    });
  };
  // ------------------- END WRAP DIV

  const getInner__contentCustomWidth = () => {
    let {
      contentWidthType,
      contentBoxWidth
    } = general_container;

    // when container widtd = custom-width
    // if (containerWidthType !== "Full Width" || contentWidthType !== "Boxed") {
    // if (containerWidthType === "Custom" || contentWidthType !== "Boxed") {
    if (contentWidthType === "Full Width") {
      return {
        [INNER_CLASSNAME]: {
          maxWidth: "100%"
        }
      };
    }
    if (!contentBoxWidth.Desktop && !contentBoxWidth.Tablet && !contentBoxWidth.Mobile) {
      contentBoxWidth = {
        Desktop: defaultContentWidth || ""
      };
    }
    const {
      value_Desktop: contentBoxWidthDesktop,
      value_Tablet: contentBoxWidthTablet,
      value_Mobile: contentBoxWidthMobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(contentBoxWidth);
    const {
      mobile_v: contentBoxWidthMobile_new,
      tablet_v: contentBoxWidthTablet_new,
      desktop_v: contentBoxWidthDesktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_9__["default"])({
      mobile_v: contentBoxWidthMobile,
      tablet_v: contentBoxWidthTablet,
      desktop_v: contentBoxWidthDesktop
    });
    if (!contentBoxWidthMobile_new && !contentBoxWidthTablet_new && !contentBoxWidthDesktop_new) {
      return {};
    }
    return {
      [INNER_CLASSNAME]: {
        rowGap: containerElementsGap || "",
        columnGap: containerElementsGap || "",
        maxWidth: contentBoxWidthMobile_new !== null && contentBoxWidthMobile_new !== void 0 ? contentBoxWidthMobile_new : undefined,
        [`@media (min-width: ${media_tablet})`]: contentBoxWidthTablet_new ? {
          maxWidth: contentBoxWidthTablet_new
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: contentBoxWidthDesktop_new ? {
          maxWidth: contentBoxWidthDesktop_new
        } : undefined
      }
    };
  };
  const getInner__flexProperties = () => {
    const {
      colunmGap,
      rowGap
    } = styles_dimensions;
    return (0,_utils_getFlexPropertiesStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      flexProperties: {
        ...general_flexProperties,
        colunmGap,
        rowGap
      },
      className: INNER_CLASSNAME
    });
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getStyleBackground__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME,
      styles_background
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles__Border()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles__BoxShadow()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles__PaddingMargin()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getInner__contentCustomWidth()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getInner__flexProperties()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_8__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME,
      defaultDisplay: "flex"
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(GlobalCss));

/***/ }),

/***/ "./src/block-container/getAdvanveStyles.ts":
/*!*************************************************!*\
  !*** ./src/block-container/getAdvanveStyles.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAdvanveDivWrapStyles: () => (/* binding */ getAdvanveDivWrapStyles)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



// Base overlay for hidden preview
const hiddenPreviewOverlay = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)`
	position: relative;

	&:before {
		content: "";
		display: block;
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		background: -o-repeating-linear-gradient(
			325deg,
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.05) 1px,
			transparent 2px,
			transparent 9px
		);
		background: repeating-linear-gradient(
			125deg,
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.05) 1px,
			transparent 2px,
			transparent 9px
		);
		border: 1px solid rgba(0, 0, 0, 0.02);
		background-color: rgba(255, 255, 255, 0.6);
		z-index: 9997;
	}
`;
const getAdvanveDivWrapStyles = ({
  advance_motionEffect,
  advance_zIndex,
  advance_responsiveCondition,
  className,
  defaultDisplay
}) => {
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  //
  //
  // Trigger animation only when in viewport
  try {
    if (advance_motionEffect?.entranceAnimation) {
      const thisELs = document.querySelectorAll(className);
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;

            // remove old animation classes
            const regex = /\banimate__\S+/g;
            const classRemoved = element?.className.replace(regex, "");
            element.setAttribute("class", classRemoved);

            // add new animation classes
            setTimeout(() => {
              element?.classList.add("animate__animated", `animate__${advance_motionEffect?.entranceAnimation}`, `animate__${advance_motionEffect?.animationDuration}`, `animate__delay-${advance_motionEffect?.animationDelay}ms`, `animate__repeat-${advance_motionEffect?.repeat}`);
            }, 50);

            // optional: stop observing after first animation
            observer.unobserve(element);
          }
        });
      }, {
        threshold: 0.2 // trigger when 20% visible
      });
      thisELs.forEach(el => observer.observe(el));
    }
  } catch (error) {
    console.log("error, advance_motionEffect", error);
  }
  const {
    mobile_v: zIndexMobile,
    tablet_v: zIndexTablet,
    desktop_v: zIndexDesktop
  } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_1__["default"])({
    mobile_v: advance_zIndex?.Mobile || advance_zIndex?.Tablet || advance_zIndex?.Desktop,
    tablet_v: advance_zIndex?.Tablet || advance_zIndex?.Desktop,
    desktop_v: advance_zIndex?.Desktop
  });
  //

  // const {
  // 	mobile_v: isHiddenOnMobile,
  // 	tablet_v: isHiddenOnTablet,
  // 	desktop_v: isHiddenOnDesktop,
  // } = checkResponsiveValueForOptimizeCSS({
  // 	// @ts-ignore
  // 	mobile_v: advance_responsiveCondition.isHiddenOnMobile,
  // 	// @ts-ignore
  // 	tablet_v: advance_responsiveCondition.isHiddenOnTablet,
  // 	// @ts-ignore
  // 	desktop_v: advance_responsiveCondition.isHiddenOnDesktop,
  // });

  // Helper
  const getHiddenCss = isHidden => {
    if (isHidden === "") return "";
    return isHidden ? hiddenPreviewOverlay : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)`display: ${defaultDisplay};`;
  };
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)`
		${className} {
			visibility: visible;
			@media (min-width: ${media_desktop}) {
				z-index: ${zIndexDesktop};
				${getHiddenCss(advance_responsiveCondition?.isHiddenOnDesktop)}
			}

			@media (min-width: ${media_tablet}) and (max-width: ${media_desktop}) {
				z-index: ${zIndexTablet};
				${getHiddenCss(advance_responsiveCondition?.isHiddenOnTablet)}
			}

			@media (max-width: ${media_tablet}) {
				z-index: ${zIndexMobile};
				${getHiddenCss(advance_responsiveCondition?.isHiddenOnMobile)}
			}
		}
	`;
};

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

/***/ "./src/utils/checkResponsiveValueForOptimizeCSS.ts":
/*!*********************************************************!*\
  !*** ./src/utils/checkResponsiveValueForOptimizeCSS.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkResponsiveValueForOptimizeCSS = ({
  mobile_v = null,
  tablet_v = null,
  desktop_v = null
}) => {
  let new_tablet_v = tablet_v;
  let new_desktop_v = desktop_v;

  // If all values are the same, only keep mobile
  if (mobile_v === tablet_v && tablet_v === desktop_v) {
    return {
      mobile_v,
      tablet_v: null,
      desktop_v: null
    };
  }

  // If tablet equals mobile, don't output tablet CSS (let it cascade naturally)
  if (tablet_v === mobile_v) {
    new_tablet_v = null;
  }

  // If desktop equals tablet OR mobile, don't output desktop CSS  
  if (desktop_v === tablet_v) {
    new_desktop_v = null;
  }
  return {
    mobile_v: mobile_v !== null && mobile_v !== void 0 ? mobile_v : null,
    tablet_v: new_tablet_v !== null && new_tablet_v !== void 0 ? new_tablet_v : null,
    desktop_v: new_desktop_v !== null && new_desktop_v !== void 0 ? new_desktop_v : null
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkResponsiveValueForOptimizeCSS);

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
  const applyImportant = isWithIframe ? "!important" : "";
  return {
    [`${className}`]: {
      borderTopLeftRadius: `${mobile_v_topLeft} ${applyImportant}`,
      borderTopRightRadius: `${mobile_v_topRight} ${applyImportant}`,
      borderBottomRightRadius: `${mobile_v_bottomRight} ${applyImportant}`,
      borderBottomLeftRadius: `${mobile_v_bottomLeft} ${applyImportant}`,
      [`@media (min-width: ${media_tablet})`]: tablet_v_topLeft || tablet_v_topRight || tablet_v_bottomRight || tablet_v_bottomLeft ? {
        borderTopLeftRadius: `${tablet_v_topLeft} ${applyImportant}`,
        borderTopRightRadius: `${tablet_v_topRight} ${applyImportant}`,
        borderBottomRightRadius: `${tablet_v_bottomRight} ${applyImportant}`,
        borderBottomLeftRadius: `${tablet_v_bottomLeft} ${applyImportant}`
      } : null,
      [`@media (min-width: ${media_desktop})`]: desktop_v_topLeft || desktop_v_topRight || desktop_v_bottomRight || desktop_v_bottomLeft ? {
        borderTopLeftRadius: `${desktop_v_topLeft} ${applyImportant}`,
        borderTopRightRadius: `${desktop_v_topRight} ${applyImportant}`,
        borderBottomRightRadius: `${desktop_v_bottomRight} ${applyImportant}`,
        borderBottomLeftRadius: `${desktop_v_bottomLeft} ${applyImportant}`
      } : null
    }
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
  return {
    [`${className}`]: {
      ...a,
      ...b
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBorderStyles);

/***/ }),

/***/ "./src/utils/getFlexPropertiesStyles.ts":
/*!**********************************************!*\
  !*** ./src/utils/getFlexPropertiesStyles.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");


const getFlexPropertiesStyles = ({
  flexProperties,
  className
}) => {
  var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref0, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;

  //
  const {
    alignItems,
    flexDirection,
    flexWrap,
    justifyContent,
    colunmGap,
    rowGap
  } = flexProperties;
  //

  const {
    value_Desktop: flexDirection_Desktop,
    value_Tablet: flexDirection_Tablet,
    value_Mobile: flexDirection_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(flexDirection);
  //
  const {
    value_Desktop: alignItems_Desktop,
    value_Tablet: alignItems_Tablet,
    value_Mobile: alignItems_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(alignItems);
  //
  const {
    value_Desktop: flexWrap_Desktop,
    value_Tablet: flexWrap_Tablet,
    value_Mobile: flexWrap_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(flexWrap);
  //
  const {
    value_Desktop: justifyContent_Desktop,
    value_Tablet: justifyContent_Tablet,
    value_Mobile: justifyContent_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(justifyContent);

  //
  const {
    value_Desktop: colunmGap_Desktop,
    value_Tablet: colunmGap_Tablet,
    value_Mobile: colunmGap_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(colunmGap);
  //
  const {
    value_Desktop: rowGap_Desktop,
    value_Tablet: rowGap_Tablet,
    value_Mobile: rowGap_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(rowGap);
  //

  return {
    [`${className}`]: {
      display: "flex !important",
      flexDirection: flexDirection_Mobile !== null && flexDirection_Mobile !== void 0 ? flexDirection_Mobile : "row",
      alignItems: alignItems_Mobile !== null && alignItems_Mobile !== void 0 ? alignItems_Mobile : "stretch",
      flexWrap: flexWrap_Mobile !== null && flexWrap_Mobile !== void 0 ? flexWrap_Mobile : "nowrap",
      justifyContent: justifyContent_Mobile !== null && justifyContent_Mobile !== void 0 ? justifyContent_Mobile : "flex-start",
      columnGap: colunmGap_Mobile !== null && colunmGap_Mobile !== void 0 ? colunmGap_Mobile : "0px",
      rowGap: rowGap_Mobile !== null && rowGap_Mobile !== void 0 ? rowGap_Mobile : "0px",
      [`@media (min-width: ${media_tablet})`]: {
        flexDirection: (_ref = flexDirection_Tablet !== null && flexDirection_Tablet !== void 0 ? flexDirection_Tablet : flexDirection_Mobile) !== null && _ref !== void 0 ? _ref : "row",
        alignItems: (_ref2 = alignItems_Tablet !== null && alignItems_Tablet !== void 0 ? alignItems_Tablet : alignItems_Mobile) !== null && _ref2 !== void 0 ? _ref2 : "stretch",
        flexWrap: (_ref3 = flexWrap_Tablet !== null && flexWrap_Tablet !== void 0 ? flexWrap_Tablet : flexWrap_Mobile) !== null && _ref3 !== void 0 ? _ref3 : "nowrap",
        justifyContent: (_ref4 = justifyContent_Tablet !== null && justifyContent_Tablet !== void 0 ? justifyContent_Tablet : justifyContent_Mobile) !== null && _ref4 !== void 0 ? _ref4 : "flex-start",
        columnGap: (_ref5 = colunmGap_Tablet !== null && colunmGap_Tablet !== void 0 ? colunmGap_Tablet : colunmGap_Mobile) !== null && _ref5 !== void 0 ? _ref5 : "0px",
        rowGap: (_ref6 = rowGap_Tablet !== null && rowGap_Tablet !== void 0 ? rowGap_Tablet : rowGap_Mobile) !== null && _ref6 !== void 0 ? _ref6 : "0px"
      },
      [`@media (min-width: ${media_desktop})`]: {
        flexDirection: (_ref7 = (_ref8 = flexDirection_Desktop !== null && flexDirection_Desktop !== void 0 ? flexDirection_Desktop : flexDirection_Tablet) !== null && _ref8 !== void 0 ? _ref8 : flexDirection_Mobile) !== null && _ref7 !== void 0 ? _ref7 : "row",
        alignItems: (_ref9 = (_ref0 = alignItems_Desktop !== null && alignItems_Desktop !== void 0 ? alignItems_Desktop : alignItems_Tablet) !== null && _ref0 !== void 0 ? _ref0 : alignItems_Mobile) !== null && _ref9 !== void 0 ? _ref9 : "stretch",
        flexWrap: (_ref1 = (_ref10 = flexWrap_Desktop !== null && flexWrap_Desktop !== void 0 ? flexWrap_Desktop : flexWrap_Tablet) !== null && _ref10 !== void 0 ? _ref10 : flexWrap_Mobile) !== null && _ref1 !== void 0 ? _ref1 : "nowrap",
        justifyContent: (_ref11 = (_ref12 = justifyContent_Desktop !== null && justifyContent_Desktop !== void 0 ? justifyContent_Desktop : justifyContent_Tablet) !== null && _ref12 !== void 0 ? _ref12 : justifyContent_Mobile) !== null && _ref11 !== void 0 ? _ref11 : "flex-start",
        columnGap: (_ref13 = (_ref14 = colunmGap_Desktop !== null && colunmGap_Desktop !== void 0 ? colunmGap_Desktop : colunmGap_Tablet) !== null && _ref14 !== void 0 ? _ref14 : colunmGap_Mobile) !== null && _ref13 !== void 0 ? _ref13 : "0px",
        rowGap: (_ref15 = (_ref16 = rowGap_Desktop !== null && rowGap_Desktop !== void 0 ? rowGap_Desktop : rowGap_Tablet) !== null && _ref16 !== void 0 ? _ref16 : rowGap_Mobile) !== null && _ref15 !== void 0 ? _ref15 : "0px"
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFlexPropertiesStyles);

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
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)`
		body ${className} {
			padding-top: ${padding_Mobile_top} !important;
			padding-right: ${padding_Mobile_right} !important;
			padding-bottom: ${padding_Mobile_bottom} !important;
			padding-left: ${padding_Mobile_left} !important;
			margin-top: ${margin_Mobile_top} !important;
			margin-right: ${margin_Mobile_right};
			margin-bottom: ${margin_Mobile_bottom} !important;
			margin-left: ${margin_Mobile_left};
			@media (min-width: ${media_tablet}) {
				padding-top: ${padding_Tablet_top} !important;
				padding-right: ${padding_Tablet_right} !important;
				padding-bottom: ${padding_Tablet_bottom} !important;
				padding-left: ${padding_Tablet_left} !important;
				margin-top: ${margin_Tablet_top} !important;
				margin-right: ${margin_Tablet_right};
				margin-bottom: ${margin_Tablet_bottom} !important;
				margin-left: ${margin_Tablet_left};
			}
			@media (min-width: ${media_desktop}) {
				padding-top: ${padding_Desktop_top} !important;
				padding-right: ${padding_Desktop_right} !important;
				padding-bottom: ${padding_Desktop_bottom} !important;
				padding-left: ${padding_Desktop_left} !important;
				margin-top: ${margin_Desktop_top} !important;
				margin-right: ${margin_Desktop_right};
				margin-bottom: ${margin_Desktop_bottom} !important;
				margin-left: ${margin_Desktop_left};
			}
		}
	`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPaddingMarginStyles);

/***/ }),

/***/ "./src/utils/getStyleBackground.tsx":
/*!******************************************!*\
  !*** ./src/utils/getStyleBackground.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getStyleBackground)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBackgroundColorGradientStyles */ "./src/utils/getBackgroundColorGradientStyles.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");




function getStyleBackground({
  styles_background,
  className
}) {
  const WRAP_CLASSNAME = className;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  const getDivWrapStyles__BgColor_Gradient = () => {
    const {} = styles_background;
    return (0,_getBackgroundColorGradientStyles__WEBPACK_IMPORTED_MODULE_1__["default"])({
      background: styles_background,
      className: WRAP_CLASSNAME
    });
  };
  const getDivWrapStyles__BackgroundImage = () => {
    const {
      bgImageAttachment,
      bgImageRepeat,
      bgImageSize,
      bgType,
      focalPoint,
      imageData
    } = styles_background;
    if (bgType !== "image") {
      return {};
    }
    //
    const SRC__DESKTOP = imageData.Desktop?.mediaUrl;
    const SRC__TABLET = imageData.Tablet?.mediaUrl || SRC__DESKTOP;
    const SRC = imageData.Mobile?.mediaUrl || SRC__TABLET;

    //

    const {
      value_Desktop: BG_REPEAT__DESKTOP,
      value_Tablet: BG_REPEAT__TABLET,
      value_Mobile: BG_REPEAT
    } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_2__["default"])(bgImageRepeat);
    //

    const {
      value_Desktop: BG_ATTACHMENT__DESKTOP,
      value_Tablet: BG_ATTACHMENT__TABLET,
      value_Mobile: BG_ATTACHMENT
    } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_2__["default"])(bgImageAttachment);
    //

    const {
      value_Desktop: BG_SIZE__DESKTOP,
      value_Tablet: BG_SIZE__TABLET,
      value_Mobile: BG_SIZE
    } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_2__["default"])(bgImageSize);
    //

    const {
      value_Desktop: BG_FOCAL__DESKTOP,
      value_Tablet: BG_FOCAL__TABLET,
      value_Mobile: BG_FOCAL
    } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_2__["default"])(focalPoint);
    //
    const BG_POSITION = BG_FOCAL ? `${BG_FOCAL.x * 100}% ${BG_FOCAL.y * 100}%` : "";
    const BG_POSITION__TABLET = BG_FOCAL__TABLET ? `${BG_FOCAL__TABLET.x * 100}% ${BG_FOCAL__TABLET.y * 100}%` : "";
    const BG_POSITION__DESKTOP = BG_FOCAL__DESKTOP ? `${BG_FOCAL__DESKTOP.x * 100}% ${BG_FOCAL__DESKTOP.y * 100}%` : "";
    //

    //
    const {
      mobile_v: SRC_new,
      tablet_v: SRC__TABLET_new,
      desktop_v: SRC__DESKTOP_new
    } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_3__["default"])({
      mobile_v: SRC,
      tablet_v: SRC__TABLET,
      desktop_v: SRC__DESKTOP
    });
    const {
      mobile_v: BG_REPEAT_new,
      tablet_v: BG_REPEAT__TABLET_new,
      desktop_v: BG_REPEAT__DESKTOP_new
    } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_3__["default"])({
      mobile_v: BG_REPEAT,
      tablet_v: BG_REPEAT__TABLET,
      desktop_v: BG_REPEAT__DESKTOP
    });
    const {
      mobile_v: BG_ATTACHMENT_new,
      tablet_v: BG_ATTACHMENT__TABLET_new,
      desktop_v: BG_ATTACHMENT__DESKTOP_new
    } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_3__["default"])({
      mobile_v: BG_ATTACHMENT,
      tablet_v: BG_ATTACHMENT__TABLET,
      desktop_v: BG_ATTACHMENT__DESKTOP
    });
    const {
      mobile_v: BG_SIZE_new,
      tablet_v: BG_SIZE__TABLET_new,
      desktop_v: BG_SIZE__DESKTOP_new
    } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_3__["default"])({
      mobile_v: BG_SIZE,
      tablet_v: BG_SIZE__TABLET,
      desktop_v: BG_SIZE__DESKTOP
    });
    const {
      mobile_v: BG_POSITION_new,
      tablet_v: BG_POSITION__TABLET_new,
      desktop_v: BG_POSITION__DESKTOP_new
    } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_3__["default"])({
      mobile_v: BG_POSITION,
      tablet_v: BG_POSITION__TABLET,
      desktop_v: BG_POSITION__DESKTOP
    });
    //

    return {
      [`${WRAP_CLASSNAME}`]: {
        backgroundImage: SRC_new ? `url(${SRC_new})` : undefined,
        backgroundRepeat: SRC_new ? `${BG_REPEAT_new}` : undefined,
        backgroundAttachment: SRC_new ? `${BG_ATTACHMENT_new}` : undefined,
        backgroundSize: SRC_new ? `${BG_SIZE_new}` : undefined,
        backgroundPosition: SRC_new ? `${BG_POSITION_new}` : undefined,
        [`@media (min-width: ${media_tablet})`]: SRC__TABLET_new ? {
          backgroundImage: `url(${SRC__TABLET_new})`,
          backgroundRepeat: `${BG_REPEAT__TABLET_new}`,
          backgroundAttachment: `${BG_ATTACHMENT__TABLET_new}`,
          backgroundSize: `${BG_SIZE__TABLET_new}`,
          backgroundPosition: `${BG_POSITION__TABLET_new}`
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: SRC__DESKTOP_new ? {
          backgroundImage: `url(${SRC__DESKTOP_new})`,
          backgroundRepeat: `${BG_REPEAT__DESKTOP_new}`,
          backgroundAttachment: `${BG_ATTACHMENT__DESKTOP_new}`,
          backgroundSize: `${BG_SIZE__DESKTOP_new}`,
          backgroundPosition: `${BG_POSITION__DESKTOP_new}`
        } : undefined
      }
    };
  };
  const getDivWrapStyles__Overlay = () => {
    const {
      overlayColor,
      overlayGradient,
      overlayType
    } = styles_background;
    if (overlayType !== "color" && overlayType !== "gradient") {
      return {};
    }
    let preBgName = "";
    let bgValue = "";
    if (overlayType === "color") {
      preBgName = "backgroundColor";
      bgValue = overlayColor;
    }
    // Backgroud gradient
    if (overlayType === "gradient") {
      preBgName = "backgroundImage";
      bgValue = overlayGradient;
    }
    return {
      [`${WRAP_CLASSNAME}`]: {
        ".wcb-OverlayBackgroundByBgControl": {
          [`${preBgName}`]: `${bgValue}`,
          position: "absolute",
          inset: 0,
          zIndex: 0
        }
      }
    };
  };
  return [getDivWrapStyles__BgColor_Gradient(), getDivWrapStyles__BackgroundImage(), getDivWrapStyles__Overlay()];
}

/***/ })

}]);
//# sourceMappingURL=src_block-container_GlobalCss_tsx.js.map