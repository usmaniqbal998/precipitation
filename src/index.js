import React from "react";
import ReactDOM from "react-dom";
import { injectStyle } from "react-toastify/dist/inject-style";
import App from "./components/App";
import "regenerator-runtime/runtime";

//  inject toast styles only once in app
if (typeof window !== "undefined") {
  injectStyle();
}

ReactDOM.render(<App />, document.getElementById("root"));
