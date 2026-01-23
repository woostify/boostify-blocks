import React from "react";
import * as ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import HeaderToolBarPatterns from "./HeaderToolBarPatterns";
import "./editor.scss";

const client = new ApolloClient({
	uri: "https://boostify-blocks.com/graphql",
	cache: new InMemoryCache(),
});

const App = () => {
	if (wcbGlobalVariables?.enableTemplatesButton === "false") {
		return null;
	}

	return (
		<>
			<HeaderToolBarPatterns />
		</>
	);
};

const domObserver = new MutationObserver(() => {
	const modalRoot = document.querySelector(
		".edit-post-header__toolbar .edit-post-header-toolbar"
	);

	if (modalRoot) {
		// ko disconect vi toolbar co the re-render dan den bi mat nut cua minh
		// domObserver.disconnect();

		if (!document.getElementById("bcb-block-templates-button-wrap")) {
			let newDiv = document.createElement("div");
			newDiv.setAttribute("id", "bcb-block-templates-button-wrap");
			modalRoot.appendChild(newDiv);
			ReactDOM.render(
				<ApolloProvider client={client}>
					<App />
				</ApolloProvider>,
				newDiv
			);
		}
	}
});

domObserver.observe(document.body || document, {
	childList: true,
	subtree: true,
});

//

export default App;
