import React, { FC, useState, useEffect } from "react";
import { __ } from "@wordpress/i18n";
import toast from "react-hot-toast";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import DynamicIcon from "../common/DynamicIcon";

interface BlockDemoFallbackProps {
	demoKey?: string;
	title: string;
	description?: string;
}

const POSTS_MOCK = [
	{ cat: "Guides", title: "Designing landing pages with containers", date: "Nov 2, 2026" },
	{ cat: "Release", title: "What's new in Boostify Blocks", date: "Oct 21, 2026" },
	{ cat: "Tips", title: "Five ways to speed up your pages", date: "Oct 8, 2026" },
];

const PRODUCTS_MOCK = [
	{ name: "Minimalist Backpack", price: "$59.00", sale: "$79.00", badge: "-25%" },
	{ name: "Classic Canvas Tote", price: "$34.00", sale: "", badge: "" },
	{ name: "Leather Crossbody", price: "$89.00", sale: "", badge: "NEW" },
];

const QUOTES_MOCK = [
	{
		text: "Boostify replaced three plugins on our site. Pages are lighter and the editor feels fast again.",
		name: "Linh Tran",
		role: "Founder, Studio Nine",
		initials: "LT",
	},
	{
		text: "The container block alone saves us hours on every landing page.",
		name: "Marcus Webb",
		role: "Marketing Lead, Fieldnote",
		initials: "MW",
	},
	{
		text: "Clean markup, sensible defaults, and nothing we have to fight with.",
		name: "Aiko Sato",
		role: "Developer, Brightline",
		initials: "AS",
	},
];

const FAQ_MOCK = [
	{
		q: "Is Boostify Blocks free?",
		a: "Yes. Every core block in the Blocks tab is free to use in the WordPress editor.",
	},
	{
		q: "Do disabled blocks still load assets?",
		a: "No. Disabled blocks are removed from the inserter and none of their CSS or JS is loaded.",
	},
	{
		q: "Does it work with any theme?",
		a: "It works smoothly with any theme that supports the WordPress block editor, including Woostify.",
	},
];

const ACC_MOCK = [
	{
		q: "Shipping",
		a: "Orders ship within 2 business days. Tracking is emailed as soon as the parcel leaves.",
	},
	{
		q: "Returns",
		a: "Return any unused item within 30 days for a full refund.",
	},
	{
		q: "Warranty",
		a: "Every product carries a two-year warranty against manufacturing defects.",
	},
];

const TABS_MOCK = [
	{
		label: "Overview",
		body: "Tabs keep related content organized in one place without making the page longer.",
	},
	{
		label: "Features",
		body: "Each tab pane can hold rich text, images, buttons, or nested container layouts.",
	},
	{
		label: "Specs",
		body: "Customize tab orientation, active bar color, spacing, and typography per breakpoint.",
	},
];

const SLIDES_MOCK = [
	{ title: "Summer Collection", bg: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)", pos: "1 / 3" },
	{ title: "New Arrivals", bg: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)", pos: "2 / 3" },
	{ title: "Free Shipping Over $50", bg: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)", pos: "3 / 3" },
];

const BlockDemoFallback: FC<BlockDemoFallbackProps> = ({ demoKey = "", title, description }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [openAcc, setOpenAcc] = useState(0);
	const [now, setNow] = useState(() => Date.now());
	const [targetTs] = useState(() => Date.now() + ((3 * 24 + 14) * 3600 + 27 * 60 + 9) * 1000);

	// Reset interactive states when switching blocks
	useEffect(() => {
		setActiveIndex(0);
		setOpenAcc(0);
	}, [demoKey]);

	// Ticking countdown timer when previewing countdown fallback
	useEffect(() => {
		if (demoKey !== "countdown") return;
		const timer = setInterval(() => setNow(Date.now()), 1000);
		return () => clearInterval(timer);
	}, [demoKey]);

	const renderPreview = () => {
		switch (demoKey) {
			case "container":
				return (
					<div className="bb-fb-container-grid">
						<div className="bb-fb-col-left">
							<span className="bb-fb-eyebrow">Flexbox Container</span>
							<div className="bb-fb-heading-lg">Lay out anything, in rows or columns.</div>
							<p className="bb-fb-text">
								Set direction, gap, alignment and wrapping per breakpoint. Nest containers to build full sections.
							</p>
							<span className="bb-fb-btn-dark">Get started</span>
						</div>
						<div className="bb-fb-placeholder-box bb-fb-ratio-4x3">image</div>
					</div>
				);

			case "heading":
				return (
					<div className="bb-fb-stack bb-fb-max-md">
						<div className="bb-fb-heading-xl">Everything you need to launch</div>
						<div className="bb-fb-divider-accent" />
						<p className="bb-fb-text-lg">
							A heading, a separator line and a concise description, all styled from one block.
						</p>
					</div>
				);

			case "posts-grid":
				return (
					<div className="bb-fb-grid-3">
						{POSTS_MOCK.map((p) => (
							<div key={p.title} className="bb-fb-post-card">
								<div className="bb-fb-placeholder-box bb-fb-ratio-16x10" />
								<div className="bb-fb-post-cat">{p.cat}</div>
								<div className="bb-fb-post-title">{p.title}</div>
								<div className="bb-fb-post-date">{p.date}</div>
							</div>
						))}
					</div>
				);

			case "products":
				return (
					<div className="bb-fb-grid-3">
						{PRODUCTS_MOCK.map((prod) => (
							<div key={prod.name} className="bb-fb-product-card">
								<div className="bb-fb-placeholder-box bb-fb-ratio-1x1">
									{prod.badge && <span className="bb-fb-prod-badge">{prod.badge}</span>}
									product
								</div>
								<div className="bb-fb-product-name">{prod.name}</div>
								<div className="bb-fb-product-price">
									{prod.sale && <span className="bb-fb-price-old">{prod.sale}</span>}
									<span>{prod.price}</span>
								</div>
								<span className="bb-fb-product-atc">Add to cart</span>
							</div>
						))}
					</div>
				);

			case "buttons":
				return (
					<div className="bb-fb-buttons-row">
						<span className="bb-fb-btn-primary">Start free trial</span>
						<span className="bb-fb-btn-outline">See pricing</span>
					</div>
				);

			case "faq":
			case "accordion": {
				const list = demoKey === "faq" ? FAQ_MOCK : ACC_MOCK;
				return (
					<div className="bb-fb-stack bb-fb-max-md">
						{demoKey === "faq" && (
							<div className="bb-fb-schema-pill">
								<DynamicIcon name="check_circle" size={15} />
								<span>Outputs FAQPage JSON-LD schema</span>
							</div>
						)}
						<div className="bb-fb-acc-list">
							{list.map((item, idx) => {
								const isOpen = openAcc === idx;
								return (
									<div key={item.q} className="bb-fb-acc-item">
										<button
											type="button"
											onClick={() => setOpenAcc(isOpen ? -1 : idx)}
											className="bb-fb-acc-trigger"
										>
											<span>{item.q}</span>
											<span className="bb-fb-acc-symbol">{isOpen ? "−" : "+"}</span>
										</button>
										{isOpen && <div className="bb-fb-acc-body">{item.a}</div>}
									</div>
								);
							})}
						</div>
					</div>
				);
			}

			case "team":
				return (
					<div className="bb-fb-grid-4">
						{[
							["Linh Tran", "Founder"],
							["Marcus Webb", "Design"],
							["Aiko Sato", "Engineering"],
							["Sam Ortiz", "Support"],
						].map(([name, role]) => (
							<div key={name} className="bb-fb-team-card">
								<div className="bb-fb-placeholder-box bb-fb-ratio-1x1">photo</div>
								<div className="bb-fb-team-name">{name}</div>
								<div className="bb-fb-team-role">{role}</div>
							</div>
						))}
					</div>
				);

			case "icon-box":
				return (
					<div className="bb-fb-grid-3">
						{[
							["bolt", "Fast by default", "Assets load only on pages that use the block."],
							["speed", "Fully styleable", "Spacing, typography and colors in the sidebar."],
							["grid_view", "Responsive", "Per-breakpoint controls for every layout."],
						].map(([icon, heading, copy]) => (
							<div key={heading} className="bb-fb-iconbox">
								<div className="bb-fb-iconbox-tile">
									<DynamicIcon name={icon} size={22} />
								</div>
								<div className="bb-fb-iconbox-title">{heading}</div>
								<div className="bb-fb-iconbox-desc">{copy}</div>
							</div>
						))}
					</div>
				);

			case "image":
				return (
					<figure className="bb-fb-figure">
						<div className="bb-fb-placeholder-box bb-fb-ratio-16x9">image</div>
						<figcaption className="bb-fb-figcaption">Responsive image block with caption & overlay controls</figcaption>
					</figure>
				);

			case "google-maps":
				return (
					<div className="bb-fb-map-box">
						<DynamicIcon name="map" size={34} className="bb-fb-map-icon" />
						<div className="bb-fb-heading-sm">Interactive Google Map</div>
						<p className="bb-fb-text bb-fb-text-center">
							Embed custom locations with adjustable zoom, height, and pin controls.
						</p>
					</div>
				);

			case "tabs":
				return (
					<div className="bb-fb-stack bb-fb-max-md">
						<div className="bb-fb-tabs-bar">
							{TABS_MOCK.map((tab, idx) => (
								<button
									key={tab.label}
									type="button"
									onClick={() => setActiveIndex(idx)}
									className={`bb-fb-tab-btn ${activeIndex === idx ? "is-active" : ""}`}
								>
									{tab.label}
								</button>
							))}
						</div>
						<div className="bb-fb-tab-body">{(TABS_MOCK[activeIndex] || TABS_MOCK[0]).body}</div>
					</div>
				);

			case "countdown": {
				const left = Math.max(0, targetTs - now);
				const cells = [
					[Math.floor(left / 864e5), "Days"],
					[Math.floor(left / 36e5) % 24, "Hours"],
					[Math.floor(left / 6e4) % 60, "Minutes"],
					[Math.floor(left / 1e3) % 60, "Seconds"],
				];
				return (
					<div className="bb-fb-countdown-wrap">
						<div className="bb-fb-heading-sm">Launch sale ends in</div>
						<div className="bb-fb-countdown-grid">
							{cells.map(([val, label]) => (
								<div key={String(label)} className="bb-fb-countdown-cell">
									<div className="bb-fb-countdown-num">{String(val).padStart(2, "0")}</div>
									<div className="bb-fb-countdown-label">{label}</div>
								</div>
							))}
						</div>
					</div>
				);
			}

			case "counter":
				return (
					<div className="bb-fb-grid-3 bb-fb-text-center">
						{[
							["250+", "Projects shipped"],
							["98%", "Client retention"],
							["24/7", "Support"],
						].map(([num, label]) => (
							<div key={String(label)} className="bb-fb-counter-item">
								<div className="bb-fb-counter-num">{num}</div>
								<div className="bb-fb-counter-label">{label}</div>
							</div>
						))}
					</div>
				);

			case "icon-list":
				return (
					<div className="bb-fb-iconlist">
						{[
							"Unlimited pages and posts",
							"Works seamlessly with any block theme",
							"Lightweight markup with zero jQuery",
							"Custom icon colors, spacing, and typography",
						].map((text) => (
							<div key={text} className="bb-fb-iconlist-row">
								<DynamicIcon name="check_circle" size={20} className="bb-fb-iconlist-check" />
								<span>{text}</span>
							</div>
						))}
					</div>
				);

			case "icon":
				return (
					<div className="bb-fb-icon-showcase">
						{["bolt", "star", "check_circle", "speed", "visibility"].map((ic) => (
							<div key={ic} className="bb-fb-icon-circle">
								<DynamicIcon name={ic} size={28} />
							</div>
						))}
					</div>
				);

			case "slider": {
				const slide = SLIDES_MOCK[activeIndex % SLIDES_MOCK.length];
				const prevSlide = () => setActiveIndex((i) => (i - 1 + SLIDES_MOCK.length) % SLIDES_MOCK.length);
				const nextSlide = () => setActiveIndex((i) => (i + 1) % SLIDES_MOCK.length);
				return (
					<div className="bb-fb-slider-wrap">
						<div className="bb-fb-slide-box" style={{ background: slide.bg }}>
							<div className="bb-fb-slide-pos">{slide.pos}</div>
							<div className="bb-fb-slide-title">{slide.title}</div>
							<button type="button" onClick={prevSlide} className="bb-fb-slide-arrow is-left" aria-label="Previous slide">
								<ChevronLeftIcon width={18} height={18} />
							</button>
							<button type="button" onClick={nextSlide} className="bb-fb-slide-arrow is-right" aria-label="Next slide">
								<ChevronRightIcon width={18} height={18} />
							</button>
						</div>
						<div className="bb-fb-dots">
							{SLIDES_MOCK.map((s, idx) => (
								<button
									key={s.title}
									type="button"
									onClick={() => setActiveIndex(idx)}
									className={`bb-fb-dot ${activeIndex === idx ? "is-active" : ""}`}
									aria-label={`Slide ${idx + 1}`}
								/>
							))}
						</div>
					</div>
				);
			}

			case "form":
				return (
					<form
						onSubmit={(e) => {
							e.preventDefault();
							toast(__( "Preview only. Nothing was submitted.", "boostify-blocks" ));
						}}
						className="bb-fb-form"
					>
						<div className="bb-fb-heading-sm">Get in touch</div>
						<div className="bb-fb-form-row">
							<label className="bb-fb-label">
								<span>Name</span>
								<input type="text" placeholder="Jane Doe" className="bb-fb-input" />
							</label>
							<label className="bb-fb-label">
								<span>Email</span>
								<input type="email" placeholder="jane@example.com" className="bb-fb-input" />
							</label>
						</div>
						<label className="bb-fb-label">
							<span>Message</span>
							<textarea rows={3} placeholder="How can we help?" className="bb-fb-textarea" />
						</label>
						<div>
							<button type="submit" className="bb-fb-btn-primary">Send message</button>
						</div>
					</form>
				);

			case "testimonials": {
				const quote = QUOTES_MOCK[activeIndex % QUOTES_MOCK.length];
				const prevQuote = () => setActiveIndex((i) => (i - 1 + QUOTES_MOCK.length) % QUOTES_MOCK.length);
				const nextQuote = () => setActiveIndex((i) => (i + 1) % QUOTES_MOCK.length);
				return (
					<div className="bb-fb-testimonial">
						<DynamicIcon name="format_quote" size={38} className="bb-fb-quote-icon" />
						<div className="bb-fb-quote-text">{quote.text}</div>
						<div className="bb-fb-quote-author">
							<div className="bb-fb-avatar">{quote.initials}</div>
							<div>
								<div className="bb-fb-team-name">{quote.name}</div>
								<div className="bb-fb-team-role">{quote.role}</div>
							</div>
						</div>
						<div className="bb-fb-testimonial-nav">
							<button type="button" onClick={prevQuote} className="bb-fb-circle-btn" aria-label="Previous quote">
								<ChevronLeftIcon width={16} height={16} />
							</button>
							<div className="bb-fb-dots">
								{QUOTES_MOCK.map((q, idx) => (
									<button
										key={q.name}
										type="button"
										onClick={() => setActiveIndex(idx)}
										className={`bb-fb-dot ${activeIndex === idx ? "is-active" : ""}`}
										aria-label={`Testimonial ${idx + 1}`}
									/>
								))}
							</div>
							<button type="button" onClick={nextQuote} className="bb-fb-circle-btn" aria-label="Next quote">
								<ChevronRightIcon width={16} height={16} />
							</button>
						</div>
					</div>
				);
			}

			case "display-conditions":
				return (
					<div className="bb-fb-conditions">
						<div className="bb-fb-heading-sm">Conditional Visibility Rules</div>
						<div className="bb-fb-conditions-grid">
							{[
								["User State", "Logged in / Logged out"],
								["User Roles", "Administrator, Customer, Subscriber"],
								["Device Type", "Desktop, Tablet, Mobile"],
								["Browser & OS", "Chrome, Safari, Windows, macOS"],
							].map(([rule, desc]) => (
								<div key={rule} className="bb-fb-condition-card">
									<div className="bb-fb-condition-title">{rule}</div>
									<div className="bb-fb-condition-desc">{desc}</div>
								</div>
							))}
						</div>
					</div>
				);

			default:
				return (
					<div className="bb-fb-map-box">
						<div className="bb-fb-heading-sm">{title}</div>
						{description && <p className="bb-fb-text bb-fb-text-center">{description}</p>}
					</div>
				);
		}
	};

	return (
		<div className="bb-demo-card">
			<div className="bb-demo-card-inner">{renderPreview()}</div>
			<div className="bb-demo-caption">
				<span className="bb-demo-caption-badge">{__( "Illustration preview", "boostify-blocks" )}</span>
			</div>
		</div>
	);
};

export default BlockDemoFallback;
