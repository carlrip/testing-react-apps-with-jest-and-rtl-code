import React from "react";
import ReactDOM from "react-dom";
import { ErrorMessage } from "./ErrorMessage";

ReactDOM.render(
  <React.StrictMode>
    <ErrorMessage message="A problem" />
  </React.StrictMode>,
  document.getElementById("root")
);
