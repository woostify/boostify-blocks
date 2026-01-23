import React from "react";
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";
import MyIconFull from "../components/controls/MyIconFull";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "designation" | "description"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_image,
		general_layout,
		general_socials,
		heading,
		description,
		designation,
		style_description,
		style_desination,
		style_socialIcons,
		style_title,
		style_image,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_image,
		general_layout,
		general_socials,
		style_description,
		style_desination,
		style_socialIcons,
		style_title,
		style_image,
	};
	//

	const renderImage = () => {
		return general_image.isShowImage && general_image?.image?.mediaId ? (
			<img
				className="bcb-team__image"
				src={general_image.image.mediaUrl}
				alt=""
			/>
		) : null;
	};

	const blockProps = useBlockProps.save({
		className: "bcb-team__wrap",
	});
	const HeadingTag = general_layout.headingTag;
	return (
		<SaveCommon attributes={newAttrForSave} uniqueId={uniqueId} {...blockProps}>
			{(general_image.imagePosition === "left" ||
				general_image.imagePosition === "top") &&
				renderImage()}
			{/* CHILD CONTENT  */}
			<div className="bcb-team__content-wrap">
				<div className="bcb-team__content">
					<RichText.Content
						tagName={HeadingTag}
						value={heading}
						placeholder={__("Heading...")}
						className="bcb-team__heading"
					/>
					<RichText.Content
						tagName="div"
						value={designation}
						placeholder={__("Designation...")}
						className="bcb-team__designation"
					/>
					<RichText.Content
						tagName="div"
						value={description}
						placeholder={__("Description...")}
						className="bcb-team__description"
					/>
				</div>

				{general_socials.enableSocials && general_socials.socials?.length ? (
					<div className="bcb-team__socials-icons">
						{general_socials.socials.map((item, index) => {
							return (
								<a
									key={index}
									href={item.url || ""}
									target={
										general_socials.openLinkInNewTab ? "_blank" : undefined
									}
									rel="noopener noreferrer"
								>
									<MyIconFull icon={item.icon} />
								</a>
							);
						})}
					</div>
				) : null}
			</div>

			{(general_image.imagePosition === "right" ||
				general_image.imagePosition === "bottom") &&
				renderImage()}
		</SaveCommon>
	);
}
