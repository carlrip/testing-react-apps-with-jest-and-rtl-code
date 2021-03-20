import React from "react";
import { useForm } from "react-hook-form";
import { post } from "./data";
import "./AttachmentForm.css";

export function AttachmentForm() {
  const [fileName, setFileName] = React.useState("");
  const { register, handleSubmit, formState } = useForm();

  async function onSubmit(data) {
    await post(data);
    setFileName(data.attachment[0].name);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="form">
      <div className="row">
        <label htmlFor="attachment">Attachment</label>
        <input type="file" id="attachment" name="attachment" ref={register()} />
      </div>
      <button type="submit">Save</button>
      {formState.isSubmitSuccessful && (
        <p className="success-message">Successfully saved {fileName}</p>
      )}
    </form>
  );
}
