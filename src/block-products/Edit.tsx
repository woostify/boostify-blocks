import { __ } from "@wordpress/i18n";
import { BlockControls, useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, useRef, FC, useCallback, useMemo } from "react";
// @ts-ignore
import ServerSideRender from "@wordpress/server-side-render";
import { WcbAttrs } from "./attributes";
import { settings } from "@wordpress/icons";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
// @ts-ignore
import "./editor.scss";
import {
	Dropdown,
	ToolbarButton,
	BaseControl,
	// @ts-ignore
	__experimentalNumberControl as NumberControl,
	ToggleControl,
} from "@wordpress/components";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import WcbProducstPanelSortingAndFiltering from "./WcbProducstPanelSortingAndFiltering";
import {
	PanelBody,
	Spinner,
	withSpokenMessages,
} from "@wordpress/components";
import WcbProductsPanelContent from "./WcbProductsPanelContent";
import WcbProductsPanelFeaturedImage, {
	WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO,
} from "./WcbProductsPanelFeaturedImage";
import WcbProductsPanelButton, {
	WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO,
} from "./WcbProductsPanelButton";
import WcbProductsPanelPagination, {
	WCB_PRODUCTS_PANEL_PAGINATION_DEMO,
} from "./WcbProductsPanelPagination";
import WcbProductsPanel_StyleTitle, {
	WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO,
} from "./WcbProductsPanel_StyleTitle";
import WcbProductsPanel_StyleFeaturedImage, {
	WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO,
} from "./WcbProductsPanel_StyleFeaturedImage";
import WcbProductsPanel_StyleLayout from "./WcbProductsPanel_StyleLayout";
import WcbProductsPanel_StyleAddToCartBtn, {
	WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO,
} from "./WcbProductsPanel_StyleAddToCartBtn";
import WcbProductsPanel_StylePagination, {
	WCB_PRODUCTS_PANEL_STYLE_PAGINATION_DEMO,
} from "./WcbProductsPanel_StylePagination";
import WcbProductsPanel_StyleSaleBadge, {
} from "./WcbProductsPanel_StyleSaleBadge";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import WcbProductsPanel_StylePrice, {
	WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO,
} from "./WcbProductsPanel_StylePrice";
import WcbProductsPanel_StyleRating, {
	WCB_PRODUCTS_PANEL_STYLE_RATING_DEMO,
} from "./WcbProductsPanel_StyleRating";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import WcbProductsPanel_StyleCategory, {
	WCB_PRODUCTS_PANEL_STYLE_CATEGORY_DEMO,
} from "./WcbProductsPanel_StyleCategory";
import { RESPONSIVE_CONDITON_DEMO } from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import { Z_INDEX_DEMO } from "../components/controls/MyZIndexControl/MyZIndexControl";
import { MY_MOTION_EFFECT_DEMO } from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";
import WcbProducstPanelGeneralLayout, {
	WCB_PRODUCTS_PANEL_GENERAL_LAYOUT_DEMO
} from "./WcbProducstPanel_GeneralLayout";
import WcbProductsPanel_StyleOutOfStock from "./WcbProductsPanel_StyleOutOfStock";
import WcbProductsPanel_StyleDimension, {
	WCB_PRODUCTS_PANEL_STYLE_DIMENSION_DEMO,
} from "./WcbProductsPanel_StyleDimension";
import { getThemeDefaults } from "../utils/themeDefaults";
import {
	applyThemeDefaultsToBlockAttributes,
	buildStyleBorderDefault,
	buildStyleLayoutDefault,
	buildGeneralContractDefault,
	buildSortingAndFilteringDefault,
	buildGeneralFeaturedImageDefault,
	buildStyleFeaturedImageDefault,
	buildStyleSaleBadgeDefault,
	buildStyleOutOfStockDefault,
	buildStyleTitleDefault,
	buildStylePriceDefault,
	buildStyleAddToCartBtnDefault,
	buildGeneralAddToCartBtnDefault,
	buildStyleWishlistButtonDefault,
	buildStyleQuickViewButtonDefault,
	buildStyleCountdownUrgencyDefault,
	normalizeAddToCartPosition,
} from "./WcbThemeDefaults";
import useGetDeviceType from "../hooks/useGetDeviceType";

interface Props extends EditProps<WcbAttrs> { }

const Edit: FC<Props> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const deviceType = useGetDeviceType() || "Desktop";
	const {
		className,
		advance_responsiveCondition,
		advance_zIndex,
		general_sortingAndFiltering,
		uniqueId,
		general_content,
		general_layout,
		general_featuredImage,
		general_addToCartBtn,
		general_pagination,
		style_title,
		style_featuredImage,
		style_layout,
		style_addToCardBtn,
		style_pagination,
		style_saleBadge,
		style_outOfStock,
		style_border,
		style_price,
		style_rating,
		style_wishlistBtn,
		style_quickViewBtn,
		style_countdownUrgency,
		style_dimension,
		advance_motionEffect,
		style_category,
	} = attributes;
	//  COMMON HOOKS
	const wrapBlockProps = useBlockProps();
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	// make uniqueid
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		if (uniqueId) return;
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);

	useEffect(() => {
		// If already initialized, do nothing
		if (attributes.style_layout) return;

		const DEFAULT: Omit<WcbAttrs, "uniqueId"> = {
			style_addToCardBtn: buildStyleAddToCartBtnDefault(WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO as any),
			style_border: buildStyleBorderDefault(attributes.style_layout as any),
			style_featuredImage: buildStyleFeaturedImageDefault(WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO as any),
			style_layout: buildStyleLayoutDefault(attributes.style_border as any),
			style_pagination: WCB_PRODUCTS_PANEL_STYLE_PAGINATION_DEMO,
			style_price: buildStylePriceDefault(WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO as any),
			style_rating: WCB_PRODUCTS_PANEL_STYLE_RATING_DEMO,
			style_saleBadge: buildStyleSaleBadgeDefault(style_saleBadge as any),
			style_outOfStock: buildStyleOutOfStockDefault(style_outOfStock as any),
			style_category: WCB_PRODUCTS_PANEL_STYLE_CATEGORY_DEMO,
			style_title: buildStyleTitleDefault(WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO as any),
			style_wishlistBtn: buildStyleWishlistButtonDefault(attributes.style_wishlistBtn as any),
			style_quickViewBtn: buildStyleQuickViewButtonDefault(attributes.style_quickViewBtn as any),
			style_countdownUrgency: buildStyleCountdownUrgencyDefault(attributes.style_countdownUrgency as any),
			general_sortingAndFiltering: buildSortingAndFilteringDefault(general_sortingAndFiltering as any),
			general_content: buildGeneralContractDefault(general_content as any),
			general_layout: WCB_PRODUCTS_PANEL_GENERAL_LAYOUT_DEMO,
			general_featuredImage: buildGeneralFeaturedImageDefault(WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO as any),
			general_addToCartBtn: buildGeneralAddToCartBtnDefault(WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO as any) as any,
			general_pagination: WCB_PRODUCTS_PANEL_PAGINATION_DEMO,
			advance_responsiveCondition: RESPONSIVE_CONDITON_DEMO,
			advance_zIndex: Z_INDEX_DEMO,
			advance_motionEffect: MY_MOTION_EFFECT_DEMO,
		};

		setAttributes({ ...DEFAULT });
	}, [style_layout]);

	// When isCustomizerGeneralLayout switches between true/false
	const prevIsCustomizerGeneralLayout = useRef(general_layout?.isCustomizerGeneralLayout);
	useEffect(() => {
		const prev = prevIsCustomizerGeneralLayout.current;
		const curr = general_layout?.isCustomizerGeneralLayout;
		prevIsCustomizerGeneralLayout.current = curr;

		if (prev === true && curr === false) {
			const theme = getThemeDefaults();
			const curPos = theme.shop_archive_add_to_cart_btn?.position || 'bottom';
			const normalizedPos = normalizeAddToCartPosition(curPos);
			setAttributes({
				general_content: buildGeneralContractDefault(undefined),
				general_featuredImage: buildGeneralFeaturedImageDefault(undefined),
				general_addToCartBtn: buildGeneralAddToCartBtnDefault(undefined) as any,
				general_sortingAndFiltering: buildSortingAndFilteringDefault(undefined),
				style_layout: buildStyleLayoutDefault(undefined),
				style_border: buildStyleBorderDefault(undefined),
				style_featuredImage: buildStyleFeaturedImageDefault(undefined),
				style_saleBadge: buildStyleSaleBadgeDefault(undefined),
				style_outOfStock: buildStyleOutOfStockDefault(undefined),
				style_title: buildStyleTitleDefault(undefined),
				style_price: buildStylePriceDefault(undefined),
				style_addToCardBtn: buildStyleAddToCartBtnDefault(undefined, normalizedPos),
				style_wishlistBtn: buildStyleWishlistButtonDefault(undefined),
				style_quickViewBtn: buildStyleQuickViewButtonDefault(undefined),
				style_countdownUrgency: buildStyleCountdownUrgencyDefault(undefined),
			});
		} else if (prev === false && curr === true) {
			// When switching to block custom style, snapshot all current Customizer defaults into block attributes.
			const synced = applyThemeDefaultsToBlockAttributes({
				...attributes,
				general_layout: {
					...general_layout,
					isCustomizerGeneralLayout: false,
				},
			});
			setAttributes({
				general_content: synced.general_content,
				general_featuredImage: synced.general_featuredImage,
				general_addToCartBtn: synced.general_addToCartBtn,
				general_sortingAndFiltering: synced.general_sortingAndFiltering
					? {
							...synced.general_sortingAndFiltering,
							isNumberOfItemsEdited: general_sortingAndFiltering?.isNumberOfItemsEdited,
					  }
					: general_sortingAndFiltering,
				style_layout: synced.style_layout
					? {
							...synced.style_layout,
							isNumberOfColumnEdited: style_layout?.isNumberOfColumnEdited,
					  }
					: style_layout,
				style_border: synced.style_border,
				style_featuredImage: synced.style_featuredImage,
				style_saleBadge: synced.style_saleBadge,
				style_outOfStock: synced.style_outOfStock,
				style_title: synced.style_title,
				style_price: synced.style_price,
				style_addToCardBtn: synced.style_addToCardBtn,
				style_wishlistBtn: synced.style_wishlistBtn,
				style_quickViewBtn: synced.style_quickViewBtn,
				style_countdownUrgency: synced.style_countdownUrgency,
			});
		}
	}, [general_layout?.isCustomizerGeneralLayout]);

	//
	useEffect(() => {
		if (!advance_motionEffect) {
			setAttributes({ advance_motionEffect: MY_MOTION_EFFECT_DEMO });
		}
	}, [advance_motionEffect]);
	useEffect(() => {
		if (!general_layout) {
			setAttributes({ general_layout: WCB_PRODUCTS_PANEL_GENERAL_LAYOUT_DEMO });
		}
	}, [general_layout]);
	useEffect(() => {
		if (!style_category) {
			setAttributes({ style_category: WCB_PRODUCTS_PANEL_STYLE_CATEGORY_DEMO });
		}
	}, [style_category]);

	useEffect(() => {
		const currentWishlist = buildStyleWishlistButtonDefault(
			attributes.style_wishlistBtn as any
		);
		if (
			!style_wishlistBtn ||
			style_wishlistBtn.position !== currentWishlist.position ||
			style_wishlistBtn.style !== currentWishlist.style ||
			style_wishlistBtn.wishlist_plugin_active !== currentWishlist.wishlist_plugin_active
		) {
			setAttributes({
				style_wishlistBtn: currentWishlist,
			});
		}
	}, [style_wishlistBtn]);
	//

	useEffect(() => {
		const hasCountdownUrgencyConfig =
			style_countdownUrgency && Object.keys(style_countdownUrgency).length > 0;
		if (!hasCountdownUrgencyConfig) {
			setAttributes({
				style_countdownUrgency: buildStyleCountdownUrgencyDefault(
					attributes.style_countdownUrgency as any
				),
			});
		}
	}, [style_countdownUrgency]);

	useEffect(() => {
		const currentQuickView = buildStyleQuickViewButtonDefault(undefined);
		if (
			!style_quickViewBtn ||
			style_quickViewBtn.position !== currentQuickView.position ||
			style_quickViewBtn.enabled !== currentQuickView.enabled ||
			style_quickViewBtn.show_icon !== currentQuickView.show_icon ||
			style_quickViewBtn.bg_color !== currentQuickView.bg_color ||
			style_quickViewBtn.text_color !== currentQuickView.text_color ||
			style_quickViewBtn.hover_bg_color !== currentQuickView.hover_bg_color ||
			style_quickViewBtn.hover_text_color !== currentQuickView.hover_text_color ||
			style_quickViewBtn.border_radius !== currentQuickView.border_radius
		) {
			setAttributes({
				style_quickViewBtn: currentQuickView,
			});
		}
	}, [style_quickViewBtn]);

	// Sync Customizer "Products Per Row" to block when not manually overridden by user.
	useEffect(() => {
		if (!style_layout) return;
		// User explicitly set column → don't override with Customizer value.
		if (style_layout.isNumberOfColumnEdited) return;

		const theme = getThemeDefaults();
		const customizerDesktop = theme?.product_per_row?.desktop ?? null;
		const customizerTablet = theme?.product_per_row?.tablet ?? null;
		const customizerMobile = theme?.product_per_row?.mobile ?? null;

		const stored = style_layout.numberOfColumnFromCustomizer;
		if (!stored) return;

		const customizerChanged =
			stored.Desktop !== customizerDesktop ||
			stored.Tablet !== customizerTablet ||
			stored.Mobile !== customizerMobile;

		if (!customizerChanged) return;

		setAttributes({
			style_layout: {
				...style_layout,
				numberOfColumn: {
					Desktop: customizerDesktop ?? style_layout.numberOfColumn.Desktop,
					Tablet: customizerTablet ?? style_layout.numberOfColumn.Tablet,
					Mobile: customizerMobile ?? style_layout.numberOfColumn.Mobile,
				},
				numberOfColumnFromCustomizer: {
					Desktop: customizerDesktop ?? style_layout.numberOfColumn.Desktop,
					Tablet: customizerTablet ?? undefined,
					Mobile: customizerMobile ?? undefined,
				},
			},
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [!!style_layout]);

	// Sync Customizer "Products Per Page" to block when not manually overridden by user.
	useEffect(() => {
		if (!general_sortingAndFiltering || general_sortingAndFiltering.isNumberOfItemsEdited) {
			return;
		}
		const customizerPerPage = getThemeDefaults()?.product_per_page ?? null;
		const stored = general_sortingAndFiltering.numberOfItemsFromCustomizer;
		if (stored === undefined || customizerPerPage === null || stored === customizerPerPage) {
			return;
		}

		setAttributes({
			general_sortingAndFiltering: {
				...general_sortingAndFiltering,
				numberOfItems: customizerPerPage,
				numberOfItemsFromCustomizer: customizerPerPage,
			},
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [!!general_sortingAndFiltering]);

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		// Inside-image badges use position: absolute, so margin-bottom only affects static placement.
		const showBadgeMarginBottom = !(
			(effectiveAttrs.general_featuredImage?.isShowFeaturedImage ?? true) &&
			(effectiveAttrs.general_content?.saleBadgePosition ?? "Inside image") ===
				"Inside image"
		);

		switch (tab.name) {
			case "General":
				return (
					<>
						{general_sortingAndFiltering && (
							<WcbProducstPanelSortingAndFiltering
								onToggle={() =>
									handleTogglePanel("General", "SortingAndFiltering", true)
								}
								initialOpen={
									tabGeneralIsPanelOpen === "SortingAndFiltering" ||
									tabGeneralIsPanelOpen === "first"
								}
								opened={
									tabGeneralIsPanelOpen === "SortingAndFiltering" || undefined
								}
								//
								setAttr__={(data) => {
									setAttributes({ general_sortingAndFiltering: data });
								}}
								panelData={effectiveAttrs.general_sortingAndFiltering || general_sortingAndFiltering}
							/>
						)}
						{
							general_layout && (
								<WcbProducstPanelGeneralLayout
									onToggle={() =>
										handleTogglePanel("General", "Layout")
									}
									initialOpen={tabGeneralIsPanelOpen === "Layout"}
									opened={tabGeneralIsPanelOpen === "Layout" || undefined}
									//
									setAttr__={(data) => {
										setAttributes({ general_layout: data });
									}}
									panelData={general_layout}
								/>
							)
						}
						{
							general_layout?.isCustomizerGeneralLayout == true && (
								<>
									{general_content && (
										<WcbProductsPanelContent
											onToggle={() => handleTogglePanel("General", "Content")}
											initialOpen={tabGeneralIsPanelOpen === "Content"}
											opened={tabGeneralIsPanelOpen === "Content" || undefined}
											//
											setAttr__={(data) => {
												setAttributes({ general_content: data });
											}}
											panelData={general_content}
										/>
									)}
									{general_featuredImage && (
										<WcbProductsPanelFeaturedImage
											onToggle={() =>
												handleTogglePanel("General", "PostFeaturedImage")
											}
											initialOpen={tabGeneralIsPanelOpen === "PostFeaturedImage"}
											opened={
												tabGeneralIsPanelOpen === "PostFeaturedImage" || undefined
											}
											//
											setAttr__={(data) => {
												setAttributes({ general_featuredImage: data });
											}}
											panelData={general_featuredImage}
										/>
									)}
									{general_addToCartBtn && (
										<WcbProductsPanelButton
											onToggle={() => handleTogglePanel("General", "Button")}
											initialOpen={tabGeneralIsPanelOpen === "Button"}
											opened={tabGeneralIsPanelOpen === "Button" || undefined}
											//
											setAttr__={(data) => {
												const isPosChanged = data.position !== general_addToCartBtn?.position;
												if (isPosChanged) {
													const posDefaults = buildStyleAddToCartBtnDefault(undefined, data.position);
													setAttributes({
														general_addToCartBtn: data,
														style_addToCardBtn: {
															...posDefaults,
															...style_addToCardBtn,
															typography: style_addToCardBtn?.typography ?? posDefaults.typography,
															padding: style_addToCardBtn?.padding ?? posDefaults.padding,
															marginBottom: style_addToCardBtn?.marginBottom ?? posDefaults.marginBottom,
															colorAndBackgroundColor: posDefaults.colorAndBackgroundColor,
															border: {
																...(posDefaults.border || {}),
																...(style_addToCardBtn?.border || {}),
																radius: posDefaults.border?.radius ?? style_addToCardBtn?.border?.radius,
															},
														},
													});
												} else {
													setAttributes({ general_addToCartBtn: data });
												}
											}}
											panelData={general_addToCartBtn}
										/>
									)}
								</>
							)
						}

						{general_pagination && (
							<WcbProductsPanelPagination
								onToggle={() => handleTogglePanel("General", "Pagination")}
								initialOpen={tabGeneralIsPanelOpen === "Pagination"}
								opened={tabGeneralIsPanelOpen === "Pagination" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ general_pagination: data });
								}}
								panelData={general_pagination}
							/>
						)}
					</>
				);
			case "Styles":
				return (
					<>
						{
							general_layout?.isCustomizerGeneralLayout == true && (

								<>
									{style_layout && (
										<WcbProductsPanel_StyleLayout
											onToggle={() =>
												handleTogglePanel("Styles", "_StyleLayout", true)
											}
											initialOpen={
												tabStylesIsPanelOpen === "_StyleLayout" ||
												tabStylesIsPanelOpen === "first"
											}
											opened={tabStylesIsPanelOpen === "_StyleLayout" || undefined}
											//
											setAttr__={(data) => {
												setAttributes({ style_layout: data });
											}}
											panelData={style_layout}
										/>
									)}
									{general_featuredImage?.isShowFeaturedImage && style_featuredImage && (
										<WcbProductsPanel_StyleFeaturedImage
											onToggle={() =>
												handleTogglePanel("Styles", "_StyleFeaturedImage")
											}
											initialOpen={tabStylesIsPanelOpen === "_StyleFeaturedImage"}
											opened={
												tabStylesIsPanelOpen === "_StyleFeaturedImage" || undefined
											}
											//
											setAttr__={(data) => {
												setAttributes({ style_featuredImage: data });
											}}
											panelData={style_featuredImage}
											imagePosition="top"
										/>
									)}

									{general_content?.isShowCategory && style_category && (
										<WcbProductsPanel_StyleCategory
											onToggle={() => handleTogglePanel("Styles", "_StyleCategory")}
											initialOpen={tabStylesIsPanelOpen === "_StyleCategory"}
											opened={tabStylesIsPanelOpen === "_StyleCategory" || undefined}
											//
											setAttr__={(data) => {
												setAttributes({ style_category: data });
											}}
											panelData={style_category}
										/>
									)}

									{general_content?.isShowTitle && style_title && (
										<WcbProductsPanel_StyleTitle
											onToggle={() => handleTogglePanel("Styles", "_StyleTitle")}
											initialOpen={tabStylesIsPanelOpen === "_StyleTitle"}
											opened={tabStylesIsPanelOpen === "_StyleTitle" || undefined}
											//
											setAttr__={(data) => {
												setAttributes({ style_title: data });
											}}
											panelData={effectiveAttrs.style_title || style_title}
										/>
									)}

									{general_content?.isShowSaleBadge && style_saleBadge && (
										<WcbProductsPanel_StyleSaleBadge
											onToggle={() => handleTogglePanel("Styles", "_StyleSaleBadge")}
											initialOpen={tabStylesIsPanelOpen === "_StyleSaleBadge"}
											opened={tabStylesIsPanelOpen === "_StyleSaleBadge" || undefined}
											showMarginBottom={showBadgeMarginBottom}
											//
											setAttr__={(data) => {
												setAttributes({ style_saleBadge: data });
											}}
											panelData={style_saleBadge}
										/>
									)}
									{
										general_content?.isShowOutOfStock && style_outOfStock && (
											<WcbProductsPanel_StyleOutOfStock
												onToggle={() => handleTogglePanel("Styles", "_StyleOutOfStock")}
												initialOpen={tabStylesIsPanelOpen === "_StyleOutOfStock"}
												opened={tabStylesIsPanelOpen === "_StyleOutOfStock" || undefined}
												showMarginBottom={showBadgeMarginBottom}
												//
												setAttr__={(data) => {
													setAttributes({ style_outOfStock: data });
												}}
												panelData={style_outOfStock}
											/>
										)
									}
									{general_content?.isShowRating && style_rating && (
										<WcbProductsPanel_StyleRating
											onToggle={() => handleTogglePanel("Styles", "_StyleRating")}
											initialOpen={tabStylesIsPanelOpen === "_StyleRating"}
											opened={tabStylesIsPanelOpen === "_StyleRating" || undefined}
											//
											setAttr__={(data) => {
												setAttributes({ style_rating: data });
											}}
											panelData={style_rating}
										/>
									)}

									{general_content?.isShowPrice && style_price && (
										<WcbProductsPanel_StylePrice
											onToggle={() => handleTogglePanel("Styles", "_StylePrice")}
											initialOpen={tabStylesIsPanelOpen === "_StylePrice"}
											opened={tabStylesIsPanelOpen === "_StylePrice" || undefined}
											//
											setAttr__={(data) => {
												setAttributes({ style_price: data });
											}}
											panelData={effectiveAttrs.style_price || style_price}
										/>
									)}

									{general_addToCartBtn?.isShowButton && style_addToCardBtn && (
										<WcbProductsPanel_StyleAddToCartBtn
											onToggle={() =>
												handleTogglePanel("Styles", "_StyleAddToCartBtn")
											}
											initialOpen={tabStylesIsPanelOpen === "_StyleAddToCartBtn"}
											opened={
												tabStylesIsPanelOpen === "_StyleAddToCartBtn" || undefined
											}
											//
											setAttr__={(data) => {
												setAttributes({ style_addToCardBtn: data });
											}}
											panelData={style_addToCardBtn}
										/>
									)}

									{general_pagination?.isShowPagination && style_pagination && (
										<WcbProductsPanel_StylePagination
											onToggle={() => handleTogglePanel("Styles", "_StylePagination")}
											initialOpen={tabStylesIsPanelOpen === "_StylePagination"}
											opened={
												tabStylesIsPanelOpen === "_StylePagination" || undefined
											}
											//
											setAttr__={(data) => {
												setAttributes({ style_pagination: data });
											}}
											panelData={style_pagination}
										/>
									)}

									<PanelBody
										onToggle={() => handleTogglePanel("Styles", "StyleBorder")}
										initialOpen={tabStylesIsPanelOpen === "StyleBorder"}
										opened={tabStylesIsPanelOpen === "StyleBorder" || undefined}
										title={__("Border", "wcb")}
									>
										{style_border && (
											<MyBorderControl
												borderControl={style_border}
												setAttrs__border={(data) =>
													setAttributes({ style_border: data })
												}
											/>
										)}
									</PanelBody>
								</>
							)
						}
						<WcbProductsPanel_StyleDimension
							onToggle={() => handleTogglePanel("Styles", "_StyleDimension")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDimension"}
							opened={tabStylesIsPanelOpen === "_StyleDimension" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_dimension: data });
							}}
							panelData={style_dimension || WCB_PRODUCTS_PANEL_STYLE_DIMENSION_DEMO}
						/>
					</>
				);
			case "Advances":
				return (
					<>
						{advance_responsiveCondition && advance_zIndex && (
							<AdvancePanelCommon
								advance_motionEffect={advance_motionEffect}
								advance_responsiveCondition={advance_responsiveCondition}
								advance_zIndex={advance_zIndex}
								handleTogglePanel={handleTogglePanel}
								setAttributes={setAttributes}
								tabAdvancesIsPanelOpen={tabAdvancesIsPanelOpen}
							/>
						)}
					</>
				);

			default:
				return <div></div>;
		}
	};

	const renderToobar = () => {
		if (!general_sortingAndFiltering || !style_layout || !general_pagination) {
			return null;
		}

		const itemPerPage = effectiveAttrs.general_sortingAndFiltering?.numberOfItems || 9;
		const columnDesktop = style_layout?.numberOfColumn.Desktop || 1;
		const isShowPagination = general_pagination?.isShowPagination;
		const maxPageShow = general_pagination?.pageLimit || 0;

		return (
			<Dropdown
				contentClassName="block-library-query-toolbar__popover"
				renderToggle={({ onToggle }) => (
					<ToolbarButton
						icon={settings}
						label={__("Display settings")}
						onClick={onToggle}
					/>
				)}
				renderContent={() => (
					<>
						<BaseControl id="1">
							{general_sortingAndFiltering && (
								<NumberControl
									__unstableInputWidth="60px"
									label={__("Items per Page")}
									labelPosition="edge"
									min={1}
									max={100}
									onChange={(value: any) => {
										if (isNaN(value) || value < 1 || value > 100) {
											return;
										}
										setAttributes({
											general_sortingAndFiltering: {
												...general_sortingAndFiltering,
												numberOfItems: Number(value || 1),
												isNumberOfItemsEdited: true,
											},
										});
									}}
									step="1"
									value={itemPerPage}
									isDragEnabled={false}
								/>
							)}
						</BaseControl>
						<BaseControl id="2">
							{style_layout && (
								<NumberControl
									__unstableInputWidth="60px"
									label={__("Column in Desktop")}
									labelPosition="edge"
									min={0}
									max={100}
									onChange={(value: any) => {
										if (isNaN(value) || value < 0 || value > 100) {
											return;
										}
										setAttributes({
											style_layout: {
												...style_layout,
												numberOfColumn: {
													...style_layout.numberOfColumn,
													Desktop: Number(value || 1),
												},
												isNumberOfColumnEdited: true,
											},
										});
									}}
									step="1"
									value={columnDesktop}
									isDragEnabled={false}
								/>
							)}
						</BaseControl>
						<BaseControl id="3">
							{general_pagination && (
								<ToggleControl
									label={__("Show pagination", "wcb")}
									onChange={(checked) =>
										setAttributes({
											general_pagination: {
												...general_pagination,
												isShowPagination: checked,
											},
										})
									}
									checked={isShowPagination}
								/>
							)}
						</BaseControl>
						{isShowPagination && (
							<BaseControl
								id="4"
								help={__(
									"Limit the pages you want to show, even if the query has more results. To show all pages use 0 (zero).",
									"wcb"
								)}
							>
								<NumberControl
									id={"maxPageInputId"}
									__unstableInputWidth="60px"
									label={__("Max page to show")}
									labelPosition="edge"
									min={0}
									onChange={(value: any) => {
										if (isNaN(value) || value < 0) {
											return;
										}
										setAttributes({
											general_pagination: {
												...general_pagination,
												pageLimit: value,
												isShowPagination: true,
											},
										});
									}}
									step="1"
									value={maxPageShow}
									isDragEnabled={false}
								/>
							</BaseControl>
						)}
					</>
				)}
			/>
		);
	};

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		const cs: WcbAttrsForSave = {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_sortingAndFiltering,
			general_content,
			general_layout,
			general_featuredImage,
			general_addToCartBtn,
			general_pagination,
			style_title,
			style_featuredImage,
			style_layout,
			style_addToCardBtn,
			style_pagination,
			style_saleBadge,
			style_outOfStock,
			style_border,
			style_price,
			style_rating,
			style_wishlistBtn,
			style_quickViewBtn,
			style_countdownUrgency,
			advance_motionEffect,
			style_category,
			style_dimension,
		};
		return cs;
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_sortingAndFiltering,
		general_content,
		general_layout,
		general_featuredImage,
		general_addToCartBtn,
		general_pagination,
		style_title,
		style_featuredImage,
		style_layout,
		style_addToCardBtn,
		style_pagination,
		style_saleBadge,
		style_outOfStock,
		style_border,
		style_price,
		style_rating,
		style_wishlistBtn,
		style_quickViewBtn,
		style_countdownUrgency,
		advance_motionEffect,
		style_category,
		style_dimension,
	]);

	const effectiveAttrs = useMemo(() => {
		return applyThemeDefaultsToBlockAttributes(attributes);
	}, [attributes]);

	const WcbAttrsForServerSide = useMemo(() => {
		return {
			className,
			uniqueId,
			general_sortingAndFiltering: effectiveAttrs.general_sortingAndFiltering,
			general_content: effectiveAttrs.general_content,
			general_layout: effectiveAttrs.general_layout,
			general_featuredImage: effectiveAttrs.general_featuredImage,
			general_addToCartBtn: effectiveAttrs.general_addToCartBtn,
			general_pagination: effectiveAttrs.general_pagination,
			style_title: effectiveAttrs.style_title,
			style_featuredImage: effectiveAttrs.style_featuredImage,
			style_layout: effectiveAttrs.style_layout,
			style_addToCardBtn: effectiveAttrs.style_addToCardBtn,
			style_pagination: effectiveAttrs.style_pagination,
			style_saleBadge: effectiveAttrs.style_saleBadge,
			style_outOfStock: effectiveAttrs.style_outOfStock,
			style_border: effectiveAttrs.style_border,
			style_price: effectiveAttrs.style_price,
			style_rating: effectiveAttrs.style_rating,
			style_wishlistBtn: effectiveAttrs.style_wishlistBtn,
			style_quickViewBtn: effectiveAttrs.style_quickViewBtn,
			style_countdownUrgency: effectiveAttrs.style_countdownUrgency,
			style_dimension: effectiveAttrs.style_dimension,
			style_category: effectiveAttrs.style_category,
			advance_responsiveCondition: effectiveAttrs.advance_responsiveCondition,
			advance_zIndex: effectiveAttrs.advance_zIndex,
			advance_motionEffect: effectiveAttrs.advance_motionEffect,
		};
	}, [effectiveAttrs, className, uniqueId]);

	const WcbAttrsForSaveValue = useMemo(() => {
		return effectiveAttrs as WcbAttrsForSave;
	}, [effectiveAttrs]);

	const numCol = effectiveAttrs.style_layout?.numberOfColumn;
	const colDesk = typeof numCol === "object" && numCol !== null ? (numCol.Desktop ?? 2) : (numCol ?? 2);
	const colTab = typeof numCol === "object" && numCol !== null ? (numCol.Tablet ?? colDesk) : colDesk;
	const colMob = typeof numCol === "object" && numCol !== null ? (numCol.Mobile ?? colTab) : colTab;

	const rowGapDesk = effectiveAttrs.style_layout?.rowGap?.Desktop ?? "1rem";
	const rowGapTab = effectiveAttrs.style_layout?.rowGap?.Tablet ?? rowGapDesk;
	const rowGapMob = effectiveAttrs.style_layout?.rowGap?.Mobile ?? rowGapTab;

	const colGapDesk = effectiveAttrs.style_layout?.colunmGap?.Desktop ?? "1rem";
	const colGapTab = effectiveAttrs.style_layout?.colunmGap?.Tablet ?? colGapDesk;
	const colGapMob = effectiveAttrs.style_layout?.colunmGap?.Mobile ?? colGapTab;

	const activeCol =
		deviceType === "Mobile" ? colMob : deviceType === "Tablet" ? colTab : colDesk;
	const activeRowGap =
		deviceType === "Mobile"
			? rowGapMob
			: deviceType === "Tablet"
			? rowGapTab
			: rowGapDesk;
	const activeColGap =
		deviceType === "Mobile"
			? colGapMob
			: deviceType === "Tablet"
			? colGapTab
			: colGapDesk;

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps.className
					} wcb-block-products-editor-swithToScrollSnapX__${effectiveAttrs.style_layout?.swithToScrollSnapX ? effectiveAttrs.style_layout.swithToScrollSnapX.toString() : "None"}`}
				style={{
					...wrapBlockProps.style,
					"--wcb-editor-col": activeCol,
					"--wcb-editor-col-mobile": colMob,
					"--wcb-editor-col-tablet": colTab,
					"--wcb-editor-col-desktop": colDesk,
					"--wcb-editor-row-gap": activeRowGap,
					"--wcb-editor-col-gap": activeColGap,
					"--wcb-editor-row-gap-mobile": rowGapMob,
					"--wcb-editor-row-gap-tablet": rowGapTab,
					"--wcb-editor-row-gap-desktop": rowGapDesk,
					"--wcb-editor-col-gap-mobile": colGapMob,
					"--wcb-editor-col-gap-tablet": colGapTab,
					"--wcb-editor-col-gap-desktop": colGapDesk,
				} as React.CSSProperties}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{/* @ts-ignore */}
				<BlockControls group="block">{renderToobar()}</BlockControls>

				{/* CSS IN JS */}
				{!!uniqueId &&
					!!style_layout &&
					!!style_price &&
					!!advance_zIndex &&
					!!advance_responsiveCondition &&
					!!advance_motionEffect && (
						<GlobalCss
							{...(WcbAttrsForSaveValue as Required<WcbAttrsForSave>)}
							previewDeviceType={deviceType}
						/>
					)}

				{/* CHILD CONTENT  */}
				{uniqueId && !!style_layout && !!style_price && (
					<ServerSideRender
						block="boostify-blocks/products"
						attributes={WcbAttrsForServerSide}
						EmptyResponsePlaceholder={EmptyPlaceholder}
						LoadLoadingResponsePlaceholder={LoadingPlaceholder}
						httpMethod="POST"
					/>
				)}
			</div>
		</MyCacheProvider>
	);
};

export default withSpokenMessages(Edit);

const EmptyPlaceholder = () => (
	// <Placeholder
	// 	icon={<Icon icon={file} />}
	// 	label={__("Woostify block Products", "wcb")}
	// 	className="wc-block-products-grid wc-block-products-category"
	// >
	// 	{__("No products were found that matched your selection.", "wcb")}
	// </Placeholder>
	<></>
);
const LoadingPlaceholder = () => (
	<div>
		<Spinner />
	</div>
);
