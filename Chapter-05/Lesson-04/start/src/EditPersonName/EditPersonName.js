import React from "react";
import { useForm } from "react-hook-form";
import { getPerson, updateName } from "./personData";
import "./EditPersonName.css";

export function EditPersonName({ id }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loading, setLoading] = React.useState(true);
  const [person, setPerson] = React.useState(undefined);
  const [saved, setSaved] = React.useState(false);

  React.useEffect(() => {
    let cancel = false;
    async function get() {
      const data = await getPerson(id);
      if (!cancel) {
        setPerson(data);
        setLoading(false);
      }
    }
    get();
    return () => {
      cancel = true;
    };
  }, [id]);

  async function onSubmit(data) {
    await updateName({
      id,
      firstName: data.firstName,
      lastName: data.lastName,
    });
    setSaved(true);
  }

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="edit-person-name"
    >
      <div className="row">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter first name"
          defaultValue={person.firstName}
          {...register("firstName", { required: true })}
        />
        {errors.firstName && errors.firstName.type === "required" && (
          <span className="field-error">You must enter the first name</span>
        )}
      </div>
      <div className="row">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter last name"
          defaultValue={person.lastName}
          {...register("lastname")}
        />
      </div>
      <button type="submit">Save</button>
      {saved && <p className="success-message">Successfully saved</p>}
    </form>
  );
}
