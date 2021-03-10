import React from "react";
import "./Table.css";

export function Table({ data, columns }) {
  return (
    <table role="table" className="table">
      <thead>
        <tr role="row">
          {columns.map(({ name, caption, align = "left" }) => (
            <th key={name} role="columnheader" style={{ textAlign: align }}>
              {caption}
            </th>
          ))}
        </tr>
      </thead>
      <tbody role="rowgroup">
        {data.map((row, i) => {
          return (
            <tr key={i} role="row">
              {columns.map(({ name, align = "left" }) => (
                <td key={name} role="cell" style={{ textAlign: align }}>
                  {row[name]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
