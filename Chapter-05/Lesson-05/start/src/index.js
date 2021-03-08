import React from "react";
import ReactDOM from "react-dom";
import { Message } from "./Message";

ReactDOM.render(
  <React.StrictMode>
    <Message message="Successfully saved" />
    <Message message="A problem has occurred" type="error" />
  </React.StrictMode>,
  document.getElementById("root")
);
