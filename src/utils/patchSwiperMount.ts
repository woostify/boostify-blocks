/**
 * Patch Swiper's mount() to support cross-realm DOM nodes inside the Gutenberg
 * editor-canvas iframe (where `el instanceof window.HTMLElement` is false because
 * `el` comes from the iframe's window). Guarded so it applies at most once.
 */
export function patchSwiperMountForIframe(SwiperClass: any): void {
	if (!SwiperClass?.prototype || SwiperClass.prototype.__wcbMountGuarded) {
		return;
	}

	SwiperClass.prototype.mount = function (this: any, element?: any) {
		if (this.mounted) return true;
		if (typeof document === "undefined") return false;

		const initialEl = element ?? this.params.el;
		let el: any = null;

		if (typeof initialEl === "string") {
			el = document.querySelector(initialEl);
			if (!el) {
				const iframes = document.querySelectorAll("iframe");
				for (let i = 0; i < iframes.length; i++) {
					try {
						const iframeDoc = iframes[i].contentDocument;
						if (iframeDoc) {
							el = iframeDoc.querySelector(initialEl);
							if (el) break;
						}
					} catch {
						// Ignore cross-origin iframe access errors.
					}
				}
			}
		} else if (
			initialEl &&
			(initialEl.nodeType === 1 || initialEl instanceof HTMLElement)
		) {
			el = initialEl;
		}

		if (!el) {
			return false;
		}

		el.swiper = this;
		const parent = el.parentNode;
		if (
			parent &&
			parent.host &&
			parent.host.nodeName ===
				(this.params.swiperElementNodeName || "").toUpperCase()
		) {
			this.isElement = true;
		}

		const getWrapperSelector = () => {
			return `.${(this.params.wrapperClass || "swiper-wrapper")
				.trim()
				.split(/\s+/)
				.join(".")}`;
		};

		const getWrapper = () => {
			if (el && el.shadowRoot) {
				return el.shadowRoot.querySelector(getWrapperSelector());
			}
			const children = Array.from(el.children || []);
			return (
				children.find((c: any) =>
					c.matches ? c.matches(getWrapperSelector()) : false
				) || null
			);
		};

		let wrapperEl: any = getWrapper();
		if (!wrapperEl && this.params.createElements) {
			const ownerDoc = el.ownerDocument || document;
			wrapperEl = ownerDoc.createElement("div");
			wrapperEl.className = this.params.wrapperClass || "swiper-wrapper";
			el.appendChild(wrapperEl);
			Array.from(el.children).forEach((slideEl: any) => {
				if (
					slideEl !== wrapperEl &&
					slideEl.matches?.(`.${this.params.slideClass || "swiper-slide"}`)
				) {
					wrapperEl.appendChild(slideEl);
				}
			});
		}

		const host = this.isElement ? el.parentNode.host : null;
		const ownerWin = el.ownerDocument?.defaultView || window;
		const getDirStyle = (target: any, prop: string) => {
			try {
				return ownerWin.getComputedStyle(target, null).getPropertyValue(prop);
			} catch {
				return "";
			}
		};

		const isRtl =
			(el.dir || "").toLowerCase() === "rtl" ||
			getDirStyle(el, "direction") === "rtl";

		Object.assign(this, {
			el,
			wrapperEl,
			slidesEl: this.isElement && !host?.slideSlots ? host : wrapperEl,
			hostEl: this.isElement ? host : el,
			mounted: true,
			rtl: isRtl,
			rtlTranslate: this.params.direction === "horizontal" && isRtl,
			wrongRTL: wrapperEl
				? getDirStyle(wrapperEl, "display") === "-webkit-box"
				: false,
		});
		return true;
	};

	SwiperClass.prototype.__wcbMountGuarded = true;
}
