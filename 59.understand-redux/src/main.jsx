import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { StoreProvider } from "easy-peasy";

import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);

// For store 1
// import store from "./store2";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
