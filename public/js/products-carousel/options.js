export function resolveCarouselGap(value, viewport, fallback = 24) {
	const gap = String(value ?? '').trim();
	const number = parseFloat(gap);
	if (!Number.isFinite(number)) return fallback;
	if (gap.endsWith('%')) return `${number}%`;
	if (gap.endsWith('rem') || gap.endsWith('em')) {
		const doc = viewport.ownerDocument;
		const fontElement = gap.endsWith('rem') ? doc.documentElement : viewport;
		const fontSize = parseFloat(doc.defaultView?.getComputedStyle(fontElement).fontSize) || 16;
		return number * fontSize;
	}
	return number;
}

export function pauseCarouselOnHover(carousel, swiper) {
	let resumeOnLeave = false;
	const onEnter = (event) => {
		if (event.pointerType === 'mouse' && swiper.autoplay.running) {
			resumeOnLeave = swiper.autoplay.stop();
		}
	};
	const onLeave = (event) => {
		if (event.pointerType === 'mouse' && resumeOnLeave) {
			resumeOnLeave = false;
			swiper.autoplay.start();
		}
	};
	carousel.addEventListener('pointerenter', onEnter);
	carousel.addEventListener('pointerleave', onLeave);
	swiper.on('destroy', () => {
		carousel.removeEventListener('pointerenter', onEnter);
		carousel.removeEventListener('pointerleave', onLeave);
	});
}
