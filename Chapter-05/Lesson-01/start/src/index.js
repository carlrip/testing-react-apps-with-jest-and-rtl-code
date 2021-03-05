import React from "react";
import ReactDOM from "react-dom";
import { PersonPage } from "./PersonPage";

ReactDOM.render(
  <React.StrictMode>
    <PersonPage id={1} />
  </React.StrictMode>,
  document.getElementById("root")
);
