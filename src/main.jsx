import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { store } from "./reducer/store";
import { Provider } from "react-redux";
import "./main.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
