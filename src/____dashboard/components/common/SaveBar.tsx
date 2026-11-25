import React, { FC } from "react";
import { __, sprintf } from "@wordpress/i18n";

interface SaveBarProps {
	dirtyCount: number;
	isSaving: boolean;
	onSave: () => void;
	onDiscard: () => void;
}

const SaveBar: FC<SaveBarProps> = ({ dirtyCount, isSaving, onSave, onDiscard }) => {
	if (dirtyCount <= 0) {
		return null;
	}

	const label =
		dirtyCount === 1
			? __( "1 unsaved change", "boostify-blocks" )
			: sprintf(
					/* translators: %d: number of unsaved changes */
					__( "%d unsaved changes", "boostify-blocks" ),
					dirtyCount
			  );

	return (
		<div
			role="region"
			aria-label={__( "Unsaved changes", "boostify-blocks" )}
			className="bb-savebar"
		>
			<div className="bb-savebar-indicator">
				<span className="bb-savebar-dot" />
				<span>{label}</span>
			</div>

			<div className="bb-savebar-actions">
				<button
					type="button"
					disabled={isSaving}
					onClick={onDiscard}
					className="bb-savebar-btn-discard"
				>
					{__( "Discard", "boostify-blocks" )}
				</button>

				<button
					type="button"
					disabled={isSaving}
					onClick={onSave}
					className="bb-savebar-btn-save"
				>
					{isSaving && (
						<svg
							className="animate-spin -ml-0.5 h-3.5 w-3.5 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
					)}
					{isSaving ? __( "Saving...", "boostify-blocks" ) : __( "Save changes", "boostify-blocks" )}
				</button>
			</div>
		</div>
	);
};

export default SaveBar;
