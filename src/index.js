import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./state/store";
import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
// const store = configureStore({ reducer: rootReducer });

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
