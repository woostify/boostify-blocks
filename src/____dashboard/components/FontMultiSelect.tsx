import React, { FC, useEffect, useRef, useState } from "react";
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
		<div ref={containerRef} className="relative">
			{/* Input box */}
			<div
				className="flex flex-wrap items-center gap-1.5 px-2.5 py-2 border border-gray-300 rounded-lg bg-white cursor-text min-h-[44px] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
				onClick={() => {
					inputRef.current?.focus();
					setIsOpen(true);
				}}
			>
				{value.map((font) => (
					<span
						key={font}
						className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-sm font-medium shrink-0"
					>
						{font}
						<button
							type="button"
							onMouseDown={(e) => {
								e.preventDefault();
								removeFont(font);
							}}
							className="hover:text-blue-900 focus:outline-none"
						>
							<XMarkIcon className="w-3.5 h-3.5" />
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
					placeholder={value.length === 0 ? "Search Google Fonts…" : ""}
					className="flex-1 min-w-[140px] outline-none text-sm text-gray-700 bg-transparent placeholder-gray-400 py-0.5"
				/>
				{/* Action buttons */}
				<div className="flex items-center gap-0.5 ml-auto shrink-0">
					{value.length > 0 && (
						<button
							type="button"
							onMouseDown={(e) => {
								e.preventDefault();
								clearAll();
							}}
							className="p-1 text-gray-400 hover:text-gray-600 focus:outline-none"
							title="Clear all"
						>
							<XMarkIcon className="w-4 h-4" />
						</button>
					)}
					<button
						type="button"
						onMouseDown={(e) => {
							e.preventDefault();
							setIsOpen((o) => !o);
							if (!isOpen) inputRef.current?.focus();
						}}
						className="p-1 text-gray-400 hover:text-gray-600 focus:outline-none"
					>
						<ChevronDownIcon
							className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
						/>
					</button>
				</div>
			</div>

			{/* Dropdown */}
			{isOpen && (
				<div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
					<ul
						ref={listRef}
						className="max-h-56 overflow-y-auto py-1 text-sm"
					>
						{filtered.length === 0 ? (
							<li className="px-4 py-2.5 text-gray-400">
								{value.length === ALL_FONTS.length
									? "All fonts selected"
									: "No fonts match"}
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
									className={`px-4 py-2 cursor-pointer select-none ${
										idx === highlighted
											? "bg-blue-50 text-blue-700"
											: "text-gray-700 hover:bg-gray-50"
									}`}
								>
									{font}
								</li>
							))
						)}
					</ul>
					{filtered.length > 0 && (
						<div className="px-4 py-1.5 border-t border-gray-100 text-xs text-gray-400">
							{filtered.length} font{filtered.length !== 1 ? "s" : ""} available
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default FontMultiSelect;
