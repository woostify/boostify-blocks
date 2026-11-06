import React, { FC } from "react";
import { __ } from "@wordpress/i18n";
import DynamicIcon from "../common/DynamicIcon";
import { UnifiedBlockItem } from "../../types";

interface BlockCardGridProps {
	block: UnifiedBlockItem;
	onToggle: (id: string, nextStatus: "enabled" | "disabled") => void;
	onNotifyMe?: (title?: string) => void;
	isSubscribed?: boolean;
}

const BlockCardGrid: FC<BlockCardGridProps> = ({ block, onToggle, onNotifyMe, isSubscribed }) => {
	const isEnabled = block.status === "enabled";
	const isPro = !!block.isPro;

	const tileClass = isPro
		? "bb-tile-icon is-pro"
		: isEnabled
		? "bb-tile-icon is-enabled"
		: "bb-tile-icon is-disabled";

	return (
		<div className={`bb-card-item ${isPro ? "is-pro" : ""}`}>
			{/* Top Header: Tile + Info + Switch */}
			<div className="bb-card-top">
				{/* Tile Icon (40x40) */}
				<div className={tileClass}>
					<DynamicIcon name={block.icon} blockName={block.name} size={22} />
				</div>

				{/* Title, Badges, Category */}
				<div className="bb-card-info">
					<div className="bb-card-title-row">
						<span
							className={`bb-card-title ${!isEnabled && !isPro ? "is-disabled" : ""}`}
							title={block.title}
						>
							{block.title}
						</span>

						{block.isNew && (
							<span className="bb-badge-new">
								NEW
							</span>
						)}

						{isPro && (
							<span className="bb-badge-pro">
								PRO
							</span>
						)}
					</div>
					<div className="bb-card-category">
						{block.category}
					</div>
				</div>

				{/* Switch or Lock */}
				{isPro ? (
					<DynamicIcon name="lock" size={18} className="bb-icon-muted" />
				) : (
					<button
						type="button"
						role="switch"
						aria-checked={isEnabled}
						onClick={() => onToggle(block.id, isEnabled ? "disabled" : "enabled")}
						className="bb-switch"
					>
						<span className="bb-switch-thumb" />
					</button>
				)}
			</div>

			{/* Description */}
			<p className={`bb-card-desc ${!isEnabled ? "is-disabled" : ""}`}>
				{block.description}
			</p>

			{/* Footer */}
			<div className="bb-card-footer">
				{!isPro ? (
					<div className="bb-card-footer-group">
						{block.demoUrl && block.demoUrl !== "#" ? (
							<a
								href={block.demoUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="bb-card-footer-link"
							>
								<span>{__( "Demo", "boostify-blocks" )}</span>
								<DynamicIcon name="arrow_outward" size={15} />
							</a>
						) : (
							<span className="bb-card-footer-muted">
								{__( "Documentation", "boostify-blocks" )}
							</span>
						)}
					</div>
				) : (
					<div className="bb-card-footer-pro-row">
						<span className="bb-card-pro-label">
							{__( "Coming with Pro", "boostify-blocks" )}
						</span>
						{isSubscribed ? (
							<span className="bb-card-waitlist-joined">
								<DynamicIcon name="check_circle" size={14} className="bb-icon-success" />
								{__( "Waitlist joined", "boostify-blocks" )}
							</span>
						) : (
							<button
								type="button"
								onClick={() => onNotifyMe && onNotifyMe(block.title)}
								className="bb-link-btn bb-card-notify-btn"
							>
								{__( "Notify me", "boostify-blocks" )}
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default BlockCardGrid;
