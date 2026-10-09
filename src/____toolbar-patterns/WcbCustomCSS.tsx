import React, { useRef, useEffect } from "react";
import { useSelect, useDispatch } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import HelpText from "../components/controls/HelpText";

const injectIntoDoc = ( doc: Document | null | undefined, scopedCSS: string ) => {
	if ( ! doc?.head ) {
		return;
	}
	const isExistStyle = doc.getElementById( "boostify-blocks-editor-custom-css" );
	if ( ! isExistStyle ) {
		const node = doc.createElement( "style" );
		node.setAttribute( "id", "boostify-blocks-editor-custom-css" );
		node.textContent = scopedCSS;
		doc.head.appendChild( node );
	} else if ( isExistStyle.textContent !== scopedCSS ) {
		isExistStyle.textContent = scopedCSS;
	}
};

const removeStyleFromDoc = ( doc: Document | null | undefined ) => {
	if ( ! doc?.head ) {
		return;
	}
	const isExistStyle = doc.getElementById( "boostify-blocks-editor-custom-css" );
	if ( isExistStyle ) {
		isExistStyle.remove();
	}
};

const isCustomCSSEnabled = (): boolean => {
	const val = ( window as any )?.boostify_blocks_global_variables?.enableCustomCss;
	return val !== "false" && val !== false;
};

export const applyScopedCSS = ( css: string ) => {
	const isEnabled = isCustomCSSEnabled();

	const removeAll = () => {
		removeStyleFromDoc( document );
		const editorIframe = document.querySelector<HTMLIFrameElement>(
			'iframe[name="editor-canvas"]'
		);
		if ( editorIframe ) {
			const iframeDoc = editorIframe.contentDocument || editorIframe.contentWindow?.document;
			removeStyleFromDoc( iframeDoc );
		}
		const allIframes = document.querySelectorAll<HTMLIFrameElement>( "iframe" );
		allIframes.forEach( ( iframe ) => {
			if ( iframe !== editorIframe ) {
				try {
					const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
					removeStyleFromDoc( iframeDoc );
				} catch ( e ) {
					// Ignore cross-origin error
				}
			}
		} );
	};

	if ( ! isEnabled || typeof css !== "string" || ! css.trim() ) {
		removeAll();
		return;
	}

	const scopedCSS = css
		.replace( /\\/g, "" )
		.split( "}" )
		.map( ( rule ) => ( rule.trim() ? `.block-editor-block-list__layout ${rule}}` : "" ) )
		.join( " " );

	// 1. Inject into main document
	injectIntoDoc( document, scopedCSS );

	// 2. Inject into canvas iframe
	const editorIframe = document.querySelector<HTMLIFrameElement>(
		'iframe[name="editor-canvas"]'
	);
	if ( editorIframe ) {
		const iframeDoc = editorIframe.contentDocument || editorIframe.contentWindow?.document;
		if ( iframeDoc ) {
			injectIntoDoc( iframeDoc, scopedCSS );
		}
	}

	// 3. Inject into all other iframes (e.g. preview iframes or variant names)
	const allIframes = document.querySelectorAll<HTMLIFrameElement>( "iframe" );
	allIframes.forEach( ( iframe ) => {
		if ( iframe !== editorIframe ) {
			try {
				const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
				if ( iframeDoc?.head ) {
					injectIntoDoc( iframeDoc, scopedCSS );
				}
			} catch ( e ) {
				// Ignore cross-origin error
			}
		}
	} );
};

export const PageSettingsCustomCSSApplier = () => {
	const customCSS = useSelect( ( select: any ) => {
		return (
			select( "core/editor" )?.getEditedPostAttribute( "meta" )
				?._boostify_blocks_custom_css || ""
		);
	}, [] );

	useEffect( () => {
		let isMounted = true;
		let tries = 0;
		let timeoutId: any = null;

		const apply = () => {
			if ( ! isMounted ) {
				return;
			}
			applyScopedCSS( customCSS );
		};

		// 1. Immediate application
		apply();

		// 2. Attach to editor-canvas iframe
		const attachToIframe = () => {
			const iframe = document.querySelector<HTMLIFrameElement>(
				'iframe[name="editor-canvas"]'
			);
			if ( iframe ) {
				apply();
				if ( iframe.contentDocument?.readyState === "complete" ) {
					apply();
				} else {
					iframe.addEventListener( "load", apply, { once: true } );
				}
				return true;
			}
			return false;
		};

		// 3. Polling retry for iframe appearance
		const pollIframe = () => {
			if ( ! isMounted ) {
				return;
			}
			const found = attachToIframe();
			if ( ! found && tries < 30 ) {
				tries++;
				timeoutId = setTimeout( pollIframe, 150 );
			}
		};
		pollIframe();

		// 4. MutationObserver on document.body for iframe creation / replacement
		const observer = new MutationObserver( () => {
			attachToIframe();
		} );
		observer.observe( document.body, { childList: true, subtree: true } );

		return () => {
			isMounted = false;
			if ( timeoutId ) {
				clearTimeout( timeoutId );
			}
			observer.disconnect();
		};
	}, [ customCSS ] );

	return null;
};

export const WcbCustomCSS = () => {
	const tabRef = useRef<HTMLTextAreaElement>( null );
	const { editPost } = useDispatch( "core/editor" );
	const customCSS = useSelect( ( select: any ) => {
		return (
			select( "core/editor" ).getEditedPostAttribute( "meta" )
				?._boostify_blocks_custom_css || ""
		);
	}, [] );

	useEffect( () => {
		if ( ! tabRef.current || ! window.wp?.codeEditor ) {
			return;
		}

		const boostifyCustomCSSPanel = document.querySelector(
			".boostify-custom-css-panel"
		);
		const existingEditors = boostifyCustomCSSPanel?.querySelectorAll(
			".CodeMirror-wrap"
		);
		if ( existingEditors ) {
			existingEditors.forEach( ( editor ) => editor.remove() );
		}

		const editor = window.wp.codeEditor.initialize( tabRef.current, {
			...( window.wp.codeEditor.defaultSettings?.codemirror || {} ),
			scrollbarStyle: null,
		} );

		const codeMirrorEditor = document.querySelector(
			".boostify-css-editor .CodeMirror-code"
		);

		const handleKeyUp = () => {
			editor?.codemirror?.save();
			const value = editor?.codemirror?.getValue();
			// @ts-ignore
			editPost( { meta: { _boostify_blocks_custom_css: value } } );
		};

		if ( codeMirrorEditor ) {
			codeMirrorEditor.addEventListener( "keyup", handleKeyUp );
		}

		if ( editor?.codemirror ) {
			editor.codemirror.on( "change", () => {
				editor.codemirror.save();
				const value = editor.codemirror.getValue();
				// @ts-ignore
				editPost( { meta: { _boostify_blocks_custom_css: value } } );
			} );
		}

		return () => {
			if ( codeMirrorEditor ) {
				codeMirrorEditor.removeEventListener( "keyup", handleKeyUp );
			}
			const editorsToCleanup = document.querySelectorAll(
				".boostify-custom-css-panel .CodeMirror-wrap"
			);
			if ( editorsToCleanup ) {
				editorsToCleanup.forEach( ( e ) => e.remove() );
			}
		};
	}, [] );

	return (
		<div className="boostify-custom-css-wrapper flex flex-col gap-3 w-full py-1">
			<HelpText className="text-xs text-gray-600 m-0 leading-relaxed">
				{__(
					"Enable the 'Custom CSS' option if you want to add your own CSS code on post/page to customize the page as per your expectations.",
					"boostify-blocks"
				)}
			</HelpText>
			<div
				id="boostify-css-editor"
				className="boostify-css-editor w-full font-mono text-[13px]"
			>
				<style>{`
					.boostify-custom-css-panel .CodeMirror {
						height: auto;
						min-height: 220px;
						font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
						font-size: 13px;
						line-height: 1.5;
					}
					.boostify-custom-css-panel .CodeMirror-wrap {
						border: 1px solid #ddd;
						border-radius: 4px;
						min-height: 220px;
						overflow: hidden;
						box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
					}
					.boostify-custom-css-panel .CodeMirror-scroll {
						min-height: 220px;
					}
					.boostify-custom-css-panel .CodeMirror-gutters {
						border-right: 1px solid #e2e8f0;
						background-color: #f8fafc;
					}
				`}</style>
				<textarea value={ customCSS } ref={ tabRef }></textarea>
			</div>
			<HelpText className="text-xs text-gray-500 m-0 leading-relaxed">
				{ __(
					"Use custom class added in block's advanced settings to target your desired block. Examples: .my-class {text-align: center;} // my-class is a custom selector",
					"boostify-blocks"
				) }
			</HelpText>
			<HelpText className="text-xs text-gray-400 m-0 italic">
				{ __(
					"Add CSS code here. Do not include <style> tags.",
					"boostify-blocks"
				) }
			</HelpText>
		</div>
	);
};

export default WcbCustomCSS;
