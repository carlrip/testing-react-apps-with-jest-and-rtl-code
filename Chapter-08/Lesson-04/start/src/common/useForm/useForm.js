import React from "react";

export function useForm() {
  const [values, setValues] = React.useState({});

  function register(name) {
    return {
      onChange: (e) => {
        setValues((v) => ({ ...v, [name]: e.target.value }));
      },
    };
  }

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    callback(values);
  };

  return {
    values,
    register,
    handleSubmit,
  };
}
