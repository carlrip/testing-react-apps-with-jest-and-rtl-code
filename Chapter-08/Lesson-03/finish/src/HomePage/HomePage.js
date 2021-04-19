import React from "react";
import { useTitle } from "../common/useTitle"
import css from "./HomePage.module.css";

export function HomePage() {
  useTitle("My App - Home")
  return (
    <>
      <h3 className={css.title}>My App</h3>
    </>
  );
}
