import React, { FC } from "react";

export type BadgeVariant = "pro" | "new" | "extension" | "coming-soon" | "default";

interface BadgeProps {
	variant?: BadgeVariant;
	children: React.ReactNode;
	className?: string;
}

const Badge: FC<BadgeProps> = ({ variant = "default", children, className = "" }) => {
	let variantClasses = "bg-gray-100 text-gray-700 border-gray-200";

	switch (variant) {
		case "pro":
			variantClasses = "bb-badge-pro bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-xs";
			break;
		case "new":
			variantClasses = "bg-emerald-50 text-emerald-700 border-emerald-200 font-medium";
			break;
		case "extension":
			variantClasses = "bg-indigo-50 text-indigo-700 border-indigo-200 font-medium";
			break;
		case "coming-soon":
			variantClasses = "bg-slate-100 text-slate-600 border-slate-200 text-xs";
			break;
		default:
			break;
	}

	return (
		<span
			className={`inline-flex items-center px-2 py-0.5 rounded text-xs tracking-wide uppercase border border-transparent select-none ${variantClasses} ${className}`}
		>
			{children}
		</span>
	);
};

export default Badge;

