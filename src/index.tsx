import CssBaseline from "@material-ui/core/CssBaseline";
import { ConnectedRouter } from "connected-react-router";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { history } from "utils";
import App from "./App";
import { store } from "./app/store";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CssBaseline />
        <App />
      </ConnectedRouter>

      <ToastContainer position='bottom-left' />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
