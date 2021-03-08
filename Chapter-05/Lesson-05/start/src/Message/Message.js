import React from "react";
import "./Message.css";
import cross from "./cross.png";
import tick from "./tick.png";

export function Message({ message, type = "success" }) {
  if (type === "error") {
    return (
      <div className="error">
        <img src={cross} alt="cross" title="cross" />
        {message}
      </div>
    );
  }
  return (
    <div className="success">
      <img src={tick} alt="tick" title="tick" />
      {message}
    </div>
  );
}
