import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AddProductProvider } from "./context/AddProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AddProductProvider>
    <App />
  </AddProductProvider>
);
