import { __ } from '@wordpress/i18n';
import { select, dispatch, useDispatch } from '@wordpress/data';
import { store as keyboardShortcutsStore, useShortcut } from '@wordpress/keyboard-shortcuts';
import { createHigherOrderComponent } from '@wordpress/compose';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, Popover, MenuItem } from '@wordpress/components';
import { useState, useEffect, useLayoutEffect } from '@wordpress/element';
import { addFilter, applyFilters } from '@wordpress/hooks';
import SettingsIcons from './icons.js';
import editorStyles from './../editor.scss';

// get data from local store by key
const getWCBEditorStateLocalStorage = ( key = false ) => {
	if ( ! window.localStorage ) {
		return null;
	}

	if ( ! key ) {
		return localStorage;
	}

	const wcbLastOpenedSettingState = localStorage.getItem( key );

	if ( wcbLastOpenedSettingState ) {
		return JSON.parse( wcbLastOpenedSettingState );
	}

	return null;
};
 
const WCBCopyPasteStyles = () => {
	// Registering the shortcuts
	const { registerShortcut } = useDispatch( keyboardShortcutsStore );

    const [ showPopup, setshowPopup ] = useState( false );
    const [ disablePaste, setdisablePaste ] = useState( false );
	const { hasMultiSelection } = select( 'core/block-editor' );
	const wcbCopyPasteStylesSetter = getWCBEditorStateLocalStorage();

	useEffect( () => {
		const wcbCopyPasteStyles = getWCBEditorStateLocalStorage( 'wcbCopyPasteStyles' );	

		if ( ! wcbCopyPasteStyles ) {
			wcbCopyPasteStylesSetter.setItem( 'wcbCopyPasteStyles', JSON.stringify( {} ) );
		}

		if ( wcbCopyPasteStyles ) {
			for ( const block in wcbCopyPasteStyles ) {
				const hoursSinceStylesSaved =
					Math.abs( Date.now() - wcbCopyPasteStyles[ block ].stylesSavedTimeStamp ) / 36e5;

				if ( hoursSinceStylesSaved >= 8 ) {
					delete wcbCopyPasteStyles[ block ];
				}
			}

			wcbCopyPasteStylesSetter.setItem( 'wcbCopyPasteStyles', JSON.stringify( wcbCopyPasteStyles ) );
		}

		registerShortcut( {
			name: 'boostify-blocks/copy',
			category: 'block',
			description: __( 'Copy the selected block(s).', 'boostify-blocks' ),
			keyCombination: {
				modifier: 'primaryShift',
				character: 'y',
			},
		} );

		registerShortcut( {
			name: 'boostify-blocks/paste',
			category: 'block',
			description: __( 'Paste the selected block(s).', 'boostify-blocks' ),
			keyCombination: {
				modifier: 'primaryShift',
				character: 'u',
			},
		} );

	}, [] );

	const copyStylesHandler = () => {
		setshowPopup( false );

		// eslint-disable-next-line no-shadow
		const { getSelectedBlock, hasMultiSelection, getMultiSelectedBlocks } = select( 'core/block-editor' );

		if ( hasMultiSelection() ) {
			const multiSelectedBlocksData = getMultiSelectedBlocks();
			multiSelectedBlocksData.map( ( block ) => {
				if ( block ) {
					storeBlockStyles( block );
				}

				return block;
			} );

			return;
		}

		const selectedBlockData = getSelectedBlock();

		if ( selectedBlockData ) {
			storeBlockStyles( selectedBlockData );
		}
	};

	const pasteStylesHandler = () => {
		setshowPopup( false );

		// eslint-disable-next-line no-shadow
		const { getSelectedBlock, hasMultiSelection, getMultiSelectedBlocks } = select( 'core/block-editor' );

		if ( hasMultiSelection() ) {
			const multiSelectedBlocksData = getMultiSelectedBlocks();
			multiSelectedBlocksData.map( ( block ) => {
				if ( block ) {
					pasteBlockStyles( block );
				}

				return block;
			} );

			return;
		}

		const selectedBlockData = getSelectedBlock();

		if ( selectedBlockData ) {
			pasteBlockStyles( selectedBlockData );
		}
	};

	// Copy styles blocks
	const storeBlockStyles = ( blockData ) => {
		const wcbCopyPasteStyles = getWCBEditorStateLocalStorage( 'wcbCopyPasteStyles' );
		wcbCopyPasteStylesSetter.setItem( 'wcbCopyPasteStyles', JSON.stringify( {} ) );

		const { attributes, name, innerBlocks } = blockData;

		if ( wcbCopyPasteStyles ) {
			wcbCopyPasteStylesSetter.setItem( 'wcbCopyPasteStyles', JSON.stringify( {} ) );
		}

		let styles = {};
		const parentStyle = {};

		// Only allow your blocks
		if ( name.includes( 'boostify-blocks/' ) ) {
			const blockType = select('core/blocks').getBlockType(name);
			let blockAttributes = blockType?.attributes;
			const blockName = name.replace( 'boostify-blocks/', '' );

			wcbCopyPasteStyles[ `${ blockName }-styles` ] = {};
			wcbCopyPasteStyles[ `global-style` ] = {};
			
			if ( blockAttributes && wcbCopyPasteStyles ) {
				Object.keys( blockAttributes ).map( ( attribute ) => {
					if ( blockAttributes[ attribute ].default ) {
						if ( undefined !== attributes[ attribute ] && null !== attributes[ attribute ] ) {
							styles[ attribute ] = attributes[ attribute ];
							parentStyle[ attribute ] = attributes[ attribute ];
						}
					}

					return attribute;
				} );
			}
	
			if ( innerBlocks ) {
				parentStyle.innerblocks = innerBlocks;
			}

			styles.stylesSavedTimeStamp = Date.now();

			wcbCopyPasteStyles[ `${ blockName }-styles` ] = parentStyle;
			wcbCopyPasteStyles[ `global-style` ] = styles;

			wcbCopyPasteStylesSetter.setItem( 'wcbCopyPasteStyles', JSON.stringify( wcbCopyPasteStyles ) );
		}

		// Core blocks
		if ( name.includes( 'core/' ) ) {
			const blockName = name.replace( 'core/', '' );
			styles = attributes;

			styles.stylesSavedTimeStamp = Date.now();

			wcbCopyPasteStyles[ `core-${ blockName }-styles` ] = styles;

			wcbCopyPasteStylesSetter.setItem( 'wcbCopyPasteStyles', JSON.stringify( wcbCopyPasteStyles ) );
		}
	}

	// Paste styles blocks
	const pasteBlockStyles = ( blockData ) => {
		const { name, clientId, innerBlocks } = blockData;

		let styles;
		let pasteStyle;
		const parentAttr = {};

		const wcbCopyPasteStyles = getWCBEditorStateLocalStorage( 'wcbCopyPasteStyles' );

		// Includes your custom blocks
		if ( name.includes( 'boostify-blocks/' ) ) {
			styles = wcbCopyPasteStyles[ `global-style` ];

			const blockType = select('core/blocks').getBlockType(name);
			let blockAttributes = blockType?.attributes;
			const blockName = name.replace( 'boostify-blocks/', '' );

			pasteStyle = wcbCopyPasteStyles[ `${ blockName }-styles` ];

			if ( blockAttributes && pasteStyle ) {
				updateBlockStyles( clientId, pasteStyle );

				if ( innerBlocks ) {
					const childAttr = {};

					innerBlocks.map( ( childBlock, index ) => {
						const childName = childBlock.name.replace( 'boostify-blocks/', '' );
						// eslint-disable-next-line no-shadow
						const blockAttributes = blockAttributes[ childName ];

						if ( pasteStyle.innerblocks[ index ].name === 'boostify-blocks/' + childName ) {
							Object.keys( blockAttributes ).map( ( attribute ) => {
								if ( blockAttributes[ attribute ].default ) {
									childAttr[ attribute ] = pasteStyle.innerblocks[ index ].attributes[ attribute ];
								}
								return childAttr;
							} );
						}
						updateBlockStyles( childBlock.clientId, childAttr );

						return childBlock;
					} );
				}

			}else if ( blockAttributes && styles ) {
				Object.keys( blockAttributes ).map( ( attribute ) => {
					if ( blockAttributes[ attribute ].default ) {
						const key = attribute;

						Object.keys( styles ).map( ( item ) => {
							if ( item === key ) {
								parentAttr[ attribute ] = styles[ key ];
							}
							return parentAttr;
						} );
					}
					return parentAttr;
				} );

				updateBlockStyles( clientId, parentAttr );
			}

		}

		// Includes core blocks default
		if ( name.includes( 'core/' ) ) {
			const selectedBlockName = name.replace( 'core/', '' );

			const unwantedAttributes = [
				'content',
				'values',
				'value',
				'citation',
				'body',
				'caption',
				'foot',
				'head',
				'url',
				'alt',
				'id',
				'linkDestination',
			];

			pasteStyle = wcbCopyPasteStyles[ `core-${ selectedBlockName }-styles` ];

			unwantedAttributes.map( ( attr ) => {
				if ( pasteStyle[ attr ] ) {
					delete pasteStyle[ attr ];
				}
				return attr;
			} );
			updateBlockStyles( clientId, pasteStyle );
		}

	};

	const updateBlockStyles = ( clientId, styles ) => {
		dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, styles );
	};

	useShortcut( 'boostify-blocks/copy', ( event ) => {
		copyStylesHandler();
		event.preventDefault();
	} );

	useShortcut( 'boostify-blocks/paste', ( event ) => {
		pasteStylesHandler();
		event.preventDefault();
	} );

    const openPopup = () => {
		const wcbCopyPasteStyles = getWCBEditorStateLocalStorage( 'wcbCopyPasteStyles' ) || {};

		setshowPopup( ! showPopup );

		if ( ! wcbCopyPasteStyles || 0 === Object.keys( wcbCopyPasteStyles ).length ) {
			setdisablePaste( true );
			return;
		}

		setdisablePaste( false );

	};

    let stylesText = __( 'Style', 'boostify-blocks' );
	if ( hasMultiSelection() ) {
		stylesText = __( 'Styles', 'boostify-blocks' );
	}

    return (
        <BlockControls group="block">
            <ToolbarGroup className="wcb-copy-paste-styles">
                <ToolbarButton
                    icon="admin-appearance"
                    label={ __( 'Boostify Copy/Paste', 'boostify-blocks' ) }
                    onClick={ () => {
                        openPopup();
                    } }
                />
            </ToolbarGroup>
            { showPopup && (
				<Popover
					position="bottom center"
					className="wcb-copy-paste-styles-popover"
					focusOnMount="container"
					onFocusOutside={ () => {
						setshowPopup( false );
					} }
				>
					<MenuItem 
                        onClick={ copyStylesHandler }
                    >
						{ SettingsIcons.copy }
						{ __( 'Copy ', 'boostify-blocks' ) + stylesText }
					</MenuItem>
					<MenuItem 
                        icon={ 'paste' } 
                        onClick={ pasteStylesHandler } 
                        disabled={ disablePaste }
                    >
						{ SettingsIcons.paste }
						{ __( 'Paste ', 'boostify-blocks' ) + stylesText }
					</MenuItem>
				</Popover>
			) }
        </BlockControls>
    );
};

const displayWCBCopyPasteSettingConditionally = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
        const { getSelectedBlock, getMultiSelectedBlocks } = select( 'core/block-editor' );
		const excludeBlocks = [
			'core/missing'
		];
		const selectedBlock = getSelectedBlock();
		const multiSelectedBlock = getMultiSelectedBlocks();
		let singleSelectBlockFlag = false;
		let multiSelectBlockFlag = false;

        if ( selectedBlock ) {
			const singleSelectedBlockName = selectedBlock.name;

			if ( 
				(singleSelectedBlockName.includes( 'boostify-blocks/' ) || singleSelectedBlockName.includes( 'core/' )) &&
				! excludeBlocks.includes( singleSelectedBlockName )
			) {
				singleSelectBlockFlag = true;
			}
		}

        if ( multiSelectedBlock && 0 !== multiSelectedBlock.length ) {
			multiSelectedBlock.map( ( value ) => {
				const singleSelectedBlockName = value.name;

				if (
					(singleSelectedBlockName.includes( 'boostify-blocks/' ) || singleSelectedBlockName.includes( 'core/' )) &&
					! excludeBlocks.includes( singleSelectedBlockName )
				) {
					multiSelectBlockFlag = true;
				}

				return value;
			} );
		}

		const { isSelected } = props;
		if ( isSelected ) {
			return (
				<>
					<BlockEdit {...props} />
                    {(singleSelectBlockFlag || multiSelectBlockFlag) && <WCBCopyPasteStyles />}
				</>
			);
		}
		return <BlockEdit {...props} />;
    };
}, 'displayWCBCopyPasteSettingConditionally' );

const boostify_blocks_global_variables = window.boostify_blocks_global_variables || {};
if( boostify_blocks_global_variables.enableCopyPasteStyles === 'true' ){
    addFilter( 'editor.BlockEdit', 'wcb-copy-paste', displayWCBCopyPasteSettingConditionally );
}

