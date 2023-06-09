import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AppProvider } from "./Function/Context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />

        {/* <h1>Fents Luxury Hotel</h1> */}
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
