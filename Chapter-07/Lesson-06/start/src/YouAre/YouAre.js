import React from "react";
import { getUserRole } from "../data";

export function YouAre({ id }) {
  const [role, setRole] = React.useState();

  React.useEffect(() => {
    getUserRole(id)?.then((r) => setRole(r.role));
  }, []);

  if (role === undefined) {
    return null;
  }
  return <p>you are a ${role}</p>;
}
