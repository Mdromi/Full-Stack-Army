import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);

// for store 2
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <StoreProvider store={store}>
//     <App />
//   </StoreProvider>
// );

// For store 1
// import store from "./store2";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
