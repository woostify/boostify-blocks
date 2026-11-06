import React, { FC, useEffect, useRef, useState } from "react";
import { __ } from "@wordpress/i18n";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import googleFonts from "../../components/controls/WcbFontFamilyPicker/google-fonts.json";

const ALL_FONTS: string[] = Object.keys(googleFonts).sort((a, b) =>
	a.localeCompare(b)
);

interface Props {
	value: string[];
	onChange: (fonts: string[]) => void;
}

const FontMultiSelect: FC<Props> = ({ value, onChange }) => {
	const [query, setQuery] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [highlighted, setHighlighted] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const listRef = useRef<HTMLUListElement>(null);

	const filtered =
		query.trim() === ""
			? ALL_FONTS.filter((f) => !value.includes(f))
			: ALL_FONTS.filter(
					(f) =>
						f.toLowerCase().includes(query.toLowerCase()) &&
						!value.includes(f)
			  );

	useEffect(() => {
		setHighlighted(0);
	}, [query]);

	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setIsOpen(false);
				setQuery("");
			}
		};
		document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, []);

	useEffect(() => {
		if (isOpen && listRef.current) {
			const item = listRef.current.children[highlighted] as HTMLElement;
			item?.scrollIntoView({ block: "nearest" });
		}
	}, [highlighted, isOpen]);

	const addFont = (font: string) => {
		if (!font || value.includes(font)) return;
		onChange([...value, font]);
		setQuery("");
		inputRef.current?.focus();
	};

	const removeFont = (font: string) => {
		onChange(value.filter((f) => f !== font));
	};

	const clearAll = () => {
		onChange([]);
		setQuery("");
		inputRef.current?.focus();
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (!isOpen && e.key !== "Escape") {
			setIsOpen(true);
		}
		switch (e.key) {
			case "ArrowDown":
				e.preventDefault();
				setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
				break;
			case "ArrowUp":
				e.preventDefault();
				setHighlighted((h) => Math.max(h - 1, 0));
				break;
			case "Enter":
				e.preventDefault();
				if (filtered[highlighted]) addFont(filtered[highlighted]);
				break;
			case "Backspace":
				if (query === "" && value.length > 0) {
					removeFont(value[value.length - 1]);
				}
				break;
			case "Escape":
				setIsOpen(false);
				setQuery("");
				break;
		}
	};

	return (
		<div
			ref={containerRef}
			className={`bb-font-select-wrap ${isOpen ? "is-open" : ""}`}
		>
			{/* Input box */}
			<div
				className="bb-font-input-box"
				onClick={() => {
					inputRef.current?.focus();
					setIsOpen(true);
				}}
			>
				{value.map((font) => (
					<span
						key={font}
						className="bb-font-pill"
					>
						{font}
						<button
							type="button"
							onMouseDown={(e) => {
								e.preventDefault();
								removeFont(font);
							}}
							className="bb-font-pill-remove"
							title={__( "Remove font", "boostify-blocks" )}
						>
							<XMarkIcon className="bb-icon-sm" />
						</button>
					</span>
				))}
				<input
					ref={inputRef}
					type="text"
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
						setIsOpen(true);
					}}
					onFocus={() => setIsOpen(true)}
					onKeyDown={handleKeyDown}
					placeholder={value.length === 0 ? __( "Search Google Fonts…", "boostify-blocks" ) : ""}
					className="bb-font-search-input"
				/>
				{/* Action buttons */}
				<div className="bb-font-actions">
					{value.length > 0 && (
						<button
							type="button"
							onMouseDown={(e) => {
								e.preventDefault();
								clearAll();
							}}
							className="bb-font-action-btn"
							title={__( "Clear all", "boostify-blocks" )}
						>
							<XMarkIcon className="bb-icon-md" />
						</button>
					)}
					<button
						type="button"
						onMouseDown={(e) => {
							e.preventDefault();
							setIsOpen((o) => !o);
							if (!isOpen) inputRef.current?.focus();
						}}
						className="bb-font-action-btn"
						title={__( "Toggle font list", "boostify-blocks" )}
					>
						<ChevronDownIcon
							className={`bb-font-chevron ${isOpen ? "is-open" : ""}`}
						/>
					</button>
				</div>
			</div>

			{/* Dropdown */}
			{isOpen && (
				<div className="bb-font-dropdown">
					<ul ref={listRef} className="bb-font-list">
						{filtered.length === 0 ? (
							<li className="bb-font-empty">
								{value.length === ALL_FONTS.length
									? __( "All fonts selected", "boostify-blocks" )
									: __( "No fonts match", "boostify-blocks" )}
							</li>
						) : (
							filtered.map((font, idx) => (
								<li
									key={font}
									onMouseDown={(e) => {
										e.preventDefault();
										addFont(font);
									}}
									onMouseEnter={() => setHighlighted(idx)}
									className={`bb-font-item ${idx === highlighted ? "is-highlighted" : ""}`}
								>
									{font}
								</li>
							))
						)}
					</ul>
					{filtered.length > 0 && (
						<div className="bb-font-footer">
							{filtered.length} {__( "fonts available", "boostify-blocks" )}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default FontMultiSelect;
