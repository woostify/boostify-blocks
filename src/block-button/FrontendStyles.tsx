import React, { FC, Suspense } from "react";
import ReactDOM from "react-dom";
import { WcbAttrs } from "./attributes";
import GlobalCssButton from "./GlobalCss";

const GlobalCssCTALazy = React.lazy(() => import("../block-cta/GlobalCss"));

interface Props extends WcbAttrs {}

// const FrontendStyles: FC<Props> = (attrs) => {
// 	return <GlobalCss {...attrs} />;
// };

//
const divsToUpdateButton = document.querySelectorAll(
	".bcb-button__wrap.bcb-update-div"
);
const divsToUpdateCTA = document.querySelectorAll(
	".bcb-cta__wrap.bcb-update-div"
);

xxxxxxxxxxxxxx(divsToUpdateButton, GlobalCssButton);
xxxxxxxxxxxxxx(divsToUpdateCTA, GlobalCssCTALazy);

function xxxxxxxxxxxxxx(divsToUpdate, GlobalCss) {
	console.log(111);

	divsToUpdate.forEach((div) => {
		const preEl = div.querySelector(
			`pre[data-bcb-block-attrs=${div.id}]`
		) as HTMLElement | null;

		const divRenderCssEl = div.querySelector(
			`div[data-bcb-global-styles=${div.id}]`
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
		div.classList.remove("bcb-update-div");
		preEl.remove();
	});
}
