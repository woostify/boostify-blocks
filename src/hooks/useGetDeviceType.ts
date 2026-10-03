import { useSelect } from "@wordpress/data";

export type ResponsiveDevices = "Desktop" | "Tablet" | "Mobile";

const normalizeDeviceType = (val: any): ResponsiveDevices | null => {
	if (!val) return null;
	const lower = String(val).toLowerCase();
	if (lower === "mobile") return "Mobile";
	if (lower === "tablet") return "Tablet";
	if (lower === "desktop") return "Desktop";
	return null;
};

const useGetDeviceType = (): ResponsiveDevices | null => {
	const { deviceType } = useSelect((select) => {
		const editorSelect = (select as any)("core/editor");
		const editPostSelect = (select as any)("core/edit-post");

		const rawType =
			editorSelect?.getDeviceType?.() ||
			editPostSelect?.__experimentalGetPreviewDeviceType?.() ||
			null;

		return {
			deviceType: normalizeDeviceType(rawType),
		};
	}, []);

	return deviceType;
};

export default useGetDeviceType;

