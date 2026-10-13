import { css, CSSObject } from "@emotion/react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { BorderRadiusSettings } from "../components/controls/MyBorderControl/types";
import { DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES } from "../________";
import getValueFromAttrsResponsives from "./getValueFromAttrsResponsives";
import checkResponsiveValueForOptimizeCSS from "./checkResponsiveValueForOptimizeCSS";

interface Params {
    radius: HasResponsive<BorderRadiusSettings>;
    className: string;
	isWithIframe?: boolean;
}

const getBorderRadiusStyles = ({ className, radius, isWithIframe = false }: Params): CSSObject => {
    const { media_desktop, media_tablet } = DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;

    let {
        value_Desktop: radiusDesktop,
        value_Tablet: radiusTablet,
        value_Mobile: radiusMobile,
    } = getValueFromAttrsResponsives(radius);

    const converttted = (radiusValue?: BorderRadiusSettings | null) => {
        let newradiusValue = radiusValue;
        if (typeof radiusValue === "string") {
            newradiusValue = {
                bottomLeft: radiusValue,
                bottomRight: radiusValue,
                topLeft: radiusValue,
                topRight: radiusValue,
            };
        } else {
            newradiusValue = {
                bottomLeft: radiusValue?.bottomLeft,
                bottomRight: radiusValue?.bottomRight,
                topLeft: radiusValue?.topLeft,
                topRight: radiusValue?.topRight,
            };
        }

        return newradiusValue;
    };

    radiusDesktop = converttted(radiusDesktop);
    radiusTablet = converttted(radiusTablet);
    radiusMobile = converttted(radiusMobile);

    const {
        mobile_v: mobile_v_topLeft,
        tablet_v: tablet_v_topLeft,
        desktop_v: desktop_v_topLeft,
    } = checkResponsiveValueForOptimizeCSS({
        mobile_v: radiusMobile?.topLeft,
        tablet_v: radiusTablet?.topLeft,
        desktop_v: radiusDesktop?.topLeft,
    });
    const {
        mobile_v: mobile_v_topRight,
        tablet_v: tablet_v_topRight,
        desktop_v: desktop_v_topRight,
    } = checkResponsiveValueForOptimizeCSS({
        mobile_v: radiusMobile?.topRight,
        tablet_v: radiusTablet?.topRight,
        desktop_v: radiusDesktop?.topRight,
    });
    const {
        mobile_v: mobile_v_bottomRight,
        tablet_v: tablet_v_bottomRight,
        desktop_v: desktop_v_bottomRight,
    } = checkResponsiveValueForOptimizeCSS({
        mobile_v: radiusMobile?.bottomRight,
        tablet_v: radiusTablet?.bottomRight,
        desktop_v: radiusDesktop?.bottomRight,
    });
    const {
        mobile_v: mobile_v_bottomLeft,
        tablet_v: tablet_v_bottomLeft,
        desktop_v: desktop_v_bottomLeft,
    } = checkResponsiveValueForOptimizeCSS({
        mobile_v: radiusMobile?.bottomLeft,
        tablet_v: radiusTablet?.bottomLeft,
        desktop_v: radiusDesktop?.bottomLeft,
    });

    // Check if className is for iframe
    const applyImportant = isWithIframe ? " !important" : "";
    const formatRadius = (val?: string | number | null) => (val && val !== "0" && val !== "0px" && val !== 0 ? `${val}${applyImportant}` : undefined);

    const mobileStyles: CSSObject = {};
    const tl_m = formatRadius(mobile_v_topLeft);
    const tr_m = formatRadius(mobile_v_topRight);
    const br_m = formatRadius(mobile_v_bottomRight);
    const bl_m = formatRadius(mobile_v_bottomLeft);
    if (tl_m) mobileStyles.borderTopLeftRadius = tl_m;
    if (tr_m) mobileStyles.borderTopRightRadius = tr_m;
    if (br_m) mobileStyles.borderBottomRightRadius = br_m;
    if (bl_m) mobileStyles.borderBottomLeftRadius = bl_m;

    const tl_t = formatRadius(tablet_v_topLeft);
    const tr_t = formatRadius(tablet_v_topRight);
    const br_t = formatRadius(tablet_v_bottomRight);
    const bl_t = formatRadius(tablet_v_bottomLeft);
    if (tl_t || tr_t || br_t || bl_t) {
        mobileStyles[`@media (min-width: ${media_tablet})`] = {
            ...(tl_t ? { borderTopLeftRadius: tl_t } : {}),
            ...(tr_t ? { borderTopRightRadius: tr_t } : {}),
            ...(br_t ? { borderBottomRightRadius: br_t } : {}),
            ...(bl_t ? { borderBottomLeftRadius: bl_t } : {}),
        };
    }

    const tl_d = formatRadius(desktop_v_topLeft);
    const tr_d = formatRadius(desktop_v_topRight);
    const br_d = formatRadius(desktop_v_bottomRight);
    const bl_d = formatRadius(desktop_v_bottomLeft);
    if (tl_d || tr_d || br_d || bl_d) {
        mobileStyles[`@media (min-width: ${media_desktop})`] = {
            ...(tl_d ? { borderTopLeftRadius: tl_d } : {}),
            ...(tr_d ? { borderTopRightRadius: tr_d } : {}),
            ...(br_d ? { borderBottomRightRadius: br_d } : {}),
            ...(bl_d ? { borderBottomLeftRadius: bl_d } : {}),
        };
    }

    if (Object.keys(mobileStyles).length === 0) {
        return {};
    }

    return {
        [`${className}`]: mobileStyles,
    };
};

export default getBorderRadiusStyles;