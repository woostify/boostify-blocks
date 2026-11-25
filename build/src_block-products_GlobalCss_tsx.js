"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-products_GlobalCss_tsx"],{

/***/ "./src/block-products/GlobalCss.tsx":
/*!******************************************!*\
  !*** ./src/block-products/GlobalCss.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getCssProperyHasResponsive */ "./src/utils/getCssProperyHasResponsive.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");
/* harmony import */ var _utils_themeDefaults__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/themeDefaults */ "./src/utils/themeDefaults.ts");
/* harmony import */ var _block_testimonials_swiper_WcbTestimonialsPanel_StyleArrowDots__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../block-testimonials-swiper/WcbTestimonialsPanel_StyleArrowDots */ "./src/block-testimonials-swiper/WcbTestimonialsPanel_StyleArrowDots.tsx");

/* eslint-disable camelcase -- block attributes intentionally use snake_case names */












const getBadgeShapeStyles = (shape, badgeOpts) => {
  if (shape && shape !== "rectangular") {
    return {};
  }
  const base = {};
  if (badgeOpts?.borderRadius !== undefined && badgeOpts.borderRadius !== null && String(badgeOpts.borderRadius) !== "") {
    base.borderRadius = `${badgeOpts.borderRadius}px`;
  }
  if (badgeOpts?.isSquare) {
    const size = `${Math.max(20, badgeOpts.size || 40)}px`;
    base.width = size;
    base.height = size;
    base.padding = "0";
  }
  return base;
};
const pickDefined = (...values) => values.find(v => v !== undefined && v !== null && v !== "");
const pickDeviceValue = (deviceType, mobile, tablet, desktop) => {
  if (deviceType === "Mobile") {
    return pickDefined(mobile, tablet, desktop);
  }
  if (deviceType === "Tablet") {
    return pickDefined(tablet, desktop, mobile);
  }
  return pickDefined(desktop, tablet, mobile);
};
const getResponsiveScalarStyle = ({
  cssProp,
  mobile,
  tablet,
  desktop,
  previewDeviceType,
  mediaTablet,
  mediaDesktop
}) => {
  if (previewDeviceType) {
    const activeVal = pickDeviceValue(previewDeviceType, mobile, tablet, desktop);
    return activeVal !== undefined ? {
      [cssProp]: activeVal
    } : {};
  }
  const {
    mobile_v: mobileNew,
    tablet_v: tabletNew,
    desktop_v: desktopNew
  } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
    mobile_v: mobile,
    tablet_v: tablet,
    desktop_v: desktop
  });
  return {
    [cssProp]: mobileNew !== null && mobileNew !== void 0 ? mobileNew : undefined,
    [`@media (min-width: ${mediaTablet})`]: tabletNew ? {
      [cssProp]: tabletNew
    } : undefined,
    [`@media (min-width: ${mediaDesktop})`]: desktopNew ? {
      [cssProp]: desktopNew
    } : undefined
  };
};
const buildListLayoutStyles = (cols, colGap, rowGap, peek, isSnap) => {
  const safeCols = Math.max(1, Number(cols) || 1);
  const safeColGap = colGap && String(colGap).trim() !== "" ? colGap : "0px";
  const safePeek = peek && String(peek).trim() !== "" ? peek : "0px";
  return {
    rowGap: rowGap !== null && rowGap !== void 0 ? rowGap : undefined,
    columnGap: colGap !== null && colGap !== void 0 ? colGap : undefined,
    ...(isSnap ? {
      "> div": {
        flexBasis: `calc((100% - (${safeCols - 1} * ${safeColGap})) / ${safeCols} - ${safePeek})`
      }
    } : {
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`
    })
  };
};
const hasValue = val => val !== undefined && val !== null && val !== "";
const GlobalCss = attrs => {
  var _qvTheme$position, _qvTheme$bg_color, _qvTheme$text_color, _qvTheme$hover_bg_col, _qvTheme$hover_text_c, _qvTheme$border_radiu, _general_featuredImag, _general_content$sale, _general_featuredImag2, _general_featuredImag3;
  const {
    uniqueId,
    previewDeviceType,
    // ATTRS OF BLOCK
    general_addToCartBtn,
    general_content,
    general_pagination,
    general_featuredImage,
    style_addToCardBtn,
    style_featuredImage,
    style_layout,
    style_pagination,
    style_title,
    style_saleBadge,
    style_outOfStock,
    style_border,
    style_price,
    style_rating,
    style_category,
    style_wishlistBtn,
    style_quickViewBtn,
    style_dimension,
    style_arrowAndDots,
    //
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect
  } = attrs;
  const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_9__.getThemeDefaults)();
  const qvTheme = theme?.shop_quick_view_btn;

  // Quick view button — always follows Customizer since there is no block UI panel for quick view
  const effectiveQvPosition = (_qvTheme$position = qvTheme?.position) !== null && _qvTheme$position !== void 0 ? _qvTheme$position : style_quickViewBtn?.position;
  const effectiveQvBgColor = (_qvTheme$bg_color = qvTheme?.bg_color) !== null && _qvTheme$bg_color !== void 0 ? _qvTheme$bg_color : style_quickViewBtn?.bg_color;
  const effectiveQvTextColor = (_qvTheme$text_color = qvTheme?.text_color) !== null && _qvTheme$text_color !== void 0 ? _qvTheme$text_color : style_quickViewBtn?.text_color;
  const effectiveQvHoverBgColor = (_qvTheme$hover_bg_col = qvTheme?.hover_bg_color) !== null && _qvTheme$hover_bg_col !== void 0 ? _qvTheme$hover_bg_col : style_quickViewBtn?.hover_bg_color;
  const effectiveQvHoverTextColor = (_qvTheme$hover_text_c = qvTheme?.hover_text_color) !== null && _qvTheme$hover_text_c !== void 0 ? _qvTheme$hover_text_c : style_quickViewBtn?.hover_text_color;
  const effectiveQvBorderRadius = (_qvTheme$border_radiu = qvTheme?.border_radius) !== null && _qvTheme$border_radiu !== void 0 ? _qvTheme$border_radiu : style_quickViewBtn?.border_radius;
  const effectiveQvEnabled = qvTheme?.enabled !== undefined ? qvTheme?.enabled : style_quickViewBtn?.enabled;
  const isQvEnabled = Boolean(effectiveQvEnabled) && String(effectiveQvEnabled) !== "0";
  const rawQvShowIcon = qvTheme?.show_icon !== undefined ? qvTheme.show_icon : style_quickViewBtn?.show_icon;
  const isQvShowIcon = effectiveQvPosition === "top-right" ? true : rawQvShowIcon !== undefined ? Boolean(rawQvShowIcon) && String(rawQvShowIcon) !== "0" && String(rawQvShowIcon) !== "false" : true;
  const isBadgeInsideImage = ((_general_featuredImag = general_featuredImage?.isShowFeaturedImage) !== null && _general_featuredImag !== void 0 ? _general_featuredImag : true) && ((_general_content$sale = general_content?.saleBadgePosition) !== null && _general_content$sale !== void 0 ? _general_content$sale : "Inside image") === "Inside image";
  const getQuickViewBorderRadius = () => {
    const valStr = String(effectiveQvBorderRadius).trim();
    if (valStr.endsWith("px") || valStr.endsWith("%") || valStr.endsWith("rem") || valStr.endsWith("em")) {
      return valStr;
    }
    return `${valStr}px`;
  };
  const hasQvBorderRadius = hasValue(effectiveQvBorderRadius);
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_6__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const LIST_CLASS = `${WRAP_CLASSNAME} .wcb-products__list`;
  const CAROUSEL_CLASS = `${WRAP_CLASSNAME} .wcb-products__carousel`;
  const CAROUSEL_PREV = `${CAROUSEL_CLASS} .swiper-button-prev`;
  const CAROUSEL_NEXT = `${CAROUSEL_CLASS} .swiper-button-next`;
  const CAROUSEL_ARROW = `${CAROUSEL_PREV}, ${CAROUSEL_NEXT}`;
  const CAROUSEL_ARROW_SVG = `${CAROUSEL_PREV} svg, ${CAROUSEL_NEXT} svg`;
  const CAROUSEL_DOTS = `${CAROUSEL_CLASS} .swiper-pagination`;
  const CAROUSEL_BULLET_ACTIVE = `${CAROUSEL_CLASS} .swiper-pagination-bullet-active`;
  const SNAP_PREV = `${WRAP_CLASSNAME} .indicators.-multi .p-arrow.-prev`;
  const SNAP_NEXT = `${WRAP_CLASSNAME} .indicators.-multi .p-arrow.-next`;
  const SNAP_ARROW = `${SNAP_PREV}, ${SNAP_NEXT}`;
  const SNAP_ARROW_SVG = `${SNAP_PREV} svg, ${SNAP_NEXT} svg`;
  const POST_CARD_CLASS = `${WRAP_CLASSNAME} .wcb-products__product`;
  const PRICE_TEXT_CLASS = `${POST_CARD_CLASS} .wcb-products__product-price, ${POST_CARD_CLASS} .wcb-products__product-price .woocommerce-Price-amount, ${POST_CARD_CLASS} .wcb-products__product-price del, ${POST_CARD_CLASS} .wcb-products__product-price ins`;
  const ADD_TO_CART_BTN_BG = `${POST_CARD_CLASS} .wcb-products__product-add-to-cart`;
  const ADD_TO_CART_BTN = `${POST_CARD_CLASS} .wcb-products__product-add-to-cart a`;
  const PRODUCT_IMAGE_CLASS = `${WRAP_CLASSNAME} .wcb-products__product-image`;
  const resolveSpacing = (cssProp, cssProperty) => {
    if (!cssProperty) {
      return {};
    }
    const {
      value_mobile,
      value_tablet,
      value_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty
    });
    return getResponsiveScalarStyle({
      cssProp,
      mobile: value_mobile,
      tablet: value_tablet,
      desktop: value_desktop,
      previewDeviceType,
      mediaTablet: media_tablet,
      mediaDesktop: media_desktop
    });
  };

  // ------------------- WRAP DIV

  const renderDivListWrapStyle = () => {
    const {
      value_Desktop: rowGap_desktop,
      value_Mobile: rowGap_mobile,
      value_Tablet: rowGap_tablet
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(style_layout?.rowGap);
    const {
      value_Desktop: colunmGap_desktop,
      value_Mobile: colunmGap_mobile,
      value_Tablet: colunmGap_tablet
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(style_layout?.colunmGap);
    const {
      numberOfColumn,
      swithToScrollSnapX,
      peekAfter,
      layoutType
    } = style_layout !== null && style_layout !== void 0 ? style_layout : {};
    const {
      value_Desktop: numberOfColumn_desktop,
      value_Tablet: numberOfColumn_tablet,
      value_Mobile: numberOfColumn_mobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(numberOfColumn);
    if (layoutType === "carousel") {
      // Static CSS handles viewport breakpoints. The editor can simulate a different device.
      if (!previewDeviceType) {
        return null;
      }
      const cols = pickDeviceValue(previewDeviceType, numberOfColumn_mobile, numberOfColumn_tablet, numberOfColumn_desktop);
      const colGap = pickDeviceValue(previewDeviceType, colunmGap_mobile, colunmGap_tablet, colunmGap_desktop);
      const gap = String(colGap !== null && colGap !== void 0 ? colGap : "").trim() || "24px";
      const safeCols = Math.max(1, Number(cols) || 1);
      const preInitListSel = `${CAROUSEL_CLASS} .wcb-products__carousel-viewport:not(.swiper-initialized) .wcb-products__list`;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
        styles: {
          [preInitListSel]: {
            "> div": {
              width: `calc((100% - (${safeCols - 1} * ${gap})) / ${safeCols})`,
              marginRight: gap,
              flexShrink: 0
            }
          }
        }
      });
    }
    const {
      value_Desktop: peekAfter_desktop,
      value_Tablet: peekAfter_tablet,
      value_Mobile: peekAfter_mobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(peekAfter);
    const isSnapScrollDesktop = swithToScrollSnapX === "Desktop";
    const isSnapScrollTablet = isSnapScrollDesktop || swithToScrollSnapX === "Tablet";
    const isSnapScrollMobile = isSnapScrollTablet || swithToScrollSnapX === "Mobile";
    const mobileStyles = buildListLayoutStyles(numberOfColumn_mobile, colunmGap_mobile, rowGap_mobile, peekAfter_mobile, isSnapScrollMobile);
    const tabletStyles = buildListLayoutStyles(numberOfColumn_tablet, colunmGap_tablet, rowGap_tablet, peekAfter_tablet, isSnapScrollTablet);
    const desktopStyles = buildListLayoutStyles(numberOfColumn_desktop, colunmGap_desktop, rowGap_desktop, peekAfter_desktop, isSnapScrollDesktop);
    const listWrapStyles = previewDeviceType ? {
      [LIST_CLASS]: previewDeviceType === "Mobile" ? mobileStyles : previewDeviceType === "Tablet" ? tabletStyles : desktopStyles
    } : {
      [LIST_CLASS]: {
        ...mobileStyles,
        [`@media (min-width: ${media_tablet})`]: tabletStyles,
        [`@media (min-width: ${media_desktop})`]: desktopStyles
      }
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
      styles: listWrapStyles
    });
  };
  const getDivWrapStyles_Pagination = () => ({
    [`${WRAP_CLASSNAME} .wcb-products__pagination`]: {
      ...resolveSpacing("marginTop", style_pagination?.marginTop),
      justifyContent: style_pagination?.justifyContent,
      [`.page-numbers`]: {
        color: style_pagination?.mainStyle?.Normal?.color,
        backgroundColor: style_pagination?.mainStyle?.Normal?.backgroundColor
      },
      [`.page-numbers.current`]: {
        color: style_pagination?.mainStyle?.Active?.color,
        backgroundColor: style_pagination?.mainStyle?.Active?.backgroundColor
      }
    }
  });
  const getDivWrapStyles_Rating = () => ({
    [`${WRAP_CLASSNAME} .wcb-products__product-rating`]: {
      ...resolveSpacing("marginBottom", style_rating?.marginBottom),
      color: style_rating?.color
    }
  });
  //

  //
  const getPostCardWrapStyles = () => {
    return [{
      [POST_CARD_CLASS]: {
        ".wcb-products__product--quickViewBottomImage--item": {
          ...(effectiveQvBgColor ? {
            backgroundColor: effectiveQvBgColor
          } : {}),
          ...(effectiveQvTextColor ? {
            color: effectiveQvTextColor
          } : {}),
          ...(hasQvBorderRadius ? {
            borderRadius: getQuickViewBorderRadius()
          } : {}),
          ...(!isQvEnabled ? {
            display: "none !important"
          } : {}),
          "&:hover": {
            ...(effectiveQvHoverTextColor ? {
              color: effectiveQvHoverTextColor
            } : {}),
            ...(effectiveQvHoverBgColor ? {
              backgroundColor: effectiveQvHoverBgColor
            } : {})
          }
        },
        ...(!isQvShowIcon ? {
          ".wcb-products__product--quickViewBottomImage-svg__icon": {
            display: "none"
          }
        } : {}),
        "&.wcb-products__product--btnIconAddToCart": {
          ".wcb-products__product--btnIconAddToCart--item": {
            ...(style_addToCardBtn?.colorAndBackgroundColor?.Normal?.color ? {
              color: style_addToCardBtn.colorAndBackgroundColor.Normal.color
            } : {}),
            ...(style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor ? {
              background: style_addToCardBtn.colorAndBackgroundColor.Normal.backgroundColor
            } : {})
          },
          ...(style_addToCardBtn?.colorAndBackgroundColor?.Hover?.backgroundColor || style_addToCardBtn?.colorAndBackgroundColor?.Hover?.color ? {
            ".wcb-products__product--btnIconAddToCart--item:hover": {
              ...(style_addToCardBtn?.colorAndBackgroundColor?.Hover?.backgroundColor ? {
                background: style_addToCardBtn.colorAndBackgroundColor.Hover.backgroundColor
              } : {}),
              ...(style_addToCardBtn?.colorAndBackgroundColor?.Hover?.color ? {
                color: style_addToCardBtn.colorAndBackgroundColor.Hover.color
              } : {})
            }
          } : {})
        },
        "&.wcb-products__product--wishlistTopRight, &.wcb-products__product--wishlistBottomRight": {
          ".wcb-products__product--wishlistTopRight--item, .wcb-products__product--wishlistBottomRight--item": {
            ...(style_wishlistBtn?.backgroundColor ? {
              backgroundColor: style_wishlistBtn.backgroundColor
            } : {}),
            ...(style_wishlistBtn?.color ? {
              color: style_wishlistBtn.color,
              "&::before": {
                color: "inherit"
              }
            } : {}),
            "&:hover": {
              ...(style_wishlistBtn?.hoverBackgroundColor ? {
                backgroundColor: style_wishlistBtn.hoverBackgroundColor
              } : {}),
              ...(style_wishlistBtn?.hoverColor ? {
                color: style_wishlistBtn.hoverColor,
                "&::before": {
                  color: style_wishlistBtn.hoverColor
                }
              } : {})
            }
          }
        }
      }
    }, {
      [POST_CARD_CLASS]: {
        textAlign: style_layout?.textAlignment,
        backgroundColor: style_layout?.backgroundColor,
        ".wcb-products__product-price": resolveSpacing("marginBottom", style_price?.marginBottom),
        ".wcb-products__product-price, .wcb-products__product-price .woocommerce-Price-amount, .wcb-products__product-price del, .wcb-products__product-price ins": {
          color: style_price?.textColor
        },
        ".wcb-products__product-featured": resolveSpacing("marginBottom", style_featuredImage?.marginBottom),
        ".wcb-products__product-title": {
          ...resolveSpacing("marginBottom", style_title?.marginBottom),
          color: style_title?.textColor,
          a: {
            color: style_title?.textColor,
            "&:is(:hover, :focus-visible)": {
              color: style_title?.hoverColor
            }
          }
        },
        ".wcb-products__product-categories": {
          ...resolveSpacing("marginBottom", style_category?.marginBottom),
          color: style_category?.textColor,
          a: {
            color: style_category?.textColor,
            "&:is(:hover, :focus-visible)": {
              color: style_category?.hoverColor
            }
          }
        },
        ".wcb-products__product-content": {
          minHeight: style_layout?.contentEqualHeight ? `${style_layout?.contentMinHeight || 160}px` : undefined
        },
        ".wcb-products__product-salebadge": {
          ...(!isBadgeInsideImage ? resolveSpacing("marginBottom", style_saleBadge?.marginBottom) : {}),
          ".wcb-products__product-onsale": {
            color: style_saleBadge?.textColor,
            backgroundColor: style_saleBadge?.backgroundColor,
            ...getBadgeShapeStyles(style_saleBadge?.shape || "round", {
              borderRadius: style_saleBadge?.borderRadius,
              isSquare: style_saleBadge?.isSquare,
              size: style_saleBadge?.size
            })
          }
        },
        ".wcb-products__product-outofstock-badge": {
          ...(general_featuredImage?.isShowFeaturedImage === false ? resolveSpacing("marginBottom", style_outOfStock?.marginBottom) : {}),
          ".wcb-products__product-on-outofstock": {
            color: style_outOfStock?.textColor,
            backgroundColor: style_outOfStock?.backgroundColor,
            ...getBadgeShapeStyles(style_outOfStock?.shape || "round", {
              borderRadius: style_outOfStock?.borderRadius,
              isSquare: style_outOfStock?.isSquare,
              size: style_outOfStock?.size
            })
          }
        },
        // Alignment for the rating stars row.
        // Moved from PHP inline style to CSS class to prevent inline override.
        ".wcb-products__product-rating-wrap": {
          justifyContent: style_layout?.textAlignment === "left" ? "flex-start" : style_layout?.textAlignment === "right" ? "flex-end" : "center"
        },
        // Alignment for the quantity counter wrapper.
        // Moved from PHP inline style to CSS class to prevent inline override.
        ".wcb-products__quantity-add-to-cart": {
          alignItems: style_layout?.textAlignment === "left" ? "flex-start" : style_layout?.textAlignment === "right" ? "flex-end" : "center"
        }
      }
    }, (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-products__product-image-link`,
      border: style_featuredImage?.border,
      isWithRadius: true
    }), ...(style_featuredImage?.border?.hoverColor ? [{
      [`${POST_CARD_CLASS}:hover .wcb-products__product-image-link`]: {
        borderColor: style_featuredImage.border.hoverColor
      }
    }] : [])];
  };
  const getPostCardStyles_AddToCart = () => {
    var _style_addToCardBtn$c, _style_addToCardBtn$c2;
    const {
      backgroundColor,
      color
    } = (_style_addToCardBtn$c = style_addToCardBtn?.colorAndBackgroundColor?.Normal) !== null && _style_addToCardBtn$c !== void 0 ? _style_addToCardBtn$c : {};
    const {
      backgroundColor: backgroundColor_h,
      color: color_h
    } = (_style_addToCardBtn$c2 = style_addToCardBtn?.colorAndBackgroundColor?.Hover) !== null && _style_addToCardBtn$c2 !== void 0 ? _style_addToCardBtn$c2 : {};
    // Maps textAlignment setting to CSS align-items value for flex column containers.
    // Replaces the old inline style approach (align-items set directly in PHP render)
    // to avoid inline style overriding this CSS class rule.
    const textAlignToAlignItems = alignment => {
      if (alignment === "left") return "flex-start";
      if (alignment === "right") return "flex-end";
      return "center";
    };
    return {
      [ADD_TO_CART_BTN_BG]: {
        alignItems: textAlignToAlignItems(style_layout?.textAlignment),
        // Editor links have pointer-events: none, so trigger hover on the button container too
        ...(color_h || backgroundColor_h ? {
          "&:hover": {
            a: {
              color: color_h || undefined,
              backgroundColor: backgroundColor_h || undefined
            },
            span: {
              color: color_h || undefined
            },
            "svg path": {
              fill: color_h || undefined
            }
          }
        } : {})
      },
      [ADD_TO_CART_BTN]: {
        color: color || undefined,
        backgroundColor: backgroundColor || undefined,
        ...resolveSpacing("marginBottom", style_addToCardBtn?.marginBottom || {
          Desktop: "1rem"
        }),
        ".wcb-products__add-to-cart-icon": {
          display: general_addToCartBtn?.isShowIcon === false ? "none" : undefined,
          ...(color ? {
            "svg path": {
              fill: color
            }
          } : {})
        },
        "&:hover": {
          color: color_h || undefined,
          backgroundColor: backgroundColor_h || undefined,
          span: {
            color: color_h || undefined
          },
          "svg path": {
            fill: color_h || undefined
          }
        }
      }
    };
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderDivListWrapStyle(), general_content?.isShowTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: `${POST_CARD_CLASS} .wcb-products__product-title, ${POST_CARD_CLASS} .wcb-products__product-title a`,
      typography: style_title?.typography,
      deviceType: previewDeviceType
    })
  }), general_content?.isShowCategory && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-products__product-categories, ${WRAP_CLASSNAME} .wcb-products__product-categories a`,
      typography: style_category?.typography,
      deviceType: previewDeviceType
    })
  }), general_content?.isShowRating && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles_Rating()
  }), general_content?.isShowPrice && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: PRICE_TEXT_CLASS,
      typography: style_price?.typography,
      deviceType: previewDeviceType
    })
  }), general_content?.isShowSaleBadge && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-onsale",
      typography: style_saleBadge?.typography,
      deviceType: previewDeviceType
    })
  }), general_content?.isShowOutOfStock && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-on-outofstock",
      typography: style_outOfStock?.typography,
      deviceType: previewDeviceType
    })
  }), general_pagination?.isShowPagination ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getDivWrapStyles_Pagination()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-products__pagination .page-numbers`,
      border: style_pagination?.mainStyle?.Normal?.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-products__pagination .page-numbers.current`,
      border: style_pagination?.mainStyle?.Active?.border,
      isWithRadius: true
    })
  })) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getPostCardWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: POST_CARD_CLASS,
      padding: style_layout?.padding
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${POST_CARD_CLASS}`,
      border: style_border,
      isWithRadius: true
    })
  }), general_addToCartBtn?.isShowButton ? general_addToCartBtn?.position === "icon" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${POST_CARD_CLASS} .wcb-products__product--btnIconAddToCart--item`,
      border: style_addToCardBtn?.border,
      isWithRadius: true
    })
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === "bottom visible" || general_addToCartBtn?.position === "inside image" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: getPostCardStyles_AddToCart()
  }) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: ADD_TO_CART_BTN,
      typography: style_addToCardBtn?.typography,
      deviceType: previewDeviceType
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: ADD_TO_CART_BTN,
      border: style_addToCardBtn?.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: ADD_TO_CART_BTN,
      padding: style_addToCardBtn?.padding
    })
  })) : null, general_featuredImage?.equal_height_flag && ((_general_featuredImag2 = general_featuredImage?.image_height) !== null && _general_featuredImag2 !== void 0 ? _general_featuredImag2 : 300) > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: {
      [`${PRODUCT_IMAGE_CLASS} img`]: {
        height: `${(_general_featuredImag3 = general_featuredImage.image_height) !== null && _general_featuredImag3 !== void 0 ? _general_featuredImag3 : 300}px`
      }
    }
  }), (style_layout?.layoutType === "carousel" || style_layout?.swithToScrollSnapX && style_layout.swithToScrollSnapX !== "None") && (() => {
    const isCarousel = style_layout?.layoutType === "carousel";
    const effectiveArrowDots = style_arrowAndDots || _block_testimonials_swiper_WcbTestimonialsPanel_StyleArrowDots__WEBPACK_IMPORTED_MODULE_10__.WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO;
    const arrowPrevSel = isCarousel ? CAROUSEL_PREV : SNAP_PREV;
    const arrowNextSel = isCarousel ? CAROUSEL_NEXT : SNAP_NEXT;
    const arrowSel = isCarousel ? CAROUSEL_ARROW : SNAP_ARROW;
    const arrowSvgSel = isCarousel ? CAROUSEL_ARROW_SVG : SNAP_ARROW_SVG;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
      styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
        className: arrowSel,
        border: effectiveArrowDots.border,
        isWithRadius: true
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
      styles: [{
        [arrowSel]: {
          color: effectiveArrowDots.color,
          backgroundColor: effectiveArrowDots.backgroundColor
        },
        [arrowSvgSel]: {
          width: effectiveArrowDots.arrowSize,
          height: effectiveArrowDots.arrowSize,
          color: effectiveArrowDots.color
        },
        ...(isCarousel ? {
          [CAROUSEL_BULLET_ACTIVE]: {
            backgroundColor: effectiveArrowDots.color
          },
          [CAROUSEL_DOTS]: resolveSpacing("marginTop", effectiveArrowDots.dotsMarginTop)
        } : {}),
        [arrowPrevSel]: resolveSpacing(isCarousel ? "insetInlineStart" : "left", effectiveArrowDots.arrowDistance),
        [arrowNextSel]: resolveSpacing(isCarousel ? "insetInlineEnd" : "right", effectiveArrowDots.arrowDistance)
      }]
    }));
  })(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: WRAP_CLASSNAME,
      margin: style_dimension?.margin,
      padding: style_dimension?.padding
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME,
      defaultDisplay: "block"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-block-products-uniqueid": uniqueId
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(GlobalCss));

/***/ }),

/***/ "./src/block-testimonials-swiper/WcbTestimonialsPanel_StyleArrowDots.tsx":
/*!*******************************************************************************!*\
  !*** ./src/block-testimonials-swiper/WcbTestimonialsPanel_StyleArrowDots.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO: () => (/* binding */ WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MyBorderControl/MyBorderControl */ "./src/components/controls/MyBorderControl/MyBorderControl.tsx");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");











const WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO = {
  arrowSize: "1.25rem",
  border: {
    ..._components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_7__.MY_BORDER_CONTROL_DEMO,
    mainSettings: {
      ..._components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_7__.MY_BORDER_CONTROL_DEMO.mainSettings,
      style: "solid",
      width: "1px",
      color: "#d1d5db"
    },
    hoverColor: "#6b7280",
    radius: {
      Desktop: "99px"
    }
  },
  arrowDistance: {
    Desktop: "0px"
  },
  dotsMarginTop: {
    Desktop: "8px"
  },
  color: "#374151",
  backgroundColor: "#fff"
};
const WcbTestimonialsPanel_StyleArrowDots = ({
  panelData = WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO,
  setAttr__,
  showArrowsDots = "Both",
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__["default"])() || "Desktop";
  const {
    arrowSize,
    border,
    arrowDistance,
    dotsMarginTop,
    color,
    backgroundColor
  } = panelData;
  const {
    currentDeviceValue: currentDotsMarginTop
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(dotsMarginTop, deviceType);
  const {
    currentDeviceValue: currentArrowDistance
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowDistance, deviceType);
  const showArrows = showArrowsDots !== "Dot";
  const showDots = showArrowsDots !== "Arrow";
  const panelTitle = showArrows && showDots ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Arrow & Dots", "boostify-blocks") : showArrows ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Arrows", "boostify-blocks") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dots", "boostify-blocks");
  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: panelTitle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, showArrows && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_9__["default"], {
    defaultOpen: true,
    label: "Arrow settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: value => {
      setAttr__({
        ...panelData,
        arrowSize: value
      });
    },
    value: arrowSize || "1.25rem",
    hasResponsive: false,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Arrow size", "boostify-blocks")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    borderControl: border,
    setAttrs__border: border => {
      setAttr__({
        ...panelData,
        border
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: value => {
      var _arrowDistance$Deskto;
      setAttr__({
        ...panelData,
        arrowDistance: {
          Desktop: (_arrowDistance$Deskto = arrowDistance?.Desktop) !== null && _arrowDistance$Deskto !== void 0 ? _arrowDistance$Deskto : "0px",
          ...arrowDistance,
          [deviceType]: value
        }
      });
    },
    minCustomValue: -100,
    value: currentArrowDistance || "0px",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Arrow Distance from Edges", "boostify-blocks")
  })), showDots && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: value => {
      setAttr__({
        ...panelData,
        dotsMarginTop: {
          ...dotsMarginTop,
          [deviceType]: value
        }
      });
    },
    minCustomValue: -200,
    value: currentDotsMarginTop || "8px",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dots Margin top", "boostify-blocks")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "boostify-blocks"),
    onChange: value => {
      setAttr__({
        ...panelData,
        color: value
      });
    },
    color: color
  }), showArrows && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Color", "boostify-blocks"),
    onChange: value => {
      setAttr__({
        ...panelData,
        backgroundColor: value
      });
    },
    color: backgroundColor || "#fff"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbTestimonialsPanel_StyleArrowDots);

/***/ }),

/***/ "./src/components/controls/MyBorderControl/MyBorderControl.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/controls/MyBorderControl/MyBorderControl.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyBorderControl/types.ts");



// @ts-ignore







const MyBorderControl = ({
  className = "space-y-4",
  borderControl = _types__WEBPACK_IMPORTED_MODULE_8__.MY_BORDER_CONTROL_DEMO,
  setAttrs__border
}) => {
  var _getValueFromAttrsRes;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__["default"])() || "Desktop";
  //
  const {
    mainSettings: mainSettingsProps,
    hoverColor: hoverColorProps,
    radius: radiusProps
  } = borderControl;
  const handleChangeBorder = newBorders => {
    setAttrs__border({
      ...borderControl,
      mainSettings: newBorders
    });
  };
  const handleChangeBorderHoverColor = hoverColor => {
    setAttrs__border({
      ...borderControl,
      hoverColor
    });
  };
  const handleChangeBorderRadius = newRadius => {
    // Clean up untouched legacy { Desktop: "0", Tablet: "0", Mobile: "0" }
    // defaults when editing Desktop so Tablet/Mobile cascade from Desktop
    // without locking Mobile when Tablet is customized later.
    const isUntouchedLegacyZero = radiusProps?.Desktop === "0" && radiusProps?.Tablet === "0" && radiusProps?.Mobile === "0";
    if (deviceType === "Desktop") {
      const nextDesktop = newRadius === undefined ? _types__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_BORDER_RADIUS : newRadius;
      setAttrs__border({
        ...borderControl,
        radius: isUntouchedLegacyZero ? {
          Desktop: nextDesktop
        } : {
          ...radiusProps,
          Desktop: nextDesktop
        }
      });
      return;
    }

    // Tablet / Mobile: only update the active device; clearing reverts it to cascade.
    const nextRadius = {
      ...radiusProps
    };
    if (newRadius === undefined) {
      delete nextRadius[deviceType];
    } else {
      nextRadius[deviceType] = newRadius;
    }
    setAttrs__border({
      ...borderControl,
      radius: nextRadius
    });
  };
  const RADIUS = (_getValueFromAttrsRes = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(radiusProps, deviceType).currentDeviceValue) !== null && _getValueFromAttrsRes !== void 0 ? _getValueFromAttrsRes : _types__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_BORDER_RADIUS;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBorderBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Border"),
    onChange: handleChangeBorder,
    value: mainSettingsProps,
    colors: [],
    enableAlpha: true
    // enableStyle={ showBorderStyle }
    ,
    popoverOffset: 40,
    popoverPlacement: "left-start",
    __experimentalHasMultipleOrigins: true,
    __experimentalIsRenderedInSidebar: true,
    size: "__unstable-large",
    className: "wcb-BorderBoxControl"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Hover border color", "boostify-blocks"),
    onChange: handleChangeBorderHoverColor,
    color: hoverColorProps
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "MyBorderControl__BorderRadiusControl"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "mb-2",
    hasResponsive: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Border radius", "boostify-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalBorderRadiusControl, {
    key: deviceType,
    values: RADIUS,
    onChange: value => {
      handleChangeBorderRadius(value);
    },
    label: ""
    // label={
    // 	<MyLabelControl className="" hasResponsive>
    // 		{__("Border radius", "boostify-blocks")}
    // 	</MyLabelControl>
    // }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyBorderControl);

/***/ }),

/***/ "./src/components/controls/MyBorderControl/types.ts":
/*!**********************************************************!*\
  !*** ./src/components/controls/MyBorderControl/types.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_BORDER_MAINS: () => (/* binding */ DEFAULT_BORDER_MAINS),
/* harmony export */   DEFAULT_BORDER_MAIN_SINGLE_SIDE: () => (/* binding */ DEFAULT_BORDER_MAIN_SINGLE_SIDE),
/* harmony export */   DEFAULT_BORDER_RADIUS: () => (/* binding */ DEFAULT_BORDER_RADIUS),
/* harmony export */   MY_BORDER_CONTROL_DEMO: () => (/* binding */ MY_BORDER_CONTROL_DEMO)
/* harmony export */ });
const DEFAULT_BORDER_RADIUS = "0";
const DEFAULT_BORDER_MAIN_SINGLE_SIDE = {
  color: "#d1d5db",
  style: "solid",
  width: "1px"
};
const DEFAULT_BORDER_MAINS = undefined;
const MY_BORDER_CONTROL_DEMO = {
  mainSettings: DEFAULT_BORDER_MAINS,
  hoverColor: undefined,
  radius: {
    Desktop: DEFAULT_BORDER_RADIUS,
    Tablet: DEFAULT_BORDER_RADIUS,
    Mobile: DEFAULT_BORDER_RADIUS
  }
};

/***/ }),

/***/ "./src/components/controls/MyColorPicker/MyColorPicker.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/controls/MyColorPicker/MyColorPicker.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


// @ts-ignore



const MyColorPicker = ({
  className = "",
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Color", "boostify-blocks"),
  // Default color value — can be a hex string.
  color = "#000",
  onChange,
  showDefaultPalette = true,
  showCustomColorOnDefaultPallete = true
}) => {
  const [colorState, setColorState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setColorState(color || "");
  }, [color]);
  const handleUpdateColor = c => {
    setColorState(c);
    onChange(c);
  };
  const colorGradientSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseMultipleOriginColorsAndGradients)();
  const defaultColorPallete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const customColors = window.boostify_blocks_global_variables?.customColorPallete;
    if (!customColors || !customColors.length || !showCustomColorOnDefaultPallete) {
      return colorGradientSettings?.colors || [];
    }
    const c = [...(colorGradientSettings?.colors || []), {
      name: "Customs",
      colors: window.boostify_blocks_global_variables.customColorPallete || []
    }];
    return c;
  }, [colorGradientSettings, showCustomColorOnDefaultPallete]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    className: `w-full ${className}`,
    contentClassName: "my-popover-content-classname"
    // @ts-ignore
    ,
    popoverProps: {
      placement: "left-start"
    },
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `w-full flex items-center gap-3 border p-2 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors`,
      onClick: onToggle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center gap-0.5"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `w-7 h-7 rounded-full shadow-md ring-1 ring-black/5 cursor-pointer ${colorState ? "" : "bg-transparent"}`,
      style: {
        backgroundColor: colorState,
        backgroundImage: !colorState ? "linear-gradient(45deg, #ddd 25%, transparent 0), linear-gradient(-45deg, #ddd 25%, transparent 0), linear-gradient(45deg, transparent 75%, #ddd 0), linear-gradient(-45deg, transparent 75%, #ddd 0)" : undefined,
        backgroundSize: "10px 10px",
        backgroundPosition: "0 0, 0 5px, 5px -5px, -5px 0"
      }
    })), label && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, label))),
    renderContent: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bg-white "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
      className: "block-editor-color-gradient-control__panel p-4",
      colors: showDefaultPalette ? defaultColorPallete : undefined,
      value: colorState
      // @ts-ignore
      ,
      enableAlpha: true,
      onChange: color => {
        handleUpdateColor(color || "");
      }
      // @ts-ignore
      ,
      __experimentalHasMultipleOrigins: true,
      __experimentalIsRenderedInSidebar: true
    })))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyColorPicker);

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MY_GAP_UNITS: () => (/* binding */ MY_GAP_UNITS),
/* harmony export */   MY_HORIZOLTAL_UNITS: () => (/* binding */ MY_HORIZOLTAL_UNITS),
/* harmony export */   MY_VERTICAL_UNITS: () => (/* binding */ MY_VERTICAL_UNITS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyDimensionsControl/types.ts");
/* harmony import */ var _MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _MyDimensionsUnitControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MyDimensionsUnitControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsUnitControl.tsx");









const MY_GAP_UNITS = [{
  value: "px",
  label: "px",
  default: 32,
  step: 1
}, {
  value: "rem",
  label: "rem",
  default: 2,
  step: 0.01
}, {
  value: "em",
  label: "em",
  default: 2,
  step: 0.01
}, {
  value: "%",
  label: "%",
  default: 50,
  step: 0.1
}];
const MY_HORIZOLTAL_UNITS = [{
  value: "px",
  label: "px",
  default: 32,
  step: 1
}, {
  value: "rem",
  label: "rem",
  default: 2,
  step: 0.01
}, {
  value: "em",
  label: "em",
  default: 2,
  step: 0.01
}, {
  value: "%",
  label: "%",
  default: 20,
  step: 0.1
}, {
  value: "vw",
  label: "vw",
  default: 20,
  step: 0.1
}];
const MY_VERTICAL_UNITS = [{
  value: "px",
  label: "px",
  default: 32,
  step: 1
}, {
  value: "rem",
  label: "rem",
  default: 2,
  step: 0.01
}, {
  value: "em",
  label: "em",
  default: 2,
  step: 0.01
}, {
  value: "%",
  label: "%",
  default: 20,
  step: 0.1
}, {
  value: "vh",
  label: "vh",
  default: 20,
  step: 0.1
}];
const MyDimensionsControl = ({
  className = "space-y-5",
  dimensionControl = _types__WEBPACK_IMPORTED_MODULE_4__.MY_DIMENSIONS_CONTROL_DEMO,
  setAttrs__dimensions
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__["default"])() || "Desktop";
  //
  const {
    colunmGap: colunmGapProps,
    rowGap: rowGapProps,
    margin: marginProps,
    padding: paddingProps
  } = dimensionControl;
  const {
    currentDeviceValue: colunmGap
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(colunmGapProps, deviceType);
  const {
    currentDeviceValue: rowGap
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(rowGapProps, deviceType);
  const {
    currentDeviceValue: margin
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(marginProps, deviceType);
  const {
    currentDeviceValue: padding
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(paddingProps, deviceType);

  //
  const setRowGrap = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      rowGap: {
        ...rowGapProps,
        [deviceType]: value
      }
    });
  };
  const setColumnGap = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      colunmGap: {
        ...colunmGapProps,
        [deviceType]: value
      }
    });
  };
  const handleChangeMargin = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      margin: {
        ...marginProps,
        [deviceType]: value
      }
    });
  };
  const handleChangePadding = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      padding: {
        ...paddingProps,
        [deviceType]: value
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onChange: setRowGrap,
    value: rowGap || "",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Row Gap", "boostify-blocks")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onChange: setColumnGap,
    value: colunmGap || "",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Column Gap", "boostify-blocks")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyDimensionsUnitControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "boostify-blocks")),
    values: padding || {},
    onChange: handleChangePadding,
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyDimensionsUnitControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "boostify-blocks")),
    values: margin || {},
    onChange: handleChangeMargin,
    min: -99999
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDimensionsControl);

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/MyDimensionsUnitControl.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/MyDimensionsUnitControl.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link-off.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/components/controls/MyDimensionsControl/style.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./src/components/controls/MyDimensionsControl/helpers.ts");








// Constants

const DEFAULT_VALUES = {
  top: "",
  right: "",
  bottom: "",
  left: ""
};
const SIDES = [{
  key: "top"
}, {
  key: "right"
}, {
  key: "bottom"
}, {
  key: "left"
}];
const LABELS = {
  top: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Top", "boostify-blocks"),
  right: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Right", "boostify-blocks"),
  bottom: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Bottom", "boostify-blocks"),
  left: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Left", "boostify-blocks"),
  mixed: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Mixed", "boostify-blocks")
};

// BoxIcon
const BoxIcon = ({
  side
}) => {
  const focused = s => side === "all" || side === s;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.iconRoot
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.iconViewbox
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.stroke(focused("top"), {
      height: 2,
      left: 3,
      right: 3,
      top: 0
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.stroke(focused("right"), {
      bottom: 3,
      top: 3,
      width: 2,
      right: 0
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.stroke(focused("bottom"), {
      height: 2,
      left: 3,
      right: 3,
      bottom: 0
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.stroke(focused("left"), {
      bottom: 3,
      top: 3,
      width: 2,
      left: 0
    })
  })));
};

// SideSlider
const SideSlider = ({
  value,
  min,
  onChange
}) => {
  const {
    num,
    unit
  } = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.parseValue)(value);
  const max = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getMaxForUnit)(unit);
  const step = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getStepForUnit)(unit);
  // When negatives are allowed, mirror the slider range around 0
  // (e.g. -1000..1000px, -20..20rem) instead of using the raw input min.
  const sliderMin = min < 0 ? -max : min;
  const clamped = Math.max(sliderMin, Math.min(max, num));
  const pct = max > sliderMin ? (clamped - sliderMin) / (max - sliderMin) * 100 : 0;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "wcb-dimensions-unit-control__range",
    type: "range",
    value: clamped,
    min: sliderMin,
    max: max,
    step: step,
    style: {
      background: `linear-gradient(to right, #0073aa ${pct}%, #ddd ${pct}%)`
    },
    onChange: e => {
      const newNum = parseFloat(e.target.value);
      onChange(unit ? `${newNum}${unit}` : `${newNum}`);
    },
    onWheel: e => e.currentTarget.blur()
  });
};

// MyDimensionsUnitControl

const MyDimensionsUnitControl = ({
  label,
  values = {},
  onChange,
  min = 0,
  allowReset = true
}) => {
  var _values$top, _values$right, _values$bottom, _values$left;
  _style__WEBPACK_IMPORTED_MODULE_3__.useInjectStyles();
  const hasInitialValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isValuesDefined)(values);
  const [isLinked, setIsLinked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!hasInitialValue || !(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isMixedValues)(values));
  const [isDirty, setIsDirty] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hasInitialValue);
  const merged = {
    top: (_values$top = values.top) !== null && _values$top !== void 0 ? _values$top : "",
    right: (_values$right = values.right) !== null && _values$right !== void 0 ? _values$right : "",
    bottom: (_values$bottom = values.bottom) !== null && _values$bottom !== void 0 ? _values$bottom : "",
    left: (_values$left = values.left) !== null && _values$left !== void 0 ? _values$left : ""
  };
  const allValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getAllValue)(merged);
  const isMixed = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isValuesDefined)(merged) && (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isMixedValues)(merged);
  const clampToMin = value => {
    const raw = value !== null && value !== void 0 ? value : "";
    if (min < 0 || !raw.trim()) return raw;
    const {
      num,
      unit
    } = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.parseValue)(raw);
    if (!Number.isNaN(num) && num < min) {
      return `${min}${unit}`;
    }
    return raw;
  };
  const handleAllChange = value => {
    const v = clampToMin(value);
    onChange({
      top: v,
      right: v,
      bottom: v,
      left: v
    });
    setIsDirty(true);
  };
  const handleSideChange = (side, value) => {
    onChange({
      ...merged,
      [side]: clampToMin(value)
    });
    setIsDirty(true);
  };
  const handleReset = () => {
    onChange(DEFAULT_VALUES);
    setIsDirty(false);
  };
  const linkLabel = isLinked ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Unlink sides", "boostify-blocks") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Link sides", "boostify-blocks");
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.root
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.header
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.headerActions
  }, allowReset && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "component-box-control__reset-button",
    variant: "secondary",
    isSmall: true,
    onClick: handleReset,
    disabled: !isDirty
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Reset", "boostify-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    text: linkLabel
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "component-box-control__linked-button",
    isSmall: true,
    icon: isLinked ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    iconSize: 24,
    "aria-label": linkLabel,
    onClick: () => setIsLinked(prev => !prev)
  })))), isLinked ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.sideRow
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BoxIcon, {
    side: "all"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
    "aria-label": typeof label === "string" ? label : undefined,
    className: "component-box-control__unit-control",
    style: _style__WEBPACK_IMPORTED_MODULE_3__.unitControl,
    value: allValue,
    onChange: v => handleAllChange(v),
    min: min,
    placeholder: isMixed ? LABELS.mixed : undefined,
    isResetValueOnUnitChange: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.sliderWrapper
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SideSlider, {
    value: allValue || merged.top,
    min: min,
    onChange: handleAllChange
  }))) : SIDES.map(({
    key
  }, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: key,
    style: index === SIDES.length - 1 ? _style__WEBPACK_IMPORTED_MODULE_3__.sideRowLast : _style__WEBPACK_IMPORTED_MODULE_3__.sideRow
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BoxIcon, {
    side: key
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
    "aria-label": LABELS[key],
    className: "component-box-control__unit-control",
    style: _style__WEBPACK_IMPORTED_MODULE_3__.unitControl,
    value: merged[key],
    onChange: v => handleSideChange(key, v),
    min: min,
    isResetValueOnUnitChange: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.sliderWrapper
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SideSlider, {
    value: merged[key],
    min: min,
    onChange: v => handleSideChange(key, v)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDimensionsUnitControl);

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/helpers.ts":
/*!****************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/helpers.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllValue: () => (/* binding */ getAllValue),
/* harmony export */   getMaxForUnit: () => (/* binding */ getMaxForUnit),
/* harmony export */   getStepForUnit: () => (/* binding */ getStepForUnit),
/* harmony export */   isMixedValues: () => (/* binding */ isMixedValues),
/* harmony export */   isValuesDefined: () => (/* binding */ isValuesDefined),
/* harmony export */   parseValue: () => (/* binding */ parseValue)
/* harmony export */ });
/** Returns the single value if all 4 sides are equal, otherwise empty string. */
function getAllValue(values) {
  const {
    top,
    right,
    bottom,
    left
  } = values;
  if (top === right && right === bottom && bottom === left) return top || "";
  return "";
}

/** Returns true if any side differs from the others. */
function isMixedValues(values) {
  const {
    top,
    right,
    bottom,
    left
  } = values;
  return !(top === right && right === bottom && bottom === left);
}

/** Returns true if at least one side has a numeric value set. */
function isValuesDefined(values) {
  if (!values) return false;
  return Object.values(values).some(v => !!v && /\d/.test(v));
}

/** Splits a CSS value string (e.g. "16px", "-1.5rem") into its signed numeric part and unit. */
function parseValue(v) {
  if (!v) return {
    num: 0,
    unit: "px"
  };
  const match = v.match(/^(-?[\d.]+)([a-z%]*)$/i);
  if (!match) return {
    num: 0,
    unit: "px"
  };
  return {
    num: parseFloat(match[1]) || 0,
    unit: match[2] || "px"
  };
}

/** Returns the max allowed dimension value for the given CSS unit. */
function getMaxForUnit(unit) {
  switch (unit.toLowerCase()) {
    case "rem":
    case "em":
      return 20;
    case "%":
    case "vw":
    case "vh":
      return 100;
    default:
      return 1000;
  }
}

/** Returns the increment step for the given CSS unit (0.1 for rem/em, 1 otherwise). */
function getStepForUnit(unit) {
  return ["rem", "em"].includes(unit.toLowerCase()) ? 0.1 : 1;
}

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/style.ts":
/*!**************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/style.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   headerActions: () => (/* binding */ headerActions),
/* harmony export */   iconRoot: () => (/* binding */ iconRoot),
/* harmony export */   iconViewbox: () => (/* binding */ iconViewbox),
/* harmony export */   root: () => (/* binding */ root),
/* harmony export */   sideRow: () => (/* binding */ sideRow),
/* harmony export */   sideRowLast: () => (/* binding */ sideRowLast),
/* harmony export */   sliderWrapper: () => (/* binding */ sliderWrapper),
/* harmony export */   stroke: () => (/* binding */ stroke),
/* harmony export */   unitControl: () => (/* binding */ unitControl),
/* harmony export */   useInjectStyles: () => (/* binding */ useInjectStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// ─── Slider pseudo-element CSS ────────────────────────────────────────────────
// Injected directly into document.head to bypass Emotion's CacheProvider
// (which may target the iframed editor canvas on WordPress 6.2+).

const STYLE_TAG_ID = "wcb-dimensions-unit-control-styles";
const CSS = `
.wcb-dimensions-unit-control__range {
	display: block;
	width: 100%;
	height: 4px;
	appearance: none;
	-webkit-appearance: none;
	border-radius: 2px;
	outline: none;
	cursor: pointer;
}
.wcb-dimensions-unit-control__range::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background: #0073aa;
	cursor: pointer;
	margin-top: -5px;
}
.wcb-dimensions-unit-control__range::-moz-range-thumb {
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background: #0073aa;
	border: none;
	cursor: pointer;
}
.wcb-dimensions-unit-control__range::-webkit-slider-runnable-track {
	height: 4px;
	border-radius: 2px;
}
.wcb-dimensions-unit-control__range::-moz-range-track {
	height: 4px;
	border-radius: 2px;
	background: #ddd;
}
`;
function useInjectStyles() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (document.getElementById(STYLE_TAG_ID)) return;
    const tag = document.createElement("style");
    tag.id = STYLE_TAG_ID;
    tag.textContent = CSS;
    document.head.appendChild(tag);
  }, []);
}

// BoxIcon styles ───────────────────────────────────────────────────────────

const iconRoot = {
  boxSizing: "border-box",
  display: "block",
  flex: "0 0 24px",
  width: 24,
  height: 24,
  position: "relative",
  padding: 4
};
const iconViewbox = {
  boxSizing: "border-box",
  display: "block",
  position: "relative",
  width: "100%",
  height: "100%"
};
const baseStroke = {
  boxSizing: "border-box",
  display: "block",
  pointerEvents: "none",
  position: "absolute",
  backgroundColor: "currentColor"
};
function stroke(focused, extra) {
  return {
    ...baseStroke,
    opacity: focused ? 1 : 0.3,
    ...extra
  };
}

// ─── Layout styles ────────────────────────────────────────────────────────────

const root = {
  boxSizing: "border-box",
  width: "100%",
  paddingBottom: 12
};
const header = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 8
};
const headerActions = {
  display: "flex",
  alignItems: "center",
  gap: 4
};
const sideRow = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginBottom: 8
};
const sideRowLast = {
  ...sideRow,
  marginBottom: 0
};
const unitControl = {
  flex: "0 0 110px",
  width: 110
};
const sliderWrapper = {
  flex: 1,
  display: "flex",
  alignItems: "center"
};

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/types.ts":
/*!**************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/types.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_DIMENSION: () => (/* binding */ DEFAULT_DIMENSION),
/* harmony export */   MY_DIMENSIONS_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_CONTROL_DEMO),
/* harmony export */   MY_DIMENSIONS_GAP_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_GAP_CONTROL_DEMO),
/* harmony export */   MY_DIMENSIONS_MARGIN_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_MARGIN_CONTROL_DEMO),
/* harmony export */   MY_DIMENSIONS_NO_GAP_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_NO_GAP_CONTROL_DEMO),
/* harmony export */   MY_DIMENSIONS_NO_GAP_DEMO__EMPTY: () => (/* binding */ MY_DIMENSIONS_NO_GAP_DEMO__EMPTY),
/* harmony export */   MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO),
/* harmony export */   MY_DIMENSIONS_NO_PADDING_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_NO_PADDING_CONTROL_DEMO),
/* harmony export */   MY_DIMENSIONS_PADDING_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_PADDING_CONTROL_DEMO)
/* harmony export */ });
const DEFAULT_DIMENSION = {
  top: "12px",
  left: "12px",
  right: "12px",
  bottom: "12px"
};
const MY_DIMENSIONS_CONTROL_DEMO = {
  colunmGap: {
    Desktop: "1.5rem"
  },
  rowGap: {
    Desktop: "1.5rem"
  },
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  },
  padding: {
    Desktop: {
      top: "1rem",
      left: "1rem",
      right: "1rem",
      bottom: "1rem"
    }
  }
};
const MY_DIMENSIONS_PADDING_CONTROL_DEMO = {
  padding: {
    Desktop: {
      top: "1rem",
      left: "1rem",
      right: "1rem",
      bottom: "1rem"
    }
  }
};
const MY_DIMENSIONS_MARGIN_CONTROL_DEMO = {
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  }
};
const MY_DIMENSIONS_NO_GAP_CONTROL_DEMO = {
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  },
  padding: {
    Desktop: {
      top: "1rem",
      left: "1rem",
      right: "1rem",
      bottom: "1rem"
    }
  }
};
const MY_DIMENSIONS_NO_GAP_DEMO__EMPTY = {
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  },
  padding: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  }
};
const MY_DIMENSIONS_GAP_CONTROL_DEMO = {
  colunmGap: {
    Desktop: "1.5rem"
  },
  rowGap: {
    Desktop: "1.5rem"
  }
};
const MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO = {
  colunmGap: {
    Desktop: "1.5rem"
  },
  rowGap: {
    Desktop: "1.5rem"
  },
  padding: {
    Desktop: {
      top: "1rem",
      left: "1rem",
      right: "1rem",
      bottom: "1rem"
    }
  }
};
const MY_DIMENSIONS_NO_PADDING_CONTROL_DEMO = {
  colunmGap: {
    Desktop: "1.5rem"
  },
  rowGap: {
    Desktop: "1.5rem"
  },
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  }
};

/***/ }),

/***/ "./src/components/controls/MyDisclosure.tsx":
/*!**************************************************!*\
  !*** ./src/components/controls/MyDisclosure.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/MinusIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");






const MyDisclosure = ({
  className = "space-y-3.5",
  label = "Customize",
  children,
  defaultOpen,
  as,
  hasResponsive = false,
  isDisableButton = false
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Disclosure, {
    defaultOpen: defaultOpen,
    as: as
  }, ({
    open
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: open ? "ring-2 ring-offset-1 rounded-lg ring-purple-200 mb-4" : ""
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Disclosure.Button, {
    className: `flex w-full justify-between items-center rounded-lg bg-purple-100 px-3 py-2.5 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 ${open ? "rounded-b-none" : ""}`,
    disabled: isDisableButton
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hasResponsive: hasResponsive,
    className: "MyDisclosure__labelControl"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(label, "boostify-blocks")), open ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__, {
    className: "w-5 h-5 text-purple-900"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-4 h-4 text-purple-900",
    viewBox: "0 0 24 24",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.89 5.05005C12.32 7.81005 14.56 9.92005 17.34 10.2",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 22H21",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Disclosure.Panel, {
    className: "px-3 pt-4 pb-3 text-sm text-gray-600 rounded-b-lg bg-purple-50/20"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, children))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDisclosure);

/***/ }),

/***/ "./src/components/controls/MyLabelControl/MyLabelControl.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/controls/MyLabelControl/MyLabelControl.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyResponsiveToggle_MyResponsiveToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MyResponsiveToggle/MyResponsiveToggle */ "./src/components/controls/MyResponsiveToggle/MyResponsiveToggle.tsx");



const MyLabelControl = ({
  children,
  className = "mb-2",
  help,
  hasResponsive,
  devices
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `components-base-control__label font-medium uppercase text-[11px] ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-control-label flex items-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-control__label"
  }, children), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-control__responsive ml-1.5"
  }, hasResponsive && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyResponsiveToggle_MyResponsiveToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    devices: devices
  }))), !!help && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-help text-xs text-slate-500"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "components-base-control__help"
  }, help)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyLabelControl);

/***/ }),

/***/ "./src/components/controls/MyResponsiveToggle/MyResponsiveToggle.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/controls/MyResponsiveToggle/MyResponsiveToggle.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/menu/menu.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/ComputerDesktopIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/DeviceTabletIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/DevicePhoneMobileIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/ChevronDownIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");






const DEVICE_TYPES = {
  Desktop: "Desktop",
  Tablet: "Tablet",
  Mobile: "Mobile"
};
const MyResponsiveToggle = ({
  className = "",
  devices = Object.values(DEVICE_TYPES)
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_2__["default"])() || "Desktop";
  const handleSetDeviceType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(dv => {
    const targetDevice = DEVICE_TYPES[dv];
    const editorDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)("core/editor");
    const editPostDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)("core/edit-post");
    if (editorDispatch?.setDeviceType) {
      editorDispatch.setDeviceType(targetDevice);
    }
    if (editPostDispatch?.__experimentalSetPreviewDeviceType) {
      editPostDispatch.__experimentalSetPreviewDeviceType(targetDevice);
    }
  }, []);
  const renderDeviceIcon = (dv, className = "h-4 w-4") => {
    switch (dv) {
      case "Desktop":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__, {
          className: className,
          "aria-hidden": "true"
        });
      case "Tablet":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__, {
          className: className,
          "aria-hidden": "true"
        });
      case "Mobile":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__, {
          className: className,
          "aria-hidden": "true"
        });
      default:
        return null;
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu, {
    as: "div",
    className: `wcbMyResponsiveToggle relative inline-block text-left ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Button, {
    className: "wcbMyResponsiveToggle__button inline-flex w-full items-center justify-center rounded-md p-1 focus:outline-none focus-visible:ring-0 transition-colors text-slate-600 border border-slate-200 hover:border-slate-400",
    title: deviceType
  }, renderDeviceIcon(deviceType), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__, {
    className: "w-2.5 h-2.5 ml-1",
    "aria-hidden": "true"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Transition, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Items, {
    className: "wcbMyResponsiveToggle__items absolute z-50 inset-x-0 mt-1 rounded-lg bg-white shadow-lg ring-1 ring-black/10 focus:outline-none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-1 space-y-0.5"
  }, devices.map((item, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
      key: index + item
    }, ({
      active
    }) => {
      const isActive = active || item === deviceType;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: `${isActive ? "bg-sky-50 text-sky-600" : "text-slate-800"} group flex w-full items-center justify-center rounded-md py-1.5`,
        onClick: e => {
          handleSetDeviceType(item);
        },
        title: item
      }, renderDeviceIcon(item));
    });
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyResponsiveToggle);

/***/ }),

/***/ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/components/controls/MySpacingSizesControl/styles.scss");
/* harmony import */ var _SpacingInputControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpacingInputControl */ "./src/components/controls/MySpacingSizesControl/SpacingInputControl.tsx");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");






const MySpacingSizesControl = ({
  className = "",
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin bottom", "boostify-blocks"),
  hasResponsive = true,
  units,
  minCustomValue,
  value = "1rem",
  onChange = () => {},
  customUnitsValueSettings
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `MySpacingSizesControl ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    hasResponsive: hasResponsive
  }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SpacingInputControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: value,
    onChange: onChange,
    minCustomValue: minCustomValue,
    units: units,
    customUnitsValueSettings: customUnitsValueSettings
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MySpacingSizesControl);

/***/ }),

/***/ "./src/components/controls/MySpacingSizesControl/SpacingInputControl.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/controls/MySpacingSizesControl/SpacingInputControl.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MY_CUSTOM_UNITS_VALUE_SETTINGS: () => (/* binding */ MY_CUSTOM_UNITS_VALUE_SETTINGS),
/* harmony export */   MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE: () => (/* binding */ MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyDimensionsControl/MyDimensionsControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx");





const MY_CUSTOM_UNITS_VALUE_SETTINGS = {
  px: {
    max: 1000,
    steps: 1
  },
  "%": {
    max: 100,
    steps: 1
  },
  vw: {
    max: 100,
    steps: 1
  },
  vh: {
    max: 100,
    steps: 1
  },
  em: {
    max: 50,
    steps: 0.1
  },
  rm: {
    max: 50,
    steps: 0.1
  },
  rem: {
    max: 50,
    steps: 0.1
  }
};
const MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE = {
  px: {
    max: 2000,
    steps: 1
  },
  "%": {
    max: 100,
    steps: 1
  },
  vw: {
    max: 100,
    steps: 1
  },
  vh: {
    max: 100,
    steps: 1
  },
  em: {
    max: 100,
    steps: 0.1
  },
  rm: {
    max: 100,
    steps: 0.1
  },
  rem: {
    max: 100,
    steps: 0.1
  }
};
const SpacingInputControl = ({
  value = "10px",
  onChange,
  minCustomValue = 0,
  units = _MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_3__.MY_GAP_UNITS,
  className = "",
  customUnitsValueSettings = MY_CUSTOM_UNITS_VALUE_SETTINGS
}) => {
  var _customUnitsValueSett;
  const selectedUnit = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalParseQuantityAndUnitFromRawValue)(value), [value])[1] || units[0].value;
  const customRangeValue = value && !Number.isNaN(parseFloat(value)) ? parseFloat(value) : 10;
  const handleCustomValueSliderChange = next => {
    const newValue = [next, selectedUnit].join("");
    onChange(newValue);
  };
  const placeholder = value && !Number.isNaN(parseFloat(value)) ? `${parseFloat(value)}` : "";
  const unitSettings = (_customUnitsValueSett = customUnitsValueSettings[selectedUnit]) !== null && _customUnitsValueSett !== void 0 ? _customUnitsValueSett : customUnitsValueSettings.px;
  const rangeMin = minCustomValue < 0 ? Math.max(minCustomValue, -unitSettings.max) : minCustomValue;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${className} flex items-center`,
    style: {
      gap: "8px"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      flex: "1 1 0%",
      minWidth: 0
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: customRangeValue,
    min: rangeMin,
    max: unitSettings.max,
    step: unitSettings.steps
    // @ts-ignore
    ,
    withInputField: false,
    onChange: handleCustomValueSliderChange,
    className: "m-0"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: "102px",
      minWidth: "102px",
      flexShrink: 0
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    onChange: (newSize, ...props) => {
      onChange(newSize);
    },
    placeholder: placeholder,
    value: value,
    units: units,
    min: minCustomValue,
    hideLabelFromVision: true
    // size={"__unstable-large"}
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpacingInputControl);

/***/ }),

/***/ "./src/components/controls/MySpacingSizesControl/styles.scss":
/*!*******************************************************************!*\
  !*** ./src/components/controls/MySpacingSizesControl/styles.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/hooks/useGetDeviceType.ts":
/*!***************************************!*\
  !*** ./src/hooks/useGetDeviceType.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const normalizeDeviceType = val => {
  if (!val) return null;
  const lower = String(val).toLowerCase();
  if (lower === "mobile") return "Mobile";
  if (lower === "tablet") return "Tablet";
  if (lower === "desktop") return "Desktop";
  return null;
};
const useGetDeviceType = () => {
  const {
    deviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const editorSelect = select("core/editor");
    const editPostSelect = select("core/edit-post");
    const rawType = editorSelect?.getDeviceType?.() || editPostSelect?.__experimentalGetPreviewDeviceType?.() || null;
    return {
      deviceType: normalizeDeviceType(rawType)
    };
  }, []);
  return deviceType;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetDeviceType);

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

/***/ "./src/utils/getCssProperyHasResponsive.ts":
/*!*************************************************!*\
  !*** ./src/utils/getCssProperyHasResponsive.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");

function getCssProperyHasResponsive({
  cssProperty
}) {
  const {
    value_Desktop: value_desktop,
    value_Tablet: value_tablet,
    value_Mobile: value_mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_0__["default"])(cssProperty);
  // const value_desktop = cssProperty.Desktop;
  // const value_tablet = cssProperty.Tablet || value_desktop;
  // const value_mobile = cssProperty.Mobile || value_tablet;
  return {
    value_desktop,
    value_tablet,
    value_mobile
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCssProperyHasResponsive);

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
//# sourceMappingURL=src_block-products_GlobalCss_tsx.js.map