import React from "react";
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { TestimonialItem, WcbAttrs } from "./attributes";
// @ts-ignore
import "./style.scss";
import { TESTIMONIAL_ITEM_DEMO } from "./Edit";
import { DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES } from "../________";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import getImageUrlBySize from "../utils/getImageUrlBySize";
import VideoBackgroundByBgControl from "../components/VideoBackgroundByBgControl";
import OverlayBackgroundByBgControl from "../components/OverlayBackgroundByBgControl";

export interface WcbAttrsForSave extends Omit<WcbAttrs, "testimonials"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_carousel,
		general_images,
		general_rating,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_company,
		style_content,
		style_dimension,
		style_image,
		style_name,
		style_rating,
		testimonials,
		advance_motionEffect,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		general_carousel,
		general_images,
		general_rating,
		style_arrowAndDots,
		style_backgroundAndBorder,
		style_company,
		style_content,
		style_dimension,
		style_image,
		style_name,
		style_rating,
		advance_motionEffect,
	};
	//
	const blockProps = useBlockProps.save({
		// wcb-update-div is what block-common-css/FrontendStyles.tsx's
		// dispatcher scans for on page load to mount this block's GlobalCss
		// (dynamic color/size/spacing CSS from style_* attributes) - Swiper
		// init itself is handled separately below via the Interactivity API.
		className: `wcb-testimonials-swiper__wrap ${uniqueId} wcb-update-div`,
		"data-uniqueid": uniqueId,
	});

	let CURRENT_DATA = [
		...Array(general_general.numberofTestimonials || 3).keys(),
	].map((_, index) => testimonials[index] || TESTIMONIAL_ITEM_DEMO);

	const renderTestimonialItemContent = (
		item: TestimonialItem,
		index: number
	) => {
		return (
			<RichText.Content
				tagName="div"
				className="wcb-testimonials-swiper__item-content"
				value={item.content}
			/>
		);
	};

	const renderTestimonialItemName = (item: TestimonialItem, index: number) => {
		return (
			<RichText.Content
				tagName="div"
				className="wcb-testimonials-swiper__item-name"
				value={item.name}
			/>
		);
	};

	const renderTestimonialItemCompany = (
		item: TestimonialItem,
		index: number
	) => {
		return (
			<RichText.Content
				tagName="div"
				className="wcb-testimonials-swiper__item-company"
				value={item.companyName}
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
			<div className="swiper-slide" key={index}>
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
										{renderTestimonialItemName(item, index)}

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
			</div>
		);
	};

	const { showArrowsDots } = general_carousel;
	const showArrows = showArrowsDots !== "Dot";
	const showDots = showArrowsDots !== "Arrow";

	// State the Interactivity store (public/js/testimonials-swiper/
	// boostify-blocks-testimonials-swiper-view.js) needs to configure `new
	// Swiper(...)` on the frontend - kept separate from the <pre
	// data-wcb-block-attrs> JSON above, which is only for GlobalCss.
	const swiperContext = {
		rewind: general_carousel.rewind,
		animationDuration: general_carousel.animationDuration,
		autoplaySpeed: general_carousel.autoplaySpeed,
		isAutoPlay: general_carousel.isAutoPlay,
		hoverpause: general_carousel.hoverpause,
		showArrowsDots,
		adaptiveHeight: general_carousel.adaptiveHeight,
		columns: general_general.columns,
	};

	return (
		<div {...blockProps}>
			{/* Frontend CSS injection elements */}
			<div data-wcb-global-styles={uniqueId}></div>
			<pre data-wcb-block-attrs={uniqueId} style={{ display: "none" }}>
				{JSON.stringify(newAttrForSave, null, 2)}
			</pre>

			{/* Slider structure - Swiper markup baked in at save time, initialised
			    on the frontend by the Interactivity API store (public/js/
			    testimonials-swiper/boostify-blocks-testimonials-swiper-view.js),
			    reading swiperContext via data-wp-context. */}
			<div
				className="wcb-testimonials-swiper__wrap-items swiper"
				data-wp-interactive="boostify-blocks/testimonials-swiper"
				data-wp-context={JSON.stringify(swiperContext)}
				data-wp-init="callbacks.initSwiper"
			>
				<div className="swiper-wrapper">
					{CURRENT_DATA.map(renderTestimonialItem)}
				</div>

				{showArrows && (
					<>
						<div className="swiper-button-prev">
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
						<div className="swiper-button-next">
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
					</>
				)}

				{showDots && <div className="swiper-pagination"></div>}
			</div>
		</div>
	);
}
