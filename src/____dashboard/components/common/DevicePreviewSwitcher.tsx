import React, { FC } from "react";
import { __ } from "@wordpress/i18n";
import {
	ComputerDesktopIcon,
	DevicePhoneMobileIcon,
	DeviceTabletIcon,
} from "@heroicons/react/24/outline";
import { PreviewDevice } from "../../types";

interface DevicePreviewSwitcherProps {
	device: PreviewDevice;
	onChange: (device: PreviewDevice) => void;
	devices?: PreviewDevice[];
	deviceWidths?: Record<PreviewDevice, number>;
}

/**
 * Reusable segmented control for toggling responsive preview viewports.
 */
const DevicePreviewSwitcher: FC<DevicePreviewSwitcherProps> = ({
	device,
	onChange,
	devices = ["desktop", "tablet", "mobile"],
	deviceWidths = { desktop: 1200, tablet: 768, mobile: 390 },
}) => {
	const allOptions: Record<PreviewDevice, { label: string; icon: React.ReactNode }> = {
		desktop: {
			label: `${__("Desktop", "boostify-blocks")} (${deviceWidths.desktop}px)`,
			icon: <ComputerDesktopIcon width={17} height={17} />,
		},
		tablet: {
			label: `${__("Tablet", "boostify-blocks")} (${deviceWidths.tablet}px)`,
			icon: <DeviceTabletIcon width={17} height={17} />,
		},
		mobile: {
			label: `${__("Mobile", "boostify-blocks")} (${deviceWidths.mobile}px)`,
			icon: <DevicePhoneMobileIcon width={17} height={17} />,
		},
	};

	const options = devices.map((id) => ({ id, ...allOptions[id] }));

	return (
		<div
			className="bb-demo-device-switcher"
			role="group"
			aria-label={__("Preview device", "boostify-blocks")}
		>
			{options.map((opt) => (
				<button
					key={opt.id}
					type="button"
					onClick={() => onChange(opt.id)}
					title={opt.label}
					aria-label={opt.label}
					aria-pressed={device === opt.id}
					className={`bb-demo-device-btn ${device === opt.id ? "is-active" : ""}`}
				>
					{opt.icon}
				</button>
			))}
		</div>
	);
};

export default DevicePreviewSwitcher;
