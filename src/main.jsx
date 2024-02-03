import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Windmill } from "@windmill/react-ui";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Windmill>
    <App />
  </Windmill>
);
