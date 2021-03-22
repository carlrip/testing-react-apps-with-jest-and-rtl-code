import React from "react";
import { Tooltip } from "../common/Tooltip";
import { getPersonSummary } from "./data";

export function ViewPersonButton({ personId }) {
  const [summary, setSummary] = React.useState("");

  React.useEffect(() => {
    let cancel = false;
    async function getSummary() {
      const personSummary = await getPersonSummary(personId);
      if (!cancel) {
        setSummary(personSummary);
      }
    }
    getSummary();
    return () => {
      cancel = true;
    };
  }, []);

  return (
    <Tooltip content={summary}>
      <button>View</button>
    </Tooltip>
  );
}
