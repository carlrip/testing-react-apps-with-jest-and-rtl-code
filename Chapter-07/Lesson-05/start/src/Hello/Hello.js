import React from "react";
import { getUser, getUserRole } from "./data";

export function Hello({ id }) {
  const [user, setUser] = React.useState();
  const [role, setRole] = React.useState();

  React.useEffect(() => {
    getUser(id)?.then((u) => setUser(u));
    getUserRole(id)?.then((r) => setRole(r.role));
  }, []);

  if (user === undefined) {
    return null;
  }
  return (
    <p>
      Hello {user.name}
      {role === undefined ? "" : `, you are a ${role}`}
    </p>
  );
}
