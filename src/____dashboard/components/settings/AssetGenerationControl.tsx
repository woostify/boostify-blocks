import React, { FC, Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { __ } from "@wordpress/i18n";
import DynamicIcon from "../common/DynamicIcon";
import toast from "react-hot-toast";
import { postAjax } from "../../utils/ajax";

interface AssetGenerationControlProps {
	enableFileGeneration?: boolean;
	onToggleFileGeneration?: (enabled: boolean) => void;
}

const AssetGenerationControl: FC<AssetGenerationControlProps> = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const cancelButtonRef = useRef<HTMLButtonElement | null>(null);

	const handleRegenerate = () => {
		setIsLoading(true);

		postAjax({
			action: "boostify_blocks_regenerate_assets",
			timeout: 25000,
		})
			.then((response: any) => {
				setIsLoading(false);
				setIsModalOpen(false);
				if (response?.success) {
					toast.success(__( "Assets Regenerated!", "boostify-blocks" ));
				} else {
					toast.error(response?.data?.message || __( "Failed to regenerate assets.", "boostify-blocks" ));
				}
			})
			.catch((err: any) => {
				setIsLoading(false);
				setIsModalOpen(false);
				const msg =
					err?.message || __( "Failed to regenerate assets. Please try again.", "boostify-blocks" );
				toast.error(msg);
			});
	};

	return (
		<>
			<div className="bb-settings-row is-nested">
				<div className="bb-settings-col-text">
					<div className="bb-settings-label">
						{__( "Regenerate CSS & Assets", "boostify-blocks" )}
					</div>
					<div className="bb-settings-desc">
						{__(
							"Clear and recreate all cached CSS files for Boostify blocks. Use this if you notice visual glitches after updating theme or plugins.",
							"boostify-blocks"
						)}
					</div>
				</div>

				<button
					type="button"
					onClick={() => setIsModalOpen(true)}
					disabled={isLoading}
					className="bb-btn-outline"
				>
					<DynamicIcon name="speed" size={16} />
					{__( "Regenerate Assets", "boostify-blocks" )}
				</button>
			</div>

			{/* Confirmation Popup Modal */}
			<Transition.Root show={isModalOpen} as={Fragment}>
				<Dialog
					as="div"
					className="bb-modal-root"
					initialFocus={cancelButtonRef}
					onClose={() => {
						if (!isLoading) {
							setIsModalOpen(false);
						}
					}}
				>
					<div className="bb-modal-container">
						{/* Backdrop */}
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-200"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-150"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="bb-modal-overlay" />
						</Transition.Child>

						{/* Element to center modal */}
						<span className="bb-modal-center-trick" aria-hidden="true">
							&#8203;
						</span>

						{/* Modal Box */}
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-200"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-150"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="bb-modal-dialog">
								{/* Header */}
								<div className="bb-modal-header-row">
									<Dialog.Title as="h3" className="bb-modal-title">
										{__( "Regenerate Assets", "boostify-blocks" )}
									</Dialog.Title>

									<button
										type="button"
										onClick={() => {
											if (!isLoading) {
												setIsModalOpen(false);
											}
										}}
										className="bb-modal-close"
									>
										<DynamicIcon name="close" size={18} />
									</button>
								</div>

								{/* Description */}
								<Dialog.Description as="div" className="bb-modal-desc">
									{__(
										"Please note that after regeneration, it is recommended to purge all your cache to ensure that old assets are not served, preventing potential frontend breaking issues.",
										"boostify-blocks"
									)}
								</Dialog.Description>

								{/* Action Buttons */}
								<div className="bb-modal-footer">
									<button
										ref={cancelButtonRef}
										type="button"
										disabled={isLoading}
										onClick={() => setIsModalOpen(false)}
										className="bb-modal-btn-cancel"
									>
										{__( "Cancel", "boostify-blocks" )}
									</button>

									<button
										type="button"
										disabled={isLoading}
										onClick={handleRegenerate}
										className="bb-modal-btn-action"
									>
										{isLoading && (
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
												/>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												/>
											</svg>
										)}
										{isLoading
											? __( "Regenerating...", "boostify-blocks" )
											: __( "Regenerate", "boostify-blocks" )}
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
};

export default AssetGenerationControl;
