import React from "react";
import { useForm } from "react-hook-form";
import { addPerson } from "./data";
import css from "./PersonForm.module.css";

export function PersonForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const [saveResult, setSaveResult] = React.useState("not saved");

  async function onSubmit(data) {
    const dataToPost = { ...data, score: parseInt(data.score, 10) };
    const result = await addPerson(dataToPost);
    setSaveResult(result.ok ? "success" : "error");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={css.form}>
      <div className={css.row}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name && errors.name.type === "required" && (
          <span className={css.fielderror}>You must enter your name</span>
        )}
      </div>
      <div className={css.row}>
        <label htmlFor="score">Score</label>
        <input
          type="number"
          id="score"
          name="score"
          {...register("score", { required: true, min: 0, max: 10 })}
        />
        {errors.score &&
          (errors.score.type === "required" ||
            errors.score.type === "min" ||
            errors.score.type === "max") && (
            <span className={css.fielderror}>
              You must enter a score between 0 and 10
            </span>
          )}
      </div>
      <button type="submit" disabled={isSubmitting}>
        Save
      </button>
      {saveResult === "success" && (
        <p className={css.successmessage}>The person was successfully added</p>
      )}
      {saveResult === "error" && (
        <p className={css.errormessage}>
          There was a problem adding this person
        </p>
      )}
    </form>
  );
}
