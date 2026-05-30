import { __ } from "@wordpress/i18n";
import { Button, Placeholder } from "@wordpress/components";
import type { ComponentProps } from "react";
import { Icon, external } from "@wordpress/icons";
import { ADMIN_URL } from "./constants";

type PlaceholderIconType = ComponentProps<typeof Placeholder>["icon"];

export const renderNoProductsPlaceholder = (
	blockTitle: string,
	blockIcon: PlaceholderIconType
) => (
	<Placeholder
		className="wc-block-products"
		icon={blockIcon}
		label={blockTitle}
	>
		<p>
			{__(
				"You haven't published any products to list here yet.",
				"woocommerce"
			)}
		</p>
		<Button
			className="wc-block-products__add-product-button"
			variant="secondary"
			href={ADMIN_URL + "post-new.php?post_type=product"}
		>
			{__("Add new product", "woocommerce") + " "}
			<Icon icon={external} />
		</Button>
		<Button
			className="wc-block-products__read_more_button"
			variant="tertiary"
			href="https://docs.woocommerce.com/document/managing-products/"
		>
			{__("Learn more", "woocommerce")}
		</Button>
	</Placeholder>
);

export const renderHiddenContentPlaceholder = (
	blockTitle: string,
	blockIcon: PlaceholderIconType
) => (
	<Placeholder
		className="wc-block-products"
		icon={blockIcon}
		label={blockTitle}
	>
		{__(
			"The content for this block is hidden due to block settings.",
			"woocommerce"
		)}
	</Placeholder>
);
