import React from "react";
import css from "./ErrorMessage.module.css";
import cross from "./cross.png";

export function ErrorMessage({ message }) {
  return (
    <div className={css.saveerror}>
      <img src={cross} alt="cross" />
      {message}
    </div>
  );
}
