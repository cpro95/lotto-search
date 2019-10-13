import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Themes from "./themes";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <App />
      </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
