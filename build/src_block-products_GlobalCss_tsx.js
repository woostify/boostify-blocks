"use strict";
(globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || []).push([["src_block-products_GlobalCss_tsx"],{

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
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getCssProperyHasResponsive */ "./src/utils/getCssProperyHasResponsive.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base-utils */ "./src/block-products/base-utils.ts");

/* eslint-disable camelcase -- block attributes intentionally use snake_case names */











// TODO: Enable after fix load frontend issue
// import { mergeProductAttrsWithThemeDefaults } from "./WcbThemeDefaults";

const GlobalCss = attrs => {
  // TODO: Enable after fix load frontend issue
  // const mergedAttrs = useMemo(
  // 	() => mergeProductAttrsWithThemeDefaults(attrs),
  // 	[attrs]
  // );
  const {
    uniqueId,
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
    //
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_6__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const LIST_CLASS = `${WRAP_CLASSNAME} .wcb-products__list`;
  const POST_CARD_CLASS = `${WRAP_CLASSNAME} .wcb-products__product`;
  const ADD_TO_CART_BTN_BG = `${WRAP_CLASSNAME} .wcb-products__product-add-to-cart`;
  const ADD_TO_CART_BTN = `${WRAP_CLASSNAME} .wcb-products__product-add-to-cart a`;
  const ADD_TO_CART_BTN_ICON = `${WRAP_CLASSNAME} .wcb-products__product-add-to-cart-icon`;
  const ADD_TO_CART_VIEW_CARD_BTN = `${WRAP_CLASSNAME} .wcb-products__product-add-to-cart a.added_to_cart`;
  const PRODUCT_IMAGE_CLASS = `${WRAP_CLASSNAME} .wcb-products__product-image`;

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
      peekAfter
    } = style_layout !== null && style_layout !== void 0 ? style_layout : {};
    const {
      value_Desktop: numberOfColumn_desktop,
      value_Tablet: numberOfColumn_tablet,
      value_Mobile: numberOfColumn_mobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(numberOfColumn);
    const {
      value_Desktop: peekAfter_desktop,
      value_Tablet: peekAfter_tablet,
      value_Mobile: peekAfter_mobile
    } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(peekAfter);
    const isSnapScrollDesktop = swithToScrollSnapX === "Desktop";
    const isSnapScrollTablet = isSnapScrollDesktop || swithToScrollSnapX === "Tablet";
    const isSnapScrollMobile = isSnapScrollTablet || swithToScrollSnapX === "Mobile";
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
      styles: {
        [`${WRAP_CLASSNAME} .indicators`]: {
          display: isSnapScrollMobile ? "block" : "none",
          [`@media (min-width: ${media_tablet})`]: {
            display: isSnapScrollTablet ? "block" : "none"
          },
          [`@media (min-width: ${media_desktop})`]: {
            display: isSnapScrollDesktop ? "block" : "none"
          }
        },
        [LIST_CLASS]: {
          // ------ setting snap scroll x
          "> div": isSnapScrollMobile ? {
            scrollSnapAlign: "start",
            flexShrink: 0,
            flexBasis: `calc((100% - (${Number(numberOfColumn_mobile) - 1} * ${colunmGap_mobile})) / ${Number(numberOfColumn_mobile)} - ${peekAfter_mobile})`
          } : {},
          overflowX: isSnapScrollMobile ? "auto" : undefined,
          scrollSnapType: isSnapScrollMobile ? "x proximity" : undefined,
          display: isSnapScrollMobile ? "flex" : "grid",
          gridTemplateColumns: isSnapScrollMobile ? undefined : `repeat(${numberOfColumn_mobile}, minmax(0, 1fr))`,
          // ------ end setting snap scroll x
          //
          rowGap: rowGap_mobile !== null && rowGap_mobile !== void 0 ? rowGap_mobile : undefined,
          columnGap: colunmGap_mobile !== null && colunmGap_mobile !== void 0 ? colunmGap_mobile : undefined,
          [`@media (min-width: ${media_tablet})`]: {
            rowGap: rowGap_tablet !== null && rowGap_tablet !== void 0 ? rowGap_tablet : undefined,
            columnGap: colunmGap_tablet !== null && colunmGap_tablet !== void 0 ? colunmGap_tablet : undefined,
            // ------ setting snap scroll x
            "> div": isSnapScrollTablet ? {
              scrollSnapAlign: "start",
              flexShrink: 0,
              flexBasis: `calc((100% - (${Number(numberOfColumn_tablet) - 1} * ${colunmGap_tablet})) / ${Number(numberOfColumn_tablet)} - ${peekAfter_tablet})`
            } : {},
            overflowX: isSnapScrollTablet ? "auto" : undefined,
            scrollSnapType: isSnapScrollTablet ? "x proximity" : undefined,
            display: isSnapScrollTablet ? "flex" : "grid",
            gridTemplateColumns: isSnapScrollTablet ? undefined : `repeat(${numberOfColumn_tablet}, minmax(0, 1fr))`
            // ------ end setting snap scroll x
          },
          [`@media (min-width: ${media_desktop})`]: {
            rowGap: rowGap_desktop,
            columnGap: colunmGap_desktop,
            // ------ setting snap scroll x
            "> div": isSnapScrollDesktop ? {
              scrollSnapAlign: "start",
              flexShrink: 0,
              // Calculate flex-basis to create the peek/overflow effect for the slider.
              flexBasis: `calc((100% - (${Number(numberOfColumn_desktop) - 1} * ${colunmGap_desktop})) / ${Number(numberOfColumn_desktop)} - ${peekAfter_desktop})`
            } : {},
            overflowX: isSnapScrollDesktop ? "auto" : undefined,
            scrollSnapType: isSnapScrollDesktop ? "x proximity" : undefined,
            display: isSnapScrollDesktop ? "flex" : "grid",
            gridTemplateColumns: isSnapScrollDesktop ? undefined : `repeat(${numberOfColumn_desktop}, minmax(0, 1fr))`
            // ------ end setting snap scroll x
          },
          // SALE BADGE positioning
          ...(style_saleBadge?.position === "top-left" ? {
            ".wcb-products__product--onsaleInsideImage .wcb-products__product-salebadge": {
              position: "absolute",
              left: "0.5rem",
              // Tailwind left-2
              top: "0.5rem",
              // Tailwind top-
              zIndex: 10
            }
          } : {
            ".wcb-products__product--onsaleInsideImage .wcb-products__product-salebadge": {
              position: "absolute",
              right: "0.5rem",
              top: "0.5rem",
              zIndex: 10
            }
          }),
          // OUT OF STOCK BADGE positioning
          ...(style_outOfStock?.position === "top-left" ? {
            ".wcb-products__product--onsaleInsideImage .wcb-products__product-outofstock-badge": {
              position: "absolute",
              left: "0.5rem",
              top: "0.5rem",
              zIndex: 10
            }
          } : style_outOfStock?.position === "top-right" ? {
            ".wcb-products__product--onsaleInsideImage .wcb-products__product-outofstock-badge": {
              position: "absolute",
              right: "0.5rem",
              top: "0.5rem",
              zIndex: 10
            }
          } : {
            ".wcb-products__product--onsaleInsideImage .wcb-products__product-outofstock-badge": {
              display: "none"
            }
          })
        }
      }
    });
  };
  const getDivWrapStyles_Pagination = () => {
    const {
      value_mobile: marginTop_mobile,
      value_tablet: marginTop_tablet,
      value_desktop: marginTop_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_pagination?.marginTop
    });
    const {
      mobile_v: marginTop_mobile_new,
      tablet_v: marginTop_tablet_new,
      desktop_v: marginTop_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: marginTop_mobile,
      tablet_v: marginTop_tablet,
      desktop_v: marginTop_desktop
    });
    return {
      [`${WRAP_CLASSNAME} .wcb-products__pagination`]: {
        marginTop: marginTop_mobile_new !== null && marginTop_mobile_new !== void 0 ? marginTop_mobile_new : undefined,
        justifyContent: style_pagination?.justifyContent,
        [`.page-numbers`]: {
          color: style_pagination?.mainStyle?.Normal?.color,
          backgroundColor: style_pagination?.mainStyle?.Normal?.backgroundColor
        },
        [`.page-numbers.current`]: {
          color: style_pagination?.mainStyle?.Active?.color,
          backgroundColor: style_pagination?.mainStyle?.Active?.backgroundColor
        },
        [`@media (min-width: ${media_tablet})`]: marginTop_tablet_new ? {
          marginTop: marginTop_tablet_new
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: marginTop_desktop_new ? {
          marginTop: marginTop_desktop_new
        } : undefined
      }
    };
  };
  const getDivWrapStyles_Rating = () => {
    const {
      value_mobile: marginTop_mobile,
      value_tablet: marginTop_tablet,
      value_desktop: marginTop_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_pagination?.marginTop
    });
    const {
      mobile_v: marginTop_mobile_new,
      tablet_v: marginTop_tablet_new,
      desktop_v: marginTop_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: marginTop_mobile,
      tablet_v: marginTop_tablet,
      desktop_v: marginTop_desktop
    });
    return {
      [`${WRAP_CLASSNAME} .wcb-products__pagination`]: {
        marginTop: marginTop_mobile_new !== null && marginTop_mobile_new !== void 0 ? marginTop_mobile_new : undefined,
        justifyContent: style_pagination?.justifyContent,
        [`.page-numbers`]: {
          color: style_pagination?.mainStyle?.Normal?.color,
          backgroundColor: style_pagination?.mainStyle?.Normal?.backgroundColor
        },
        [`.page-numbers.current`]: {
          color: style_pagination?.mainStyle?.Active?.color,
          backgroundColor: style_pagination?.mainStyle?.Active?.backgroundColor
        },
        [`@media (min-width: ${media_tablet})`]: marginTop_tablet_new ? {
          marginTop: marginTop_tablet_new
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: marginTop_desktop_new ? {
          marginTop: marginTop_desktop_new
        } : undefined
      }
    };
  };
  //

  //
  const getPostCardWrapStyles = () => {
    var _ref;
    const {
      value_mobile: titleMarginBottom_mobile,
      value_tablet: titleMarginBottom_tablet,
      value_desktop: titleMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_title?.marginBottom
    });
    const {
      value_mobile: saleBadgeMarginBottom_mobile,
      value_tablet: saleBadgeMarginBottom_tablet,
      value_desktop: saleBadgeMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_saleBadge?.marginBottom
    });
    const {
      value_mobile: outofstockBadgeMarginBottom_mobile,
      value_tablet: outofstockBadgeMarginBottom_tablet,
      value_desktop: outofstockBadgeMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_outOfStock?.marginBottom
    });
    const {
      value_mobile: featuredImageMarginBottom_mobile,
      value_tablet: featuredImageMarginBottom_tablet,
      value_desktop: featuredImageMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_featuredImage?.marginBottom
    });
    const {
      value_mobile: priceMarginBottom_mobile,
      value_tablet: priceMarginBottom_tablet,
      value_desktop: priceMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_price?.marginBottom
    });
    const {
      value_mobile: ratingMarginBottom_mobile,
      value_tablet: ratingMarginBottom_tablet,
      value_desktop: ratingMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_rating?.marginBottom
    });
    const {
      value_mobile: categoryMarginBottom_mobile,
      value_tablet: categoryMarginBottom_tablet,
      value_desktop: categoryMarginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_category?.marginBottom
    });

    //
    const {
      mobile_v: titleMarginBottom_mobile_new,
      tablet_v: titleMarginBottom_tablet_new,
      desktop_v: titleMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: titleMarginBottom_mobile,
      tablet_v: titleMarginBottom_tablet,
      desktop_v: titleMarginBottom_desktop
    });
    const {
      mobile_v: saleBadgeMarginBottom_mobile_new,
      tablet_v: saleBadgeMarginBottom_tablet_new,
      desktop_v: saleBadgeMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: saleBadgeMarginBottom_mobile,
      tablet_v: saleBadgeMarginBottom_tablet,
      desktop_v: saleBadgeMarginBottom_desktop
    });
    const {
      mobile_v: outofstockBadgeMarginBottom_mobile_new,
      tablet_v: outofstockBadgeMarginBottom_tablet_new,
      desktop_v: outofstockBadgeMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: outofstockBadgeMarginBottom_mobile,
      tablet_v: outofstockBadgeMarginBottom_tablet,
      desktop_v: outofstockBadgeMarginBottom_desktop
    });
    (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: featuredImageMarginBottom_mobile,
      tablet_v: featuredImageMarginBottom_tablet,
      desktop_v: featuredImageMarginBottom_desktop
    });
    const {
      mobile_v: priceMarginBottom_mobile_new,
      tablet_v: priceMarginBottom_tablet_new,
      desktop_v: priceMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: priceMarginBottom_mobile,
      tablet_v: priceMarginBottom_tablet,
      desktop_v: priceMarginBottom_desktop
    });
    const {
      mobile_v: ratingMarginBottom_mobile_new,
      tablet_v: ratingMarginBottom_tablet_new,
      desktop_v: ratingMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: ratingMarginBottom_mobile,
      tablet_v: ratingMarginBottom_tablet,
      desktop_v: ratingMarginBottom_desktop
    });
    const {
      mobile_v: categoryMarginBottom_mobile_new,
      tablet_v: categoryMarginBottom_tablet_new,
      desktop_v: categoryMarginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: categoryMarginBottom_mobile,
      tablet_v: categoryMarginBottom_tablet,
      desktop_v: categoryMarginBottom_desktop
    });
    //
    return [{
      [POST_CARD_CLASS]: {
        fontSize: "16px",
        height: "auto",
        display: "inline-block",
        position: "relative",
        overflow: "hidden",
        // Style Add to cart button - position: top right - icon
        ".wcb-products__product--topRight": {
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 3
        },
        ".wcb-products__product--quickViewBottomImage--item": {
          ...(style_quickViewBtn?.position === "bottom-image" && style_quickViewBtn?.woostify_pro_active && style_quickViewBtn?.enabled ? {
            position: "absolute",
            left: 0,
            bottom: "10px",
            height: "0px",
            width: "100%",
            opacity: 0,
            visibility: "hidden",
            transition: "height 0.3s ease, opacity 0.2s ease",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: style_quickViewBtn?.bg_color,
            color: style_quickViewBtn?.text_color
          } : {
            display: style_quickViewBtn?.position === "center-image" ? "none !important" : "unset",
            position: "absolute",
            top: "-10rem",
            right: "0rem"
          })
        },
        ":hover": {
          ".wcb-products__product--quickViewBottomImage--item": {
            ...(style_quickViewBtn?.position === "bottom-image" && style_quickViewBtn?.woostify_pro_active && style_quickViewBtn?.enabled ? {
              opacity: 1,
              visibility: "visible",
              height: "40px"
            } : {
              display: style_quickViewBtn?.woostify_pro_active && style_quickViewBtn?.enabled ? "flex !important" : "none !important",
              alignItems: "center !important",
              justifyContent: "center !important",
              padding:
              // style_quickViewBtn?.position === "bottom-image" ? "0.5rem !important" : 
              style_quickViewBtn?.position === "center-image" ? "0.5rem 1.4rem !important" : "auto",
              // transition: "transform 0.2s ease-in-out",
              position: "absolute",
              bottom:
              // style_quickViewBtn?.position === "bottom-image" ? "10px !important" :
              style_quickViewBtn?.position === "center-image" && general_addToCartBtn?.position === "icon" ? "10rem" : style_quickViewBtn?.position === "center-image" && general_addToCartBtn?.position !== "icon" ? "6rem" : "auto",
              top: general_addToCartBtn?.position === "icon" && style_wishlistBtn?.position === "top-right" && style_quickViewBtn?.position === "top-right" || general_addToCartBtn?.position === "icon" && style_wishlistBtn?.position !== "top-right" && style_quickViewBtn?.position === "top-right" ? "0rem" : general_addToCartBtn?.position !== "icon" && style_wishlistBtn?.position === "top-right" && style_quickViewBtn?.position === "top-right" || general_addToCartBtn?.position !== "icon" && style_wishlistBtn?.position !== "top-right" && style_quickViewBtn?.position === "top-right" ? "-2.5rem" : "auto",
              right:
              // style_quickViewBtn?.position === "bottom-image" ? "0 !important" : 
              style_quickViewBtn?.position === "center-image" ? "50%" : style_quickViewBtn?.position === "top-right" ? "-0.1rem" : "auto",
              width:
              // style_quickViewBtn?.position === "bottom-image" ? "100%" : 
              style_quickViewBtn?.position === "center-image" ? "auto" : style_quickViewBtn?.position === "top-right" ? "2.6rem" : "unset",
              transform: style_quickViewBtn?.position === "center-image" ? "translateX(50%)" : style_quickViewBtn?.position === "top-right" ? "translateY(2.5rem)" : "none",
              height: style_quickViewBtn?.position === "center-image" ? "12%" : style_quickViewBtn?.position === "top-right" ? "2.48rem" : "auto",
              borderRadius: style_quickViewBtn?.position === "top-right" || style_quickViewBtn?.position === "center-image" ? `${style_quickViewBtn?.border_radius}px` : "0px",
              zIndex: 10,
              transition: "transform 0.3s ease, opacity 0.3s ease"
            }),
            gap: "6px !important",
            color: style_quickViewBtn?.text_color,
            backgroundColor: style_quickViewBtn?.bg_color,
            ".wcb-products__product--quickViewBottomImage__text": {
              color: "inherit"
            },
            "svg": {
              color: "inherit"
            },
            ":hover": {
              color: style_quickViewBtn?.hover_text_color ? style_quickViewBtn?.hover_text_color : "#fff",
              backgroundColor: style_quickViewBtn?.hover_bg_color ? style_quickViewBtn?.hover_bg_color : "#474747",
              ".wcb-products__product--quickViewBottomImage__text": {
                color: "inherit"
              },
              "svg": {
                color: "inherit"
              }
            },
            "border": "none"
          }
        },
        "&.wcb-products__product--btnIconAddToCart .added_to_cart": {
          position: "relative",
          top: "-2rem",
          right: "-84px",
          transform: "translateY(2.5rem)",
          transition: "transform 0.2s ease-in-out",
          zIndex: 2,
          marginTop: "0px !important",
          background: "#3a3a3a"
        },
        "&.wcb-products__product--btnIconAddToCart:hover": {
          ".added_to_cart span:not(.woostify-svg-icon)": {
            display: "none"
          },
          ".added_to_cart .woostify-svg-icon": {
            position: "relative",
            top: "-7px",
            right: "9.6px",
            transform: "translateY(2.5rem)",
            transition: "transform 0.2s ease-in-out",
            width: "2.5rem",
            height: "2.5rem",
            alignItems: "center",
            justifyContent: "center",
            background: "#3a3a3a"
          },
          ".added_to_cart .woostify-svg-icon svg": {
            color: "#ffffff"
          },
          ".wcb-products__product--btnIconAddToCart--item": {
            position: "relative",
            top: "-2.5rem",
            right: 0,
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor ? style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor : "#ffffff",
            // transformOrigin: "top right",
            // transition: "transform 0.2s ease, box-shadow 0.2s",
            /* ===  Animation === */
            transform: "translateY(2.5rem)",
            transition: "transform 0.2s ease-in-out",
            zIndex: 2,
            marginTop: "0px !important",
            borderRadius: (_ref = style_addToCardBtn?.border?.radius?.Desktop) !== null && _ref !== void 0 ? _ref : "0px",
            "&::after": {
              content: '""',
              width: "1.2rem",
              height: "1.2rem",
              backgroundImage: `${(0,_base_utils__WEBPACK_IMPORTED_MODULE_9__.svgToDataUrl)(`${(0,_base_utils__WEBPACK_IMPORTED_MODULE_9__.SHOPPING_CART_SVG)(style_addToCardBtn?.colorAndBackgroundColor?.Normal?.color)}`)} !important`,
              margin: "auto",
              transformOrigin: "top right",
              zIndex: 1,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              pointerEvents: "none"
            }
          },
          ".wcb-products__product--btnIconAddToCart--item.added": {
            display: "none",
            content: "none"
          },
          ".wcb-products__product--btnIconAddToCart--item.added::after": {
            display: "none",
            content: "none"
          },
          ".wcb-products__product--btnIconAddToCart--item:hover": {
            background: style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor ? style_addToCardBtn?.colorAndBackgroundColor?.Hover?.backgroundColor : "#474747",
            marginTop: "0px !important"
          },
          ".wcb-products__product--btnIconAddToCart--item:hover::after": {
            content: '""',
            width: "1.2rem",
            height: "1.2rem",
            backgroundImage: `${(0,_base_utils__WEBPACK_IMPORTED_MODULE_9__.svgToDataUrl)((0,_base_utils__WEBPACK_IMPORTED_MODULE_9__.SHOPPING_CART_SVG)(style_addToCardBtn?.colorAndBackgroundColor?.Hover?.color))} !important`,
            margin: "auto",
            zIndex: 1,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            pointerEvents: "none"
          },
          // Style loading display is none for top right icon add to cart button
          ".add_to_cart_button--loading.wcb-products__product--btnIconAddToCart--item:hover": {
            background: style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor ? style_addToCardBtn?.colorAndBackgroundColor?.Hover?.backgroundColor : "#474747",
            marginTop: "0px !important",
            "&::after": {
              display: "none"
            }
          }
        },
        "&.wcb-products__product--wishlistTopRight:hover": {
          ".wcb-products__product--wishlistTopRight--item": {
            position: general_addToCartBtn?.position === "icon" && style_wishlistBtn?.position === "top-right" ? "absolute" : "relative",
            top: general_addToCartBtn?.position === "icon" && style_wishlistBtn?.position === "top-right" && style_quickViewBtn?.position !== "top-right" ? "0" : style_quickViewBtn?.woostify_pro_active && style_quickViewBtn?.enabled && general_addToCartBtn?.position === "icon" && style_wishlistBtn?.position === "top-right" && style_quickViewBtn?.position === "top-right" ? "2.48rem" : (!style_quickViewBtn?.woostify_pro_active || !style_quickViewBtn?.enabled) && general_addToCartBtn?.position === "icon" && style_wishlistBtn?.position === "top-right" && style_quickViewBtn?.position === "top-right" ? "0" : style_quickViewBtn?.woostify_pro_active && style_quickViewBtn?.enabled && general_addToCartBtn?.position !== "icon" && style_wishlistBtn?.position === "top-right" && style_quickViewBtn?.position === "top-right" ? "0" : "-2.5rem",
            right: 0,
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            textDecoration: "none",
            // transformOrigin: "top bottom",
            // transition: "transform 2s ease",
            /* ===  Animation === */
            transform: "translateY(2.5rem)",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            zIndex: 2,
            border: "none",
            "&::before": {
              content: '"\\e909"',
              //TODO: content: '"\\e908"',
              color: "#000",
              margin: "auto",
              position: "relative",
              zIndex: 1,
              display: "inline-block",
              fontFamily: "tinvwl-webfont !important",
              speak: "none",
              fontStyle: "normal",
              fontWeight: 400,
              fontVariant: "normal",
              textTransform: "none",
              lineHeight: 1,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              fontSize: "20px",
              verticalAlign: "sub"
            },
            "&.is-in-wishlist::before": {
              content: '"\\e908"',
              color: "#000"
            },
            "&.tinvwl-product-in-list::before": {
              color: "#ffffff"
            }
          },
          ".wcb-products__product--wishlistTopRight--item:hover": {
            color: "#ffffff",
            background: "#474747",
            "&::before": {
              content: '"\\e909"',
              //TODO: content: '"\\e908"',
              color: "#ffffff",
              margin: "auto",
              position: "relative",
              zIndex: 1,
              display: "inline-block",
              fontFamily: "tinvwl-webfont !important",
              speak: "none",
              fontStyle: "normal",
              fontWeight: 400,
              fontVariant: "normal",
              textTransform: "none",
              lineHeight: 1,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              fontSize: "20px",
              verticalAlign: "sub"
            },
            "&.is-in-wishlist::before": {
              content: '"\\e908"',
              color: "#ffffff"
            }
          }
        }
      }
    }, {
      [POST_CARD_CLASS]: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: !style_layout?.isEqualHeight ? "max-content" : undefined,
        textAlign: style_layout?.textAlignment,
        backgroundColor: style_layout?.backgroundColor,
        ".wcb-products__price-button-wrapper": {
          // Add element quantity
          height: general_addToCartBtn?.position === "bottom visible" ? "auto" : general_addToCartBtn?.isShowQuantity ? "84px" : "50px",
          lineHeight: general_addToCartBtn?.position === "bottom visible" ? "normal" : "36px",
          overflow: "hidden"
        },
        // Style layout bottom add to cart button
        ".wcb-products__product-style-hidden-btn-add-to-cart": {
          display: general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === "inside image" ? "none !important" : "unset",
          alignItems: "center"
        },
        ".wcb-products__add-to-cart-icon, .wcb-products__add-to-cart-label": {
          display: general_addToCartBtn?.position === "icon" ? "none" : "block",
          // opacity: (general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon') ? 0 : "unset",
          transform: general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon' ? "translateY(0px)" : "unset",
          transition: general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon' ? "all 0.3s ease-in-out" : "unset"
        },
        ".wcb-products__add-to-cart-icon": {
          display: general_addToCartBtn?.isShowIcon === false ? "none !important" : undefined
        },
        ".wcb-products__product-price": {
          // opacity: (general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon') ? 1 : "unset",
          transform: general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon' ? "translateY(0px)" : "unset",
          transition: general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon' ? "all 0.3s ease-in-out" : "unset",
          marginBottom: priceMarginBottom_mobile_new !== null && priceMarginBottom_mobile_new !== void 0 ? priceMarginBottom_mobile_new : undefined,
          color: style_price?.textColor
        },
        ".added_to_cart": {
          transform: general_addToCartBtn?.position === "bottom" ? "translateY(92px)" : "unset",
          opacity: general_addToCartBtn?.position === "bottom" ? 0 : "unset",
          transition: general_addToCartBtn?.position === "bottom" ? "all 0.3s ease-in-out" : "unset"
        },
        ":hover": {
          ".wcb-products__product-price": {
            // opacity: general_addToCartBtn?.position === "bottom" ? 0 : "unset",
            // Add element quantity
            transform: general_addToCartBtn?.position === "bottom" ? `translateY(${general_addToCartBtn?.isShowQuantity ? -44 : -30}px)` : "unset",
            transition: general_addToCartBtn?.position === "bottom" ? "all 0.3s ease-in-out" : "unset"
          },
          //TODO: handle style in edit page
          ".wcb-products__product-add-to-cart": {
            backgroundColor: general_addToCartBtn?.position === "bottom" ? "#fff" : "inherit",
            "span": {
              color: style_addToCardBtn?.colorAndBackgroundColor?.Normal?.color
            },
            ".wcb-products__add-to-cart-icon, .wcb-products__add-to-cart-label": {
              // display: general_addToCartBtn?.position === "icon" ? "none" : "block",
              transform: general_addToCartBtn?.position === "bottom" ? "translateY(-60px)" : "unset",
              opacity: general_addToCartBtn?.position === "bottom" ? 1 : general_addToCartBtn?.position === "icon" ? 0 : "unset",
              transition: general_addToCartBtn?.position === "bottom" ? "all 0.3s ease-in-out" : "unset"
              // clipPath: general_addToCartBtn?.position === "bottom" ? "inset(0 0 0 0)" : general_addToCartBtn?.position === "icon" ? "inset(100% 0 0 0)" : "unset",
            },
            ".added_to_cart": {
              transform: general_addToCartBtn?.position === "bottom" ? "translateY(60px)" : "unset",
              opacity: general_addToCartBtn?.position === "bottom" ? 1 : "unset",
              transition: general_addToCartBtn?.position === "bottom" ? "all 0.3s ease-in-out" : "unset"
            }
          },
          ".wcb-products__product-add-to-cart .add_to_cart_button--loading": {
            ".wcb-products__add-to-cart-icon": {
              display: "none !important"
            }
          },
          ".wcb-products__product-add-to-cart:hover": {
            ".add_to_cart_button span": {
              color: style_addToCardBtn?.colorAndBackgroundColor?.Hover?.color
            },
            ".wcb-products__add-to-cart-icon svg path": {
              fill: `${style_addToCardBtn?.colorAndBackgroundColor?.Hover?.color} !important`
            }
          },
          ".wcb-products__add-to-cart-icon svg path": {
            fill: `${style_addToCardBtn?.colorAndBackgroundColor?.Normal?.color} !important`
          }
        },
        // ".wcb-products__product-image":
        // ".wcb-products__product-image-link":wcb-add-to-cart-icon-113
        // 	featuredImageMarginBottom_mobile_new ||
        // 	featuredImageMarginBottom_tablet_new ||
        // 	featuredImageMarginBottom_desktop_new
        // 		? {
        // 				marginBottom: featuredImageMarginBottom_mobile_new,
        // 				[`@media (min-width: ${media_tablet})`]:
        // 					featuredImageMarginBottom_tablet_new
        // 						? {
        // 								marginBottom: featuredImageMarginBottom_tablet_new,
        // 						  }
        // 						: undefined,
        // 				[`@media (min-width: ${media_desktop})`]:
        // 					featuredImageMarginBottom_desktop_new
        // 						? {
        // 								marginBottom: featuredImageMarginBottom_desktop_new,
        // 						  }
        // 						: undefined,
        // 		  }
        // 		: undefined,

        ".wcb-products__product-title": {
          marginBottom: titleMarginBottom_mobile_new !== null && titleMarginBottom_mobile_new !== void 0 ? titleMarginBottom_mobile_new : undefined,
          color: style_title?.textColor
        },
        ".wcb-products__product-categories": {
          marginBottom: categoryMarginBottom_mobile_new !== null && categoryMarginBottom_mobile_new !== void 0 ? categoryMarginBottom_mobile_new : undefined,
          color: style_category?.textColor,
          a: {
            color: style_category?.textColor
          }
        },
        ".wcb-products__product-salebadge": {
          marginBottom: saleBadgeMarginBottom_mobile_new !== null && saleBadgeMarginBottom_mobile_new !== void 0 ? saleBadgeMarginBottom_mobile_new : undefined,
          ".wcb-products__product-onsale": {
            color: style_saleBadge?.textColor,
            backgroundColor: style_saleBadge?.backgroundColor
          }
        },
        ".wcb-products__product-outofstock-badge": {
          marginBottom: outofstockBadgeMarginBottom_mobile_new !== null && outofstockBadgeMarginBottom_mobile_new !== void 0 ? outofstockBadgeMarginBottom_mobile_new : undefined,
          ".wcb-products__product-on-outofstock": {
            color: style_outOfStock?.textColor,
            backgroundColor: style_outOfStock?.backgroundColor
          }
        },
        // Alignment for the rating stars row.
        // Moved from PHP inline style to CSS class to prevent inline override.
        ".wcb-products__product-rating-wrap": {
          justifyContent: style_layout?.textAlignment === "left" ? "flex-start" : style_layout?.textAlignment === "right" ? "flex-end" : "center"
        },
        ".wcb-products__product-rating": {
          marginBottom: ratingMarginBottom_mobile_new !== null && ratingMarginBottom_mobile_new !== void 0 ? ratingMarginBottom_mobile_new : undefined,
          color: style_rating?.color
        },
        // Alignment for the quantity counter wrapper.
        // Moved from PHP inline style to CSS class to prevent inline override.
        ".wcb-products__quantity-add-to-cart": {
          alignItems: style_layout?.textAlignment === "left" ? "flex-start" : style_layout?.textAlignment === "right" ? "flex-end" : "center"
        },
        [`@media (min-width: ${media_tablet})`]: titleMarginBottom_tablet_new || saleBadgeMarginBottom_tablet_new || priceMarginBottom_tablet_new || ratingMarginBottom_tablet_new || outofstockBadgeMarginBottom_tablet_new ? {
          ".wcb-products__product-title": titleMarginBottom_tablet_new ? {
            marginBottom: titleMarginBottom_tablet_new
          } : undefined,
          ".wcb-products__product-categories": categoryMarginBottom_tablet_new ? {
            marginBottom: categoryMarginBottom_tablet_new
          } : undefined,
          ".wcb-products__product-salebadge": saleBadgeMarginBottom_tablet_new ? {
            marginBottom: saleBadgeMarginBottom_tablet_new
          } : undefined,
          ".wcb-products__product-outofstock-badge": outofstockBadgeMarginBottom_tablet_new ? {
            marginBottom: outofstockBadgeMarginBottom_tablet_new
          } : undefined,
          ".wcb-products__product-price": priceMarginBottom_tablet_new ? {
            marginBottom: priceMarginBottom_tablet_new
          } : undefined,
          ".wcb-products__product-rating": ratingMarginBottom_tablet_new ? {
            marginBottom: ratingMarginBottom_tablet_new
          } : undefined
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: titleMarginBottom_desktop_new || saleBadgeMarginBottom_desktop_new || priceMarginBottom_desktop_new || ratingMarginBottom_desktop_new || outofstockBadgeMarginBottom_desktop_new ? {
          ".wcb-products__product-title": titleMarginBottom_desktop_new ? {
            marginBottom: titleMarginBottom_desktop_new
          } : undefined,
          ".wcb-products__product-categories": categoryMarginBottom_desktop_new ? {
            marginBottom: categoryMarginBottom_desktop_new
          } : undefined,
          ".wcb-products__product-salebadge": saleBadgeMarginBottom_desktop_new ? {
            marginBottom: saleBadgeMarginBottom_desktop_new
          } : undefined,
          ".wcb-products__product-outofstock-badge": outofstockBadgeMarginBottom_desktop_new ? {
            marginBottom: outofstockBadgeMarginBottom_desktop_new
          } : undefined,
          ".wcb-products__product-price": priceMarginBottom_desktop_new ? {
            marginBottom: priceMarginBottom_desktop_new
          } : undefined,
          ".wcb-products__product-rating": ratingMarginBottom_desktop_new ? {
            marginBottom: ratingMarginBottom_desktop_new
          } : undefined
        } : undefined
      }
    }, (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      // className: `${POST_CARD_CLASS} .wcb-products__product-image`,
      className: `${WRAP_CLASSNAME} .wcb-products__product-image-link`,
      border: style_featuredImage?.border,
      isWithRadius: true
    })];
  };
  const getPostCardStyles_AddToCart = position => {
    var _style_addToCardBtn$c, _style_addToCardBtn$c2;
    const {
      backgroundColor,
      color
    } = (_style_addToCardBtn$c = style_addToCardBtn?.colorAndBackgroundColor?.Normal) !== null && _style_addToCardBtn$c !== void 0 ? _style_addToCardBtn$c : {};
    const {
      backgroundColor: backgroundColor_h,
      color: color_h
    } = (_style_addToCardBtn$c2 = style_addToCardBtn?.colorAndBackgroundColor?.Hover) !== null && _style_addToCardBtn$c2 !== void 0 ? _style_addToCardBtn$c2 : {};
    const {
      value_mobile: marginBottom_mobile,
      value_tablet: marginBottom_tablet,
      value_desktop: marginBottom_desktop
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_3__["default"])({
      cssProperty: style_addToCardBtn?.marginBottom || {
        Desktop: "1rem"
      }
    });

    //
    const {
      mobile_v: marginBottom_mobile_new,
      tablet_v: marginBottom_tablet_new,
      desktop_v: marginBottom_desktop_new
    } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_8__["default"])({
      mobile_v: marginBottom_mobile,
      tablet_v: marginBottom_tablet,
      desktop_v: marginBottom_desktop
    });
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
        display: "flex",
        flexDirection: "column",
        // Use textAlignment from layout settings instead of hardcoded "center",
        // so the button respects the user's alignment choice.
        alignItems: textAlignToAlignItems(style_layout?.textAlignment),
        justifyContent: "center",
        ":hover span": {
          color: color_h ? color_h : "white"
        }
      },
      [ADD_TO_CART_BTN]: {
        display: position === "icon" || position === "bottom" ? "none" : "block",
        color,
        backgroundColor: position === "bottom visible" || position === "inside image" ? backgroundColor : "#fff",
        marginBottom: marginBottom_mobile_new !== null && marginBottom_mobile_new !== void 0 ? marginBottom_mobile_new : undefined,
        ":hover": {
          color: color_h ? `${color_h} !important` : undefined,
          backgroundColor: position === "bottom visible" || position === "inside image" || position === "icon" ? backgroundColor_h : "#fff !important"
        },
        [`@media (min-width: ${media_tablet})`]: marginBottom_tablet_new ? {
          marginBottom: marginBottom_tablet_new
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: marginBottom_desktop_new ? {
          marginBottom: marginBottom_desktop_new
        } : undefined
        // textTransform: "uppercase",
        // fontWeight: 600,
      },
      // Style layout 2 - Add to cart button at bottom
      [ADD_TO_CART_VIEW_CARD_BTN]: {
        position: position === "bottom" ? "relative" : "unset",
        top: position === "bottom" ? "-112px !important" : "unset",
        backgroundColor: position === "bottom" ? "unset" : "#1346AF !important",
        color: position === "bottom" ? "#2b2b2b !important" : "#FFFFFF !important",
        borderRadius: "20px !important",
        padding: "4px !important",
        width: "9rem !important",
        ":hover": {
          backgroundColor: position === "bottom" ? "unset" : "#3a3a3a !important",
          color: position === "bottom" ? "#1346AF !important" : "#FFFFFF !important",
          borderRadius: "20px !important",
          padding: "4px !important",
          "svg path": {
            fill: position === "bottom" ? "#1346AF !important" : "#FFFFFF !important"
          }
        }
      },
      [`${ADD_TO_CART_BTN}.added`]: {
        display: "none"
      },
      [ADD_TO_CART_BTN_ICON]: {
        color,
        backgroundColor,
        marginBottom: marginBottom_mobile_new !== null && marginBottom_mobile_new !== void 0 ? marginBottom_mobile_new : undefined,
        ":hover": {
          color: color_h,
          backgroundColor: backgroundColor_h
        },
        [`@media (min-width: ${media_tablet})`]: marginBottom_tablet_new ? {
          marginBottom: marginBottom_tablet_new
        } : undefined,
        [`@media (min-width: ${media_desktop})`]: marginBottom_desktop_new ? {
          marginBottom: marginBottom_desktop_new
        } : undefined
      }
    };
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderDivListWrapStyle(), general_content?.isShowTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-title",
      typography: style_title?.typography
    })
  }), general_content?.isShowCategory && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-categories",
      typography: style_category?.typography
    })
  }), general_content?.isShowRating && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles_Rating()
  }), general_content?.isShowPrice && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-price",
      typography: style_price?.typography
    })
  }), general_content?.isShowSaleBadge && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-onsale",
      typography: style_saleBadge?.typography
    })
  }), general_content?.isShowOutOfStock && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME + " .wcb-products__product-on-outofstock",
      typography: style_outOfStock?.typography
    })
  }), general_pagination?.isShowPagination ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getDivWrapStyles_Pagination()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-products__pagination .page-numbers`,
      border: style_pagination?.mainStyle?.Normal?.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-products__pagination .page-numbers.current`,
      border: style_pagination?.mainStyle?.Active?.border,
      isWithRadius: true
    })
  })) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getPostCardWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: POST_CARD_CLASS,
      padding: style_layout?.padding
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${POST_CARD_CLASS}`,
      border: style_border,
      isWithRadius: true
    })
  }), general_addToCartBtn?.isShowButton ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === "bottom visible" || general_addToCartBtn?.position === "inside image" || general_addToCartBtn?.position === "icon" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: getPostCardStyles_AddToCart(general_addToCartBtn?.position)
  }) : null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: ADD_TO_CART_BTN,
      typography: style_addToCardBtn?.typography
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: ADD_TO_CART_BTN,
      border: style_addToCardBtn?.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: ADD_TO_CART_BTN,
      padding: style_addToCardBtn?.padding
    })
  })) : null, general_featuredImage?.hoverType !== "none" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: {
      [`${PRODUCT_IMAGE_CLASS}`]: {
        ":hover": {
          transition: `all 0.3s ease-in-out`
        }
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: WRAP_CLASSNAME,
      margin: style_dimension?.margin,
      padding: style_dimension?.padding
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_10__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME,
      defaultDisplay: "block"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-block-products-uniqueId": uniqueId
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(GlobalCss));

/***/ }),

/***/ "./src/block-products/base-utils.ts":
/*!******************************************!*\
  !*** ./src/block-products/base-utils.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_PRODUCT_LIST_LAYOUT: () => (/* binding */ DEFAULT_PRODUCT_LIST_LAYOUT),
/* harmony export */   SHOPPING_CART_SVG: () => (/* binding */ SHOPPING_CART_SVG),
/* harmony export */   getProductLayoutConfig: () => (/* binding */ getProductLayoutConfig),
/* harmony export */   svgToDataUrl: () => (/* binding */ svgToDataUrl)
/* harmony export */ });
/**
 * The default layout built from the default template.
 */
const DEFAULT_PRODUCT_LIST_LAYOUT = [["core/paragraph"], ["core/heading"], ["core/buttons"]
//
// ['core/paragraph', { imageSizing: 'cropped' }],
// [ 'woocommerce/product-title' ],
// [ 'woocommerce/product-price' ],
// [ 'woocommerce/product-rating' ],
// [ 'woocommerce/product-button' ],
];

/**
 * Get product layout config from innerBlocks
 * 
 * @param innerBlocks inner blocks of the products block
 * @returns Inner blocks config array
 */
const getProductLayoutConfig = innerBlocks => {
  if (!innerBlocks || innerBlocks.length === 0) {
    return [];
  }
  return innerBlocks.map(block => {
    return [block.name, {
      ...block.attributes,
      product: undefined,
      children: block.innerBlocks.length > 0 ? getProductLayoutConfig(block.innerBlocks) : []
    }];
  });
};

/**
 * Returns the shopping cart SVG with a specified color.
 *
 * @param color The fill color for the SVG.
 * @returns The SVG string with the specified color.
 */
const SHOPPING_CART_SVG = color => {
  return `<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" width="17" height="17" viewBox="0 0 17 17" id="svg50" sodipodi:docname="shopping-cart-2.svg" inkscape:version="1.0.2-2 (e86c870879, 2021-01-15)">
				<metadata id="metadata56">
					<rdf:rdf>
					<cc:work rdf:about="">
						<dc:format>image/svg+xml</dc:format>
						<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
						<dc:title></dc:title>
					</cc:work>
					</rdf:rdf>
				</metadata>
				<defs id="defs54"></defs>
				<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="2400" inkscape:window-height="1271" id="namedview52" showgrid="false" inkscape:zoom="48.823529" inkscape:cx="8.5" inkscape:cy="8.5" inkscape:window-x="2391" inkscape:window-y="-9" inkscape:window-maximized="1" inkscape:current-layer="svg50"></sodipodi:namedview>
				<g id="g46" transform="matrix(-1,0,0,1,16.926,0)"></g>
				<path d="m 14.176,12.5 c 0.965,0 1.75,0.785 1.75,1.75 0,0.965 -0.785,1.75 -1.75,1.75 -0.965,0 -1.75,-0.785 -1.75,-1.75 0,-0.965 0.785,-1.75 1.75,-1.75 z m 0,2.5 c 0.414,0 0.75,-0.337 0.75,-0.75 0,-0.413 -0.336,-0.75 -0.75,-0.75 -0.414,0 -0.75,0.337 -0.75,0.75 0,0.413 0.336,0.75 0.75,0.75 z m -8.5,-2.5 c 0.965,0 1.75,0.785 1.75,1.75 0,0.965 -0.785,1.75 -1.75,1.75 -0.965,0 -1.75,-0.785 -1.75,-1.75 0,-0.965 0.785,-1.75 1.75,-1.75 z m 0,2.5 c 0.414,0 0.75,-0.337 0.75,-0.75 0,-0.413 -0.336,-0.75 -0.75,-0.75 -0.414,0 -0.75,0.337 -0.75,0.75 0,0.413 0.336,0.75 0.75,0.75 z M 3.555,2 3.857,4 H 17 l -1.118,8.036 H 3.969 L 2.931,4.573 2.695,3 H -0.074 V 2 Z M 4,5 4.139,6 H 15.713 L 15.852,5 Z M 15.012,11.036 15.573,7 H 4.278 l 0.561,4.036 z" 
				fill="${color}"
				id="path48"></path>
			</svg>`;
};

/**
 * Convert SVG string to data URL
 * 
 * @param svgString The SVG string to convert.
 * @returns Data URL representation of the SVG.
 */
const svgToDataUrl = svgString => {
  const encoded = encodeURIComponent(svgString).replace(/'/g, '%27').replace(/"/g, '%22');
  return `url("data:image/svg+xml,${encoded}")`;
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


const getGoogleFontURL = fontName => {
  const family = fontName.replace(/ /g, "+");
  const subset = "";
  return `https://fonts.googleapis.com/css?family=${family}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic${subset}`;
};
const isWebFont = fontName => fontName && !fontName?.match(/^(sans[-+]serif|serif|monospace|serif-alt)$/i);

/**
 * Load the stylesheet of a Google Font.
 * Skipped when loadGoogleFontsLocally is enabled — PHP serves fonts locally in that case.
 * Skipped when allowOnlySelectedFonts is enabled and the font is not in selectedFonts.
 *
 * @param {string} fontName The name of the font
 */
const loadGoogleFont = fontName => {
  // if (window.boostify_blocks_global_variables?.loadGoogleFontsLocally === "true") {
  // 	return;
  // }

  // if (window.boostify_blocks_global_variables?.allowOnlySelectedFonts === "true") {
  // 	const raw = window.boostify_blocks_global_variables?.selectedFonts ?? "";
  // 	if (raw.trim() !== "") {
  // 		const allowed = raw.split(",").map((f) => f.trim().toLowerCase()).filter(Boolean);
  // 		if (!allowed.includes(fontName.trim().toLowerCase())) {
  // 			return;
  // 		}
  // 	}
  // }

  setTimeout(() => {
    const _loadGoogleFont = head => {
      if (head && isWebFont(fontName)) {
        if (isGoogleFontEnqueued(fontName, head)) {
          return;
        }
        const link = createLinkTagWithGoogleFont(fontName);
        head.appendChild(link);
      }
    };
    const headElement = (0,___WEBPACK_IMPORTED_MODULE_0__.getDocumentHead)();
    _loadGoogleFont(headElement);
    if (headElement !== document.querySelector("head")) {
      _loadGoogleFont(document.querySelector("head"));
    }
  }, 50);
};
const createLinkTagWithGoogleFont = (fontName = "") => {
  const link = document.createElement("link");
  link.classList.add("wcb-google-fonts");
  link.setAttribute("data-font-name", fontName);
  link.setAttribute("href", getGoogleFontURL(fontName));
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  return link;
};
const isGoogleFontEnqueued = (fontName, head = document.querySelector("head")) => {
  return head.querySelector(`[data-font-name="${fontName}"]`);
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



const getTypographyStyles = ({
  typography,
  className
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
  if (!!fontFamily) {
    (0,_font__WEBPACK_IMPORTED_MODULE_1__.loadGoogleFont)(fontFamily);
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

  return {
    [`${className}`]: {
      fontFamily: fontFamily,
      fontWeight: appearance?.style?.fontWeight,
      fontStyle: appearance?.style?.fontStyle,
      textDecoration,
      textTransform,
      //
      fontSize: fontSize_Mobile_new,
      lineHeight: lineHeight_Mobile_new,
      letterSpacing: letterSpacing_Mobile_new,
      [`@media (min-width: ${media_tablet})`]: fontSize_Tablet_new || lineHeight_Tablet_new || letterSpacing_Tablet_new ? {
        fontSize: fontSize_Tablet_new,
        lineHeight: lineHeight_Tablet_new,
        letterSpacing: letterSpacing_Tablet_new
      } : undefined,
      [`@media (min-width: ${media_desktop})`]: fontSize_Desktop_new || lineHeight_Desktop_new || letterSpacing_Desktop_new ? {
        fontSize: fontSize_Desktop_new,
        lineHeight: lineHeight_Desktop_new,
        letterSpacing: letterSpacing_Desktop_new
      } : undefined
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTypographyStyles);

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
  let head = document.querySelector('head');
  if (isEditingContent()) {
    head = document.querySelector('iframe[name="editor-canvas"]').contentWindow.document.querySelector('head');
  }
  return head;
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