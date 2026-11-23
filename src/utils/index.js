export * from './font';
export * from './color';
export * from './global-style';

/**
 * Capitalize the first letter in string
 * @param {*} string
 * @returns
 */
export const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getDocumentHead = () => {
	if (isEditingContent()) {
		const iframe = document.querySelector('iframe[name="editor-canvas"]');
		const iframeHead =
			iframe?.contentDocument?.head ||
			iframe?.contentWindow?.document?.head ||
			null;
		if (iframeHead) {
			return iframeHead;
		}
	}

	return document.querySelector('head');
};

export const isEditingContent = () =>
	!!document.querySelector('iframe[name="editor-canvas"]');

export const isEditingPost = () => {
    if ( document.querySelector('.edit-post-visual-editor') ) {
		return true
	}

	return false;
}

export const JSToCSS = (JS) => {
	let cssString = '';
	for (let objectKey in JS) {
		if (objectKey.includes('Unit')) {
			return;
		}
		let suffix = '';
		if (objectKey.includes('fontFamily')) {
			suffix = ', Sans-serif';
		}
		if (objectKey.includes('letterSpacing')) {
			suffix = 'px';
		}
		cssString += objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) +
		': ' +
		JS[objectKey] +
		suffix +
		';\n';
	}

	return cssString;
};
