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
					className="fixed inset-0 overflow-y-auto"
					style={{ zIndex: 999999 }}
					initialFocus={cancelButtonRef}
					onClose={() => {
						if (!isLoading) {
							setIsModalOpen(false);
						}
					}}
				>
					<div
						style={{
							minHeight: "100vh",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							padding: "16px",
							textAlign: "center",
						}}
					>
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
							<div
								style={{
									position: "fixed",
									inset: 0,
									background: "rgba(15, 15, 25, 0.45)",
									backdropFilter: "blur(4px)",
									WebkitBackdropFilter: "blur(4px)",
									transition: "opacity .2s",
								}}
							/>
						</Transition.Child>

						{/* Element to center modal */}
						<span style={{ display: "inline-block", height: "100vh", verticalAlign: "middle" }} aria-hidden="true">
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
							<div
								style={{
									display: "inline-block",
									width: "100%",
									maxWidth: "480px",
									padding: "24px",
									margin: "24px 0",
									textAlign: "left",
									verticalAlign: "middle",
									background: "#ffffff",
									borderRadius: "16px",
									border: "1px solid #e8e8ee",
									boxShadow: "0 20px 40px -12px rgba(15, 15, 30, 0.2)",
									position: "relative",
									zIndex: 10,
									fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
								}}
							>
								{/* Header */}
								<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
									<Dialog.Title
										as="h3"
										style={{
											margin: 0,
											fontSize: "17px",
											fontWeight: 600,
											color: "#1b1b22",
											letterSpacing: "-0.01em",
										}}
									>
										{__( "Regenerate Assets", "boostify-blocks" )}
									</Dialog.Title>

									<button
										type="button"
										onClick={() => {
											if (!isLoading) {
												setIsModalOpen(false);
											}
										}}
										style={{
											all: "unset",
											cursor: "pointer",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											width: "28px",
											height: "28px",
											borderRadius: "8px",
											color: "#8b8b97",
											transition: "background .15s",
										}}
									>
										<DynamicIcon name="close" size={18} />
									</button>
								</div>

								{/* Description */}
								<Dialog.Description
									as="div"
									style={{
										fontSize: "14px",
										lineHeight: 1.55,
										color: "#55555f",
									}}
								>
									{__(
										"Please note that after regeneration, it is recommended to purge all your cache to ensure that old assets are not served, preventing potential frontend breaking issues.",
										"boostify-blocks"
									)}
								</Dialog.Description>

								{/* Action Buttons */}
								<div
									style={{
										marginTop: "24px",
										display: "flex",
										justifyContent: "flex-end",
										alignItems: "center",
										gap: "10px",
									}}
								>
									<button
										ref={cancelButtonRef}
										type="button"
										disabled={isLoading}
										onClick={() => setIsModalOpen(false)}
										className="hover:bg-[#f6f6f8]"
										style={{
											all: "unset",
											cursor: isLoading ? "not-allowed" : "pointer",
											padding: "8px 16px",
											borderRadius: "9px",
											border: "1px solid #e1e1e8",
											background: "#fff",
											fontSize: "13px",
											fontWeight: 500,
											color: "#1b1b22",
											opacity: isLoading ? 0.6 : 1,
											transition: "background .15s, border-color .15s",
										}}
									>
										{__( "Cancel", "boostify-blocks" )}
									</button>

									<button
										type="button"
										disabled={isLoading}
										onClick={handleRegenerate}
										className="hover:bg-[#5348e8]"
										style={{
											all: "unset",
											cursor: isLoading ? "not-allowed" : "pointer",
											display: "inline-flex",
											alignItems: "center",
											gap: "6px",
											padding: "8px 18px",
											borderRadius: "9px",
											background: "#635bff",
											color: "#ffffff",
											fontSize: "13px",
											fontWeight: 600,
											opacity: isLoading ? 0.75 : 1,
											transition: "background .15s",
										}}
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
