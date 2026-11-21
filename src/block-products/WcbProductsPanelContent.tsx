import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyHeadingTagControl from "../components/controls/MyHeadingTagControl/MyHeadingTagControl";
import { HtmlTagsType } from "../types";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";

export interface WCB_PRODUCTS_PANEL_COTENT {
	// isShowAddToCartBtn: boolean;
	isShowPrice: boolean;
	isShowRating: boolean;
	isShowSKU: boolean;
	isShowSaleBadge: boolean;
	isShowOutOfStock: boolean;
	isShowTitle: boolean;
	isShowCategory: boolean;
	titleHtmlTag: HtmlTagsType;
	//
	saleBadgePosition: "Inside image" | "bottom";
	showSaleBadgeDiscoutPercent: boolean;
	taxonomyStyle: "Normal" | "Highlighted";
}

const SALE_POSITION_OPTIONS: MyRadioItem<
	WCB_PRODUCTS_PANEL_COTENT["saleBadgePosition"]
>[] = [
	{ name: "Inside image", icon: "Inside image" },
	{ name: "bottom", icon: "Bottom" },
];

export const WCB_PRODUCTS_PANEL_COTENT_DEMO: WCB_PRODUCTS_PANEL_COTENT = {
	// isShowAddToCartBtn: true,
	isShowPrice: true,
	isShowRating: true,
	isShowSaleBadge: true,
	isShowOutOfStock: true,
	isShowSKU: true,
	isShowCategory: true,
	showSaleBadgeDiscoutPercent: false,
	//
	isShowTitle: true,
	titleHtmlTag: "h4",
	saleBadgePosition: "Inside image",
	taxonomyStyle: "Highlighted",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_PRODUCTS_PANEL_COTENT;
	setAttr__: (data: WCB_PRODUCTS_PANEL_COTENT) => void;
}

const WcbProductsPanelContent: FC<Props> = ({
	panelData = WCB_PRODUCTS_PANEL_COTENT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const {
		isShowTitle,
		titleHtmlTag,
		showSaleBadgeDiscoutPercent,
		isShowPrice,
		isShowRating,
		isShowSaleBadge,
		isShowOutOfStock,
		saleBadgePosition,
		isShowCategory,
	} = panelData;

	const renderSaleDisclosure = () => {
		return (
			<MyDisclosure label="Sale badge" defaultOpen>
				<ToggleControl
					label={__("Sale badge", "boostify-blocks")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowSaleBadge: checked })
					}
					checked={isShowSaleBadge}
				/>

				<ToggleControl
					label={__("Show discount percentage", "boostify-blocks")}
					onChange={(checked) =>
						setAttr__({ ...panelData, showSaleBadgeDiscoutPercent: checked })
					}
					checked={showSaleBadgeDiscoutPercent}
				/>

				<MyRadioGroup
					label="Position"
					onChange={(selected) =>
						setAttr__({
							...panelData,
							saleBadgePosition: selected as any,
						})
					}
					value={saleBadgePosition}
					plans={SALE_POSITION_OPTIONS}
					hasResponsive={false}
				/>
			</MyDisclosure>
		);
	};

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Content", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Product category", "boostify-blocks")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowCategory: checked })
					}
					checked={isShowCategory}
				/>

				<ToggleControl
					label={__("Product title", "boostify-blocks")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowTitle: checked })
					}
					checked={isShowTitle}
				/>

				{isShowTitle ? (
					<MyHeadingTagControl
						tag={titleHtmlTag}
						label={__("Title HTML tag", "boostify-blocks")}
						onChange={(tag) => setAttr__({ ...panelData, titleHtmlTag: tag })}
					/>
				) : null}

				<ToggleControl
					label={__("Product price", "boostify-blocks")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowPrice: checked })
					}
					checked={isShowPrice}
				/>

				{isShowSaleBadge ? (
					renderSaleDisclosure()
				) : (
					<ToggleControl
						label={__("Sale badge", "boostify-blocks")}
						onChange={(checked) =>
							setAttr__({ ...panelData, isShowSaleBadge: checked })
						}
						checked={isShowSaleBadge}
					/>
				)}

				<ToggleControl
					label={__("Out of stock badge", "boostify-blocks")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowOutOfStock: checked })
					}
					checked={isShowOutOfStock ?? true}
				/>

				<ToggleControl
					label={__("Product rating", "boostify-blocks")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowRating: checked })
					}
					checked={isShowRating}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbProductsPanelContent;
