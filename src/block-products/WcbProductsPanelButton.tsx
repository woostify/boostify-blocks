import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import HelpText from "../components/controls/HelpText";
import React, { FC } from "react";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";

export interface WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN {
	isShowButton: boolean;
	position: "bottom" | "inside image" | "bottom visible" | "icon" | "none";
	isShowQuantity?: boolean;
	isShowIcon: boolean;
}

export const WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO: WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN =
	{
		isShowButton: true,
		position: "bottom",
		isShowIcon: true,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN;
	catalogMode?: boolean;
	imageHidden?: boolean;
	setAttr__: (data: WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN) => void;
}

const WcbProductsPanelButton: FC<Props> = ({
	panelData = WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO,
	catalogMode,
	imageHidden,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { position, isShowButton } = panelData;
	const rawPos = position as string;
	const normalizedPosition =
		rawPos === "bottom-visible"
			? "bottom visible"
			: rawPos === "image"
			? "inside image"
			: position;

	const POSTION_PLANS: MyRadioItem<
		WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN["position"]
	>[] = [
		{ name: "inside image", icon: "Inside image" },
		{ name: "bottom", icon: "Bottom" },
		{ name: "bottom visible", icon: "Bottom visible" },
		{ name: "icon", icon: "Icon" },
	];
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Add to Cart button", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				{catalogMode && (
					<HelpText>{__("Catalog Mode hides Add to Cart and the quantity counter on this block.", "boostify-blocks")}</HelpText>
				)}
				<ToggleControl
					label={__("Add to Cart button", "boostify-blocks")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowButton: checked })
					}
					checked={isShowButton}
				/>

				{isShowButton ? (
					<>
						<MyRadioGroup
							label="Position"
							onChange={(selected) =>
								setAttr__({
									...panelData,
									position: selected as any,
								})
							}
							value={normalizedPosition}
							plans={POSTION_PLANS}
							hasResponsive={false}
							isWrap
						/>
						{imageHidden && normalizedPosition === "inside image" && (
							<HelpText>{__("With the product image hidden, the button appears below the product details.", "boostify-blocks")}</HelpText>
						)}
					</>
				) : null}
			</div>
		</PanelBody>
	);
};

export default WcbProductsPanelButton;
