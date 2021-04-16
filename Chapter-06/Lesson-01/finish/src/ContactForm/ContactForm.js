import React from "react";
import { useForm } from "react-hook-form";
import { post } from "./data";
import "./ContactForm.css";

export function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    formState,
  } = useForm();

  async function onSubmit(data) {
    console.log("onSubmit");
    await post(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="form">
      <div className="row">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          {...register("name", { required: true })}
        />
        {errors.name && errors.name.type === "required" && (
          <span className="field-error">You must enter your name</span>
        )}
      </div>
      <div className="row">
        <label htmlFor="department">Department</label>
        <select
          type="text"
          id="department"
          name="department"
          {...register("department")}
        >
          <option value="sales">Sales</option>
          <option value="support">Support</option>
          <option value="finance">Finance</option>
        </select>
      </div>
      <div className="row">
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          {...register("message", { required: true })}
        />
        {errors.message && errors.message.type === "required" && (
          <span className="field-error">You must enter a message</span>
        )}
      </div>
      <button type="submit" onMouseDown={() => console.log("mouseDown")}>
        Save
      </button>
      {formState.isSubmitSuccessful && (
        <p className="success-message">Successfully saved</p>
      )}
    </form>
  );
}
