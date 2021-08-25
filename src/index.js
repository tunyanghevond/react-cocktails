import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppPrivider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppPrivider>
      <App />
    </AppPrivider>
  </React.StrictMode>,
  document.getElementById("root")
);
