import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, // @ts-ignore
	useInnerBlocksProps, BlockEdit as WPBlockEdit } from "@wordpress/block-editor";
import { use, useDispatch, useSelect } from "@wordpress/data";
import React, { useEffect, FC, useCallback, useRef, useState, useMemo } from "react";
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
import Slider, { Settings } from "react-slick";
// @ts-ignore
import "slick-carousel/slick/slick.css";
// @ts-ignore
import "slick-carousel/slick/slick-theme.css";
import converUniqueIdToAnphaKey, { converClientIdToUniqueClass } from "../utils/converUniqueIdToAnphaKey";
export const SLIDER_ITEM_DEMO: string[] = ["boostify-blocks/slider-child"];

// Arrow components for slider
function SampleNextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		>
			<svg
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8.25 4.5l7.5 7.5-7.5 7.5"
				/>
			</svg>
		</div>
	);
}

function SamplePrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		>
			<svg
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 19.5L8.25 12l7.5-7.5"
				/>
			</svg>
		</div>
	);
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
	const sliderRef = useRef<any>(null);
	// Debounce timer: prevents multiple rapid slickGoTo calls
	// (canvas click triggers both handleChildSelect AND the useEffect simultaneously)
	const slideNavTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
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
	
	// Generate CSS-safe class from clientId for reliable parent identification
	const parentCssClass = converClientIdToUniqueClass(clientId);
	
	const [isParentSelected, setIsParentSelected] = useState(true);
	const [selectedChildId, setSelectedChildId] = useState<string | null>(null);
	const [deviceTypeState, setDeviceTypeState] = useState<ResponsiveDevices>("Desktop");
	const [isChangeDeviceType, setIsChangeDeviceType] = useState<boolean>(false);
	
	// Persist selectedChildId across device type changes and UI reloads using localStorage
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
				localStorage.setItem(`wcb-slider-selected-child-${clientId}`, childId);
			} else {
				localStorage.removeItem(`wcb-slider-selected-child-${clientId}`);
			}
		} catch {
			// Ignore localStorage errors
		}
	};

	/**
	 * Parent-Child Synchronization
	 */
	const { insertBlock, removeBlock, selectBlock } = useDispatch("core/block-editor");

	// Last time a Slider setting (columns, carousel...) changed. These values go
	// into the react-slick `settings` object. When they change, react-slick moves
	// slide DOM nodes around, and this can move a child's RichText (contenteditable)
	// node too. Some browsers fire a real `focusin` for that move. Gutenberg's
	// useFocusHandler (from useBlockProps() in the child) then calls
	// selectBlock(childId), even though the user did not click anything. We use
	// this timestamp to detect and ignore that fake selection.
	const lastSliderSettingsChangeRef = useRef<number>(0);
	useEffect(() => {
		lastSliderSettingsChangeRef.current = Date.now();
	}, [general_general, general_carousel]);

	// Step 1: Get inner blocks + track which block is currently selected in the editor store.
	// selectedBlockClientId updates whenever the user clicks a block — including via List View.
	const { innerBlocks, selectedBlockClientId } = useSelect((select: any) => {
		const { getBlocks, getSelectedBlockClientId } = select("core/block-editor");
		return {
			innerBlocks: getBlocks(clientId) || [],
			selectedBlockClientId: getSelectedBlockClientId(),
		};
	}, [clientId]);

	useEffect(() => {
		if (deviceTypeState !== deviceType) {
			setIsChangeDeviceType(true);
			// Restore selectedChildId from localStorage when device type changes
			const storedChildId = getStoredSelectedChildId();
			if (storedChildId) {
				const childExists = innerBlocks.some((block: any) => block.clientId === storedChildId);
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

	// Initialize blocks after innerBlocks is available
	useEffect(() => {
		const targetNumber = general_general.numberofTestimonials || 3;
		const currentNumber = innerBlocks.length;

		if (currentNumber === 0 && targetNumber > 0) {
			const timeoutId = setTimeout(() => {
				for (let i = 0; i < targetNumber; i++) {
					const newBlock = wp.blocks.createBlock("boostify-blocks/slider-child");
					// updateSelection=false: avoid auto-selecting the new child, which would hijack the settings panel from the parent
					insertBlock(newBlock, i, clientId, false);
				}
			}, 100);
			return () => clearTimeout(timeoutId);
		}

		// Force parent selection after adding inner blocks
        selectBlock(clientId);
		const storedChildId = getStoredSelectedChildId();
		if (storedChildId) {
			const childExists = innerBlocks.some((block: any) => block.clientId === storedChildId);
			if (childExists) {
				setSelectedChildId(storedChildId);
				setIsParentSelected(false);
			} else {
				setIsParentSelected(true);
				setSelectedChildId(null);
				setStoredSelectedChildId(null);
			}
		}

	}, [general_general.numberofTestimonials, innerBlocks.length]);

	// Navigate the slider carousel to the slide matching the given child clientId.
	// Debounced: multiple calls within 100ms are collapsed into one slickGoTo,
	// preventing the slider from sliding continuously when canvas click + useEffect
	// both fire goToChildSlide in rapid succession.
	const goToChildSlide = (childClientId: string) => {
		const index = innerBlocks.findIndex(
			(block: any) => block.clientId === childClientId
		);
		if (index < 0 || !sliderRef.current) return;

		if (slideNavTimer.current) clearTimeout(slideNavTimer.current);
		slideNavTimer.current = setTimeout(() => {
			sliderRef.current?.slickGoTo(index, false);
		}, 100);
	};

	// Handle child selection (triggered by clicking a child on the canvas)
	const handleChildSelect = (childClientId: string) => {
		setIsParentSelected(false);
		setSelectedChildId(childClientId);
		setStoredSelectedChildId(childClientId);
		// Also select the block in the editor store, so Gutenberg's own
		// sidebar BlockCard (icon + title + description) shows "Slider child"
		// too, not just the tabs we portal in below it. Without this, the
		// store still thinks the parent Slider is selected, and the sidebar
		// header and our tabs show different blocks.
		selectBlock(childClientId);
		// Navigate to the corresponding slide so canvas and panel stay in sync
		goToChildSlide(childClientId);
	};

	// Step 2: Sync panel view with whatever block is selected in the editor store.
	// Handles both List View clicks on children AND List View clicks on the parent itself.
	useEffect(() => {
		if (!selectedBlockClientId) return;

		// Case A: The parent Slider block was selected (user clicked parent in List View).
		if (selectedBlockClientId === clientId) {
			setIsParentSelected(true);
			setSelectedChildId(null);
			setStoredSelectedChildId(null);
			return;
		}

		// Case B: A child of this slider was selected (e.g., List View click on Slider child).
		const isChildOfThisSlider = innerBlocks.some(
			(block: any) => block.clientId === selectedBlockClientId
		);

		if (isChildOfThisSlider) {
			// If we are on the parent panel and a Slider setting changed a moment
			// ago, this "child selected" event is most likely the fake focusin
			// described above, not a real click. Ignore it and put the store
			// selection back on the parent.
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

		// Case C: An unrelated block outside this slider was selected.
		// Clear selectedChildId so the portal stops rendering stale slider settings.
		setSelectedChildId(null);
		setIsParentSelected(false);
	}, [selectedBlockClientId]);

	// Add useEffect to monitor numberofTestimonials changes and update inner blocks accordingly
	useEffect(() => {
		// Add a small delay to avoid conflicts with InnerBlocks initialization
		const targetNumber = general_general.numberofTestimonials || 3;
		const currentNumber = innerBlocks.length;

		// Only proceed if there's a real difference and blocks are actually loaded
		if (currentNumber === targetNumber || !targetNumber) {
			return; // No change needed
		}

		// Prevent running during initial load when innerBlocks might be empty
		if (currentNumber === 0 && targetNumber > 0) {
			// Let InnerBlocks handle initial template creation
			return;
		}

		const timeoutId = setTimeout(() => {
			if (currentNumber < targetNumber) {
				// Add blocks
				const blocksToAdd = targetNumber - currentNumber;
				for (let i = 0; i < blocksToAdd; i++) {
					const newBlock = wp.blocks.createBlock("boostify-blocks/slider-child");
					// updateSelection=false: avoid auto-selecting the new child, which would hijack the settings panel from the parent
					insertBlock(newBlock, currentNumber + i, clientId, false);
				}
			} else if (currentNumber > targetNumber) {
				// Remove blocks from the end
				const blocksToRemove = currentNumber - targetNumber;
				const clientIdsToRemove = innerBlocks.slice(-blocksToRemove).map((block: { clientId: any; }) => block.clientId);
				clientIdsToRemove.forEach((childClientId: any) => {
					removeBlock(childClientId);
				});
			}

			// Force parent selection after modifying inner blocks
			selectBlock(clientId);
			if (!isChangeDeviceType) {
				setIsParentSelected(true);
				setSelectedChildId(null);
				setStoredSelectedChildId(null);
			}
		}, 100); // Small delay to prevent race conditions

		return () => clearTimeout(timeoutId);
	}, [general_general.numberofTestimonials, innerBlocks.length]); // Simplified dependency array

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		// Parent panel rendering (original logic)
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbSlidersPanelGeneral
							onToggle={() => handleTogglePanel("General", "Heading", true)}
							initialOpen={
								tabGeneralIsPanelOpen === "Heading" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={tabGeneralIsPanelOpen === "Heading" || undefined}
							setAttr__={(data) => {
								setAttributes({ general_general: data });
							}}
							panelData={general_general}
						/>
						<WcbSlidersPanelCarousel
							onToggle={() => handleTogglePanel("General", "Carousel")}
							initialOpen={
								tabGeneralIsPanelOpen === "Carousel"
							}
							opened={tabGeneralIsPanelOpen === "Carousel" || undefined}
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
						{/* <WcbSlidersPanel_StyleVerticalAlignment
							onToggle={() => handleTogglePanel("Styles", "_StyleVerticalAlignment")}
							initialOpen={tabStylesIsPanelOpen === "_StyleVerticalAlignment" ||
								tabStylesIsPanelOpen === "first"}
							opened={tabStylesIsPanelOpen === "_StyleVerticalAlignment" || undefined}
							setAttr__={(data) => {
								setAttributes({
									style_verticalAlignment: data,
								});
							}}
							panelData={style_verticalAlignment || WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT_DEMO} // Provide a default object if undefined
						/> */}
						<WcbSlidersPanel_StyleBackground
							onToggle={() => handleTogglePanel("Styles", "_StyleBackground")}
							initialOpen={tabStylesIsPanelOpen === "_StyleBackground"}
							opened={tabStylesIsPanelOpen === "_StyleBackground" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_backgroundAndBorder: data });
							}}
							panelData={style_backgroundAndBorder}
						/>
						<WcbSliderPanel_StyleBoxshadow
							onToggle={() => handleTogglePanel("Styles", "_StyleBoxshadow")}
							initialOpen={tabStylesIsPanelOpen === "_StyleBoxshadow"}
							opened={tabStylesIsPanelOpen === "_StyleBoxshadow" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({
									style_boxshadow: data,
								});
							}}
							panelData={style_boxshadow}
						/>
						<WcbSlidersPanel_StyleArrowDots
							onToggle={() => handleTogglePanel("Styles", "_StyleArrowDots")}
							initialOpen={tabStylesIsPanelOpen === "_StyleArrowDots"}
							opened={tabStylesIsPanelOpen === "_StyleArrowDots" || undefined}
							setAttr__={(data) => {
								setAttributes({ style_arrowAndDots: data });
							}}
							panelData={style_arrowAndDots}
						/>
						<WcbSlidersPanel_StyleDimension
							onToggle={() => handleTogglePanel("Styles", "_StyleDimension")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDimension"}
							opened={tabStylesIsPanelOpen === "_StyleDimension" || undefined}
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

	// Use useMemo to prevent unnecessary template recreation
	const innerBlocksTemplate: any[] = [
		SLIDER_ITEM_DEMO,
		SLIDER_ITEM_DEMO,
		SLIDER_ITEM_DEMO
	]

	const innerBlocksProps = useInnerBlocksProps(
		{
			allowedBlocks: SLIDER_ITEM_DEMO,
			template: innerBlocksTemplate,
			renderAppender: false,
			orientation: 'horizontal',
		}
	);

	// Memoized child component to prevent multiple renders
	const MemoizedChildBlock = useMemo(() => {
		return React.memo(({ block, isSelected, onSelect, index}: any) => {
				return (
				<div
					key={index + "-"}
						onClick={(e) => {
							e.stopPropagation();
							onSelect(block.clientId);
						}}
					>
						{/* WPBlockEdit sets up BlockEditContextProvider so child's InspectorControls
						    gets its own isSelected context, independent of the parent's context.
						    mayDisplayControls must ALSO be passed explicitly: since WP 7.0,
						    BlockEdit's InspectorControls Fill visibility is gated on this prop
						    (normally computed and passed down by BlockListBlockProvider), not on
						    isSelected alone. Because these children are mounted manually here
						    instead of through the standard <BlockListBlock> pipeline, that
						    computation never happens unless we provide it ourselves. */}
						<WPBlockEdit
							name={block.name}
							attributes={block.attributes}
							setAttributes={(newAttributes: any) => {
								wp.data.dispatch("core/block-editor").updateBlockAttributes(
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
								// </div>
					// 		</div>
					// 	</div>
					// </div>
				);
			},
			(prevProps, nextProps) => {
				// Only rerender when attributes or selection change
				if (prevProps.isSelected !== nextProps.isSelected) return false;
				if (prevProps.block.clientId !== nextProps.block.clientId) return false;

				// compare attributes shallow
				const prevAttrs = prevProps.block.attributes;
				const nextAttrs = nextProps.block.attributes;

				const keys = Object.keys({ ...prevAttrs, ...nextAttrs });
				for (const key of keys) {
					if (prevAttrs[key] !== nextAttrs[key]) {
						return false; // rerender if any attribute differs
					}
				}

				return true; // keep the same component if no changes
			}
		);
	}, []);

	useEffect(() => {
		// Get all DOM slider wrapper
		const sliders = document.querySelectorAll(".wcb-slider__wrap");
		const sliderItemInner = document.querySelectorAll(".wcb-slider__item-inner");

		sliders.forEach((slider) => {
			const items = slider.querySelectorAll<HTMLElement>(
				".wcb-slider-child__item-inner"
			);

			if (items.length > 0) {
				// Reset padding before calculating
				items.forEach((item) => {
					item.style.paddingTop = "";
					item.style.paddingRight = "";
					item.style.paddingBottom = "";
					item.style.paddingLeft = "";
				});

				// Find max padding value by site
				let maxPaddingTop = 0;
				let maxPaddingRight = 0;
				let maxPaddingBottom = 0;
				let maxPaddingLeft = 0;

				items.forEach((item) => {
					const style = window.getComputedStyle(item);
					maxPaddingTop = Math.max(maxPaddingTop, parseFloat(style.paddingTop));
					maxPaddingRight = Math.max(maxPaddingRight, parseFloat(style.paddingRight));
					maxPaddingBottom = Math.max(maxPaddingBottom, parseFloat(style.paddingBottom));
					maxPaddingLeft = Math.max(maxPaddingLeft, parseFloat(style.paddingLeft));
				});

				// Assign padding for sync
				items.forEach((item: any) => {
					item.style.paddingTop = `${maxPaddingTop}px !important`;
					item.style.paddingRight = `${maxPaddingRight}px !important`;
					item.style.paddingBottom = `${maxPaddingBottom}px !important`;
					item.style.paddingLeft = `${maxPaddingLeft}px !important`;
				});

				// Sync hight
				let maxHeight = 0;
				items.forEach((item) => {
					// item.style.height = "auto"; // reset before calculating
					maxHeight = Math.max(maxHeight, item.offsetHeight);
				});

				sliderItemInner.forEach((item:any) => {
					item.style.height = `${maxHeight}px`;
					item.style.display = "flex";
					item.style.alignItems = "center";
					item.style.justifyContent = "center";
				});
			}
		});
	});

	// Force Slick recalc & reset after InnerBlocks render
	useEffect(() => {
		if (sliderRef.current && innerBlocks.length > 0) {
			const total = innerBlocks.length;

			// Trick: go to external range then back to 0
			sliderRef.current.slickGoTo(total + 1, true);

			setTimeout(() => {
				if (sliderRef.current) {
					sliderRef.current.slickGoTo(0, true); // reset about slide 0
					sliderRef.current.innerSlider.onWindowResized(); // force calc width/transform
				}
			}, 500); // delay for DOM keep render
		}
	}, [innerBlocks.length]);

	// 3. Add method to force recalc when needed (e.g., after adding/removing blocks)
	const forceSliderRecalc = useCallback(() => {
		if (sliderRef.current && innerBlocks.length > 0) {
			// Force Slick to recalculate dimensions
			// sliderRef.current.slick('setPosition');
			
			// Reset about slide first with animation false
			setTimeout(() => {
				if (sliderRef.current) {
					sliderRef.current.slickGoTo(0, false);
				}
			}, 100);
		}
	}, []);

	// 4. Call forceSliderRecalc when needed
	useEffect(() => {
		if (sliderRef.current && innerBlocks.length > 0) {
			// Replace logic old = logic simple more reliable
			forceSliderRecalc();
		}
	}, [innerBlocks.length, forceSliderRecalc]);

	// 5. Add resize handler to ensure slider always centers
	useEffect(() => {
		const handleResize = () => {
			forceSliderRecalc();
		};
		
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [forceSliderRecalc]);

	const renderSliderContent = () => {
		const {
			animationDuration,
			autoplaySpeed,
			hoverpause,
			isAutoPlay,
			showArrowsDots,
			adaptiveHeight,
		} = general_carousel;
		const { colGap, columns } = general_general;

		const { currentDeviceValue: currentColumns } = getValueFromAttrsResponsives(
			columns,
			deviceType
		);

		const settings: Settings = {
			// Forced false in the editor (regardless of the "rewind" attribute, which
			// still controls the real frontend carousel via view.js): react-slick
			// clones slides for infinite+centerMode looping, which would mount
			// <WPBlockEdit> more than once for the same child slide, duplicating its
			// InspectorControls panel in the sidebar whenever it's selected.
			infinite: false,
			speed: animationDuration || 500,
			autoplay: isAutoPlay,
			autoplaySpeed,
			slidesToShow: currentColumns,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			dots: showArrowsDots !== "Arrow",
			arrows: showArrowsDots !== "Dot",
			adaptiveHeight: adaptiveHeight,
			pauseOnHover: hoverpause,
			pauseOnFocus: true,
			accessibility: false,
			initialSlide: 0,
			// Disable touch/swipe in editor mode to prevent accidental slide changes
			swipe: true,
			touchMove: true,
			draggable: true,
			// slider center config
			centerMode: true,
			centerPadding: "0px",
			useTransform: true,
			// useCSS: true,
			// variableWidth: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: currentColumns,
						slidesToScroll: 1,
						centerMode: true,
                		centerPadding: "0px"
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: currentColumns,
						slidesToScroll: 1,
						centerMode: true,
                		centerPadding: "0px"
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: currentColumns,
						slidesToScroll: 1,
						centerMode: true,
                		centerPadding: "0px"
					}
				}
			]
		};

		// If no inner blocks or blocks count doesn't match target, show template
		// If no inner blocks, show template  
		if (innerBlocks.length === 0) {
			return (
				<div className="wcb-slider__wrap-items">
					<Slider 
						ref={ sliderRef } 
						{...settings} 
					>
						<div {...innerBlocksProps} />
						{/* <InnerBlocks
							allowedBlocks={SLIDER_ITEM_DEMO}
							template={innerBlocksTemplate}
							templateLock={false}
							renderAppender={isSelected ? InnerBlocks.DefaultBlockAppender : undefined} /> */}
					</Slider>
				</div>
			);
		}

		// Show slider with individual child blocks
		return (
			<div className="wcb-slider__wrap-items">
				<Slider 
					ref={ sliderRef } 
					{...settings}
				>
					{innerBlocks.map((block: any, index: number) => {
						const isChildSelected = !isParentSelected && (selectedChildId != null && selectedChildId === block.clientId);
						return (
							<MemoizedChildBlock
								key={block.clientId}
								block={block}
								isSelected={isChildSelected}
								onSelect={handleChildSelect}
								index={index + 1} // Pass index to child for unique identification
							/>
						);
					})}
				</Slider>
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

	const handleParentClick = useCallback((e: React.MouseEvent) => {
		if (e.target === e.currentTarget && !isParentSelected) {
			selectBlock(clientId);
			setIsParentSelected(true);
			setSelectedChildId(null);
			// Clear the stored selection when parent is selected
			setStoredSelectedChildId(null);
		}
	}, [isParentSelected, clientId]);

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-slider__wrap ${uniqueId} ${parentCssClass}`}
				data-uniqueid={uniqueId}
				onClick={handleParentClick}
			>
				{/* CONTROL SETTINGS - only the parent's own settings. When a child slide
				    is selected, that child's own Edit component (block-slider-child/Edit.tsx,
				    mounted via WPBlockEdit below) renders its own <InspectorControls> directly,
				    since only a Fill whose BlockEditContext clientId matches the truly selected
				    block is shown by Gutenberg - a Fill rendered from here (the parent) would be
				    filtered out whenever a child is the actual selected block. */}
				{isParentSelected && (
					<HOCInspectorControls
						renderTabPanels={renderTabBodyPanels}
						uniqueId={uniqueId}
					/>
				)}

				{/* CSS IN JS */}
				<GlobalCss {...WcbAttrsForSave()} />

				{/* CHILD CONTENT */}
				{renderSliderContent()}
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
