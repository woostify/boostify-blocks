import React from 'react';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorAdvancedControls } from '@wordpress/block-editor';
import { displayConditionsAttributes } from './attributes';
import { EXCLUDED_BLOCKS } from './options';
import DisplayConditionsControls from './DisplayConditionsControls';

/**
 * Filter: Add display condition attributes to blocks.
 *
 * @param {Object} settings Block settings object.
 * @return {Object} Modified block settings object.
 */
function addDisplayConditionsAttributes( settings: any ) {
	if ( ! settings || ! settings.name ) {
		return settings;
	}

	const isTargetBlock =
		( settings.name.startsWith( 'boostify-blocks/' ) || settings.name.startsWith( 'core/' ) ) &&
		! EXCLUDED_BLOCKS.includes( settings.name );

	if ( isTargetBlock ) {
		settings.attributes = Object.assign( {}, settings.attributes, displayConditionsAttributes );
	}

	return settings;
}

/**
 * Filter: Add Display Conditions panel to block inspector Advanced tab for core blocks.
 * (Boostify Blocks render Display Conditions directly in AdvancePanelCommon in the Advances tab).
 */
const withDisplayConditions = createHigherOrderComponent( ( BlockEdit: any ) => {
	return ( props: any ) => {
		const { name } = props;

		// Dynamically check if feature is globally disabled
		const globalSettings = ( window as any ).boostify_blocks_global_variables || {};
		if ( globalSettings.enableDisplayConditions === 'false' ) {
			return <BlockEdit { ...props } />;
		}

		const isCoreBlock =
			name &&
			name.startsWith( 'core/' ) &&
			! EXCLUDED_BLOCKS.includes( name );

		if ( ! isCoreBlock ) {
			return <BlockEdit { ...props } />;
		}

		return (
			<>
				<BlockEdit { ...props } />
				<InspectorAdvancedControls>
					<DisplayConditionsControls { ...props } />
				</InspectorAdvancedControls>
			</>
		);
	};
}, 'withDisplayConditions' );

// Register Gutenberg filters
addFilter(
	'blocks.registerBlockType',
	'boostify-blocks/display-conditions-attributes',
	addDisplayConditionsAttributes
);

addFilter(
	'editor.BlockEdit',
	'boostify-blocks/display-conditions-controls',
	withDisplayConditions
);

export default withDisplayConditions;
