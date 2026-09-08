import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	// @ts-ignore
	useInnerBlocksProps,
	BlockEdit as WPBlockEdit,
} from "@wordpress/block-editor";
import { useDispatch, useSelect } from "@wordpress/data";
import React, {
	useEffect,
	FC,
	useCallback,
	useRef,
	useState,
	useMemo,
} from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
// @ts-ignore
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbSlidersPanelGeneral from "./WcbSliderPanelGeneral";
import WcbSlidersPanelCarousel from "./WcbSliderPanelCarousel";
import WcbSlidersPanel_StyleArrowDots from "./WcbSliderPanel_StyleArrowDots";
import WcbSlidersPanel_StyleBackground from "./WcbSliderPanel_StyleBackground";
import WcbSlidersPanel_StyleDimension from "./WcbSliderPanel_StyleDimension";
import WcbSliderPanel_StyleBoxshadow from "./WcbSliderPanel_StyleBoxshadow";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
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

export const SLIDER_ITEM_DEMO: string[] = [
	"boostify-blocks/slider-swiper-child",
];

// Must match BREAKPOINT_TABLET / BREAKPOINT_DESKTOP on the frontend (view.js)
const BREAKPOINT_TABLET = 768;
const BREAKPOINT_DESKTOP = 1024;

// Stable reference so swiper/react doesn't destroy+recreate the instance on every render
const SWIPER_MODULES = [Navigation, Pagination, Autoplay];

// Patch Swiper's mount() to support elements inside the Gutenberg iframe (cross-realm DOM node).
// Swiper's original check `initialEl instanceof HTMLElement` is false for iframe elements
// (different HTMLElement class per realm), so mount() always returns false and never initializes.
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
// prev/next buttons (addIcons: true), but it uses the admin (top window)
// `document`, not the Gutenberg iframe's document, so attaching to a button
// inside the iframe silently fails (frontend has no iframe, so it works there).
// Draw the icon with React instead - React always creates nodes in the
// correct document, iframe or not.
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

// ============================================================
// OVERVIEW of this Edit component
// ============================================================
// 1. Syncs child slide count (innerBlocks) with
//    general_general.numberofTestimonials - adds/removes
//    "slider-swiper-child" blocks to match the panel value.
//
// 2. Tracks which child block is selected (isParentSelected /
//    selectedChildId) to: (a) show the right InspectorControls for the
//    parent or the matching child, (b) slideTo() the right slide when a
//    child is selected in list view/canvas.
//
// 3. Initializes <Swiper> (swiper/react) from attributes - the trickiest
//    part, since Gutenberg renders the canvas in its own <iframe> while the
//    block's JS runs in the admin (top window) document:
//      - document.querySelector() from admin can't see into the iframe, so
//        navigation/pagination still get a selector string on init (so
//        Swiper builds the right module structure), which fails silently
//        inside the iframe - swiper.navigation.prevEl / pagination.el start
//        out empty.
//      - reinitNavigationPagination() then overwrites el with the real React
//        refs (prevElRef/nextElRef/paginationRef, always correct regardless
//        of iframe), and re-runs each module's init()/render()/update().
//      - scheduleReinitNavigationPagination() defers the first attempt via
//        setTimeout (so React has finished attaching sibling refs) and
//        retries as a safety net for Gutenberg destroying/recreating the
//        Swiper instance mid-flight.
//      - ArrowIcon is drawn with React instead of Swiper's default icon -
//        see the comment above the ArrowIcon component (another
//        iframe/document mismatch).
//
// 4. GlobalCss.tsx (rendered below) generates dynamic CSS (color, size,
//    spacing...) from the style_* attributes, for both the parent block and
//    Swiper's nav/dots.
//
// 5. forceSliderRecalc() reruns whenever slide count/breakpoints/attributes
//    change, since Swiper needs to update() its snapGrid/slide sizes and
//    re-render pagination bullets to match.
// ============================================================
// equalizeItemHeights: syncs child slide heights so all slides expand
// fully and stay the same height
// ============================================================
function equalizeItemHeights(wrap: HTMLElement | null) {
	if (!wrap) return;

	const items = wrap.querySelectorAll<HTMLElement>(
		".wcb-slider-child__item-inner, .wcb-slider__item-inner"
	);
	if (!items.length) return;

	items.forEach((el) => {
		el.style.height = "auto";
	});

	let maxHeight = 0;
	items.forEach((el) => {
		maxHeight = Math.max(maxHeight, el.offsetHeight || 0);
	});
	if (maxHeight > 0) {
		items.forEach((el) => {
			el.style.height = `${maxHeight}px`;
		});
	}
}

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		uniqueId,
		sliders,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_carousel,
		style_name,
		style_content,
		style_company,
		style_verticalAlignment,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_boxshadow,
		style_dimension,
		advance_motionEffect,
	} = attributes;

	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const ref = useRef<HTMLDivElement>(null);
	const wrapBlockProps = useBlockProps({ ref });
	const swiperRef = useRef<SwiperInstance | null>(null);

	// Use real React refs instead of selector strings: the canvas is inside
	// an <iframe>, so document.querySelector from admin can't see into it,
	// while a ref always points to the actual DOM node.
	const prevElRef = useRef<HTMLDivElement | null>(null);
	const nextElRef = useRef<HTMLDivElement | null>(null);
	const paginationRef = useRef<HTMLDivElement | null>(null);

	const slideNavTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);

	const parentCssClass = converClientIdToUniqueClass(clientId);

	const [isParentSelected, setIsParentSelected] = useState(true);
	const [selectedChildId, setSelectedChildId] = useState<string | null>(null);
	const [deviceTypeState, setDeviceTypeState] =
		useState<ResponsiveDevices>("Desktop");
	const [isChangeDeviceType, setIsChangeDeviceType] = useState<boolean>(false);

	const getStoredSelectedChildId = (): string | null => {
		try {
			return localStorage.getItem(`wcb-slider-selected-child-${clientId}`);
		} catch {
			return null;
		}
	};

	const setStoredSelectedChildId = (childId: string | null) => {
		try {
			if (childId) {
				localStorage.setItem(
					`wcb-slider-selected-child-${clientId}`,
					childId
				);
			} else {
				localStorage.removeItem(`wcb-slider-selected-child-${clientId}`);
			}
		} catch {
			// Ignore localStorage errors
		}
	};

	const {
		insertBlocks,
		removeBlocks,
		selectBlock,
		updateBlockListSettings,
	} = useDispatch("core/block-editor");

	useEffect(() => {
		updateBlockListSettings(clientId, {
			allowedBlocks: SLIDER_ITEM_DEMO,
			orientation: "horizontal",
		});
	}, [clientId, updateBlockListSettings]);

	const lastSliderSettingsChangeRef = useRef<number>(0);
	useEffect(() => {
		lastSliderSettingsChangeRef.current = Date.now();
	}, [general_general, general_carousel]);

	const { innerBlocks, selectedBlockClientId } = useSelect(
		(select: any) => {
			const { getBlocks, getSelectedBlockClientId } =
				select("core/block-editor");
			return {
				innerBlocks: getBlocks(clientId) || [],
				selectedBlockClientId: getSelectedBlockClientId(),
			};
		},
		[clientId]
	);

	useEffect(() => {
		if (deviceTypeState !== deviceType) {
			setIsChangeDeviceType(true);
			const storedChildId = getStoredSelectedChildId();
			if (storedChildId) {
				const childExists = innerBlocks.some(
					(block: any) => block.clientId === storedChildId
				);
				if (childExists) {
					setSelectedChildId(storedChildId);
					setIsParentSelected(false);
				} else {
					setStoredSelectedChildId(null);
				}
			}
		}
		setDeviceTypeState(deviceType);
	}, [deviceType]);

	useEffect(() => {
		const targetNumber = general_general.numberofTestimonials || 3;
		const currentNumber = innerBlocks.length;

		if (currentNumber === targetNumber) {
			selectBlock(clientId);
			const storedChildId = getStoredSelectedChildId();
			if (storedChildId) {
				const childExists = innerBlocks.some(
					(block: any) => block.clientId === storedChildId
				);
				if (childExists) {
					setSelectedChildId(storedChildId);
					setIsParentSelected(false);
				} else {
					setIsParentSelected(true);
					setSelectedChildId(null);
					setStoredSelectedChildId(null);
				}
			}
			return;
		}

		const timeoutId = setTimeout(() => {
			// Re-read the LATEST blocks from the store instead of the
			// `innerBlocks`/`currentNumber` snapshot captured when this effect
			// ran. If another change fires this effect again during the 100ms
			// wait, using the stale snapshot could target a clientId already
			// removed/added elsewhere, leaving a "ghost" clientId in block
			// order and crashing core with "Cannot read properties of null
			// (reading 'name')".
			const latestBlocks =
				wp.data.select("core/block-editor").getBlocks(clientId) || [];
			const latestNumber = latestBlocks.length;

			if (latestNumber < targetNumber) {
				const blocksToAdd = targetNumber - latestNumber;
				const newBlocks = Array.from({ length: blocksToAdd }, () =>
					wp.blocks.createBlock("boostify-blocks/slider-swiper-child")
				);
				// Insert the whole batch in one dispatch instead of repeated
				// insertBlock() calls, to avoid interleaved store updates.
				insertBlocks(newBlocks, latestNumber, clientId, false);
			} else if (latestNumber > targetNumber) {
				const blocksToRemove = latestNumber - targetNumber;
				const clientIdsToRemove = latestBlocks
					.slice(-blocksToRemove)
					.map((block: any) => block.clientId);
				// Remove the whole batch in one dispatch (selectPrevious=false)
				// instead of repeated removeBlock() calls: removeBlock()
				// auto-selects a "previous" block after each removal, which in
				// a forEach loop could select a block that's about to be
				// removed next - Gutenberg then reads a stale clientId and
				// crashes with "Cannot read properties of null (reading
				// 'name')". removeBlocks() removes the batch in one store
				// update; selectBlock(clientId) below reselects the parent.
				removeBlocks(clientIdsToRemove, false);
			}

			selectBlock(clientId);
			if (!isChangeDeviceType) {
				setIsParentSelected(true);
				setSelectedChildId(null);
				setStoredSelectedChildId(null);
			}
		}, 100);

		return () => clearTimeout(timeoutId);
	}, [general_general.numberofTestimonials, innerBlocks.length]);

	const goToChildSlide = (childClientId: string) => {
		const index = innerBlocks.findIndex(
			(block: any) => block.clientId === childClientId
		);
		if (index < 0 || !swiperRef.current) return;

		if (slideNavTimer.current) clearTimeout(slideNavTimer.current);
		slideNavTimer.current = setTimeout(() => {
			const swiper = swiperRef.current;
			if (swiper && swiper.el) {
				swiper.slideTo(index, 0);
			}
		}, 100);
	};

	const handleChildSelect = (childClientId: string) => {
		setIsParentSelected(false);
		setSelectedChildId(childClientId);
		setStoredSelectedChildId(childClientId);
		selectBlock(childClientId);
		goToChildSlide(childClientId);
	};

	useEffect(() => {
		if (!selectedBlockClientId) return;

		if (selectedBlockClientId === clientId) {
			setIsParentSelected(true);
			setSelectedChildId(null);
			setStoredSelectedChildId(null);
			return;
		}

		const isChildOfThisSlider = innerBlocks.some(
			(block: any) => block.clientId === selectedBlockClientId
		);

		if (isChildOfThisSlider) {
			const justChangedSliderSettings =
				Date.now() - lastSliderSettingsChangeRef.current < 800;

			if (isParentSelected && justChangedSliderSettings) {
				selectBlock(clientId);
				return;
			}

			setSelectedChildId(selectedBlockClientId);
			setStoredSelectedChildId(selectedBlockClientId);
			setIsParentSelected(false);
			goToChildSlide(selectedBlockClientId);
			return;
		}

		setSelectedChildId(null);
		setIsParentSelected(false);
	}, [selectedBlockClientId]);

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbSlidersPanelGeneral
							onToggle={() =>
								handleTogglePanel("General", "Heading", true)
							}
							initialOpen={
								tabGeneralIsPanelOpen === "Heading" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={
								tabGeneralIsPanelOpen === "Heading" || undefined
							}
							setAttr__={(data) => {
								setAttributes({ general_general: data });
							}}
							panelData={general_general}
						/>
						<WcbSlidersPanelCarousel
							onToggle={() =>
								handleTogglePanel("General", "Carousel")
							}
							initialOpen={tabGeneralIsPanelOpen === "Carousel"}
							opened={
								tabGeneralIsPanelOpen === "Carousel" || undefined
							}
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
						<WcbSlidersPanel_StyleBackground
							onToggle={() =>
								handleTogglePanel("Styles", "_StyleBackground")
							}
							initialOpen={
								tabStylesIsPanelOpen === "_StyleBackground"
							}
							opened={
								tabStylesIsPanelOpen === "_StyleBackground" ||
								undefined
							}
							setAttr__={(data) => {
								setAttributes({
									style_backgroundAndBorder: data,
								});
							}}
							panelData={style_backgroundAndBorder}
						/>
						<WcbSliderPanel_StyleBoxshadow
							onToggle={() =>
								handleTogglePanel("Styles", "_StyleBoxshadow")
							}
							initialOpen={
								tabStylesIsPanelOpen === "_StyleBoxshadow"
							}
							opened={
								tabStylesIsPanelOpen === "_StyleBoxshadow" ||
								undefined
							}
							setAttr__={(data) => {
								setAttributes({
									style_boxshadow: data,
								});
							}}
							panelData={style_boxshadow}
						/>
						<WcbSlidersPanel_StyleArrowDots
							onToggle={() =>
								handleTogglePanel("Styles", "_StyleArrowDots")
							}
							initialOpen={
								tabStylesIsPanelOpen === "_StyleArrowDots"
							}
							opened={
								tabStylesIsPanelOpen === "_StyleArrowDots" ||
								undefined
							}
							setAttr__={(data) => {
								setAttributes({ style_arrowAndDots: data });
							}}
							panelData={style_arrowAndDots}
						/>
						<WcbSlidersPanel_StyleDimension
							onToggle={() =>
								handleTogglePanel("Styles", "_StyleDimension")
							}
							initialOpen={
								tabStylesIsPanelOpen === "_StyleDimension"
							}
							opened={
								tabStylesIsPanelOpen === "_StyleDimension" ||
								undefined
							}
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

	const innerBlocksTemplate: any[] = [
		SLIDER_ITEM_DEMO,
		SLIDER_ITEM_DEMO,
		SLIDER_ITEM_DEMO,
	];

	const innerBlocksProps = useInnerBlocksProps({
		allowedBlocks: SLIDER_ITEM_DEMO,
		template: innerBlocksTemplate,
		renderAppender: false,
		orientation: "horizontal",
	});

	const MemoizedChildBlock = useMemo(() => {
		return React.memo(
			({ block, isSelected, onSelect, index }: any) => {
				return (
					<div
						key={index + "-"}
						onClick={(e) => {
							e.stopPropagation();
							onSelect(block.clientId);
						}}
					>
						<WPBlockEdit
							name={block.name}
							attributes={block.attributes}
							setAttributes={(newAttributes: any) => {
								wp.data
									.dispatch("core/block-editor")
									.updateBlockAttributes(
										block.clientId,
										newAttributes
									);
							}}
							clientId={block.clientId}
							isSelected={isSelected}
							mayDisplayControls={isSelected}
							index={index}
						/>
					</div>
				);
			},
			(prevProps, nextProps) => {
				if (prevProps.isSelected !== nextProps.isSelected) return false;
				if (prevProps.block.clientId !== nextProps.block.clientId)
					return false;

				const prevAttrs = prevProps.block.attributes;
				const nextAttrs = nextProps.block.attributes;

				const keys = Object.keys({ ...prevAttrs, ...nextAttrs });
				for (const key of keys) {
					if (prevAttrs[key] !== nextAttrs[key]) {
						return false;
					}
				}

				return true;
			}
		);
	}, []);

	useEffect(() => {
		const container = ref.current;
		if (!container) return;

		const items = container.querySelectorAll<HTMLElement>(
			".wcb-slider-child__item-inner"
		);

		if (items.length > 0) {
			items.forEach((item) => {
				item.style.paddingTop = "";
				item.style.paddingRight = "";
				item.style.paddingBottom = "";
				item.style.paddingLeft = "";
			});

			let maxPaddingTop = 0;
			let maxPaddingRight = 0;
			let maxPaddingBottom = 0;
			let maxPaddingLeft = 0;

			items.forEach((item) => {
				const style = window.getComputedStyle(item);
				maxPaddingTop = Math.max(
					maxPaddingTop,
					parseFloat(style.paddingTop) || 0
				);
				maxPaddingRight = Math.max(
					maxPaddingRight,
					parseFloat(style.paddingRight) || 0
				);
				maxPaddingBottom = Math.max(
					maxPaddingBottom,
					parseFloat(style.paddingBottom) || 0
				);
				maxPaddingLeft = Math.max(
					maxPaddingLeft,
					parseFloat(style.paddingLeft) || 0
				);
			});

			items.forEach((item: any) => {
				if (maxPaddingTop) item.style.paddingTop = `${maxPaddingTop}px !important`;
				if (maxPaddingRight) item.style.paddingRight = `${maxPaddingRight}px !important`;
				if (maxPaddingBottom) item.style.paddingBottom = `${maxPaddingBottom}px !important`;
				if (maxPaddingLeft) item.style.paddingLeft = `${maxPaddingLeft}px !important`;
			});
		}
	}, [innerBlocks.length]);
	
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

	// forceSliderRecalc: calls update() and forces pagination to re-render.
	// Writes params.breakpoints/slidesPerView directly onto the Swiper
	// instance so sidebar column changes apply instantly without reload.
	const forceSliderRecalc = useCallback(() => {
		const swiper = swiperRef.current;
		if (swiper && !swiper.destroyed && swiper.el && swiper.el.isConnected) {
			equalizeItemHeights(ref.current);

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
				// Force el back to the real ref before rendering
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

	// Progressive recalculation so the slider resizes correctly as child
	// blocks (RichText, Button, GlobalCss) finish mounting one by one
	const progressiveSliderRecalc = useCallback(
		(instance?: SwiperInstance | null) => {
			const delays = [50, 150, 300, 500, 800, 1200, 1800, 2500];
			delays.forEach((delay) => {
				setTimeout(() => {
					const swiper =
						instance && !instance.destroyed && instance.el && instance.el.isConnected
							? instance
							: swiperRef.current;
					if (
						swiper &&
						!swiper.destroyed &&
						swiper.el &&
						swiper.el.isConnected
					) {
						equalizeItemHeights(ref.current);
						swiper.update();
						if (swiper.updateAutoHeight) {
							swiper.updateAutoHeight();
						}
					}
				}, delay);
			});
		},
		[]
	);

	useEffect(() => {
		if (innerBlocks.length > 0) {
			forceSliderRecalc();
			progressiveSliderRecalc();
		}
	}, [innerBlocks.length, forceSliderRecalc, progressiveSliderRecalc]);

	// Text wrapping from typing doesn't change slide COUNT, so the effect
	// above (keyed on innerBlocks.length) won't rerun. `innerBlocks` (the
	// array itself, not .length) gets a new reference whenever any child
	// attribute changes, since getBlocks() always returns a fresh array -
	// use it as a dependency to catch when max height needs recalculating,
	// without relying on a MutationObserver inside the canvas iframe (which
	// can be laggy/unreliable).
	useEffect(() => {
		if (innerBlocks.length === 0) return;
		const t = setTimeout(() => {
			forceSliderRecalc();
		}, 60);
		return () => clearTimeout(t);
	}, [innerBlocks, forceSliderRecalc]);

	useEffect(() => {
		const container = ref.current;
		if (!container || typeof ResizeObserver === "undefined") return;

		let rafId: number | null = null;
		const ro = new ResizeObserver(() => {
			if (rafId) cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(() => {
				forceSliderRecalc();
			});
		});

		ro.observe(container);

		const swiperEl = container.querySelector(".swiper");
		if (swiperEl) ro.observe(swiperEl);

		const wrapperEl = container.querySelector(".swiper-wrapper");
		if (wrapperEl) ro.observe(wrapperEl);

		const slides = container.querySelectorAll(".swiper-slide");
		slides.forEach((slide) => ro.observe(slide));

		const innerItems = container.querySelectorAll(
			".wcb-slider-child__wrap, .wcb-slider-child__item, .wcb-slider-child__item-inner, .wcb-slider-child__content, .wcb-slider-child__btn-inner"
		);
		innerItems.forEach((item) => ro.observe(item));

		return () => {
			if (rafId) cancelAnimationFrame(rafId);
			ro.disconnect();
		};
	}, [innerBlocks.length, forceSliderRecalc]);

	useEffect(() => {
		const container = ref.current;
		if (!container || typeof MutationObserver === "undefined") return;

		let timer: ReturnType<typeof setTimeout> | null = null;
		const mo = new MutationObserver(() => {
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				forceSliderRecalc();
			}, 60);
		});

		mo.observe(container, {
			childList: true,
			subtree: true,
			characterData: true,
		});

		return () => {
			if (timer) clearTimeout(timer);
			mo.disconnect();
		};
	}, [forceSliderRecalc]);

	useEffect(() => {
		const handleResize = () => {
			forceSliderRecalc();
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [forceSliderRecalc]);

	useEffect(() => {
		forceSliderRecalc();
	}, [columnsDesktop, columnsTablet, columnsMobile, activeCols, forceSliderRecalc]);

	useEffect(() => {
		forceSliderRecalc();
	}, [attributes, forceSliderRecalc]);

	const showArrows = showArrowsDots !== "Dot";
	const showDots = showArrowsDots !== "Arrow";

	// Selector scope from parentCssClass (available right away from clientId)
	const swiperSelectorScope = `.${parentCssClass}`;

	// reinitNavigationPagination: the key function for dots to show in the
	// editor. After Swiper inits, overwrite prevEl/nextEl/pagination.el with
	// the real refs (selector strings fail in the iframe). Returns true on
	// success, false if refs aren't ready yet (caller retries).
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

					// Same pattern as Spectra (setSwiperNavigationPagination in
					// wp-spectra-master/src/blocks/slider/render.js): force el to
					// the real ref then init/render/update directly, no destroy()
					// needed - pagination.init() handles the el swap itself.
					swiper.params.pagination.el = paginationEl;
					swiper.params.pagination.clickable = true;
					swiper.pagination.init();

					// render() creates the <span class="swiper-pagination-bullet"> elements
					swiper.pagination.render();
					swiper.pagination.update();
				}
			}

			return ready;
		},
		[]
	);

	// scheduleReinitNavigationPagination: the first attempt is deferred via
	// setTimeout (same pattern as Spectra's setSwiperNavigationPagination),
	// since swiper/react's onAfterInit fires inside the container ref
	// callback, BEFORE React attaches sibling refs (nav/pagination). A 0ms
	// setTimeout waits for React's commit to finish, so the first attempt
	// almost always succeeds. The retry loop is a safety net for Gutenberg
	// destroying/recreating the Swiper instance mid-flight.
	const scheduleReinitNavigationPagination = useCallback(
		(instanceOverride?: SwiperInstance | null) => {
			let attempts = 0;
			const maxAttempts = 15;
			const retryDelay = 40; // ms

			const tryReinit = () => {
				// First attempt uses instanceOverride (from onAfterInit),
				// later attempts always use the latest swiperRef.current
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
			progressiveSliderRecalc(instance);
		},
		[scheduleReinitNavigationPagination, progressiveSliderRecalc]
	);

	const handleSwiper = useCallback(
		(instance: SwiperInstance) => {
			swiperRef.current = instance;
			progressiveSliderRecalc(instance);
		},
		[progressiveSliderRecalc]
	);

	const handleDestroy = useCallback(() => {
		swiperRef.current = null;
	}, []);

	// swiperCommonProps
	// - Memoized to avoid unnecessary instance destroy/recreate
	// - Passes a selector string for navigation/pagination (like Spectra) so
	//   Swiper builds the module structure correctly, even though it fails
	//   in the iframe - the real binding happens via ref in reinitNavigationPagination.
	const swiperCommonProps = useMemo(
		() => ({
			modules: SWIPER_MODULES,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			loop: false, // Must be false in the editor to avoid cloned slides duplicating InspectorControls
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
			// Selector el (like Spectra): fails in the iframe but still lets
			// the Pagination module init with the right structure;
			// reinitNavigationPagination later overwrites el with paginationRef.current
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

	// Reinit when arrows/dots are toggled
	useEffect(() => {
		scheduleReinitNavigationPagination();
	}, [showArrows, showDots, scheduleReinitNavigationPagination]);

	// Reinit when slide count changes, after React attaches refs
	useEffect(() => {
		if (innerBlocks.length > 0 && showDots) {
			const t = setTimeout(() => {
				scheduleReinitNavigationPagination();
			}, 60);
			return () => clearTimeout(t);
		}
	}, [innerBlocks.length, showDots, scheduleReinitNavigationPagination]);

	const renderSliderContent = () => {
		// renderNav: only renders an empty div + ref, never hard-codes
		// <span class="swiper-pagination-bullet"> - Swiper's pagination.render() creates those
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

				{/* Empty div + ref only; Swiper adds classes and bullets itself */}
				{showDots && (
					<div
						className="swiper-pagination"
						ref={paginationRef}
					></div>
				)}
			</>
		);

		if (innerBlocks.length === 0) {
			return (
				<div className="wcb-slider__wrap-items">
					<Swiper {...swiperCommonProps}>
						<SwiperSlide>
							<div {...innerBlocksProps} />
						</SwiperSlide>
					</Swiper>
					{renderNav()}
				</div>
			);
		}

		return (
			<div className="wcb-slider__wrap-items">
				<Swiper {...swiperCommonProps}>
					{innerBlocks.map((block: any, index: number) => {
						const isChildSelected =
							!isParentSelected &&
							selectedChildId != null &&
							selectedChildId === block.clientId;
						return (
							<SwiperSlide key={block.clientId}>
								<MemoizedChildBlock
									block={block}
									isSelected={isChildSelected}
									onSelect={handleChildSelect}
									index={index + 1}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
				{renderNav()}
			</div>
		);
	};

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			sliders,
			advance_responsiveCondition,
			advance_zIndex,
			general_general,
			style_dimension,
			general_carousel,
			style_verticalAlignment,
			style_arrowAndDots,
			style_backgroundAndBorder,
			style_company,
			style_content,
			style_name,
			style_boxshadow,
			advance_motionEffect,
		};
	}, [
		uniqueId,
		sliders,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		style_dimension,
		general_carousel,
		style_verticalAlignment,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_company,
		style_content,
		style_name,
		style_boxshadow,
		advance_motionEffect,
	]);

	const handleParentClick = useCallback(
		(e: React.MouseEvent) => {
			if (e.target === e.currentTarget && !isParentSelected) {
				selectBlock(clientId);
				setIsParentSelected(true);
				setSelectedChildId(null);
				setStoredSelectedChildId(null);
			}
		},
		[isParentSelected, clientId]
	);

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-slider__wrap wcb-slider-swiper__wrap ${uniqueId} ${parentCssClass}`}
				data-uniqueid={uniqueId}
				onClick={handleParentClick}
			>
				{isParentSelected && (
					<HOCInspectorControls
						renderTabPanels={renderTabBodyPanels}
						uniqueId={uniqueId}
					/>
				)}

				<GlobalCss {...WcbAttrsForSave()} />

				{renderSliderContent()}
			</div>
		</MyCacheProvider>
	);
};

export default Edit;