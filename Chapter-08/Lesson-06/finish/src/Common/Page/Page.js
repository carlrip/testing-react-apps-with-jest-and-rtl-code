import React from "react";
import css from "./Page.module.css";

export function Page({ title, children }) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
}
