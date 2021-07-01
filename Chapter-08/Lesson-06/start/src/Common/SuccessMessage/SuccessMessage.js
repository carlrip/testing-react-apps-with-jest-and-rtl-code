import React from "react";
import css from "./SuccessMessage.module.css";
import tick from "./tick.png";

export function SuccessMessage({ message }) {
  return (
    <div className={css.savesuccess}>
      <img src={tick} alt="tick" />
      {message}
    </div>
  );
}
