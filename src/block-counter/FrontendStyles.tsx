import React, { FC } from "react";
import { WcbAttrsForSave } from "./Save";
import GlobalCss from "./GlobalCss";

interface Props extends WcbAttrsForSave {}

const FrontendStyles: FC<Props> = (attrs) => {
    return <GlobalCss {...attrs} />;
};

export default FrontendStyles;
