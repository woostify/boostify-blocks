import React, { FC } from "react";
import DisplayConditionsControls, {
	DisplayConditionsProps,
} from "../../../extensions/display-conditions/DisplayConditionsControls";

export type MyDisplayConditionsAttributes = NonNullable<DisplayConditionsProps["attributes"]>;

const MyDisplayConditionsControl: FC<DisplayConditionsProps> = (props) => {
	return <DisplayConditionsControls {...props} showHeader={false} />;
};

export default MyDisplayConditionsControl;

