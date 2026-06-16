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

	const storeBlockStyles = ( blockData ) => {
		const wcbCopyPasteStyles = getWCBEditorStateLocalStorage( 'wcbCopyPasteStyles' );
		wcbCopyPasteStylesSetter.setItem( 'wcbCopyPasteStyles', JSON.stringify( {} ) );

		const { attributes, name, innerBlocks } = blockData;
	}

	const pasteBlockStyles = ( blockData ) => {
		const { name, clientId, innerBlocks } = blockData;
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
		const wcbCopyPasteStyles = getWCBEditorStateLocalStorage( 'wcbCopyPasteStyles' );

		setshowPopup( ! showPopup );

		if ( 0 === Object.keys( wcbCopyPasteStyles ).length ) {
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
		const selectedBlock = getSelectedBlock();
		const multiSelectedBlock = getMultiSelectedBlocks();
		let singleSelectBlockFlag = false;
		let multiSelectBlockFlag = false;

        if ( selectedBlock ) {
			const singleSelectedBlockName = selectedBlock.name;

			if ( singleSelectedBlockName.includes( 'boostify-blocks/' )) {
				singleSelectBlockFlag = true;
			}
		}

        if ( multiSelectedBlock && 0 !== multiSelectedBlock.length ) {
			multiSelectedBlock.map( ( value ) => {
				const singleSelectedBlockName = value.name;

				if ( singleSelectedBlockName.includes( 'boostify-blocks/' ) ) {
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

