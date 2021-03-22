import React from "react";
import ReactDOM from "react-dom";
import { ViewPersonButton } from "./ViewPersonButton";

ReactDOM.render(
  <React.StrictMode>
    <ViewPersonButton personId={1} />
  </React.StrictMode>,
  document.getElementById("root")
);
