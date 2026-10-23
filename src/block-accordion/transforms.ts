import { createBlock } from "@wordpress/blocks";

const transforms = {
	from: [
		{
			type: "block" as const,
			blocks: ["boostify-blocks/faq"],
			transform: (attributes: any, innerBlocks: any[]) => {
				const newInnerBlocks = (innerBlocks || []).map((childBlock: any) => {
					const question = childBlock?.attributes?.question || "";
					const answer = childBlock?.attributes?.answer || "";

					const paragraphBlock = createBlock("core/paragraph", {
						content: answer,
					});

					return createBlock(
						"boostify-blocks/accordion-item",
						{
							title: question,
							headingTag: attributes?.general_general?.headingTag || "div",
							enableSeparator:
								attributes?.general_general?.enableSeparator ?? true,
						},
						answer ? [paragraphBlock] : []
					);
				});

				return createBlock(
					"boostify-blocks/accordion",
					{
						general_general: {
							headingTag: attributes?.general_general?.headingTag || "div",
							allowMultipleOpen:
								attributes?.general_general?.showMultiple ?? false,
							startCollapsed:
								attributes?.general_general?.expandFirstItem !== undefined
									? !attributes.general_general.expandFirstItem
									: false,
							openPane: 0,
							faqSchema:
								attributes?.general_general?.enableSchemaSupport ?? false,
							enableSeparator:
								attributes?.general_general?.enableSeparator ?? true,
							textAlignment:
								attributes?.general_general?.textAlignment || "left",
						},
						general_icon: attributes?.general_icon,
						style_container: attributes?.style_container,
						style_question: attributes?.style_question,
						style_icon: attributes?.style_icon,
						style_answer: attributes?.style_answer,
						style_dimension: attributes?.style_dimension,
						advance_responsiveCondition:
							attributes?.advance_responsiveCondition,
						advance_zIndex: attributes?.advance_zIndex,
						advance_motionEffect: attributes?.advance_motionEffect,
					},
					newInnerBlocks
				);
			},
		},
	],
};

export default transforms;
