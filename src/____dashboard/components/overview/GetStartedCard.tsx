import React, { FC } from "react";
import { __ } from "@wordpress/i18n";
import {
	SquaresPlusIcon,
	SparklesIcon,
	AdjustmentsVerticalIcon,
	ArrowRightIcon,
	PlusIcon,
} from "@heroicons/react/24/outline";

interface GetStartedCardProps {
	newPageUrl: string;
	onGoToBlocks: () => void;
}

const GetStartedCard: FC<GetStartedCardProps> = ({ newPageUrl, onGoToBlocks }) => {
	const steps = [
		{
			num: "01",
			title: __( "Pick a block", "boostify-blocks" ),
			desc: __( "Type /boostify in the editor or browse the Boostify category in the block inserter.", "boostify-blocks" ),
			icon: SquaresPlusIcon,
		},
		{
			num: "02",
			title: __( "Browse patterns", "boostify-blocks" ),
			desc: __( "Access pre-designed sections and templates directly from the editor toolbar.", "boostify-blocks" ),
			icon: SparklesIcon,
		},
		{
			num: "03",
			title: __( "Fine-tune settings", "boostify-blocks" ),
			desc: __( "Configure local Google fonts, container width, and performance options in Settings.", "boostify-blocks" ),
			icon: AdjustmentsVerticalIcon,
		},
	];

	return (
		<div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-100">
				<div>
					<h2 className="text-xl font-bold text-slate-900 tracking-tight">
						{__( "Get started with Boostify Blocks", "boostify-blocks" )}
					</h2>
					<p className="text-sm text-slate-500 mt-1">
						{__( "Create responsive pages and dynamic store layouts in three simple steps.", "boostify-blocks" )}
					</p>
				</div>
				<div className="flex items-center gap-3">
					<a
						href={newPageUrl}
						className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
					>
						<PlusIcon className="w-4 h-4" />
						{__( "Create a new page", "boostify-blocks" )}
					</a>
					<button
						type="button"
						onClick={onGoToBlocks}
						className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-xl transition-colors cursor-pointer"
					>
						{__( "Manage blocks", "boostify-blocks" )}
						<ArrowRightIcon className="w-3.5 h-3.5" />
					</button>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
				{steps.map((step) => {
					const Icon = step.icon;
					return (
						<div
							key={step.num}
							className="relative p-5 rounded-xl bg-slate-50/60 border border-slate-100/80 hover:border-slate-200 transition-colors"
						>
							<div className="flex items-center justify-between mb-3">
								<span className="text-xs font-bold text-blue-600 tracking-wider">
									{step.num}
								</span>
								<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
									<Icon className="w-4 h-4" />
								</div>
							</div>
							<h3 className="text-base font-semibold text-slate-900 mb-1.5">
								{step.title}
							</h3>
							<p className="text-sm text-slate-600 leading-relaxed">
								{step.desc}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default GetStartedCard;

