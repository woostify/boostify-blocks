import React, { FC, useEffect, useRef } from "react";
import { __ } from "@wordpress/i18n";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { RemoteDemoPattern } from "../../types";

interface BlockDemoPatternBarProps {
	isOpen: boolean;
	patterns: RemoteDemoPattern[];
	activeIndex: number;
	onSelect: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * Horizontal pattern strip with smooth active-pill scrolling, keyboard Arrow navigation,
 * and neighboring screenshot preloading for large pattern lists.
 */
const BlockDemoPatternBar: FC<BlockDemoPatternBarProps> = ({
	isOpen,
	patterns,
	activeIndex,
	onSelect,
}) => {
	const pillRefs = useRef<Array<HTMLButtonElement | null>>([]);
	const total = patterns.length;

	// Trim stale DOM references when switching to a block with fewer patterns.
	useEffect(() => {
		pillRefs.current.length = total;
	}, [total]);

	// Auto-scroll active pill into view when switching patterns.
	useEffect(() => {
		if (!isOpen || total <= 1) return;
		const pill = pillRefs.current[activeIndex];
		if (pill && typeof pill.scrollIntoView === "function") {
			pill.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
		}
	}, [isOpen, activeIndex, total]);

	// Preload adjacent pattern screenshots after a short idle delay so active live preview loads first.
	useEffect(() => {
		if (!isOpen || total <= 1) return undefined;
		const timerId = window.setTimeout(() => {
			const prevIdx = (activeIndex - 1 + total) % total;
			const nextIdx = (activeIndex + 1) % total;
			const urls = new Set<string>();
			[prevIdx, nextIdx].forEach((idx) => {
				const url = patterns[idx]?.imageUrl;
				if (url) {
					urls.add(url);
				}
			});
			urls.forEach((url) => {
				const img = new window.Image();
				img.src = url;
			});
		}, 300);

		return () => {
			window.clearTimeout(timerId);
		};
	}, [isOpen, activeIndex, total, patterns]);

	// Support Left/Right keyboard arrows while browsing patterns.
	useEffect(() => {
		if (!isOpen || total <= 1) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
			const target = e.target as HTMLElement | null;
			if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;

			if (e.key === "ArrowLeft") {
				e.preventDefault();
				onSelect((prev) => (prev - 1 + total) % total);
			} else if (e.key === "ArrowRight") {
				e.preventDefault();
				onSelect((prev) => (prev + 1) % total);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, total, onSelect]);

	if (total <= 1) {
		return null;
	}

	return (
		<div className="bb-demo-pattern-bar">
			<div className="bb-demo-pattern-pills">
				{patterns.map((pat, idx) => (
					<button
						key={`${pat.id}-${idx}`}
						ref={(el) => {
							pillRefs.current[idx] = el;
						}}
						type="button"
						onClick={() => onSelect(idx)}
						title={pat.title || `#${idx + 1}`}
						className={`bb-demo-pattern-pill ${idx === activeIndex ? "is-active" : ""}`}
					>
						{pat.title || `#${idx + 1}`}
					</button>
				))}
			</div>
			<div className="bb-demo-pattern-nav">
				<button
					type="button"
					onClick={() => onSelect((activeIndex - 1 + total) % total)}
					className="bb-demo-nav-arrow"
					aria-label={__("Previous pattern", "boostify-blocks")}
				>
					<ChevronLeftIcon width={15} height={15} />
				</button>
				<span className="bb-demo-nav-counter">
					{activeIndex + 1} / {total}
				</span>
				<button
					type="button"
					onClick={() => onSelect((activeIndex + 1) % total)}
					className="bb-demo-nav-arrow"
					aria-label={__("Next pattern", "boostify-blocks")}
				>
					<ChevronRightIcon width={15} height={15} />
				</button>
			</div>
		</div>
	);
};

export default BlockDemoPatternBar;
