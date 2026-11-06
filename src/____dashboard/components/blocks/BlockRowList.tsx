import React, { FC } from "react";
import { __ } from "@wordpress/i18n";
import DynamicIcon from "../common/DynamicIcon";
import { UnifiedBlockItem } from "../../types";

interface BlockRowListProps {
	block: UnifiedBlockItem;
	isFirst?: boolean;
	onToggle: (id: string, nextStatus: "enabled" | "disabled") => void;
	onNotifyMe?: (title?: string) => void;
	isSubscribed?: boolean;
}

const BlockRowList: FC<BlockRowListProps> = ({ block, onToggle, onNotifyMe, isSubscribed }) => {
	const isEnabled = block.status === "enabled";
	const isPro = !!block.isPro;

	const tileClass = isPro
		? "bb-tile-icon is-sm is-pro"
		: isEnabled
		? "bb-tile-icon is-sm is-enabled"
		: "bb-tile-icon is-sm is-disabled";

	return (
		<div className="bb-list-row">
			{/* Icon tile (32x32) */}
			<div className={tileClass}>
				<DynamicIcon name={block.icon} blockName={block.name} size={18} />
			</div>

			{/* Title & Badges */}
			<div className="bb-card-title-row">
				<span
					className={`bb-list-title ${!isEnabled && !isPro ? "is-disabled" : ""}`}
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

			{/* Description */}
			<div className={`bb-list-desc ${!isEnabled ? "is-disabled" : ""}`}>
				{block.description}
			</div>

			{/* Switch or Lock / Notify me */}
			<div style={{ display: "flex", justifyContent: "center" }}>
				{isPro ? (
					isSubscribed ? (
						<span
							title={__( "Waitlist joined", "boostify-blocks" )}
							style={{ color: "#059669", display: "flex", alignItems: "center" }}
						>
							<DynamicIcon name="check_circle" size={18} style={{ color: "#059669" }} />
						</span>
					) : (
						<button
							type="button"
							title={__( "Notify me", "boostify-blocks" )}
							onClick={() => onNotifyMe && onNotifyMe(block.title)}
							className="bb-link-btn"
							style={{ fontSize: "12px", display: "flex", alignItems: "center", gap: "4px" }}
						>
							<DynamicIcon name="lock" size={15} style={{ color: "#a3a3ae" }} />
							<span>{__( "Notify me", "boostify-blocks" )}</span>
						</button>
					)
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
		</div>
	);
};

export default BlockRowList;
