import React, { FC, Suspense } from "react";
import ReactDOM from "react-dom";
import { WcbAttrs } from "./attributes";
import GlobalCssButton from "./GlobalCss";

interface Props extends WcbAttrs {}

// const FrontendStyles: FC<Props> = (attrs) => {
// 	return <GlobalCss {...attrs} />;
// };

//
const divsToUpdateButton = document.querySelectorAll(
	".wcb-button__wrap.wcb-update-div"
);

renderBlockGlobalStyles(divsToUpdateButton, GlobalCssButton);

function renderBlockGlobalStyles(divsToUpdate: NodeListOf<Element>, GlobalCss: React.ComponentType<any>) {
	divsToUpdate.forEach((div: any) => {
		const preEl = div.querySelector(
			`pre[data-wcb-block-attrs=${div.id}]`
		) as HTMLElement | null;

		const divRenderCssEl = div.querySelector(
			`div[data-wcb-global-styles=${div.id}]`
		) as HTMLElement | null;

		if (!preEl || !preEl.innerText || !divRenderCssEl) {
			return;
		}
		//
		const props = JSON.parse(preEl?.innerText);
		//

		ReactDOM.render(
			<Suspense fallback={<div />}>
				<GlobalCss {...props} />
			</Suspense>,
			divRenderCssEl
		);
		//
		div.classList.remove("wcb-update-div");
		preEl.remove();
	});
}
