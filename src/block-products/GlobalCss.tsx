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
import { getThemeDefaults } from "../utils/themeDefaults";

const getBadgeShapeStyles = (
	shape?: string,
	badgeOpts?: { borderRadius?: number; isSquare?: boolean; size?: number }
): CSSObject => {
	if (shape && shape !== "rectangular") {
		return {};
	}
	const base: CSSObject = {};
	if (
		badgeOpts?.borderRadius !== undefined &&
		badgeOpts.borderRadius !== null &&
		String(badgeOpts.borderRadius) !== ""
	) {
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

interface Props extends Required<WcbAttrsForSave> {}

const hasValue = (val: unknown): boolean => val !== undefined && val !== null && val !== "";

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		// ATTRS OF BLOCK
		general_addToCartBtn,
		general_content,
		general_pagination,
		general_featuredImage,
		general_layout,
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

	const theme = getThemeDefaults();
	const qvTheme = theme?.shop_quick_view_btn;

	// Quick view button — always follows Customizer since there is no block UI panel for quick view
	const effectiveQvPosition = qvTheme?.position ?? style_quickViewBtn?.position;
	const effectiveQvBgColor = qvTheme?.bg_color ?? style_quickViewBtn?.bg_color;
	const effectiveQvTextColor = qvTheme?.text_color ?? style_quickViewBtn?.text_color;
	const effectiveQvHoverBgColor = qvTheme?.hover_bg_color ?? style_quickViewBtn?.hover_bg_color;
	const effectiveQvHoverTextColor = qvTheme?.hover_text_color ?? style_quickViewBtn?.hover_text_color;
	const effectiveQvBorderRadius = qvTheme?.border_radius ?? style_quickViewBtn?.border_radius;

	const effectiveQvEnabled = qvTheme?.enabled !== undefined ? qvTheme?.enabled : style_quickViewBtn?.enabled;
	const isQvEnabled = Boolean(effectiveQvEnabled) && String(effectiveQvEnabled) !== "0";

	const rawQvShowIcon = qvTheme?.show_icon !== undefined ? qvTheme.show_icon : style_quickViewBtn?.show_icon;
	const isQvShowIcon = effectiveQvPosition === "top-right"
		? true
		: (rawQvShowIcon !== undefined
			? (Boolean(rawQvShowIcon) && String(rawQvShowIcon) !== "0" && String(rawQvShowIcon) !== "false")
			: true);

	const getQuickViewBorderRadius = (): string => {
		const valStr = String(effectiveQvBorderRadius).trim();
		if (valStr.endsWith("px") || valStr.endsWith("%") || valStr.endsWith("rem") || valStr.endsWith("em")) {
			return valStr;
		}
		return `${valStr}px`;
	};

	const hasQvBorderRadius = hasValue(effectiveQvBorderRadius);

	const { media_desktop, media_tablet } = DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
	const LIST_CLASS = `${WRAP_CLASSNAME} .wcb-products__list`;
	const POST_CARD_CLASS = `${WRAP_CLASSNAME} .wcb-products__product`;
	const ADD_TO_CART_BTN_BG = `${POST_CARD_CLASS} .wcb-products__product-add-to-cart`;
	const ADD_TO_CART_BTN = `${POST_CARD_CLASS} .wcb-products__product-add-to-cart a`;
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
		const listWrapStyles: CSSObject = {
			[LIST_CLASS]: {
				...(isSnapScrollMobile
					? {
							"> div": {
								flexBasis: `calc((100% - (${
									Number(numberOfColumn_mobile) - 1
								} * ${colunmGap_mobile})) / ${Number(
									numberOfColumn_mobile
								)} - ${peekAfter_mobile})`,
							},
					  }
					: {
							gridTemplateColumns: `repeat(${numberOfColumn_mobile}, minmax(0, 1fr))`,
					  }),
				rowGap: rowGap_mobile ?? undefined,
				columnGap: colunmGap_mobile ?? undefined,
				[`@media (min-width: ${media_tablet})`]: {
					rowGap: rowGap_tablet ?? undefined,
					columnGap: colunmGap_tablet ?? undefined,
					...(isSnapScrollTablet
						? {
								"> div": {
									flexBasis: `calc((100% - (${
										Number(numberOfColumn_tablet) - 1
									} * ${colunmGap_tablet})) / ${Number(
										numberOfColumn_tablet
									)} - ${peekAfter_tablet})`,
								},
						  }
						: {
								gridTemplateColumns: `repeat(${numberOfColumn_tablet}, minmax(0, 1fr))`,
						  }),
				},
				[`@media (min-width: ${media_desktop})`]: {
					rowGap: rowGap_desktop,
					columnGap: colunmGap_desktop,
					...(isSnapScrollDesktop
						? {
								"> div": {
									flexBasis: `calc((100% - (${
										Number(numberOfColumn_desktop) - 1
									} * ${colunmGap_desktop})) / ${Number(
										numberOfColumn_desktop
									)} - ${peekAfter_desktop})`,
								},
						  }
						: {
								gridTemplateColumns: `repeat(${numberOfColumn_desktop}, minmax(0, 1fr))`,
						  }),
				},
			},
		};

		return <Global styles={listWrapStyles} />;
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
		const {
			mobile_v: featuredImageMarginBottom_mobile_new,
			tablet_v: featuredImageMarginBottom_tablet_new,
			desktop_v: featuredImageMarginBottom_desktop_new,
		} = checkResponsiveValueForOptimizeCSS({
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
					".wcb-products__product--quickViewBottomImage--item": {
						...(effectiveQvBgColor
							? { backgroundColor: effectiveQvBgColor }
							: {}),
						...(effectiveQvTextColor
							? { color: effectiveQvTextColor }
							: {}),
						...(hasQvBorderRadius ? { borderRadius: getQuickViewBorderRadius() } : {}),
						...(!isQvEnabled ? { display: "none !important" } : {}),
						"&:hover": {
							...(effectiveQvHoverTextColor
								? { color: effectiveQvHoverTextColor }
								: {}),
							...(effectiveQvHoverBgColor
								? { backgroundColor: effectiveQvHoverBgColor }
								: {}),
						},
					},
					...(!isQvShowIcon
						? {
								".wcb-products__product--quickViewBottomImage-svg__icon": {
									display: "none",
								},
						  }
						: {}),
					"&.wcb-products__product--btnIconAddToCart": {
						".wcb-products__product--btnIconAddToCart--item": {
							...(style_addToCardBtn?.colorAndBackgroundColor?.Normal?.color
								? { color: style_addToCardBtn.colorAndBackgroundColor.Normal.color }
								: {}),
							...(style_addToCardBtn?.colorAndBackgroundColor?.Normal?.backgroundColor
								? { background: style_addToCardBtn.colorAndBackgroundColor.Normal.backgroundColor }
								: {}),
						},
						...(style_addToCardBtn?.colorAndBackgroundColor?.Hover?.backgroundColor ||
						style_addToCardBtn?.colorAndBackgroundColor?.Hover?.color
							? {
									".wcb-products__product--btnIconAddToCart--item:hover": {
										...(style_addToCardBtn?.colorAndBackgroundColor?.Hover?.backgroundColor
											? { background: style_addToCardBtn.colorAndBackgroundColor.Hover.backgroundColor }
											: {}),
										...(style_addToCardBtn?.colorAndBackgroundColor?.Hover?.color
											? { color: style_addToCardBtn.colorAndBackgroundColor.Hover.color }
											: {}),
									},
							  }
							: {}),
					},
					"&.wcb-products__product--wishlistTopRight, &.wcb-products__product--wishlistBottomRight": {
						".wcb-products__product--wishlistTopRight--item, .wcb-products__product--wishlistBottomRight--item": {
							...(style_wishlistBtn?.backgroundColor
								? { backgroundColor: style_wishlistBtn.backgroundColor }
								: {}),
							...(style_wishlistBtn?.color
								? {
										color: style_wishlistBtn.color,
										"&::before": {
											color: "inherit",
										},
								  }
								: {}),
							"&:hover": {
								...(style_wishlistBtn?.hoverBackgroundColor
									? { backgroundColor: style_wishlistBtn.hoverBackgroundColor }
									: {}),
								...(style_wishlistBtn?.hoverColor
									? {
											color: style_wishlistBtn.hoverColor,
											"&::before": {
												color: style_wishlistBtn.hoverColor,
											},
									  }
								: {}),
							},
						},
					},
				},
			},
			{
				[POST_CARD_CLASS]: {
					textAlign: style_layout?.textAlignment,
					backgroundColor: style_layout?.backgroundColor,
					".wcb-products__product-price": {
						marginBottom: priceMarginBottom_mobile_new ?? undefined,
						color: style_price?.textColor,
					},

					".wcb-products__product-featured":
						featuredImageMarginBottom_mobile_new ||
						featuredImageMarginBottom_tablet_new ||
						featuredImageMarginBottom_desktop_new
							? {
									marginBottom: featuredImageMarginBottom_mobile_new,
									[`@media (min-width: ${media_tablet})`]:
										featuredImageMarginBottom_tablet_new
											? {
													marginBottom: featuredImageMarginBottom_tablet_new,
											  }
											: undefined,
									[`@media (min-width: ${media_desktop})`]:
										featuredImageMarginBottom_desktop_new
											? {
													marginBottom: featuredImageMarginBottom_desktop_new,
											  }
											: undefined,
							  }
							: undefined,

					".wcb-products__product-title": {
						marginBottom: titleMarginBottom_mobile_new ?? undefined,
						color: style_title?.textColor,
						a: {
							color: style_title?.textColor,
						},
					},
					".wcb-products__product-categories": {
						marginBottom: categoryMarginBottom_mobile_new ?? undefined,
						color: style_category?.textColor,
						a: {
							color: style_category?.textColor,
						},
					},
					".wcb-products__product-content": {
						minHeight: style_layout?.contentEqualHeight
							? `${style_layout?.contentMinHeight || 160}px`
							: undefined,
					},
					".wcb-products__product-salebadge": {
						marginBottom: saleBadgeMarginBottom_mobile_new ?? undefined,
						".wcb-products__product-onsale": {
							color: style_saleBadge?.textColor,
							backgroundColor: style_saleBadge?.backgroundColor,
							...getBadgeShapeStyles(style_saleBadge?.shape || "round", {
								borderRadius: style_saleBadge?.borderRadius,
								isSquare: style_saleBadge?.isSquare,
								size: style_saleBadge?.size,
							}),
						},
					},
					".wcb-products__product-outofstock-badge": {
						marginBottom: outofstockBadgeMarginBottom_mobile_new ?? undefined,
						".wcb-products__product-on-outofstock": {
							color: style_outOfStock?.textColor,
							backgroundColor: style_outOfStock?.backgroundColor,
							...getBadgeShapeStyles(style_outOfStock?.shape || "round", {
								borderRadius: style_outOfStock?.borderRadius,
								isSquare: style_outOfStock?.isSquare,
								size: style_outOfStock?.size,
							}),
						},
					},
					// Alignment for the rating stars row.
					// Moved from PHP inline style to CSS class to prevent inline override.
					".wcb-products__product-rating-wrap": {
						justifyContent: style_layout?.textAlignment === "left" ? "flex-start"
							: style_layout?.textAlignment === "right" ? "flex-end"
							: "center",
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
						categoryMarginBottom_tablet_new ||
						saleBadgeMarginBottom_tablet_new ||
						priceMarginBottom_tablet_new ||
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
							  }
							: undefined,
					[`@media (min-width: ${media_desktop})`]:
						titleMarginBottom_desktop_new ||
						categoryMarginBottom_desktop_new ||
						saleBadgeMarginBottom_desktop_new ||
						priceMarginBottom_desktop_new ||
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
							  }
							: undefined,
				},
			} as CSSObject,
			getBorderStyles({
				className: `${WRAP_CLASSNAME} .wcb-products__product-image-link`,
				border: style_featuredImage?.border,
				isWithRadius: true,
			}),
			...(style_featuredImage?.border?.hoverColor
				? [
						{
							[`${POST_CARD_CLASS}:hover .wcb-products__product-image-link`]: {
								borderColor: style_featuredImage.border.hoverColor,
							},
						},
				  ]
				: []),
		];
	};

	const getPostCardStyles_AddToCart = (): CSSObject => {
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
				alignItems: textAlignToAlignItems(style_layout?.textAlignment),
				// Editor links have pointer-events: none, so trigger hover on the button container too
				...(color_h || backgroundColor_h
					? {
							"&:hover": {
								a: {
									color: color_h || undefined,
									backgroundColor: backgroundColor_h || undefined,
								},
								span: {
									color: color_h || undefined,
								},
								"svg path": {
									fill: color_h || undefined,
								},
							},
					  }
					: {}),
			},
			[ADD_TO_CART_BTN]: {
				color: color || undefined,
				backgroundColor: backgroundColor || undefined,
				marginBottom: marginBottom_mobile_new ?? undefined,
				".wcb-products__add-to-cart-icon": {
					display: general_addToCartBtn?.isShowIcon === false ? "none" : undefined,
					...(color
						? {
								"svg path": {
									fill: color,
								},
						  }
						: {}),
				},
				"&:hover": {
					color: color_h || undefined,
					backgroundColor: backgroundColor_h || undefined,
					span: {
						color: color_h || undefined,
					},
					"svg path": {
						fill: color_h || undefined,
					},
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
						className: `${POST_CARD_CLASS} .wcb-products__product-title, ${POST_CARD_CLASS} .wcb-products__product-title a`,
						typography: style_title?.typography,
					})}
				/>
			)}

			{/* CATEOGRY */}
			{general_content?.isShowCategory && (
				<Global
					styles={getTypographyStyles({
						className: `${WRAP_CLASSNAME} .wcb-products__product-categories, ${WRAP_CLASSNAME} .wcb-products__product-categories a`,
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
				general_addToCartBtn?.position === "icon" ? (
					<Global
						styles={getBorderStyles({
							className: `${POST_CARD_CLASS} .wcb-products__product--btnIconAddToCart--item`,
							border: style_addToCardBtn?.border,
							isWithRadius: true,
						})}
					/>
				) : (
					<>
						{(general_addToCartBtn?.position === "bottom" ||
						general_addToCartBtn?.position === "bottom visible" ||
						general_addToCartBtn?.position === "inside image") ? (
							<Global styles={getPostCardStyles_AddToCart()} />
						) : null}

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
							styles={getPaddingMarginStyles({
								className: ADD_TO_CART_BTN,
								padding: style_addToCardBtn?.padding,
							})}
						/>
					</>
				)
			) : null}

			{/* Product image settings */}
			{
				general_featuredImage?.equal_height_flag && (general_featuredImage?.image_height ?? 300) > 0 && (
					<Global
						styles={{
							[`${PRODUCT_IMAGE_CLASS} img`]: {
								height: `${general_featuredImage.image_height ?? 300}px`,
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

			{/*  */}
			<span data-block-products-uniqueid={uniqueId}></span>
		</>
	);
};

export default React.memo(GlobalCss);
