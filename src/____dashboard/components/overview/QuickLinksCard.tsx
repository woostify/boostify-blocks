import React, { FC } from "react";
import { __ } from "@wordpress/i18n";
import {
	BookOpenIcon,
	UserGroupIcon,
	StarIcon,
	LifebuoyIcon,
	ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

interface QuickLinksCardProps {
	urls: {
		docs?: string;
		community?: string;
		rate?: string;
		support?: string;
	};
}

const QuickLinksCard: FC<QuickLinksCardProps> = ({ urls }) => {
	const links = [
		{
			title: __( "Documentation", "boostify-blocks" ),
			desc: __( "Explore block guides, tutorials, and snippets.", "boostify-blocks" ),
			url: urls.docs || "https://woostify.com/docs/",
			icon: BookOpenIcon,
		},
		{
			title: __( "Community support", "boostify-blocks" ),
			desc: __( "Join fellow store owners and creators in our group.", "boostify-blocks" ),
			url: urls.community || "https://www.facebook.com/groups/woostify",
			icon: UserGroupIcon,
		},
		{
			title: __( "Rate on WordPress.org", "boostify-blocks" ),
			desc: __( "Help us grow with a 5-star review on WordPress.", "boostify-blocks" ),
			url: urls.rate || "https://wordpress.org/support/plugin/boostify-blocks/reviews/#new-post",
			icon: StarIcon,
		},
		{
			title: __( "Priority Support", "boostify-blocks" ),
			desc: __( "Need one-on-one help? Our team is here for you.", "boostify-blocks" ),
			url: urls.support || "https://woostify.com/contact/",
			icon: LifebuoyIcon,
		},
	];

	return (
		<div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
			<div className="pb-4 border-b border-slate-100">
				<h3 className="text-base font-bold text-slate-900">
					{__( "Resources & community", "boostify-blocks" )}
				</h3>
				<p className="text-xs text-slate-500 mt-0.5">
					{__( "Helpful guides and channels to get the most out of Boostify.", "boostify-blocks" )}
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
				{links.map((link) => {
					const Icon = link.icon;
					return (
						<a
							key={link.title}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-xs transition-all flex flex-col justify-between"
						>
							<div>
								<div className="flex items-center justify-between mb-2.5">
									<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
										<Icon className="w-4 h-4" />
									</div>
									<ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
								</div>
								<h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
									{link.title}
								</h4>
								<p className="text-xs text-slate-500 mt-1 leading-relaxed">
									{link.desc}
								</p>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default QuickLinksCard;

