import React from "react";
import css from "./Table.module.css";

export function Table({
  data,
  columns,
  keyColumnName,
}) {
  return (
    <table role="table" className={css.table}>
      <thead>
        <tr role="row">
          {columns.map(({ name, caption, align = "left" }) => (
            <th
              key={name}
              role="columnheader"
              style={{ textAlign: align }}
            >
              {caption}
            </th>
          ))}
        </tr>
      </thead>
      <tbody role="rowgroup">
        {data.map((row, i) => {
          const key = getKey(row, keyColumnName, i);
          return (
            <tr key={key} role="row">
              {columns.map(({ name, align = "left" }) => (
                <td
                  key={name}
                  role="cell"
                  style={{ textAlign: align }}
                >
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

export function getKey(
  row,
  keyColumnName,
  columnIndex
) {
  const key = keyColumnName
    ? ((row[keyColumnName]))
    : columnIndex;
  return key;
}
