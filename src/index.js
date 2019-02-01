import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import store from "./store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { globalStyles } from "./ui/theme";

const GlobalStyle = createGlobalStyle`${styledNormalize}${globalStyles} `;

const render = () => {
    ReactDOM.render(
        <ReduxProvider store={store}>
            <App />
            <GlobalStyle />
        </ReduxProvider>,
        document.getElementById("root")
    );
};

render();

if (module.hot) {
    module.hot.accept(["./App", "./store"], render);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
