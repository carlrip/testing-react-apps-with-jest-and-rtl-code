import React from "react";
import { useForm } from "react-hook-form";
import { post } from "./data";
import "./AttachmentForm.css";

export function AttachmentForm() {
  const [fileNames, setFileNames] = React.useState("");
  const { register, handleSubmit, formState } = useForm();

  async function onSubmit(data) {
    await post(data);
    setFileNames(
      Array.from(data.attachment)
        .map((att) => att.name)
        .join(", ")
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="form">
      <div className="row">
        <label htmlFor="attachment">Attachment</label>
        <input
          type="file"
          multiple
          disabled={formState.isSubmitSuccessful}
          id="attachment"
          name="attachment"
          {...register("attachment")}
        />
      </div>
      <button type="submit" disabled={formState.isSubmitSuccessful}>
        Upload
      </button>
      {formState.isSubmitSuccessful && (
        <p className="success-message">Successfully uploaded {fileNames}</p>
      )}
    </form>
  );
}
