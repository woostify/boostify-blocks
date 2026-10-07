import React from "react";
import { 
    useBlockProps, 
	//@ts-ignore
    useInnerBlocksProps 
} from "@wordpress/block-editor";
import Save__260523 from "./Save__260523";
import Save__100623 from "./Save__100623";
import blokc1Attrs from "./attributes";
import { DEFAULT_MY_ICON } from "../components/controls/SelectIcon/SelecIcon";
import Save from "./Save";
import SaveCommon from "../components/SaveCommon";

const v1 = {};
const v2 = {};
const v3 = {
	attributes: {
		...blokc1Attrs,
		general_icon: {
			type: "object",
			default: {
				enableIcon: true,
				iconPosition: "top",
				icon: {
					...DEFAULT_MY_ICON,
					iconName: "lni-checkmark-circle",
				},
			},
		},
	},
	save: Save__260523,
};
const v4 = {
	attributes: {
		...blokc1Attrs,
		general_icon: {
			type: "object",
			default: {
				enableIcon: true,
				iconPosition: "top",
				icon: {
					...DEFAULT_MY_ICON,
					iconName: "lni-checkmark-circle",
				},
			},
		},
	},
	save: Save__100623,
};

// Migration version - from single block to container block.
const v5 = {
	attributes: {
		...blokc1Attrs,
		// Re-add heading attributes for backward compatibility with old data.
		heading_1: {
			type: "string",
			source: "html",
			selector: ".wcb-icon-list__heading",
			default: "List item",
		},
		heading_2: {
			type: "string",
			source: "html",
			selector: ".wcb-icon-list__heading",
			default: "List item",
		},
		heading_3: {
			type: "string",
			source: "html",
			selector: ".wcb-icon-list__heading",
			default: "List item",
		},
	},
	save: ({ attributes }) => {
		const { uniqueId } = attributes;
		return (
			<div className="wcb-icon-list__wrap" data-uniqueid={uniqueId}>
				<div className="wcb-icon-list__icon-wrap">
					{/* Empty container for migration */}
				</div>
			</div>
		);
	},
	migrate: (attributes) => {
		// Remove heading attributes during migration.
		const { heading_1, heading_2, heading_3, ...newAttributes } = attributes;
		// Migrate to new container block structure
		return [
			newAttributes,
			[
				// Create default child blocks
				["boostify-blocks/icon-child", {}],
				["boostify-blocks/icon-child", {}],
				["boostify-blocks/icon-child", {}],
			]
		];
	}
};

// Migration version v6 - fix appearance.style array issue
const v6 = {
	attributes: blokc1Attrs,
	save: Save,
	migrate: (attributes) => {
		// Fix appearance.style if it's an array
		const fixTypographyAppearance = (typography) => {
			if (!typography) return typography;
			
			let updatedTypography = { ...typography };
			let needsUpdate = false;

			// Fix appearance.style if it's an array
			if (typography?.appearance?.style && Array.isArray(typography.appearance.style)) {
				updatedTypography.appearance = {
					...typography.appearance,
					style: {},
				};
				needsUpdate = true;
			}

			// Fix lineHeight if it's an array
			if (typography?.lineHeight && Array.isArray(typography.lineHeight)) {
				updatedTypography.lineHeight = { Desktop: undefined };
				needsUpdate = true;
			}

			// Fix letterSpacing if it's an array
			if (typography?.letterSpacing && Array.isArray(typography.letterSpacing)) {
				updatedTypography.letterSpacing = { Desktop: undefined };
				needsUpdate = true;
			}

			return needsUpdate ? updatedTypography : typography;
		};

		const newAttributes = {
			...attributes,
			style_title: {
				...attributes.style_title,
				typography: fixTypographyAppearance(attributes.style_title?.typography),
			},
			style_desination: {
				...attributes.style_desination,
				typography: fixTypographyAppearance(attributes.style_desination?.typography),
			},
			style_description: {
				...attributes.style_description,
				typography: fixTypographyAppearance(attributes.style_description?.typography),
			},
		};

		return newAttributes;
	}
};

// Migration version v7 - remove inline containerStyles from save
const SaveWithInlineStyles = ({ attributes }: { attributes: any }) => {
	const {
		uniqueId,
		general_layout,
		style_dimension,
	} = attributes;

	const containerStyles: React.CSSProperties = {
		display: "flex",
		flexDirection: general_layout?.layout === "vertical" ? "column" : "row",
		...(general_layout?.layout === "vertical"
			? {
				alignItems: 
					general_layout?.textAlignment?.Desktop === "center" || 
					general_layout?.textAlignment?.Tablet === "center" || 
					general_layout?.textAlignment?.Mobile === "center" ? 
					"center" :
					general_layout?.textAlignment?.Desktop === "left" || 
					general_layout?.textAlignment?.Tablet === "left" || 
					general_layout?.textAlignment?.Mobile === "left" ? 
					"flex-start" :
					general_layout?.textAlignment?.Desktop === "right" || 
					general_layout?.textAlignment?.Tablet === "right" || 
					general_layout?.textAlignment?.Mobile === "right" ? 
					"flex-end" : "flex-start",
			}
			: {
				justifyContent: 
					general_layout?.textAlignment?.Desktop === "center" || 
					general_layout?.textAlignment?.Tablet === "center" || 
					general_layout?.textAlignment?.Mobile === "center" ? 
					"center" :
					general_layout?.textAlignment?.Desktop === "left" || 
					general_layout?.textAlignment?.Tablet === "left" || 
					general_layout?.textAlignment?.Mobile === "left" ? 
					"flex-start" :
					general_layout?.textAlignment?.Desktop === "right" || 
					general_layout?.textAlignment?.Tablet === "right" || 
					general_layout?.textAlignment?.Mobile === "right" ? 
					"flex-end" : "flex-start",
			}),
		...(style_dimension?.padding?.Desktop && {
			paddingTop: style_dimension.padding.Desktop.top || "",
			paddingRight: style_dimension.padding.Desktop.right || "",
			paddingBottom: style_dimension.padding.Desktop.bottom || "",
			paddingLeft: style_dimension.padding.Desktop.left || "",
		}),
		...(style_dimension?.margin?.Desktop && {
			marginTop: style_dimension.margin.Desktop.top || "",
			marginRight: style_dimension.margin.Desktop.right || "",
			marginBottom: style_dimension.margin.Desktop.bottom || "",
			marginLeft: style_dimension.margin.Desktop.left || "",
		}),
		...(style_dimension?.gapBetweenItems?.Desktop && {
			gap: style_dimension.gapBetweenItems.Desktop,
		}),
	};

	const wrapBlockProps = useBlockProps.save({
		className: "wcb-icon-list__wrap",
	});

	const innerBlocksProps = useInnerBlocksProps.save({
		className: "wcb-icon-list__icon-wrap",
		style: containerStyles,
	});

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={attributes}
			uniqueId={uniqueId}
		>
			<div {...innerBlocksProps} />
		</SaveCommon>
	);
};

const v7 = {
	attributes: blokc1Attrs,
	save: SaveWithInlineStyles,
};

const deprecated = [v7, v6, v5, v4, v3, v2, v1];

export default deprecated;
