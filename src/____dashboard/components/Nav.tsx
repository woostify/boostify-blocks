import React, { FC } from "react";
import { __ } from "@wordpress/i18n";
import DynamicIcon from "./common/DynamicIcon";
import Logo from "../../components/Logo";
import { Path } from "../types";
import { DEFAULT_URLS } from "../data/constants";

export interface NavPage {
	name: string;
	path: Path;
}

export const NAV_PAGES: NavPage[] = [
	{
		name: __( "Overview", "boostify-blocks" ),
		path: "overview",
	},
	{
		name: __( "Blocks", "boostify-blocks" ),
		path: "blocks",
	},
	{
		name: __( "Settings", "boostify-blocks" ),
		path: "settings",
	},
];

interface NavProps {
	currentPath: Path;
	onChangePath: (path: Path) => void;
	version?: string;
	supportUrl?: string;
}

const Nav: FC<NavProps> = ({
	currentPath,
	onChangePath,
	version,
	supportUrl = DEFAULT_URLS.support,
}) => {
	return (
		<header className="bb-header">
			<div className="bb-nav-wrapper">
				{/* Top row: Brand + Mobile Support link */}
				<div className="bb-nav-top-row">
					{/* Brand */}
					<div className="bb-brand">
						<a href="?page=boostify-blocks-settings" className="bb-brand-link">
							<Logo className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] block flex-shrink-0" />
							<span className="bb-brand-title">
								Boostify Blocks
							</span>
						</a>
						{version && (
							<span className="bb-version-tag">
								v{version}
							</span>
						)}
					</div>

					{/* Support link on mobile */}
					{supportUrl && (
						<a
							href={supportUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="bb-nav-support-mobile"
						>
							<DynamicIcon name="support_agent" size={18} />
							<span>{__( "Support", "boostify-blocks" )}</span>
						</a>
					)}
				</div>

				{/* Tabs Navigation */}
				<nav className="bb-nav-tabs">
					{NAV_PAGES.map((t) => {
						const isActive = currentPath === t.path;
						return (
							<button
								key={t.path}
								type="button"
								onClick={() => onChangePath(t.path)}
								className={`bb-nav-tab-btn ${isActive ? "is-active" : ""}`}
							>
								{t.name}
							</button>
						);
					})}
				</nav>

				{/* Support link on desktop */}
				{supportUrl && (
					<div className="bb-nav-support-desktop">
						<a
							href={supportUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="bb-support-link"
						>
							<DynamicIcon name="support_agent" size={19} />
							<span>{__( "Support", "boostify-blocks" )}</span>
						</a>
					</div>
				)}
			</div>
		</header>
	);
};

export default Nav;
