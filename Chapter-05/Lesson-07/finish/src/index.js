import React from "react";
import ReactDOM from "react-dom";
import { Table } from "./Table";

ReactDOM.render(
  <React.StrictMode>
    <Table
      data={[
        { name: "Fred", score: 8 },
        { name: "Jane", score: 10 },
        { name: "Sue", score: 7 },
      ]}
      columns={[
        { name: "name", caption: "Name" },
        { name: "score", caption: "Score", align: "right" },
      ]}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
