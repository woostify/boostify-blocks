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
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";

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

export type PreviewDeviceType = "Desktop" | "Tablet" | "Mobile";

type ResponsiveScalarStyle = Record<
	string,
	string | number | Record<string, string | number> | undefined
>;

const pickDefined = <T,>(...values: (T | undefined | null)[]): T | undefined =>
	values.find((v): v is T => v !== undefined && v !== null && v !== "");

const pickDeviceValue = <T,>(
	deviceType: PreviewDeviceType,
	mobile: T | undefined | null,
	tablet: T | undefined | null,
	desktop: T | undefined | null
): T | undefined => {
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
	mediaDesktop,
}: {
	cssProp: string;
	mobile?: string | null;
	tablet?: string | null;
	desktop?: string | null;
	previewDeviceType?: PreviewDeviceType;
	mediaTablet: string;
	mediaDesktop: string;
}): ResponsiveScalarStyle => {
	if (previewDeviceType) {
		const activeVal = pickDeviceValue(previewDeviceType, mobile, tablet, desktop);
		return activeVal !== undefined ? { [cssProp]: activeVal } : {};
	}
	const {
		mobile_v: mobileNew,
		tablet_v: tabletNew,
		desktop_v: desktopNew,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: mobile,
		tablet_v: tablet,
		desktop_v: desktop,
	});
	return {
		[cssProp]: mobileNew ?? undefined,
		[`@media (min-width: ${mediaTablet})`]: tabletNew
			? { [cssProp]: tabletNew }
			: undefined,
		[`@media (min-width: ${mediaDesktop})`]: desktopNew
			? { [cssProp]: desktopNew }
			: undefined,
	};
};

const buildListLayoutStyles = (
	cols: string | number | null | undefined,
	colGap: string | null | undefined,
	rowGap: string | null | undefined,
	peek: string | null | undefined,
	isSnap: boolean
): CSSObject => {
	const safeCols = Math.max(1, Number(cols) || 1);
	const safeColGap = colGap && String(colGap).trim() !== "" ? colGap : "0px";
	const safePeek = peek && String(peek).trim() !== "" ? peek : "0px";
	return {
		rowGap: rowGap ?? undefined,
		columnGap: colGap ?? undefined,
		...(isSnap
			? {
					"> div": {
						flexBasis: `calc((100% - (${
							safeCols - 1
						} * ${safeColGap})) / ${safeCols} - ${safePeek})`,
					},
			  }
			: {
					gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
			  }),
	};
};

interface Props extends Required<WcbAttrsForSave> {
	previewDeviceType?: PreviewDeviceType;
}

const hasValue = (val: unknown): boolean => val !== undefined && val !== null && val !== "";

const GlobalCss: FC<Props> = (attrs) => {
	const {
		uniqueId,
		previewDeviceType,
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

	const isBadgeInsideImage =
		(general_featuredImage?.isShowFeaturedImage ?? true) &&
		(general_content?.saleBadgePosition ?? "Inside image") === "Inside image";

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
	const PRICE_TEXT_CLASS = `${POST_CARD_CLASS} .wcb-products__product-price, ${POST_CARD_CLASS} .wcb-products__product-price .woocommerce-Price-amount, ${POST_CARD_CLASS} .wcb-products__product-price del, ${POST_CARD_CLASS} .wcb-products__product-price ins`;
	const ADD_TO_CART_BTN_BG = `${POST_CARD_CLASS} .wcb-products__product-add-to-cart`;
	const ADD_TO_CART_BTN = `${POST_CARD_CLASS} .wcb-products__product-add-to-cart a`;
	const PRODUCT_IMAGE_CLASS = `${WRAP_CLASSNAME} .wcb-products__product-image`;

	const resolveSpacing = (
		cssProp: string,
		cssProperty?: HasResponsive<string>
	): ResponsiveScalarStyle => {
		if (!cssProperty) {
			return {};
		}
		const { value_mobile, value_tablet, value_desktop } =
			getCssProperyHasResponsive<string>({
				cssProperty,
			});
		return getResponsiveScalarStyle({
			cssProp,
			mobile: value_mobile,
			tablet: value_tablet,
			desktop: value_desktop,
			previewDeviceType,
			mediaTablet: media_tablet,
			mediaDesktop: media_desktop,
		});
	};

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

		const mobileStyles = buildListLayoutStyles(
			numberOfColumn_mobile,
			colunmGap_mobile,
			rowGap_mobile,
			peekAfter_mobile,
			isSnapScrollMobile
		);
		const tabletStyles = buildListLayoutStyles(
			numberOfColumn_tablet,
			colunmGap_tablet,
			rowGap_tablet,
			peekAfter_tablet,
			isSnapScrollTablet
		);
		const desktopStyles = buildListLayoutStyles(
			numberOfColumn_desktop,
			colunmGap_desktop,
			rowGap_desktop,
			peekAfter_desktop,
			isSnapScrollDesktop
		);

		const listWrapStyles: CSSObject = previewDeviceType
			? {
					[LIST_CLASS]:
						previewDeviceType === "Mobile"
							? mobileStyles
							: previewDeviceType === "Tablet"
							? tabletStyles
							: desktopStyles,
			  }
			: {
					[LIST_CLASS]: {
						...mobileStyles,
						[`@media (min-width: ${media_tablet})`]: tabletStyles,
						[`@media (min-width: ${media_desktop})`]: desktopStyles,
					},
			  };

		return <Global styles={listWrapStyles} />;
	};

	const getDivWrapStyles_Pagination = (): CSSObject => ({
		[`${WRAP_CLASSNAME} .wcb-products__pagination`]: {
			...resolveSpacing("marginTop", style_pagination?.marginTop),
			justifyContent: style_pagination?.justifyContent,
			[`.page-numbers`]: {
				color: style_pagination?.mainStyle?.Normal?.color,
				backgroundColor: style_pagination?.mainStyle?.Normal?.backgroundColor,
			},
			[`.page-numbers.current`]: {
				color: style_pagination?.mainStyle?.Active?.color,
				backgroundColor: style_pagination?.mainStyle?.Active?.backgroundColor,
			},
		},
	});

	const getDivWrapStyles_Rating = (): CSSObject => ({
		[`${WRAP_CLASSNAME} .wcb-products__product-rating`]: {
			...resolveSpacing("marginBottom", style_rating?.marginBottom),
			color: style_rating?.color,
		},
	});
	//

	//
	const getPostCardWrapStyles = (): CSSObject[] => {
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
					".wcb-products__product-price": resolveSpacing(
						"marginBottom",
						style_price?.marginBottom
					),
					".wcb-products__product-price, .wcb-products__product-price .woocommerce-Price-amount, .wcb-products__product-price del, .wcb-products__product-price ins": {
						color: style_price?.textColor,
					},

					".wcb-products__product-featured": resolveSpacing(
						"marginBottom",
						style_featuredImage?.marginBottom
					),

					".wcb-products__product-title": {
						...resolveSpacing("marginBottom", style_title?.marginBottom),
						color: style_title?.textColor,
						a: {
							color: style_title?.textColor,
						},
					},
					".wcb-products__product-categories": {
						...resolveSpacing("marginBottom", style_category?.marginBottom),
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
						...(!isBadgeInsideImage
							? resolveSpacing("marginBottom", style_saleBadge?.marginBottom)
							: {}),
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
						...(!isBadgeInsideImage
							? resolveSpacing("marginBottom", style_outOfStock?.marginBottom)
							: {}),
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
				...resolveSpacing(
					"marginBottom",
					style_addToCardBtn?.marginBottom || { Desktop: "1rem" }
				),
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
						deviceType: previewDeviceType,
					})}
				/>
			)}

			{/* CATEOGRY */}
			{general_content?.isShowCategory && (
				<Global
					styles={getTypographyStyles({
						className: `${WRAP_CLASSNAME} .wcb-products__product-categories, ${WRAP_CLASSNAME} .wcb-products__product-categories a`,
						typography: style_category?.typography,
						deviceType: previewDeviceType,
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
						className: PRICE_TEXT_CLASS,
						typography: style_price?.typography,
						deviceType: previewDeviceType,
					})}
				/>
			)}

			{/* SALE BADGE */}
			{general_content?.isShowSaleBadge && (
				<Global
					styles={getTypographyStyles({
						className: WRAP_CLASSNAME + " .wcb-products__product-onsale",
						typography: style_saleBadge?.typography,
						deviceType: previewDeviceType,
					})}
				/>
			)}

			{/* OUT OF STOCK BADGE */}
			{general_content?.isShowOutOfStock && (
				<Global
					styles={getTypographyStyles({
						className: WRAP_CLASSNAME + " .wcb-products__product-on-outofstock",
						typography: style_outOfStock?.typography,
						deviceType: previewDeviceType,
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
								deviceType: previewDeviceType,
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
