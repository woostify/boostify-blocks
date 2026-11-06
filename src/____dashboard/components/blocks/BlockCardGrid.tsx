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
					<DynamicIcon name="lock" size={18} style={{ color: "#a3a3ae" }} />
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
					<div style={{ display: "flex", gap: "16px" }}>
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
							<span style={{ color: "#a3a3ae" }}>
								{__( "Documentation", "boostify-blocks" )}
							</span>
						)}
					</div>
				) : (
					<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
						<span style={{ fontSize: "12.5px", color: "#8b8b97" }}>
							{__( "Coming with Pro", "boostify-blocks" )}
						</span>
						{isSubscribed ? (
							<span
								style={{
									fontSize: "12px",
									fontWeight: 500,
									color: "#059669",
									display: "inline-flex",
									alignItems: "center",
									gap: "4px",
								}}
							>
								<DynamicIcon name="check_circle" size={14} style={{ color: "#059669" }} />
								{__( "Waitlist joined", "boostify-blocks" )}
							</span>
						) : (
							<button
								type="button"
								onClick={() => onNotifyMe && onNotifyMe(block.title)}
								className="bb-link-btn"
								style={{ fontSize: "12.5px", fontWeight: 600 }}
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
