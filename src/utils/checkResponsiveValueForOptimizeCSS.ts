const checkResponsiveValueForOptimizeCSS = ({
	mobile_v = null,
	tablet_v = null,
	desktop_v = null,
}: {
	mobile_v?: string | number | null;
	tablet_v?: string | number | null;
	desktop_v?: string | number | null;
}) => {
	let new_tablet_v = tablet_v;
	let new_desktop_v = desktop_v;

	// If all values are the same, only keep mobile
	if (mobile_v === tablet_v && tablet_v === desktop_v) {
		return {
			mobile_v,
			tablet_v: null,
			desktop_v: null,
		};
	}

	// If tablet equals mobile, don't output tablet CSS (let it cascade naturally)
	if (tablet_v === mobile_v) {
		new_tablet_v = null;
	}

	// If desktop equals tablet OR mobile, don't output desktop CSS  
	if (desktop_v === tablet_v || desktop_v === mobile_v) {
		new_desktop_v = null;
	}

	return {
		mobile_v: mobile_v ?? null,
		tablet_v: new_tablet_v ?? null,
		desktop_v: new_desktop_v ?? null,
	};
};

export default checkResponsiveValueForOptimizeCSS;
