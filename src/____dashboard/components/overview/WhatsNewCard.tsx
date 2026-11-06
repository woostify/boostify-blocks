import React, { FC, useState, Fragment } from "react";
import { __ } from "@wordpress/i18n";
import { Dialog, Transition } from "@headlessui/react";
import {
	SparklesIcon,
	XMarkIcon,
	ArrowTopRightOnSquareIcon,
	DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { ChangelogItem } from "../../types";

interface WhatsNewCardProps {
	changelog: ChangelogItem[];
}

const WhatsNewCard: FC<WhatsNewCardProps> = ({ changelog = [] }) => {
	const [isOpen, setIsOpen] = useState(false);
	const recentItems = changelog.slice(0, 2);

	if (!changelog || changelog.length === 0) {
		return null;
	}

	return (
		<div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs flex flex-col justify-between">
			<div>
				<div className="flex items-center justify-between pb-4 border-b border-slate-100">
					<div className="flex items-center gap-2.5">
						<div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
							<SparklesIcon className="w-4 h-4" />
						</div>
						<h3 className="text-base font-bold text-slate-900">
							{__( "What's new", "boostify-blocks" )}
						</h3>
					</div>
					{changelog.length > 0 && (
						<button
							type="button"
							onClick={() => setIsOpen(true)}
							className="text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
						>
							{__( "Full changelog", "boostify-blocks" )} →
						</button>
					)}
				</div>

				<div className="mt-4 space-y-4">
					{recentItems.map((entry) => (
						<div key={entry.version} className="space-y-1.5">
							<div className="flex items-center gap-2">
								<span className="px-2 py-0.5 text-xs font-semibold rounded bg-slate-100 text-slate-800">
									v{entry.version}
								</span>
							</div>
							<ul className="space-y-1 pl-4 text-xs text-slate-600 list-disc marker:text-slate-400">
								{entry.items.map((bullet, idx) => (
									<li key={idx} className="leading-relaxed">
										{bullet}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			{/* Full Changelog Modal */}
			<Transition.Root show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-50 overflow-y-auto"
					onClose={setIsOpen}
				>
					<div className="min-h-screen px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-200"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-150"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity" />
						</Transition.Child>

						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true"
						>
							&#8203;
						</span>

						<Transition.Child
							as={Fragment}
							enter="ease-out duration-200"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-150"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl border border-slate-200">
								<div className="flex items-center justify-between pb-4 border-b border-slate-100">
									<div className="flex items-center gap-2.5">
										<div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
											<DocumentTextIcon className="w-4 h-4" />
										</div>
										<Dialog.Title
											as="h3"
											className="text-lg font-bold text-slate-900"
										>
											{__( "Changelog", "boostify-blocks" )}
										</Dialog.Title>
									</div>
									<button
										type="button"
										onClick={() => setIsOpen(false)}
										className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
									>
										<XMarkIcon className="w-5 h-5" />
									</button>
								</div>

								<div className="mt-4 max-h-[60vh] overflow-y-auto space-y-6 pr-2">
									{changelog.map((entry) => (
										<div
											key={entry.version}
											className="border-b border-slate-100 pb-4 last:border-b-0"
										>
											<div className="flex items-center gap-2 mb-2">
												<span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-blue-50 text-blue-700">
													v{entry.version}
												</span>
											</div>
											<ul className="space-y-1.5 pl-5 text-sm text-slate-600 list-disc marker:text-slate-400">
												{entry.items.map((bullet, idx) => (
													<li key={idx} className="leading-relaxed">
														{bullet}
													</li>
												))}
											</ul>
										</div>
									))}
								</div>

								<div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
									<button
										type="button"
										onClick={() => setIsOpen(false)}
										className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl cursor-pointer"
									>
										{__( "Close", "boostify-blocks" )}
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
};

export default WhatsNewCard;

