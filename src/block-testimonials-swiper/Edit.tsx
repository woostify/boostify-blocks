import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC, useCallback, useRef, useMemo } from "react";
import { TestimonialItem, WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
// @ts-ignore
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbTestimonialsPanelGeneral from "../block-testimonials/WcbTestimonialsPanelGeneral";
import WcbTestimonialsPanelImages from "../block-testimonials/WcbTestimonialsPanelImages";
import WcbTestimonialsPanelRating from "../block-testimonials/WcbTestimonialsPanelRating";
import WcbTestimonialsPanelCarousel from "../block-testimonials/WcbTestimonialsPanelCarousel";
import { DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES } from "../________";
import WcbTestimonialsPanel_StyleName from "../block-testimonials/WcbTestimonialsPanel_StyleName";
import WcbTestimonialsPanel_StyleContent from "../block-testimonials/WcbTestimonialsPanel_StyleContent";
import WcbTestimonialsPanel_StyleCompany from "../block-testimonials/WcbTestimonialsPanel_StyleCompany";
import WcbTestimonialsPanel_StyleImage from "../block-testimonials/WcbTestimonialsPanel_StyleImage";
import WcbTestimonialsPanel_StyleRating from "../block-testimonials/WcbTestimonialsPanel_StyleRating";
import WcbTestimonialsPanel_StyleArrowDots from "../block-testimonials/WcbTestimonialsPanel_StyleArrowDots";
import WcbTestimonialsPanel_StyleBackground from "../block-testimonials/WcbTestimonialsPanel_StyleBackground";
import WcbTestimonialsPanel_StyleDimension from "../block-testimonials/WcbTestimonialsPanel_StyleDimension";
import getImageUrlBySize from "../utils/getImageUrlBySize";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import OverlayBackgroundByBgControl from "../components/OverlayBackgroundByBgControl";
import VideoBackgroundByBgControl from "../components/VideoBackgroundByBgControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import type { Swiper as SwiperInstance } from "swiper/types";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
import converUniqueIdToAnphaKey, {
	converClientIdToUniqueClass,
} from "../utils/converUniqueIdToAnphaKey";

export const TESTIMONIAL_ITEM_DEMO: TestimonialItem = {
	name: "Drink Water",
	companyName: "CEO of Meta",
	content:
		"I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!",
};

// Swiper breakpoints are min-width based ("applies at this width and up").
// Must match the constants in public/js/testimonials-swiper/
// boostify-blocks-testimonials-swiper-view.js (frontend store).
const BREAKPOINT_TABLET = 768;
const BREAKPOINT_DESKTOP = 1024;

// Stable reference so swiper/react doesn't destroy+recreate the instance on every render
const SWIPER_MODULES = [Navigation, Pagination, Autoplay];

// Patch Swiper's mount() to support elements inside the Gutenberg iframe
// (cross-realm DOM node) - see src/block-slider-swiper/Edit.tsx for the full
// explanation. Guarded so the patch only applies once even if both Swiper
// blocks are active on the same editor page.
if (!(SwiperCore.prototype as any).__wcbMountGuarded) {
	SwiperCore.prototype.mount = function (this: any, element?: any) {
		if (this.mounted) return true;
		if (typeof document === "undefined") return false;

		const initialEl = element ?? this.params.el;
		let el: any = null;

		if (typeof initialEl === "string") {
			el = document.querySelector(initialEl);
			if (!el) {
				const iframes = document.querySelectorAll("iframe");
				for (let i = 0; i < iframes.length; i++) {
					try {
						const iframeDoc = iframes[i].contentDocument;
						if (iframeDoc) {
							el = iframeDoc.querySelector(initialEl);
							if (el) break;
						}
					} catch {
						// Ignore cross-origin error
					}
				}
			}
		} else if (
			initialEl &&
			(initialEl.nodeType === 1 || initialEl instanceof HTMLElement)
		) {
			el = initialEl;
		}

		if (!el) {
			return false;
		}

		el.swiper = this;
		const parent = el.parentNode;
		if (
			parent &&
			parent.host &&
			parent.host.nodeName ===
			(this.params.swiperElementNodeName || "").toUpperCase()
		) {
			this.isElement = true;
		}

		const getWrapperSelector = () => {
			return `.${(this.params.wrapperClass || "swiper-wrapper")
				.trim()
				.split(/\s+/)
				.join(".")}`;
		};

		const getWrapper = () => {
			if (el && el.shadowRoot) {
				return el.shadowRoot.querySelector(getWrapperSelector());
			}
			const children = Array.from(el.children || []);
			return (
				children.find((c: any) =>
					c.matches ? c.matches(getWrapperSelector()) : false
				) || null
			);
		};

		let wrapperEl: any = getWrapper();
		if (!wrapperEl && this.params.createElements) {
			const ownerDoc = el.ownerDocument || document;
			wrapperEl = ownerDoc.createElement("div");
			wrapperEl.className = this.params.wrapperClass || "swiper-wrapper";
			el.appendChild(wrapperEl);
			Array.from(el.children).forEach((slideEl: any) => {
				if (
					slideEl !== wrapperEl &&
					slideEl.matches?.(
						`.${this.params.slideClass || "swiper-slide"}`
					)
				) {
					wrapperEl.appendChild(slideEl);
				}
			});
		}

		const host = this.isElement ? el.parentNode.host : null;
		const ownerWin = el.ownerDocument?.defaultView || window;
		const getDirStyle = (target: any, prop: string) => {
			try {
				return ownerWin
					.getComputedStyle(target, null)
					.getPropertyValue(prop);
			} catch {
				return "";
			}
		};

		const isRtl =
			(el.dir || "").toLowerCase() === "rtl" ||
			getDirStyle(el, "direction") === "rtl";

		Object.assign(this, {
			el,
			wrapperEl,
			slidesEl: this.isElement && !host?.slideSlots ? host : wrapperEl,
			hostEl: this.isElement ? host : el,
			mounted: true,
			rtl: isRtl,
			rtlTranslate: this.params.direction === "horizontal" && isRtl,
			wrongRTL: wrapperEl
				? getDirStyle(wrapperEl, "display") === "-webkit-box"
				: false,
		});
		return true;
	};
	(SwiperCore.prototype as any).__wcbMountGuarded = true;
}

// Patch Swiper's update() to avoid crashing when the instance was already destroyed in the editor
if (!(SwiperCore.prototype as any).__wcbUpdateGuarded) {
	const originalUpdate = SwiperCore.prototype.update;
	SwiperCore.prototype.update = function (this: any, ...args: any[]) {
		if (!this || this.destroyed || !this.el) return;
		return originalUpdate.apply(this, args as []);
	};
	(SwiperCore.prototype as any).__wcbUpdateGuarded = true;
}

// Swiper's Navigation module can auto-insert a default arrow icon into empty
// prev/next buttons, but it uses the admin (top window) `document`, not the
// Gutenberg iframe's document, so attaching to a button inside the iframe
// silently fails. Draw the icon with React instead - React always creates
// nodes in the correct document, iframe or not.
function ArrowIcon({ direction }: { direction: "next" | "prev" }) {
	return (
		<svg
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d={
					direction === "next"
						? "M8.25 4.5l7.5 7.5-7.5 7.5"
						: "M15.75 19.5L8.25 12l7.5-7.5"
				}
			/>
		</svg>
	);
}

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		uniqueId,
		testimonials,
		general_general,
		general_images,
		general_rating,
		general_carousel,
		style_name,
		style_content,
		style_company,
		style_image,
		style_rating,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_dimension,
		advance_motionEffect,
	} = attributes;
	//  COMMON HOOKS

	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const ref = useRef<HTMLDivElement>(null);
	const wrapBlockProps = useBlockProps({ ref });
	const swiperRef = useRef<SwiperInstance | null>(null);

	// Real React refs instead of selector strings: the canvas is inside an
	// <iframe>, so document.querySelector from admin can't see into it,
	// while a ref always points to the actual DOM node.
	const prevElRef = useRef<HTMLDivElement | null>(null);
	const nextElRef = useRef<HTMLDivElement | null>(null);
	const paginationRef = useRef<HTMLDivElement | null>(null);

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
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);
	//

	let CURRENT_DATA = useMemo(
		() =>
			[...Array(general_general.numberofTestimonials || 3).keys()].map(
				(_, index) => testimonials[index] || TESTIMONIAL_ITEM_DEMO
			),
		[general_general.numberofTestimonials, testimonials]
	);

	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbTestimonialsPanelGeneral
							onToggle={() => handleTogglePanel("General", "Heading", true)}
							initialOpen={
								tabGeneralIsPanelOpen === "Heading" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={tabGeneralIsPanelOpen === "Heading" || undefined}
							//
							setAttr__={(data) => {
								if (
									data.numberofTestimonials !==
									general_general.numberofTestimonials
								) {
									const newtestimonials = [
										...Array(general_general.numberofTestimonials || 3).keys(),
									].map(
										(_, index) => testimonials[index] || TESTIMONIAL_ITEM_DEMO
									);
									setAttributes({
										general_general: data,
										testimonials: newtestimonials,
									});
								} else {
									setAttributes({ general_general: data });
								}
							}}
							panelData={general_general}
						/>

						<WcbTestimonialsPanelImages
							onToggle={() => handleTogglePanel("General", "PanelImages")}
							initialOpen={tabGeneralIsPanelOpen === "PanelImages"}
							opened={tabGeneralIsPanelOpen === "PanelImages" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_images: data });
							}}
							panelData={general_images}
							numberOfItems={general_general.numberofTestimonials}
						/>

						<WcbTestimonialsPanelRating
							onToggle={() => handleTogglePanel("General", "PanelRating")}
							initialOpen={tabGeneralIsPanelOpen === "PanelRating"}
							opened={tabGeneralIsPanelOpen === "PanelRating" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_rating: data });
							}}
							panelData={general_rating}
							numberOfItems={general_general.numberofTestimonials}
						/>

						<WcbTestimonialsPanelCarousel
							onToggle={() => handleTogglePanel("General", "Carousel")}
							initialOpen={tabGeneralIsPanelOpen === "Carousel"}
							opened={tabGeneralIsPanelOpen === "Carousel" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({
									general_carousel: data,
								});
							}}
							panelData={general_carousel}
						/>
					</>
				);
			case "Styles":
				return (
					<>
						<WcbTestimonialsPanel_StyleName
							onToggle={() => handleTogglePanel("Styles", "_StyleName", true)}
							initialOpen={
								tabStylesIsPanelOpen === "_StyleName" ||
								tabStylesIsPanelOpen === "first"
							}
							opened={tabStylesIsPanelOpen === "_StyleName" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_name: data });
							}}
							panelData={style_name}
						/>
						<WcbTestimonialsPanel_StyleContent
							onToggle={() => handleTogglePanel("Styles", "_StyleContent")}
							initialOpen={tabStylesIsPanelOpen === "_StyleContent"}
							opened={tabStylesIsPanelOpen === "_StyleContent" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_content: data });
							}}
							panelData={style_content}
						/>
						<WcbTestimonialsPanel_StyleCompany
							onToggle={() => handleTogglePanel("Styles", "_StyleCompany")}
							initialOpen={tabStylesIsPanelOpen === "_StyleCompany"}
							opened={tabStylesIsPanelOpen === "_StyleCompany" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_company: data });
							}}
							panelData={style_company}
						/>
						<WcbTestimonialsPanel_StyleImage
							onToggle={() => handleTogglePanel("Styles", "_StyleImage")}
							initialOpen={tabStylesIsPanelOpen === "_StyleImage"}
							opened={tabStylesIsPanelOpen === "_StyleImage" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_image: data });
							}}
							panelData={style_image}
						/>
						<WcbTestimonialsPanel_StyleRating
							onToggle={() => handleTogglePanel("Styles", "_StyleRating")}
							initialOpen={tabStylesIsPanelOpen === "_StyleRating"}
							opened={tabStylesIsPanelOpen === "_StyleRating" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_rating: data });
							}}
							panelData={style_rating}
						/>
						<WcbTestimonialsPanel_StyleArrowDots
							onToggle={() => handleTogglePanel("Styles", "_StyleArrowDots")}
							initialOpen={tabStylesIsPanelOpen === "_StyleArrowDots"}
							opened={tabStylesIsPanelOpen === "_StyleArrowDots" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_arrowAndDots: data });
							}}
							panelData={style_arrowAndDots}
						/>
						<WcbTestimonialsPanel_StyleBackground
							onToggle={() => handleTogglePanel("Styles", "_StyleBackground")}
							initialOpen={tabStylesIsPanelOpen === "_StyleBackground"}
							opened={tabStylesIsPanelOpen === "_StyleBackground" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_backgroundAndBorder: data });
							}}
							panelData={style_backgroundAndBorder}
						/>
						<WcbTestimonialsPanel_StyleDimension
							onToggle={() => handleTogglePanel("Styles", "_StyleDimension")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDimension"}
							opened={tabStylesIsPanelOpen === "_StyleDimension" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_dimension: data });
							}}
							panelData={style_dimension}
						/>
					</>
				);
			case "Advances":
				return (
					<>
						<AdvancePanelCommon
							advance_motionEffect={advance_motionEffect}
							advance_responsiveCondition={
								attributes.advance_responsiveCondition
							}
							advance_zIndex={attributes.advance_zIndex}
							handleTogglePanel={handleTogglePanel}
							setAttributes={setAttributes}
							tabAdvancesIsPanelOpen={tabAdvancesIsPanelOpen}
						/>
					</>
				);

			default:
				return <div></div>;
		}
	};

	const renderTestimonialItemContent = (
		item: TestimonialItem,
		index: number
	) => {
		return (
			<RichText
				tagName="div"
				className="wcb-testimonials-swiper__item-content"
				value={item.content}
				onChange={(content) => {
					setAttributes({
						testimonials: CURRENT_DATA.map((item, j) => {
							if (j === index) {
								return {
									...item,
									content: content,
								};
							}
							return item;
						}),
					});
				}}
				placeholder={__("Content of testimonials")}
			/>
		);
	};

	const renderTestimonialItemName = (item: TestimonialItem, index: number) => {
		return (
			<RichText
				tagName="div"
				className="wcb-testimonials-swiper__item-name"
				value={item.name}
				onChange={(content) => {
					setAttributes({
						testimonials: CURRENT_DATA.map((item, j) => {
							if (j === index) {
								return {
									...item,
									name: content,
								};
							}
							return item;
						}),
					});
				}}
				placeholder={__("Name")}
			/>
		);
	};

	const renderTestimonialItemCompany = (
		item: TestimonialItem,
		index: number
	) => {
		return (
			<RichText
				tagName="div"
				className="wcb-testimonials-swiper__item-company"
				value={item.companyName}
				onChange={(content) => {
					setAttributes({
						testimonials: CURRENT_DATA.map((item, j) => {
							if (j === index) {
								return {
									...item,
									companyName: content,
								};
							}
							return item;
						}),
					});
				}}
				placeholder={__("Company Name")}
			/>
		);
	};

	const renderTestimonialItemImage = (item: TestimonialItem, index: number) => {
		const { images, isShowImage, imageSize } = general_images;
		const { imageSize: imageSizeAttr } = style_image;
		const { media_desktop, media_tablet } = DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
		const { mediaId, mediaSrcSet } = images[index] || {};
		if (!isShowImage || !mediaId) {
			return null;
		}
		const { value_Desktop, value_Mobile, value_Tablet } =
			getValueFromAttrsResponsives(imageSizeAttr);
		const url = getImageUrlBySize(images[index], imageSize);
		return (
			<div className="wcb-testimonials-swiper__item-image">
				<img
					src={url}
					alt=""
					srcSet={mediaSrcSet}
					sizes={`(max-width: ${media_tablet}) ${value_Mobile}, (max-width: ${media_desktop}) ${value_Tablet}, ${value_Desktop}`}
				/>
			</div>
		);
	};

	const renderTestimonialItemRating = (item: TestimonialItem, index: number) => {
		const { ratings, isShowRating } = general_rating;
		if (!isShowRating) {
			return null;
		}
		return (
			<div className="wcb-testimonials-swiper__item-rating">
				{ ratings[index] && Array.from({ length: 5 }, (_, i) => {
					const clsActive = i < ratings[index] ? 'active' : '';
					return (
						<span key={i} className={`wcb-star ${clsActive}`}>
							★
						</span>
					);
				})}
			</div>
		);
	};

	const renderTestimonialItem = (item: TestimonialItem, index: number) => {
		const { imagePosition } = general_images;
		const { ratingPosition } = general_rating;
		return (
			<SwiperSlide key={index}>
				<div className="wcb-testimonials-swiper__item">
					<div className="wcb-testimonials-swiper__item-background">
						<div className=""></div>
						<VideoBackgroundByBgControl
							bgType={style_backgroundAndBorder.background.bgType}
							videoData={style_backgroundAndBorder.background.videoData}
						/>
						<OverlayBackgroundByBgControl
							bgType={style_backgroundAndBorder.background.bgType}
							overlayType={style_backgroundAndBorder.background.overlayType}
						/>
						<div className="wcb-testimonials-swiper__item-wrap-inner">
							{/* IMAGE */}
							{imagePosition === "left" &&
								renderTestimonialItemImage(item, index)}

							<div className="wcb-testimonials-swiper__item-inner">
								{/* RATING */}
								{ ratingPosition === "top" &&
									renderTestimonialItemRating(item, index) }

								{/* IMAGE */}
								{imagePosition === "top" &&
									renderTestimonialItemImage(item, index)}

								{/* CONTENT */}
								{renderTestimonialItemContent(item, index)}

								{/* RATING */}
								{ ratingPosition === "middle" &&
									renderTestimonialItemRating(item, index) }

								<div className="wcb-testimonials-swiper__item-user">
									{/* IMAGE */}
									{imagePosition === "bottom" &&
										renderTestimonialItemImage(item, index)}

									<div className="wcb-testimonials-swiper__item-nameandcompany">
										{/* NAME */}
										<div>{renderTestimonialItemName(item, index)}</div>

										{/* COMPANY */}
										{renderTestimonialItemCompany(item, index)}
									</div>
								</div>

								{/* RATING */}
								{ ratingPosition === "bottom" &&
									renderTestimonialItemRating(item, index) }
							</div>

							{/* IMAGE */}
							{imagePosition === "right" &&
								renderTestimonialItemImage(item, index)}
						</div>
					</div>
				</div>
			</SwiperSlide>
		);
	};

	const {
		animationDuration,
		autoplaySpeed,
		hoverpause,
		isAutoPlay,
		showArrowsDots,
		adaptiveHeight,
	} = general_carousel;
	const { columns } = general_general;

	const {
		value_Desktop: columnsDesktop,
		value_Tablet: columnsTablet,
		value_Mobile: columnsMobile,
		currentDeviceValue: currentColumns,
	} = getValueFromAttrsResponsives(columns, deviceType);

	const activeCols =
		Number(currentColumns) ||
		(deviceType === "Mobile"
			? Number(columnsMobile)
			: deviceType === "Tablet"
				? Number(columnsTablet)
				: Number(columnsDesktop)) ||
		1;

	const showArrows = showArrowsDots !== "Dot";
	const showDots = showArrowsDots !== "Arrow";

	// clientId is always present from the very first render, unlike
	// uniqueId (starts as "" until the setAttributes effect above runs) -
	// using uniqueId here produced an invalid `. .swiper-button-next`
	// selector on that first render and crashed querySelectorAll.
	const parentCssClass = converClientIdToUniqueClass(clientId);

	// Selector scope for the initial (iframe-unreachable) navigation/pagination
	// config passed to <Swiper> - only used to satisfy Swiper's module setup,
	// the real binding happens via ref in reinitNavigationPagination below.
	const swiperSelectorScope = `.${parentCssClass}`;

	// forceSliderRecalc: pushes updated breakpoints/slidesPerView directly onto
	// the live Swiper instance so sidebar column changes apply instantly,
	// without a full remount (same fix as src/block-slider-swiper/Edit.tsx).
	const forceSliderRecalc = useCallback(() => {
		const swiper = swiperRef.current;
		if (swiper && !swiper.destroyed && swiper.el && swiper.el.isConnected) {
			const colsDesk = Number(columnsDesktop) || 1;
			const colsTab = Number(columnsTablet) || colsDesk;
			const colsMob = Number(columnsMobile) || colsTab;

			const newBreakpoints = {
				[BREAKPOINT_TABLET]: {
					slidesPerView: colsTab,
				},
				[BREAKPOINT_DESKTOP]: {
					slidesPerView: colsDesk,
				},
			};

			swiper.params.breakpoints = newBreakpoints;
			if (swiper.originalParams) {
				swiper.originalParams.breakpoints = { ...newBreakpoints };
				swiper.originalParams.slidesPerView = colsMob;
			}

			// In the editor, show the column count for the device being edited
			swiper.params.slidesPerView = activeCols;

			swiper.currentBreakpoint = undefined;
			swiper.update();
			if (swiper.updateAutoHeight) {
				swiper.updateAutoHeight();
			}

			if (swiper.pagination) {
				if (
					paginationRef.current &&
					swiper.params.pagination &&
					typeof swiper.params.pagination !== "boolean"
				) {
					swiper.params.pagination.el = paginationRef.current;
					if (!swiper.pagination.el) {
						swiper.pagination.init();
					}
				}
				swiper.pagination.render();
				swiper.pagination.update();
			}
		}
	}, [columnsDesktop, columnsTablet, columnsMobile, activeCols]);

	useEffect(() => {
		forceSliderRecalc();
	}, [CURRENT_DATA.length, forceSliderRecalc]);

	useEffect(() => {
		forceSliderRecalc();
	}, [columnsDesktop, columnsTablet, columnsMobile, activeCols, forceSliderRecalc]);

	useEffect(() => {
		const handleResize = () => {
			forceSliderRecalc();
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [forceSliderRecalc]);

	// reinitNavigationPagination: the key function for arrows/dots to show in
	// the editor. After Swiper inits, overwrite prevEl/nextEl/pagination.el
	// with the real refs (selector strings fail in the iframe). Returns true
	// on success, false if refs aren't ready yet (caller retries).
	const reinitNavigationPagination = useCallback(
		(swiper: SwiperInstance | null) => {
			if (
				!swiper ||
				swiper.destroyed ||
				!swiper.el ||
				!swiper.el.isConnected
			) {
				return false;
			}

			let ready = true;

			// ----- Navigation (arrows) -----
			if (
				swiper.params.navigation &&
				typeof swiper.params.navigation !== "boolean"
			) {
				if (!prevElRef.current || !nextElRef.current) {
					ready = false;
				} else {
					const prevEl = prevElRef.current;
					const nextEl = nextElRef.current;

					if (
						swiper.navigation.prevEl !== prevEl ||
						swiper.navigation.nextEl !== nextEl
					) {
						swiper.navigation.destroy();
						swiper.params.navigation.prevEl = prevEl;
						swiper.params.navigation.nextEl = nextEl;
						swiper.navigation.init();
					}
					swiper.navigation.update();
				}
			}

			// ----- Pagination (dots) -----
			if (
				swiper.params.pagination &&
				typeof swiper.params.pagination !== "boolean"
			) {
				if (!paginationRef.current) {
					ready = false;
				} else {
					const paginationEl = paginationRef.current;

					swiper.params.pagination.el = paginationEl;
					swiper.params.pagination.clickable = true;
					swiper.pagination.init();
					swiper.pagination.render();
					swiper.pagination.update();
				}
			}

			return ready;
		},
		[]
	);

	// scheduleReinitNavigationPagination: the first attempt is deferred via
	// setTimeout since swiper/react's onAfterInit fires before React attaches
	// sibling refs (nav/pagination). The retry loop is a safety net for
	// Gutenberg destroying/recreating the Swiper instance mid-flight.
	const scheduleReinitNavigationPagination = useCallback(
		(instanceOverride?: SwiperInstance | null) => {
			let attempts = 0;
			const maxAttempts = 15;
			const retryDelay = 40; // ms

			const tryReinit = () => {
				const swiper =
					attempts === 0
						? instanceOverride ?? swiperRef.current
						: swiperRef.current;

				const done = reinitNavigationPagination(swiper);
				attempts += 1;

				if (!done && attempts < maxAttempts) {
					setTimeout(tryReinit, retryDelay);
				}
			};

			setTimeout(tryReinit);
		},
		[reinitNavigationPagination]
	);

	const handleAfterInit = useCallback(
		(instance: SwiperInstance) => {
			scheduleReinitNavigationPagination(instance);
		},
		[scheduleReinitNavigationPagination]
	);

	const handleSwiper = useCallback((instance: SwiperInstance) => {
		swiperRef.current = instance;
	}, []);

	const handleDestroy = useCallback(() => {
		swiperRef.current = null;
	}, []);

	// Reinit when arrows/dots are toggled
	useEffect(() => {
		scheduleReinitNavigationPagination();
	}, [showArrows, showDots, scheduleReinitNavigationPagination]);

	// Reinit when slide count changes, after React attaches refs
	useEffect(() => {
		if (CURRENT_DATA.length > 0 && showDots) {
			const t = setTimeout(() => {
				scheduleReinitNavigationPagination();
			}, 60);
			return () => clearTimeout(t);
		}
	}, [CURRENT_DATA.length, showDots, scheduleReinitNavigationPagination]);

	const swiperCommonProps = useMemo(
		() => ({
			modules: SWIPER_MODULES,
			observer: true,
			observeParents: true,
			loop: false, // Must be false in the editor to avoid cloned slides duplicating RichText nodes
			speed: animationDuration || 500,
			autoplay: isAutoPlay
				? { delay: autoplaySpeed, pauseOnMouseEnter: hoverpause }
				: false,
			slidesPerView: activeCols || columnsMobile || 1,
			breakpoints: {
				[BREAKPOINT_TABLET]: {
					slidesPerView: columnsTablet || columnsMobile || 1,
				},
				[BREAKPOINT_DESKTOP]: {
					slidesPerView: columnsDesktop || columnsTablet || 1,
				},
			},
			autoHeight: adaptiveHeight,
			navigation: showArrows
				? {
					prevEl: `${swiperSelectorScope} .swiper-button-prev`,
					nextEl: `${swiperSelectorScope} .swiper-button-next`,
				}
				: false,
			pagination: showDots
				? {
					el: `${swiperSelectorScope} .swiper-pagination`,
					clickable: true,
				}
				: false,
			allowTouchMove: false,
			onAfterInit: handleAfterInit,
			onSwiper: handleSwiper,
			onDestroy: handleDestroy,
		}),
		[
			animationDuration,
			isAutoPlay,
			autoplaySpeed,
			hoverpause,
			columnsDesktop,
			columnsTablet,
			columnsMobile,
			activeCols,
			adaptiveHeight,
			showArrows,
			showDots,
			swiperSelectorScope,
			handleAfterInit,
			handleSwiper,
			handleDestroy,
		]
	);

	const renderNav = () => (
		<>
			{showArrows && (
				<>
					<div className="swiper-button-prev" ref={prevElRef}>
						<ArrowIcon direction="prev" />
					</div>
					<div className="swiper-button-next" ref={nextElRef}>
						<ArrowIcon direction="next" />
					</div>
				</>
			)}

			{showDots && (
				<div className="swiper-pagination" ref={paginationRef}></div>
			)}
		</>
	);

	const renderEditContent = () => {
		return (
			<div className="wcb-testimonials-swiper__wrap-items swiper">
				<Swiper {...swiperCommonProps}>
					{CURRENT_DATA.map(renderTestimonialItem)}
				</Swiper>
				{renderNav()}
			</div>
		);
	};

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_general,
			style_dimension,
			general_carousel,
			general_images,
			style_arrowAndDots,
			style_backgroundAndBorder,
			style_company,
			style_content,
			style_image,
			style_rating,
			style_name,
			advance_motionEffect,
			general_rating,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		style_dimension,
		general_carousel,
		general_images,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_company,
		style_content,
		style_image,
		style_rating,
		style_name,
		advance_motionEffect,
		general_rating,
	]);

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-testimonials-swiper__wrap ${uniqueId} ${parentCssClass}`}
				data-uniqueid={uniqueId}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{/* CSS IN JS */}
				<GlobalCss {...WcbAttrsForSave()} />

				{/* CHILD CONTENT  */}
				{renderEditContent()}
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
