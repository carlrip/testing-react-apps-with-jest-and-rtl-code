import React from "react";
import { useForm } from "../common/useForm";

export function Searchbox() {
  const { handleSubmit, register } = useForm();

  function onSubmit(data) {
    console.log("search for:", data.criteria);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("criteria")} placeholder="Search ..." />
    </form>
  );
}
