/* eslint-disable camelcase -- block attributes intentionally use snake_case names */
import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getCssProperyHasResponsive from "../utils/getCssProperyHasResponsive";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getTypographyStyles from "../utils/getTypographyStyles";
import { DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import checkResponsiveValueForOptimizeCSS from "../utils/checkResponsiveValueForOptimizeCSS";
import { SHOPPING_CART_SVG, svgToDataUrl } from "./base-utils";
// TODO: Enable after fix load frontend issue
// import { mergeProductAttrsWithThemeDefaults } from "./WcbThemeDefaults";

const getBadgeShapeStyles = (shape?: string): CSSObject => {
	switch (shape) {
		case "round":
			return {
				borderRadius: "50%",
				minWidth: "40px",
				minHeight: "40px",
				padding: "5px",
				textAlign: "center",
				wordBreak: "break-all",
				boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
			};
		case "pill":
			return {
				borderRadius: "9999px",
				padding: "2px 12px",
			};
		case "leaf":
			return {
				borderRadius: "10px 0 10px 0",
				padding: "2px 8px",
			};
		case "parallelogram":
			return {
				borderRadius: "0",
				clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
				paddingLeft: "15px",
				paddingRight: "15px",
			};
		case "teardrop":
			return {
				borderRadius: "50% 50% 50% 0",
				padding: "4px 8px",
			};
		case "ribbon":
			return {
				borderRadius: "0",
				clipPath: "polygon(0 0, 100% 0, calc(100% - 8px) 50%, 100% 100%, 0 100%)",
				paddingRight: "15px",
			};
		case "tag-left":
			return {
				borderRadius: "0",
				clipPath: "polygon(10px 0%, 100% 0, 100% 100%, 10px 100%, 0% 50%)",
				paddingLeft: "15px",
			};
		case "rectangular":
		default:
			return {
				borderRadius: "2px",
				padding: "2px 8px",
			};
	}
};

interface Props extends Required<WcbAttrsForSave> {}

const GlobalCss: FC<Props> = (attrs) => {
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
		advance_motionEffect,
	} = attrs;

	const isQvEnabled = style_quickViewBtn?.enabled !== false && style_quickViewBtn?.enabled !== undefined;

	const getQuickViewBorderRadius = (): string => {
		const val = style_quickViewBtn?.border_radius;
		if (val === undefined || val === null || (val as any) === "") {
			return (style_quickViewBtn?.position === "top-right" || style_quickViewBtn?.position === "center-image") ? "4px" : "0px";
		}
		const valStr = String(val).trim();
		if (valStr.endsWith("px") || valStr.endsWith("%") || valStr.endsWith("rem") || valStr.endsWith("em")) {
			return valStr;
		}
		return `${valStr}px`;
	};

	const { media_desktop, media_tablet } = DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;

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
			value_Tablet: rowGap_tablet,
		} = getValueFromAttrsResponsives(style_layout?.rowGap);
		const {
			value_Desktop: colunmGap_desktop,
			value_Mobile: colunmGap_mobile,
			value_Tablet: colunmGap_tablet,
		} = getValueFromAttrsResponsives(style_layout?.colunmGap);

		const { numberOfColumn, swithToScrollSnapX, peekAfter } = style_layout ?? {};
		const {
			value_Desktop: numberOfColumn_desktop,
			value_Tablet: numberOfColumn_tablet,
			value_Mobile: numberOfColumn_mobile,
		} = getValueFromAttrsResponsives(numberOfColumn);

		const {
			value_Desktop: peekAfter_desktop,
			value_Tablet: peekAfter_tablet,
			value_Mobile: peekAfter_mobile,
		} = getValueFromAttrsResponsives(peekAfter);

		const isSnapScrollDesktop = swithToScrollSnapX === "Desktop";
		const isSnapScrollTablet =
			isSnapScrollDesktop || swithToScrollSnapX === "Tablet";
		const isSnapScrollMobile =
			isSnapScrollTablet || swithToScrollSnapX === "Mobile";
		return (
			<Global
				styles={{
					[`${WRAP_CLASSNAME} .indicators`]: {
						display: isSnapScrollMobile ? "block" : "none",
						[`@media (min-width: ${media_tablet})`]: {
							display: isSnapScrollTablet ? "block" : "none",
						},
						[`@media (min-width: ${media_desktop})`]: {
							display: isSnapScrollDesktop ? "block" : "none",
						},
					},
					[LIST_CLASS]: {
						// ------ setting snap scroll x
						"> div": isSnapScrollMobile
							? {
									scrollSnapAlign: "start",
									flexShrink: 0,
									flexBasis: `calc((100% - (${
										Number(numberOfColumn_mobile) - 1
									} * ${colunmGap_mobile})) / ${Number(
										numberOfColumn_mobile
									)} - ${peekAfter_mobile})`,
							  }
							: {},

						overflowX: isSnapScrollMobile ? "auto" : undefined,
						scrollSnapType: isSnapScrollMobile ? "x proximity" : undefined,
						display: isSnapScrollMobile ? "flex" : "grid",
						gridTemplateColumns: isSnapScrollMobile
							? undefined
							: `repeat(${numberOfColumn_mobile}, minmax(0, 1fr))`,
						// ------ end setting snap scroll x
						//
						rowGap: rowGap_mobile ?? undefined,
						columnGap: colunmGap_mobile ?? undefined,
						[`@media (min-width: ${media_tablet})`]: {
							rowGap: rowGap_tablet ?? undefined,
							columnGap: colunmGap_tablet ?? undefined,
							// ------ setting snap scroll x
							"> div": isSnapScrollTablet
								? {
										scrollSnapAlign: "start",
										flexShrink: 0,
										flexBasis: `calc((100% - (${
											Number(numberOfColumn_tablet) - 1
										} * ${colunmGap_tablet})) / ${Number(
											numberOfColumn_tablet
										)} - ${peekAfter_tablet})`,
								  }
								: {},

							overflowX: isSnapScrollTablet ? "auto" : undefined,
							scrollSnapType: isSnapScrollTablet ? "x proximity" : undefined,
							display: isSnapScrollTablet ? "flex" : "grid",
							gridTemplateColumns: isSnapScrollTablet
								? undefined
								: `repeat(${numberOfColumn_tablet}, minmax(0, 1fr))`,
							// ------ end setting snap scroll x
						},
						[`@media (min-width: ${media_desktop})`]: {
							rowGap: rowGap_desktop,
							columnGap: colunmGap_desktop,
							// ------ setting snap scroll x
							"> div": isSnapScrollDesktop
								? {
										scrollSnapAlign: "start",
										flexShrink: 0,
										// Calculate flex-basis to create the peek/overflow effect for the slider.
										flexBasis: `calc((100% - (${
											Number(numberOfColumn_desktop) - 1
										} * ${colunmGap_desktop})) / ${Number(
											numberOfColumn_desktop
										)} - ${peekAfter_desktop})`,
								  }
								: {},

							overflowX: isSnapScrollDesktop ? "auto" : undefined,
							scrollSnapType: isSnapScrollDesktop ? "x proximity" : undefined,
							display: isSnapScrollDesktop ? "flex" : "grid",
							gridTemplateColumns: isSnapScrollDesktop
								? undefined
								: `repeat(${numberOfColumn_desktop}, minmax(0, 1fr))`,
							// ------ end setting snap scroll x
						},
						// SALE BADGE positioning
						...(style_saleBadge?.position === "top-left"
							? {
									".wcb-products__product--onsaleInsideImage .wcb-products__product-salebadge": {
										position: "absolute",
										left: "0.5rem",  // Tailwind left-2
										top: "0.5rem",   // Tailwind top-
										zIndex: 10,
									},
							}
							: {
									".wcb-products__product--onsaleInsideImage .wcb-products__product-salebadge": {
										position: "absolute",
										right: "0.5rem",
										top: "0.5rem",
										zIndex: 10,
									},
							}),

						// OUT OF STOCK BADGE positioning
						...(style_outOfStock?.position === "top-left"
							? {
									".wcb-products__product--onsaleInsideImage .wcb-products__product-outofstock-badge": {
										position: "absolute",
										left: "0.5rem",
										top: "0.5rem",
										zIndex: 10,
									},
							}
							: style_outOfStock?.position === "top-right"
							? {
									".wcb-products__product--onsaleInsideImage .wcb-products__product-outofstock-badge": {
										position: "absolute",
										right: "0.5rem",
										top: "0.5rem",
										zIndex: 10,
									},
							}
							: {
									".wcb-products__product--onsaleInsideImage .wcb-products__product-outofstock-badge": {
										display: "none",
									},
							}),

						// Stacking when both out-of-stock and sale badges are on the same side inside the image.
						...((() => {
							const soPos = (style_outOfStock?.position === "top-right" || style_outOfStock?.position === "right") ? "right" : "left";
							const ssPos = (style_saleBadge?.position === "top-right" || style_saleBadge?.position === "right") ? "right" : "left";
							const isOosActive = general_content?.isShowOutOfStock && style_outOfStock?.position && style_outOfStock?.position !== "none";
							const isSaleActive = general_content?.isShowSaleBadge && style_saleBadge?.position && style_saleBadge?.position !== "none";
							if (isOosActive && isSaleActive && soPos === ssPos) {
								const shape = (style_outOfStock as any)?.shape || (style_saleBadge as any)?.shape || "round";
								const offset = shape === "round" ? "50px" : "32px";
								return {
									".wcb-products__product--onsaleInsideImage .wcb-products__product-outofstock-badge ~ .wcb-products__product-salebadge": {
										top: `calc(0.5rem + ${offset})`,
									},
									".wcb-products__product--onsaleInsideImage .wcb-products__product-salebadge ~ .wcb-products__product-outofstock-badge": {
										top: `calc(0.5rem + ${offset})`,
									},
								};
							}
							return {};
						})()),
					},
				}}
			/>
		);
	};

	const getDivWrapStyles_Pagination = (): CSSObject => {
		const {
			value_mobile: marginTop_mobile,
			value_tablet: marginTop_tablet,
			value_desktop: marginTop_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_pagination?.marginTop,
		});
		const {
			mobile_v: marginTop_mobile_new,
			tablet_v: marginTop_tablet_new,
			desktop_v: marginTop_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: marginTop_mobile,
			tablet_v: marginTop_tablet,
			desktop_v: marginTop_desktop,
		});
		return {
			[`${WRAP_CLASSNAME} .wcb-products__pagination`]: {
				marginTop: marginTop_mobile_new ?? undefined,
				justifyContent: style_pagination?.justifyContent,
				[`.page-numbers`]: {
					color: style_pagination?.mainStyle?.Normal?.color,
					backgroundColor: style_pagination?.mainStyle?.Normal?.backgroundColor,
				},
				[`.page-numbers.current`]: {
					color: style_pagination?.mainStyle?.Active?.color,
					backgroundColor: style_pagination?.mainStyle?.Active?.backgroundColor,
				},
				[`@media (min-width: ${media_tablet})`]: marginTop_tablet_new
					? {
							marginTop: marginTop_tablet_new,
					  }
					: undefined,
				[`@media (min-width: ${media_desktop})`]: marginTop_desktop_new
					? {
							marginTop: marginTop_desktop_new,
					  }
					: undefined,
			},
		};
	};

	const getDivWrapStyles_Rating = (): CSSObject => {
		const {
			value_mobile: marginBottom_mobile,
			value_tablet: marginBottom_tablet,
			value_desktop: marginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_rating?.marginBottom,
		});
		const {
			mobile_v: marginBottom_mobile_new,
			tablet_v: marginBottom_tablet_new,
			desktop_v: marginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: marginBottom_mobile,
			tablet_v: marginBottom_tablet,
			desktop_v: marginBottom_desktop,
		});
		return {
			[`${WRAP_CLASSNAME} .wcb-products__product-rating`]: {
				marginBottom: marginBottom_mobile_new ?? undefined,
				color: style_rating?.color,
				[`@media (min-width: ${media_tablet})`]: marginBottom_tablet_new
					? {
							marginBottom: marginBottom_tablet_new,
					  }
					: undefined,
				[`@media (min-width: ${media_desktop})`]: marginBottom_desktop_new
					? {
							marginBottom: marginBottom_desktop_new,
					  }
					: undefined,
			},
		};
	};
	//

	//
	const getPostCardWrapStyles = (): CSSObject[] => {
		const {
			value_mobile: titleMarginBottom_mobile,
			value_tablet: titleMarginBottom_tablet,
			value_desktop: titleMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_title?.marginBottom,
		});
		const {
			value_mobile: saleBadgeMarginBottom_mobile,
			value_tablet: saleBadgeMarginBottom_tablet,
			value_desktop: saleBadgeMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_saleBadge?.marginBottom,
		});
		const {
			value_mobile: outofstockBadgeMarginBottom_mobile,
			value_tablet: outofstockBadgeMarginBottom_tablet,
			value_desktop: outofstockBadgeMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_outOfStock?.marginBottom,
		});
		const {
			value_mobile: featuredImageMarginBottom_mobile,
			value_tablet: featuredImageMarginBottom_tablet,
			value_desktop: featuredImageMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_featuredImage?.marginBottom,
		});
		const {
			value_mobile: priceMarginBottom_mobile,
			value_tablet: priceMarginBottom_tablet,
			value_desktop: priceMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_price?.marginBottom,
		});
		const {
			value_mobile: ratingMarginBottom_mobile,
			value_tablet: ratingMarginBottom_tablet,
			value_desktop: ratingMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_rating?.marginBottom,
		});
		const {
			value_mobile: categoryMarginBottom_mobile,
			value_tablet: categoryMarginBottom_tablet,
			value_desktop: categoryMarginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_category?.marginBottom,
		});

		//
		const {
			mobile_v: titleMarginBottom_mobile_new,
			tablet_v: titleMarginBottom_tablet_new,
			desktop_v: titleMarginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: titleMarginBottom_mobile,
			tablet_v: titleMarginBottom_tablet,
			desktop_v: titleMarginBottom_desktop,
		});
		const {
			mobile_v: saleBadgeMarginBottom_mobile_new,
			tablet_v: saleBadgeMarginBottom_tablet_new,
			desktop_v: saleBadgeMarginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: saleBadgeMarginBottom_mobile,
			tablet_v: saleBadgeMarginBottom_tablet,
			desktop_v: saleBadgeMarginBottom_desktop,
		});
		const {
			mobile_v: outofstockBadgeMarginBottom_mobile_new,
			tablet_v: outofstockBadgeMarginBottom_tablet_new,
			desktop_v: outofstockBadgeMarginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: outofstockBadgeMarginBottom_mobile,
			tablet_v: outofstockBadgeMarginBottom_tablet,
			desktop_v: outofstockBadgeMarginBottom_desktop,
		});
		checkResponsiveValueForOptimizeCSS({
			mobile_v: featuredImageMarginBottom_mobile,
			tablet_v: featuredImageMarginBottom_tablet,
			desktop_v: featuredImageMarginBottom_desktop,
		});
		const {
			mobile_v: priceMarginBottom_mobile_new,
			tablet_v: priceMarginBottom_tablet_new,
			desktop_v: priceMarginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: priceMarginBottom_mobile,
			tablet_v: priceMarginBottom_tablet,
			desktop_v: priceMarginBottom_desktop,
		});
		const {
			mobile_v: ratingMarginBottom_mobile_new,
			tablet_v: ratingMarginBottom_tablet_new,
			desktop_v: ratingMarginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: ratingMarginBottom_mobile,
			tablet_v: ratingMarginBottom_tablet,
			desktop_v: ratingMarginBottom_desktop,
		});
		const {
			mobile_v: categoryMarginBottom_mobile_new,
			tablet_v: categoryMarginBottom_tablet_new,
			desktop_v: categoryMarginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: categoryMarginBottom_mobile,
			tablet_v: categoryMarginBottom_tablet,
			desktop_v: categoryMarginBottom_desktop,
		});
		//
		return [
			{
				[POST_CARD_CLASS]: {
					fontSize: "16px",
					height: "auto",
					display: "inline-block",
					position: "relative",
					overflow: "hidden",
					".wcb-products__product--quickViewBottomImage--item": {
						border: "none",
						cursor: "pointer",
						gap: "6px",
						textDecoration: "none",
						fontSize: "14px",
						fontWeight: 500,
						backgroundColor: style_quickViewBtn?.bg_color || "#ffffff",
						color: style_quickViewBtn?.text_color || "#000000",
						transition: "transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease, color 0.3s ease",
						borderRadius: getQuickViewBorderRadius(),
						...(style_quickViewBtn?.position === "bottom-image" && isQvEnabled) ? {
							position: "absolute",
							left: 0,
							bottom: "10px",
							height: "0px",
							width: "100%",
							opacity: 0,
							visibility: "hidden",
							transition: "height 0.3s ease, opacity 0.2s ease, background-color 0.3s ease, color 0.3s ease",
							zIndex: 10,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						} : {
							display: style_quickViewBtn?.position === "center-image" ? "none !important" : "unset",
							position: "absolute",
							top: "-10rem",
							right: "0rem",
						},
					},
					":hover": {
						".wcb-products__product--quickViewBottomImage--item": {
							...(style_quickViewBtn?.position === "bottom-image" && isQvEnabled) ? {
								opacity: 1,
								visibility: "visible",
								height: "40px",
								display: "flex !important",
							} : {
								display: isQvEnabled ? "flex !important" : "none !important",
								alignItems: "center !important",
								justifyContent: "center !important",
								padding: style_quickViewBtn?.position === "center-image" ? "0.5rem 1.4rem !important" : "auto",
								position: "absolute",
								bottom: (style_quickViewBtn?.position === "center-image" && (general_addToCartBtn?.position === "inside image" || general_addToCartBtn?.position === "image"))
									? "auto !important"
									: (style_quickViewBtn?.position === "center-image" && general_addToCartBtn?.position === "icon")
									? "10rem"
									: (style_quickViewBtn?.position === "center-image" && general_addToCartBtn?.position !== "icon")
									? "6rem"
									: "auto",
								top: (style_quickViewBtn?.position === "center-image" && (general_addToCartBtn?.position === "inside image" || general_addToCartBtn?.position === "image"))
									? "calc(50% + 24px) !important"
									: ((general_addToCartBtn?.position === "icon" && style_wishlistBtn?.position === "top-right" && style_quickViewBtn?.position === "top-right") || 
									   (general_addToCartBtn?.position === "icon" && style_wishlistBtn?.position !== "top-right" && style_quickViewBtn?.position === "top-right")) ? "0rem"
									: ((general_addToCartBtn?.position !== "icon" && style_wishlistBtn?.position === "top-right" && style_quickViewBtn?.position === "top-right") || 
									   (general_addToCartBtn?.position !== "icon" && style_wishlistBtn?.position !== "top-right" && style_quickViewBtn?.position === "top-right")) ? "-2.5rem"
									: "auto",
								right: style_quickViewBtn?.position === "center-image" ? "50%" : 
									style_quickViewBtn?.position === "top-right" ? "-0.1rem" : "auto",
								width: style_quickViewBtn?.position === "center-image" ? "auto" : 
									style_quickViewBtn?.position === "top-right" ? "2.6rem" : "unset",
								transform: style_quickViewBtn?.position === "center-image" ? "translateX(50%)" : 
									style_quickViewBtn?.position === "top-right" ? "translateY(2.5rem)" : "none",
								height: style_quickViewBtn?.position === "center-image" ? "auto !important" : 
									style_quickViewBtn?.position === "top-right" ? "2.48rem" : "auto",
								borderRadius: getQuickViewBorderRadius(),
								boxShadow: style_quickViewBtn?.position === "center-image" ? "0 4px 10px rgba(0,0,0,0.1)" : "none",
								border: "none",
								whiteSpace: "nowrap",
								zIndex: 10,
								transition: "transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease, color 0.3s ease",
							},
							gap: "6px !important",
							color: style_quickViewBtn?.text_color || "#000000",
							backgroundColor: style_quickViewBtn?.bg_color || "#ffffff",
							".wcb-products__product--quickViewBottomImage__text": {
								color: "inherit",
							},
							"svg": {
								color: "inherit",
								fill: "currentColor",
							},
							":hover": {
								color: style_quickViewBtn?.hover_text_color ? style_quickViewBtn?.hover_text_color : "#fff",
								backgroundColor: style_quickViewBtn?.hover_bg_color ? style_quickViewBtn?.hover_bg_color : "#474747",
								".wcb-products__product--quickViewBottomImage__text": {
									color: "inherit",
								},
								"svg": {
									color: "inherit",
									fill: "currentColor",
								}
							},
						},
					},
					"&.wcb-products__product--btnIconAddToCart .added_to_cart": {
						position: "relative",
						top: "-2rem",
						right: "-84px",
						transform: "translateY(2.5rem)",
						transition: "transform 0.2s ease-in-out",
						zIndex: 2,
						marginTop: "0px !important",
						background: "#3a3a3a",
					},
					"&.wcb-products__product--btnIconAddToCart:hover": {
						".added_to_cart span:not(.woostify-svg-icon)": {
							display: "none",
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
							background: "#3a3a3a",
						},
						".added_to_cart .woostify-svg-icon svg": {
							color: "#ffffff",
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
							background: style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor ? 
								style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor : "#ffffff",
							// transformOrigin: "top right",
							// transition: "transform 0.2s ease, box-shadow 0.2s",
							/* ===  Animation === */
							transform: "translateY(2.5rem)",
							transition: "transform 0.2s ease-in-out",
							...(typeof style_addToCardBtn?.border?.radius?.Desktop === "string"
								? { borderRadius: style_addToCardBtn.border.radius.Desktop }
								: typeof style_addToCardBtn?.border?.radius?.Desktop === "object" && style_addToCardBtn?.border?.radius?.Desktop !== null
								? {
										borderTopLeftRadius: (style_addToCardBtn.border.radius.Desktop as any).topLeft,
										borderTopRightRadius: (style_addToCardBtn.border.radius.Desktop as any).topRight,
										borderBottomRightRadius: (style_addToCardBtn.border.radius.Desktop as any).bottomRight,
										borderBottomLeftRadius: (style_addToCardBtn.border.radius.Desktop as any).bottomLeft,
								  }
								: { borderRadius: "0px" }),
							"&::after": {
								content: '""',
								width: "1.2rem",
								height: "1.2rem",
								backgroundImage: `${svgToDataUrl(
									`${SHOPPING_CART_SVG(style_addToCardBtn?.colorAndBackgroundColor?.Normal?.color as any)}`
								)} !important` as any,
								margin: "auto",
								transformOrigin: "top right",
								zIndex: 1,
								backgroundSize: "contain",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								pointerEvents: "none",
							},
						},
						".wcb-products__product--btnIconAddToCart--item.added": {
							display: "none",
							content: "none",
						},
						".wcb-products__product--btnIconAddToCart--item.added::after": {
							display: "none",
							content: "none",
						},
						".wcb-products__product--btnIconAddToCart--item:hover": {
							background: style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor ?
								style_addToCardBtn?.colorAndBackgroundColor?.Hover?.backgroundColor : "#474747",
							marginTop: "0px !important",
						},
						".wcb-products__product--btnIconAddToCart--item:hover::after": {
							content: '""',
							width: "1.2rem",
							height: "1.2rem",
							backgroundImage: `${svgToDataUrl(SHOPPING_CART_SVG(style_addToCardBtn?.colorAndBackgroundColor?.Hover?.color as any))} !important` as any,
							margin: "auto",
							zIndex: 1,
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							pointerEvents: "none",
						},
						// Style loading display is none for top right icon add to cart button
						".add_to_cart_button--loading.wcb-products__product--btnIconAddToCart--item:hover": {
							background: style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor ? 
								style_addToCardBtn?.colorAndBackgroundColor?.Hover?.backgroundColor : "#474747",
							marginTop: "0px !important",
							"&::after": {
								display: "none",
							},
						},
					},
					".wcb-products__product-featured": {
						overflow: "hidden",
						position: "relative",
					},
					".wcb-products__product-quickview-preview": {
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						pointerEvents: "none",
						zIndex: 4,
						"& > *": {
							pointerEvents: "auto",
						},
						".wcb-quick-view-hover-gallery": {
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							zIndex: 1,
							overflow: "hidden",
							pointerEvents: "auto",
							height: "100%",
							"&[hidden]": {
								display: "none !important",
							},
							img: {
								width: "100%",
								height: "100%",
								objectFit: "cover",
								objectPosition: "center",
								display: "block",
							},
						},
						".tns-outer": {
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							height: "100%",
							width: "100%",
							overflow: "hidden",
						},
						".tns-ovh, .tns-inner": {
							height: "100%",
							width: "100%",
						},
						".tns-item": {
							height: "100%",
							maxHeight: "100%",
							objectFit: "cover",
							objectPosition: "center",
							verticalAlign: "top",
						},
						"img.tns-item": {
							display: "inline-block",
						},
						".tns-slider": {
							transition: "all 0s",
							"> .tns-item": {
								boxSizing: "border-box",
							},
						},
						".tns-horizontal": {
							"&.tns-subpixel": {
								whiteSpace: "nowrap",
								"> .tns-item": {
									display: "inline-block",
									verticalAlign: "top",
									whiteSpace: "normal",
								},
							},
							"&.tns-no-subpixel": {
								"&:after": {
									content: '""',
									display: "table",
									clear: "both",
								},
								"> .tns-item": {
									float: "left",
									marginRight: "-100%",
								},
							},
						},
						".tns-nav": {
							position: "absolute",
							bottom: style_quickViewBtn?.position === "bottom-image" ? "54px" : "10px",
							left: 0,
							right: 0,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: "6px",
							zIndex: 25,
							pointerEvents: "none",
							height: "auto",
							button: {
								width: "8px",
								height: "8px",
								borderRadius: "50%",
								backgroundColor: "rgba(255, 255, 255, 0.7)",
								border: "1px solid rgba(0, 0, 0, 0.2)",
								boxShadow: "0 1px 3px rgba(0, 0, 0, 0.35)",
								padding: 0,
								margin: "0 2px",
								cursor: "pointer",
								pointerEvents: "auto",
								transition: "all 0.2s ease",
								"&.tns-nav-active": {
									backgroundColor: "#ffffff",
									borderColor: "#000000",
									transform: "scale(1.25)",
								},
							},
						},
						".tns-controls": {
							position: "absolute",
							top: "50%",
							transform: "translateY(-50%)",
							left: 0,
							right: 0,
							display: "flex",
							justifyContent: "space-between",
							zIndex: 25,
							pointerEvents: "none",
							opacity: 0,
							transition: "opacity 0.25s ease",
							padding: "0 6px",
							button: {
								width: "32px",
								height: "32px",
								minWidth: "32px",
								minHeight: "32px",
								borderRadius: "50%",
								backgroundColor: "rgba(255, 255, 255, 0.95)",
								color: "#222222",
								border: "none",
								padding: 0,
								cursor: "pointer",
								boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: 0,
								lineHeight: 1,
								pointerEvents: "auto",
								zIndex: 25,
								transition: "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
								"&:hover": {
									backgroundColor: "#ffffff",
									color: "#000000",
									boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
									transform: "scale(1.08)",
								},
								svg: {
									width: "14px",
									height: "14px",
									stroke: "currentColor",
									pointerEvents: "none",
								},
							},
						},
					},
					":hover .wcb-products__product-quickview-preview .tns-controls": {
						opacity: 1,
					},
					".wcb-products__product--topRight": {
						position: "absolute",
						top: "0.5rem",
						right: "0.5rem",
						zIndex: 30,
						display: "flex",
						flexDirection: "column",
						gap: "0.5rem",
						transition: "transform 0.3s ease, opacity 0.3s ease",
						[`@media (min-width: ${media_desktop})`]: {
							opacity: 0,
							transform: "translateY(-100%)",
							pointerEvents: "none",
						},
					},
					":hover, :focus-within": {
						".wcb-products__product--topRight": {
							opacity: 1,
							transform: "translateY(0)",
							pointerEvents: "auto",
						},
					},
					".wcb-products__product--wishlistTopRight--item": {
						width: "40px",
						height: "40px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						background: "#ffffff",
						boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
						textDecoration: "none",
						transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
						zIndex: 30,
						borderRadius: "50%",
						border: "none",
						cursor: "pointer",
						"&::before": {
							content: '"\\e909"',
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
							verticalAlign: "sub",
						},
						"&.is-in-wishlist::before": {
							content: '"\\e908"',
							color: "#000",
						},
						"&:hover": {
							color: "#ffffff",
							background: "#474747",
							"&::before": {
								content: '"\\e909"',
								color: "#ffffff",
								zIndex: 2,
							},
							"&.is-in-wishlist::before": {
								content: '"\\e908"',
								color: "#ffffff",
							},
						},
					},
					".wcb-products__product--wishlistBottomRight--item": {
						position: "absolute",
						bottom: "0.5rem",
						right: "0.5rem",
						width: "40px",
						height: "40px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						background: "#ffffff",
						boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
						textDecoration: "none",
						transformOrigin: "bottom right",
						transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
						zIndex: 30,
						borderRadius: "50%",
						border: "none",
						cursor: "pointer",
						"&::before": {
							content: '"\\e909"',
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
							fontSize: "20px",
							verticalAlign: "sub",
						},
						"&.is-in-wishlist::before": {
							content: '"\\e908"',
							color: "#000",
						},
						"&:hover": {
							background: "#474747",
							zIndex: 30,
							"&::before": {
								content: '"\\e909"',
								color: "#ffffff",
							},
							"&.is-in-wishlist::before": {
								content: '"\\e908"',
								color: "#ffffff",
							},
						},
					},
					"&.wcb-products__product--btnInsideImage": {
						".wcb-products__product-featured .wcb-products__product-add-to-cart": {
							position: "absolute",
							left: "50%",
							top: "calc(50% - 24px)",
							transform: "translate(-50%, -50%)",
							zIndex: 10,
							opacity: 0,
							visibility: "hidden",
							transition: "opacity 0.25s ease, visibility 0.25s ease",
							whiteSpace: "nowrap",
							margin: 0,
						},
						"&:hover .wcb-products__product-featured": {
							".wcb-products__product-add-to-cart": {
								opacity: 1,
								visibility: "visible",
							},
							".wcb-products__product--quickViewBottomImage--item": {
								top: "calc(50% + 24px) !important",
								bottom: "auto !important",
							},
						},
					},
					".tinv-wraper, .yith-wcwl-add-to-wishlist": {
						display: "none !important",
					},
				},
			},
			{
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
						overflow: "hidden",
					},
					// Style layout bottom add to cart button
					".wcb-products__product-style-hidden-btn-add-to-cart": {
						display: (general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === "inside image") ? "none !important" : "unset",
						alignItems: "center",
					},
					".wcb-products__add-to-cart-icon, .wcb-products__add-to-cart-label": {
						display: (general_addToCartBtn?.position === "icon") ? "none" : "block",
						// opacity: (general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon') ? 0 : "unset",
						transform: (general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon') ? "translateY(0px)" : "unset",
						transition: (general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon') ? "all 0.3s ease-in-out" : "unset",
					},
					".wcb-products__add-to-cart-icon": {
						display: general_addToCartBtn?.isShowIcon === false ? "none !important" : undefined,
					},
					".wcb-products__product-price": {
						// opacity: (general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon') ? 1 : "unset",
						transform:  (general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon') ? "translateY(0px)" : "unset",
						transition: (general_addToCartBtn?.position === "bottom" || general_addToCartBtn?.position === 'icon') ? "all 0.3s ease-in-out" : "unset",
						marginBottom: priceMarginBottom_mobile_new ?? undefined,
						color: style_price?.textColor,
					},
					".added_to_cart": {
						transform: (general_addToCartBtn?.position === "bottom") ? "translateY(92px)" : "unset",
						opacity: 
							(general_addToCartBtn?.position === "bottom") ? 0 : "unset",
						transition: (general_addToCartBtn?.position === "bottom") ? "all 0.3s ease-in-out" : "unset",
					},
					":hover": {
						".wcb-products__product-price": {
							// opacity: general_addToCartBtn?.position === "bottom" ? 0 : "unset",
							// Add element quantity
							transform: general_addToCartBtn?.position === "bottom" ? `translateY(${general_addToCartBtn?.isShowQuantity ? -44 : -30}px)` : "unset",
							transition: general_addToCartBtn?.position === "bottom" ? "all 0.3s ease-in-out" : "unset",
						},
						//TODO: handle style in edit page
						".wcb-products__product-add-to-cart": {
							backgroundColor: general_addToCartBtn?.position === "bottom" ? "#fff" : "inherit",
							"span": {
								color: (style_addToCardBtn?.colorAndBackgroundColor?.Normal?.color as any),
							},
							".wcb-products__add-to-cart-icon, .wcb-products__add-to-cart-label": {
								// display: general_addToCartBtn?.position === "icon" ? "none" : "block",
								transform: general_addToCartBtn?.position === "bottom" ? "translateY(-60px)" : "unset",
								opacity: 
									general_addToCartBtn?.position === "bottom" ? 1 : general_addToCartBtn?.position === "icon" ? 0 : "unset",
								transition: general_addToCartBtn?.position === "bottom" ? "all 0.3s ease-in-out" : "unset",
								// clipPath: general_addToCartBtn?.position === "bottom" ? "inset(0 0 0 0)" : general_addToCartBtn?.position === "icon" ? "inset(100% 0 0 0)" : "unset",
							},
							".added_to_cart": {
								transform: general_addToCartBtn?.position === "bottom" ? "translateY(60px)" : "unset",
								opacity: 
									general_addToCartBtn?.position === "bottom" ? 1 : "unset",
								transition: general_addToCartBtn?.position === "bottom" ? "all 0.3s ease-in-out" : "unset",
							},
						},
						".wcb-products__product-add-to-cart .add_to_cart_button--loading": {
							".wcb-products__add-to-cart-icon": {
								display: "none !important",
							}
						},
						".wcb-products__product-add-to-cart:hover": {
							".add_to_cart_button span": {
								color: (style_addToCardBtn?.colorAndBackgroundColor?.Hover?.color as any),
							},
							".wcb-products__add-to-cart-icon svg path": {
								fill: `${style_addToCardBtn?.colorAndBackgroundColor?.Hover?.color} !important` as any,
							},
						},
						".wcb-products__add-to-cart-icon svg path": {
							fill: `${style_addToCardBtn?.colorAndBackgroundColor?.Normal?.color} !important` as any,
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
						marginBottom: titleMarginBottom_mobile_new ?? undefined,
						color: style_title?.textColor,
					},
					".wcb-products__product-categories": {
						marginBottom: categoryMarginBottom_mobile_new ?? undefined,
						color: style_category?.textColor,
						a: {
							color: style_category?.textColor,
						},
					},
					".wcb-products__product-salebadge": {
						marginBottom: saleBadgeMarginBottom_mobile_new ?? undefined,
						".wcb-products__product-onsale": {
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
							lineHeight: 1.2,
							whiteSpace: "nowrap",
							color: style_saleBadge?.textColor,
							backgroundColor: style_saleBadge?.backgroundColor,
							...getBadgeShapeStyles(style_saleBadge?.shape || "round"),
							"span.onsale, span": {
								position: "static",
								margin: "0px",
								padding: "0px",
								display: "inline",
								fontSize: "inherit",
								lineHeight: "inherit",
								color: "inherit",
								backgroundColor: "transparent",
							},
						},
					},
					".wcb-products__product-outofstock-badge": {
						marginBottom: outofstockBadgeMarginBottom_mobile_new ?? undefined,
						".wcb-products__product-on-outofstock": {
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
							lineHeight: 1.2,
							whiteSpace: "nowrap",
							color: style_outOfStock?.textColor,
							backgroundColor: style_outOfStock?.backgroundColor,
							...getBadgeShapeStyles(style_outOfStock?.shape || "round"),
							"span": {
								position: "static",
								margin: "0px",
								padding: "0px",
								display: "inline",
								fontSize: "inherit",
								lineHeight: "inherit",
								color: "inherit",
								backgroundColor: "transparent",
							},
						},
					},
					// Alignment for the rating stars row.
					// Moved from PHP inline style to CSS class to prevent inline override.
					".wcb-products__product-rating-wrap": {
						justifyContent: style_layout?.textAlignment === "left" ? "flex-start"
							: style_layout?.textAlignment === "right" ? "flex-end"
							: "center",
					},
					".wcb-products__product-rating": {
						marginBottom: ratingMarginBottom_mobile_new ?? undefined,
						color: style_rating?.color,
					},
					// Alignment for the quantity counter wrapper.
					// Moved from PHP inline style to CSS class to prevent inline override.
					".wcb-products__quantity-add-to-cart": {
						alignItems: style_layout?.textAlignment === "left" ? "flex-start"
							: style_layout?.textAlignment === "right" ? "flex-end"
							: "center",
					},
					[`@media (min-width: ${media_tablet})`]:
						titleMarginBottom_tablet_new ||
						saleBadgeMarginBottom_tablet_new ||
						priceMarginBottom_tablet_new ||
						ratingMarginBottom_tablet_new ||
						outofstockBadgeMarginBottom_tablet_new
							? {
									".wcb-products__product-title": titleMarginBottom_tablet_new
										? {
												marginBottom: titleMarginBottom_tablet_new,
										  }
										: undefined,
									".wcb-products__product-categories":
										categoryMarginBottom_tablet_new
											? {
													marginBottom: categoryMarginBottom_tablet_new,
											  }
											: undefined,
									".wcb-products__product-salebadge":
										saleBadgeMarginBottom_tablet_new
											? {
													marginBottom: saleBadgeMarginBottom_tablet_new,
											  }
											: undefined,
									".wcb-products__product-outofstock-badge":
										outofstockBadgeMarginBottom_tablet_new
											? {
													marginBottom: outofstockBadgeMarginBottom_tablet_new,
											  }
											: undefined,
									".wcb-products__product-price": priceMarginBottom_tablet_new
										? {
												marginBottom: priceMarginBottom_tablet_new,
										  }
										: undefined,
									".wcb-products__product-rating": ratingMarginBottom_tablet_new
										? {
												marginBottom: ratingMarginBottom_tablet_new,
										  }
										: undefined,
							  }
							: undefined,
					[`@media (min-width: ${media_desktop})`]:
						titleMarginBottom_desktop_new ||
						saleBadgeMarginBottom_desktop_new ||
						priceMarginBottom_desktop_new ||
						ratingMarginBottom_desktop_new ||
						outofstockBadgeMarginBottom_desktop_new
							? {
									".wcb-products__product-title": titleMarginBottom_desktop_new
										? {
												marginBottom: titleMarginBottom_desktop_new,
										  }
										: undefined,
									".wcb-products__product-categories":
										categoryMarginBottom_desktop_new
											? {
													marginBottom: categoryMarginBottom_desktop_new,
											  }
											: undefined,
									".wcb-products__product-salebadge":
										saleBadgeMarginBottom_desktop_new
											? {
													marginBottom: saleBadgeMarginBottom_desktop_new,
											  }
											: undefined,
									".wcb-products__product-outofstock-badge":
										outofstockBadgeMarginBottom_desktop_new
											? {
													marginBottom: outofstockBadgeMarginBottom_desktop_new,
											  }
											: undefined,
									".wcb-products__product-price": priceMarginBottom_desktop_new
										? {
												marginBottom: priceMarginBottom_desktop_new,
										  }
										: undefined,
									".wcb-products__product-rating":
										ratingMarginBottom_desktop_new
											? {
													marginBottom: ratingMarginBottom_desktop_new,
											  }
											: undefined,
							  }
							: undefined,
				},
			},
			getBorderStyles({
				// className: `${POST_CARD_CLASS} .wcb-products__product-image`,
				className: `${WRAP_CLASSNAME} .wcb-products__product-image-link`,
				border: style_featuredImage?.border,
				isWithRadius: true,
			}),
		];
	};

	const getPostCardStyles_AddToCart = (position: string): CSSObject => {
		const { backgroundColor, color } =
			style_addToCardBtn?.colorAndBackgroundColor?.Normal ?? {};
		const { backgroundColor: backgroundColor_h, color: color_h } =
			style_addToCardBtn?.colorAndBackgroundColor?.Hover ?? {};
		const {
			value_mobile: marginBottom_mobile,
			value_tablet: marginBottom_tablet,
			value_desktop: marginBottom_desktop,
		} = getCssProperyHasResponsive<string>({
			cssProperty: style_addToCardBtn?.marginBottom || { Desktop: "1rem" },
		});

		//
		const {
			mobile_v: marginBottom_mobile_new,
			tablet_v: marginBottom_tablet_new,
			desktop_v: marginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
			mobile_v: marginBottom_mobile,
			tablet_v: marginBottom_tablet,
			desktop_v: marginBottom_desktop,
		});
		// Maps textAlignment setting to CSS align-items value for flex column containers.
		// Replaces the old inline style approach (align-items set directly in PHP render)
		// to avoid inline style overriding this CSS class rule.
		const textAlignToAlignItems = (alignment?: string) => {
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
					color: color_h ? color_h : "white",
				}
			},
			[ADD_TO_CART_BTN]: {
				display: (position === "icon" || position === "bottom") ? "none" : "block",
				color,
				backgroundColor: (position === "bottom visible" || position === "inside image")  ? backgroundColor : "#fff",
				marginBottom: marginBottom_mobile_new ?? undefined,
				":hover": {
					color: color_h ? `${color_h} !important` : undefined,
					backgroundColor: (position === "bottom visible" || position === "inside image" || position === "icon") ? backgroundColor_h : "#fff !important",
				},
				[`@media (min-width: ${media_tablet})`]: marginBottom_tablet_new
					? {
							marginBottom: marginBottom_tablet_new,
					  }
					: undefined,
				[`@media (min-width: ${media_desktop})`]: marginBottom_desktop_new
					? {
							marginBottom: marginBottom_desktop_new,
					  }
					: undefined,
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
						fill: position === "bottom" ? "#1346AF !important" : "#FFFFFF !important",
					}
				}
			},
			[`${ADD_TO_CART_BTN}.added`]: {
				display: "none",
			},
			[ADD_TO_CART_BTN_ICON]: {
				color,
				backgroundColor,
				marginBottom: marginBottom_mobile_new ?? undefined,
				":hover": {
					color: color_h,
					backgroundColor: backgroundColor_h,
				},
				[`@media (min-width: ${media_tablet})`]: marginBottom_tablet_new
					? {
							marginBottom: marginBottom_tablet_new,
					  }
					: undefined,
				[`@media (min-width: ${media_desktop})`]: marginBottom_desktop_new
					? {
							marginBottom: marginBottom_desktop_new,
					  }
					: undefined,
			},
		};
	};

	if (!uniqueId) {
		return null;
	}

	return (
		<>
			{renderDivListWrapStyle()}

			{/* TITLE */}
			{general_content?.isShowTitle && (
				<Global
					styles={getTypographyStyles({
						className: WRAP_CLASSNAME + " .wcb-products__product-title",
						typography: style_title?.typography,
					})}
				/>
			)}

			{/* CATEOGRY */}
			{general_content?.isShowCategory && (
				<Global
					styles={getTypographyStyles({
						className: WRAP_CLASSNAME + " .wcb-products__product-categories",
						typography: style_category?.typography,
					})}
				/>
			)}

			{/* RATING */}
			{general_content?.isShowRating && (
				<Global styles={getDivWrapStyles_Rating()} />
			)}

			{/* PRICE */}
			{general_content?.isShowPrice && (
				<Global
					styles={getTypographyStyles({
						className: WRAP_CLASSNAME + " .wcb-products__product-price",
						typography: style_price?.typography,
					})}
				/>
			)}

			{/* SALE BADGE */}
			{general_content?.isShowSaleBadge && (
				<Global
					styles={getTypographyStyles({
						className: WRAP_CLASSNAME + " .wcb-products__product-onsale",
						typography: style_saleBadge?.typography,
					})}
				/>
			)}

			{/* OUT OF STOCK BADGE */}
			{general_content?.isShowOutOfStock && (
				<Global
					styles={getTypographyStyles({
						className: WRAP_CLASSNAME + " .wcb-products__product-on-outofstock",
						typography: style_outOfStock?.typography,
					})}
				/>
			)}

			{/* PAGINATION */}
			{general_pagination?.isShowPagination ? (
				<>
					<Global styles={getDivWrapStyles_Pagination()} />
					<Global
						styles={getBorderStyles({
							className: `${WRAP_CLASSNAME} .wcb-products__pagination .page-numbers`,
							border: style_pagination?.mainStyle?.Normal?.border,
							isWithRadius: true,
						})}
					/>
					<Global
						styles={getBorderStyles({
							className: `${WRAP_CLASSNAME} .wcb-products__pagination .page-numbers.current`,
							border: style_pagination?.mainStyle?.Active?.border,
							isWithRadius: true,
						})}
					/>
				</>
			) : null}

			{/* POSTCARD */}
			<Global styles={getPostCardWrapStyles()} />
			<Global
				styles={getPaddingMarginStyles({
					className: POST_CARD_CLASS,
					padding: style_layout?.padding,
				})}
			/>
			<Global
				styles={getBorderStyles({
					className: `${POST_CARD_CLASS}`,
					border: style_border,
					isWithRadius: true,
				})}
			/>

			{/* ADD TO CART BUTTON */}
			{general_addToCartBtn?.isShowButton ? (
				<>
					<>
					{
						(general_addToCartBtn?.position === "bottom" || 
							general_addToCartBtn?.position === "bottom visible" || 
								general_addToCartBtn?.position === "inside image" ||
								general_addToCartBtn?.position === "icon") ? (
							<Global styles={getPostCardStyles_AddToCart(general_addToCartBtn?.position)} />
						) : null
					}
					</>

					<Global
						styles={getTypographyStyles({
							className: ADD_TO_CART_BTN,
							typography: style_addToCardBtn?.typography,
						})}
					/>
					<Global
						styles={getBorderStyles({
							className: ADD_TO_CART_BTN,
							border: style_addToCardBtn?.border,
							isWithRadius: true,
						})}
					/>
					<Global
						styles={getBorderStyles({
							className: `${POST_CARD_CLASS} .wcb-products__product--btnIconAddToCart--item`,
							border: style_addToCardBtn?.border,
							isWithRadius: true,
						})}
					/>
					<Global
						styles={getPaddingMarginStyles({
							className: ADD_TO_CART_BTN,
							padding: style_addToCardBtn?.padding,
						})}
					/>
				</>
			) : null}

			{/* Product image settings */}
			{
				general_featuredImage?.hoverType !== "none" && (
					<Global 
						styles={{
							[`${PRODUCT_IMAGE_CLASS}`]: {
								":hover": {
									transition: `all 0.3s ease-in-out`,
								}
							},
						}}
					/>
				)
			}

			{/* DIMENSION */}
			<Global
				styles={getPaddingMarginStyles({
					className: WRAP_CLASSNAME,
					margin: style_dimension?.margin,
					padding: style_dimension?.padding,
				})}
			/>

			{/* ADVANCE  */}
			<Global
				styles={getAdvanveDivWrapStyles({
					advance_motionEffect,
					advance_responsiveCondition,
					advance_zIndex,
					className: WRAP_CLASSNAME,
					defaultDisplay: "block",
				})}
			/>
			{/* TINY SLIDER CORE & QUICK VIEW MODAL */}
			<Global
				styles={{
					".tns-outer": {
						position: "relative",
						direction: "ltr",
						"& [hidden]": {
							display: "none !important",
						},
						"&.ms-touch": {
							overflowX: "scroll",
							overflowY: "hidden",
							msOverflowStyle: "none",
							msScrollChaining: "none",
							msScrollSnapType: "mandatory",
							msScrollSnapPointsX: "snapInterval(0%, 100%)",
						},
					},
					".tns-slider": {
						transition: "all 0s",
						"> .tns-item": {
							boxSizing: "border-box",
						},
					},
					".tns-horizontal": {
						"&.tns-subpixel": {
							whiteSpace: "nowrap",
							"> .tns-item": {
								display: "inline-block",
								verticalAlign: "top",
								whiteSpace: "normal",
							},
						},
						"&.tns-no-subpixel": {
							"&:after": {
								content: '""',
								display: "table",
								clear: "both",
							},
							"> .tns-item": {
								float: "left",
								marginRight: "-100%",
							},
						},
					},
					".quick-view-images": {
						position: "relative",
						".tns-outer": {
							position: "relative",
						},
						".tns-controls": {
							position: "absolute",
							top: "50%",
							transform: "translateY(-50%)",
							left: 0,
							right: 0,
							display: "flex",
							justifyContent: "space-between",
							zIndex: 10,
							pointerEvents: "none",
							opacity: 0,
							transition: "opacity 0.25s ease",
							padding: "0 10px",
							button: {
								width: "40px",
								height: "40px",
								minWidth: "40px",
								minHeight: "40px",
								borderRadius: "50%",
								backgroundColor: "rgba(255, 255, 255, 0.95)",
								color: "#222222",
								border: "none",
								padding: 0,
								cursor: "pointer",
								boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								pointerEvents: "auto",
								zIndex: 10,
								transition: "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
								"&:hover": {
									backgroundColor: "#ffffff",
									color: "#000000",
									boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
									transform: "scale(1.08)",
								},
								"&:disabled": {
									display: "none",
								},
								svg: {
									width: "16px",
									height: "16px",
									stroke: "currentColor",
									pointerEvents: "none",
								},
							},
						},
						"&:hover .tns-controls": {
							opacity: 1,
						},
						".tns-nav": {
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: "6px",
							marginTop: "12px",
							zIndex: 10,
							button: {
								width: "8px",
								height: "8px",
								borderRadius: "50%",
								backgroundColor: "rgba(0, 0, 0, 0.2)",
								border: "1px solid transparent",
								padding: 0,
								margin: "0 2px",
								cursor: "pointer",
								transition: "all 0.2s ease",
								"&.tns-nav-active": {
									backgroundColor: "#000000",
									transform: "scale(1.25)",
								},
							},
						},
					},
				}}
			/>

			{/*  */}
			<span data-block-products-uniqueid={uniqueId}></span>
		</>
	);
};

export default React.memo(GlobalCss);
