import React from "react";
import { useForm } from "react-hook-form";
import { search } from "./data";
import "./SearchForm.css";

export function SearchForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const [results, setResults] = React.useState([]);

  async function onSubmit({ criteria }) {
    setResults(await search(criteria));
  }

  function handleClear() {
    setResults([]);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="form">
      <div className="row">
        <input
          type="search"
          name="criteria"
          placeholder="Enter search criteria"
          {...register("criteria", { required: true })}
        />
        <button type="submit">Search</button>
      </div>
      {formState.errors.criteria &&
        formState.errors.criteria.type === "required" && (
          <div className="field-error">You must enter some search criteria</div>
        )}
      {formState.isSubmitting && <p>Searching ...</p>}
      <div className="row">
        {results.map((result) => (
          <div key={result}>{result}</div>
        ))}
      </div>
      {results.length === 0 && formState.isSubmitSuccessful && (
        <p>None found</p>
      )}
      {results.length > 0 && formState.isSubmitSuccessful && (
        <button onClick={handleClear}>Clear</button>
      )}
    </form>
  );
}
