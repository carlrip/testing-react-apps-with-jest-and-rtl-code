import React from "react";
import ReactDOM from "react-dom";
import { Hello } from "./Hello";
import { YouAre } from "./YouAre";

ReactDOM.render(
  <React.StrictMode>
    <Hello id={1} />
    <YouAre id={1} />
  </React.StrictMode>,
  document.getElementById("root")
);
