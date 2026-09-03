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

// Phải khớp với BREAKPOINT_TABLET / BREAKPOINT_DESKTOP bên frontend (view.js)
const BREAKPOINT_TABLET = 768;
const BREAKPOINT_DESKTOP = 1024;

// Giữ reference cố định cho modules để swiper/react không destroy + recreate instance mỗi lần render
const SWIPER_MODULES = [Navigation, Pagination, Autoplay];

// Patch update() của Swiper để tránh crash khi instance đã bị destroy trong editor
if (!(SwiperCore.prototype as any).__wcbUpdateGuarded) {
	const originalUpdate = SwiperCore.prototype.update;
	SwiperCore.prototype.update = function (this: any, ...args: any[]) {
		if (!this || this.destroyed || !this.el) return;
		return originalUpdate.apply(this, args as []);
	};
	(SwiperCore.prototype as any).__wcbUpdateGuarded = true;
}

// Module Navigation của Swiper CÓ THỂ tự chèn icon mũi tên mặc định vào nút
// prev/next đang rỗng (addIcons: true, xem navigation.mjs#initButton), nhưng
// nó tạo icon đó bằng `document.createElement()`/`appendChild` thuần - biến
// `document` trong code của Swiper trỏ vào document của CỬA SỔ ADMIN (top
// window), không phải document của iframe Gutenberg, nên việc gắn node vừa
// tạo vào 1 nút đang nằm trong iframe sẽ thất bại âm thầm (frontend không có
// iframe nên cơ chế mặc định này vẫn chạy đúng ở đó). Vì vậy phải tự vẽ icon
// bằng React thay vì để Swiper tự chèn - React luôn tạo node đúng document
// của nơi nó đang render, kể cả bên trong iframe.
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
// TỔNG QUAN LUỒNG XỬ LÝ CỦA COMPONENT Edit NÀY
// ============================================================
// 1. Đồng bộ số lượng slide con (innerBlocks) theo attribute
//    general_general.numberofTestimonials - tự thêm/xoá block con
//    "slider-swiper-child" cho khớp số lượng người dùng chọn trong panel.
//
// 2. Theo dõi block con nào đang được chọn (isParentSelected /
//    selectedChildId) để: (a) hiện đúng InspectorControls (panel bên phải)
//    của block cha hoặc block con tương ứng, (b) tự động slideTo() tới đúng
//    slide khi người dùng click chọn 1 slide con trong list view/canvas.
//
// 3. Khởi tạo <Swiper> (từ swiper/react) với cấu hình lấy từ attributes -
//    đây là phần PHỨC TẠP NHẤT của file, vì Gutenberg render canvas trong
//    1 <iframe> riêng nhưng bundle JS của block lại chạy trong document của
//    cửa sổ admin (top window). Hệ quả:
//      - Không thể dùng document.querySelector('.class-nao-do') để lấy
//        phần tử nav/pagination thật (querySelector chạy trên document admin,
//        không "nhìn" vào bên trong iframe được).
//      - Vì vậy: lúc khởi tạo <Swiper>, prop navigation/pagination vẫn phải
//        truyền tạm 1 chuỗi selector (để Swiper tạo đúng cấu trúc module),
//        nhưng chuỗi đó THẤT BẠI trong iframe - swiper.navigation.prevEl /
//        swiper.pagination.el ban đầu sẽ rỗng.
//      - reinitNavigationPagination() sau đó ghi đè lại el bằng REF THẬT của
//        React (prevElRef/nextElRef/paginationRef - luôn đúng vì React tự
//        gắn ref vào đúng DOM node, dù node đó nằm trong iframe hay không),
//        rồi gọi lại init()/render()/update() của từng module để nó nhận
//        đúng phần tử thật.
//      - scheduleReinitNavigationPagination() bọc lần gọi đầu trong
//        setTimeout (đẩy ra tick kế tiếp, đảm bảo React đã gắn xong toàn bộ
//        ref của các div sibling trước khi chạy - xem thêm comment ngay tại
//        hàm này), và có vòng lặp retry làm lưới an toàn cho các lần
//        Gutenberg destroy/recreate lại instance Swiper giữa chừng.
//      - Icon mũi tên (ArrowIcon) phải tự vẽ bằng React thay vì để Swiper tự
//        chèn icon mặc định của nó - lý do xem comment ngay phía trên
//        component ArrowIcon bên dưới (cũng là vấn đề iframe/document khác).
//
// 4. GlobalCss.tsx (render trong return() bên dưới) chịu trách nhiệm sinh CSS
//    động (màu, size, khoảng cách...) từ toàn bộ style_* attributes, áp dụng
//    cho cả block cha lẫn nav/dots của Swiper.
//
// 5. forceSliderRecalc() được gọi lại mỗi khi số slide/breakpoint/attributes
//    đổi - vì Swiper cần update() lại snapGrid/kích thước slide, rồi render
//    lại pagination bullet cho khớp, nếu không dots có thể hiện sai số lượng
//    hoặc không hiện.
// ============================================================
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

	// ============================================================
	// QUAN TRỌNG: Dùng ref thật thay vì selector string
	// Vì Gutenberg canvas nằm trong <iframe>, document.querySelector
	// từ cửa sổ admin không bao giờ tìm thấy element bên trong iframe.
	// Ref của React thì gắn trực tiếp vào DOM node thật nên luôn đúng.
	// ============================================================
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

	const { insertBlock, removeBlock, selectBlock, updateBlockListSettings } =
		useDispatch("core/block-editor");

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
			if (currentNumber < targetNumber) {
				const blocksToAdd = targetNumber - currentNumber;
				for (let i = 0; i < blocksToAdd; i++) {
					const newBlock = wp.blocks.createBlock(
						"boostify-blocks/slider-swiper-child"
					);
					insertBlock(newBlock, currentNumber + i, clientId, false);
				}
			} else if (currentNumber > targetNumber) {
				const blocksToRemove = currentNumber - targetNumber;
				const clientIdsToRemove = innerBlocks
					.slice(-blocksToRemove)
					.map((block: any) => block.clientId);
				clientIdsToRemove.forEach((childClientId: any) => {
					removeBlock(childClientId);
				});
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
		const sliders = document.querySelectorAll(".wcb-slider__wrap");
		const sliderItemInner = document.querySelectorAll(
			".wcb-slider__item-inner"
		);

		sliders.forEach((slider) => {
			const items = slider.querySelectorAll<HTMLElement>(
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
						parseFloat(style.paddingTop)
					);
					maxPaddingRight = Math.max(
						maxPaddingRight,
						parseFloat(style.paddingRight)
					);
					maxPaddingBottom = Math.max(
						maxPaddingBottom,
						parseFloat(style.paddingBottom)
					);
					maxPaddingLeft = Math.max(
						maxPaddingLeft,
						parseFloat(style.paddingLeft)
					);
				});

				items.forEach((item: any) => {
					item.style.paddingTop = `${maxPaddingTop}px !important`;
					item.style.paddingRight = `${maxPaddingRight}px !important`;
					item.style.paddingBottom = `${maxPaddingBottom}px !important`;
					item.style.paddingLeft = `${maxPaddingLeft}px !important`;
				});

				let maxHeight = 0;
				items.forEach((item) => {
					maxHeight = Math.max(maxHeight, item.offsetHeight);
				});

				sliderItemInner.forEach((item: any) => {
					item.style.height = `${maxHeight}px`;
					item.style.display = "flex";
					item.style.alignItems = "center";
					item.style.justifyContent = "center";
				});
			}
		});
	});

	// ============================================================
	// forceSliderRecalc: gọi update() + ép pagination render lại
	// ============================================================
	const forceSliderRecalc = useCallback(() => {
		const swiper = swiperRef.current;
		if (swiper && swiper.el && swiper.el.isConnected) {
			swiper.update();

			if (swiper.pagination) {
				// Ép lại el từ ref thật trước khi render
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
	}, []);

	useEffect(() => {
		if (innerBlocks.length > 0) {
			forceSliderRecalc();
		}
	}, [innerBlocks.length, forceSliderRecalc]);

	useEffect(() => {
		const handleResize = () => {
			forceSliderRecalc();
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [forceSliderRecalc]);

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
	} = getValueFromAttrsResponsives(columns);

	useEffect(() => {
		forceSliderRecalc();
	}, [columnsDesktop, columnsTablet, columnsMobile, forceSliderRecalc]);

	useEffect(() => {
		forceSliderRecalc();
	}, [attributes, forceSliderRecalc]);

	const showArrows = showArrowsDots !== "Dot";
	const showDots = showArrowsDots !== "Arrow";

	// Selector scope dùng parentCssClass (có sẵn ngay từ clientId)
	const swiperSelectorScope = `.${parentCssClass}`;

	// ============================================================
	// reinitNavigationPagination
	// Đây là hàm quan trọng nhất để dots hiện ở Editor.
	// Sau khi Swiper init xong, ta ghi đè prevEl / nextEl / pagination.el
	// bằng ref thật (vì selector string fail trong iframe).
	// Trả về true nếu thành công, false nếu ref chưa sẵn sàng → sẽ retry.
	// ============================================================
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

			// ----- Navigation (mũi tên) -----
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

					// Giống pattern của Spectra (setSwiperNavigationPagination trong
					// wp-spectra-master/src/blocks/slider/render.js): luôn ép el về
					// ref thật rồi init/render/update thẳng, không cần destroy()
					// trước - Swiper's pagination.init() tự xử lý việc đổi el.
					swiper.params.pagination.el = paginationEl;
					swiper.params.pagination.clickable = true;
					swiper.pagination.init();

					// render() chính là chỗ tạo ra các <span class="swiper-pagination-bullet">
					swiper.pagination.render();
					swiper.pagination.update();
				}
			}

			return ready;
		},
		[]
	);

	// ============================================================
	// scheduleReinitNavigationPagination
	// Lần thử đầu tiên bị đẩy ra setTimeout (giống pattern của Spectra ở
	// wp-spectra-master/src/blocks/slider/render.js#setSwiperNavigationPagination):
	// onAfterInit của swiper/react fire ngay trong callback ref gắn container,
	// tức là TRƯỚC KHI React kịp gắn ref của các div sibling (nav/pagination).
	// Đẩy ra 1 tick (setTimeout 0ms) đảm bảo commit của React đã xong hẳn nên
	// hầu như luôn thành công ngay từ lần thử đầu.
	// Vẫn giữ vòng retry phía sau làm lưới an toàn cho trường hợp Gutenberg
	// destroy/recreate Swiper instance giữa chừng.
	// ============================================================
	const scheduleReinitNavigationPagination = useCallback(
		(instanceOverride?: SwiperInstance | null) => {
			let attempts = 0;
			const maxAttempts = 15;
			const retryDelay = 40; // ms

			const tryReinit = () => {
				// Lần đầu dùng instanceOverride (từ onAfterInit),
				// các lần sau luôn lấy swiperRef.current mới nhất
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

	// ============================================================
	// swiperCommonProps
	// - Memo để tránh destroy/recreate instance không cần thiết
	// - Truyền selector string cho navigation/pagination (giống Spectra)
	//   dù selector sẽ fail trong iframe, nhưng giúp Swiper khởi tạo module đúng.
	// - Việc bind thật sự được làm trong reinitNavigationPagination bằng ref.
	// ============================================================
	const swiperCommonProps = useMemo(
		() => ({
			modules: SWIPER_MODULES,
			loop: false, // Bắt buộc false ở Editor để tránh clone slide → duplicate InspectorControls
			speed: animationDuration || 500,
			autoplay: isAutoPlay
				? { delay: autoplaySpeed, pauseOnMouseEnter: hoverpause }
				: false,
			slidesPerView: columnsMobile || 1,
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
			// Quan trọng: truyền el bằng selector (giống Spectra)
			// Dù selector fail trong iframe, module Pagination vẫn được khởi tạo đúng cấu trúc.
			// Sau đó reinitNavigationPagination sẽ ghi đè el bằng paginationRef.current
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
			adaptiveHeight,
			showArrows,
			showDots,
			swiperSelectorScope,
			handleAfterInit,
			handleSwiper,
			handleDestroy,
		]
	);

	// Khi toggle arrows / dots → reinit lại
	useEffect(() => {
		scheduleReinitNavigationPagination();
	}, [showArrows, showDots, scheduleReinitNavigationPagination]);

	// Khi số slide thay đổi → đợi React gắn xong ref rồi reinit
	useEffect(() => {
		if (innerBlocks.length > 0 && showDots) {
			const t = setTimeout(() => {
				scheduleReinitNavigationPagination();
			}, 60);
			return () => clearTimeout(t);
		}
	}, [innerBlocks.length, showDots, scheduleReinitNavigationPagination]);

	const renderSliderContent = () => {
		// ============================================================
		// renderNav
		// - Chỉ render DIV RỖNG + gắn ref
		// - KHÔNG BAO GIỜ hard-code các <span class="swiper-pagination-bullet">
		// - Swiper sẽ tự gọi pagination.render() để tạo bullets
		// ============================================================
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

				{/* CHỈ render div rỗng + ref. Swiper sẽ tự thêm class và bullets */}
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