import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
